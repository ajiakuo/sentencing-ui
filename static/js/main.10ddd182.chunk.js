/*! For license information please see main.10ddd182.chunk.js.LICENSE.txt */
(this["webpackJsonpsentencing-ui"]=this["webpackJsonpsentencing-ui"]||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a(12),r=a(186),s=a(185),o=a(104),l=a(74),d=a(75),m=Object(o.a)({palette:{primary:l.a,secondary:d.a},typography:{fontFamily:["Inter","system-ui",'"Segoe UI"',"Roboto","Helvetica","Arial","sans-serif"].join(",")}}),j=a(11),u=a(52),b=a(21),x=a(4),p=a(182),h=a(183),O=a(192),g=a(76),v=a(165),f=a(126),_=a(184),y=a(193),C=a(181),k=a(157),N=a(102),w=a.n(N),S=a(82),T=a.n(S),I=a(189),D=a(160),P=a(161),B=a(5),M=a(69),E=a.n(M),L=Object(k.a)((function(){return{root:{margin:0},summary:{paddingLeft:0},details:{padding:0,flexDirection:"column"}}}),{name:"FactorsAccordion"}),F=Object(B.a)((function(){return{root:{"&$expanded":{margin:0,"&:before":{opacity:1}}},expanded:{}}}),{name:"CondenseAccordion"})(I.a),A=Object(B.a)((function(){return{root:{"&$expanded":{minHeight:"auto"}},content:{margin:"12px 0",maxWidth:"calc(100% - 32px)","&$expanded":{margin:"12px 0"}},expanded:{}}}),{name:"CondenseAccordionSummary"})(D.a);function H(e){var t=L();return Object(n.jsxs)(F,Object(j.a)(Object(j.a)({elevation:0,className:t.root},e),{},{children:[Object(n.jsx)(A,{expandIcon:Object(n.jsx)(E.a,{}),className:t.summary,children:e.summary}),Object(n.jsx)(P.a,{className:t.details,children:e.children})]}))}var R=a(26),U=a(162),K=a(92),G=a.n(K),W=a(93),$=a.n(W),z=Object(k.a)((function(e){return{root:{display:"flex",alignItems:"center"},space:{flexGrow:1},button:{marginLeft:e.spacing(2)},iconSmall:{marginRight:e.spacing(1)/2},icon:{marginRight:e.spacing(1)}}}),{name:"FormToolbar"});function J(e){var t=z(),a=e.canSubmit,c=(e.onClear,e.onSubmit,Object(R.a)(e,["canSubmit","onClear","onSubmit"]));return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({},c),{},{className:Object(x.a)([t.root,e.className]),children:[Object(n.jsx)("div",{className:t.space}),Object(n.jsxs)(U.a,{className:t.button,size:"medium",variant:"extended",onClick:e.onClear,children:[Object(n.jsx)(G.a,{className:t.iconSmall}),"\u6e05\u9664"]}),Object(n.jsxs)(U.a,{className:t.button,color:"secondary",variant:"extended",disabled:!a,onClick:e.onSubmit,children:[Object(n.jsx)($.a,{className:t.icon}),"\u8a08\u7b97"]})]}))}var Y=a(187),q=a(191),X=a(166),Z=a(188),Q=Object(k.a)((function(e){return{root:{display:"flex",alignItems:"center"},label:{flexGrow:1}}}),{name:"FactorCheckBox"}),V=Object(B.a)((function(e){return{root:{"&$checked":{color:e.palette.secondary.main},'&[data-vibe="positive"]$checked':{color:e.palette.success.dark},'&[data-vibe="negative"]$checked':{color:e.palette.error.dark}},checked:{}}}),{name:"ColoredCheckbox"})((function(e){return Object(n.jsx)(Z.a,Object(j.a)({color:"default"},e))}));function ee(e){var t=Q(),a=e.name,c=e.value,i=e.label,r=e.vibe,s=e.onChange,o=Object(R.a)(e,["name","value","label","vibe","onChange"]);return Object(n.jsxs)("label",{className:t.root,children:[Object(n.jsx)(g.a,{component:"span",className:t.label,children:i}),Object(n.jsx)(V,Object(j.a)({name:a,"data-vibe":r,checked:1===c,onChange:function(e){return s(e,a,e.target.checked?1:0)}},o))]})}var te=a(190),ae=[{value:-1,label:"\u2212",description:"\u6e1b\u8f15"},{value:0,label:"",description:"\u4e0d\u5f71\u97ff"},{value:1,label:"+",description:"\u52a0\u91cd"}],ne=Object(k.a)((function(e){return{root:{display:"flex",alignItems:"center"},label:{flexGrow:1},switch:{minWidth:64,width:80,maxWidth:96,marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}),{name:"FactorSlider"}),ce=Object(B.a)((function(e){return{root:{height:14,padding:"14px 0",marginBottom:0,color:e.palette.grey[50],transition:e.transitions.create(["color"],{duration:e.transitions.duration.shortest}),'&[data-state="lighter"]':{color:e.palette.success.main},'&[data-state="heavier"]':{color:e.palette.error.main}},thumb:{width:20,height:20,marginTop:-3,marginLeft:-10,transition:e.transitions.create(["left","box-shadow"],{duration:e.transitions.duration.shortest}),"&::before":{content:'""',position:"absolute",borderRadius:"50%",boxShadow:e.shadows[1],left:0,top:0,right:0,bottom:0},"&::after":{left:-11,top:-11,right:-11,bottom:-11},"&:hover":{boxShadow:"0px 0px 0px 8px rgba(0, 0, 0, 0.16)"}},track:{height:14,opacity:.5,width:"50% !important",transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.shortest}),'[data-state="lighter"] &':{left:"0 !important"},'[data-state="neutral"] &':{opacity:0,width:"0% !important"},'[data-state="heavier"] &':{left:"50% !important"}},rail:{height:14,borderRadius:7,backgroundColor:e.palette.common.black,opacity:.3},mark:{height:14,backgroundColor:e.palette.background.paper,opacity:0,'&[data-index="1"]':{opacity:.8}}}}),{name:"SwitchLikeSlider"})(te.a);function ie(e){var t=ne(),a=e.name,c=e.value,i=e.label,r=e.onChange,s=Object(R.a)(e,["name","value","label","onChange"]);return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({className:t.root},s),{},{children:[Object(n.jsx)(g.a,{id:"".concat(a,"-label"),component:"label",className:t.label,children:i}),Object(n.jsx)(ce,{className:t.switch,name:a,value:c,onChange:function(e,t){return r(e,a,t)},"aria-labelledby":"".concat(a,"-label"),min:-1,max:1,steps:null,marks:ae,"data-state":0===c?"neutral":-1===c?"lighter":"heavier"})]}))}a(83);var re=a(57),se=a(106),oe=(new Date("2019-05-29T00:00:00+08:00"),new Date("2011-11-30T00:00:00+08:00")),le=[{value:7,text:"\u5211\u6cd5 \xa7328 I \u666e\u901a\u5f37\u76dc\u53d6\u8ca1\u65e2\u9042\u7f6a \uff08\u6cd5\u5b9a\u5211\u70ba5\u5e74\u4ee5\u4e0a\u6709\u671f\u5f92\u5211\uff09",category:"\u5f37\u76dc",kind:"\u666e\u901a\u5f37\u76dc",stage:"accomplished",min_sentence:60,max_sentence:180},{value:15,text:"\u5211\u6cd5 \xa7330  I \u52a0\u91cd\u5f37\u76dc\u65e2\u9042\u7f6a \uff08\u6cd5\u5b9a\u5211\u70ba7\u5e74\u4ee5\u4e0a\u6709\u671f\u5f92\u5211\uff09",category:"\u5f37\u76dc",kind:"\u52a0\u91cd\u5f37\u76dc",stage:"accomplished",min_sentence:84,max_sentence:180},{value:16,text:"\u5211\u6cd5 \xa7330 II \u52a0\u91cd\u5f37\u76dc\u672a\u9042\u7f6a \uff08\u65e2\u9042\u72af\u4e4b\u6cd5\u5b9a\u5211\u70ba7\u5e74\u4ee5\u4e0a\u6709\u671f\u5f92\u5211\uff09",category:"\u5f37\u76dc",kind:"\u52a0\u91cd\u5f37\u76dc",stage:"attempt",min_sentence:42,max_sentence:180}],de=[{name:"c57_1",text:"\xa757(1) \u72af\u7f6a\u52d5\u6a5f\u3001\u76ee\u7684"},{name:"c57_2",text:"\xa757(2) \u72af\u7f6a\u6642\u6240\u53d7\u523a\u6fc0"},{name:"c57_3",text:"\xa757(3) \u72af\u7f6a\u624b\u6bb5"},{name:"c57_4",text:"\xa757(4) \u884c\u70ba\u4eba\u751f\u6d3b\u72c0\u6cc1"},{name:"c57_5",text:"\xa757(5) \u884c\u70ba\u4eba\u54c1\u884c"},{name:"c57_6",text:"\xa757(6) \u884c\u70ba\u4eba\u667a\u8b58\u7a0b\u5ea6"},{name:"c57_7",text:"\xa757(7) \u884c\u70ba\u4eba\u8207\u88ab\u5bb3\u4eba\u95dc\u4fc2"},{name:"c57_8",text:"\xa757(8) \u884c\u70ba\u4eba\u9055\u53cd\u7fa9\u52d9\u7a0b\u5ea6"},{name:"c57_9",text:"\xa757(9) \u72af\u7f6a\u6240\u751f\u4e4b\u5371\u96aa\u6216\u640d\u5bb3"},{name:"c57_10_1",text:"\xa757(10)-1 \u72af\u7f6a\u5f8c\u4e4b\u614b\u5ea6\uff1a\u5075\u5bdf\u5211\u8a62\u6642\u614b\u5ea6\u826f\u597d"},{name:"c57_10_2",text:"\xa757(10)-2 \u72af\u7f6a\u5f8c\u4e4b\u614b\u5ea6\uff1a\u5411\u53d7\u5bb3\u6216\u76f8\u95dc\u4eba\u9053\u6b49\u53d6\u5f97\u5ba5\u6055"},{name:"c57_10_3",text:"\xa757(10)-3 \u72af\u7f6a\u5f8c\u4e4b\u614b\u5ea6\uff1a\u5411\u53d7\u5bb3\u6216\u76f8\u95dc\u4eba\u5177\u9ad4\u8ce0\u511f"},{name:"agg_c47",text:"\xa747 \u7d2f\u72af"},{name:"agg_c70",text:"\u5152\u5c11\xa770 \u6210\u5e74\u4eba\u6559\u5506\u3001\u5e6b\u52a9\u3001\u5229\u7528\u3001\u5171\u540c\u6216\u6545\u610f\u5c0d\u5152\u7ae5\u53ca\u5c11\u5e74\u72af\u7f6a",valid_before:oe},{name:"agg_c112",text:"\u5152\u5c11\xa7112 \u6210\u5e74\u4eba\u6559\u5506\u3001\u5e6b\u52a9\u3001\u5229\u7528\u3001\u5171\u540c\u6216\u6545\u610f\u5c0d\u5152\u7ae5\u53ca\u5c11\u5e74\u72af\u7f6a",valid_after:oe},{name:"agg_c134",text:"\xa7134 \u516c\u52d9\u54e1\u5229\u7528\u8077\u6b0a\u6a5f\u6703",disabled:!0},{name:"mit_c18_2",text:"\xa718\u2161 \u5341\u56db\u6b72\u4ee5\u4e0a\u672a\u6eff\u5341\u516b\u6b72"},{name:"mit_c18_3",text:"\xa718\u2162 \u6eff\u516b\u5341\u6b72",disabled:!0},{name:"mit_c19_2",text:"\xa719\u2161 \u8fa8\u8b58\u3001\u63a7\u5236\u80fd\u529b\u986f\u8457\u6e1b\u4f4e"},{name:"mit_c20",text:"\xa720 \u7616\u555e",disabled:!0},{name:"mit_c23",text:"\xa723 \u9632\u885b\u904e\u7576",disabled:!0},{name:"mit_c24_1",text:"\xa724\u2160 \u907f\u96e3\u904e\u7576",disabled:!0},{name:"mit_c25_2",text:"\xa725\u2161 \u666e\u901a\u672a\u9042",disabled:!0},{name:"mit_c27_1",text:"\xa727\u2160 \u4e2d\u6b62\u72af"},{name:"mit_c30",text:"\xa730 \u5e6b\u52a9\u72af"},{name:"mit_c31_1",text:"\xa731\u2160 \u8eab\u5206\u72af\u7121\u7279\u5b9a\u95dc\u4fc2\u4e4b\u5171\u72af",disabled:!0},{name:"mit_c59",text:"\xa759 \u60c5\u72c0\u986f\u53ef\u61ab\u6055"},{name:"mit_c62",text:"\xa762 \u81ea\u9996"},{name:"mit_c63",text:"\xa763 \u8001\u5e7c\u8655\u5211",calculated:!0},{name:"mit_cp14_1",text:"\u8b49\u4fdd\xa714\u2160 \u6c61\u9ede\u8b49\u4eba"},{name:"mit_cp7",text:"\u901f\u5be9\xa77 \u8a34\u8a1f\u5ef6\u6eef",valid_after:new Date("2010-05-19T00:00:00+08:00"),disabled:!0}],me=[{title:"\u6cd5\u5b9a\u52a0\u91cd\u4e8b\u7531",type:"binary",vibe:"negative",factors:["agg_c47","agg_c112","agg_c134"]},{title:"\u6cd5\u5b9a\u6e1b\u8f15\u4e8b\u7531",type:"binary",vibe:"positive",factors:["mit_c18_2","mit_c18_3","mit_c19_2","mit_c20","mit_c23","mit_c24_1","mit_c25_2","mit_c27_1","mit_c30","mit_c31_1","mit_c59","mit_c62","mit_c63","mit_cp14_1","mit_cp7"]},{title:"\u6cd5\u5b9a\u79d1\u5211\u6ce8\u610f\u4e8b\u9805",type:"tristate",factors:["c57_1","c57_2","c57_3","c57_4","c57_5","c57_6","c57_7","c57_8","c57_9","c57_10_1","c57_10_2","c57_10_3"]}],je=[{id:1,value:"TPC",text:"\u53f8\u6cd5\u9662\u5211\u4e8b\u88dc\u511f",description:"\u53f8\u6cd5\u9662\u5211\u4e8b\u88dc\u511f"},{id:2,value:"TPU",text:"\u53f8\u6cd5\u9662\u8a34\u9858\u6c7a\u5b9a",description:"\u53f8\u6cd5\u9662\u8a34\u9858\u6c7a\u5b9a"},{id:4,value:"TPS",text:"\u6700\u9ad8\u6cd5\u9662",description:"\u6700\u9ad8\u6cd5\u9662"},{id:5,value:"TPA",text:"\u6700\u9ad8\u884c",description:"\u6700\u9ad8\u884c\u653f\u6cd5\u9662"},{id:6,value:"TPP",text:"\u61f2\u6212\u6cd5\u5ead",description:"\u61f2\u6212\u6cd5\u9662\u61f2\u6212\u6cd5\u5ead"},{id:3,value:"TPJ",text:"\u8077\u52d9\u6cd5\u5ead",description:"\u61f2\u6212\u6cd5\u9662\u8077\u52d9\u6cd5\u5ead"},{id:7,value:"TPH",text:"\u9ad8\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662"},{id:8,value:"001",text:"\u9ad8\u9662\u8a34\u9858\u6c7a\u5b9a",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u8a34\u9858\u6c7a\u5b9a"},{id:9,value:"TPB",text:"\u5317\u9ad8\u884c",description:"\u81fa\u5317\u9ad8\u7b49\u884c\u653f\u6cd5\u9662"},{id:10,value:"TCB",text:"\u4e2d\u9ad8\u884c",description:"\u81fa\u4e2d\u9ad8\u7b49\u884c\u653f\u6cd5\u9662"},{id:11,value:"KSB",text:"\u9ad8\u9ad8\u884c",description:"\u9ad8\u96c4\u9ad8\u7b49\u884c\u653f\u6cd5\u9662"},{id:12,value:"IPC",text:"\u667a\u8ca1\u6cd5\u9662",description:"\u667a\u6167\u8ca1\u7522\u6cd5\u9662"},{id:13,value:"TCH",text:"\u81fa\u4e2d\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u81fa\u4e2d\u5206\u9662"},{id:14,value:"TNH",text:"\u81fa\u5357\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u81fa\u5357\u5206\u9662"},{id:15,value:"KSH",text:"\u9ad8\u96c4\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u9ad8\u96c4\u5206\u9662"},{id:16,value:"HLH",text:"\u82b1\u84ee\u9ad8\u5206\u9662",description:"\u81fa\u7063\u9ad8\u7b49\u6cd5\u9662\u82b1\u84ee\u5206\u9662"},{id:17,value:"TPD",text:"\u81fa\u5317\u5730\u9662",description:"\u81fa\u7063\u81fa\u5317\u5730\u65b9\u6cd5\u9662"},{id:18,value:"SLD",text:"\u58eb\u6797\u5730\u9662",description:"\u81fa\u7063\u58eb\u6797\u5730\u65b9\u6cd5\u9662"},{id:19,value:"PCD",text:"\u65b0\u5317\u5730\u9662",description:"\u81fa\u7063\u65b0\u5317\u5730\u65b9\u6cd5\u9662"},{id:20,value:"ILD",text:"\u5b9c\u862d\u5730\u9662",description:"\u81fa\u7063\u5b9c\u862d\u5730\u65b9\u6cd5\u9662"},{id:21,value:"KLD",text:"\u57fa\u9686\u5730\u9662",description:"\u81fa\u7063\u57fa\u9686\u5730\u65b9\u6cd5\u9662"},{id:22,value:"TYD",text:"\u6843\u5712\u5730\u9662",description:"\u81fa\u7063\u6843\u5712\u5730\u65b9\u6cd5\u9662"},{id:23,value:"SCD",text:"\u65b0\u7af9\u5730\u9662",description:"\u81fa\u7063\u65b0\u7af9\u5730\u65b9\u6cd5\u9662"},{id:24,value:"MLD",text:"\u82d7\u6817\u5730\u9662",description:"\u81fa\u7063\u82d7\u6817\u5730\u65b9\u6cd5\u9662"},{id:25,value:"TCD",text:"\u81fa\u4e2d\u5730\u9662",description:"\u81fa\u7063\u81fa\u4e2d\u5730\u65b9\u6cd5\u9662"},{id:26,value:"CHD",text:"\u5f70\u5316\u5730\u9662",description:"\u81fa\u7063\u5f70\u5316\u5730\u65b9\u6cd5\u9662"},{id:27,value:"NTD",text:"\u5357\u6295\u5730\u9662",description:"\u81fa\u7063\u5357\u6295\u5730\u65b9\u6cd5\u9662"},{id:28,value:"ULD",text:"\u96f2\u6797\u5730\u9662",description:"\u81fa\u7063\u96f2\u6797\u5730\u65b9\u6cd5\u9662"},{id:29,value:"CYD",text:"\u5609\u7fa9\u5730\u9662",description:"\u81fa\u7063\u5609\u7fa9\u5730\u65b9\u6cd5\u9662"},{id:30,value:"TND",text:"\u81fa\u5357\u5730\u9662",description:"\u81fa\u7063\u81fa\u5357\u5730\u65b9\u6cd5\u9662"},{id:31,value:"KSD",text:"\u9ad8\u96c4\u5730\u9662",description:"\u81fa\u7063\u9ad8\u96c4\u5730\u65b9\u6cd5\u9662"},{id:32,value:"CTD",text:"\u6a4b\u982d\u5730\u9662",description:"\u81fa\u7063\u6a4b\u982d\u5730\u65b9\u6cd5\u9662"},{id:33,value:"HLD",text:"\u82b1\u84ee\u5730\u9662",description:"\u81fa\u7063\u82b1\u84ee\u5730\u65b9\u6cd5\u9662"},{id:34,value:"TTD",text:"\u81fa\u6771\u5730\u9662",description:"\u81fa\u7063\u81fa\u6771\u5730\u65b9\u6cd5\u9662"},{id:35,value:"PTD",text:"\u5c4f\u6771\u5730\u9662",description:"\u81fa\u7063\u5c4f\u6771\u5730\u65b9\u6cd5\u9662"},{id:36,value:"PHD",text:"\u6f8e\u6e56\u5730\u9662",description:"\u81fa\u7063\u6f8e\u6e56\u5730\u65b9\u6cd5\u9662"},{id:37,value:"KMH",text:"\u91d1\u9580\u9ad8\u5206\u9662",description:"\u798f\u5efa\u9ad8\u7b49\u6cd5\u9662\u91d1\u9580\u5206\u9662"},{id:38,value:"KMD",text:"\u91d1\u9580\u5730\u9662",description:"\u798f\u5efa\u91d1\u9580\u5730\u65b9\u6cd5\u9662"},{id:39,value:"LCD",text:"\u9023\u6c5f\u5730\u9662",description:"\u798f\u5efa\u9023\u6c5f\u5730\u65b9\u6cd5\u9662"},{id:41,value:"KSY",text:"\u9ad8\u96c4\u5c11\u5bb6\u6cd5\u9662",description:"\u81fa\u7063\u9ad8\u96c4\u5c11\u5e74\u53ca\u5bb6\u4e8b\u6cd5\u9662"}];a(94);function ue(e){if(e>0){var t=Math.floor(e/12);if(t>0){var a=e%12;return a>0?"".concat(t," \u5e74 ").concat(a," \u500b\u6708"):"".concat(t," \u5e74")}return"".concat(e," \u500b\u6708")}return-1===e?"\u7121\u671f\u5f92\u5211":-2===e?"\u6b7b\u5211":"\u7121\u7f6a"}function be(e,t){var a=Math.pow(10,t),n=Math.round(e*a);return"".concat(Math.floor(n/a),".").concat(n%a)}function xe(e){var t=new Date;return e.filter((function(e){return(void 0===e.valid_before||t<e.valid_before)&&(void 0===e.valid_after||t>=e.valid_after)}))}function pe(){return xe(le)}function he(){return xe(de)}var Oe=Object(k.a)((function(e){return{root:Object(b.a)({margin:"-".concat(e.spacing(1),"px"),width:"calc(100% + ".concat(e.spacing(2),"px)"),"& > div":{padding:e.spacing(1)}},e.breakpoints.up("md"),{margin:"-".concat(e.spacing(2),"px"),width:"calc(100% + ".concat(e.spacing(4),"px)"),"& > div":{padding:e.spacing(2)}}),select:{margin:"12px 0",display:"flex",flexDirection:"row"},selectTitle:{flexShrink:0},selectControl:{marginLeft:e.spacing(2),flexGrow:1,flexShrink:1}}}),{name:"AppForm"}),ge=Object(B.a)((function(e){return{select:{color:e.palette.text.secondary,"&:focus":{color:e.palette.text.primary}}}}),{name:"CrimeSelect"})((function(e){var t=e.value,a=Object(R.a)(e,["value"]),c=pe();return c.sort((function(e,t){return e.value-t.value})),Object(n.jsxs)(Y.a,Object(j.a)(Object(j.a)({displayEmpty:!0,value:t>=0?t:"",inputProps:{"aria-label":"\u7f6a\u540d"}},a),{},{children:[Object(n.jsx)(q.a,{value:"",disabled:!0,children:"\u9069\u7528\u689d\u6587"}),c.map((function(e){return Object(n.jsx)(q.a,{value:e.value,disabled:e.disabled,children:e.text},e.value)}))]}))}));function ve(e){var t=Oe(),a=function(){var e=he();return me.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{factors:t.factors.map((function(t){return e.find((function(e){return e.name===t}))}))})}))}(),c=e.crime,i=e.factors,r=e.onCrimeChanged,s=e.onFactorChanged,o=Object(R.a)(e,["crime","factors","onCrimeChanged","onFactorChanged"]);return Object(n.jsxs)(v.a,Object(j.a)(Object(j.a)({container:!0,component:"form",className:t.root},o),{},{children:[Object(n.jsxs)(v.a,{item:!0,xs:12,sm:6,md:12,lg:6,className:t.select,children:[Object(n.jsx)(g.a,{variant:"h6",className:t.selectTitle,children:"\u7f6a\u540d"}),Object(n.jsx)(X.a,{className:t.selectControl,children:Object(n.jsx)(ge,{name:"crime",value:c,onChange:function(e){r(e.target.value)}})})]}),Object(n.jsx)(v.a,{item:!0,xs:12,sm:6,md:12,lg:6}),Object(n.jsx)(v.a,{item:!0,xs:12,sm:6,md:12,lg:6,children:a.filter((function(e){return"binary"==e.type})).map((function(e){return Object(n.jsx)(H,{defaultExpanded:!1,summary:Object(n.jsx)(g.a,{variant:"h6",children:e.title}),children:e.factors.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)(ee,{name:t.name,value:void 0!==i[t.name]?i[t.name]:0,label:t.text,vibe:e.vibe,disabled:t.disabled,onChange:s})},t.name)}))},e.title)}))}),Object(n.jsx)(v.a,{item:!0,xs:12,sm:6,md:12,lg:6,children:a.filter((function(e){return"binary"!==e.type})).map((function(e){return Object(n.jsx)(H,{defaultExpanded:!0,summary:Object(n.jsx)(g.a,{variant:"h6",children:e.title}),children:e.factors.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(ie,{name:e.name,value:void 0!==i[e.name]?i[e.name]:0,label:e.text,onChange:s,disabled:e.disabled})},e.name)}))},e.title)}))})]}))}var fe=a(95),_e=a(96),ye=a(40),Ce=a(72),ke=a(97),Ne=a(127),we=a(105),Se=a(168),Te=a(170),Ie=a(171),De=a(167),Pe=a(169),Be=a(172),Me=function(e){Object(Ce.a)(a,e);var t=Object(ke.a)(a);function a(e){var n;return Object(fe.a)(this,a),(n=t.call(this,e)).state={anchorEl:null,loggedIn:!0},n.handleButtonClick=n.handleButtonClick.bind(Object(ye.a)(n)),n.handleUserItemClick=n.handleUserItemClick.bind(Object(ye.a)(n)),n.handleFeedbackItemClick=n.handleFeedbackItemClick.bind(Object(ye.a)(n)),n.handleMenuClose=n.handleMenuClose.bind(Object(ye.a)(n)),n}return Object(_e.a)(a,[{key:"handleButtonClick",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleUserItemClick",value:function(){this.setState({loggedIn:!this.state.loggedIn})}},{key:"handleFeedbackItemClick",value:function(){window.open("https://www.judicial.gov.tw","_blank"),this.handleMenuClose()}},{key:"handleMenuClose",value:function(){this.setState({anchorEl:null})}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ne.a,{"aria-controls":"menu","aria-haspopup":"true","aria-label":"\u958b\u555f\u529f\u80fd\u8868",color:"inherit",onClick:this.handleButtonClick,children:Object(n.jsx)(De.a,{})}),Object(n.jsxs)(we.a,{id:"menu",keepMounted:!0,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:null,open:Boolean(this.state.anchorEl),onClose:this.handleMenuClose,children:[Object(n.jsxs)(q.a,{onClick:this.handleUserItemClick,children:[Object(n.jsx)(Se.a,{children:Object(n.jsx)(O.a,{children:this.state.loggedIn?"\u9673":Object(n.jsx)(Pe.a,{})})}),Object(n.jsx)(Te.a,{primary:this.state.loggedIn?"\u9673\u5c0f\u6797":"\u8a2a\u5ba2\u4f7f\u7528\u8005",secondary:this.state.loggedIn?"sl;chen@judicial;gov;tw".replace(/;/g,"."):"\u6309\u4e00\u4e0b\u4ee5\u767b\u5165"})]}),Object(n.jsx)(Ie.a,{}),Object(n.jsxs)(q.a,{onClick:this.handleFeedbackItemClick,children:[Object(n.jsx)(Se.a,{children:Object(n.jsx)(Be.a,{})}),Object(n.jsx)(Te.a,{primary:"\u56de\u5831\u554f\u984c"})]})]})]})}}]),a}(c.Component),Ee=a(173),Le=a(174),Fe=a(175),Ae=a(176),He=a(177),Re=a(178),Ue=a(179),Ke=a(180),Ge=a(100),We=a.n(Ge),$e=a(98),ze=a.n($e),Je=a(99),Ye=a.n(Je),qe=Object(k.a)((function(e){return{heading:{flexGrow:1},metaControl:{display:"flex",flexDirection:"column",minWidth:"6rem",flexBasis:"7rem",flexShrink:1,marginLeft:e.spacing(1)},metaRow:{display:"flex"},metadata:Object(j.a)(Object(j.a)({},e.typography.caption),{},{color:e.palette.text.secondary,"&:first-child":{flexGrow:1}}),relevance:{transform:"rotateY(180deg)"},details:{flexDirection:"column"},labels:{marginTop:e.spacing(1)-20,marginBottom:20-e.spacing(1)},label:{"&[hidden]":{opacity:.54}},icon:{padding:e.spacing(1)}}}),{name:"CaseAccordion"});function Xe(e){var t,a=qe(),c=function(e){var t=e.match(Object(se.a)(/^([A-Z]+),([0-9]+),((?:(?!,)[\s\S])+),([0-9]+)$/,{court:1,year:2,case:3,no:4}));if(null!=t){var a,n=t.groups.court,c="TPS"===n?"":(null===(a=je.find((function(e){return e.value==n})))||void 0===a?void 0:a.text)||n;return{database_id:e,court:n,year:t.groups.year,case:t.groups.case,no:t.groups.no,formatted_text:"".concat(c," ").concat(t.groups.year," \u5e74\u5ea6").concat(t.groups.case,"\u5b57\u7b2c ").concat(t.groups.no," \u865f\u5211\u4e8b\u5224\u6c7a")}}}(e.id),i=function(e){return 1===e?Object(n.jsx)(ze.a,{}):-1===e?Object(n.jsx)(Ye.a,{}):0===e?null:e};return Object(n.jsxs)(I.a,{children:[Object(n.jsxs)(D.a,{expandIcon:Object(n.jsx)(E.a,{}),children:[Object(n.jsx)(g.a,{variant:"subtitle1",className:a.heading,children:c.formatted_text}),Object(n.jsxs)("div",{className:a.metaControl,children:[Object(n.jsxs)("div",{className:a.metaRow,children:[Object(n.jsx)(g.a,{component:"div",className:a.metadata,children:ue(e.sentence)}),Object(n.jsx)(g.a,{component:"div",className:a.metadata,children:be(e.relevance,3)})]}),Object(n.jsx)(Ee.a,{variant:"determinate",value:100*e.relevance,className:a.relevance})]})]}),Object(n.jsx)(P.a,{className:a.details,children:e.factors&&Object(n.jsx)(Le.a,{className:a.labels,children:Object(n.jsxs)(Fe.a,{"aria-label":"\u91cf\u5211\u56e0\u7d20\u6a19\u8a18",children:[Object(n.jsx)(Ae.a,{children:Object(n.jsxs)(He.a,{children:[Object(n.jsx)(Re.a,{children:"\u8f38\u5165"}),Object(n.jsx)(Re.a,{children:"\u91cf\u5211\u56e0\u7d20"}),Object(n.jsx)(Re.a,{children:"\u672c\u6848"})]})}),Object(n.jsx)(Ue.a,{children:e.factors.map((function(e){return!e.disabled&&!("c"!==e.name[0]&&0===e.input&&0===e.value)&&Object(n.jsxs)(He.a,{className:a.label,children:[Object(n.jsx)(Re.a,{className:a.icon,children:i(e.input)}),Object(n.jsx)(Re.a,{children:e.text}),Object(n.jsx)(Re.a,{className:a.icon,children:i(e.value)})]},e.name)}))})]})})}),Object(n.jsx)(Ke.a,{children:Object(n.jsx)(C.a,{className:a.sourceButton,endIcon:Object(n.jsx)(We.a,{}),target:"_blank",href:(t=c,"https://law.judicial.gov.tw/FJUD/qryresult.aspx?jud_court=".concat(t.court,"&jud_sys=M&jud_year=").concat(t.year,"&jud_case=").concat(t.case,"&jud_no=").concat(t.no,"&judtype=JUDBOOK")),children:"\u5728\u6cd5\u5b78\u8cc7\u6599\u6aa2\u7d22\u7cfb\u7d71\u6aa2\u8996"})})]})}var Ze=a(81),Qe=a.n(Ze),Ve=a(101);window&&console.info("%cNote: The coded API is not endorsed by the hosting domain. See project license for details.","font-style: italic; color: gray");var et=function(){var e=Object(Ve.a)(Qe.a.mark((function e(t,a){var n,c,i,r,s,o,l,d,m,j,u;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new URLSearchParams).append("Svalue",t),(c=he()).forEach((function(e){var t=a[e.name];n.append(e.name,void 0!==t?t:0)})),console.log(n.toString()),i=Object(re.a)(n.values());try{for(i.s();!(r=i.n()).done;)s=r.value,console.log(s)}catch(b){i.e(b)}finally{i.f()}return o=window&&"localhost"===window.location.hostname?"http://localhost:9165/v1/predictions":"https://35.229.167.36/v1/predictions",e.next=10,fetch(o,{method:"POST",headers:{"X-Requested-With":"Sentencing-UI"},body:n,mode:"cors",credentials:"omit",cache:"no-store"});case 10:if((l=e.sent).ok){e.next=13;break}throw new Error("HTTP ".concat(l.status," ").concat(l.statusText));case 13:return e.next=15,l.json();case 15:return d=e.sent,m=d.error_margin||18,j=d.estimation-m,u=d.estimation+m,e.abrupt("return",{estimation:d.estimation,error_margin:m,min_sentence:j,max_sentence:u,plot:d.plot_img,related_cases:d.related_cases.map((function(e){return{_pk:e.caseindex,id:e.shortid2,relevance:e.sim,crime:e.Svalue,sentence:e.prison_m,subject:e.subject,labels:e.labels?e.labels.map((function(e){return{factor:e.Ctype,summary:e.Ctext,value:e.Cvalue}})):null,factors:e.factors?c.map((function(t){return{name:t.name,text:t.text,disabled:!!t.disabled,input:void 0!==a[t.name]?a[t.name]:0,value:e.factors[t.name]}})):null}}))});case 20:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),tt=Object(k.a)((function(e){var t;return{root:{height:"100vh"},logo:{marginRight:e.spacing(1),backgroundColor:e.palette.secondary[400]},title:{flexGrow:1},main:(t={width:"100vw",minHeight:"100vh",overflowX:"hidden",backgroundColor:e.palette.background.default,paddingTop:56},Object(b.a)(t,"".concat(e.breakpoints.up("xs")," and (orientation: landscape)"),{paddingTop:48}),Object(b.a)(t,e.breakpoints.up("sm"),{paddingTop:64}),Object(b.a)(t,e.breakpoints.up("md"),{height:"100vh"}),t),pane:Object(b.a)({},e.breakpoints.up("md"),{height:"100%",overflowY:"scroll"}),content:{margin:e.spacing(4),display:"flex",flexDirection:"column"},controls:Object(b.a)({marginTop:e.spacing(2),alignSelf:"end"},e.breakpoints.up("md"),{position:"sticky",bottom:e.spacing(4)}),progress:{alignSelf:"center"},prediction:{padding:e.spacing(2)},sentence:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},plot:{maxWidth:"100%",marginTop:e.spacing(2)},descriptor:{color:e.palette.text.secondary},tipped:{display:"flex",alignItems:"center"},helpIcon:{fontSize:"1rem"},message:{color:e.palette.text.secondary,textAlign:"center"},helpMessage:{"& h5":{color:e.palette.text.secondary},"& h6":{margin:"1em 0",color:e.palette.text.secondary},"& li":{marginBottom:"0.5em"}},inlineButton:{verticalAlign:"baseline",margin:".5em .33em"}}}),{name:"App"});function at(){var e=tt(),t=Object(c.useState)(-1),a=Object(u.a)(t,2),i=a[0],r=a[1],s=Object(c.useState)({}),o=Object(u.a)(s,2),l=o[0],d=o[1],m=Object(c.useState)("blank"),k=Object(u.a)(m,2),N=k[0],S=k[1],I=Object(c.useState)({}),D=Object(u.a)(I,2),P=D[0],B=D[1],M=Object(c.useState)(""),E=Object(u.a)(M,2),L=E[0],F=E[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(p.a,{position:"fixed",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(O.a,{className:e.logo,children:Object(n.jsx)(w.a,{})}),Object(n.jsx)(g.a,{variant:"h6",noWrap:!0,className:e.title,children:"\u53f8\u6cd5\u9662\u91cf\u5211\u8cc7\u8a0a\u7cfb\u7d71"}),Object(n.jsx)(Me,{})]})}),Object(n.jsxs)(v.a,{container:!0,component:"main",className:e.main,children:[Object(n.jsx)(v.a,{item:!0,xs:12,md:6,lg:7,xl:6,component:f.a,elevation:3,className:e.pane,children:Object(n.jsxs)("div",{className:e.content,children:[Object(n.jsx)(ve,{crime:i,factors:l,onCrimeChanged:function(e){r(e),d(Object(j.a)(Object(j.a)({},l),{},{mit_c25_2:16==e?1:0}))},onFactorChanged:function e(t,a,n){d((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(b.a)({},a,n))})),"mit_c18_2"===a&&n?e(t,"mit_c18_3",0):"mit_c18_3"===a&&n&&e(t,"mit_c18_2",0)}}),Object(n.jsx)(J,{className:e.controls,canSubmit:i>=0,onSubmit:function(){F(""),S("loading"),B({}),et(i,l).then((function(e){e.related_cases.sort((function(e,t){return Math.round(100*t.relevance)-Math.round(100*e.relevance)})),B(e),S("ready")})).catch((function(e){console.log(e),F(e.message),S("error")}))},onClear:function(){r(-1),d({}),S("blank")}})]})}),Object(n.jsx)(v.a,{item:!0,xs:12,md:6,lg:5,xl:6,className:e.pane,children:Object(n.jsxs)("div",{className:e.content,children:["loading"===N&&Object(n.jsx)(_.a,{className:e.progress}),"ready"===N&&Object(n.jsxs)(f.a,{elevation:1,className:e.prediction,children:[Object(n.jsxs)(g.a,{variant:"caption",component:"h5",className:Object(x.a)(e.descriptor,e.tipped),children:[Object(n.jsx)("span",{children:"\u91cf\u5211\u4f30\u8a08\u5340\u9593"}),Object(n.jsx)(y.a,{title:Object(n.jsxs)("span",{children:[Object(n.jsxs)("b",{children:["E[",Object(n.jsx)("i",{children:"f(x)"}),"]"]}),"\uff1a\u8a72\u985e\u578b\u72af\u7f6a\u7684\u300c\u91cf\u5211\u8d77\u9ede\u300d\uff08\u6708\u6578\uff09\u3002",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:Object(n.jsx)("i",{children:"f(x)"})}),"\uff1a\u5728\u300c\u91cf\u5211\u8d77\u9ede\u300d\u4e0a\u52a0\u6e1b\u91cf\u5211\u56e0\u5b50\u6b0a\u91cd\u5f8c\uff0c\u5f97\u51fa\u7684\u300c\u500b\u6848\u91cf\u5211\u4f30\u8a08\u503c\u300d\uff08\u6708\u6578\uff09\u3002",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"\u300c\u91cf\u5211\u4f30\u8a08\u5340\u9593\u300d"}),"\uff1a\u5c07\u300c\u500b\u6848\u91cf\u5211\u4f30\u8a08\u503c\u300d\u52a0\u6e1b\u6a5f\u5668\u5b78\u7fd2\u7684\u5e73\u5747\u7d55\u5c0d\u8aa4\u5dee\u503c\uff08MAE\uff09\u5f8c\u6240\u5f97\u5340\u9593\u3002\u5176\u4e0a\u3001\u4e0b\u9650\u986f\u793a\u53ef\u80fd\u8d85\u51fa\u6cd5\u5b9a\u5211\u6216\u8655\u65b7\u5211\u4e4b\u7bc4\u570d\uff0c\u4f46\u5be6\u969b\u500b\u6848\u79d1\u5211\u4ecd\u61c9\u9075\u5b88\u6cd5\u5b9a\u5211\u548c\u8655\u65b7\u5211\u4e4b\u6cd5\u5f8b\u898f\u5b9a\u3002"]}),children:Object(n.jsx)(T.a,{className:e.helpIcon})})]}),Object(n.jsx)(g.a,{variant:"h4",component:"div",className:e.sentence,children:P.min_sentence<P.max_sentence?"".concat(ue(P.min_sentence)," ~ ").concat(ue(P.max_sentence)):ue(P.min_sentence)}),P.plot&&Object(n.jsx)("img",{src:P.plot,className:e.plot}),Object(n.jsx)(H,{defaultExpanded:!0,summary:Object(n.jsxs)(g.a,{variant:"caption",component:"h5",className:Object(x.a)(e.descriptor,e.tipped),children:[Object(n.jsx)("span",{children:"\u76f8\u4f3c\u5224\u6c7a"}),Object(n.jsx)(y.a,{title:"\u672c\u7cfb\u7d71\u63d0\u4f9b\u4f7f\u7528\u8005\u8f38\u5165\u4e4b\u91cf\u5211\u56e0\u5b50\u76f8\u985e\u4f3c\u4e4b\u5224\u6c7a\uff0c\u4f7f\u7528\u9918\u5f26\u76f8\u4f3c\u5ea6\u8a08\u7b97\u6578\u503c\uff0c\u6578\u503c\u8d8a\u9ad8\u76f8\u4f3c\u7a0b\u5ea6\u8d8a\u9ad8\u3002",children:Object(n.jsx)(T.a,{className:e.helpIcon})})]}),children:P.related_cases.map((function(e){return Object(n.jsx)(Xe,Object(j.a)({},e),e.id)}))})]}),"blank"===N&&Object(n.jsxs)("div",{className:e.helpMessage,children:[Object(n.jsx)(g.a,{variant:"subtitle1",component:"h5",children:"\u300c\u53f8\u6cd5\u9662109\u5e74\u5211\u4e8b\u5f37\u76dc\u7f6a\u6848\u4ef6\u91cf\u5211\u8cc7\u8a0a\u7cfb\u7d71\u8cc7\u6599\u5eab\u66f4\u65b0\u300d"}),Object(n.jsxs)(g.a,{variant:"body2",children:["\u8acb\u6309\u6b64\u4e0b\u8f09",Object(n.jsx)(C.a,{variant:"outlined",color:"primary",className:e.inlineButton,href:"https://reurl.cc/g82RNz",rel:"external",target:"_blank",children:"\u7cfb\u7d71\u4f7f\u7528\u624b\u518a"}),"\u3002"]}),Object(n.jsx)(g.a,{variant:"subtitle2",children:"\u4f7f\u7528\u8aaa\u660e\u8207\u8072\u660e"}),Object(n.jsxs)("ol",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:Object(n.jsx)("u",{children:"\u5728\u4f7f\u7528\u672c\u7cfb\u7d71\u524d\uff0c\u8acb\u52d9\u5fc5\u8a73\u8b80\u300c\u7cfb\u7d71\u4f7f\u7528\u624b\u518a\u300d\u3002"})}),"\u7cfb\u7d71\u4f7f\u7528\u624b\u518a\u4e4b\u5167\u5bb9\uff0c\u5305\u542b\u7cfb\u7d71\u539f\u7406\u8207\u6ce8\u610f\u4e8b\u9805\u3001\u7011\u5e03\u5716\u4f8b\u8aaa\u660e\u53ca\u64cd\u4f5c\u65b9\u6cd5\u7b49\u3002"]}),Object(n.jsx)("li",{children:"\u672c\u7cfb\u7d71\u70ba\u5be6\u7136\u9762\uff08\u6cd5\u9662\u5be6\u969b\u4e0a\u5982\u4f55\u79d1\u5211\uff09\u7684\u5c55\u73fe\uff0c\u4e0d\u80fd\u4f5c\u70ba\u300c\u61c9\u7136\u9762\u300d\uff08\u6cd5\u9662\u61c9\u5982\u4f55\u79d1\u5211\u59cb\u70ba\u6b63\u78ba\uff09\u7684\u79d1\u5211\u6307\u5c0e\u3002"}),Object(n.jsxs)("li",{children:["\u672c\u7cfb\u7d71\u662f\u4e00\u7a2e\u300c\u91cf\u5211\u8cc7\u8a0a\u8f14\u52a9\u7cfb\u7d71\u300d\uff0c",Object(n.jsx)("strong",{children:"\u4e0d\u80fd\u64f4\u5f35\u6216\u58d3\u7e2e\u6cd5\u9662\u4f9d\u6cd5\u5f97\u5be9\u914c\u5404\u7a2e\u91cf\u5211\u76f8\u95dc\u4e8b\u7531\u7684\u88c1\u91cf\u7a7a\u9593\uff0c\u4e5f\u4e0d\u80fd\u53d6\u4ee3\u6cd5\u5f8b\u6240\u898f\u5b9a\u7684\u6cd5\u5b9a\u5211\u6216\u8655\u65b7\u5211\u4e4b\u4e0a\u3001\u4e0b\u9650\u3002"})]}),Object(n.jsxs)("li",{children:["\u7cfb\u7d71\u8a08\u7b97\u51fa\u7684\u300c\u91cf\u5211\u4f30\u8a08\u5340\u9593\u300d\u662f\u52a0\u5165\u6b63\u8ca0\u5e73\u5747\u7d55\u5c0d\u8aa4\u5dee\u503c\u6240\u5f97\u51fa\uff0c\u56e0\u6b64\u5340\u9593\u7684\u4e0a\u3001\u4e0b\u9650\u986f\u793a\uff0c\u6709\u53ef\u80fd\u8d85\u51fa\u6cd5\u5b9a\u5211\u6216\u8655\u65b7\u5211\u4e4b\u7bc4\u570d\uff0c\u60df",Object(n.jsx)("strong",{children:Object(n.jsx)("u",{children:"\u5be6\u969b\u4e4b\u500b\u6848\u79d1\u5211\u4ecd\u61c9\u9075\u5b88\u6cd5\u5b9a\u5211\u548c\u8655\u65b7\u5211\u4e4b\u6cd5\u5f8b\u898f\u5b9a\u3002"})})]})]})]}),"error"===N&&Object(n.jsxs)("div",{className:e.message,children:[Object(n.jsx)(g.a,{variant:"body1",children:"\u4f3a\u670d\u5668\u6216\u7db2\u8def\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002"}),L&&Object(n.jsx)(g.a,{variant:"caption",children:L})]})]})})]})]})}var nt=document.getElementById("root"),ct=Object(n.jsxs)(s.a,{theme:m,children:[Object(n.jsx)(r.a,{}),Object(n.jsx)(at,{})]});nt.hasChildNodes()?Object(i.hydrate)(ct,nt):Object(i.render)(ct,nt)}},[[125,1,2]]]);
//# sourceMappingURL=main.10ddd182.chunk.js.map