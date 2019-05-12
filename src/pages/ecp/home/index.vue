<template>
  <div class="new-index ecp-home">
    <div class="banner">
      <div class="newgong">
        <div class="newgong-content">
          <div class="demolist list">
            <div class="notice">
              <img src="/static/ecp/img/icon_notice.png" alt="">
            </div>
            <marquee align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()"
                     style="color: #ffba15; font-size: 15px; line-height: 40px;overflow: hidden;height: 40px;">
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>

      <div class="carouse">
        <el-carousel :interval="2000" arrow="never" height="500px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt="">
            </a>
            <img :src="item.img" alt="" v-else>
          </el-carousel-item>
        </el-carousel>



        <!-- <el-carousel :interval="2000" arrow="never" height="500px">
            <el-carousel-item v-for="(item,i) in carouselData1" :key="i">
                <div :class="item.className" style="height:500px;"></div>
            </el-carousel-item>
          </el-carousel> -->




      </div>





    </div>






    <div class="ecp-bot-wrap">
      <div class="red"></div>
      <div class="content">
        <div class="content_top_wrapper">
          <div class="content_top clearfix">
            <div class="fl">
              <div class="header">
                <h1 class="title"></h1>
                <div class="tradition">传统玩法<span class="icon">传</span></div>
                <ul class="type">
                  <li :key='index' v-for="(item,index) in hotGames">
                    <a @click="gopath(item.path)">{{item.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="fr">
              <div class="header">
                <h1 class="title"></h1>
                <ul class="type" style="margin-top:23px;">
                  <li :key='index' v-for="(item,index) in hotLottery" class="hotlottery">
                    <!-- <a @click="gopath(item.path)" class="hotlottery" :class="'hotlottery'+index">
                      <img :src="item.id | capitalize" alt="">
                    </a>
                    <a @click="gopath(item.path)" class="txt">{{item.name}}</a> -->
                    <a @click="gopath(item.path)" class="hotlottery" :class="'hotlottery'+index">
                      <!-- <img :src="item.id | capitalize" alt=""> -->
                    </a>
                    <a @click="gopath(item.path)" class="txt">{{item.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content_middle clearfix">
          <div class="btn fl">
            <a class="ios" href="javascript:window.open('/static/ecp/html/download/index.html')"></a>
            <a class="android" href="javascript:window.open('/static/ecp/html/download/index.html')"></a>
          </div>
          <div class="con fl">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div class="content_bot">
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
                <span class="apple"></span>
                <span class="android"></span>
                <span class="browser"></span>
              </div>
            </div>
            <div class="problem">
              <h2></h2>
              <div class="common">
                <ul class="clearfix">
                  <li><a @click="$router.push({name:'help', params: {p_id: 1}})">存款问题</a></li>
                  <li><a @click="$router.push({name:'help', params: {p_id: 5}})">合作伙伴</a></li>
                  <li><a @click="$router.push({name:'help', params: {p_id: 2}})">取款问题</a></li>
                  <li><a
                    href="https://gzz833.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=833593&configID=41254&jid=7920496573&s=1"
                    target="_blank">联系我们</a></li>
                </ul>
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
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'

  export default {
    mixins: [data],
    data () {
      return {
        showPopout: false,
        popups: '',
        lantern: '',
        // 轮播设置
        setting: {
          live: {
            liveVal: 0,
            autoplaySpeed: 3000,
            autoplay: true,
            dots: 'none',
            trigger: 'click',
            arrow: 'never'
          }
        },
        // 选项选择
        hotGames: [
          {
            name: '快速赛车',
            path: '/plays/tradition/12',
            id: 12
          },
          {
            name: '三分赛车',
            path: '/plays/tradition/13',
            id: 13
          },
           {
            name: '北京PK拾',
            path: '/plays/tradition/2',
            id: 2
          },
          {
            name: '重庆时时彩',
            path: '/plays/tradition/4',
            id: 4
          },
          {
            name: '快速时时彩',
            path: '/plays/tradition/16',
            id: 16
          },
          {
            name: '香港六合彩',
            path: '/plays/tradition/1',
            id: 1
          },
          {
            name: '快速六合彩',
            path: '/plays/tradition/18',
            id: 18
          },
          {
            name: '江苏快三',
            path: '/plays/tradition/9',
            id: 9
          },
          {
            name: '北京快三',
            path: '/plays/tradition/2900',
            id: 2900
          },
          {
            name: 'PC蛋蛋',
            path: '/plays/tradition/10',
            id: 10
          },
          {
            name: '福彩3D',
            path: '/plays/tradition/11',
            id: 11
          },
          {
            name: '幸运农场',
            path: '/plays/tradition/6',
            id: 6
          },
          {
            name: '三分时时彩',
            path: '/plays/tradition/17',
            id: 17
          },
          {
            name: '快速快三',
            path: '/plays/tradition/27',
            id: 27
          },
          {
            name: '湖北快三',
            path: '/plays/tradition/2905',
            id: 2905
          },
          {
            name: '广东快乐十分',
            path: '/plays/tradition/5',
            id: 5
          },
          {
            name: '广东11选5',
            path: '/plays/tradition/7',
            id: 7
          },
          {
            name: '山东11选5',
            path: '/plays/tradition/23',
            id: 23
          },
          {
            name: '5分六合彩',
            path: '/plays/tradition/19',
            id: 19
          },
          {
            name: '上海时时乐',
            path: '/plays/tradition/29',
            id: 29
          }
        ],
        hotLottery: [
          {
            name: '北京赛车',
            path: '/plays/tradition/2',
            id: 2
          },
          {
            name: '重庆时时彩',
            path: '/plays/tradition/4',
            id: 4
          },
          {
            name: '广东快乐十分',
            path: '/plays/tradition/5',
            id: 5
          },
          {
            name: '福彩3D',
            path: '/plays/tradition/11',
            id: 11
          },
          {
            name: '六合彩',
            path: '/plays/tradition/1',
            id: 1
          },
          {
            name: '江苏快三',
            path: '/plays/tradition/9',
            id: 9
          }
        ],
        bomLottery: [
          {
            name: '北京PK10',
            path: '/plays/tradition/2',
            icon: '/static/ecp/img/ssc_03.png',
            img: '/static/ecp/img/ic_ul_bg1.jpg',
            id: 2
          },
          {
            name: '江苏快三',
            path: '/plays/tradition/9',
            icon: '/static/ecp/img/ssc_02.png',
            img: '/static/ecp/img/ic_ul_bg2.jpg',
            id: 9
          },
          {
            name: '重庆时时彩',
            path: '/plays/tradition/4',
            icon: '/static/ecp/img/ssc_01.png',
            img: '/static/ecp/img/ic_ul_bg3.jpg',
            id: 4
          },
          {
            name: '六合彩',
            path: '/plays/tradition/1',
            icon: '/static/ecp/img/ssc_04.png',
            img: '/static/ecp/img/ic_ul_bg4.jpg',
            id: 1
          }
        ],
        carouselData: [],
        carouselData1:[
          {targets:"",img:"/static/ecp/img/homeBgc/bg1.png",className:"bg1"},
          {targets:"",img:"/static/ecp/img/homeBgc/bg2.png",className:"bg2"},
          {targets:"",img:"/static/ecp/img/homeBgc/bg3.png",className:"bg3"},
          {targets:"",img:"/static/ecp/img/homeBgc/bg4.png",className:"bg4"},
          {targets:"",img:"/static/ecp/img/homeBgc/bg5.png",className:"bg5"},
        ],
        setInter: null
      }
    },
    methods: {
      //获取banner
      async getBanner () {
        console.log(444)
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
          position: 'banner',
          clientType: 'pc'
        })
        if (res && res.code == 200) {
          this.carouselData = res.data[0] && res.data[0].body
        }
      },
      goTo (item) {
        if (item.router == '/sport') {
          this.getItemId({name: '皇冠体育', id: '21', platform: 'sport'})
        } else {
          this.$router.push(item.router)
        }
      },
       gopath(item){
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
          if (!res.data.data.length) return false
          this.showPopout = true
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      }
    },
    created () {
      // this.getPopout()
    },
    mounted () {
      clearInterval(this.setInter)
      this.getLantern()
      this.getBanner()
    },
    beforeDestroy () {
      clearInterval(this.setInter)
    },
    filters: {
      capitalize: function (value) {
        try {
        //  return `/static/public/image/lottery/ico/vp-${ value.includes('赛车')? (value.includes('PK10') ? value : value + 'PK10'):value}.png`
         return `/static/public/image/lottery/nico/png/${value}.png`
        } catch (err) {
          return `/static/public/image/lottery/ico/vp-changwan-ico.png`
        }

      }
    },
    components: {},
    store
  }
</script>

<style lang="less">
  .new-index {
    position: relative;
    background: #f1f1f1;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
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
          width: 1000px;
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

@deep:~">>>";


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
            }
          }
        }


        .bg1{
          background:url(/static/ecp/img/homeBgc/bg1.png);
        }
        .bg2{
          background:url(/static/ecp/img/homeBgc/bg2.png);
        }
        .bg3{
          background:url(/static/ecp/img/homeBgc/bg3.png);
        }
        .bg4{
          background:url(/static/ecp/img/homeBgc/bg4.png);
        }
        .bg5{
          background:url(/static/ecp/img/homeBgc/bg5.png);
        }





      }
    }

    .ecp-bot-wrap {
      width: 100%;
      background: url(/static/ecp/img/bg3.png) center top no-repeat;
      // background-color: #1d1f22;
      zoom: 1;
      overflow: hidden;
      position: relative;

      div.red {
        height: 56px;
        background-color: #b62929;
      }

      .content {
        width: 1000px;
        margin: 0 auto;
        zoom: 1;
        overflow: hidden;
        padding-bottom: 40px;

        .content_top_wrapper {
          height: 294px;

          .content_top {
            position: absolute;
            top: 0;

            .fl,
            .fr {
              height: 350px;
              width: 502px;

              .header {
                h1.title {
                  height: 56px;
                  background-image: url(/static/ecp/img/game_tit.png?f9e7ba8032);
                  background-repeat: no-repeat;
                }

                .tradition {
                  font-size: 16px;
                  text-align: left;
                  width: 462px;
                  margin: auto;
                  padding: 10px;
                  color: #fff;
                  border-bottom: 1px solid #9f2222;

                  .icon {
                    width: 23px;
                    height: 23px;
                    text-align: center;
                    display: inline-block;
                    line-height: 22px;
                    font-size: 15px;
                    margin-left: 12px;
                    margin-top: 0;
                    background: #ff5501;
                    color: #fff;
                    border-radius: 2px;
                    vertical-align: middle;
                  }
                }

                ul.type {
                  width: 500px;
                  padding: 0 2px;
                  height: 210px;
                  overflow: hidden;
                  margin-top: 8px;

                  li {
                    margin: 0 0 14px 14px;
                    float: left;
                    text-align: center;
                    width: 94px;
                    height: 16px;
                    padding-left: 12px;
                    overflow: hidden;
                    line-height: 15px;

                    &.hotlottery {
                      margin: 0 26px;
                      float: left;
                      width: 106px;
                      height: 128px;
                      img{
                        width:100%;
                      }
                    }

                    a {
                      font-size: 12px;
                      display: block;
                      color: #fff;

                      &:hover {
                        color: #ffc102;
                      }

                      &.hotlottery {
                        color: #b8b5b5;
                        background-image: url(/static/ecp/img/bjl_icon.png?4d268d26ae);
                        background-repeat: no-repeat;
                        width: 100%;
                        height: 106px;
                        background-size: cover;
                      }

                      &.hotlottery0 {
                        background-position: 0 0;
                      }

                      &.hotlottery1 {
                        background-position: 0 -110px;
                      }

                      &.hotlottery2 {
                        background-position: 0 -225px;
                      }

                      &.hotlottery3 {
                        background-position: 0 -450px;
                      }

                      &.hotlottery4 {
                        background-position: 0 -337px;
                      }

                      &.hotlottery5 {
                        background-position: 0 -564px;
                      }
                    }
                  }
                }
              }
            }

            .fl {
              background: #b62929;

              .header {
                .title {
                  background-position: 26px 18px;
                  background-color: #8e2020;
                }
              }
            }

            .fr {
              background: #302f2f;

              .header {
                .title {
                  background-position: 26px -30px;
                  background-color: #000000;
                }
              }

              ul.type {
                height: 250px !important;
              }
            }
          }
        }

        .content_middle {
          height: 280px;
          background: url(/static/ecp/img/index-downlogo-bg.jpg?2422a3e65a) left top no-repeat;

          .btn {
            width: 230px;
            margin: 59px 0 0 155px;

            a {
              display: inline-block;
              width: 195px;
              height: 70px;
              background: url(/static/ecp/img/index-down-btn.png?016eed19e5) left top no-repeat;

              &.ios {
                background-position: 0 3px;
              }

              &.android {
                margin-top: 25px;
                background-position: -203px 0px;
              }
            }
          }

          .con {
            width: 490px;
            margin: 47px 0 0 70px;

            h3 {
              width: 100%;
              height: 122px;
              background: url(/static/ecp/img/download-item-tit.png?db2f2f07b1) left top no-repeat;
            }

            p {
              width: 100%;
              margin-left: 14px;
              height: 25px;
              margin-top: 30px;
              background: url(/static/ecp/img/download-item-con.png?aa97959532) left top no-repeat;
            }
          }
        }

        .content_bot {
          padding-top: 34px;
          background: #fff;

          .advantages {
            width: 312px;
            height: 246px;
            margin-left: 20px;
            float: left;

            h2 {
              width: 312px;
              height: 35px;
              margin: 0 0 6px 0;
              background: url(/static/ecp/img/others_all.png) no-repeat 0 0;
            }

            .payment_date {
              width: 266px;
              height: 89px;
              padding: 0 0 0 10px;

              .payment_date_l {
                float: left;

                h3 {
                  font-size: 12px;
                  font-weight: normal;
                  margin-top: 16px;
                  margin-bottom: 8px;
                  color: #565656;
                }

                p {
                  font-size: 12px;
                  font-weight: normal;
                  color: #c9c6c6;
                }
              }

              .payment_date_r {
                float: right;
                margin-top: 26px;

                .pay_time {
                  font-size: 30px;
                  display: inline-block;
                  padding: 6px;
                  color: #565656;

                  strong {
                    font-size: 12px;
                    font-weight: normal;
                    margin-left: 8px;
                    color: #dfdfdf;
                  }
                }
              }

              .time_bar {
                width: 266px;
                height: 16px;
                margin-top: 12px;
                float: left;
                position: relative;
                background: #edebe9;
                border-radius: 20px;

                .bar_slide {
                  width: 112px;
                  height: 16px;
                  border-radius: 10px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  background: #ffdf01;
                }

                .bar_slide_n {
                  width: 172px;
                  height: 16px;
                  border-radius: 10px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  background: #e35050;
                }
              }
            }
          }

          .mobile_down {
            margin: 0 20px;
            width: 320px;
            height: 248px;
            float: left;

            h2 {
              width: 320px;
              height: 37px;
              background: url(/static/ecp/img/others_all.png) no-repeat 0 -75px;
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
                background: url(/static/ecp/img/others_all.png) no-repeat;
                width: 85px;
                height: 85px;
                margin-right: 14px;
                display: inline-block;
                cursor: pointer;
              }

              .apple {
                background-position: 0 -334px;
              }

              .android {
                background-position: 0 -427px;
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
            width: 305px;
            float: left;

            h2 {
              width: 305px;
              height: 35px;
              background: url(/static/ecp/img/others_all.png) no-repeat 0 -152px;
            }

            .common {
              width: 228px;
              margin-top: 8px;
              margin-left: 4px;
              padding-bottom: 8px;

              ul li {
                width: 95px;
                margin-top: 12px;
                margin-right: 18px;
                float: left;

                a {
                  height: 28px;
                  font-size: 12px;
                  line-height: 22px;
                  padding-left: 34px;
                  display: block;
                  color: #808080;
                  background: url(/static/ecp/img/others_all.png) no-repeat 0 -294px;

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
  }
</style>
