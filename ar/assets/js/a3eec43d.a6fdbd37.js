"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),v=a,d=u["".concat(s,".").concat(v)]||u[v]||f[v]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},25271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,c(t)),v=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$setBotAvatar",description:"Sets the bot's avatar"},b=void 0,m={unversionedId:"functions/setbotavatar",id:"version-5.5.5/functions/setbotavatar",title:"$setBotAvatar",description:"Sets the bot's avatar",source:"@site/versioned_docs/version-5.5.5/functions/setbotavatar.md",sourceDirName:"functions",slug:"/functions/setbotavatar",permalink:"/ar/docs/5.5.5/functions/setbotavatar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$setBotAvatar",description:"Sets the bot's avatar"},sidebar:"docs",previous:{title:"$serverVerificationLevel",permalink:"/ar/docs/5.5.5/functions/serververificationlevel"},next:{title:"$setBotName",permalink:"/ar/docs/5.5.5/functions/setbotname"}},y={},O=[],g={toc:O},j="wrapper";function h(e){var t=e,{components:r}=t,a=v(t,["components"]);return(0,n.kt)(j,f(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function set's the bot's avatar"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$setBotAvatar[url]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "setbotavatar",\ncode: `Set the bots avatar! \n$setBotAvatar[https://cdn.discordapp.com/avatars/746401637329010779/a3dc97600375b95156a33d0fccbf2c95.webp]`\n})\n')),(0,n.kt)("p",null,"THIS SHOULD BE RESTRICTED TO BOT DEV ONLY"))}h.isMDXComponent=!0}}]);