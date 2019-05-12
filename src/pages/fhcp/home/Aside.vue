<template>
  <div>
    <div v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1">
      <div class="jgj" @click="openJgj"></div>
      <div class="zhuanpan" @click="openZhuanpan"></div>
      <div class="close" @click="s1 = false"></div>
    </div>
    <div v-show="s2" class="TplFloatSet TplFloatPic_1">
      <div class="kefu" @click="openKefu"></div>
      <a href="javascript:;" class="idea" @click="gomessge"></a>
      <div class="close" @click="s2 = false"></div>
    </div>
    <div class="tip" v-show="s3">
      <img src="/static/fhcp/img/redb.gif"  onclick='window.open("/static/fhcp/html/active/czjhb/index.html")'/>
      <span class="fa fa-fw fa-close" @click="s3 = false"></span>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data () {
      return {
        s1: true,
        s2: true,
        s3: true
      }
    },
    methods: {
      addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc () {
        $('.TplFloatPic_1').stop().animate({top: window.pageYOffset + 210}, 1000)
      },
      openKefu () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      openZhuanpan () {
        window.open('/static/fhcp/html/active/opportunity/')
      },
      openJgj () {
        window.open('/static/fhcp/html/active/jgj/')
      },
      goUserCen (name, num) {
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      },
      gomessge(){
        if(localStorage.token){
          this.goUserCen('message',1)
        }else{
          alert("请先登录")
        }
      }
    },
    mounted () {
      this.addWindow()
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .tip {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 230px;
    height: 230px;
    z-index: 1000;

    img {
      width: 100%;
      height: 100%;
    }

    .fa {
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

  .TplFloatSet {
    position: absolute;
    z-index: 1000;
    top: 210px;
    right: 18px;
    width: 126px;
    height: 285px;
    background: url("/static/fhcp/img/online-right.png") no-repeat;

    .zhuanpan {
      position: absolute;
      height: 28px;
      width: 100%;
      bottom: 32px;
      left: 0;
    }
    .jgj {
      position: absolute;
      height: 27px;
      width: 100%;
      bottom: 67px;
      left: 0;
    }
    .close {
      position: absolute;
      height: 25px;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    .kefu {
      position: absolute;
      height: 25px;
      width: 100%;
      bottom: 86px;
      left: 0;
    }
    .idea {
      position: absolute;
      height: 25px;
      width: 100%;
      bottom: 40px;
      left: 0;
    }
  }

  .TplFloatSet0 {
    left: 18px;
    background: url("/static/fhcp/img/online-left.png") no-repeat;
  }
</style>
