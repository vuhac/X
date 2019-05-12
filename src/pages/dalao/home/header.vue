<template>
  <div class="new-header">
    <div class="cont-top cen">
      <div class="wraper">
        <div v-if="!userinfo" class="login-before">
          <div class="head_logo">
            <p>
              <img src="/static/dalao/img/head_logo_img.png" alt="">
              PLAY RESPONSIBLY
            </p>
          </div>
          <div class="head_right">
            <div class="input_enter acc">
              <p>
                <input v-model="passKey.userName" @blur="getCode" placeholder="帐号" type="text" id='userName'>
              </p>
            </div>
            <div class="input_enter pas">
              <p>
                <input maxlength="20" type="password" v-model="passKey.password" placeholder="密码" @keyup.13="login">
              </p>
            </div>
            <div class="input_enter code"  v-if="code_show">
              <p>
                <input maxlength="4" v-model="passKey.code" placeholder="验证码" type="text" @keyup.13="login">
                <span class="img">
                  <img :src="codeImg" alt="" @click="getCode">
                </span>
              </p>
            </div>
            <a class="in_sub" href="javascript:void(0);" @click="login">登录</a>
            <router-link class="in_sub" to="/home/register">注册</router-link>
            <a class="in_sub" target="_blank" href="http://6668077.com/">导航站</a>
            <a href="javascript:void (0)" @click="goAgent" class="bt"><img src="/static/dalao/img/home/daili.gif" alt=""></a>
            <!--<a class="bt" href="javascript:void(0);" @click="tryPlay">免费试玩</a>-->
            <a class="bt" href="javascript:void(0);" onclick="alert('忘记帐号密码，请联系在线客服人员取回！')">忘记密码</a>
          </div>
        </div>
        <div v-if="userinfo" class="login-after">
          <p class="log_a acc">帐号:<span class="col-advertis-yellow">{{userinfo&&userinfo.userName}}</span></p>
          <p class="log_a balance">余额:<span class="col-advertis-yellow">{{userinfo&&userinfo.balance}}</span></p>
          <a class="link_a1" href="javascript:void(0);" @click="goUserCen('personage',0)">会员中心</a>
          <!-- <a class="link_a1" href="javascript:void(0);" @click="goUserCen('agency',0)">代理中心</a> -->
          <a class="link_a1 link_a2" href="javascript:void(0);" @click="goUserCen('recharge',0)">充值</a>

          <a class="link_a1 link_a2 one" href="javascript:void(0);" @click="goUserCen('withdraw',0)">提款</a>
          <a class="link_a1 link_a2 two" href="#plays/hall" target="_blank">下注</a>
          <a class="link_a1 link_a2 three" href="javascript:void(0);" @click="logout">退出</a>
        </div>
      </div>
    </div>

    <div class="cont-bottom cen">
      <div class="wraper">
        <div class="logo">
          <img src="/static/dalao/img/home/logo.png" alt="">
          <!--<object id="forfun" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="215" height="76"
                  codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0">
            <param name="movie" value="/seufld/seufld/flash/focus2.swf">
            <param name="quality" value="high">
            <param name="menu" value="false">
            <param name="wmode" value="opaque">
            <param name="FlashVars" value="">
            <param name="allowScriptAccess" value="sameDomain">
            <embed id="forfunex" src="/static/dalao/img/logo17.swf" width="215" height="76" align="middle"
                   bgcolor="#AF221F" quality="high" menu="false" play="true" Loop="true" FlashVars=""
                   llowScriptAccess="sameDomain" type="application/x-shockwave-flash"
                   pluginspage="http://www.adobe.com/go/getflashplayer">
            </embed>
          </object>-->
        </div>
        <ul class="nav-wrap clearfix">
          <li @click.stop="goTo(item,index)" class="nav" :class="{'navActive':navActive==index}" :key=index
              v-for="(item,index) in navList1">
            <span class="icon-hot1" v-if="item.hot"></span>
            <a href="javascript:;">
              <span>
                {{item.name}}<br>
                <b>{{item.tag}}</b>
              </span>
            </a>
            <div class="sub-nav clearfix" v-if="item.child">
              <div class="sub" v-for="(sub,i) in item.child" :key="i" @click.stop="goThirdParty(sub)">
                <a href="javascript:;">
                  <img :src="sub.icon" alt="" :style="sub.dstyle">
                </a>
                <span>{{sub.name}}</span>
              </div>
            </div>
          </li>
        </ul>



        <!-- <ul class="nav-wrap clearfix">
          <li @click.stop="goTo(item,index)" class="nav" :class="{'navActive':navActive==index}" :key=index
              v-for="(item,index) in navList">
            <span class="icon-hot1" v-if="item.hot"></span>
            <a href="javascript:;">
              <span>
                {{item.name}}<br>
                <b>{{item.tag}}</b>
              </span>
            </a>
            <div class="sub-nav clearfix" v-if="item.child">
              <div class="sub" v-for="(sub,i) in item.child" :key="i" @click.stop="goThirdParty(sub)">
                <a href="javascript:;">
                  <img :src="sub.icon" alt="">
                </a>
                <span>{{sub.name}}</span>
              </div>
            </div>
          </li>
        </ul> -->

      </div>
    </div>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'
  import {postS,getS} from '@/service/public/service.js'
  export default {
    mixins: [data],
    data () {
      return {
        refreshS: false,
        passKey: {},
        checkIndex: 0,
        codeImg: '/static/dalao/img/yzm.png',
        time: this.getTimes(new Date()),
        code_show: parseInt(localStorage.is_code_show),


        navList1: [
          {
            name: '网站首页',
            tag: 'Home',
            router: '/home',
          },
          {
            name: '购彩大厅',
            tag: 'Lottery',
            router: '/plays/hall',
            hot: true,
            child: [
               {
                  name: '五分赛车',
                  icon: '/static/public/image/lottery/nico/png/3630.png',
                  path: '/plays/tradition/3630',
                  hot: true,
                  dstyle:"width:60px;height:60px;margin-top:9px;"
                },
                {
                  name: '江苏快三',
                  icon: '/static/public/image/lottery/nico/png/9.png',
                  path: '/plays/tradition/9',
                  dstyle:"width:60px;height:60px;margin-top:9px;"
                },
                {
                  name: '北京PK10',
                  icon: '/static/public/image/lottery/nico/png/2.png',
                  path: '/plays/tradition/2',
                  dstyle:"width:60px;height:60px;margin-top:9px;"
                },
                {
                  name: '快速赛车',
                  icon: '/static/public/image/lottery/nico/png/12.png',
                  path: '/plays/tradition/12',
                  hot: true,
                  dstyle:"width:60px;height:60px;margin-top:9px;"
                },
                {
                  name: '重庆时时彩',
                  icon: '/static/public/image/lottery/nico/png/4.png',
                  path: '/plays/tradition/4',
                  dstyle:"width:60px;height:60px;margin-top:9px;"
                },
                {
                  name: '快速时时彩',
                  icon: '/static/public/image/lottery/nico/png/16.png',
                  path: '/plays/tradition/16',
                  hot: true,
                  dstyle:"width:60px;height:60px;margin-top:9px;"
                },
                {
                  name: '香港六合彩',
                  icon: '/static/public/image/lottery/nico/png/1.png',
                  path: '/plays/tradition/1',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  hot: true
                },
                {
                  name: '快速六合彩',
                  icon: '/static/public/image/lottery/nico/png/18.png',
                  path: '/plays/tradition/18',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  hot: true
                },
                {
                  name: '三分时时彩',
                  icon: '/static/public/image/lottery/nico/png/17.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/17',
                  hot: true
                },
                {
                  name: '三分赛车',
                  icon: '/static/public/image/lottery/nico/png/13.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/13',
                  hot: true
                },
                {
                  name: '幸运飞艇',
                  icon: '/static/public/image/lottery/nico/png/3.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/3',
                  hot: true
                },
                {
                  name: '广东11选5',
                  icon: '/static/public/image/lottery/nico/png/7.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/7'
                },
                {
                  name: '天津时时彩',
                  icon: '/static/public/image/lottery/nico/png/15.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/15'
                },
                {
                  name: '上海时时乐',
                  icon: '/static/public/image/lottery/nico/png/29.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/29'
                },
                {
                  name: '福彩3D',
                  icon: '/static/public/image/lottery/nico/png/11.png',
                  dstyle:"width:60px;height:60px;margin-top:9px;",
                  path: '/plays/tradition/11',
                  hot: true
                }
            ],
          },
          {
            name: '真人娱乐',
            tag: 'Casino',
            router: '/home/live',
            hot: true
          },
          {name: '棋牌游戏', router: '/home/qipai', tag: 'CHESS'},
          {
            name: '体育投注',
            tag: 'Sports',
            router: '/home/sport',
            child: [
              {
                name: '皇冠体育',
                icon: '/static/dalao/img/hgty.png',
                path: '/home/tiyu',
                id: 39
              },
              {
                name: '沙巴体育',
                icon: '/static/dalao/img/sbty.png',
                path: '/home/tiyu',
                id: 38
              },
              {
                name: 'BBIN体育',
                icon: '/static/dalao/img/bbinty.png',
                path: '/home/tiyu',
                id: 41
              },
              {
                name: 'AG体育',
                icon: '/static/dalao/img/agty.png',
                path: '/home/tiyu',
                id: 40
              }
            ],
          },
          {
            name: '电子游艺',
            tag: 'Game',
            router: '/home/games?id=10022',
          },
          {
            name: '捕鱼达人',
            tag: 'Fishing',
            router: '/home/buyu',
          },
          {
            name: '优惠活动',
            router: '/home/youhui',
            tag: 'Activity',
            hot: true
          },
          {
            name: '在线客服',
            router: '/kefu',
            tag: 'Official',
          }
        ],


        navList: [
          {
            name: '网站首页',
            tag: 'Home',
            router: '/home',
          },
          {
            name: '购彩大厅',
            tag: 'Lottery',
            router: '/plays/hall',
            hot: true,
            child: [
               {
                  name: '五分赛车',
                  icon: '/static/dalao/img/wfsc.png',
                  path: '/plays/tradition/3630',
                  hot: true
                },
                {
                  name: '江苏快三',
                  icon: '/static/dalao/img/jsks.png',
                  path: '/plays/tradition/9'
                },
                {
                  name: '北京PK10',
                  icon: '/static/dalao/img/gf_a3.png',
                  path: '/plays/tradition/2'
                },
                {
                  name: '快速赛车',
                  icon: '/static/dalao/img/kssc.png',
                  path: '/plays/tradition/12',
                  hot: true
                },
                {
                  name: '重庆时时彩',
                  icon: '/static/dalao/img/cqssc.png',
                  path: '/plays/tradition/4'
                },
                {
                  name: '快速时时彩',
                  icon: '/static/dalao/img/ksssc.png',
                  path: '/plays/tradition/16',
                  hot: true
                },
                {
                  name: '香港六合彩',
                  icon: '/static/dalao/img/xglhc.png',
                  path: '/plays/tradition/1',
                  hot: true
                },
                {
                  name: '快速六合彩',
                  icon: '/static/dalao/img/kslhc.png',
                  path: '/plays/tradition/16',
                  hot: true
                },
                {
                  name: '三分时时彩',
                  icon: '/static/dalao/img/sfssc.png',
                  path: '/plays/tradition/17',
                  hot: true
                },
                {
                  name: '三分赛车',
                  icon: '/static/dalao/img/sfsc.png',
                  path: '/plays/tradition/13',
                  hot: true
                },
                {
                  name: '幸运飞艇',
                  icon: '/static/dalao/img/XYFT.png',
                  path: '/plays/tradition/3',
                  hot: true
                },
                {
                  name: '广东11选5',
                  icon: '/static/dalao/img/GD11X5.png',
                  path: '/plays/tradition/7'
                },
                {
                  name: '天津时时彩',
                  icon: '/static/dalao/img/gf_a9.png',
                  path: '/plays/tradition/15'
                },
                {
                  name: '上海时时乐',
                  icon: '/static/dalao/img/xy_a11.png',
                  path: '/plays/tradition/29'
                },
                {
                  name: '福彩3D',
                  icon: '/static/dalao/img/fc3d.png',
                  path: '/plays/tradition/11',
                  hot: true
                }
            ],
          },
          {
            name: '真人娱乐',
            tag: 'Casino',
            router: '/home/live',
            hot: true
          },
          {name: '棋牌游戏', router: '/home/qipai', tag: 'CHESS'},
          {
            name: '体育投注',
            tag: 'Sports',
            router: '/home/sport',
            child: [
              {
                name: '皇冠体育',
                icon: '/static/dalao/img/hgty.png',
                path: '/home/tiyu',
                id: 39
              },
              {
                name: '沙巴体育',
                icon: '/static/dalao/img/sbty.png',
                path: '/home/tiyu',
                id: 38
              },
              {
                name: 'BBIN体育',
                icon: '/static/dalao/img/bbinty.png',
                path: '/home/tiyu',
                id: 41
              },
              {
                name: 'AG体育',
                icon: '/static/dalao/img/agty.png',
                path: '/home/tiyu',
                id: 40
              }
            ],
          },
          {
            name: '电子游艺',
            tag: 'Game',
            router: '/home/games?id=10022',
          },
          {
            name: '捕鱼达人',
            tag: 'Fishing',
            router: '/home/buyu',
          },
          {
            name: '优惠活动',
            router: '/home/youhui',
            tag: 'Activity',
            hot: true
          },
          {
            name: '在线客服',
            router: '/kefu',
            tag: 'Official',
          }
        ]
      }
    },
    mounted () {},
    methods: {
      goAgent () {
        this.$router.push('/home/agent')
      },
      getCode () {
        if (this.code_show == 0) {
          return;
        }
        if (this.passKey.userName.length < 5) {
           alert("请输入6位帐号");
          this.passKey.userName = ''
          var oInput = document.getElementById('userName')
          oInput.focus()
          return false
        }

       getS(`captcha`, {
            userName: this.passKey.userName
          })
          .then(res => {
            if (res.code == 200) {
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

        if(this.code_show){
          if (this.passKey.code == '') {
          alert('验证码请务必输入')
          return false
         }
        }
        if(this.code_show){
           if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
             alert('请输入4位验证码')
             return false
         }
        }
        this.passKey.device = 'pc';
        postS(`login`, this.passKey).then(res => {
          if (res.code == 200) {
            this.$http
              .post(`${this.$HOST_NAME}/member/refundInfo`)
              .then(res => {
                let refund = res.data.platform
                localStorage.setItem('refund', JSON.stringify(refund))
              })
              .then(res => {
                this.$router.push({
                  name: 'clause'
                })
              })
            UserService.setCache(res, 'v1', 'login')
          } else {
            alert(res.message)
            this.is_code_show();
          }
        })
      },
      logout () {
        UserService.logout.call(this)
      },
      is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
       },
      getBalance () {
        this.refreshS = true
        getS(`member/balance`).then(res => {
          if (res.code == 200) {
            let userinfo = JSON.parse(localStorage.userinfo)
            userinfo.balance = res.data.member
            userinfo.agent=res.data.agency
            this.$store.commit('mainState/reloadUserinfo', userinfo)
            this.refreshS = false
            // alert("刷新余额成功");
          } else {
            alert('服务器报错')
          }
        })
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
        let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
        if (res && res.code == 200) {
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
      goTo (item, index) {
        this.$store.commit('hsyl/setNav', index)
        if (item.router == '/plays/hall' || item.router == '/plays/tradition/1') {
          window.open(`#${item.router}`)
          return false
        } else if (item.router == '/kefu') {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
          return false
        }
        this.checkIndex = index
        this.$router.push({
          path: item.router
        })
      },
      goThirdParty (item) {
        // 彩票跳转
        if (item.path.includes('/plays/tradition')) {
              if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                 window.open(`#${item.path}`)
                 return false;
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }
        }
        // 第三方体育跳转
        if (item.id) {
          this.getItemId(item)
        }
      }
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      },
      navActive () {
        return this.$store.state.hsyl.navActive
      }
    },
    created () {
      this.is_code_show();
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState == 'hidden') {
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
    },
    beforeDestroy () {},
    store
  }
</script>

<style lang="less" scoped>
  .new-header {
    background: black;
    font-family: "Microsoft Yahei", "SimHei", "SimSun", Geneva, sans-serif;

    .fl {
      float: left;
    }

    .cen {
      width: 1050px;
      margin: 0 auto;
    }

    .cont-top {
      width: 100%;
      min-width: 1200px;
      height: 50px;
      overflow: hidden;
      background-color: #272524;

      .wraper {
        width: 1097px;
        margin: 0 auto;

        &::after {
          content: "";
          display: block;
          clear: both;
        }

        .login-before {
          .head_logo {
            position: relative;
            width: 180px;
            left: 10px;
            height: auto;
            font-style: italic;
            line-height: 50px;
            font-size: 16px;
            color: #ffffff;
            float: left;

            p {
              float: left;
              font-size: 14px;
              line-height: 55px;
              white-space: nowrap;

              img {
                float: left;
                margin-top: 7px;
                margin-right: 7px;
              }
            }
          }

          .head_right {
            padding-left: 30px;
            float: left;

            &::after {
              content: "";
              display: block;
              clear: both;
            }

            .input_enter {
              float: left;

              p {
                width: 160px;
                height: 38px;
                overflow: hidden;
                float: left;
                margin-top: 7px;
                margin-right: 12px;

                input {
                  width: 160px;
                  height: 38px;
                  line-height: 38px;
                  vertical-align: middle;
                  font-size: 14px;
                  color: #ffffff;
                  background-color: transparent;
                  outline: none;
                  box-sizing: border-box;
                  padding-left: 45px;
                  border: 0;
                  text-indent: 5px;
                }
              }

              &.acc {
                p {
                  background: url(/static/dalao/img/input_user_bg.png) no-repeat;
                }
              }

              &.pas {
                p {
                  background: url(/static/dalao/img/input_pass_bg.png) no-repeat;
                }
              }

              &.code {
                position: relative;
                width: 145px;
                margin-top: 2px;

                p {
                  background: url(/static/dalao/img/input_code_bg.png) no-repeat;
                }

                input {
                  padding-left: 10px;
                  height: 32px;
                }

                .img {
                  float: left;
                  margin-top: 2px;
                  margin-left: 10px;

                  img {
                    width: 60px;
                    height: 27px;
                    position: absolute;
                    right: 8px;
                    top: 10px;
                    cursor: pointer;
                  }
                }
              }
            }

            .in_sub {
              display: block;
              width: 60px;
              height: 35px;
              line-height: 34px;
              float: left;
              margin-top: 7px;
              margin-left: 10px;
              font-size: 14px;
              text-align: center;
              color: #ffffff;
              cursor: pointer;
              background: url(/static/dalao/img/input_sub_bg.png) no-repeat;
            }

            .bt {
              display: block;
              width: 70px;
              height: 38px;
              line-height: 34px;
              float: left;
              margin-top: 7px;
              margin-left: 8px;
              font-size: 14px;
              text-align: center;
              color: #ffffff;
              cursor: pointer;
              img {
                width: 100%;
              }
            }
          }
        }

        .login-after {
          .log_a {
            width: 195px;
            height: 44px;
            overflow: hidden;
            float: left;
            margin-top: 6px;
            line-height: 40px;
            vertical-align: middle;
            font-size: 14px;
            color: #ffffff;
            text-indent: 45px;
            margin-right: 10px;

            &.acc {
              background: url(/static/dalao/img/log_bg.png) left top no-repeat;
            }

            &.balance {
              background: url(/static/dalao/img/log_bg.png) left -44px no-repeat;
            }
          }

          .link_a1 {
            display: block;
            width: 108px;
            height: 50px;
            overflow: hidden;
            float: left;
            padding-left: 43px;
            font-size: 16px;
            color: #ffffff;
            line-height: 50px;
            box-sizing: border-box;
            margin-right: 8px;
            background: url(/static/dalao/img/head_link_bg.png) -108px 7px no-repeat;

            &:hover {
              text-decoration: none;
              color: #ffd830;
              background: url(/static/dalao/img/head_link_bg.png) -108px -66px
              no-repeat;
            }
          }

          .link_a2 {
            width: 90px;

            &.one {
              background: url(/static/dalao/img/head_link_bg.png) left 7px no-repeat;

              &:hover {
                text-decoration: none;
                color: #ffd830;
                background: url(/static/dalao/img/head_link_bg.png) left -66px no-repeat;
              }
            }

            &.two {
              background: url(/static/dalao/img/head_link_bg.png) -320px 7px no-repeat;

              &:hover {
                text-decoration: none;
                color: #ffd830;
                background: url(/static/dalao/img/head_link_bg.png) -320px -66px
                no-repeat;
              }
            }

            &.three {
              background: url(/static/dalao/img/head_link_bg.png) -428px 7px no-repeat;

              &:hover {
                text-decoration: none;
                color: #ffd830;
                background: url(/static/dalao/img/head_link_bg.png) -428px -66px
                no-repeat;
              }
            }
          }
        }
      }
    }

    .cont-bottom {
      width: 100%;
      min-width: 1000px;
      height: 77px;
      background: #af221f;

      .wraper {
        width: 1097px;
        margin: 0 auto;

        &::after {
          content: "";
          display: block;
          clear: both;
        }

        .logo {
          float: left;
          width: 215px;
          height: 76px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .nav-wrap {
          li {
            position: relative;
            display: inline-block;
            height: 77px;
            list-style: none;
            font-size: 15px;

            &:hover .sub-nav {
              display: block;
              transform: translateX(-50%);
            }

            &.navActive {
              background: #ffd830;
              color: #662d91;
            }

            a {
              display: block;
              height: 77px;
              text-decoration: none;
              overflow: hidden;
              color: #ffffff;
              font-size: 15px;
              padding: 0 19px;
              text-align: center;

              &:hover {
                background: #ffd830;
                color: #662d91;
              }

              span {
                display: block;
                padding-top: 20px;

                b {
                  line-height: 20px;
                  font-size: 12px;
                  font-weight: normal;
                }
              }
            }

            .icon-hot1 {
              background: url(/static/dalao/img/hot1.gif);
              top: 0px;
              margin-left: 76px;
              width: 24px;
              height: 18px;
              display: block;
              position: absolute;
            }

            .sub-nav {
              z-index: 6;
              position: absolute;
              left: 47.5px;
              top: 76px;
              width: 578px;
              padding: 20px 34px;
              background-color: rgba(0, 0, 0, 0.8);
              display: none;
              border-radius: 8px;

              &:nth-child(2) {
                width: 478px;
              }

              &::after {
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 26px;
                height: 19px;

                top: -8px;
              }

              .sub {
                text-align: center;
                width: 92px;
                line-height: 15px;
                margin: 5px;
                height: 100px;
                float: left;
                position: relative;
                color: #fff;

                &:hover {
                  background: rgba(96, 96, 96, 0.8);
                  border-radius: 10px;
                }

                a {
                  display: inline-block;
                  width: 80px;
                  height: 80px;
                  padding: 0 0 18px 0;
                  background: url(/static/dalao/img/game-icon-bg.png) no-repeat;
                  border-radius: 10px;

                  img {
                    width: 73px;
                    height: 73px;
                    border-radius: 50%;
                  }
                }

                span {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
