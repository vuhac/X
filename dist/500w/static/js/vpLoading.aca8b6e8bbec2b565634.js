webpackJsonp([14],{RMng:function(e,t,n){var a=n("sQNw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("e47bf9ca",a,!0,{})},UIF3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),o=n("exGp"),r=n.n(o),s={mixins:[n("uoXM").default],data:function(){return{}},methods:{getParam:function(){var n=this;return r()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$http.post(n.$HOST_NAME+"/games/index",{id:n.$route.query.id});case 2:(t=e.sent)&&200==t.code?n.login(t.data):window.close();case 4:case"end":return e.stop()}},e,n)}))()}},created:function(){},beforeDestroy:function(){},mounted:function(){this.$route.query.login?this.login(this.$route.query.id):window.close()},components:{}},d={render:function(){var e=this;e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"loading"},[t("img",{attrs:{src:"/static/public/image/game/ptgame/loading.png",alt:""}})])])}]};var c=n("VU/8")(s,d,!1,function(e){n("RMng")},"data-v-0ded35dc",null);t.default=c.exports},sQNw:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".container[data-v-0ded35dc]{position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px}.loading[data-v-0ded35dc]{text-align:center;margin-top:auto;margin-bottom:auto;animation:animate-data-v-0ded35dc 1s infinite linear;-moz-animation:animate-data-v-0ded35dc 1s infinite linear;-o-animation:animate-data-v-0ded35dc 1s infinite linear;-ms-animation:animate-data-v-0ded35dc 1s infinite linear}@keyframes animate-data-v-0ded35dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},uoXM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),o=n.n(a),i=n("exGp"),r=n.n(i),s=n("xzxg"),d={data:function(){return{token:localStorage.token,Public_User:localStorage.Public_User}},methods:{login:function(n){var a=this;return r()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$http.post(a.$HOST_NAME+"/games/login",{id:n,device:"pc"});case 2:(t=e.sent)&&200==t.code?window.location.href=t.data.url:alert(t.message);case 4:case"end":return e.stop()}},e,a)}))()},getItemId:function(n){var a=this;return r()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.token&&localStorage.userinfo){e.next=3;break}return alert("未登录"),e.abrupt("return",!1);case 3:t=a.$router.resolve({path:"/loading",query:{id:n.id,login:!0}}),window.open(t.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2);case 6:case"end":return e.stop()}},e,a)}))()},trustLogin:function(e){if(!localStorage.token)return alert("未登录"),!1;var t=this.$router.resolve({path:"/loading",query:{id:e.id,login:!0}});window.open(t.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)},loginGame:function(e){if(!localStorage.token||!localStorage.userinfo)return alert("未登录"),!1;var t=this.$router.resolve({path:"/loading",query:{id:e.id,login:!0}});window.open(t.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)},loginTest:function(e){if(localStorage.token&&localStorage.userinfo){var t=this.$router.resolve({path:"/loading",query:{id:e.id,login:!0}});window.open(t.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)}else this.tryPlay(e)},tryPlay:function(a){var i=this;return r()(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.$http.get("/frontend/test/demo",{headers:{Accept:"application/x.tg.v2+json"},params:{}});case 2:(t=e.sent)&&200==t.code&&(s.a.setCache(t,"test"),n=i.$router.resolve({path:"/loading",query:{id:a.id,login:!0}}),window.open(n.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2),setTimeout(function(){window.location.reload()},500));case 4:case"end":return e.stop()}},e,i)}))()}},beforeDestroy:function(){}};t.default=d}});