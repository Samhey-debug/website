"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>C});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},E=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(n),E=r,C=g["".concat(s,".").concat(E)]||g[E]||u[E]||o;return n?i.createElement(C,a(a({ref:t},l),{},{components:n})):i.createElement(C,a({ref:t},l))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=E;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[g]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}E.displayName="MDXCreateElement"},56637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"$cpu",description:"Returns the CPU Usage"},a=void 0,c={unversionedId:"functions/cpu",id:"version-5.5.5/functions/cpu",title:"$cpu",description:"Returns the CPU Usage",source:"@site/versioned_docs/version-5.5.5/functions/cpu.md",sourceDirName:"functions",slug:"/functions/cpu",permalink:"/docs/5.5.5/functions/cpu",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687324528,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$cpu",description:"Returns the CPU Usage"},sidebar:"docs",previous:{title:"$cooldown",permalink:"/docs/5.5.5/functions/cooldown"},next:{title:"$createChannel",permalink:"/docs/5.5.5/functions/createchannel"}},s={},p=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4}],l={toc:p},g="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(g,(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the cpu usage in percentage"),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 1 field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Type ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$cpu[type (optional)]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Type - The cpu usage type to count the percentage from")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"os")," - System cpu usage"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"process")," - Process cpu usage (default)")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "cpu",\ncode: `CPU Usage: $cpu`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Returns this",src:n(77949).Z,width:"274",height:"119"})))}u.isMDXComponent=!0},77949:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);