import{j as r}from"./jsx-runtime.Ol9K6dT-.js";import{r as n}from"./index.DFv2mRv-.js";import{D as h,a as l,b as p,c as j,d as f,e as u,f as x,g,h as D,i as v}from"./index.D0zrfVgs.js";import"./tslib.es6.Bt5fVyVF.js";import"./index.Djw7Lfsk.js";const E={src:"/_astro/leref.DTBl2iYx.png",width:256,height:256,format:"webp"};function A({user:o,bot:d,embeds:a,buttons:s}){return n.useState(document.documentElement.getAttribute("data-theme")==="light"),r.jsx("div",{className:"not-content",children:r.jsxs(h,{children:[o&&r.jsx(l,{author:"Leref",avatar:E.src,children:o}),r.jsxs(l,{author:"Akarui Helper",avatar:"https://cdn.discordapp.com/avatars/1138204326402203691/a_b8d941eebad1a41cf177148834f84bb8.gif?size=4096",bot:!0,verified:!0,children:[d,a&&a.map((t,i)=>r.jsx(l,{children:t.fields&&r.jsxs(p,{slot:"embeds",color:t.color,image:t.image,"embed-title":t.title,children:[t.description&&r.jsx(j,{slot:"description",children:t.description}),t.footer&&r.jsx(f,{slot:"footer",children:t.footer}),r.jsx(u,{slot:"fields",children:t.fields.map((e,c)=>r.jsx(x,{fieldTitle:e.title,inline:e.inline,children:e.value},c))})]})},i)),s&&r.jsx(g,{slot:"components",children:Array.from({length:Math.max(...s.map(t=>t.row))+1},(t,i)=>r.jsx(D,{children:s.filter(e=>e.row===i).map((e,c)=>{const m={type:e.type,...e.url&&{url:e.url},...e.emoji&&{emoji:e.emoji},...e["emoji-name"]&&{"emoji-name":e["emoji-name"]}};return n.createElement(v,{...m,key:c},e.label)})},i))})]})]})})}function y({user:o,bot:d,embeds:a,buttons:s}){return n.useState(document.documentElement.getAttribute("data-theme")==="light"),r.jsx("div",{className:"not-content",children:r.jsxs(h,{lightTheme:!0,children:[o&&r.jsx(l,{author:"Leref",avatar:E.src,children:o}),r.jsxs(l,{author:"Akarui Helper",avatar:"https://cdn.discordapp.com/avatars/1138204326402203691/a_b8d941eebad1a41cf177148834f84bb8.gif?size=4096",bot:!0,verified:!0,children:[d,a&&a.map((t,i)=>r.jsx(l,{children:t.fields&&r.jsxs(p,{slot:"embeds",color:t.color,image:t.image,"embed-title":t.title,children:[t.description&&r.jsx(j,{slot:"description",children:t.description}),t.footer&&r.jsx(f,{slot:"footer",children:t.footer}),r.jsx(u,{slot:"fields",children:t.fields.map((e,c)=>r.jsx(x,{fieldTitle:e.title,inline:e.inline,children:e.value},c))})]})},i)),s&&r.jsx(g,{slot:"components",children:Array.from({length:Math.max(...s.map(t=>t.row))+1},(t,i)=>r.jsx(D,{children:s.filter(e=>e.row===i).map((e,c)=>{const m={type:e.type,...e.url&&{url:e.url},...e.emoji&&{emoji:e.emoji},...e["emoji-name"]&&{"emoji-name":e["emoji-name"]}};return n.createElement(v,{...m,key:c},e.label)})},i))})]})]})})}function _(o){const[d,a]=n.useState(document.documentElement.getAttribute("data-theme")==="light");return n.useEffect(()=>{const s=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="data-theme"&&a(document.documentElement.getAttribute("data-theme")==="light")})});return s.observe(document.documentElement,{attributes:!0}),()=>{s.disconnect()}},[]),d?r.jsx(y,{...o}):r.jsx(A,{...o})}export{_ as default};
