"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17661],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=o(a),k=r,g=p["".concat(m,".").concat(k)]||p[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2410:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},i=void 0,s={unversionedId:"functions/util-related/hasPerms",id:"version-6.3.0/functions/util-related/hasPerms",title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/hasPerms.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasPerms",permalink:"/docs/functions/util-related/hasPerms",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689066954,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},sidebar:"docs",previous:{title:"$hasEmbeds",permalink:"/docs/functions/util-related/hasEmbeds"},next:{title:"$hasPermsInChannel",permalink:"/docs/functions/util-related/hasPermsInChannel"}},m={},o=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:o},p="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$hasPerms")," will check if the user has the required permission."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$hasPerms[guildID;userID;...perms]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the guild where the client checks the permissions."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the user."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"...perms"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("details",null,(0,r.kt)("summary",null," ",(0,r.kt)("h3",null," Discord API Permissions ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createinvite"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create guild invites")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kickmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to kick guild members")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"banmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to ban guild members")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"administrator"),(0,r.kt)("td",{parentName:"tr",align:null},"Administrator Permissions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managechannels"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage guild channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageguild"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to modify server settings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addreactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to add reactions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewauditlog"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view the guild's audit log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priorityspeaker"),(0,r.kt)("td",{parentName:"tr",align:null},"Priority Speaker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to stream in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewchannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendmessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send messages in a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendttsmessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send Text-To-Speech messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managemessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embedlinks"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to embed links")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attachfiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to attach files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readmessagehistory"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to read the message history within a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mentioneveryone"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to mention ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone")," and all roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useexternalemojis"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use external emojis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewguildinsights"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view guild insights")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to connect to voice channels and stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to mute members in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deafenmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to deafen members in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"movemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to move members between voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usevad"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use voice-activity-detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changenickname"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to change your own nickname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managenicknames"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage other members nicknames")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageroles"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managewebhooks"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage webhooks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageemojisandstickers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage emojis and stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useapplicationcommands"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use application commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requesttospeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use request-to-speak in stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageevents"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usepublicthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use public threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useprivatethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use private threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createpublicthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create public threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createprivatethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create private threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useexternalstickers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use extrernal stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendmessagesinthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send messages in threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useembeddedactivities"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to start activities within voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"moderatemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to timeout and remove timeouts from guild members"))))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when the author has ",(0,r.kt)("inlineCode",{parentName:"p"},"kick")," permissions and return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when they don't have those:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'hasPerms',\n    code: `\n  $hasPerms[$guildID;$authorID;kick]\n  `\n});\n")))}u.isMDXComponent=!0}}]);