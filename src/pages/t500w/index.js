import Vue from 'vue'
import router from './router'
import Appt500w from './App.vue'
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


Vue.use(util)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(Loading)
Vue.use(Toast)

import moment from 'moment'

Vue.prototype.$moment = moment;
Vue.prototype.$websiteName = 't500w'
// 回到顶部
router.afterEach((to, from, next) => {
  document.documentElement.scrollTop = 0
})


const IE11RouterFix = {
  methods: {
      hashChangeHandler: function() { this.$router.push(window.location.hash.substring(1, window.location.hash.length)); },
      isIE11: function() { return !!window.MSInputMethodContext && !!document.documentMode; }
  },
  mounted: function() { if ( this.isIE11() ) { window.addEventListener('hashchange', this.hashChangeHandler); } },
  destroyed: function() { if ( this.isIE11() ) { window.removeEventListener('hashchange', this.hashChangeHandler); } }
};

window.myApp = new Vue({
  mixins: [IE11RouterFix],
  el: '#Appt500w',
  router,
  template: '<Appt500w/>',
  data: {
    eventHub: new Vue(),
  },
  components: {Appt500w},
  created () {

  },
  mounted () {
    this.$nextTick(function () {
      setTimeout(() => {
        document.title = '500万彩票'
      }, 200)
    })
  }
})
