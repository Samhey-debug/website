"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50670],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4921:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>O});var t=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&u(e,r,n[r]);if(l)for(var r of l(n))s.call(n,r)&&u(e,r,n[r]);return e},p=(e,n)=>a(e,o(n)),d=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$findServerChannel",description:"Returns channel ID for specified channel"},v=void 0,h={unversionedId:"functions/findserverchannel",id:"version-5.5.5/functions/findserverchannel",title:"$findServerChannel",description:"Returns channel ID for specified channel",source:"@site/versioned_docs/version-5.5.5/functions/findserverchannel.md",sourceDirName:"functions",slug:"/functions/findserverchannel",permalink:"/docs/5.5.5/functions/findserverchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$findServerChannel",description:"Returns channel ID for specified channel"},sidebar:"docs",previous:{title:"$findRoles",permalink:"/docs/5.5.5/functions/findroles"},next:{title:"$findSpecialChars",permalink:"/docs/5.5.5/functions/findspecialchars"}},y={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],b={toc:O},g="wrapper";function k(e){var n=e,{components:r}=n,i=d(n,["components"]);return(0,t.kt)(g,p(f(f({},b),i),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function finds and returns the id of the specified channel in the current guild. Yes/No will determine if function returns current channel id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,t.kt)("h4",f({},{id:"fields"}),"Fields"),(0,t.kt)("p",null,"This function has 1 required field"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Server Channel ","(","Required",")"),(0,t.kt)("li",{parentName:"ol"},"Return Current Channel ID ","(","Optional",")")),(0,t.kt)("p",null,"Raw Usage: ",(0,t.kt)("inlineCode",{parentName:"p"},"$findChannel[server channel;returnCurrentChannel (yes/no) (optional)]")),(0,t.kt)("h4",f({},{id:"options"}),"Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Server Channel - The channel we're finding. You can use name/id/mention"),(0,t.kt)("li",{parentName:"ul"},"Return Current Channel ID - Returns current channel id if no channel found")),(0,t.kt)("h4",f({},{id:"usage"}),"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "server-channel",\ncode: `$findServerChannel[announcements]`\n})\n')))}k.isMDXComponent=!0}}]);