webpackJsonp([102],{57:function(t,e,a){a("j1ja"),t.exports=a("iFfF")},"59xz":function(t,e,a){"use strict";var i=a("mvHQ"),n=a.n(i),s={props:{list:{type:Array}},data:function(){return{message:{},submitList:[{title:"玩法"},{title:"内容"},{title:"注数"},{title:"倍数"},{title:"单注金额（元）"}],totalCount:{},title:"",issue:""}},methods:{getList:function(t,e,a){this.submitList=t,this.totalCount=e,localStorage.setItem("totalCount",n()(e)),this.title=a.title,this.issue=a.issue}},watch:{},created:function(){},mounted:function(){},components:{}},o={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("div",{staticClass:"vp-lottery-betting-style"},[i("div",{staticClass:"vp-betting-header"},[i("div",[a._v(a._s(a.title))]),a._v(" "),i("div",[a._v("第 "),i("span",[a._v(a._s(a.issue))]),a._v(" 期")]),a._v(" "),i("div",[a._v("共计￥ "),i("span",[a._v(a._s(a.totalCount.total)+"/"+a._s(a.totalCount.number))]),a._v(" 注")])]),a._v(" "),i("div",{staticClass:"vp-betting-container"},[a._m(0),a._v(" "),i("div",{staticClass:"vp-overfloat-out"},[i("div",{staticClass:"vp-overfloat-in"},a._l(a.submitList,function(t,e){return i("div",{key:e,staticClass:"betting"},[i("div",{staticClass:"text"},[a._v(a._s(t.title))]),a._v(" "),i("div",{staticClass:"text",domProps:{innerHTML:a._s(t.ball)}}),a._v(" "),i("div",{staticClass:"text"},[a._v(a._s(t.price))]),a._v(" "),"lhc"!=a.$route.meta.series?i("div",{staticClass:"text"},[a._v("\n              "+a._s((t.model*a.totalCount.db*a.totalCount.ratio).toFixed(2))+"\n            ")]):a._e(),a._v(" "),"lhc"==a.$route.meta.series?i("div",{staticClass:"text"},[a._v("\n              "+a._s(t.model)+"\n            ")]):a._e()])}),0)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"betting-container-header"},[a("div",{staticClass:"title"},[t._v("玩法")]),t._v(" "),a("div",{staticClass:"title"},[t._v("内容")]),t._v(" "),a("div",{staticClass:"title"},[t._v("赔率")]),t._v(" "),a("div",{staticClass:"title"},[t._v("单注金额（元）")])])}]},r=a("VU/8")(s,o,!1,null,null,null);e.a=r.exports},CbkX:function(t,e){},YtJ0:function(t,e,a){"use strict";var i=a("7+uW"),n=a("NYxO"),s=a("mvHQ"),o=a.n(s);var r={namespaced:!0,state:{userinfo:function(){if(!localStorage.getItem("userinfo"))return null;try{return JSON.parse(localStorage.getItem("userinfo"))}catch(t){return localStorage.setItem("userinfo",""),null}}(),flag:!0,aid:"",ifpourT:!0,websoc:{},color:!1,routeSrc:"",navIndex:0,nightCheck:!1,gameList:null,downloadUrl:{},lotteryiuss:"",showDialog:{home:{login:!0,noLogin:!0},game:{login:!0,noLogin:!0}}},mutations:{resetUserinfo:function(t,e){t.userinfo=e},getDownLoad:function(t,e){t.downloadUrl=e},reloadUserinfo:function(t,e){localStorage.setItem("userinfo",o()(e)),t.userinfo=localStorage.userinfo&&JSON.parse(localStorage.userinfo)},lotteryiuss:function(t,e){t.lotteryiuss=e},getGameList:function(t,e){t.gameList=e},getNigth:function(t,e){t.nightCheck=e},resetFlag:function(t,e){t.flag=e},getNavIndex:function(t,e){t.navIndex=e},getRoute:function(t,e){t.routeSrc=e},resetPour:function(t,e){t.ifpourT=e},websoc:function(t,e){t.websoc=e},changcolor:function(t,e){t.color=e},getDialog:function(t,e){t.showDialog=e}}},c={namespaced:!0,state:{login:{ifLogin:!1,modelTitle:"登入帐号",chooseModel:"登入帐号"},tipModel:{bool:!1,title:"",model:""},promit:{isPromit:!1},newtip:{bool:!1,title:"",model:"",leftspan:!1}},mutations:{showTipModel:function(t,e){t.tipModel.bool=e.bool,t.tipModel.title=e.title,t.tipModel.model=e.model},showLogin:function(t,e){t.login.ifLogin=e},setLoginTitle:function(t,e){t.login.modelTitle=e},setChooseModel:function(t,e){t.login.chooseModel=e},newshowtip:function(t,e){t.newtip.bool=e.bool,t.newtip.title=e.title,t.newtip.model=e.model,t.newtip.leftspan=e.leftspan}},actions:{}},l={namespaced:!0,state:{sideReady:!1,childNeedMess:{title:"",issue:"",id:"",total:"",plays:"",code:"",series:""},shareData:{},childNeed:"",fetchTime:""},mutations:{resetChildMsg:function(t,e){t.childNeedMess.title=e.title,t.childNeedMess.id=e.id},resetSeriesMsg:function(t,e){t.childNeedMess.code=e.code,t.childNeedMess.series=e.series,t.childNeedMess.id=e.id,t.childNeedMess.title=e.title},setReady:function(t,e){t.sideReady=!0},resetShareData:function(t,e){t.shareData=e},resetTrend:function(t,e){t.childNeed=e},fetchBetRecord:function(t,e){t.fetchTime=e}},actions:{}},u={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},d={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},h={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},f={state:{curr:localStorage.navCurr||0},mutations:{setCurr:function(t,e){t.curr=e,localStorage.setItem("navCurr",e)}}},v={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},p=a("Xxa5"),m=a.n(p),g=a("exGp"),b=a.n(g),y={state:{isPersonal:!1,liActive:0,contentView:"recharge",navView:0,navActive:0,navText:"充值",paymentData:[],categoryId:"",itemDatas:"",withdraw:0,isRefresh:0,bankSafety:0,payName:"",classType:"",loadingShow:!1,uid:"",list_userid:"",showclean:!1,gameList:null},mutations:{showPersonal:function(e,a){var i=this;return b()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.isPersonal=a.bool,e.liActive=a.num,a.bool?document.querySelector("html").setAttribute("style","overflow: hidden"):document.querySelector("html").setAttribute("style","overflow: auto");case 3:case"end":return t.stop()}},t,i)}))()},showContent:function(t,e){t.contentView=e.parent},listUserId:function(t,e){t.list_userid=e},userIdbyDetails:function(t,e){t.uid=e},showNav:function(t,e){t.navView=e.child},liActive:function(t,e){t.navActive=e},navText:function(t,e){t.navText=e},withdraw:function(t,e){t.withdraw=e},refresh:function(t,e){t.isRefresh+=e},payment:function(t,e){t.categoryId=e.id,t.itemDatas=e},paymentDataFc:function(t,e){t.paymentData=e},bankSafety:function(t,e){t.bankSafety=e},loading:function(t,e){t.loadingShow=e},showclean:function(t,e){t.showclean=e.newbool}},actions:{}},w={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},S={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1,loginShow:!1,dianziData:"",publicImg:{}},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e},showBanner:function(t,e){t.publicImg=e},showLogin:function(t,e){t.loginShow=e},changedian:function(t,e){t.dianziData=e}}},_={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1,isLogin:!1,showBox:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showBox:function(t,e){var a=e.showBox,i=e.isLogin;t.showBox=a,t.isLogin=i}}};i.default.use(n.a);var C=new n.a.Store({modules:{mainState:r,alert:c,lottery:l,hsyl:u,cjw:d,zyyl:h,jltx:v,bet:w,szc:S,wbw:f,yibo:_,personal:y}});e.a=C},cTfC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),n=a("mvHQ"),o=a.n(n),r=a("exGp"),c=a.n(r),l=a("xzxg");e.default=new function(){var e;function n(t,e){return this.$http.post(""+t,e)}this.vpSubmit=(e=c()(s.a.mark(function t(e){var a,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=3;break}return this.$store.commit("alert/showLogin",!0),t.abrupt("return",!1);case 3:return this.confirmbet=!1,"角"==(a=JSON.parse(localStorage.totalCount)).mol?e[0].money=String(e[0].money/10):"分"==a.mol&&(e[0].money=String(e[0].money/100)),e[0].money=e[0].money*a.db,t.next=9,n.call(this,this.$HOST_NAME+"/lottery/submit",{lotteryId:this.$route.meta.id,issue:this.childNeedMess.issue,code:o()(e),rebate:this.rebate});case 9:(i=t.sent)&&200==i.code?(this.confirmbet=!0,this.dNotify(i.data,"success"),this.resetAll(),l.a.vpGetBasicInfo.call(this)):(this.confirmbet=!0,this.dNotify(i.message,"error"));case 11:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)})}},dUkm:function(t,e,a){"use strict";var i={props:{totalCount:{type:Object},selectFast:{type:Object},saveSelectMoney:{type:Object},rangleType:{type:String},confirmbet:{type:Boolean}},data:function(){return{rangeVal:0,dropStaue:!1}},methods:{sliderChange:function(t){this.$emit("range-say",t)},chooseFastMoney:function(t,a){this.saveSelectMoney.money="",this.selectFast.list.forEach(function(t,e){a!=e&&(t.active=!1)}),t.active=!t.active,t.active&&(this.saveSelectMoney.money=+t.price),this.$emit("submit-Input-say")},blurFc:function(){this.dInvalidMoney(this.totalCount.db)&&this.totalCount.db||(this.totalCount.db=1)},changeMol:function(t){"元"==(this.totalCount.mol=t)?this.totalCount.ratio=1:"角"==t?this.totalCount.ratio=.1:"分"==t&&(this.totalCount.ratio=.01),this.hide(),this.$emit("submit-Input-say","countOnly")},fastInput:function(){this.dInvalidMoney(this.saveSelectMoney.money)?this.$emit("submit-Input-say"):this.saveSelectMoney.money=""},resetAll:function(){this.saveSelectMoney.money="",this.selectFast.list.forEach(function(t,e){t.active=!1}),this.totalCount.number=0,this.totalCount.total=0,this.$emit("submit-resetAll")},review:function(){this.confirmbet&&this.$emit("submit-review")},decrease:function(){this.totalCount.db=+this.totalCount.db-1,this.totalCount.db<2&&(this.totalCount.db=1),this.$emit("submit-Input-say","countOnly")},add:function(){this.totalCount.db=+this.totalCount.db+1,this.$emit("submit-Input-say","countOnly")},hide:function(){this.dropStaue=!1}},watch:{confirmbet:function(t,e){}},created:function(){},mounted:function(){document.querySelector("body").addEventListener("click",this.hide,!1)},beforeDestroy:function(){document.querySelector("body").removeEventListener("click",this.hide,!1)},components:{}},n={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"lottery-content-all-right-submit"},[n("div",{staticClass:"decial-right-title"},[i._v("共 "),n("span",[i._v(i._s(i.totalCount.number))]),i._v(" 注，总额 "),n("span",[i._v(i._s(10<i.totalCount.total.length?i.totalCount.total.toFixed(4):i.totalCount.total))]),i._v("\n    元\n  ")]),i._v(" "),"六合彩"!=i.rangleType?n("div",{staticClass:"decial-right-range"},[n("Slider",{attrs:{step:.5,min:0,max:13},on:{"on-input":i.sliderChange},model:{value:i.rangeVal,callback:function(t){i.rangeVal=t},expression:"rangeVal"}}),i._v(" "),n("div",{staticClass:"tip"},[n("span",[i._v("0.0%")]),i._v(" "),n("span",[i._v(i._s(i.rangeVal)+"%")])])],1):i._e(),i._v(" "),n("div",{staticClass:"decial-right-select"},i._l(i.selectFast.list,function(e,a){return n("div",{key:a,class:{active:e.active},on:{click:function(t){return i.chooseFastMoney(e,a)}}},[n("span",[i._v(i._s(e.price))])])}),0),i._v(" "),"六合彩"!=i.rangleType?n("div",{staticClass:"decial-right-yuanJiao"},[n("div",{staticClass:"single-money"},[n("div",{staticClass:"btn"},[n("span",{on:{click:i.decrease}},[i._v("-")]),i._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:i.totalCount.db,expression:"totalCount.db"}],attrs:{type:"tel"},domProps:{value:i.totalCount.db},on:{blur:i.blurFc,input:function(t){t.target.composing||i.$set(i.totalCount,"db",t.target.value)}}}),i._v(" "),n("span",{on:{click:i.add}},[i._v("+")])]),i._v(" "),n("div",{staticClass:"mydiv"},[i._v("倍")]),i._v(" "),n("div",{staticClass:"select"},[n("div",{staticClass:"lt-select",on:{click:function(t){t.stopPropagation(),i.dropStaue=!i.dropStaue}}},[n("span",{staticClass:"left"},[i._v(i._s(i.totalCount.mol))]),i._v(" "),i._m(0)]),i._v(" "),i.dropStaue?n("ul",{staticClass:"lt-select-box"},[n("div",{staticClass:"arrow"}),i._v(" "),n("li",{staticClass:"lt-select-option",on:{click:function(t){return i.changeMol("元")}}},[i._v("\n            元\n          ")]),i._v(" "),n("li",{staticClass:"lt-select-option",on:{click:function(t){return i.changeMol("角")}}},[i._v("\n            角\n          ")]),i._v(" "),n("li",{staticClass:"lt-select-option",on:{click:function(t){return i.changeMol("分")}}},[i._v("\n            分\n          ")])]):i._e()])])]):i._e(),i._v(" "),n("div",{staticClass:"decial-right-submit"},[n("input",{directives:[{name:"model",rawName:"v-model",value:i.saveSelectMoney.money,expression:"saveSelectMoney.money"}],attrs:{placeholder:"输入自定义金额",type:"text"},domProps:{value:i.saveSelectMoney.money},on:{keyup:i.fastInput,input:function(t){t.target.composing||i.$set(i.saveSelectMoney,"money",t.target.value)}}}),i._v(" "),n("div",{staticClass:"sure",on:{click:i.review}},[n("i",{staticClass:"iconfont icon-enter"}),i._v(" 确认投注")]),i._v(" "),n("a",{attrs:{href:" #javascript;"}},[n("button",{staticClass:"clear",attrs:{type:"reset"},on:{click:i.resetAll}},[n("i",{staticClass:"iconfont icon-icon-pc-del"}),i._v("清空")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"right"},[e("span")])}]},s=a("VU/8")(i,n,!1,null,null,null);e.a=s.exports},iFfF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),s=a("Xxa5"),o=a.n(s),r=a("exGp"),c=a.n(r),l=a("59xz"),u=a("dUkm"),d={props:{itemInner:{type:Object}},data:function(){return{selectDown:{list:[{price:10},{price:50},{price:100},{price:500},{price:1e3},{price:1e4}],select:""}}},methods:{seletPrice:function(t){this.$emit("drop-down-say",this.itemInner,t)},hide:function(){this.$emit("drop-down-hide")}},mounted:function(){document.querySelector("body").addEventListener("click",this.hide,!1)},beforeDestroy:function(){document.querySelector("body").removeEventListener("click",this.hide,!1)}},h={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"decial-select-down"},[i("div",{staticClass:"poptip-arrow"}),a._v(" "),i("div",{staticClass:"select-down-wrap"},a._l(a.selectDown.list,function(e,t){return i("div",{key:t,staticClass:"select-down",on:{click:function(t){return t.stopPropagation(),a.seletPrice(e)}}},[a._v(a._s(e.price)+"\n    ")])}),0)])},staticRenderFns:[]};var f,v=a("VU/8")(d,h,!1,function(t){a("CbkX")},"data-v-0f6bbbcc",null).exports,p=a("bOdI"),m=a.n(p),g=(a("cTfC"),{props:{},data:function(){var t,i=this;return t={rankList:[],issueshow:"",i:1,rankData:{columns:[{title:"期号",key:"issue",width:45,align:"center",render:function(t,e){var a=e.row.issue+"",i=a.length-3,n=a.length;return t("span",a.substring(i,n))}},{title:"开奖号",key:"resultInfo",align:"center",render:function(t,e){return t({props:["row"],data:function(){return{style:{width:"68px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},template:'\n                    <Poptip placement="bottom" trigger="hover">\n                        <div :style="style">{{row.resultInfo}}</div>\n                        <div slot="content">{{row.resultInfo}}</div>\n                    </Poptip>'},{props:{row:e.row}})}},{title:"和值",align:"center",width:30,render:function(t,e){return t("span",e.row.resultInfo.split(",")[0])}},{title:"形态",align:"center",width:48,render:function(t,e){var a=e.row.luzhu.split(",");return t({props:["row"],data:function(){return{flex:{display:"flex",justifyContent:"space-around",alignItems:"center"},ball:{width:"19px",height:"19px",lineHeight:"19px",borderRadius:"50%",background:"#ed3f14",color:"#ffff"}}},template:'\n                  <div :style="flex">\n                    <div :style="ball">{{row[0]}}</div>\n                    <div :style="ball">{{row[1]}}</div>\n                  </div>\n                '},{props:{row:[a[0],a[1]]}})}}],data:[]},betData:{columns:[{title:"期号",key:"issue",width:45,align:"center",render:function(t,e){var a=e.row.issue+"",i=a.length-3,n=a.length;return t("span",{domProps:{title:"投注内容:"+e.row.lotteryName+"-"+e.row.playwayName+"-"+e.row.ball+"-"+(1==!isNaN(Number(e.row.betInfo))?4<1*e.row.betInfo?"大":"小":e.row.betInfo)},style:{cursor:"pointer"}},[t("span",a.substring(i,n))])}},{title:"投注金额",key:"betAmount",width:50,minWidth:50,align:"center"},{title:"状态",align:"center",width:45,render:function(t,e){var a=void 0,i=e.row.status;switch(i){case 1:a="已中奖";break;case 2:a="未中奖";break;case 3:a="和";break;case 4:case 5:a="已撤销";break;default:a="待开奖"}return t("span",{style:{color:1===i?"#ed3f14":""}},a)}},{title:"操作",align:"center",width:59,minWidth:59,render:function(t,e){var a=i;return t("span",{on:{click:function(){0==e.row.status&&a.cancelBet(e)}},style:{cursor:0==e.row.status?"pointer":"auto"}},0===e.row.status?"撤销":"-")}}],data:[]},date:this.getYMD(new Date),platform:"",status:"",userinfo:localStorage.token||"",timer:null},m()(t,"issueshow",""),m()(t,"showdata",!0),t},methods:(f={getTrend:function(e){var a=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.rankData.data=e.slice(0,10);case 1:case"end":return t.stop()}},t,a)}))()}},m()(f,"getTrend",function(e){var a=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.rankList=e;case 1:case"end":return t.stop()}},t,a)}))()}),m()(f,"getBetRecord1",function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.userinfo&&(e.$store.commit("loading",!0),e.$getS("member/bet-record/list?page="+(new Date).getTime(),{date:e.date,game_platform:e.platform,game_class:"lottery",status:(e.status,e.status),limit:10,page:e.i}).then(function(t){200==t.code?(e.betData.data=[],e.betData.data=t.data.data.list,e.total=t.data.total,e.validBetAmount1=t.data.data.amount,e.total_bet1=t.data.data.amount.total_bet,e.total_win1=t.data.data.amount.total_win):localStorage.token||clearInterval(e.timer),e.$store.commit("loading",!1)}));case 1:case"end":return t.stop()}},t,e)}))()}),m()(f,"cancelBet",function(e){var a=this,t={recordId:e.row.id,betTime:e.row.betTime};this.$http.post(this.$HOST_NAME+"/lottery/cancel",t).then(function(t){t&&200==t.code?(a.dNotify(t.data,"success"),a.$set(a.betData.data[e.index],"status",4),e.row.status=4):a.dNotify(t.message,"error")})}),m()(f,"goUserCen",function(t,e){this.$store.commit("showPersonal",{bool:!0}),this.$store.commit("showContent",{parent:t}),this.$store.commit("showNav",{child:e})}),f),created:function(){this.getBetRecord1()},computed:{getUserIcons:function(){return this.$store.state.personal.isPersonal},lotteryiuss:function(){return this.$store.state.mainState.lotteryiuss}},watch:{getUserIcons:function(t){t?clearInterval(this.timer):(this.getBetRecord1(),this.timer=setInterval(this.getBetRecord1,1e4))},"$store.state.alert.tipModel.model":function(t,e){"success"==t&&this.getBetRecord1()},lotteryiuss:function(t){this.issueshow=t}},mounted:function(){this.timer=setInterval(this.getBetRecord1,1e4)},destroyed:function(){clearInterval(this.timer)}}),b={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"record"},[a.rankList.length?i("div",{staticClass:"decial-right-ranking"},[a._m(0),a._v(" "),i("div",{staticClass:"decial-right-ranking-wrap"},[i("div",{staticClass:"decial-right-ranking-item",staticStyle:{width:"139px"}},a._l(a.rankList,function(t,e){return i("div",{key:e,staticStyle:{width:"139px"}},[a._v(a._s(Object.entries(t)[0][0]))])}),0),a._v(" "),i("div",{staticClass:"decial-right-ranking-item bot",staticStyle:{width:"59px"}},a._l(a.rankList,function(t,e){return i("div",{key:e,staticStyle:{width:"59px"}},[a._v(a._s(Object.entries(t)[0][1])+"期")])}),0)])]):a._e(),a._v(" "),i("div",{staticClass:"gap"}),a._v(" "),a.betData.data.length?i("div",{staticClass:"title clearfix"},[i("span",[a._v("投注记录")]),a._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.goUserCen("personage",1)}}},[a._v("更多 "),i("Icon",{attrs:{type:"ios-arrow-right",size:"14"}})],1)]):a._e(),a._v(" "),a.betData.data.length?i("Table",{ref:"table",class:{scrollBool:a.betData.data.length<5},attrs:{columns:a.betData.columns,data:a.betData.data,border:"",width:"200","disabled-hover":"",size:"small"}}):a._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title clearfix"},[e("span",[this._v("两面长龙排行")])])}]};var y=a("VU/8")(g,b,!1,function(t){a("rZWX")},"data-v-09b27b82",null).exports,w=a("s1t9"),S=a("YtJ0"),_=a("xzxg"),C={props:{childNeedMess:{type:Object},isopen:{type:Boolean},oddsListPar:{type:Object}},data:function(){return{luZhuStaueCode:"",luZhuDatas:"",modal:!1,rangeVal:25,visible:!1,rebate:0,oddsList:"",seletPriceStaue:"",totalCount:{number:0,total:0,db:1,mol:"元",ratio:1},saveSelectMoney:{money:""},submitList:[],submitDatas:{submitList:[],list1:[],list2:[],list3:[]},active:{moneyStaue:"5",ballHistory:"大小"},selectDown:{list:[{price:10},{price:50},{price:100},{price:500},{price:1e3},{price:1e4}],select:""},selectFast:{list:[{price:5,active:!1},{price:10,active:!1},{price:50,active:!1},{price:100,active:!1},{price:500,active:!1},{price:1e3,active:!1}],select:""}}},methods:{hidePrice:function(){this.seletPriceStaue=""},fastInput:function(t){var e=this;if(!this.isopen)return!1;t||this.allData.forEach(function(t){t.list.forEach(function(t){t.mess.forEach(function(t){t.active&&(t.model=e.saveSelectMoney.money)})})}),this.calculationTotal()},calculationTotal:function(){var e=0,a=0;if(this.allData.forEach(function(t){t.list.forEach(function(t){t.mess.forEach(function(t){t.active&&(e+=1,a+=+t.model)})})}),this.totalCount.number=e,this.totalCount.total=a,"lhc"===this.childNeedMess.series)return!1;"元"===this.totalCount.mol?this.totalCount.total=a*+this.totalCount.ratio*+this.totalCount.db:"角"===this.totalCount.mol?this.totalCount.total=(a*+this.totalCount.ratio*+this.totalCount.db).toFixed(1):"分"===this.totalCount.mol&&(this.totalCount.total=(a*+this.totalCount.ratio*+this.totalCount.db).toFixed(2))},rangeChange:function(a){this.rebate=a,this.allData.forEach(function(t){t.list.forEach(function(t){t.mess.forEach(function(t){var e=(t.fixedOdds*(1-a/100)).toString();(e=e.substring(0,e.lastIndexOf(".")+4)).toString().includes(".")&&0==+e.toString().substring(e.toString().length-2)?t.price=e.toString().substring(0,e.toString().length-2):e.toString().includes(".")&&0==+e.toString().substring(e.toString().length-1)?t.price=e.toString().substring(0,e.toString().length-1):t.price=e})})})},getOdds:function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.oddsList||(e.oddsList=e.oddsListPar),e.oddsBelong();case 1:case"end":return t.stop()}},t,e)}))()},resetAll:function(){this.allData.forEach(function(t){t.list.forEach(function(t){t.mess&&t.mess.forEach(function(t){t.active=!1,t.model=""})})}),this.submitList=[],this.seletPriceStaue="",this.saveSelectMoney.money="",this.selectFast.list.forEach(function(t,e){t.active=!1}),this.totalCount.number=0,this.totalCount.total=0,this.listRigTemaAnima&&this.listRigTemaAnima.forEach(function(t){t.active=!1})},disabled:function(t){var e=this;this.$nextTick(function(){for(var t=0;0<e.$refs.formDynamic.length;t++){if(t==e.$refs.formDynamic.length-1)return!1;e.$refs.formDynamic[t].setAttribute("disabled",!0),e.$refs.formDynamic[t].style.cursor="not-allowed"}}),this.modal=!1,this.resetAll(),t||this.dNotify("已封盘","warn")},abled:function(){var e=this;this.$nextTick(function(){for(var t=0;0<e.$refs.formDynamic.length;t++){if(t==e.$refs.formDynamic.length-1)return!1;e.$refs.formDynamic[t].removeAttribute("disabled",!1),e.$refs.formDynamic[t].style.cursor="text"}})},seletPrice:function(t,e){t.model=e.price,this.seletPriceStaue="",this.calculationTotal()},clickFocus:function(t){if(!this.isopen)return!1;t.active=!t.active,t.model="",this.seletPriceStaue="",this.saveSelectMoney.money&&t.active&&(t.model=this.saveSelectMoney.money),this.calculationTotal()},keyupInput:function(t){t.model||(this.seletPriceStaue=t.id),this.dInvalidMoney(t.model)||(t.model=""),this.calculationTotal()},keydownInput:function(t){this.seletPriceStaue=""},focusInput:function(t){t.active=!0,this.seletPriceStaue=t.id,this.calculationTotal()},chooseHistory:function(t){this.active.ballHistory=t},publicReview:function(t){if(!t.length)return this.$store.commit("alert/showTipModel",{bool:!0,title:"请选择并输金额!",model:"warn"}),!1;this.modal=!0,this.$refs.betting.getList(t,this.totalCount,this.childNeedMess)},submit:function(a){var i=this;this.submitList=[],this.allData.forEach(function(t){t.list.forEach(function(t){t.mess.forEach(function(t){t.active&&t.model&&i.submitList.push(t)})})});var n=[];this.submitList.forEach(function(t){var e=void 0;e="lhc"==i.$route.meta.series?t.model:(+t.model*+i.totalCount.ratio*+i.totalCount.db).toFixed(2),a&&"dpc-zsp"===a.code?n.push({code:t.title,playway:t.code,odds:t.fixedOdds,money:e,ball:t.ball,attach:""}):n.push({code:t.ball,playway:t.code,odds:t.fixedOdds,money:e,ball:t.title,attach:""})}),this.vpSubmit(n)},vpSubmit:function(a){var i=this;return c()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=3;break}return i.dNotify("您未登录","error"),t.abrupt("return",!1);case 3:return i.confirmbet=!1,t.next=6,i.$http.post(i.$HOST_NAME+"/lottery/submit",{lotteryId:i.$route.meta.id,issue:i.childNeedMess.issue,code:n()(a),rebate:i.rebate});case 6:(e=t.sent)&&200==e.code?(i.confirmbet=!0,i.dNotify(e.data,"success"),i.resetAll(),i.$store.commit("lottery/fetchBetRecord",Date.now()),_.a.vpGetBasicInfo.call(i)):(i.confirmbet=!0,i.dNotify(e.message,"error"));case 8:case"end":return t.stop()}},t,i)}))()}},created:function(){this.isopen?this.abled():this.disabled("1"),"{}"!=n()(this.oddsListPar)&&this.getOdds()},watch:{isopen:function(t){t?this.abled():this.disabled()},oddsListPar:{handler:function(t,e){this.getOdds()},deep:!0}},beforeDestroy:function(){this.resetAll()},components:{vpFastAndSubmit:u.a,vpBetting:l.a,vpDropDown:v,vpRanking:y,vpHistory:w.a},store:S.a};e.default=C},rZWX:function(t,e){},s1t9:function(t,e,a){"use strict";var i=a("Xxa5"),n=a.n(i),s=a("mvHQ"),o=a.n(s),r=a("exGp"),c=a.n(r),l={props:{childNeedMess:{type:Object}},data:function(){return{ball:"第1球",ballList:[],itemList:[],datas:{lastData:[],nowSelect:"",datasTotal:[]},ifTrend:!0,showLengt:1}},methods:{getData:function(e){var a=this;return c()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.ballList=JSON.parse(o()(e)),e){t.next=4;break}return a.ifTrend=!1,t.abrupt("return",!1);case 4:a.ball=e[0].title,a.ballList.forEach(function(t){t.list.forEach(function(t){t.list=t.list.reverse()})}),a.getSecTab(),a.$nextTick(function(){38<=a.showLengt&&(document.querySelector(".decial-3-history").scrollLeft=9e3)});case 8:case"end":return t.stop()}},t,a)}))()},getSecTab:function(e){var a=this;this.ballList.forEach(function(t){a.ball===t.title&&(a.itemList=t.list,e||(a.datas.nowSelect=t.list[0].title))}),this.lastDataFc(),this.$nextTick(function(){38<=a.showLengt&&(document.querySelector(".decial-3-history").scrollLeft=9e3)})},changeTab:function(t){var e=this;this.datas.nowSelect=t.title,this.lastDataFc(),this.$nextTick(function(){38<=e.showLengt&&(document.querySelector(".decial-3-history").scrollLeft=9e3)})},lastDataFc:function(){var f=this;this.datas.datasTotal=[],this.datas.lastData=[];var v=[],p=0;this.itemList.forEach(function(t){t.title===f.datas.nowSelect&&(f.datas.datasTotal=t.list)}),this.datas.datasTotal.forEach(function(t,e){if(0<e&&f.datas.datasTotal[e].ball!==f.datas.datasTotal[e-1].ball){for(var a=[],i=p;i<e;i++)a.push(f.datas.datasTotal[i]);var n=a.length;if(n<8)for(var s=1;s<=8-n;s++)a.push({});v.push({list:a}),p=e}if(e===f.datas.datasTotal.length-1){for(var o=[],r=p;r<=e;r++)o.push(f.datas.datasTotal[r]);var c=o.length;if(c<8)for(var l=1;l<=8-c;l++)o.push({});v.push({list:o});var u=v.length;if((f.showLengt=u)<38)for(var d=1;d<=40-u;d++)v.push({list:[{},{},{},{},{},{},{},{}]});else if(38<=u)for(var h=1;h<=2;h++)v.push({list:[{},{},{},{},{},{},{},{}]});f.handleTurn(v)}})},handleTurn:function(t){var n=this,i=[],s=-1;if(t.forEach(function(t,e){var a=[];8<t.list.length&&!i.length&&-1===s?(a=t.list.splice(8,t.list.length-8),i.push({list:a,index:e,length:8}),t.list.splice(8,t.list.length-8),s=e):7<t.list.length&&i.length&&-1!==s&&t.list[7].name&&i[0].list.length+s>=e?(a=t.list.splice(7,t.list.length-7),i.push({list:a,index:e,length:7}),t.list.splice(7,t.list.length-7),s=e):8<t.list.length&&i.length&&-1!==s&&(a=t.list.splice(8,t.list.length-8),i.push({list:a,index:e,length:8}),t.list.splice(8,t.list.length-8),s=e)}),this.datas.lastData=t,!i.length)return!1;i.forEach(function(t,e){if(8===t.length)for(var a=0;a<t.list.length;a++){if(!n.datas.lastData[t.index+a+1])return!1;n.datas.lastData[t.index+a+1].list[7]=t.list[a]}else if(7===t.length)for(var i=0;i<t.list.length;i++){if(!n.datas.lastData[t.index+i+1])return!1;n.datas.lastData[t.index+i+1].list[6]=t.list[i]}})},selBall:function(t){this.ball=t,this.getSecTab("click")}},watch:{},created:function(){},mounted:function(){},components:{},computed:{}},u={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:i.ifTrend,expression:"ifTrend"}],staticClass:"lottery-luzhu"},[n("div",{staticClass:"decial-3-title"},[n("Select",{staticClass:"select-common-css",on:{"on-change":i.selBall},model:{value:i.ball,callback:function(t){i.ball=t},expression:"ball"}},i._l(i.ballList,function(t){return n("Option",{key:t.title,attrs:{value:t.title}},[i._v(i._s(t.title))])}),1),i._v(" "),n("span",i._l(i.itemList,function(e,t){return n("label",{key:t,class:{active:i.datas.nowSelect===e.title,over:4<i.datas.nowSelect.length},on:{click:function(t){return i.changeTab(e)}}},[i._v("\n            "+i._s(e.title)+"\n        ")])}),0)],1),i._v(" "),n("div",{staticClass:"decial-3-history"},i._l(i.datas.lastData,function(t,a){return n("div",{key:a,staticClass:"list"},i._l(t.list,function(t,e){return n("div",{key:e,staticClass:"list-item",style:{zIndex:i.datas.lastData.length+100-e-a}},[n("span",{class:{red:"大"===t.ball||"双"===t.ball||"龙"===t.ball,blue:"小"===t.ball||"单"===t.ball||"虎"===t.ball||t.ball,green:"和"===t.ball}},[i._v(i._s(t.ball))])])}),0)}),0)])},staticRenderFns:[]},d=a("VU/8")(l,u,!1,null,null,null);e.a=d.exports},xzxg:function(t,e,a){"use strict";var i=a("mvHQ"),o=a.n(i),n=a("Xxa5"),v=a.n(n),s=a("exGp"),r=a.n(s),p=a("YtJ0"),c=a("mtWM"),l=a.n(c),m=a("7+uW"),u=a("zL8q");a.n(u);e.a=new function(){var e,a,i=(e=r()(v.a.mark(function t(e){var a,i;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/frontend/"+(m.default.prototype.$HOST_NAME?m.default.prototype.$HOST_NAME.substring(10):"v1")+"/member/info",{headers:{Accept:"application/x.tg.v2+json"}});case 2:if(200===(a=t.sent).code)return i=a.data,localStorage.userinfo=o()(i),t.abrupt("return",i);t.next=9;break;case 9:d.removeCache();case 10:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)}),n=(a=r()(v.a.mark(function t(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.call(e,m.default.prototype.$HOST_NAME+"/member/logout",{});case 2:200===t.sent.code?(d.removeCache(),window.location.reload()):d.removeCache();case 4:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),d=this,s=!0;this.vpGetBasicInfo=r()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,i(this);case 4:(e=t.sent)&&p.a.commit("mainState/reloadUserinfo",e);case 6:case"end":return t.stop()}},t,this)})),this.expiredPart=function(t){if(!t)return!1;var e=t.split(".")[1],a={enKey:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",deKey:new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),encode:function(t){for(var e=new Array,a=void 0,i=void 0,n=void 0,s=0;s+3<=t.length;)a=t.charCodeAt(s++),i=t.charCodeAt(s++),n=t.charCodeAt(s++),e.push(this.enKey.charAt(a>>2),this.enKey.charAt((a<<4)+(i>>4)&63)),e.push(this.enKey.charAt((i<<2)+(n>>6)&63),this.enKey.charAt(63&n));return s<t.length&&(a=t.charCodeAt(s++),e.push(this.enKey.charAt(a>>2)),s<t.length?(i=t.charCodeAt(s),e.push(this.enKey.charAt((a<<4)+(i>>4)&63)),e.push(this.enKey.charAt(i<<2&63),"=")):e.push(this.enKey.charAt(a<<4&63),"==")),e.join("")},decode:function(t){var e=[],a=void 0,i=void 0,n=void 0,s=void 0,o=0;for(t=t.replace(/[^A-Za-z0-9+/]/g,"");o+4<=t.length;)a=this.deKey[t.charCodeAt(o++)],i=this.deKey[t.charCodeAt(o++)],n=this.deKey[t.charCodeAt(o++)],s=this.deKey[t.charCodeAt(o++)],e.push(String.fromCharCode((a<<2&255)+(i>>4),(i<<4&255)+(n>>2),(n<<6&255)+s));return o+1<t.length&&(a=this.deKey[t.charCodeAt(o++)],i=this.deKey[t.charCodeAt(o++)],o<t.length?(n=this.deKey[t.charCodeAt(o)],e.push(String.fromCharCode((a<<2&255)+(i>>4),(i<<4&255)+(n>>2)))):e.push(String.fromCharCode((a<<2&255)+(i>>4)))),e.join("")}},i=JSON.parse(a.decode(e)),n=Math.floor((new Date).getTime()/1e3);return{exp:i.exp,timestamp:n}},this.expired=function(){var t=d.expiredPart(localStorage.token);if(t.exp-t.timestamp<=1800&&0<=t.exp-t.timestamp){if(!s)return!1;s=!1,setTimeout(function(){d.vpReloadToken()},5e3)}else t.exp-t.timestamp<0&&d.removeCache()},this.vpReloadToken=r()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,l.a.post(m.default.prototype.$HOST_NAME+"/member/refresh",{device:"pc"});case 4:200===(e=t.sent).code?(localStorage.setItem("token",e.data),s=!0):d.removeCache();case 6:case"end":return t.stop()}},t,this)})),this.vpSetConfig=function(){var a=this;if(localStorage.configTime)return d.vpGetBasWebsoc(),!1;m.default.prototype.$nextTick(r()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(m.default.prototype.$HOST_NAME+"/config",{});case 2:(e=t.sent)&&200===e.code&&(e.data.siteConfig.siteId=e.data.id,localStorage.setItem("configTime",e.data.data?e.data.data.updated_at:e.data.updated_at),localStorage.setItem("config",e.data.data?o()(e.data.data.siteConfig):o()(e.data.siteConfig)),d.vpGetBasWebsoc());case 4:case"end":return t.stop()}},t,a)})))},this.vpReloadConfig=r()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(m.default.prototype.$HOST_NAME+"/config",{});case 2:200===(e=t.sent).code&&(e.data.siteConfig.siteId=e.data.id,localStorage.setItem("configTime",e.sign),localStorage.setItem("config",e.data.data?o()(e.data.data.siteConfig):o()(e.data.siteConfig)));case 4:case"end":return t.stop()}},t,this)}));var h=!0;function f(t,e){return l.a.post(t,e)}this.vpGetBasWebsoc=function(){var u=this;if(!h)return!1;m.default.prototype.$nextTick(r()(v.a.mark(function t(){var e,a,i,n,s,o,r,c,l;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(t){for(var e="",a=0;a<t;a++){var i=Math.ceil(35*Math.random());e+=r[i]}return e},t.next=3,f(m.default.prototype.$HOST_NAME+"/websocket",{});case 3:if(200!==(e=t.sent).code){t.next=8;break}h=!1,t.next=10;break;case 8:if(e){t.next=10;break}return t.abrupt("return",!1);case 10:if(a=e.data.wss,i={},s=n="",o=JSON.parse(localStorage.config).siteId,r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],localStorage.userinfo)try{l=JSON.parse(localStorage.userinfo),n=l.uid}catch(t){localStorage.setItem("userinfo","")}"test"===localStorage.Public_User?s="test":"vm"===localStorage.Public_User?s="vm":"v1"===localStorage.Public_User&&localStorage.token?s="member":(s="anonymous",n=o+"_"+(new Date).getTime()+c(16)),i.socket=Stomp.client(a),i.headers={id:n,group:s,siteid:o},i.message={all:"/topic/public",group:"/group/"+i.headers.group,site:"/group/"+o,alone:"/user/"+i.headers.group+"_"+i.headers.id+"/message"},i.socket.connect(i.headers,function(t){i.socket.subscribe(i.message.all,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):d.publicInform(JSON.parse(t.body))}),i.socket.subscribe(i.message.group,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):d.publicInform(JSON.parse(t.body))}),i.socket.subscribe(i.message.alone,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):d.publicInform(JSON.parse(t.body))}),i.socket.subscribe(i.message.site,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):d.publicInform(JSON.parse(t.body))})},function(t){h=!0,i.socket.disconnect(),setTimeout(function(){d.vpGetBasWebsoc()},5e3)});case 22:case"end":return t.stop()}},t,u)})))},this.publicInform=function(t){if("user.lotteryOpen"===t.type)return!1;Object(u.Notification)({title:t.typeName?t.typeName:"温馨提示",message:t.message,type:"success"})},this.logout=r()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,n(this);case 4:t.sent;case 5:case"end":return t.stop()}},t,this)})),this.set_code_show=r()(v.a.mark(function t(){var e,a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/frontend/v1/is-show-captcha",{headers:{Accept:"application/x.tg.v2+json"}});case 2:e=t.sent,(a=e.data)&&200===a.code&&(localStorage.is_code_show=a.data);case 5:case"end":return t.stop()}},t,this)})),this.removeCache=function(){if(localStorage.removeItem("token"),localStorage.removeItem("userinfo"),p.a.commit("mainState/resetUserinfo",null),"/frontend/vm"===m.default.prototype.$HOST_NAME)return!1;localStorage.removeItem("Public_User"),m.default.prototype.$HOST_NAME="/frontend/v1"},this.setCache=function(t,e,a){if(localStorage.setItem("userinfo",o()(t.data.userInfo||t.data.userinfo)),localStorage.setItem("token",t.data.token),a||p.a.commit("mainState/reloadUserinfo",t.data.userInfo||t.data.userinfo),"/frontend/vm"===m.default.prototype.$HOST_NAME)return!1;localStorage.setItem("Public_User",e),m.default.prototype.$HOST_NAME="/frontend/"+e},this.setCachereg=function(t,e,a){if(localStorage.setItem("userinfo",o()(t.data.userInfo||t.data.userinfo)),localStorage.setItem("token",t.data.token),a||p.a.commit("mainState/reloadUserinfo",t.data.userInfo||t.data.userinfo),"/frontend/vm"===m.default.prototype.$HOST_NAME)return!1;localStorage.setItem("Public_User",e),m.default.prototype.$HOST_NAME="/frontend/"+e}}}},[57]);