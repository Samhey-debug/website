"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||l;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"$arrayConcat",description:"$arrayConcat will concat multiple arrays.",id:"arrayConcat"},o=void 0,i={unversionedId:"functions/array-related/arrayConcat",id:"version-6.3.0/functions/array-related/arrayConcat",title:"$arrayConcat",description:"$arrayConcat will concat multiple arrays.",source:"@site/versioned_docs/version-6.3.0/functions/array-related/arrayConcat.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayConcat",permalink:"/docs/functions/array-related/arrayConcat",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011381,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$arrayConcat",description:"$arrayConcat will concat multiple arrays.",id:"arrayConcat"},sidebar:"docs",previous:{title:"$arrayAt",permalink:"/docs/functions/array-related/arrayAt"},next:{title:"$arrayEvery",permalink:"/docs/functions/array-related/arrayEvery"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$arrayConcat")," will concat multiple arrays."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$arrayConcat[separator;...arrays]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"separator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Separator."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"...arrays"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the array."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"This is a test")," as it concats array 1 and 2:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'arrayConcat',\n    code: `\n  $arrayConcat[ ;test1;test2]\n  $createArray[array1;This is]\n  $createArray[array2;a test]\n  `\n});\n")))}y.isMDXComponent=!0}}]);