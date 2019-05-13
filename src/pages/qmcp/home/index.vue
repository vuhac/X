<template>

  <div class="qmcp-new-index">
    <div class="banner-wrap">
      <div class="carouse">
        <el-carousel :interval="5000" arrow="always" height="498px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt="">
            </a>
            <img :src="item.img" alt="" v-else>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="newgong">
        <div class="newgong-content">
          <div class="notice">
            <i class="iconfont icon-sound"></i>
          </div>
          <div class="demolist list">
            <marquee align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()">
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>
      <div class="popular_game"></div>
    </div>
    <div class="main">
      <div class="bg-repeat">
        <div class="bg-cover">
          <div class="wrapper">
            <div class="lottery-wrap">
              <div class="game_kind clearfix">
                <div class="kind_bg">
                  <div class="game_kind_in kind_bg_c">
                    <a href="javascript:void(0);" class="credit_a"></a>
                    <a href="javascript:void(0);" class="credits" @click="goto('/plays/tradition/2')"></a>
                  </div>
                </div>
                <div class="kind_bg kind_bg_ml">
                  <div class="game_kind_in kind_bg_o">
                    <a href="javascript:void(0);" class="credit_a"></a>
                    <a href="javascript:void(0);" class="credits" @click="goto('/plays/tradition/4')"></a>
                  </div>
                </div>
                <div class="kind_bg kind_bg_ml">
                  <div class="game_kind_in kind_bg_s">
                    <a href="javascript:void(0);" class="credit_a"></a>
                    <a href="javascript:void(0);" class="credits" @click="goto('/plays/tradition/9')"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="tradition-wrap">
              <div class="wrapper">
                <div class="content">
                  <div class="top">
                    <a href="javascript:void(0);">传统玩法</a>
                  </div>
                  <div class="bottom">
                    <div class="item" v-for="lottery in lotteryList" :key="lottery.router">
                      <a @click="goto(lottery.router)">
                        <img :src="lottery.ico" alt="">
                      </a>
                      <div class="shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="others">
            <div class="wrapper clearfix">
              <div class="advantages">
                <h2></h2>
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
                <h2></h2>
                <p>移动互联网时代，机会一手把握</p>
                <p>全面支持苹果APP 安卓APP 手机全部浏览器</p>
                <div class="down">
                  <span class="apple" @click="gotodown"></span>
                  <span class="android" @click="gotodown"></span>
                  <span class="browser"></span>
                </div>
              </div>
              <div class="problem">
                <h2></h2>
                <div class="common">
                  <ul class="clearfix">
                    <li><a @click="$router.push({name:'contactus', params: {p_id: 4}})">存款问题</a></li>
                    <li><a @click="$router.push({name:'contactus', params: {p_id: 3}})">合作伙伴</a></li>
                    <li><a @click="$router.push({name:'contactus', params: {p_id: 5}})">取款问题</a></li>
                    <li><a
                      href="https://gzz833.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=833595&amp;configID=41239&amp;jid=6003561671&amp;s=1"
                      target="_blank">联系客服</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>
  </div>
</template>

<script>
  // import $ from 'jquery'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        popups: '',
        lantern: '',
        showPopout: false,
        // 游戏类型
        //   @click="goto({'path':`/rules/${$route.meta.series}`,query:{id:$route.meta.id}})"
        lotteryList: [
           {
            name: '幸运飞艇',
            router: '/plays/tradition/3',
            ico: '/static/qmcp/img/lottery/feiting.png',
            id: 3
          },
          {
            name: '三分赛车',
            router: '/plays/tradition/13',
            ico: '/static/qmcp/img/lottery/3fen.png',
            id: 13
          },
          {
            name: '五分赛车',
            router: '/plays/tradition/3630',
            ico: '/static/qmcp/img/lottery/5fen.png',
            id: 3630
          },
          {
            name: '北京赛车',
            router: '/plays/tradition/2',
            ico: '/static/qmcp/img/lottery/BJPKS.png',
            id: 2
          },
          {
            name: '重庆时时彩',
            router: '/plays/tradition/4',
            ico: '/static/qmcp/img/lottery/CQSSC.png',
            id: 4
          },
          {
            name: '上海时时乐',
            router: '/plays/tradition/29',
            ico: '/static/qmcp/img/lottery/SHSSL.png',
            id: 4
          },
          {
            name: '六合彩',
            router: '/plays/tradition/1',
            ico: '/static/qmcp/img/lottery/6HC.png',
            id: 1
          },
          {
            name: '广东快乐十分',
            router: '/plays/tradition/5',
            ico: '/static/qmcp/img/lottery/GDKLSF.png',
            id: 5
          },
          {
            name: '河北快三',
            router: '/plays/tradition/2904',
            ico: '/static/qmcp/img/lottery/HBKS.png',
            id: 2904
          },
          {
            name: '福彩3D',
            router: '/plays/tradition/11',
            ico: '/static/qmcp/img/lottery/FC3D.png',
            id: 11
          },
          {
            name: '天津时时彩',
            router: '/plays/tradition/15',
            ico: '/static/qmcp/img/lottery/TJSSC.png',
            id: 15
          },
          {
            name: '江西11选5',
            router: '/plays/tradition/21',
            ico: '/static/qmcp/img/lottery/JX11x5.png',
            id: 21
          }
        ],
        // 轮播设置
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'none',
          trigger: 'click',
          arrow: 'hover',
          arrow2: 'never'
        },
        // 轮播名单
        carouselData: []
      }
    },
    methods: {
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
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      },

      gotodown(){
        window.open('/static/qmcp/html/download/index.html')
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
      goto(item){
        if(localStorage.token){
            if(localStorage.Public_User=='test' ){
              this.dNotify("彩票暂无试玩,立即注册", "error")
          }else{
            this.$router.push(item)
            return false;
          }
        }else{
            this.dNotify("请先登录", 'error')
        }
      }
    },
    created () {
      this.$store.commit('hsyl/setNav', 0)
    },
    mounted () {
      this.getPopout()
      this.getLantern()
      this.getBanner()
    },
    components: {},
    store
  }
</script>

<style lang="less" scoped>
  .qmcp-new-index {
    position: relative;
    min-width: 1200px;
    margin: 0 auto;
    background: #f1f1f1;
    font-size: 16px;

    .wrapper {
      width: 1200px;
      height: 100%;
      margin: auto;
    }

    .banner-wrap {
      position: relative;
      background: #b62929;

      .popular_game {
        height: 96px;
        background: url("/static/qmcp/img/popular_game.png") no-repeat top center;
        background-size: cover;
      }

      .newgong {
        background: #8b2424;
        width: 100%;
        z-index: 8;
        color: #fff;
        border-top: 1px solid #3d3b46;
        border-bottom: 1px solid #3d3b46;

        .newgong-content {
          width: 1200px;
          height: 51px;
          line-height: 51px;
          margin: 0 auto;

          .notice {
            display: inline-block;
            float: left;
            position: relative;
            top: 2px;
            left: 25px;
            margin-right: 50px;

            i {
              color: #fff;
              font-size: 23px;
            }
          }

          .demolist {
            display: inline-block;
            width: 990px;

            marquee {
              font-size: 15px;
              line-height: 51px;
              height: 51px;
            }
          }
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
      min-height: 640px;
      position: relative;
      z-index: 100;
      background: url("/static/qmcp/img/middle_bg.png") no-repeat top center;
      background-color: #b62929;
      padding-top: 20px;

      .bg-repeat {
        background: url("/static/qmcp/img/middle_repeat.png") repeat;
      }

      .bg-cover {
        background: url("/static/qmcp/img/decoration_bg.png") no-repeat top center;
      }

      .lottery-wrap {
        .game_kind {
          .kind_bg {
            width: 368px;
            height: 348px;
            background: url(/static/qmcp/img/kind_bg.png) no-repeat top right;
            float: left;

            .game_kind_in {
              width: 100%;
              height: 100%;
              padding-top: 40px;
              padding-left: 22px;
            }

            .kind_bg_c {
              background: url(/static/qmcp/img/kind_bg_c.png) no-repeat bottom left;

              .credit_a {
                background-position: 0 -578px;
              }

              .credit_a:hover {
                background-position: -1px -1082px;
              }

              .credits {
                background-position: 0 -68px;
              }

              .credits:hover {
                background-position: 0 -272px;
              }
            }

            .kind_bg_o {
              background: url(/static/qmcp/img/kind_bg_o.png) no-repeat bottom left;

              .credit_a {
                background-position: 0 -410px;
              }

              .credit_a:hover {
                background-position: 0px -914px;
              }

              .credits {
                background-position: 0 0;
              }

              .credits:hover {
                background-position: 0px -204px;
              }
            }

            .kind_bg_s {
              background: url(/static/qmcp/img/kind_bg_s.png) no-repeat bottom left;

              .credit_a {
                background-position: 0 -746px;
              }

              .credit_a:hover {
                background-position: 0 -1250px;
              }

              .credits {
                background-position: 0 -136px;
              }

              .credits:hover {
                background-position: 0 -340px;
              }
            }

            .credit_a,
            .credits {
              background: url(/static/qmcp/img/kind_all.png) no-repeat;
              display: block;
              width: 292px;
              height: 138px;
            }

            .credits {
              width: 162px;
              height: 38px;
              margin-top: 90px;
              margin-left: 118px;
            }
          }
        }
      }

      .tradition-wrap {
        margin-top: 20px;

        .content {
          width: 1000px;
          height: 420px;
          margin: auto;
          border: 5px solid #db4444;
          border-radius: 20px;
          background-color: #f9ebeb;

          .top {
            height: 72px;
            line-height: 72px;
            border-bottom: 1px solid #fae5ce;
            text-align: center;

            a {
              display: inline-block;
              width: 102px;
              height: 34px;
              line-height: 34px;
              border-radius: 20px;
              font-size: 16px;
              color: #fff;
              background: #db3b39;
            }
          }

          .bottom {
            height: 294px;
            padding: 20px;

            .item {
              width: 106px;
              height: 106px;
              background: #db3b39;
              float: left;
              border-radius: 50%;
              margin: 20px;
              position: relative;
              z-index: 2;

              a {
                display: block;
                width: 100%;
                height: 100%;
                z-index: 2;
              }

              .shadow {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                transition: all 0.8s ease-in-out;
                left: 50%;
                top: 50%;
                z-index: -1;
                opacity: .8;
                transform: translate(-50%, -50%);
                background: #db3b39;
              }

              &:hover .shadow {
                width: 160%;
                height: 160%;
                opacity: 0;
              }
            }
          }
        }
      }

      .others {
        padding-top: 34px;
        margin-top: 40px;
        background: rgba(255, 255, 255, 0.9);

        .advantages {
          width: 312px;
          height: 246px;
          margin-left: 88px;
          float: left;

          h2 {
            width: 312px;
            height: 35px;
            margin: 0 0 6px 0;
            background: url(/static/qmcp/img/others_all.png?d2dd213127) no-repeat 0 0;
          }

          .payment_date {
            width: 266px;
            height: 89px;
            padding: 0 36px 0 10px;

            .payment_date_l {
              float: left;

              h3 {
                font-size: 12px;
                font-weight: normal;
                margin-top: 16px;
                margin-bottom: 8px;
                color: #c9c6c6;
              }

              p {
                font-size: 12px;
                font-weight: normal;
                color: #d0d0d0;
              }
            }

            .payment_date_r {
              float: right;
              margin-top: 26px;

              .pay_time {
                font-size: 30px;
                display: inline-block;
                padding: 6px;
                color: #c9c6c6;
              }
            }

            .time_bar {
              width: 292px;
              height: 18px;
              margin-top: 12px;
              float: left;
              position: relative;
              background: url(/static/qmcp/img/others_all.png?d2dd213127) no-repeat 0 -228px;

              .bar_slide {
                width: 112px;
                height: 18px;
                border-radius: 10px;
                position: absolute;
                top: 0;
                left: 0;
                background: #f8451c;
              }

              .bar_slide_n {
                width: 172px;
                height: 18px;
                border-radius: 10px;
                position: absolute;
                top: 0;
                left: 0;
                background: #a2a1ee;
              }
            }
          }
        }

        .mobile_down {
          margin: 0 24px 0 22px;
          width: 342px;
          height: 248px;
          float: left;

          h2 {
            width: 342px;
            height: 37px;
            background: url(/static/qmcp/img/others_all.png?d2dd213127) no-repeat
              0 -75px;
            margin-bottom: 32px;
          }

          p {
            font-size: 12px;
            text-align: left;
            margin-top: 8px;
            color: #808080;
          }

          .down {
            margin-top: 28px;

            .apple,
            .android,
            .browser {
              background: url(/static/qmcp/img/others_all.png?d2dd213127) no-repeat;
              width: 85px;
              height: 85px;
              margin-right: 14px;
              display: inline-block;

            }

            .apple {
              background-position: 0 -334px;
              cursor: pointer;
            }

            .android {
              background-position: 0 -427px;
              cursor: pointer;
            }

            .browser {
              background-position: 0 -520px;
            }

            .apple:hover {
              background-position: -168px -334px;
            }

            .android:hover {
              background-position: -167px -427px;
            }

            .browser:hover {
              background-position: -168px -520px;
            }
          }
        }

        .problem {
          width: 342px;
          float: left;

          h2 {
            width: 342px;
            height: 35px;
            background: url(/static/qmcp/img/others_all.png?d2dd213127) no-repeat
              0 -152px;
          }

          .common {
            width: 228px;
            margin-top: 8px;
            margin-left: 4px;
            padding-bottom: 8px;

            ul li {
              width: 100px;
              margin-top: 12px;
              margin-right: 18px;
              display: inline-block;
              float: left;

              a {
                height: 28px;
                font-size: 12px;
                line-height: 22px;
                padding-left: 34px;
                display: block;
                color: #808080;
                background: url(/static/qmcp/img/others_all.png?d2dd213127) no-repeat 0 -294px;

                &:hover {
                  color: #aaa;
                }
              }
            }
          }
        }
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
      background: #ff0000 url(/static/qmcp/img/ui-bg_gloss-wave_45_817865_500x100.png) 50% 50% repeat-x;
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

    // /deep/
  }
</style>
