"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>b,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const g={title:"Subcommand Groups",description:"This page covers everything about Subcommand Groups of Application Commands.",id:"interaction-subcommandgroups"},f=void 0,b={unversionedId:"guides/application-cmds/interaction-subcommandgroups",id:"version-6.4.0/guides/application-cmds/interaction-subcommandgroups",title:"Subcommand Groups",description:"This page covers everything about Subcommand Groups of Application Commands.",source:"@site/versioned_docs/version-6.4.0/guides/application-cmds/3subcommandgroups.md",sourceDirName:"guides/application-cmds",slug:"/guides/application-cmds/interaction-subcommandgroups",permalink:"/ru/docs/guides/application-cmds/interaction-subcommandgroups",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"Subcommand Groups",description:"This page covers everything about Subcommand Groups of Application Commands.",id:"interaction-subcommandgroups"},sidebar:"docs",previous:{title:"Subcommands",permalink:"/ru/docs/guides/application-cmds/interaction-subcommands"},next:{title:"Autocomplete",permalink:"/ru/docs/guides/application-cmds/interaction-autocomplete"}},h={},k=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Sub command groups",id:"sub-command-groups",level:2},{value:"Creating Application Commands",id:"creating-application-commands",level:2},{value:"Examples of creating Application Commands with sub command groups",id:"examples-of-creating-application-commands-with-sub-command-groups",level:3},{value:"Preview of the Example",id:"preview-of-the-example",level:3},{value:"Replying to Sub commands/groups",id:"replying-to-sub-commandsgroups",level:2}],y={toc:k},N="wrapper";function v(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(N,d(c(c({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",c({},{title:"Unfinished",type:"info"}),(0,a.kt)("h2",c({parentName:"admonition"},{id:"this-guide-is-unfinished-and-will-change-in-the-future"}),"This guide is unfinished, and will change in the future.")),(0,a.kt)("h2",c({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#sub-commands"}),"Sub commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#creating-application-commands"}),"Creating Application Commands"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#examples-of-creating-application-commands-with-sub-commands"}),"Examples of creating Application Commands with sub commands"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#creating-sub-commands-with-options"}),"Creating Sub Commands with options")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#preview-of-the-example"}),"Preview of the Example")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"#replying-to-sub-commands"}),"Replying to Sub commands"))),(0,a.kt)("hr",null),(0,a.kt)("h2",c({},{id:"sub-command-groups"}),"Sub command groups"),(0,a.kt)("p",null,'Sub-commands are apart of slash commands and are used to add as the name already suggest sub commands to the regular slash command. Which does not only "bypass" the slash command limit but also allows you to properly structure your application commands.'),(0,a.kt)("h2",c({},{id:"creating-application-commands"}),"Creating Application Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"guildID/global"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string, integer"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The type of application command, either for every guild (global) or for one specific guild (specific guildID)."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string, number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The actual slash command name that will be visible to the user."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string, number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The slash command description that will be visible to the user."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"defaultPermission"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"If the application command should syncronisate to the default permissions."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The application command type (explained below)"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"options?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Slash commands options."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h3",c({},{id:"examples-of-creating-application-commands-with-sub-command-groups"}),"Examples of creating Application Commands with sub command groups"),(0,a.kt)("p",null,"The official documentation can be found ",(0,a.kt)("a",c({parentName:"p"},{href:"https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups"}),"here")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[guildID/global;moderation;Moderation Commands!;true;slash;[{\n            "name": "user",\n            "description": "Get or edit permissions for a user",\n            "type": 2, // 2 is type SUB_COMMAND_GROUP\n            "options": [\n                {\n                    "name": "get",\n                    "description": "Get permissions for a user",\n                    "type": 1 // 1 is type SUB_COMMAND\n                },\n                {\n                    "name": "edit",\n                    "description": "Edit permissions for a user",\n                    "type": 1\n                }\n            ]\n        },\n        {\n            "name": "role",\n            "description": "Get or edit permissions for a role",\n            "type": 2,\n            "options": [\n                {\n                    "name": "get",\n                    "description": "Get permissions for a role",\n                    "type": 1\n                },\n                {\n                    "name": "edit",\n                    "description": "Edit permissions for a role",\n                    "type": 1\n                }\n            ]\n        }\n    ]\n}]`\n});\n')),(0,a.kt)("h3",c({},{id:"preview-of-the-example"}),"Preview of the Example"),(0,a.kt)("p",null,(0,a.kt)("img",c({parentName:"p"},{src:"https://discord.com/assets/4cfea1bfc6d3ed0396c16cd47e0a7154.png",alt:"preview"}))),(0,a.kt)("h2",c({},{id:"replying-to-sub-commandsgroups"}),"Replying to Sub commands/groups"),(0,a.kt)("p",null,'To interact with those we need to filter the different options of the "moderation" slash commands. We can do that with ',(0,a.kt)("inlineCode",{parentName:"p"},"$onlyIf")," and some advanced functions."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"$onlyIf[$interactionData[options._subcommand]==sub_command_name;]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionData")," contains information about the interaction, and we use ",(0,a.kt)("inlineCode",{parentName:"p"},"$onlyIf")," to check if the subcommand matches ours. "),(0,a.kt)("p",null,"This will basically check for the sub command name and if it doesn't match it will block the command, so for our case it would look something like this.."))}v.isMDXComponent=!0}}]);