"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4326],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(f,o(o({ref:e},m),{},{components:n})):r.createElement(f,o({ref:e},m))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46445:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&m(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&m(t,n,e[n]);return t},s=(t,e)=>l(t,o(e)),d=(t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const f={title:"$setTimeout",description:"$setTimeout \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0442\u0430\u0439\u043c-\u0430\u0443\u0442 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0430\u0436\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0431\u043e\u0442\u0430).",id:"setTimeout"},k=void 0,g={unversionedId:"functions/misc-related/setTimeout",id:"version-6.4.0/functions/misc-related/setTimeout",title:"$setTimeout",description:"$setTimeout \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0442\u0430\u0439\u043c-\u0430\u0443\u0442 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0430\u0436\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0431\u043e\u0442\u0430).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/setTimeout.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/setTimeout",permalink:"/ru/docs/functions/misc-related/setTimeout",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$setTimeout",description:"$setTimeout \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0442\u0430\u0439\u043c-\u0430\u0443\u0442 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0430\u0436\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0431\u043e\u0442\u0430).",id:"setTimeout"},sidebar:"docs",previous:{title:"$setCacheData",permalink:"/ru/docs/functions/misc-related/setCacheData"},next:{title:"$shutdown",permalink:"/ru/docs/functions/misc-related/shutdown"}},b={},y=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],N={toc:y},v="wrapper";function O(t){var e=t,{components:n}=e,a=d(e,["components"]);return(0,r.kt)(v,s(c(c({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setTimeout")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0442\u0430\u0439\u043c-\u0430\u0443\u0442 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0430\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0431\u043e\u0442\u0430)."),(0,r.kt)("h2",c({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]\n")),(0,r.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0439 Cmd"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430, \u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u041f\u043e\u0441\u043b\u0435 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f / \u044d\u0442\u043e \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 ",(0,r.kt)("strong",{parentName:"td"},"21 \u0434\u043d\u0435\u0439"),"."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0442\u0430\u0439\u043c-\u0430\u0443\u0442 \u0414\u0430\u043d\u043d\u044b\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u043e\u0431\u044a\u0435\u043a\u0442"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0422\u0430\u0439\u043c-\u0430\u0443\u0442 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0442\u0430\u0439\u043c\u0430\u0443\u0442\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u043f\u0443\u043b\u044c\u0441?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u041f\u0443\u043b\u044c\u0441."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0430\u0439\u043c\u0430\u0443\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"$timeoutData[name]"),"."),(0,r.kt)("li",{parentName:"ul"},"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"21 \u0434\u043d\u0435\u0439"),".")),(0,r.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \xab\u041f\u0440\u0438\u0432\u0435\u0442!\xbb \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434 \u0432 \u043a\u0430\u043d\u0430\u043b\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setTimeout",\n    \u043a\u043e\u0434: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\n\u0431\u043e\u0442. imeoutCommand({\n    \u0438\u043c\u044f: "timeoutCommand",\n    \u043a\u043e\u0434: `\n    $channelSendMessage[$timeoutData[channelID]; \u044d\u043b\u043b\u043e, <@$timeoutData[authorID]>!]\n    \xab\n});\n')))}O.isMDXComponent=!0}}]);