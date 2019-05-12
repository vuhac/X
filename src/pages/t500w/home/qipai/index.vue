<template>
  <div class="fishing_main">


    <div class="wrapper">

      <ul>
        <li v-for="(item,i) in buyuData" :key="i">
          <div class="cover_hover"></div>
          <div class="cover" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <!-- <div class="title">
             <h2>{{item.name}}</h2>
             <h3>{{item.content}}</h3>
          </div> -->
          <p><a class="btn" @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name,id:item.id})">开始游戏</a>
          </p>
          <p><a class="btn_ag" @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name,id:item.id})"
                href="javascript:void(0)">游戏说明</a>
          </p>
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
          // {
          //   name: "mw棋牌",
          //   img: require("/static/t500w/img/chess1.png"),
          //   content: "花式捕鱼 爽快捞金",
          //   platform: "MW_GAME",
          //   gameName: "0"
          // },
          {
            name: '开元棋牌',
            img: '/static/t500w/img/chess2.png',
            content: '经典玩法 玩法丰富',
            platform: 'KY_CHESS',
            gameName: '0',
            id:243
          },
          {
            name: 'VG棋牌',
            img: '/static/t500w/img/chess3.png',
            content: '经典玩法 玩法丰富',
            platform: 'VG_CHESS',
            gameName: '1000',
            id:10091
          }
          // {name:'欢乐捕鱼',img:require('/static/t500w/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'FG_GAME',gameName:'fish_hl'}
          // {name:'龙王捕鱼2',img:require('/static/t500w/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7002'},
          // {name:'千炮捕鱼',img:require('/static/t500w/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'MW_GAME',gameName:'1051'},
          // {name:'皇金渔场',img:require('/static/t500w/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'CQ9_GAME',gameName:'AB3'},
          // {name:'深海大赢家',img:require('/static/t500w/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'PT_GAME',gameName:'cashfi'},
          // {name:'财神捕鱼',img:require('/static/t500w/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7003'}
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    position: relative !important;
    height: 900px;
    background: url("/static/t500w/img/chess_bg.jpg") center top;

    .wrapper {
      width: 1200px;
      height: 100%;
      // margin: 0 auto;
      float: right;
      padding-top: 200px;
      padding-right: 400px;

      ul {
        li {
          width: 314px;
          // padding: 10px;
          //margin: 0 220px;
          // background: #000;
          height: auto;
          float: right;
          position: relative;
          text-align: center;

          .cover_hover {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 390px;
            z-index: 20;
            cursor: pointer;
          }

          .cover {
            width: 100%;
            height: 390px;
            // background: url("/static/t500w/img/bg_fish_01.png") center
            //   center no-repeat;
            background-position: center center;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in;

            z-index: 10;
          }

          .cover_hover:hover + .cover {
            transform: rotateY(180deg);
          }

          .cover_hover:hover ~ .title {
            animation: titleSlide 0.3s linear;
          }

          .title {
            position: absolute;
            left: 40px;
            top: 30px;
            color: #fff;
            text-align: left;

            h2 {
              font-size: 24px;
              line-height: 2;
            }

            h3 {
              font-size: 14px;
              line-height: 1.5;
              font-weight: normal;
            }
          }

          p {
            margin-top: 20px;

            a {
              display: inline-block;
              // width: 280px;
              width: 280px;
              height: 54px;
              line-height: 54px;
              text-align: center;
              color: #fff;
              font-size: 22px;
              box-sizing: border-box;
              border: 2px solid #fd7328;
              background: #fd7328;
              border-radius: 6px;
            }

            .btn_ag {
              color: #fd7328;
              border-color: #fd7328;
              background: transparent;
            }

            .btn_ag:hover {
              color: #fff;
              border-color: #fd7328;
              background: #fd7328;
            }
          }
        }
        li:nth-child(1){
           margin-left: 20px;
        }
      }
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
