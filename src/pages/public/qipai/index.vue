<template>
  <div class="fishing_main">
      <div>
          <img class="index-banner-min" src="/static/public/image/qipai/banner-poker.png" alt="">
      </div>
      <div class="sport-container">
          <ul class="w1200 flex">
                  <li v-for="(item, index) in buyuData" :key="index">
                      <img :src="item.img" alt="">
                      <div>
                          <p class="title">{{item.name}}</p>
                          <p>{{item.content}}</p>
                          <a  @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name})">进入游戏</a>
                      </div>
                  </li>
                                                              
                  
            

                  <li>
                      <img src="/static/public/image/qipai/MW-poker.png" alt="">
                      <div>
                          <p class="title">敬请期待</p>
                          <p>更多棋牌正在陆续上线中</p>
                          
                            
                      </div>
                  </li>
            
          </ul>
      </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  import mixin from '../games/public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        buyuData: [
          // {
          //   name: "mw棋牌",
          //   img: require("/static/wycp/img/chess1.png"),
          //   content: "花式捕鱼 爽快捞金",
          //   platform: "MW_GAME",
          //   gameName: "0"
          // },
          {
            name: '开元棋牌',
            img: '/static/public/image/qipai/kaiyuan-poker.png',
            content: '经典玩法，玩法丰富，棋牌游戏，万人在线，火热战局，等您来站！',
            platform: 'KY_CHESS',
            gameName: '0'
          },
          {
            name: 'VG棋牌',
            img: '/static/public/image/qipai/vg-poker.png',
            content: '经典玩法，玩法丰富，棋牌游戏，万人在线，火热战局，等您来站！',
            platform: 'VG_CHESS',
            gameName: '1000'
          }
          // {name:'欢乐捕鱼',img:require('/static/wycp/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'FG_GAME',gameName:'fish_hl'}
          // {name:'龙王捕鱼2',img:require('/static/wycp/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7002'},
          // {name:'千炮捕鱼',img:require('/static/wycp/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'MW_GAME',gameName:'1051'},
          // {name:'皇金渔场',img:require('/static/wycp/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'CQ9_GAME',gameName:'AB3'},
          // {name:'深海大赢家',img:require('/static/wycp/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'PT_GAME',gameName:'cashfi'},
          // {name:'财神捕鱼',img:require('/static/wycp/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7003'}
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .fishing_main {
     background:#000;
     .index-banner-min{
       min-width:1200px;
       width:100%;
     }
    .sport-container {
          margin: 70px 0 0;
    }
    .w1200 {
        width: 1200px;
        margin: 0 auto;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 15px;

        li {
            position: relative;
            width: 561px;
            height: 230px;
            margin-bottom: 40px;
            transition: all .2s linear;
            overflow: hidden;

          
        }
        li:hover {
            box-shadow: 0 0 20px #666666;
            /* transform: scale(1.01); */
        }
        div {
            position: absolute;
            top: 0;
            right: 0;
            width: 239px;
            height: 100%;
            box-sizing: border-box;
            padding: 40px 20px;
            text-align: justify;
            color: #fff;

            .title {
                font-size: 22px;
                font-weight: 600;
                letter-spacing: 2px;
                margin-bottom: 10px;
            }
            .title + p {
                line-height: 22px;
            }
            
        }
        li a{
              color: #000;
              display: inline-block;
              width: 170px;
              height: 50px;
              line-height: 50px;
              border-radius: 50px;
              background: #06CCF9;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              text-align: center;
              font-size: 20px;
              box-shadow: 0 0 10px #000;
              transition: all .2s linear;
              bottom: -50px;
              cursor: pointer;
          }
        li:hover a {
            bottom: 25px!important;
        }
        
      }
  }
</style>
