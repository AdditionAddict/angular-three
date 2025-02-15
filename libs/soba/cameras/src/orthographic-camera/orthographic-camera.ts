import { NgIf, NgTemplateOutlet } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ContentChild, Input, computed } from '@angular/core';
import { extend } from 'angular-three';
import { Group, OrthographicCamera } from 'three';
import { NgtsCamera } from '../camera/camera';
import { NgtsCameraContent } from '../camera/camera-content';

extend({ OrthographicCamera, Group });

declare module '../camera/camera' {
    interface NgtsCameraState {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
}

@Component({
    selector: 'ngts-orthographic-camera',
    standalone: true,
    template: `
        <ngt-orthographic-camera
            ngtCompound
            [ref]="cameraRef"
            [left]="cameraLeft()"
            [right]="cameraRight()"
            [top]="cameraTop()"
            [bottom]="cameraBottom()"
        >
            <ng-container
                *ngIf="cameraContent && !cameraContent.ngtsCameraContent"
                [ngTemplateOutlet]="cameraContent.template"
            />
        </ngt-orthographic-camera>
        <ngt-group #group *ngIf="cameraContent && cameraContent.ngtsCameraContent">
            <ng-container *ngTemplateOutlet="cameraContent.template; context: { fbo: fboRef(), group }" />
        </ngt-group>
    `,
    imports: [NgIf, NgTemplateOutlet],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgtsOrthographicCamera extends NgtsCamera<THREE.OrthographicCamera> {
    @ContentChild(NgtsCameraContent) cameraContent?: NgtsCameraContent;

    @Input() set left(left: number) {
        this.set({ left });
    }

    @Input() set right(right: number) {
        this.set({ right });
    }

    @Input() set top(top: number) {
        this.set({ top });
    }

    @Input() set bottom(bottom: number) {
        this.set({ bottom });
    }

    readonly #left = this.select('left');
    readonly #right = this.select('right');
    readonly #top = this.select('top');
    readonly #bottom = this.select('bottom');
    readonly #size = this.store.select('size');

    readonly cameraLeft = computed(() => this.#left() || this.#size().width / -2);
    readonly cameraRight = computed(() => this.#right() || this.#size().width / 2);
    readonly cameraTop = computed(() => this.#top() || this.#size().height / 2);
    readonly cameraBottom = computed(() => this.#bottom() || this.#size().height / -2);

    constructor() {
        super();
        this.set({ left: 0, right: 0, top: 0, bottom: 0 });
    }
}
