<template>
  <div class="footer-bg">
    <div class="content-wrap">
      <div class="border"></div>
      <div class="content wp clearfix">
        <div class="iten_con">
          <div class="item_tit">
            <i>服务优势</i>
            <span style="font-size:14px">SERVICE ADVANTANGES</span>
            <i class="colori"></i>
            <b class="color"></b>
          </div>
          <div class="item_time">
            <p>存款到帐平均时间</p>
            <span>23<font>秒</font></span>
            <b><i style="width: 35%; background-color: #fccd00;"></i></b>
          </div>
          <div class="item_time">
            <p>取款到帐平均时间</p>
            <span>2'02<font>秒</font></span>
            <b><i style="width: 66%; background-color: #35c1ff;"></i></b>
          </div>
        </div>
        <div class="iten_con" style="margin: 0 20px;">
          <div class="item_tit">
            <i>支付方式</i>
            <span style="font-size:14px">MOBILE GAME</span>
            <i class="colori"></i>
            <b class="color"></b>
          </div>
          <div class="item_down">
            <p>全面支持支付宝，微信，银联，信用卡支付<br>开启支付新时代，更安全，更快捷</p>
            <span class="payinfo hover"></span>
            <span class="payinfo1 hover"></span>
            <span class="payinfo2 hover"></span>
            <span class="payinfo3 hover"></span>
          </div>
        </div>
        <div class="iten_con">
          <div class="item_tit">
            <i>帮助中心</i>
            <span style="font-size:14px">HELP CENTER</span>
            <i class="colori"></i><b class="color"></b>
          </div>

          <div class="item_qw">
            <router-link to="/home/help/1">存款帮助</router-link>
            <router-link to="/home/help/2">联系我们</router-link>
            <router-link to="/home/help/3">取款帮助</router-link>
            <router-link to="/home/help/4">常见问题</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-show="show_mobile" class="appDown animated mobile_auto animated bounceInUp"
         :class="{'active':animatedStaues}">
      <span @click="show_mobile=false" class="clBtn"></span>
    </div> -->
    <div v-show="show_hongbao"  target="_blank"
       style="position: fixed; z-index: 1001; left: 0; bottom: 0;cursor:pointer">
      <span class="close_btn" @click="show_hongbao=false"
            style="position: absolute;display: inline-block;width: 20px;height: 20px;right: 0;  z-index: 10001;"></span>
      <img src="/static/dalao/img/redb.gif"  onclick="window.open('/static/dalao/html/active/czjhb/index.html')" alt="红包雨">
    </div>

    <!-- 分为封盘、报错、恭喜 -->
    <Modal :scrollable=true title="提示信息" v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap" width="450">
      <div class="tipModel-box">
        <span>
          <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
          <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
          <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
        </span>
        <span>{{tipDatas.title}}</span>
      </div>
    </Modal>
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        show_mobile: true,
        animatedStaues: false,
         show_hongbao: true,
      }
    },
    methods: {
      goHelp (link) {
        this.$router.push(link)
      }
    },
    computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
    mounted () {
      setTimeout(() => {
        this.animatedStaues = true
      }, 1500)
    },
    store
  }
</script>

<style lang="less" scoped>
  .footer-bg {
    background: #b63330;

    .border {
      height: 1px;
      background: #fff;
    }

    .wp {
      width: 1100px;
      margin: 0 auto;
    }

    .content-wrap {
      height: 329px;

      .content {
        padding-top: 60px;

        .iten_con {
          width: 350px;
          height: auto;
          overflow: hidden;
          float: left;

          .item_tit {
            height: 40px;
            margin-bottom: 20px;
            color: #fff;
            font-size: 20px;
            width: 290px;
            padding-left: 26px;

            .colori {
              display: block;
              height: 4px;
              position: absolute;
              margin-top: 9px;
              width: 80px;
              background-color: #fccd00;
            }

            .color {
              display: block;
              width: 288px;
              height: 2px;
              overflow: hidden;
              background-color: #eaeaea;
              margin-top: 10px;
            }
          }

          .item_time {
            height: auto;
            overflow: hidden;
            padding-left: 25px;

            i {
              display: block;
              height: 16px;
              overflow: hidden;
              border-radius: 8px;
            }

            b {
              display: block;
              width: 290px;
              height: 16px;
              overflow: hidden;
              background-color: #ffffff;
              border-radius: 8px;
              margin-bottom: 15px;
              margin-left: 0;
            }

            p {
              width: 60%;
              height: auto;
              overflow: hidden;
              float: left;
              font-size: 12px;
              color: #ffffff;
              line-height: 28px;
              margin-top: 20px;
            }

            span {
              display: block;
              width: 40%;
              height: auto;
              overflow: hidden;
              float: right;
              font-size: 30px;
              color: #ffffff;
              line-height: 29px;
              text-align: right;
              box-sizing: border-box;
              padding-right: 30px;

              font {
                font-size: 12px;
                padding-left: 10px;
              }
            }
          }

          .item_down {
            p {
              font-size: 12px;
              line-height: 28px;
              color: #ffffff;
              margin-bottom: 20px;
              padding-left: 25px;
            }

            .payinfo,
            .payinfo1,
            .payinfo2,
            .payinfo3 {
              width: 67px;
              height: 67px;
              margin-left: 17px;
              display: inline-block;
              opacity: 0.7;
              border-radius: 50%;
              background-image: url(/static/dalao/img/pay.png);
            }

            .payinfo1 {
              background-position: 230px 67px;
            }

            .payinfo2 {
              background-position: 149px 67px;
            }

            .payinfo3 {
              background-position: 67px 67px;
            }

            .hover:hover {
              opacity: 1;
            }
          }

          .item_qw {
            a {
              display: block;
              width: 128px;
              height: 27px;
              overflow: hidden;
              float: left;
              line-height: 27px;
              font-size: 12px;
              color: #ffffff;
              text-indent: 32px;
              background: url(/static/dalao/img/item_qw.png) no-repeat;
              margin-bottom: 30px;
            }

            a:hover {
              background-position: -130px 0;
            }
          }
        }
      }
    }
  }

  .mobile_auto {
    position: fixed;
    z-index: 99999;
    left: 20px;
    bottom: 30px;
    cursor: pointer;
    width: 302px;
    height: 260px;
    background-image: url(/static/dalao/img/home/APPxx.png);

    .clBtn {
      position: absolute;
      right: 40px;
      top: 5px;
      padding: 18px;
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      -webkit-animation: animateSub 2s linear infinite;
      -o-animation: animateSub 2s linear infinite;
      -moz-animation: animateSub 2s linear infinite;
      animation: animateSub 2s linear infinite;
    }

    @-webkit-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-moz-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-o-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-ms-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
  }
</style>
