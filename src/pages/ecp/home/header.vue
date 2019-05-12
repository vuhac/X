<template>
  <div class="new-header">
    <!-- <div class="cont-top cen">
      <div class="wraper">
        <div v-if="!userinfo" class="login-before">
          <div class="head_logo">
            <p>
              <img src="/static/ecp/img/e_logo.png" alt="">
              PLAY RESPONSIBLY
            </p>
          </div>

          <div class="head_middle">
            <img src="/static/ecp/img/head_middle.png" alt="">
          </div>

          <div class="head_right">
            <div class="input_enter acc">
              <p>
                <input v-model="passKey.userName" @blur="getCode" placeholder="帐号" type="text">
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
            <br/>
            <a class="in_sub" href="javascript:void(0);" @click="login">登录</a>
            <router-link class="in_sub" to="/home/register">注册</router-link>
            <a class="in_sub" href="javascript:void(0);" @click="tryPlay">试玩</a>
            <a class="bt" href="javascript:void(0);" onclick="alert('忘记帐号密码，请联系在线客服人员取回！')">忘记密码</a>
          </div>
        </div>
        <div v-if="userinfo" class="login-after">
          <p class="log_a acc">帐号:<span class="col-advertis-yellow">{{userinfo&&userinfo.userName}}</span></p>
          <p class="log_a balance">余额:<span class="col-advertis-yellow">{{userinfo&&userinfo.balance}}</span></p>
          <a class="link_a1" href="javascript:void(0);" @click="goUserCen('personage',0)">会员中心</a>
          <a class="link_a1" href="javascript:void(0);" @click="goUserCen('agency',0)">申请代理</a>
          <a class="link_a1 link_a2" href="javascript:void(0);" @click="goUserCen('recharge',0)">充值</a>

          <a class="link_a1 link_a2 one" href="javascript:void(0);" @click="goUserCen('withdraw',0)">提款</a>
          <a class="link_a1 link_a2 two" href="#plays/hall" target="_blank">下注</a>
          <a class="link_a1 link_a2 three" href="javascript:void(0);" @click="logout">退出</a>
        </div>
      </div>
    </div> -->

    <div class="cont_top">
      <div class="logo"></div>
      <div class="logo_right"></div>
      <div class="login_er">
				<div class="login_top">
					<ul>
						<li><a @click="tryPlay" target="_blank">免费试玩</a></li> <li>|</li>
						<!-- <li><a href="javascript:void(0)">设为首页</a></li><li>|</li> -->
						<li><a href="https://www.8e00.com/txt/fjc-01.html" target="_blank">防劫持教程</a></li> <li>|</li>
						<li><a target="_blank" href="javascript: void(0)" @click="addFavorite('E彩票')">加入收藏</a></li> <li>|</li>
						<li><a class="box" href="javascript:void(0)">代理加盟</a></li> <li>|</li>
						<li><a class="box" target="_target" href="/static/ecp/html/download/index.html">手机APP下载</a></li><li>|</li>
						<!-- <li><a href="javascript:void(0)">手机版</a></li> -->
						<!-- <li><a href="javascript:void(0)" class="goToMobile"></a></li><li>|</li> -->
						<li><a target="_blank" href="https://www.8e00.com/">导航网址</a></li>
					</ul>
				</div>
				<div class="login_bottom">
          <div class="login_beforn" v-if="!userinfo">
            <div class="open_account"><a @click="$router.push('/home/register')"></a></div>
            <div class="text_right">
              <div class="text_right_top">
                <ul>
                  <li><input type="text" class="username" placeholder="帐号" maxlength="20" v-model="passKey.userName" @blur="getCode" ></li>
                  <li v-if="code_show"><input type="text" class="code" placeholder="验证码" maxlength="4" v-model="passKey.code" @keyup.13="login"></li>
                  <li v-if="code_show" style="margin-left: 3px;"><img :src="codeImg" @click="getCode"  style="width: 60px;height: 25px;"></li>
                </ul>
              </div>
              <div class="text_right_bottom">
                <ul>
                  <li><input type="password" class="password" placeholder="密码" maxlength="20" v-model="passKey.password" @keyup.13="login">
                  <li><a class="btn_log" @click="login"></a></li>
                  <li><a class="pasd" onclick="alert('忘记帐号密码，请联系在线客服人员取回！')">忘记密码？</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="login_enter" v-if="userinfo">
            <div class="login_enter_top">
              <dl>
                <dd>
                  <p><a style="background: url(/static/ecp/img/ai.png) center left no-repeat;" href="#">{{userinfo.userName}}</a></p>
                  <p><a style="color: #f9e284;" @click="logout">退出</a></p>
                </dd>
                <dd class="login_enter_right">
                  <span><a class="balance" >{{userinfo ? userinfo.balance : ''}}</a><a class="refresh_login" @click="getBalance()"></a></span>
                </dd>
              </dl>
            </div>
            <div class="login_enter_bottom">
              <ol>
                <li><a @click="goUserCen('personage',0)">会员中心</a></li> <li>|</li>
                <li><a @click="goUserCen('recharge',0)">存款</a></li> <li>|</li>
                <li><a @click="goUserCen('withdraw',0)">取款</a></li> <li>|</li>
                <li><a @click="goUserCen('personage',1)">投注记录</a></li> <li>|</li>
                <li><a @click="goUserCen('discounts',0)">实时返水</a> </li>
              </ol>
            </div>
          </div>
				</div>
			</div>
    </div>

    <div class="cont-bottom cen">
      <div class="wraper">
        <!-- <div class="logo">
          <img src="/static/ecp/img/logo.png" alt="">
        </div> -->


        <ul class="nav-wrap clearfix">
          <li @click.stop="goTo(item,index)" class="nav" :class="{'navActive':navActive==index&&index!==2}" :key=index
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
                <span class="icon-hot1" v-if="sub.hot"></span>
                <a href="javascript:;">
                  <img :src="sub.icon" alt="">
                </a>
                <span>{{sub.name}}</span>
              </div>
            </div>
          </li>
        </ul>


        <!-- <ul class="nav-wrap clearfix">
          <li @click.stop="goTo(item,index)" class="nav" :class="{'navActive':navActive==index&&index!==2}" :key=index
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
                <span class="icon-hot1" v-if="sub.hot"></span>
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
        codeImg: '/static/ecp/img/yzm.png',
        time: this.getTimes(new Date()),
        code_show: parseInt(localStorage.is_code_show),

         navList1: [
          {
            name: '网站首页',
            tag: 'Home',
            router: '/home'
          },
          {
            name: '购彩大厅',
            tag: 'Lottery',
            router: '/plays/hall',
            hot: true,
            child: [
              {
                name: '北京PK10',
                icon: '/static/public/image/lottery/nico/png/2.png',
                path: '/plays/tradition/2'
              },
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/nico/png/12.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '三分赛车',
                icon: '/static/public/image/lottery/nico/png/13.png',
                path: '/plays/tradition/13',
                hot: true
              },
              {
                name: '幸运飞艇',
                icon: '/static/public/image/lottery/nico/png/3.png',
                path: '/plays/tradition/3',

              },
              {
                name: '幸运农场',
                icon: '/static/public/image/lottery/nico/png/6.png',
                path: '/plays/tradition/6',

              },
              {
                name: '重庆时时彩',
                icon: '/static/public/image/lottery/nico/png/4.png',
                path: '/plays/tradition/4'
              },
              {
                name: '快速时时彩',
                icon: '/static/public/image/lottery/nico/png/16.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '三分时时彩',
                icon: '/static/public/image/lottery/nico/png/17.png',
                path: '/plays/tradition/17',
                hot: true
              },
              {
                name: '香港六合彩',
                icon: '/static/public/image/lottery/nico/png/1.png',
                path: '/plays/tradition/1',
              },
              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/nico/png/16.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/nico/png/9.png',
                path: '/plays/tradition/9'
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/nico/png/7.png',
                path: '/plays/tradition/7'
              },
              {
                name: '天津时时彩',
                icon: '/static/public/image/lottery/nico/png/15.png',
                path: '/plays/tradition/15'
              },
              {
                name: '上海时时乐',
                icon: '/static/public/image/lottery/nico/png/29.png',
                path: '/plays/tradition/29'
              },
              {
                name: '福彩3D',
                icon: '/static/public/image/lottery/nico/png/11.png',
                path: '/plays/tradition/11',
              }
            ]
          },
          {
            name: '六合彩',
            tag: 'Lotto',
            platform: "vr_lottery",
            router:"#/plays/tradition/1",
            className:"vrLottery",
          },
          {
            name: '真人娱乐',
            tag: 'Casino',
            router: '/home/live',
            hot: true
          },
          {name: '棋牌游戏', router: '/home/chess', tag: 'CHESS'},
          {
            name: '体育投注',
            tag: 'Sports',
            router: '/home/sport',
            hot: true,
            child: [
              {
                name: '皇冠体育',
                icon: '/static/ecp/img/hgty.png',
                path: '/home/tiyu',
                id: 39
              },
              {
                name: '沙巴体育',
                icon: '/static/ecp/img/sbty.png',
                path: '/home/tiyu',
                id: 38
              },
              {
                name: 'BBIN体育',
                icon: '/static/ecp/img/bbinty.png',
                path: '/home/tiyu',
                id: 41
              },
               {
                name: 'AG体育',
                icon: '/static/ecp/img/agty.png',
                path: '/home/tiyu',
                id: '40'
              }
            ]
          },
          {
            name: '电子游艺',
            tag: 'Game',
            router: '/home/games?id=10022',
            hot: true
          },
          {
            name: '捕鱼达人',
            tag: 'Fishing',
            router: '/home/buyu'
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
            tag: 'Official'
          }
        ],

        navList: [
          {
            name: '网站首页',
            tag: 'Home',
            router: '/home'
          },
          {
            name: '购彩大厅',
            tag: 'Lottery',
            router: '/plays/hall',
            hot: true,
            child: [
              {
                name: '北京PK10',
                icon: '/static/ecp/img/gf_a3.png',
                path: '/plays/tradition/2'
              },
              {
                name: '快速赛车',
                icon: '/static/ecp/img/kssc.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '三分赛车',
                icon: '/static/ecp/img/sfsc.png',
                path: '/plays/tradition/13',
                hot: true
              },
              {
                name: '幸运飞艇',
                icon: '/static/ecp/img/XYFT.png',
                path: '/plays/tradition/3',

              },
              {
                name: '幸运农场',
                icon: '/static/ecp/img/xync.png',
                path: '/plays/tradition/6',

              },
              {
                name: '重庆时时彩',
                icon: '/static/ecp/img/cqssc.png',
                path: '/plays/tradition/4'
              },
              {
                name: '快速时时彩',
                icon: '/static/ecp/img/ksssc.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '三分时时彩',
                icon: '/static/ecp/img/sfssc.png',
                path: '/plays/tradition/17',
                hot: true
              },
              {
                name: '香港六合彩',
                icon: '/static/ecp/img/xglhc.png',
                path: '/plays/tradition/1',
              },
              {
                name: '快速六合彩',
                icon: '/static/ecp/img/kslhc.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '江苏快三',
                icon: '/static/ecp/img/jsks.png',
                path: '/plays/tradition/9'
              },
              {
                name: '广东11选5',
                icon: '/static/ecp/img/GD11X5.png',
                path: '/plays/tradition/7'
              },
              {
                name: '天津时时彩',
                icon: '/static/ecp/img/gf_a9.png',
                path: '/plays/tradition/15'
              },
              {
                name: '上海时时乐',
                icon: '/static/ecp/img/xy_a11.png',
                path: '/plays/tradition/29'
              },
              {
                name: '福彩3D',
                icon: '/static/ecp/img/fc3d.png',
                path: '/plays/tradition/11',
              }
            ]
          },
          {
            name: 'VR彩票',
            tag: 'VRLOTTERY',
            platform: "vr_lottery",
            router:"/home/games?id=10041&name=VG棋牌",
            className:"vrLottery",
            id:"30"
          },
          {
            name: '真人娱乐',
            tag: 'Casino',
            router: '/home/live',
            hot: true
          },
          {name: '棋牌游戏', router: '/home/chess', tag: 'CHESS'},
          {
            name: '体育投注',
            tag: 'Sports',
            router: '/home/sport',
            hot: true,
            child: [
              {
                name: '皇冠体育',
                icon: '/static/ecp/img/hgty.png',
                path: '/home/tiyu',
                id: 39
              },
              {
                name: '沙巴体育',
                icon: '/static/ecp/img/sbty.png',
                path: '/home/tiyu',
                id: 38
              },
              {
                name: 'BBIN体育',
                icon: '/static/ecp/img/bbinty.png',
                path: '/home/tiyu',
                id: 41
              },
               {
                name: 'AG体育',
                icon: '/static/ecp/img/agty.png',
                path: '/home/tiyu',
                id: 40
              }
            ]
          },
          {
            name: '电子游艺',
            tag: 'Game',
            router: '/home/games?id=10022',
            hot: true
          },
          {
            name: '捕鱼达人',
            tag: 'Fishing',
            router: '/home/buyu'
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
            tag: 'Official'
          }
        ]
      }
    },
    methods: {
      /**
       * 收藏本站
       * @param title
       */
      addFavorite (title) {
        var url = 'http://' + location.hostname + '/'
        try {
          window.external.addFavorite(url, title)
        } catch (e) {
          try {
            window.sidebar.addPanel(title, url, '')
          } catch (e) {
            alert('抱歉，您所使用的浏览器无法完成此操作。\n加入收藏失败，电脑请使用Ctrl+D进行添加')
          }
        }
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
            if (!this.passKey.code) {
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
        this.passKey.device='pc'
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
            alert("刷新余额成功");
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
        if (item.router == '/plays/hall') {
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
        }else if(item.router == '#/plays/tradition/1'){
            if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                 window.open(`${item.router}`)
                 return false;
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }
        }
        if(item.id){
          this.getItemId(item);
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
   .clearfix::after {
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0;
  }
  .clearfix {
    zoom: 1;
  }
  .new-header {
    // background: black;
    background: url(/static/ecp/img/header_top_bj.jpg) center top repeat;
    font-family: "Microsoft Yahei", "SimHei", "SimSun", Geneva, sans-serif;

    .fl {
      float: left;
    }

    .cen {
      width: 1050px;
      margin: 0 auto;
    }

    .cont_top{
      width: 1000px;
      margin: auto;
      height: 115px;

      .logo{
        width: 290px;
        background: url(/static/ecp/img/e_logo.png) center left no-repeat;
        height: 115px;
        float: left;
        cursor: pointer;
      }
      .logo_right{
        background: url(/static/ecp/img/head_middle.png) center 16px no-repeat;
        width: 205px;
        height: 115px;
        float: left;
      }
      .login_er{
        width: 465px;
        height: 115px;
        float: right;

        .login_top{
          height: 40px;
          line-height: 40px;
          width: 506px;
          font-size: 12px;

          li{
            float: right;
            margin-left: 5px;
            color: #92483c;

            a{
              color: #fff;
              &.goToMobile{
                background: url(/static/ecp/img/mobile.png) no-repeat 5px 4px;
                width: 28px;
                height: 28px;
                display: block;
              }
            }
          }
        }
        .login_bottom {
          height: 74px;

          .open_account a {
            display: block;
            background: url(/static/ecp/img/register.png) no-repeat;
            width: 120px;
            height: 60px;
            float: left;
            &:hover {
              background: url(/static/ecp/img/register.png) no-repeat;
              background-position: 0px -60px;
            }
          }
          .text_right {
            width: 310px;
            height: 74px;
            float: right;

            .text_right_top{
              height: 28px;

              li {
                float: left;
                input {
                  color: #b06f60;
                  outline: none;
                  background:linear-gradient(#3f0400,#4d0600,#4d0600) ;
                  font-size: 10px;
                  padding: 0 3px;
                  text-indent: 3px;

                  &.username {
                    // background: url(/static/ecp/img/username_txt.png) no-repeat;
                    // background:linear-gradient(#3f0400,#4d0600,#4d0600) ;
                    // border: none;
                    border-radius: 3px;
                    width: 150px;
                    height: 25px;
                    border: 1px #881209 solid;

                  }
                  &.code {
                    // background: url(/static/ecp/img/code_txt.png) no-repeat;
                    width: 70px;
                    height: 25px;
                    border: 1px #881209 solid;
                    border-radius: 3px;
                    margin-left: 10px;
                  }
                }
              }
            }
            .text_right_bottom {
              margin-top: 5px;

              li {
                float: left;
                height: 25px;
                line-height: 25px;

                input{
                  color: #b06f60;
                  font-size: 10px;
                  padding: 0 3px;
                  outline: none;
                  text-indent: 3px;

                  &.password {
                    background:linear-gradient(#3f0400,#4d0600,#4d0600) ;
                    border: none;
                    border-radius: 3px;
                    width: 150px;
                    height: 25px;
                    border: 1px #881209 solid;
                  }
                }

                .btn_log {
                  display: block;
                  background: url(/static/ecp/img/Login_btn.png) center no-repeat;
                  width: 70px;
                  height: 25px;
                  margin-left: 10px;
                  margin-top: 1px;
                }
                .pasd {
                  margin-left: 13px;
                  color: #f8eeab;
                  position: absolute;
                  font-size: 12px;
                }
              }
            }
          }


          .login_enter {
            border: 1px #d73939 solid;
            width: 350px;
            height: 65px;
            float: right;
            border-radius: 3px;

            .login_enter_top {
              border-bottom: 1px #d73939 solid;
              height: 33px;
              line-height: 33px;

              dl dd {
                float: left;
                width: 174px;
                height: 33px;
                line-height: 33px;
                &.login_enter_right {
                  background: #a90909;
                }

                p {
                  float: left;
                  height: 33px;
                  line-height: 33px;
                  width: 85px;
                  text-align: center;

                  a {
                    padding-left: 25px;
                    color: #fff;
                    font-size: 13px;
                  }
                }
                span a {
                  display: block;
                  float: left;
                  color: #fff;
                  font-size: 12px;

                  &.balance {
                    width: 140px;
                    padding-left: 5px;
                  }
                  &.refresh_login {
                    background: url(/static/ecp/img/shuaxin.png) center right no-repeat;
                    width: 20px;
                    height: 33px;
                  }
                }
              }
            }
            .login_enter_bottom ol li {
              float: left;
              line-height: 32px;
              margin-left: 14px;
              color: #fff;

              a{
                color: #fff;
                font-size: 12px;
              }


            }
          }

        }
      }
    }

    // .cont-top {
    //   width: 100%;
    //   min-width: 1200px;
    //   height: 112px;
    //   overflow: hidden;
    //   background-color: #272524;

    //   .wraper {
    //     width: 1200px;
    //     margin: 0 auto;

    //     &::after {
    //       content: "";
    //       display: block;
    //       clear: both;
    //     }

    //     .login-before {
    //       .head_logo {
    //         position: relative;
    //         // width: 180px;
    //         left: 10px;
    //         height: auto;
    //         font-style: italic;
    //         line-height: 50px;
    //         font-size: 16px;
    //         color: #ffffff;
    //         float: left;

    //         p {
    //           float: left;
    //           font-size: 14px;
    //           line-height: 55px;
    //           white-space: nowrap;

    //           img {
    //             float: left;
    //             margin-top: 10px;
    //             margin-right: 7px;
    //           }
    //         }
    //       }

    //       .head_middle{
    //         float: left;
    //         width: 400px;
    //         height: 112px;
    //         position: relative;
    //         img{
    //           position: absolute;
    //           top: 50%;
    //           left: 50%;
    //           margin-left: -92.5px;
    //           margin-top: -28px;
    //         }
    //       }

    //       .head_right {
    //         // padding-left: 30px;
    //         float: right;
    //         margin-top: 8px ;

    //         &::after {
    //           content: "";
    //           display: block;
    //           clear: both;
    //         }

    //         .input_enter {
    //           float: left;

    //           p {
    //             width: 160px;
    //             height: 38px;
    //             overflow: hidden;
    //             float: left;
    //             margin-top: 7px;
    //             margin-right: 12px;

    //             input {
    //               width: 160px;
    //               height: 38px;
    //               line-height: 38px;
    //               vertical-align: middle;
    //               font-size: 14px;
    //               color: #ffffff;
    //               background-color: transparent;
    //               outline: none;
    //               box-sizing: border-box;
    //               padding-left: 45px;
    //               border: 0;
    //               text-indent: 5px;
    //             }
    //           }

    //           &.acc {
    //             p {
    //               background: url(/static/ecp/img/input_user_bg.png) no-repeat;
    //             }
    //           }

    //           &.pas {
    //             p {
    //               background: url(/static/ecp/img/input_pass_bg.png) no-repeat;
    //             }
    //           }

    //           &.code {
    //             position: relative;
    //             width: 145px;
    //             margin-top: 2px;

    //             p {
    //               background: url(/static/ecp/img/input_code_bg.png) no-repeat;
    //             }

    //             input {
    //               padding-left: 10px;
    //               height: 32px;
    //             }

    //             .img {
    //               float: left;
    //               margin-top: 2px;
    //               margin-left: 10px;

    //               img {
    //                 width: 60px;
    //                 height: 27px;
    //                 position: absolute;
    //                 right: 3px;
    //                 top: 9px;
    //                 cursor: pointer;
    //                 border-radius: 0 18px 18px 0;
    //               }
    //             }
    //           }
    //         }

    //         .in_sub {
    //           display: block;
    //           width: 100px;
    //           height: 35px;
    //           line-height: 34px;
    //           float: left;
    //           margin-top: 7px;
    //           margin-left: 10px;
    //           font-size: 14px;
    //           text-align: center;
    //           color: #ffffff;
    //           cursor: pointer;
    //           background: #b62929;
    //           border-radius: 30px;
    //         }

    //         .bt {
    //           display: block;
    //           width: 60px;
    //           height: 35px;
    //           line-height: 34px;
    //           float: left;
    //           margin-top: 7px;
    //           margin-left: 8px;
    //           font-size: 14px;
    //           text-align: center;
    //           color: #ffffff;
    //           cursor: pointer;
    //         }
    //       }
    //     }

    //     .login-after {
    //       .log_a {
    //         width: 195px;
    //         height: 44px;
    //         overflow: hidden;
    //         float: left;
    //         margin-top: 6px;
    //         line-height: 40px;
    //         vertical-align: middle;
    //         font-size: 14px;
    //         color: #ffffff;
    //         text-indent: 45px;
    //         margin-right: 10px;

    //         &.acc {
    //           background: url(/static/ecp/img/log_bg.png) left top no-repeat;
    //         }

    //         &.balance {
    //           background: url(/static/ecp/img/log_bg.png) left -44px no-repeat;
    //         }
    //       }

    //       .link_a1 {
    //         display: block;
    //         width: 108px;
    //         height: 50px;
    //         overflow: hidden;
    //         float: left;
    //         padding-left: 43px;
    //         font-size: 16px;
    //         color: #ffffff;
    //         line-height: 50px;
    //         box-sizing: border-box;
    //         margin-right: 8px;
    //         background: url(/static/ecp/img/head_link_bg.png) -108px 7px no-repeat;

    //         &:hover {
    //           text-decoration: none;
    //           color: #ffd830;
    //           background: url(/static/ecp/img/head_link_bg.png) -108px -66px
    //           no-repeat;
    //         }
    //       }

    //       .link_a2 {
    //         width: 90px;

    //         &.one {
    //           background: url(/static/ecp/img/head_link_bg.png) left 7px no-repeat;

    //           &:hover {
    //             text-decoration: none;
    //             color: #ffd830;
    //             background: url(/static/ecp/img/head_link_bg.png) left -66px no-repeat;
    //           }
    //         }

    //         &.two {
    //           background: url(/static/ecp/img/head_link_bg.png) -320px 7px no-repeat;

    //           &:hover {
    //             text-decoration: none;
    //             color: #ffd830;
    //             background: url(/static/ecp/img/head_link_bg.png) -320px -66px
    //             no-repeat;
    //           }
    //         }

    //         &.three {
    //           background: url(/static/ecp/img/head_link_bg.png) -428px 7px no-repeat;

    //           &:hover {
    //             text-decoration: none;
    //             color: #ffd830;
    //             background: url(/static/ecp/img/head_link_bg.png) -428px -66px
    //             no-repeat;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    .cont-bottom {
      @h: 66px;
      width: 100%;
      min-width: 1000px;
      height: @h;
      background: #b62929;
      border-top: 1px solid #d1bfa5;
      border-bottom: 1px solid #d1bfa5;

      .wraper {
        width: 1097px;
        margin: 0 auto;
        display: flex;
        &::after {
          content: "";
          display: block;
          clear: both;
        }

        // .logo {
        //   width: 215px;
        //   height: 76px;

        //   img {
        //     width: 188px;
        //     height: @h;
        //   }
        // }

        .nav-wrap {

          li {
            position: relative;
            display: inline-block;
            height: 66px;
            list-style: none;
            font-size: 15px;

            &:hover .sub-nav {
              display: block;
              transform: translateX(-50%);
            }

            &.navActive {
              background: #f14a4a;
            }

            a {
              display: block;
              height: @h;
              text-decoration: none;
              overflow: hidden;
              color: #ffffff;
              font-size: 15px;
              padding: 0 24px;
              text-align: center;

              &:hover {
                 background: #f14a4a;
              }

              span {
                display: block;
                padding-top: 18px;

                b {
                  line-height: 23px;
                  font-size: 12px;
                  font-weight: normal;
                }
              }
            }

            .icon-hot1 {
              background: url(/static/ecp/img/hot1.gif);
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
              top: 66px;
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
                width: 0;
                height: 0;
                border-width: 0 8px 10px;
                border-style: solid;
                border-color: transparent transparent rgba(0, 0, 0, 0.8); /*透明 透明  灰*/
                margin: 40px auto;
                top: -49px;
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
                  background: url(/static/ecp/img/game-icon-bg.png) no-repeat;
                  border-radius: 10px;

                  img {
                    // width: 73px;
                    // height: 73px;
                    width:60px;
                    border-radius: 50%;
                    margin-top:8px;

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
