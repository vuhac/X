<template>
  <div>
    <div class="vp-hsyl-style" :class="{'tcgBlur':$store.state.personal.isPersonal}">
      <!-- 传统彩票 -->
      <div class="vp-lottery-style" v-if="
        $route.path.includes('/plays')||
        $route.path.includes('/rules')||
        $route.path.includes('/trend')
        ">
        <vp-lot-header :lotHeadDatas='lotHeadDatas'></vp-lot-header>
        <router-view class="content-container"></router-view>
      </div>
      <!-- 主页 -->
      <div v-else class="hsyl-cont-wrap">
        <vp-home-header></vp-home-header>
        <!-- <vp-nav></vp-nav> -->
        <vp-aside></vp-aside>
        <router-view></router-view>
        <vp-home-footer></vp-home-footer>
      </div>


    </div>
    <div class="personals-wrap-style">
      <personals></personals>
    </div>
    <vp-register></vp-register>
    <vp-login></vp-login>

 <comModal></comModal>


  </div>
</template>
<script>
  let timer
  import vpLotHeader from '@/pages/public/tradition/components/header/header'
  import vpHomeHeader from './home/header'
  import vpNav from './home/nav'
  import vpAside from './home/Aside'
  import vpHomeFooter from './home/footer'
  import personals from '../public/personals'
  import store from '@/vuex/store'
  import vpRegister from './home/register'
  import vpLogin from './home/login'
import comModal from  "../public/home/common.vue"

  export default {
    data () {
      return {


        lotHeadDatas: {
          logoUrl: '/static/szc/img/home/lotterLogo.png',
          downLoadurl: '/static/szc/html/download/index.html'
        }
      }
    },
    methods: {
      recalc () {
        this.init()
      },
      init () {
        // 手机适配
        if (this.dPcOrMobile() == 'iphone') {
          document.querySelector('body').style.minHeight = 2420 + 'px'
        } else {
          document.querySelector('body').style.minHeight = 'auto'
        }
      },

      getBalance () {
        if (localStorage.token) {
          this.$getS(`member/balance`).then(res => {
            if (res.code == 200) {
              let userinfo = JSON.parse(localStorage.userinfo)
              userinfo.balance = res.data.member
              userinfo.agent=res.data.agency
              this.$store.commit('mainState/reloadUserinfo', userinfo)
            }
          })
        } else {
          clearInterval(timer) 
        }
      }
    },
    created () {
      this.$http.get(`${this.$HOST_NAME}/games/list`).then(res => {
        if (res.code == 200) {
          localStorage.setItem('gameList', JSON.stringify(res.data))
        }
      })
      clearInterval(timer)
      timer = setInterval(this.getBalance, 10000)

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState == 'hidden') {
          clearInterval(timer)
        } else if (document.visibilityState == 'visible') {
          timer = setInterval(this.getBalance, 10000)
        }
      })
    },
    components: {
      vpHomeHeader,
      vpLotHeader,
      vpNav,
      vpAside,
      vpHomeFooter,
      personals,
      vpRegister,
      vpLogin,
      comModal
    },
    store
  }
</script>






