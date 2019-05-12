<template>
  <div class="eyc-home-header">
    <div class="w1200">
      <div class="fl left">
        <ul>
          <li class="top-time"><a href="javascript:void(0)">
            <img src="/static/eyc/img/icon/Language.png"></a></li>
          <li id="showtime">当地时间:{{time}}</li>
        </ul>
      </div>
      <div class="fr right">
        <ul>
          <li>
            <a href="javascript:;" class="pzzs" :style="style">
              牌照展示
              <span id="paizhao">
                <img alt="" src="/static/eyc/img/paizhao.png">
              </span>
            </a>
          </li>
          <li>|</li>
          <li><a class="aa" href="/static/eyc/html/download/index.html" target="_target">手机APP下载</a></li>
          <li>|</li>
          <li><a class="yhhd" :style="style" href="#/home/youhui">优惠活动<img class="mg"
                                                                                 src="/static/eyc/img/icon/hot.gif"></a>
          </li>
          <li>|</li>
          <li><a class="aa" @click="openKefu">在线客服</a></li>
          <li>|</li>
          <!-- <li><a class="aa" href="http://eyc9999.com/" target="_blank">导航网址</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        time: this.getTimes(new Date()),
        style: {}
      }
    },
    methods:{
      openKefu () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      }
    },
    created () {
      clearInterval(timer1)
      let timer1 = setInterval(() => {
        let colors = ['#ff00b1', '#efff00', '#02ff39', '#ff00b1', '#efff00', '#02ff39']
        let index = parseInt(Math.random() * 6)
        this.style.color = colors[index]
      }, 10)
      clearInterval(timer2)
      let timer2 = setInterval(() => {
        this.time = this.getTimes(new Date())
      }, 1000)

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState == 'hidden') {
          if (!localStorage.userinfo) {
            clearInterval(timer)
            let timer = setInterval(() => {
              if (localStorage.userinfo) {
                clearInterval(timer)
                window.location.reload()
              }
            }, 1000)
          }
        }
      })
    },
    store
  }
</script>
<style lang="less" scoped>
  .eyc-home-header {
    height: 40px;
    line-height: 40px;
    background: #201c1c;

    .left {
      li {
        float: left;
        margin-right: 10px;
        color: #adacac;

        a {
          color: #2d374b;
        }
      }
    }

    .right {
      li {
        float: left;
        margin-left: 10px;

        .pzzs,
        .yhhd {
          position: relative;
          line-height: 30px;
        }

        .pzzs:hover #paizhao {
          display: block;
        }

        #paizhao {
          position: absolute;
          top: 5px;
          left: 0;
          z-index: 9;
          display: none;
        }

        .aa {
          color: #adacac;
        }
      }
    }
  }
</style>


