"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$ordinal",description:"$ordinal a\xf1ade st, nd, rd, th a un n\xfamero como 1st, 2nd, 3rd, 4th.",id:"ordinal"},v=void 0,y={unversionedId:"functions/math-related/ordinal",id:"version-6.4.0/functions/math-related/ordinal",title:"$ordinal",description:"$ordinal a\xf1ade st, nd, rd, th a un n\xfamero como 1st, 2nd, 3rd, 4th.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/math-related/ordinal.md",sourceDirName:"functions/math-related",slug:"/functions/math-related/ordinal",permalink:"/es/docs/functions/math-related/ordinal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$ordinal",description:"$ordinal a\xf1ade st, nd, rd, th a un n\xfamero como 1st, 2nd, 3rd, 4th.",id:"ordinal"},sidebar:"docs",previous:{title:"$multi",permalink:"/es/docs/functions/math-related/multi"},next:{title:"$round",permalink:"/es/docs/functions/math-related/round"}},b={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:k},g="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(g,m(s(s({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ordinal")," a\xf1ade ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"th")," a un n\xfamero como ",(0,r.kt)("inlineCode",{parentName:"p"},"1st"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"3rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4th"),"."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$ordinal[n\xfamero]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"N\xfamero que desea a\xf1adirle ",(0,r.kt)("inlineCode",{parentName:"td"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"th"),"."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ordinal',\n    code: `\n  $ordinal[12] -> devuelve 12nd \n  $ordinal[50] -> devuelve 50th\n  $ordinal[11] -> devuelve 11st\n  $ordinal[88] -> devuelve 88th\n  `\n});\n")))}O.isMDXComponent=!0}}]);