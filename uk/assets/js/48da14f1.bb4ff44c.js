"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onPresenceUpdate"},b=void 0,v={unversionedId:"events/bot.onpresenceupdate",id:"version-5.5.5/events/bot.onpresenceupdate",title:"bot.onPresenceUpdate",description:"This callback is triggered whenever someone's presence is updated",source:"@site/versioned_docs/version-5.5.5/events/bot.onpresenceupdate.md",sourceDirName:"events",slug:"/events/bot.onpresenceupdate",permalink:"/uk/docs/5.5.5/events/bot.onpresenceupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"bot.onPresenceUpdate"},sidebar:"docs",previous:{title:"bot.onMessageUpdate",permalink:"/uk/docs/5.5.5/events/bot.onmessageupdate"},next:{title:"bot.onRateLimit",permalink:"/uk/docs/5.5.5/events/bot.onratelimit"}},h={},y=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],g={toc:y},O="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,d(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback is triggered whenever someone's presence is updated"),(0,r.kt)("h4",u({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.presenceUpdateCommand({ //command\nchannel: "channel id", //the channel where the bot will log\ncode: `your code` //Message that will be sent to <channel>\n})\n')),(0,r.kt)("h4",u({},{id:"example-command"}),"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.presenceUpdateCommand({ \nchannel: "782446718704812032",\ncode: `$username updated their presence!\nOld Presence: $oldPresence[status]\n` \n})\n')),(0,r.kt)("h4",u({},{id:"options"}),"Options:"),(0,r.kt)("p",null,"You can use these functions ",(0,r.kt)("a",u({parentName:"p"},{href:"/uk/docs/5.5.5/functions/oldpresence"}),"$oldPresence","[","]")," with the options below to return old user data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the user that updated the presence "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - The status of the user "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activities")," - The activities for this user "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild the user updated the presence on")))}k.isMDXComponent=!0}}]);