"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$cpu",description:"$cpu will return CPU usage of a process or the OS.",id:"cpu"},g=void 0,b={unversionedId:"functions/info-related/cpu",id:"version-6.4.0/functions/info-related/cpu",title:"$cpu",description:"$cpu will return CPU usage of a process or the OS.",source:"@site/versioned_docs/version-6.4.0/functions/info-related/cpu.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/cpu",permalink:"/docs/functions/info-related/cpu",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$cpu",description:"$cpu will return CPU usage of a process or the OS.",id:"cpu"},sidebar:"docs",previous:{title:"$commandsCount",permalink:"/docs/functions/info-related/commandsCount"},next:{title:"$customEmoji",permalink:"/docs/functions/info-related/customEmoji"}},y={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},k="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$cpu")," will return CPU usage of a process or the OS."),(0,n.kt)("h2",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$cpu[option?]\n")),(0,n.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The option that the CPU usage will be returned of. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"os")," - returns the CPU usage of the bot ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"process")," - returns the CPU usage of the process"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the CPU usage of your bot:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cpu',\n    code: `\n  OS: $cpu[os] \n  Process: $cpu[process] \n  `\n});\n")))}h.isMDXComponent=!0}}]);