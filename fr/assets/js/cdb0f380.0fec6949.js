"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24997],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91469:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>v,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,s=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&u(e,n,r[n]);if(l)for(var n of l(r))p.call(r,n)&&u(e,n,r[n]);return e},d=(e,r)=>a(e,i(r)),f=(e,r)=>{var n={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))r.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n};const m={title:"$handleError",description:"Function that is used in bot.onFunctionError callback."},b=void 0,y={unversionedId:"functions/handleerror",id:"version-5.5.5/functions/handleerror",title:"$handleError",description:"Function that is used in bot.onFunctionError callback.",source:"@site/versioned_docs/version-5.5.5/functions/handleerror.md",sourceDirName:"functions",slug:"/functions/handleerror",permalink:"/fr/docs/5.5.5/functions/handleerror",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$handleError",description:"Function that is used in bot.onFunctionError callback."},sidebar:"docs",previous:{title:"$guildRoles",permalink:"/fr/docs/5.5.5/functions/guildroles"},next:{title:"$hasAnyPerm",permalink:"/fr/docs/5.5.5/functions/hasanyperm"}},v={},h=[{value:"Usage:",id:"usage",level:3},{value:"Example:",id:"example",level:3}],O={toc:h},g="wrapper";function k(e){var r=e,{components:n}=r,o=f(r,["components"]);return(0,t.kt)(g,d(s(s({},O),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h3",s({},{id:"usage"}),"Usage:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$handleError[option]\n")),(0,t.kt)("h3",s({},{id:"example"}),"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.functionErrorCommand({\nchannel: "832704676096245800",\ncode: `Error: $handleError[error]`\n})\nbot.onFunctionError()\n')),(0,t.kt)("p",null,"Properties that can be used with $handleError are "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"function")," - Function Name"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"command")," - Command  Name"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"error")," - Returns Error")),(0,t.kt)("p",null,"Callback for this command: ",(0,t.kt)("a",s({parentName:"p"},{href:"/fr/docs/5.5.5/events/bot.onfunctionerror"}),"bot.onFunctionError")))}k.isMDXComponent=!0}}]);