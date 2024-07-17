"use strict";(self.webpackChunkydb_embedded_ui=self.webpackChunkydb_embedded_ui||[]).push([[2335],{94790:(e,t,r)=>{r.d(t,{f:()=>o});var a=r(68963),n=r(44920),s=r(75859);const o=e=>{let{children:t,content:r,className:o,hasArrow:l=!0,placement:d=["top","bottom"],...i}=e;const[u,c]=a.useState(!1),m=a.useRef(null);return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(n.G,{anchorRef:m,open:u,placement:d,hasArrow:l,...i,children:r}),(0,s.jsx)("span",{className:o,ref:m,onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:t})]})}},36985:(e,t,r)=>{r.d(t,{C:()=>a.C});var a=r(49201)},68242:(e,t,r)=>{r.d(t,{m:()=>u});var a=r(24362),n=r(94790),s=r(27506),o=r(75859);const l=(0,a.cn)("ydb-pool-bar"),d=e=>{let{data:t={}}=e;const{Usage:r=0}=t,a=Math.min(100*r,100),d=(e=>e>=75?"danger":e>=50&&e<75?"warning":"normal")(a);return(0,o.jsx)(n.f,{className:l({type:d}),content:(0,o.jsx)(s.A8,{data:t,className:l("popup-content")}),children:(0,o.jsx)("div",{style:{height:"".concat(a,"%")},className:l("value",{type:d})})})},i=(0,a.cn)("ydb-pools-graph"),u=e=>{let{pools:t=[]}=e;return(0,o.jsx)("div",{className:i(),children:t.map(((e,t)=>(0,o.jsx)(d,{data:e},t)))})}},74221:(e,t,r)=>{r.d(t,{T:()=>o});var a=r(79734),n=r(80839),s=r(75859);const o=e=>{let{value:t,onChange:r,className:o}=e;return(0,s.jsxs)(a.E,{value:t,onUpdate:r,className:o,children:[(0,s.jsx)(a.E.Option,{value:n.pu.ALL,children:n.pu.ALL}),(0,s.jsx)(a.E.Option,{value:n.pu.PROBLEMS,children:n.pu.PROBLEMS})]})}},11551:(e,t,r)=>{r.d(t,{o:()=>a.o});var a=r(30629)},43070:(e,t,r)=>{r.d(t,{e:()=>u});var a=r(83203),n=r(54665),s=r(24362),o=r(52317),l=r(83496),d=r(75859);const i=(0,s.cn)("tablets-statistic"),u=e=>{let{tablets:t=[],path:r,nodeIds:s,backend:u}=e;const c=(e=>e.map((e=>({label:(0,o.qV)(e.Type),type:e.Type,count:e.Count,state:(0,l.FW)(e.State)}))).sort(((e,t)=>String(e.label).localeCompare(String(t.label)))))(t);return(0,d.jsx)("div",{className:i(),children:c.map(((e,t)=>{var o;const l=(0,n.ax)(n.ZP.tabletsFilters,void 0,{nodeIds:s,state:e.state,type:e.type,path:r,backend:u}),c="".concat(e.label,": ").concat(e.count),m=i("tablet",{state:null===(o=e.state)||void 0===o?void 0:o.toLowerCase()});return u?(0,d.jsx)("a",{href:l,className:m,children:c},t):(0,d.jsx)(a.rU,{to:l,className:m,children:c},t)}))})}},2335:(e,t,r)=>{r.d(t,{G:()=>O});var a=r(52317),n=r(34051),s=r(68963),o=r(81413),l=r(17095),d=r(52846),i=r(36985),u=r(86969),c=r(26688),m=r(56350),h=r(74221),p=r(2098),g=r(11551),v=r(47101),N=r(43989);let y;!function(e){e.v1="v1",e.v2="v2"}(y||(y={}));var b=r(905),w=r(46925);const f=b.h.injectEndpoints({endpoints:e=>({getNodes:e.query({queryFn:async(e,t)=>{let{signal:r}=t;try{const t=await window.api.getNodes({type:"any",storage:!1,...e},{signal:r});return{data:(0,w.nH)(t)}}catch(a){return{error:a}}},providesTags:["All"]}),getComputeNodes:e.query({queryFn:async(e,t)=>{let{signal:r}=t;try{const t=await window.api.getCompute({version:y.v2,...e},{signal:r});return{data:(0,w.Zf)(t)}}catch(a){return{error:a}}},providesTags:["All"]})}),overrideExisting:"throw"});var x=r(14223),C=r(80839),j=r(24362),P=r(51688),T=r(682),L=r(30817);const S=JSON.parse('{"empty.default":"No such nodes"}'),F=JSON.parse('{"empty.default":"\u041d\u0435\u0442 \u0443\u0437\u043b\u043e\u0432"}'),M=(0,L.wZ)("ydb-nodes",{ru:F,en:S});var E=r(75859);const A=(0,j.cn)("ydb-nodes"),U=e=>{var t;let{path:r,additionalNodesProps:y={}}=e;const[b,w]=(0,d.useQueryParams)({uptimeFilter:d.StringParam,search:d.StringParam}),j=P.U8.parse(b.uptimeFilter),L=null!==(t=b.search)&&void 0!==t?t:"",S=(0,n.zL)(),F=(0,n.ix)(C.qz),[U]=(0,n.Rj)(),[I]=(0,n.yu)(a.UF),R=r&&!I,Z=f.useGetNodesQuery(R?l.CN:{path:r},{pollingInterval:U}),z=f.useGetComputeNodesQuery(R?{path:r}:l.CN,{pollingInterval:U}),{currentData:D,isLoading:O,error:G}=R?z:Z,[V,W]=s.useState({sortValue:"NodeId",sortOrder:o.zE}),[k,q]=(0,n.sC)(V,(e=>{W(e)})),H=e=>{w({search:e||void 0},"replaceIn")},Q=e=>{S((0,C.M6)(e))},_=e=>{w({uptimeFilter:e},"replaceIn")},B=s.useMemo((()=>(0,x.A)(null===D||void 0===D?void 0:D.Nodes,{searchValue:L,uptimeFilter:j,problemFilter:F})),[D,L,j,F]),J=(null===D||void 0===D?void 0:D.TotalNodes)||0;return G?403===G.status?(0,E.jsx)(u.J,{}):(0,E.jsx)(c.V,{error:G}):(0,E.jsxs)(v.l,{children:[(0,E.jsx)(v.l.Controls,{children:(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)(g.o,{onChange:H,placeholder:"Host name",className:A("search"),value:L}),(0,E.jsx)(h.T,{value:F,onChange:Q}),(0,E.jsx)(N.X,{value:j,onChange:_}),(0,E.jsx)(i.C,{total:J,current:(null===B||void 0===B?void 0:B.length)||0,label:"Nodes",loading:O})]})}),(0,E.jsx)(v.l.Table,{loading:O,children:(()=>{const e=(0,T.gM)({getNodeRef:y.getNodeRef}).map((e=>({...e,sortable:(0,P.oh)(e.name)})));return!B||0!==B.length||F===C.pu.ALL&&j===P.Uu.All?(0,E.jsx)(p.G,{columnsWidthLSKey:T.t5,data:B||[],columns:e,settings:a.LE,sortOrder:k,onSort:q,emptyDataMessage:M("empty.default"),rowClassName:e=>A("node",{unavailable:(0,P.TA)(e)})}):(0,E.jsx)(m.Q,{name:"thumbsUp",width:"200"})})()})]})};var I=r(35113);const R=(e,t)=>"getNodes|offset".concat(t,"|limit").concat(e),Z=async e=>{let{type:t="any",storage:r=!1,limit:a,offset:n,...s}=e;const o=await window.api.getNodes({type:t,storage:r,limit:a,offset:n,...s},{concurrentId:R(a,n)}),l=(0,w.nH)(o);return{data:l.Nodes||[],found:l.FoundNodes||0,total:l.TotalNodes||0}},z=(0,j.cn)("ydb-nodes"),D=e=>{var t;let{path:r,parentContainer:a,additionalNodesProps:o}=e;const[l,p]=(0,d.useQueryParams)({uptimeFilter:d.StringParam,search:d.StringParam}),v=P.U8.parse(l.uptimeFilter),y=null!==(t=l.search)&&void 0!==t?t:"",b=(0,n.zL)(),w=(0,n.ix)(C.qz),f=s.useMemo((()=>[r,y,w,v]),[r,y,w,v]),x=s.useCallback((async function(e,t){let{sortOrder:a,columnId:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return await Z({limit:e,offset:t,path:r,filter:y,problems_only:(0,P.eV)(w),uptime:(0,P.RW)(v),sortOrder:a,sortValue:n})}),[r,w,y,v]),j=(0,T.gM)({getNodeRef:null===o||void 0===o?void 0:o.getNodeRef}).map((e=>({...e,sortable:(0,P.oh)(e.name)})));return(0,E.jsx)(I.WQ,{columnsWidthLSKey:T.t5,parentContainer:a,columns:j,fetchData:x,limit:50,renderControls:e=>{let{totalEntities:t,foundEntities:r,inited:a}=e;return(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)(g.o,{onChange:e=>{p({search:e||void 0},"replaceIn")},placeholder:"Host name",className:z("search"),value:y}),(0,E.jsx)(h.T,{value:w,onChange:e=>{b((0,C.M6)(e))}}),(0,E.jsx)(N.X,{value:v,onChange:e=>{p({uptimeFilter:e},"replaceIn")}}),(0,E.jsx)(i.C,{total:t,current:r,label:"Nodes",loading:!a})]})},renderErrorMessage:e=>e&&403===e.status?(0,E.jsx)(u.J,{position:"left"}):(0,E.jsx)(c.V,{error:e}),renderEmptyDataMessage:()=>w!==C.pu.ALL||v!==P.Uu.All?(0,E.jsx)(m.Q,{name:"thumbsUp",width:"200"}):M("empty.default"),dependencyArray:f,getRowClassName:e=>z("node",{unavailable:(0,P.TA)(e)})})},O=e=>{let{parentContainer:t,...r}=e;const[s]=(0,n.yu)(a.Qy);return s?(0,E.jsx)(D,{parentContainer:t,...r}):(0,E.jsx)(U,{...r})}},682:(e,t,r)=>{r.d(t,{Cj:()=>B,LF:()=>_,gM:()=>H,sQ:()=>Q,t5:()=>p});var a=r(19812),n=r(99683),s=r(65890),o=r(68242),l=r(67359),d=r(43070),i=r(80816),u=r(46925),c=r(52317),m=r(4119),h=r(75859);const p="nodesTableColumnsWidth",g="Host",v="DC",N="Rack",y="Version",b="Uptime",w="Memory",f="CPU",x="LoadAverage",C="Tablets",j="TopNodesLoadAverage",P="TopNodesMemory",T="SharedCacheUsage",L="MemoryUsedInAlloc",S="TotalSessions",F={name:"NodeId",header:"#",width:80,render:e=>{let{row:t}=e;return t.NodeId},align:a.ZP.RIGHT,sortable:!1},M=e=>({name:g,render:t=>{let{row:r}=t;return(0,h.jsx)(s.k,{node:r,getNodeRef:e})},width:350,align:a.ZP.LEFT,sortable:!1}),E=e=>({...M(e),width:void 0}),A={name:v,header:"DC",align:a.ZP.LEFT,render:e=>{let{row:t}=e;return t.DC||c.jX},width:60},U={name:N,header:"Rack",align:a.ZP.LEFT,render:e=>{let{row:t}=e;return t.Rack?t.Rack:"\u2014"},width:80},I={name:y,width:200,align:a.ZP.LEFT,render:e=>{let{row:t}=e;return(0,h.jsx)(n.l,{content:t.Version,children:t.Version})},sortable:!1},R={name:b,header:"Uptime",sortAccessor:e=>{let{StartTime:t}=e;return t&&-t},render:e=>{let{row:t}=e;return t.Uptime},align:a.ZP.RIGHT,width:110,sortable:!1},Z={name:w,header:"Memory",sortAccessor:e=>{let{MemoryUsed:t=0}=e;return Number(t)},defaultOrder:a.ZP.DESCENDING,render:e=>{let{row:t}=e;return t.MemoryUsed?(0,m.SX)(t.MemoryUsed):"\u2014"},align:a.ZP.RIGHT,width:120},z={name:f,header:"CPU",sortAccessor:e=>{let{PoolStats:t=[]}=e;return Math.max(...t.map((e=>{let{Usage:t}=e;return Number(t)})))},defaultOrder:a.ZP.DESCENDING,render:e=>{let{row:t}=e;return t.PoolStats?(0,h.jsx)(o.m,{pools:t.PoolStats}):"\u2014"},align:a.ZP.LEFT,width:80,resizeMinWidth:60,sortable:!1},D={name:x,header:"Load average",sortAccessor:e=>{let{LoadAveragePercents:t=[]}=e;return t[0]},defaultOrder:a.ZP.DESCENDING,render:e=>{let{row:t}=e;return t.LoadAveragePercents&&t.LoadAveragePercents.length>0?(0,h.jsx)(l.y,{value:t.LoadAveragePercents[0],percents:!0,colorizeProgress:!0,capacity:100}):"\u2014"},align:a.ZP.LEFT,width:140,resizeMinWidth:140,sortable:!1},O=e=>({name:C,width:500,resizeMinWidth:500,render:t=>{let{row:r}=t;return r.Tablets?(0,h.jsx)(d.e,{path:null!==e&&void 0!==e?e:r.TenantName,nodeIds:[r.NodeId],tablets:r.Tablets}):"\u2014"},align:a.ZP.LEFT,sortable:!1}),G={name:j,header:"Load",render:e=>{let{row:t}=e;return t.LoadAveragePercents&&t.LoadAveragePercents.length>0?(0,h.jsx)(i.a,{value:t.LoadAveragePercents[0].toFixed(),theme:(0,u.w6)(t.LoadAveragePercents[0])}):"\u2014"},align:a.ZP.LEFT,width:80,resizeMinWidth:70,sortable:!1},V={name:P,header:"Process",render:e=>{let{row:t}=e;return(0,h.jsx)(l.y,{value:t.MemoryUsed,capacity:t.MemoryLimit,formatValues:m.q3,colorizeProgress:!0})},align:a.ZP.LEFT,width:140,resizeMinWidth:140,sortable:!1},W={name:T,header:"Tablet Cache",render:e=>{let{row:t}=e;return(0,h.jsx)(l.y,{value:t.SharedCacheUsed,capacity:t.SharedCacheLimit,formatValues:m.q3,colorizeProgress:!0})},align:a.ZP.LEFT,width:140,resizeMinWidth:140,sortable:!1},k={name:L,header:"Query Runtime",render:e=>{let{row:t}=e;return(0,h.jsx)(l.y,{value:t.MemoryUsedInAlloc,capacity:t.MemoryLimit,formatValues:m.q3,colorizeProgress:!0})},align:a.ZP.LEFT,width:140,resizeMinWidth:140,sortable:!1},q={name:S,header:"Sessions",render:e=>{var t;let{row:r}=e;return null!==(t=r.TotalSessions)&&void 0!==t?t:"\u2014"},align:a.ZP.RIGHT,width:100,sortable:!1};function H(e){let{tabletsPath:t,getNodeRef:r}=e;return[F,M(r),A,U,I,R,Z,z,D,O(t)]}function Q(e){return[G,F,E(e),I]}function _(e){return[z,F,E(e)]}function B(e){let{tabletsPath:t,getNodeRef:r}=e;return[F,M(r),R,G,V,W,k,q,O(t)]}},46925:(e,t,r)=>{r.d(t,{Zf:()=>l,nH:()=>d,w6:()=>i});var a=r(4119),n=r(99106),s=r(51688);const o=(e,t)=>{var r;return{...e,TenantName:null!==(r=e.Tenant)&&void 0!==r?r:t,SystemState:null===e||void 0===e?void 0:e.Overall,Uptime:(0,a.fG)(null===e||void 0===e?void 0:e.StartTime),LoadAveragePercents:(0,s.y$)(e),DC:e.DataCenter}},l=e=>{const t=((e,t)=>{const r=[];if(e)e.forEach((e=>{r.push(o(e))}));else if(t)for(const n of t){var a;null===(a=n.Nodes)||void 0===a||a.forEach((e=>{r.push(o(e,n.Name))}))}return r})(e.Nodes,e.Tenants);return{Nodes:t,TotalNodes:Number(e.TotalNodes)||t.length,FoundNodes:Number(e.FoundNodes)}},d=e=>{const t=(e.Nodes||[]).map((e=>{var t,r,a,n;const o=Number(null===(t=e.SystemState.SharedCacheStats)||void 0===t?void 0:t.LimitBytes)||void 0;return{...(0,s.Ns)(e.SystemState),Tablets:e.Tablets,NodeId:e.NodeId,TenantName:null===(r=e.SystemState)||void 0===r||null===(a=r.Tenants)||void 0===a?void 0:a[0],SharedCacheUsed:null===(n=e.SystemState.SharedCacheStats)||void 0===n?void 0:n.UsedBytes,SharedCacheLimit:o}}));return{Nodes:t,TotalNodes:Number(e.TotalNodes)||t.length,FoundNodes:Number(e.FoundNodes)}},i=(0,n.p)(60,80,["success","warning","danger"])}}]);