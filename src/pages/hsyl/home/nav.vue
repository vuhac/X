<template>
  <div class="hsyl-home-nav">
    <div class="wrapper">
      <div class="nav-caidan">
        <ul>
          <li v-for="(item,i) in navlist1" :class="{navActive:navActive ==i}" :key="i">
            <span v-if="item.hot" class="hot">hot</span>
            <div :class="{'nav-item': true, 'nav-glitter': item.hot}" @click="toggleNav(i,item.link)">
              <span>{{item.name}}</span>
              <br/>
              <span>{{item.en}}</span>
            </div>
            <ol class="nav-children" v-if="item.sub">
              <li v-for="(child, index) in item.sub" :key="index" @click="goThirdParty(child)">
                <img v-if="child.icon" :src="child.icon" style="border-radius:50%;" />
                <span>{{child.name}}</span>
              </li>
            </ol>
          </li>
        </ul>
      </div>

      <div class="logo">
        <a href="javascript:void(0)" @click="goHome">
          <img src="/static/hsyl/img/logo.png" alt="花生娱乐">
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
        navlist1: [
          {name: '网站首页', link: '/home', en: 'HOME'},
          {
            name: '购彩大厅', link: '/plays/hall', en: 'LOTTERY', hot: true, sub: [
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/nico/png/12.png',
                path: '/plays/tradition/12',
                hot: true,
                type:"lottery"
              },
              {
                name: '三分赛车',
                icon: '/static/public/image/lottery/nico/png/13.png',
                path: '/plays/tradition/13',
                hot: true,
                type:"lottery"
              },
              {
                name: '北京赛车',
                icon: '/static/public/image/lottery/nico/png/2.png',
                path: '/plays/tradition/2',
                type:"lottery"
              },
              {
                name: '快速时时彩',
                icon: '/static/public/image/lottery/nico/png/16.png',
                path: '/plays/tradition/16',
                hot: true,
                type:"lottery"
              },
              {
                name: '三分时时彩',
                icon: '/static/public/image/lottery/nico/png/17.png',
                path: '/plays/tradition/17',
                hot: true,
                type:"lottery"
              },
              {
                name: '重庆时时彩',
                icon: '/static/public/image/lottery/nico/png/4.png',
                path: '/plays/tradition/4',
                type:"lottery"
              },
              {
                name: '幸运飞艇',
                icon: '/static/public/image/lottery/nico/png/3.png',
                path: '/plays/tradition/3',
                hot: true,
                type:"lottery"
              },
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/nico/png/18.png',
                path: '/plays/tradition/18',
                type:"lottery"
              },
              {
                name: '香港六合彩',
                icon: '/static/public/image/lottery/nico/png/1.png',
                path: '/plays/tradition/1',
                hot: true
              },
              {
                name: '广东快乐十分',
                icon: '/static/public/image/lottery/nico/png/5.png',
                path: '/plays/tradition/5',
                type:"lottery"
              },
              {
                name: '幸运农场',
                icon: '/static/public/image/lottery/nico/png/6.png',
                path: '/plays/tradition/6',
                hot: true,
                type:"lottery"
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/nico/png/7.png',
                path: '/plays/tradition/7',
                type:"lottery"
              },
              {
                name: '排列3',
                icon: '/static/public/image/lottery/nico/png/28.png',
                path: '/plays/tradition/28',
                hot: true,
                type:"lottery"
              },
              {
                name: '上海时时乐',
                icon: '/static/public/image/lottery/nico/png/29.png',
                path: '/plays/tradition/29',
                type:"lottery"
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/nico/png/9.png',
                path: '/plays/tradition/9',
                type:"lottery"
              }
            ]
          },
          {
            name: '真人视讯', link: '/home/live', hot: true, en: 'CASINO', sub: [
              {name: 'AG视讯厅', platform: 'live_casino', id: '31', icon: '/static/hsyl/img/live/icon/AG_LIVE.png'},
              {name: 'BBIN视讯厅', platform: 'live_casino', id: '32', icon: '/static/hsyl/img/live/icon/BBIN_LIVE.png'},
              {name: 'BG视讯厅', platform: 'live_casino', id: '3180', icon: '/static/hsyl/img/live/icon/BG_LIVE.png'},
              {name: 'DG视讯厅', platform: 'live_casino', id: '42', icon: '/static/hsyl/img/live/icon/DG_LIVE.png'},
              {name: 'DS视讯厅', platform: 'live_casino', id: '34', icon: '/static/hsyl/img/live/icon/DS_LIVE.png'},
              {name: 'LEBO视讯厅', platform: 'live_casino', id: '44', icon: '/static/hsyl/img/live/icon/LEBO_LIVE.png'},
              {name: 'OG视讯厅', platform: 'live_casino', id: '48', icon: '/static/hsyl/img/live/icon/OG_LIVE.png'},
              {name: 'eBET视讯厅', platform: 'live_casino', id: '43', icon: '/static/hsyl/img/live/icon/EBET_LIVE.png'},
              {name: 'LMG视讯厅', platform: 'live_casino', id: '45', icon: '/static/hsyl/img/live/icon/LMG_LIVE.png'},
              {name: '欧博视讯厅', platform: 'live_casino', id: '46', icon: '/static/hsyl/img/live/icon/AB_LIVE.png'},
              {name: 'SA视讯厅', platform: 'live_casino', id: '49', icon: '/static/hsyl/img/live/icon/SA_LIVE.png'}
            ]
          },
          {name: '棋牌游戏', link: '/home/qipai', hot: true, en: 'CHESS'},
          {
            name: '体育赛事', link: '/home/tiyu', hot: true, en: 'SPORT', sub: [
              {
                name: '皇冠体育',
                path: '/home/tiyu',
                id: '39',
                icon: '/static/hsyl/img/home/tiyu-icon/SX_SPORT.png'
              },
              {
                name: '沙巴体育',
                path: '/home/tiyu',
                id: '38',
                icon: '/static/hsyl/img/home/tiyu-icon/SB_SPORT.png'
              },
              {
                name: 'BBIN体育',
                path: '/home/tiyu',
                id: '41',
                icon: '/static/hsyl/img/home/tiyu-icon/BBIN_SPORT.png'
              },
              {
                name: 'AG体育',
                path: '/home/tiyu',
                id: '40',
                icon: '/static/hsyl/img/home/tiyu-icon/AG_SPORT.png'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games', hot: true, en: 'GAME'},
          {name: '捕鱼达人', link: '/home/buyu', en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui', en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'SERVICE'}
        ],
        navlist: [
          {name: '网站首页', link: '/home', en: 'HOME'},
          {
            name: '购彩大厅', link: '/plays/hall', en: 'LOTTERY', hot: true, sub: [
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/ico/vp-快速赛车PK10.png',
                path: '/plays/tradition/12',
                hot: true,
                type:"lottery"
              },
              {
                name: '三分赛车',
                icon: '/static/public/image/lottery/ico/vp-3分赛车PK10.png',
                path: '/plays/tradition/13',
                hot: true,
                type:"lottery"
              },
              {
                name: '北京赛车',
                icon: '/static/public/image/lottery/ico/vp-北京赛车PK10.png',
                path: '/plays/tradition/2',
                type:"lottery"
              },
              {
                name: '快速时时彩',
                icon: '/static/public/image/lottery/ico/vp-快速时时彩.png',
                path: '/plays/tradition/16',
                hot: true,
                type:"lottery"
              },
              {
                name: '三分时时彩',
                icon: '/static/public/image/lottery/ico/vp-3分时时彩.png',
                path: '/plays/tradition/17',
                hot: true,
                type:"lottery"
              },
              {
                name: '重庆时时彩',
                icon: '/static/public/image/lottery/ico/vp-重庆时时彩.png',
                path: '/plays/tradition/4',
                type:"lottery"
              },
              {
                name: '幸运飞艇',
                icon: '/static/public/image/lottery/ico/vp-幸运飞艇.png',
                path: '/plays/tradition/3',
                hot: true,
                type:"lottery"
              },
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/ico/vp-快速六合彩.png',
                path: '/plays/tradition/18',
                type:"lottery"
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
                path: '/plays/tradition/5',
                type:"lottery"
              },
              {
                name: '幸运农场',
                icon: '/static/public/image/lottery/ico/vp-幸运农场.png',
                path: '/plays/tradition/6',
                hot: true,
                type:"lottery"
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/ico/vp-广东11选5.png',
                path: '/plays/tradition/7',
                type:"lottery"
              },
              {
                name: '排列3',
                icon: '/static/public/image/lottery/ico/vp-排列3.png',
                path: '/plays/tradition/28',
                hot: true,
                type:"lottery"
              },
              {
                name: '上海时时乐',
                icon: '/static/public/image/lottery/ico/vp-上海时时乐.png',
                path: '/plays/tradition/29',
                type:"lottery"
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/ico/vp-江苏快3.png',
                path: '/plays/tradition/9',
                type:"lottery"
              }
            ]
          },
          {
            name: '真人视讯', link: '/home/live', hot: true, en: 'CASINO', sub: [
              {name: 'AG视讯厅', platform: 'live_casino', id: '31', icon: '/static/hsyl/img/live/icon/AG_LIVE.png'},
              {name: 'BBIN视讯厅', platform: 'live_casino', id: '32', icon: '/static/hsyl/img/live/icon/BBIN_LIVE.png'},
              {name: 'BG视讯厅', platform: 'live_casino', id: '3180', icon: '/static/hsyl/img/live/icon/BG_LIVE.png'},
              {name: 'DG视讯厅', platform: 'live_casino', id: '42', icon: '/static/hsyl/img/live/icon/DG_LIVE.png'},
              {name: 'DS视讯厅', platform: 'live_casino', id: '34', icon: '/static/hsyl/img/live/icon/DS_LIVE.png'},
              {name: 'LEBO视讯厅', platform: 'live_casino', id: '44', icon: '/static/hsyl/img/live/icon/LEBO_LIVE.png'},
              {name: 'OG视讯厅', platform: 'live_casino', id: '48', icon: '/static/hsyl/img/live/icon/OG_LIVE.png'},
              {name: 'eBET视讯厅', platform: 'live_casino', id: '43', icon: '/static/hsyl/img/live/icon/EBET_LIVE.png'},
              {name: 'LMG视讯厅', platform: 'live_casino', id: '45', icon: '/static/hsyl/img/live/icon/LMG_LIVE.png'},
              {name: '欧博视讯厅', platform: 'live_casino', id: '46', icon: '/static/hsyl/img/live/icon/AB_LIVE.png'},
              {name: 'SA视讯厅', platform: 'live_casino', id: '49', icon: '/static/hsyl/img/live/icon/SA_LIVE.png'}
            ]
          },
          {name: '棋牌游戏', link: '/home/qipai', hot: true, en: 'CHESS'},
          {
            name: '体育赛事', link: '/home/tiyu', hot: true, en: 'SPORT', sub: [
              {
                name: '皇冠体育',
                path: '/home/tiyu',
                id: '39',
                icon: '/static/hsyl/img/home/tiyu-icon/SX_SPORT.png'
              },
              {
                name: '沙巴体育',
                path: '/home/tiyu',
                id: '38',
                icon: '/static/hsyl/img/home/tiyu-icon/SB_SPORT.png'
              },
              {
                name: 'BBIN体育',
                path: '/home/tiyu',
                id: '41',
                icon: '/static/hsyl/img/home/tiyu-icon/BBIN_SPORT.png'
              },
              {
                name: 'AG体育',
                path: '/home/tiyu',
                id: '40',
                icon: '/static/hsyl/img/home/tiyu-icon/AG_SPORT.png'
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
        // 彩票跳转
        if(item.type == 'lottery'){
          if(localStorage.token){
            if(localStorage.Public_User=='test' ){
              this.dNotify("彩票暂无试玩,立即注册", "error")
              return false
            }
            if(item.path.includes('/plays/tradition')){
              this.$router.push(item.path)
              return false
            }
          }else{
              this.dNotify("请先登录", 'error')
          }    
        }
        // 第三方体育跳转
        else if(item.id){
          this.getItemId(item)
        }else{
          this.$router.push(item.path)
          return false
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
