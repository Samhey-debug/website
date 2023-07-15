"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,u=f["".concat(p,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>j,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const u={title:"$joinVC",description:"Makes the bot join a specified voice channel."},k=void 0,b={unversionedId:"functions/joinvc",id:"version-5.5.5/functions/joinvc",title:"$joinVC",description:"Makes the bot join a specified voice channel.",source:"@site/versioned_docs/version-5.5.5/functions/joinvc.md",sourceDirName:"functions",slug:"/functions/joinvc",permalink:"/fr/docs/5.5.5/functions/joinvc",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$joinVC",description:"Makes the bot join a specified voice channel."},sidebar:"docs",previous:{title:"$joinSplitText",permalink:"/fr/docs/5.5.5/functions/joinsplittext"},next:{title:"$jsonRequest",permalink:"/fr/docs/5.5.5/functions/jsonrequest"}},g={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],h={toc:y},v="wrapper";function j(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,d(f(f({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Makes the bot join an specified voice channel."),(0,r.kt)("h3",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$joinVC[channelID;selfMute?;selfDeaf?;speaker?;debug?]\n")),(0,r.kt)("h3",f({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The id of the voice channel where the bot will join"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"selfMute"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"Whether to make the bot join as muted"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes/no"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"selfDeaf"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"Whether to make the bot join as deafen"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes/no"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"speaker"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"Whether to make the bot join as speaker"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes/no"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"debug"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"Whether to make the bot join in debug mode"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes/no"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",f({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "",\n    code: `Joined!\n    $joinVC[816751491451977768]` \n})\n\n/**\n * This would make the bot join the #Staff VC\n * Located in the official aoi.js server.\n**/\n')))}j.isMDXComponent=!0}}]);