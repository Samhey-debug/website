"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},i=void 0,l={unversionedId:"functions/prunemembers",id:"version-5.5.5/functions/prunemembers",title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them.",source:"@site/versioned_docs/version-5.5.5/functions/prunemembers.md",sourceDirName:"functions",slug:"/functions/prunemembers",permalink:"/docs/5.5.5/functions/prunemembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300612,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},sidebar:"docs",previous:{title:"$playTrack",permalink:"/docs/5.5.5/functions/playtrack"},next:{title:"$pruneMusic",permalink:"/docs/5.5.5/functions/prunemusic"}},s={},u=[{value:"Options:",id:"options",level:4},{value:"Example Command:",id:"example-command",level:4}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function kicks all inactive members without roles and with optional given roles from the given guild, if they were inactive for at least the given amount of days."),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$pruneMembers[amount of days(optional);guildID(optional);reason (optional);roleid1:roleid2:roleid3... (optional)]")),(0,a.kt)("h4",{id:"options"},"Options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amount of days")," =",">"," Number of days of inactivity required to kick ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"),(0,a.kt)("li",{parentName:"ul"},"must be between 1 and 30"),(0,a.kt)("li",{parentName:"ul"},"defaults to 7"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," the guildID the members should be checked for prune status ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"),(0,a.kt)("li",{parentName:"ul"},"defaults to current guildID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reason")," =",">"," reason that would be shown in the Audit-Log ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"),(0,a.kt)("li",{parentName:"ul"},'defaults to "none"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"roles")," =",">",' Array of roles to bypass the "...and no roles" constraint when pruning so it includes members with given roles in the prune status ',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"),(0,a.kt)("li",{parentName:"ul"},"separated by colons")))),(0,a.kt)("h4",{id:"example-command"},"Example Command:"),(0,a.kt)("p",null,'This example kicks all inactive members without roles they have been inactive on Discord for at least 30 days and all inactive members with my two given roles with the reason "Too many members".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "prunestatus",\ncode: `\nPruning would kick:\n$pruneMembers[30;$guildID;too many members;741266432574357586:820666519331405854] members!\n`\n})\n')))}c.isMDXComponent=!0}}]);