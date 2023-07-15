"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>f,toc:()=>w});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>l(e,i(t)),u=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const g={title:"$awaitMessages",description:"$awaitMessages will reply once a given message has been sent by the given user.",id:"awaitMessages"},k=void 0,f={unversionedId:"functions/awaited-related/awaitMessages",id:"version-6.4.0/functions/awaited-related/awaitMessages",title:"$awaitMessages",description:"$awaitMessages will reply once a given message has been sent by the given user.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitMessages.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitMessages",permalink:"/uk/docs/functions/awaited-related/awaitMessages",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$awaitMessages",description:"$awaitMessages will reply once a given message has been sent by the given user.",id:"awaitMessages"},sidebar:"docs",previous:{title:"$awaitMessageReactions",permalink:"/uk/docs/functions/awaited-related/awaitMessageReactions"},next:{title:"$componentCollector",permalink:"/uk/docs/functions/awaited-related/componentCollector"}},y={},w=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],b={toc:w},N="wrapper";function h(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(N,m(c(c({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitMessages")," will reply once a given message has been sent by the given user."),(0,n.kt)("h2",c({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$awaitMessages[channelID;userFilter;time;replies;cmds;errorMessage?;awaitData?;dm?]\n")),(0,n.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"channelID"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Channel ID."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"userFilter"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"User filter ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"everyone")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"specific user")," - any user ID"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"How long the command lasts / when it expires."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"replies"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'To what the bot will be responding to, multiple words can be separated with a comma  (or use "everything" to respond to everything)'),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cmds"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Commands that will be executed, multiple commands can be separated with a comma."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"errorMessage?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Error message when the command expires."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"awaitData?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u0414\u0430\u043d\u0456."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"dm?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"User ID of where the command may be executed."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,n.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"This will reply to any message you send after executing the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitMessages",\n    code: `\n  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? You don\'t want to talk to me..?] \n  What\'s your name?\n  `\n    // Please make sure that the awaitedCommand name is ALL lowercase or else it won\'t work.\n});\n\nbot.awaitedCommand({\n    name: "awaitedcommandexample",\n    code: `\n  Nice to meet you, $message!\n  `\n});\n')))}h.isMDXComponent=!0}}]);