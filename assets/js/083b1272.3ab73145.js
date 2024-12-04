"use strict";(self.webpackChunkliuyuweitarek=self.webpackChunkliuyuweitarek||[]).push([[4750],{9788:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=i(4848),r=i(8453);const a={id:"renew-algolia-docsearch-index",title:"Renew Algolia DocSearch Index",hide_title:!0,sidebar_position:10,tags:["dev-guide"],last_update:{date:"6/24/2024",author:"Tarek Liu"},unlisted:!0},d=void 0,l={id:"Dev-Guide/renew-algolia-docsearch-index",title:"Renew Algolia DocSearch Index",description:"1. Make sure right APIKEY is set in /.env file.",source:"@site/docs/Dev-Guide/renew-algolia-docsearch-index.mdx",sourceDirName:"Dev-Guide",slug:"/Dev-Guide/renew-algolia-docsearch-index",permalink:"/docs/Dev-Guide/renew-algolia-docsearch-index",draft:!1,unlisted:!0,tags:[{inline:!1,label:"Dev Guide",permalink:"/docs/tags/dev-guide",description:"Docs related to the this site's development."}],version:"current",lastUpdatedAt:17191872e5,sidebarPosition:10,frontMatter:{id:"renew-algolia-docsearch-index",title:"Renew Algolia DocSearch Index",hide_title:!0,sidebar_position:10,tags:["dev-guide"],last_update:{date:"6/24/2024",author:"Tarek Liu"},unlisted:!0},sidebar:"devGuideSidebar"},t={},c=[];function o(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure right ",(0,s.jsx)(n.code,{children:"API_KEY"})," is set in ",(0,s.jsx)(n.code,{children:"{site_root_dir}/.env"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"APPLICATION_ID={ALGOLIA_APPLICATION_ID}\nAPI_KEY={ALGOLIA_API_KEY}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If your don't have ",(0,s.jsx)(n.code,{children:"{ALGOLIA_APPLICATION_ID}"})," and ",(0,s.jsx)(n.code,{children:"{ALGOLIA_API_KEY}"}),", Check ",(0,s.jsx)(n.code,{children:"APPLICATION_ID"})," and ",(0,s.jsx)(n.code,{children:"API_KEY"})," in ",(0,s.jsx)(n.a,{href:"https://dashboard.algolia.com",children:"Algolia dashboard"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build the website."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm run build\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check render effect through ",(0,s.jsx)(n.code,{children:"./build"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm run serve -- --host 0.0.0.0 --port 3006 --no-open\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Noted that you can't launch the website with ",(0,s.jsx)(n.code,{children:"npm start"})," this time, because we need to serve the website locally from ",(0,s.jsx)(n.code,{children:"./build"})," that we just built."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Proxy your website with ngrok in temporary domain URL."}),"\n",(0,s.jsx)(n.p,{children:"The terminal you have your ngrok installed, mine in my local machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ngrok http 3006 --region jp\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify your algolia config in ",(0,s.jsx)(n.code,{children:"./algolia/dev-algolia-config.json"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "start_urls": ["https://{NGROK_TEMPORARY_DOMAIN_URL}"],\n    "sitemap_urls": [\n    "https://{NGROK_TEMPORARY_DOMAIN_URL}/sitemap.xml"\n    ],\n    ...\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the scraper in WSL2 terminal."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -it --env-file=.env -e "CONFIG=$(cat ./algolia/dev-algolia-config.json | jq -r tostring)" algolia/docsearch-scraper\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go checkout the ",(0,s.jsx)(n.a,{href:"https://dashboard.algolia.com",children:"Algolia dashboard"})," with specified ",(0,s.jsx)(n.code,{children:"index_name"}),"(e.g. dev_personal_website)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Back to docker terminal and run ",(0,s.jsx)(n.code,{children:"npm start"})," again, to check the render effect."]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(6540);const r={},a=s.createContext(r);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);