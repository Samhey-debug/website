"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"$lerefAvatar",description:"$lerefAvatar will return the Avatar of the creator of aoi.js",id:"lerefAvatar"},l=void 0,i={unversionedId:"functions/misc-related/lerefAvatar",id:"version-6.2.6/functions/misc-related/lerefAvatar",title:"$lerefAvatar",description:"$lerefAvatar will return the Avatar of the creator of aoi.js",source:"@site/versioned_docs/version-6.2.6/functions/misc-related/lerefAvatar.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/lerefAvatar",permalink:"/docs/functions/misc-related/lerefAvatar",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Leref",lastUpdatedAt:1687324528,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$lerefAvatar",description:"$lerefAvatar will return the Avatar of the creator of aoi.js",id:"lerefAvatar"},sidebar:"docs",previous:{title:"$joinSplitText",permalink:"/docs/functions/misc-related/joinSplitText"},next:{title:"$loop",permalink:"/docs/functions/misc-related/loop"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$lerefAvatar")," will return the Avatar of the creator of aoi.js"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$lerefAvatar\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return the creator's Avatar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "lerefAvatar",\n    code: `\n    $lerefAvatar\n    `\n});\n')))}u.isMDXComponent=!0}}]);