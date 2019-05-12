// vuex配置模块
import Vue from 'vue'
import Vuex from 'vuex'
import mainState from './public/mainState'
import alert from './public/alert.js'
import lottery from './public/lottery'
import hsyl from './hsyl/hsyl'
import cjw from './cjw/cjw'
import zyyl from './zyyl/zyyl'
import wbw from './wbw/wbw'
import jltx from './jltx/jltx'
import personal from './personal.js'
import bet from './bet/bet'
import szc from './szc/szc'
import yibo from "./yibo/yibo"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mainState: mainState,
    alert: alert,
    lottery: lottery,
    hsyl: hsyl,
    cjw:cjw,
    zyyl:zyyl,
    jltx:jltx,
    bet:bet,
    szc:szc,
    wbw,
    yibo,
    personal: personal
  }
})

export default store
