"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79718],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},669:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$error",description:"This function returns the error that the interpreter threw."},h=void 0,y={unversionedId:"functions/error",id:"version-5.5.5/functions/error",title:"$error",description:"This function returns the error that the interpreter threw.",source:"@site/versioned_docs/version-5.5.5/functions/error.md",sourceDirName:"functions",slug:"/functions/error",permalink:"/hi/docs/5.5.5/functions/error",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$error",description:"This function returns the error that the interpreter threw."},sidebar:"docs",previous:{title:"$emojisFromMessage",permalink:"/hi/docs/5.5.5/functions/emojisfrommessage"},next:{title:"$eval",permalink:"/hi/docs/5.5.5/functions/eval"}},g={},b=[{value:"Usage",id:"usage",level:4}],v={toc:b},O="wrapper";function w(e){var r=e,{components:o}=r,a=d(r,["components"]);return(0,n.kt)(O,f(u(u({},v),a),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"With this function you can execute a command if a command execution failed becasue of an interpreter error. The bot will execute the error property of the command if the intepreter throws an error. $error returns that error that was sent in the bot's console."),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Example usage of the ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," property with the usage of $error inside to send the console error of the eval command in the given channel ($channelSendMessage). You can use basically all functions in there."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "eval",\nerror: `$channelSendMessage[839061638707019836;$userTag had a problem: $error in $channelName!]`\ncode: `\n$djsEval[message]\n`\n})\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example message of the error log.",src:t(7650).Z,width:"780",height:"482"})))}w.isMDXComponent=!0},7650:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image (3)-adbcc08dba095a6d30607c84007e1ef1.png"}}]);