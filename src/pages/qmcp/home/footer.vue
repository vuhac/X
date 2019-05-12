<template>
  <div class="footer">
    <div class="bottom-info-main">
      <div class="footer_main clearfix">
        <div class="bottom-info">
          <div class="new-box">
            <h1><em>技术支持</em><span class="lx_ico"></span></h1>
            <div class="new-con clearfix">
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
                  <td><a @click="$router.push({name:'contactus', params: {p_id: 1}})">关于我们</a></td>
                  <td><a @click="$router.push({name:'contactus', params: {p_id: 2}})">联络我们</a></td>
                </tr>
                <tr>
                  <td><a @click="$router.push({name:'contactus', params: {p_id: 3}})">合作伙伴</a></td>
                  <td><a @click="$router.push({name:'contactus', params: {p_id: 4}})">存款帮助</a></td>
                </tr>
                <tr>
                  <td><a @click="$router.push({name:'contactus', params: {p_id: 5}})">取款帮助</a></td>
                  <td><a @click="$router.push({name:'contactus', params: {p_id: 6}})">常见问题</a></td>
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
              <div class="clearfix">
                <ul class="browser-list commonlist notitle clearfix">
                  <li>
                    <a target="_blank" href="https://www.microsoft.com/zh-cn/download/default.aspx"><i
                      class="icon icon-browser icon-browserIE"></i><span>IE新版下载</span></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.google.com/chrome/"><i
                      class="icon icon-browser icon-browserFF"></i><span>Chrome浏览器</span></a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.firefox.com.cn/"><i
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
    <div class="main clearfix">
      <div class="copyright"> 未满18周岁禁止购买，Copyright © 2010-2019 全民彩票娱乐公司保留所有权利</div>
      <a href="#" class="btn btn-gotop"><i class="icon icon-gotop"></i></a>
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
  import { Modal } from 'iview'

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
    },
    store
  }
</script>

<style lang="less" scoped>
  .footer {
    height: 390px;
    padding-top: 110px;
    margin: 0 auto;
    width: 100%;
    font-size: 13px;
    background: url(/static/qmcp/img/footer_bg.jpg?4c1fc4c3a0) no-repeat center -2px;
    background-size: 100% 100%;
    border-top: 4px solid #662d91;

    .footer_main {
      width: 1200px;
      margin: 0 auto;

      .bottom-info {
        float: left;
        width: 32%;
        padding-left: 10px;

        .new-box {
          border-right: 1px solid hsla(0, 0%, 100%, 0.5);
          padding-top: 2px;
          text-align: left;
          height: 128px;

          h1 {
            color: #fff;
            margin: 0;
            height: 30px;
            line-height: 30px;
          }

          .new-con {
            padding: 5px 0;

            .footer_logo {
              width: 305px;
              height: 100px;
              float: left;
              background: url(/static/qmcp/img/font-logo.png?ee1c0abe15) no-repeat center top;
            }

            .guideTable {
              width: 100%;
              color: #8c8c8c;
              margin-left: 10px;

              td {
                padding: 0 0 10px 0;
                text-align: center;

                a {
                  color: #ebebeb;
                  text-align: left;
                  display: block;
                  width: 80px;
                }
              }
            }

            .browser-list.notitle {
              li {
                float: left;
                width: 30%;
                text-align: center;
                margin-right: 6px;

                i {
                  display: inline-block;
                  width: 46px;
                  height: 49px;
                  margin-right: 7px;
                  background: url(/static/qmcp/img/home-ico.png?98bd941400) no-repeat;
                }

                .icon-browserIE {
                  background-position: 0 -948px;
                }

                .icon-browserFF {
                  background-position: -46px -948px;
                }

                .icon-browserGL {
                  background-position: -92px -948px;
                }

                a {
                  width: 100%;
                  height: 100%;
                  display: block;
                }

                span {
                  color: #fff;
                  display: inline-block;
                  margin-top: 8px;
                }
              }
            }

            .browser-tip {
              width: 100%;
              padding-top: 6px;
              text-align: center;
            }
          }
        }
      }
    }

    .copyright {
      text-align: center;
      padding-top: 30px;
      color: #fff;
    }

    .mobile_auto {
      position: fixed;
      z-index: 99999;
      left: 20px;
      bottom: 30px;
      cursor: pointer;
      width: 302px;
      height: 260px;
      background-image: url(/static/qmcp/img/home/APPxx.png);

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
