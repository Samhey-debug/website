"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$findRoles",description:"$findRoles will return all matching roles depending on the given query.",id:"findRoles"},g=void 0,y={unversionedId:"functions/util-related/findRoles",id:"version-6.4.0/functions/util-related/findRoles",title:"$findRoles",description:"$findRoles will return all matching roles depending on the given query.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findRoles",permalink:"/tr/docs/functions/util-related/findRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$findRoles",description:"$findRoles will return all matching roles depending on the given query.",id:"findRoles"},sidebar:"docs",previous:{title:"$findRole",permalink:"/tr/docs/functions/util-related/findRole"},next:{title:"$findSpecialChars",permalink:"/tr/docs/functions/util-related/findSpecialChars"}},k={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Parameters for the <code>format</code> argument",id:"parameters-for-the-format-argument",level:3},{value:"Example(s)",id:"examples",level:2}],b={toc:h},v="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,c(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$findRoles")," will return all matching roles depending on the given query."),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$findRoles[roleResolver;limit?;type?;format?]\n")),(0,n.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"roleResolver"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Query to match."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"limit?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The maximum amount of roles the bot will return."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Type of the search query."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"format?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Formatting for the output."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h3",d({},{id:"parameters-for-the-format-argument"}),"Parameters for the ",(0,n.kt)("inlineCode",{parentName:"h3"},"format")," argument"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"{position} -> returns the position"),(0,n.kt)("li",{parentName:"ul"},"{id} -> returns the role ID"),(0,n.kt)("li",{parentName:"ul"},"{username} -> returns the role name")),(0,n.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return all roles which are named ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findRoles',\n    code: `\n  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]\n  `\n});\n")))}N.isMDXComponent=!0}}]);