"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"$maxRam",description:"$maxRam will return the bot's maximum amount of Ram.",id:"maxRam"},i=void 0,m={unversionedId:"functions/info-related/maxRam",id:"version-6.3.0/functions/info-related/maxRam",title:"$maxRam",description:"$maxRam will return the bot's maximum amount of Ram.",source:"@site/versioned_docs/version-6.3.0/functions/info-related/maxRam.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/maxRam",permalink:"/docs/functions/info-related/maxRam",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011381,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$maxRam",description:"$maxRam will return the bot's maximum amount of Ram.",id:"maxRam"},sidebar:"docs",previous:{title:"$lowestRole",permalink:"/docs/functions/info-related/lowestRole"},next:{title:"$maximumMembers",permalink:"/docs/functions/info-related/maximumMembers"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$maxRam")," will return the bot's maximum amount of Ram."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$maxRam\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will your bot's maximum amount of available Ram:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'maxRam',\n    code: `\n  $maxRam\n  `\n});\n")))}p.isMDXComponent=!0}}]);