import * as THREE from 'three';
import type { NgtAnyRecord, NgtInstanceNode } from '../types';
import { getLocalState, invalidateInstance } from './instance';
import { is } from './is';
import { checkUpdate } from './update';

function diffProps(instance: NgtAnyRecord, props: NgtAnyRecord) {
    const propsEntries = Object.entries(props);
    const changes: [key: string, value: unknown][] = [];

    for (const [propKey, propValue] of propsEntries) {
        if (is.equ(propValue, instance[propKey])) continue;
        changes.push([propKey, propValue]);
    }

    return changes;
}

export function applyProps(instance: NgtInstanceNode, props: NgtAnyRecord): NgtInstanceNode {
    // if props is empty
    if (!Object.keys(props).length) return instance;

    // filter equals, events , and reserved props
    const localState = getLocalState(instance);
    const rootState = localState.store?.get();
    const changes = diffProps(instance, props);

    for (let i = 0; i < changes.length; i++) {
        let key = changes[i][0];
        const currentInstance = instance;
        const targetProp = currentInstance[key] as NgtAnyRecord;
        let value = changes[i][1];

        if (is.colorSpaceExist(currentInstance)) {
            const sRGBEncoding = 3001;
            const SRGBColorSpace = 'srgb';
            const LinearSRGBColorSpace = 'srgb-linear';

            if (key === 'encoding') {
                key = 'colorSpace';
                value = value === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
            } else if (key === 'outputEncoding') {
                key = 'outputColorSpace';
                value = value === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
            }
        }

        // special treatmen for objects with support for set/copy, and layers
        if (targetProp && targetProp['set'] && (targetProp['copy'] || targetProp instanceof THREE.Layers)) {
            const isColor = targetProp instanceof THREE.Color;
            // if value is an array
            if (Array.isArray(value)) {
                if ((targetProp as NgtAnyRecord)['fromArray']) (targetProp as NgtAnyRecord)['fromArray'](value);
                else targetProp['set'](...value);
            }
            // test again target.copy
            else if (
                (targetProp as NgtAnyRecord)['copy'] &&
                value &&
                value.constructor &&
                targetProp.constructor.name === value.constructor.name
            ) {
                (targetProp as NgtAnyRecord)['copy'](value);
                if (!THREE.ColorManagement && !rootState.linear && isColor) targetProp['convertSRGBToLinear']();
            }
            // if nothing else fits, just set the single value, ignore undefined
            else if (value !== undefined) {
                const isColor = targetProp instanceof THREE.Color;
                // allow setting array scalars
                if (!isColor && (targetProp as NgtAnyRecord)['setScalar'])
                    (targetProp as NgtAnyRecord)['setScalar'](value);
                // layers have no copy function, copy the mask
                else if (targetProp instanceof THREE.Layers && value instanceof THREE.Layers)
                    targetProp.mask = value.mask;
                // otherwise just set ...
                else targetProp['set'](value);

                // auto-convert srgb
                if (!THREE.ColorManagement && !rootState?.linear && isColor) targetProp.convertSRGBToLinear();
            }
        }
        // else just overwrite the value
        else {
            currentInstance[key] = value;
            // auto-convert srgb textures
            if (
                currentInstance[key] instanceof THREE.Texture &&
                currentInstance[key].format === THREE.RGBAFormat &&
                currentInstance[key].type === THREE.UnsignedByteType
            ) {
                const texture = currentInstance[key] as THREE.Texture;
                if (is.colorSpaceExist(texture) && is.colorSpaceExist(rootState.gl))
                    texture.colorSpace = rootState.gl.outputColorSpace;
                else texture.encoding = rootState.gl.outputEncoding;
            }
        }

        checkUpdate(targetProp);
        invalidateInstance(instance);
    }

    const instanceHandlers = localState.eventCount;

    if (localState.parent && rootState.internal && instance['raycast'] && instanceHandlers !== localState.eventCount) {
        // pre-emptively remove the interaction from manager
        rootState.removeInteraction(instance['uuid']);
        // add the instance to the interaction manager only when it has handlers
        if (localState.eventCount) rootState.addInteraction(instance);
    }

    if (localState.parent && localState.afterUpdate && localState.afterUpdate.observed && changes.length) {
        localState.afterUpdate.emit(instance);
    }

    return instance;
}
