"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>N,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$resetGuildVar",description:"$resetGuildVar \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.",id:"resetGuildVar"},b=void 0,v={unversionedId:"functions/variables-related/resetGuildVar",id:"version-6.4.0/functions/variables-related/resetGuildVar",title:"$resetGuildVar",description:"$resetGuildVar \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/resetGuildVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/resetGuildVar",permalink:"/ru/docs/functions/variables-related/resetGuildVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"$resetGuildVar",description:"$resetGuildVar \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.",id:"resetGuildVar"},sidebar:"docs",previous:{title:"$resetGlobalUserVar",permalink:"/ru/docs/functions/variables-related/resetGlobalUserVar"},next:{title:"$resetUserVar",permalink:"/ru/docs/functions/variables-related/resetUserVar"}},y={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:g},O="wrapper";function N(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,d(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$resetGuildVar")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,n.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$resetGuildVar[varname;table?]\n")),(0,n.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"varname"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u0418\u043c\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u0442\u0430\u0431\u043b\u0438\u0446\u0430?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,n.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,'\u042d\u0442\u043e \u0441\u0431\u0440\u043e\u0441\u0438\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c "\u041f\u0440\u0438\u043c\u0435\u0440":'),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "resetGuildVar",\n    code: `\n    $resetGuildVar[Example;main]\n    `\n});\n')))}N.isMDXComponent=!0}}]);