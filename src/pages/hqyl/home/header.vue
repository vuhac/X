<template>
  <div class="new-header">
    <div class="cont-top cen">
      <div ref="time"></div>
      <ul>
        <li v-if="!userinfo">
          <a @click="tryPlay">免费试玩</a>
        </li>
        <li>
          <a @click="$router.push('/home/agent')">代理加盟</a>
        </li>
        <li>
          <a target="_blank" href="/static/hqyl/html/download/index.html">APP下载</a>
        </li>
        <li>
          <a target="_blank"
             href="https://h352.com">备用网址</a>
        </li>
      </ul>
    </div>
    <div class="cont-center">
      <div class="main  cen">
        <div class="left fl">
          <div class="logo">
            <a href="javascript:void(0)" @click="$router.push('/')">
              <img src="/static/hqyl/img/logo.png" alt="">
            </a>
          </div>
          <div class="xianjin">
            <a href="/">
              <img src="/static/hqyl/img/yule.png" alt="">
            </a>
          </div>
        </div>
        <ul v-if="userinfo" class="center fl">
          <li>
            <span>帐号：</span> {{userinfo&&userinfo.userName}}
            <label @click="goUserCen('personage',7)">修改密码</label>
          </li>
          <li>
            <span>本地余额： </span>
            <a @click="goUserCen('personage',0)">{{userinfo&&userinfo.balance}}</a>
            <a></a>
            <a @click="getBalance" class="refresh" :class="{'active':refreshS}"></a>
            <label @click="goUserCen('message',0)" class="message"></label>
          </li>
          <li>
            <!-- 代理中心 -->
            <span @click="goUserCen('agency',0)">申请代理</span>
            <!-- 返水记录 -->
            <label @click="goUserCen('discounts','1')">实时返水</label>
          </li>
        </ul>
        <div v-if="userinfo" class="right fl">
          <ul>
            <li>
              <!-- 网银转帐 -->
              <a @click="goUserCen('recharge',0)"></a>
              <!-- 申请提现 -->
              <a @click="goUserCen('withdraw',0)"></a>
            </li>
            <li>
              <a @click="goUserCen('personage',1)"></a>
              <!-- 投注记录 -->
              <a @click="goUserCen('personage',0)"></a>
              <!-- 投注记录 -->
            </li>
            <li>
              <a @click="logout"></a>
            </li>
          </ul>
        </div>
        <div v-if="!userinfo" class="login-wrap">
          <ul>
            <li>
              <input placeholder="帐号" type="text" v-model="passKey.userName" @blur="getCode">
              <input maxlength="20" placeholder="输入密码" type="password" v-model="passKey.password" @keyup.13="login">
              <label onclick="alert('忘记密码，请联系在线客服人员取回！');">忘记密码？</label>
            </li>
            <li>
              <span v-if="code_show">
                 <input maxlength="4" class="code" placeholder="验证码" type="text" v-model="passKey.code"
                        @keyup.13="login">
                 <img class="yzm" :src="codeImg" alt="" @click="getCode">
              </span>

              <span v-if="code_show" class="iscodeshow">
                <a @click="login" class="logo_but"></a>
                <a href="#/home/register" class="res_but"></a>
              </span>

              <span v-else class="uncodeshow">
                <a @click="login" class="logo_but"></a>
                <a href="#/home/register" class="res_but"></a>
              </span>
            </li>
            <li>
              <a @click="$router.push('/home/agent')" class="register">

              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont-nav cen">
        <ul>
          <li v-for="(item,index) in navList" :key='index'>
            <img v-if="item.tag" src="/static/hqyl/img/home/hot11.gif" alt="">
            <a @click="goTo(item)">{{item.name}}</a>
            <div class="child-wrap">
              <div class="item" v-for="(itemInt,indexInt) in item.child" :key="indexInt">
                <a @click="thirdParty(itemInt)">{{itemInt.name}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'
  import { postS, getS } from '@/service/public/service.js'

  export default {
    mixins: [data],
    data () {
      return {
        code_show: parseInt(localStorage.is_code_show),
        refreshS: false,
        passKey: {},
        codeImg: '/static/hqyl/img/yzm.png',
        time: this.getTimes(new Date()),
        interval: null,
        navList: [{
          name: '网站首页',
          router: '/'
        },
          {
            name: '体育投注',
            child: [{
                name: '皇冠体育',
                id: '39',
                platform: 'sport'
              },
              {
                name: '沙巴体育',
                id: '38',
                platform: 'sport'
              },
              {
                name: 'BB体育',
                id: '41',
                platform: 'sport'
              },
              {
                name: 'AG体育',
                id: '40',
                platform: 'sport'
              }
            ],
            router: ''
          },
          {
            name: '真人视讯',
            router: '/home/live'
          },
          {
            name: '电子游艺',
            router: '/home/games?id=10022&name=MG老虎机'
          },
          {
            name: '彩票游戏',
            // child: [
            //   { name: "传统彩票", type: "notGame" },
            //   { name: "VR彩票", type: "notGame", platform: "vr_lottery", id: 30 }
            // ],
            router: '/plays/hall',
            target: '_blank'
          },
          {
            name: '棋牌游戏',
            tag: 'hot',
            router: '/qipai',
            link: '/home/games?id=10042&name=开元棋牌',
            platform: 'KY_CHESS',
            gameName: '0',
            child: [{
              name: '开元棋牌',
              // gameName: "610",
              platform: 'KY_CHESS',
              link: '/home/games?id=10042&name=开元棋牌',
            },
              {
                name: 'VG棋牌',
                // gameName: "830",
                platform: 'KY_CHESS',
                link: '/home/games?id=10041&name=VG棋牌',
              }]
          },
          {
            name: '捕鱼达人',
            router: '/home/buyu'
          },
          {
            name: '优惠活动',
            router: '/home/youhui'
          }
        ]
      }
    },
    mounted () {
      let estObjMD = this.getTimes()
      this.interval = setInterval(estObjMD.dispTimeMD, 1000)
    },
    methods: {
      getTimes () {
        var that = this
        let estObjMD = {
          pre0: function (num) {
            if (num < 10) {
              num = '0' + num
            }
            return num
          },
          /* 美东時間顯示 */
          dispTimeMD: function () {
            let timestam = new Date().getTime()
            let time = timestam - 43200000
            let dateObj = new Date(time),
              p0 = estObjMD.pre0,
              Y = dateObj.getFullYear(),
              Mh = dateObj.getMonth() + 1,
              D = p0(dateObj.getDate()),
              H = p0(dateObj.getHours()),
              M = p0(dateObj.getMinutes()),
              S = p0(dateObj.getSeconds())

            if (Mh > 12) {
              Mh = '01'
            } else if (Mh < 10) {
              Mh = '0' + Mh
            }
            let str = `美东时间 - ${Y}/${Mh}/${D}/ ${H}:${M}:${S}`
            that.$refs.time.innerHTML = str
          }
        }
        return estObjMD
      },
      getCode () {
        if (this.code_show === 0) {
          return
        }
        if (!this.passKey.userName) {
          // alert("请输入6位帐号");
          return false
        }

        if (this.passKey.userName.length < 5) {
          // alert("请输入5位帐号");
          this.passKey.userName = ''
          var oInput = document.getElementById('userName')
          oInput.focus()
          return false
        }

        getS(`captcha`, {
          userName: this.passKey.userName
        })
          .then(res => {
            if (res.code === 200) {
              this.codeImg = res.data.captcha_image_text
              this.passKey.captcha_key = res.data.captcha_key
            } else {
              this.$store.commit('alert/showTipModel', {
                bool: true,
                title: res.message,
                model: 'warn'
              })
            }
          })
      },
      login () {
        if (!this.validateAccountLogin(this.passKey.userName)) {
          alert('请输入6-20位数字或字母组成的帐号')
          return false
        }
        if (!this.validateAccountLogin(this.passKey.password)) {
          alert('请输入6-20位数字或字母组成的密码')
          return false
        }
        if (this.code_show) {
          if (this.passKey.code === '') {
            alert('验证码请务必输入')
            return false
          }
        }
        if (this.code_show) {
          if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
            alert('请输入4位验证码')
            return false
          }
        }

        this.passKey.device = 'pc'
        postS(`login`, this.passKey).then(res => {
          if (res.code === 200) {
            // this.$router.push({
            //   name: 'clause'
            // })
            UserService.setCache(res, 'v1', 'login')
            window.location.href = '/'
          } else {
            alert(res.message)
            this.is_code_show()
          }
        })
      },
      logout () {
        UserService.logout.call(this)
      },
      is_code_show () {
        getS(`is-show-captcha`).then(res => {
          if (res && res.code === 200) {
            this.code_show = res.data
          }
        })
      },
      getBalance () {
        this.refreshS = true
        setTimeout(() => {
          getS(`/member/balance`).then(res => {
            if (res.code === 200) {
              let userinfo = JSON.parse(localStorage.userinfo)
              userinfo.balance = res.data.member
              userinfo.agent = res.data.agency
              this.$store.commit('mainState/reloadUserinfo', userinfo)
              this.refreshS = false
              // alert("刷新余额成功");
            } else {
              alert('服务器报错')
            }
          })
        }, 500)
      },
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {
          bool: true
        })
        this.$store.commit('showContent', {
          parent: name
        })
        this.$store.commit('showNav', {
          child: num
        })
      },
      async tryPlay () {
        let res = await this.$http.get('/frontend/test/demo', {
          headers: { 'Accept': 'application/x.tg.v2+json' },
          params: {}
        })
        if (res && res.code === 200) {
          UserService.setCache(res, 'test')

          this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
            let platform = res.data.platform
            let alias = res.data.alias
            let keys = Object.keys(platform)
            let refund = []
            keys.forEach((v, i) => {
              refund[i] = {}
              refund[i].title = v
              refund[i].list = []
              platform[v].forEach((a, j) => {
                refund[i].list[j] = {}
                refund[i].list[j].key = Object.keys(a)[0]
                refund[i].list[j].refund = Object.values(a)[0]
                refund[i].list[j].name = alias[refund[i].list[j].key]
              })
            })

            // this.refundData = refund;
            localStorage.setItem('refund', JSON.stringify(refund))
          })
          setTimeout(() => {
            window.location.reload()
          }, 500)
        }
      },
      goTo (item) {
        if (item.target === '_blank') {
          window.open('#' + item.router)
        } else if (item.router === '/qipai') {
          this.$router.push(item.link)
        } else if (item.type === 'lottery') {
          // if(localStorage.token){
          //   if(localStorage.Public_User === "test"){
          //     this.dNotify("彩票暂无试玩功能，请立即注册帐号","error")
          //   }else{
          //     window.open(item.router)
          //     return false
          //   }
          // }else{
          //   this.dNotify("请先登录",'error')
          // }
        } else {
          this.$router.push({
            path: item.router
          })
          
        }
      },
      thirdParty (item) {
        if (item.link) {
          this.$router.push(item.link)
          return false
        }
        if (item.type) {
          if (item.name === '传统彩票') {
            window.open('#/plays/hall')
          } else {
            this.getItemId(item)
          }
        } else {
          this.getItemId(item)
        }

      }
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    created () {
      this.is_code_show()
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          if (!localStorage.userinfo) {
            let timer = setInterval(() => {
              if (localStorage.userinfo) {
                clearInterval(timer)
                window.location.reload()
              }
            }, 1000)
          }
        }
      })
      // $(document).keydown(function(event) {
      //   if (event.keyCode === 13) {
      //     this.login()
      //   }
      // });
    },
    beforeDestroy () {},
    destroyed () {
      clearInterval(this.interval)
    },
    store
  }
</script>

<style lang="less" scoped>
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #666;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #666;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #666;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #666;
  }

  @-webkit-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-ms-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .new-header {
    background: black;

    .fl {
      float: left;
    }

    .cen {
      width: 1000px;
      margin: 0 auto;
    }

    .cont-top {
      height: 20px;
      line-height: 20px;
      color: #cfa972;
      font-size: 12px;
      zoom: 1;
      overflow: hidden;

      div {
        float: left;
      }

      ul {
        float: right;
        list-style-type: disc;
        list-style: disc;
        padding-right: 26px;

        li {
          float: left;
          list-style-type: disc;
          list-style: disc;
          margin-left: 24px;

          a {
            color: #cfa972;
          }
        }
      }
    }

    .cont-center {
      background: url(/static/hqyl/img/home/header-bg.jpg) repeat-x top #000;
      width: 100%;
      height: 143px;
      margin-top: -20px;
      padding-top: 20px;

      .main {
        .left {
          .xianjin,
          .logo {
            float: left;
          }

          .logo {
            width: 158px;
            height: 52px;
            vertical-align: middle;
            margin-top: 14px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .xianjin {
            margin-top: 34px;
            margin-left: 15px;
          }
        }

        &:after {
          content: "";
          display: block;
          clear: both;
        }

        .center {
          padding-left: 80px;
          padding-top: 10px;

          li {
            width: 250px;
            height: 20px;
            border-bottom: 1px solid #b38850;
            font-size: 12px;
            color: #fff;
            line-height: 20px;
            position: relative;

            &:first-child {
              border-top: 1px solid #b38850;
            }

            span {
              color: #ffd58e;
              cursor: pointer;
            }

            label {
              float: right;
              color: #ffd58e;
              display: inline-block;
              width: 100px;
              cursor: pointer;

              &.message {
                position: absolute;
                padding-left: 30px;
                right: 0;

                &::before {
                  position: absolute;
                  margin-left: 5px;
                  content: "";
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  background: url(/static/hqyl/img/home/img-sprites.png) -26px -13px no-repeat;
                  left: -4px;
                  top: 3px;
                }
              }
            }

            a {
              color: #fff;
              position: relative;

              &.refresh {
                &::after {
                  position: absolute;
                  top: -2px;
                  margin-left: 5px;
                  content: "";
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  background: url("/static/public/image/common/refresh.png") no-repeat;
                }

                &.active {
                  &::after {
                    -webkit-animation: animate 1s infinite linear;
                    animation: animate 1s infinite linear;
                    -moz-animation: animate 1s infinite linear;
                    -o-animation: animate 1s infinite linear;
                    -ms-animation: animate 1s infinite linear;
                    transform-origin: 40% 40%;
                    -webkit-transform-origin: 40% 40%;
                    -moz-transform-origin: 40% 40%;
                    -o-transform-origin: 40% 40%;
                    -ms-transform-origin: 40% 40%;
                  }
                }
              }
            }
          }
        }

        .right {
          float: left;

          ul {
            padding-top: 10px;
            padding-left: 30px;

            li {
              float: left;
              padding-left: 10px;

              a {
                display: block;
                width: 110px;
                height: 28px;
                background: url(/static/hqyl/img/home/icons_index_new.png) no-repeat;
                background-position: -4px -319px;
                margin-bottom: 5px;
              }

              &:nth-child(1) {
                a {
                  &:first-child {
                    &:hover {
                      background-position: -4px -352px;
                    }
                  }

                  &:last-child {
                    background-position: -4px -384px;

                    &:hover {
                      background-position: -4px -416px;
                    }
                  }
                }
              }

              &:nth-child(2) {
                a {
                  &:first-child {
                    background-position: -4px -449px;

                    &:hover {
                      background-position: -4px -483px;
                    }
                  }

                  &:last-child {
                    background-position: -4px -517px;

                    &:hover {
                      background-position: -4px -551px;
                    }
                  }
                }
              }

              &:last-child {
                a {
                  background-position: -131px -3px;
                  height: 60px;
                  width: 71px;

                  &:hover {
                    background-position: -131px -68px;
                  }
                }
              }
            }
          }
        }

        .login-wrap {
          padding-top: 15px;
          float: right;

          input {
            display: block;
            width: 154px;
            height: 26px;
            border-radius: 3px;
            background: transparent;
            color: #666;
            border: 1px inset #fff;
            margin-bottom: 5px;
            outline: 0;
            font-family: "Microsoft Yahei";
            background-color: white;
            font-size: 13px;
            text-indent: 4px;

            &.code {
              width: 117px;
            }
          }

          li {
            float: left;
            padding-left: 5px;
            position: relative;

            .uncodeshow{
              .res_but {
                display: block;
                width: 120px;
                height: 28px;
                background: url(/static/hqyl/img/daili/e_res.png) no-repeat;
                background-size: 100% 100%;
                margin-left: 2px;
                margin-top: 4px;
              }

              .logo_but {
                display: block;
                width: 120px;
                height: 28px;
                background: url(/static/hqyl/img/daili/e_logo.png) no-repeat;
                background-size: 100% 100%;
                margin-top: -1px;
                margin-left: 2px;
              }
            }

            .iscodeshow{
              .res_but {
                display: inline-block;
                width: 54px;
                height: 28px;
                background: url(/static/hqyl/img/daili/e_res1.png) no-repeat;
                background-size: 100% 100%;
                margin-left: 2px;
              }

              .logo_but {
                display:inline-block;
                width: 54px;
                height: 28px;
                background: url(/static/hqyl/img/daili/e_logo1.png) no-repeat;
                background-size: 100% 100%;
                margin-top: -1px;
                margin-left: 2px;
              }
            }

            .register {
              background: url(/static/hqyl/img/daili/e_daili.png) no-repeat;
              background-size: 100% 100%;
              height: 60px;
              width: 100px;
              display: block;
            }

            .yzm {
              position: absolute;
              right: 8px;
              top: 3px;
              width: 50px;
              height: 20px;
              cursor: pointer;
            }

            label {
              position: absolute;
              right: 8px;
              top: 37px;
              cursor: pointer;
              font-size: 13px;
              color: #000;
              text-decoration: underline;
            }
          }
        }
      }

      .cont-nav {
        ul {
          padding: 0 20px;

          li {
            display: inline-block;
            height: 46px;
            padding-top: 18px;
            width: 120px;
            text-align: center;
            position: relative;

            a {
              color: #e0ab63;
              font-size: 15px;
              text-align: center;

              &:hover {
                color: #fff;
              }
            }

            img {
              position: absolute;
              top: 0;
              right: 15px;
            }

            .child-wrap {
              width: 100px;
              background-color: rgb(48, 4, 2);
              position: absolute;
              left: 8px;
              top: 46px;
              z-index: 5555;
              display: none;

              .item {
                color: #fff;

                a {
                  line-height: 30px;
                }
              }
            }

            &:hover {
              .child-wrap {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>
