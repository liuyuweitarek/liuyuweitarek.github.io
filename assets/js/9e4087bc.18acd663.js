"use strict";(self.webpackChunkliuyuweitarek=self.webpackChunkliuyuweitarek||[]).push([[7028],{4284:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});t(1504);var a=t(5800),s=t(7932),i=t(3236),c=t(4512),l=t(5508),n=t(7624);function h(e){let{year:r,posts:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.c,{as:"h3",id:r,children:r}),(0,n.jsx)("ul",{children:t.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(a.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const t=(0,s.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,s.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],a=e.get(t)??[];return e.set(t,[r,...a])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.U7,{title:t,description:a}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.c,{as:"h1",className:"hero__title",children:t}),(0,n.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(d,{years:h})})]})]})}}}]);