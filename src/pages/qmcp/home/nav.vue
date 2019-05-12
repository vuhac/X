<template>
  <div class="qmcp-home-nav">
    <div class="wrapper">

      <div class="nav-caidan">
        <ul>
          <li v-for="(item,i) in navlist1" class="nav" :class="{navActive:navActive ==i}" :key="i"
              @click.stop="toggleNav(i,item.link)">
            <span class="title">{{item.name}}</span>
            <span class="en">{{item.en}}</span>
            <div class="sub-nav clearfix" :class="'sub-nav-'+item.en" v-if="item.sub">
              <div class="sub" v-for="(subitem,i) in item.sub" :key="i" @click.stop="goThirdParty(subitem)">
                <i v-if="subitem.hot" class="hot"></i>
                <a href="javascript:;">
                  <img :src="subitem.icon" alt="">
                </a>
                <span>{{subitem.name}}</span>
              </div>
            </div>
          </li>
        </ul>


        <!-- <ul>
          <li v-for="(item,i) in navlist" class="nav" :class="{navActive:navActive ==i}" :key="i"
              @click.stop="toggleNav(i,item.link)">
            <span class="title">{{item.name}}</span>
            <span class="en">{{item.en}}</span>
            <div class="sub-nav clearfix" :class="'sub-nav-'+item.en" v-if="item.sub">
              <div class="sub" v-for="(subitem,i) in item.sub" :key="i" @click.stop="goThirdParty(subitem)">
                <i v-if="subitem.hot" class="hot"></i>
                <a href="javascript:;">
                  <img :src="subitem.icon" alt="">
                </a>
                <span>{{subitem.name}}</span>
              </div>
            </div>
          </li>
        </ul> -->

      </div>

      <div class="logo">
        <a href="javascript:void(0)" @click="goHome">
          <img src="/static/qmcp/img/logo.png" alt="全名彩票">
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
          {
            name: '网站首页',
            link: '/home',
            en: 'HOME'
          },
          {
            name: '购彩大厅',
            link: '/plays/hall',
            en: 'LOTTERY',
            sub: [
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/nico/png/12.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '三分赛车',
                icon: '/static/public/image/lottery/nico/png/13.png',
                path: '/plays/tradition/13',
                hot: true
              },
               {
                name: '幸运飞艇',
                icon: '/static/public/image/lottery/nico/png/3.png',
                path: '/plays/tradition/3',
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
                name: '三分时时彩',
                icon: '/static/public/image/lottery/nico/png/17.png',
                path: '/plays/tradition/17',
                hot: true
              },
              {
                name: '重庆时时彩',
                icon: '/static/public/image/lottery/nico/png/4.png',
                path: '/plays/tradition/4'
              },
             
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/nico/png/18.png',
                path: '/plays/tradition/18'
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
                path: '/plays/tradition/5'
              },
              {
                name: '幸运农场',
                icon: '/static/public/image/lottery/nico/png/6.png',
                path: '/plays/tradition/6',
                hot: true
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/nico/png/7.png',
                path: '/plays/tradition/7'
              },
              {
                name: '排列3',
                icon: '/static/public/image/lottery/nico/png/28.png',
                path: '/plays/tradition/28',
                hot: true
              },
              {
                name: '上海时时乐',
                icon: '/static/public/image/lottery/nico/png/29.png',
                path: '/plays/tradition/29'
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/nico/png/9.png',
                path: '/plays/tradition/9'
              }
            ]
          },
          {name: '真人视讯', link: '/home/live', en: 'CASINO'},
          {
            name: '体育赛事',
            link: '/home/tiyu',
            en: 'SPORT',
            sub: [
              {
                name: '皇冠体育',
                icon: '/static/qmcp/img/nav/hgty.png',
                path: '/home/tiyu',
                id: '39'
              },
              {
                name: '沙巴体育',
                icon: '/static/qmcp/img/nav/sbty.png',
                path: '/home/tiyu',
                id: '38'
              },
              {
                name: 'BBIN体育',
                icon: '/static/qmcp/img/nav/bbinty.png',
                path: '/home/tiyu',
                id: '41'
              },
              {
                name: 'AG体育',
                icon: '/static/qmcp/img/nav/agty.png',
                path: '/home/tiyu',
                id: '40'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games', en: 'GAME'},
          {name: '棋牌游戏', link: '/home/qipai', en: 'CHESS'},
          {name: '捕鱼达人', link: '/home/buyu', en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui', en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'SERVICE'}
        ],
         navlist: [
          {
            name: '网站首页',
            link: '/home',
            en: 'HOME'
          },
          {
            name: '购彩大厅',
            link: '/plays/hall',
            en: 'LOTTERY',
            sub: [
              {
                name: '快速赛车',
                icon: '/static/qmcp/img/nav/kssc.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '三分赛车',
                icon: '/static/qmcp/img/nav/sfsc.png',
                path: '/plays/tradition/13',
                hot: true
              },
               {
                name: '幸运飞艇',
                icon: '/static/qmcp/img/nav/xyft.png',
                path: '/plays/tradition/3',
                hot: true
              },
              {
                name: '北京赛车',
                icon: '/static/qmcp/img/nav/bjpk10.png',
                path: '/plays/tradition/2'
              },
              {
                name: '快速时时彩',
                icon: '/static/qmcp/img/nav/ksssc.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '三分时时彩',
                icon: '/static/qmcp/img/nav/sfssc.png',
                path: '/plays/tradition/17',
                hot: true
              },
              {
                name: '重庆时时彩',
                icon: '/static/qmcp/img/nav/cqssc.png',
                path: '/plays/tradition/4'
              },
             
              {
                name: '快速六合彩',
                icon: '/static/qmcp/img/nav/kslhc.png',
                path: '/plays/tradition/18'
              },
              {
                name: '香港六合彩',
                icon: '/static/qmcp/img/nav/xglhc.png',
                path: '/plays/tradition/1',
                hot: true
              },
              {
                name: '广东快乐十分',
                icon: '/static/qmcp/img/nav/gdklsf.png',
                path: '/plays/tradition/5'
              },
              {
                name: '幸运农场',
                icon: '/static/qmcp/img/nav/xync.png',
                path: '/plays/tradition/6',
                hot: true
              },
              {
                name: '广东11选5',
                icon: '/static/qmcp/img/nav/gd11x5.png',
                path: '/plays/tradition/7'
              },
              {
                name: '排列3',
                icon: '/static/qmcp/img/nav/pl3.png',
                path: '/plays/tradition/28',
                hot: true
              },
              {
                name: '上海时时乐',
                icon: '/static/qmcp/img/nav/shssl.png',
                path: '/plays/tradition/29'
              },
              {
                name: '江苏快三',
                icon: '/static/qmcp/img/nav/jsks.png',
                path: '/plays/tradition/9'
              }
            ]
          },
          {name: '真人视讯', link: '/home/live', en: 'CASINO'},
          {
            name: '体育赛事',
            link: '/home/tiyu',
            en: 'SPORT',
            sub: [
              {
                name: '皇冠体育',
                icon: '/static/qmcp/img/nav/hgty.png',
                path: '/home/tiyu',
                id: '39'
              },
              {
                name: '沙巴体育',
                icon: '/static/qmcp/img/nav/sbty.png',
                path: '/home/tiyu',
                id: '38'
              },
              {
                name: 'BBIN体育',
                icon: '/static/qmcp/img/nav/bbinty.png',
                path: '/home/tiyu',
                id: '41'
              },
              {
                name: 'AG体育',
                icon: '/static/qmcp/img/nav/agty.png',
                path: '/home/tiyu',
                id: '40'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games', en: 'GAME'},
          {name: '棋牌游戏', link: '/home/qipai', en: 'CHESS'},
          {name: '捕鱼达人', link: '/home/buyu', en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui', en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'SERVICE'}
        ]
      }
    },
    methods: {
      goHome () {
        this.$router.push('/')
        this.$store.commit('hsyl/setNav', 0)
      },
      toggleNav (i, link) {
        if (link == 'kefu') {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
          return false
        }else if(link == '/plays/hall') {
          window.open('#/plays/hall')
          return false
        }else if(link == '/home/youhui'){
          this.$router.push(link)
        }else{
          this.$router.push(link);
        }

        this.$store.commit('hsyl/setNav', i)

      },
      goThirdParty (item) {
        // 彩票跳转
        if (item.path.includes('/plays/tradition')) {
            if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                  this.$router.push(item.path)
                  return false
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }
         
        }
        // 第三方体育跳转
        if (item.id) {
          this.getItemId(item)
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

<style lang="less" scoped>
    .sub-nav{
      .sub{
        a{
          img{
            width: 60px!important;
            height: 60px!important;
            border-radius: 50%;
            margin-top: 10px;
          }
        }
      }
    }
</style>
