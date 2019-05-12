<template>
  <div class="footer">
    <div class="bottomLink">
      <div class="inner">
        <!--index_footer_plat-->
        <div class="sadi">
          <div class="diti diti1">新手上路</div>
          <div class="cl h6"></div>
          <ul class="list">
            <li><a href="#/home/question?helpId=46" target="_blank">·游戏玩法</a></li>
            <li><a href="#/home/question?helpId=1" target="_blank">·常见问题</a></li>
          </ul>
        </div>
        <div class="sadi">
          <div class="diti diti2">充提便捷</div>
          <div class="cl h6"></div>
          <ul class="list">
            <li><a href="#/home/question?helpId=12" target="_blank">·银行转帐</a></li>
            <li><a href="#/home/question?helpId=4" target="_blank">·快捷充值</a></li>
            <li><a href="#/home/question?helpId=12" target="_blank">·提款快速</a></li>
          </ul>
        </div>
        <div class="sadi">
          <div class="diti diti3">安全保障</div>
          <div class="cl h6"></div>
          <ul class="list">
            <li><a href="#/home/question?helpId=17" target="_blank">·帐号安全</a></li>
            <li><a href="#/home/question?helpId=33" target="_blank">·资金安全</a></li>
            <li><a href="#/home/question?helpId=20" target="_blank">·购彩安全</a></li>
          </ul>
        </div>
        <div class="sadi">
          <div class="diti diti4">支付方式</div>
          <div class="cl h6"></div>
          <ul class="list">
            <li><a href="#/home/question?helpId=6" target="_blank">·财付通充值</a></li>
            <li><a href="#/home/question?helpId=6" target="_blank">·工行充值</a></li>
            <li><a href="#/home/question?helpId=6" target="_blank">·第三方充值</a></li>
          </ul>
        </div>
        <div class="sadi">
          <div class="diti diti5">快速链接</div>
          <div class="cl h6"></div>
          <ul class="list">
            <li><a href="#/plays/hall" target="_blank">·购彩大厅</a></li>
            <li><a href="#/trend/1" target="_blank">·历史开奖</a></li>
            <li><a href="#/trend/1" target="_blank">·走势图</a></li>
          </ul>
        </div>

      </div>
    </div>
    <div class="foot_box">
      <div class="about_box">
        <p>2009-2019©NN500彩票网 | 客服邮箱：nn500@tgjt888.com</p>
        <p>NN500彩票郑重提示：彩票有风险，投注需谨慎！ 不向未满18周岁的青少年出售彩票</p>
        <ul class="foot_info">
          <li class="foot_wljc"></li>
          <li class="foot_wangan"></li>
          <li class="foot_wsjy"></li>
          <li class="foot_xylh"></li>
          <li class="foot_kxwz"></li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
    <a v-show="show_mobile" href="/static/ddcp/html/download/index.html" target="_blank"
       class="appDown animated mobile_auto animated bounceInUp">
      <span @click="show_mobile=false" class="clBtn"></span>
    </a>
    <!-- 转盘 -->
    <a v-show="show_zhuanpan" href="javascript:;" class="zhuanpan">
      <img src="/static/ddcp/img/zhuanpan.gif" alt=""
           onclick="window.open('/static/ddcp/html/activity/active/opportunity/index.html','_blank')">
      <span @click="closeWindow" class="clBtn"></span>
    </a>

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
  export default {
    data () {
      return {
        show_mobile: false,
        show_zhuanpan: false
      }
    },
    methods: {
      closeWindow () {
        this.show_zhuanpan = false
        return false
      }
    },
     computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
  }
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    overflow: hidden;
    background: rgba(197, 200, 204, 0.49);
    box-sizing: border-box;

    .inner {
      width: 1000px;
      margin: 0 auto;
      overflow: hidden;
      height: 170px;

      .sadi {
        float: left;
        width: 180px;
        padding: 0 9px;
      }

      .diti {
        font-size: 14px;
        color: #000000;
        line-height: 74px;
        border-bottom: 1px solid #760517;
        padding-left: 40px;
        height: 62px;
      }

      .diti1 {
        background: url(/static/ddcp/img/icon/diti1.png) no-repeat 6px center;
      }

      .diti2 {
        background: url(/static/ddcp/img/icon/diti3.png) no-repeat 6px center;
      }

      .diti3 {
        background: url(/static/ddcp/img/icon/diti2.png) no-repeat 6px center;
      }

      .diti4 {
        background: url(/static/ddcp/img/icon/diti4.png) no-repeat 6px center;
      }

      .diti5 {
        background: url(/static/ddcp/img/icon/diti5.png) no-repeat 6px center;
      }

      .list li {
        padding-left: 40px;
      }

      .list li a {
        font: 12px/30px SimSun;
        color: #000;
      }

      .list li a:hover {
        color: #e4393c;
      }
    }

    .foot_box {
      width: 100%;
      height: 148px;
      background: rgba(197, 200, 204, 0.49);
      border-top: 1px solid rgba(0, 0, 0, 0.08);

      .about_box {
        overflow: hidden;
        margin: 0 auto;
        width: 1000px;
        text-align: center;
        font-size: 12px;
        color: #fff;

        .foot_info {
          overflow: hidden;
          margin-bottom: 10px;
          margin: 0 auto 10px;
          width: 720px;
        }

        li {
          float: left;
          margin-right: 24px;
          height: 46px;
          width: 120px;
          line-height: 30px;
          background: url(/static/ddcp/img/foot-bot1.png) no-repeat 0 0;
        }

        li.foot_wangan {
          background-position: 0px -47px;
        }

        li.foot_wsjy {
          background-position: 0px -94px;
        }

        li.foot_xylh {
          background-position: 0px -141px;
        }

        li.foot_kxwz {
          background-position: 0px -188px;
        }

        p {
          line-height: 32px;
          margin-bottom: 10px;
          margin-top: 14px;
          color: #000;
        }
      }
    }

    .zhuanpan {
      position: fixed;
      z-index: 99;
      left: 20px;
      bottom: 30px;
      cursor: pointer;

      .clBtn {
        z-index: 100;
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 20px;
        right: 0;
        top: 0;
        cursor: pointer;
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
      background-image: url(/static/ddcp/img/APPxx.png);

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

      & {
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
