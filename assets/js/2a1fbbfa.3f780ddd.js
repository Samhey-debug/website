"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,v=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>v,metadata:()=>b,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$deleteServerVar"},m=void 0,b={unversionedId:"functions/deleteservervar",id:"version-5.5.5/functions/deleteservervar",title:"$deleteServerVar",description:"This function deletes the specified variable from the database",source:"@site/versioned_docs/version-5.5.5/functions/deleteservervar.md",sourceDirName:"functions",slug:"/functions/deleteservervar",permalink:"/docs/5.5.5/functions/deleteservervar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$deleteServerVar"},sidebar:"docs",previous:{title:"$deleteRoles",permalink:"/docs/5.5.5/functions/deleteroles"},next:{title:"$deleteStageInstance",permalink:"/docs/5.5.5/functions/deletestageinstance"}},y={},O=[{value:"Fields",id:"fields",level:2},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2}],g={toc:O},k="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,d(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function deletes the specified variable from the database"),(0,n.kt)("h2",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Variable ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Server ID ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$deleteServerVar[variable;serverID (optional)]")),(0,n.kt)("h2",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Variable - The variable we're deleting"),(0,n.kt)("li",{parentName:"ul"},"Server ID - The server we're deleting for")),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Without optional fields"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteVar",\ncode: `$deleteServerVar[total_money]`\n})\n')),(0,n.kt)("p",null,"With optional fields"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteVar",\ncode: `$deleteServerVar[total_money;773352845738115102]`\n})\n')))}h.isMDXComponent=!0}}]);