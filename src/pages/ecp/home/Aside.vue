<template>
  <div>

    <ul v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1">
      <img src="/static/ecp/img/left.png" alt="">
      <a @click="goUserCen('recharge',1)" class="wechat" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)"  class="zhifubao" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)"  class="qq" href="javascript:;"></a>
      <!--<a href="/static/ecp/html/active/qd/index.html" target="_blank" class="sign-in"></a>-->
      <a href="/static/ecp/html/active/jgj/index.html" class="jgj" target="_blank"></a>
      <a href="/static/ecp/html/active/opportunity/index.html" class="dzp" target="_blank"></a>
      <a class="close" @click="s1=false" href="javascript:;"></a>
    </ul>
    <ul v-show="s2" class="TplFloatSet TplFloatPic_1">
      <img src="/static/ecp/img/right.png" alt="">
      <a class="kefu" @click="openKefu"></a>
      <a href="javascript:;" @click="gomessge" class="tousu"></a>
      <a class="close" @click="s2=false" href="javascript:;"></a>
    </ul>

    <a v-show="show_hongbao"  target="_blank" href="/static/ecp/html/active/czjhb/index.html"
       style="position: fixed; z-index: 1001; left: 0; bottom: 0;">
      <span class="close_btn" @click="show_hongbao=false"
            style="position: absolute;display: inline-block;width: 20px;height: 20px;right: 0;  z-index: 10001;cursor: pointer;"></span>
      <img src="/static/ecp/img/redb.gif"   alt="红包雨">
    </a>

  </div>

</template>

<script>
import store from "@/vuex/store";
import $ from "jquery";

export default {
  data() {
    return {
      s1: true,
      s2: true,
      show_hongbao: true
    };
  },
  methods: {
    addWindow() {
      window.addEventListener("scroll", this.scrollFunc);
    },
    scrollFunc(e) {
      $(".TplFloatPic_1")
        .stop()
        .animate({ top: window.pageYOffset + 200 }, 1000);
    },
    openKefu() {
      let service = JSON.parse(localStorage.config).service;
      if (service) {
        let ser = service.find(item => item.status === "on");
        if (ser) {
          window.open(ser.url);
        }
      }
    },
    goUserCen(name, num) {
      if (!localStorage.token || !localStorage.userinfo) {
        alert("您还没有登录,请先登录。");
        return false;
      }
      //name的类型有 ：  recharge （充值）  personage （个人资料）
      //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
      this.$store.commit("showPersonal", { bool: true });
      this.$store.commit("showContent", { parent: name });
      this.$store.commit("showNav", { child: num });
    },
    gomessge() {
      if (localStorage.token) {
        this.goUserCen("message", 1);
      } else {
        alert("请先登录");
      }
    },
    kefuFc() {
      let service = JSON.parse(localStorage.config).service;
      if (service) {
        let ser = service.find(item => item.status === "on");
        if (ser) {
          window.open(ser.url);
        }
      }
    }
  },
  mounted() {
    this.addWindow();
  },
  store
};
</script>

<style lang="less" scoped>
.TplFloatSet {
  position: absolute;
  cursor: pointer;
  z-index: 1000;
  top: 200px;
  right: 10px;
  width: 127px;

  a {
    width: 100%;
    position: absolute;
    left: 0;
  }

  .wechat {
    height: 30px;
    top: 120px;
  }

  .zhifubao {
    height: 30px;
    top: 155px;
  }

  .qq {
    height: 30px;
    top: 195px;
  }

  .jgj {
    bottom: 77px;
    height: 31px;
  }

  .dzp {
    bottom: 41px;
    height: 31px;
  }

  .close {
    width: 75%;
    height: 30px;
    bottom: 2px;
    left: 17px;
  }

  .kefu {
    bottom: 95px;
    height: 33px;
  }

  .tousu {
    bottom: 58px;
    height: 30px;
  }
}

.TplFloatSet0 {
  left: 18px;

  .sign-in {
    height: 42px;
    top: 75px;
  }
}
</style>
