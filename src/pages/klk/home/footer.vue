<template>
  <div class="footer-bg clear">
    <div class="footer">
      <div class="footer_advantage">
        <div class="wp clear">

          <div class="advan_box clear">
            <div class="bg_box">
              <div class="bg-demo"></div>
            </div>
            <div class="advan_text">
              <div>试玩体验</div>
              <div>上百款游戏，不用花钱照样玩!</div>
            </div>
          </div>
          <div class="advan_box clear">
            <div class="bg_box">
              <div class="bg-deposit"></div>
            </div>
            <div class="advan_text">
              <div>存款平均到帐速度</div>
              <div class="time_text">
                <span class="counter minute">0</span>分
                <span class="counter second">52</span>秒
              </div>
            </div>
          </div>
          <div class=" advan_box last_item clear">
            <div class="bg_box">
              <div class="bg-withdraw"></div>
            </div>
            <div class="advan_text">
              <div>取款平均到帐速度</div>
              <div class="time_text">
                <span class="counter minutetwo">0</span>分
                <span class="counter secondtwo">52</span>秒
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="foot_links">
        <div class="wp">
          <a href="javascript:void(0);" class="clickable" @click="goHelp('/home/about')">关于我们</a>
          <a href="javascript:void(0)" @click="goHelp('/home/contact')">联系我们</a>

          <a href="javascript:void(0)" @click="goHelp('/home/partner')">合作伙伴</a>
          <!-- <a href="javascript:alert('敬请期待')">服务条款</a>
          <a href="javascript:alert('敬请期待')">常见问题</a> -->
          <a href="javascript:void(0)" @click="goHelp('/home/savings')">存款帮助</a>
          <!-- <a href="javascript:alert('敬请期待')">帮助中心</a> -->
          <a href="javascript:void(0);" @click="goHelp('/home/help_withdrawals')">取款帮助</a>
          <a href="javascript:void(0)" @click="goHelp('/home/issue')">常见问题</a>
        </div>
      </div>

      <div class="platform">
        <div class="wp">
          <div>
            <ul>
              <li>
                <a class="bg-pt_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-et_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-dc_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-n2_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-dt_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-mg_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-pg_logo" href="javascript:void(0)"></a>
              </li>
            </ul>
          </div>

          <div>

          </div>

        </div>

      </div>

      <div class="copyright">
        <div class="wp">
          <div>
            Copyright&nbsp;©&nbsp;客拉客&nbsp;Reserved
          </div>
        </div>
      </div>

    </div>
    <div v-show="show_mobile" class="appDown animated mobile_auto" :class="{'active':animatedStaues}">
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
    },
    store
  }
</script>

<style lang="less" scoped>
  // /static/klk/img/
  .footer-bg {
    margin: 0 auto;
    max-width: 1920px;
    background: #fff;

    .footer {
      min-width: 1200px;
    }

    .wp {
      width: 1200px;
      margin: 0 auto;
    }

    .footer_advantage {
      height: 130px;
      padding-top: 28px;
      background: #fff;
      color: #000;

      .advan_box {
        width: 453px;
        float: left;

        .bg_box {
          width: 80px;
          height: 80px;
          float: left;
          padding: 17px 0 0 17px;
          margin-right: 10px;
          border: 1px solid #bdbdbd;
          border-radius: 15px;

          .bg-demo {
            background-image: url(/static/klk/img/footer_tleft.png);
            margin-top: -2px;
            margin-left: -2px;
            width: 57px;
            height: 53px;
            background-position: -13px -13px;
          }

          .bg-deposit {
            background-image: url(/static/klk/img/footer_center.png);
            background-position: -15px -14px;
            margin-top: -3px;
            width: 46px;
            height: 45px;
          }

          .bg-withdraw {
            width: 46px;
            height: 45px;
            background-image: url(/static/klk/img/footer_right.png);
            background-position: -15px -15px;
            margin-top: -2px;
          }
        }

        .advan_text {
          height: 80px;
          padding-top: 16px;
          float: left;

          div {
            font-size: 18px;

            &:last-child {
              color: #c7c7c7;
              padding-top: 8px;
            }
          }

          &.clear:after {
            content: "";
            display: block;
            clear: both;
          }

          div.time_text {
            color: #ff6666;
          }
        }

        &:last-child {
          width: 234px;
        }
      }
    }

    .foot_links {
      height: 60px;
      text-align: center;
      color: #fff;
      background: #2c2d2e;
      border-top: 1px solid #232425;
      border-bottom: 1px solid #232425;

      a {
        margin: 0 20px;
        color: #fff;
        line-height: 60px;
      }
    }

    .platform {
      padding: 20px 0 10px 0;
      background: #2c2d2e;
      color: #fff;

      ul {
        height: auto;
        overflow: auto;
        margin-left: 112px;

        li {
          width: 130px;
          height: 45px;
          float: left;
          margin: 0 5px 10px;
          background: #282829;
          text-align: center;

          a {
            background: url(/static/klk/img/footer_sprites.png);
            background-position: 23px -39px;
            width: 130px;
            height: 45px;
            display: block;
            cursor: default;
          }
        }

        li:nth-child(2) {
          a {
            background-position: -7px -341px;
          }
        }

        li:nth-child(3) {
          a {
            background-position: 15px 0;
          }
        }

        li:nth-child(4) {
          a {
            background-position: -7px -383px;
          }
        }

        li:nth-child(5) {
          a {
            background: url(/static/klk/img/footer_logo3.png) no-repeat;
            background-position: 19px 1px;
            background-size: 89px;
          }
        }

        li:nth-child(6) {
          a {
            background-position: 21px 104px;
          }
        }

        li:nth-child(7) {
          a {
            background: url(/static/klk/img/footer_logo4.png) no-repeat;
            background-position: 16px -7px;
            background-size: 93px;
          }
        }
      }
    }

    .copyright {
      height: 60px;
      background: #1d1d1d;

      div {
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 60px;
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
    background-image: url(/static/klk/img/APPxx.png?1);

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
