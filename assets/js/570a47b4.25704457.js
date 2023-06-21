"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"$footer",description:"Set a footer, to the embed."},i=void 0,l={unversionedId:"functions/footer",id:"version-5.5.5/functions/footer",title:"$footer",description:"Set a footer, to the embed.",source:"@site/versioned_docs/version-5.5.5/functions/footer.md",sourceDirName:"functions",slug:"/functions/footer",permalink:"/docs/5.5.5/functions/footer",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687324528,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$footer",description:"Set a footer, to the embed."},sidebar:"docs",previous:{title:"$findUser",permalink:"/docs/5.5.5/functions/finduser"},next:{title:"$forEachChannel",permalink:"/docs/5.5.5/functions/foreachchannel"}},c={},p=[],s={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function adds a footer to the embed"),(0,o.kt)("p",null,"Fields"),(0,o.kt)("p",null,"This function has 2 required fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Index ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"URL ","(","Optional",")")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$footer[index;text;url (optional)]")),(0,o.kt)("p",null,"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Index - Seperates diffrent footers to diffrent embeds"),(0,o.kt)("li",{parentName:"ul"},"Text - The text that goes in the footer"),(0,o.kt)("li",{parentName:"ul"},"URL - The icon next to the text")),(0,o.kt)("p",null,"Usage"),(0,o.kt)("p",null,"Without the optional field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "footer", \ncode: `\n$description[1;Hello world!]\n$footer[1;Say hello back!]` \n})\n')),(0,o.kt)("p",null,"With different index"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "multi-footer",\ncode: `\n$description[1;Hello world!]\n$footer[1;Say hello back!]\n\n$description[2;Description 2]\n$footer[2;Footer 2]\n\n$description[3;Description 3]\n$footer[3;Footer 3!]\n`\n})\n')),(0,o.kt)("p",null,"With the optional field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "footer", \ncode: `\n$description[1;Hello world!]\n$footer[1;Say hello back!;https://cdn.discordapp.com/attachments/773361503226298369/773555092666318848/773437619207012422.png]` \n})\n')))}u.isMDXComponent=!0}}]);