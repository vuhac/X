<template>
  <div>
    <div class="aside aside-left" v-show="s1">
      <img alt="" src="/static/500wcp/img/aside_left.png">
      <a @click="goUserCen('recharge',1)" class="wx" ></a>
      <a @click="goUserCen('recharge',1)" class="zfb" href="javascript:void (0);"></a>
      <a @click="goUserCen('recharge',1)" class="qq" href="javascript:void (0);"></a>
      <a class="steward" href="/static/500wcp/html/active/jgj/index.html" target="_blank"></a>
      <a class="dial" href="/static/500wcp/html/active/opportunity/index.html" target="_blank"></a>
      <a @click="s1 = false" class="close" href="javascript:void (0);"></a>
    </div>
    <div class="aside aside-right" v-show="s2">
      <img alt="" src="/static/500wcp/img/aside_right.png">
      <a @click="openService" class="service" href="javascript:void (0);"></a>
      <a @click="gomessge" class="tousu" ></a>
      <a @click="s2 = false" class="close" href="javascript:void (0);"></a>
    </div>
    <div class="recommend-bottom" v-show="s3">
      <img alt="" src="/static/500wcp/img/red_packet.gif" @click="goto" />
      <!--<span @click="s3=false"></span>-->
      <i @click="s3 = false" class="fa fa-fw fa-close"></i>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        s1: true,
        s2: true,
        s3: true
      }
    },
    mounted() {
      this.addWindow()
    },
    methods: {
      addWindow() {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc() {
        $('.aside').stop().animate({top: window.pageYOffset + 200}, 1000)
      },
      openService() {
        let service = JSON.parse(localStorage.config);
        service = service && service.service;
        if (service) {
          let ser = service.find(item => item.status === 'on');
          ser && window.open(ser.url);
        }
      },
      gomessge(){
        if(localStorage.token){
          this.goUserCen('message',1)
        }else{
          alert("请先登录")
        }
      },
      goto(){
        window.open('/static/500wcp/html/active/czjhb/index.html')
      },
      goUserCen (name, num) {
        if (!localStorage.token || !localStorage.userinfo) {
          alert('您还没有登录,请先登录。')
          return false
        }
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .aside {
    display: inline-block;
    position: absolute;
    top: 200px;
    z-index: 1000;

    a{
      display: inline-block;
      position: absolute;
      width: 100%;
      left: 0;
      height: 30px;
    }

    .close {
      position: absolute;
      height: 24px;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    img {
      vertical-align: top;
    }
  }

  .aside-left {
    left: 15px;
     
    .wx{
      top: 88px;
    }

    .zfb{
      top: 118px;
    }

    .qq{
      top: 148px;
    }
    
    .steward {
      bottom: 24px;
    }

    .dial {
      bottom: 54px;
    }

  }

  .aside-right {
    right: 15px;

    .service {
      bottom: 78px;
    }

    .tousu{
      bottom: 40px;
    }
  }

  .recommend-bottom {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 1000;
    cursor: pointer;

    img {
      vertical-align: top;
    }

    span {
      position: absolute;
      right: 0;
      top: 0;
      width: 36px;
      height: 36px;
      cursor: pointer;
    }

    i {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 20px;
      font-weight: 700;
      z-index: 9999;

      &:hover {
        color: #f13131;
      }
    }
  }
</style>
