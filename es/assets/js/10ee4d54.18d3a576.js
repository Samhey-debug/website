"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$createFile"},y=void 0,b={unversionedId:"functions/createfile",id:"version-5.5.5/functions/createfile",title:"$createFile",description:"This function creates a file within your host",source:"@site/versioned_docs/version-5.5.5/functions/createfile.md",sourceDirName:"functions",slug:"/functions/createfile",permalink:"/es/docs/5.5.5/functions/createfile",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$createFile"},sidebar:"docs",previous:{title:"$createChannel",permalink:"/es/docs/5.5.5/functions/createchannel"},next:{title:"$createObject",permalink:"/es/docs/5.5.5/functions/createobject"}},h={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Extensions",id:"extensions",level:4},{value:"Example",id:"example",level:3}],v={toc:g},k="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(k,d(f(f({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function creates a file within your host"),(0,r.kt)("h3",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$createFile[text;filename.extension]\n")),(0,r.kt)("h3",f({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"text"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The text to be added"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"name"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The name of file with extension"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"filename.extension"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h4",f({},{id:"extensions"}),"Extensions"),(0,r.kt)("p",null,"You can find what a file extension",(0,r.kt)("a",f({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Filename_extension"})," here"),". A brief explanation: The file extension is the acronym after the dot in the file. For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," the file extension would be ",(0,r.kt)("inlineCode",{parentName:"p"},"js")),(0,r.kt)("h3",f({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "createFile",\ncode: `\n$createFile[Hello World;hello.txt]\n`\n/*\nThis creates a text file named \'hello\'\nand inside the file you\'ll find "Hello World"\n*/\n})\n')))}O.isMDXComponent=!0}}]);