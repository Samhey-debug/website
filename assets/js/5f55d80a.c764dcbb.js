"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"$toLowercase",description:"Lowercases all characters in the given test"},c=void 0,s={unversionedId:"functions/tolowercase",id:"version-5.5.5/functions/tolowercase",title:"$toLowercase",description:"Lowercases all characters in the given test",source:"@site/versioned_docs/version-5.5.5/functions/tolowercase.md",sourceDirName:"functions",slug:"/functions/tolowercase",permalink:"/docs/5.5.5/functions/tolowercase",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687295545,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$toLowercase",description:"Lowercases all characters in the given test"},sidebar:"docs",previous:{title:"$toLocaleUppercase",permalink:"/docs/5.5.5/functions/tolocaleuppercase"},next:{title:"$toUppercase",permalink:"/docs/5.5.5/functions/touppercase"}},i={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function lowercases all characters in ","<","text",">"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$toLowercase[text]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "toLowercase",\ncode: `$toLowercase[HELLO]` //Returns: hello\n})\n')))}f.isMDXComponent=!0}}]);