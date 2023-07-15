"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1910],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(b,i(i({ref:n},c),{},{components:t})):a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"Introduction",description:"Setting up aoi.db with ease.",id:"aoidb-introduction",pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"official/aoi.db/aoidb-introduction",id:"official/aoi.db/aoidb-introduction",title:"Introduction",description:"Setting up aoi.db with ease.",source:"@site/extensions/official/aoi.db/1introduction.md",sourceDirName:"official/aoi.db",slug:"/official/aoi.db/aoidb-introduction",permalink:"/extensions/official/aoi.db/aoidb-introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"Setting up aoi.db with ease.",id:"aoidb-introduction",pagination_prev:null,pagination_next:null},sidebar:"docs"},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Installation",id:"installation",level:3},{value:"Database Types",id:"database-types",level:2},{value:"Database Server",id:"database-server",level:4},{value:"Client",id:"client",level:4}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=c("Tabs"),d=c("TabItem"),m={toc:p},b="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(b,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Documentation",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In-depth documentation can be found ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://akaruidevelopment.github.io/aoi.db/index.html"},"here")),".")),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#installation"},"Installation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#example-usage"},"Setup")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#database-types"},"Types")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)(u,{groupId:"pref-install",mdxType:"Tabs"},(0,r.kt)(d,{value:"i-npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js 17.0.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @akarui/aoi.db\n"))),(0,r.kt)(d,{value:"i-yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js 17.0.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @akarui/aoi.db\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"database-types"},"Database Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KeyValue - A simple database that stores key value pairs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const { KeyValue } = require("@akarui/aoi.db") //commonjs\n  // or\n  import { KeyValue } from "@akarui/aoi.db" //esm\n\n  // Basic Setup\n  const db = new KeyValue({\n    path: "./path/",\n    tables: ["table"],\n  });\n\n  db.on("ready", () => {\n    console.log("Database is ready!");\n  });\n\n  db.connect();\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WideColumn - A database that stores data in a column")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const { WideColumn, Column } = require("@akarui/aoi.db") //commonjs\n  // or\n  import { WideColumn, Column } from "@akarui/aoi.db" //esm\n\n  // Basic Setup\n\n  const prime = new Column({\n    name: "id",\n    primary: true,\n    type: "bigint",\n    default:0n,\n  });\n  const xp = new Column({\n    name: "xp",\n    type: "number",\n    primary: false,\n    sortOrder: "DESC",\n    default : 0,\n  });\n\n  const db = new WideColumn({\n    path: "./path/",\n    encryptOption: {\n      securitykey: "a-32-characters-long-string-here",\n    },\n    tables: [\n      {\n        name: "main",\n        columns: [prime, xp ],\n      },\n    ],\n  });\n\n  db.on("ready", () => {\n    console.log("Database is ready!");\n  });\n\n  db.connect();\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remote - A database that stores data in a remote server")),(0,r.kt)("h4",{id:"database-server"},"Database Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { Receiver } = require("@akarui/aoi.db"); // commonJS\n// or\nimport { Receiver } from "@akarui/aoi.db"; // ESM\n\nconst rec = new Receiver({\n  logEncrypt: "a-32-characters-long-string-here",\n  logPath: "./logPath/",\n  wsOptions: {\n    port: portNo, // 443 for SSL WSS and 80 for WS\n    clientTracking: true,\n  },\n  whitelistedIps: "*",\n});\n\nrec.on("connect", () => {\n  console.log("connected");\n});\n\nrec.connect();\n')),(0,r.kt)("h4",{id:"client"},"Client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { Transmitter, TransmitterFlags } = require("@akarui/aoi.db"); // commonJS\n// or\nimport { Transmitter, TransmitterFlags } from "@akarui/aoi.db"; // ESM\n\nconst db = new Transmitter({\n  path: "websocket path",\n  // path : "ws://localhost:80",\n  databaseType: "KeyValue or WideColumn",\n  dbOptions: {\n    path: "./databasePath in remote server/",\n    encryptOption: {\n      securitykey: "a-32-characters-long-string-here",\n      enabled: true,\n    },\n  },\n  name: "username",\n  pass: "password",\n  flags: TransmitterFlags.READ_WRITE, // READ_WRITE, READ_ONLY, WRITE_ONLY\n  tables: ["table"],\n});\n\ndb.on("ready", () => {\n  console.log("ready");\n});\ndb.on("close", (code, reason) => {\n  console.log("[TRANSMITTER] => " + code + " " + reason);\n});\ndb.connect();\n')))}f.isMDXComponent=!0}}]);