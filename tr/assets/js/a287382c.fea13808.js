"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>w,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",id:"mentionedRolesCount"},y=void 0,v={unversionedId:"functions/util-related/mentionedRolesCount",id:"version-6.4.0/functions/util-related/mentionedRolesCount",title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentionedRolesCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRolesCount",permalink:"/tr/docs/functions/util-related/mentionedRolesCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",id:"mentionedRolesCount"},sidebar:"docs",previous:{title:"$mentionedRoles",permalink:"/tr/docs/functions/util-related/mentionedRoles"},next:{title:"$mentionedUsersCount",permalink:"/tr/docs/functions/util-related/mentionedUsersCount"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:b},h="wrapper";function w(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(h,m(p(p({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedRolesCount")," will return the amount of role mentions within a message."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedRolesCount\n")),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the amount of role mentions in the given text:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedRolesCount',\n    code: `\n  You have: $mentionedRolesCount role mentions in your message!\n`\n});\n")))}w.isMDXComponent=!0}}]);