"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"$bulk",description:"$bulk will hold data for the bulk delete command. (messageDeleteBulk event)",id:"bulk"},o=void 0,i={unversionedId:"functions/event-related/bulk",id:"version-6.2.6/functions/event-related/bulk",title:"$bulk",description:"$bulk will hold data for the bulk delete command. (messageDeleteBulk event)",source:"@site/versioned_docs/version-6.2.6/functions/event-related/bulk.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/bulk",permalink:"/docs/functions/event-related/bulk",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687400258,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"$bulk",description:"$bulk will hold data for the bulk delete command. (messageDeleteBulk event)",id:"bulk"},sidebar:"docs",previous:{title:"$alwaysExecute",permalink:"/docs/functions/event-related/alwaysExecute"},next:{title:"$channelUsed",permalink:"/docs/functions/event-related/channelUsed"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$bulk")," will hold data for the bulk delete command. (messageDeleteBulk event)"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$bulk[option]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"option?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Option to retrieve. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"messages")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"ids")," ",(0,a.kt)("br",null)," 3. ",(0,a.kt)("strong",{parentName:"td"},"createdTimestamp")," ",(0,a.kt)("br",null)," 4. ",(0,a.kt)("strong",{parentName:"td"},"createdAt")," ",(0,a.kt)("br",null)," 5. ",(0,a.kt)("strong",{parentName:"td"},"userIds")," ",(0,a.kt)("br",null)," 6. ",(0,a.kt)("strong",{parentName:"td"},"usernames"),"  ",(0,a.kt)("br",null)," 7. ",(0,a.kt)("strong",{parentName:"td"},"userMentions")," ",(0,a.kt)("br",null)," 8. ",(0,a.kt)("strong",{parentName:"td"},"guildID")," ",(0,a.kt)("br",null)," 9. ",(0,a.kt)("strong",{parentName:"td"},"guildName")," ",(0,a.kt)("br",null)," 10. ",(0,a.kt)("strong",{parentName:"td"},"channelID")," ",(0,a.kt)("br",null)," 11. ",(0,a.kt)("strong",{parentName:"td"},"channelName")),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))))}c.isMDXComponent=!0}}]);