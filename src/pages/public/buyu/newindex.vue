<template>
  <div class="buyu-public-style">
    <iframe class="iframeAnimate" width="1000" height="3210" src="/static/public/html/newbuyu/index.html"
            frameborder="0"></iframe>
    <div class="maincontainer">
      <div class="main">
        <div class="content">
          <div class="item" v-for="(item,index)  in  buyuDatas" :key="index">
            <div class="box-left">
              <div class="box-demo">
                <img :src="item.imgLeft" width="552" height="230" alt="">
                <div class="icon"></div>
              </div>
              <div class="mark-box" :class="{'active':token}">

                <div class="box" v-show="Public_User=='test'||!Public_User">
                  <div class="join-game">
                    <a href="javascript:void(0)" @click="loginTest(item)">免费试玩</a>
                  </div>
                </div>
                <div class="box" v-show="Public_User!='test'">
                  <div class="join-game">
                    <a href="javascript:void(0)" @click="trustLogin(item)">进入游戏</a>
                  </div>
                </div>


              </div>
            </div>
            <div class="box-right" style="width:40%;height: 230px;">
              <div class="title">
                <img :src="item.imgLogo" width="138" height="45" alt="">
                <h1 style="position: relative;">
                  <span style="font-size: 38px">{{item.type[0]}}</span>
                  {{item.type[1]}}
                </h1>
              </div>
              <div class="main-content">
                <p style="padding-bottom: 13px;">支持设备:电脑手机网页端</p>
                <div class="code-container">
                  <div class="pt-touch">
                    <img :src="item.imgRight" width="315" height="137" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import $ from 'jquery'
  import mixin from '../games/public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        buyuDatas: [
          // {
          //   platform: 'AG_GAME',
          //   gameName: '548',
          //   name: '捕鱼王者',
          //   imgLeft: '/static/public/image/buyu/ag-fish.jpg',
          //   imgLogo: '/static/public/image/buyu/ag-logo.png',
          //   imgRight: '/static/public/image/buyu/ag-byw.jpg',
          //   type: ['AG', '捕鱼王者']
          // },

          {
            platform: 'FG_GAME',
            gameName: 'fish_mm',
            imgLeft: '/static/public/image/buyu/fg-fish1.jpg',
            imgLogo: '/static/public/image/buyu/fg-logo.jpg',
            imgRight: '/static/public/image/buyu/fg-down1.jpg',
            name: '美人捕鱼',
            type: ['FG', '美人捕鱼'],
            id: 2576
          },

          {
            platform: 'FG_GAME',
            gameName: 'fish_hl',
            imgLeft: '/static/public/image/buyu/fg-fish3.jpg',
            imgLogo: '/static/public/image/buyu/fg-logo.jpg',
            imgRight: '/static/public/image/buyu/fg-down3.jpg',
            name: '欢乐捕鱼',
            type: ['FG', '欢乐捕鱼'],
            id: 2626
          },

          {
            platform: 'JDB_GAME',
            gameName: '7#7002',
            imgLeft: '/static/public/image/buyu/lw-fish2.jpg',
            imgLogo: '/static/public/image/buyu/jdb-logo.png',
            imgRight: '/static/public/image/buyu/lwby2.jpg',
            name: '龙王捕鱼2',
            type: ['JDB', '龙王捕鱼2'],
            id: 175
          },

          {
            platform: 'MW_GAME',
            gameName: '1051',
            imgLeft: '/static/public/image/buyu/mw-fish.jpg',
            imgLogo: '/static/public/image/buyu/mw-logo.jpg',
            imgRight: '/static/public/image/buyu/gg-qpby.jpg',
            name: '千炮捕鱼',
            type: ['MW', '千炮捕鱼'],
            id: 151
          },
          {
            platform: 'CQ9_GAME',
            gameName: 'AB3',
            imgLeft: '/static/public/image/buyu/hj-fish.jpg',
            imgLogo: '/static/public/image/buyu/cq9-logo.png',
            imgRight: '/static/public/image/buyu/hjyc.jpg',
            name: '皇金渔场',
            type: ['CQ9', '皇金渔场'],
            id: 2639
          },
          {
            platform: 'PT_GAME',
            gameName: 'cashfi',
            imgLeft: '/static/public/image/buyu/pt-fish.jpg',
            imgLogo: '/static/public/image/buyu/pt-logo.png',
            imgRight: '/static/public/image/buyu/pt-down.png',
            name: '深海大赢家',
            type: ['PT', '深海大赢家'],
            id:2628
          },
          {
            platform: 'JDB_GAME', gameName: '7#7003',
            imgLeft: '/static/public/image/buyu/cs-fish.jpg',
            imgLogo: '/static/public/image/buyu/jdb-logo.png',
            imgRight: '/static/public/image/buyu/csby.jpg',
            name: '财神捕鱼',
            type: ['JDB', '财神捕鱼'],
            id:173
          },
          {
            platform: 'AG_GAME',
            gameName: '6',
            name: '捕鱼王',
            imgLeft: '/static/public/image/buyu/ag6-fish.png',
            imgLogo: '/static/public/image/buyu/ag-logo.png',
            imgRight: '/static/public/image/buyu/ag6-byw.png',
            type: ['AG', '捕鱼王'],
            id:265
          },
           {
            platform: 'BG_LIVE',
            gameName: 'fish',
            name: 'BG捕鱼',
            imgLeft: '/static/public/image/buyu/bg-banner.png',
            imgLogo: '/static/public/image/buyu/BG.png',
            imgRight: '/static/public/image/buyu/bg-fish.jpg',
            type: ['BG', 'BG捕鱼'],
            id: 3602
          },
          // {
          //   platform: 'FG_GAME',
          //   gameName: 'Fishing',
          //   imgLeft: '/static/public/image/buyu/fg-banner.png',
          //   imgLogo: '/static/public/image/buyu/fg-logo.jpg',
          //   imgRight: '/static/public/image/buyu/fg-left.png',
          //   name: '捕鱼达人',
          //   type: ['FG', '捕鱼达人']
          // },
          {
            platform: 'FG_GAME',
            gameName: 'fish_tt',
            imgLeft: '/static/public/image/buyu/fg-banner2.png',
            imgLogo: '/static/public/image/buyu/fg-logo.jpg',
            imgRight: '/static/public/image/buyu/fg-left2.png',
            name: '天天捕鱼',
            type: ['FG', '天天捕鱼'],
            id: 2628
          },
           {
            platform: 'JDB_GAME', gameName: '7#7001',
            imgLeft: '/static/public/image/buyu/jdb-left.png',
            imgLogo: '/static/public/image/buyu/jdb-logo.png',
            imgRight: '/static/public/image/buyu/jdb-banner.png',
            name: '龙王捕鱼',
            type: ['JDB', '龙王捕鱼'],
            id: 175
          },
        ]
      }
    },
    methods: {},
    created: function () {
    },
    mounted () {
    },
    watch: {},
    components: {}
  }
</script>

<style lang="less" scoped>
  .buyu-public-style {
    position: relative;
    display: flex;

    .iframeAnimate {
      width: 1000px;
      margin: 0 auto;
    }
  }

  .maincontainer {
    position: absolute;
    left: 50%;
    margin-left: -500px;
    //  background: url('/static/public/image/buyu/pro_bg.jpg') top center no-repeat,#f3f2ef;
    // padding-bottom: 20px;
    // padding-top: 30px;
  }

  .banner {
    background-color: #000;
    margin-bottom: 20px;

    img {
      display: block;
      width: 960px;
      margin: 0 auto;
      cursor: pointer;
    }
  }

  .main {
    padding: 0;
    min-width: 1000px;
    width: 1000px;
    position: relative;
    min-height: 1430px;
    max-width: 1920px;
    margin: 0 auto;
    // background:url('/static/public/image/buyu/5bj.jpg') no-repeat center top;
    background-size: 100% 100%;

    .content {
      width: 1000px;
      position: relative;
      overflow: hidden;
      z-index: 5;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.5);

      .item {
        width: 960px;
        height: 270px;
        margin: 20px;
        padding: 20px;
        background: #fff;
        zoom: 1;

        .box-left {
          width: 60%;
          height: 230px;
          position: relative;
          float: left;

          &:hover .mark-box {
            opacity: 1;
            box-shadow: 8px 8px 10px rgba(255, 255, 255, 0.65);
          }

          .icon {
            position: absolute;
            top: 0;
            left: 0;
            width: 98px;
            height: 98px;
            background: url('/static/public/image/buyu/hot.png') no-repeat center top;
          }

          .mark-box {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: 0;
            background: rgba(0, 0, 0, 0.5);
            padding-top: 70px;

            &.active {
              padding-top: 90px;
            }

            .box {
              text-align: center;
              margin-bottom: 15px;

              .join-game {
                display: inline-block;
                z-index: 200;
                width: 36.2%;
                height: 46px;
                line-height: 46px;
                text-align: center;
                background: #fd4747;
                opacity: 1;
                transition: all 0.3s;

                &:hover {
                  height: 51px;
                  background: #a2230b;
                  border-bottom: 5px solid #821400
                }

                a {
                  font-size: 16px;
                  color: #fff;
                  display: block;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                }
              }

              &:first-child {
                .join-game {
                  background: #9f7340;

                  &:hover {
                    height: 51px;
                    background: #c6955c;
                    border-bottom: 5px solid #9f7340;
                  }
                }
              }
            }

          }
        }

        .box-right {
          float: right;

          .title {
            overflow: hidden;
            margin-left: 20px;
            height: 60.8px;

            img {
              float: left;
            }

            h1 {
              float: left;
              color: #333;
              font-size: 24px;
              margin: 0;
              padding: 0;
              margin-left: 20px;
              font-weight: normal;
              padding-top: 12px;

              span {
                color: #fd4747;
                font-family: "Microsoft YaHei", Verdana, Arial !important;
              }
            }
          }

          .main-content {
            p {
              padding: 7px 0 30px 20px;
              margin: 0;
              font-size: 14px;
              color: #333;
              display: block;
              font-family: "Microsoft YaHei", Verdana, Arial !important;
            }

            .code-container {
              width: 100%;
              height: 136px;
              overflow: hidden;

              .pt-touch {
                text-align: center;
                width: 304px;
                position: relative;
                height: 100%;
                display: inline-block;
                overflow: hidden;
                zoom: 1;

                &:hover img {
                  opacity: 0.8;
                  transform: scale(0.95);
                }

                img {
                  padding: 0 20px;
                  transition: all 0.3s;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
