"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[691],{9747:function(t,e,n){n.d(e,{w:function(){return r}});var r={primary:"rgb(50, 175, 178)"}},8186:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var r=n(6771),o=n(7294),a=n(3431);var i=(0,r.Z)("li",{target:"e1osf2cu3"})({name:"19ifgm",styles:"padding:0 16px;padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid #eee;cursor:pointer"}),u=(0,r.Z)("h2",{target:"e1osf2cu2"})({name:"z9a56x",styles:"font-size:1.4rem;padding-top:8px;padding-bottom:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"}),l=(0,r.Z)("p",{target:"e1osf2cu1"})({name:"sjlsmm",styles:"font-size:0.9rem;padding:4px 0;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"}),c=(0,r.Z)("p",{target:"e1osf2cu0"})({name:"1ax5gsr",styles:"font-size:0.85rem;padding:4px 0;color:#666;text-align:right"}),s=function(t){var e=t.item,n=t.onClickItem;return(0,a.jsx)(i,{onClick:function(){null==n||n(e)}},(0,a.jsx)(u,null," ",e.frontmatter.title," "),(0,a.jsx)(l,null,e.frontmatter.description),(0,a.jsx)(c,null,e.frontmatter.date))};var p=function(t){var e=t.items,n=t.onClickItem,r=function(t){null==n||n(t)};return(0,a.jsx)("ul",null,e.map((function(t){return(0,a.jsx)(s,{item:t,key:"list-item-"+t.id,onClickItem:r})})))},g=n(5444),m=n(9747);var f=(0,r.Z)("div",{target:"ey73zbt1"})({name:"1fv6v8d",styles:"padding:20px 0;text-align:center"}),d=(0,r.Z)("button",{target:"ey73zbt0"})('border:2px solid #ccc;cursor:pointer;margin:0 8px;min-width:30px;padding:8px 12px;background:none;border-radius:4px;color:#666;&[aria-selected="true"]{border:2px solid ',m.w.primary,";color:",m.w.primary,";font-weight:bold;}"),x=function(t){var e=t.count,n=t.buttonLimit,r=t.current,i=t.rowLimit,u=t.onClickButton,l=(0,o.useMemo)((function(){var t=null!=n?n:10,o=null!=i?i:10,l=Math.ceil(e/o),c=Math.ceil(r/t),s=c*t;s>l&&(s=l);for(var p=(c-1)*t,g=s+1,m=p-1,f=s>=l?s%t:t,x=[],v=function(t){var e=p+t;if(isNaN(e))return"continue";x.push((0,a.jsx)(d,{type:"button",key:"page-button-"+t,"aria-selected":e===r,onClick:function(){u(e)}},e))},y=1;y<=f;y++)v(y);return{nextPage:g,prevPage:m,pageButtons:x}}),[]);return(0,a.jsx)(f,null,l.pageButtons)},v=n(5214),y=n(1503),h=function(){if("undefined"!=typeof location){var t=new URLSearchParams(location.search),e=Number(t.get("page")),n=t.get("category");return{page:e>1?e:1,category:""!==n?n:"ALL"}}},b=function(t){var e=t.page,n=t.category;history.pushState({},"","?category="+n+"&page="+e)};var w=function(t){var e=t.data,n=t.pageContext,r=function(){var t=(0,o.useMemo)((function(){return h()}),[]),e=(0,o.useState)(null==t?void 0:t.page),n=e[0],r=e[1],a=(0,o.useState)(null==t?void 0:t.category),i=a[0],u=a[1];return(0,o.useEffect)((function(){r(1),b({category:i,page:n})}),[i]),(0,o.useEffect)((function(){b({category:i,page:n})}),[n]),[{category:i,page:n},{setCategory:u,setPage:r}]}(),i=r[0],u=r[1],l=(0,o.useState)([]),c=(l[0],l[1],e.allMarkdownRemark),s=c.nodes,m=c.totalCount,f=(c.group,s.slice(10*(i.page-1),10));return(0,a.jsx)(o.Fragment,null,s&&(0,a.jsx)(v.Z,null,(0,a.jsx)(y.Z,{title:"게시글 목록"}),(0,a.jsx)(k,null,(0,a.jsx)(p,{items:f,onClickItem:function(t){var e=t.frontmatter;(0,g.c4)("/"+e.category+"/"+e.slug)}}),(0,a.jsx)(x,{count:m,current:i.page,rowLimit:n.limit,onClickButton:function(t){u.setPage(t)}}))))},k=(0,r.Z)("main",{target:"e1iiwlqv0"})({name:"1osc5le",styles:"max-width:1000px;min-height:600px;padding-top:40px;margin:0 auto;& .chip-group{text-align:center;margin-bottom:20px;}& .chip-group .chip{margin:0 4px;}"}),j=o.memo(w)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d6c9fee09ef2fccac07c.js.map