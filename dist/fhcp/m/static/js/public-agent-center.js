webpackJsonp([48],{A37e:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-page",{staticClass:"agency-center"},[n("div",{staticClass:"head",attrs:{slot:"header"},slot:"header"},[n("title-header",{attrs:{title:t.$route.meta.title||"代理中心"}}),t._v(" "),n("img",{staticClass:"head-img",attrs:{src:"/m/static/img/user/agency-index.png?v=2019-05-15T14:40:14",alt:""}}),t._v(" "),n("vux-group",[n("vux-cell-box",{attrs:{"is-link":"",link:"/user/agent/income"}},[n("div",{staticClass:"cell-box title-box"},[n("p",{staticClass:"flex-1 text"},[t._v("今日收益"),n("span",{staticClass:"money red"},[t._v(t._s(t.todayEarnings))]),t._v("元")]),t._v(" "),n("span",{staticClass:"desc"},[t._v("查看详情")])])])],1)],1),t._v(" "),n("div",{staticClass:"body",attrs:{slot:"content"},slot:"content"},[n("vux-group",t._l(t.list,function(e){return n("vux-cell-box",{key:e.icon,attrs:{"is-link":"",link:e.link+"?t="+Date.now()}},[n("div",{staticClass:"cell-box"},[n("span",{class:"icon iconfont h5-icon-"+e.icon}),t._v(" "),n("div",{staticClass:"flex-1"},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])])}),1)],1)])},staticRenderFns:[]};e.a=s},Fp7P:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("TKH1"),i=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var l=n("A37e");var c=function(t){n("joWb")},o=n("VU/8")(i.a,l.a,!1,c,"data-v-354decbc",null);e.default=o.exports},TKH1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=n("6cYu"),a=n("qhTv"),l=(s=a)&&s.__esModule?s:{default:s};e.default={mixins:[l.default],name:"AgencyCenter",components:{TitleHeader:i.TitleHeader,ViewPage:i.ViewPage},data:function(){return{todayEarnings:0,headerHeight:0,list:[{title:"代理报表",desc:"代理总报表",icon:"daili-list",link:"/user/agent/report"},{title:"下级开户",desc:"为下级建立帐号",icon:"open-account1",link:"/user/agent/open"},{title:"下级列表",desc:"查询下级列表",icon:"member-list",link:"/user/agent/list"},{title:"下级财务",desc:"查询下级资金明细",icon:"money-list1",link:"/user/agent/finance"},{title:"下级报表",desc:"下级代理和会员详细报表",icon:"level-form1",link:"/user/agent/lower-report"},{title:"下级人数",desc:"下级会员人数",icon:"level-number1",link:"/user/agent/lower-count"},{title:"赔率计算",desc:"下级返点赔率计算",icon:"Cal-odds",link:"/user/agent/odds"}]}},mounted:function(){var t=this;localStorage.agentOpenIndex="",this.$store.dispatch("agent/todayEarnings").then(function(e){200===e.code&&(t.todayEarnings=e.data.money)})}}},joWb:function(t,e){}});