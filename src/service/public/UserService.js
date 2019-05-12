import store from '@/vuex/store'
import $http from 'axios'
import Vue from 'vue'
import { Notification, Alert } from 'element-ui'

// 公共静态东西配置
export const PublicStatic = {
  alertTipTime: 100000,
  siteId: 1
}

// 公共头像
function UserService () {
  let that = this
  let timeStaus = true
  //获取基本信息，主要用于刷新余额
  this.vpGetBasicInfo = async function () {
    if (!localStorage.token) return false
    let res = await vpGetUserInfo(this)//继承了传过来的this
    if (res) store.commit('mainState/reloadUserinfo', res)
  }

  //获取个人信息公共接口
  // async function vpGetUserInfo (context) {
  //   let response = await Post.call(context, `${Vue.prototype.$HOST_NAME}/member/userinfo`, {})
  //   if (response.code === 200) {
  //     let res = response.data
  //     localStorage.setItem('userinfo', JSON.stringify(res))
  //     return res
  //   } else {
  //     that.removeCache()
  //   }
  // }
  async function vpGetUserInfo(context) {
    let response = await $http.get(`/frontend/${Vue.prototype.$HOST_NAME?Vue.prototype.$HOST_NAME.substring(10):'v1'}/member/info`, { headers: { 'Accept': 'application/x.tg.v2+json' } });
    if (response.code === 200) {
      let res = response.data;
      localStorage.userinfo = JSON.stringify(res)
      return res;
    } else {
      that.removeCache();
    }

  };



  // 设置过期显示
  this.expiredPart = function (token) {
    if (!token) return false
    let str = token.split('.')[1]
    let BASE64 = {
      enKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      deKey: new Array(
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
      ),
      encode: function (src) {
        //用一个数组来存放编码后的字符，效率比用字符串相加高很多。
        let str = new Array()
        let ch1, ch2, ch3
        let pos = 0
        //每三个字符进行编码。
        while (pos + 3 <= src.length) {
          ch1 = src.charCodeAt(pos++)
          ch2 = src.charCodeAt(pos++)
          ch3 = src.charCodeAt(pos++)
          str.push(this.enKey.charAt(ch1 >> 2), this.enKey.charAt(((ch1 << 4) + (ch2 >> 4)) & 0x3f))
          str.push(this.enKey.charAt(((ch2 << 2) + (ch3 >> 6)) & 0x3f), this.enKey.charAt(ch3 & 0x3f))
        }
        //给剩下的字符进行编码。
        if (pos < src.length) {
          ch1 = src.charCodeAt(pos++)
          str.push(this.enKey.charAt(ch1 >> 2))
          if (pos < src.length) {
            ch2 = src.charCodeAt(pos)
            str.push(this.enKey.charAt(((ch1 << 4) + (ch2 >> 4)) & 0x3f))
            str.push(this.enKey.charAt(ch2 << 2 & 0x3f), '=')
          } else {
            str.push(this.enKey.charAt(ch1 << 4 & 0x3f), '==')
          }
        }
        //组合各编码后的字符，连成一个字符串。
        return str.join('')
      },
      decode: function (src) {
        //用一个数组来存放解码后的字符。
        let str = []
        let ch1, ch2, ch3, ch4
        let pos = 0
        //过滤非法字符，并去掉'='。
        src = src.replace(/[^A-Za-z0-9+/]/g, '')
        //decode the source string in partition of per four characters.
        while (pos + 4 <= src.length) {
          ch1 = this.deKey[src.charCodeAt(pos++)]
          ch2 = this.deKey[src.charCodeAt(pos++)]
          ch3 = this.deKey[src.charCodeAt(pos++)]
          ch4 = this.deKey[src.charCodeAt(pos++)]
          str.push(String.fromCharCode(
            (ch1 << 2 & 0xff) + (ch2 >> 4), (ch2 << 4 & 0xff) + (ch3 >> 2), (ch3 << 6 & 0xff) + ch4))
        }
        //给剩下的字符进行解码。
        if (pos + 1 < src.length) {
          ch1 = this.deKey[src.charCodeAt(pos++)]
          ch2 = this.deKey[src.charCodeAt(pos++)]
          if (pos < src.length) {
            ch3 = this.deKey[src.charCodeAt(pos)]
            str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4), (ch2 << 4 & 0xff) + (ch3 >> 2)))
          } else {
            str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4)))
          }
        }
        //组合各解码后的字符，连成一个字符串。
        return str.join('')
      }
    }
    let destr = JSON.parse(BASE64.decode(str))
    let timestamp = Math.floor(new Date().getTime() / 1000)
    return {
      exp: destr.exp,
      timestamp: timestamp
    }
  }

  this.expired = function () {
    let obj = that.expiredPart(localStorage.token)
    if (obj.exp - obj.timestamp <= 1800 && 0 <= obj.exp - obj.timestamp) {
      if (!timeStaus) return false
      timeStaus = false
      setTimeout(() => {
        that.vpReloadToken()
      }, 5000)
    } else if (0 > obj.exp - obj.timestamp) {
      that.removeCache()
    }
  }
  // 刷新token
  this.vpReloadToken = async function () {
    if (!localStorage.token) return false
    let response = await $http.post(`${Vue.prototype.$HOST_NAME}/member/refresh`, {
        device : "pc"
    })
    if (response.code === 200) {
      localStorage.setItem('token', response.data)
      timeStaus = true
    } else {
      that.removeCache()
    }
  }

  //设置cofig
  this.vpSetConfig = function () {
    if (localStorage.configTime) {
      that.vpGetBasWebsoc()
      return false
    } else {
      Vue.prototype.$nextTick(async () => {
        let res = await $http.get(`${Vue.prototype.$HOST_NAME}/config`, {})
        if (res && res.code === 200) {
          res.data.siteConfig.siteId = res.data.id
          localStorage.setItem('configTime', res.data.data ? res.data.data.updated_at : res.data.updated_at)
          localStorage.setItem('config', res.data.data ? JSON.stringify(res.data.data.siteConfig) : JSON.stringify(res.data.siteConfig))
          that.vpGetBasWebsoc()
        }
      })
    }

  }

  
  this.vpReloadConfig = async function () {
    let response = await $http.get(`${Vue.prototype.$HOST_NAME}/config`, {})
    if (response.code === 200) {
      response.data.siteConfig.siteId = response.data.id
      localStorage.setItem('configTime', response.sign)
      localStorage.setItem('config', response.data.data ? JSON.stringify(response.data.data.siteConfig) : JSON.stringify(response.data.siteConfig))
    }
  }
  let websocketStaue = true
  let allThis = ''

  this.vpGetBasWebsoc = function () {
    allThis = this
    if (!websocketStaue) return false
    Vue.prototype.$nextTick(async () => {
      let res = await Post(`${Vue.prototype.$HOST_NAME}/websocket`, {})
      if (res.code === 200) {
        websocketStaue = false
      } else {
        if (!res) return false
      }
      let ws = res.data.wss
      let _M = {}
      let id = ''
      let group = ''
      let siteId = JSON.parse(localStorage.config).siteId
      // 获取随机数
      let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

      function generateMixed (n) {
        let res = ''
        for (let i = 0; i < n; i++) {
          let id = Math.ceil(Math.random() * 35)
          res += chars[id]
        }
        return res
      }

      if (localStorage.userinfo) {
        try {
          const userinfo = JSON.parse(localStorage.userinfo)
          id = userinfo.uid
        } catch (e) {
          localStorage.setItem('userinfo', '')
        }
      }
      if (localStorage.Public_User === 'test') {
        group = 'test'
      } else if (localStorage.Public_User === 'vm') {
        group = 'vm'
      } else if (localStorage.Public_User === 'v1' && localStorage.token) {
        group = 'member'
      } else {
        group = 'anonymous'
        id = siteId + '_' + new Date().getTime() + generateMixed(16)
      }
      _M.socket = Stomp.client(ws)
      _M.headers = {
        id: id,
        group: group,
        siteid: siteId
      }
      _M.message = {
        'all': '/topic/public',
        'group': '/group/' + _M.headers.group,
        'site': '/group/' + siteId,
        'alone': '/user/' + _M.headers.group + '_' + _M.headers.id + '/message'
      }
      _M.socket.connect(_M.headers, function (frame) {
        _M.socket.subscribe(_M.message.all, function (greeting) {
          JSON.parse(greeting.body).type === 'user.lotteryOpen' ? store.commit('mainState/websoc',JSON.parse(greeting.body)) : that.publicInform(JSON.parse(greeting.body))
        })
        //·Ö×é
        _M.socket.subscribe(_M.message.group, function (greeting) {
          JSON.parse(greeting.body).type === 'user.lotteryOpen' ? store.commit('mainState/websoc',JSON.parse(greeting.body)) : that.publicInform(JSON.parse(greeting.body))
        })
        _M.socket.subscribe(_M.message.alone, function (greeting) {
          JSON.parse(greeting.body).type === 'user.lotteryOpen' ? store.commit('mainState/websoc',JSON.parse(greeting.body)) : that.publicInform(JSON.parse(greeting.body))
        })
        _M.socket.subscribe(_M.message.site, function (greeting) {
          JSON.parse(greeting.body).type === 'user.lotteryOpen' ? store.commit('mainState/websoc',JSON.parse(greeting.body)) : that.publicInform(JSON.parse(greeting.body))
        })
      },function(err){
        websocketStaue = true;
        _M.socket.disconnect();
        setTimeout(()=>{
           that.vpGetBasWebsoc();
        },5000)
      })
    })
  }
  // 公共信息通知
  this.publicInform = function (msg) {
    if (msg.type === 'user.lotteryOpen') return false
    Notification({
      title: msg.typeName ? msg.typeName : '温馨提示',
      message: msg.message,
      type: 'success'
    })
  }
  // 登出
  this.logout = async function () {
    if (!localStorage.token) return false
    let res = await vpLogout(this)//继承了传过来的this
  }

  //获取个人信息公共接口
  async function vpLogout (context) {
    let response = await Post.call(context, `${Vue.prototype.$HOST_NAME}/member/logout`, {})
    if (response.code === 200) {
      that.removeCache()
      window.location.reload()
      // Toast.success('登出成功！');
    } else {
      that.removeCache()
      // Toast.fail('登出失败！');
    }
  }
   //设置set_code
   this.set_code_show = async function (){
    let response = await axios.get(`/frontend/v1/is-show-captcha`,{headers: { 'Accept': 'application/x.tg.v2+json' }}  );
    let res = response.data;
    if (res && res.code === 200) {
       localStorage.is_code_show = res.data;
    }
  };
  //重置缓存信息
  this.removeCache = function () {
    localStorage.removeItem('token')
    localStorage.removeItem('userinfo')
    store.commit('mainState/resetUserinfo', null)
    if (Vue.prototype.$HOST_NAME === '/frontend/vm') {
      return false
    }
    localStorage.removeItem('Public_User')
    Vue.prototype.$HOST_NAME = '/frontend/v1'
  }

  //设置缓存信息
  this.setCache = function (res, type, logType) {
    localStorage.setItem('userinfo', JSON.stringify(res.data['userInfo'] || res.data['userinfo']))
    localStorage.setItem('token', res.data.token)
    if (!logType) {
      store.commit('mainState/reloadUserinfo', res.data['userInfo'] || res.data['userinfo'])
    }

    if (Vue.prototype.$HOST_NAME === '/frontend/vm') {
      return false
    }
    localStorage.setItem('Public_User', type)
    Vue.prototype.$HOST_NAME = `/frontend/${type}`
  }

  this.setCachereg = function (res, type, logType) {
    localStorage.setItem('userinfo', JSON.stringify(res.data['userInfo'] || res.data['userinfo']))
    localStorage.setItem('token', res.data.token)
    if (!logType) {
      store.commit('mainState/reloadUserinfo', res.data['userInfo'] || res.data['userinfo'])
    }

    if (Vue.prototype.$HOST_NAME === '/frontend/vm') {
      return false
    }
    localStorage.setItem('Public_User', type)
    Vue.prototype.$HOST_NAME = `/frontend/${type}`
  }

  //网络请求
  function Post (url, data) {
    return $http.post(url, data)
  }

}

export default new UserService
