<template>
  <div class="new-index dalao-home">
    <div class="banner">
      <div class="newgong">
        <div class="newgong-content">
          <div class="demolist list">
            <div class="notice">
              <img src="/static/dalao/img/icon_notice.png" alt="">
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
      </div>
    </div>

    <div class="dalao-bot-wrap">
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
                    <a href="javascript:void(0)" @click="gopath(item.path)">{{item.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="fr">
              <div class="header">
                <h1 class="title"></h1>
                <ul class="type">
                  <li :key='index' v-for="(item,index) in hotLottery" class="hotlottery">
                    <a @click="gopath(item.path)" class="hotlottery" :class="'hotlottery'+index"></a>
                    <a @click="gopath(item.path)" class="txt">{{item.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content_middle clearfix">
          <div class="btn fl">
            <a class="ios" href="javascript:window.open('/static/dalao/html/download/index.html')"></a>
            <a class="android" href="javascript:window.open('/static/dalao/html/download/index.html')"></a>
          </div>
          <div class="con fl">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div class="content_bot">
          <ul class="clearfix">
            <li v-for="lottery in bomLottery" :key="lottery.id" class="fl">
              <div class="bg_img"><img :src="lottery.img" alt=""></div>
              <div class="right_top_img"><img :src="lottery.icon" alt=""></div>
              <div class="bottom_txt">
                <a @click="gopath(lottery.path)">{{lottery.name}}</a>
              </div>
            </li>
          </ul>
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
        // 滚动名单
        scrollDatas: [],
        // 选项选择
        hotGames: [
           {
            name: '幸运飞艇',
            path: '/plays/tradition/3',
            id:3
          },
          {
            name: '五分赛车',
            path: '/plays/tradition/3630',
            id:3630
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
            name: '快速赛车',
            path: '/plays/tradition/12',
            id: 12
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
            name: '江苏快三',
            path: '/plays/tradition/9',
            id: 9
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
            name: '快速快三',
            path: '/plays/tradition/27',
            id: 27
          },
          // {
          //   name: '幸运农场',
          //   path: '/plays/tradition/6',
          //   id: 6
          // },
          {
            name: '三分时时彩',
            path: '/plays/tradition/17',
            id: 17
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
          },
          {
            name: '湖北快三',
            path: '/plays/tradition/2905',
            id: 2905
          },

          // {
          //   name: '广东11选5',
          //   path: '/plays/tradition/7',
          //   id: 7
          // },
          {
            name: '山东11选5',
            path: '/plays/tradition/23',
            id: 23
          },

        ],
        hotLottery: [
          {
            name: '北京赛车',
            path: '/plays/tradition/2',
            id: 2
          },
          {
            name: '幸运飞艇',
            path: '/plays/tradition/3',
            id: 3
          },
          {
            name: '五分赛车',
            path: '/plays/tradition/3630',
            id: 3630
          },
          {
            name: '重庆时时彩',
            path: '/plays/tradition/4',
            id: 4
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
            name: '幸运飞艇',
            path: '/plays/tradition/3',
            icon: '/static/dalao/img/logxyft.png',
            img: '/static/dalao/img/bgxyft.png',
            id: 3
          },
           {
            name: '北京PK10',
            path: '/plays/tradition/2',
            icon: '/static/dalao/img/ssc_03.png',
            img: '/static/dalao/img/ic_ul_bg1.jpg',
            id: 2
          },
          {
            name: '五分赛车',
            path: '/plays/tradition/3630',
            icon: '/static/dalao/img/logwfsc.png',
            img: '/static/dalao/img/bgwfsc.png',
            id: 3630
          },
          {
            name: '六合彩',
            path: '/plays/tradition/1',
            icon: '/static/dalao/img/ssc_04.png',
            img: '/static/dalao/img/ic_ul_bg4.jpg',
            id: 1
          }
        ],
        carouselData: [],
        jackpotNum: 30631803863,
        setInter: null
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
      jackpotFc () {
        clearInterval(this.setInter)
        this.setInter = setInterval(() => {
          this.jackpotNum = this.jackpotNum + 8.56
        }, 20)
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
      let chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'j',
        'k',
        '-',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]

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
        datas.push({
          account: generateMixed(arr[Math.floor(Math.random() * 10)]) + '***',
          in:
            99 *
            Math.ceil(Math.random() * 10) *
            Math.ceil(Math.random() * 10) *
            Math.ceil(Math.random() * 10) *
            Math.ceil(Math.random() * 10)
        })
      }
      this.scrollDatas = datas
    },
    mounted () {
      clearInterval(this.setInter)
      this.jackpotFc()
      this.getLantern()
      this.getBanner()
    },
    beforeDestroy () {
      clearInterval(this.setInter)
    },
    components: {},
    store
  }
</script>

<style lang="less">
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
      }
    }

    .dalao-bot-wrap {
      width: 100%;
      background: url(/static/dalao/img/bg3.png) center top no-repeat;
      background-color: #1d1f22;
      zoom: 1;
      overflow: hidden;
      position: relative;

      div.red {
        height: 56px;
        background-color: #b62929;
      }

      .content {
        width: 1028px;
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
                  background-image: url(/static/dalao/img/game_tit.png?f9e7ba8032);
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
                        background-image: url(/static/dalao/img/bjl_icon.png?4d268d26ae);
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
          background: url(/static/dalao/img/index-downlogo-bg.jpg?2422a3e65a) left top no-repeat;

          .btn {
            width: 230px;
            margin: 59px 0 0 155px;

            a {
              display: inline-block;
              width: 195px;
              height: 70px;
              background: url(/static/dalao/img/index-down-btn.png?016eed19e5) left top no-repeat;

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
              background: url(/static/dalao/img/download-item-tit.png?db2f2f07b1) left top no-repeat;
            }

            p {
              width: 100%;
              margin-left: 14px;
              height: 25px;
              margin-top: 30px;
              background: url(/static/dalao/img/download-item-con.png?aa97959532) left top no-repeat;
            }
          }
        }

        .content_bot {
          li {
            width: 244px;
            height: 353px;
            overflow: hidden;
            border: 1px #4c4e5c solid;
            position: relative;
            margin-right: 7px;

            .bg_img {
              position: absolute;
              z-index: 0;
              width: 244px;
              height: 353px;
              top: 0;
              left: 0;
            }

            .bottom_txt {
              width: 150px;
              height: 39px;
              line-height: 39px;
              position: absolute;
              bottom: 50px;
              left: 0;
              right: 0;
              margin: auto;
              text-align: center;
              overflow: hidden;
              border: 1px #4c4e5c solid;
              background: rgba(0, 0, 0, 0.38);

              &:hover {
                background: rgba(0, 0, 0, 1);
              }

              a {
                color: #fff;
              }
            }

            .right_top_img {
              width: 63px;
              height: 69px;
              overflow: hidden;
              position: absolute;
              z-index: 2;
              top: 0;
              right: 0;
            }
          }
        }
      }
    }
  }
</style>
