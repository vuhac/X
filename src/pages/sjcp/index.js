import Vue from 'vue'
import router from './router'
import dqrApp from './App.vue'
import '@/service/public/service'
import '@/service/public/url'//优先配置url
import util from '@/service/public/util'
import '@/assets/iconfont/public/iconfont.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'

Vue.use(animated)
import './index.less'

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
  document.documentElement.scrollTop = 0
})

window.myApp = new Vue({
  el: '#dqrApp',
  router,
  template: '<dqrApp/>',
  data: {
    eventHub: new Vue(),
    config: {service: [{url: null}]},
    mobileurl: '',
    currentDomain: ''
  },
  components: {dqrApp},
  created () {
  },
  mounted () {
    this.initSystem()
    this.$nextTick(() => {
      var url = ''
      if (window.location.origin) {
        url = window.location.origin
      } else {
        url = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
      }
      this.mobileurl = url + '/m'
      this.currentDomain = url
    })

  },
  methods: {
    initSystem () {
      var config = JSON.parse(localStorage.getItem('config'))
      if (config) {
        this.config = config
      }
    }
  }
})
