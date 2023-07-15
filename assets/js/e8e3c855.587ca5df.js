"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,d=p["".concat(u,".").concat(b)]||p[b]||f[b]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},54121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&l(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&l(e,t,n[t]);return e},f=(e,n)=>a(e,i(n)),b=(e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$unban",description:"Unbans a user from the server"},m=void 0,y={unversionedId:"functions/unban",id:"version-5.5.5/functions/unban",title:"$unban",description:"Unbans a user from the server",source:"@site/versioned_docs/version-5.5.5/functions/unban.md",sourceDirName:"functions",slug:"/functions/unban",permalink:"/docs/5.5.5/functions/unban",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$unban",description:"Unbans a user from the server"},sidebar:"docs",previous:{title:"$truncate",permalink:"/docs/5.5.5/functions/truncate"},next:{title:"$unPinMessage",permalink:"/docs/5.5.5/functions/unpinmessage"}},v={},O=[],g={toc:O},h="wrapper";function j(e){var n=e,{components:t}=n,o=b(n,["components"]);return(0,r.kt)(h,f(p(p({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function unbans the user from the guild"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$unban[userID;reason (optional)]\n")),(0,r.kt)("p",null,"Reason will show up in audit logs"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "unban",\ncode: `Unbanned the user with the ID of 535566311942651924\n$unban[535566311942651924]`\n})\n')))}j.isMDXComponent=!0}}]);