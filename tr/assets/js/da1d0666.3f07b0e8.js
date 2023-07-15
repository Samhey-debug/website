"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const d={title:"$attachment",description:"Adds an attachment to the message."},g=void 0,h={unversionedId:"functions/attachment",id:"version-5.5.5/functions/attachment",title:"$attachment",description:"Adds an attachment to the message.",source:"@site/versioned_docs/version-5.5.5/functions/attachment.md",sourceDirName:"functions",slug:"/functions/attachment",permalink:"/tr/docs/5.5.5/functions/attachment",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$attachment",description:"Adds an attachment to the message."},sidebar:"docs",previous:{title:"$argsSlice",permalink:"/tr/docs/5.5.5/functions/argsslice"},next:{title:"$author",permalink:"/tr/docs/5.5.5/functions/author"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:b},k="wrapper";function O(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,a.kt)(k,u(m(m({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows you to add 'attachments' to a message, like images or videos. If name given, you must specify the extension of the attachment (jpg, png, mp4, etc.)"),(0,a.kt)("h3",m({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$attachment[url;name.extension]\n")),(0,a.kt)("h3",m({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"url"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The attachment will be sending"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"url"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"name.extension"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The attachment's name along with extension"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h2",m({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "attachment",\n  code: `\n  $attachment[$authorAvatar;neoaichan.png]\n  `\n//This will return the attachment\'s name as "neoaichan.png"\n});\n')))}O.isMDXComponent=!0}}]);