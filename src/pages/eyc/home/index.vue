<template>

  <div class="eyc-new-index">
    <div class="banner-wrap">
      <div class="carouse">
        <el-carousel :interval="5000" arrow="always" height="482px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt="" style="width:100%">
            </a>
            <img :src="item.img" alt="" v-else style="width:100%">
          </el-carousel-item>
        </el-carousel>
        <div class="login_cont2" v-if="!userinfo">
          <p class="login-title">登入帐号 / User login</p>
          <ul>
            <li>
              <input type="text" v-model="passKey.userName" placeholder="帐号" tabindex="1" @blur="getCode" maxlength="20" >
              <span class="login-title1"></span>
            </li>
            <li>
              <input type="password" v-model="passKey.password" placeholder="密码" autocomplete="off" tabindex="2" maxlength="20" >
              <span class="login-title2"></span>
            </li>
            <li  v-if="code_show">
              <input name="rmNum" v-model="passKey.code" type="text" id="rmNum" placeholder="验证码" tabindex="3" maxlength="4" >
              <img class="code" :src="codeImg" @click="getCode">
              <span class="login-title3"></span>
            </li>
            <li class="text-left">
              <a href="javascript:void(0)" onclick="alert('忘记帐号，请联系在线客服人员取回！');">忘记密码？</a>
              <a href="javascript:void(0);" @click="loginTest">免费试玩</a>
            </li>
            <li>
              <input type="button" value="登录" @click="login()" style="width: 46%;">
              <input type="button" value="注册" @click="$router.push('/home/register')" style="width: 46%;">
            </li>
          </ul>
        </div>
        <!-- 登录后 -->
        <div class="login_cont2" v-if="userinfo">
          <p class="login-title">用户信息 / User Info</p>
          <dl>
            <dd>帐号：{{userinfo.userName}}</dd>
            <dd>余额：<span>{{userinfo&&userinfo.balance}}</span>
              <img class="refresh" src="/static/eyc/img/icon/refresh.png" @click="getBalance">
            </dd>
            <dd>
              <a href="javascript:void(0)" @click="goUserCen('personage',1)">下注记录</a>
              <a>|</a>
              <a href="javascript:void(0)" @click="goUserCen('recharge',0)">线上存款</a>
              <a>|</a>
              <a href="javascript:void(0)" @click="goUserCen('withdraw',0)">线上取款</a>
              <!-- <a>|</a>
              <a href="javascript:void(0)" @click="goUserCen('agency',0)">代理中心</a> -->
              <a>|</a>
              <a href="javascript:void(0)" @click="goUserCen('message',0)">站内信</a>
            </dd>
            <dd><a class="userCenter" href="javascript:void(0)" @click="goUserCen('personage',0)">会员中心</a></dd>
            <dd><a class="logout" href="javascript:void(0)" @click="logout">立即登出</a></dd>
          </dl>
        </div>
      </div>
      <News></News>
    </div>
    <div class="main">
      <div class="hotLottery-wrap">
        <div class="hotLottery w1200">
          <div class="title"></div>
          <div class="content clearfix">
            <div class="item fl clearfix" v-for="lottery in lotteryList1" :key="lottery.router">
              <div class="fl">
                <img :src="lottery.ico" alt="">
              </div>
              <div class="fr">
                <div class="name">{{lottery.name}}</div>
                <div class="en">{{lottery.en}}</div>
                <a class="path" href="javascript:void(0)" target="_blank" @click="goto(lottery)">进入游戏</a>
              </div>
            </div>



            <!-- <div class="item fl clearfix" v-for="lottery in lotteryList" :key="lottery.router">
              <div class="fl">
                <img :src="lottery.ico" alt="">
              </div>
              <div class="fr">
                <div class="name">{{lottery.name}}</div>
                <div class="en">{{lottery.en}}</div>
                <a class="path" href="javascript:void(0)" target="_blank" @click="goto(lottery)">进入游戏</a>
              </div>
            </div> -->

          </div>
        </div>
      </div>
      <div class="w1200">
        <div class="gameList">
          <div class="title"></div>
          <div class="content clearfix">
            <div class="lottery fl" @click="$router.push('/plays/hall')">
              <div class="link">
                <div class="name">彩票游戏</div>
                <div class="en">LOTTERY GAME</div>
              </div>
            </div>
            <div class="real fl" @click="$router.push('/home/live')">
              <div class="link link1">
                <div class="name">真人视讯</div>
                <div class="en">CASINO LIVE</div>
              </div>
            </div>
            <div class="fr">
              <div class="egame" @click="$router.push('/home/games')">
                <div class="link link1">
                  <div class="name">电子游艺</div>
                  <div class="en">CASINO GAME</div>
                </div>
              </div>
              <div class="sport" @click="$router.push('/home/sports')">
                <div class="link link1">
                  <div class="name">体育赛事</div>
                  <div class="en">SPORTS EVENTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import News from './news'
  import UserService from '@/service/public/UserService.js'
  import {postS,getS} from '@/service/public/service.js'

  export default {
    components: {News},
    data () {
      return {
        passKey: {},
        codeImg: '/static/eyc/img/code.jpg',
        popups: '',
        showPopout: false,
        code_show: parseInt(localStorage.is_code_show),
        count:0,
        showReload:false,
        // 游戏类型
        //   @click="goto({'path':`/rules/${$route.meta.series}`,query:{id:$route.meta.id}})"
        lotteryList1: [
          {
            name: '北京赛车',
            router: '#/plays/tradition/2',
            en: 'BEIJIN CAR',
            ico: '/static/public/image/lottery/nico/png/2.png'
          },
          {
            name: '重庆时时彩',
            router: '#/plays/tradition/4',
            en: 'ALWAYS COLOR',
            ico: '/static/public/image/lottery/nico/png/4.png'
          },
          {
            name: '幸运飞艇',
            router: '#/plays/tradition/3',
            en: 'LUCKY AIRSHIP',
            ico: '/static/public/image/lottery/nico/png/3.png'
          },
          {
            name: '幸运农场',
            router: '#/plays/tradition/6',
            en: 'LUCKY FARM',
            ico: '/static/public/image/lottery/nico/png/6.png'
          },
          {
            name: '广东11选5',
            router: '#/plays/tradition/7',
            en: '11 ELECTION 5',
            ico: '/static/public/image/lottery/nico/png/7.png'
          },
          {
            name: '广东快乐十分',
            router: '#/plays/tradition/5',
            en: 'VERY HAPPY',
            ico: '/static/public/image/lottery/nico/png/5.png'
          },
          {
            name: '江苏快三',
            router: '#/plays/tradition/2904',
            en: 'JIANGSU FAST 3',
            ico: '/static/public/image/lottery/nico/png/2904.png'
          },
          {
            name: '天津时时彩',
            router: '#/plays/tradition/15',
            en: 'ALWAYS COLOR',
            ico: '/static/public/image/lottery/nico/png/15.png'
          }
        ],

         lotteryList: [
          {
            name: '北京赛车',
            router: '#/plays/tradition/2',
            en: 'BEIJIN CAR',
            ico: '/static/eyc/img/lottery/bjsc.png'
          },
          {
            name: '重庆时时彩',
            router: '#/plays/tradition/4',
            en: 'ALWAYS COLOR',
            ico: '/static/eyc/img/lottery/cqssc.png'
          },
          {
            name: '幸运飞艇',
            router: '#/plays/tradition/3',
            en: 'LUCKY AIRSHIP',
            ico: '/static/eyc/img/lottery/xyft.png'
          },
          {
            name: '幸运农场',
            router: '#/plays/tradition/6',
            en: 'LUCKY FARM',
            ico: '/static/eyc/img/lottery/xync.png'
          },
          {
            name: '广东11选5',
            router: '#/plays/tradition/7',
            en: '11 ELECTION 5',
            ico: '/static/eyc/img/lottery/gd11x5.png'
          },
          {
            name: '广东快乐十分',
            router: '#/plays/tradition/5',
            en: 'VERY HAPPY',
            ico: '/static/eyc/img/lottery/gdklsf.png'
          },
          {
            name: '江苏快三',
            router: '#/plays/tradition/2904',
            en: 'JIANGSU FAST 3',
            ico: '/static/eyc/img/lottery/jsks.png'
          },
          {
            name: '天津时时彩',
            router: '#/plays/tradition/15',
            en: 'ALWAYS COLOR',
            ico: '/static/eyc/img/lottery/tjssc.png'
          }
        ],
        // 轮播设置
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'none',
          trigger: 'click',
          arrow: 'hover',
          arrow2: 'never'
        },
        // 轮播名单
        carouselData: []
      }
    },
    methods: {
      logout () {
        UserService.logout.call(this)
      },
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      },
      getCode () {
        if (!this.passKey.userName) {
          alert('请输入帐号！')
          return false
        }
        if (this.passKey.userName.length < 5) {
          return false
        }
       getS(`captcha`,{ userName: this.passKey.userName } ).then(res => {
        if (res.code == 200) {
          this.codeImg = res.data.captcha_image_text;
          this.passKey.captcha_key = res.data.captcha_key;
        }else{
            this.$store.commit('alert/showTipModel',{
               bool:true,
               title:res.message,
               model:'warn'
            })
        }
      });
      },
      login () {

        if (!this.passKey.userName) {
          alert('请务必输入帐号')
          return false
        }
        if (this.passKey.userName.length < 5) {
          alert('请务必输入5位帐号')
          return false
        }
        if (!this.passKey.password) {
          alert('密码请务必输入')
          return false
        }
        if (this.passKey.password.length < 6) {
          alert('请务必输入6位密码')
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
      goto(item){
           if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                window.open(item.router)
                 return false;
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }
      },
      async  loginTest () {
      let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
        if (res && res.code == 200) {
          UserService.setCache(res, 'test')
          window.location.reload()
        }
      },
      logout () {
        UserService.logout.call(this)
      },
      getBalance () {
        this.showReload = true
        getS(`member/balance`).then(res => {
            if (res.code == 200) {
              let userinfo = JSON.parse(localStorage.userinfo)
              userinfo.balance = res.data.member
              userinfo.agent=res.data.agency
              this.$store.commit('mainState/reloadUserinfo', userinfo)
              this.showReload = false
              alert("刷新余额成功");
            }else{
               alert('服务器报错')
            }
          })
      },
      register () {
        this.$router.push('/home/register')
      },
      kefuFc () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
       },
      async getPopout () {
        if (!this.$store.state.mainState.ifpourT || localStorage.token)
          return false
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'popups',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length) return false
          this.showPopout = true
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      },
      //获取banner
      async getBanner () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
          position: 'banner',
          clientType: 'pc'
        })
        if (res && res.code == 200) {
          this.carouselData = res.data[0] && res.data[0].body
        }
      },
              // 新文字走马灯接口
      async getLantern () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
          type: 'lantern',
          // desc_client_type: 'html'
          client_type:"PC"
        })
        if (res && res.code == 200) {
          // if (!res.data.data.length) return false
          // this.lantern = res.data.data[0] && res.data.data[0].description

          if(res.data.data.length){
            this.lantern = res.data.data[0] && res.data.data[0].description
          }else{  
            console.log("文字走马灯没有数据返回")
            return false;
          }

        }
        // 参数： type: lantern 走马灯
        // 参数： type: popups 弹窗
        // 参数： type: notice 提示
      },
    },

    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    created () {
       this.is_code_show();
      this.$store.commit('hsyl/setNav', 0)
    },
    mounted () {
      // this.getPopout()
      this.getBanner()
    },
    store
  }
</script>

<style lang="less" scoped>
  .eyc-new-index {
    position: relative;
    min-width: 1200px;
    margin: 0 auto;
    background: #ECECED;
    font-size: 16px;
    padding-bottom: 40px;

    .wrapper {
      width: 1200px;
      height: 100%;
      margin: auto;
    }

    .banner-wrap {
      position: relative;

      .popular_game {
        height: 96px;
        background: url("/static/eyc/img/popular_game.png") no-repeat top center;
        background-size: cover;
      }

      .carouse {
        text-align: center;
        width: 100%;
        position: relative;

        /deep/ .el-carousel__indicators {
          bottom: 36px;
        }

        /deep/ .el-carousel__button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .login_cont2 {
          width: 282px;
          height: 368px;
          position: absolute;
          top: 60px;
          right: 210px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 10px;

          .login-title {
            font-size: 22px;
            text-align: center;
            color: #fff;
            padding: 20px 0px;
          }

          li {
            position: relative;
            height: 35px;
            margin: 10px 0px 18px 15px;
            line-height: 35px;
            text-align: left;

            &.text-left {
              text-align: left;
              text-indent: 8px;

              a:hover {
                text-decoration: underline;
              }
            }

            input[type="text"],
            input[type="password"] {
              border: none;
              height: 35px;
              line-height: 35px;
              width: 250px;
              border-radius: 5px;
              padding-left: 45px;
            }

            input[type="button"] {
              border: none;
              width: 250px;
              height: 40px;
              line-height: 40px;
              background: #ef3123;
              color: #fff;
              border-radius: 5px;
              font-size: 18px;
              font-weight: bold;
              cursor: pointer;
              outline: none;
            }

            a {
              color: #fff;
              margin-right: 10px;
              padding: 15px 0px;
            }

            span {
              display: block;
              width: 40px;
              height: 35px;
              background: url(/static/eyc/img/icon/login-title.png) no-repeat center;
              position: absolute;
              top: 0;
              border-right: 1px #ccc solid;
            }

            span.login-title1 {
              background-position: 6px 3px;
            }

            span.login-title2 {
              background-position: 6px -52px;
            }

            span.login-title3 {
              background-position: 6px -108px;
            }

            .code {
              position: absolute;
              cursor: pointer;
              width: 60px;
              height: 33px;
              right: 17px;
              border-radius: 2px;
            }
          }

          dl {
            padding: 0px 20px;
            color: #fff;

            dd {
              margin-top: 10px;
              color: #fff;
              position: relative;

              span {
                color: #ff4a00;
                margin-left: 0;
                cursor: pointer;
              }

              img.refresh {
                margin: 0 5px;
                cursor: pointer;
              }

              a {
                color: #fff;
                margin-right: 5px;
                font-size: 14px;
                margin-top: 10px;
                line-height: 30px;
              }

              a.userCenter,
              a.logout {
                font-size: 16px;
                display: block;
                width: 235px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border: 2px #ec3123 solid;
                border-radius: 3px;
                margin-top: 15px;
              }
            }
          }
        }
      }

      .el-carousel {
        width: 100%;
      }
    }

    .main {
      .hotLottery-wrap {
        background-color: #dbdbdc;
      }
      .hotLottery {
        .title {
          height: 45px;
          background: url(/static/eyc/img/lott-title.jpg) center no-repeat;
          padding: 40px 0px 20px 0px;
        }

        .item {
          width: 286px;
          height: 110px;
          float: left;
          background: #cccccc;
          border-radius: 5px;
          margin: 5px;
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.8);

            .name,
            .en {
              color: #fff;
            }

            .path {
              background: rgba(239, 49, 35, 1);
            }
          }

          img {
            width:96px;
            height:96px;
            margin: 8px 25px 0px 30px;
          }

          .fr {
            width: 130px;
            height: 100%;
            text-align: center;
            padding: 10px;
          }

          .name {
            font-size: 18px;
            font-weight: bold;
            margin: 5px auto;
          }

          .en {
            font-size: 13px;
            font-weight: 400;
            margin-bottom: 5px;
          }

          .path {
            display: block;
            width: 80px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            border-radius: 5px;
            background: #333946;
            color: #fff;
            margin: 10px auto;
          }
        }
      }

      .gameList {
        .title {
          height: 45px;
          background: url(/static/eyc/img/slots-title.jpg) center no-repeat;
          padding: 40px 0px 20px 0px;
        }

        .content {
          height: 382px;

          .lottery {
            width: 591px;
            height: 100%;
            background: url(/static/eyc/img/casino-lott.jpg) center no-repeat;
            position: relative;
            cursor: pointer;
          }

          .real {
            width: 285px;
            position: relative;
            height: 100%;
            background: url(/static/eyc/img/casino-live.jpg) center no-repeat;
            margin: 0px 19px;
            cursor: pointer;
          }

          .egame {
            height: 180px;
            width: 285px;
            background: url(/static/eyc/img/casino-slots.jpg) center no-repeat;
            position: relative;
            cursor: pointer;
          }

          .sport {
            width: 285px;
            height: 180px;
            background: url(/static/eyc/img/casino-sports.jpg) center no-repeat;
            margin-top: 22px;
            position: relative;
            cursor: pointer;
          }

          .link {
            position: absolute;
            width: 100%;
            height: 75px;
            line-height: 37.5px;
            background: url(/static/eyc/img/casino-h.png) top no-repeat;
            left: 0;
            bottom: 0;
            text-indent: 30px;
            color: #fff;
            border-radius: 5px;

            .name {
              font-size: 25px;
            }

            .en {
              font-size: 14px;
            }

            &:hover {
              background-position: left bottom;
              color: #ffff00;
            }
          }

          .link1 {
            background: url(/static/eyc/img/casino-h1.png) top no-repeat;

            &:hover {
              background-position: left bottom;
              color: #ffff00;
            }
          }
        }
      }
    }
  }

  .vp-popout-box {
    /deep/ .ivu-modal {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -328px;
      margin-top: -273px;
    }

    /deep/ .ivu-modal-close {
      z-index: 2;
      top: 6px;

      i {
        color: #fff;
      }
    }

    /deep/ .ivu-modal-header {
      width: 650px;
      height: 34px;
      margin-top: 5px;
      margin-left: 3px;
      padding: 0;
      border-radius: 10px;
      border: 1px solid #494437;
      background: #ff0000 url(/static/eyc/img/ui-bg_gloss-wave_45_817865_500x100.png) 50% 50% repeat-x;
      color: #ffffff;
      font-weight: bold;
      position: relative;
      top: 4px;

      .ivu-modal-header-inner {
        color: #fff;
        line-height: 34px;
        height: 34px;
        padding-left: 15px;
      }
    }

    /deep/ .ivu-modal-footer {
      border-top: 1px solid #cdd5da;

      .ivu-btn-text {
        display: none;
      }

      .ivu-btn-primary {
        background: #ff0000;
        border-color: #ff0000;
        padding: 3px 12px 3px 12px;
        border-radius: 6px;
      }
    }

    .popout-box {
      min-height: 427px;
      font-family: "Microsoft YaHei";
      font-size: 24px;
      line-height: 1.5;
      color: #383838;
    }

    // /deep/
  }
</style>
