"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,u=d["".concat(c,".").concat(m)]||d[m]||f[m]||i;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const u={title:"$createSticker",description:"Creates a sticker."},k=void 0,g={unversionedId:"functions/createsticker",id:"version-5.5.5/functions/createsticker",title:"$createSticker",description:"Creates a sticker.",source:"@site/versioned_docs/version-5.5.5/functions/createsticker.md",sourceDirName:"functions",slug:"/functions/createsticker",permalink:"/fr/docs/5.5.5/functions/createsticker",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$createSticker",description:"Creates a sticker."},sidebar:"docs",previous:{title:"$createStageInstance",permalink:"/fr/docs/5.5.5/functions/createstageinstance"},next:{title:"$createThread",permalink:"/fr/docs/5.5.5/functions/createthread"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],N={toc:b},h="wrapper";function v(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(h,f(d(d({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will create a sticker for given guild ID."),(0,n.kt)("h3",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"$createSticker[guildID;url;name;return sticker?;tag;description?;reason?]\n")),(0,n.kt)("h6",d({},{id:"footnote"}),"Footnote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The guild must be at least level 1 to have stickers.")),(0,n.kt)("li",{parentName:"ul"},"The attachment must be a ",(0,n.kt)("inlineCode",{parentName:"li"},".png")," file.")),(0,n.kt)("h3",d({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"guildID"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The sticker will be created on the guild"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"url"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The url will be changed to a sticker"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"return sticker"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Returning sticker when done with creating"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"tag"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The tag that will make sticker appear"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"description"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Description for the sticker"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"reason"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"For what reason the sticker added"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",d({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n  name: "add-sticker",\n  code: `\n  Sticker added succesfully!\n  \n  $createSticker[697039582922801182;https://cdn.discordapp.com/attachments/805513427501842465/971426174314090586/ezgif.com-gif-maker_8.png;trash;no;joy;This is awesome sticker!;This sticker needed!]\n  `\n//Note: emoji name needs to be used for tag.\n});\n')))}v.isMDXComponent=!0}}]);