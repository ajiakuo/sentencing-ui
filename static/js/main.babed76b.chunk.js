/*! For license information please see main.babed76b.chunk.js.LICENSE.txt */
(this["webpackJsonpsentencing-ui"]=this["webpackJsonpsentencing-ui"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a(12),r=a(198),l=a(197),o=a(106),s=a(78),d=a(79),u=Object(o.a)({palette:{primary:s.a,secondary:d.a},typography:{fontFamily:["Inter","system-ui",'"Segoe UI"',"Roboto","Helvetica","Arial","sans-serif"].join(",")}}),b=a(11),m=a(31),j=a(24),p=a(3),h=a(194),x=a(195),v=a(206),g=a(60),O=a(176),f=a(130),y=a(196),k=a(207),_=a(163),C=a(103),w=a.n(C),N=a(105),S=a.n(N),T=a(203),I=a(166),D=a(167),F=a(5),M=a(72),P=a.n(M),B=Object(_.a)((function(){return{root:{margin:0},summary:{paddingLeft:0},details:{padding:0,flexDirection:"column"}}}),{name:"FactorsAccordion"}),H=Object(F.a)((function(){return{root:{"&$expanded":{margin:0,"&:before":{opacity:1}}},expanded:{}}}),{name:"CondenseAccordion"})(T.a),L=Object(F.a)((function(){return{root:{"&$expanded":{minHeight:"auto"}},content:{margin:"12px 0",maxWidth:"calc(100% - 32px)","&$expanded":{margin:"12px 0"}},expanded:{}}}),{name:"CondenseAccordionSummary"})(I.a);function E(e){var t=B();return Object(n.jsxs)(H,Object(b.a)(Object(b.a)({elevation:0,className:t.root},e),{},{children:[Object(n.jsx)(L,{expandIcon:Object(n.jsx)(P.a,{}),className:t.summary,children:e.summary}),Object(n.jsx)(D.a,{className:t.details,children:e.children})]}))}var A=a(22),R=a(168),U=a(93),G=a.n(U),W=a(94),K=a.n(W),$=Object(_.a)((function(e){return{root:{display:"flex",alignItems:"center"},space:{flexGrow:1},button:{marginLeft:e.spacing(2)},iconSmall:{marginRight:e.spacing(1)/2},icon:{marginRight:e.spacing(1)}}}),{name:"FormToolbar"});function z(e){var t=$(),a=e.canSubmit,c=(e.onClear,e.onSubmit,Object(A.a)(e,["canSubmit","onClear","onSubmit"]));return Object(n.jsxs)("div",Object(b.a)(Object(b.a)({},c),{},{className:Object(p.a)([t.root,e.className]),children:[Object(n.jsx)("div",{className:t.space}),Object(n.jsxs)(R.a,{className:t.button,size:"medium",variant:"extended",onClick:e.onClear,children:[Object(n.jsx)(G.a,{className:t.iconSmall}),"\u6e05\u9664"]}),Object(n.jsxs)(R.a,{className:t.button,color:"secondary",variant:"extended",disabled:!a,onClick:e.onSubmit,children:[Object(n.jsx)(K.a,{className:t.icon}),"\u8a08\u7b97"]})]}))}var J=a(199),Y=a(205),q=a(170),X=a(202),Z=Object(_.a)((function(e){return{root:{display:"flex",alignItems:"center"},label:{flexGrow:1}}}),{name:"FactorCheckBox"}),Q=Object(F.a)((function(e){return{root:{"&$checked":{color:e.palette.secondary.main},'&[data-vibe="positive"]$checked':{color:e.palette.success.dark},'&[data-vibe="negative"]$checked':{color:e.palette.error.dark}},checked:{}}}),{name:"ColoredCheckbox"})((function(e){return Object(n.jsx)(X.a,Object(b.a)({color:"default"},e))}));function V(e){var t=Z(),a=e.name,c=e.value,i=e.label,r=e.vibe,l=e.onChange,o=Object(A.a)(e,["name","value","label","vibe","onChange"]);return Object(n.jsxs)("label",{className:t.root,children:[Object(n.jsx)(g.a,{component:"span",className:t.label,children:i}),Object(n.jsx)(Q,Object(b.a)({name:a,"data-vibe":r,checked:1===c,onChange:function(e){return l(e,a,e.target.checked?1:0)}},o))]})}var ee=a(204),te=[{value:-1,label:"\u2212",description:"\u6e1b\u8f15"},{value:0,label:"",description:"\u4e0d\u5f71\u97ff"},{value:1,label:"+",description:"\u52a0\u91cd"}],ae=Object(_.a)((function(e){return{root:{display:"flex",alignItems:"center"},label:{flexGrow:1},switch:{minWidth:64,width:80,maxWidth:96,marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}),{name:"FactorSlider"}),ne=Object(F.a)((function(e){return{root:{height:14,padding:"14px 0",marginBottom:0,color:e.palette.grey[50],transition:e.transitions.create(["color"],{duration:e.transitions.duration.shortest}),'&[data-state="lighter"]':{color:e.palette.success.main},'&[data-state="heavier"]':{color:e.palette.error.main}},thumb:{width:20,height:20,marginTop:-3,marginLeft:-10,transition:e.transitions.create(["left","box-shadow"],{duration:e.transitions.duration.shortest}),"&::before":{content:'""',position:"absolute",borderRadius:"50%",boxShadow:e.shadows[1],left:0,top:0,right:0,bottom:0},"&::after":{left:-11,top:-11,right:-11,bottom:-11},"&:hover":{boxShadow:"0px 0px 0px 8px rgba(0, 0, 0, 0.16)"}},track:{height:14,opacity:.5,width:"50% !important",transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.shortest}),'[data-state="lighter"] &':{left:"0 !important"},'[data-state="neutral"] &':{opacity:0,width:"0% !important"},'[data-state="heavier"] &':{left:"50% !important"}},rail:{height:14,borderRadius:7,backgroundColor:e.palette.common.black,opacity:.3},mark:{height:14,backgroundColor:e.palette.background.paper,opacity:0,'&[data-index="1"]':{opacity:.8}}}}),{name:"SwitchLikeSlider"})(ee.a);function ce(e){var t=ae(),a=e.name,c=e.value,i=e.label,r=e.onChange,l=Object(A.a)(e,["name","value","label","onChange"]);return Object(n.jsxs)("div",Object(b.a)(Object(b.a)({className:t.root},l),{},{children:[Object(n.jsx)(g.a,{id:"".concat(a,"-label"),component:"label",className:t.label,children:i}),Object(n.jsx)(ne,{className:t.switch,name:a,value:c,onChange:function(e,t){return r(e,a,t)},"aria-labelledby":"".concat(a,"-label"),min:-1,max:1,steps:null,marks:te,"data-state":0===c?"neutral":-1===c?"lighter":"heavier"})]}))}var ie=a(59),re=a(131),le=a(200),oe=a(169),se=a(171),de=a(201),ue=a(172),be=a(173),me=a(84),je=a(108),pe=new Date("2019-05-29T00:00:00+08:00"),he=new Date("2011-11-30T00:00:00+08:00"),xe=[{value:1,text:"\xa7271(1) \u6bba\u4eba\u7f6a",category:"\u6bba\u4eba",kind:"\u666e\u901a\u6bba\u4eba",stage:"accomplished"},{value:2,text:"\xa7271(2),(1) \u6bba\u4eba\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u666e\u901a\u6bba\u4eba",stage:"attempted"},{value:3,text:"\xa7271(3) \u9810\u5099\u6bba\u4eba\u7f6a",category:"\u6bba\u4eba",kind:"\u666e\u901a\u6bba\u4eba",stage:"preparatory",disabled:!0},{value:4,text:"\xa7272(1) \u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u7f6a",category:"\u6bba\u4eba",kind:"\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c",stage:"accomplished",valid_before:pe,disabled:!0},{value:27,text:"\xa7272,\xa7271(1) \u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u7f6a",category:"\u6bba\u4eba",kind:"\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c",stage:"accomplished",valid_after:pe,disabled:!0},{value:5,text:"\xa7272(2),(1) \u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c",stage:"attempted",valid_before:pe,disabled:!0},{value:28,text:"\xa7272,\xa7271(2),(1) \u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c",stage:"attempted",valid_after:pe,disabled:!0},{value:6,text:"\xa7272(3) \u9810\u5099\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u7f6a",category:"\u6bba\u4eba",kind:"\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c",stage:"preparatory",valid_before:pe,disabled:!0},{value:29,text:"\xa7272,\xa7271(3) \u9810\u5099\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u7f6a",category:"\u6bba\u4eba",kind:"\u6bba\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c",stage:"preparatory",valid_after:pe,disabled:!0},{value:7,text:"\xa7273(1) \u7fa9\u61a4\u6bba\u4eba\u7f6a",category:"\u6bba\u4eba",kind:"\u7fa9\u61a4\u6bba\u4eba",stage:"accomplished",disabled:!0},{value:8,text:"\xa7273(2),(1) \u7fa9\u61a4\u6bba\u4eba\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u7fa9\u61a4\u6bba\u4eba",stage:"attempted",disabled:!0},{value:9,text:"\xa7274(1) \u6bcd\u6bba\u5b30\u5152\u7f6a",category:"\u6bba\u4eba",kind:"\u6bcd\u6bba\u5b30\u5152",stage:"accomplished",disabled:!0},{value:10,text:"\xa7274(2),(1) \u6bcd\u6bba\u5b30\u5152\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u6bcd\u6bba\u5b30\u5152",stage:"attempted",disabled:!0},{value:11,text:"\xa7275(1) \u52a0\u5de5\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u52a0\u5de5\u81ea\u6bba",stage:"accomplished",disabled:!0},{value:12,text:"\xa7275(2) \u52a0\u5de5\u81ea\u6bba\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u52a0\u5de5\u81ea\u6bba",stage:"attempted",valid_before:pe,disabled:!0},{value:12,text:"\xa7275(3),(1) \u52a0\u5de5\u81ea\u6bba\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u52a0\u5de5\u81ea\u6bba",stage:"attempted",valid_after:pe,disabled:!0},{value:21,text:"\xa7275(4),\xa7275(1) \u8b00\u70ba\u540c\u6b7b\uff0c\u52a0\u5de5\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u52a0\u5de5\u81ea\u6bba",stage:"accomplished",variant:"\u8b00\u70ba\u540c\u6b7b",valid_after:pe,disabled:!0},{value:21,text:"\xa7275(3) \u8b00\u70ba\u540c\u6b7b\uff0c\u52a0\u5de5\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u52a0\u5de5\u81ea\u6bba",stage:"accomplished",variant:"\u8b00\u70ba\u540c\u6b7b",valid_before:pe,disabled:!0},{value:22,text:"\xa7275(1) \u6559\u5506\u6216\u5e6b\u52a9\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u6bba",stage:"accomplished",valid_before:pe,disabled:!0},{value:25,text:"\xa7275(2) \u6559\u5506\u6216\u5e6b\u52a9\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u6bba",stage:"accomplished",valid_after:pe,disabled:!0},{value:24,text:"\xa7275(2),(1) \u6559\u5506\u6216\u5e6b\u52a9\u81ea\u6bba\u672a\u9042\u7f6a",category:"\u6bba\u4eba",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u6bba",stage:"attempted",valid_before:pe,disabled:!0},{value:23,text:"\xa7275(3),\xa7275(1) \u8b00\u70ba\u540c\u6b7b\uff0c\u6559\u5506\u6216\u5e6b\u52a9\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u6bba",stage:"accomplished",variant:"\u8b00\u70ba\u540c\u6b7b",valid_before:pe,disabled:!0},{value:26,text:"\xa7275(4),\xa7275(2) \u8b00\u70ba\u540c\u6b7b\uff0c\u6559\u5506\u6216\u5e6b\u52a9\u81ea\u6bba\u7f6a",category:"\u6bba\u4eba",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u6bba",stage:"accomplished",variant:"\u8b00\u70ba\u540c\u6b7b",valid_after:pe,disabled:!0},{value:13,text:"\xa7277(2)\u524d\u6bb5 \u50b7\u5bb3\u81f4\u4eba\u65bc\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u50b7\u5bb3\u81f4\u6b7b"},{value:14,text:"\xa7278(2) \u4f7f\u4eba\u53d7\u91cd\u50b7\u56e0\u800c\u81f4\u4eba\u65bc\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u91cd\u50b7\u81f4\u6b7b",disabled:!0},{value:15,text:"\xa7279\u4f46\u66f8 \u7fa9\u61a4\u50b7\u5bb3\u56e0\u800c\u81f4\u4eba\u65bc\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u7fa9\u61a4\u50b7\u5bb3\u81f4\u6b7b",disabled:!0},{value:16,text:"\xa7280,\xa7277(2) \u50b7\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u81f4\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u50b7\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u81f4\u6b7b",disabled:!0},{value:17,text:"\xa7280,\xa7278(2) \u91cd\u50b7\u5bb3\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u81f4\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u91cd\u50b7\u76f4\u7cfb\u8840\u89aa\u5c0a\u89aa\u5c6c\u81f4\u6b7b",disabled:!0},{value:18,text:"\xa7282\u4e2d\u6bb5 \u52a0\u5de5\u81ea\u50b7\u56e0\u800c\u81f4\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u52a0\u5de5\u81ea\u50b7\u81f4\u6b7b",valid_before:pe,disabled:!0},{value:18,text:"\xa7282(1)\u524d\u6bb5 \u52a0\u5de5\u81ea\u50b7\u56e0\u800c\u81f4\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u52a0\u5de5\u81ea\u50b7\u81f4\u6b7b",valid_after:pe,disabled:!0},{value:19,text:"\xa7282\u524d\u6bb5 \u6559\u5506\u6216\u5e6b\u52a9\u81ea\u50b7\u56e0\u800c\u81f4\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u50b7\u81f4\u6b7b",valid_before:pe,disabled:!0},{value:20,text:"\xa7282(2)\u524d\u6bb5 \u6559\u5506\u6216\u5e6b\u52a9\u81ea\u50b7\u56e0\u800c\u81f4\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u6559\u5506\u5e6b\u52a9\u81ea\u50b7\u81f4\u6b7b",valid_after:pe,disabled:!0},{value:30,text:"\xa7283,\xa7277(2)\u524d\u6bb5 \u805a\u773e\u9b25\u6bc6\u81f4\u4eba\u65bc\u6b7b\u7f6a",category:"\u50b7\u5bb3\u81f4\u6b7b",kind:"\u805a\u773e\u9b25\u6bc6\u81f4\u6b7b",valid_before:pe,disabled:!0}],ve=[{name:"c57_1",text:"\xa757(1) \u72af\u7f6a\u52d5\u6a5f\u3001\u76ee\u7684"},{name:"c57_2",text:"\xa757(2) \u72af\u7f6a\u6642\u6240\u53d7\u523a\u6fc0"},{name:"c57_3",text:"\xa757(3) \u72af\u7f6a\u624b\u6bb5"},{name:"c57_4",text:"\xa757(4) \u884c\u70ba\u4eba\u751f\u6d3b\u72c0\u6cc1"},{name:"c57_5",text:"\xa757(5) \u884c\u70ba\u4eba\u54c1\u884c"},{name:"c57_6",text:"\xa757(6) \u884c\u70ba\u4eba\u667a\u8b58\u7a0b\u5ea6"},{name:"c57_7",text:"\xa757(7) \u884c\u70ba\u4eba\u8207\u88ab\u5bb3\u4eba\u95dc\u4fc2"},{name:"c57_8",text:"\xa757(8) \u884c\u70ba\u4eba\u9055\u53cd\u7fa9\u52d9\u7a0b\u5ea6"},{name:"c57_9",text:"\xa757(9) \u72af\u7f6a\u6240\u751f\u4e4b\u5371\u96aa\u6216\u640d\u5bb3"},{name:"c57_10",text:"\xa757(10) \u72af\u7f6a\u5f8c\u4e4b\u614b\u5ea6"},{name:"agg_c47",text:"\xa747 \u7d2f\u72af"},{name:"agg_c112",text:"\u5152\u5c11\xa770 \u6210\u5e74\u4eba\u6559\u5506\u3001\u5e6b\u52a9\u3001\u5229\u7528\u3001\u5171\u540c\u6216\u6545\u610f\u5c0d\u5152\u7ae5\u53ca\u5c11\u5e74\u72af\u7f6a",valid_before:he},{name:"agg_c112",text:"\u5152\u5c11\xa7112 \u6210\u5e74\u4eba\u6559\u5506\u3001\u5e6b\u52a9\u3001\u5229\u7528\u3001\u5171\u540c\u6216\u6545\u610f\u5c0d\u5152\u7ae5\u53ca\u5c11\u5e74\u72af\u7f6a",valid_after:he},{name:"agg_c134",text:"\xa7134 \u516c\u52d9\u54e1\u5229\u7528\u8077\u6b0a\u6a5f\u6703"},{name:"mit_c18_2",text:"\xa718\u2161 \u5341\u56db\u6b72\u4ee5\u4e0a\u672a\u6eff\u5341\u516b\u6b72"},{name:"mit_c18_3",text:"\xa718\u2162 \u6eff\u516b\u5341\u6b72"},{name:"mit_c19_2",text:"\xa719\u2161 \u8fa8\u8b58\u3001\u63a7\u5236\u80fd\u529b\u986f\u8457\u6e1b\u4f4e"},{name:"mit_c20",text:"\xa720 \u7616\u555e",disabled:!0},{name:"mit_c23",text:"\xa723 \u9632\u885b\u904e\u7576"},{name:"mit_c24_1",text:"\xa724\u2160 \u907f\u96e3\u904e\u7576",disabled:!0},{name:"mit_c25_2",text:"\xa725\u2161 \u666e\u901a\u672a\u9042",disabled:!0},{name:"mit_c27_1",text:"\xa727\u2160 \u4e2d\u6b62\u72af"},{name:"mit_c30",text:"\xa730 \u5e6b\u52a9\u72af"},{name:"mit_c31_1",text:"\xa731\u2160 \u8eab\u5206\u72af\u7121\u7279\u5b9a\u95dc\u4fc2\u4e4b\u5171\u72af",disabled:!0},{name:"mit_c59",text:"\xa759 \u60c5\u72c0\u986f\u53ef\u61ab\u6055"},{name:"mit_c62",text:"\xa762 \u81ea\u9996"},{name:"mit_c63",text:"\xa763 \u8001\u5e7c\u8655\u5211",calculated:!0},{name:"mit_cp14_1",text:"\u8b49\u4fdd\xa714\u2160 \u6c61\u9ede\u8b49\u4eba",disabled:!0},{name:"mit_cp7",text:"\u901f\u5be9\xa77 \u8a34\u8a1f\u5ef6\u6eef",valid_after:new Date("2010-05-19T00:00:00+08:00"),disabled:!0}],ge=[{title:"\u6cd5\u5b9a\u79d1\u5211\u6ce8\u610f\u4e8b\u9805",type:"tristate",factors:["c57_1","c57_2","c57_3","c57_4","c57_5","c57_6","c57_7","c57_8","c57_9","c57_10"]},{title:"\u6cd5\u5b9a\u52a0\u91cd\u4e8b\u7531",type:"binary",vibe:"negative",factors:["agg_c47","agg_c112","agg_c134"]},{title:"\u6cd5\u5b9a\u6e1b\u8f15\u4e8b\u7531",type:"binary",vibe:"positive",factors:["mit_c18_2","mit_c18_3","mit_c19_2","mit_c20","mit_c23","mit_c24_1","mit_c25_2","mit_c27_1","mit_c30","mit_c31_1","mit_c59","mit_c62","mit_c63","mit_cp14_1","mit_cp7"]}],Oe=[{id:1,value:"TPC",text:"\u53f8\u6cd5\u9662\u5211\u4e8b\u88dc\u511f",description:"\u53f8\u6cd5\u9662\u5211\u4e8b\u88dc\u511f"},{id:2,value:"TPU",text:"\u53f8\u6cd5\u9662\u8a34\u9858\u6c7a\u5b9a",description:"\u53f8\u6cd5\u9662\u8a34\u9858\u6c7a\u5b9a"},{id:4,value:"TPS",text:"\u6700\u9ad8\u6cd5\u9662",description:"\u6700\u9ad8\u6cd5\u9662"},{id:5,value:"TPA",text:"\u6700\u9ad8\u884c",description:"\u6700\u9ad8\u884c\u653f\u6cd5\u9662"},{id:6,value:"TPP",text:"\u61f2\u6212\u6cd5\u5ead",description:"\u61f2\u6212\u6cd5\u9662\u61f2\u6212\u6cd5\u5ead"},{id:3,value:"TPJ",text:"\u8077\u52d9\u6cd5\u5ead",description:"\u61f2\u6212\u6cd5\u9662\u8077\u52d9\u6cd5\u5ead"},{id:7,value:"TPH",text:"\u9ad8\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662"},{id:8,value:"001",text:"\u9ad8\u9662\u8a34\u9858\u6c7a\u5b9a",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u8a34\u9858\u6c7a\u5b9a"},{id:9,value:"TPB",text:"\u5317\u9ad8\u884c",description:"\u81fa\u5317\u9ad8\u7b49\u884c\u653f\u6cd5\u9662"},{id:10,value:"TCB",text:"\u4e2d\u9ad8\u884c",description:"\u81fa\u4e2d\u9ad8\u7b49\u884c\u653f\u6cd5\u9662"},{id:11,value:"KSB",text:"\u9ad8\u9ad8\u884c",description:"\u9ad8\u96c4\u9ad8\u7b49\u884c\u653f\u6cd5\u9662"},{id:12,value:"IPC",text:"\u667a\u8ca1\u6cd5\u9662",description:"\u667a\u6167\u8ca1\u7522\u6cd5\u9662"},{id:13,value:"TCH",text:"\u81fa\u4e2d\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u81fa\u4e2d\u5206\u9662"},{id:14,value:"TNH",text:"\u81fa\u5357\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u81fa\u5357\u5206\u9662"},{id:15,value:"KSH",text:"\u9ad8\u96c4\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u9ad8\u96c4\u5206\u9662"},{id:16,value:"HLH",text:"\u82b1\u84ee\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u82b1\u84ee\u5206\u9662"},{id:17,value:"TPD",text:"\u81fa\u5317\u5730\u9662",description:"\u81fa\u7063\u81fa\u5317\u5730\u65b9\u6cd5\u9662"},{id:18,value:"SLD",text:"\u58eb\u6797\u5730\u9662",description:"\u81fa\u7063\u58eb\u6797\u5730\u65b9\u6cd5\u9662"},{id:19,value:"PCD",text:"\u65b0\u5317\u5730\u9662",description:"\u81fa\u7063\u65b0\u5317\u5730\u65b9\u6cd5\u9662"},{id:20,value:"ILD",text:"\u5b9c\u862d\u5730\u9662",description:"\u81fa\u7063\u5b9c\u862d\u5730\u65b9\u6cd5\u9662"},{id:21,value:"KLD",text:"\u57fa\u9686\u5730\u9662",description:"\u81fa\u7063\u57fa\u9686\u5730\u65b9\u6cd5\u9662"},{id:22,value:"TYD",text:"\u6843\u5712\u5730\u9662",description:"\u81fa\u7063\u6843\u5712\u5730\u65b9\u6cd5\u9662"},{id:23,value:"SCD",text:"\u65b0\u7af9\u5730\u9662",description:"\u81fa\u7063\u65b0\u7af9\u5730\u65b9\u6cd5\u9662"},{id:24,value:"MLD",text:"\u82d7\u6817\u5730\u9662",description:"\u81fa\u7063\u82d7\u6817\u5730\u65b9\u6cd5\u9662"},{id:25,value:"TCD",text:"\u81fa\u4e2d\u5730\u9662",description:"\u81fa\u7063\u81fa\u4e2d\u5730\u65b9\u6cd5\u9662"},{id:26,value:"CHD",text:"\u5f70\u5316\u5730\u9662",description:"\u81fa\u7063\u5f70\u5316\u5730\u65b9\u6cd5\u9662"},{id:27,value:"NTD",text:"\u5357\u6295\u5730\u9662",description:"\u81fa\u7063\u5357\u6295\u5730\u65b9\u6cd5\u9662"},{id:28,value:"ULD",text:"\u96f2\u6797\u5730\u9662",description:"\u81fa\u7063\u96f2\u6797\u5730\u65b9\u6cd5\u9662"},{id:29,value:"CYD",text:"\u5609\u7fa9\u5730\u9662",description:"\u81fa\u7063\u5609\u7fa9\u5730\u65b9\u6cd5\u9662"},{id:30,value:"TND",text:"\u81fa\u5357\u5730\u9662",description:"\u81fa\u7063\u81fa\u5357\u5730\u65b9\u6cd5\u9662"},{id:31,value:"KSD",text:"\u9ad8\u96c4\u5730\u9662",description:"\u81fa\u7063\u9ad8\u96c4\u5730\u65b9\u6cd5\u9662"},{id:32,value:"CTD",text:"\u6a4b\u982d\u5730\u9662",description:"\u81fa\u7063\u6a4b\u982d\u5730\u65b9\u6cd5\u9662"},{id:33,value:"HLD",text:"\u82b1\u84ee\u5730\u9662",description:"\u81fa\u7063\u82b1\u84ee\u5730\u65b9\u6cd5\u9662"},{id:34,value:"TTD",text:"\u81fa\u6771\u5730\u9662",description:"\u81fa\u7063\u81fa\u6771\u5730\u65b9\u6cd5\u9662"},{id:35,value:"PTD",text:"\u5c4f\u6771\u5730\u9662",description:"\u81fa\u7063\u5c4f\u6771\u5730\u65b9\u6cd5\u9662"},{id:36,value:"PHD",text:"\u6f8e\u6e56\u5730\u9662",description:"\u81fa\u7063\u6f8e\u6e56\u5730\u65b9\u6cd5\u9662"},{id:37,value:"KMH",text:"\u91d1\u9580\u9ad8\u5206\u9662",description:"\u798f\u5efa\u9ad8\u7b49\u6cd5\u9662\u91d1\u9580\u5206\u9662"},{id:38,value:"KMD",text:"\u91d1\u9580\u5730\u9662",description:"\u798f\u5efa\u91d1\u9580\u5730\u65b9\u6cd5\u9662"},{id:39,value:"LCD",text:"\u9023\u6c5f\u5730\u9662",description:"\u798f\u5efa\u9023\u6c5f\u5730\u65b9\u6cd5\u9662"},{id:41,value:"KSY",text:"\u9ad8\u96c4\u5c11\u5bb6\u6cd5\u9662",description:"\u81fa\u7063\u9ad8\u96c4\u5c11\u5e74\u53ca\u5bb6\u4e8b\u6cd5\u9662"}],fe=a(95);function ye(e){if(e>0){var t=Math.floor(e/12);if(t>0){var a=e%12;return a>0?"".concat(t," \u5e74 ").concat(a," \u500b\u6708"):"".concat(t," \u5e74")}return"".concat(e," \u500b\u6708")}return-1===e?"\u7121\u671f\u5f92\u5211":-2===e?"\u6b7b\u5211":"\u7121\u7f6a"}function ke(e,t){var a=Math.pow(10,t),n=Math.round(e*a);return"".concat(Math.floor(n/a),".").concat(n%a)}function _e(e){var t=new Date;return e.filter((function(e){return(void 0===e.valid_before||t<e.valid_before)&&(void 0===e.valid_after||t>=e.valid_after)}))}function Ce(){return _e(xe)}function we(){return _e(ve)}var Ne=new Map([["preparatory","\u9810\u5099"],["attempted","\u672a\u9042"],["accomplished","\u65e2\u9042"]]),Se=Object(_.a)((function(e){return{root:{backgroundColor:e.palette.background.paper},tab:{minWidth:64,flexGrow:1},panel:{margin:e.spacing(1)},controls:{display:"flex",marginBottom:e.spacing(2),"&:last-child":{marginBottom:0}},label:Object(b.a)({color:e.palette.text.secondary},e.typography.subtitle2),stage:{flexGrow:1}}}),{name:"CrimeSelector"}),Te=function(e){var t=e.children,a=e.currentIndex,c=e.index,i=Object(A.a)(e,["children","currentIndex","index"]);return Object(n.jsx)("div",Object(b.a)(Object(b.a)({role:"tabpanel",hidden:a!==c,id:"crime-panel-".concat(c),"aria-labelledby":"crime-tab-".concat(c)},i),{},{children:a===c&&t}))},Ie=function(e){var t=Object(_.a)((function(e){return{root:{},checked:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,"&:hover":{backgroundColor:(t=e.palette.secondary.main,a=e.palette.action.hoverOpacity,Object(fe.fade)(t,1-a)),"@media (hover: none)":{backgroundColor:"transparent"}}}};var t,a}),{name:"ToggleButton"})(),a=e.checked,c=e.className,i=Object(A.a)(e,["checked","className"]);return Object(n.jsx)(re.a,Object(b.a)({"aria-checked":a,className:Object(p.a)(t.root,a?t.checked:null,c)},i))};function De(e){var t=Se(),a=Ce(),i=function(){var e=Ce(),t=new Map;e.forEach((function(e){t.has(e.category)||t.set(e.category,{title:e.category,kinds:new Map});var a=t.get(e.category).kinds;a.has(e.kind)||a.set(e.kind,{text:e.kind,stages:new Set,variants:new Set,disabled:!0,disabledStages:new Set});var n=a.get(e.kind);e.stage&&n.stages.add(e.stage),e.variant&&n.variants.add(e.variant),n.disabled=n.disabled&&e.disabled,e.disabled&&n.disabledStages.add(e.stage)}));var a,n=Object(me.a)(t.values());try{for(n.s();!(a=n.n()).done;){var c,i=a.value,r=Object(me.a)(i.kinds.values());try{for(r.s();!(c=r.n()).done;){var l=c.value;l.stages=l.stages.size>1?Object(ie.a)(l.stages):null,l.variants=l.variants.size>0?Object(ie.a)(l.variants):null}}catch(o){r.e(o)}finally{r.f()}}}catch(o){n.e(o)}finally{n.f()}return t}(),r=Object(ie.a)(i.values()),l=e.value,o=e.onChange,s=a.find((function(e){return e.value===l})),d=s?i.get(s.category):r[0],u=s?d.kinds.get(s.kind):null,b=Object(c.useState)(0),j=Object(m.a)(b,2),p=j[0],h=j[1],x=function(e,t,n,c){var i=a.find((function(e){return t===e.kind&&(!n||n===e.stage)&&(!c||c===e.variant)}));i&&o(e,i.value)};return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(le.a,{value:p,onChange:function(e,t){return h(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"\u7f6a\u540d\u5206\u985e",children:r.map((function(e,a){return Object(n.jsx)(oe.a,{value:a,label:e.title,"data-crime-tab":!0,"data-title":e.title,id:"crime-tab-".concat(a),"aria-controls":"crime-panel-".concat(a),className:t.tab},e.title)}))}),r.map((function(e,a){return Object(n.jsx)(Te,{currentIndex:p,index:a,className:t.panel,children:Object(n.jsx)(q.a,{component:"fieldset",children:Array.from(e.kinds.values(),(function(e){return Object(n.jsx)(se.a,{value:e.text,checked:e.text===(null===u||void 0===u?void 0:u.text),disabled:e.disabled,control:Object(n.jsx)(de.a,{}),label:e.text,onClick:function(e){return x(e,e.target.value)}},e.text)}))})},e.title)})),Object(n.jsxs)("div",{className:t.panel,children:[(null===u||void 0===u?void 0:u.stages)&&Object(n.jsxs)(q.a,{component:"fieldset",className:t.controls,children:[Object(n.jsx)(g.a,{component:"label",id:"stages-label",className:t.label,gutterBottom:!0,children:"\u72af\u7f6a\u968e\u6bb5"}),Object(n.jsx)(ue.a,{color:"primary",variant:"outlined",role:"radiogroup","aria-labelledby":"stages-label",children:Array.from(Ne.keys(),(function(e){return u.stages.includes(e)&&Object(n.jsx)(Ie,{role:"radio",checked:s.stage===e,disabled:u.disabledStages.has(e),onClick:function(t){return x(t,s.kind,e)},className:t.stage,children:Ne.get(e)},e)}))})]}),(null===u||void 0===u?void 0:u.variants)&&Object(n.jsxs)(q.a,{component:"fieldset",className:t.controls,children:[Object(n.jsx)(g.a,{component:"legend",className:t.label,children:"\u7279\u5225\u898f\u5b9a"}),Object(n.jsx)(be.a,{children:u.variants.map((function(e){return Object(n.jsx)(se.a,{label:e,control:Object(n.jsx)(X.a,{checked:s.variant===e,onChange:function(t){return x(t,s.kind,s.stage,t.target.checked?e:null)}})},e)}))})]})]})]})}var Fe=Object(_.a)((function(e){return{root:Object(j.a)({margin:"-".concat(e.spacing(1),"px"),width:"calc(100% + ".concat(e.spacing(2),"px)"),"& > div":{padding:e.spacing(1)}},e.breakpoints.up("md"),{margin:"-".concat(e.spacing(2),"px"),width:"calc(100% + ".concat(e.spacing(4),"px)"),"& > div":{padding:e.spacing(2)}}),selectTitle:{flexShrink:0},selectControl:{marginLeft:e.spacing(2),flexGrow:1,flexShrink:1}}}),{name:"AppForm"}),Me=Object(F.a)((function(e){return{select:{color:e.palette.text.secondary,"&:focus":{color:e.palette.text.primary}}}}),{name:"CrimeSelect"})((function(e){var t=e.value,a=Object(A.a)(e,["value"]),c=Ce();return c.sort((function(e,t){return e.value-t.value})),Object(n.jsxs)(J.a,Object(b.a)(Object(b.a)({displayEmpty:!0,value:t>=0?t:"",inputProps:{"aria-label":"\u7f6a\u540d"},IconComponent:"div"},a),{},{children:[Object(n.jsx)(Y.a,{value:"",disabled:!0,children:"\u9069\u7528\u689d\u6587"}),c.map((function(e){return Object(n.jsx)(Y.a,{value:e.value,disabled:e.disabled,children:e.text},e.value)}))]}))}));function Pe(e){var t=Fe(),a=function(){var e=we();return ge.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{factors:t.factors.map((function(t){return e.find((function(e){return e.name===t}))}))})}))}(),c=e.crime,i=e.factors,r=(e.showFilter,e.onCrimeChanged),l=e.onFactorChanged,o=Object(A.a)(e,["crime","factors","showFilter","onCrimeChanged","onFactorChanged"]);return Object(n.jsxs)(O.a,Object(b.a)(Object(b.a)({container:!0,component:"form",className:t.root},o),{},{children:[Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,md:12,lg:6,children:Object(n.jsx)(E,{defaultExpanded:!0,summary:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{variant:"h6",className:t.selectTitle,children:"\u7f6a\u540d"}),Object(n.jsx)(q.a,{className:t.selectControl,children:Object(n.jsx)(Me,{name:"crime",value:c,onChange:function(e){var t;r(e.target.value);var a=Ce().find((function(t){return t.value===e.target.value}));null===(t=document.querySelector("button[data-crime-tab][data-title=".concat(a.category,"]")))||void 0===t||t.click()},onClick:function(e){return e.stopPropagation()}})})]}),children:Object(n.jsx)(De,{value:c,onChange:function(e,t){r(t)}})})}),Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,md:12,lg:6,children:a.map((function(e){return Object(n.jsx)(E,{defaultExpanded:"binary"!==e.type,summary:Object(n.jsx)(g.a,{variant:"h6",children:e.title}),children:e.factors.map((function(t){return Object(n.jsx)("div",{children:"binary"===e.type?Object(n.jsx)(V,{name:t.name,value:void 0!==i[t.name]?i[t.name]:0,label:t.text,vibe:e.vibe,disabled:t.disabled,onChange:l}):Object(n.jsx)(ce,{name:t.name,value:void 0!==i[t.name]?i[t.name]:0,label:t.text,onChange:l,disabled:t.disabled})},t.name)}))},e.title)}))})]}))}var Be=a(96),He=a(97),Le=a(30),Ee=a(76),Ae=a(98),Re=a(110),Ue=a(107),Ge=a(178),We=a(180),Ke=a(181),$e=a(177),ze=a(179),Je=a(182),Ye=a(183),qe=a(184),Xe=a(185),Ze=function(e){Object(Ee.a)(a,e);var t=Object(Ae.a)(a);function a(e){var n;return Object(Be.a)(this,a),(n=t.call(this,e)).state={anchorEl:null,loggedIn:!0},n.handleButtonClick=n.handleButtonClick.bind(Object(Le.a)(n)),n.handleUserItemClick=n.handleUserItemClick.bind(Object(Le.a)(n)),n.handleFilterItemClick=n.handleFilterItemClick.bind(Object(Le.a)(n)),n.handleHelpItemClick=n.handleHelpItemClick.bind(Object(Le.a)(n)),n.handleFeedbackItemClick=n.handleFeedbackItemClick.bind(Object(Le.a)(n)),n.handleMenuClose=n.handleMenuClose.bind(Object(Le.a)(n)),n}return Object(He.a)(a,[{key:"handleButtonClick",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleUserItemClick",value:function(){this.setState({loggedIn:!this.state.loggedIn})}},{key:"handleFilterItemClick",value:function(){this.onShowFilterChanged(!this.props.showFilter),this.handleMenuClose()}},{key:"handleHelpItemClick",value:function(){this.handleMenuClose()}},{key:"handleFeedbackItemClick",value:function(){window.open("https://www.judicial.gov.tw","_blank"),this.handleMenuClose()}},{key:"handleMenuClose",value:function(){this.setState({anchorEl:null})}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Re.a,{"aria-controls":"menu","aria-haspopup":"true","aria-label":"\u958b\u555f\u529f\u80fd\u8868",color:"inherit",onClick:this.handleButtonClick,children:Object(n.jsx)($e.a,{})}),Object(n.jsxs)(Ue.a,{id:"menu",keepMounted:!0,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:null,open:Boolean(this.state.anchorEl),onClose:this.handleMenuClose,children:[Object(n.jsxs)(Y.a,{onClick:this.handleUserItemClick,children:[Object(n.jsx)(Ge.a,{children:Object(n.jsx)(v.a,{children:this.state.loggedIn?"\u9673":Object(n.jsx)(ze.a,{})})}),Object(n.jsx)(We.a,{primary:this.state.loggedIn?"\u9673\u5c0f\u6797":"\u8a2a\u5ba2\u4f7f\u7528\u8005",secondary:this.state.loggedIn?"sl;chen@judicial;gov;tw".replace(/;/g,"."):"\u6309\u4e00\u4e0b\u4ee5\u767b\u5165"})]}),Object(n.jsx)(Ke.a,{}),Object(n.jsxs)(Y.a,{onClick:this.handleFilterItemClick,disabled:!0,children:[Object(n.jsx)(Ge.a,{children:this.props.showFilter?Object(n.jsx)(Je.a,{color:"secondary"}):Object(n.jsx)(Ye.a,{})}),Object(n.jsx)(We.a,{primary:"\u986f\u793a\u4fee\u6b63\u524d\u689d\u6587"})]}),Object(n.jsxs)(Y.a,{onClick:this.handleHelpItemClick,children:[Object(n.jsx)(Ge.a,{children:Object(n.jsx)(qe.a,{})}),Object(n.jsx)(We.a,{primary:"\u4f7f\u7528\u8aaa\u660e"})]}),Object(n.jsxs)(Y.a,{onClick:this.handleFeedbackItemClick,children:[Object(n.jsx)(Ge.a,{children:Object(n.jsx)(Xe.a,{})}),Object(n.jsx)(We.a,{primary:"\u56de\u5831\u554f\u984c"})]})]})]})}}]),a}(c.Component),Qe=a(186),Ve=a(187),et=a(188),tt=a(189),at=a(190),nt=a(191),ct=a(192),it=a(193),rt=a(101),lt=a.n(rt),ot=a(99),st=a.n(ot),dt=a(100),ut=a.n(dt),bt=Object(_.a)((function(e){return{heading:{flexGrow:1},metaControl:{display:"flex",flexDirection:"column",minWidth:"6rem",flexBasis:"7rem",flexShrink:1,marginLeft:e.spacing(1)},metaRow:{display:"flex"},metadata:Object(b.a)(Object(b.a)({},e.typography.caption),{},{color:e.palette.text.secondary,"&:first-child":{flexGrow:1}}),relevance:{transform:"rotateY(180deg)"},details:{flexDirection:"column"},labels:{marginTop:e.spacing(1)-20,marginBottom:20-e.spacing(1)},label:{"&[hidden]":{opacity:.54}},icon:{padding:e.spacing(1)}}}),{name:"CaseAccordion"});function mt(e){var t,a=bt(),c=function(e){var t=e.match(Object(je.a)(/^([A-Z]+),([0-9]+),((?:(?!,)[\s\S])+),([0-9]+)$/,{court:1,year:2,case:3,no:4}));if(null!=t){var a,n=t.groups.court,c="TPS"===n?"":(null===(a=Oe.find((function(e){return e.value==n})))||void 0===a?void 0:a.text)||n;return{database_id:e,court:n,year:t.groups.year,case:t.groups.case,no:t.groups.no,formatted_text:"".concat(c," ").concat(t.groups.year," \u5e74\u5ea6").concat(t.groups.case,"\u5b57\u7b2c ").concat(t.groups.no," \u865f\u5211\u4e8b\u5224\u6c7a")}}}(e.id),i=function(e){return 1===e?Object(n.jsx)(st.a,{}):-1===e?Object(n.jsx)(ut.a,{}):0===e?null:e};return Object(n.jsxs)(T.a,{children:[Object(n.jsxs)(I.a,{expandIcon:Object(n.jsx)(P.a,{}),children:[Object(n.jsx)(g.a,{variant:"subtitle1",className:a.heading,children:c.formatted_text}),Object(n.jsxs)("div",{className:a.metaControl,children:[Object(n.jsxs)("div",{className:a.metaRow,children:[Object(n.jsx)(g.a,{component:"div",className:a.metadata,children:ye(e.sentence)}),Object(n.jsx)(g.a,{component:"div",className:a.metadata,children:ke(e.relevance,3)})]}),Object(n.jsx)(Qe.a,{variant:"determinate",value:100*e.relevance,className:a.relevance})]})]}),Object(n.jsx)(D.a,{className:a.details,children:e.factors&&Object(n.jsx)(Ve.a,{className:a.labels,children:Object(n.jsxs)(et.a,{"aria-label":"\u91cf\u5211\u56e0\u7d20\u6a19\u8a18",children:[Object(n.jsx)(tt.a,{children:Object(n.jsxs)(at.a,{children:[Object(n.jsx)(nt.a,{children:"\u8f38\u5165"}),Object(n.jsx)(nt.a,{children:"\u91cf\u5211\u56e0\u7d20"}),Object(n.jsx)(nt.a,{children:"\u672c\u6848"})]})}),Object(n.jsx)(ct.a,{children:e.factors.map((function(e){return!e.disabled&&!("c"!==e.name[0]&&0===e.input&&0===e.value)&&Object(n.jsxs)(at.a,{className:a.label,children:[Object(n.jsx)(nt.a,{className:a.icon,children:i(e.input)}),Object(n.jsx)(nt.a,{children:e.text}),Object(n.jsx)(nt.a,{className:a.icon,children:i(e.value)})]},e.name)}))})]})})}),Object(n.jsx)(it.a,{children:Object(n.jsx)(re.a,{className:a.sourceButton,endIcon:Object(n.jsx)(lt.a,{}),target:"_blank",href:(t=c,"https://law.judicial.gov.tw/FJUD/qryresult.aspx?jud_court=".concat(t.court,"&jud_sys=M&jud_year=").concat(t.year,"&jud_case=").concat(t.case,"&jud_no=").concat(t.no,"&judtype=JUDBOOK")),children:"\u5728\u6cd5\u5b78\u8cc7\u6599\u6aa2\u7d22\u7cfb\u7d71\u6aa2\u8996"})})]})}var jt=a(85),pt=a.n(jt),ht=a(102);window&&console.info("%cNote: The coded API is not endorsed by the hosting domain. See project license for details.","font-style: italic; color: gray");var xt=function(){var e=Object(ht.a)(pt.a.mark((function e(t,a){var n,c,i,r,l;return pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URLSearchParams).append("Svalue",t),(c=we()).forEach((function(e){var t=a[e.name];n.append(e.name,void 0!==t?t:0)})),i=window&&"localhost"===window.location.hostname?"http://localhost:9165/v1/predictions":"https://35.229.167.36/v1/predictions",e.next=7,fetch(i,{method:"POST",headers:{"X-Requested-With":"Sentencing-UI"},body:n,mode:"cors",credentials:"omit",cache:"no-store"});case 7:if((r=e.sent).ok){e.next=10;break}throw new Error("HTTP ".concat(r.status," ").concat(r.statusText));case 10:return e.next=12,r.json();case 12:return l=e.sent,e.abrupt("return",{estimation:l.estimation,error_margin:l.error_margin||18,plot:l.plot_img,related_cases:l.related_cases.map((function(e){return{_pk:e.caseindex,id:e.shortid2,relevance:e.sim,crime:e.Svalue,sentence:e.prison_m,subject:e.subject,labels:e.labels?e.labels.map((function(e){return{factor:e.Ctype,summary:e.Ctext,value:e.Cvalue}})):null,factors:e.factors?c.map((function(t){return{name:t.name,text:t.text,disabled:!!t.disabled,input:void 0!==a[t.name]?a[t.name]:0,value:e.factors[t.name]}})):null}}))});case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),vt=Object(_.a)((function(e){var t;return{root:{height:"100vh"},logo:{marginRight:e.spacing(1),backgroundColor:e.palette.secondary[400]},title:{flexGrow:1},main:(t={width:"100vw",minHeight:"100vh",overflowX:"hidden",backgroundColor:e.palette.background.default,paddingTop:56},Object(j.a)(t,"".concat(e.breakpoints.up("xs")," and (orientation: landscape)"),{paddingTop:48}),Object(j.a)(t,e.breakpoints.up("sm"),{paddingTop:64}),Object(j.a)(t,e.breakpoints.up("md"),{height:"100vh"}),t),pane:Object(j.a)({},e.breakpoints.up("md"),{height:"100%",overflowY:"scroll"}),content:{margin:e.spacing(4),display:"flex",flexDirection:"column"},controls:Object(j.a)({marginTop:e.spacing(2),alignSelf:"end"},e.breakpoints.up("md"),{position:"sticky",bottom:e.spacing(4)}),progress:{alignSelf:"center"},prediction:{padding:e.spacing(2)},sentence:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},plot:{maxWidth:"100%",marginTop:e.spacing(2)},descriptor:{color:e.palette.text.secondary},tipped:{display:"flex",alignItems:"center"},helpIcon:{fontSize:"1rem"},message:{color:e.palette.text.secondary,textAlign:"center"}}}),{name:"App"});function gt(){var e=vt(),t=Object(c.useState)(-1),a=Object(m.a)(t,2),i=a[0],r=a[1],l=Object(c.useState)({}),o=Object(m.a)(l,2),s=o[0],d=o[1],u=Object(c.useState)(!1),_=Object(m.a)(u,2),C=_[0],N=_[1],T=Object(c.useState)("blank"),I=Object(m.a)(T,2),D=I[0],F=I[1],M=Object(c.useState)({}),P=Object(m.a)(M,2),B=P[0],H=P[1],L=Object(c.useState)(""),A=Object(m.a)(L,2),R=A[0],U=A[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(h.a,{position:"fixed",children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(v.a,{className:e.logo,children:Object(n.jsx)(w.a,{})}),Object(n.jsx)(g.a,{variant:"h6",noWrap:!0,className:e.title,children:"\u53f8\u6cd5\u9662\u91cf\u5211\u8cc7\u8a0a\u7cfb\u7d71"}),Object(n.jsx)(Ze,{showFilter:C,onShowFilterChanged:N})]})}),Object(n.jsxs)(O.a,{container:!0,component:"main",className:e.main,children:[Object(n.jsx)(O.a,{item:!0,xs:12,md:6,lg:7,xl:6,component:f.a,elevation:3,className:e.pane,children:Object(n.jsxs)("div",{className:e.content,children:[Object(n.jsx)(Pe,{crime:i,factors:s,showFilter:C,onCrimeChanged:function(e){r(e),d(Object(b.a)(Object(b.a)({},s),{},{mit_c25_2:2==e?1:0}))},onFactorChanged:function(e,t,a){d((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},t,a))}))}}),Object(n.jsx)(z,{className:e.controls,canSubmit:i>=0,onSubmit:function(){U(""),F("loading"),H({}),xt(i,s).then((function(e){e.related_cases.sort((function(e,t){return Math.round(100*t.relevance)-Math.round(100*e.relevance)})),H(e),F("ready")})).catch((function(e){console.log(e),U(e.message),F("error")}))},onClear:function(){r(-1),d({}),F("blank")}})]})}),Object(n.jsx)(O.a,{item:!0,xs:12,md:6,lg:5,xl:6,className:e.pane,children:Object(n.jsxs)("div",{className:e.content,children:["loading"===D&&Object(n.jsx)(y.a,{className:e.progress}),"ready"===D&&Object(n.jsxs)(f.a,{elevation:1,className:e.prediction,children:[Object(n.jsx)(g.a,{variant:"caption",component:"h5",className:e.descriptor,children:"\u91cf\u5211\u4f30\u8a08\u5340\u9593"}),Object(n.jsx)(g.a,{variant:"h4",component:"div",className:e.sentence,children:B.estimation>B.error_margin?"".concat(ye(B.estimation-B.error_margin)," ~ ").concat(ye(B.estimation+B.error_margin)):ye(B.estimation)}),B.plot&&Object(n.jsx)("img",{src:B.plot,className:e.plot}),Object(n.jsx)(E,{defaultExpanded:!0,summary:Object(n.jsxs)(g.a,{variant:"caption",component:"h5",className:Object(p.a)(e.descriptor,e.tipped),children:[Object(n.jsx)("span",{children:"\u76f8\u95dc\u5224\u6c7a"}),Object(n.jsx)(k.a,{title:"\u4f9d\u7167\u60c5\u72c0\u76f8\u4f3c\u7a0b\u5ea6\uff0c\u63c0\u9078\u524d\u5e7e\u540d\u7684\u76f8\u4f3c\u5224\u6c7a\u3002",children:Object(n.jsx)(S.a,{className:e.helpIcon})})]}),children:B.related_cases.map((function(e){return Object(n.jsx)(mt,Object(b.a)({},e),e.id)}))})]}),"blank"===D&&Object(n.jsx)("div",{className:e.message,children:Object(n.jsx)(g.a,{variant:"body1",children:"\u8f38\u5165\u8b8a\u9805\u5f8c\uff0c\u6309\u4e00\u4e0b\u300c\u8a08\u7b97\u300d\u4ee5\u53d6\u5f97\u9810\u6e2c\u7d50\u679c\u3002"})}),"error"===D&&Object(n.jsxs)("div",{className:e.message,children:[Object(n.jsx)(g.a,{variant:"body1",children:"\u4f3a\u670d\u5668\u6216\u7db2\u8def\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002"}),R&&Object(n.jsx)(g.a,{variant:"caption",children:R})]})]})})]})]})}var Ot=document.getElementById("root"),ft=Object(n.jsxs)(l.a,{theme:u,children:[Object(n.jsx)(r.a,{}),Object(n.jsx)(gt,{})]});Ot.hasChildNodes()?Object(i.hydrate)(ft,Ot):Object(i.render)(ft,Ot)}},[[129,1,2]]]);
//# sourceMappingURL=main.babed76b.chunk.js.map