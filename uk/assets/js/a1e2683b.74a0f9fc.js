"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$allEmojisCount",description:"$allEmojisCount will return the amount of emojis of a given type.",id:"allEmojisCount"},y=void 0,b={unversionedId:"functions/info-related/allEmojisCount",id:"version-6.4.0/functions/info-related/allEmojisCount",title:"$allEmojisCount",description:"$allEmojisCount will return the amount of emojis of a given type.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/allEmojisCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/allEmojisCount",permalink:"/uk/docs/functions/info-related/allEmojisCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$allEmojisCount",description:"$allEmojisCount will return the amount of emojis of a given type.",id:"allEmojisCount"},sidebar:"docs",previous:{title:"$allChannelsCount",permalink:"/uk/docs/functions/info-related/allChannelsCount"},next:{title:"$allMembersCount",permalink:"/uk/docs/functions/info-related/allMembersCount"}},g={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],j={toc:k},v="wrapper";function O(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(v,c(m(m({},j),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$allEmojisCount")," will return the amount of emojis of a given type."),(0,r.kt)("h2",m({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$allEmojisCount[type?]\n")),(0,r.kt)("h2",m({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0442\u0438\u043f?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Type you want the amount of to be returned."),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u043d\u0456")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Emoji Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Animated Emojis"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"animated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Stable Emojis"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"normal")))),(0,r.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"This will return the amount of emojis in your guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'allEmojisCount',\n    code: `\n  $allEmojisCount\n  `\n});\n")))}O.isMDXComponent=!0}}]);