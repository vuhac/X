import Vue from 'vue'
import router from './router'
import klkApp from './App.vue'
import '@/service/public/service'
import '@/service/public/url'//优先配置url
import util from '@/service/public/util'
import '@/assets/iconfont/public/iconfont.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './index.less'
import animated from 'animate.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css"
Vue.use(VueAwesomeSwiper)

Vue.use(animated)
import Toast from '@/service/public/Toast.js'
import Loading from '@/service/public/Loading.js'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(util)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(Loading)
Vue.use(Toast)

import moment from 'moment'

Vue.prototype.$moment = moment
// 回到顶部
router.afterEach((to, from, next) => {
  document.documentElement.scrollTop = 0;
})

window.myApp = new Vue({
  el: '#klkApp',
  router,
  template: '<klkApp/>',
  data: {
    eventHub: new Vue(),
  },
  components: {klkApp},
  created () {
  },
  mounted () {
    this.$nextTick(function () {
      setTimeout(() => {
        document.title = "澳门新葡京"
      }, 200)
    })
  }
})
