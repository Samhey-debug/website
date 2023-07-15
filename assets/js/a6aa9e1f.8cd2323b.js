"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93089,27918],{12462:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010),l=a(7452),i=a(9322);function o(e){const{sidebar:t,toc:a,children:o,...s}=e,c=t&&t.items.length>0;return n.createElement(l.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(i.Z,{sidebar:t}),n.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},80046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(67294),r=a(86010),l=a(52263),i=a(10833),o=a(35281),s=a(12462),c=a(99703),m=a(90197),d=a(14148);function u(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,c="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:r}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(s.Z,{sidebar:r},n.createElement(d.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function g(e){return n.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(u,e),n.createElement(p,e))}},99703:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(95999),l=a(32244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},57768:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(67294),r=a(86010),l=a(9460),i=a(44996);function o(e){let{children:t,className:a}=e;const{frontMatter:r,assets:o}=(0,l.C)(),{withBaseUrl:s}=(0,i.C)(),c=o.image??r.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),t)}var s=a(39960);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,l.C)(),{permalink:o,title:m}=a,d=i?"h1":"h2";return n.createElement(d,{className:(0,r.Z)(c.title,t),itemProp:"headline"},i?m:n.createElement(s.Z,{itemProp:"url",to:o},m))}var d=a(73591),u=a(31830);const p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function g(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,l.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",o?p.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,r.Z)(!o&&"col col--6",o?p.imageOnlyAuthorCol:p.authorCol),key:t},n.createElement(u.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function h(){return n.createElement("header",null,n.createElement(m,null),n.createElement(d.Z,null),n.createElement(g,null))}var b=a(18780),v=a(45042);function E(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,l.C)();return n.createElement("div",{id:i?b.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},n.createElement(v.Z,null,t))}var f=a(84881),k=a(71526),_=a(87462),y=a(95999);function w(){return n.createElement("b",null,n.createElement(y.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function Z(e){const{blogPostTitle:t,...a}=e;return n.createElement(s.Z,(0,_.Z)({"aria-label":(0,y.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(w,null))}const N={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function C(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||o?n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&N.blogPostFooterDetailsFull)},m&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":c})},n.createElement(k.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(f.Z,{editUrl:o})),c&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":m})},n.createElement(Z,{blogPostTitle:i,to:e.permalink}))):null}function x(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o,{className:(0,r.Z)(i,a)},n.createElement(h,null),n.createElement(E,null,t),n.createElement(C,null))}},32244:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010),l=a(39960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var n=a(67294),r=a(902);const l=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return n.createElement(l.Provider,{value:i},t)}function o(){const e=(0,n.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(67294),r=a(52263);const l=["zero","one","two","few","many","other"];function i(e){return l.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}},44057:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(30143);const l=()=>n.createElement(r.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},45706:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(99861),l=a(13875),i=a(92949);function o(){const{colorMode:e}=(0,i.I)(),[t,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{o()||a(!0)}),[]);const o=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}};return n.createElement("div",null,t&&n.createElement("div",{className:l.Z["cookies-banner"]},n.createElement("p",null,"You need to allow cookies to comment on Wikis!")),n.createElement(r.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0}))}},31830:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010),l=a(39960);const i={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};function o(e){return e.href?n.createElement(l.Z,e):n.createElement(n.Fragment,null,e.children)}function s(e){let{author:t,className:a}=e;const{name:l,title:s,url:c,imageURL:m,email:d}=t,u=c||d&&`mailto:${d}`||void 0,p=l.toLowerCase(),g=["@leref"].map((e=>e.toLowerCase())).includes(p),h=["@dodogames","@supremesupreme","@faf4a","@usersatoshi"].map((e=>e.toLowerCase())).includes(p),b=["@dodogames","@supremesupreme","@faf4a","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli","@manu_1025"].map((e=>e.toLowerCase())).includes(p),v=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(p),E=["@.kuray.","@Alien Abd","@Zeke \u2661","@artemcurious","@creitingameplays","@eduard.irm","@kzzzakz","@leref","@neussdev","@valentineu0","@wansie"].map((e=>e.toLowerCase())).includes(p);return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},m&&n.createElement(o,{href:u,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:m,alt:l})),l&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o,{href:u,itemProp:"url"},n.createElement("span",{itemProp:"name"},l)),v&&n.createElement("span",{className:(0,r.Z)(i.tag,i.contributor)},"Contributor"),E&&n.createElement("span",{className:(0,r.Z)(i.tag,i.booster)},"Server Booster"),b&&n.createElement("span",{className:(0,r.Z)(i.tag,i.staff)},"Staff"),h&&n.createElement("span",{className:(0,r.Z)(i.tag,i.mod)},"Moderator"),g&&n.createElement("span",{className:(0,r.Z)(i.tag,i.creator)},"Creator")),s&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}},73591:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),l=a(95999),i=a(88824),o=a(9460);const s={container:"container_iJTo"};function c(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function m(){return n.createElement(n.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:a}=(0,o.C)(),{date:l,formattedDate:i,readingTime:d}=a;return n.createElement("div",{className:(0,r.Z)(s.container,"margin-vert--md",t)},void 0!==d&&n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(c,{readingTime:d})))}},857:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(9460),l=a(57768),i=a(45706),o=a(72389);function s(e){const{metadata:t,isBlogPostPage:a}=(0,r.C)(),{frontMatter:s,slug:c,title:m}=((0,o.Z)(),t),{enableComments:d}=s;return n.createElement(n.Fragment,null,n.createElement(l.Z,e),d&&a&&n.createElement(i.Z,null))}},14148:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(9460),l=a(857);function i(e){let{items:t,component:a=l.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},9322:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(87524),l=a(86010),i=a(39960),o=a(95999);const s={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5",searchIcon:"searchIcon_X7sx",searchClose:"searchClose_K_EJ"};function c(e){let{sidebar:t}=e;const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],[r,c]=(0,n.useState)(!1),[m,d]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=u("sortingState");e&&c(JSON.parse(e))}),[]),(0,n.useEffect)((()=>{g()&&p("sortingState",JSON.stringify(r))}),[r]);const u=e=>g()?localStorage.getItem(e):null,p=(e,t)=>{g()&&localStorage.setItem(e,t)},g=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}},h=t.items.filter((e=>!a.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(m.toLowerCase()))).sort(((e,t)=>r?e.title.localeCompare(t.title):t.date-e.date));return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s.sidebarItemTitle,"margin-bottom--md")},n.createElement("span",null,"Introduction")),n.createElement("ul",{className:(0,l.Z)(s.sidebarItemList,"clean-list")},n.createElement("li",{key:"/wikis/guidelines",className:s.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:"/wikis/guidelines",className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},"Wiki Guidelines")),n.createElement("li",{key:"/wikis/submit",className:s.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:"/wikis/submit",className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},"Submit Wiki")),n.createElement("li",{key:"/wikis/tags",className:s.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:"/wikis/tags",className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},"Tags"))),n.createElement("div",{className:(0,l.Z)(s.sidebarItemTitle,"margin-bottom--md")},"Wikis",n.createElement("button",{className:(0,l.Z)(s.activeButton,{[s.activeButton]:r}),onClick:()=>{c((e=>!e))}},r?"A-Z":"Newest First")),n.createElement("div",{className:s.searchContainer},n.createElement("input",{type:"text",className:s.searchInput,placeholder:"Search Wikis...",value:m,onChange:e=>{d(e.target.value)}})),n.createElement("ul",{className:(0,l.Z)(s.sidebarItemList,"clean-list")},h.map(((e,t)=>{return n.createElement("li",{key:e.permalink,className:s.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},(a=e.title).charAt(0).toUpperCase()+a.slice(1)));var a})))))}var m=a(13102);function d(e){let{sidebar:t,onSearch:a}=e;const[r,l]=(0,n.useState)(""),o=["/wikis/submit","/wikis/guidelines","/wikis/tags"],c=t?.items.filter((e=>!o.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title))),[m,d]=(0,n.useState)(c);return n.createElement("ul",{className:"menu__list"},n.createElement("div",{className:"menu__title"},"Introduction"),n.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),n.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),n.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),n.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),n.createElement("div",{className:s.searchContainer},n.createElement("input",{type:"text",className:s.searchInput,placeholder:"Search Wikis...",value:r,onChange:e=>{const t=e.target.value.toLowerCase(),a=c.filter((e=>e.title.toLowerCase().includes(t)));d(a),l(t)}})),m.map((e=>{return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function u(e){let{sidebar:t,onSearch:a}=e;const r=["/wikis/submit","/wikis/guidelines","/wikis/tags"],l=t?.items.filter((e=>!r.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return n.createElement(m.Zo,{component:d,props:{sidebar:{...t,items:l.map((e=>{return{...e,title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))};var t}))}}})}function p(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?n.createElement(u,{sidebar:t}):n.createElement(c,{sidebar:t}):null}},92101:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(67294),r=a(8121);const l=e=>{let{children:t,color:a,radius:r,padding:l}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:r||"2px",color:"#fff",padding:l||"0.2rem"}},t)};var i=a(74866),o=a(85162),s=a(44057),c=a(45706),m=a(17891),d=a(86010),u=a(25365);const p=e=>{let{name:t,id:a,value:r,onChange:l,type:i,error:o,charCount:s}=e;const c={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(o?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},m=e=>{l(e)};let d=null;switch(i){case"textarea-description":d=n.createElement("div",null,n.createElement("textarea",{name:t,id:a,value:r,onChange:m,style:{...c,minHeight:"155px",resize:"none"},required:!0}),n.createElement("div",{style:{fontSize:"12px",color:s>=500?"red":"#3f51b5"}},void 0===s?"0":s,"/",500));break;case"textarea-code":d=n.createElement("textarea",{name:t,id:a,value:r,onChange:m,style:{...c,minHeight:"155px",resize:"none"},required:!0});break;case"number":const e=e=>{const{value:a}=e.target,n=a.replace(/[^0-9]/g,"");n.length>20||l({target:{name:t,value:n}})};d=n.createElement("div",{style:{position:"relative"}},n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:e,style:c,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":d=n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:m,style:{...c,width:"50%",fontSize:"12px"},required:!0});break;default:d=n.createElement("div",null,n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:m,style:{...c,resize:"none"},required:!0}),n.createElement("div",{style:{fontSize:"12px",color:s>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===s?"0":s,"/",50))}return n.createElement("div",null,d)};var g=a(99578),h=a(39960),b=a(31830);const v=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[l,i]=(0,n.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[o,s]=(0,n.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:c,description:m,discordUID:v,code:E,tags:f,isUIDValid:k}=l,[_,y]=(0,n.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),w=async e=>{const{name:a,value:n}=e.target;let r=n;if("title"===a)r=n.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>({...e,title:n.length}))),r.length>49&&(r=r.substring(0,50));else if("description"===a)t((e=>({...e,description:n.length}))),n.length>=500&&(r=n.substring(0,499));else if("discordUID"===a&&(i((e=>({...e,isUIDValid:!0}))),n.length>=17)){const{avatar:e,username:t,bot:a,id:r}=await Z(n);void 0!==a&&i((e=>({...e,isUIDValid:!1}))),y((a=>({...a,avatar:e,username:t,id:"- "+r})))}i((e=>({...e,[a]:r})))},Z=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),n=await a.json();return n&&n.avatar?{bot:n.bot,avatar:n.avatar,username:n.username,id:n.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},N=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");r(t);const n={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===l[e].trim()&&(n[e]=!0)})),0===l.tags.length&&(n.tags=!0);const{avatar:i,username:o,bot:d}=await Z(v);if("Guest User"===o&&(n.discordUID=!0),void 0!==d&&(n.discordUID=!0),s(n),Object.values(n).some((e=>!0===e)))return;const u=Math.random().toString(36).substring(7),p=`${v}/${u}.md`,g=`---\ntitle: "${c}"\ndescription: "${m}"\nauthors:\n  name: "@${o}"\n  title: Member - ${v}\n  userid: "${v}"\n  url: https://discord.com/users/${v}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${v}.png\ntags: ${JSON.stringify(f)}\nhide_table_of_contents: true\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${E}`;try{async function b(e){try{(await fetch(`https://someapi.frenchwomen.repl.co/avatars/${e}`)).ok||await alert("Something went wrong while handling your request. (Try resubmitting later again, or notify aoi.js staff about this if it occurs again)")}catch(t){return void await alert("Something went wrong while handling your request. (Failed to upload your avatar, you can savely ignore this error)")}}if(!(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`New Wiki created by: ${o}`,content:g,fileName:p})})).ok)return void await alert("Something went wrong while handling your request.");await b(v),alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(h){return}};return n.createElement("form",{onSubmit:N},n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"Title of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),n.createElement(p,{name:"title",id:"title",value:c,onChange:w,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:o.title,charCount:void 0===e.title?"0":e.title}),n.createElement("br",null),n.createElement("h3",null,"Description",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),n.createElement(p,{name:"description",id:"description",value:m,onChange:w,type:"textarea-description",placeholder:"Description",required:!0,error:o.description,charCount:void 0===e.description?"0":e.description}),n.createElement("br",null),n.createElement("h3",null,"Discord User ID",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),n.createElement(p,{name:"discordUID",id:"discordUID",value:v,onChange:w,type:"number",placeholder:"Discord UID",required:!0,error:!k||o.discordUID}),!k&&n.createElement("p",{style:{color:"red"}},"Invalid user"),n.createElement("br",null),n.createElement("h3",null,"Content of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),n.createElement(p,{name:"code",id:"code",value:E,onChange:w,type:"textarea-code",placeholder:"Code",required:!0,error:o.code}),n.createElement("h5",{style:{marginBottom:"0.5rem"}},n.createElement("span",{style:{verticalAlign:"middle"}},"Preview",n.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),n.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},n.createElement("div",{style:{overflow:"hidden"}},n.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},n.createElement(b.Z,{author:{name:`@${_.username}`,title:`Member ${_.id}`,url:`https://discord.com/users/${v}`,imageURL:`${_.avatar}`}}),n.createElement("br",null),!E&&n.createElement("div",{className:g.Z.placeholderText},"Some text of your awesome Wiki!",n.createElement("br",null),n.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",n.createElement("br",null)," ",n.createElement("br",null),n.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",n.createElement("br",null),"## For Headers! ",n.createElement("br",null),"- For Lists! ",n.createElement("br",null))),n.createElement(u.D,null,E)))),n.createElement("br",null),n.createElement("h3",null,"Tags",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),n.createElement("div",{className:g.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>n.createElement("span",{key:e,className:(0,d.Z)(g.Z.tag,{[g.Z.active]:f.includes(e)}),onClick:()=>(e=>{const t=[...f];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),i((e=>({...e,tags:t})))})(e)},e)))),o.tags&&n.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),n.createElement("div",{className:g.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},n.createElement(h.Z,{className:(0,d.Z)("button button--outline button--secondary"),onClick:N,style:{width:"100%"}},"Submit")))},E=e=>{let{children:t}=e;const[a,r]=(0,n.useState)(!1),l={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:a?"#4d5291":"#3b406e",cursor:a?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return n.createElement("div",{style:l,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1)},t)};var f=a(13875);const k=e=>{let{color:t,text:a}=e;return n.createElement("span",{className:f.Z.tag},n.createElement("span",{className:f.Z.tagCircle,style:{"--tag-color":t}}),a)},_=()=>{const[e,t]=(0,n.useState)([]),[a,r]=(0,n.useState)([]);(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{r([{title:"Item 1",description:"Description L1<br />Description L2<br />Description L3<br />Description L4<br />Description L5<br />Description L6",tags:[{color:"#FF0000",text:"v7"},{color:"#00FF00",text:"v6"},{color:"#0000FF",text:"Tag 3"}],path:"/path/"},{title:"Item 2",description:"Description L1\n        Description L2\n        Description L3",tags:[{color:"#FF0000",text:"v7"},{color:"#00FF00",text:"v6"},{color:"#0000FF",text:"Tag 3"}],path:"/path/"}])},i=a=>{e.includes(a)?t(e.filter((e=>e!==a))):t([...e,a])},o=0===e.length?a:a.filter((t=>e.some((e=>t.tags.includes(e)))));return n.createElement("div",null,n.createElement("ul",{className:(0,d.Z)("pills",f.Z.pills)},n.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":0===e.length}),onClick:()=>{t([])}},"All"),n.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":e.includes("v7")}),onClick:()=>i("v7")},"v6"),n.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":e.includes("v6")}),onClick:()=>i("v6")},"v7"),n.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":e.includes("other")}),onClick:()=>i("other")},"Other")),n.createElement("div",{className:(0,d.Z)("card-demo",f.Z.cardDemo)},o.map(((e,t)=>n.createElement("div",{className:(0,d.Z)("card","card-wrapper",f.Z.cardWrapper),key:t},n.createElement("div",{className:(0,d.Z)("card__header","my-card-header",f.Z.cardHeader)},n.createElement("h3",null,e.title)),n.createElement("div",{className:(0,d.Z)("card__body","my-card-body",f.Z.cardBody)},n.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}})),n.createElement("div",{className:f.Z.tagContainer},e.tags.map(((e,t)=>n.createElement(k,{key:t,color:e.color,text:e.text})))),n.createElement("div",{className:(0,d.Z)("card__footer","my-card-footer",f.Z.cardFooter)},n.createElement(h.Z,{className:(0,d.Z)("button","button--secondary","button--block"),to:e.path},"Go to Wiki")))))))},y={...r.Z,Highlight:l,GiscusComponent:c.Z,InputField:p,SubmitForm:v,Cookies:s.Z,Tabs:i.Z,Slash:E,Showcase:_,Tooltip:m.u,TabItem:o.Z}},13875:(e,t,a)=>{a.d(t,{Z:()=>n});const n={"cookies-banner":"cookies-banner_YsRc",container:"container_H2za",avatar:"avatar_qL_g",content:"content_j2XQ",tagContainer:"tagContainer_hVSL",tag:"tag_Utpt",tagCircle:"tagCircle_gDjY"}},99578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng"}}}]);