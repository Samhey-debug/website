"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40769],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),b=o,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},50643:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>a(e,l(r)),b=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$globalUserLeaderboard",description:"A global Leaderboard, with all Guilds."},m=void 0,g={unversionedId:"functions/globaluserleaderboard",id:"version-5.5.5/functions/globaluserleaderboard",title:"$globalUserLeaderboard",description:"A global Leaderboard, with all Guilds.",source:"@site/versioned_docs/version-5.5.5/functions/globaluserleaderboard.md",sourceDirName:"functions",slug:"/functions/globaluserleaderboard",permalink:"/es/docs/5.5.5/functions/globaluserleaderboard",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$globalUserLeaderboard",description:"A global Leaderboard, with all Guilds."},sidebar:"docs",previous:{title:"$globalCooldown",permalink:"/es/docs/5.5.5/functions/globalcooldown"},next:{title:"$guild",permalink:"/es/docs/5.5.5/functions/guild"}},v={},y=[],O={toc:y},h="wrapper";function w(e){var r=e,{components:t}=r,o=b(r,["components"]);return(0,n.kt)(h,d(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns a user leaderboard for a global user variable"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$globalUserLeaderboard[variable;asc/dec (optional);{top} - {username} - {value}]\n")),(0,n.kt)("p",null,"asc - The values will be from greatest to least ","(","top to bottom",")"),(0,n.kt)("p",null,"desc - The values will be from least to greatest ","(","bottom to top",")"),(0,n.kt)("p",null,"{top} - Their leaderboard position ","(","1./2./3./etc",")"),(0,n.kt)("p",null,"{username} - The users username"),(0,n.kt)("p",null,"{value} - The users value of the given var"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "topcash", \ncode: `\n$globalUserLeaderboard[cash]\n})\n')))}w.isMDXComponent=!0}}]);