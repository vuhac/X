<template>
  <div class="qipai-wrap"  :class="{night:colorbool}">
      <vp-header-pic :headerImg="headerImg"></vp-header-pic>
      <div class="chessGame-content">
            <div class="game-list">
                  <dl class="js-list-items list-item ">
                       <dd v-for="(item,index) in qipaidata" :key="index" @click="changgeme(item,index)" :class="{active:index==gameIndex}">
                          <img :src="item.img">
                          <br>
                           {{item.name}}
                       </dd>
                  </dl>
                  <div class="game-box">
                        <div class="game-content">
                          <ul>
                            <li class="game-item" :key="index" v-for="(item,index) in gameData">
                              <div class="game-pic">
                                <img :src="item.icon" :class="{'default':true,'mg-pic':$route.query.id==='26'}" alt="">
                              </div>
                              <h3>{{item.name}}</h3>
                              <a v-show="Public_User!=='test'" href="javascript:void(0)" class="play" @click="loginGame(item)">进入游戏</a>
                              <a v-show="Public_User==='test'||!Public_User" href="javascript:void(0)" id="try"
                                @click="loginTest(item)">试玩游戏</a>
                            </li>

                          </ul>
                        </div>
                        <!-- <ul class="pagenation" v-show="total>1">
                          <li>
                            <a href="javascript:;" @click="firstpage()">首页</a>
                          </li>
                          <li>
                            <a href="javascript:;" @click="prevpage()">上一页</a>
                          </li>
                          <li>
                            <a href="javascript:;">当前：{{pageDatas.page}}</a>
                          </li>
                          <li>
                            <a href="javascript:;" @click="nextpage()">下一页</a>
                          </li>
                          <li>
                            <a href="javascript:;" @click="lastpage()">尾页</a>
                          </li>
                          <li>
                            <a href="javascript:;">共{{total}}页</a>
                          </li>
                        </ul> -->
                  </div>
            </div>
            
      </div> 
  </div>
</template>
<script>

  import { _SetGet, _SetPost } from '@/service/public/service.js'
  import vpHeaderPic from "../headerPic";
  import data from "../../../public/games/public.js";

  export default {
    mixins: [data],
    data () {
      return {
        headerImg:"/static/qygj/img/carouel/qp.jpg",
        scrollDatas: [],
        jackpotNum1: 41318571943,
        jackpotNum2: 12961370,
        publicUrl: 'http://img.7900005.com/',
        currenttype: '',
        currentline: '',
        gameIndex:0,
        currentTag: '',
        gameData: [],
        offsetHeight: 100,
        total: '',
        iptVal: '',
        pageDatas: {
          page: 1
        },
        Public_User: localStorage.Public_User,
        rollList:[
          {
            id: 10042,
            name: '开元棋牌',
            class: 'ky',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: 10041,
            name: 'VG棋牌',
            class: 'vg',
            type: { list: [] },
            line: { list: [] }
          },
        ],
         nowTypeList: {
          type: { list: [] },
          line: { list: [] },
          thirt: { list: [] }
        },
        setInter: null,
        qipaidata:[
          {
            id: 10042,
            name: '热门游戏',
            class: 'rm',
            path: "/home/qipai?id=10042&name=开元棋牌",
           },
           {
            id: 10042,
            name: '开元棋牌',
            class: 'ky',
            path: "/home/qipai?id=10042&name=开元棋牌",
            img:'/static/public/image/game/ptgame/gameky.png'
           },{
            id: 10041,
            name: 'VG棋牌',
            class: 'vg',
            path: "/home/qipai?id=10041&name=VG棋牌",
            img:'/static/public/image/game/ptgame/VG_CHESS.png'
           }
           ]
      }
     
    },
    methods: {
       async getData(item) {
        this.gameData = [];
        let id=this.$route.query.id
        let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
            device: "pc",
            id
        });
        if (res && res.code === 200) {
          console.log(res.data.data);
          this.gameData = res.data[id];
          this.total = res.data.last_page;
        }
      },
      // loginGame (item) {
      //   if (!localStorage.token || !localStorage.userinfo) {
      //     alert('未登录')
      //     return false
      //   }
      //   let routeData = this.$router.resolve({
      //     path: '/loading',
      //     query: {
      //       name: item.name,
      //       platform: JSON.parse(item.special_setting).platform,
      //       gameName: JSON.parse(item.special_setting).gameName,
      //       login: true,
      //       id:item.id
      //     }
      //   })
      //   window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
      // },
    //   loginGame (item) {
    //   if (!localStorage.token || !localStorage.userinfo) {
    //     alert('未登录')
    //     return false
    //   }
    //   let routeData = this.$router.resolve({
    //     path: '/loading',
    //     query: {
    //       id: item.id,
    //       login: true
    //     }
    //   })
    //   window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
    // },



      changgeme(item,index){
          this.gameIndex = index
          let scrollTop = document.documentElement.scrollTop;
          this.$router.push(item.path)
          window.scrollTo(0, scrollTop)
          this.getData();
      }
    },
    created: function () {
      this.getData()
    },
    mounted () {
       if (localStorage.config) {
        let config = JSON.parse(localStorage.config)
        this.publicUrl = config.statics
      }
    },
    watch: {},
    components: {
      vpHeaderPic
    },
    computed:{
        colorbool(){
        return this.$store.state.mainState.color
      },
    }
  }
</script>

<style lang="less" scoped>
  .qipai-wrap {
    //  padding: 30px 0;
     background:#eaeaea url("/static/public/image/game/ptgame/main-bg.png") top center no-repeat;
     background-size: 100% 100%;
     max-width: 1920px;
     min-width: 1200px;
     margin: 0 auto;
    .chessGame-content{
      padding-top:30px;
        width: 1200px;
        height:1460px;
        margin: 0 auto;
      .game-list{
         .js-list-items{
           padding: 20px 0;
           dd{
            display: inline-block;
            vertical-align: top;
            height: 120px;
            width: 15%;
            margin-left: 15px;
            padding-top: 22px;
            border-radius: 10px;
            background: #fff;
            text-align: center;
            font-size: 16px;
            color: #333;
            cursor: pointer;
            -webkit-transition: all .2s;
            -o-transition: all .2s;
            transition: all .2s;
            img{
              height: 50px;
              margin-bottom:10px; 
            }
            &:hover {
              transform: scale(1.1);
              font-size: 16px;
              background: linear-gradient(rgb(213,92,162),rgb(157,97,221));
              color: #fff;
              div{
                border-bottom: 1px solid #c678d5;
              }
            }
           }
           dd:nth-child(1){
             img{
               display:none;
             }
             line-height: 28px;
             margin-left: 0;
           }
           .hot{
             padding-top: 0;
             line-height: 120px;
             text-align: center;
             font-size: 20px;
             color: #f44336;
           }
           .active{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background: linear-gradient(180deg,#d55ca2,#9d61dd);
         }
         } 
      .game-box {
        margin: 0 auto;
        margin-bottom: 80px;
    .game-content::-webkit-scrollbar {
      display: none;
    }

    .game-content {
      width: 1260px;
      height: 1300px;
      position: relative;
      margin-left: -15px;
      overflow: auto;
      padding-top: 25px;

      ul {
        margin: 0 15px;
      }

      .game-item {
        float: left;
        width: 224px;
        padding-bottom: 10px;
        margin-right: 20px;
        margin-bottom: 20px;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        color: #c1c1c1;
        text-align: left;
        transition: all .3s;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        &:hover {
          transition: all 0.4s;
          transform: translateY(-3px);
        }

        .game-pic {
          position: relative;
          width: 100%;
          height: 224px;
          overflow: hidden;
       
          .default {
            width: 224px;
            height: 224px;
          }

          .mg-pic {
            width: 200%;

            &:hover {
              transform: translateX(-50%);
            }
          }
        }

        h3 {
          color: #333;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 10px 0;
          margin-top: 5px;
        }

        a {
          width: 91px;
          height: 30px;
          display: inline-block;
          line-height: 30px;
          color: #333;
          border-radius: 15px;
          border:0px solid transparent;

          &.play {
            background: linear-gradient(0deg,#e3cb8d,#fde4a1);
          }
          &.play:hover {
            background:#ffe366;
          }
          &#try{
            border: 1px solid #333;
          }
          &#try:hover{
            background: #ffd100;
            border: 0px solid transparent;
          }
        }
      }
      
    }

    .pagenation {
      height: 34.4px;
      text-align: center;
      margin-top: 8px;

      li {
        display: inline;
        border: 1px solid #ddd;
        padding: 6px 12px;
        border-radius: 3px;

        a {
          color: #337ab7;
        }
      }
    }
  }
      }
    }
  }
   .night{
      background: rgba(18,21,66,.8)
  }
</style>
