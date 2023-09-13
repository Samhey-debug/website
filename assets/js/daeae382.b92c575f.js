"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,l(t)),g=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$log",description:"$log will log a given message in your bot's console.",id:"log"},f=void 0,y={unversionedId:"functions/util-related/log",id:"version-6.4.0/functions/util-related/log",title:"$log",description:"$log will log a given message in your bot's console.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/log.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/log",permalink:"/docs/functions/util-related/log",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"$log",description:"$log will log a given message in your bot's console.",id:"log"},sidebar:"docs",previous:{title:"$let",permalink:"/docs/functions/util-related/let"},next:{title:"$mentionType",permalink:"/docs/functions/util-related/mentionType"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,o=g(t,["components"]);return(0,r.kt)(k,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$log")," will log a given message in your bot's console."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$log[content]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"content"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string, number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Content of the message to log."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,'This will log "Aoi.js is great!" in your bot\'s console:'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "log",\n    code: `\n    $log[Aoi.js is great!]\n    `\n});\n')))}h.isMDXComponent=!0}}]);