"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68153],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=u(n),d=s,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function m(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89316:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const o={title:"$setStatus",description:"Set's the bots status"},a=void 0,i={unversionedId:"functions/setstatus",id:"version-5.5.5/functions/setstatus",title:"$setStatus",description:"Set's the bots status",source:"@site/versioned_docs/version-5.5.5/functions/setstatus.md",sourceDirName:"functions",slug:"/functions/setstatus",permalink:"/docs/5.5.5/functions/setstatus",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688307888,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$setStatus",description:"Set's the bots status"},sidebar:"docs",previous:{title:"$setServerVar",permalink:"/docs/5.5.5/functions/setservervar"},next:{title:"$setTimeout",permalink:"/docs/5.5.5/functions/settimeout"}},c={},u=[],l={toc:u},p="wrapper";function f(t){let{components:e,...n}=t;return(0,s.kt)(p,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function sets the bot's status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$setStatus[text;type;status]\n")),(0,s.kt)("p",null,'Types: "PLAYING", "LISTENING", "WATCHING", "STREAMING", "COMPETING"'),(0,s.kt)("p",null,'STATUS: "dnd", "idle", "online", "invisible"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "setStatus",\ncode: `$setStatus[music;LISTENING;dnd] Successfully changed the bot\'s status <3`\n})\n')))}f.isMDXComponent=!0}}]);