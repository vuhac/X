<template>
  <div class="new-index hqyl-home">
    <div class="banner">
      <div class="newgong">
        <div class="newgong-content">
          <div class="demolist list">
            <div class="notice">
              <img src="/static/sjcp/img/home/icon-speaker.png" alt="">
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
        <el-carousel :interval="2000" arrow="never" height="503px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt="">
            </a>
            <img :src="item.img" alt="" v-else>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="more_game">
          <div class="middle_min">
              <div class="middle_title"></div>
              <div class="more_game_middle clear">
                  <div class="middle_top clear animated fadeInDownBig">
                      <div class="top_games clear">
                          <div v-for="(gamesItem,gamesIndex) in gameList" :key="gamesIndex" class="games_box z9999" @click="goLink(gamesItem.path)">
                               <a href="javascript:void(0);" class="game_icon">
                                  <!-- <span :class="['game_icon_'+(gamesIndex+1)]" :style="{background: 'url(' + gamesItem.bgImg + ') center center no-repeat'}">

                                  </span> -->
                                  <span :class="['game_icon_'+(gamesIndex+1)]">
                                    <img :src="gamesItem.bgImg" alt="">
                                  </span>

                              </a>
                              <div class="lottery_species">
                                  <a class="species_center" href="javascript:void(0);">
                                      {{gamesItem.name}}
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="hot_list">
                          <div class="agent" id="ranking">
                              <div class="winners-box winners-box1" style="width: inherit;">
                                  <div class="winners-head" style="margin: 0 auto;">
                                      <a href="javascript:;" data-bind="click:function(){tab(2)},css:tab() === 2 &amp;&amp; 'active'" class="active">中奖排行</a>
                                  </div>
                                  <div class="winners" style="position: relative;overflow:hidden;" id="winners_box1">
                                      <div style="position: absolute; width: 100%; height: 660px;">
                                          <ul :style="[{'height':'330px',transform: 'translateY(-'+noticePosition+'px) translateZ(0px)'}]" data-bind="visible:tab() === 2,foreach:prizeList;" class="winning-list" ref="winningData">
                                              <li v-for="(item,index) in winningInfo" :key="index">
                                                  <a href="javascript:;">
                                                      <i :class="['charts-icon',index<=2?'icon-'+(index+1):'']" v-text="index>2?index:''"></i>
                                                      <p data-bind="text:FAccount">{{item.name.padEnd(8, '*')}}</p>
                                                      <span><font class="fc-orange" data-bind="text:Amount">{{item.num}}</font>元</span>
                                                  </a>
                                              </li>
                                          </ul>
                                          <ul :style="[{'height':'330px',transform: 'translateY(-'+noticePosition+'px) translateZ(0px)'}]" data-bind="visible:tab() === 2,foreach:prizeList;" class="winning-list" ref="winningDat">
                                              <li v-for="(item,index) in winningInfo" :key="index">
                                                  <a href="javascript:;">
                                                      <i :class="['charts-icon',index<=2?'icon-'+(index+1):'']" v-text="index>2?index:''"></i>
                                                      <p data-bind="text:FAccount">{{item.name.padEnd(8, '*')}}</p>
                                                      <span><font class="fc-orange" data-bind="text:Amount">{{item.num}}</font>元</span>
                                                  </a>
                                              </li>
                                          </ul>
                                        </div>
                                  </div>
                              </div>
                          </div>
                          <div class="promotions"><a href="javascript:void(0);"></a></div>
                          <div class="online_service"><a href="javascript:void(0);" target="_blank" title="在线客服" ></a></div>
                      </div>
                  </div>
                  <div class="middle_bottom clear" id="middle_bottom" style="margin-left:26px" ref="middleBottom">
                      <div :class="[{bounceInLeft:isAnimation}, 'credit_lottery','animated']" @click="gotoPage('VR_LOTTERY')">
                          <a href="javascript:void(0);"></a>
                      </div>
                      <div class="baccarat_lottery"  @click="gotoPage('CT_LOTTERY')">
                          <a href="javascript:void(0);"></a>
                      </div>
                      <div :class="[{bounceInRight:isAnimation}, 'official_lottery','animated']"  @click="gotoPage('')">
                          <a href="/m"></a>
                      </div>
                  </div>
              </div>
          </div>
    </div>
    <div class="footer-exhibition">
      <div class="download_link">
        <div class="advantages">
          <div class="payment_date">
            <div class="payment_date_l">
              <h3>存款</h3>
              <p>到帐平均时间</p>
            </div>
            <div class="payment_date_r">
              <span class="pay_time">23<strong>秒</strong></span>
            </div>
            <div class="time_bar">
              <span class="bar_slide"></span>
            </div>
          </div>
          <div class="payment_date">
            <div class="payment_date_l">
              <h3>取款</h3>
              <p>到帐平均时间</p>
            </div>
            <div class="payment_date_r">
              <span class="pay_time">2'02<strong>分</strong></span>
            </div>
            <div class="time_bar">
              <span class="bar_slide_n"></span>
            </div>
          </div>
        </div>
        <div class="mobile_down">
          <p>移动互联网时代，机会一手把握</p>
          <p>全面支持苹果APP 安卓APP 手机全部浏览器</p>
          <div class="down">
            <span class="apple"><a href="javascript:void(0);"></a></span>
            <span class="android"><a href="javascript:void(0);"></a></span>
            <span class="browser"><a href="javascript:void(0);"></a></span>
          </div>
        </div>
        <div class="mobile_client">
          <h2>手机客户端</h2>
          <div class="client_downloads">
            <p>下载地址：</p>
            <a class="login_ios" :class="[mobileDow=='ios'?'on':'']" href="javascript:;" @click="mobileDow='ios'"></a>
            <a class="login_android" :class="[mobileDow=='android'?'on':'']" href="javascript:;"
               @click="mobileDow='android'"></a>
          </div>
          <div class="client_erweima">
            <p v-show="mobileDow=='ios'"><img src="/static/sjcp/img/ios.png" alt="IOS" width="104" height="104"></p>
            <p v-show="mobileDow=='android'"><img src="/static/sjcp/img/android.png" alt="ANDROID" width="104"
                                                  height="104"></p>
          </div>

        </div>
      </div>
    </div>
    <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>
     <!-- <Modal width="657" height="546.67" :scrollable=true v-model="showimg" class='guanbi'><img width="100%" heightwq="100%" src="/static/klk/img/pcAlert.png"/><span class="close" @click="close"></span></Modal> -->

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
        isAnimation:false,
        mobileDow: 'ios',
        noticePosition:0,
        showPopout: false,
        popups: '',
        lantern: '',
        serviceUrl: null,
        imgsrc:"/static/sjcp/img/pcAlert.png",
        // 轮播设置
        setting: {
          live: {
            liveVal: 0, autoplaySpeed: 3000, autoplay: true, dots: 'none', trigger: 'click', arrow: 'never'
          }
        },
        // 滚动名单
        scrollDatas: [],
        // 选项选择
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
        gameList:[
          {name:"重庆时时彩",bgImg:"/static/public/image/lottery/nico/png/4.png",path:"/plays/tradition/4"},
          {name:"北京PK10",bgImg:"/static/public/image/lottery/nico/png/2.png",path:"/plays/tradition/2"},
          {name:"香港六合彩",bgImg:"/static/public/image/lottery/nico/png/1.png",path:"/plays/tradition/1"},
          {name:"上海时时乐",bgImg:"/static/public/image/lottery/nico/png/29.png",path:"/plays/tradition/29"},
          {name:"广东快乐十分",bgImg:"/static/public/image/lottery/nico/png/5.png",path:"/plays/tradition/5"},
          {name:"排列三",bgImg:"/static/public/image/lottery/nico/png/28.png",path:"/plays/tradition/28"}
        ],
        carouselData: [],
        jackpotNum: 30631803863,
        setInter: null,
        winningInfo:[]
      }
    },
    methods: {
      gotoPage(path){
          if(path==="VR_LOTTERY"){
              if(!localStorage.token || !localStorage.userinfo) {
                alert('未登录')
                return false
              }else{
                this.getItemId({id:'30',platform:'vr_lottery',name:'VR彩票',})
              }
          }
          else if(path==='CT_LOTTERY'){
                this.$router.push('/plays/hall');
          }
      },
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
       move (destination, duration) { // 实现滚动动画
        let speed = 100;
        let count = 0
        let step = () => {
          this.noticePosition += speed
          count++
          (() => {
            if (this.noticePosition < destination) {
              step()
            } else {
              this.noticePosition = destination
            }
          })()
        }
        step()
      },
      // 中奖排行榜
      initWinningInfo () {
        let length = 50
        let data = []
        for (let i = 0; i < length; i++) {
          let num = parseInt(Math.random() * (Math.random() * (Math.random() * 360000)))
          num = num < 10 ? num * 1234 : num
          num = num < 100 ? num * 123 : num
          num = num < 1000 ? num * 12 : num
          let name = String.fromCharCode((num % 26) + 97) + num.toString(32)
          name = name.substr(0, 3)
          data[i] = {name, num}
        }
        this.arraySort(data, (v1, v2) => v1.num < v2.num)
        this.winningInfo = data;
        console.log(this.winningInfo)
      },
      goLink(path){
        if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                this.$router.push({ path: path })
                 return false;
               }
            }else{
                 this.dNotify("请先登录", 'error')
          }
      },
      close(){
          this.showimg=false;
      },
      liveEnter (item) {
        this.setting.live.autoplay = false
        this.setting.live.liveVal = item.index
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
        if (item.type == 'lottery') {

             if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                 window.open(item.router);
                 return false;
               }
            }else{
                // this.$store.commit('alert/showTipModel', {bool: true, title: "请先登录", model: 'error'})
                 this.dNotify("请先登录", 'error')
            }
        } else {
          this.$router.push(item.router)
        }
      },
      goto(item){
          window.open(item.router);
          return false;
      },
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {
          bool: true
        })
        this.$store.commit('showContent', {
          parent: name
        })
        this.$store.commit('showNav', {
          child: num
        })
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
      async getPopout () {
        if (!this.$store.state.mainState.ifpourT || localStorage.token)
          return false
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'popups',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length) return false
          this.showPopout = true
          this.showimg=false
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      },
      handleScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = this.$refs.middleBottom.offsetTop;
        console.log(scrollTop,offsetTop)
        if(scrollTop>=offsetTop){
          this.isAnimation = true;
           window.removeEventListener('scroll',this.handleScroll)
        }else{
          this.isAnimation = false;
           window.removeEventListener('srolll',this.handleScroll)
        }
      },
    },

    created () {
      setTimeout(() => {
        this.serviceUrl = this.$root.config.service[0] && this.$root.config.service[0].url
      }, 200)

      this.getPopout()
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
      let destination = 30
      setInterval(() => {
        if (destination / 30 < this.winningInfo.length) {
          this.move(destination, 500)
          destination += 200
        } else { // 列表到底
          this.noticePosition = 0 // 设置列表为开始位置
          destination = 30
          this.move(destination, 500)
          destination += 200
        }
      },3000)

      this.initWinningInfo()
      clearInterval(this.setInter)
      this.jackpotFc()
      this.getLantern()
      setTimeout(() => {
        this.serviceUrl = this.$root.config.service[0] && this.$root.config.service[0].url
      }, 200)
      this.getBanner()

      // 监听滚动条距离顶部的距离
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      clearInterval(this.setInter)
    },
    components: {
      vpMc
    },
    store
  }
</script>

<style lang="less">
  .more_game{
    .middle_min{
       .middle_top{
          .top_games {
            .games_box{
               .game_icon{
                  span{
                    background:none!important;
                    img{
                      border-radius: 50%;
                      width:100%;
                    }
                  }
               }
            }
          }
       }
    }
  }

  @keyframes animate {
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

  @-webkit-keyframes animate {
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

  @-moz-keyframes animate {
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

  @-o-keyframes animate {
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

  @-ms-keyframes animate {
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
      height: 497px;
      background:#3c4045 !important;
      .newgong {
        position: absolute;
        height: 42px;
        width: 100%;
        bottom:0;
        left:0;
        background: rgba(0, 0, 0, 0.4);
        border-bottom: 1px solid #473a0b;
        border-top: 1px solid #473a0b;
        z-index: 12;
        .newgong-content {
          width: 1004px;
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

  }


  .guanbi img{
    position: relative;
  }
  .guanbi .ivu-modal-footer{
    display: none;
  }
  .guanbi .ivu-modal-body{
    padding: 0 !important;
    height: 546.67px;
  }
  .guanbi .ivu-modal-close{
    display: none;
  }
  .guanbi .ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -328px;
        margin-top: -273px;
  }
  .guanbi .close{
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
</style>
