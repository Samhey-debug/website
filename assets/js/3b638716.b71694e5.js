"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=s,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const o={title:"$serverExists",description:"Displays true or false depending if the server exists or not."},i=void 0,a={unversionedId:"functions/serverexists",id:"version-5.5.5/functions/serverexists",title:"$serverExists",description:"Displays true or false depending if the server exists or not.",source:"@site/versioned_docs/version-5.5.5/functions/serverexists.md",sourceDirName:"functions",slug:"/functions/serverexists",permalink:"/docs/5.5.5/functions/serverexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689243199,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"$serverExists",description:"Displays true or false depending if the server exists or not."},sidebar:"docs",previous:{title:"$serverEmojis",permalink:"/docs/5.5.5/functions/serveremojis"},next:{title:"$serverFeatures",permalink:"/docs/5.5.5/functions/serverfeatures"}},l={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function will tell you if the server provided exists or not. Returns true or false."),(0,s.kt)("p",null,"Raw usage: ",(0,s.kt)("inlineCode",{parentName:"p"},"$serverExists[Guild ID]")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "server",\n    code: `$serverExists[$message]`\n})\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This will check if the server ID (Provided in the message by the user is a valid guild ID or not.")))}f.isMDXComponent=!0}}]);