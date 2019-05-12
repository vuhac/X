<template>
  <div class="footer-bg clear">
    <div class="content-wrap">
      <div class="border"></div>
      <div class="content wp">
        <ul class="sect1">
          <li>
            <div class="ico">
              <img src="/static/hqyl/img/home/footer/thmb_icon1.png" alt="">
            </div>
            <div class="text">
              <div>单日提款无上限</div>
              <div>免费不限次</div>
            </div>
          </li>
          <li>
            <div class="ico">
              <img src="/static/hqyl/img/home/footer/thmb_icon2.png" alt="">
            </div>
            <div class="text">
              <div>10大平台</div>
              <div>单注限红100万</div>
            </div>
          </li>
          <li>
            <div class="ico">
              <img src="/static/hqyl/img/home/footer/thmb_icon2.png" alt="">
            </div>
            <div class="text">
              <div>周周首存无限送</div>
              <div>洗码1.1%不封顶</div>
            </div>
          </li>
        </ul>
        <div class="bdr">
          <em></em>
        </div>
        <div class="sect2">
          <div class="title">
            合作平台
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="bdr">
          <em></em>
        </div>
        <div class="sect3">
          <ul>
            <li class="about">
              <div class="title">关于我们</div>
              <ul>
                <li>
                  <a href="#/home/contactUs/1">环球简介</a>
                </li>
                <li>
                  <a href="#/home/contactUs/7">规则条款</a>
                </li>
                <li>
                  <a href="#/home/contactUs/5">联系我们</a>
                </li>
                <li>
                  <a href="#/home/contactUs/5">我要反馈</a>
                </li>
              </ul>
            </li>
            <li class="new">
              <div class="title">新手指南</div>
              <ul>
                <li>
                  <a href="#/home/contactUs/5">如何试玩</a>
                </li>
                <li>
                  <a href="#/home/contactUs/5">如何注册</a>
                </li>
                <li>
                  <a href="#/home/contactUs/3">如何存款</a>
                </li>
                <li>
                  <a href="#/home/contactUs/2">如何取款</a>
                </li>
              </ul>
            </li>
            <li class="other">
              <div class="title">其他</div>
              <ul>
                <li>
                  <a href="#/home/contactUs/4">合作加盟</a>
                </li>
                <li>
                  <a href="#/home/youhui">优惠活动</a>
                </li>
                <li>
                  <a href="#/home/contactUs/6">环球风采</a>
                </li>
                <li>
                  <a href="#/home/contactUs/6">工具下载</a>
                </li>
              </ul>
            </li>
            <li class="gevo">
              <div class="title">监管机构</div>
              <div class="gev-wrap">
                <div class="ico">
                  <a>
                  </a>
                  <a target="_blank" href="https://www.gamcare.org.uk/">
                  </a>
                  <a>
                  </a>
                  <a target="_blank"
                     href="https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/">
                  </a>
                </div>
                <div class="server">客服电邮</div>
                <div class="email">hqyl669@gmail.com</div>
              </div>
            </li>
            <li class="Cagayan">
              <div class="title">牌照展示</div>
              <div class="tip">First Cagayan颁发</div>
              <div class="img">
                <img src="/static/hqyl/img/home/footer/license_compressed.jpg" alt="">
              </div>
            </li>
            <li class="Cagayan qr">
              <div class="title">手机环球</div>
              <div class="tip">二维码扫描</div>
              <div class="img">
                <!-- <img src="/static/hqyl/img/home/footer/qr.png" alt=""> -->
                <div ref="qr-code1"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="copyright">
      <div class="border"></div>
      <p>版权为环球娱乐 所有 © 2019</p>
    </ul>

    <div v-show="show_mobile" class="appDown animated mobile_auto animated bounceInUp"
         :class="{'active':animatedStaues}">
          <div class="codeBox">
            <div class="QR-code" ref="qr-code">
              <!-- <img src="/static/jltx/img/code.png" width="96" height="96"> -->
            </div>
          </div>



      <span @click="show_mobile=false" class="clBtn"></span>
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

       this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size: 80
      })

       this.createDownloadQRCode({
        el: this.$refs['qr-code1'],
        url: window.location.origin + '/m#/download',
        size: 90
      })

    },
    store
  }
</script>

<style lang="less" scoped>

  .codeBox{
    position: absolute;
    left: 51px;
    top: 86px;
    width: 90px;
    padding: 5px;
    background-color: #fff;
  }

  .footer-bg {
    background: black;

    .border {
      background-position: 0 -286px;
      background: url(/static/hqyl/img/home/borderline.png);
      width: 1000px;
      height: 2px;
      width: 100%;
    }

    .wp {
      width: 1000px;
      margin: 0 auto;
    }

    .content-wrap {
      .content {
        .sect1 {
          height: 112px;
          font-size: 14px;
          margin-left: 185px;

          li {
            display: inline-block;
            width: 200px;
            position: relative;
            padding-top: 40px;

            .ico {
              display: inline-block;
              position: absolute;
            }

            .text {
              padding-left: 55px;
              line-height: 20px;
              display: inline-block;

              div {
                &:first-child {
                  color: #a7a7a7;
                  font-size: 16px;
                }
              }
            }
          }
        }

        .bdr {
          width: 904px;
          height: 1px;
          background: #1c1c21;
        }

        .sect2 {
          padding-bottom: 20px;

          .title {
            font-size: 14px;
            color: #a7a7a7;
            height: 50px;
            line-height: 50px;
            padding-left: 48px;
          }

          ul {
            margin-left: 100px;

            li {
              display: inline-block;
              width: 90px;
              height: 34px;
              background: url(/static/hqyl/img/home/footer/img-sprites.png) no-repeat;
              background-position: -4px -188px;

              &:nth-child(1) {
                background-position: -4px -188px;

                &:hover {
                  background-position: -4px -229px;
                }
              }

              &:nth-child(2) {
                background-position: -110px -188px;

                &:hover {
                  background-position: -109px -229px;
                }
              }

              &:nth-child(3) {
                background-position: -305px -192px;

                &:hover {
                  background-position: -305px -230px;
                }
              }

              &:nth-child(4) {
                background-position: -408px -192px;

                &:hover {
                  background-position: -408px -228px;
                }
              }

              &:nth-child(5) {
                background-position: -504px -192px;

                &:hover {
                  background-position: -504px -228px;
                }
              }

              &:nth-child(6) {
                background-position: -604px -192px;

                &:hover {
                  background-position: -604px -230px;
                }
              }

              &:nth-child(7) {
                background-position: -712px -193px;

                &:hover {
                  background-position: -712px -235px;
                }
              }

              &:nth-child(8) {
                background-position: -921px -194px;

                &:hover {
                  background-position: -921px -235px;
                }
              }

            }
          }
        }

        .sect3 {
          padding-bottom: 20px;
          padding-bottom: 30px;

          ul {
            zoom: 1;
            overflow: hidden;
            margin-top: 32px;
            width: 1100px;
            margin-left: -50px;

            li {
              float: left;
              border-right: 1px solid #1b1b20;

              .title {
                padding: 0 0 20px 0;
                color: #a7a7a7;
                font-size: 14px;
                text-align: center;
              }

              &.about, &.new, &.other {
                ul {
                  float: left;
                  width: 109px;
                  position: relative;
                  margin-left: 48px;
                  margin-top: 5px;
                  margin-bottom: 32px;

                  li {
                    float: inherit;
                    border: 0;

                    a {
                      color: #525252;
                      font-size: 14px;
                      line-height: 24px;

                      &:hover {
                        color: #fff;
                      }
                    }
                  }
                }
              }

              &.gevo {
                text-align: center;
                padding: 0 30px;
                height: 158px;

                .gev-wrap {
                  .ico {
                    a {
                      display: inline-block;
                      width: 26px;
                      height: 25px;
                      margin: 0 7px;
                      background: url(/static/hqyl/img/home/footer/index_tblicon1h.png);

                      &:nth-child(1) {
                        background: url(/static/hqyl/img/home/footer/index_tblicon1h.png);
                      }

                      &:nth-child(2) {
                        background: url(/static/hqyl/img/home/footer/index_tblicon2h.png);
                      }

                      &:nth-child(3) {
                        background: url(/static/hqyl/img/home/footer/index_tblicon5h.png);
                      }

                      &:nth-child(4) {
                        background: url(/static/hqyl/img/home/footer/index_tblicon4h.png);
                        width: 65px;
                        height: 22px;
                      }
                    }
                  }
                }

                .server, .email {
                  margin-top: 10px;
                  font-size: 12px;
                  color: #a7a7a7;
                }

              }

              &.Cagayan {
                padding: 0 20px;

                .tip {
                  padding: 0 0 20px 0;
                  color: #a7a7a7;
                  font-size: 14px;
                  text-align: center;
                  padding-bottom: 20px;
                  color: #525252;
                }

                .img {
                  height: 99px;
                  width: 99px;
                  margin:0 auto;
                  img {
                    height: 99px;
                    width: 99px;
                  }
                }
              }

              &.qr {
                border-right: 0 solid #1b1b20;
                .img{
                  padding:4px;
                  background:#fff;
                }
              }
            }
          }
        }
      }
    }

    .copyright {
      padding-bottom: 20px;
      text-align: center;
      color: #b28850;
      font-size: 12px;
      letter-spacing: 2px;

      .border {
        background: url(/static/hqyl/img/home/borderline.png) top center no-repeat;
        background-size: 50% auto;
      }

      p {
        padding-top: 10px;
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
    background-image: url(/static/hqyl/img/home/APPxx.png);

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
