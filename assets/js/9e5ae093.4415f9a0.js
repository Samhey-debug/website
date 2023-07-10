"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$month"},c=void 0,i={unversionedId:"functions/month",id:"version-5.5.5/functions/month",title:"$month",description:"This function returns the current month",source:"@site/versioned_docs/version-5.5.5/functions/month.md",sourceDirName:"functions",slug:"/functions/month",permalink:"/docs/5.5.5/functions/month",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689005493,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$month"},sidebar:"docs",previous:{title:"$modulo",permalink:"/docs/5.5.5/functions/modulo"},next:{title:"$moveSong",permalink:"/docs/5.5.5/functions/movesong"}},u={},s=[],l={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the current month"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "month",\ncode: `Month: $month`\n//Returns: January\n})\n')))}f.isMDXComponent=!0}}]);