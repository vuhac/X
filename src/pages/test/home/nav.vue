<template>

  <div class="top_nav">
    <div class="nav-content">
      <div class="logo fl">
        <a href="javascript:void(0)" @click="goHome"><img src="/static/klk/img/logo.png"></a>
      </div>

      <ul class="nav-bar fl">
        <li class="tpT" style="width: 60px">
          <a href="javascript:void(0)" @click="goHome">
            <i class="bg-home" style="left: 32px;"></i>
          </a>
        </li>
        <li class="tpT" v-for="(item,i) in classifyList" :key="i" :class="{isColor:item.hotShow ==true}">
          <img src="/static/klk/img/thirdparty/hot.gif" class="x-dh-i" alt="" v-if="item.hotShow">
          <span class="x-dh-t " @click="goLink(item)">{{item.name}}</span>
          <span class="x-dh-b" @click="goLink(item)">{{item.text}}</span>

          <div class="girl dropdown">
            <ol>
              <li v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">
                <a href="javascript:void(0)">
                  <img :src="v.img" width="37" height="21" alt="" v-if="v.img">
                  <span>{{v.name}}</span>
                </a>
              </li>

            </ol>
          </div>

        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  import data from '../../public/games/public.js'

  export default {
    mixins: [data],
    data () {
      return {
        classifyList: [
          {
            name: '体育赛事',
            text: 'SPORTS',
            platform: 'sport',
            list: [
              {
                name: '皇冠体育',
                img: '/static/klk/img/thirdparty/hg.png',
                id: '21'
              },
              {
                name: '沙巴体育',
                img: '/static/klk/img/thirdparty/saba.png',
                id: '20'
              },
              {
                name: 'BBIN体育',
                img: '/static/klk/img/thirdparty/bb.png',
                id: '41'
              },
              {
                name: 'AG体育',
                img: '/static/klk/img/thirdparty/agty.png',
                id: '22'
              }
            ]
          },
          {
            name: '真人娱乐',
            text: 'LIVE CASINO',
            link: '/home/live',
            platform: 'live_casino',
            hotShow: true,
            list: [
              {
                name: 'AG视讯',
                img: '/static/klk/img/thirdparty/agty.png',
                id: '14'
              },
              {
                name: 'BBIN视讯',
                img: '/static/klk/img/thirdparty/bb.png',
                id: '15'
              },
              {
                name: 'BG视讯',
                img: '/static/klk/img/thirdparty/bg.png',
                id: '44'
              },
              {
                name: 'DG视讯',
                img: '/static/klk/img/thirdparty/gpi.png',
                id: '33'
              },
              {
                name: 'DS视讯',
                img: '/static/klk/img/thirdparty/DS.png',
                id: '16'
              },
              {
                name: 'LEBO视讯',
                img: '/static/klk/img/thirdparty/lebo.png',
                id: '35'
              },
              {
                name: 'OG视讯',
                img: '/static/klk/img/thirdparty/evo.png',
                id: '39'
              },
              {
                name: 'eBET视讯',
                img: '/static/klk/img/thirdparty/ebet.png',
                id: '34'
              },
              {
                name: 'LMG视讯',
                img: '/static/klk/img/thirdparty/LMG.png',
                id: '36'
              },
              {
                name: '欧博视讯',
                img: '/static/klk/img/thirdparty/ab.png',
                id: '37'
              },
              {
                name: 'SA视讯',
                img: '/static/klk/img/thirdparty/sa.png',
                id: '40'
              }
            ]
          },
          {
            name: '棋牌游戏',
            text: 'CHESS',
            platform: 'KY_CHESS',
            hotShow: true,
            gameName: '0',
            list: [
              {
                name: '斗地主',
                gameName: '610',
                platform: 'KY_CHESS'
              },
              {
                name: '抢庄牛牛',
                gameName: '830',
                platform: 'KY_CHESS'
              },
              {
                name: '炸金花',
                gameName: '220',
                platform: 'KY_CHESS'
                // img: require("/static/klk/img/thirdparty/bb.png"),
                // id: "41"
              },
              {
                name: '德州扑克',
                platform: 'KY_CHESS',
                // img: require("/static/klk/img/thirdparty/agty.png"),
                gameName: '620'
              },
              {
                name: '21点',
                platform: 'KY_CHESS',
                gameName: '600'
              }
            ]
          },
          {
            name: 'MG老虎机',
            text: 'MG CASINO',
            platform: 'MG_GAME',
            link: '/home/games?id=10022&name=MG老虎机',
            hotShow: true,
            list: [
              {
                name: '冰上曲棍球',
                platform: 'MG_GAME',
                gameName: 'breakaway'
              },
              {
                name: '不朽的浪漫',
                platform: 'MG_GAME',
                gameName: 'ImmortalRomance'
              },
              {
                name: '银行抢匪2',
                platform: 'MG_GAME',
                gameName: 'BreakDaBank'
                // img: require("/static/klk/img/thirdparty/bb.png"),
                // id: "41"
              },
              {
                name: '淑女派对',
                platform: 'MG_GAME',
                // img: require("/static/klk/img/thirdparty/agty.png"),
                gameName: 'LadiesNite'
              },
              {
                name: '宝石之轮',
                platform: 'MG_GAME',
                gameName: 'ReelGems'
              }
            ]
          },
          {
            name: '老虎机大厅',
            text: 'ELECT RONIC',
            platform: 'MG_GAME',
            hotShow: true,
            link: '/home/games?id=10022&name=MG老虎机',
            list: [
              {
                name: 'PT老虎机',
                img: '/static/klk/img/thirdparty/pt.png',
                num: '10024'
              },
              {
                name: 'AG老虎机',
                img: '/static/klk/img/thirdparty/agty.png',
                num: '10015'
              },
              {
                name: 'CQ9电子',
                img: '/static/klk/img/thirdparty/CQ9.png',
                num: '10018'
                // img: require("/static/klk/img/thirdparty/bb.png"),
                // id: "41"
              },
              {
                name: 'MG老虎机',
                // img: require("/static/klk/img/thirdparty/agty.png"),
                img: '/static/klk/img/thirdparty/mg.png',
                num: '10022'
              },
              {
                name: 'FG老虎机',
                img: '/static/klk/img/thirdparty/fg.png',
                num: '31'
              }
            ]
          },
          {
            name: '彩票游戏',
            text: 'LOTTERY',
            platform: 'vr_lottery',
            link: '/plays/hall',
            // list: [
            //   {
            //     name: "传统彩票",
            //     link: "/plays/hall"
            //   },
            //   {
            //     name: "VR彩票",
            //     id: "13",
            //     platform: "vr_lottery",
            //   }
            // ]
          },
          {
            name: '捕鱼达人',
            text: 'FISH',
            link: '/home/buyu'
          },
          {
            name: '优惠活动',
            text: 'PROMOTION',
            link: '/home/youhui'
          },
          {
            name: '在线客服',
            text: 'SERVICE',
            link: 'service'
          }
        ]
      }
    },
    methods: {
      goHome () {
        this.$router.push('/home')
      },
      goLink (item) {
        if (item.link) {
          if (item.link == 'service') {
            window.open(
              'https://gzzaxc219.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=938240&configID=41445&jid=1936571624&s=1'
            )
          }else {
            this.$router.push(item.link)
  
          }
        } else if (item.gameName) {
          this.trustLogin(item)
        }
       
      },
      thirdParty (item, platform) {
        if (item.link == '/plays/hall') {
          window.open('#/plays/hall')
          return false
        }

        if (item.id) {
          this.getItemId(item)
        } else if (item.gameName) {
          this.trustLogin(item)
        } else if (item.num) {
          this.$router.push('/home/games?id=' + item.num)
        } else {
          this.$router.push(item.link)
        }
      }
    },
    mounted () {
      // setInterval(() => {
      //   $('.isColor:odd .x-dh-t').css('color', 'rgb(0,255,0)')
      //   $('.isColor:odd .x-dh-b').css('color', 'rgb(0,255,0)')

      //   $('.isColor:even .x-dh-t').css('color', 'rgb(255,0,0)')
      //   $('.isColor:even .x-dh-b').css('color', 'rgb(255,0,0)')
      // }, 150)
      // setInterval(() => {
      //   $('.isColor:odd .x-dh-t').css('color', 'rgb(255,0,0)')
      //   $('.isColor:odd .x-dh-b').css('color', 'rgb(255,0,0)')

      //   $('.isColor:even .x-dh-t').css('color', 'rgb(135,8,156)')
      //   $('.isColor:even .x-dh-b').css('color', 'rgb(135,8,156)')
      // }, 300)
      var ele1 = document.getElementsByClassName('isColor')[0]
      var ele2 = document.getElementsByClassName('isColor')[1]
      var ele3 = document.getElementsByClassName('isColor')[2]
      var ele4 = document.getElementsByClassName('isColor')[3]
      //第一个和第三个的文字
      var ele1Conent1 = ele1.getElementsByClassName('x-dh-t')[0]
      var ele1Conent11 = ele1.getElementsByClassName('x-dh-b')[0]
      var ele1Conent3 = ele3.getElementsByClassName('x-dh-t')[0]
      var ele1Conent33 = ele3.getElementsByClassName('x-dh-b')[0]

      // 第二个和第四个的文字
      var ele1Conent2 = ele2.getElementsByClassName('x-dh-t')[0]
      var ele1Conent22 = ele2.getElementsByClassName('x-dh-b')[0]
      var ele1Conent4 = ele4.getElementsByClassName('x-dh-t')[0]
      var ele1Conent44 = ele4.getElementsByClassName('x-dh-b')[0]


      setInterval(()=>{
        ele1Conent1.style.color = 'rgb(0,255,0)'
        ele1Conent11.style.color= 'rgb(0,255,0)'
        ele1Conent3.style.color = 'rgb(0,255,0)'
        ele1Conent33.style.color= 'rgb(0,255,0)'

        ele1Conent2.style.color = 'rgb(255,0,0)'
        ele1Conent22.style.color= 'rgb(255,0,0)'
        ele1Conent4.style.color = 'rgb(255,0,0)'
        ele1Conent44.style.color= 'rgb(255,0,0)'
        
      },150)

      setInterval(() => {

        ele1Conent1.style.color = 'rgb(255,0,0)'
        ele1Conent11.style.color= 'rgb(255,0,0)'
        ele1Conent3.style.color = 'rgb(255,0,0)'
        ele1Conent33.style.color= 'rgb(255,0,0)'

        ele1Conent2.style.color = 'rgb(135,8,156)'
        ele1Conent22.style.color= 'rgb(135,8,156)'
        ele1Conent4.style.color = 'rgb(135,8,156)'
        ele1Conent44.style.color= 'rgb(135,8,156)'
      }, 300);


    },
    //  watch:{
    //   $route(nVal,oVal){
    //     console.log("0000000000000000000")
    //     this.$parent.getPopout1();
    //     // this.getPopout1();
    //     console.log(nVal);
    //     // 关于我们缓存问题
    //     // this.articleRoute();
    //   },
    // },
  }
</script>

<style lang="less">
  .top_nav {
    height: 90px;

    .nav-content {
      width: 1200px;
      height: 90px;
      margin: 0 auto;

      .logo {
        width: 221px;
        padding-top: 19px;
      }

      .nav-bar {
        height: 90px;

        li {
          height: 90px;
          float: left;
          margin: 0 10px;
          position: relative;
          font-size: 12px;
          color: #000;
          line-height: 90px;
          cursor: pointer;
          text-align: center;

          &.tpT {
            padding-top: 35px;
            line-height: 20px;

            &:nth-child(2) {
              padding-left: 20px;
            }

            &:nth-child(1) {
              padding-top: 18px;
            }
          }

          a {
            width: 100%;
            height: 100%;
            display: inline-block;

            .bg-home {
              width: 25px;
              height: 23px;
              display: block;
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              background: url("/static/public/image/userImg/header_nav_sprites.png") -10px -10px;
            }

            .bg-home:hover {
              background: url("/static/public/image/userImg/header_nav_sprites.png") -55px -10px;
            }
          }

          .x-dh-i {
            position: absolute;
            top: 12px;
            right: 0px;
          }

          .x-dh-t {
            // position: absolute;
            // top: -5px;
            // left: 18px;
            // line-height: 30px;
            display: block;
            font-size: 14px;
          }

          .x-dh-b {
            // position: absolute;
            // line-height: 30px;
            font-size: 14px;
            white-space: nowrap;
            // top: 14px;
            // left: -2px;
            // width: 100%;
          }

          .dropdown {
            left: -20px;
            display: none;
            position: absolute;
            top: 90px;
            z-index: 999;
            background: rgba(0, 0, 0, 0.8);
            line-height: normal;
            color: #fff;
            font-size: 13px;
            border: 2px solid rgb(180, 140, 104);

            li {
              line-height: 40px;
              color: #fff;
              width: 120px;
              height: 40px;
              border-bottom: 1px dashed #ccc;
              margin: 0;

              a {
                width: 100%;
                height: 100%;
                display: inline-block;
                text-align: center;

                color: #fff;

                img {
                  border: 0;
                  vertical-align: middle;
                }
              }
            }

            li:hover {
              background: rgb(180, 140, 104);
            }
          }
        }

        li:hover {
          .x-dh-t {
            color: #ff5555;
          }

          .x-dh-b {
            color: #ff5555;
          }

          .dropdown {
            display: block;
          }
        }
      }
    }
  }
</style>
