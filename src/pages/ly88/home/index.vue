<template>
  <div class="ly88-new-index">
    <div class="banner-wrap">
      <div class="notice-wr">
        <div class="notice">
          <div class="bd">
            <marquee 
            v-if="lantern"
            align="middle"
            direction="left"
            loop="-1"
            scrollamount="3"
            onmouseout="this.start()"
            onmouseover="this.stop()"
            style="vertical-align: middle;">
                 <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>
      <div class="carouse">
        <el-carousel :interval="5000" arrow="never" height="410px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a
              :href="item.targets"
              target="_blank"
              style="width: 1200px;height: 100%;background-color: white;margin: 0 auto;display: block"
              v-if="item.targets !=='#'"
            >
              <img :src="item.img" height="100%" alt>
            </a>
            <img :src="item.img" alt v-else>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main">
      <!-- <div class="jian-wr">
        <div class="jian">
          <a href="/download" class="fl">
            <img src="/static/ly88/img/download.3e5fa2a.png" alt>
          </a>
          <div>
            <span class="num" :class='"num" + jackpotNum.toString().substring(0,1)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(1,2)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(2,3)'></span>
            <span class="num"></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(3,4)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(4,5)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(5,6)'></span>
            <span class="num"></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(6,7)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(7,8)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(8,9)'></span>
            <span class="num num."></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(9,10)'></span>
            <span class="num" :class='"num" + jackpotNum.toString().substring(10,11)'></span>
          </div>
        </div>
      </div> -->
      <div class="con cl">
        <ul>
          <li class="con1" @click="goView('/plays/hall')">
            <a href="javascript:void(0);">
              <img src="/static/ly88/img/lotteryLogo.jpg" alt>
              <p class="text">更多彩票游戏，高额奖池等你来战！</p>
            </a>
          </li>
          <li class="con2" @click="goView('/home/qipai')">
            <a href="javascript:void(0);">
              <img src="/static/ly88/img/chessLogo.jpg" alt>
              <p class="text">下注您喜爱的棋牌游戏，投注更轻松！</p>
            </a>
          </li>
          <li class="con3" @click="goView('/home/live')">
            <img src="/static/ly88/img/liveLogo.jpg" alt>
            <p class="text">美女荷官给您视觉上的绝佳体验！</p>
          </li>
        </ul>
      </div>
      <div class="tab-wr">
        <div class="tab">
          <!-- <div class="hd">
            <ul class="game-tab">
              <li v-for="(item,index) in games" :key="index" :class="item.active?'active':''" @click="getGame(item)">
                <span :class="item.class"></span>
              </li>
            </ul>
          </div> -->
          <div class="bd">
            <ul class="game-list">
              <li v-for='(item ,index) in gameData' :key='index'>
                <img
                  :src="item.images"
                  lazy="loaded"
                >
                <p>{{item.name}}</p>
                <!-- <div class="bg" :class="item.show ? 'bg1':'bg2'">
                  <a href="javascript:void(0)" @click="loginGame(item)" v-if="item.show">免费试玩</a>
                  <a href="javascript:void(0)" @click="gogame(item)" class="game-in">进入游戏</a>
                </div> -->
                <div class="bg" :class="item.show ? 'bg1':'bg2'" v-if="!item.show">
                  <!-- 彩票 -->
                  <a href="javascript:void(0)" @click="gogame(item)" class="game-in">进入游戏</a>
                </div>
                <div class="bg" :class="item.show ? 'bg1':'bg2'" v-else>
                    <a  v-if="Public_User=='test'||!Public_User"
                      @click="loginTest(item)">免费试玩</a>
                    <a v-if="Public_User!='test'"  @click="gogame(item)" class="game-in">进入游戏</a>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-lx">
      <div class="foot-lx-width">
        <a class="foot-lx-convction" href="tencent://message/?Menu=yes&uin=199899099"></a>
        <a class="foot-lx-convction" href="tencent://message/?Menu=yes&uin=199899099"></a>
        <a class="foot-lx-convction-lxyx"></a>
        <a class="foot-lx-convction-zxkf" @click="kefu"></a>
      </div>
    </div>
    <Modal
      :scrollable="true"
      title="网站公告"
      ok-text="关闭"
      v-model="showPopout"
      width="657"
      class="vp-popout-box"
    >
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>
    <!-- <Modal width="700"  height="550" :scrollable="true" v-model="showimg" class="guanbi">
      <img width="100%" height="100%" :src="imgsrc">
      <span class="close" @click="close"></span>
    </Modal>-->

    <!-- <vp-mc :imgsrc="imgsrc"></vp-mc> -->
  </div>
</template>

<script>
import $ from "jquery";
import store from "@/vuex/store";
import vpMc from "./mc";
import { _SetGet, _SetPost } from "@/service/public/service.js";
import mixin from "../../public/games/public.js";
export default {
  mixins: [mixin],
  data() {
    return {
      jackpotNum: 41126438900,
      setInter: null,
      showimg: false,
      popups: "",
      lantern: "",
      showPopout: false,
      gameData:[
         {
          images: "/static/ly88/img/idnex/jsk3@2x.png",
          name:"江苏快三",
          show:false,
          path: '/plays/tradition/9'
         },
          {
           images: "/static/ly88/img/idnex/wfk3@2x.png",
          name:"5分快三",
          show:false,
          path: '/plays/tradition/3632'
         },
          {
          images: "/static/ly88/img/idnex/sfk3@2x.png",
          name:"3分快三",
          show:false,
          path: '/plays/tradition/3631'
         },
         {classId: 46,
          className: "VG棋牌",
          code: "12",
          devices: "ios,h5,pc,android",
          id: 3627,
          images: "/static/ly88/img/idnex/zjh@2x.png",
          name: "炸金花",
          platform: "chess",
          sequence: 21,
          special_setting: '{"platform":"VG_CHESS", "gameName":"12"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
        {
          classId: 46,
          className: "VG棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 3618,
          images: "/static/ly88/img/idnex/ddz@2x.png",
          name: "斗地主",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"VG_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
           show:true
        },
        {
          classId: 46,
          className: "VG棋牌",
          code: "15",
          devices: "ios,h5,pc,android",
          id: 3629,
          images: "/static/ly88/img/idnex/sss@2x.png",
          name: "十三水",
          platform: "chess",
          sequence: 27,
          special_setting: '{"platform":"VG_CHESS", "gameName":"15"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
        {
          images: "/static/ly88/img/idnex/bjsc@2x.png",
          name:"北京赛车",
          show:false,
          path: '/plays/tradition/2'
         },
          {
          images:' /static/ly88/img/idnex/kssc@2x.png',
          name:"快速赛车",
          show:false,
          path: '/plays/tradition/12',
         },
          {
           images:' /static/ly88/img/idnex/xglhc@2x.png',
          name:"香港六合彩",
          show:false,
           path: '/plays/tradition/1',
         },
        {
          classId: 42,
          className: "开元棋牌",
          code: "830",
          devices: "ios,h5,pc,android",
          id: 245,
          images: "/static/ly88/img/idnex/qznn@2x.png",
          name: "抢庄牛牛",
          platform: "chess",
          sequence: 1,
          special_setting: '{"platform":"KY_CHESS", "gameName":"830"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
        {
          classId: 42,
          className: "开元棋牌",
          code: "620",
          devices: "ios,h5,pc,android",
          id: 247,
          images: "/static/ly88/img/idnex/dzpk@2x.png",
          name: "德州扑克",
          platform: "chess",
          sequence: 8,
          special_setting: '{"platform":"KY_CHESS", "gameName":"620"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
        {
          classId: 42,
          className: "开元棋牌",
          code: "930",
          devices: "ios,h5,pc,android",
          id: 3605,
          images: "/static/ly88/img/idnex/brnn@2x.png",
          name: "百人牛牛",
          platform: "chess",
          sequence: 13,
          special_setting: '{"platform":"KY_CHESS", "gameName":"930"}',
          status: "yes",
          tag: "HOT",
          show:true
        }
      ],
      publicUrl: "https://static.k0061.com/",
      // 游戏类型
      //   @click="goto({'path':`/rules/${$route.meta.series}`,query:{id:$route.meta.id}})"

      // 轮播名单
      carouselData: [],
      //游戏 list
      games:[
        {id:'19',class:'PT', active:true},                  //  1  PT
        {id:'30',class:'DT', active:false},                 //  1  DT
        {id:'26',class:'MG', active:false},                 //  1  MG
        {id:'32',class:'CQ9', active:false},                //   1 CQ9 
        {id:'24',class:'MWSLOT', active:false},             //   1  大满贯
        {id:'27',class:'AMEBA', active:false},               //   1  AE
        {id:'18',class:'BBSLOT', active:false},              //   1  BBin
        {id:'29',class:'JDBSLOT', active:false},             //  1  Jdb

        {id:'42',class:'KY', active:false},             //  1  KY
        {id:'46',class:'VG', active:false},             //  1  VG
        {id:'31',class:'FG', active:false},             //  1  FG
        {id:'28',class:'TTG', active:false},             //  1  TTG
        {id:'17',class:'AG', active:false},             //  1  AG

      ]
    };
  },
  methods: {
    gogame(item){
       if(item.show){
           this.loginGame(item)
       }else{
           if(item.path){
              if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                 if (item.path && item.path.includes('/plays/tradition')) {
                  this.$router.push(item.path)
                  return false
                }
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }

          }

       }
    },
    jackpotFc() {
      clearInterval(this.setInter);
      this.setInter = setInterval(() => {
        this.jackpotNum = this.jackpotNum + 8.56;
      }, 100);
    },
    //获取banner
    async getBanner() {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
        position: "banner",
        clientType: "pc"
      });
      if (res && res.code == 200) {
        this.carouselData = res.data[0] && res.data[0].body; // img 图片
      }
    },
    async getPopout() {
      if (!this.$store.state.mainState.ifpourT || localStorage.token)
        return false;
      let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
        type: "popups",
        desc_client_type: "html"
      });
      if (res && res.code == 200) {
        if (!res.data.data.length) return false;
        this.showPopout = true;
        this.showimg = false;
        this.popups = res.data.data[0] && res.data.data[0].description;
        this.$store.commit("mainState/resetPour", false);
      }
      this.showPopout = true;
      this.showimg = true;
      this.popups = res.data.data[0] && res.data.data[0].description;
      this.$store.commit("mainState/resetPour", false);
    },
    goView(item) {
        if(!item) return false;
        this.$router.push(item)
    },
    kefu() {
      let service = JSON.parse(localStorage.config).service;
      if (service) {
        let ser = service.find(item => item.status === "on");
        if (ser) {
          window.open(ser.url);
        }
      }
    },                       // 新文字走马灯接口
    async getLantern () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
          type: 'lantern',
          // desc_client_type: 'html'
          client_type:"PC"
        })
        if (res && res.code == 200) {
          // if (!res.data.data.length) return false
          // this.lantern = res.data.data[0] && res.data.data[0].description

          if(res.data.data.length){
            this.lantern = res.data.data[0] && res.data.data[0].description
          }else{  
            console.log("文字走马灯没有数据返回")
            return false;
          }

        }
        // 参数： type: lantern 走马灯
        // 参数： type: popups 弹窗
        // 参数： type: notice 提示
      },
    //获取数据
    // async getData(item) {
    //   this.gameData = [];
    //   let id=this.$route.query.id
    //   let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
    //       device: "pc",
    //       id
    //   });
    //   if (res && res.code === 200) {
    //     console.log(res.data.data);
    //     this.gameData = res.data[id];
    //     this.total = res.data.last_page;
    //   }
    // },
  },
 
  created() {
    // this.$store.commit("ly88/setNav", 0);
    // this.getPopout();
    // this.getData('19');
    console.log(this.gameData)
    setTimeout(() => {
      this.showimg = false;
    }, 7000);
  },
  mounted() {
    clearInterval(this.setInter);
    this.jackpotFc();
    // this.getPopout();
    this.getLantern();
    this.getBanner();
  },
  components: {
    vpMc
  },
  store
};
</script>

<style lang="less" scoped>
.ly88-new-index {
  position: relative;
  min-width: 1200px;
  margin: 0 auto;
  font-size: 16px;

  .wrapper {
    width: 1000px;
    height: 100%;
    margin: auto;
  }

  .banner-wrap {
    position: relative;
    background: #1c1b31;
    .notice-wr {
      font-size: 14px;
      height: 42px;
      line-height: 42px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      position: relative;
      margin-top: -40px;
      z-index: 10;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 100%;
    }

    .notice-wr .notice {
      width: 1280px;
      margin: 0 auto;
    }

    .notice-wr .notice .bd {
      height: 42px;
      margin-left: 20px;
      padding-left: 48px;
      background: url(/static/ly88/img/noticebd.png) no-repeat 0;
      a {
        color: #fff;
      }
    }

    .carouse {
      text-align: center;
      width: 100%;

      /deep/ .el-carousel__indicators {
        bottom: 36px;
      }

      /deep/ .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }

    .el-carousel {
      width: 100%;
    }
  }
  .main {
    .jian-wr {
      min-width: 1280px;
      background: #282828;
      height: 129px;
      padding: 12px 0;
    }

    .jian {
      width: 1280px;
      margin: 0 auto;
    }

    .jian > div {
      width: 1044px;
      height: 109px;
      background: url(/static/ly88/img/jian.d32efbd.png) no-repeat;
      float: right;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 345px;
      padding-top: 19px;
    }

    .jian > div .d,
    .jian > div .num {
      width: 46px;
      height: 70px;
      line-height: 70px;
      margin-right: 4px;
      display: block;
      float: left;
    }

    .jian > div .num:last-child {
      margin-right: 0;
    }

    .jian > div .num0 {
      background: url(/static/ly88/img/num0.png) no-repeat 50%;
    }

    .jian > div .num1 {
      background: url(/static/ly88/img/num1.png) no-repeat 50%;
    }

    .jian > div .num2 {
      background: url(/static/ly88/img/num2.png) no-repeat 50%;
    }

    .jian > div .num3 {
      background: url(/static/ly88/img/num3.png) no-repeat 50%;
    }

    .jian > div .num4 {
      background: url(/static/ly88/img/num4.png) no-repeat 50%;
    }

    .jian > div .num5 {
      background: url(/static/ly88/img/num5.png) no-repeat 50%;
    }

    .jian > div .num6 {
      background: url(/static/ly88/img/num6.png) no-repeat 50%;
    }

    .jian > div .num7 {
      background: url(/static/ly88/img/num7.png) no-repeat 50%;
    }

    .jian > div .num8 {
      background: url(/static/ly88/img/num8.png) no-repeat 50%;
    }

    .jian > div .num9 {
      background: url(/static/ly88/img/num9.png) no-repeat 50%;
    }

    .jian .fl {
      margin-top: 5px;
    }
    .con {
      height: 378px;
      min-width: 1280px;
      background: url(/static/ly88/img/coin.e93138a.png) no-repeat center top -150px;
    }

    .con ul {
      width: 1280px;
      margin: 0 auto;
    }

    .con li {
      float: left;
      width: 367px;
      height: 288px;
      cursor: pointer;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 50px;
      position: relative;
    }

    .con li:hover img {
      -webkit-transform: scale(1.03);
      -moz-transform: scale(1.03);
      -ms-transform: scale(1.03);
      -o-transform: scale(1.03);
      transform: scale(1.03);
    }

    .con li a {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .con li img {
      display: block;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
    }

    .con li + li {
      margin-left: 14px;
    }

    .con li .bg {
      line-height: 22px;
      font-size: 13.5px;
      position: absolute;
      bottom: 55px;
      left: 18px;
      width: 100%;
      color: #fff;
    }

    .con li .text {
      text-align: center;
      height: 40px;
      line-height: 40px;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      font-size: 16px;
    }

    .con li.con2 {
      width: 517px;
    }

    .con li.con3 {
      width: 367px;
    }
    .tab-wr {
      min-width: 1280px;
      background: #121212;
      padding: 18px 0;
    }

    .tab-wr .tab {
      width: 1280px;
      margin: 0 auto;
      overflow: hidden;
    }

    .tab-wr .tab .hd {
      border-bottom: 1px solid #000;
      border-top: 1px solid #313131;
      background: #1e1e1e;
    }

    .tab-wr .tab .hd .game-tab {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-flow: row wrap;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
    }

    .tab-wr .tab .hd .game-tab li {
      width: 12.5%;
      height: 82px;
      cursor: pointer;
      line-height: 82px;
      border-bottom: 1px solid #313131;
    }

    .tab-wr .tab .hd li span {
      height: 54px;
      width: 100%;
      display: inline-block;
      vertical-align: middle;
    }

    .tab-wr .tab .hd li span.PT {
      background: url(/static/ly88/img/pt.a37a937.png) no-repeat 50%/90%;
    }

    .tab-wr .tab .hd li.active span.PT {
      background: url(/static/ly88/img/pt2.b811ff1.png) no-repeat 50%/90%;
    }

    .tab-wr .tab .hd li span.DT {
      background: url(/static/ly88/img/dt.c9b0eeb.png) no-repeat 50%;
      -moz-background-size: 90%;
      background-size: 90%;
    }

    .tab-wr .tab .hd li.active span.DT {
      background: url(/static/ly88/img/dt2.27966d2.png) no-repeat 50%;
      -moz-background-size: 90%;
      background-size: 90%;
    }

    // .tab-wr .tab .hd li span.TTG {
    //   background: url(/static/ly88/img/ttg.fccfc8e.png) no-repeat 50%;
    // }

    // .tab-wr .tab .hd li.active span.TTG {
    //   background: url(/static/ly88/img/ttg2.bf7df0c.png) no-repeat 50%;
    // }

    // .tab-wr .tab .hd li span.QT {
    //   background: url(/static/ly88/img/qt.b391894.png) no-repeat 50%/90%;
    // }

    // .tab-wr .tab .hd li.active span.QT {
    //   background: url(/static/ly88/img/qt2.f7c2f88.png) no-repeat 50%/90%;
    // }

    .tab-wr .tab .hd li span.MG {
      background: url(/static/ly88/img/mg.6f3a14f.png) no-repeat 50%/90%;
    }

    .tab-wr .tab .hd li.active span.MG {
      background: url(/static/ly88/img/mg2.20f0b9f.png) no-repeat 50%/90%;
    }

    // .tab-wr .tab .hd li span.NT {
    //   background: url(/static/ly88/img/nt.2d21b0b.png) no-repeat 50%/80%;
    // }

    // .tab-wr .tab .hd li.active span.NT {
    //   background: url(/static/ly88/img/nt2.c5b841d.png) no-repeat 50%/80%;
    // }

    // .tab-wr .tab .hd li span.PNG {
    //   background: url(/static/ly88/img/png.6e00f46.png) no-repeat 50%/90%;
    // }

    // .tab-wr .tab .hd li.active span.PNG {
    //   background: url(/static/ly88/img/png2.4e11179.png) no-repeat 50%/90%;
    // }

    // .tab-wr .tab .hd li span.TGP {
    //   background: url(/static/ly88/img/tgp.d396c9f.png) no-repeat 50%/100%;
    // }

    // .tab-wr .tab .hd li.active span.TGP {
    //   background: url(/static/ly88/img/tgp2.e899c09.png) no-repeat 50%/100%;
    // }

    .tab-wr .tab .hd li span.CQ9 {
      background: url(/static/ly88/img/cq9.b14be8d.png) no-repeat 50%/70%;
    }

    .tab-wr .tab .hd li.active span.CQ9 {
      background: url(/static/ly88/img/cq92.7af92d8.png) no-repeat 50%/70%;
    }

    .tab-wr .tab .hd li span.VG {
      background: url(/static/ly88/img/vg1.png) no-repeat;
    }

    .tab-wr .tab .hd li.active span.VG {
      background: url(/static/ly88/img/vg2.png) no-repeat;
    }

    .tab-wr .tab .hd li span.TTG {
      background: url(/static/ly88/img/ttg1.png) no-repeat;
    }

    .tab-wr .tab .hd li.active span.TTG {
      background: url(/static/ly88/img/ttg2.png) no-repeat;
    }

    .tab-wr .tab .hd li span.MWSLOT {
      background: url(/static/ly88/img/MW.0bd9766.png) no-repeat 50%/80%;
    }

    .tab-wr .tab .hd li.active span.MWSLOT {
      background: url(/static/ly88/img/MW2.bc0ee86.png) no-repeat 50%/80%;
    }

    .tab-wr .tab .hd li span.KY {
      background: url(/static/ly88/img/ky1.png) no-repeat;
    }

    .tab-wr .tab .hd li.active span.KY {
      background: url(/static/ly88/img/ky2.png) no-repeat;
    }

    .tab-wr .tab .hd li span.AG {
      background: url(/static/ly88/img/ag1.png) no-repeat;
    }

    .tab-wr .tab .hd li.active span.AG {
      background: url(/static/ly88/img/ag2.png) no-repeat;
    }

    .tab-wr .tab .hd li span.AMEBA {
      background: url(/static/ly88/img/AMEBA.64cbeed.png) no-repeat 50%/90%;
    }

    .tab-wr .tab .hd li.active span.AMEBA {
      background: url(/static/ly88/img/AMEBA2.5bba3d7.png) no-repeat 50%/90%;
    }

    .tab-wr .tab .hd li span.BBSLOT {
      background: url(/static/ly88/img/BBSLOT.a39e7ac.png) no-repeat 50%/85%;
    }

    .tab-wr .tab .hd li.active span.BBSLOT {
      background: url(/static/ly88/img/BBSLOT2.657f7f2.png) no-repeat 50%/85%;
    }

    .tab-wr .tab .hd li span.JDBSLOT {
      background: url(/static/ly88/img/jdb.9085af3.png) no-repeat 50%/85%;
    }

    .tab-wr .tab .hd li.active span.JDBSLOT {
      background: url(/static/ly88/img/jdb2.3c4e07d.png) no-repeat 50%/85%;
    }

    .tab-wr .tab .hd li span.FG {
      background: url(/static/ly88/img/fg1.png) no-repeat;
    }

    .tab-wr .tab .hd li.active span.FG {
      background: url(/static/ly88/img/fg2.png) no-repeat;
    }

    .tab-wr .tab .hd li.active {
      background: url(/static/ly88/img/navbgred.png)
        no-repeat bottom;
    }

    .tab-wr .tab .hd li {
      border-right: 1px solid #313131;
    }

    .tab-wr .tab .bd {
      width: 1280px;
      min-height:482px;
      border: 10px solid #282828;
      padding-top: 16px;
    }

    .tab-wr .tab .bd:after {
      content: "";
      display: block;
      clear: both;
    }

    .tab-wr .tab .bd li {
      float: left;
      width: 178px;
      margin: 0 16px 15px;
      height: 208px;
      overflow: hidden;
      position: relative;
      color: #fff;
      text-align: center;
    }

    .tab-wr .tab .bd li img {
      width: 178px;
      height: 178px;
      display: block;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
      margin-bottom: 8px;
    }

    .tab-wr .tab .bd li .bg {
      cursor: pointer;
      display: none;
      width: 178px;
      height: 178px;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      border-radius:27px;
    }
    .tab-wr .tab .bd li .bg1 {
       padding-top:55px;
    }
    .tab-wr .tab .bd li .bg2 {
       padding-top:74px;
    }
    .tab-wr .tab .bd li .bg a {
      display: block;
      width: 97px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin: 0 auto 10px;
      background: #0c800c;
      font-size: 14px;
      color: #fff;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    .tab-wr .tab .bd li .bg a.game-in {
      background: red;
    }

    .tab-wr .tab .bd li:hover .bg {
      display: block;
    }
  }
}
.clearfix::before,
.clearfix::after,
.wrapper::before,
.wrapper::after,
.row::before,
.row::after,
.content::before,
.content::after {
  content: ".";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

img {
  border: none;
}
</style>
