webpackJsonp([2],{"+UBf":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("4i1s"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("c6b2");var o=function(t){e("klbt")},r=e("VU/8")(i.a,l.a,!1,o,"data-v-30a4565e",null);s.default=r.exports},"4R65":function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.animation}},[t.isValid?e("div",{key:t.bet?"0":"1",staticClass:"body"},[e("title-header",{staticClass:"header",attrs:{title:"体育投注列表","back-event":!0},on:{back:t.back}},[t.bet?t._e():e("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:t.onFilterClick},slot:"right"},[t._v("筛选")])]),t._v(" "),t.noData||t.bet?t.bet?e("ul",{staticClass:"bet"},[e("transition-group",{attrs:{name:"list-in"}},t._l(t.betKeys,function(s){return e("li",{key:s.k,staticClass:"row"},[e("span",{staticClass:"col-l"},[t._v(t._s(s.v))]),t._v(" "),e("span",{class:{"col-r":!0,red:s.red}},[t._v(t._s(t.getBetItem(s)))])])}),0)],1):e("div",{staticClass:"list-empty"},[e("div",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无投注记录")])]):e("cube-scroll",{ref:"scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.list,function(s,a){return e("div",{key:s.id+"_"+a,staticClass:"item",on:{click:function(e){t.bet=s}}},[e("div",{staticClass:"item-head"},[e("span",{staticClass:"name"},[t._v(t._s(s.platform))]),t._v(" "),e("span",{staticClass:"date-time"},[t._v(t._s(t.dayJs.unix(s.betTime).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("div",{staticClass:"item-body"},[e("span",{staticClass:"ball"},[e("span",[t._v(t._s(s.gameName))])]),t._v(" "),e("span",{staticClass:"amount"},[t._v(t._s(s.betAmount))])]),t._v(" "),e("div",{staticClass:"item-foot"},[e("span",{staticClass:"issue"},[t._v(t._s(s.billNo))]),t._v(" "),e("span",{class:"status-"+s.status},[e("i",{staticClass:"icon"})])]),t._v(" "),e("span",{staticClass:"link-icon icon iconfont h5-icon-next"})])}),0),t._v(" "),t.list.length&&!t.bet?e("div",{staticClass:"record-footer"},[e("div",{staticClass:"item"},[e("span",[t._v("总投注:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_bet))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",[t._v("总派彩:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_win))])])]):t._e()],1):t._e()])},staticRenderFns:[]};s.a=a},"4i1s":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o(e("8FtN")),i=o(e("3dZY")),n=e("6cYu"),l=o(e("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[l.default],name:"BetSlot",props:{date:{type:String,required:!0},type:{type:String,required:!0}},components:{TitleHeader:n.TitleHeader},data:function(){return{bet:null,betKeys:[{k:"billNo",v:"订单号"},{k:"platform",v:"游戏名称"},{k:"betAmount",v:"下注金额",red:!0},{k:"validBetAmount",v:"有效投注",red:!0},{k:"netAmount",v:"派彩",red:!0},{k:"gameName",v:"玩法"},{k:"betTime",v:"下注时间",time:!0},{k:"status",v:"状态",status:!0}],picker:null,noData:!1,platform:"",limit:10,page:0,list:[],total_bet:"0.00",total_win:"0.00",refreshing:!1,dayJs:i.default}},computed:{isValid:function(){return(0,i.default)(this.date).isValid()},animation:function(){return this.bet?"slide-left":"slide-right"}},created:function(){this.isValid||(this.toastText("参数错误:无效的日期",window.TOAST_POSITION.TOP),this.$router.back())},mounted:function(){var t=this;this.getList(),this.$store.dispatch("main/gameSort",{id:"10001",callback:function(s){if(s){var e=[{id:-1,name:"全部"}];(0,a.default)(s).forEach(function(t){e=e.concat(s[t])}),t.picker=t.$createPicker({title:"选择彩种",data:[e],alias:{value:"id",text:"name"},onSelect:function(s,a){0===a[0]?t.platform="":t.platform=e[a[0]].code||"",t.$refs.scroll&&t.$refs.scroll.scrollTo(0,0,0),t.onPullingDown()}})}}})},methods:{getBetItem:function(t){return t.time?i.default.unix(this.bet[t.k]).format("YYYY-MM-DD HH:mm:ss"):t.status?["","已中奖","未中奖"][this.bet[t.k]]:this.bet[t.k]},back:function(){this.bet?this.bet=null:this.$router.back()},onPullingDown:function(){this.list=[],this.page=0,this.getList()},onPullingUp:function(){this.getList()},onFilterClick:function(){this.picker.show()},getList:function(){var t=this;this.refreshing?this.toastText("在获取数据",window.TOAST_POSITION.TOP):(this.refreshing=!0,this.page++,this.$store.dispatch("user/getRecordList",{data:{date:this.date,type:this.type,platform:this.platform,limit:this.limit,page:this.page},callback:function(s){200===s.code?(s.data.data.list.forEach(function(t){parseFloat(t.netAmount)>0?t.status="1":parseFloat(t.netAmount)<0?t.status="2":t.status="3"}),t.list=t.list.concat(s.data.data.list),t.total_bet=s.data.data.amount.total_bet,t.total_win=s.data.data.amount.total_win):s.message?t.toastText(s.message,window.TOAST_POSITION.TOP):s.msg&&t.toastText(s.msg,window.TOAST_POSITION.TOP),t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!t.list.length},error:function(s){t.toastText("获取数据失败",window.TOAST_POSITION.TOP),t.page--,t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!1}}))}}}},AaFx:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o(e("8FtN")),i=o(e("3dZY")),n=e("6cYu"),l=o(e("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[l.default],name:"BetLottery",props:{date:{type:String,required:!0},type:{type:String,required:!0}},components:{TitleHeader:n.TitleHeader},data:function(){return{bet:null,betKeys:[{k:"billNo",v:"订单号"},{k:"lotteryName",v:"彩种"},{k:"issue",v:"期数"},{k:"betAmount",v:"下注金额",red:!0},{k:"validBetAmount",v:"有效投注",red:!0},{k:"netAmount",v:"派彩",red:!0},{k:"betCount",v:"订单数量"},{k:"playwayName",v:"玩法"},{k:"betInfo",v:"下注内容"},{k:"betTime",v:"下注时间",time:!0},{k:"rebate",v:"返点值"},{k:"fdAmount",v:"返点金额"},{k:"openTime",v:"结算时间",time:!0,is:!0},{k:"result",v:"开奖结果"},{k:"status",v:"状态",status:!0}],picker:null,noData:!1,platform:"",limit:10,page:0,list:[],total_bet:"0.00",total_win:"0.00",refreshing:!1,dayJs:i.default,cancelling:!1}},computed:{isValid:function(){return(0,i.default)(this.date).isValid()},animation:function(){return this.bet?"slide-left":"slide-right"}},created:function(){this.isValid||(this.toastText("参数错误:无效的日期",window.TOAST_POSITION.TOP),this.$router.back()),this.$route.query.code&&(this.platform=this.$route.query.code,this.onPullingDown())},mounted:function(){var t=this;this.getList(),this.$store.dispatch("main/gameSort",{id:"10000",callback:function(s){if(s[1e4]&&s[1e4].length){var e=s[1e4].map(function(t){return t.id}).join("|");t.$store.dispatch("main/gameSort",{id:e,callback:function(s){if(s){var e=[{id:-1,name:"全部"}];(0,a.default)(s).forEach(function(t){e=e.concat(s[t])}),t.picker=t.$createPicker({title:"选择彩种",data:[e],alias:{value:"id",text:"name"},onSelect:function(s,a){0===a[0]?t.platform="":t.platform=e[a[0]].code||"",t.$refs.scroll&&t.$refs.scroll.scrollTo(0,0,0),t.onPullingDown()}})}}})}}})},methods:{onCancelClick:function(){var t=this;this.bet&&!this.cancelling&&(this.cancelling=!0,this.$store.dispatch("user/cancelBet",{betTime:this.bet.betTime,recordId:this.bet.id}).then(function(s){t.cancelling=!1,"string"==typeof s.data&&t.toastText(s.data,window.TOAST_POSITION.TOP),200===s.code&&(t.bet=null,t.onPullingDown())}).catch(function(s){t.cancelling=!1}))},getBetItem:function(t){return console.log(this.bet,t),!!(!t.is||this.bet&&this.bet.status)&&(t.time?i.default.unix(this.bet[t.k]).format("YYYY-MM-DD HH:mm:ss"):t.status?["待开奖","已中奖","未中奖","和","已撤销"][this.bet[t.k]]:this.bet[t.k])},back:function(){this.bet?this.bet=null:this.$router.back()},onPullingDown:function(){this.list=[],this.page=0,this.getList()},onPullingUp:function(){this.getList()},onFilterClick:function(){this.picker.show()},getList:function(){var t=this;if(this.refreshing)this.toastText("在获取数据",window.TOAST_POSITION.TOP);else{this.refreshing=!0,this.page++;var s={date:this.date,type:this.type,platform:this.platform,limit:this.limit,page:this.page};this.$route.query.status&&(s.status=this.$route.query.status),this.$store.dispatch("user/getRecordList",{data:s,callback:function(s){200===s.code&&s.data.data.list.length>0?(t.list=t.list.concat(s.data.data.list),t.total_bet=s.data.data.amount.total_bet,t.total_win=s.data.data.amount.total_win):s.message?t.toastText("暂无更多数据"):s.msg&&t.toastText(s.msg,window.TOAST_POSITION.TOP),t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!t.list.length},error:function(s){t.toastText("获取数据失败",window.TOAST_POSITION.TOP),t.page--,t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!1}})}}}}},DaHE:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("AaFx"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("jAFC");var o=function(t){e("bFH/")},r=e("VU/8")(i.a,l.a,!1,o,"data-v-2224b717",null);s.default=r.exports},Dv35:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"record"},[e("div",{staticClass:"record-header"},[e("title-header",{attrs:{title:t.$route.meta.title||"投注记录"}}),t._v(" "),e("date-interval",{attrs:{date:t.date,default:""},on:{"update:date":function(s){t.date=s}},model:{value:t.dateIndex,callback:function(s){t.dateIndex=s},expression:"dateIndex"}}),t._v(" "),e("vux-tab",{staticClass:"record-tab",staticStyle:{"background-color":"#fff"},attrs:{"scroll-threshold":5,"line-width":2},model:{value:t.tabIndex,callback:function(s){t.tabIndex=s},expression:"tabIndex"}},t._l(t.showTabs,function(s){return e("vux-tab-item",{key:s.k},[t._v(t._s(s.v))])}),1),t._v(" "),t._m(0)],1),t._v(" "),e("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:t.onSwipeLeft,expression:"onSwipeLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:t.onSwipeRight,expression:"onSwipeRight",modifiers:{swiperight:!0}}],staticClass:"record-content"},[e("transition-group",{attrs:{name:t.animation}},t._l(t.showTabs,function(s,a){return a===t.tabIndex?e("div",{key:"wrapper-"+s.k,staticClass:"animation-box"},[e("div",{staticClass:"scroller"},[e("cube-scroll",[e("div",{ref:"solid",refInFor:!0,staticClass:"solid"},t._l(t.list,function(s,a){return e("ul",{key:"item_"+a,staticClass:"record-table content clear-fix",on:{click:function(e){return t.onClick(s)}}},[e("li",{staticClass:"item date"},[e("p",{staticClass:"day"},[t._v(t._s(s.date.date))]),t._v(" "),e("p",{staticClass:"week"},[t._v(t._s(s.date.week))])]),t._v(" "),e("li",{staticClass:"item count"},[t._v(t._s(s.bet_count))]),t._v(" "),e("li",{staticClass:"item money"},[t._v(t._s(s.bet_amount))]),t._v(" "),e("li",{staticClass:"item win-or-lose"},[t._v(t._s(s.bet_win_amount))])])}),0)])],1),t._v(" "),e("div",{staticClass:"record-footer"},[e("div",{staticClass:"item"},[e("span",[t._v("总投注:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_bet))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",[t._v("总派彩:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_win))])])])]):t._e()}),0)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"record-table title clear-fix"},[s("li",{staticClass:"item date"},[this._v("时间")]),this._v(" "),s("li",{staticClass:"item count"},[this._v("笔数")]),this._v(" "),s("li",{staticClass:"item money"},[this._v("下注金额")]),this._v(" "),s("li",{staticClass:"item win-or-lose"},[this._v("派彩")])])}]};s.a=a},HaUR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("gsJ9"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("4R65");var o=function(t){e("cC/V")},r=e("VU/8")(i.a,l.a,!1,o,"data-v-75736887",null);s.default=r.exports},IKaT:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a,i=e("6cYu"),n=e("qhTv"),l=(a=n)&&a.__esModule?a:{default:a};s.default={mixins:[l.default],name:"Bet",components:{TitleHeader:i.TitleHeader,DateInterval:i.DateInterval},data:function(){return{date:null,dateIndex:0,tabs:[{k:"lottery",v:"彩票"},{k:"live",v:"视讯"},{k:"slot",v:"电子"},{k:"chess",v:"棋牌"},{k:"sport",v:"体育"}],tabIndex:0,list:[],total_bet:"0.00",total_win:"0.00",animation:"slide-left"}},created:function(){var t=this;this.tabs.forEach(function(s){s.show=t.checkGameTypeShow(s.v)})},mounted:function(){this.$store.state.user.token||this.$router.replace("/admin/login")},computed:{tab:function(){return this.showTabs[this.tabIndex]},showTabs:function(){return this.tabs.filter(function(t){return t.show})}},watch:{date:"refreshList",tabIndex:function(t,s){this.animation=t<s?"slide-right":"slide-left",this.total_bet="0.00",this.total_win="0.00",this.list=[],this.refreshList()}},methods:{onSwipeLeft:function(){this.tabIndex+1<this.showTabs.length&&this.tabIndex++},onSwipeRight:function(){this.tabIndex>0&&this.tabIndex--},onClick:function(t){this.$router.push("/user/record/list/"+this.showTabs[this.tabIndex].k+"/"+t.date.date)},refreshList:function(){var t=this;this.date&&this.tab&&this.tab.k?this.$store.dispatch("user/getRecordSummary",{start:this.date.start,end:this.date.end,game:this.tab.k,callback:function(s){200===s.code?(t.total_bet=s.data.amount.total_bet,t.total_win=s.data.amount.total_win,t.list=s.data.list):5001===s.code||5002===s.code?t.$router.replace("/admin/login"):t.toastText(s.message,window.TOAST_POSITION.TOP)}}):this.list=[]}}}},"K+tR":function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.animation}},[t.isValid?e("div",{key:t.bet?"0":"1",staticClass:"body"},[e("title-header",{staticClass:"header",attrs:{title:"视讯投注列表","back-event":!0},on:{back:t.back}},[t.bet?t._e():e("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:t.onFilterClick},slot:"right"},[t._v("筛选")])]),t._v(" "),t.noData||t.bet?t.bet?e("ul",{staticClass:"bet"},[e("transition-group",{attrs:{name:"list-in"}},t._l(t.betKeys,function(s){return e("li",{key:s.k,staticClass:"row"},[e("span",{staticClass:"col-l"},[t._v(t._s(s.v))]),t._v(" "),e("span",{class:{"col-r":!0,red:s.red}},[t._v(t._s(t.getBetItem(s)))])])}),0)],1):e("div",{staticClass:"list-empty"},[e("div",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无投注记录")])]):e("cube-scroll",{ref:"scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.list,function(s,a){return e("div",{key:s.id+"_"+a,staticClass:"item",on:{click:function(e){t.bet=s}}},[e("div",{staticClass:"item-head"},[e("span",{staticClass:"name"},[t._v(t._s(s.platform))]),t._v(" "),e("span",{staticClass:"date-time"},[t._v(t._s(t.dayJs.unix(s.betTime).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("div",{staticClass:"item-body"},[e("span",{staticClass:"ball"},[e("span",[t._v(t._s(s.gameName))])]),t._v(" "),e("span",{staticClass:"amount"},[t._v(t._s(s.betAmount))])]),t._v(" "),e("div",{staticClass:"item-foot"},[e("span",{staticClass:"issue"},[t._v(t._s(s.billNo))]),t._v(" "),e("span",{class:"status-"+s.status},[e("i",{staticClass:"icon"})])]),t._v(" "),e("span",{staticClass:"link-icon icon iconfont h5-icon-next"})])}),0),t._v(" "),t.list.length&&!t.bet?e("div",{staticClass:"record-footer"},[e("div",{staticClass:"item"},[e("span",[t._v("总投注:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_bet))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",[t._v("总派彩:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_win))])])]):t._e()],1):t._e()])},staticRenderFns:[]};s.a=a},L7Os:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.animation}},[t.isValid?e("div",{key:t.bet?"0":"1",staticClass:"body"},[e("title-header",{staticClass:"header",attrs:{title:"棋牌投注列表","back-event":!0},on:{back:t.back}},[t.bet?t._e():e("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:t.onFilterClick},slot:"right"},[t._v("筛选")])]),t._v(" "),t.noData||t.bet?t.bet?e("ul",{staticClass:"bet"},[e("transition-group",{attrs:{name:"list-in"}},t._l(t.betKeys,function(s){return e("li",{key:s.k,staticClass:"row"},[e("span",{staticClass:"col-l"},[t._v(t._s(s.v))]),t._v(" "),e("span",{class:{"col-r":!0,red:s.red}},[t._v(t._s(t.getBetItem(s)))])])}),0)],1):e("div",{staticClass:"list-empty"},[e("div",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无投注记录")])]):e("cube-scroll",{ref:"scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.list,function(s,a){return e("div",{key:s.id+"_"+a,staticClass:"item",on:{click:function(e){t.bet=s}}},[e("div",{staticClass:"item-head"},[e("span",{staticClass:"name"},[t._v(t._s(s.platform))]),t._v(" "),e("span",{staticClass:"date-time"},[t._v(t._s(t.dayJs.unix(s.betTime).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("div",{staticClass:"item-body"},[e("span",{staticClass:"ball"},[e("span",[t._v(t._s(s.gameName))])]),t._v(" "),e("span",{staticClass:"amount"},[t._v(t._s(s.betAmount))])]),t._v(" "),e("div",{staticClass:"item-foot"},[e("span",{staticClass:"issue"},[t._v(t._s(s.billNo))]),t._v(" "),e("span",{class:"status-"+s.status},[e("i",{staticClass:"icon"})])]),t._v(" "),e("span",{staticClass:"link-icon icon iconfont h5-icon-next"})])}),0),t._v(" "),t.list.length&&!t.bet?e("div",{staticClass:"record-footer"},[e("div",{staticClass:"item"},[e("span",[t._v("总投注:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_bet))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",[t._v("总派彩:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_win))])])]):t._e()],1):t._e()])},staticRenderFns:[]};s.a=a},"bFH/":function(t,s){},c6b2:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.animation}},[t.isValid?e("div",{key:t.bet?"0":"1",staticClass:"body"},[e("title-header",{staticClass:"header",attrs:{title:"电子投注列表","back-event":!0},on:{back:t.back}},[t.bet?t._e():e("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:t.onFilterClick},slot:"right"},[t._v("筛选")])]),t._v(" "),t.noData||t.bet?t.bet?e("ul",{staticClass:"bet"},[e("transition-group",{attrs:{name:"list-in"}},t._l(t.betKeys,function(s){return e("li",{key:s.k,staticClass:"row"},[e("span",{staticClass:"col-l"},[t._v(t._s(s.v))]),t._v(" "),e("span",{class:{"col-r":!0,red:s.red}},[t._v(t._s(t.getBetItem(s)))])])}),0)],1):e("div",{staticClass:"list-empty"},[e("div",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无投注记录")])]):e("cube-scroll",{ref:"scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.list,function(s,a){return e("div",{key:s.id+"_"+a,staticClass:"item",on:{click:function(e){t.bet=s}}},[e("div",{staticClass:"item-head"},[e("span",{staticClass:"name"},[t._v(t._s(s.platform))]),t._v(" "),e("span",{staticClass:"date-time"},[t._v(t._s(t.dayJs.unix(s.betTime).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("div",{staticClass:"item-body"},[e("span",{staticClass:"ball"},[e("span",[t._v(t._s(s.gameName))])]),t._v(" "),e("span",{staticClass:"amount"},[t._v(t._s(s.betAmount))])]),t._v(" "),e("div",{staticClass:"item-foot"},[e("span",{staticClass:"issue"},[t._v(t._s(s.billNo))]),t._v(" "),e("span",{class:"status-"+s.status},[e("i",{staticClass:"icon"})])]),t._v(" "),e("span",{staticClass:"link-icon icon iconfont h5-icon-next"})])}),0),t._v(" "),t.list.length&&!t.bet?e("div",{staticClass:"record-footer"},[e("div",{staticClass:"item"},[e("span",[t._v("总投注:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_bet))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",[t._v("总派彩:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_win))])])]):t._e()],1):t._e()])},staticRenderFns:[]};s.a=a},"cC/V":function(t,s){},eVDA:function(t,s){},g1om:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o(e("8FtN")),i=o(e("3dZY")),n=e("6cYu"),l=o(e("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[l.default],name:"BetChess",props:{date:{type:String,required:!0},type:{type:String,required:!0}},components:{TitleHeader:n.TitleHeader},data:function(){return{bet:null,betKeys:[{k:"billNo",v:"订单号"},{k:"platform",v:"游戏名称"},{k:"betAmount",v:"下注金额",red:!0},{k:"validBetAmount",v:"有效投注",red:!0},{k:"netAmount",v:"派彩",red:!0},{k:"gameName",v:"玩法"},{k:"betTime",v:"下注时间",time:!0},{k:"status",v:"状态",status:!0}],picker:null,noData:!1,platform:"",limit:10,page:0,list:[],total_bet:"0.00",total_win:"0.00",refreshing:!1,dayJs:i.default}},computed:{isValid:function(){return(0,i.default)(this.date).isValid()},animation:function(){return this.bet?"slide-left":"slide-right"}},created:function(){this.isValid||(this.toastText("参数错误:无效的日期",window.TOAST_POSITION.TOP),this.$router.back())},mounted:function(){var t=this;this.getList(),this.$store.dispatch("main/gameSort",{id:"10004",callback:function(s){if(s){var e=[{id:-1,name:"全部"}];(0,a.default)(s).forEach(function(t){e=e.concat(s[t])}),t.picker=t.$createPicker({title:"选择彩种",data:[e],alias:{value:"id",text:"name"},onSelect:function(s,a){0===a[0]?t.platform="":t.platform=e[a[0]].code||"",t.$refs.scroll&&t.$refs.scroll.scrollTo(0,0,0),t.onPullingDown()}})}}})},methods:{getBetItem:function(t){return t.time?i.default.unix(this.bet[t.k]).format("YYYY-MM-DD HH:mm:ss"):t.status?["","已中奖","未中奖"][this.bet[t.k]]:this.bet[t.k]},back:function(){this.bet?this.bet=null:this.$router.back()},onPullingDown:function(){this.list=[],this.page=0,this.getList()},onPullingUp:function(){this.getList()},onFilterClick:function(){this.picker.show()},getList:function(){var t=this;this.refreshing?this.toastText("在获取数据",window.TOAST_POSITION.TOP):(this.refreshing=!0,this.page++,this.$store.dispatch("user/getRecordList",{data:{date:this.date,type:this.type,platform:this.platform,limit:this.limit,page:this.page},callback:function(s){200===s.code?(s.data.data.list.forEach(function(t){parseFloat(t.netAmount)>0?t.status="1":parseFloat(t.netAmount)<0?t.status="2":t.status="3"}),t.list=t.list.concat(s.data.data.list),t.total_bet=s.data.data.amount.total_bet,t.total_win=s.data.data.amount.total_win):s.message?t.toastText(s.message,window.TOAST_POSITION.TOP):s.msg&&t.toastText(s.msg,window.TOAST_POSITION.TOP),t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!t.list.length},error:function(s){t.toastText("获取数据失败",window.TOAST_POSITION.TOP),t.page--,t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!1}}))}}}},gsJ9:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o(e("8FtN")),i=o(e("3dZY")),n=e("6cYu"),l=o(e("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[l.default],name:"BetSport",props:{date:{type:String,required:!0},type:{type:String,required:!0}},components:{TitleHeader:n.TitleHeader},data:function(){return{bet:null,betKeys:[{k:"billNo",v:"订单号"},{k:"platform",v:"游戏名称"},{k:"betAmount",v:"下注金额",red:!0},{k:"validBetAmount",v:"有效投注",red:!0},{k:"netAmount",v:"派彩",red:!0},{k:"gameName",v:"玩法"},{k:"betTime",v:"下注时间",time:!0},{k:"status",v:"状态",status:!0}],picker:null,noData:!1,platform:"",limit:10,page:0,list:[],total_bet:"0.00",total_win:"0.00",refreshing:!1,dayJs:i.default}},computed:{isValid:function(){return(0,i.default)(this.date).isValid()},animation:function(){return this.bet?"slide-left":"slide-right"}},created:function(){this.isValid||(this.toastText("参数错误:无效的日期",window.TOAST_POSITION.TOP),this.$router.back())},mounted:function(){var t=this;this.getList(),this.$store.dispatch("main/gameSort",{id:"10002",callback:function(s){if(s){var e=[{id:-1,name:"全部"}];(0,a.default)(s).forEach(function(t){e=e.concat(s[t])}),t.picker=t.$createPicker({title:"选择彩种",data:[e],alias:{value:"id",text:"name"},onSelect:function(s,a){0===a[0]?t.platform="":t.platform=e[a[0]].code||"",t.$refs.scroll&&t.$refs.scroll.scrollTo(0,0,0),t.onPullingDown()}})}}})},methods:{getBetItem:function(t){return t.time?i.default.unix(this.bet[t.k]).format("YYYY-MM-DD HH:mm:ss"):t.status?["","已中奖","未中奖"][this.bet[t.k]]:this.bet[t.k]},back:function(){this.bet?this.bet=null:this.$router.back()},onPullingDown:function(){this.list=[],this.page=0,this.getList()},onPullingUp:function(){this.getList()},onFilterClick:function(){this.picker.show()},getList:function(){var t=this;this.refreshing?this.toastText("在获取数据",window.TOAST_POSITION.TOP):(this.refreshing=!0,this.page++,this.$store.dispatch("user/getRecordList",{data:{date:this.date,type:this.type,platform:this.platform,limit:this.limit,page:this.page},callback:function(s){200===s.code?(s.data.data.list.forEach(function(t){parseFloat(t.netAmount)>0?t.status="1":parseFloat(t.netAmount)<0?t.status="2":t.status="3"}),t.list=t.list.concat(s.data.data.list),t.total_bet=s.data.data.amount.total_bet,t.total_win=s.data.data.amount.total_win):s.message?t.toastText(s.message,window.TOAST_POSITION.TOP):s.msg&&t.toastText(s.msg,window.TOAST_POSITION.TOP),t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!t.list.length},error:function(s){t.toastText("获取数据失败",window.TOAST_POSITION.TOP),t.page--,t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!1}}))}}}},jAFC:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.animation}},[t.isValid?e("div",{key:t.bet?"0":"1",staticClass:"body"},[e("title-header",{staticClass:"header",attrs:{title:"0"===t.$route.query.status?"即时注单":"彩票投注列表","back-event":!0},on:{back:t.back}},[t.bet&&0===t.bet.status?e("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:t.onCancelClick},slot:"right"},[t._v("撤单")]):t._e(),t._v(" "),t.bet?t._e():e("span",{staticClass:"header-right",attrs:{slot:"right"},on:{click:t.onFilterClick},slot:"right"},[t._v("筛选")])]),t._v(" "),t.noData||t.bet?t.bet?e("ul",{staticClass:"bet"},[e("transition-group",{attrs:{name:"list-in"}},t._l(t.betKeys,function(s){return t.getBetItem(s)?e("li",{key:s.k,staticClass:"row"},[e("span",{staticClass:"col-l"},[t._v(t._s(s.v))]),t._v(" "),e("span",{class:{"col-r":!0,red:s.red}},[t._v(t._s(t.getBetItem(s)))])]):t._e()}),0)],1):e("div",{staticClass:"list-empty"},[e("div",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无投注记录")])]):e("cube-scroll",{ref:"scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.list,function(s,a){return e("div",{key:s.id+"_"+a,staticClass:"item",on:{click:function(e){t.bet=s}}},[e("div",{staticClass:"item-head"},[e("span",{staticClass:"name"},[t._v(t._s(s.lotteryName))]),t._v(" "),e("span",{staticClass:"date-time"},[t._v(t._s(t.dayJs.unix(s.betTime).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("div",{staticClass:"item-body"},[e("span",{staticClass:"ball"},[e("span",[t._v(t._s(s.playwayName))]),t._v(" "),e("span",[t._v(t._s(s.ball?":":""))]),t._v(" "),e("span",[t._v(t._s(s.ball?s.ball:""))]),t._v(" "),e("span",[t._v(t._s(s.ball?"-":":"))]),t._v(" "),e("span",{staticClass:"code"},[t._v(t._s(s.betInfo))])]),t._v(" "),e("span",{staticClass:"amount"},[t._v(t._s(s.betAmount))])]),t._v(" "),e("div",{staticClass:"item-foot"},[e("span",{staticClass:"issue"},[t._v("第"+t._s(s.issue)+"期")]),t._v(" "),e("span",{class:"status-"+s.status},[e("i",{staticClass:"icon"})])]),t._v(" "),e("span",{staticClass:"link-icon icon iconfont h5-icon-next"})])}),0),t._v(" "),t.list.length&&!t.bet?e("div",{staticClass:"record-footer"},[e("div",{staticClass:"item"},[e("span",[t._v("总投注:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_bet))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",[t._v("总派彩:")]),t._v(" "),e("span",{staticStyle:{color:"#ff2200"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.total_win))])])]):t._e()],1):t._e()])},staticRenderFns:[]};s.a=a},kDob:function(t,s){},klbt:function(t,s){},oyYl:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o(e("8FtN")),i=o(e("3dZY")),n=e("6cYu"),l=o(e("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[l.default],name:"BetLive",props:{date:{type:String,required:!0},type:{type:String,required:!0}},components:{TitleHeader:n.TitleHeader},data:function(){return{bet:null,betKeys:[{k:"billNo",v:"订单号"},{k:"gameName",v:"游戏名称"},{k:"platform",v:"游戏类型"},{k:"betAmount",v:"下注金额"},{k:"validBetAmount",v:"有效投注",red:!0},{k:"netAmount",v:"派彩",red:!0},{k:"betInfo",v:"下注内容"},{k:"betTime",v:"下注时间",time:!0},{k:"status",v:"状态",status:!0}],picker:null,noData:!1,platform:"",limit:10,page:0,list:[],total_bet:"0.00",total_win:"0.00",refreshing:!1,dayJs:i.default}},computed:{isValid:function(){return(0,i.default)(this.date).isValid()},animation:function(){return this.bet?"slide-left":"slide-right"}},created:function(){this.isValid||(this.toastText("参数错误:无效的日期",window.TOAST_POSITION.TOP),this.$router.back())},mounted:function(){var t=this;this.getList(),this.$store.dispatch("main/gameSort",{id:"10003",callback:function(s){if(s){var e=[{id:-1,name:"全部"}];(0,a.default)(s).forEach(function(t){e=e.concat(s[t])}),t.picker=t.$createPicker({title:"选择彩种",data:[e],alias:{value:"id",text:"name"},onSelect:function(s,a){0===a[0]?t.platform="":t.platform=e[a[0]].code||"",t.$refs.scroll&&t.$refs.scroll.scrollTo(0,0,0),t.onPullingDown()}})}}})},methods:{getBetItem:function(t){return t.time?i.default.unix(this.bet[t.k]).format("YYYY-MM-DD HH:mm:ss"):t.status?["","已中奖","未中奖"][this.bet[t.k]]:this.bet[t.k]},back:function(){this.bet?this.bet=null:this.$router.back()},onPullingDown:function(){this.list=[],this.page=0,this.getList()},onPullingUp:function(){this.getList()},onFilterClick:function(){this.picker.show()},getList:function(){var t=this;this.refreshing?this.toastText("在获取数据",window.TOAST_POSITION.TOP):(this.refreshing=!0,this.page++,this.$store.dispatch("user/getRecordList",{data:{date:this.date,type:this.type,platform:this.platform,limit:this.limit,page:this.page},callback:function(s){200===s.code?(s.data.data.list.forEach(function(t){parseFloat(t.netAmount)>0?t.status="1":parseFloat(t.netAmount)<0?t.status="2":t.status="3"}),t.list=t.list.concat(s.data.data.list),t.total_bet=s.data.data.amount.total_bet,t.total_win=s.data.data.amount.total_win):s.message?t.toastText(s.message,window.TOAST_POSITION.TOP):s.msg&&t.toastText(s.msg,window.TOAST_POSITION.TOP),t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!t.list.length},error:function(s){t.toastText("获取数据失败",window.TOAST_POSITION.TOP),t.page--,t.$refs.scroll&&(t.$refs.scroll.forceUpdate(),t.$refs.scroll.refresh()),t.refreshing=!1,t.noData=!1}}))}}}},qBiG:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("oyYl"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("K+tR");var o=function(t){e("yPwL")},r=e("VU/8")(i.a,l.a,!1,o,"data-v-19a049d3",null);s.default=r.exports},qxIH:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("IKaT"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("Dv35");var o=function(t){e("eVDA")},r=e("VU/8")(i.a,l.a,!1,o,"data-v-f4a99362",null);s.default=r.exports},wQeH:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("g1om"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var l=e("L7Os");var o=function(t){e("kDob")},r=e("VU/8")(i.a,l.a,!1,o,"data-v-f3f1edda",null);s.default=r.exports},yPwL:function(t,s){}});