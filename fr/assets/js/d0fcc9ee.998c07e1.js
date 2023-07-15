"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2231],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51646:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))c.call(e,r)&&u(t,r,e[r]);if(i)for(var r of i(e))p.call(e,r)&&u(t,r,e[r]);return t},s=(t,e)=>l(t,o(e)),m=(t,e)=>{var r={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r};const f={title:"$creationDate",description:"$creationDate will return the creation date of the given Discord User.",id:"creationDate"},g=void 0,y={unversionedId:"functions/util-related/creationDate",id:"version-6.4.0/functions/util-related/creationDate",title:"$creationDate",description:"$creationDate will return the creation date of the given Discord User.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/creationDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/creationDate",permalink:"/fr/docs/functions/util-related/creationDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$creationDate",description:"$creationDate will return the creation date of the given Discord User.",id:"creationDate"},sidebar:"docs",previous:{title:"$concatTextSplit",permalink:"/fr/docs/functions/util-related/concatTextSplit"},next:{title:"$cropText",permalink:"/fr/docs/functions/util-related/cropText"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Format Input",id:"format-input",level:3},{value:"Example(s)",id:"examples",level:2}],h={toc:b},v="wrapper";function N(t){var e=t,{components:r}=e,a=m(e,["components"]);return(0,n.kt)(v,s(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$creationDate")," will return the creation date of the given Discord User."),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$creationDate[id;format?]\n")),(0,n.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"User ID of who you want to get the creation date to be returned of."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"format?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The format of the creation date (listed below)."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h3",d({},{id:"format-input"}),"Format Input"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Format"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Output"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ms"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1522158545409")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"date"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"3/27/2018, 1:49:05 PM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4 years, 9 months, 6 days, 2 hours, 17 minutes, 33 seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"time-full"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4 years, 9 months, 6 days, 2 hours, 17 minutes, 33 seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"time-humanize"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4y 9mon 6d 2h 24m 30s")))),(0,n.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return your account create date:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'creationDate',\n    code: `\n  Your account was created: $creationDate[$authorID;date]\n  `\n});\n")))}N.isMDXComponent=!0}}]);