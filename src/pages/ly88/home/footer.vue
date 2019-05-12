<template>
  <div class="footer-bg clear">
    <div class="footer">
      <div class="foot-wr">
        <div class="fcon">
          <ul>
            <li class="li1">
              <p class="p1">
                <img
                  src="/static/ly88/img/aboutMe.png"
                  alt
                >
              </p>
              <p>
                <a href="javascript:void(0);" @click="goHelp('/home/about-page')">关于我们</a>
                <a href="javascript:void(0);" @click="goHelp('/home/relation')" >联系我们</a>
                <a href="javascript:void(0);" @click="goHelp('/home/agent')" >代理加盟</a>
                <a href="javascript:void(0);" @click="goHelp('/home/issue')">常见问题</a>
                <a href="javascript:void(0);" @click="goView('Kefu')">在线客服</a>
                <a href="javascript:void(0);" @click="goHelp('/home/save-help')">存款帮助</a>
                <a href="javascript:void(0);" @click="goHelp('/home/pull-help')">取款帮助</a>
              </p>
            </li>
            <li class="li2">
              <p class="p1">
                <img
                  src="/static/ly88/img/bowre.png"
                  alt
                >
              </p>
              <p class="p2">
                <a target="_blank" href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/">
                  <img src="/static/ly88/img/c1.abe58bb.png" alt>
                </a>
                <a target="_blank" href="http://www.firefox.com.cn/">
                  <img src="/static/ly88/img/c2.98a59bc.png" alt>
                </a>
                <a target="_blank" href="https://support.apple.com/zh_CN/downloads/safari">
                  <img src="/static/ly88/img/c3.0b7cae1.png" alt>
                </a>
                <a
                  target="_blank"
                  href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads"
                >
                  <img src="/static/ly88/img/c4.58c5801.png" alt>
                </a>
              </p>
            </li>
          </ul>
        </div>
        <!-- <div class="fcon fcon2">
          <img src="/static/ly88/img/ft1.80e8f9b.png" alt>
          <img src="/static/ly88/img/ft2.bee9a07.png" alt>
          <img src="/static/ly88/img/ft3.5835d40.png" alt>
          <img src="/static/ly88/img/ft4.b7f5952.png" alt>
          <img src="/static/ly88/img/ft5.6d9b341.png" alt>
          <img src="/static/ly88/img/png.dfd9ed9.png" alt>
          <img src="/static/ly88/img/ft7.8194be3.png" alt>
          <img src="/static/ly88/img/SB.f92bfc2.png" alt>
          <img src="/static/ly88/img/BBIN.d2b72b2.png" alt>
        </div> -->
        <div class="fcon fcon3">Copyright © 2016-2019 大众娱乐娱乐官方网站 Online Game.All rights reserved</div>
      </div>
    </div>
    <!-- 分为封盘、报错、恭喜 -->
    <Modal
      title="提示信息"
      v-model="tipDatas.bool"
      :scrollable="true"
      class-name="vp-all-tipModel-wrap"
      width="450"
    >
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
    </div>-->
  </div>
</template>

<script>
import store from "@/vuex/store";
import { Modal } from "iview";

export default {
  data() {
    return {
      show_mobile: true,
      muneList: [
        { name: "关于我们", link: "/home/about-page" },
        { name: "联系我们", link: "/home/relation" },
        { name: "代理加盟", link: "/home/agent" },
        { name: "常见问题", link: "/home/issue" },
        { name: "在线客服", link: "Kefu" },
        { name: "存款帮助", link: "/home/save-help" },
        { name: "取款帮助", link: "/home/pull-help" }
      ]
    };
  },
  methods: {
    goHelp(link) {
      this.$router.push(link);
    },
    goView(herf) {
      if (herf == "Kefu") {
        // let url = JSON.parse(localStorage.getItem("config")).service[0].url;
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === "on");
          if (ser) {
            window.open(ser.url);
          }
        }
        return false;
      }
      this.$router.push(herf);
    }
  },
  computed: {
    // 是否提示信息
    tipDatas() {
      return this.$store.state.alert.tipModel;
    }
  },
  store
};
</script>

<style lang="less" scoped>
// /static/klk/
.footer {
  .foot-wr {
    min-width: 1280px;
    background: url(/static/ly88/img/fbg.0f603d5.jpg) no-repeat top;
    font-size: 14px;
  }

  .foot-wr .fcon {
    min-width: 1280px;
    border-bottom: 1px solid;
    padding: 28px 0;
  }

  .foot-wr .fcon + .fcon {
    border-top: 1px solid #2e2e2e;
  }

  .foot-wr .fcon ul {
    width: 1280px;
    margin: 0 auto;
  }

  .foot-wr .fcon ul:after {
    content: "";
    clear: both;
    display: block;
  }

  .foot-wr .fcon li {
    float: left;
    color: #d6d6d6;
  }

  .foot-wr .fcon li p {
    line-height: 24px;
  }

  .foot-wr .fcon li p a {
    color: #d6d6d6;
  }

  .foot-wr .fcon li .p1 {
    font-size: 18px;
  }

  .foot-wr .fcon li .p2 {
    font-size: 20px;
  }

  .foot-wr .fcon .li1 {
    width: 870px;
  }

  .foot-wr .fcon .li1 p:nth-child(2) {
    margin-top: 6px;
  }

  .foot-wr .fcon .li1 a {
    padding-right: 40px;
  }

  .foot-wr .fcon .li2 a {
    padding-right: 10px;
    vertical-align: middle;
  }

  .foot-wr .fcon2 {
    text-align: center;
  }

  .foot-wr .fcon2 img {
    margin: 0 16px;
  }

  .foot-wr .fcon3 {
    text-align: center;
    color: #6a6a6a;
  }
}
</style>
