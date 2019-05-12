<template>
  <div class="footer-box">
    <div class="footer-wrap">
      <div class="top"></div>
      <div class="bot">
        <div class="lef">
          <p>浏览器建议：首选为Google浏览器，其次为火狐和IE9或IE10浏览器</p>
          <p>分辨率建议：使用1024X768以上的分辨率</p>
        </div>
        <div class="rig">
          <p>未满18岁禁止购买</p>
          <p>Copyright © 2010-2019 地球人娱乐公司保留所有权利</p>
        </div>
      </div>
    </div>
    <div v-show="show_mobile" class="appDown animated mobile_auto animated bounceInUp"
         :class="{'active':animatedStaues}">
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
        show_mobile: false,
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
  .footer-bg {
    background: black;

    .border {
      background-position: 0 -286px;
      background: url(/static/dqr/img/home/borderline.png);
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

                  img {
                    height: 99px;
                    width: 99px;
                  }
                }
              }

              &.qr {
                border-right: 0 solid #1b1b20;
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
    background-image: url(/static/dqr/img/home/APPxx.png);

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
