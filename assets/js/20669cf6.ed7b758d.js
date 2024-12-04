(self.webpackChunkliuyuweitarek=self.webpackChunkliuyuweitarek||[]).push([[8745],{8064:(e,t,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.edb1cac.500.png 500w,"+s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.b7217e8.1000.png 1000w,"+s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.400554e.1500.png 1500w,"+s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.d75aa2c.1920.png 1920w",images:[{path:s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.edb1cac.500.png",width:500,height:281},{path:s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.b7217e8.1000.png",width:1e3,height:563},{path:s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.400554e.1500.png",width:1500,height:844},{path:s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.d75aa2c.1920.png",width:1920,height:1080}],src:s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.edb1cac.500.png",toString:function(){return s.p+"assets/ideal-img/Simulate-a-neuron-with-PyTorch.edb1cac.500.png"},placeholder:void 0,width:500,height:281},preSrc:"data:image/png;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRITIQcxUYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBv/EABsRAAICAwEAAAAAAAAAAAAAAAECAAMTITHR/9oADAMBAAIRAxEAPwDOvHupWuj6WszWEU7yI2ZGJ3Iw7BAzj19q8xv5pnl5iN7Fsch6z+UpSYUOyJMNa5sYE89n/9k="}},1338:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=s(4848),n=s(8453),r=s(74);const i={id:"computer-science",title:"Computer Science",hide_title:!0,hide_table_of_contents:!0,displayed_sidebar:"csSidebar",tags:["manual","computer-science"],sidebar_position:3,last_update:{date:"6/24/2024",author:"Tarek Liu"}},o=void 0,c={id:"ComputerScience/computer-science",title:"Computer Science",description:"<TagSearchNotes",source:"@site/docs/ComputerScience/index.mdx",sourceDirName:"ComputerScience",slug:"/ComputerScience/",permalink:"/docs/ComputerScience/",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Manual",permalink:"/docs/tags/manual",description:"Docs related to the this site's framework."},{inline:!1,label:"Computer Science",permalink:"/docs/tags/computer-science",description:"Docs related to Computer Science."}],version:"current",lastUpdatedAt:17191872e5,sidebarPosition:3,frontMatter:{id:"computer-science",title:"Computer Science",hide_title:!0,hide_table_of_contents:!0,displayed_sidebar:"csSidebar",tags:["manual","computer-science"],sidebar_position:3,last_update:{date:"6/24/2024",author:"Tarek Liu"}},sidebar:"csSidebar"},l={},d=[];function h(e){return(0,a.jsx)(r.A,{title:"Computer Science",description:"Computer Science notes about algorithms, model implementations, and research insights."})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}},7824:(e,t,s)=>{"use strict";s.d(t,{W:()=>l});var a=s(6540),n=s(7639);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(s,t,e)}}},74:(e,t,s)=>{"use strict";s.d(t,{A:()=>ee});var a=s(6540),n=s(5225),r=s(3230),i=s(2814),o=s(7824);function c(e,t){const s=[...e];return s.sort(((e,s)=>t(e)>t(s)?1:t(s)>t(e)?-1:0)),s}const l=[{title:"Simulate a neuron with PyTorch",description:"Implement neural network and simulate the all-or-none laws.",preview:s(8064),website:"./ComputerScience/simulate-a-neuron-with-pytorch",source:"https://colab.research.google.com/drive/1x36lSmRdi8dOPkjzhhjuF8AZbnQWOnzl?usp=sharing",tags:["pinned","implementation","computer-science"]}],d={pinned:{label:(0,r.T)({message:"Pinned"}),description:(0,r.T)({message:"Notes that are important.",id:"tagsearch.tag.pinned.description"}),color:"#e96666"},implementation:{label:(0,r.T)({message:"Implementation"}),description:(0,r.T)({message:"We only know what we make.",id:"tagsearch.tag.implementation.description"}),color:"#6671e9"},insight:{label:(0,r.T)({message:"insight"}),description:(0,r.T)({message:"Notes that record my insights and segment of inspired memory.",id:"tagsearch.tag.insight.description"}),color:"#39ca30"},"paper-reading":{label:(0,r.T)({message:"Paper Reading Notes"}),description:(0,r.T)({message:"Notes that generated from papers I chew!",id:"tagsearch.tag.paper-reading.description"}),color:"#dfd545"},"proof-of-concept":{label:(0,r.T)({message:"Proof of Concept"}),description:(0,r.T)({message:"Simple cases that minimized the question and varified it.",id:"tagsearch.tag.proof-of-concept.description"}),color:"#a44fb7"},analysis:{label:(0,r.T)({message:"Analysis"}),description:(0,r.T)({message:"Data mining or replicating interesting result from materials.",id:"tagsearch.tag.analysis.description"}),color:"#fe6829"},"computer-science":{label:(0,r.T)({message:"Computer Science"}),description:(0,r.T)({message:"Docs related to Computer Science.",id:"tagsearch.tag.computer-science.description"}),color:"#127f82"},statistics:{label:(0,r.T)({message:"Statistics"}),description:(0,r.T)({message:"Docs related to Statistics Methods or Concepts.",id:"tagsearch.tag.statistics.description"}),color:"#8c2f00"},psychology:{label:(0,r.T)({message:"Psychology"}),description:(0,r.T)({message:"Docs related to Psychology.",id:"tagsearch.tag.psychology.description"}),color:"#4267b2"},"behavioral-experiment":{label:(0,r.T)({message:"Behavioral Experiment"}),description:(0,r.T)({message:"Docs related to Behavioral Experiment.",id:"tagsearch.tag.behavioral-experiment.description"}),color:"#14cfc3"},algorithm:{label:(0,r.T)({message:"Algorithm"}),description:(0,r.T)({message:"Docs related to Algorithm.",id:"tagsearch.tag.algorithm.description"}),color:"#ffcfc3"}},h=Object.keys(d);const u=function(){let e=l;return e=c(e,(e=>e.title.toLowerCase())),e=c(e,(e=>!e.tags.includes("pinned"))),e}();function g(){return(0,i.l)("name")}function m(){return(0,i.fV)("tags")}function p(){const[e,t]=(0,i.l)("operator"),s="AND"===e?"AND":"OR",n=(0,a.useCallback)((()=>{t("OR"===s?"AND":null)}),[s,t]);return[s,n]}function A(){const[e]=m(),[t]=g(),[s]=p();return(0,a.useMemo)((()=>function(e){let{notes:t,tags:s,operator:a,searchName:n}=e;return n&&(t=t.filter((e=>e.title.toLowerCase().includes(n.toLowerCase())))),0===s.length?t:t.filter((e=>0!==e.tags.length&&("AND"===a?s.every((t=>e.tags.includes(t))):s.some((t=>e.tags.includes(t))))))}({notes:u,tags:e,operator:s,searchName:t})),[e,s,t])}const x="searchBar_h1zh";var f=s(4848);function b(){const[e,t]=g();return(0,f.jsx)("div",{className:x,children:(0,f.jsx)("input",{placeholder:(0,r.T)({message:"Search for note title...",id:"tagsearch.searchBar.placeholder"}),value:e,onInput:e=>{t(e.currentTarget.value)}})})}var j=s(4164);const C={svg:"svg_DBl7",small:"small_rUh5",medium:"medium_BQDT",large:"large_c74D"};function y(e){let{size:t,className:s,style:a}=e;return(0,f.jsx)("svg",{viewBox:"0 0 24 24",className:(0,j.A)(C.svg,C[t],s),style:a,children:(0,f.jsx)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})})}var w=s(4783),N=s(3012);const T={tagsearchCardImage:"tagsearchCardImage_IYjI",tagsearchCardHeader:"tagsearchCardHeader_m2hB",tagsearchCardTitle:"tagsearchCardTitle_OQhy",tagsearchCardSrcBtn:"tagsearchCardSrcBtn_LRIQ",tagsearchCardBody:"tagsearchCardBody_N9KX",cardFooter:"cardFooter_CooH",tag:"tag_l0B9",textLabel:"textLabel_yJJF",colorLabel:"colorLabel_MjKW"};function v(e){let{label:t,description:s,color:a}=e;return(0,f.jsxs)("li",{className:T.tag,title:s,children:[(0,f.jsx)("span",{className:T.textLabel,children:t.toLowerCase()}),(0,f.jsx)("span",{className:T.colorLabel,style:{backgroundColor:a}})]})}function _(e){let{tags:t}=e;const s=c(t.map((e=>({tag:e,...d[e]}))),(e=>h.indexOf(e.tag)));return(0,f.jsx)(f.Fragment,{children:s.map(((e,t)=>(0,f.jsx)(v,{...e},t)))})}function S(e){let{note:t}=e;const s=function(e){return e.preview??`https://slorber-api-screenshot.netlify.app/${encodeURIComponent(e.website)}/note`}(t);return(0,f.jsxs)("li",{className:"card shadow--md",children:[(0,f.jsx)("div",{className:(0,j.A)("card__image",T.tagsearchCardImage),children:(0,f.jsx)(N.A,{img:s,alt:t.title})}),(0,f.jsxs)("div",{className:"card__body",children:[(0,f.jsxs)("div",{className:(0,j.A)(T.tagsearchCardHeader),children:[(0,f.jsx)(n.A,{as:"h4",className:T.tagsearchCardTitle,children:(0,f.jsx)(w.A,{href:t.website,className:T.tagsearchCardLink,children:t.title})}),t.tags.includes("pinned")&&(0,f.jsx)(y,{size:"medium",style:{marginRight:"0.25rem"}}),t.source&&(0,f.jsx)(w.A,{href:t.source,className:(0,j.A)("button button--secondary button--sm",T.tagsearchCardSrcBtn),children:(0,f.jsx)(r.A,{id:"tagsearch.card.sourceLink",children:"source"})})]}),(0,f.jsx)("p",{className:T.showcaseCardBody,children:t.description})]}),(0,f.jsx)("ul",{className:(0,j.A)("card__footer",T.cardFooter),children:(0,f.jsx)(_,{tags:t.tags})})]},t.title)}const k=a.memo(S),L={cardList:"cardList_ijkL",TagSearchFavorite:"TagSearchFavorite_QiTy",headingFavorites:"headingFavorites_bGEa"},B=u.filter((e=>e.tags.includes("pinned"))),F=u.filter((e=>!e.tags.includes("pinned")));function I(){return(0,f.jsx)(n.A,{as:"h2",children:(0,f.jsx)(r.A,{id:"tagsearch.notesList.noResult",children:"No result"})})}function D(){return(0,f.jsxs)(n.A,{as:"h2",className:L.headingFavorites,children:[(0,f.jsx)(r.A,{id:"tagsearch.favoritesList.title",children:"Pinned Notes"}),(0,f.jsx)(y,{size:"large",style:{marginLeft:"1rem"}})]})}function R(){return(0,f.jsx)(n.A,{as:"h2",children:(0,f.jsx)(r.A,{id:"tagsearch.notesList.allNotes",children:"All Notes"})})}function K(e){let{heading:t,items:s}=e;return(0,f.jsxs)("div",{className:"container",children:[t,(0,f.jsx)("ul",{className:(0,j.A)("clean-list",L.cardList),children:s.map((e=>(0,f.jsx)(k,{note:e},e.title)))})]})}function P(){return(0,f.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,f.jsx)("div",{className:"container padding-vert--md text--center",children:(0,f.jsx)(I,{})})})}function M(){const e=A();return 0===e.length?(0,f.jsx)(P,{}):(0,f.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:e.length===u.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:L.TagSearchFavorite,children:(0,f.jsx)(K,{heading:(0,f.jsx)(D,{}),items:B})}),(0,f.jsx)("div",{className:"margin-top--lg",children:(0,f.jsx)(K,{heading:(0,f.jsx)(R,{}),items:F})})]}):(0,f.jsx)(K,{items:e})})}const E={checkboxLabel:"checkboxLabel_zlR9"};function Q(e){let{icon:t,label:s,description:n,tag:r,...i}=e;const o=(0,a.useId)(),[c,l]=function(e){const[t,s]=m();return[t.includes(e),(0,a.useCallback)((()=>{s((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e]))}),[e,s])]}(r);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{type:"checkbox",id:o,checked:c,onChange:l,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&l()},...i}),(0,f.jsxs)("label",{htmlFor:o,className:E.checkboxLabel,title:n,children:[s,t]})]})}const z={checkboxLabel:"checkboxLabel_AMVi"};function O(){const e=(0,a.useId)(),[t,s]=p();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{id:e,type:"checkbox",className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",checked:"AND"===t,onChange:s,onKeyDown:e=>{"Enter"===e.key&&s()}}),(0,f.jsxs)("label",{htmlFor:e,className:(0,j.A)(z.checkboxLabel,"shadow--md"),children:[(0,f.jsx)("span",{className:z.checkboxLabelOr,children:"OR"}),(0,f.jsx)("span",{className:z.checkboxLabelAnd,children:"AND"})]})]})}function Y(){const e=(0,i.W9)();return(0,f.jsx)("button",{className:"button button--outline button--primary",type:"button",onClick:()=>e(),children:"Clear All"})}const H={headingRow:"headingRow_Utuk",headingText:"headingText_k0EH",headingButtons:"headingButtons_W2Fm",tagList:"tagList_oRmV",tagListItem:"tagListItem_cnTZ"};function U(e){let{color:t,style:s}=e;return(0,f.jsx)("span",{style:{backgroundColor:t,width:10,height:10,borderRadius:"50%",...s}})}function W(e){let{tag:t}=e;const{label:s,description:a,color:n}=d[t];return(0,f.jsx)("li",{className:H.tagListItem,children:(0,f.jsx)(Q,{tag:t,label:s,description:a,icon:"pinned"===t?(0,f.jsx)(y,{size:"small",style:{marginLeft:8}}):(0,f.jsx)(U,{color:n,style:{backgroundColor:n,marginLeft:8}})})})}function G(){return(0,f.jsx)("ul",{className:(0,j.A)("clean-list",H.tagList),children:h.map((e=>(0,f.jsx)(W,{tag:e},e)))})}function $(){const e=A(),t=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,r.T)({id:"tagsearch.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 note|{sitesCount} notes"},{sitesCount:t}))}();return(0,f.jsxs)("div",{className:H.headingText,children:[(0,f.jsx)(n.A,{as:"h2",children:(0,f.jsx)(r.A,{id:"tagsearch.filters.title",children:"Filters"})}),(0,f.jsx)("span",{children:t(e.length)})]})}function J(){return(0,f.jsxs)("div",{className:H.headingButtons,style:{alignItems:"center"},children:[(0,f.jsx)(O,{}),(0,f.jsx)(Y,{})]})}function q(){return(0,f.jsxs)("div",{className:(0,j.A)("margin-bottom--sm",H.headingRow),children:[(0,f.jsx)($,{}),(0,f.jsx)(J,{})]})}function V(){return(0,f.jsxs)("section",{className:"container margin-top--l margin-bottom--lg",children:[(0,f.jsx)(q,{}),(0,f.jsx)(G,{})]})}const Z="index_page_title_Kqai",X="index_page_description_qkTl",ee=e=>{let{title:t,description:s}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n.A,{as:"h1",className:Z,children:t}),(0,f.jsx)("p",{className:X,children:s}),(0,f.jsx)("br",{}),(0,f.jsx)(V,{}),(0,f.jsx)("div",{style:{display:"flex",marginLeft:"auto"},className:"container",children:(0,f.jsx)(b,{})}),(0,f.jsx)(M,{})]})}},8453:(e,t,s)=>{"use strict";s.d(t,{R:()=>i,x:()=>o});var a=s(6540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);