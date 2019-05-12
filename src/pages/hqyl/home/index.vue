<template>
  <div class="new-index hqyl-home">
    <div class="banner">
      <div class="newgong">
        <div class="newgong-content">
          <div class="demolist list">
            <div class="notice">
              <img src="/static/hqyl/img/home/icon-speaker.png" alt="">
            </div>
            <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()"
                     style="color: white; font-size: 15px; line-height: 40px;overflow: hidden;height: 40px;"
            >
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>

      <div class="carouse">
        <el-carousel :interval="2000" arrow="never" height="410px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt="">
            </a>
            <img :src="item.img" alt="" v-else>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>


    <div class="hqyl-bot-wrap">
      <div class="content">
        <div class="content_left">
          <div class="live-entertainment">
            <div class="header">
              <h1 class="title">真人视讯</h1>
              <ul class="type" @mouseleave="liveLeave">
                <li @click="getItemId(item)" @mouseenter="liveEnter(item)" :key='index'
                    v-for="(item,index) in optionList" :class="{'active':setting.live.liveVal==item.index}">
                  <a href="javascript:void(0)">{{item.name}}</a>
                </li>
              </ul>
            </div>
            <Carousel v-model="setting.live.liveVal" :autoplay="setting.live.autoplay"
                      :autoplay-speed="setting.live.autoplaySpeed" :dots="setting.live.dots"
                      :trigger="setting.live.trigger" :arrow="setting.live.arrow">
              <Carousel-item :key='outIndex' v-for="(outItem,outIndex) in optionList">
                <a>
                  <img @click="getItemId(outItem)" :src="outItem.img" alt="">
                </a>
              </Carousel-item>
            </Carousel>
          </div>
          <div class="other-entertainment">
            <ul class="item-wrap">
              <li class="item" v-for="(item,i) in otherGame" :key="i">
                <div class="title">{{item.name}}</div>
                <div class="cont-wrap">
                  <img :src="item.img" alt="">
                  <a @click="goTo(item)" class="start" href="javascript:void(0);">{{item.btnName}}</a>
                  <div v-if="i==1" class="amount">
                    <h1>老虎机总彩池</h1>
                    <div class="jp_">
                      <h2> CNY
                        {{jackpotNum.toString().substring(0,3)}},{{jackpotNum.toString().substring(3,6)}},{{jackpotNum.toString().substring(6,9)}}.{{jackpotNum.toString().substring(9,11)}}</h2>
                    </div>
                  </div>
                  <div v-if="i==2" class="scoll">
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <!-- <div class="text">
                      <div>切尔希 (中)VS拜仁慕尼黑</div>
                      <div>0.91受平半1.01</div>
                      <div>2017-07-25 19:35</div>
                      <div>*国际冠军杯</div>
                    </div> -->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="content_right">
          <div class="box1">
            <h1>环球风采</h1>
            <a>
              <img src="/static/hqyl/img/home/live/banner-history.jpg" alt="">
            </a>
          </div>
          <div class="box2 box1">
            <h1>环球赢家排行</h1>
            <div class="header">
              <span>会员帐号</span>
              <span>单注金额</span>
              <span>单注盈利</span>
            </div>
            <div class="box2-content">
              <div class="wrap">
                <div v-for="(item,index) in scrollDatas" :key="index">
                  <span>{{item.account}}</span>
                  <span>{{item.in}}</span>
                  <span>{{item.in}}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="box3 box1">
            <div class="title">环球娱乐手机APP下载</div>
            <div class="downLoad">
              <div class="codqr">
                <!-- <img src="/static/hqyl/img/home/footer/qr.png" alt=""> -->
                <div ref="qr-code"></div>
              </div>
              <div class="text">
                <div class="header">扫描二维码</div>
                <div class="type">
                  <img src="/static/hqyl/img/home/live/iphone.png" alt="">
                  <img src="/static/hqyl/img/home/live/android.png" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="box4 box1">
            <div class="title">亿元彩金月月送</div>
            <router-link :to="{name:'vpYouhui'}">
              <img src="/static/hqyl/img/home/live/qwcjyys.jpg" alt="">
            </router-link>
          </div>

        </div>
      </div>
    </div>
    <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>

     <!-- <Modal width="907" height="425" :scrollable=true :mask-closable=false v-model="showimg" class='guanbi alert-img'>
       <img width="100%" height="100%" :src="imgsrc"/>
       <span class="close" @click="close"></span>
     </Modal> -->
     <vp-mc :imgsrc="imgsrc"></vp-mc>
  </div>
</template>

<script>
  import $ from 'jquery'
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'
  import vpMc from "./mc"

  export default {
    mixins: [data],
    data () {
      return {
        showimg:false,
        showPopout: false,
        imgsrc:'/static/hqyl/img/qpssq.png',
        imgdata:['/static/hqyl/img/pcAlert1.png','/static/hqyl/img/pcAlert2.png','/static/hqyl/img/pcAlert3.png'],
        popups: '',
        lantern: '',
        // 轮播设置
        setting: {
          live: {
            liveVal: 0, autoplaySpeed: 3000, autoplay: true, dots: 'none', trigger: 'click', arrow: 'never'
          }
        },
        // 滚动名单
        scrollDatas: [],
        // 选项选择
        optionList: [
          {name: 'AG贵宾厅', index: 0, platform: 'live_casino', id: '31', img: '/static/hqyl/img/banner_game/zrsx_ag.jpg'},
          {
            name: 'BBIN旗舰厅',
            index: 1,
            platform: 'live_casino',
            id: '32',
            img: '/static/hqyl/img/banner_game/zrsx_bbin.jpg'
          },
          {name: 'BG大遊厅', index: 2, platform: 'live_casino', id: '3180', img: '/static/hqyl/img/banner_game/zrsx_bg.jpg'},
          {name: 'DG梦幻厅', index: 3, platform: 'live_casino', id: '42', img: '/static/hqyl/img/banner_game/zrsx_dg.jpg'},
          {name: 'DS视讯厅', index: 4, platform: 'live_casino', id: '34', img: '/static/hqyl/img/banner_game/zrsx_ds.jpg'},
        ],
        otherGame: [
          {name: '彩票游戏', img: '/static/hqyl/img/home/live/gpi_cp.jpg', btnName: '进入游戏', router: '/plays/hall'},
          {
            name: '电子游艺',
            img: '/static/hqyl/img/home/live/gpi_dzyy.jpg',
            btnName: '进入游戏',
            router: '/home/games?id=10022&name=MG老虎机'
          },
          {name: '体育投注', img: '/static/hqyl/img/home/live/gpi_tytz.jpg', btnName: '进入游戏', router: '/sport'},
          {name: '捕鱼达人', img: '/static/hqyl/img/home/live/gpi_bydr.jpg', btnName: '进入游戏', router: '/home/buyu'}
        ],
        carouselData: [],
        jackpotNum: 30631803863,
        setInter: null,
      }
    },
    methods: {
      //获取banner
      async getBanner () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
          position: 'banner',
          clientType: 'pc'
        })
        if (res && res.code == 200) {
          this.carouselData = res.data[0] && res.data[0].body
        }
      },
      liveEnter (item) {
        this.setting.live.autoplay = false
        this.setting.live.liveVal = item.index
      },
       close(){
          this.showimg=false;
      },
       getMycount(){
        　let date=new Date();
         if(date.getHours()>=15&&date.getHours()<18){
　　　　         this.imgsrc=this.imgdata[1]
　　      }else if(date.getHours()>=18&&date.getHours()<21){
                this.imgsrc=this.imgdata[2]
          }else{
　　　　        this.imgsrc=this.imgdata[0]
　     　}
      },
      liveLeave () {
        this.setting.live.autoplay = true
      },

      jackpotFc () {
        clearInterval(this.setInter)
        this.setInter = setInterval(() => {
          this.jackpotNum = this.jackpotNum + 8.56
        }, 20)
      },
      goTo (item) {
        if (item.router == '/sport') {
          this.getItemId({name: '皇冠体育', id: '39', platform: 'sport',})
        } else {
          this.$router.push(item.router)
        }
      },
      // async getLantern () {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
      //     type: 'lantern',
      //     desc_client_type: 'html'
      //   })
      //   if (res && res.code == 200) {
      //     if (!res.data.data.length) return false
      //     this.lantern = res.data.data[0] && res.data.data[0].description
      //   }
      //   // 参数： type: lantern 走马灯
      //   // 参数： type: popups 弹窗
      //   // 参数： type: notice 提示
      // },
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
      async getPopout () {
        if (!this.$store.state.mainState.ifpourT || localStorage.token)
          return false
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'popups',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length){
            this.showimg=true
            return false
          }
          this.showPopout = true
          this.showimg=true
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      }
    },
    created () {
      // this.getPopout()
      /*this.getMycount()*/
       setTimeout(() => {
         this.showimg=false
      }, 7000)
      let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', '-', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

      // 随机用户名
      function generateMixed (n) {
        var res = ''
        for (var i = 0; i < n; i++) {
          var id = Math.ceil(Math.random() * 61)
          res += chars[id]
        }
        return res
      }

      //50个模型demo
      let datas = []
      for (let index = 0; index < 20; index++) {
        let arr = [2, 3, 4, 5, 4, 5, 2, 3, 4, 2]
        datas.push(
          {
            account: generateMixed(arr[Math.floor(Math.random() * 10)]) + '***',
            in: 99 * Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10)
          }
        )
      }
      this.scrollDatas = datas
    },
    mounted () {
      clearInterval(this.setInter)
      this.jackpotFc()
      this.getLantern()
      this.getBanner()
    
      this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size: 90
      })
    
    },
    beforeDestroy () {
      clearInterval(this.setInter)
    },
    components:{
        vpMc
    },
    store
  }
</script>

<style lang="less" scoped>
  .alert-img {
    /deep/ .ivu-modal-content {
      background-color: transparent;
    }
  }
  @keyframes homAanimate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-webkit-keyframes homAanimate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-moz-keyframes homAanimate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-o-keyframes homAanimate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-ms-keyframes homAanimate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @keyframes animate2 {
    0% {
      top: 0
    }
    1% {
      top: -25px
    }
    5% {
      top: -25px
    }
    6% {
      top: -50px
    }
    10% {
      top: -50px
    }
    11% {
      top: -75px
    }
    15% {
      top: -75px
    }
    16% {
      top: -100px
    }
    20% {
      top: -100px
    }
    21% {
      top: -125px
    }
    25% {
      top: -125px
    }
    26% {
      top: -150px
    }
    30% {
      top: -150px
    }
    31% {
      top: -175px
    }
    35% {
      top: -175px
    }
    36% {
      top: -200px
    }
    40% {
      top: -200px
    }

    41% {
      top: -225px
    }
    45% {
      top: -225px
    }
    46% {
      top: -250px
    }
    50% {
      top: -250px
    }
    51% {
      top: -275px
    }
    55% {
      top: -275px
    }
    56% {
      top: -300px
    }
    60% {
      top: -300px
    }
    61% {
      top: -325px
    }
    65% {
      top: -325px
    }
    66% {
      top: -350px
    }
    70% {
      top: -350px
    }

    71% {
      top: -375px
    }
    75% {
      top: -375px
    }
    76% {
      top: -400px
    }
    80% {
      top: -400px
    }
    81% {
      top: -425px
    }
    85% {
      top: -425px
    }
    86% {
      top: -450px
    }
    90% {
      top: -450px
    }
    91% {
      top: -475px
    }
    95% {
      top: -475px
    }
    96% {
      top: -500px
    }
    100% {
      top: -500px
    }
  }

  .new-index {
    position: relative;
    background: #f1f1f1;

    .banner {
      position: relative;
      background-color: #10151b;

      .newgong {
        position: absolute;
        height: 42px;
        width: 100%;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        border-bottom: 1px solid #473a0b;
        border-top: 1px solid #473a0b;
        z-index: 12;

        .newgong-content {
          width: 1200px;
          height: 42px;
          margin: 0 auto;

          .demolist {
            display: inline-block;
            width: 950px;
            position: relative;

            .notice {
              display: inline-block;
              position: absolute;
              top: 12px;
              left: -30px;
            }
          }
        }
      }

      .carouse {
        text-align: center;
        width: 100%;

        /deep/ .el-carousel__indicators {
          bottom: 42px;

          .el-carousel__indicator {
            .el-carousel__button {
              width: 13px;
              height: 13px;
              border-radius: 50%;
              // background: rgba(0, 0, 0, 0.9);
            }
          }
        }

        // /deep/ .el-carousel__button {
        //   width: 13px;
        //   height: 13px;
        //   border-radius: 50%;
        //   // background: rgba(0, 0, 0, 0.9);
        // }
        // /deep/ .el-carousel__indicator {
        // bottom: 50px;
        // background: red;
        // &.is-active{
        //   .carousel__button {
        //     background: #fff;
        //   }

        // }
        // }
      }
    }

    .hqyl-bot-wrap {
      width: 100%;
      background-color: #1d1f22;
      zoom: 1;
      overflow: hidden;

      .content {
        width: 1020px;
        margin: 0 auto;
        zoom: 1;
        overflow: hidden;
        padding-bottom: 40px;
        margin-top: 20px;

        .content_left {
          position: relative;
          height: 752px;
          width: 740px;
          float: left;

          .live-entertainment {
            background: #333;
            height: 300px;
            margin-bottom: 10px;
            width: 737px;

            .header {
              width: 737px;
              height: 40px;
              background: url(/static/hqyl/img/live-ent-bg.jpg) no-repeat left top;

              .title {
                float: left;
                font-weight: normal;
                font-size: 14px;
                color: #dfdfdf;
                margin: 10px 0 13px 15px;
              }

              .type {
                float: right;
                margin-top: 10px;
                margin-right: 10px;

                li {
                  display: inline-block;

                  a {
                    color: #707070;
                    padding: 5px 7px;
                    font-size: 13px;
                  }

                  &:hover, &.active {
                    a {
                      color: #000;
                      background: #8e7938;
                    }
                  }
                }
              }
            }
          }

          .other-entertainment {
            .item-wrap {
              zoom: 1;
              overflow: hidden;

              .item {
                float: left;
                width: 360px;
                height: 217px;
                background: #333 url(/static/hqyl/img/home/2col-bg.jpg) no-repeat left top;
                margin-bottom: 10px;

                .title {
                  font-weight: normal;
                  font-size: 14px;
                  color: #dfdfdf;
                  line-height: 46px;
                  padding-left: 15px;
                }

                .cont-wrap {
                  width: 360px;
                  height: 173px;
                  position: relative;

                  &::before {
                    position: absolute;
                    left: 0;
                    top: 0;
                    content: '';
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    z-index: 1;
                    display: none;
                  }

                  &:hover {
                    &::before {
                      display: block;
                    }

                    .start {
                      display: block;
                    }
                  }

                  img {
                    width: 100%;
                  }

                  .start {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 2;
                    margin-left: -60px;
                    margin-top: -17px;
                    line-height: 35px;
                    text-align: center;
                    color: #000;
                    width: 120px;
                    height: 35px;
                    font-size: 16px;
                    background: url(/static/hqyl/img/home/live/bet-btn-bg1.jpg) no-repeat left top;

                    &:hover {
                      background: url(/static/hqyl/img/home/live/bet-btn-bg.jpg) no-repeat left top;
                    }

                    display: none;
                  }

                  .amount {
                    position: absolute;
                    top: 105px;
                    left: 18px;
                    color: #fff;

                    .jp_ {
                      width: 100%;
                      height: 25px;
                      line-height: 25px;
                      margin-top: 10px;
                      text-align: center;
                      color: #ffcf4c;
                      font-size: 13px;
                      border: 1px solid #997837;
                      background: #000;
                      padding: 0 10px;
                      font-weight: 730;
                    }
                  }

                  .scoll {
                    overflow: hidden;
                    // position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 50px;

                    .bottom {
                      width: 100%;
                      height: 25px;
                      background: rgba(0, 0, 0, .8);
                    }

                    .top {
                      width: 100%;
                      height: 25px;
                      background: url('/static/hqyl/img/home/live/sportbottom.png');
                    }

                    .text {
                      position: absolute;
                      bottom: 0;
                      line-height: 25px;
                      color: #fff;
                      font-weight: 700;
                      -webkit-animation: homAanimate 8s infinite linear;
                      animation: homAanimate 8s infinite linear;
                      -moz-animation: homAanimate 8s infinite linear;
                      -o-animation: homAanimate 8s infinite linear;
                      -ms-animation: homAanimate 8s infinite linear;

                      div {
                        width: 360px;
                        text-align: center;
                        font-size: 12px;

                        &:nth-child(2n) {
                          color: #ffd200;
                        }
                      }
                    }
                  }
                }

                &:nth-child(2n) {
                  margin-left: 17px;
                }
              }
            }
          }
        }

        .content_right {
          float: right;
          overflow: hidden;
          height: 755px;
          float: right;
          width: 270px;

          .box1 {
            padding-top: 10px;
            padding: 10px 14px;
            background: #333 url(/static/hqyl/img/home/live/rightcol-bg.jpg) no-repeat;

            h1 {
              width: 100%;
              padding-left: 22px;
              font-weight: normal;
              font-size: 14px;
              color: #dfdfdf;
              background: #333 url(/static/hqyl/img/home/live/trophy.png) no-repeat left center;
              margin-bottom: 10px;
            }
          }

          .box2 {
            margin-top: 2px;
            background-position-y: -2px;

            h1 {
              background: #333 url(/static/hqyl/img/home/live/cash.png) no-repeat left center;
            }

            .header {
              border-top: 1px solid #494949;
              border-bottom: 1px solid #494949;

              span {
                width: 76px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                display: inline-block;
                font-size: 14px;
                color: #8b8b8b;
                font-weight: normal;
              }
            }

            .box2-content {
              position: relative;
              width: 240px;
              height: 120px;
              overflow: hidden;
              padding: 5px 0;

              .wrap {
                position: absolute;
                top: 0;
                left: 0;
                -webkit-animation: animate2 30s infinite linear;
                animation: animate2 30s infinite linear;
                -moz-animation: animate2 30s infinite linear;
                -o-animation: animate2 30s infinite linear;
                -ms-animation: animate2 30s infinite linear;

                div {
                  width: 100%;
                  color: #8b8b8b;

                  &:hover {
                    color: #fff;
                  }

                  span {
                    width: 77px;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    display: inline-block;
                    font-size: 14px;
                    font-weight: normal;
                  }
                }
              }

            }
          }

          .box3 {
            width: 270px;
            height: 148px;
            background: #333 url(/static/hqyl/img/home/live/rightcol-bg.jpg) no-repeat;
            background-position-y: -2px;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 10px 25px;

            .title {
              font-size: 12px;
              color: #848484;
              text-align: center;
            }

            .downLoad {
              padding-top: 20px;
              zoom: 1;
              overflow: hidden;

              .codqr {
                float: left;
                width:95px;
                height:95PX;
                background:#fff;
                position:relative;
                div{
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                }
              }

              .text {
                width: 102px;
                height: 90px;
                float: right;

                .header {
                  color: #dbdbdb;
                  font-size: 14px;
                  text-align: center;
                  padding-top: 6px;
                }

                .type {
                  border: 1px solid #505050;
                  text-align: center;
                  padding: 5px 10px;
                  margin-top: 15px;

                  img {
                    display: inline-block;
                    width: 34px;
                    height: 34px;
                  }
                }
              }
            }
          }

          .box4 {
            width: 270px;
            height: 200px;
            background: #333 url(/static/hqyl/img/home/live/rightcol-bg.jpg) no-repeat;
            background-position-y: -2px;
            padding: 30px 10px;

            .title {
              color: #fff;
              padding-bottom: 10px;
              position: relative;

              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: -20px;
                width: 40px;
                height: 20px;
                background: url(/static/hqyl/img/home/live/hot_red.png) no-repeat
              }
            }
          }
        }

      }

    }

  }


  .guanbi img{
    position: relative;
  }
  .guanbi .ivu-modal-footer{
    display: none;
  }
  .guanbi .ivu-modal-body{
    padding: 0 !important;
    height: 425px;
  }
  .guanbi .ivu-modal-close{
    display: none;
  }
  .guanbi .ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -453px;
        margin-top: -212px;
  }
 .guanbi .close{
    position: absolute;
    display: block;
   width: 40px;
   height: 40px;
   right: 100px;
   top: 80px;
    cursor: pointer;
  }
</style>
