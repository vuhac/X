webpackJsonp([65],{HleT:function(t,e,a){var i=a("Z3Ap");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("04c9e125",i,!0,{})},LjVS:function(t,e,a){"use strict";a.d(e,"a",function(){return f}),a.d(e,"c",function(){return h}),a.d(e,"b",function(){return g});var i=a("//Fk"),r=a.n(i),n=a("Dd8w"),o=a.n(n),l=a("7+uW"),s=a("mtWM"),d=a.n(s),c=a("YtJ0"),p=a("xzxg"),u=a("mw3O"),f=function(t,e){return d()({url:""+t,method:"post",data:o()({},e)})};d.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",d.a.defaults.timeout=2e4,d.a.defaults.transformRequest=[function(t){return u.stringify(t)}],d.a.interceptors.request.use(function(t){return t.headers.Authorization=""+localStorage.token,t},function(t){return r.a.reject(t)}),p.a.vpSetConfig(),d.a.interceptors.response.use(function(t){if(t.data.sign>localStorage.getItem("configTime")&&!t.config.url.includes("/config")&&p.a.vpReloadConfig(),5003===t.data.code||5002===t.data.code)return localStorage.removeItem("userBank"),p.a.removeCache(),c.a.commit("alert/showTipModel",{bool:!0,title:"您未登录！",model:"warn"}),!1;if(5e3===t.data.code)p.a.vpSetConfig(),location.href="/static/public/html/weihu/index.html";else{if(5005===t.data.code)return c.a.commit("alert/showTipModel",{bool:!0,title:t.data.message,model:"warn"}),window.history.back(-1),!1;4e3===t.data.code&&(location.href="/static/public/html/feifa/index.html")}return localStorage.token&&!t.config.url.includes("/member/refresh")&&p.a.expired(localStorage.token),200===t.data.code?t.data:5006!==t.data.code&&(c.a.commit("alert/showTipModel",{bool:!1,title:t.data.message,model:"warn"}),t.data)},function(t){return t.request.responseURL.indexOf("/member/balance")<=-1&&c.a.commit("alert/showTipModel",{bool:!0,title:"网络异常,请稍后重试。",model:"warn"}),t});var h=function(t,e){return d()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(l.default.prototype.$HOST_NAME?l.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+t,method:"post",data:o()({},e)})},g=function(t,e){return d()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(l.default.prototype.$HOST_NAME?l.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+t,method:"get",params:o()({},e)})};l.default.prototype.$getS=g,l.default.prototype.$http=d.a,l.default.prototype.$postS=h},Z3Ap:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.fishing_main[data-v-57605bb8]{position:relative!important;height:900px;background:url("/static/ecp/img/chess_bg.jpg") top}.fishing_main .wrapper[data-v-57605bb8]{width:1200px;height:100%;float:right;padding-top:200px;padding-right:400px}.fishing_main .wrapper ul li[data-v-57605bb8]{width:314px;height:auto;float:right;position:relative;text-align:center}.fishing_main .wrapper ul li .cover_hover[data-v-57605bb8]{content:"";position:absolute;top:0;left:0;width:100%;height:390px;z-index:20;cursor:pointer}.fishing_main .wrapper ul li .cover[data-v-57605bb8]{width:100%;height:390px;background-position:50%;background-repeat:no-repeat;transition:all .3s ease-in;z-index:10}.fishing_main .wrapper ul li .cover_hover:hover+.cover[data-v-57605bb8]{transform:rotateY(180deg)}.fishing_main .wrapper ul li .cover_hover:hover~.title[data-v-57605bb8]{animation:titleSlide-data-v-57605bb8 .3s linear}.fishing_main .wrapper ul li .title[data-v-57605bb8]{position:absolute;left:40px;top:30px;color:#fff;text-align:left}.fishing_main .wrapper ul li .title h2[data-v-57605bb8]{font-size:24px;line-height:2}.fishing_main .wrapper ul li .title h3[data-v-57605bb8]{font-size:14px;line-height:1.5;font-weight:400}.fishing_main .wrapper ul li p[data-v-57605bb8]{margin-top:20px}.fishing_main .wrapper ul li p a[data-v-57605bb8]{display:inline-block;width:280px;height:54px;line-height:54px;text-align:center;color:#fff;font-size:22px;box-sizing:border-box;border:2px solid #fd7328;background:#fd7328;border-radius:6px}.fishing_main .wrapper ul li p .btn_ag[data-v-57605bb8]{color:#fd7328;border-color:#fd7328;background:transparent}.fishing_main .wrapper ul li p .btn_ag[data-v-57605bb8]:hover{color:#fff;border-color:#fd7328;background:#fd7328}.fishing_main .wrapper ul li[data-v-57605bb8]:first-child{margin-left:20px}@keyframes titleSlide-data-v-57605bb8{0%{transform:translateY(0);opacity:1}50%{transform:translateY(20px);opacity:0}51%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}',""])},uoXM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),r=a("exGp"),o=a.n(r),l=a("xzxg"),s={data:function(){return{token:localStorage.token,Public_User:localStorage.Public_User}},methods:{login:function(a){var i=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.$http.post(i.$HOST_NAME+"/games/login",{id:a,device:"pc"});case 2:(e=t.sent)&&200==e.code?window.location.href=e.data.url:alert(e.message);case 4:case"end":return t.stop()}},t,i)}))()},getItemId:function(a){var i=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token&&localStorage.userinfo){t.next=3;break}return alert("未登录"),t.abrupt("return",!1);case 3:e=i.$router.resolve({path:"/loading",query:{id:a.id,login:!0}}),window.open(e.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2);case 6:case"end":return t.stop()}},t,i)}))()},trustLogin:function(t){if(!localStorage.token)return alert("未登录"),!1;var e=this.$router.resolve({path:"/loading",query:{id:t.id,login:!0}});window.open(e.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)},loginGame:function(t){if(!localStorage.token||!localStorage.userinfo)return alert("未登录"),!1;var e=this.$router.resolve({path:"/loading",query:{id:t.id,login:!0}});window.open(e.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)},loginTest:function(t){if(localStorage.token&&localStorage.userinfo){var e=this.$router.resolve({path:"/loading",query:{id:t.id,login:!0}});window.open(e.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)}else this.tryPlay(t)},tryPlay:function(i){var r=this;return o()(n.a.mark(function t(){var e,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$http.get("/frontend/test/demo",{headers:{Accept:"application/x.tg.v2+json"},params:{}});case 2:(e=t.sent)&&200==e.code&&(l.a.setCache(e,"test"),a=r.$router.resolve({path:"/loading",query:{id:i.id,login:!0}}),window.open(a.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2),setTimeout(function(){window.location.reload()},500));case 4:case"end":return t.stop()}},t,r)}))()}},beforeDestroy:function(){}};e.default=s},"x3+4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("YtJ0"),a("LjVS");var i={mixins:[a("uoXM").default],data:function(){return{buyuData:[{name:"开元棋牌",img:"/static/ecp/img/chess2.png",content:"经典玩法 玩法丰富",platform:"KY_CHESS",gameName:"0",id:243},{name:"VG棋牌",img:"/static/ecp/img/chess3.png",content:"经典玩法 玩法丰富",platform:"VG_CHESS",gameName:"1000",id:10091}]}},methods:{}},r={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"fishing_main"},[i("div",{staticClass:"wrapper"},[i("ul",a._l(a.buyuData,function(e,t){return i("li",{key:t},[i("div",{staticClass:"cover_hover"}),a._v(" "),i("div",{staticClass:"cover",style:{backgroundImage:"url("+e.img+")"}}),a._v(" "),i("p",[i("a",{staticClass:"btn",on:{click:function(t){return a.trustLogin({platform:e.platform,gameName:e.gameName,name:e.name,id:e.id})}}},[a._v("开始游戏")])]),a._v(" "),i("p",[i("a",{staticClass:"btn_ag",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.trustLogin({platform:e.platform,gameName:e.gameName,name:e.name,id:e.id})}}},[a._v("游戏说明")])])])}),0)])])},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(t){a("HleT")},"data-v-57605bb8",null);e.default=n.exports}});