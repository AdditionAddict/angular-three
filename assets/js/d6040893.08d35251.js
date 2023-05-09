"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[624],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(4778),a=(n(9496),n(9613));const i={id:"ref",title:"Ref",sidebar_label:"Ref"},o=void 0,l={unversionedId:"api/ref",id:"api/ref",title:"Ref",description:"Ref is a concept borrowed from React, but with a little twist.",source:"@site/docs/api/ref.mdx",sourceDirName:"api",slug:"/api/ref",permalink:"/docs/api/ref",draft:!1,editUrl:"https://github.com/angular-threejs/angular-three/tree/main/apps/documentation/docs/api/ref.mdx",tags:[],version:"current",frontMatter:{id:"ref",title:"Ref",sidebar_label:"Ref"},sidebar:"docs",previous:{title:"NgtPush",permalink:"/docs/api/pipes/push"},next:{title:"Primitive",permalink:"/docs/api/primitive"}},c={},s=[{value:"<code>ViewChild</code> / <code>ContentChild</code>",id:"viewchild--contentchild",level:2},{value:"<code>injectNgtRef()</code>",id:"injectngtref",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ref is a concept borrowed from ",(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/referencing-values-with-refs"},"React"),", but with a little twist.\nIn THREE.js, it is common to mutate properties on an object rather than staying in the immutable lane that we're used to.\nAnd there are many sources that can mutate properties of the same object: THREE.js, Cannon.js (Physics engine), Animations (GSAP) etc..."),(0,a.kt)("p",null,"With that, NGT decides to implement the Ref concept."),(0,a.kt)("h2",{id:"viewchild--contentchild"},(0,a.kt)("inlineCode",{parentName:"h2"},"ViewChild")," / ",(0,a.kt)("inlineCode",{parentName:"h2"},"ContentChild")),(0,a.kt)("p",null,"We can get a hold of an object on the template using the good ol' ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewChild")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ContentChild")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Component({\n    template: `<ngt-mesh #mesh />`,\n})\nexport class SceneGraph {\n    @ViewChild('mesh', { static: true }) mesh!: ElementRef<Mesh>;\n}\n")),(0,a.kt)("p",null,"We can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewChildren")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"ContentChildren")," if we want to interact with the ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/api/core/QueryList"},"QueryList API"),"\ninstead."),(0,a.kt)("h2",{id:"injectngtref"},(0,a.kt)("inlineCode",{parentName:"h2"},"injectNgtRef()")),(0,a.kt)("p",null,"More than often, we want to define an ",(0,a.kt)("strong",{parentName:"p"},"external")," Ref that we can pass around. To do so, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"injectNgtRef()")," function\nto create a Ref."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Component({\n    template: `<ngt-mesh />`,\n})\nexport class SceneGraph {\n    // highlight-next-line\n    readonly ref = injectNgtRef<Mesh>();\n}\n")),(0,a.kt)("p",null,"Then, we pass our ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"[ref]")," Input on the element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Component({\n    template: `\n        // highlight-next-line\n        <ngt-mesh [ref]="ref" />\n    `,\n})\nexport class SceneGraph {\n    readonly ref = injectNgtRef();\n}\n')),(0,a.kt)("p",null,"The NGT Custom Renderer will assign the ",(0,a.kt)("inlineCode",{parentName:"p"},"Mesh")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref.nativeElement")," when it is available. ",(0,a.kt)("inlineCode",{parentName:"p"},"injectNgtRef()"),"\nreturns an ",(0,a.kt)("inlineCode",{parentName:"p"},"NgtInjectedRef<ObjectType>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Subscribe<T> = (callback: (current: T, previous: T | null) => void) => Subscription;\n\nexport type NgtInjectedRef<T> = ElementRef<T> & {\n    /* a Subscribe fn that emits current and previous value. Useful for debug */\n    subscribe: Subscribe<T>;\n    /* consumers should use this for listening to value of this ref. This filters out initial null value */\n    $: Observable<T>;\n    /* consumers should use this for listenting to children changes on this ref */\n    children$: (type?: 'objects' | 'nonObjects' | 'both') => Observable<NgtInstanceNode[]>;\n    /* notify this CD when ref value changes */\n    useCDR: (cdr: ChangeDetectorRef) => void;\n};\n")))}u.isMDXComponent=!0}}]);