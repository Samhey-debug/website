"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36528],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=o(n),k=r,c=p["".concat(m,".").concat(k)]||p[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90228:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>g,default:()=>P,frontMatter:()=>c,metadata:()=>N,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&d(t,n,e[n]);if(s)for(var n of s(e))o.call(e,n)&&d(t,n,e[n]);return t},u=(t,e)=>l(t,i(e)),k=(t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&o.call(t,a)&&(n[a]=t[a]);return n};const c={title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},g=void 0,N={unversionedId:"functions/util-related/hasPerms",id:"version-6.4.0/functions/util-related/hasPerms",title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/hasPerms.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasPerms",permalink:"/uk/docs/functions/util-related/hasPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},sidebar:"docs",previous:{title:"$hasEmbeds",permalink:"/uk/docs/functions/util-related/hasEmbeds"},next:{title:"$hasPermsInChannel",permalink:"/uk/docs/functions/util-related/hasPermsInChannel"}},h={},b=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],y={toc:b},f="wrapper";function P(t){var e=t,{components:n}=e,r=k(e,["components"]);return(0,a.kt)(f,u(p(p({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$hasPerms")," will check if the user has the required permission."),(0,a.kt)("h2",p({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$hasPerms[guildID;userID;...perms]\n")),(0,a.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"guildID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID of the guild where the client checks the permissions."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID of the user."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"...perms"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,a.kt)("details",null,(0,a.kt)("summary",null," ",(0,a.kt)("h3",null," Discord API Permissions ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Permission"),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createinvite"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create guild invites")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"kickmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to kick guild members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"banmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to ban guild members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"administrator"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Administrator Permissions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managechannels"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage guild channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageguild"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to modify server settings")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"addreactions"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to add reactions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewauditlog"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view the guild's audit log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"priorityspeaker"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Priority Speaker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"stream"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to stream in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewchannel"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendmessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendttsmessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send Text-To-Speech messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managemessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"embedlinks"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to embed links")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"attachfiles"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to attach files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"readmessagehistory"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to read the message history within a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"mentioneveryone"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mention ",(0,a.kt)("inlineCode",{parentName:"td"},"@everyone")," and all roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useexternalemojis"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use external emojis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewguildinsights"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view guild insights")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"connect"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to connect to voice channels and stages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"mutemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mute members in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"deafenmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to deafen members in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"movemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to move members between voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usevad"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use voice-activity-detection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"changenickname"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to change your own nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managenicknames"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage other members nicknames")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageroles"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managewebhooks"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage webhooks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageemojisandstickers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage emojis and stickers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useapplicationcommands"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use application commands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"requesttospeak"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use request-to-speak in stages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageevents"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usepublicthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use public threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useprivatethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use private threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create public threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create private threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useexternalstickers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use extrernal stickers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendmessagesinthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useembeddedactivities"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to start activities within voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"moderatemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to timeout and remove timeouts from guild members"))))),(0,a.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when the author has ",(0,a.kt)("inlineCode",{parentName:"p"},"kick")," permissions and return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," when they don't have those:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hasPerms',\n    code: `\n  $hasPerms[$guildID;$authorID;kick]\n  `\n});\n")))}P.isMDXComponent=!0}}]);