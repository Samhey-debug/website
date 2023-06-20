"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"$interactionUpdate",description:"Update an interaction message."},i=void 0,l={unversionedId:"functions/interactionupdate",id:"version-5.5.5/functions/interactionupdate",title:"$interactionUpdate",description:"Update an interaction message.",source:"@site/versioned_docs/version-5.5.5/functions/interactionupdate.md",sourceDirName:"functions",slug:"/functions/interactionupdate",permalink:"/docs/5.5.5/functions/interactionupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687295545,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$interactionUpdate",description:"Update an interaction message."},sidebar:"docs",previous:{title:"$interactionReply",permalink:"/docs/5.5.5/functions/interactionreply"},next:{title:"$isBanned",permalink:"/docs/5.5.5/functions/isbanned"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Property Types",id:"property-types",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Example",id:"example",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionUpdate"),", updates the interaction message send. It's used for buttons, select menu or on modals to update the message."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$interactionUpdate[content;embeds?;components?;files?;allowed mentions?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A content message for reply"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"embeds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Send embed messages for reply"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"components"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds components for reply"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"files"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Send file & attachment for reply"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"allowed mentions"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Allowing to "x" mentions for reply'),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h3",{id:"property-types"},"Property Types"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTENT")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"classic message text \ud83e\udd20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EMBEDS")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"embed-errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COMPONENTS")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"buttons, selection menus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FILES")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"files & attachment embed-errors should be used in here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALLOWED_MENTIONS")," \u2014 ",(0,r.kt)("em",{parentName:"li"},'"USERS,ROLES,EVERYONE"')))),(0,r.kt)("h6",{id:"footnotes"},"Footnotes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'If you want to make only embed message(s), you can just pass "content" property.')),(0,r.kt)("li",{parentName:"ul"},"Message ",(0,r.kt)("em",{parentName:"li"},"cannot")," be ephemeral, if it wasn't an ephemeral message before!")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let us explain how does it work \ud83e\udd20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionReply[\n    Hello, world!\n    ;\n    ;{actionRow:{button:Hello bot!:1:helloBtnID:false:\ud83d\udc4b}}\n  ]\n  `\n});\n\nbot.interactionCommand({\n  name: \"helloBtnID\", //Button Custom ID\n  prototype: 'button', //Defining the interaction is the button\n  code: `\n  $interactionUpdate[\n    ;{newEmbed:\n      {description:The message is now an embed!}\n    }\n  ]\n  `\n})\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionUpdate")," can be seems like ",(0,r.kt)("inlineCode",{parentName:"p"},"$interactionEdit"),". But it's difference, it updates the message via a new interaction while ",(0,r.kt)("inlineCode",{parentName:"p"},"$interactionEdit")," updates the current interaction."))}c.isMDXComponent=!0}}]);