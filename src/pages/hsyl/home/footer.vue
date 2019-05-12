<template>
  <div class="footer-bg clear">
    <div class="footer">

      <div class="service">
        <div class="wrapper">
          <ul>
            <li>
              <i class="i_footer_01">

              </i>
              <p class="title">超高返水</p>
              <p>充值平均到帐时间1分钟</p>
            </li>
            <li>
              <i class="i_footer_02">

              </i>
              <p class="title">产品优势</p>
              <p>线上主流彩票 9大顶尖真人视讯平台</p>
            </li>
            <li>
              <i class="i_footer_03">

              </i>
              <p class="title">优质服务</p>
              <p>2000人服务团队，24小时客服</p>
            </li>
            <li>
              <i class="i_footer_04">

              </i>
              <p class="title">36,028,288.00元</p>
              <p>累计放送优惠</p>
            </li>
          </ul>
        </div>
      </div>


      <div class="info">
        <div class="wrapper"></div>
      </div>

      <div class="links">
        <div class="wrapper">
          <ul>
            <li>
              <a @click="$router.push({name:'contactus', params: {p_id: 1}})">关于我们</a>
            </li>
            <li>
              <a @click="$router.push({name:'contactus', params: {p_id: 2}})">联络我们</a>
            </li>
            <li>
              <a @click="$router.push({name:'contactus', params: {p_id: 3}})">理性博彩</a>
            </li>
            <li>
              <a @click="$router.push({name:'contactus', params: {p_id: 4}})">存款帮助</a>
            </li>
            <li>
              <a @click="$router.push({name:'contactus', params: {p_id: 5}})">取款帮助</a>
            </li>
            <li>
              <a @click="$router.push({name:'contactus', params: {p_id: 6}})">常见问题</a>
            </li>
          </ul>
          <p>Copyright © 2019 花生娱乐 All Rights Reserved.</p>
        </div>
      </div>

    </div>
    <!-- 分为封盘、报错、恭喜 -->
    <Modal
      title="提示信息"
      v-model="tipDatas.bool"
      :scrollable=true
      class-name="vp-all-tipModel-wrap"
      width="450">
      <div class="tipModel-box">
                        <span>
                            <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
                            <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
                            <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
                        </span>

        <span>{{tipDatas.title}}</span>

      </div>
    </Modal>
    <!-- <div v-show="show_mobile" class="appDown animated mobile_auto" >
        <span @click="show_mobile=false" class="clBtn"></span>
    </div>                          -->
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { Modal } from 'iview'

  export default {
    data () {
      return {
        show_mobile: true,
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
      },

    },
    store
  }
</script>

<style lang="less" scoped>
  // /static/klk/
  .footer-bg {
    margin: 0 auto;
    background: #222629;

    .footer {
      min-width: 1200px;
    }

    .wrapper {
      width: 1200px;
      height: 100%;
      margin: auto;
    }

    .service {
      height: 100px;
      background: #222629;

      .wrapper {
        width: 1200px;
        height: 100%;
        margin: auto;

        ul {
          li {
            float: left;
            width: 25%;
            height: 100%;

            p {
              font-size: 14px;
              color: #999999;
              line-height: 20px;
            }

            .title {
              font-size: 20px;
              line-height: 30px;
              color: #FFF;
              margin-top: 24px;
            }

            i {
              position: relative;
              z-index: 2;
              font-size: 42px;
              text-align: center;
              line-height: 100px;
              float: left;
              display: inline-block;
              width: 100px;
              height: 100px;
              // background: url(../../../../images/CN/huaShengYL/pc/i_footer_01.png)/*tpa=https://xwhtp.083075.com/tizi/static/upload/picture/xinwanhaohuitp/dibu/i_footer_01.png*/ center center no-repeat;
              color: #65cbff;
              font-weight: 300;
            }

            .i_footer_01 {
              background: url('/static/hsyl/img/footer/A1.png') center center no-repeat;
            }

            .i_footer_02 {
              background: url('/static/hsyl/img/footer/A2.png') center center no-repeat;
            }

            .i_footer_03 {
              background: url('/static/hsyl/img/footer/A3.png') center center no-repeat;
            }

            .i_footer_04 {
              background: url('/static/hsyl/img/footer/A4.png') center center no-repeat;
            }
          }
        }
      }
    }

    .links {
      height: 100px;
      background: linear-gradient(90deg, #222629, #2a2f33, #222629);
      padding: 30px 0;
      text-align: center;
      box-sizing: border-box;
      border-top: 1px solid #2e3138;
      font-size: 14px;

      ul {
        display: inline-block;

        li {
          float: left;
          color: #CCC;

          a {
            color: #CCC;
          }

          &:before {
            color: #666;
            content: '|';
            padding: 0 10px;
          }

          &:first-child {
            &:before {
              color: #666;
              content: '';
            }
          }
        }
      }

      p {
        color: #999;
        line-height: 30px;
      }
    }

    .info {
      height: 150px;
      background: #2a2f33;
      background: linear-gradient(90deg, #222629, #2a2f33, #222629);

      .wrapper {
        background: url('/static/hsyl/img/footer/footer_partner.png') center center no-repeat;
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
      background-image: url(/static/klk/APPxx.png);

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

      -webkit-animation: animateSub 2s linear infinite;
      -o-animation: animateSub 2s linear infinite;
      -moz-animation: animateSub 2s linear infinite;
      animation: animateSub 2s linear infinite;
      @-webkit-keyframes animateSub {
        25% {
          transform: translateY(5px)
        }
        75% {
          transform: translateY(-5px)
        }
      }
      @-moz-keyframes animateSub {
        25% {
          transform: translateY(5px)
        }
        75% {
          transform: translateY(-5px)
        }
      }
      @-o-keyframes animateSub {
        25% {
          transform: translateY(5px)
        }
        75% {
          transform: translateY(-5px)
        }
      }
      @-ms-keyframes animateSub {
        25% {
          transform: translateY(5px)
        }
        75% {
          transform: translateY(-5px)
        }
      }
      @keyframes animateSub {
        25% {
          transform: translateY(5px)
        }
        75% {
          transform: translateY(-5px);
        }
      }
    }

  }
</style>
