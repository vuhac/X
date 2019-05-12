import Vue from 'vue'
import router from './router'
import Appjhcp from './App.vue'
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
Vue.prototype.$websiteName = 'jhcp'
// 回到顶部
router.afterEach((to, from, next) => {
  document.documentElement.scrollTop = 0
})

// router在ie下不跳转问题
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
  el: '#Appjhcp',
  router,
  template: '<Appjhcp/>',
  data: {
    eventHub: new Vue(),
  },
  components: {Appjhcp},
  created () {

  },
  mounted () {
    this.$nextTick(function () {
      setTimeout(() => {
        document.title = '9号彩票'
      }, 200)
    })
  }
})
