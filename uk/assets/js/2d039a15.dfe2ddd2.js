"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),y=n,s=d["".concat(p,".").concat(y)]||d[y]||m[y]||l;return r?a.createElement(s,i(i({ref:t},u),{},{components:r})):a.createElement(s,i({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},28352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>O,frontMatter:()=>s,metadata:()=>f,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),y=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const s={title:"$arrayFilter",description:"$arrayFilter \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0443 \u043c\u0430\u0441\u0438\u0432\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0439\u043e\u0433\u043e.",id:"arrayFilter"},k=void 0,f={unversionedId:"functions/array-related/arrayFilter",id:"version-6.4.0/functions/array-related/arrayFilter",title:"$arrayFilter",description:"$arrayFilter \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0443 \u043c\u0430\u0441\u0438\u0432\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0439\u043e\u0433\u043e.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayFilter.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFilter",permalink:"/uk/docs/functions/array-related/arrayFilter",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$arrayFilter",description:"$arrayFilter \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0443 \u043c\u0430\u0441\u0438\u0432\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0439\u043e\u0433\u043e.",id:"arrayFilter"},sidebar:"docs",previous:{title:"$arrayEvery",permalink:"/uk/docs/functions/array-related/arrayEvery"},next:{title:"$arrayFind",permalink:"/uk/docs/functions/array-related/arrayFind"}},g={},b=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",id:"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438-\u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],N={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.kt)(v,m(d(d({},N),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayFilter")," \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c, \u0447\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0438\u0432\u0443 \u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0439\u043e\u0433\u043e."),(0,a.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayFilter[\u043d\u0430\u0437\u0432\u0430;\u0437\u0430\u043f\u0438\u0442;queryType?;separator?]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0456\u043c'\u044f"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0406\u043c'\u044f \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0437\u0430\u043f\u0438\u0442"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0415\u043b\u0435\u043c\u0435\u043d\u0442, \u044f\u043a\u0438\u0439 \u043c\u0438 \u0431\u0443\u0434\u0435\u043c\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"queryType?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"separator?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0420\u043e\u0437\u0434\u0456\u043b\u044c\u043d\u0438\u043a."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,a.kt)("h2",d({},{id:"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438-\u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f"}),"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," - \u041a\u043e\u0436\u0435\u043d \u0435\u043b\u0435\u043c\u0435\u043d\u0442, \u044f\u043a\u0438\u0439 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430\u043f\u0438\u0442\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," - \u041a\u043e\u0436\u0435\u043d \u0435\u043b\u0435\u043c\u0435\u043d\u0442, \u044f\u043a\u0438\u0439 \u043d\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430\u043f\u0438\u0442\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">"),'  - \u0412\u0441\u0456 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0438 "\u043b\u0456\u0432\u043e\u0440\u0443\u0447" - \u043d\u0435 \u0432\u0440\u0430\u0445\u043e\u0432\u0443\u044e\u0447\u0438 \u0441\u0435\u0431\u0435.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),' - \u0412\u0441\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 "\u043f\u0440\u0430\u0432\u043e\u0440\u0443\u0447" \u0432\u0456\u0434 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0432\u0438\u043a\u043b\u044e\u0447\u0430\u044e\u0447\u0438 \u0439\u043e\u0433\u043e \u0441\u0430\u043c\u043e\u0433\u043e.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),' - \u0412\u0441\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 "\u0437\u043b\u0456\u0432\u0430" \u0432\u0456\u0434 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0447\u0438 \u0439\u043e\u0433\u043e \u0441\u0430\u043c\u043e\u0433\u043e.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),' - \u0412\u0441\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 "\u043f\u0440\u0430\u0432\u043e\u0440\u0443\u0447" \u0432\u0456\u0434 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0447\u0438 \u0439\u043e\u0433\u043e \u0441\u0430\u043c\u043e\u0433\u043e.')),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;==;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // \u0412\u043e\u043d\u043e \u043f\u043e\u0432\u0435\u0440\u043d\u0435 "akarui", \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0446\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430\u043f\u0438\u0442\u0443.\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;<=;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // \u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 "documents, bot" \u044f\u043a \u043d\u0430\u043f\u0438\u0441 \u043f\u0440\u0430\u0432\u043e\u0440\u0443\u0447 \u0432\u0456\u0434 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430.\n});\n')))}O.isMDXComponent=!0}}]);