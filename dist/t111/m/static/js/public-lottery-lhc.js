webpackJsonp([19],{"66KZ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s("qhTv"),n=(i=a)&&i.__esModule?i:{default:i};e.default={mixins:[n.default],name:"LotteryTimer",props:{result:{type:Object,default:null}},data:function(){return{time:-1,task:null,refreshing:!1,fp:!1}},watch:{result:function(){this.result&&(this.result.djs_fengpan>0?(this.time=this.result.djs_fengpan,this.fp=!1):this.result.djs_next_kaipan>0?(this.time=this.result.djs_next_kaipan,this.fp=!0):this.removeTask(),this.$emit("on-fp",this.fp))}},mounted:function(){var t=this;this.removeTask(),this.task=window.setIntervalByIframe(function(){t.time>0?t.time--:0===t.time&&(t.fp=!t.fp,t.$emit("on-fp",t.fp),t.time=-1)},1e3)},methods:{removeTask:function(){this.task&&window.clearIntervalByIframe(this.task)},timeStr:function(t){if(t){var e=Math.floor(t/60),s=t%60;return e=e<0?0:e,s=s<0?0:s,this.$VuxUtil.number.numberPad(e)+":"+this.$VuxUtil.number.numberPad(s)}return"00:00"},timeStrXg:function(t){if(t){var e=Math.floor(t/24/60/60),s=Math.floor(t/60/60%24),i=Math.floor(t/60%60),a=Math.floor(t%60);return e=e<0?0:e,s=s<0?0:s,i=i<0?0:i,a=a<0?0:a,e?this.$VuxUtil.number.numberPad(e)+"天"+this.$VuxUtil.number.numberPad(s)+"时"+this.$VuxUtil.number.numberPad(i)+"分":this.$VuxUtil.number.numberPad(s)+":"+this.$VuxUtil.number.numberPad(i)+":"+this.$VuxUtil.number.numberPad(a)}return"00:00:00"}},beforeDestroy:function(){this.removeTask()}}},"7SH9":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result",on:{click:function(e){t.showMoreModal=!t.showMoreModal}}},[s("div",{staticClass:"label"},[t.opening?s("p",["xglhc"===t.$route.meta.code?s("span",{staticClass:"last-issue"},[t._v("\n        "+t._s(t.result?parseInt(t.result.lastissue)+1:"00000000")+"期\n      ")]):s("span",{staticClass:"last-issue"},[t._v("\n        "+t._s(t.result?parseInt(t.result.lastissue+1).toString().substr(4):"00000000")+"期\n      ")])]):s("p",["xglhc"===t.$route.meta.code?s("span",{staticClass:"last-issue"},[t._v("\n        "+t._s(t.result?t.result.lastissue:"00000000")+"期\n      ")]):s("span",{staticClass:"last-issue"},[t._v("\n        "+t._s(t.result?t.result.lastissue.toString().substr(4):"00000000")+"期\n      ")])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"list-box"},[s("ul",{staticClass:"clear-fix list"},[t._l(t.numArr,function(e,i){return s("li",{key:e+"-"+i,class:t.getClass(e)},[t._v("\n        "+t._s("＋"!==e&&1===e.toString().length?"0"+e:e)+"\n      ")])}),t._v(" "),s("li",{class:"more-icon icon iconfont h5-icon-qushi-moreup"+(t.showMoreModal?" active":"")})],2),t._v(" "),s("ul",{staticClass:"clear-fix list"},t._l(t.resArr(t.result?t.result.lastluzhu:" , , , , , , "),function(e,i){return s("li",{key:i,class:"＋"===e?"res-item num-add":"res-item"},[t._v("\n        "+t._s("＋"===e?"":e)+"\n      ")])}),0)]),t._v(" "),s("div",{staticClass:"more-box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMoreModal,expression:"showMoreModal"}],staticClass:"modal-box"}),t._v(" "),s("div",{staticStyle:{overflow:"hidden"}},[s("transition",{attrs:{name:"slide-down"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMoreModal,expression:"showMoreModal"}]},[s("ul",{staticClass:"more-list"},[s("li",{staticClass:"row"},[s("span",{staticClass:"col col-issue"},[t._v("期数")]),t._v(" "),s("span",{staticClass:"col col-result"},[t._v("开奖号码")]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v("色波")]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v("大小")]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v("单双")])]),t._v(" "),t._l(t.results,function(e,i){return s("li",{key:e.issue+"_"+i,staticClass:"row"},[s("span",{staticClass:"col col-issue"},[t._v(t._s(e.issue.toString().substr(-3)))]),t._v(" "),s("span",{staticClass:"col col-result"},t._l(t.resArr(e.resultInfo),function(e,i){return s("i",{key:e+"-"+i,class:t.getClass(e)},[t._v("\n                  "+t._s("＋"!==e&&1===e.toString().length?"0"+e:e)+"\n                ")])}),0),t._v(" "),s("span",{staticClass:"col col-info"},[t._v(t._s(e.sb))]),t._v(" "),s("span",{staticClass:"col col-info"},[s("span",{class:{ball:!0,red:"大"===e.dx,blue:"小"===e.dx,green:"和"===e.dx}},[t._v(t._s(e.dx))])]),t._v(" "),s("span",{staticClass:"col col-info"},[s("span",{class:{ball:!0,red:"双"===e.ds,blue:"单"===e.ds}},[t._v(t._s(e.ds))])])])})],2),t._v(" "),s("div",{staticClass:"more-button-box"},[s("button",{staticClass:"more-button",on:{click:function(e){return t.$router.push("/trend/"+t.$route.meta.id)}}},[s("i",{staticClass:"icon-trend icon iconfont h5-icon-H-qushi",staticStyle:{transform:"none"}}),t._v("\n              查看更多走势\n            ")])])])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"last-issue"},[this._v("开奖结果")])])}]};e.a=i},BnJJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("po/l"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var l=s("u3mt");var r=function(t){s("I6MG")},o=s("VU/8")(a.a,l.a,!1,r,"data-v-38571950",null);e.default=o.exports},"C/nH":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer"},[s("span",{staticClass:"issue"},[t._v("\n      "+t._s(t.result?"xglhc"===t.$route.meta.code?t.result.issue:t.result.issue.toString().substr(4):"00000000")+"期\n    ")]),t._v(" "),t.fp?s("span",{staticClass:"time-box"},[t._v("封盘:封盘")]):s("span",{staticClass:"time-box"},[t._v("封盘:"),s("span",{staticClass:"time"},[t._v(t._s(1===t.$route.meta.id?t.timeStrXg(t.time):t.timeStr(t.time)))])])])},staticRenderFns:[]};e.a=i},Ftm1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(s("HxWs")),a=n(s("qhTv"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[a.default],name:"LotteryResult",props:{result:{type:Object,default:null},showMore:{type:Boolean,default:!1},fp:{type:Boolean,default:!1}},computed:{showMoreModal:{get:function(){return this.showMore},set:function(t){this.$emit("update:showMore",t)}}},created:function(){var t=this,e=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49"];this.task=window.setInterval(function(){if(t.opening||t.fp){for(var s=[],a=JSON.parse((0,i.default)(e)),n=0;n<7;n++)s.push(a.splice(Math.floor(100*Math.random())%(49-n),1)[0]);s.splice(6,0,"＋"),t.numArr=s}},250)},beforeDestroy:function(){this.task&&window.clearInterval(this.task)},watch:{result:function(t,e){if(t){var s=parseInt(t.issue)-parseInt(t.lastissue);if(this.opening=!!(t.djs_next_kaipan&&1===s||2===s),!this.opening){var i=t.lastresultInfo.split(",");i.splice(6,0,"＋"),this.numArr=i}this.onRefresh(t&&!e)}},"$route.meta.id":function(){var t=this;setTimeout(function(){t.onRefresh(!0)},600)},showMoreModal:function(){this.showMoreModal&&this.$emit("on-show-more")}},data:function(){return{results:[],bose:{red:[1,7,13,19,23,29,35,45,2,8,12,18,24,30,34,40,46],blue:[3,9,15,25,31,37,41,47,4,10,14,20,26,36,42,48],green:[5,11,17,21,27,33,39,43,6,16,22,28,32,38,44,49]},numArr:["01","02","03","04","05","06","＋","07"],opening:!1,task:null}},methods:{resArr:function(t){var e=t.split(",");return e.splice(6,0,"＋"),e},getClass:function(t){return{"num-item":!0,ball:"＋"!==t,"ball-red":this.bose.red.includes(parseInt(t)),"ball-green":this.bose.green.includes(parseInt(t)),"ball-blue":this.bose.blue.includes(parseInt(t)),"num-add":"＋"===t}},onRefresh:function(t){var e=this;this.$store.dispatch("lottery/getTrend",{data:{status:t,lotteryId:this.$route.meta.id,pageSize:10},callback:function(t){e.loading=!1,200===(t=t.data).code?e.results=t.data.data.list:e.results=[]}})}}}},I6MG:function(t,e){},MNpm:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("66KZ"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var l=s("C/nH"),r=s("VU/8")(a.a,l.a,!1,null,null,null);e.default=r.exports},ON2e:function(t,e){},"po/l":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(s("xHwj")),a=d(s("MNpm")),n=d(s("Juq7")),l=s("6cYu"),r=d(s("qhTv")),o=d(s("js4u"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[r.default,o.default],name:"LHC",components:{LotteryRightMenu:l.LotteryRightMenu,LotteryLeftMenu:l.LotteryLeftMenu,LotteryResult:i.default,LotteryTimer:a.default,LotteryBetInput:n.default},data:function(){return{showMore:!1,keyHeight:"69.4444444vw",keyShow:!1,leftMenuList:[],leftMenuView:null,showLeftMenu:!1,showRightMenu:!1,result:null,targetTabIndex:0,innerIndex:0,playList:[],radioShow:!1,scrollerHeight:window.document.body.offsetHeight,headerHeight:0,bottomHeight:50,targetCode:[],showInput:!1,inputOpt:{count:0,money:"",moneyAll:0,rebate:0},showSubmit:!1,issue:"000000000",orderList:[],orderListView:null,submitted:!1,fengpan:!1,sebo:[[[1,7,13,19,23,29,35,45,2,8,12,18,24,30,34,40,46],[3,9,15,25,31,37,41,47,4,10,14,20,26,36,42,48],[5,11,17,21,27,33,39,43,6,16,22,28,32,38,44]],[[1,7,13,19,23,29,35,45],[2,8,12,18,24,30,34,40,46],[29,30,34,35,40,45,46],[1,2,7,8,12,13,18,19,23,24],[1,7,12,18,23,29,30,34,45],[2,8,13,19,24,35,40,46]],[[3,9,15,25,31,37,41,47],[4,10,14,20,26,36,42,48],[25,26,31,36,37,41,42,47,48],[3,4,9,10,14,15,20],[3,9,10,14,25,36,41,47],[4,15,20,26,31,37,42,48]],[[5,11,17,21,27,33,39,43],[6,16,22,28,32,38,44],[27,28,32,33,38,39,43,44],[5,6,11,16,17,21,22],[5,16,21,27,32,38,43],[6,11,17,22,28,33,39,44]]],wrapperAnimationName:""}},computed:{listTop:function(){return this.playList[this.targetTabIndex].items[this.innerIndex].code.filter(function(t,e){return e<49})},listBot:function(){return this.playList[this.targetTabIndex].items[this.innerIndex].code.filter(function(t,e){return e>48})}},watch:{targetTabIndex:function(t,e){this.wrapperAnimationName=t>e?"slide-left":"slide-right",this.clearSelected(),this.innerIndex=0},innerIndex:"clearSelected",targetCode:{handler:function(){this.onSelectChange()},deep:!0},"inputOpt.money":"onSelectChange",showInput:function(){var t=this;this.inputOpt?this.$nextTick(function(){t.$refs["input-box"]&&(t.$refs["input-box"].$el?t.bottomHeight=t.$refs["input-box"].$el.getBoundingClientRect().height+50:t.bottomHeight=t.$refs["input-box"].getBoundingClientRect().height+50)}):this.bottomHeight=10,this.$nextTick(function(){t.showSubmit&&t.$refs["list-scroll"]&&t.$refs["list-scroll"].refresh()})},fengpan:function(t,e){t!==e&&(this.getResult(),this.clearSelected()),t||(this.opening=!0)},"$route.meta.id":"init"},mounted:function(){var t=this;this.targetTabIndex=0,this.$nextTick(function(){t.headerHeight=t.$refs["header-box"].getBoundingClientRect().height,t.scrollerHeight=Math.round(window.document.documentElement.offsetHeight-t.headerHeight)}),this.init()},beforeDestroy:function(){this.$stomp.off(this.$route.meta.id),this.$stomp.task&&window.clearIntervalByIframe(this.$stomp.task)},methods:{onSwiperLeft:function(){this.targetTabIndex+1<this.playList.length&&this.targetTabIndex++},onSwiperRight:function(){this.targetTabIndex>0&&this.targetTabIndex--},onFp:function(t){this.fengpan=t},init:function(){var t=this;this.getResult(!0),this.playList=[],this.$store.dispatch("lottery/getPlayWaySet",{id:this.$route.meta.id,callback:function(e){200===(e=e.data).code&&(t.playList=e.data,t.onBallRefresh())}}),this.showLeftMenu=this.showRightMenu=!1,this.clearSelected(),this.$store.dispatch("main/gameSort",{id:"30001",callback:function(e){e&&e[30001]&&(t.leftMenuList=e[30001])}}),"websocket"===this.$store.state.main.config.lotteryOpenUpdateModel?this.$stomp.on(this.$route.meta.id,function(e){t.result.lastissue=e.lastissue,t.result.lastluzhu=e.lastluzhu,t.result.lastresultInfo=e.lastresultInfo,t.getResult(),t.onBallRefresh()}):(this.$stomp.task&&window.clearInterval(this.$stomp.task),this.$stomp.task=window.setIntervalByIframe(function(){!t.fengpan&&t.opening?(console.log("open ... "),t.$store.dispatch("lottery/refreshResult",{id:t.$route.meta.id,callback:function(e){if(200===(e=e.data).code){if(t.fengpan=e.data.djs_next_kaipan>0,!t.fengpan){var s=parseInt(e.data.lastissue),i=parseInt(e.data.issue);i-s==1?(t.opening=!1,t.onBallRefresh()):i-s>1&&(t.opening=!0)}t.issue=e.data.issue,t.result=e.data}else t.result=null,t.fengpan=!0}})):console.log("no something ... ")},5e3))},onShowSubmit:function(){var t=this;document.body.scrollTop=0,setTimeout(function(){t.showSubmit=!0},600)},checkUser:function(){localStorage.token||(localStorage.lastPath=this.$route.fullPath,this.$router.push("/admin/login"))},onSubmit:function(){var t=this;if(this.inputOpt.moneyAll>0&&this.orderList.length&&!this.submitted){this.submitted=!0,this.showSubmit=!1;var e={lotteryId:this.$route.meta.id,issue:parseInt(this.issue),rebate:this.inputOpt.rebate,code:this.orderList.map(function(t){return{code:t.code,playway:t.playway,odds:t.odds,money:t.money,ball:t.ball,attach:""}})};this.$store.dispatch("lottery/submit",{data:e,callback:function(e,s){t.$store.state.main.loadingText="",t.submitted=!1,t.$store.state.main.loadingText="",t.submitted=!1,s||(200===e.status?200===(e=e.data).code?(t.toastText(e.data,window.TOAST_POSITION.DEFAULT),t.$store.dispatch("user/refreshBalance",{callback:null}),t.clearSelected()):e.message&&t.toastText(e.message,window.TOAST_POSITION.DEFAULT):console.log(e))}})}},clearSelected:function(){this.showSubmit=!1,this.chipEditing=!1,this.targetCode=[],this.orderList=[],this.inputOpt={count:0,money:"",moneyAll:0,rebate:0},this.radioShow=!1},setOrderList:function(){var t=[];if(this.targetCode.forEach(function(e){t.push({ball:e.ball,code:e.code,name:e.name,money:0,odds:e.odds,playway:e.playway})}),this.inputOpt.money){var e=parseFloat(this.inputOpt.money);this.inputOpt.moneyAll=e*this.inputOpt.count,t.forEach(function(t){t.money=e})}else this.inputOpt.moneyAll=0;this.inputOpt.count&&this.checkUser(),this.orderList=t},allSelectChang:function(t){this.targetCode.length===t?(this.inputOpt.count=1,this.showInput=!0,this.setOrderList()):this.targetCode.length>t?(this.targetCode.splice(t),this.toastText("不能超过"+this.targetCode.length+"个号码",window.TOAST_POSITION.DEFAULT)):(this.showInput=!1,this.orderList=[])},onSelectChange:function(){if(!this.playList[this.targetTabIndex].big)return!1;"特码"===this.playList[this.targetTabIndex].big||"正码"===this.playList[this.targetTabIndex].big||"正码特"===this.playList[this.targetTabIndex].big||"正码1-6"===this.playList[this.targetTabIndex].big||"特肖"===this.playList[this.targetTabIndex].big||"一肖"===this.playList[this.targetTabIndex].big||"尾数"===this.playList[this.targetTabIndex].big||"色波"===this.playList[this.targetTabIndex].big?this.targetCode&&this.targetCode.length?(this.inputOpt.count=this.targetCode.length,this.showInput=!0,this.setOrderList()):(this.showInput=!1,this.orderList=[]):"连码"===this.playList[this.targetTabIndex].big&&"二全中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连码"===this.playList[this.targetTabIndex].big&&"二中特"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连码"===this.playList[this.targetTabIndex].big&&"特串"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连肖"===this.playList[this.targetTabIndex].big&&"二肖连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连肖"===this.playList[this.targetTabIndex].big&&"二肖连不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连尾"===this.playList[this.targetTabIndex].big&&"二尾连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连尾"===this.playList[this.targetTabIndex].big&&"二尾连不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"合肖"===this.playList[this.targetTabIndex].big&&"二肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(2):"连码"===this.playList[this.targetTabIndex].big&&"三全中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连码"===this.playList[this.targetTabIndex].big&&"三中二"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连肖"===this.playList[this.targetTabIndex].big&&"三肖连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连肖"===this.playList[this.targetTabIndex].big&&"三肖连不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连尾"===this.playList[this.targetTabIndex].big&&"三尾连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连尾"===this.playList[this.targetTabIndex].big&&"三尾连不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"合肖"===this.playList[this.targetTabIndex].big&&"三肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(3):"连肖"===this.playList[this.targetTabIndex].big&&"四肖连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连肖"===this.playList[this.targetTabIndex].big&&"四肖连不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连尾"===this.playList[this.targetTabIndex].big&&"四尾连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连尾"===this.playList[this.targetTabIndex].big&&"四尾连不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"合肖"===this.playList[this.targetTabIndex].big&&"四肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"连码"===this.playList[this.targetTabIndex].big&&"四中一"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(4):"连肖"===this.playList[this.targetTabIndex].big&&"五肖连中"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"合肖"===this.playList[this.targetTabIndex].big&&"五肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"五不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(5):"合肖"===this.playList[this.targetTabIndex].big&&"六肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"六不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(6):"合肖"===this.playList[this.targetTabIndex].big&&"七肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"七不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(7):"合肖"===this.playList[this.targetTabIndex].big&&"八肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"八不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(8):"合肖"===this.playList[this.targetTabIndex].big&&"九肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"九不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(9):"合肖"===this.playList[this.targetTabIndex].big&&"十肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"十不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(10):"合肖"===this.playList[this.targetTabIndex].big&&"十一肖"===this.playList[this.targetTabIndex].items[this.innerIndex].small||"全不中"===this.playList[this.targetTabIndex].big&&"十一不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(11):"全不中"===this.playList[this.targetTabIndex].big&&"十二不中"===this.playList[this.targetTabIndex].items[this.innerIndex].small?this.allSelectChang(12):(this.showInput=!1,this.orderList=[])}}}},u3mt:function(t,e,s){"use strict";var i={render:function(){var t=this,e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"view-page"},[i("lottery-left-menu",{staticClass:"drawer-box",attrs:{show:e.showLeftMenu,list:e.leftMenuList},on:{"update:show":function(t){e.showLeftMenu=t}}}),e._v(" "),i("lottery-right-menu",{staticClass:"drawer-box",attrs:{show:e.showRightMenu,"refresh-count":e.refreshCount},on:{"update:show":function(t){e.showRightMenu=t},"update:refreshCount":function(t){e.refreshCount=t},"update:refresh-count":function(t){e.refreshCount=t}}}),e._v(" "),i("div",{directives:[{name:"hammer",rawName:"v-hammer.swipedown",value:function(){t.showMore=!0},expression:"() => {this.showMore=true}",modifiers:{swipedown:!0}},{name:"hammer",rawName:"v-hammer.swipeup",value:function(){t.showMore=!1},expression:"() => {this.showMore=false}",modifiers:{swipeup:!0}}],ref:"header-box",staticClass:"header-box"},[i("div",{staticStyle:{width:"100%"}},[i("div",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],staticClass:"lottery-header"},[i("div",{staticClass:"header-box"},[i("div",{staticClass:"lottery-name clear-fix"},[i("span",{staticClass:"name f-l",on:{click:function(t){e.showLeftMenu=!0}}},[e._v(e._s(e.$route.meta.name))]),e._v(" "),i("i",{staticClass:"fa fa-fw fa-angle-right icon f-l"})]),e._v(" "),e.$store.state.user.userInfo?i("span",{staticClass:"balance"},[i("span",{staticClass:"rmb"},[e._v("¥")]),e._v(":"+e._s(e.$store.state.user.userInfo.balance))]):e._e(),e._v(" "),i("span",{staticClass:"header-menu-icon",on:{click:function(t){e.showRightMenu=!0}}})])]),e._v(" "),i("lottery-result",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],attrs:{result:e.result,"show-more":e.showMore,fp:e.fengpan},on:{"on-show-more":function(t){e.radioShow=!1},"update:showMore":function(t){e.showMore=t},"update:show-more":function(t){e.showMore=t}}}),e._v(" "),i("lottery-timer",{attrs:{result:e.result},on:{"on-fp":e.onFp}})],1),e._v(" "),i("div",{staticClass:"tab-box"},[i("vux-tab",{ref:"play-tab",staticClass:"play-way-tab",attrs:{"line-width":0},model:{value:e.targetTabIndex,callback:function(t){e.targetTabIndex=t},expression:"targetTabIndex"}},e._l(e.playList,function(t,s){return i("vux-tab-item",{key:t.big+s,staticClass:"vux-tab-item"},[i("span",{staticClass:"item"},[e._v(e._s(t.big))])])}),1),e._v(" "),i("span",{staticClass:"icon"},[i("i",{class:"icon iconfont h5-icon-qushi-moreup"+(e.radioShow?"":" fa-rotate-180"),on:{click:function(t){e.radioShow=!e.radioShow}}})]),e._v(" "),i("div",{staticClass:"radio-box",staticStyle:{overflow:"hidden"}},[i("transition",{attrs:{name:"slide-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.radioShow,expression:"radioShow"}],staticClass:"radio-transition-box"},[i("vux-checker",{attrs:{"default-item-class":"default-item-class","selected-item-class":"selected-item-class","radio-required":""},model:{value:e.targetTabIndex,callback:function(t){e.targetTabIndex=t},expression:"targetTabIndex"}},e._l(e.playList,function(t,s){return i("vux-checker-item",{key:t.big+s,attrs:{value:s}},[i("span",{staticClass:"item-content",on:{click:function(t){e.radioShow=!1}}},[e._v(e._s(t.big))])])}),1)],1)])],1)],1)]),e._v(" "),i("div",{staticClass:"wrapper",style:{height:e.scrollerHeight+"px","padding-bottom":"0"}},[i("transition",{attrs:{name:e.wrapperAnimationName}},[i("div",{key:"wrapper-"+e.targetTabIndex,ref:"content-box",staticStyle:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%","box-sizing":"border-box"}},[i("cube-scroll",{ref:"bet-scroll",attrs:{options:{eventPassthrough:"horizontal"}}},[e.playList.length&&e.playList[e.targetTabIndex]?i("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:e.onSwiperLeft,expression:"onSwiperLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:e.onSwiperRight,expression:"onSwiperRight",modifiers:{swiperight:!0}}]},[["特码","正码","正码特","连码","全不中"].includes(e.playList[e.targetTabIndex].big)?i("div",{staticClass:"bigbox"},[i("vux-tab",{staticClass:"play-way-tab",attrs:{"scroll-threshold":6},model:{value:e.innerIndex,callback:function(t){e.innerIndex=t},expression:"innerIndex"}},e._l(e.playList[e.targetTabIndex].items,function(t,s){return i("vux-tab-item",{key:t.small+s,staticClass:"vux-tab-item top-item"},[e._v("\n                  "+e._s(t.small)+"\n                ")])}),1),e._v(" "),i("vux-checker",{staticClass:"small-codes clear-fix",attrs:{type:"checkbox","default-item-class":"code-default","selected-item-class":"code-selected"},model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},[e._l(e.listTop,function(t,s){return i("vux-checker-item",{key:t.playway+"_"+s,staticClass:"code-item",attrs:{value:Object.assign({ball:e.playList[e.targetTabIndex].items[e.innerIndex].small||e.playList[e.targetTabIndex].big},t)}},[i("div",{class:["code-name","size_cl"+t.name]},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"code-odds"},[e._v(e._s(t.odds))])])}),e._v(" "),i("div",{staticClass:"code-line"}),e._v(" "),e._l(e.listBot,function(t,s){return i("vux-checker-item",{key:t.playway+48+s,staticClass:"code-wei",attrs:{value:Object.assign({ball:e.playList[e.targetTabIndex].items[e.innerIndex].small||e.playList[e.targetTabIndex].big},t)}},[i("div",{staticClass:"code-name font"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"code-odds"},[e._v(e._s(t.odds))])])})],2)],1):"正码1-6"===e.playList[e.targetTabIndex].big?e._l(e.playList[e.targetTabIndex].items,function(t,s){return i("vux-card",{key:t.small+s,staticClass:"bigbox"},[i("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.small))]),e._v(" "),i("vux-checker",{class:["small-codes","clear-fix","a"+s],attrs:{slot:"content",type:"checkbox","default-item-class":"code-default","selected-item-class":"code-selected"},slot:"content",model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},e._l(t.code,function(s,a){return i("vux-checker-item",{key:t.small+"_"+a,class:["code-wei",a>3?"code-lg":""],attrs:{value:Object.assign({ball:t.small},s)}},[i("div",{staticClass:"code-name font"},[e._v(e._s(s.name))]),e._v(" "),i("div",{staticClass:"code-odds"},[e._v(e._s(s.odds))])])}),1)],1)}):"尾数"===e.playList[e.targetTabIndex].big||"一肖"===e.playList[e.targetTabIndex].big||"特肖"===e.playList[e.targetTabIndex].big?i("div",{staticClass:"danbox"},[i("vux-checker",{staticClass:"small-dan",attrs:{type:"checkbox","default-item-class":"code-default","selected-item-class":"dan-selected"},model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},e._l(e.playList[e.targetTabIndex].items[0].code,function(t,s){return i("vux-checker-item",{key:t.code+"_"+s,staticClass:"dan-item",attrs:{value:Object.assign({ball:e.playList[e.targetTabIndex].big},t)}},[i("h4",{staticClass:"xiao-wei"},[i("span",[e._v(e._s(t.code))]),e._v(" "),i("span",{staticClass:"indent"},[e._v(e._s(t.odds))])]),e._v(" "),"尾数"===e.playList[e.targetTabIndex].big?i("div",{staticClass:"code-num"},["0"!==t.code.substring(0,1)?i("span",{class:"size_cl0"+t.code.substring(0,1)},[e._v("\n                      "+e._s("0"+t.code.substring(0,1))+"\n                    ")]):e._e(),e._v(" "),e._l(4,function(s){return i("span",{key:"boa"+s,class:"size_cl"+s+t.code.substring(0,1)},[e._v("\n                      "+e._s(s+t.code.substring(0,1))+"\n                    ")])})],2):i("div",{staticClass:"code-num"},e._l(t.zodiac,function(t,s){return i("span",{key:"bob"+s,class:"size_cl"+(t>9?t:"0"+t)},[e._v("\n                      "+e._s(t)+"\n                    ")])}),0)])}),1)],1):i("div",{staticClass:"bigbox",staticStyle:{width:"100%",overflow:"hidden"}},["连肖"===e.playList[e.targetTabIndex].big?i("vux-tab",{staticClass:"play-way-tab",attrs:{"scroll-threshold":7},model:{value:e.innerIndex,callback:function(t){e.innerIndex=t},expression:"innerIndex"}},e._l(e.playList[e.targetTabIndex].items,function(t,s){return i("vux-tab-item",{key:t.small+s,staticClass:"vux-tab-item"},[i("div",{staticClass:"lian-xiao-item"},[i("div",[e._v(e._s(t.small.toString().substr(0,3)))]),e._v(" "),i("div",[e._v("("+e._s(t.small.toString().substr(3))+")")])])])}),1):i("vux-tab",{staticClass:"play-way-tab",attrs:{"line-width":2},model:{value:e.innerIndex,callback:function(t){e.innerIndex=t},expression:"innerIndex"}},e._l(e.playList[e.targetTabIndex].items,function(t,s){return i("vux-tab-item",{key:t.small+s,staticClass:"vux-tab-item"},[e._v("\n                  "+e._s(t.small)+"\n                ")])}),1),e._v(" "),i("vux-checker",{staticClass:"small-dan",attrs:{type:"checkbox","default-item-class":"code-default","selected-item-class":"dan-selected"},model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},e._l(e.playList[e.targetTabIndex].items[e.innerIndex].code,function(t,s){return i("vux-checker-item",{key:t.code+"_"+s,staticClass:"dan-item",attrs:{value:Object.assign({ball:e.playList[e.targetTabIndex].big},t)}},[i("h4",{staticClass:"xiao-wei"},[i("span",[e._v(e._s(t.code))]),e._v(" "),i("span",{staticClass:"indent"},[e._v(e._s(t.odds))])]),e._v(" "),"连尾"===e.playList[e.targetTabIndex].big?i("div",{staticClass:"code-num"},["0"!==t.code.substring(0,1)?i("span",{class:"size_cl0"+t.code.substring(0,1)},[e._v("\n                      "+e._s("0"+t.code.substring(0,1))+"\n                    ")]):e._e(),e._v(" "),e._l(4,function(s){return i("span",{key:"boc"+s,class:"size_cl"+s+t.code.substring(0,1)},[e._v("\n                      "+e._s(s+t.code.substring(0,1))+"\n                    ")])})],2):"色波"===e.playList[e.targetTabIndex].big?i("div",{staticClass:"code-num"},e._l(e.sebo[e.innerIndex][s],function(t,s){return i("span",{key:"bod"+s,class:"code-num-sebo size_cl"+(t>9?t:"0"+t)},[e._v(e._s(t))])}),0):i("div",{staticClass:"code-num"},e._l(t.zodiac,function(t,s){return i("span",{key:"boe"+s,class:"size_cl"+(t>9?t:"0"+t)},[e._v(e._s(t))])}),0)])}),1)],1)],2):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showInput,expression:"showInput"}],staticClass:"bottom",style:{width:"100%",height:e.bottomHeight+"px"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.fengpan,expression:"fengpan"}],staticClass:"fengpan-modal"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.fengpan,expression:"fengpan"}],staticClass:"feng-pan-text"},[e._v("已封盘")])],1)])],1),e._v(" "),"chip"===e.siteConfig.betInputTheme?i("lottery-bet-input",{ref:"input-box",attrs:{"show-input":e.showInput},on:{"update:showInput":function(t){e.showInput=t},"update:show-input":function(t){e.showInput=t},submit:e.onShowSubmit,clear:e.clearSelected},model:{value:e.inputOpt,callback:function(t){e.inputOpt=t},expression:"inputOpt"}}):i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showInput,expression:"showInput"}],ref:"input-box",staticClass:"input-box lottery-bet-input-box",style:{bottom:e.keyShow?e.keyHeight:"0"}},[i("div",{staticClass:"row"},[i("span",{staticClass:"clean",on:{click:e.clearSelected}},[e._v("\n            清除\n          ")]),e._v(" "),i("label",{staticClass:"input-label"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputOpt.money,expression:"inputOpt.money"}],ref:"money-input",staticClass:"input",attrs:{type:"number",placeholder:"输入金额"},domProps:{value:e.inputOpt.money},on:{input:function(t){t.target.composing||e.$set(e.inputOpt,"money",t.target.value)}}}),e._v(" "),i("span",{staticClass:"all-zhu"},[e._v("共 "),i("i",{staticClass:"theme-color"},[e._v(e._s(e.inputOpt.count))]),e._v(" 注")])]),e._v(" "),i("button",{staticClass:"submit",attrs:{type:"button",disabled:!(this.inputOpt.moneyAll>0)},on:{click:e.onShowSubmit}},[e._v("\n          立即投注\n        ")])])])]),e._v(" "),i("vux-dialog",{attrs:{show:e.showSubmit,"dialog-style":{"max-width":"6.6rem",width:"6.6rem","border-radius":"0.2rem"}},on:{"update:show":function(t){e.showSubmit=t}}},[e.playList.length&&e.playList[e.targetTabIndex]&&e.orderList.length&&e.orderList?i("div",[i("div",{staticClass:"submit-header"},[i("span",{staticClass:"title"},[e._v("下注信息")]),e._v(" "),i("span",{staticClass:"issue"},[e._v("第 "+e._s(e.issue)+" 期")])]),e._v(" "),i("p",{staticClass:"all-info"},[e._v("\n        共计:\n        "),i("span",{staticClass:"num"},[e._v(e._s(e.inputOpt.count))]),e._v("注,\n        下注金额\n        "),i("span",{staticClass:"num"},[e._v(e._s(e.inputOpt.moneyAll))]),e._v("元\n      ")]),e._v(" "),["特码","正码","正码特","正码1-6","特肖","一肖","尾数","色波"].includes(e.playList[e.targetTabIndex].big)?i("div",{staticClass:"submit-content"},[i("cube-scroll",{ref:"list-scroll"},[i("ul",{staticClass:"scroller"},e._l(e.orderList,function(t,s){return i("li",{key:t.ball+t.code+s,staticClass:"order"},[i("span",{staticClass:"name"},[e._v(e._s(t.ball)+" - "+e._s(t.code))]),e._v(" "),i("span",{staticClass:"odds"},[e._v("赔率:"+e._s((t.odds*(100-e.inputOpt.rebate)/100).toFixed(2)))]),e._v(" "),i("span",{staticClass:"num"},[i("span",{staticClass:"rmb"},[e._v("¥")]),e._v(e._s(t.money))])])}),0)])],1):i("div",{staticClass:"submit-content"},[i("cube-scroll",[i("ul",{staticClass:"scroller"},[i("li",{staticClass:"order"},[i("span",{staticClass:"name"},[e._v(e._s(e.orderList[1].ball)+"-"+e._s(e.orderList.map(function(t){return t.code}).join(",")))]),e._v(" "),i("span",{staticClass:"odds"},[e._v("赔率:"+e._s((e.orderList[1].odds*(100-e.inputOpt.rebate)/100).toFixed(2)))]),e._v(" "),i("span",{staticClass:"num"},[i("span",{staticClass:"rmb"},[e._v("¥")]),e._v(e._s(e.orderList[1].money))])])])])],1),e._v(" "),i("div",{staticClass:"submit-footer"},[i("vux-button",{staticStyle:{margin:"0 0.1rem"},attrs:{type:"default","action-type":"button"},nativeOn:{click:function(t){e.showSubmit=!1}}},[e._v("\n          取消\n        ")]),e._v(" "),i("vux-button",{staticStyle:{margin:"0 0.1rem"},attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(t){return e.onSubmit(t)}}},[e._v("\n          确认\n        ")])],1)]):e._e()]),e._v(" "),i("vux-dialog",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{show:e.submitted}},[i("vux-loading",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{show:e.submitted,text:"下注中"}})],1)],1)},staticRenderFns:[]};e.a=i},xHwj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Ftm1"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var l=s("7SH9");var r=function(t){s("ON2e")},o=s("VU/8")(a.a,l.a,!1,r,"data-v-65ef9604",null);e.default=o.exports}});