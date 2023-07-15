"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return a?r.createElement(d,l(l({ref:t},s),{},{components:a})):r.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>v,toc:()=>y});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&s(e,a,t[a]);return e},b=(e,t)=>i(e,l(t)),m=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const d={title:"$abbreviate",description:"$abbreviate allowing you to abbreviate large numbers.",id:"abbreviate"},f=void 0,v={unversionedId:"functions/abbreviate",id:"version-5.5.5/functions/abbreviate",title:"$abbreviate",description:"$abbreviate allowing you to abbreviate large numbers.",source:"@site/versioned_docs/version-5.5.5/functions/abbreviate.md",sourceDirName:"functions",slug:"/functions/abbreviate",permalink:"/ar/docs/5.5.5/functions/abbreviate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$abbreviate",description:"$abbreviate allowing you to abbreviate large numbers.",id:"abbreviate"},sidebar:"docs",previous:{title:"Using Events",permalink:"/ar/docs/5.5.5/advanced-guides/using-events"},next:{title:"$activity",permalink:"/ar/docs/5.5.5/functions/activity"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Abbreviation Types",id:"abbreviation-types",level:2},{value:"Examples",id:"examples",level:2},{value:"Without decimal:",id:"without-decimal",level:3},{value:"With decimal:",id:"with-decimal",level:3}],k={toc:y},h="wrapper";function O(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(h,b(u(u({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function abbreviates large numbers."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$abbreviate[number;decimal?]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The number is going to abbreviated"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"decimal"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"Separates the number in a decimal way"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",u({},{id:"abbreviation-types"}),"Abbreviation Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k")," \u2014 thousands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," \u2014 millions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"b")," \u2014 billions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"t")," \u2014 trillions")),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("h3",u({},{id:"without-decimal"}),"Without decimal:"),(0,r.kt)("p",null,"This returns 7k."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "abbreviate",\n  code: `\n  $abbreviate[6900]\n  `\n});\n')),(0,r.kt)("h3",u({},{id:"with-decimal"}),"With decimal:"),(0,r.kt)("p",null,"This returns 7.0k."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "abbreviate",\n  code: `\n  $abbreviate[6983;1]\n  `\n});\n')))}O.isMDXComponent=!0}}]);