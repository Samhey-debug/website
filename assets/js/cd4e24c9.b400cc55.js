"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42555],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=m(t),d=o,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=t(87462),o=(t(67294),t(3905));const i={title:"$modifyRolePerms"},l=void 0,a={unversionedId:"functions/modifyroleperms",id:"version-5.5.5/functions/modifyroleperms",title:"$modifyRolePerms",description:"This function allows the bot to modify the given roles permissions",source:"@site/versioned_docs/version-5.5.5/functions/modifyroleperms.md",sourceDirName:"functions",slug:"/functions/modifyroleperms",permalink:"/docs/5.5.5/functions/modifyroleperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689429644,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$modifyRolePerms"},sidebar:"docs",previous:{title:"$modifyRole",permalink:"/docs/5.5.5/functions/modifyrole"},next:{title:"$modifyWebhook",permalink:"/docs/5.5.5/functions/modifywebhook"}},s={},m=[],p={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function allows the bot to modify the given roles permissions"),(0,o.kt)("p",null,"Fields"),(0,o.kt)("p",null,"This function has 2 required fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Permission 1 ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Permission 2 ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Etc")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$modifyRolePerms[roleID;permission1;permission2 (optional);etc]")),(0,o.kt)("p",null,"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role ID - The role we're modifying the permissions"),(0,o.kt)("li",{parentName:"ul"},"Permission","(","s",")"," - The permissions that are being modified. "),(0,o.kt)("li",{parentName:"ul"},"+perm = Allow the permission"),(0,o.kt)("li",{parentName:"ul"},"-perm = Deny the permission"),(0,o.kt)("li",{parentName:"ul"},"+/-all - Allows or denies all the permissions")),(0,o.kt)("p",null,"Usage"),(0,o.kt)("p",null,"Allowing a permission"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];+admin]`\n})\n')),(0,o.kt)("p",null,"Denying a permission"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];-admin]`\n})\n')),(0,o.kt)("p",null,"Allowing all permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];+all]`\n})\n')))}u.isMDXComponent=!0}}]);