webpackJsonp([56],{"+rYJ":function(t,a,e){var r=e("a72C");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("6469ee8a",r,!0,{})},"6tr3":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("YtJ0");var r={mixins:[e("uoXM").default],data:function(){return{buyuData:[{name:"皇冠体育",img:"/static/cjw/img/bg_sports_01.png",content:"简单操作，自由编排",platform:"sport",gameName:"21",id:21},{name:"BBIN体育",img:"/static/cjw/img/bg_sports_02.png",content:"全新竞技 多种体验",platform:"sport",gameName:"41",id:41},{name:"AG体育",img:"/static/cjw/img/bg_sports_03.png",content:"经典玩法 玩法丰富",platform:"sport",gameName:"22",id:22},{name:"沙巴体育",img:"/static/cjw/img/bg_sports_04.png",content:"各式赔率，一触即发",platform:"sport",gameName:"20",id:20}],clientwidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sports_main"},[r("div",{staticClass:"wrapper"},[r("ul",e._l(e.buyuData,function(a,t){return r("li",{key:t,on:{click:function(t){e.getItemId(a)}}},[r("div",{staticClass:"cover",style:{backgroundImage:"url("+a.img+")"}}),e._v(" "),r("span")])}),0)])])},staticRenderFns:[]};var o=e("VU/8")(r,i,!1,function(t){e("s0jI")},"data-v-83ef2540",null);a.default=o.exports},Amu8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Xxa5"),o=e.n(r),i=e("exGp"),n=e.n(i),s=(e("YtJ0"),{mixins:[e("uoXM").default],data:function(){return{buyuData:[{name:"皇冠体育",img:"/static/ecp/img/bg_sports_01.png",content:"简单操作，自由编排",platform:"sport",gameName:"21",id:39},{name:"BBIN体育",img:"/static/ecp/img/bg_sports_02.png",content:"全新竞技 多种体验",platform:"sport",gameName:"41",id:41},{name:"AG体育",img:"/static/ecp/img/bg_sports_03.png",content:"经典玩法 玩法丰富",platform:"sport",gameName:"22",id:40},{name:"沙巴体育",img:"/static/ecp/img/bg_sports_04.png",content:"各式赔率，一触即发",platform:"sport",gameName:"20",id:38}],clientwidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},methods:{thirdParty:function(e,r){var i=this;return n()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token&&localStorage.userinfo){t.next=3;break}return i.tryPlay(),t.abrupt("return",!1);case 3:return i.loading=window.open("/static/loading/index.html","newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2),t.next=6,i.$http.post(i.$HOST_NAME+"/games/index",{platform:e,tag:"",classId:r,limit:20});case 6:(a=t.sent)&&200==a.code&&i.login(a.data);case 8:case"end":return t.stop()}},t,i)}))()}}}),p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sports_main"},[r("div",{staticClass:"wrapper",class:2100<=e.clientwidth?"wraap2":"wraap1"},[r("ul",e._l(e.buyuData,function(a,t){return r("li",{key:t},[r("div",{staticClass:"cover_hover"}),e._v(" "),r("div",{staticClass:"cover",style:{backgroundImage:"url("+a.img+")"}}),e._v(" "),r("div",{staticClass:"title"},[r("h2",[e._v(e._s(a.name))]),e._v(" "),r("h3",[e._v(e._s(a.content))])]),e._v(" "),r("p",[r("a",{staticClass:"btn",on:{click:function(t){return e.getItemId(a)}}},[e._v("开始游戏")])]),e._v(" "),r("p",[r("a",{staticClass:"btn_ag",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.getItemId(a)}}},[e._v("游戏说明")])])])}),0)])])},staticRenderFns:[]};var l=e("VU/8")(s,p,!1,function(t){e("+rYJ")},"data-v-9892494e",null);a.default=l.exports},CfUZ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("YtJ0");var r={mixins:[e("uoXM").default],data:function(){return{buyuData:[{name:"皇冠体育",img:"/static/ddcp/img/bg_sports_01.png",content:"简单操作，自由编排",platform:"sport",gameName:"21",id:39},{name:"BBIN体育",img:"/static/ddcp/img/bg_sports_02.png",content:"全新竞技 多种体验",platform:"sport",gameName:"41",id:41},{name:"AG体育",img:"/static/ddcp/img/bg_sports_03.png",content:"经典玩法 玩法丰富",platform:"sport",gameName:"22",id:40},{name:"沙巴体育",img:"/static/ddcp/img/bg_sports_04.png",content:"各式赔率，一触即发",platform:"sport",gameName:"20",id:38}],clientwidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sports_main"},[r("div",{staticClass:"wrapper",class:2100<=e.clientwidth?"wraap2":"wraap1"},[r("ul",e._l(e.buyuData,function(a,t){return r("li",{key:t},[r("div",{staticClass:"cover_hover"}),e._v(" "),r("div",{staticClass:"cover",style:{backgroundImage:"url("+a.img+")"}}),e._v(" "),r("div",{staticClass:"title"},[r("h2",[e._v(e._s(a.name))]),e._v(" "),r("h3",[e._v(e._s(a.content))])]),e._v(" "),r("p",[r("a",{staticClass:"btn",on:{click:function(t){e.getItemId(a)}}},[e._v("开始游戏")])]),e._v(" "),r("p",[r("a",{staticClass:"btn_ag",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.getItemId(a)}}},[e._v("游戏说明")])])])}),0)])])},staticRenderFns:[]};var o=e("VU/8")(r,i,!1,function(t){e("xJP3")},"data-v-33153fb1",null);a.default=o.exports},"D8+7":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("YtJ0");var r={mixins:[e("uoXM").default],data:function(){return{buyuData:[{name:"皇冠体育",img:"/static/jlcp/img/bg_sports_01.png",content:"简单操作，自由编排",platform:"sport",gameName:"21",id:39},{name:"BBIN体育",img:"/static/jlcp/img/bg_sports_02.png",content:"全新竞技 多种体验",platform:"sport",gameName:"41",id:41},{name:"AG体育",img:"/static/jlcp/img/bg_sports_03.png",content:"经典玩法 玩法丰富",platform:"sport",gameName:"22",id:40},{name:"沙巴体育",img:"/static/jlcp/img/bg_sports_04.png",content:"各式赔率，一触即发",platform:"sport",gameName:"20",id:38}],clientwidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sports_main"},[r("div",{staticClass:"wrapper",class:2100<=e.clientwidth?"wraap2":"wraap1"},[r("ul",e._l(e.buyuData,function(a,t){return r("li",{key:t},[r("div",{staticClass:"cover_hover"}),e._v(" "),r("div",{staticClass:"cover",style:{backgroundImage:"url("+a.img+")"}}),e._v(" "),r("div",{staticClass:"title"},[r("h2",[e._v(e._s(a.name))]),e._v(" "),r("h3",[e._v(e._s(a.content))])]),e._v(" "),r("p",[r("a",{staticClass:"btn",on:{click:function(t){e.getItemId(a)}}},[e._v("开始游戏")])]),e._v(" "),r("p",[r("a",{staticClass:"btn_ag",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.getItemId(a)}}},[e._v("游戏说明")])])])}),0)])])},staticRenderFns:[]};var o=e("VU/8")(r,i,!1,function(t){e("bgbZ")},"data-v-1591283b",null);a.default=o.exports},E3In:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.sports_main[data-v-83ef2540]{position:relative!important;height:900px;background:url("/static/cjw/img/bg_sports.png") top}.sports_main .wrapper[data-v-83ef2540]{position:absolute;min-width:2000px;height:100%;left:50%;transform:translateX(-50%);padding-top:100px}.sports_main .wrapper ul[data-v-83ef2540]:after{clear:both;content:"";display:block}.sports_main .wrapper ul[data-v-83ef2540]{width:100%;position:absolute;left:50%;transform:translateX(-50%)}.sports_main .wrapper ul li[data-v-83ef2540]{float:left;text-align:center;width:25%;height:700px;position:relative;margin-top:0;transition:all .3s ease-in}.sports_main .wrapper ul li .cover[data-v-83ef2540]{width:100%;height:700px;background-position:50%;background-repeat:no-repeat;background-size:cover;transition:all .3s ease-in;margin-top:0;z-index:10}.sports_main .wrapper ul li span[data-v-83ef2540]{position:absolute;bottom:114px;right:64px;width:153px;height:32px;background:url(/static/cjw/img/button.png) no-repeat 50%}.sports_main .wrapper ul li[data-v-83ef2540]:first-child{margin-left:140px}.sports_main .wrapper ul li[data-v-83ef2540]:nth-child(2){margin-left:-102px}.sports_main .wrapper ul li[data-v-83ef2540]:nth-child(3){margin-left:-88px}.sports_main .wrapper ul li[data-v-83ef2540]:nth-child(4){margin-left:-104px}.sports_main .wrapper ul li[data-v-83ef2540]:hover{margin-top:-10px;cursor:pointer}@keyframes titleSlide-data-v-83ef2540{0%{transform:translateY(0);opacity:1}50%{transform:translateY(20px);opacity:0}51%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}',""])},JTlQ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("YtJ0");var r={mixins:[e("uoXM").default],data:function(){return{buyuData:[{name:"皇冠体育",img:"/static/dalao/img/bg_sports_01.png",content:"简单操作，自由编排",platform:"sport",gameName:"21",id:39},{name:"BBIN体育",img:"/static/dalao/img/bg_sports_02.png",content:"全新竞技 多种体验",platform:"sport",gameName:"41",id:41},{name:"AG体育",img:"/static/dalao/img/bg_sports_03.png",content:"经典玩法 玩法丰富",platform:"sport",gameName:"22",id:40},{name:"沙巴体育",img:"/static/dalao/img/bg_sports_04.png",content:"各式赔率，一触即发",platform:"sport",gameName:"20",id:38}],clientwidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sports_main"},[r("div",{staticClass:"wrapper",class:2100<=e.clientwidth?"wraap2":"wraap1"},[r("ul",e._l(e.buyuData,function(a,t){return r("li",{key:t},[r("div",{staticClass:"cover_hover",on:{click:function(t){e.getItemId(a)}}}),e._v(" "),r("div",{staticClass:"cover",class:{bbinMargin:"BBIN体育"==a.name},style:{backgroundImage:"url("+a.img+")"}}),e._v(" "),r("div",{staticClass:"title"},[r("h2",[e._v(e._s(a.name))]),e._v(" "),r("h3",[e._v(e._s(a.content))])]),e._v(" "),r("p",[r("a",{staticClass:"btn",on:{click:function(t){e.getItemId(a)}}},[e._v("开始游戏")])]),e._v(" "),r("p",[r("a",{staticClass:"btn_ag",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.getItemId(a)}}},[e._v("游戏说明")])])])}),0)])])},staticRenderFns:[]};var o=e("VU/8")(r,i,!1,function(t){e("tmXR")},"data-v-7de69950",null);a.default=o.exports},UNdL:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.sports_main[data-v-33153fb1]{position:relative!important;height:900px;background:url("/static/ddcp/img/bg_sports.jpg") top}.sports_main .wrapper[data-v-33153fb1]{width:1400px;height:100%}.sports_main .wrapper ul li[data-v-33153fb1]{width:23%;height:auto;float:left;position:relative;text-align:center}.sports_main .wrapper ul li .cover_hover[data-v-33153fb1]{content:"";position:absolute;top:0;left:0;width:100%;height:390px;z-index:20;cursor:pointer}.sports_main .wrapper ul li .cover[data-v-33153fb1]{width:100%;height:390px;background-position:50%;background-repeat:no-repeat;transition:all .3s ease-in;z-index:10}.sports_main .wrapper ul li .cover_hover:hover+.cover[data-v-33153fb1]{transform:rotateY(180deg)}.sports_main .wrapper ul li .cover_hover:hover~.title[data-v-33153fb1]{animation:titleSlide-data-v-33153fb1 .3s linear}.sports_main .wrapper ul li .title[data-v-33153fb1]{position:absolute;left:40px;top:30px;color:#fff;text-align:left}.sports_main .wrapper ul li .title h2[data-v-33153fb1]{font-size:24px;line-height:2}.sports_main .wrapper ul li .title h3[data-v-33153fb1]{font-size:14px;line-height:1.5;font-weight:400}.sports_main .wrapper ul li p[data-v-33153fb1]{margin-top:20px}.sports_main .wrapper ul li p a[data-v-33153fb1]{display:inline-block;width:260px;height:54px;line-height:54px;text-align:center;color:#fff;font-size:22px;box-sizing:border-box;border:2px solid #fd7328;background:#fd7328;border-radius:6px}.sports_main .wrapper ul li p .btn_ag[data-v-33153fb1]{color:#4d8ffa;border-color:#4d8ffa;background:transparent}.sports_main .wrapper ul li p .btn_ag[data-v-33153fb1]:hover{border-color:#74a6ff;color:#74a6ff;background:transparent}.sports_main .wraap1[data-v-33153fb1]{float:right;padding-top:250px;padding-left:60px}.sports_main .wraap2[data-v-33153fb1]{position:absolute;top:250px;left:35%}@keyframes titleSlide-data-v-33153fb1{0%{transform:translateY(0);opacity:1}50%{transform:translateY(20px);opacity:0}51%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}',""])},a72C:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.sports_main[data-v-9892494e]{position:relative!important;height:900px;background:url("/static/ecp/img/bg_sports.jpg") top}.sports_main .wrapper[data-v-9892494e]{width:1400px;height:100%}.sports_main .wrapper ul li[data-v-9892494e]{width:23%;height:auto;float:left;position:relative;text-align:center}.sports_main .wrapper ul li .cover_hover[data-v-9892494e]{content:"";position:absolute;top:0;left:0;width:100%;height:390px;z-index:20;cursor:pointer}.sports_main .wrapper ul li .cover[data-v-9892494e]{width:100%;height:390px;background-position:50%;background-repeat:no-repeat;transition:all .3s ease-in;z-index:10}.sports_main .wrapper ul li:nth-child(2) .cover[data-v-9892494e]{background-position:center -5px}.sports_main .wrapper ul li .cover_hover:hover+.cover[data-v-9892494e]{transform:rotateY(180deg)}.sports_main .wrapper ul li .cover_hover:hover~.title[data-v-9892494e]{animation:titleSlide-data-v-9892494e .3s linear}.sports_main .wrapper ul li .title[data-v-9892494e]{position:absolute;left:40px;top:30px;color:#fff;text-align:left}.sports_main .wrapper ul li .title h2[data-v-9892494e]{font-size:24px;line-height:2}.sports_main .wrapper ul li .title h3[data-v-9892494e]{font-size:14px;line-height:1.5;font-weight:400}.sports_main .wrapper ul li p[data-v-9892494e]{margin-top:20px}.sports_main .wrapper ul li p a[data-v-9892494e]{display:inline-block;width:260px;height:54px;line-height:54px;text-align:center;color:#fff;font-size:22px;box-sizing:border-box;border:2px solid #fd7328;background:#fd7328;border-radius:6px}.sports_main .wrapper ul li p .btn_ag[data-v-9892494e]{color:#4d8ffa;border-color:#4d8ffa;background:transparent}.sports_main .wrapper ul li p .btn_ag[data-v-9892494e]:hover{border-color:#74a6ff;color:#74a6ff;background:transparent}.sports_main .wraap1[data-v-9892494e]{float:right;padding-top:250px;padding-left:60px}.sports_main .wraap2[data-v-9892494e]{position:absolute;top:250px;left:35%}@keyframes titleSlide-data-v-9892494e{0%{transform:translateY(0);opacity:1}50%{transform:translateY(20px);opacity:0}51%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}',""])},bgbZ:function(t,a,e){var r=e("mXQO");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("97ebb04c",r,!0,{})},mXQO:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.sports_main[data-v-1591283b]{position:relative!important;height:900px;background:url("/static/jlcp/img/bg_sports.jpg") top}.sports_main .wrapper[data-v-1591283b]{width:1400px;height:100%}.sports_main .wrapper ul li[data-v-1591283b]{width:23%;height:auto;float:left;position:relative;text-align:center}.sports_main .wrapper ul li .cover_hover[data-v-1591283b]{content:"";position:absolute;top:0;left:0;width:100%;height:390px;z-index:20;cursor:pointer}.sports_main .wrapper ul li .cover[data-v-1591283b]{width:100%;height:390px;background-position:50%;background-repeat:no-repeat;transition:all .3s ease-in;z-index:10}.sports_main .wrapper ul li .cover_hover:hover+.cover[data-v-1591283b]{transform:rotateY(180deg)}.sports_main .wrapper ul li .cover_hover:hover~.title[data-v-1591283b]{animation:titleSlide-data-v-1591283b .3s linear}.sports_main .wrapper ul li .title[data-v-1591283b]{position:absolute;left:40px;top:30px;color:#fff;text-align:left}.sports_main .wrapper ul li .title h2[data-v-1591283b]{font-size:24px;line-height:2}.sports_main .wrapper ul li .title h3[data-v-1591283b]{font-size:14px;line-height:1.5;font-weight:400}.sports_main .wrapper ul li p[data-v-1591283b]{margin-top:20px}.sports_main .wrapper ul li p a[data-v-1591283b]{display:inline-block;width:260px;height:54px;line-height:54px;text-align:center;color:#fff;font-size:22px;box-sizing:border-box;border:2px solid #fd7328;background:#fd7328;border-radius:6px}.sports_main .wrapper ul li p .btn_ag[data-v-1591283b]{color:#4d8ffa;border-color:#4d8ffa;background:transparent}.sports_main .wrapper ul li p .btn_ag[data-v-1591283b]:hover{border-color:#74a6ff;color:#74a6ff;background:transparent}.sports_main .wraap1[data-v-1591283b]{float:right;padding-top:250px;padding-left:60px}.sports_main .wraap2[data-v-1591283b]{position:absolute;top:250px;left:35%}@keyframes titleSlide-data-v-1591283b{0%{transform:translateY(0);opacity:1}50%{transform:translateY(20px);opacity:0}51%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}',""])},s0jI:function(t,a,e){var r=e("E3In");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("1d3d211f",r,!0,{})},tmXR:function(t,a,e){var r=e("v5la");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("3689e858",r,!0,{})},uoXM:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Xxa5"),o=e.n(r),i=e("exGp"),n=e.n(i),s=e("xzxg"),p={data:function(){return{token:localStorage.token,Public_User:localStorage.Public_User}},methods:{login:function(e){var r=this;return n()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$http.post(r.$HOST_NAME+"/games/login",{id:e,device:"pc"});case 2:(a=t.sent)&&200==a.code?window.location.href=a.data.url:alert(a.message);case 4:case"end":return t.stop()}},t,r)}))()},getItemId:function(e){var r=this;return n()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token&&localStorage.userinfo){t.next=3;break}return alert("未登录"),t.abrupt("return",!1);case 3:a=r.$router.resolve({path:"/loading",query:{id:e.id,login:!0}}),window.open(a.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2);case 6:case"end":return t.stop()}},t,r)}))()},trustLogin:function(t){if(!localStorage.token)return alert("未登录"),!1;var a=this.$router.resolve({path:"/loading",query:{id:t.id,login:!0}});window.open(a.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)},loginGame:function(t){if(!localStorage.token||!localStorage.userinfo)return alert("未登录"),!1;var a=this.$router.resolve({path:"/loading",query:{id:t.id,login:!0}});window.open(a.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)},loginTest:function(t){if(localStorage.token&&localStorage.userinfo){var a=this.$router.resolve({path:"/loading",query:{id:t.id,login:!0}});window.open(a.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2)}else this.tryPlay(t)},tryPlay:function(r){var i=this;return n()(o.a.mark(function t(){var a,e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.$http.get("/frontend/test/demo",{headers:{Accept:"application/x.tg.v2+json"},params:{}});case 2:(a=t.sent)&&200==a.code&&(s.a.setCache(a,"test"),e=i.$router.resolve({path:"/loading",query:{id:r.id,login:!0}}),window.open(e.href,"newwindow","height=750,width=1285, top=0, left="+(window.screen.availWidth-1295)/2),setTimeout(function(){window.location.reload()},500));case 4:case"end":return t.stop()}},t,i)}))()}},beforeDestroy:function(){}};a.default=p},v5la:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.sports_main[data-v-7de69950]{position:relative!important;height:900px;background:url("/static/dalao/img/bg_sports.jpg") top}.sports_main .wrapper[data-v-7de69950]{width:1400px;height:100%}.sports_main .wrapper ul li[data-v-7de69950]{width:23%;height:auto;float:left;position:relative;text-align:center}.sports_main .wrapper ul li .cover_hover[data-v-7de69950]{content:"";position:absolute;top:0;left:0;width:100%;height:390px;z-index:20;cursor:pointer}.sports_main .wrapper ul li .cover[data-v-7de69950]{width:100%;height:390px;background-position:50%;background-repeat:no-repeat;transition:all .3s ease-in;z-index:10}.sports_main .wrapper ul li .bbinMargin[data-v-7de69950],.sports_main .wrapper ul li:nth-child(2) .cover[data-v-7de69950]{background-position:center -5px}.sports_main .wrapper ul li .cover_hover:hover+.cover[data-v-7de69950]{transform:rotateY(180deg)}.sports_main .wrapper ul li .cover_hover:hover~.title[data-v-7de69950]{animation:titleSlide-data-v-7de69950 .3s linear}.sports_main .wrapper ul li .title[data-v-7de69950]{position:absolute;left:40px;top:30px;color:#fff;text-align:left}.sports_main .wrapper ul li .title h2[data-v-7de69950]{font-size:24px;line-height:2}.sports_main .wrapper ul li .title h3[data-v-7de69950]{font-size:14px;line-height:1.5;font-weight:400}.sports_main .wrapper ul li p[data-v-7de69950]{margin-top:20px}.sports_main .wrapper ul li p a[data-v-7de69950]{display:inline-block;width:260px;height:54px;line-height:54px;text-align:center;color:#fff;font-size:22px;box-sizing:border-box;border:2px solid #fd7328;background:#fd7328;border-radius:6px}.sports_main .wrapper ul li p .btn_ag[data-v-7de69950]{color:#4d8ffa;border-color:#4d8ffa;background:transparent}.sports_main .wrapper ul li p .btn_ag[data-v-7de69950]:hover{border-color:#74a6ff;color:#74a6ff;background:transparent}.sports_main .wraap1[data-v-7de69950]{float:right;padding-top:250px;padding-left:60px}.sports_main .wraap2[data-v-7de69950]{position:absolute;top:250px;left:35%}@keyframes titleSlide-data-v-7de69950{0%{transform:translateY(0);opacity:1}50%{transform:translateY(20px);opacity:0}51%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}',""])},xJP3:function(t,a,e){var r=e("UNdL");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("4b23cf1e",r,!0,{})}});