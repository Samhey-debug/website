"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),v=o,g=u["".concat(i,".").concat(v)]||u[v]||p[v]||r;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},25948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>N,frontMatter:()=>g,metadata:()=>b,toc:()=>h});var a=n(3905),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>r(e,s(t)),v=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const g={title:"Using Events",description:"Here you can learn the usage of events."},m=void 0,b={unversionedId:"advanced-guides/using-events",id:"version-5.5.5/advanced-guides/using-events",title:"Using Events",description:"Here you can learn the usage of events.",source:"@site/versioned_docs/version-5.5.5/advanced-guides/using-events.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/using-events",permalink:"/ar/docs/5.5.5/advanced-guides/using-events",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"Using Events",description:"Here you can learn the usage of events."},sidebar:"docs",previous:{title:"Interaction Commands",permalink:"/ar/docs/5.5.5/advanced-guides/interaction-commands"},next:{title:"$abbreviate",permalink:"/ar/docs/5.5.5/functions/abbreviate"}},f={},h=[{value:"What are events?",id:"what-are-events",level:3},{value:"Types of events:",id:"types-of-events",level:3},{value:"Server based events:",id:"server-based-events",level:4},{value:"Bot based events:",id:"bot-based-events",level:4},{value:"Command &amp; message based events:",id:"command--message-based-events",level:4},{value:"User based events:",id:"user-based-events",level:4},{value:"How to use events?",id:"how-to-use-events",level:3}],k={toc:h},y="wrapper";function N(e){var t=e,{components:n}=t,o=v(t,["components"]);return(0,a.kt)(y,p(u(u({},k),o),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",u({},{id:"what-are-events"}),"What are events?"),(0,a.kt)("p",null,'Aoi.JS has several event listeners, called "events" to cover most events of the Discord API.'),(0,a.kt)("p",null,"Each of them has it's own usage and own command type to run their own tasks (e.g for logging)."),(0,a.kt)("p",null,"The events are optional except the ",(0,a.kt)("a",u({parentName:"p"},{href:"/ar/docs/5.5.5/events/bot.onmessage"}),"bot.onMessage()")," one but if you want to use them, they need to be in you main file to let the bot listen to their events and these are needed to use their different command types."),(0,a.kt)("h3",u({},{id:"types-of-events"}),"Types of events:"),(0,a.kt)("h4",u({},{id:"server-based-events"}),"Server based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onleave"}),"bot.onLeave() "),"=> for logging members they leave servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onjoin"}),"bot.onJoined() "),"=> for logging members they join servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onbanadd"}),"bot.onBanAdd() "),"=> for logging members they get banned in servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onbanremove"}),"bot.onBanRemove()")," => for logging members they get unbanned inservers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onchannelcreate"}),"bot.onChannelCreate() "),"=> for logging channels they get created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onchanneldelete"}),"bot.onChannelDelete()")," => for logging channels they get deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onchannelupdate"}),"bot.onChannelUpdate() "),"=> for logging channels they get updated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onrolecreate"}),"bot.onRoleCreate() "),"=> for logging roles they get created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onroledelete"}),"bot.onRoleDelete() "),"=> for logging roles they get deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onroleupdate"}),"bot.onRoleUpdate() "),"=> for logging roles they get updated")),(0,a.kt)("h4",u({},{id:"bot-based-events"}),"Bot based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onratelimit"}),"bot.onRateLimit()")," => for logging rate limits of the bot"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onguildjoin"}),"bot.onGuildJoin() "),"=> for logging what servers the bot joins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onguildleave"}),"bot.onGuildLeave()")," => for logging what servers the bot leaves")),(0,a.kt)("h4",u({},{id:"command--message-based-events"}),"Command & message based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onmessage"}),"bot.onMessage()")," => for logging & responding to messages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onmessagedelete"}),"bot.onMessageDelete()")," => for logging messages they get deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onmessageupdate"}),"bot.onMessageUpdate()")," => for logging messages they get updated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/advanced-guides/interaction-commands"}),"bot.onInteractionCreate()")," => for using slash commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onreactionadd"}),"bot.onReactionAdd()")," => for logging reactions on messages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onreactionremove"}),"bot.onReactionRemove()")," => for logging removed reactions on messages")),(0,a.kt)("h4",u({},{id:"user-based-events"}),"User based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onuserupdate"}),"bot.onUserUpdate() "),"=> for logging users updating their profile"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onmemberupdate"}),"bot.onMemberUpdate()")," => for logging members updates in a server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onpresenceupdate"}),"bot.onPresenceUpdate() "),"=> for logging presence updates of users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/ar/docs/5.5.5/events/bot.onvoicestateupdate"}),"bot.onVoiceStateUpdate() "),"=> for logging voice state updates of members in a server")),(0,a.kt)("h3",u({},{id:"how-to-use-events"}),"How to use events?"),(0,a.kt)("p",null,"Easy! Just paste the callback you want to use in your main file below the bot creation like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.Bot({\n  token: "Discord_Bot_Token",\n  prefix: "Discord_Bot_Prefix",\n  intents: ["GUILDS", "GUILD_MESSAGES"]\n})\n\n//ADDING EVENTS\n \nbot.onMessage() // Allows Commands to Executed\nbot.onJoined() // Allows to log users joining servers\nbot.onLeave() // Allows to log users leaving servers\nbot.onBanAdd() // Allows to log user bans from servers\nbot.onBanRemove() // Allows to log users being unbanned from servers\n')))}N.isMDXComponent=!0}}]);