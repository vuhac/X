webpackJsonp([20],{"+PBC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("fFR7"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=n("hzl2");var r=function(t){n("A77f")},c=n("VU/8")(i.a,a.a,!1,r,null,null);e.default=c.exports},"3T2u":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("ogKO"),i=(n.n(o),n("xZNP")),s=(n.n(i),n("KSAD"));n.n(s)},A77f:function(t,e){},KSAD:function(t,e){},Uuu8:function(t,e,n){"use strict";e.a=function(t){e=t.parent&&t.parent.$router,n=t.props,o=n.to,i=n.url,s=n.replace,o&&e?e[s?"replace":"push"](o):i&&(s?location.replace(i):location.href=i);var e,n,o,i,s},n.d(e,"b",function(){return o});var o={url:String,replace:Boolean,to:[String,Object]}},fFR7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n("p7J7"));n("3T2u");var i=a(n("qhTv")),s=n("6cYu");function a(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[i.default],name:"App",components:{IosAlert:s.IosAlert},created:function(){var t=this;window.document.title=window.siteConfig.title,localStorage.theme||(this.$store.state.main.theme=window.siteConfig.defaultTheme),this.changeTheme();var e=function e(){if(t.$store.state.main.config){if("on"===t.$store.state.main.config.close.status)return void t.$router.push("/code/5000");t.$store.dispatch("agent/getRefundRebate").then(function(){t.$store.dispatch("user/refreshBalance",{callback:function(e){e.code&&200!==e.code&&(e.message.includes("设备上登录")||e.message.includes("请登录"))&&(t.$store.commit("user/clean"),t.$router.push("/"),t.toastText(e.message,window.TOAST_POSITION.TOP))}}),t.$store.dispatch("user/refreshBank").then()});var n=t.$store.state.main.config.service.find(function(t){return"on"===t.status});if(n){var o=t.tabs.find(function(t){return"客服"===t.name});o&&(o.link=n.url)}}else t.$store.state.main.config=JSON.getObjByLocalStorage("config"),t.$store.state.main.config?e():t.$store.dispatch("main/setConfig").then(function(){t.$store.state.main.config?e():t.$vux.toast.show("网络错误",window.TOAST_POSITION.TOP)})};this.$store.dispatch("main/setConfig").then(function(){t.$store.dispatch("main/getWebSocket").then(function(e){t.$stomp.init(e.data.wss),t.$stomp.on("user.rebateBonus",function(e){t.userMessage(e)}),t.$stomp.on("user.withdrawCheck",function(e){t.userMessage(e)}),t.$stomp.on("user.lottery",function(e){t.userMessage(e)}),t.$stomp.on("user.DepositOfflineAudit",function(e){t.userMessage(e)}),t.$stomp.on("user.DepositOnlineAudit",function(e){t.userMessage(e)}),t.$stomp.on("user.WithdrawalsAudit",function(e){t.userMessage(e)}),t.$stomp.on("user.DepositOfflineAudit",function(e){t.userMessage(e)}),t.$stomp.on("user.DepositOnlineAudit",function(e){t.userMessage(e)}),t.$stomp.on("user.WithdrawalsAudit",function(e){t.userMessage(e)}),t.$stomp.on("user.EmergencyFinance",function(e){t.userMessage(e)})}).catch(function(t){console.warn(t),console.log("====================================="),console.log("获取websocket链接失败")}),t.$store.dispatch("user/refreshInfo").then(function(){e()}).catch(function(){e()})})},mounted:function(){var t=this;this.$refs["tab-bar"]?this.$store.state.main.tabHeight=this.$refs["tab-bar"].$el.offsetHeight:this.$nextTick(function(){t.$refs["tab-bar"]&&(t.$store.state.main.tabHeight=t.$refs["tab-bar"].$el.offsetHeight)})},updated:function(){this.$refs["tab-bar"]&&(this.$store.state.main.tabHeight=this.$refs["tab-bar"].$el.offsetHeight)},data:function(){return{tabs:[{name:"首页",icon:"icon iconfont h5-icon-foot-home text-color",link:"/home"},{name:"存款",icon:"icon iconfont h5-icon-foot-deposit",link:"/save"},{name:"客服",icon:"icon iconfont h5-icon-foot-customer",link:""},{name:"投注记录",icon:"icon iconfont h5-icon-foot-compare",link:"/user/record"},{name:"我的",icon:"icon iconfont h5-icon-foot-my",link:"/user"}]}},watch:{$route:function(){},theme:"changeTheme",tabIndex:function(t,e){var n=this.tabs[t];if(n&&"客服"===n.name){this.tabIndex=e;var o=this.getKF();o?window.tryOpen(o):this.toastText("暂无客服",window.TOAST_POSITION.MIDDLE)}else this.$router.push(n.link)},"$store.state.user.userInfo":function(t,e){(t&&!e||t&&e&&t.uid!==e.uid)&&this.$stomp.reInit()}},computed:{iosAlert:function(){return this.$store.state.main.iosAlert},theme:function(){return this.$store.state.main.theme},to:function(){return-1===this.$route.fullPath.indexOf("/games")?this.$route.fullPath:this.$route.path},showTab:function(){return this.$route.meta.tab},tabIndex:{get:function(){return this.$store.state.main.tabIndex},set:function(t){this.$store.state.main.tabIndex=t}},appClass:function(){return{android:this.$device.isAndroid,iphone:this.$device.isIphone}}},methods:{userMessage:function(t){o.default.alert({title:t.typeName||"温馨提示",message:t.message}).then(function(){})},changeTheme:function(){window.document.body.className="theme-"+this.$store.state.main.theme}}}},hzl2:function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",class:t.appClass,attrs:{id:"app"}},[n("transition",{attrs:{name:t.$store.state.main.animation}},[n("router-view",{key:t.to})],1),t._v(" "),n("vux-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.showTab,expression:"showTab"},{name:"no-touch-move",rawName:"v-no-touch-move"}],key:t.to,ref:"tab-bar",staticStyle:{position:"fixed"},attrs:{id:"tab-bar","icon-class":"tab-icon-class"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.tabs,function(e){return n("vux-tabbar-item",{key:e.name,attrs:{link:e.link}},[n("i",{class:e.icon,attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",{staticClass:"tab-lab",attrs:{slot:"label"},slot:"label"},[t._v(t._s(e.name))])])}),1),t._v(" "),n("vux-loading",{staticClass:"main-loading",attrs:{show:!!t.$store.state.main.loadingText,text:t.$store.state.main.loadingText}}),t._v(" "),n("ios-alert",{attrs:{"ok-callback":t.iosAlert.okCallback,"show-no":t.iosAlert.showNo},model:{value:t.iosAlert.show,callback:function(e){t.$set(t.iosAlert,"show",e)},expression:"iosAlert.show"}},[t._v(t._s(t.iosAlert.content)+"\n  ")])],1)},staticRenderFns:[]};e.a=o},p7J7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("SpjQ"),i=n("fAfE"),s=n("aHTP"),a={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},r=n("llsH"),c=n("Wc07"),l=n("I0Ce"),u=n.n(l),h=n("WBOa"),f=Object(s.g)("overlay"),d=f[0],m=f[1];function p(t,e,n,i){var s=Object(o.a)({zIndex:e.zIndex},e.customStyle);return t("transition",{attrs:{name:"van-fade"}},[t("div",u()([{directives:[{name:"show",value:e.visible}],style:s,class:[m(),e.className],on:{touchmove:function(t){t.preventDefault(),t.stopPropagation()},click:function(t){Object(h.a)(i,"click",t)}}},Object(h.b)(i,!0)]))])}p.props={zIndex:Number,className:null,visible:Boolean,customStyle:Object};var v,b=d(p),g={className:"",customStyle:{}};function $(){if(a.top){var t=a.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function y(){if(v||(v=Object(h.c)(b,{on:{click:$}})),a.top){var t=a.top,e=t.vm,n=t.config,i=e.$el,s=i&&i.parentNode?i.parentNode:document.body;s&&s.appendChild(v.$el),Object(o.a)(v,g,n,{visible:!0})}else v.visible=!1}function O(t){var e=a.stack;e.length&&(a.top.vm===t?(e.pop(),y()):a.stack=e.filter(function(e){return e.vm!==t}))}var k=n("gmnZ"),x={mixins:[r.a],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],getContainer:[String,Function],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},getContainer:function(){this.move()},overlay:function(){this.renderOverlay()}},mounted:function(){this.getContainer&&this.move(),this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(a.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(c.b)(document,"touchstart",this.touchStart),Object(c.b)(document,"touchmove",this.onTouchMove),a.lockCount||document.body.classList.add("van-overflow-hidden"),a.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(a.lockCount--,Object(c.a)(document,"touchstart",this.touchStart),Object(c.a)(document,"touchmove",this.onTouchMove),a.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,O(this),this.$emit("input",!1))},move:function(){var t,e=this.getContainer;e?t="string"==typeof e?document.querySelector(e):e():this.$parent&&(t=this.$parent.$el),t&&t!==this.$el.parentNode&&t.appendChild(this.$el),this.overlay&&y()},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(k.b)(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,s=n.scrollTop,a="11";0===s?a=i>=o?"00":"01":s+i>=o&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||(t.preventDefault(),t.stopPropagation())},renderOverlay:function(){var t,e,n=this;!this.$isServer&&this.value&&(this.overlay?(t=this,e={zIndex:a.zIndex++,className:this.overlayClass,customStyle:this.overlayStyle},a.stack.some(function(e){return e.vm===t})||(a.stack.push({vm:t,config:e}),y())):O(this),this.$nextTick(function(){n.$el.style.zIndex=a.zIndex++}))}}},C=n("Uuu8"),w=n("Hj32"),S=Object(s.g)("button"),B=S[0],T=S[1];function I(t,e,n,o){var i=e.tag,s=e.type,a=e.disabled,r=e.loading,c=e.hairline,l=e.loadingText,f=[T([s,e.size,{loading:r,disabled:a,hairline:c,block:e.block,plain:e.plain,round:e.round,square:e.square,"bottom-action":e.bottomAction}]),{"van-hairline--surround":c}];return t(i,u()([{class:f,attrs:{type:e.nativeType,disabled:a},on:{click:function(t){r||a||(Object(h.a)(o,"click",t),Object(C.a)(o))},touchstart:function(t){Object(h.a)(o,"touchstart",t)}}},Object(h.b)(o)]),[r?[t(w.a,{attrs:{size:e.loadingSize,color:"default"===s?void 0:""}}),l&&t("span",{class:T("loading-text")},[l])]:t("span",{class:T("text")},[n.default?n.default():e.text])])}I.props=Object(o.a)({},C.b,{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var j,A=B(I),z=Object(s.g)("dialog"),_=z[0],N=z[1],M=z[2],P=_({mixins:[x],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)}},render:function(t){var e,n=this;if(this.shouldRender){var o=this.title,i=this.message,s=this.messageAlign,a=this.slots(),r=o&&t("div",{class:N("header",{isolated:!i&&!a})},[o]),c=(a||i)&&t("div",{class:N("content")},[a||t("div",{domProps:{innerHTML:i},class:N("message",(e={"has-title":o},e[s]=s,e))})]),l=this.showCancelButton&&this.showConfirmButton,u=t("div",{class:["van-hairline--top",N("footer",{buttons:l})]},[this.showCancelButton&&t(A,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||M("cancel")},class:N("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&t(A,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||M("confirm")},class:[N("confirm"),{"van-hairline--left":l}],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})]);return t("transition",{attrs:{name:"van-dialog-bounce"}},[t("div",{directives:[{name:"show",value:this.value}],class:[N(),this.className]},[r,c,u])])}}});function D(t){return s.f?Promise.resolve():new Promise(function(e,n){j&&Object(s.d)(j.$el)||(j&&j.$destroy(),(j=new(i.a.extend(P))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){j.value=t})),Object(o.a)(j,D.currentOptions,t,{resolve:e,reject:n})})}D.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(t){j["confirm"===t?"resolve":"reject"](t)}},D.alert=D,D.confirm=function(t){return D(Object(o.a)({showCancelButton:!0},t))},D.close=function(){j&&(j.value=!1)},D.setDefaultOptions=function(t){Object(o.a)(D.currentOptions,t)},D.resetDefaultOptions=function(){D.currentOptions=Object(o.a)({},D.defaultOptions)},D.resetDefaultOptions(),D.install=function(){i.a.use(P)},i.a.prototype.$dialog=D;e.default=D},xZNP:function(t,e){}});