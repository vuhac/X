webpackJsonp([15],{tALT:function(t,e,n){var a=n("y8la");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("63e1a946",a,!0,{})},u2V1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),v=n.n(a),r=n("RRo+"),b=n.n(r),d=n("exGp"),i=n.n(d),s={data:function(){return{isLoading:!1,titleLeft:["跨度","龙虎"],titleRight:["第一位","第二位","第三位","第四位","第五位"],resultBallLength:5,ballLength:11,periodsNum:20,canvas:{left:0,top:0,width:0,height:0,color:"#029BAE"},checkDatas:[{name:"折线显示",staue:!0},{name:"遗漏显示",staue:!0}],issueDatas:{name:"最近20期"},drawDeclList:[],allDatas:{},newDatas:{leftDatas:{newIssue:"",newTimeArr:"",newResult:"",newSingle:""},total:"",continuous:"",forget:"",lotteryId:""}}},methods:{drawPicFc:function(t,e,n,a){return!1},drawCanvasPic:function(){var c=this;this.drawDeclList.forEach(function(t,e){c.canvas.color=e%2==0?"#029BAE":"#FF5151";var i=c.$refs["trendCanvas"+(e+1)],n=c.$refs["postBall"+(e+1)],s=[],l=30,o=30;i[0].style.display="none",t.list.forEach(function(t,n){t.ballList.forEach(function(t,e){t.row=n+3,t.posit=e+1,t.staue&&s.push(t)})}),s.forEach(function(t,e){var n="";if(0<e){if(n=s[e].posit-s[e-1].posit,c.canvas.width=Math.abs(n)*o,c.canvas.height=l,i[e].width=c.canvas.width,i[e].height=c.canvas.height,0<n){c.canvas.top=(t.row-1)*l-15,i[e].style.top=c.canvas.top+"px",c.canvas.left=(t.posit-1)*o-c.canvas.width+15,i[e].style.left=c.canvas.left+"px";var a=i[e].getContext("2d");a.beginPath(),a.strokeStyle=c.canvas.color,a.lineWidth=2,a.moveTo(0,0),a.lineTo(c.canvas.width,c.canvas.height),a.stroke()}if(n<0){c.canvas.top=(t.row-1)*l-15,i[e].style.top=c.canvas.top+"px",c.canvas.left=(t.posit-1)*o+15,i[e].style.left=c.canvas.left+"px";var r=i[e].getContext("2d");r.beginPath(),r.strokeStyle=c.canvas.color,r.lineWidth=2,r.moveTo(0,c.canvas.height),r.lineTo(c.canvas.width,0),r.stroke()}if(0==n){c.canvas.height=30,c.canvas.width=30,i[e].width=c.canvas.width,i[e].height=c.canvas.height,c.canvas.top=t.row*l-45,i[e].style.top=c.canvas.top+"px",c.canvas.left=(t.posit-1)*o,i[e].style.left=c.canvas.left+"px";var d=i[e].getContext("2d");d.beginPath(),d.strokeStyle=c.canvas.color,d.lineWidth=2,d.moveTo(.5*c.canvas.width,0),d.lineTo(.5*c.canvas.width,c.canvas.height),d.stroke()}}}),s.forEach(function(t,e){n[e].style.top=l*(t.row-1)+4+"px",n[e].style.left=o*(t.posit-1)+4+"px"})})},checkFc:function(t){t.staue=!t.staue},issueFc:function(t,e){this.issueDatas.name=t,this.periodsNum=e,this.getHisDatas()},getHisDatas:function(){var f=this;return i()(v.a.mark(function t(){var e,n,i,s,a,r,d,l,o,c,p;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f.isLoading=!0,e=f.$route.fullPath.split("/"),f.lotteryId=1*e.filter(function(t){return b()(1*t)&&""!==t})[0],"/frontend/test"==f.$HOST_NAME&&(f.$HOST_NAME="/frontend/v1"),t.next=6,f.$http.post(f.$HOST_NAME+"/lottery/trend",{lotteryId:f.lotteryId,pageSize:f.periodsNum});case 6:if(!(n=t.sent)||200!=n.code){t.next=32;break}if(n.data.data.list){t.next=11;break}return alert("暂无数据"),t.abrupt("return",!1);case 11:for(a in f.isLoading=!1,f.$refs.contentWrap&&(f.$refs.contentWrap.style.display="block"),f.newDatas.leftDatas.newIssue=[],f.newDatas.leftDatas.newTimeArr=[],f.newDatas.leftDatas.newResult=[],f.newDatas.leftDatas.newSingle=[],f.newDatas.total=[],f.newDatas.continuous=[],f.newDatas.forget=[],i=[{index:0,name:"kd"},{index:1,name:"lh"}],f.drawDeclList=[],s=n.data.data.gather.listunm,n.data.data.gather.forget)for(r in n.data.data.gather.forget[a])f.newDatas.forget.push(n.data.data.gather.forget[a][r]);for(d in n.data.data.gather.total)for(l in n.data.data.gather.total[d])f.newDatas.total.push(n.data.data.gather.total[d][l]);for(o in n.data.data.gather.continuous)for(c in n.data.data.gather.continuous[o])f.newDatas.continuous.push(n.data.data.gather.continuous[o][c]);for(p=0;p<f.resultBallLength;p++)f.drawDeclList.push({title:f.titleRight[p],list:[]});n.data.data.list.forEach(function(r){var n=[],t=function(e){switch(e){case"issue":f.newDatas.leftDatas.newIssue.push(r.issue);break;case"resultInfo":f.newDatas.leftDatas.newResult.push(r.resultInfo.split(","));break;case"openingTime":f.newDatas.leftDatas.newTimeArr.push(f.getTime(1e3*r.openingTime));break;default:i.forEach(function(t){t.name===e&&(n[t.index]=r[e])})}};for(var e in r)t(e);f.newDatas.leftDatas.newSingle.push(n);for(var a=function(n){for(var a=[],t=1;t<12;t++)a.push({ball:t,staue:!1,lost:s[r.issue][n][t]});a.forEach(function(t,e){t.ball==+r.resultInfo.split(",")[n]&&(t.staue=!0,f.drawDeclList[n].list.push({ballList:a,activeBall:+r.resultInfo.split(",")[n]}))})},d=0;d<f.resultBallLength;d++)a(d)}),f.$nextTick(function(){f.drawCanvasPic()}),t.next=33;break;case 32:alert("获取开奖记录数据出错！！");case 33:case"end":return t.stop()}},t,f)}))()},translateObj:function(t){var e=[];for(var n in t)e.push([t[n],n]);return e.reverse(),e}},created:function(){this.childNeed&&this.getHisDatas()},mounted:function(){},computed:{childNeed:function(){return this.$store.state.lottery.childNeed}},watch:{childNeed:{handler:function(t,e){e||this.getHisDatas(),e&&t.className==e.className&&this.getHisDatas()},deep:!0},"$route.fullPath":function(t,e){t&&this.getHisDatas()}},store:n("YtJ0").a},l={render:function(){var d=this,t=d.$createElement,i=d._self._c||t;return i("div",[i("div",{staticClass:"vp-lottery-trend-content"},[d.isLoading?i("Spin",{attrs:{size:"large",fix:""}}):d._e(),d._v(" "),i("div",{ref:"contentWrap",staticStyle:{display:"none"}},[i("div",{staticClass:"trend-toggle"},[i("span",{staticClass:"name"},[d._v(d._s(d.childNeed.name))]),d._v(" "),i("span",{staticClass:"check"},d._l(d.checkDatas,function(e,t){return i("label",{key:t,attrs:{for:""}},[i("span",{staticClass:"check-ico",class:{active:e.staue},on:{click:function(t){return d.checkFc(e)}}}),d._v(" "),i("span",{staticClass:"check-name"},[d._v(d._s(e.name))])])}),0),d._v(" "),i("span",{staticClass:"issue"},[i("span",{staticClass:"periodbtn",class:{active:"最近20期"==d.issueDatas.name},on:{click:function(t){return d.issueFc("最近20期",20)}}},[d._v("最近20期")]),d._v(" "),i("span",{staticClass:"periodbtn",class:{active:"最近30期"==d.issueDatas.name},on:{click:function(t){return d.issueFc("最近30期",30)}}},[d._v("最近30期")]),d._v(" "),i("span",{staticClass:"periodbtn",class:{active:"最近50期"==d.issueDatas.name},on:{click:function(t){return d.issueFc("最近50期",50)}}},[d._v("最近50期")]),d._v(" "),i("span",{staticClass:"periodbtn",class:{active:"最近100期"==d.issueDatas.name},on:{click:function(t){return d.issueFc("最近100期",100)}}},[d._v("最近100期")])])]),d._v(" "),i("div",{staticClass:"trend-table-wrapper"},[i("div",{staticClass:"trend-table-inner"},[i("div",{staticClass:"trend-left-box"},[i("div",{staticClass:"trend-left-box-top"},[i("div",{staticClass:"td-issue"},[i("div",{staticClass:"left-title"},[d._v("期号")]),d._v(" "),d._l(d.newDatas.leftDatas.newIssue,function(t,e){return i("div",{key:e,staticClass:"issue-number"},[d._v("\n                  "+d._s(2==d.lotteryId||10==d.lotteryId?t:t.toString().substring(4,t.length))+"\n                ")])})],2),d._v(" "),i("div",{staticClass:"td-issue"},[i("div",{staticClass:"left-title"},[d._v("开奖时间")]),d._v(" "),d._l(d.newDatas.leftDatas.newTimeArr,function(t,e){return i("div",{key:e,staticClass:"issue-number"},[d._v("\n                  "+d._s(t)+"\n                ")])})],2),d._v(" "),i("div",{staticClass:"td-lottery-number"},[i("div",{staticClass:"left-title"},[d._v("开奖号")]),d._v(" "),i("div",{staticClass:"td-lottery-number-item"},d._l(d.newDatas.leftDatas.newResult,function(t,e){return i("div",{key:e,staticClass:"lottery-number"},d._l(t,function(t,e){return i("div",{key:e,staticClass:"left-td-ball"},[i("label",{attrs:{for:""}},[i("span",[d._v(d._s(t))])])])}),0)}),0)]),d._v(" "),i("div",{staticClass:"td-lottery-wide"},[i("div",{staticClass:"left-title"},d._l(d.titleLeft,function(t,e){return i("div",{key:e,staticClass:"td-lottery-wide-title"},[d._v(d._s(t))])}),0),d._v(" "),d._l(d.newDatas.leftDatas.newSingle,function(t,e){return i("div",{key:e,staticClass:"wide-wrap"},[i("div",{staticClass:"wide-inner-wrap"},d._l(t,function(t,e){return i("div",{key:e,staticClass:"item",class:{active:"大"==t||"双"==t}},[d._v(d._s(t)+"\n                    ")])}),0)])})],2)]),d._v(" "),d._m(0)]),d._v(" "),i("div",{staticClass:"trend-center-box"},[i("div",{staticClass:"trend-center-canvas-list"},d._l(d.drawDeclList,function(t,r){return i("div",{key:r,staticClass:"vp-lottery-trend-cavans"},[i("div",{staticClass:"trend-cavans-title"},[i("div",{staticClass:"t1"},[d._v(d._s(t.title))]),d._v(" "),i("div",{staticClass:"t2"},d._l(d.ballLength,function(t,e){return i("div",{key:e},[d._v(d._s(e+1))])}),0)]),d._v(" "),i("div",{staticClass:"trend-out-box"},d._l(t.list,function(t,a){return i("div",{key:a,staticClass:"row"},d._l(t.ballList,function(e,n){return i("div",{key:n,on:{click:function(t){return d.drawPicFc(e,r,a,n)}}},[i("span",[d._v(d._s(d.checkDatas[1].staue?e.lost:""))])])}),0)}),0),d._v(" "),d._l(t.list,function(t,e){return i("canvas",{directives:[{name:"show",rawName:"v-show",value:d.checkDatas[0].staue,expression:"checkDatas[0].staue"}],key:e,ref:"trendCanvas"+(r+1),refInFor:!0})}),d._v(" "),i("div",{staticClass:"refBall-list"},d._l(t.list,function(t,e){return i("div",{key:e,ref:"postBall"+(r+1),refInFor:!0,class:{active:r%2!=0}},[i("span",[d._v("\n                                          "+d._s(t.activeBall)+"\n                                      ")])])}),0)],2)}),0),d._v(" "),i("div",{staticClass:"statistics-item"},d._l(d.newDatas.total,function(t,e){return i("div",{key:e},[d._v(d._s(t))])}),0),d._v(" "),i("div",{staticClass:"statistics-item"},d._l(d.newDatas.continuous,function(t,e){return i("div",{key:e},[d._v(d._s(t))])}),0),d._v(" "),i("div",{staticClass:"statistics-item"},d._l(d.newDatas.forget,function(t,e){return i("div",{key:e},[d._v(d._s(t))])}),0)])])])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trend-statistics"},[n("div",[t._v("出现总次数")]),t._v(" "),n("div",[t._v("最大连出值")]),t._v(" "),n("div",[t._v("最大遗漏值")])])}]};var o=n("VU/8")(s,l,!1,function(t){n("tALT")},"data-v-fdf31784",null);e.default=o.exports},y8la:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.vp-lottery-trend-content[data-v-fdf31784]{padding-top:54px;font-size:15px;text-align:center;background:#f8f6f7}.vp-lottery-trend-content .ivu-spin-fix[data-v-fdf31784]{position:fixed}.vp-lottery-trend-content .trend-toggle[data-v-fdf31784]{min-width:800px;position:fixed;z-index:99;width:100%;height:56px;line-height:56px;text-align:center;background:#f8f6f7}.vp-lottery-trend-content .trend-toggle .name[data-v-fdf31784]{color:#ff5151;margin-right:23px}.vp-lottery-trend-content .trend-toggle .check label[data-v-fdf31784]{display:inline-block;margin:0 3px 0 16px}.vp-lottery-trend-content .trend-toggle .check label .check-ico[data-v-fdf31784]{width:17px;height:17px;vertical-align:text-top;display:inline-block;cursor:pointer;border:1px solid gray;background:#f5f5f5}.vp-lottery-trend-content .trend-toggle .check label .check-ico.active[data-v-fdf31784]{border:0;background:url("/static/public/image/lottery/trend/vp-trend-true-bg.png") #ff5151 50% no-repeat}.vp-lottery-trend-content .trend-toggle .check label .check-name[data-v-fdf31784]{padding-left:3px}.vp-lottery-trend-content .trend-toggle .issue[data-v-fdf31784]{padding-left:30px}.vp-lottery-trend-content .trend-toggle .issue .periodbtn[data-v-fdf31784]{cursor:pointer;border:1px solid #dadada;border-radius:4px;padding:3px 8px;margin-right:8px}.vp-lottery-trend-content .trend-toggle .issue .periodbtn.active[data-v-fdf31784]{background-color:#ff5151;color:#fff;border-color:#ff5151}.vp-lottery-trend-content .trend-table-wrapper[data-v-fdf31784]{margin-top:56px;display:inline-block;height:calc(100vh - 175px);text-align:center;color:#515151;overflow-y:auto;overflow-x:hidden;cursor:default;padding-right:4px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner[data-v-fdf31784]{background-color:#f8f6f7;border:1px solid #ddd;border-right:0;border-bottom:0;display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title[data-v-fdf31784]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;height:60px;line-height:60px;min-width:30px;white-space:nowrap;text-align:center;background:#f1edea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title span[data-v-fdf31784]{border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title span[data-v-fdf31784]:last-child{border-right:none}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-td-ball[data-v-fdf31784]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;height:30px;line-height:30px;min-width:30px;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-issue .issue-number[data-v-fdf31784]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;padding-left:15px;padding-right:15px;line-height:30px;height:30px;white-space:nowrap}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .td-lottery-number-item[data-v-fdf31784]{font-size:12px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .lottery-number[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .lottery-number div label[data-v-fdf31784]{display:inline-block;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;background:#ff5151;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title .td-lottery-wide-title[data-v-fdf31784]{-ms-flex:1;flex:1;border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title .td-lottery-wide-title[data-v-fdf31784]:last-child{border-right:0}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap .item[data-v-fdf31784]{width:60px;height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;line-height:30px;white-space:nowrap;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap .item.active[data-v-fdf31784]{color:#ff5151}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-statistics div[data-v-fdf31784]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;line-height:30px;height:30px;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans[data-v-fdf31784]{position:relative}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title[data-v-fdf31784]{text-align:center;border-bottom:1px solid #ddd;height:60px;background:#f1edea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t1[data-v-fdf31784]{line-height:30px;height:30px;border-bottom:1px solid #ddd;border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t2[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t2 div[data-v-fdf31784]{height:30px;width:30px;line-height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box[data-v-fdf31784]{background:#f9faea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div[data-v-fdf31784]{width:30px;height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;line-height:30px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div span[data-v-fdf31784]{display:inline-block;width:20px;height:20px;line-height:20px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div.active span[data-v-fdf31784]{border-radius:50%;background:#029bae;border:1px solid #029bae;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans canvas[data-v-fdf31784]{position:absolute}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .refBall-list div[data-v-fdf31784]{position:absolute;display:inline-block;width:22px;height:22px;line-height:22px;border-radius:50%;background:#029bae;border:1px solid #029bae;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .refBall-list div.active[data-v-fdf31784]{background:#ff5151;border:1px solid #ff5151}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .statistics-item[data-v-fdf31784]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .statistics-item div[data-v-fdf31784]{width:30px;height:30px;line-height:30px;text-align:center;border-bottom:1px solid #ddd;border-right:1px solid #ddd}',""])}});