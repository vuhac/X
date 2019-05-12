<template>
  <div class="nav">
    <ul class="nav-main clear-fix">
      <li v-for="(item,i) in navlist1" :class="{'nav-active': navActive === i}" :key="i">
        <em v-if="item.hot" class="hot"></em>
        <p @click="toggleNav(i,item.link)">{{item.name}}</p>
        <ol class="nav-children clear-fix" v-if="item.sub">
          <li v-for="(child, index) in item.sub" :key="index" @click.stop="goThirdParty(child)">
            <div>
              <img v-if="child.icon" :src="child.icon"/>
            </div>
            <p>{{child.name}}</p>
            <img v-if="child.hot" class="hot" src="/static/fhcp/img/hot.gif">
          </li>
        </ol>
      </li>
    </ul>

    <!-- <ul class="nav-main clear-fix">
      <li v-for="(item,i) in navlist" :class="{'nav-active': navActive === i}" :key="i">
        <em v-if="item.hot" class="hot"></em>
        <p @click="toggleNav(i,item.link)">{{item.name}}</p>
        <ol class="nav-children clear-fix" v-if="item.sub">
          <li v-for="(child, index) in item.sub" :key="index" @click.stop="goThirdParty(child)">
            <div>
              <img v-if="child.icon" :src="child.icon"/>
            </div>
            <p>{{child.name}}</p>
            <img v-if="child.hot" class="hot" src="/static/fhcp/img/hot.gif">
          </li>
        </ol>
      </li>
    </ul> -->
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'

  export default {
    mixins: [data],
    data () {
      return {
        navlist1: [
          {name: '首页', link: '/home', en: 'HOME'},
          {
            name: '购彩大厅', link: '/plays/hall', en: 'LOTTERY', hot: true, sub: [
                  {
                name: '三分快三',
                icon: '/static/public/image/lottery/nico/png/3631.png',
                path: '/plays/tradition/3631',
                 hot: true
              },
              {
                name: '五分快三',
                icon: '/static/public/image/lottery/nico/png/3632.png',
                path: '/plays/tradition/3632',
                 hot: true
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/nico/png/9.png',
                path: '/plays/tradition/9'
              },
              {
                name: '上海快三',
                icon: '/static/public/image/lottery/nico/png/2906.png',
                path: '/plays/tradition/2906',
                 hot: true
              },
              {
                name: '吉林快3',
                icon: '/static/public/image/lottery/nico/png/26.png',
                path: '/plays/tradition/26'
              },
                {
                  name: '北京快3',
                  icon: '/static/public/image/lottery/nico/png/2900.png',
                  path: '/plays/tradition/2900',
                   hot: true
                },
                {
                  name: '甘肃快3',
                  icon: '/static/public/image/lottery/nico/png/2901.png',
                  path: '/plays/tradition/2901',
                   hot: true
                },
                {
                  name: '广西快3',
                  icon: '/static/public/image/lottery/nico/png/2902.png',
                  path: '/plays/tradition/2902'
                },
                {
                  name: '湖北快3',
                  icon: '/static/public/image/lottery/nico/png/2905.png',
                  path: '/plays/tradition/2905'
                },
                {
                  name: '贵州快3',
                  icon: '/static/public/image/lottery/nico/png/2903.png',
                  path: '/plays/tradition/2903',
                   hot: true
                },
                 {
                  name: '快速快3',
                  icon: '/static/public/image/lottery/nico/png/27.png',
                  path: '/plays/tradition/27',
                  hot: true
                },
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/nico/png/12.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '北京赛车',
                icon: '/static/public/image/lottery/nico/png/2.png',
                path: '/plays/tradition/2'
              },
              {
                name: '快速时时彩',
                icon: '/static/public/image/lottery/nico/png/16.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/nico/png/18.png',
                path: '/plays/tradition/18'
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/nico/png/7.png',
                path: '/plays/tradition/7'
              },
            ]
          },
          {name: '棋牌游戏', link: '/home/qipai', hot: true, en: 'CHESS'},
          {
            name: '真人视讯', link: '/home/live', en: 'CASINO', sub: [
              {name: 'AG视讯厅', platform: 'live_casino', id: '31', icon: '/static/fhcp/img/live/icon/AG_LIVE.png'},
              {name: 'BBIN视讯厅', platform: 'live_casino', id: '32', icon: '/static/fhcp/img/live/icon/BBIN_LIVE.png'},
              {name: 'BG视讯厅', platform: 'live_casino', id: '3180', icon: '/static/fhcp/img/live/icon/BG_LIVE.png'},
              {name: 'DG视讯厅', platform: 'live_casino', id: '42', icon: '/static/fhcp/img/live/icon/DG_LIVE.png'},
              {name: 'DS视讯厅', platform: 'live_casino', id: '34', icon: '/static/fhcp/img/live/icon/DS_LIVE.png'},
              {name: 'LEBO视讯厅', platform: 'live_casino', id: '44', icon: '/static/fhcp/img/live/icon/LEBO_LIVE.png'},
              {name: 'OG视讯厅', platform: 'live_casino', id: '48', icon: '/static/fhcp/img/live/icon/OG_LIVE.png'},
              {name: 'eBET视讯厅', platform: 'live_casino', id: '43', icon: '/static/fhcp/img/live/icon/EBET_LIVE.png'},
              {name: 'LMG视讯厅', platform: 'live_casino', id: '45', icon: '/static/fhcp/img/live/icon/LMG_LIVE.png'},
              {name: '欧博视讯厅', platform: 'live_casino', id: '46', icon: '/static/fhcp/img/live/icon/AB_LIVE.png'},
              {name: 'SA视讯厅', platform: 'live_casino', id: '49', icon: '/static/fhcp/img/live/icon/SA_LIVE.png'}
            ]
          },
          
          {
            name: '体育赛事', link: '/home/tiyu', en: 'SPORT', sub: [
              {
                name: '皇冠体育',
                path: '/home/tiyu',
                id: '39',
                icon: '/static/fhcp/img/home/tiyu-icon/SX_SPORT.png'
              },
              {
                name: '沙巴体育',
                path: '/home/tiyu',
                id: '38',
                icon: '/static/fhcp/img/home/tiyu-icon/SB_SPORT.png'
              },
              {
                name: 'BBIN体育',
                path: '/home/tiyu',
                id: '41',
                icon: '/static/fhcp/img/home/tiyu-icon/BBIN_SPORT.png'
              },
              {
                name: 'AG体育',
                path: '/home/tiyu',
                id: '40',
                icon: '/static/fhcp/img/home/tiyu-icon/AG_SPORT.png'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games', hot: true,  en: 'GAME'},
          {name: '捕鱼达人', link: '/home/buyu', hot: true, en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui',  hot: true,en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'AGENT'}
        ],
        navlist: [
          {name: '首页', link: '/home', en: 'HOME'},
          {
            name: '购彩大厅', link: '/plays/hall', en: 'LOTTERY', hot: true, sub: [
                  {
                name: '三分快三',
                icon: '/static/public/image/lottery/ico/vp-3分快3.png',
                path: '/plays/tradition/3631',
                 hot: true
              },
              {
                name: '五分快三',
                icon: '/static/public/image/lottery/ico/vp-5分快3.png',
                path: '/plays/tradition/3632',
                 hot: true
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/ico/vp-江苏快3.png',
                path: '/plays/tradition/9'
              },
              {
                name: '上海快三',
                icon: '/static/public/image/lottery/ico/vp-上海快3.png',
                path: '/plays/tradition/2906',
                 hot: true
              },
              {
                name: '吉林快3',
                icon: '/static/public/image/lottery/ico/vp-吉林快3.png',
                path: '/plays/tradition/26'
              },
                {
                  name: '北京快3',
                  icon: '/static/public/image/lottery/ico/vp-北京快3.png',
                  path: '/plays/tradition/2900',
                   hot: true
                },
                {
                  name: '甘肃快3',
                  icon: '/static/public/image/lottery/ico/vp-甘肃快3.png',
                  path: '/plays/tradition/2901',
                   hot: true
                },
                {
                  name: '广西快3',
                  icon: '/static/public/image/lottery/ico/vp-广西快3.png',
                  path: '/plays/tradition/2902'
                },
                {
                  name: '湖北快3',
                  icon: '/static/public/image/lottery/ico/vp-湖北快3.png',
                  path: '/plays/tradition/2905'
                },
                {
                  name: '贵州快3',
                  icon: '/static/public/image/lottery/ico/vp-贵州快3.png',
                  path: '/plays/tradition/2903',
                   hot: true
                },
                 {
                  name: '快速快3',
                  icon: '/static/public/image/lottery/ico/vp-快速快3.png',
                  path: '/plays/tradition/27',
                  hot: true
                },
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/ico/vp-快速赛车PK10.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '北京赛车',
                icon: '/static/public/image/lottery/ico/vp-北京赛车PK10.png',
                path: '/plays/tradition/2'
              },
              {
                name: '快速时时彩',
                icon: '/static/public/image/lottery/ico/vp-快速时时彩.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/ico/vp-快速六合彩.png',
                path: '/plays/tradition/18'
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/ico/vp-广东11选5.png',
                path: '/plays/tradition/7'
              },
            ]
          },
          {name: '棋牌游戏', link: '/home/qipai', hot: true, en: 'CHESS'},
          {
            name: '真人视讯', link: '/home/live', en: 'CASINO', sub: [
              {name: 'AG视讯厅', platform: 'live_casino', id: '31', icon: '/static/fhcp/img/live/icon/AG_LIVE.png'},
              {name: 'BBIN视讯厅', platform: 'live_casino', id: '32', icon: '/static/fhcp/img/live/icon/BBIN_LIVE.png'},
              {name: 'BG视讯厅', platform: 'live_casino', id: '3180', icon: '/static/fhcp/img/live/icon/BG_LIVE.png'},
              {name: 'DG视讯厅', platform: 'live_casino', id: '42', icon: '/static/fhcp/img/live/icon/DG_LIVE.png'},
              {name: 'DS视讯厅', platform: 'live_casino', id: '34', icon: '/static/fhcp/img/live/icon/DS_LIVE.png'},
              {name: 'LEBO视讯厅', platform: 'live_casino', id: '44', icon: '/static/fhcp/img/live/icon/LEBO_LIVE.png'},
              {name: 'OG视讯厅', platform: 'live_casino', id: '48', icon: '/static/fhcp/img/live/icon/OG_LIVE.png'},
              {name: 'eBET视讯厅', platform: 'live_casino', id: '43', icon: '/static/fhcp/img/live/icon/EBET_LIVE.png'},
              {name: 'LMG视讯厅', platform: 'live_casino', id: '45', icon: '/static/fhcp/img/live/icon/LMG_LIVE.png'},
              {name: '欧博视讯厅', platform: 'live_casino', id: '46', icon: '/static/fhcp/img/live/icon/AB_LIVE.png'},
              {name: 'SA视讯厅', platform: 'live_casino', id: '49', icon: '/static/fhcp/img/live/icon/SA_LIVE.png'}
            ]
          },
          
          {
            name: '体育赛事', link: '/home/tiyu', en: 'SPORT', sub: [
              {
                name: '皇冠体育',
                path: '/home/tiyu',
                id: '39',
                icon: '/static/fhcp/img/home/tiyu-icon/SX_SPORT.png'
              },
              {
                name: '沙巴体育',
                path: '/home/tiyu',
                id: '38',
                icon: '/static/fhcp/img/home/tiyu-icon/SB_SPORT.png'
              },
              {
                name: 'BBIN体育',
                path: '/home/tiyu',
                id: '41',
                icon: '/static/fhcp/img/home/tiyu-icon/BBIN_SPORT.png'
              },
              {
                name: 'AG体育',
                path: '/home/tiyu',
                id: '40',
                icon: '/static/fhcp/img/home/tiyu-icon/AG_SPORT.png'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games', hot: true,  en: 'GAME'},
          {name: '捕鱼达人', link: '/home/buyu', hot: true, en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui',  hot: true,en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'AGENT'}
        ]
      }
    },
    methods: {
      goHome () {
        this.$router.push('/home')
        this.$store.commit('hsyl/setNav', 0)
      },
      toggleNav (i, link) {
        if (link == 'kefu') {
          // let url = JSON.parse(localStorage.getItem("config")).service[0].url;
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
          return false
        }
        
        if (link == '/plays/hall') {
          window.open('#/plays/hall')
          return false
        }

        this.$store.commit('hsyl/setNav', i)
        if (i == 1 || i == 2) {
          this.$router.push({
            path: link,
            query: {
              id: i
            }
          })
          return false
        }
       
        this.$router.push(link)
        
      },
      goThirdParty (item) {
        // 第三方体育跳转
        if (item.id) {
          this.getItemId(item)
          return false
        }
        if(item.path && item.path.includes('/plays/tradition')){
             if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                  window.open(this.$router.resolve(item.path).href)
                  return false
                 }
               }else{
                 this.dNotify("请先登录", 'error')
               }

         }
      }
    },
    computed: {
      navActive () {
        return this.$store.state.hsyl.navActive
      }
    },
    store
  }
</script>

<style type="text/less" lang="less" scoped>
  .clear-fix {
    content: '';
    display: table;
    clear: both;
    zoom: 1;
  }

  .nav {
    background-color: #f13131;
    height: 46px;

    .nav-main {
      width: 1000px;
      margin: 0 auto;

      > li {
        width: 110px;
        height: 46px;
        float: left;
        color: white;
        position: relative;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;

        > p {
          text-align: center;
          line-height: 46px;
          cursor: pointer;
        }

        .hot {
          position: absolute;
          right: 0;
          top: 0;
          width: 20px;
          height: 14px;
          background: url("/static/fhcp/img/hot_new.gif") no-repeat;
        }

        &:hover {
          .nav-children {
            display: block;
          }
        }

        .nav-children {
          display: none;
          position: absolute;
          top: 52px;
          left: -110px;
          z-index: 1000;
          padding: 30px;
          width: 460px;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.8);
          box-shadow: 0 -2px 20px 0 #3c3c3c;

          > li {
            margin: 5px;
            width: 90px;
            float: left;
            border-radius: 4px;
            position: relative;
            cursor: pointer;

            > div {
              width: 80px;
              height: 80px;
              margin: 0 auto;
              background-image: url("/static/fhcp/img/game-icon-bg.png");
              background-size: 100% 100%;

              > img {
                width: 60px;
                margin: 10px;
                border-radius: 50%;
              }
            }

            > p {
              padding: 5px;
              font-size: 12px;
              text-align: center;
            }

            > .hot {
              position: absolute;
              top: 0;
              right: 0;
            }

            &:hover {
              background-color: rgba(255, 255, 255, 0.5);
            }
          }

          &:after {
            content: '';
            display: block;
            top: -20px;
            left: 155px;
            width: 0;
            height: 0;
            position: absolute;
            border: 10px solid transparent;
            border-bottom: 10px solid rgba(0, 0, 0, 0.8);
          }

          &:before {
            content: '';
            display: block;
            top: -6px;
            left: 110px;
            width: 110px;
            height: 6px;
            border-radius: 4px;
            position: absolute;
          }
        }
      }

      .nav-active, li:hover {
        background-color: #bd2626;
      }
    }
  }
</style>
