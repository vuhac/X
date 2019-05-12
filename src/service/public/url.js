import UserService from './UserService'
import Vue from 'vue'

(function () {
  let url = window.location.href
  let obj = {}
  let keyvalue = []
  let key = '',
    value = ''
  let parseString = url.substring(url.indexOf('?') + 1, url.length).split('&')
  for (var i in parseString) {
    keyvalue = parseString[i].split('=')
    key = keyvalue[0]
    value = keyvalue[1] && keyvalue[1].includes('#/') ? keyvalue[1].split('#/')[0] : keyvalue[1]
    obj[key] = value
  }
  if (obj.agent) {
    localStorage.setItem('agent', obj.agent)
  } else if (obj.k) {
    localStorage.setItem('k', obj.k)
  }
})()

// 判断过期
if (localStorage.token) {
  let obj = UserService.expiredPart(localStorage.token)
  if (obj.exp - obj.timestamp <= 0) {
    UserService.removeCache()
  }
}

//vm登进登出
let incode = window.location.href.includes('t=b506f0d11ee755d712a09f9fa25c52f5')
let outcode = window.location.href.includes('t=52335218f376c22f123183adb2481802')
if (incode || outcode) {
  if (incode) {
    localStorage.Public_User = 'vm'
    Vue.prototype.$HOST_NAME = '/frontend/vm'
    location.href = location.href.toString().replace('t=b506f0d11ee755d712a09f9fa25c52f5', '')
  } else if (outcode) {
    localStorage.Public_User = 'v1'
    Vue.prototype.$HOST_NAME = '/frontend/v1'
    location.href = location.href.toString().replace('t=52335218f376c22f123183adb2481802', '')
  }
}

// 判断不输入对密码的情况（不过期并且值存在）vm上面加，试玩在试玩按钮
if (localStorage.Public_User && localStorage.Public_User === 'vm') {
  Vue.prototype.$HOST_NAME = '/frontend/vm'
} else if (localStorage.Public_User && localStorage.Public_User === 'test') {
  Vue.prototype.$HOST_NAME = '/frontend/test'
} else {
  Vue.prototype.$HOST_NAME = '/frontend/v1'
}

Vue.prototype.createDownloadQRCode = function ({el, url, size}) {
  if (Object.prototype.toString.call(el) === '[object HTMLDivElement]') {

  } else if (Object.prototype.toString.call(this.$refs[el]) === '[object HTMLDivElement]') {
    el = this.$refs[el]
  } else {
    el = this.$el.querySelector(el)
    if (Object.prototype.toString.call(el) !== '[object HTMLDivElement]') {
      console.error('el参数不是DOM对象,也不是可查找的选择器,创建二维码失败!')
      console.warn('el:', el)
      return false
    }
  }

  console.log(el.style.height)

  return new QRCode(el, {
    text: url,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  })
}



