"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[639],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[f]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"$onlyNSFW",description:"Allows command to be ran in only NSFW marked channel"},c=void 0,l={unversionedId:"functions/onlynsfw",id:"version-5.5.5/functions/onlynsfw",title:"$onlyNSFW",description:"Allows command to be ran in only NSFW marked channel",source:"@site/versioned_docs/version-5.5.5/functions/onlynsfw.md",sourceDirName:"functions",slug:"/functions/onlynsfw",permalink:"/docs/5.5.5/functions/onlynsfw",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011381,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$onlyNSFW",description:"Allows command to be ran in only NSFW marked channel"},sidebar:"docs",previous:{title:"$onlyIfMessageContains",permalink:"/docs/5.5.5/functions/onlyifmessagecontains"},next:{title:"$onlyPerms",permalink:"/docs/5.5.5/functions/onlyperms"}},i={},s=[],p={toc:s},f="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(f,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function only allows the command to be ran in NSFW marked channels"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$onlyNSFW[error when ran in non-nsfw channel]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "special",\ncode: `Special Command\n$onlyNSFW[Command only executable in NSFW channels!]`\n})\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(87055).Z,width:"745",height:"117"})))}u.isMDXComponent=!0},87055:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image (38) (1)-21f81ffefe9b48ad238a5cb2c1a8fb0c.png"}}]);