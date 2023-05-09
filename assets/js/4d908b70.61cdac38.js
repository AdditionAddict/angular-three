"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[191],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),N=r,k=s["".concat(o,".").concat(N)]||s[N]||u[N]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(4778),r=(n(9496),n(9613));const l={id:"canvas",title:"Canvas",sidebar_label:"Canvas"},i=void 0,p={unversionedId:"api/canvas",id:"api/canvas",title:"Canvas",description:"The root of a NGT 3D scene is the NgtCanvas component",source:"@site/docs/api/canvas.mdx",sourceDirName:"api",slug:"/api/canvas",permalink:"/docs/api/canvas",draft:!1,editUrl:"https://github.com/angular-threejs/angular-three/tree/main/apps/documentation/docs/api/canvas.mdx",tags:[],version:"current",frontMatter:{id:"canvas",title:"Canvas",sidebar_label:"Canvas"},sidebar:"docs",previous:{title:"First Scene",permalink:"/docs/getting-started/first-scene"},next:{title:"Custom Renderer",permalink:"/docs/api/custom-renderer"}},o={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Canvas defaults",id:"canvas-defaults",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The root of a NGT 3D scene is the ",(0,r.kt)("inlineCode",{parentName:"p"},"NgtCanvas")," component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ngt-canvas [sceneGraph]="SceneGraph" [camera]="cameraOptions" />\n')),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sceneGraph")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(required)")," A component that will be rendered as the Root THREE.Scene"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Type<any>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sceneGraphInputs"),(0,r.kt)("td",{parentName:"tr",align:null},"An object that will be used as Inputs for the ",(0,r.kt)("inlineCode",{parentName:"td"},"sceneGraph")," component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compoundPrefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of prefixes of HTML tags that NGT will treat as ",(0,r.kt)("a",{parentName:"td",href:"../advanced/compound"},"Compound")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gl"),(0,r.kt)("td",{parentName:"tr",align:null},"A THREE.js Renderer instance of options that go into the default Renderer. It also accepts a callback that returns a THREE.js Renderer instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NgtGLOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Dimensions to fit the THREE.js Renderer to. Will measure ",(0,r.kt)("inlineCode",{parentName:"td"},"<canvas>")," dimentions if omitted"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NgtSize")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shadows"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables PCFsoft shadows. Can accept ",(0,r.kt)("inlineCode",{parentName:"td"},"gl.shadowMap")," options for fine-tuning"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Partial<THREE.WebGLShadowMap>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables THREE.js r139 ColorManagement"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linear"),(0,r.kt)("td",{parentName:"tr",align:null},"Switch off automatic sRGB encoding and gamma correction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flat"),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"NoToneMapping")," instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"ACESFilmicToneMapping")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orthographic"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates an ",(0,r.kt)("inlineCode",{parentName:"td"},"OrthographicCamera")," instead"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frameloop"),(0,r.kt)("td",{parentName:"tr",align:null},"R3F's render mode. Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"demand")," to only render when there are changes to the Scene Graph"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"always"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"demand"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"never")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"always"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Performance options for adaptive environment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Partial<Omit<NgtPerformance, 'regress'>>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dpr"),(0,r.kt)("td",{parentName:"tr",align:null},"Target pixel ratio. Can clamp between a range ",(0,r.kt)("inlineCode",{parentName:"td"},"[min, max]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NgtDpr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[1, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"raycaster"),(0,r.kt)("td",{parentName:"tr",align:null},"Options that go into the default ",(0,r.kt)("inlineCode",{parentName:"td"},"Raycaster")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Partial<THREE.Raycaster>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"camera"),(0,r.kt)("td",{parentName:"tr",align:null},"A Camera instance or options that go into the default Camera"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/angular-threejs/angular-three/blob/main/libs/angular-three/src/lib/types.ts"},"check source")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},"R3F event manager to manage elements' pointer events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(store: NgtRxStore<NgtState>) => NgtEventManager<HTMLElement>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventSource"),(0,r.kt)("td",{parentName:"tr",align:null},"The target where events are bound to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLElement"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ElementRef<HTMLElement>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NgtCanvas")," host element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventPrefix"),(0,r.kt)("td",{parentName:"tr",align:null},"The event prefix that is cast into Canvas pointer x/y events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"client"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"layer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"screen")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lookAt"),(0,r.kt)("td",{parentName:"tr",align:null},"Default coordinate for the camera to look at"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"THREE.Vector3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Parameters<THREE.Vector3['set']>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type NgtGLRenderer = {\n    render: (scene: THREE.Scene, camera: THREE.Camera) => void;\n};\n\nexport type NgtGLOptions =\n    | NgtGLRenderer\n    | ((canvas: HTMLCanvasElement) => NgtGLRenderer)\n    | Partial<NgtProperties<THREE.WebGLRenderer> | THREE.WebGLRendererParameters>\n    | undefined;\n\nexport type NgtSize = {\n    width: number;\n    height: number;\n    top: number;\n    left: number;\n};\n\nexport interface NgtPerformance {\n    /** Current performance normal, between min and max */\n    current: number;\n    /** How low the performance can go, between 0 and max */\n    min: number;\n    /** How high the performance can go, between min and max */\n    max: number;\n    /** Time until current returns to max in ms */\n    debounce: number;\n    /** Sets current to min, puts the system in regression */\n    regress: () => void;\n}\n\nexport type NgtDpr = number | [min: number, max: number];\n")),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"Emits after the ",(0,r.kt)("inlineCode",{parentName:"td"},"NgtCanvas")," is created with all the internal building blocks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pointerMissed"),(0,r.kt)("td",{parentName:"tr",align:null},"If observed, NGT will set the internal ",(0,r.kt)("inlineCode",{parentName:"td"},"pointermissed")," event and will emit whenever the Raycaster missed an object")))),(0,r.kt)("h2",{id:"canvas-defaults"},"Canvas defaults"),(0,r.kt)("p",null,"NgtCanvas sets up a translucent ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.WebGLRenderer")," with the following constructor arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"antialias = ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"alpha = ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"powerReference = ",(0,r.kt)("inlineCode",{parentName:"li"},"'high-performance'"))),(0,r.kt)("p",null,"and the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"outputEncoding = ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.sRGBEncoding"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"toneMapping = ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.ACESFilmicToneMapping"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.PCFSoftShadowMap")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"shadows")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.PerspectiveCamera"),", or a ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.OrthographicCamera")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"orthographic")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.Scene"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.Raycaster"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"window:resize")," listener that will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.Renderer")," and `THREE.Camera`` when the container is resized."))),(0,r.kt)("p",null,"From THREE.js 0.139+, ",(0,r.kt)("inlineCode",{parentName:"p"},"THREE.ColorManagement.legacyMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to enable automatic conversion of colors\nbased on the Renderer's configured color space. For more on this topic, check ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/Color-management"},"THREE.js Color Management")))}s.isMDXComponent=!0}}]);