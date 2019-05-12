<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="list_top">
        <div class="list_top_contain">
          <div class="title">
            <p>手机App下载</p>
            <div>
              <div class="foot_button">安卓下载</div>
              <div class="foot_button">iOS下载</div>
            </div>
          </div>
          <div class="file_icon es1">
            <div style="padding:5px;background:#fff;">
              <div style="width: 100px; height: 100px" ref="qr-code" class="service-app"></div>
            </div>
            
            <!-- <canvas class="canvas" height="75" width="75"></canvas> -->
          </div>
        </div>
        <!-- <div class="list_top_contain">
          <div class="title">
            <p>签到抽奖</p>
            <div>
              <div class="foot_button">每日签到</div>
              <div class="foot_button">积分摇奖</div>
            </div>
          </div>
          <div class="file_icon hasimg"></div>
        </div> -->
        <div class="list_top_contain" style="float:right">
          <div class="title">
            <p>代理推广</p>
            <div>
              <div class="foot_button">代理注册</div>
              <div class="foot_button">推广赚钱</div>
            </div>
          </div>
          <div class="file_icon hasimg2 es2"></div>
        </div>
      </div>
      <div class="f-middle-main">
        <div class="f-middle-left">
          <span class="foot-write">运营监管</span>
          <ul>
            <li class="f-left-one">
              <a href=" javascript:void(0)"></a>
            </li>
            <li class="f-left-two">
              <a href=" javascript:void(0)"></a>
            </li>
          </ul>
        </div>
        <div class="f-middle-middle">
          <span class="foot-write">支付方式</span>
          <ul>
            <li class="f-middle-one">
              <a href=" javascript:void(0)"></a>
            </li>
            <li class="f-middle-two">
              <a href=" javascript:void(0)"></a>
            </li>
            <li class="f-middle-three">
              <a href=" javascript:void(0)"></a>
            </li>
            <li class="f-middle-four">
              <a href=" javascript:void(0)"></a>
            </li>
          </ul>
        </div>
        <!-- <div class="f-middle-right">
          <span class="foot-write">支持浏览器</span>
          <ul>
            <li class="f-right-one">
              <a href=" javascript:void(0)"></a>
            </li>
            <li class="f-right-two">
              <a href=" javascript:void(0)"></a>
            </li>
            <li class="f-right-three">
              <a href=" javascript:void(0)"></a>
            </li>
          </ul>
        </div> -->
      </div>
      <ul class="footer-list">
        <li v-for="(item,i) in footerList" :key="i">
          <a @click="goHelp(item.link)">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="footer-bottom">
      <div>
        <span>Copyright ©</span>
        <span>2015-2019 &nbsp;</span>
        <span>澳博</span>
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
  </footer>
  
</template>

<script>
import store from "@/vuex/store";

export default {
  data() {
    return {
      show_mobile: true,
      animatedStaues: false,
      footerList: [
        { name: "关于我们", link: "/home/about" },
        { name: "常见问题", link: "/home/issue" },
        { name: "存款帮助", link: "/home/savings" },
        { name: "取款帮助", link: "/home/help_withdrawals" },
        { name: "联系我们", link: "/home/contact" }
      ]
    };
  },
  methods: {
    goHelp(link) {
      this.$store.commit('szc/showBanner',{})
      this.$router.push(link);
    }
  },
  computed: {
    // 是否提示信息
    tipDatas() {
      return this.$store.state.alert.tipModel;
    }
  },
  mounted() {
    this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size:100
    })

    setTimeout(() => {
      this.animatedStaues = true;
    }, 1500);
  },
  store
};
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 236px;
  overflow: hidden;
  background: rgba(232, 217, 219, 1);
  margin-top:50px;
  position: relative;
  .footer-top {
    float: left;
    width: 1360px;
    height: 200px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background-blend-mode: normal, normal;
    .list_top {
      width: 100%;
      height: 120px;
      .list_top_contain {
        height: 120px;
        width: 383px;
        float: left;
        margin-right: 105px;
        .title {
          font-size: 24px;
          color: #462525;
          width: 255px;
          float: left;
          p {
            margin: 20px 0;
          }
        }
        .file_icon {
          width: 110px;
          height: 110px;
          float: right;
          margin-right: 11px;
          margin-top: 11px;
        }
        .hasimg {
          background-image: url(/static/szc/img/home/foot_2.4f06247.png);
          background-size: 100% 100%;
        }
        .hasimg2 {
          background-image: url(/static/szc/img/home/foot_2.4f06248.png);
          background-size: 100% 100%;
        }
        .es1 {
          // background-image: url(/static/szc/img/home/ewm.png);
          background-size: 100% 100%;
        }
        .foot_button {
          width: 110px;
          height: 36px;
          border: 1px solid rgba(102, 102, 102, 1);
          border-radius: 18px;
          display: inline-block;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-align: center;
          line-height: 36px;
          font-size: 14px;
          color: #999;
          margin-right: 12px;
          // cursor: pointer;
          -webkit-transition: all 0.2s linear;
          transition: all 0.2s linear;
        }
      }
      .list_top_contain:last-child {
        margin-right: 0;
      }
    }
    .f-middle-main {
      float: left;
      width: 615px;
      height: 80px;
      padding:12px 0;
      .f-middle-left {
        float: left;
        margin-right:75px;
        span {
          font-size: 12px;
          color: rgba(70, 37, 37, 0.8);
        }
        ul {
          margin-top: 8px;
          overflow: hidden;
          li {
            float: left;
            margin-right: 6px !important;
            background: url(/static/szc/img/home/footer.e97dc4b.png) no-repeat;
            display: block;
            width: 35px;
            height: 36px;
            a {
              width: 100%;
              height: 100%;
              display: inline-block;
              cursor:pointer;
            }
          }
          li:nth-child(2) {
            width: 110px;
            background-position-x: -44px;
          }
        }
      }
      .f-middle-middle {
        float: left;
        margin-right: 71px;
        .foot-write {
          font-size: 12px;
          color: rgba(70, 37, 37, 0.8);
        }
        ul {
          margin-top: 8px;
          overflow: hidden;
          li:first-child {
            width: 36px;
            background-position-x: -160px;
          }
          li:nth-child(2) {
            background-position-x: -201px;
          }
          li:nth-child(3) {
            background-position-x: -242px;
          }
          li:nth-child(4) {
            background-position-x: -282px;
          }
          li {
            float: left;
            margin-right: 6px !important;
            background: url(/static/szc/img/home/footer.e97dc4b.png) no-repeat;
            display: block;
            width: 35px;
            height: 36px;
          }
        }
      }
      .f-middle-right {
        float: left;
        margin-right: 20px;
        span {
          font-size: 12px;
          color: rgba(70, 37, 37, 0.8);
        }
        ul {
          margin-top: 8px;
          overflow: hidden;
          li {
            float: left;
            margin-right: 6px !important;
            background: url(/static/szc/img/home/footer.e97dc4b.png) no-repeat;
            display: block;
            width: 35px;
            height: 36px;
          }
          li:nth-child(1) {
            background-position-x: -323px;
          }
          li:nth-child(2) {
            background-position-x: -363px;
          }
          li:nth-child(3) {
            background-position-x: -403px;
          }
        }
      }
    }
    .footer-list {
      line-height: 80px;
      height: 80px;
      float: right;
      margin-left: 50px;
      li {
        float: left;
        width: 80px;
        line-height: 14px;
        font-size: 14px;
        color: rgba(205, 16, 20, 0.6);
        text-align: center;
        border-right: 1px solid hsla(0, 0%, 100%, 0.2);
        cursor: pointer;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        a {
          display: inline-block;
          line-height: 80px;
          height: 80px;
          color: #f93e58;
        }
      }
    }
  }
  .footer-bottom {
    float: left;
    margin-top: 200px;
    width: 100%;
    height: 36px;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(205, 16, 20, 0.8)),
      to(#cd1014)
    );
    // background-image: linear-gradient(left, rgba(205, 16, 20, 0.8), #cd1014);
    background-blend-mode: normal, normal;
    div {
      margin: 0 auto;
      text-align: center;
      vertical-align: middle;
      height: 36px;
      width: 280px;
      span {
        color: #fff;
        line-height: 36px;
      }
    }
  }
}
</style>
