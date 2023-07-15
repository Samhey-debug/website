"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79547],{3905:(e,n,r)=>{r.d(n,{Zo:()=>f,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},f=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?t.createElement(m,l(l({ref:n},f),{},{components:r})):t.createElement(m,l({ref:n},f))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11360:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var t=r(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&f(e,r,n[r]);if(a)for(var r of a(n))s.call(n,r)&&f(e,r,n[r]);return e},u=(e,n)=>i(e,l(n)),d=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&a)for(var t of a(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$findRole",description:"Returns role ID from specified role name, mention or id"},v=void 0,y={unversionedId:"functions/findrole",id:"version-5.5.5/functions/findrole",title:"$findRole",description:"Returns role ID from specified role name, mention or id",source:"@site/versioned_docs/version-5.5.5/functions/findrole.md",sourceDirName:"functions",slug:"/functions/findrole",permalink:"/ar/docs/5.5.5/functions/findrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$findRole",description:"Returns role ID from specified role name, mention or id"},sidebar:"docs",previous:{title:"$findNumbers",permalink:"/ar/docs/5.5.5/functions/findnumbers"},next:{title:"$findRoles",permalink:"/ar/docs/5.5.5/functions/findroles"}},b={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],g={toc:O},k="wrapper";function h(e){var n=e,{components:r}=n,o=d(n,["components"]);return(0,t.kt)(k,u(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns the role ID from the given role info"),(0,t.kt)("h4",p({},{id:"fields"}),"Fields"),(0,t.kt)("p",null,"This function has 1 field"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Role ","(","Required",")")),(0,t.kt)("p",null,"Raw Usage: ",(0,t.kt)("inlineCode",{parentName:"p"},"$findRole[role]")),(0,t.kt)("h4",p({},{id:"options"}),"Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Role - The role we're finding. You can use name/id/mention")),(0,t.kt)("h4",p({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "role",\ncode: `$findRole[Developer]`\n})\n')))}h.isMDXComponent=!0}}]);