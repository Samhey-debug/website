"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>k,metadata:()=>f,toc:()=>N});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&d(e,n,t[n]);return e},s=(e,t)=>i(e,l(t)),m=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const k={title:"$checkCondition",description:"$checkCondition checks if a condition is either true or false.",id:"checkCondition"},h=void 0,f={unversionedId:"functions/util-related/checkCondition",id:"version-6.4.0/functions/util-related/checkCondition",title:"$checkCondition",description:"$checkCondition checks if a condition is either true or false.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/checkCondition.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/checkCondition",permalink:"/hi/docs/functions/util-related/checkCondition",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$checkCondition",description:"$checkCondition checks if a condition is either true or false.",id:"checkCondition"},sidebar:"docs",previous:{title:"$charCount",permalink:"/hi/docs/functions/util-related/charCount"},next:{title:"$checkContains",permalink:"/hi/docs/functions/util-related/checkContains"}},g={},N=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2},{value:"Advanced Example",id:"advanced-example",level:3},{value:"Logical conjunction",id:"logical-conjunction",level:4},{value:"Logical OR",id:"logical-or",level:4}],b={toc:N},v="wrapper";function y(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(v,s(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$checkCondition")," checks if a condition is either true or false."),(0,a.kt)("h2",u({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$checkCondition[condition]\n")),(0,a.kt)("h2",u({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"condition"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Condition you want to check."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h4",u({},{id:"valid-mathematical-operators"}),"Valid Mathematical Operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Operator"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Mathematical Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"not equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"less than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),">","="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"greater than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"greater than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"less than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\\ "),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"&&"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"logical conjunction")))),(0,a.kt)("h2",u({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"50")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"25"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'checkCondition',\n    code: `\n  $checkCondition[50>25]\n  `\n});\n")),(0,a.kt)("h3",u({},{id:"advanced-example"}),"Advanced Example"),(0,a.kt)("h4",u({},{id:"logical-conjunction"}),"Logical conjunction"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"50")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"25")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"120")," is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"280"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'checkCondition',\n    code: `\n  $checkCondition[50>25&&120<280]\n  `\n});\n")),(0,a.kt)("h4",u({},{id:"logical-or"}),"Logical OR"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as one of the two arguments (",(0,a.kt)("inlineCode",{parentName:"p"},"50>25"),") are ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'checkCondition',\n    code: `\n  $checkCondition[50>25||true==false]\n  `\n});\n")))}y.isMDXComponent=!0}}]);