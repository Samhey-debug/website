"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,v=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(v,c(c({ref:t},l),{},{components:r})):n.createElement(v,c({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"$setBotAvatar",description:"Sets the bot's avatar"},c=void 0,s={unversionedId:"functions/setbotavatar",id:"version-5.5.5/functions/setbotavatar",title:"$setBotAvatar",description:"Sets the bot's avatar",source:"@site/versioned_docs/version-5.5.5/functions/setbotavatar.md",sourceDirName:"functions",slug:"/functions/setbotavatar",permalink:"/docs/5.5.5/functions/setbotavatar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687324528,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$setBotAvatar",description:"Sets the bot's avatar"},sidebar:"docs",previous:{title:"$serverVerificationLevel",permalink:"/docs/5.5.5/functions/serververificationlevel"},next:{title:"$setBotName",permalink:"/docs/5.5.5/functions/setbotname"}},i={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function set's the bot's avatar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$setBotAvatar[url]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "setbotavatar",\ncode: `Set the bots avatar! \n$setBotAvatar[https://cdn.discordapp.com/avatars/746401637329010779/a3dc97600375b95156a33d0fccbf2c95.webp]`\n})\n')),(0,a.kt)("p",null,"THIS SHOULD BE RESTRICTED TO BOT DEV ONLY"))}f.isMDXComponent=!0}}]);