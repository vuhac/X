webpackJsonp([26],{B1RF:function(t,s){},Uy5C:function(t,s){},k3E8:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e,o=i("6cYu"),a=i("qhTv"),n=(e=a)&&e.__esModule?e:{default:e};s.default={mixins:[n.default],name:"AgentLowerReport",components:{TitleHeader:o.TitleHeader},data:function(){return{title:[],first:[],uid:"",actionUser:null,dateShow:!1,date:{index:1,name:"今天"},dates:[{index:1,name:"今天"},{index:2,name:"昨天"},{index:3,name:"本月"},{index:4,name:"上月"}],animation:"",pageSize:12,list:[],loading:!1,page:0,noMore:!1}},watch:{date:function(){this.onPullingDown()},uid:function(){this.onPullingDown()}},computed:{showBack:function(){return!!this.uid&&this.uid!==this.$store.state.user.userInfo.uid},refundRebate:function(){return this.$store.state.agent.refundRebate},actionUserStatus:{get:function(){return!!this.actionUser},set:function(t){this.actionUser=t?this.actionUser:null}}},mounted:function(){this.$store.state.user.userInfo&&(this.uid=this.$store.state.user.userInfo.uid,this.title.push(this.$store.state.user.userInfo.userName))},methods:{onBack:function(){this.uid=this.first.pop(),this.title.pop()},onReport:function(){this.$router.push("/user/agent/lower-report/info/"+this.actionUser.userName),this.actionUser=null},onLower:function(){this.first.push(this.uid),this.title.push(this.actionUser.userName),this.uid=this.actionUser.uid,this.actionUser=null},onClick:function(t){this.date=t,this.dateShow=!1},onPullingDown:function(){this.page=0,this.noMore=!1,this.loadList(!0)},onPullingUp:function(){this.loadList(!1)},loadList:function(t){var s=this;this.loading?(this.toastText("正在获取",window.TOAST_POSITION.TOP),this.$refs.scroll&&(this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh())):this.noMore?(this.toastText("没有更多",window.TOAST_POSITION.TOP),this.$refs.scroll&&(this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh())):(this.page++,this.$store.state.main.loadingText="正在加载...",this.loading=!0,this.$store.dispatch("agent/lowerReport",{date:this.date.index,page:this.page,pageSize:this.pageSize,uid:this.uid}).then(function(i){s.$store.state.main.loadingText="",200===i.code?(0===i.data.data.length&&(s.noMore=!0),s.list=t?i.data.data:s.list.concat(i.data.data)):(s.page--,s.toastText(i.message,window.TOAST_POSITION.TOP)),s.loading=!1,s.$nextTick(function(){s.$refs.scroll&&(s.$refs.scroll.forceUpdate(),s.$refs.scroll.refresh())})}).catch(function(){s.$store.state.main.loadingText="",s.toastText("获取失败",window.TOAST_POSITION.TOP),s.page--,s.loading=!1,s.$nextTick(function(){s.$refs.scroll&&(s.$refs.scroll.forceUpdate(),s.$refs.scroll.refresh())})}))}}}},mOjS:function(t,s,i){"use strict";var e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view-page"},[i("div",{staticClass:"head"},[i("title-header",{attrs:{title:t.$route.meta.title||"下级报表"}},[i("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:function(s){t.dateShow=!0}},slot:"right"},[t._v("\n          "+t._s(t.date.name)),i("i",{staticClass:"fa fa-fw fa-angle-down"})])]),t._v(" "),t._m(0)],1),t._v(" "),i("div",{class:{body:!0,"body-foot":!!t.showBack}},[t.list.length?i("cube-scroll",{ref:"scroll",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[i("vux-group",t._l(t.list,function(s,e){return i("vux-cell-box",{key:s.uid+"-"+e,attrs:{"is-link":""}},[i("ul",{staticClass:"row clear-fix",on:{click:function(i){t.actionUser=s}}},[i("li",{staticClass:"col f-l col-count"},[t._v(t._s(s.userName))]),t._v(" "),i("li",{staticClass:"col f-l col-count"},[t._v(t._s(s.type))]),t._v(" "),i("li",{staticClass:"col f-l col-count"},[t._v(t._s(s.countuser))]),t._v(" "),i("li",{staticClass:"col f-l col-count"},[t._v(t._s(s.net))])])])}),1)],1):i("div",{staticClass:"no-data"},[i("img",{staticClass:"img",attrs:{src:"/m/static/img/no-data.png?v=2019-05-15T15:34:46",alt:""}}),t._v(" "),i("p",{staticClass:"info"},[t._v("暂无下级")])])],1),t._v(" "),t.showBack?i("div",{staticClass:"foot"},[i("vux-button",{attrs:{type:"primary"},nativeOn:{click:function(s){return t.onBack(s)}}},[t._v("返回上级")])],1):t._e(),t._v(" "),i("vux-popup",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"ios-popup",attrs:{position:"bottom","popup-style":{zIndex:1002}},model:{value:t.dateShow,callback:function(s){t.dateShow=s},expression:"dateShow"}},[i("div",{staticClass:"radio"},[i("ul",{staticClass:"list"},t._l(t.dates,function(s){return i("li",{key:s.index,staticClass:"item",on:{click:function(i){return t.onClick(s)}}},[t._v(t._s(s.name))])}),0),t._v(" "),i("button",{staticClass:"btn",on:{click:function(s){t.dateShow=!1}}},[t._v("取消")])])]),t._v(" "),i("vux-popup",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"ios-popup",attrs:{position:"bottom","popup-style":{zIndex:1002}},model:{value:t.actionUserStatus,callback:function(s){t.actionUserStatus=s},expression:"actionUserStatus"}},[i("div",{staticClass:"radio"},[i("ul",{staticClass:"list"},[i("li",{staticClass:"item title"},[t._v(t._s(t.actionUser&&t.actionUser.userName))]),t._v(" "),i("li",{staticClass:"item",on:{click:t.onReport}},[t._v("查看报表")]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.actionUser&&"代理"===t.actionUser.type,expression:"actionUser&&actionUser['type']==='代理'"}],staticClass:"item",on:{click:t.onLower}},[t._v("查看下级")])]),t._v(" "),i("button",{staticClass:"btn",on:{click:function(s){t.actionUser=null}}},[t._v("取消")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"row title clear-fix"},[s("li",{staticClass:"col f-l col-count"},[this._v("帐号")]),this._v(" "),s("li",{staticClass:"col f-l col-count"},[this._v("类型")]),this._v(" "),s("li",{staticClass:"col f-l col-count"},[this._v("投注人数")]),this._v(" "),s("li",{staticClass:"col f-l col-count"},[this._v("盈利")])])}]};s.a=e},"z+o5":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("k3E8"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(s,t,function(){return e[t]})}(a);var n=i("mOjS");var l=function(t){i("Uy5C"),i("B1RF")},c=i("VU/8")(o.a,n.a,!1,l,"data-v-166a92c6",null);s.default=c.exports}});