"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>O,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={title:"$arrayAt",description:"$arrayAt will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.",id:"arrayAt"},m=void 0,b={unversionedId:"functions/array-related/arrayAt",id:"version-6.4.0/functions/array-related/arrayAt",title:"$arrayAt",description:"$arrayAt will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayAt.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayAt",permalink:"/ar/docs/functions/array-related/arrayAt",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$arrayAt",description:"$arrayAt will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.",id:"arrayAt"},sidebar:"docs",previous:{title:"Soundcloud ID",permalink:"/ar/docs/guides/other/soundcloudid"},next:{title:"$arrayConcat",permalink:"/ar/docs/functions/array-related/arrayConcat"}},g={},h=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],v={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,s(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$arrayAt")," will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found."),(0,n.kt)("h2",d({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayAt[name;index]\n")),(0,n.kt)("h2",d({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Name of the array."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"index"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The position of the element."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",d({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This will return ",(0,n.kt)("inlineCode",{parentName:"li"},"Aoi.dashboard"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-at",\n    code: `\n  $arrayAt[Aoi;3]\n\n  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]\n  `\n    // Returns "Aoi.dashboard"\n});\n')))}O.isMDXComponent=!0}}]);