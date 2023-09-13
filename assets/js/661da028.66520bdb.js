"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45916],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),y=n,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||l;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},86505:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>k});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(o)for(var t of o(r))s.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>l(e,i(r)),y=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayIncludes",description:"$arrayIncludes will check if a specific item exists in the array.",id:"arrayIncludes"},f=void 0,g={unversionedId:"functions/array-related/arrayIncludes",id:"version-6.4.0/functions/array-related/arrayIncludes",title:"$arrayIncludes",description:"$arrayIncludes will check if a specific item exists in the array.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/arrayIncludes.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayIncludes",permalink:"/docs/functions/array-related/arrayIncludes",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"$arrayIncludes",description:"$arrayIncludes will check if a specific item exists in the array.",id:"arrayIncludes"},sidebar:"docs",previous:{title:"$arrayForEach",permalink:"/docs/functions/array-related/arrayForEach"},next:{title:"$arrayIndexOf",permalink:"/docs/functions/array-related/arrayIndexOf"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},O="wrapper";function h(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,d(p(p({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayIncludes")," will check if a specific item exists in the array."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$arrayIncludes[name;query]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The element we will be queering for every element inside the array."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[array;Leref]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // It will return "false" as it doesn\'t contain the word "Leref".\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[array;akarui]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // It will return "true" as it contains the word "akarui".\n});\n')))}h.isMDXComponent=!0}}]);