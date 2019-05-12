<template>
  <div class="fishing_main">
    <div class="bubbles">
      <div class="bubble-container" style="left: 5%; animation-duration: 7.40522s; animation-delay: 12s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 53px; height: 53px;">
      </div>
      <div class="bubble-container" style="left: 82%; animation-duration: 5.72428s; animation-delay: 12s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 65px; height: 65px;">
      </div>
      <div class="bubble-container" style="left: 12%; animation-duration: 7.69418s; animation-delay: 4s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 55px; height: 55px;">
      </div>
      <div class="bubble-container" style="left: 34%; animation-duration: 7.64176s; animation-delay: 15s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 81px; height: 81px;">
      </div>
      <div class="bubble-container" style="left: 31%; animation-duration: 7.77096s; animation-delay: 2s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 78px; height: 78px;">
      </div>
      <div class="bubble-container" style="left: 44%; animation-duration: 4.40266s; animation-delay: 11s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 75px; height: 75px;">
      </div>
      <div class="bubble-container" style="left: 31%; animation-duration: 5.51244s; animation-delay: 4s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 62px; height: 62px;">
      </div>
      <div class="bubble-container" style="left: 80%; animation-duration: 6.87211s; animation-delay: 5s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 60px; height: 60px;">
      </div>
      <div class="bubble-container" style="left: 99%; animation-duration: 4.70821s; animation-delay: 11s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 45px; height: 45px;">
      </div>
      <div class="bubble-container" style="left: 66%; animation-duration: 7.1013s; animation-delay: 7s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 33px; height: 33px;">
      </div>
      <div class="bubble-container" style="left: 74%; animation-duration: 4.05901s; animation-delay: 6s;">
        <img class="bubble" src="/static/hsyl/img/bubble.png" style="width: 52px; height: 52px;">
      </div>
    </div>

    <div class="wrapper" :class="clientwidth>=2100 ? 'wraap2' : 'wraap1'">

      <ul>
        <li v-for="(item,i) in buyuData" :key="i">
          <!-- <div class="cover_hover"></div> -->
          <!-- <div class="cover" :style="{backgroundImage: 'url(' + item.img + ')'}"></div> -->
          <img :src="item.img" alt="">
          <!-- <div class="title">
             <h2>{{item.name}}</h2>
             <h3>{{item.content}}</h3>
                  </div> -->
          <p class="btn"><a @click="trustLogin({name:item.name,platform:item.platform,gameName:item.gameName,id:item.id})">开始游戏</a>
          </p>
          <p class="btn_ag"><a @click="trustLogin({name:item.name,platform:item.platform,gameName:item.gameName,id:item.id})"
                               href="javascript:void(0)">游戏说明</a></p>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  import mixin from '../../../public/games/public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        buyuData: [
          {
            name: 'AG捕鱼',
            img: '/static/hsyl/img/ag-puyuwang.png',
            content: '花式捕鱼 爽快捞金',
            platform: 'AG_GAME',
            gameName: '548',
            id:265
          },
          {
            name: 'FG捕鱼',
            img: '/static/hsyl/img/bg-puyudashi.png',
            content: '经典玩法 玩法丰富',
            platform: 'FG_GAME',
            gameName: 'fish_mm',
            id:2576
          },
          {
            name: '欢乐捕鱼',
            img: '/static/hsyl/img/huanlepuyu.png',
            content: '经典玩法 玩法丰富',
            platform: 'FG_GAME',
            gameName: 'fish_hl',
            id:2626
          },
          {
            name: '龙王捕鱼2',
            img: '/static/hsyl/img/longwangpuyu.png',
            content: '经典玩法 玩法丰富',
            platform: 'JDB_GAME',
            gameName: '7#7002',
            id:175
          },
          {
            name: '千炮捕鱼',
            img: '/static/hsyl/img/qianpaobuyu.png',
            content: '经典玩法 玩法丰富',
            platform: 'MW_GAME',
            gameName: '1051',
            id:151
          },
          {
            name: '皇金渔场',
            img: '/static/hsyl/img/huangjiayuchang.png',
            content: '经典玩法 玩法丰富',
            platform: 'CQ9_GAME',
            gameName: 'AB3',
            id:2639
          },
          {
            name: '深海大赢家',
            img: '/static/hsyl/img/shenhaipuyu.png',
            content: '经典玩法 玩法丰富',
            platform: 'PT_GAME',
            gameName: 'cashfi',
            id:2628
          },
          {
            name: '财神捕鱼',
            img: '/static/hsyl/img/caishenpuyu.png',
            content: '经典玩法 玩法丰富',
            platform: 'JDB_GAME',
            gameName: '7#7003',
             id:173
          }
        ],
        clientwidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    position: relative !important;
    height: 900px;
    background: url("/static/hsyl/img/bg_fishing.jpg") center top;
    // background-size: cover;
    .bubbles {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin: 0 auto;

      .bubble-container {
        position: absolute;
        bottom: 100px;

        animation: bubblerise 4s infinite ease-in;
        opacity: 0;
      }
    }

    .wrapper {
      width: 1400px;
      height: 100%;

      ul {
        li {
          float: right;
          position: relative;
          transition: all 0.3s ease-in;

          .btn {
            position: absolute;
            bottom: 80px;
            left: 37px;

            a {
              background: #ffc500;
              color: #fff;
              width: 200px;
              height: 42px;
              border-radius: 20px;
              display: inline-block;
              text-align: center;
              line-height: 42px;
              font-size: 22px;
            }
          }

          .btn_ag {
            position: absolute;
            bottom: 20px;
            left: 37px;

            a {
              // background: #ffc500;
              color: #ffc500;
              border: 1px solid #ffc500;
              width: 200px;
              height: 42px;
              border-radius: 20px;
              display: inline-block;
              text-align: center;
              line-height: 42px;
              font-size: 22px;
            }

          }

          // .cover_hover:hover + .cover {
          //   transform: rotateY(180deg);

        }

        li:hover {
          animation: titleSlide 0.3s linear;
        }
      }
    }
  }
     .wraap1{
         float: right;
         padding-top: 250px;
         padding-left: 60px;
        
    }
    .wraap2{
         float: right;
         padding-top: 250px;
         padding-left: 60px;
         margin-right: 13%;
    }
      

  @keyframes bubblerise {
    20% {
      top: 70px;
      opacity: 0;
    }
    30% {
      opacity: 0.8;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      bottom: 100%;
      opacity: 0;
    }
  }

  @keyframes titleSlide {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(20px);
      opacity: 0;
    }
    51% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
