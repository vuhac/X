import UserService from '@/service/public/UserService.js'
const mixin = {
  data: function () {
    return {
      token: localStorage.token,
      Public_User: localStorage.Public_User
    }
  },
  methods: {
    // 正式登陆
    async login (id) {
      let res = await this.$http.post(`${this.$HOST_NAME}/games/login`, {
        id,
        device: 'pc'
      })
      if (res && res.code == 200) {
        window.location.href = res.data.url
      } else {
        alert(res.message)
        console.log(res.message)
      }
    },
    //需要获取/games/index再登录真人 vr 等
    async getItemId (item) {
      if (!localStorage.token || !localStorage.userinfo) {
        alert('未登录')
        return false
      }
      console.log(item)
      let routeData = this.$router.resolve({
        path: '/loading',
        query: {id:item.id,login: true}
      })
      window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
    },
    //直接登录，如捕鱼
    trustLogin (item) {
      if (!localStorage.token) {
        alert('未登录')
        return false
      }
      let routeData = this.$router.resolve({
        path: '/loading',
        query: {id:item.id,login: true}
      })
      window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
    },
    // 需要解析再登录，如第三方电子,需要解析
    loginGame (item) {
      console.log(item)
      if (!localStorage.token || !localStorage.userinfo) {
        alert('未登录')
        return false
      }
      // debugger
      let routeData = this.$router.resolve({
        path: '/loading',
        query: {
          id: item.id,
          login: true
        }
      })
      window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
    },
    loginTest (item) {
      if (!localStorage.token || !localStorage.userinfo) {
            this.tryPlay(item)
      }else{
        let routeData = this.$router.resolve({
          path: '/loading',
          query: {
            id: item.id,
            login: true
          }
        })
        window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
      }
      
    },
    async tryPlay (item) {
      let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
      if (res && res.code == 200) {
        UserService.setCache(res, 'test')

        


        let routeData = this.$router.resolve({
          path: '/loading',
          query: {
            id: item.id,
            login: true
          }
        })
        window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')



        // this.anoRefund()
        // this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
        //   let platform = res.data.platform
        //   let alias = res.data.alias
        //   let keys = Object.keys(platform)
        //   let refund = []
        //   keys.forEach((v, i) => {
        //     refund[i] = {}
        //     refund[i].title = v
        //     refund[i].list = []
        //     platform[v].forEach((a, j) => {
        //       refund[i].list[j] = {}
        //       refund[i].list[j].key = Object.keys(a)[0]
        //       refund[i].list[j].refund = Object.values(a)[0]
        //       refund[i].list[j].name = alias[refund[i].list[j].key]
        //     })
        //   })
        //   localStorage.setItem('refund', JSON.stringify(refund))
        // })
        setTimeout(() => {
          window.location.reload()
        }, 500)
      }
    },

  },
  beforeDestroy () {
  },
}

export default mixin


