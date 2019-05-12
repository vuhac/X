<template>
  <div class="ly88-home-nav">
    <div class="wrapper">
      <div class="nav-caidan">
        <ul>
          <li v-for="(item,i) in navlist" :class="{navActive:navActive ==i}" :key="i">
            <span v-if="item.hot" class="hot">hot</span>
            <div :class="{'nav-item': true, 'nav-glitter': item.hot}" @click="toggleNav(i,item.link)">
              <span>{{item.name}}</span>
              <br/>
              <span>{{item.en}}</span>
            </div>
            <ol class="nav-children" v-if="item.sub">
              <li v-for="(child, index) in item.sub" :key="index" @click="goThirdParty(child)">
                <img v-if="child.icon" :src="child.icon"/>
                <span>{{child.name}}</span>
              </li>
            </ol>
          </li>
        </ul>
      </div>

      <div class="logo">
        <a href="javascript:void(0)" @click="goHome">
          <img src="/static/ly88/img/logo.png" alt="花生娱乐">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'

  export default {
    mixins: [data],
    data () {
      return {
        navlist: [
          {name: '网站首页', link: '/home', en: 'HOME'},
          {
            name: '购彩大厅', link: '/plays/hall', en: 'LOTTERY', hot: true, sub: [
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/ico/vp-快速赛车PK10.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '三分赛车',
                icon: '/static/public/image/lottery/ico/vp-3分赛车PK10.png',
                path: '/plays/tradition/13',
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
                name: '三分时时彩',
                icon: '/static/public/image/lottery/ico/vp-3分时时彩.png',
                path: '/plays/tradition/17',
                hot: true
              },
              {
                name: '重庆时时彩',
                icon: '/static/public/image/lottery/ico/vp-重庆时时彩.png',
                path: '/plays/tradition/4'
              },
              {
                name: '幸运飞艇',
                icon: '/static/public/image/lottery/ico/vp-幸运飞艇.png',
                path: '/plays/tradition/3',
                hot: true
              },
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/ico/vp-快速六合彩.png',
                path: '/plays/tradition/18'
              },
              {
                name: '香港六合彩',
                icon: '/static/public/image/lottery/ico/vp-香港六合彩.png',
                path: '/plays/tradition/1',
                hot: true
              },
              {
                name: '广东快乐十分',
                icon: '/static/public/image/lottery/ico/vp-广东快乐十分.png',
                path: '/plays/tradition/5'
              },
              {
                name: '幸运农场',
                icon: '/static/public/image/lottery/ico/vp-幸运农场.png',
                path: '/plays/tradition/6',
                hot: true
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/ico/vp-广东11选5.png',
                path: '/plays/tradition/7'
              },
              {
                name: '排列3',
                icon: '/static/public/image/lottery/ico/vp-排列3.png',
                path: '/plays/tradition/28',
                hot: true
              },
              {
                name: '上海时时乐',
                icon: '/static/public/image/lottery/ico/vp-上海时时乐.png',
                path: '/plays/tradition/29'
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/ico/vp-江苏快3.png',
                path: '/plays/tradition/9'
              }
            ]
          },
          {
            name: '真人视讯', link: '/home/live', hot: true, en: 'CASINO', sub: [
              {name: 'AG视讯厅', platform: 'live_casino', id: '31', icon: '/static/ly88/img/live/icon/AG_LIVE.png'},
              {name: 'BBIN视讯厅', platform: 'live_casino', id: '32', icon: '/static/ly88/img/live/icon/BBIN_LIVE.png'},
              {name: 'BG视讯厅', platform: 'live_casino', id: '3180', icon: '/static/ly88/img/live/icon/BG_LIVE.png'},
              {name: 'DG视讯厅', platform: 'live_casino', id: '42', icon: '/static/ly88/img/live/icon/DG_LIVE.png'},
              {name: 'DS视讯厅', platform: 'live_casino', id: '34', icon: '/static/ly88/img/live/icon/DS_LIVE.png'},
              {name: 'LEBO视讯厅', platform: 'live_casino', id: '44', icon: '/static/ly88/img/live/icon/LEBO_LIVE.png'},
              {name: 'OG视讯厅', platform: 'live_casino', id: '48', icon: '/static/ly88/img/live/icon/OG_LIVE.png'},
              {name: 'eBET视讯厅', platform: 'live_casino', id: '43', icon: '/static/ly88/img/live/icon/EBET_LIVE.png'},
              {name: 'LMG视讯厅', platform: 'live_casino', id: '45', icon: '/static/ly88/img/live/icon/LMG_LIVE.png'},
              {name: '欧博视讯厅', platform: 'live_casino', id: '46', icon: '/static/ly88/img/live/icon/AB_LIVE.png'},
              {name: 'SA视讯厅', platform: 'live_casino', id: '49', icon: '/static/ly88/img/live/icon/SA_LIVE.png'}
            ]
          },
          {name: '棋牌游戏', link: '/home/qipai', hot: true, en: 'CHESS'},
          {
            name: '体育赛事', link: '/home/tiyu', hot: true, en: 'SPORT', sub: [
              {
                name: '皇冠体育',
                path: '/home/tiyu',
                id: '39',
                icon: '/static/ly88/img/home/tiyu-icon/SX_SPORT.png'
              },
              {
                name: '沙巴体育',
                path: '/home/tiyu',
                id: '38',
                icon: '/static/ly88/img/home/tiyu-icon/SB_SPORT.png'
              },
              {
                name: 'BBIN体育',
                path: '/home/tiyu',
                id: '41',
                icon: '/static/ly88/img/home/tiyu-icon/BBIN_SPORT.png'
              },
              {
                name: 'AG体育',
                path: '/home/tiyu',
                id: '40',
                icon: '/static/ly88/img/home/tiyu-icon/AG_SPORT.png'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games', hot: true, en: 'GAME'},
          {name: '捕鱼达人', link: '/home/buyu', en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui', en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'SERVICE'}
        ]
      }
    },
    methods: {
      goHome () {
        this.$router.push('/home')
        this.$store.commit('ly88/setNav', 0)
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

        this.$store.commit('ly88/setNav', i)
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
         
        // 彩票跳转
          if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
                 }else{
                   if (item.path && item.path.includes('/plays/tradition')) {
                      this.$router.push(item.path)
                          return false
                    }
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }    
        // 第三方体育跳转
        if (item.id) {
          this.getItemId(item)
        }
      }
    },
    computed: {
      navActive () {
        return this.$store.state.ly88.navActive
      }
    },
    store
  }
</script>
