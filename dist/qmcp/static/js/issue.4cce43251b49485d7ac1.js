webpackJsonp([47],{"0OYi":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.issue .banner[data-v-5c0e1a12]{width:100%;height:200px;background:url("/static/zyyl/img/thirdparty/cjwt.jpg") no-repeat top}.issue .content[data-v-5c0e1a12]{width:1200px;margin:30px auto;border:1px solid #b48c68;background:#f1f1f1;padding:15px}.issue .content h2[data-v-5c0e1a12]{font-size:20px;font-family:微软雅黑;color:#000;margin-bottom:5px}.issue .content p[data-v-5c0e1a12]{font-family:微软雅黑;color:#000;font-size:14px;line-height:20px}.issue .content p span[data-v-5c0e1a12]{color:red;cursor:pointer}.issue[data-v-5c0e1a12] table{border-spacing:0;border-collapse:collapse;border:1px solid grey}.issue[data-v-5c0e1a12] table tbody{display:table-row-group;vertical-align:middle;border-color:inherit}.issue[data-v-5c0e1a12] table tbody td{border:1px solid #000;font-size:14px;text-align:center;color:#000;line-height:25px}',""])},"115g":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issue"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"content"},[a("h2",[t._v("常见问题")]),t._v(" "),a("p",[t._v("Q1: 如何加入澳博？")]),t._v(" "),a("p",[t._v("A1: 您可以直接点选\n      "),a("router-link",{attrs:{tag:"span",to:"/home"}},[t._v("免费开户")]),t._v("\n      ，确认填写资料后，可立即登记成为澳博会员。\n    ")],1),t._v(" "),a("p",[t._v("Q2: 我可以直接在网络上存款吗？")]),t._v(" "),a("p",[t._v("A2: 可以，澳博提供多种在线存款选择，详情请参照 存款须知。")]),t._v(" "),a("p",[t._v("Q3: 我在哪里可以找到游戏的规则？")]),t._v(" "),a("p",[t._v('A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同')]),t._v(" "),a("p",[t._v("同时，可以弹跳窗口随时提醒您游戏规则。")]),t._v(" "),a("p",[t._v("Q4: 你们的游戏会用多少副牌？")]),t._v(" "),a("p",[t._v("A4: 在百家乐我们会用8副牌，其它游戏则会根据其性质有所调整。")]),t._v(" "),a("p",[t._v("Q5: 你们何时会洗牌?")]),t._v(" "),a("p",[t._v("A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。")]),t._v(" "),a("p",[t._v("Q6: 我的注码的限制是多少？")]),t._v(" "),a("p",[t._v("A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。")]),t._v(" "),a("p",[t._v("Q7: 如果忘记密码怎么办？")]),t._v(" "),a("p",[t._v("A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回你的帐号密码。")]),t._v(" "),a("p",[t._v("Q8: 当您注册时出现，姓名已注册。")]),t._v(" "),a("p",[t._v("A8: 您可 通过24小时在线客服人员协助处理。")])])])},staticRenderFns:[]};var i=a("VU/8")({},n,!1,function(t){a("TruC")},"data-v-c85081de",null);e.default=i.exports},"1MLI":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),r=a("exGp"),o=a.n(r),s={data:function(){return{articleData:""}},methods:{getArticle:function(a){var n=this;return o()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$http.post(n.$HOST_NAME+"/site/newNotice",{type:"article",client_type:"PC",title:a});case 2:e=t.sent,"",e&&200==e.code&&e.data.data&&(n.articleData=e.data.data[0].description);case 5:case"end":return t.stop()}},t,n)}))()}},mounted:function(){},created:function(){this.getArticle("常见问题")}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issue"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articleData)}})])},staticRenderFns:[]};var p=a("VU/8")(s,c,!1,function(t){a("5Fg4")},"data-v-83ab1cb2",null);e.default=p.exports},"3DwK":function(t,e,a){var n=a("UDDc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("c05c19a0",n,!0,{})},"45ko":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.issue .banner[data-v-c85081de]{width:100%;height:200px;background:url("/static/szc/img/thirdparty/cjwt.jpg") no-repeat top}.issue .content[data-v-c85081de]{width:1200px;margin:30px auto;border:1px solid #b48c68;background:#f1f1f1;padding:15px;min-height:704px}.issue .content h2[data-v-c85081de]{font-size:20px;font-family:微软雅黑;color:#000;margin-bottom:5px}.issue .content p[data-v-c85081de]{font-family:微软雅黑;color:#000;font-size:14px;line-height:20px}.issue .content p span[data-v-c85081de]{color:red;cursor:pointer}',""])},"5Fg4":function(t,e,a){var n=a("5wAD");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("8375bcb8",n,!0,{})},"5wAD":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.issue .banner[data-v-83ab1cb2]{width:100%;height:200px;background:url("/static/klk/img/thirdparty/cjwt.jpg") no-repeat top}.issue .content[data-v-83ab1cb2]{width:1200px;margin:30px auto;border:1px solid #b48c68;background:#f1f1f1;padding:15px}.issue .content h2[data-v-83ab1cb2]{font-size:20px;font-family:微软雅黑;color:#000;margin-bottom:5px}.issue .content p[data-v-83ab1cb2]{font-family:微软雅黑;color:#000;font-size:14px;line-height:20px}.issue .content p span[data-v-83ab1cb2]{color:red;cursor:pointer}.issue[data-v-83ab1cb2] table{border-spacing:0;border-collapse:collapse;border:1px solid grey}.issue[data-v-83ab1cb2] table tbody{display:table-row-group;vertical-align:middle;border-color:inherit}.issue[data-v-83ab1cb2] table tbody td{border:1px solid #000;font-size:14px;text-align:center;color:#000;line-height:25px}',""])},"8rgI":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.issue .banner[data-v-4eed78e1]{width:100%;height:200px;background:url("/static/t111/img/thirdparty/cjwt.jpg") no-repeat top}.issue .content[data-v-4eed78e1]{width:1200px;margin:30px auto;border:1px solid #b48c68;background:#f1f1f1;padding:15px}.issue .content h2[data-v-4eed78e1]{font-size:20px;font-family:微软雅黑;color:#000;margin-bottom:5px}.issue .content p[data-v-4eed78e1]{font-family:微软雅黑;color:#000;font-size:14px;line-height:20px}.issue .content p span[data-v-4eed78e1]{color:red;cursor:pointer}',""])},Bo6p:function(t,e,a){var n=a("0OYi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("19ede7ea",n,!0,{})},DmDB:function(t,e,a){var n=a("I6sZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4984d26a",n,!0,{})},I6sZ:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.issue .banner[data-v-228a6a32]{width:100%;height:200px;background:url("/static/klk/img/thirdparty/cjwt.jpg") no-repeat top}.issue .content[data-v-228a6a32]{width:1200px;margin:30px auto;border:1px solid #b48c68;background:#f1f1f1;padding:15px}.issue .content h2[data-v-228a6a32]{font-size:20px;font-family:微软雅黑;color:#000;margin-bottom:5px}.issue .content p[data-v-228a6a32]{font-family:微软雅黑;color:#000;font-size:14px;line-height:20px}.issue .content p span[data-v-228a6a32]{color:red;cursor:pointer}.issue[data-v-228a6a32] table{border-spacing:0;border-collapse:collapse;border:1px solid grey}.issue[data-v-228a6a32] table tbody{display:table-row-group;vertical-align:middle;border-color:inherit}.issue[data-v-228a6a32] table tbody td{border:1px solid #000;font-size:14px;text-align:center;color:#000;line-height:25px}',""])},PaJT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issue"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"content"},[a("h2",[t._v("常见问题")]),t._v(" "),a("p",[t._v("Q1: 如何加入客拉客？")]),t._v(" "),a("p",[t._v("A1: 您可以直接点选\n      "),a("router-link",{attrs:{tag:"span",to:"/home"}},[t._v("免费开户")]),t._v("\n      ，确认填写资料后，可立即登记成为客拉客会员。\n    ")],1),t._v(" "),a("p",[t._v("Q2: 我可以直接在网络上存款吗？")]),t._v(" "),a("p",[t._v("A2: 可以，客拉客提供多种在线存款选择，详情请参照 存款须知。")]),t._v(" "),a("p",[t._v("Q3: 我在哪里可以找到游戏的规则？")]),t._v(" "),a("p",[t._v('A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同')]),t._v(" "),a("p",[t._v("同时，可以弹跳窗口随时提醒您游戏规则。")]),t._v(" "),a("p",[t._v("Q4: 你们的游戏会用多少副牌？")]),t._v(" "),a("p",[t._v("A4: 在百家乐我们会用8副牌，其它游戏则会根据其性质有所调整。")]),t._v(" "),a("p",[t._v("Q5: 你们何时会洗牌?")]),t._v(" "),a("p",[t._v("A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。")]),t._v(" "),a("p",[t._v("Q6: 我的注码的限制是多少？")]),t._v(" "),a("p",[t._v("A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。")]),t._v(" "),a("p",[t._v("Q7: 如果忘记密码怎么办？")]),t._v(" "),a("p",[t._v("A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回你的帐号密码。")]),t._v(" "),a("p",[t._v("Q8: 当您注册时出现，姓名已注册。")]),t._v(" "),a("p",[t._v("A8: 您可 通过24小时在线客服人员协助处理。")])])])},staticRenderFns:[]};var i=a("VU/8")({},n,!1,function(t){a("3DwK")},"data-v-1094d221",null);e.default=i.exports},TruC:function(t,e,a){var n=a("45ko");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("70fc76e2",n,!0,{})},UDDc:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.issue .banner[data-v-1094d221]{width:100%;height:200px;background:url("/static/qygj/img/thirdparty/cjwt.jpg") no-repeat top}.issue .content[data-v-1094d221]{width:1200px;margin:30px auto;border:1px solid #b48c68;background:#f1f1f1;padding:15px}.issue .content h2[data-v-1094d221]{font-size:20px;font-family:微软雅黑;color:#000;margin-bottom:5px}.issue .content p[data-v-1094d221]{font-family:微软雅黑;color:#000;font-size:14px;line-height:20px}.issue .content p span[data-v-1094d221]{color:red;cursor:pointer}',""])},YvD3:function(t,e,a){var n=a("8rgI");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4c61226c",n,!0,{})},YyCa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issue"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"content"},[a("h2",[t._v("常见问题")]),t._v(" "),a("p",[t._v("Q1: 如何加入客拉客？")]),t._v(" "),a("p",[t._v("A1: 您可以直接点选\n      "),a("router-link",{attrs:{tag:"span",to:"/home"}},[t._v("免费开户")]),t._v("\n      ，确认填写资料后，可立即登记成为客拉客会员。\n    ")],1),t._v(" "),a("p",[t._v("Q2: 我可以直接在网络上存款吗？")]),t._v(" "),a("p",[t._v("A2: 可以，客拉客提供多种在线存款选择，详情请参照 存款须知。")]),t._v(" "),a("p",[t._v("Q3: 我在哪里可以找到游戏的规则？")]),t._v(" "),a("p",[t._v('A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同')]),t._v(" "),a("p",[t._v("同时，可以弹跳窗口随时提醒您游戏规则。")]),t._v(" "),a("p",[t._v("Q4: 你们的游戏会用多少副牌？")]),t._v(" "),a("p",[t._v("A4: 在百家乐我们会用8副牌，其它游戏则会根据其性质有所调整。")]),t._v(" "),a("p",[t._v("Q5: 你们何时会洗牌?")]),t._v(" "),a("p",[t._v("A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。")]),t._v(" "),a("p",[t._v("Q6: 我的注码的限制是多少？")]),t._v(" "),a("p",[t._v("A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。")]),t._v(" "),a("p",[t._v("Q7: 如果忘记密码怎么办？")]),t._v(" "),a("p",[t._v("A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回你的帐号密码。")]),t._v(" "),a("p",[t._v("Q8: 当您注册时出现，姓名已注册。")]),t._v(" "),a("p",[t._v("A8: 您可 通过24小时在线客服人员协助处理。")])])])},staticRenderFns:[]};var i=a("VU/8")({},n,!1,function(t){a("YvD3")},"data-v-4eed78e1",null);e.default=i.exports},Zx1M:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),r=a("exGp"),o=a.n(r),s={data:function(){return{articleData:""}},methods:{getArticle:function(a){var n=this;return o()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$http.post(n.$HOST_NAME+"/site/newNotice",{type:"article",client_type:"PC",title:a});case 2:e=t.sent,"",e&&200==e.code&&e.data.data&&(n.articleData=e.data.data[0].description);case 5:case"end":return t.stop()}},t,n)}))()}},mounted:function(){},created:function(){this.getArticle("常见问题")}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issue"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articleData)}})])},staticRenderFns:[]};var p=a("VU/8")(s,c,!1,function(t){a("Bo6p")},"data-v-5c0e1a12",null);e.default=p.exports},gdbe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),r=a("exGp"),o=a.n(r),s={data:function(){return{articleData:""}},methods:{getArticle:function(a){var n=this;return o()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$http.post(n.$HOST_NAME+"/site/newNotice",{type:"article",client_type:"PC",title:a});case 2:e=t.sent,"",e&&200==e.code&&e.data.data&&(n.articleData=e.data.data[0].description);case 5:case"end":return t.stop()}},t,n)}))()}},mounted:function(){},created:function(){this.getArticle("常见问题")}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"issue"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articleData)}})])},staticRenderFns:[]};var p=a("VU/8")(s,c,!1,function(t){a("DmDB")},"data-v-228a6a32",null);e.default=p.exports}});