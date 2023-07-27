"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=o,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>P,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$removeApplicationCommandPermissions",description:"$removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.",id:"removeApplicationCommandPermissions"},v=void 0,g={unversionedId:"functions/interaction-related/removeApplicationCommandPermissions",id:"version-6.4.0/functions/interaction-related/removeApplicationCommandPermissions",title:"$removeApplicationCommandPermissions",description:"$removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/removeApplicationCommandPermissions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/removeApplicationCommandPermissions",permalink:"/ru/docs/functions/interaction-related/removeApplicationCommandPermissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433159,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$removeApplicationCommandPermissions",description:"$removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.",id:"removeApplicationCommandPermissions"},sidebar:"docs",previous:{title:"$modifyApplicationCommand",permalink:"/ru/docs/functions/interaction-related/modifyApplicationCommand"},next:{title:"$removeRole",permalink:"/ru/docs/functions/interaction-related/removeRole"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],k={toc:b},O="wrapper";function P(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(O,d(c(c({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeApplicationCommandPermissions")," will remove permissions of a user or role of a specific application command."),(0,n.kt)("h2",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$removeApplicationCommandPermissions[guildID/global;id;...roruIds]\n")),(0,n.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"guildID/global"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Application command type. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"global")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"specific guildID")),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The application command ID to modify."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"roruIds"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer, string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Roles or users to modify/remove permissions of, splitted by commas."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))))}P.isMDXComponent=!0}}]);