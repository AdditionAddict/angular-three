"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[692],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(4778),i=(r(9496),r(9613));const a={id:"primitive",title:"Primitive",sidebar_label:"Primitive"},o=void 0,l={unversionedId:"api/primitive",id:"api/primitive",title:"Primitive",description:"There are occasions that we need to put already-exist 3D objects on our SceneGraph (eg: an external 3D model). For this,",source:"@site/docs/api/primitive.mdx",sourceDirName:"api",slug:"/api/primitive",permalink:"/docs/api/primitive",draft:!1,editUrl:"https://github.com/angular-threejs/angular-three/tree/main/apps/documentation/docs/api/primitive.mdx",tags:[],version:"current",frontMatter:{id:"primitive",title:"Primitive",sidebar_label:"Primitive"},sidebar:"docs",previous:{title:"Ref",permalink:"/docs/api/ref"},next:{title:"Raw Value",permalink:"/docs/api/raw-value"}},p={},c=[],s={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are occasions that we need to put already-exist 3D objects on our SceneGraph (eg: an external 3D model). For this,\nwe can use ",(0,i.kt)("inlineCode",{parentName:"p"},"<ngt-primitive>")," Custom Element tag as a placeholder for our 3D objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ngt-primitive *args="[object]" [position]="[1, 1, 1]" />\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ngt-primitive>")," always requires ",(0,i.kt)("inlineCode",{parentName:"li"},"*args")," with one item, the 3D object we want to put on the SceneGraph."),(0,i.kt)("li",{parentName:"ul"},"We can bind Inputs/Outputs to ",(0,i.kt)("inlineCode",{parentName:"li"},"<ngt-primitive>")," and those will be forwarded to the underlying 3D object."),(0,i.kt)("li",{parentName:"ul"},"NGT Custom Renderer ",(0,i.kt)("strong",{parentName:"li"},"does not")," dispose ",(0,i.kt)("inlineCode",{parentName:"li"},"<ngt-primitive>")," underlying 3D object on destroy, we have to do it manually."))),(0,i.kt)("p",null,"A more realistic use-case is to load a 3D model into our SceneGraph"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@Component({\n    template: ` <ngt-primitive *args="[model$ | ngtPush]" [scale]="0.01" /> `,\n    imports: [NgtArgs, NgtPush],\n})\nexport class SceneGraph {\n    readonly model$ = injectNgtLoader(GLTFLoader, \'assets/model.glb\').pipe(map((model) => model.scene));\n}\n')))}m.isMDXComponent=!0}}]);