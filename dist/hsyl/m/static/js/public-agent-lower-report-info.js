webpackJsonp([38],{OEAg:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view-page",{staticClass:"view-page"},[a("div",{staticClass:"head",attrs:{slot:"header"},slot:"header"},[a("title-header",{attrs:{title:t.$route.meta.title||"代理报表"}},[a("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:function(e){t.dateShow=!0}},slot:"right"},[t._v("\n        "+t._s(t.date.name)),a("i",{staticClass:"fa fa-fw fa-angle-down"})])]),t._v(" "),a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),a("button",{staticClass:"button",on:{click:t.refresh}},[a("span",{staticClass:"fa fa-fw fa-search"})])]),t._v(" "),a("vux-popup",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"ios-popup",attrs:{position:"bottom","popup-style":{zIndex:1002}},model:{value:t.dateShow,callback:function(e){t.dateShow=e},expression:"dateShow"}},[a("div",{staticClass:"radio"},[a("ul",{staticClass:"list"},t._l(t.dates,function(e){return a("li",{key:e.index,staticClass:"item",on:{click:function(a){return t.onClick(e)}}},[t._v(t._s(e.name))])}),0),t._v(" "),a("button",{staticClass:"btn",on:{click:function(e){t.dateShow=!1}}},[t._v("取消")])])])],1),t._v(" "),a("div",{staticClass:"body",attrs:{slot:"content"},slot:"content"},[a("ul",{staticClass:"list"},[t._l(t.list,function(e){return a("li",{key:e.name,staticClass:"item"},[a("p",{staticClass:"value",class:{red:parseFloat(e.value)}},[t._v(t._s(e.value))]),t._v(" "),a("p",{staticClass:"label"},[t._v(t._s(e.name))])])}),t._v(" "),t._l((3-t.list.length%3)%3,function(e){return a("li",{key:e,staticClass:"item"},[a("p",{staticClass:"value"},[t._v(" ")]),t._v(" "),a("p",{staticClass:"label"},[t._v(" ")])])})],2)])])},staticRenderFns:[]};e.a=s},U8sA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=a("6cYu"),n=a("qhTv"),o=(s=n)&&s.__esModule?s:{default:s};e.default={mixins:[o.default],name:"AgentLowerReportInfo",components:{TitleHeader:i.TitleHeader,ViewPage:i.ViewPage},props:{user:{type:String,required:!0}},data:function(){return{dateShow:!1,date:{index:1,name:"今天"},dates:[{index:1,name:"今天"},{index:2,name:"昨天"},{index:3,name:"本月"},{index:4,name:"上月"}],list:[],userName:"",loading:!1}},watch:{date:function(){this.refresh()}},created:function(){this.userName=this.user,this.refresh()},methods:{onClick:function(t){this.date=t,this.dateShow=!1},refresh:function(){var t=this;this.userName?this.loading?this.toastText("正在查询",window.TOAST_POSITION.TOP):(this.loading=!0,this.$store.state.main.loadingText="查询中...",this.$store.dispatch("agent/agencyReportByUser",{date:this.date.index,userName:this.userName,callback:function(e){200===e.code?t.list=e.data:e?(t.toastText(e.message,window.TOAST_POSITION.TOP),t.list=[]):(t.toastText("获取数据失败",window.TOAST_POSITION.TOP),t.list=[]),t.loading=!1,t.$store.state.main.loadingText=""}})):this.toastText("无效的帐号",window.TOAST_POSITION.TOP)}}}},Wdiy:function(t,e){},phwT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("U8sA"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var o=a("OEAg");var r=function(t){a("Wdiy")},l=a("VU/8")(i.a,o.a,!1,r,"data-v-81e37588",null);e.default=l.exports}});