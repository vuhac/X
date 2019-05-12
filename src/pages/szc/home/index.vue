<template>
  <div class="new-index szc-home">
    <div class="carouseWrapper">

            <div class="carouse">
              <el-carousel :interval="5000" arrow="never" height="520px">
                <el-carousel-item v-for="(item,i) in carouselData" :key="i">
                  <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
                    <img :src="item.img" alt>
                  </a>
                  <img :src="item.img" alt v-else>
                </el-carousel-item>
              </el-carousel>
            </div>

    </div>
    

    <div class="newgong">
      <div class="newgong-content">
        <div class="notice">
          <i class="iconfont"></i>
          <span>最新消息</span>
        </div>

        <div class="demolist list">
          <marquee
            v-if="lantern"
            align="middle"
            direction="left"
            loop="-1"
            scrollamount="3"
            onmouseout="this.start()"
            onmouseover="this.stop()"
            style="color: #cd1014; font-size: 16px; line-height:38px;overflow: hidden;height: 38px;"
          >
            <span v-html="lantern"></span>
          </marquee>
        </div>
      </div>
    </div>

    <div class="gameWrapper">
      <tradition-game></tradition-game>
      <other-game></other-game>
    
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

    <!-- <Modal
      width="900"
      height="465"
      :scrollable="true"
      :mask-closable="false"
      v-model="showimg"
      class="guanbi alert-img"
    >
      <img width="100%" height="100%" :src="imgsrc">
      <span class="close" @click="close"></span>
    </Modal> -->
    <!-- <vp-mc :imgsrc="imgsrc"></vp-mc> -->

  </div>
</template>

<script>
import $ from "jquery";
import store from "@/vuex/store";
import otherGame from "./othergame";
import traditionGame from "./traditionGame";
import "@/assets/iconfont/szc/iconfont.css";
// import '/static/img/szc/font/iconfont.css'
import data from "../../public/games/public.js";
import vpMc from "./mc"
  import { _SetPost,postS,getS} from '@/service/public/service.js'

export default {
  mixins: [data],
  data() {
    return {
      showimg: false,
      showPopout: false,
      imgsrc: "/static/szc/img/yunshanfu.png",
      imgdata: [
        "/static/szc/img/pcAlert1.png",
        "/static/szc/img/pcAlert2.png",
        "/static/szc/img/pcAlert3.png"
      ],
      popups: "",
      lantern: "",
      value3: 0,
      // 轮播设置
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "none",
        trigger: "click",
        arrow: "hover",
        arrow2: "never"
      },
      // 滚动名单
      random: [
        {
          account: "",
          name: "PT游戏满月财富",
          ico: "/static/public/image/game/ptgame/ashfmf.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏丛林之心",
          ico: "/static/public/image/game/ptgame/ashhotj.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏猫女王",
          ico: "/static/public/image/game/ptgame/catqk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏埃斯梅拉达",
          ico: "/static/public/image/game/ptgame/esmk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏古怪猴子",
          ico: "/static/public/image/game/ptgame/fm.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏玛丽莲梦露",
          ico: "/static/public/image/game/ptgame/gtsmrln.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏年年有余",
          ico: "/static/public/image/game/ptgame/nian_k.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏幸运直击",
          ico: "/static/public/image/game/ptgame/sol.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏三倍猴子",
          ico: "/static/public/image/game/ptgame/trpmnk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏招财进宝",
          ico: "/static/public/image/game/ptgame/zcjb.jpg",
          in: 0,
          out: 0
        }
      ],
      scrollDatas: [],
      // 选项选择
      optionList: [
        { name: "PT", id: "10024", index: 0 },
        { name: "MG", id: "10023", index: 1 },
        { name: "AG", id: "10015", index: 2 },
        { name: "CQ9", id: "10018", index: 3 },
        { name: "DT", id: "10019", index: 4 },
        { name: "AE", id: "10014", index: 5 },
        { name: "TTG", id: "10025", index: 6 },
        { name: "BBIN", id: "10016", index: 7 }
      ],
      optionSel: "PT",
      // 显示图片
      showTypList: [],
      carouselData: [],
      jackpotNum: 41126438900,
      setInter: null,
      publicUrl: "http://img.7900005.com/",
      downloadAppTarget: ""
    };
  },
  methods: {
    upCarl() {
      if (this.value3 == 0) return false;
      this.value3--;
      if (this.value3 <= 0) {
        this.value3 = 0;
      }
      this.optionSel = this.optionList[this.value3].name;
      this.getTypeL(this.optionList[this.value3].id);
    },
    close() {
      this.showimg = false;
    },
    getMycount() {
      let date = new Date();
      if (date.getHours() >= 15 && date.getHours() < 18) {
        this.imgsrc = this.imgdata[1];
      } else if (date.getHours() >= 18 && date.getHours() < 21) {
        this.imgsrc = this.imgdata[2];
      } else {
        this.imgsrc = this.imgdata[0];
      }
    },
    loginGame(item) {
      if (!localStorage.token || !localStorage.userinfo) {
        alert("未登录");
        return false;
      }
      let routeData = this.$router.resolve({
        path: "/loading",
        query: {
          name: item.name,
          platform: JSON.parse(item.special_setting).platform,
          gameName: JSON.parse(item.special_setting).gameName,
          login: true
        }
      });
      window.open(
        routeData.href,
        "newwindow",
        "height=750,width=1285, top=0, left=" +
          (window.screen.availWidth - 1295) / 2 +
          ""
      );
    },
    downCarl() {
      if (this.value3 == this.optionList.length - 1) return false;
      this.value3++;
      if (this.value3 >= this.optionList.length - 1) {
        this.value3 = this.optionList.length - 1;
      }
      this.optionSel = this.optionList[this.value3].name;
      this.getTypeL(this.optionList[this.value3].id);
    },
    optionFc(item) {
      this.optionSel = item.name;
      this.getTypeL(item.id);
      this.value3 = item.index;
    },
    // async getTypeL(id) {
    //   let res = await this.$http.post(`${this.$HOST_NAME}/games/pages`, {
    //     classId: id,
    //     limit: 6,
    //     devices: "pc",
    //     tag: "HOT"
    //   });
    //   if (res && res.code == 200) {
    //     this.showTypList = res.data.data;
    //   } else {
    //     this.$store.commit("alert/showTipModel", {
    //       bool: true,
    //       title: res.message,
    //       model: "warn"
    //     });
    //   }
    // },
    //获取数据
      async getTypeL(item) {
        this.gameData = [];
        let id=this.$route.query.id
        let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
            device: "pc",
            id
        });
        if (res && res.code === 200) {
          console.log(res.data.data);
          this.gameData = res.data[id];
          this.total = res.data.last_page;
        }
      },
    jackpotFc() {
      clearInterval(this.setInter);
      this.setInter = setInterval(() => {
        this.jackpotNum = this.jackpotNum + 8.56;
      }, 100);
    },
    // 新文字走马灯接口
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
    async getPopout() {
      if (!this.$store.state.mainState.ifpourT || localStorage.token)
        return false;
      let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
        type: "popups",
        desc_client_type: "html"
      });
      if (res && res.code == 200) {
        if (!res.data.data.length) {
          this.showimg = true;
          return false;
        }
        this.showPopout = true;
        this.showimg = true;
        this.popups = res.data.data[0] && res.data.data[0].description;
        this.$store.commit("mainState/resetPour", false);
      }
    },
    //获取banner
    async getBanner() {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
        position: "banner",
        clientType: "pc"
      });
      if (res && res.code == 200) {
        this.carouselData = res.data[0] && res.data[0].body;
        this.downloadAppTarget = res.data[0] && res.data[0].downloadAppTarget;
        // console.log(this.carouselData)
      }
    },
    downloadAppFc() {
      window.open("/static/szc/html/download/index.html");
    }
  },
  created() {
    this.getPopout();
    this.getBanner();
    /*this.getMycount()*/
    setTimeout(() => {
      this.showimg = false;
    }, 7000);
    let chars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "j",
      "k",
      "-",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    // 随机用户名
    function generateMixed(n) {
      var res = "";
      for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 61);
        res += chars[id];
      }
      return res;
    }

    //50个模型demo
    let datas = [];
    for (let index = 0; index < 50; index++) {
      // debugger
      let obj = {};
      // for(let key in this.random[Math.floor(Math.random() * 10)]) {
      //   obj[key]=this.random[Math.floor(Math.random() * 10)][key]
      // }
      Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)]);
      datas.push(obj);
    }
    // 求出随机数
    datas.forEach((item, v) => {
      // console.log(v)
      // debugger
      item.in = Math.random().toFixed(2) * 1000;
      item.out =
        Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 10000
          : Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100;
      item.account = generateMixed(3);
    });
    this.scrollDatas = datas;
    // console.log(datas)
    // console.log(this.scrollDatas)
    // this.optionFc(this.optionList[0]);
  },
  mounted() {
    clearInterval(this.setInter);
    this.jackpotFc();
    this.getLantern();
    if (localStorage.config) {
      let config = JSON.parse(localStorage.config);
      this.publicUrl = config.statics;
    }
  },
  components: {
    otherGame,
    traditionGame,
    vpMc
  },
  store
};
</script>

<style lang="less">
.gameWrapper{
  width: 100%;
  background: url(/static/szc/img/BG.c87ce40.png) no-repeat;
  background-size: 100%;
}
.alert-img {
  /deep/ .ivu-modal-content {
    background-color: transparent;
  }
}
.new-index {
    position: relative;
    width: 100%;
    margin: 0 auto;
    .carouseWrapper{
      height:520px;
      width:100%;
      background: url(/static/szc/img/banner_bg.398ffcf.png) no-repeat;
      background-size:100% 100%;
    }

  .newgong {
    width: 100%;
    height: 38px;
    background: rgba(205, 16, 20, 0.1);

    .newgong-content {
      width: 1360px;
      height: 38px;
      margin: 0 auto;
      line-height: 38px;
      .notice {
        display: inline-block;
        float: left;
        margin-right: 50px;
        position: relative;
        i {
          color: #cd1014;
          position: absolute;
          left:0;
          top:9px;
          font-size: 23px;
          background:url(/static/szc/img/home/notice.png)no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          width:24px;
          height: 18px;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          margin-left:44px;
        }
      }

      .demolist {
        display: inline-block;
        width: 1186px;
      }
    }
  }

  .carouse {
    text-align: center;
    min-width:1200px;
    margin: 0 auto;
    max-width: 1920px;
    .el-carousel {
      width: 100%;
    }
    .el-carousel__indicators {
      bottom: 5px;
    }

    .el-carousel__button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }

  .downLoad-wrap {
    zoom: 1;
    width: 1200px;
    margin: 0 auto;
    padding-top: 22px;
    padding-bottom: 22px;

    .download {
      width: 330px;
      font-size: 14px;
      display: inline-block;
      margin-right: 15px;

      .app_part,
      .down_part {
        padding-top: 28px;
        float: left;
        width: 165px;
        height: 150px;
        // line-height: 150px;
        position: relative;
        background: #b48c68;
        text-align: center;
        font-size: 18px;
        color: #fff;
        transition: all 0.5s;
        cursor: -webkit-pointer;
        cursor: pointer;

        &:hover {
          background: #ff5555;
        }

        i {
          font-size: 62px;
        }

        h3 {
          padding-top: 15px;
        }
      }

      .down_part {
        background: #b59f85;
        float: right;
      }
    }

    .jackpots {
      display: inline-block;
      width: 850px;
      height: 150px;
      background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
        url("/static/szc/img/jackpot_out1.jpg") no-repeat;
      position: relative;
      -webkit-animation: bg 0.5s linear infinite;
      -o-animation: bg 0.5s linear infinite;
      -moz-animation: bg 0.5s linear infinite;
      animation: bg 0.5s linear infinite;
      @-webkit-keyframes bg {
        0% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-moz-keyframes bg {
        0% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-o-keyframes bg {
        0% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-ms-keyframes bg {
        0% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @keyframes bg {
        0% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/szc/img/jackpot_in1.jpg") no-repeat center,
            url("/static/szc/img/jackpot_out2.jpg") no-repeat;
        }
      }

      .light {
        height: 150px;

        .jackpots_model {
          position: absolute;
          top: -33px;
          left: -39px;
        }

        .jackpot-title {
          float: left;
          padding: 47px 1% 47px 12.5%;
        }

        .jackpot-number {
          float: left;
          line-height: 150px;
          font-size: 52px;
          color: #fff;
          font-weight: 600;
          // letter-spacing: 4px;
          span {
            display: inline-block;
            float: left;
          }
        }

        .jackpots_bar {
          position: absolute;
          top: -5px;
          right: -60px;
        }
      }
    }
  }

  .kelake-bot-wrap {
    width: 1200px;
    margin: 0 auto;
    zoom: 1;
    overflow: hidden;

    .section_title {
      padding-left: 20px;
      background: #b48c68;
      line-height: 50px;
      color: #fff;

      .type {
        float: right;
        margin-right: 35px;

        li {
          display: inline-block;
          vertical-align: top;
          font-size: 14px;
          letter-spacing: normal;
          zoom: 1;
          height: 20px;
          margin: 16px -12px 0 15px;
          padding: 0 12px;
          line-height: 20px;
          border-radius: 15px;
          background: #b48c68;
          color: #fff;

          &.active {
            background: #fff;
            color: #b48c68;
          }

          // margin: 0px 2px;
          // display: inline-block;
          a {
            //   font-size: 15px;
            //   display: inline-block;
            //   color: #fff;
            //   height: 20px;
            //   line-height: 20px;
            //   padding: 0 10px;
            //   border-radius: 16px;
            color: #fff;

            &.active {
              background: #fff;
              color: #b48c68;
            }
          }
        }
      }
    }

    .game-list-left {
      position: relative;
      height: 985px;
      width: 330px;
      background: #fff;
      margin-bottom: 20px;
      float: left;

      .topLoop {
        ul {
          height: 931px;
          overflow: hidden;

          .wrap {
            position: relative;
            top: 0;
            -webkit-animation: animateSub 120s linear infinite;
            -o-animation: animateSub 120s linear infinite;
            -moz-animation: animateSub 120s linear infinite;
            animation: animateSub 120s linear infinite;
            // @-webkit-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            // @-moz-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            // @-o-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            // @-ms-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            @keyframes animateSub {
              0% {
                top: 0;
              }
              100% {
                top: -5000px;
              }
            }

            li {
              padding: 20px 20px 0;
              border-bottom: 2px solid #f1f1f1;
              height: 100px;
              width: 100%;

              .gamepic {
                width: 66px;
                height: 66px;
                float: left;
                margin-right: 15px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .wintext {
                width: 200px;
                float: left;
                font-size: 12px;
                color: #555;

                div {
                  padding-bottom: 6px;

                  span {
                    color: red;
                  }
                }
              }
            }
          }
        }
      }
    }

    .game-list-right {
      float: right;
      position: relative;
      width: 850px;

      .game-bg {
        overflow: hidden;
        position: relative;

        &:hover {
          .item_list {
            display: block;
          }

          &::before {
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
        }

        .item_list {
          display: none;
          text-align: center;

          .item {
            position: relative;
            display: inline-block;
            color: #fff;
            cursor: -webkit-pointer;
            cursor: pointer;

            .ball {
              width: 64px;
              height: 64px;
              border-radius: 99em;
              border: 1px solid #fff;
              font-size: 18px;
              line-height: 64px;
              text-align: center;
              margin-bottom: 10px;
              -moz-transition: transform 0.5s ease;
              -webkit-transition: transform 0.5s ease;
              -o-transition: transform 0.5s ease;
              transition: transform 0.5s ease;
              display: inline-block;
            }

            &.loy {
              padding-top: 50px;

              &:first-child {
                padding-right: 50px;
              }
            }

            &:hover {
              .ball {
                background: #fd4747;
                border: 1px solid #fd4747;
                transform: rotate(360deg);
              }
            }
          }
        }
      }

      .all {
        position: relative;

        .arrow {
          position: absolute;
          top: 0;
          height: 100%;
          z-index: 2;
          width: 15px;
          cursor: -webkit-pointer;
          cursor: pointer;

          &.left {
            left: 0;
          }

          &.right {
            right: 0;
          }

          .bg-arrow_left {
            width: 15px;
            height: 23px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            background: url(/static/szc/img/arrow_sprites.png) -10px -10px;
          }

          .bg-arrow_right {
            width: 15px;
            height: 23px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            background: url(/static/szc/img/arrow_sprites.png) -45px -10px;
          }
        }

        .all-vrL {
          position: relative;
          height: 155px;
          overflow: hidden;

          .type-ul {
            text-align: center;

            .type-li {
              position: relative;
              overflow: hidden;
              display: inline-block;
              margin: 20px 6px;
              cursor: -webkit-pointer;
              cursor: pointer;

              &:hover {
                .mask {
                  top: 0;
                }
              }

              .mask {
                position: absolute;
                top: -110px;
                left: 0;
                width: 116px;
                height: 110px;
                background-color: rgba(0, 0, 0, 0.6);
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;

                div {
                  display: block;
                  width: 75px;
                  height: 30px;
                  line-height: 30px;
                  background: #fd4747;
                  margin: 18px auto 16px;
                  border-radius: 5px;
                  font-size: 12px;

                  a {
                    color: #fff;
                  }
                }

                .play {
                  background: #b48c68;
                }

                &.active {
                  padding-top: 20px;
                }
              }

              .img {
                width: 116px;
                height: 110px;
                position: relative;
                overflow: hidden;

                img {
                  width: 100%;
                  height: 100%;
                }

                &.active {
                  img {
                    width: 200%;
                    height: 100%;
                  }
                }
              }

              .text {
                font-size: 14px;
                padding-top: 5px;
              }
            }
          }
        }
      }

      .slot_game {
        height: 200px;
        margin-bottom: 20px;
        background-image: url("/static/szc/img/game/slot_game.jpg");
        background-size: cover;

        .slot-vrL {
          height: 200px;

          .item_list {
            .item {
              padding-top: 60px;
              padding-left: 40px;
            }
          }
        }
      }

      .live_game {
        zoom: 1;
        overflow: hidden;

        .vrL {
          width: 100%;
          height: 180px;
          overflow: hidden;

          .item_list {
            .item {
              padding-top: 50px;
              padding-left: 5px;
              padding-right: 5px;
              // padding:0;
              &:last-child {
                // padding-right: 0;
              }
            }
          }

          .right {
            right: 0;
          }
        }

        .live {
          width: 559px;
          height: 180px;
          margin-right: 21px;
          overflow: hidden;
          position: relative;
          background-image: url("/static/szc/img/game/live_casino.jpg");
          float: left;
          background-size: cover;
        }

        .gym {
          width: 270px;
          height: 180px;
          overflow: hidden;
          position: relative;
          float: left;
          background-image: url("/static/szc/img/game/sports_events.jpg");
          background-size: cover;
        }
      }

      .fish_game {
        height: 180px;
        margin-top: 10px;
        background-image: url("/static/szc/img/game/fishing_game.jpg");
        background-size: cover;

        .item_list {
          .item {
            padding-right: 58px;

            &:last-child {
              padding-right: 0;
            }
          }
        }
      }

      .lottery_game {
        height: 180px;
        margin-top: 10px;
        background-image: url("/static/szc/img/game/lottery.jpg");
        background-size: cover;
      }
    }
  }

  .vp-popout-box {
    /deep/ .ivu-modal {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -328px;
      margin-top: -273px;
    }

    /deep/ .ivu-modal-close {
      z-index: 2;
      top: 6px;

      i {
        color: #fff;
      }
    }

    /deep/ .ivu-modal-header {
      width: 650px;
      height: 34px;
      margin-top: 5px;
      margin-left: 3px;
      padding: 0;
      border-radius: 10px;
      border: 1px solid #494437;
      background: #ff0000;
      color: #ffffff;
      font-weight: bold;
      position: relative;
      top: 4px;

      .ivu-modal-header-inner {
        color: #fff;
        line-height: 34px;
        height: 34px;
        padding-left: 15px;
      }
    }

    /deep/ .ivu-modal-footer {
      border-top: 1px solid #cdd5da;

      .ivu-btn-text {
        display: none;
      }

      .ivu-btn-primary {
        background: #ff0000;
        border-color: #ff0000;
        padding: 3px 12px 3px 12px;
        border-radius: 6px;
      }
    }

    .popout-box {
      min-height: 427px;
      font-family: "Microsoft YaHei";
      font-size: 24px;
      line-height: 1.5;
      color: #383838;
    }
  }
}
// .guanbi{
//   width: 657px;
//   height: 546.67px;

// }
.guanbi img {
  position: relative;
}
.guanbi .ivu-modal-footer {
  display: none;
}
.guanbi .ivu-modal-body {
  padding: 0 !important;
  height: 465px;
}
.guanbi .ivu-modal-close {
  display: none;
}
.guanbi .ivu-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -450px;
  margin-top: -233px;
}
.guanbi .close {
  position: absolute;
  display: block;
  width: 70px;
  height: 70px;
  right: 0;
  top: 110px;
  cursor: -webkit-pointer;
  cursor: pointer;
}
</style>
