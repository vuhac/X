webpackJsonp([4],{"3POI":function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("keep-alive",[a("view-page",{key:t.id},[t.isApp?t._e():a("title-header",{attrs:{slot:"header",title:"优惠活动","back-event":""},on:{back:function(i){return t.$router.replace("/activity")}},slot:"header"}),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},["1"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/m/static/activity/niuniu.jpg?v=2019-05-15T14:36:01"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/niuniuc.jpg"}})])]):"2"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/qkds.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/qkdsc.jpg"}})])]):"3"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/kscp.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/kscpc.jpg"}})])]):"4"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/ysf.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/ysfc.jpg"}})])]):"5"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/wxx.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/wxxc.jpg"}})])]):"6"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/zfb.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/zfbc.jpg"}})])]):"7"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/wxsm.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/wxsmc.jpg"}})])]):"8"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/dns.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/dnsc.jpg"}})])]):"9"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/daili.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/dailic.jpg"}})])]):"10"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/xhy.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/xhyc.jpg"}})])]):"14"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/dmw.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/dmwc.jpg"}})])]):"15"===t.id?a("div",{staticClass:"content"},[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/yhk.jpg"}}),t._v(" "),a("div",[a("img",{staticClass:"img",attrs:{alt:"",src:"/static/activity/yhkc.jpg"}})])]):t._e()])],1)],1)},staticRenderFns:[]};i.a=s},O6qt:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("uSuc"),c=a.n(s);for(var e in s)"default"!==e&&function(t){a.d(i,t,function(){return s[t]})}(e);var n=a("oHol"),r=a("VU/8")(c.a,n.a,!1,null,null,null);i.default=r.exports},c6iW:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("qGSX"),c=a.n(s);for(var e in s)"default"!==e&&function(t){a.d(i,t,function(){return s[t]})}(e);var n=a("3POI");var r=function(t){a("gD82")},l=a("VU/8")(c.a,n.a,!1,r,"data-v-55841978",null);i.default=l.exports},gD82:function(t,i){},oHol:function(t,i,a){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("pub-activity",{attrs:{list:this.active_list}})},staticRenderFns:[]};i.a=s},qGSX:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("6cYu");i.default={name:"ActivityContent",data:function(){return{id:this.$route.query.id.toString()}},components:{TitleHeader:s.TitleHeader,ViewPage:s.ViewPage},computed:{isApp:function(){return this.$route.query.app}}}},uSuc:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("kAIW");i.default={name:"index",components:{pubActivity:s.Activity},data:function(){return{active_list:[{title:"红包雨 天天下",img:"/static/activity/redb.gif",param:"/static/szc/html/active/czjhb/m/index.html",type:"single",id:11},{title:"彩票金管家",img:"/static/activity/jgj.jpg",param:"/static/szc/html/active/jgj/index.html",type:"single",id:12},{title:"幸运大转盘",img:"/static/activity/zhuanpan.jpg",param:"/static/szc/html/active/opportunity/index.html",type:"single",id:13},{title:"千万彩金大回馈",img:"/static/activity/dmw.jpg",param:"精彩活动，敬请期待！",type:"content",id:14},{title:"无限代理",img:"/static/activity/daili.jpg",param:"精彩活动，敬请期待！",type:"content",id:9},{title:"新会员首次存款",img:"/static/activity/xhy.jpg",param:"精彩活动，敬请期待！",type:"content",id:10},{title:"银行卡入款赠送1%",img:"/static/activity/yhk.jpg",param:"精彩活动，敬请期待！",type:"content",id:15},{title:"下载云闪付APP",img:"/static/activity/ysf.jpg",param:"精彩活动，敬请期待！",type:"content",id:4},{title:"微信全新版本",img:"/static/activity/wxx.jpg",param:"精彩活动，敬请期待！",type:"content",id:5},{title:"支付宝转帐",img:"/static/activity/zfb.jpg",param:"精彩活动，敬请期待！",type:"content",id:6},{title:"微信扫码支付",img:"/static/activity/wxsm.jpg",param:"精彩活动，敬请期待！",type:"content",id:7},{title:"DNS劫持问题",img:"/static/activity/dns.jpg",param:"精彩活动，敬请期待！",type:"content",id:8}]}}}}});