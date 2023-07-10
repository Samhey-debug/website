"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$setChannelTopic",description:"Sets a channel's topic"},c=void 0,i={unversionedId:"functions/setchanneltopic",id:"version-5.5.5/functions/setchanneltopic",title:"$setChannelTopic",description:"Sets a channel's topic",source:"@site/versioned_docs/version-5.5.5/functions/setchanneltopic.md",sourceDirName:"functions",slug:"/functions/setchanneltopic",permalink:"/docs/5.5.5/functions/setchanneltopic",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689005493,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$setChannelTopic",description:"Sets a channel's topic"},sidebar:"docs",previous:{title:"$setBotName",permalink:"/docs/5.5.5/functions/setbotname"},next:{title:"$setChannelVar",permalink:"/docs/5.5.5/functions/setchannelvar"}},l={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function allows the bot to set a ","<","channel",">"," topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$setChannelTopic[channelID;new topic] ($setChannelTopc[channel id] will remove the topic)\n")),(0,o.kt)("p",null,"Here's a simple usage "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "channel-topic".\ncode: `$setChannelTopic[$channelID;This is general chat!]`\n})\n')))}f.isMDXComponent=!0}}]);