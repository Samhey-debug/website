"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"$newMember",description:"Holds data for the member after the update, might be a good idea to check partial option before accessing any property."},i=void 0,c={unversionedId:"functions/newmember",id:"version-5.5.5/functions/newmember",title:"$newMember",description:"Holds data for the member after the update, might be a good idea to check partial option before accessing any property.",source:"@site/versioned_docs/version-5.5.5/functions/newmember.md",sourceDirName:"functions",slug:"/functions/newmember",permalink:"/docs/5.5.5/functions/newmember",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687295545,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$newMember",description:"Holds data for the member after the update, might be a good idea to check partial option before accessing any property."},sidebar:"docs",previous:{title:"$newChannel",permalink:"/docs/5.5.5/functions/newchannel"},next:{title:"$newRole",permalink:"/docs/5.5.5/functions/newrole"}},p={},l=[],s={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function is only useable in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/events/bot.onmemberupdate"},"bot.onMemberUpdate")," callback or else it won't give any data. Examples can be found in the callback page."))}f.isMDXComponent=!0}}]);