<template>
  <div>
    <div class="aside aside-left" v-show="s1">
      <img alt="" src="/static/sjcp/img/aside_left.png">
      <a @click="goUserCen('recharge',1)" class="wechat" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)"  class="zhifubao" href="javascript:;"></a>
      <a class="dial" href="/static/sjcp/html/active/opportunity/index.html" target="blank"></a>
      <a class="dial2" href="/static/sjcp/html/active/jgj/index.html" target="blank"></a>
      <a @click="s1 = false" class="close" href="javascript:void (0);"></a>
    </div>
    <div class="aside aside-right" v-show="s2">
      <img alt="" src="/static/sjcp/img/aside_right.png">
      <a @click="openService" class="service" href="javascript:void (0);"></a>
      <a href="javascript:;" @click="tousu" class="tousu"></a>
      <a @click="s2 = false" class="close" href="javascript:void (0);"></a>
    </div>
    <div class="recommend-bottom" v-show="s3">
      <img alt="" src="/static/sjcp/img/red_packet.gif"  onclick="window.open('/static/sjcp/html/active/czjhb/index.html')" />
      <span @click="s3=false"></span>
      <!--<i class="fa fa-fw fa-close" @click="s3 = false"></i>-->
    </div>
  </div>

</template>

<script>
  import store from '@/vuex/store'
  import $ from 'jquery'

  export default {
    store,
    data() {
      return {
        s1: true,
        s2: true,
        s3: true,
        serviceUrl: null,
      }
    },
    mounted() {
      this.addWindow()
    },
    methods: {
      addWindow() {
        window.addEventListener('scroll', this.scrollFunc)
      
      },
      scrollFunc(e) {
        $('.aside').stop().animate({top: window.pageYOffset + 220}, 1000)
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
      },
      openService() {
        let service = JSON.parse(localStorage.config);
        service = service && service.service;
        if (service) {
          let ser = service.find(item => item.status === 'on');
          ser && window.open(ser.url);
        }
      },
      openSteward() {
        this.$router.push('/static/sjcp/html/active/opportunity/index.html')

      },
      tousu(){
          if(localStorage.token){
            this.goUserCen('message',1)
          }else{
           alert("请先登录")
        }
      },
      openDial() {
        this.$router.push("/active/opportunity/")
      }
    }
  }
</script>

<style lang="less" scoped>
  .aside {
    display: inline-block;
    position: absolute;
    top: 220px;
    right: 10px;
    z-index: 1000;
    width: 120px;

    a{
      position: absolute;
      width: 100%;
      left: 0;
    }

    .close {
      height: 24px;
      bottom: 0;
    }

    img {
      vertical-align: top;
    }
  }

  .aside-left {
    left: 15px;

    .wechat{
      height: 40px;
      top: 213px;
    }

    .zhifubao{
      height: 40px;
      top: 175px;
    }

    .steward {
      bottom: 22px;
      height: 25px;
    }

    .dial {
      bottom: 30px;
      height: 30px;
    }
    .dial2{
      bottom: 60px;
      height: 30px;
    }
  }

  .aside-right {
    right: 15px;

    .service {
      height: 62px;
      bottom: 97px;
    }

    .tousu{
      height: 60px;
      bottom: 32px;
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

      &:hover {
        color: #f13131;
      }
    }
  }
</style>
