<template>
  <div class="tiyu_cont">
    <Banner :headerImg="headerImg"></Banner>
    <div class="tiyu">
      <div id="items">
        <div :class="item.bigclass" class="clear" v-for="(item,index) in buyuData" :key="index">
          <img :src="item.img" alt :class="item.divclass"  @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name,id:item.id})">
        </div>
      </div>
    </div>
    <!-- <div class="wrapper">

      <ul>
        <li v-for="(item,i) in buyuData" :key="i">
          <div class="cover_hover"></div>
          <div class="cover" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
         
          <p><a class="btn" @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name})">开始游戏</a>
          </p>
          <p><a class="btn_ag" @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name})" href="javascript:void(0)">游戏说明</a>
          </p>
        </li>


      </ul>
    </div> -->
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  import mixin from '../../../public/games/public.js'
  import Banner from '../banner.vue'

  export default {
    mixins: [mixin],
    data () {
      return {
        headerImg:'/static/szc/img/game/arrow_sprites.png',
        buyuData: [
          // {
          //   name: "mw棋牌",
          //   img: require("/static/hsyl/img/chess1.png"),
          //   content: "花式捕鱼 爽快捞金",
          //   platform: "MW_GAME",
          //   gameName: "0"
          // },
          {
            name: '开元棋牌',
            img: '/static/szc/img/chess2.png',
            content: '经典玩法 玩法丰富',
            platform: 'KY_CHESS',
            gameName: '0',
            id:243
          },
          {
            name: 'VG棋牌',
            img: '/static/szc/img/chess3.png',
            content: '经典玩法 玩法丰富',
            platform: 'VG_CHESS',
            gameName: '1000',
            id:10091
          }
          // {name:'欢乐捕鱼',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'FG_GAME',gameName:'fish_hl'}
          // {name:'龙王捕鱼2',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7002'},
          // {name:'千炮捕鱼',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'MW_GAME',gameName:'1051'},
          // {name:'皇金渔场',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'CQ9_GAME',gameName:'AB3'},
          // {name:'深海大赢家',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'PT_GAME',gameName:'cashfi'},
          // {name:'财神捕鱼',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7003'}
        ]
      }
    },
    components: {
      Banner
    },
    methods: {
       
    }
  }
</script>

<style lang="less" scoped>
  // .fishing_main {
  //   width: 100%;
  //   background-size: 100% 100%;
  //   position: relative;
  //   max-width: 1920px;
  //   min-width: 1360px;
  //   margin: 0 auto;
  //   padding: 0 0 50px 0;

  //   .wrapper {
  //     width: 1200px;
  //     height: 100%;
  //     float: right;
  //     padding-top: 200px;
  //     padding-right: 400px;

  //     ul {
  //       li {
  //         width: 314px;
  //         height: auto;
  //         float: right;
  //         position: relative;
  //         text-align: center;
  //         .cover_hover {
  //           content: "";
  //           position: absolute;
  //           top: 0;
  //           left: 0;
  //           width: 100%;
  //           height: 390px;
  //           z-index: 20;
  //           cursor: pointer;
  //         }
          
        

  //         .cover {
  //           width: 100%;
  //           height: 390px;
  //           background-position: center center;
  //           background-repeat: no-repeat;
  //           transition: all 0.3s ease-in;

  //           z-index: 10;
  //         }

  //         .cover_hover:hover + .cover {
  //           transform: rotateY(180deg);
  //         }

  //         .cover_hover:hover ~ .title {
  //           animation: titleSlide 0.3s linear;
  //         }

  //         .title {
  //           position: absolute;
  //           left: 40px;
  //           top: 30px;
  //           color: #fff;
  //           text-align: left;

  //           h2 {
  //             font-size: 24px;
  //             line-height: 2;
  //           }

  //           h3 {
  //             font-size: 14px;
  //             line-height: 1.5;
  //             font-weight: normal;
  //           }
  //         }

  //         p {
  //           margin-top: 20px;

  //           a {
  //             display: inline-block;
  //             width: 280px;
  //             height: 54px;
  //             line-height: 46px;
  //             text-align: center;
  //             color: #fff;
  //             font-size: 22px;
  //             box-sizing: border-box;
  //             border: 2px solid #fd7328;
  //             background: #fd7328;
  //             border-radius: 6px;
  //           }

  //           .btn_ag {
  //             color: #fd7328;
  //             border-color: #fd7328;
  //             background: transparent;
  //           }

  //           .btn_ag:hover {
  //             color: #fff;
  //             border-color: #fd7328;
  //             background: #fd7328;
  //           }
  //         }
  //       }
  //       li:nth-child(1){
  //         margin-left:20px;
  //       }
  //     }
  //   }
  // }


.tiyu_cont {
  width: 100%;
  background:url('/static/szc/img/home/bg_banner.23dee41.jpg') top center no-repeat;
  background-size: 100% 100%;
  position: relative;
  max-width: 1920px;
  min-width: 1360px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  .tiyu {
    width: 1360px;
    margin: auto;
    #items {
      width: 1362px;
      height: 656px;
      background: rgba(255, 255, 255, 1);
      overflow: hidden;
      position: relative;
      padding:41px 28px 31px 27px;
      .clear {
          width:641px;
          height:100%;
          float:left;
          transition: all .7s!important;
          position:relative;
          &:hover{
            transform: translateY(-10px);
          }
          img{
            cursor:pointer;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
          }
      }
      // .clear:nth-child(odd){
      //     margin-right: 25px;
      // }
      // .clear:nth-child(3){
      //     margin-bottom:27px;
      // }
      // .clear:nth-child(4){
      //     margin-bottom: 27px;
      // }
      .ag-game-item {
        position: relative;
        height: 541px;
        margin-bottom: 10px;
        overflow: hidden;

        .ag-join-game-btn {
          position: absolute;
          bottom: 20px;
          right: 232px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/ag-join-game.png") no-repeat
            center top;
          cursor:-webkit-pointer;
          cursor: pointer;
        }
        .ag-sport {
          transition: all 0.3s;
        }
        &:hover .ag-sport {
          left: 50px;
        }
      }
      .sb-game-item {
        position: relative;
        height: 530px;
        overflow: hidden;

        .sb-join-game-btn {
          position: absolute;
          bottom: 20px;
          left: 288px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/sb-join-game.png") no-repeat
            center top;
          cursor:-webkit-pointer;
          cursor: pointer;
        }
        .sb-sport {
          transition: all 0.3s;
        }
        &:hover .sb-sport {
          right: 50px;
        }
      }

      &.ag-game-item a,
      &.sb-game-item a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .ag-game-item1 {
        position: relative;
        height: 541px;
        margin-bottom: 10px;
        overflow: hidden;

        .ag-join-game-btn {
          position: absolute;
          bottom: 20px;
          right: 232px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/bb-join-game.png") no-repeat
            center top;
          cursor: pointer;
        }
        .ag-sport {
          transition: all 0.3s;
        }
        &:hover .ag-sport {
          left: 50px;
        }
      }
      .sb-game-item1 {
        position: relative;
        height: 530px;
        overflow: hidden;

        .sb-join-game-btn {
          position: absolute;
          bottom: 20px;
          left: 288px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/ag1-join-game.png") no-repeat
            center top;
          cursor:-webkit-pointer;
          cursor: pointer;
        }
        .sb-sport {
          transition: all 0.3s;
        }
        &:hover .sb-sport {
          right: 50px;
        }
      }
      &.ag-game-item1 a,
      &.sb-game-item1 a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.night {
  background: rgba(18, 21, 66, 0.8);
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
