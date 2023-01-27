"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[70251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=u,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:u,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),u=(n(67294),n(3905));const o={title:"$queueStatus",description:"Returns the current Queue Status."},a=void 0,c={unversionedId:"functions/queuestatus",id:"functions/queuestatus",title:"$queueStatus",description:"Returns the current Queue Status.",source:"@site/docs/functions/queuestatus.md",sourceDirName:"functions",slug:"/functions/queuestatus",permalink:"/docs/functions/queuestatus",draft:!1,tags:[],version:"current",frontMatter:{title:"$queueStatus",description:"Returns the current Queue Status."},sidebar:"someSidebar",previous:{title:"$queueLength",permalink:"/docs/functions/queuelength"},next:{title:"$ram",permalink:"/docs/functions/ram"}},i={},s=[{value:"Example:",id:"example",level:3}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,u.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"This function will tell you the current status of the queue, if it's playing, paused or idle."),(0,u.kt)("h3",{id:"example"},"Example:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "queuestatus",\n    code: `\n    The queue is currently $queueStatus\n    `\n})\n')))}p.isMDXComponent=!0}}]);