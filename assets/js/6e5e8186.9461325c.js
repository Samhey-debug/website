"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,m=function(e,t){if(null==e)return{};var n,r,m={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(m[n]=e[n]);return m}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,m=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=m,d=l["".concat(s,".").concat(f)]||l[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:m,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),m=(n(67294),n(3905));const a={title:"$maximumMembers",description:"Return the maximum members can join the server."},o=void 0,i={unversionedId:"functions/maximummembers",id:"version-5.5.5/functions/maximummembers",title:"$maximumMembers",description:"Return the maximum members can join the server.",source:"@site/versioned_docs/version-5.5.5/functions/maximummembers.md",sourceDirName:"functions",slug:"/functions/maximummembers",permalink:"/docs/5.5.5/functions/maximummembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688307888,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$maximumMembers",description:"Return the maximum members can join the server."},sidebar:"docs",previous:{title:"$math",permalink:"/docs/5.5.5/functions/math"},next:{title:"$memberExists",permalink:"/docs/5.5.5/functions/memberexists"}},s={},u=[{value:"Usage:",id:"usage",level:4}],c={toc:u},l="wrapper";function p(e){let{components:t,...n}=e;return(0,m.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"This function returns the limit of members the given guild has. This is only for large servers with more than 100,000 members. All guilds below return 100000."),(0,m.kt)("p",null,"Raw usage: ",(0,m.kt)("inlineCode",{parentName:"p"},"$maximumMembers[guildID (optional)]")),(0,m.kt)("h4",{id:"usage"},"Usage:"),(0,m.kt)("p",null,"Example command to return the amount of maximum members of the current guild:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "maxmembers",\ncode: `\nLimit: $maximumMembers\n`\n})\n')),(0,m.kt)("p",null,"Example command to return the amount of maximum members of the another guild:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "maxmembers",\ncode: `\nLimit: $maximumMembers[773352845738115102]\n`\n})\n')))}p.isMDXComponent=!0}}]);