webpackJsonp([62],{"14oM":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("MDBx"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var a=i("NXdd");var r=function(t){i("I4JQ")},c=i("VU/8")(o.a,a.a,!1,r,"data-v-5acabbaa",null);e.default=c.exports},CHsh:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("a",{staticClass:"app",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("download")}}},[t._v("APP下载")]),t._v(" "),i("img",{staticClass:"logo",attrs:{src:"/m/static/img/logo.png?v=2019-05-15T15:33:12",alt:""}}),t._v(" "),t.user?i("a",{staticClass:"action exit",attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[t._v("\n    退出\n  ")]):i("router-link",{staticClass:"action login",attrs:{tab:"a",href:"javascript:void(0)",to:"/admin/login"}},[t._v("\n    登录/注册\n  ")])],1)},staticRenderFns:[]};e.a=s},DQ9D:function(t,e){},DerN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("TYHj"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var a=i("NrzC");var r=function(t){i("U2Iv")},c=i("VU/8")(o.a,a.a,!1,r,"data-v-0dcab89a",null);e.default=c.exports},I4JQ:function(t,e){},MDBx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(i("NYUQ")),o=c(i("DerN")),n=i("6cYu"),a=c(i("qhTv")),r=c(i("ypy9"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[a.default,r.default],name:"HomeXPJ",components:{ViewPage:n.ViewPage,HomeHeader:s.default,JMarquee:o.default},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{hotLen:14,animation:"",listHeight:0,chessList:[],listTop:[],listContent:[]}},computed:{scrollHeight:function(){return 7.5*this.$store.state.main.tabHeight/document.documentElement.clientWidth+"rem"}},created:function(){var t=this;this.$store.dispatch("main/gameSort",{id:"20001|20002",callback:function(e){e&&(t.listTop=e[20001]||[],t.listContent=e[20002]||[])}})}}},NXdd:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-page",[i("home-header",{attrs:{slot:"header",data:t.data},on:{logout:t.onLogout,download:t.onDownload},slot:"header"}),t._v(" "),i("div",{staticClass:"home-content",attrs:{slot:"content"},slot:"content"},[i("vux-swiper",{ref:"swiper",attrs:{list:t.swiperList,"show-desc-mask":!1,auto:"",loop:"","aspect-ratio":.4,"dots-position":"center","show-dots":!1},on:{"on-click-list-item":t.swiperItemClick}}),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"panel"},[i("j-marquee",{attrs:{lists:t.notice,"font-size":"0.28rem",height:"0.7rem"}},[i("div",{staticClass:"notice-icon",attrs:{slot:"icon"},slot:"icon"})])],1)]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.listTop,function(e,s){return i("li",{key:s,staticClass:"item"},[i("img",{staticClass:"icon",attrs:{src:e.icon,alt:""},on:{click:function(i){return t.onGameClick(e)}}}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}),0),t._v(" "),i("ul",{staticClass:"list",staticStyle:{"margin-top":"0.2rem"}},t._l(t.listContent,function(e,s){return i("li",{key:s,staticClass:"item"},[i("img",{staticClass:"icon",attrs:{src:e.icon,alt:""},on:{click:function(i){return t.onGameClick(e)}}}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}),0),t._v(" "),i("div",{staticStyle:{width:"100%"},style:{height:t.$store.state.main.tabHeight+"px"}}),t._v(" "),t._t("default")],2)],1)},staticRenderFns:[]};e.a=s},NYUQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("NbF1"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var a=i("CHsh");var r=function(t){i("DQ9D")},c=i("VU/8")(o.a,a.a,!1,r,"data-v-291aca1c",null);e.default=c.exports},NbF1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Header",computed:{user:function(){return this.$store.state.user.userInfo}},props:{data:{type:Object,default:function(){return{}}}},methods:{logout:function(){this.$emit("logout")}}}},NrzC:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"marquee",style:{"font-size":t.fontSize,height:t.height,"line-height":t.height}},[i("div",{staticClass:"marquee-icon",style:{height:t.height,width:t.height}},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"wrap",style:{"font-size":t.fontSize,height:t.height,"line-height":t.height}},[i("div",{staticClass:"content",style:{"font-size":t.fontSize,height:t.height,"line-height":t.height,width:this.width+"px","animation-duration":this.width/36+"s"},domProps:{innerHTML:t._s(t.text)}})])])},staticRenderFns:[]};e.a=s},TYHj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,o=i("qhTv"),n=(s=o)&&s.__esModule?s:{default:s};e.default={mixins:[n.default],name:"JMarquee",props:{lists:{type:Array,required:!0},fontSize:{type:String,default:""},height:{type:String,default:""}},data:function(){return{text:"",width:""}},watch:{lists:{handler:function(){var t=this.getTextSize(this.lists.join(" "),"0.24rem");this.text=t.text,this.width=t.width},deep:!0}},methods:{getTextSize:function(t,e){t=(t=t.replace(/<[^<>]+>/g,"")).replace("\n","");var i=document.createElement("span"),s={};return s.width=i.offsetWidth,s.height=i.offsetHeight,i.style.visibility="hidden",i.style.fontSize=e,i.style.display="inline-block",i.style.whiteSpace="nowrap",document.body.appendChild(i),i.innerHTML=t,s.text=t,s.width=parseFloat(window.getComputedStyle(i).width)-s.width,s.height=parseFloat(window.getComputedStyle(i).height)-s.height,document.body.removeChild(i),s}}}},U2Iv:function(t,e){},qhTv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{jroll:null,wrapper:null,chinaNum:{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十"},pullDownRefreshObj:{observeDOM:!0,click:!0,probeType:1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,txt:"刷新成功"},pullUpLoadObj:{observeDOM:!0,click:!0,probeType:1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,txt:"刷新成功"}}},mounted:function(){this.refreshMeta()},methods:{isApp:function(){return!!this.$route.query.app},getKF:function(){var t=this.$store.state.main.config.service.find(function(t){return"on"===t.status});return t?t.url:""},onGameClick:function(t){var e=this;switch(t.type){case"list":this.$router.push("/home/type/"+t.id);break;case"lottery":localStorage.token?"test"===localStorage.Public_User?this.toastText("彩票游戏暂不支持试玩",window.TOAST_POSITION.MIDDLE):this.$router.push("/lottery/"+t.id):this.$router.push("/admin/login");break;case"lottery-list":this.$router.push("/home/type/"+t.id);break;case"game":if(localStorage.token){var i=window.open("","_blank");this.$store.dispatch("games/gameLoginNew",t.id).then(function(t){if(200===t.code)return i?i.location.href=t.data.url:window.location.href=t.data.url,!0;t.message?(i&&i.close(),e.toastText(t.message,window.TOAST_POSITION.TOP)):t.msg&&(i&&i.close(),e.toastText(t.msg,window.TOAST_POSITION.TOP))})}else this.$router.push("/admin/login");break;case"game-list":this.$router.push("/home/game/"+t.id);break;case"other":switch(t.id.toString()){case"99998":this.$router.push("/activity")}}},onLogout:function(){var t=this;this.$store.dispatch("user/logout",{callback:function(e){e?t.toastText(e,window.TOAST_POSITION.MIDDLE):(t.toastText("退出成功",window.TOAST_POSITION.MIDDLE),t.$stomp.reInit(),setTimeout(function(){t.$router.replace("/")},100))}})},testLogin:function(t,e){var i=this;this.$store.dispatch("user/testLogin",{callback:function(s){200===s.code?(i.toastText("试玩登陆成功",window.TOAST_POSITION.MIDDLE),"function"==typeof t?t():"function"==typeof e&&e(),setTimeout(function(){i.$stomp.reInit()},1e3)):(i.toastText(s.message,window.TOAST_POSITION.MIDDLE),"function"==typeof e&&e())},errBack:e})},checkGameTypeShow:function(t){if(!this.siteConfig.gameType||!this.siteConfig.gameType.length)return!0;switch(t){case"彩票返点":case"彩票":return this.siteConfig.gameType.includes("lottery");case"棋牌返水":case"棋牌":return this.siteConfig.gameType.includes("chess");case"电子返水":case"电子":return this.siteConfig.gameType.includes("slot");case"体育返水":case"体育":return this.siteConfig.gameType.includes("sport");case"视讯返水":case"视讯":return this.siteConfig.gameType.includes("live");default:return!0}},showIosAlert:function(t){this.$store.commit("main/iosAlert",t)},checkAgent:function(t){return!!t||(this.toastText("请输入邀请码",window.TOAST_POSITION.MIDDLE),!1)},refreshMeta:function(){this.meta=this.$route.meta,this.$store.state.main.showTab=!!this.meta.tab},checkUserForLogin:function(t){return t?!!/^[A-z0-9]{5,20}$/.test(t)||(this.toastText("帐号5-20位字母或数字",window.TOAST_POSITION.MIDDLE),!1):(this.toastText("帐号不能为空",window.TOAST_POSITION.MIDDLE),!1)},checkUserForRegister:function(t,e){return t?!!/^[A-z0-9]{6,10}$/.test(t)||(this.toastText("帐号6-10位字母或数字",e||window.TOAST_POSITION.MIDDLE),!1):(this.toastText("帐号不能为空",e||window.TOAST_POSITION.MIDDLE),!1)},checkPassword:function(t){return t?!!/^[A-z0-9]{6,20}$/.test(t)||(this.toastText("密码6-20位字母或数字",window.TOAST_POSITION.MIDDLE),!1):(this.toastText("密码不能为空",window.TOAST_POSITION.MIDDLE),!1)},checkPasswordForRegister:function(t){return t?!!/^[A-z0-9]{8,20}$/.test(t)||(this.toastText("密码8-20位字母或数字",window.TOAST_POSITION.MIDDLE),!1):(this.toastText("密码不能为空",window.TOAST_POSITION.MIDDLE),!1)},checkPassword2:function(t,e){return t===e||(this.toastText("两次输入的密码不一样",window.TOAST_POSITION.MIDDLE),!1)},checkCode:function(t){if(t)return!!/[\d]{4}/.test(t)||(this.toastText("验证码为4位数字",window.TOAST_POSITION.MIDDLE),!1);this.toastText("请输入验证码",window.TOAST_POSITION.MIDDLE)}},watch:{"$route.meta.id":"refreshMeta"},computed:{pageLoading:{get:function(){return this.$store.state.vux.pageLoading},set:function(t){this.$store.state.vux.pageLoading=t}},options:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:!1}},publicStaticHost:function(){return this.$store.state.main.config?this.$store.state.main.config.statics:"/"}},beforeDestroy:function(){this.$store.state.main.loadingText=""}}},ypy9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{swiperList:[],notice:[],games:[],hots:[],noticeTimer:null}},created:function(){var t=this;this.getNotice(),this.getBanner(),this.getHot();var e=void 0,i=void 0,s=void 0,o=void 0;!function n(){t.$refs.swiper?(t.$refs.swiper.$el.addEventListener("touchstart",function(n){s=e=n.touches[0].pageX,o=i=n.touches[0].pageY,t.moveLen=0}),t.$refs.swiper.$el.addEventListener("touchmove",function(n){var a=Math.abs(n.touches[0].pageX-e),r=Math.abs(n.touches[0].pageY-i);a>=r&&n.stopPropagation(),a=Math.abs(n.touches[0].pageX-s),r=Math.abs(n.touches[0].pageY-o),t.moveLen+=Math.sqrt(a*a+r*r),s=n.touches[0].pageX,o=n.touches[0].pageY},!1)):setTimeout(n,500)}()},beforeDestroy:function(){window.clearIntervalByIframe(this.noticeTimer)},methods:{onDownload:function(){this.$device.isAndroid?this.siteConfig.download.android?this.siteConfig.autoDownload.android?window.location.href=this.siteConfig.download.android:this.$router.push("/download"):(this.$store.state.main.iosAlert.content="暂不支持安卓APP下载",this.$store.state.main.iosAlert.show=!0):this.siteConfig.download.ios?this.siteConfig.autoDownload.ios?window.location.href=this.siteConfig.download.ios:this.$router.push("/download"):(this.$store.state.main.iosAlert.content="暂不支持苹果APP下载",this.$store.state.main.iosAlert.show=!0)},getBanner:function(){var t=this;this.$store.dispatch("main/getPosition",{data:{position:"banner",clientType:"h5"},callback:function(e){if(200===e.data.code){var i=e.data.data[0];i&&(t.downloadAppTarget=i.downloadAppTarget,t.swiperList=i.body.map(function(t){return{link:t.targets,img:t.img,data:t}}))}}})},getNotice:function(){var t=this;this.$store.dispatch("main/getLantern",{callback:function(e){200===e.code?t.notice=e.data.data.map(function(t){return t.description}):t.notice=[]}})},onTest:function(){var t=this;this.$store.dispatch("user/testLogin",{callback:function(e){200===e.code?t.toastText("登录试玩成功","middle"):t.toastText("登录试玩失败","middle")}})},onReg:function(){this.$router.push("/admin/register")},onLogin:function(){this.$router.push("/admin/login")},swiperItemClick:function(t){if(this.moveLen<=20&&t.link)switch(t.data.foward_type){case"1":window.location.href=t.data.targets;break;case"2":this.$router.push("/home/type/10003");break;case"3":this.$router.push("/home/type/10000");break;case"4":this.$router.push("/home/type/10004");break;case"5":this.$router.push("/home/type/10001");break;case"6":this.$router.push("/home/type/10002");break;case"7":this.$router.push("/home/type/10005");break;case"8":this.$router.push("/activity");break;default:window.location.href=t.data.targets}},getHot:function(){var t=this;this.$store.dispatch("main/gameSort",{id:"30001",callback:function(e){e&&(t.hots=e[30001]||[])}})}}}}});