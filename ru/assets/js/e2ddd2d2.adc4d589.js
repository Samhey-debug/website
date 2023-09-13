"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),y=n,s=u["".concat(p,".").concat(y)]||u[y]||m[y]||l;return r?a.createElement(s,i(i({ref:t},c),{},{components:r})):a.createElement(s,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},19158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>s,metadata:()=>k,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),y=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const s={title:"$arrayFind",description:"$arrayFind \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e.",id:"arrayFind"},f=void 0,k={unversionedId:"functions/array-related/arrayFind",id:"version-6.4.0/functions/array-related/arrayFind",title:"$arrayFind",description:"$arrayFind \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayFind.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFind",permalink:"/ru/docs/functions/array-related/arrayFind",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"$arrayFind",description:"$arrayFind \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e.",id:"arrayFind"},sidebar:"docs",previous:{title:"$arrayFilter",permalink:"/ru/docs/functions/array-related/arrayFilter"},next:{title:"$arrayForEach",permalink:"/ru/docs/functions/array-related/arrayForEach"}},g={},b=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f",id:"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],N={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.kt)(v,m(u(u({},N),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayFind")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e."),(0,a.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$arrayFind[name;query;queryType?;separator?]\n")),(0,a.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0437\u0430\u043f\u0440\u043e\u0441"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u042d\u043b\u0435\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0436\u0434\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0442\u0438\u043f \u0437\u0430\u043f\u0440\u043e\u0441\u0430?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,a.kt)("h2",u({},{id:"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"}),"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 \u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 \u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">"),'  \u2014 \u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b "\u0441\u043b\u0435\u0432\u0430" \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0431\u044f.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),'  \u2014 \u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b "\u0441\u043f\u0440\u0430\u0432\u0430" \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0431\u044f.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),' \u2014 \u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b "\u0441\u043b\u0435\u0432\u0430" \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0441\u0435\u0431\u044f.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),' \u2014 \u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b "\u0441\u043f\u0440\u0430\u0432\u0430" \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0441\u0435\u0431\u044f.')),(0,a.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-find",\n    code: `\n  $arrayFind[array;akarui;==;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // \u0411\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u043e "akarui" \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c.\n});\n')))}O.isMDXComponent=!0}}]);