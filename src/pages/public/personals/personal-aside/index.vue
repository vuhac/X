<template>
  <div class="peronsal-aside">
    <div class="aside-nav">
      <ul>
        <li
          v-for="(item,i) in navData"
          :key="i"
          :class="{liActive:item.type ==$store.state.personal.contentView}"
          @click="toggle(item)"
        >
          <img
            :src="item.img"
            alt=""
          >
          <span>{{item.text}}</span>
        </li>
        <li @click="goService">
          <img
            src="/static/public/image/userImg/kefu@3x.png"
            alt=""
          >
          <span>客服</span>
        </li>

      </ul>
    </div>

    <div class="aside-content">
      <div class="header">
        <p>{{name}}</p>
        <!--  -->
        <p>余额:{{userinfo.balance}}
          <i
            :class="['ivu-icon' ,'ivu-icon-refresh',{active:refesh}]"
            @click="getBalance"
          ></i>
        </p>
        <p v-if="ifbalance">代理收入:{{userinfo.agent}}
          <img
            src="/static/public/image/userImg/agent1.png"
            style="width:16px;height:12px;cursor:pointer;"
            alt=""
            @click="getagent"
          >
          <!-- <img src="require('/static/public/image/userImg/agent1.png')" width="50" height="50" alt="">  -->
        </p>

      </div>
      <component :is="'navAll'"></component>
    </div>

    <Modal
      v-model="ifagent"
      class-name="agent-transfer"
      width="465"
      :mask-closable="false"
    >
      <div
        class="vp-admin-wrap-close"
        slot="close"
        @click="closeagent"
      >
        <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div>
      </div>
      <div slot="header">
        <div class="agent-header">代理转帐</div>
        <div class="agent-liner"></div>
      </div>
      <div class="agent-con">
        <div class="agent-p">
          <span>可用代理收入:</span>
          <span>{{userinfo_agent}}</span>
          <span>元</span>
        </div>
        <div class="account">
          <input
            type="text"
            placeholder="转帐金额必须为整数"
            v-model="amount"
            onkeyup="value=value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')"
            @blur="hanlderAmount"
            v-on:keyup.enter="getMoneySubmit"
          >
          <label @click="amount=userinfo_agent">全部</label>
          <div class="inco">￥</div>
        </div>
        <div
          class="agent-submit"
          @click="getMoneySubmit"
        >确认提交</div>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import store from "@/vuex/store";
import navAll from "../navmenu/nav";
import UserService from "@/service/public/UserService.js";

export default {
  data() {
    return {
      navData: [
        {
          text: "充值",
          type: "recharge",
          img: "/static/public/image/userImg/chongzhi@3x.png"
        },
        {
          text: "提款",
          type: "withdraw",
          img: "/static/public/image/userImg/tikuan@3x.png"
        },
        {
          text: "个人",
          type: "personage",
          img: "/static/public/image/userImg/geren@3x.png"
        },
        {
          text: "优惠",
          type: "discounts",
          img: "/static/public/image/userImg/youhui@3x.png"
        },
        {
          text: "代理",
          type: "agency",
          img: "/static/public/image/userImg/daili@3x.png"
        },
        {
          text: "信息",
          type: "message",
          img: "/static/public/image/userImg/gonggao@3x.png"
        }
      ],
      navData2: [
        {
          text: "充值",
          type: "recharge",
          img: "/static/public/image/userImg/chongzhi@3x.png"
        },
        {
          text: "提款",
          type: "withdraw",
          img: "/static/public/image/userImg/tikuan@3x.png"
        },
        {
          text: "个人",
          type: "personage",
          img: "/static/public/image/userImg/geren@3x.png"
        },
        {
          text: "优惠",
          type: "discounts",
          img: "/static/public/image/userImg/youhui@3x.png"
        },
        // {
        //   text: '代理',
        //   type: 'agency',
        //   img: '/static/public/image/userImg/daili@3x.png'
        // },
        {
          text: "信息",
          type: "message",
          img: "/static/public/image/userImg/gonggao@3x.png"
        }
      ],
      amount: "",
      name: "",
      refesh: false,
      canClick: false,
      ifbalance: false,
      ifagent: false,
    };
  },
  methods: {
    toggle(item) {
      this.$store.commit("showContent", {
        parent: item.type
      });
      this.$store.commit("showNav", {
        child: 0
      });
      this.name = item.text;
      if (item.type == "agency") {
        this.ifbalance = true;
      } else {
        this.ifbalance = false;
      }
    },
    getBalance() {
      setTimeout(() => {
        this.refesh = true;
        this.$getS(`/member/balance`).then(res => {
          if (res.code == 200) {
            let userinfo = JSON.parse(localStorage.userinfo);
              userinfo.balance = res.data.member
              userinfo.agent=res.data.agency
            this.$store.commit("mainState/reloadUserinfo", userinfo);
            this.refesh = false;
          }
        });
      }, 500);
    },
    getMoneySubmit() {
      if (this.canClick) {
        return false;
      }
      if (!this.amount) {
        this.$error("请输入提款金额");
        return false;
      }
      if (this.amount < 1) {
        this.$error("转帐金额不能小于1元");
        return false;
      }
      // console.log(this.amount);
      // console.log(this.userinfo_agent);

      if (this.amount>this.userinfo_agent) {
           this.$error("转帐金额输入错误");
           return false;
      }
      // if(this.amount.indexOf(".") != -1){
      //   this.$error('转帐金额必须为整数')
      // }
      this.canClick = true;
      setTimeout(() => {
        this.canClick = false;
      }, 5 * 1000);

      this.$postS("agency/agencyToMember", { money: this.amount }).then(res => {
        if (res && res.code == 200) {
          //UserService.vpLogout.call(this);
          this.amount = "";
          //   this.$store.commit('showagent', {
          //   bool2: false
          //  })
          this.ifagent = false;
          this.$success(res.data);
        }
      });
    },
    hanlderAmount() {
      // this.amount = amount.substring(amount.indexOf('.'),amount.indexOf('.') + 3)
      if (this.amount.indexOf(".") != -1) {
        this.amount = this.amount.substring(0, this.amount.indexOf(".") + 3);
      }
    },
    goService() {
      let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
    },
    closeagent() {
      // this.$store.commit('showagent', {
      //   bool2:false
      // })
      this.ifagent = false;
      this.amount = "";
    },
    getagent() {
      // this.$store.commit('showagent',{
      //   bool2:true
      // })
      this.ifagent = true;
    }
  },
  created() {
    if(this.$store.state.personal.contentView=='agency'){
        this.ifbalance = true;
    }
    let isnav = JSON.parse(localStorage.userinfo).is_agency;
    if (isnav) {
      this.navData = this.navData;
    } else {
      this.navData = this.navData2;
    }
    if (!this.name) {
      this.navData.forEach(item => {
        if (item.type == this.$store.state.personal.contentView) {
          this.name = item.text;
        }
      });
    }

    // this.getBalance();
  },
  computed: {
    liActive() {
      return this.$store.state.personal.liActive;
    },
    navView() {
      return this.$store.state.personal.navView;
    },
    text() {
      return this.$store.state.personal.navText;
    },
    userinfo_agent() {
      return this.$store.state.mainState.userinfo.agent;
    },
    // ifagent(){
    //   return this.$store.state.personal.isagent
    // },
    userinfo() {
      return this.$store.state.mainState.userinfo;
    }
  },
  components: {
    navAll
  },
  store
};
</script>

<style lang="less" scoped>
@-webkit-keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-moz-keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-o-keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-ms-keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.peronsal-aside {
  padding-left: 72px;
  position: relative;
  .aside-nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 72px;
    background: url("/static/public/image/userImg/mockup_bg.png") left bottom
        no-repeat,
      url("/static/public/image/userImg/mockup_bg_left.png");
    padding-top: 1.4em;
    border-radius: 15px 0 0 15px;
    ul {
      li {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        img {
          width: 42px;
          height: 42px;
          display: inline-block;
          // background: #fff;
          // border-radius: 50%;
        }
        span {
          font-size: 14px;
          color: #fff;
          margin-top: 7px;
          font-weight: 200;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
      }
      .liActive {
        background: #fe6565;
      }
    }
  }
  .aside-content {
    color: #fff;
    font-weight: 200;
    .header {
      // height: 10em;
      text-align: center;
      margin-bottom: 18.4px;
      p:nth-child(1) {
        font-size: 2.4em;
        padding-top: 30px;
      }
      p:nth-child(2) {
        font-size: 16px;
        padding-top: 10px;
        i {
          cursor: pointer;
        }
        .active {
          -webkit-animation: animate 1s infinite linear;
          animation: animate 1s infinite linear;
          -moz-animation: animate 1s infinite linear;
          -o-animation: animate 1s infinite linear;
          -ms-animation: animate 1s infinite linear;
          // transform-origin: 40% 40%;
          // -webkit-transform-origin: 40% 40%;
          // -moz-transform-origin: 40% 40%;
          // -o-transform-origin: 40% 40%;
          // -ms-transform-origin: 40% 40%;
        }
      }
      p:nth-child(3) {
        font-size: 16px;
        padding-top: 10px;
        // img{
        //   width: 16px;
        //   height: 12px;
        //   cursor: pointer;
        // }
        i {
          cursor: pointer;
        }
        // .active {
        //   -webkit-animation: animate 1s infinite linear;
        //   animation: animate 1s infinite linear;
        //   -moz-animation: animate 1s infinite linear;
        //   -o-animation: animate 1s infinite linear;
        //   -ms-animation: animate 1s infinite linear;
        //   // transform-origin: 40% 40%;
        //   // -webkit-transform-origin: 40% 40%;
        //   // -moz-transform-origin: 40% 40%;
        //   // -o-transform-origin: 40% 40%;
        //   // -ms-transform-origin: 40% 40%;
        // }
      }
    }
  }
}

/deep/.ivu-modal-mask {
  z-index: 2000;
}
/deep/.ivu-modal-wrap {
  z-index: 2000;
}
/deep/.ivu-modal-close {
  right: 0;
}
/deep/.ivu-modal-footer {
  border-top: none;
}
/deep/.ivu-modal {
  top: 50%;
  margin-top: -159px;
  height: 318px;
}
/deep/.ivu-modal-header {
  border-bottom: none;
  padding: 0;
}

.agent-transfer {
  .vp-admin-wrap-close {
    width: 60px;
    height: 40px;
    background: #f2f2f2;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;
    &:hover {
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
    }
    .vp-admin-wrap-close-empty {
      position: relative;
      background: #fff;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 56px;
      left: 2px;
      top: 2px;
      -moz-transition: all 0.5s ease-in;
      -webkit-transition: all 0.5s ease-in;
      -o-transition: all 0.5s ease-in;
      transition: all 0.5s ease-in;
      a {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url("/static/public/image/common/vp-common-close.png") #fff;
        background-size: 98% 98%;
        // transform: rotate(0deg);
      }
      &:hover {
        transform: translateX(40%);
        // &::before{
        //   color: #fff;
        // }
      }
    }
  }
  .agent-header {
    font-size: 18px;
    color: #000;
    padding: 24px 0 24px 24px;
  }
  .agent-liner {
    width: 416px;
    height: 1px;
    background: rgba(219, 219, 219, 0.8);
    margin-left: 25px;
  }
  .agent-con {
    .agent-p {
      margin-left: 90px;
      margin-top: 44px;
      font-size: 16px;
      color: #333;
    }
    .account {
      display: inline-block;
      margin-left: 91px;
      margin-top: 26px;
      position: relative;
      label {
        width: 33px;
        display: inline-block;
        margin-left: 10px;
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: #ff9146;
      }
      input {
        width: 218px;
        height: 36px;
        font-size: 14px;
        background: #f5f5f5;
        border: 0 solid #f5f5f5;
        border-radius: 5px;
        // padding: 0 16px;
        text-align: left;
        padding-left: 22px;
        text-indent: 6px;
        -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
        -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
        box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
        color: #666;
        border-color: none;
      }
      input:focus {
        outline: none !important;
        border: 1px solid rgba(254, 134, 93, 0.6);
        box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
          0 1px 10px 5px rgba(254, 134, 93, 0.14);
      }
      .inco {
        width: 8px;
        height: 11px;
        position: absolute;
        font-size: 14px;
        color: #555;
        left: 10px;
        top: 8px;
      }
    }
    .agent-submit {
      width: 140px;
      height: 42px;
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
      line-height: 42px;
      color: #fff;
      cursor: pointer;
      text-align: center;
      margin-top: 39px;
      border-radius: 8px;
      font-size: 16px;
      margin-left: 163px;
      display: inline-block;
    }
  }
  // }
}
</style>
