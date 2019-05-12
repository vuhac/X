<template>
  <div class="footer">
    <div class="ftadCon">
      <div class="container">
        <ul class="ftad clearfloat">
          <li>
            <p class="technicalTitle">技术支持<span>Technical support</span></p>
            <div class="technicalSupport clearfloat">
              <img src="/static/jhcp/img/footer.png" alt="">
              <p class="tecSupportParagraphLine2">
                9号彩票技术支持
                <br> 专业的彩票系统平台
              </p>
            </div>
          </li>

          <li>
            <p class="technicalTitle">服务体验<span>Service experience</span></p>
            <ul class="serviceExperience">
              <li>
                昨日充值到帐平均时间
                <p class="footBar"><span></span></p>
                <em>0'34</em>
                <i>秒</i>
              </li>
              <li>
                昨日提现到帐平均时间
                <p class="footBar"><span></span></p>
                <em>0'38</em>
                <i>秒</i>
              </li>
            </ul>
          </li>

          <li>
            <p class="technicalTitle">充值方式<span>Recharge method</span></p>
            <div class="rechargeMethod">
              <i class="wechat"></i>
              <i class="alipay"></i>
              <i class="cup"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="aboutText">
      <p class="clearfloat">
        <router-link to="/home/contactUs/0">关于我们</router-link>
        |
        <router-link to="/home/contactUs/1">联系我们</router-link>
        |
        <router-link to="/home/contactUs/2">商务合作</router-link>
        |
        <router-link to="/home/contactUs/3">法律声明</router-link>
        |
        <router-link to="/home/contactUs/4">隐私声明</router-link>
        |
      </p>
      <p class="copyright">Copyright © <span class="siteName">9号彩票</span> Reserved | 18+</p>
    </div>
    <!-- <a v-show="show_mobile" href="/static/jhcp/html/download/index.html" target="_blank"
       class="appDown animated mobile_auto animated bounceInUp">
      <span @click="show_mobile=false" class="clBtn"></span>
    </a> -->
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
        // show_mobile: true,
        animatedStaues: false
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
  .footer {
    width: 100%;
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
    // margin-top: 10px;
    .ftadCon {
      background: #f8f8f8;
      border: 1px solid #dce1e5;
      border-left: none;
      border-right: none;
      height: 160px;

      .container {
        width: 1000px;
        margin: 0 auto;
        height: 100px;

        .ftad {
          background-size: 998px;
          background-color: #f8f8f8;
          padding: 20px 0;

          li {
            float: left;
            padding-left: 25px;
            height: 118px;

            .technicalTitle {
              margin: 0;
              font-size: 20px;
              font-weight: 700;
              cursor: text;
              color: #666;

              span {
                font-size: 13px;
                margin-left: 12px;
                color: #b8b8b8;
                font-weight: lighter;
              }
            }

            .technicalSupport {
              margin: 25px 0;
              margin-top: 17px;
              position: relative;

              img {
                float: left;
                width: 90px;
                height: 55px;
                margin-top: 9px;
              }

              .tecSupportParagraphLine2 {
                float: left;
                font-size: 14px;
                font-weight: 400;
                margin-left: 10px;
                width: 140px;
                word-wrap: break-word;
                word-break: normal;
                line-height: 26px;
                margin-top: 12px;
              }
            }

            .rechargeMethod {
              margin: 30px 0;

              i {
                display: inline-block;
                background: url("../../../../static/jhcp/img/home/rechargeMethod.png") no-repeat !important;
                height: 50px;
                width: 72px;
                margin-right: 14px;
              }

              .alipay {
                background-position: 0 -50px !important;
              }

              .cup {
                background-position: 0 -100px !important;
                margin-right: 0;
              }
            }
          }

          li:first-child {
            width: 280px;
            padding-left: 0;
          }

          li + li {
            border-left: 1px solid #ebebeb;
          }

          li:nth-child(2) {
            width: 440px;

            .serviceExperience {
              padding: 12px 0;

              li {
                line-height: 34px;
                font-size: 12px;
                width: 100%;
                height: 50px;

                .footBar {
                  background: #e6e6e6;
                  width: 180px;
                  height: 15px;
                  border-radius: 15px;
                  position: relative;
                  display: inline-block;
                  vertical-align: sub;
                  margin-left: 5px !important;
                  overflow: hidden;
                  margin: 0;
                  font-size: 20px;
                  font-weight: 700;

                  span {
                    background-color: #fd5757;
                    position: absolute;
                    height: 15px;
                    border-radius: 15px 0 0 15px;
                    width: 4.85714%;
                  }
                }

                em {
                  font-size: 26px;
                  margin-left: 5px;
                }
              }

              li:nth-child(2) {
                border-left: none;
                padding-left: 0;

                span {
                  background: #4aa9db;
                  color: #fff;
                }
              }
            }
          }

          li:nth-child(3) {
            width: 280px;
          }
        }
      }
    }

    .aboutText {
      height: 100px;
      padding: 10px 0 20px;
      margin: 0 auto;

      p {
        margin: 0;
        margin: 10px 5px;
        text-align: center;
        font-size: 12px;

        a {
          color: #333;
          padding: 0 10px;
          line-height: 1.4;
          margin: 5px 0;
          font-size: 12px;

          &:hover , &.router-link-active{
            color: #e4393c!important;
            text-decoration: underline;
          }
        }
      }

      .copyright {
        margin-top: 18px;
        color: rgb(153, 153, 153);
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
      background-image: url(/static/jhcp/img/home/APPxx.png);

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
  }
</style>
