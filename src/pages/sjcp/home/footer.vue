<template>
  <div class="footer">
    <div class="footer-main">
      <div class="bottom-info-main">
        <div class="footer_main clear">
          <div class="bottom-info">
            <div class="new-box">
              <h1><em>技术支持</em><span class="lx_ico"></span></h1>
              <div class="new-con clear">
                <div class="footer_logo"></div>
              </div>
            </div>
          </div>
          <div class="bottom-info">
            <div class="new-box">
              <h1><em>使用帮助</em><span>Guide</span></h1>
              <div class="new-con">
                <table class="guideTable">
                  <tbody>
                  <tr>
                    <td><a @click="goHelp('/home/about/0')" href="javascript:void(0);">关于我们</a></td>
                    <td>
                      <a @click="goHelp('/home/about/1')" href="javascript:void(0);">联络我们</a>
                    </td>
                  </tr>
                  <tr>
                    <td><a @click="goHelp('/home/about/4')" href="javascript:void(0);">合作伙伴</a></td>
                    <td><a @click="goHelp('/home/about/2')" href="javascript:void(0);">存款帮助</a></td>
                  </tr>
                  <tr>
                    <td><a @click="goHelp('/home/about/3')" href="javascript:void(0);">取款帮助</a></td>
                    <td><a @click="goHelp('/home/about/1')" href="javascript:void(0);">常见问题</a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="bottom-info">
            <div class="new-box">
              <h1><em>推荐浏览器</em><span>Browser</span></h1>
              <div class="new-con">
                <div class="clear">
                  <ul class="browser-list commonlist notitle clear">
                    <li>
                      <a href="javascript:void(0)" target="_blank"><i
                        class="icon icon-browser icon-browserIE"></i><span>IE新版下载</span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" target="_blank"><i
                        class="icon icon-browser icon-browserFF"></i><span>Chrome浏览器</span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" target="_blank"><i
                        class="icon icon-browser icon-browserGL"></i><span>Firefox浏览器</span></a>
                    </li>
                  </ul>
                  <div class="browser-tip">
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main clear" style="margin:0 auto;">
        <div class="copyright" style="padding-top:30px;"> 未满18周岁禁止购买，Copyright © 2010-2019 手机彩票娱乐公司保留所有权利</div>
        <a class="btn btn-gotop" href="#"><i class="icon icon-gotop"></i></a>
      </div>
    </div>
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
    data() {
      return {
        animatedStaues: false
      }
    },
    methods: {
      goHelp(link) {
        this.$router.push(link)
      }
    },
    computed: {
      // 是否提示信息
      tipDatas() {
        return this.$store.state.alert.tipModel
      }
    },
    mounted() {
      setTimeout(() => {
        this.animatedStaues = true
      }, 1500)
    },
    store
  }
</script>

<style lang="less" scoped>
  .footer {
    background-color: #3c4045 !important;

    .footer-main {
      height: 381px;
      padding-top: 110px;
      margin: 0 auto;
      width: 100%;
      position: relative;
      z-index: 100;
      background: url(/static/sjcp/img/home/footer_bg.jpg) no-repeat center -2px;
      border-top: 4px solid #b62929;

      .bottom-info-main {
        .footer_main {
          padding-left:30px;
          width: 1010px;
          margin: 0 auto;

          .bottom-info {
            float: left;
            width: 32%;
            padding-left: 10px;

            .new-box {
              border-right: 1px solid hsla(0, 0%, 100%, .5);
              padding-top: 2px;
              text-align: left;
              height: 128px;

              h1 {
                color: #fff;
                margin: 0;
                height: 30px;
                line-height: 30px;

                em {
                  font-size: 16px;

                  span {
                    font-size: 12px;
                    margin: 0 5px;
                  }
                }

                .lx_ico {
                  font-size: 12px;
                  margin: 0 5px;
                  display: inline-block;
                  vertical-align: bottom;
                  width: 60px;
                  height: 30px;
                  background: url(/static/sjcp/img/home/font-tit.png) no-repeat center center;
                }
              }
            }

            .new-con {
              padding: 5px 0;

              .footer_logo {
                width: 300px;
                height: 100px;
                float: left;
                background: url(/static/sjcp/img/home/font-logo.png) no-repeat center top;
              }
            }
          }
       
          .bottom-info:nth-child(2) {
            .new-box {
              h1 {
                span {
                  font-size: 12px;
                  margin: 0 5px;
                }
              }

              .new-con {
                padding: 5px 0;

                .guideTable {
                  width: 100%;
                  color: #8C8C8C;
                  margin-left: 10px;

                  td {
                    padding: 0 0 10px 0;
                    text-align: center;
                    height: 26px;

                    a {
                      font-size: 12px;
                      color: #EBEBEB;
                      text-align: left;
                      display: block;
                      width: 80px;
                      margin-left: 40px;
                    }
                  }
                }
              }
            }
          }

          .bottom-info:nth-child(3) {
            .new-box {
              border-right:0;
              h1 {
                span {
                  font-size: 12px;
                  margin: 0 5px;
                }
              }

              div {
                li {
                  float: left;
                  font-size: 0;
                  width: 30%;
                  text-align: center;
                  margin-right: 6px;

                  a {
                    color: #555;

                    .icon {
                      margin-right: 7px;
                      display: inline-block;
                      vertical-align: middle;

                    }

                    .icon-browser {
                      background: url(/static/sjcp/img/home/home-ico.png) no-repeat;
                      width: 46px;
                      height: 49px;
                    }

                    .icon-browserIE {
                      background-position: 0px -948px;
                    }

                    .icon-browserFF {
                      background-position: -46px -948px;
                    }

                    .icon-browserGL {
                      background-position: -92px -948px;
                    }

                    span {
                      color: #fff;
                      display: inline-block;
                      margin-top: 8px;
                      font-size: 12px;
                    }
                  }

                }
              }
            }
          }
        }
      }

      .main {
        margin: 0 auto;

        .copyright {
          margin: 0 auto;
          text-align: center;
          padding-top: 30px;
          color: #fff;
          font-size: 12px;
        }

        a {
          display: inline-block;
          vertical-align: middle;
          color: #555;

          i {
            display: inline-block;
            vertical-align: middle;
          }

          .icon-gotop {
            // background: url(/static/sjcp/img/home/home-icon.png) no-repeat;
          }
        }
      }
    }
  }
</style>
