"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>v,toc:()=>y});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e},b=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const d={title:"$abbreviate",description:"$abbreviate allowing you to abbreviate large numbers.",id:"abbreviate"},f=void 0,v={unversionedId:"functions/abbreviate",id:"version-5.5.5/functions/abbreviate",title:"$abbreviate",description:"$abbreviate allowing you to abbreviate large numbers.",source:"@site/versioned_docs/version-5.5.5/functions/abbreviate.md",sourceDirName:"functions",slug:"/functions/abbreviate",permalink:"/fr/docs/5.5.5/functions/abbreviate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$abbreviate",description:"$abbreviate allowing you to abbreviate large numbers.",id:"abbreviate"},sidebar:"docs",previous:{title:"Using Events",permalink:"/fr/docs/5.5.5/advanced-guides/using-events"},next:{title:"$activity",permalink:"/fr/docs/5.5.5/functions/activity"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Abbreviation Types",id:"abbreviation-types",level:2},{value:"Examples",id:"examples",level:2},{value:"Without decimal:",id:"without-decimal",level:3},{value:"With decimal:",id:"with-decimal",level:3}],k={toc:y},h="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(h,b(u(u({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function abbreviates large numbers."),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$abbreviate[number;decimal?]\n")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The number is going to abbreviated"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"decimal"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"Separates the number in a decimal way"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",u({},{id:"abbreviation-types"}),"Abbreviation Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k")," \u2014 thousands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")," \u2014 millions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2014 billions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u2014 trillions")),(0,a.kt)("h2",u({},{id:"examples"}),"Examples"),(0,a.kt)("h3",u({},{id:"without-decimal"}),"Without decimal:"),(0,a.kt)("p",null,"This returns 7k."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "abbreviate",\n  code: `\n  $abbreviate[6900]\n  `\n});\n')),(0,a.kt)("h3",u({},{id:"with-decimal"}),"With decimal:"),(0,a.kt)("p",null,"This returns 7.0k."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "abbreviate",\n  code: `\n  $abbreviate[6983;1]\n  `\n});\n')))}O.isMDXComponent=!0}}]);