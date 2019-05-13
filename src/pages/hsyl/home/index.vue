<template>

  <div class="hsyl-new-index">
    <div class="banner-wrap">
      <div class="newgong">
        <div class="newgong-content">
          <div class="notice">
            <i class="iconfont icon-sound"></i>
          </div>

          <div class="demolist list">
            <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()"
                     style="color: white; font-size: 15px; line-height: 40px;overflow: hidden;height: 40px;">
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>
      <div class="carouse">
        <el-carousel :interval="5000" arrow="never" height="530px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank"
               style="width: 1200px;height: 100%;background-color: white;margin: 0 auto;display: block"
               v-if="item.targets !=='#'">
              <img :src="item.img" height="100%" alt="">
            </a>
            <img :src="item.img" alt="" v-else>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main">
      <div class="wrapper">
        <div class="lottery-wrap">
          <ul :key="outIndex" v-for="(outItem,outIndex) in lotteryList1">
            <li>
              <div class="wrap" :key="intIndex" v-for="(intItem,intIndex) in outItem.list">
                <img class="rotate" :src="intItem.ico">
                <div class="name">
                  <span>{{intItem.name}}</span>
                  <span></span>
                </div>
                <div class="rule">
                  <div @click="$router.push({path:intItem.rulePath,query:{id:intItem.id}})">游戏规则</div>
                  <div @click="goto(intItem.router)">立即投注</div>
                </div>
              </div>
            </li>
          </ul>

          <!-- <ul :key="outIndex" v-for="(outItem,outIndex) in lotteryList">
            <li>
              <div class="wrap" :key="intIndex" v-for="(intItem,intIndex) in outItem.list">
                <img class="rotate" :src="intItem.ico">
                <div class="name">
                  <span>{{intItem.name}}</span>
                  <span></span>
                </div>
                <div class="rule">
                  <div @click="$router.push({path:intItem.rulePath,query:{id:intItem.id}})">游戏规则</div>
                  <div @click="goto(intItem.router)">立即投注</div>
                </div>
              </div>
            </li>
          </ul> -->
        </div>
        <div class="title_hot">热门游戏</div>
        <div class="hot-wrap">
          <div class="left-wrap" :class="[hotNow.class]">
            <div class="menu">
              <div class="menu-list" :key="index" v-for="(item,index) in hostList">
                <div class="list" :class="{'active':item.name==hotNow.name}" @click="hotTag(item)">
                  <img :src="item.img" alt="">
                  <p>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="c1">
                <div class="title">{{hotNow.title}}</div>
                <div class="info">
                  {{hotNow.text}}
                </div>
                <a v-if="hotNow.btn" @click="goto(hotNow.btn[0].router)"
                   class="link_btn">{{hotNow.btn[0].name}}</a>
              </div>
            </div>

          </div>
          <div class="right-wrap">
            <div class="top" @click="$router.push({path:'/home/buyu'});$store.commit('hsyl/setNav', 6)">
              <div class="title">AG捕鱼王</div>
              <div class="subtitle">花式捕鱼 爽快捞金</div>
              <div class="type">鱼王奖池</div>
            </div>
            <div class="bottom">
              <div class="live" @click="$router.push({path:'/home/live'});$store.commit('hsyl/setNav', 2)">
                <div class="title">真人视讯</div>
                <div class="subtitle">美女主播 火热传情</div>
              </div>
              <div class="live" @click="$router.push({path:'/home/qipai'});$store.commit('hsyl/setNav', 3)">
                <div class="title">棋牌游戏</div>
                <div class="subtitle">游戏丰富 经典有趣</div>
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
     <!-- <Modal width="657" height="546.67" :scrollable=true v-model="showimg" class='guanbi'><img width="100%" height="100%" src="/static/klk/img/pcAlert.png"/><span class="close" @click="close"></span></Modal> -->
     <vp-mc :imgsrc="imgsrc"></vp-mc>
    
  </div>
</template>

<script>
  // import $ from 'jquery'
  import store from '@/vuex/store'
  import vpMc from "./mc"

  export default {
    data () {
      return {
        showimg:false,
        popups: '',
        lantern: '',
        showPopout: false,
        imgsrc:"/static/hsyl/img/pcAlert.png",
        // 游戏类型
        //   @click="goto({'path':`/rules/${$route.meta.series}`,query:{id:$route.meta.id}})"
        lotteryList1: [
          {
            list: [
              {
                name: '北京赛车',
                router: '/plays/tradition/2',
                ico: '/static/public/image/lottery/nico/png/2.png',
                rulePath: '/rules/pk10',
                id: 2
              },
              {
                name: '快乐十分',
                router: '/plays/tradition/5',
                ico: '/static/public/image/lottery/nico/png/5.png',
                rulePath: '/rules/klsf',
                id: 5
              },
              {
                name: '重庆时时彩',
                router: '/plays/tradition/4',
                ico: '/static/public/image/lottery/nico/png/4.png',
                rulePath: '/rules/ssc',
                id: 4
              }
            ]
          },
          {
            list: [
              {
                name: '幸运飞艇',
                router: '/plays/tradition/3',
                ico: '/static/public/image/lottery/nico/png/3.png',
                rulePath: '/rules/pk10',
                id: 3
              },
              {
                name: '六合彩',
                router: '/plays/tradition/1',
                ico: '/static/public/image/lottery/nico/png/1.png',
                rulePath: '/rules/lhc',
                id: 1
              },
              {
                name: '11选5',
                router: '/plays/tradition/7',
                ico: '/static/public/image/lottery/nico/png/7.png',
                rulePath: '/rules/cp11x5',
                id: 7
              }
            ]
          },
          {
            list: [
              {
                name: '快速六合',
                router: '/plays/tradition/18',
                ico: '/static/public/image/lottery/nico/png/18.png',
                rulePath: '/rules/lhc',
                id: 18
              },
              {
                name: '快速赛车',
                router: '/plays/tradition/12',
                ico: '/static/public/image/lottery/nico/png/12.png',
                rulePath: '/rules/pk10',
                id: 12
              },
              {
                name: '快速时时彩',
                router: '/plays/tradition/16',
                ico: '/static/public/image/lottery/nico/png/16.png',
                rulePath: '/rules/ssc',
                id: 16
              }
            ]
          },
        ],
        lotteryList: [
          {
            list: [
              {
                name: '北京赛车',
                router: '/plays/tradition/2',
                ico: '/static/hsyl/img/home/icon1.png',
                rulePath: '/rules/pk10',
                id: 2
              },
              {
                name: '快乐十分',
                router: '/plays/tradition/5',
                ico: '/static/hsyl/img/home/icon2.png',
                rulePath: '/rules/klsf',
                id: 5
              },
              {
                name: '重庆时时彩',
                router: '/plays/tradition/4',
                ico: '/static/hsyl/img/home/icon3.png',
                rulePath: '/rules/ssc',
                id: 4
              }
            ]
          },
          {
            list: [
              {
                name: '幸运飞艇',
                router: '/plays/tradition/3',
                ico: '/static/hsyl/img/home/xyft.png',
                rulePath: '/rules/pk10',
                id: 3
              },
              {
                name: '六合彩',
                router: '/plays/tradition/1',
                ico: '/static/hsyl/img/home/66666666.png',
                rulePath: '/rules/lhc',
                id: 1
              },
              {
                name: '11选5',
                router: '/plays/tradition/7',
                ico: '/static/hsyl/img/home/11-5.png',
                rulePath: '/rules/cp11x5',
                id: 7
              }
            ]
          },
          {
            list: [
              {
                name: '快速六合',
                router: '/plays/tradition/18',
                ico: '/static/hsyl/img/home/jslh.png',
                rulePath: '/rules/lhc',
                id: 18
              },
              {
                name: '快速赛车',
                router: '/plays/tradition/12',
                ico: '/static/hsyl/img/home/jssc.png',
                rulePath: '/rules/pk10',
                id: 12
              },
              {
                name: '快速时时彩',
                router: '/plays/tradition/16',
                ico: '/static/hsyl/img/home/jsssc.png',
                rulePath: '/rules/ssc',
                id: 16
              }
            ]
          },
        ],
        //热门游戏
        hostList: [
          {
            img: '/static/hsyl/img/home/cai.png', name: '购彩大厅', class: 'active1',
            title: '购彩大厅',
            text: '全面覆盖重庆时时彩、北京赛、PK10等，并提供香港六合彩的各期开奖信息，为广大喜爱玩港彩的用户提供及时的开奖信息。',
            btn: [{name: '传统时时彩', router: '/plays/hall'}]
          },
          {
            img: '/static/hsyl/img/home/i_ig.png', name: '快速彩票', class: 'active2',
            title: '快速彩票',
            text: '独特创新思维，打破传统理念，首家推出快速类与一分类传统彩产品，由欧洲引进专业开奖设备，首创快速服务新体验。',
            btn: [{name: '快速赛车', router: '/plays/tradition/12'}]
          },
          {
            img: '/static/hsyl/img/home/xgc.png', name: '六合彩', class: 'active3',
            title: '香港六合彩',
            text: '六合彩是香港唯一的合法彩票，是少数获香港政府准许合法进行的赌博之一',
            btn: [{name: '六合彩', router: '/plays/tradition/1'}]
          },
        ],
        hotNow: {
          img: '/static/hsyl/img/home/cai.png', name: '购彩大厅', class: 'active1',
          title: '购彩大厅',
          text: '全面覆盖重庆时时彩、北京赛车、PK10等，并提供香港六合彩的各期开奖信息，为广大喜爱玩港彩的用户及时的开奖信息。',
          btn: [{name: '传统时时彩', router:'/plays/tradition/4'}]
        },
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
        carouselData: [],
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
       close(){
          this.showimg=false;
      },
      // async getPopout () {
      //   if (!this.$store.state.mainState.ifpourT || localStorage.token) return false
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
      //     type: 'popups',
      //     desc_client_type: 'html'
      //   })
      //   if (res && res.code == 200) {
      //     if (!res.data.data.length) return false
      //     this.showPopout = true
      //     this.showimg=false
      //     this.popups = res.data.data[0] && res.data.data[0].description
      //     this.$store.commit('mainState/resetPour', false)
      //   }
      // },
      // 获取公告
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
      hotTag (item) {
        this.hotNow.img = item.img
        this.hotNow.name = item.name
        this.hotNow.class = item.class
        this.hotNow.title = item.title
        this.hotNow.text = item.text
        this.hotNow.btn = item.btn
      },
      goto(newpath){

         if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
                 }else{
                    this.$router.push({path:newpath})
                    this.$store.commit('hsyl/setNav', 1)
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
      // this.getPopout()
      this.getLantern()
      this.getBanner()
    },
    components: {
      vpMc
    },
    store
  }
</script>

<style lang="less" scoped>
  .hsyl-new-index {
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

      .newgong {
        background: rgba(9, 5, 7, 0.46);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 8;
        color: #fff;
        border-top: 1px solid #3d3b46;
        height: 36px;
        border-bottom: 1px solid #3d3b46;

        .newgong-content {
          width: 1200px;
          height: 51px;
          margin: 0 auto;

          .notice {
            display: inline-block;
            float: left;
            position: relative;
            top: 7px;
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
          }
        }
      }

      .carouse {
        text-align: center;
        width: 100%;

        /deep/ .el-carousel__indicators {
          bottom: 36px
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
      margin-top: 40px;
      min-height: 640px;
      padding-bottom: 30px;
      position: relative;
      z-index: 100;

      .lottery-wrap {
        ul {
          display: inline-block;
          padding-right: 15px;

          &:last-child {
            padding-right: 0;
          }

          li {
            width: 390px;
            background: url(/static/hsyl/img/home/BG390.png);
            animation-duration: 0.3s;
            opacity: 1;
            box-shadow: 0 30px 30px -10px #d7daec;

            .wrap {
              height: 116px;
              border-bottom: 1px solid rgba(238, 238, 238, 0.5);
              cursor: pointer;

              .rotate {
                // height: 116px;
                width:100px;
                height:100px;
                border-radius: 50%;
                float: left;
                // padding-left: 20px;
                margin-left:20px;
                margin-top:8px;
                transition: transform 0.5s;

                &:hover {
                  transform: rotate(360deg);
                }
              }

              .name {
                position: relative;
                float: left;
                width: 116px;
                font-size: 20px;
                text-align: center;
                padding-left: 10px;
                padding-top: 30px;

                span {
                  width: 116px;
                  height: 20px;
                  display: block;
                  font-size: 20px;
                  color: #fff;
                  margin-bottom: 5px;

                  &:last-child {

                    background: url(/static/hsyl/img/home/iocon1-2.png);
                    background-size: cover;
                  }
                }
              }

              .rule {
                float: right;
                display: inline-block;
                padding-right: 25px;
                padding-top: 30px;

                div {
                  cursor: pointer;
                  font-size: 16px;

                  &:first-child {
                    display: inline-block;
                    color: #dddddd;
                    font-size: 14px;
                    width: 80px;
                    text-align: center;
                    padding-bottom: 10px;
                  }
                ;

                  &:last-child {
                    color: #FFF;
                    background-color: #1a77bf;
                    width: 80px;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    border-radius: 5px;

                    &:hover {
                      background-color: #1aa6bf;
                    }
                  }
                }
              }
            }
          }
        }

        .img {
          width: 116px;
          height: 110px;
          position: relative;
          overflow: hidden;

          img {
            width: auto;
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

      .hot-wrap {

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        .left-wrap {
          float: left;
          width: 600px;
          height: 370px;
          background: url(/static/hsyl/img/home/bg_wh.jpg) no-repeat;
          // background-image: linear-gradient(160deg, #7faaff, #22d8e5);
          &.active1 {
            background: url(/static/hsyl/img/home/bg_wh.jpg) no-repeat;
          }

          &.active2 {
            background: url(/static/hsyl/img/home/bg_ig.jpg) no-repeat;
          }

          &.active3 {
            background: url(/static/hsyl/img/home/bg_xgc.png) no-repeat;
          }

          .menu {
            display: inline-block;

            .menu-list {
              width: 130px;

              .list {
                width: 130px;
                height: 124px;
                background: rgba(0, 0, 0, 0.15);
                position: relative;
                text-align: center;
                cursor: pointer;
                transition: .2s all ease-in-out;

                &.active {
                  background: rgba(0, 0, 0, 0.3);

                  &::before {
                    content: '';
                    width: 10px;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #4de1fb;
                  }
                }

                &:hover {
                  background: rgba(0, 0, 0, 0.3);
                }

                img {
                  width: 64px;
                  height: 64px;
                  display: inline-block;
                  margin-top: 15px;
                }

                p {
                  color: #FFF;
                  font-size: 18px;
                  line-height: 30px;
                }
              }
            }
          }

          .content {
            width: 470px;
            display: inline-block;
            float: right;
            height: 370px;
            box-sizing: border-box;
            padding: 30px 20px 30px 20px;
            transition: .2s all ease-in-out;
            color: #fff;

            .title {
              font-size: 30px;
            }

            .info {
              width: 320px;
              font-size: 14px;
              line-height: 2;
              margin-top: 20px;
              font-weight: 300;
            }

            .link_btn {
              margin-top: 13px;
              display: block;
              width: 170px;
              height: 40px;
              font-size: 18px;
              text-align: center;
              line-height: 40px;
              color: #FFF;
              border: 1px solid #FFF;
              border-radius: 3px;
              margin-top: 40px;
              transition: .2s all ease-in-out;
              cursor: pointer;

              &:hover {
                background: #fd7328;
                border-color: #fd7328;
              }
            }
          }
        }

        .right-wrap {
          float: right;

          .title {
            color: #FFF;
            font-size: 24px;
          }

          .subtitle {
            color: #FFF;
            font-size: 14px;
            line-height: 30px;
          }

          .top {
            cursor: pointer;
            width: 590px;
            height: 220px;
            background: url(/static/hsyl/img/home/bg_fishing.png) no-repeat;;
            margin-top: -33px;
            transition: transform .2s linear;
            animation-duration: 0.3s;
            transform: scale(1);
            padding-top: 60px;
            padding-left: 20px;

            &:hover {
              transform: scale(.98)
            }

            .subtitle {
              color: #FFF;
              font-size: 14px;
              line-height: 30px;
            }

            .type {
              position: absolute;
              right: 0;
              color: #ffe14c;
              font-size: 14px;
              padding-right: 30px;
              bottom: 50px;
            }
          }

          .bottom {
            .live {
              cursor: pointer;
              float: left;
              width: 290px;
              height: 180px;
              box-sizing: border-box;
              background-image: linear-gradient(160deg, #9545e6, #66b3ff);
              background: url(/static/hsyl/img/home/bg_zrsx.png) no-repeat;
              transition: transform .2s linear;
              padding: 20px 0 0 20px;

              &:hover {
                transform: scale(.98)
              }

              &:last-child {
                margin-left: 10px;
                background: url(/static/hsyl/img/home/bg_cards.png) no-repeat;
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
      background: #ff0000 url(/static/hsyl/img/ui-bg_gloss-wave_45_817865_500x100.png) 50% 50% repeat-x;
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
      font-family: 'Microsoft YaHei';
      font-size: 24px;
      line-height: 1.5;
      color: #383838;
    }

    // /deep/
  }

  .guanbi img{
    position: relative;
  }
  .guanbi  /deep/ .ivu-modal-footer{
    display: none;
  }
  .guanbi  /deep/ .ivu-modal-body{
    padding: 0 !important;
    height: 546.67px;
  }
  .guanbi  /deep/ .ivu-modal-close{
    display: none;
  }
  .guanbi  /deep/ .ivu-modal {
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
