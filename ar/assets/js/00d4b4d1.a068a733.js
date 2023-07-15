"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,a(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onRateLimit",description:"An event that gets executed, if the bot gets rate limited by the Discord API. To let the bot listen to the event, add one bot.onRateLimit() callback inside your main file."},b=void 0,v={unversionedId:"events/bot.onratelimit",id:"version-5.5.5/events/bot.onratelimit",title:"bot.onRateLimit",description:"An event that gets executed, if the bot gets rate limited by the Discord API. To let the bot listen to the event, add one bot.onRateLimit() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onratelimit.md",sourceDirName:"events",slug:"/events/bot.onratelimit",permalink:"/ar/docs/5.5.5/events/bot.onratelimit",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"bot.onRateLimit",description:"An event that gets executed, if the bot gets rate limited by the Discord API. To let the bot listen to the event, add one bot.onRateLimit() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onPresenceUpdate",permalink:"/ar/docs/5.5.5/events/bot.onpresenceupdate"},next:{title:"bot.onReactionAdd",permalink:"/ar/docs/5.5.5/events/bot.onreactionadd"}},h={},y=[{value:"Example Template",id:"example-template",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Options for $rateLimit",id:"options-for-ratelimit",level:4}],g={toc:y},O="wrapper";function k(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,r.kt)(O,d(m(m({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback triggers every time your bot gets rate limited by the Discord API."),(0,r.kt)("h4",m({},{id:"example-template"}),"Example Template"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.rateLimitCommand({ //command\nchannel: "ID" //The channel we\'re the log is\ncode: `your code` //Code\n})\n\n')),(0,r.kt)("h4",m({},{id:"example-usage"}),"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.rateLimitCommand({ \nchannel: "772414449839636490" \ncode: `I\'ve been rate limited!\nTimeout: $rateLimt[timeout]\nLimit: $rateLimit[limit]\nMethod: $rateLimit[method]\nPath: $rateLimit[path]\nRoute: $rateLimit[route]\n`\n})\n\n')),(0,r.kt)("h4",m({},{id:"options-for-ratelimit"}),"Options for $rateLimit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout")," - Time before this session rate limit is restarted "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit")," - Amount of times you can request this endpoint before failing "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," - Method used to this endpoint "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," - The path to the api endpoint that triggered the rate limit "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"route")," - The route that triggered this event")))}k.isMDXComponent=!0}}]);