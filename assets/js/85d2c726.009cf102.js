"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=m(n),d=i,c=g["".concat(o,".").concat(d)]||g[d]||u[d]||s;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<s;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const s={title:"Permissions & Intents",description:"This page is covering all permissions and intents.",id:"permissionsandintents"},r=void 0,l={unversionedId:"guides/permissionsandintents",id:"version-6.2.6/guides/permissionsandintents",title:"Permissions & Intents",description:"This page is covering all permissions and intents.",source:"@site/versioned_docs/version-6.2.6/guides/9permissionsintents.md",sourceDirName:"guides",slug:"/guides/permissionsandintents",permalink:"/docs/guides/permissionsandintents",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687412669,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Permissions & Intents",description:"This page is covering all permissions and intents.",id:"permissionsandintents"},sidebar:"docs",previous:{title:"Custom Functions",permalink:"/docs/guides/customfunctions"},next:{title:"Parser",permalink:"/docs/guides/parser"}},o={},m=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Gateaway Intents",id:"gateaway-intents",level:2},{value:"Example Usage of Intents:",id:"example-usage-of-intents",level:4},{value:"Permissions",id:"permissions",level:2},{value:"Guild Permissions",id:"guild-permissions",level:3},{value:"Voice Permissions",id:"voice-permissions",level:3}],p={toc:m},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#discord-gateaway-intents"},"Gateaway Intents")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#example-usage-of-intents"},"Example Usage of Intents"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#discord-api-permissions"},"Permissions")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#guild-permissions"},"Guild Permissions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#voice-permissions"},"Voice Permissions")))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"gateaway-intents"},(0,i.kt)("a",{parentName:"h2",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"Gateaway Intents")),(0,i.kt)("p",null,"Discord has designated three intents as privileged","*",": ",(0,i.kt)("strong",{parentName:"p"},"GuildMembers"),", ",(0,i.kt)("strong",{parentName:"p"},"GuildPresences"),", and ",(0,i.kt)("strong",{parentName:"p"},"MessageContent"),". These intents are now deactivated by default and require verification once your application reaches 76 guilds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MessageContent"),"*"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Guilds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildMessages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildMembers"),"*"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildBans")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildEmojisAndStickers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildIntegrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildWebhooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildInvites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildVoiceStates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildPresences"),"*"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildMessageReactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuildMessageTyping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DirectMessages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DirectMessageReactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DirectMessageTyping"))),(0,i.kt)("h4",{id:"example-usage-of-intents"},"Example Usage of Intents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const { AoiClient } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "Discord Bot Token",\n    prefix: "Discord Bot Prefix",\n    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences"],\n    events: ["onMessage"],\n    ...\n})\n')),(0,i.kt)("h2",{id:"permissions"},(0,i.kt)("a",{parentName:"h2",href:"https://discord.com/developers/docs/topics/permissions"},"Permissions")),(0,i.kt)("h3",{id:"guild-permissions"},"Guild Permissions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"createinvite")," ","\u2192"," Allows creation of instant invites."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"kickmembers")," ","\u2192"," Allows kicking members."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"banmembers")," ","\u2192"," Allows banning members."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"administrator")," ","\u2192"," Allows all permissions and bypasses channel permission overwrites."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managechannels")," ","\u2192"," Allows management and editing of channels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"manageguild")," ","\u2192"," Allows management and editing of the guild."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"addreactions")," ","\u2192"," Allows for the addition of reactions to messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"viewauditlog")," ","\u2192"," Allows for viewing of audit logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"viewchannel")," ","\u2192"," Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sendmessages")," ","\u2192"," Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in threads)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sendttsmessages")," ","\u2192"," Allows for sending of ",(0,i.kt)("inlineCode",{parentName:"li"},"/tts")," messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managemessages")," ","\u2192"," Allows for deletion of other users messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"embedlinks")," ","\u2192"," Links sent by users with this permission will be auto-embedded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attachfiles")," ","\u2192"," Allows for uploading images and files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"readmessagehistory")," ","\u2192"," Allows for reading of message history."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mentioneveryone")," ","\u2192"," Allows for using the ",(0,i.kt)("inlineCode",{parentName:"li"},"@everyone")," tag to notify all users in a channel, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"@here")," tag to notify all online users in a channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"useexternalemojis")," ","\u2192"," Allows the usage of custom emojis from other servers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"viewguildinsights")," ","\u2192"," Allows for viewing guild insights."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"changenickname")," ","\u2192"," Allows for modification of own nickname."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managenicknames")," ","\u2192"," Allows for modification of other users nicknames."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"manageroles")," ","\u2192"," Allows management and editing of roles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managewebhooks")," ","\u2192"," Allows management and editing of webhooks. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"manageemojisandstickers")," ","\u2192","  Allows management and editing of emojis and stickers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"useapplicationcommands")," ","\u2192"," Allows members to use application commands, including slash commands and context menu commands."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"manageevents")," ","\u2192"," Allows for creating, editing, and deleting scheduled events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managethreads")," ","\u2192"," Allows for deleting and archiving threads, and viewing all private threads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"createpublicthreads")," ","\u2192"," Allows for creating public and announcement threads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"createprivatethreads")," ","\u2192"," Allows for creating private threads. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"useexternalstickers")," ","\u2192"," Allows the usage of custom stickers from other servers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sendmessagesinthreads")," ","\u2192"," Allows for sending messages in threads. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"moderatemembers")," ","\u2192"," Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels")),(0,i.kt)("h3",{id:"voice-permissions"},"Voice Permissions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"priorityspeaker")," ","\u2192"," Allows for using priority speaker in a voice channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stream")," ","\u2192"," Allows the user to go live."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"connect")," ","\u2192"," Allows for joining of a voice channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"speak")," ","\u2192"," Allows for speaking in a voice channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mute")," ","\u2192"," Allows for muting members in a voice channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deafen")," ","\u2192"," Allows for deafening of members in a voice channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"movemembers")," ","\u2192"," Allows for moving of members between voice channels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"usevad")," ","\u2192"," Allows for using voice-activity-detection in a voice channel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requesttospeak")," ","\u2192"," Allows for requesting to speak in stage channels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"useembeddedactivities")," ","\u2192"," Allows for using Activities in a voice channel.")))}u.isMDXComponent=!0}}]);