"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile."},h=void 0,b={unversionedId:"events/bot.onreactionadd",id:"version-5.5.5/events/bot.onreactionadd",title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onreactionadd.md",sourceDirName:"events",slug:"/events/bot.onreactionadd",permalink:"/fr/docs/5.5.5/events/bot.onreactionadd",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onRateLimit",permalink:"/fr/docs/5.5.5/events/bot.onratelimit"},next:{title:"bot.onReactionRemove",permalink:"/fr/docs/5.5.5/events/bot.onreactionremove"}},v={},g=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Functions:",id:"functions",level:4}],y={toc:g},k="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(k,p(u(u({},y),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",u({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.reactionAddCommand({ //command\n        channel: "channel id", //the channel where the bot will log\n        code: `your code` //Message that will be sent to <channel>\n})\n')),(0,r.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.reactionAddCommand({\n        channel: "772414449839636490", \n        code: `$username has reacted with $emojiToString`\n})\n')),(0,r.kt)("h4",u({},{id:"functions"}),"Functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/fr/docs/5.5.5/functions/usermessageid"}),"$messageID")," => to get the messageID the user reacted"),(0,r.kt)("li",{parentName:"ul"},"$authorMessage => to get the authorID of the message the user reacted to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/fr/docs/5.5.5/functions/channelid"}),"$channelID "),"=> to get the channelID of the message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/fr/docs/5.5.5/functions/authorid"}),"$authorID")," => the ID of the user that reacted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/fr/docs/5.5.5/functions/username"}),"$username")," => the username of the user that reacted")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use functions like ",(0,r.kt)("a",u({parentName:"p"},{href:"/fr/docs/5.5.5/functions/onlyforchannels"}),"$onlyForChannels")," or the functions from above in an ",(0,r.kt)("a",u({parentName:"p"},{href:"/fr/docs/5.5.5/functions/onlyif"}),"$onlyIf")," limiter at the bottom of the code to limit your code to specific reactions etc.")))}O.isMDXComponent=!0}}]);