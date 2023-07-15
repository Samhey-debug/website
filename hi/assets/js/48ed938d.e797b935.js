"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||f[u]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>v,toc:()=>k});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&d(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$archiveThread",description:"Archives a text channel's thread."},h=void 0,v={unversionedId:"functions/archivethread",id:"version-5.5.5/functions/archivethread",title:"$archiveThread",description:"Archives a text channel's thread.",source:"@site/versioned_docs/version-5.5.5/functions/archivethread.md",sourceDirName:"functions",slug:"/functions/archivethread",permalink:"/hi/docs/5.5.5/functions/archivethread",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$archiveThread",description:"Archives a text channel's thread."},sidebar:"docs",previous:{title:"$appendFile",permalink:"/hi/docs/5.5.5/functions/appendfile"},next:{title:"$argsCheck",permalink:"/hi/docs/5.5.5/functions/argscheck"}},g={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],y={toc:k},b="wrapper";function N(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(b,f(s(s({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function used for archiving an active thread."),(0,a.kt)("h3",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$archiveThread[threadID;channelID;archive?;reason?]\n")),(0,a.kt)("h3",s({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"threadID"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The ID of the thread"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"channelID"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The ID of the channel"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"archiving"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Archiving or making active."),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"reason"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Reason for archiving/activating."),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",s({},{id:"examples"}),"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Archiving a thread:")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "archive-thread",\n    code: `\n    $archiveThread[938078671095365693;722031482163560499;yes;Thanks for talk!]\n    `\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activating a thread:")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "active-thread",\n    code: `\n    $archiveThread[938078671095365693;722031482163560499;no;Let\'s talk again!]\n    `\n});\n')))}N.isMDXComponent=!0}}]);