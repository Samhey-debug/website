"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,v=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>v,metadata:()=>y,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const v={title:"$eval",description:"Eval your Code, useful for debugging."},m=void 0,y={unversionedId:"functions/eval",id:"version-5.5.5/functions/eval",title:"$eval",description:"Eval your Code, useful for debugging.",source:"@site/versioned_docs/version-5.5.5/functions/eval.md",sourceDirName:"functions",slug:"/functions/eval",permalink:"/es/docs/5.5.5/functions/eval",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$eval",description:"Eval your Code, useful for debugging."},sidebar:"docs",previous:{title:"$error",permalink:"/es/docs/5.5.5/functions/error"},next:{title:"$exec",permalink:"/es/docs/5.5.5/functions/exec"}},g={},h=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4},{value:"Without the optional fiels",id:"without-the-optional-fiels",level:4},{value:"With the optional field:",id:"with-the-optional-field",level:4}],b={toc:h},O="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,d(p(p({},b),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function evals the given Aoi.js code so you can use functions manually inside a command without creating a new command for it."),(0,r.kt)("p",null,"You should restrict the use of this function to yourself"),(0,r.kt)("h4",p({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Code ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Return Code ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$eval[code;return code (yes/no)(optional)]")),(0,r.kt)("h4",p({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code - The Aoi.js code we're evaling"),(0,r.kt)("li",{parentName:"ul"},"Return Code - Returns the output of the code")),(0,r.kt)("h4",p({},{id:"usage"}),"Usage"),(0,r.kt)("h4",p({},{id:"without-the-optional-fiels"}),"Without the optional fiels"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "eval",\ncode: `\n$eval[$message]\n`\n})\n')),(0,r.kt)("h4",p({},{id:"with-the-optional-field"}),"With the optional field:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "eval",\ncode: `\n$eval[$message;yes]\n`\n})\n')))}k.isMDXComponent=!0}}]);