"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51757],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),y=n,m=f["".concat(c,".").concat(y)]||f[y]||s[y]||i;return t?a.createElement(m,o(o({ref:r},u),{},{components:t})):a.createElement(m,o({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81036:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={title:"$arrayShift",description:"$arrayShift will return the first item of the given array.",id:"arrayShift"},o=void 0,l={unversionedId:"functions/array/arrayShift",id:"functions/array/arrayShift",title:"$arrayShift",description:"$arrayShift will return the first item of the given array.",source:"@site/docs/functions/array/arrayShift.md",sourceDirName:"functions/array",slug:"/functions/array/arrayShift",permalink:"/docs/functions/array/arrayShift",draft:!1,tags:[],version:"current",frontMatter:{title:"$arrayShift",description:"$arrayShift will return the first item of the given array.",id:"arrayShift"},sidebar:"docs",previous:{title:"$arrayReverse",permalink:"/docs/functions/array/arrayReverse"},next:{title:"$arrayShuffle",permalink:"/docs/functions/array/arrayShuffle"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:p};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$arrayShift")," will return the first item of the given array."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$arrayShift[name]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Array name."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "array-shift",\n    code: `\n  $arrayShift[array]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}s.isMDXComponent=!0}}]);