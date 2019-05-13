<template>
  <div class="header">
    <div class="top">
      <div class="container">
        <div class="left">
          <a href="javascript:;" @click="goAent">
            合作代理
            <i></i>
          </a>
          <a href="javascript:;" @click="paizhaoShow=true">牌照展示</a>
          <div class="licenseShow" v-if="paizhaoShow">
            <div class="licenseImg">
              <div class="btn-close" @click="paizhaoShow=false">X</div>
              <img src="/static/ly88/img/license.1e6acc5.jpg" alt>
            </div>
          </div>
        </div>
        <!-- login before -->
        <div class="right fr" v-if="!userinfo">
          <a href="https://d3373.com"  class="netlink" style="float:left">备用网址</a>
          <a href="javascript:;" class="i-btn btn001" @click="loginView=true">登录</a>
          <!-- registerView=true" -->
          <a href="javascript:void(0);" @click="registerView=true" class="i-btn btn002">快速注册</a>
          <a href="javascript:void(0);" target="_blank" class="i-btn btn003" @click="goKefu">在线客服</a>
          <a
            href="javascript:void(0);"
            class="i-btn"
            style="margin-left: 10px; color: rgb(255, 255, 0);"
            @click="forget"
          >忘记密码?</a>
        </div>
        <div class="right fr" v-if="userinfo" style="color:#fff;">
          <a href="https://d3373.com" class="netlink" style="float:left">备用网址</a>
          <div class="fr">
            <a href="javascript:;" @click="goUserCen('personage',0)" class="ml active">
              <span>用户中心</span>
            </a>
            <a href="javascript:void(0);"  @click="logout();" class="ml">退出</a>
            <!-- <a href="javascript:void(0);" class="btn001 i-btn btn-other">签到</a> -->
            <a
              href="javascript:void(0);"
              target="_blank"
              class="i-btn btn003 ml"
              @click="goKefu"
            >在线客服</a>
          </div>
          <div class="fr" style="margin-right: 12px;">
            <div class="fl">
              <div class="i-item">
                Hi,
                <span>{{userinfo.userName}}</span>
              </div>
              <div class="i-item">
                主帐号余额：
                <span>{{userinfo ? userinfo.balance : ''}}</span>
                <a href="javascript:void(0);" @click="getBalance" class="iconfont icon-shuaxin"></a>
              </div>
              <a href="javascript:void(0);"  @click="goUserCen('recharge',0)"  class="ml router-link-exact-active active">
                <span>存款</span>
              </a>
              <a href="javascript:void(0);"  class="ml" @click="goUserCen('recharge',0)">
                <span>转帐</span>
              </a>
              <a href="javascript:void(0);" @click="goUserCen('withdraw',0)"  class="ml">
                <span>取款</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-wr">
      <div class="nav">
        <a @click="goView({link:'/home',num:1})" href="javascript:;" class="logo">
          <img src="/static/ly88/img/logo.png" style="height:68px;margin-top:-8px;width:180px;background:100%" >
        </a>
        <div class="fr nav-link">
          <a href="javascript:;"  @click="goView({link:'/home',num:1})" class="router-link-exact-active" :class="{active:navId==1}">
            <span class="navicon navicon1"></span>首页
          </a>
          <a class="trueSport"  @click="goView({link:'/plays/hall',num:2})" :class="{active:navId==2}">
            <span class="navicon navicon11"></span>彩票游戏
            <!-- <div class="sportlist">
              <a target="_blank" href="/game/gameVR.php">VR彩票</a>
              <a target="_blank" href="/game/gameIG.php?gameId=BJC&amp;deviceType=pc">IG时时彩</a>
              <a target="_blank" href="/game/gameIG.php?gameId=-1&amp;deviceType=pc">IG香港彩</a>
              <a target="_blank" href="/game/gameCB.php?deviceType=PC">彩播彩票</a>
            </div> -->
          </a>
          <a class="trueSport" @click="goView({link:'/home/qipai',num:3})" :class="{active:navId==3}">
            <span class="navicon navicon10"></span>棋牌游戏
            <!-- <div class="sportlist">
              <a href="/chessHall/City761" class>761棋牌</a>
              <a href="/chessHall/KYQP" class>开元棋牌</a>
              <a href="/chessHall/LGQP" class>幸运棋牌</a>
              <a href="/chessHall/BY" class>BY棋牌</a>
              <a href="/chessHall/DTQP" class>DT棋牌</a>
            </div> -->
            <div class="sportlist">
              <div class="sportItem" v-for="(item,i) in chessgame" :key="i">
                  <span href="javascript:;" v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">{{v.name}}</span>
              </div>
            </div>

          </a>
          <a class="trueMan" @click="goView({link:'/home/live',num:4})" :class="{active:navId==4}">
            <span class="navicon navicon3"></span>真人娱乐
            <div class="ag-ebet">
              <!-- <div target="_blank" href="/gameAginReal.php">AG真人</div>
              <div target="_blank" href="/game/loginBBIN.php?gameType=live">BBIN真人</div>
              <div target="_blank" href="/game/gameOG.php">OG真人</div>
              <div target="_blank" href="/game/gameSUNBET.php">SUNBET真人</div>
              <div target="_blank" href="/game/gameDGLIVE.php?deviceType=PC">DG真人</div> -->
              <div class="sportItem" v-for="(item,i) in livegame" :key="i">
                  <span href="javascript:;" v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">{{v.name}}</span>
              </div>
            </div>
          </a>
           <a class="trueSport" @click="goView({link:'/home/buyu',num:5})" :class="{active:navId==5}">
            <span class="navicon navicon4"></span>捕鱼达人
            <!-- <div class="sportlist">
              <a target="_blank" href="/gameAgFish.php">AG捕鱼</a>
              <a
                target="_blank"
                href="/game/gameMW.php?gameId=1051&amp;isfun=0&amp;deviceType=pc"
              >MW捕鱼</a>
              <a target="_blank" href="/game/gameJDBFISH.php?gameId=7-7003&amp;isfun=0">JDB捕鱼</a>
            </div> -->
          </a>
          <a href="javascript:;" @click="goView({link:'/home/games?id=10024&name=PT老虎机',num:6})" class="trueMan" :class="{active:navId==6}">
            <span class="navicon navicon2"></span>电子游艺
            <div class="slot_menu">
              <a href="/slotgame/PT" class>PT老虎机</a>
              <a href="/slotgame/DT" class>DT老虎机</a>
              <a href="/slotgame/NT" class>NT老虎机</a>
              <a href="/slotgame/MG" class>MG老虎机</a>
              <a href="/slotgame/PNG" class>PNG老虎机</a>
              <a href="/slotgame/QT" class>QT老虎机</a>
              <a href="/slotgame/TGP" class>TGP老虎机</a>
              <a href="/slotgame/CQ9" class>CQ9老虎机</a>
              <a href="/slotgame/RTG" class>RTG老虎机</a>
              <a href="/slotgame/SW" class>SW老虎机</a>
              <a href="/slotgame/MWSLOT" class>MW老虎机</a>
              <a href="/slotgame/PG" class>PG老虎机</a>
              <a href="/slotgame/AMEBA" class>AMEBA老虎机</a>
              <a href="/slotgame/BBSLOT" class>BBIN老虎机</a>
              <a href="/slotgame/LG" class>LG老虎机</a>
              <a href="/slotgame/JDBSLOT" class>JDB老虎机</a>
              <a href="/slotgame/WM" class>WM老虎机</a>
            </div>
          </a>

          <a  @click="goView({link:'/home/tiyu',num:7})" class="trueSport" :class="{active:navId==7}">
            <span class="navicon navicon9"></span>体育赛事
            <div class="sportlist">
              <!-- <a target="_blank" href="/game/loginSB.php">皇冠体育</a>
              <a target="_blank" href="/game/gamePBSPORT.php">沙巴体育</a>
              <a target="_blank" href="/game/gameUG.php?deviceType=PC">BBIN体育</a>
              <a target="_blank" href="/game/gameUG.php?deviceType=PC">AG体育</a> -->
              <div class="sportItem" v-for="(item,i) in sportsGame" :key="i">
                  <span href="javascript:;" v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">{{v.name}}</span>
              </div>
            </div>
          </a>
           <a href="javascript:void(0);" @click="goView({link:'/home/youhui',num:8})" :class="{active:navId==8}">
            <span class="navicon navicon5"></span>优惠活动
          </a>
          <a href="javascript:void(0);" @click="goKefu">
            <span class="navicon navicon8"></span>在线客服
          </a>
        </div>
      </div>
    </div>
    <div class="modal fade in" v-if="loginView">
      <div class="modal-dialog popup">
        <div class="close" @click="closeLogin">
          <i class="iconfont icon-close" style="font-size: 40px;"></i>
        </div>
        <div class="pop-content">
          <h2 class="tips">会员登录</h2>
          <div class="form-box">
            <div class="form-group">
              <i class="iconfont icon-yonghu"></i>
              <input type="text" tabindex="1" class="ps-input ps-input1" maxlength="20" placeholder="账号(6-10位数字和字母)" id="userName" v-model="passKey.userName" @blur="getCode">
            </div>
            <div class="form-group">
              <i class="iconfont icon-mima"></i>
              <input maxlength="16" class="ps-input inpt-pwd" tabindex="2" :type="isShowPassword?'password':'text'" placeholder="密   码(6-16位数字或字母）" v-model="passKey.password" v-on:keyup.enter="login">
              <span class="pubeyes iconfont icon-yanjing" @click="isShowPassword = !isShowPassword"></span>
            </div>
            <div class="form-group">
              <i class="iconfont icon-yanzhengma"></i>
              <input type="text" placeholder="验证码"   tabindex="3" v-model="passKey.code" v-on:keyup.enter="login"  maxlength="4" class="ps-input ps-input2">
              <a href="javascript:;" @click="getCode" class="captcha-code icon_popup">
                <img :src="codeImg">
              </a>
            </div>
            <span class="validate"></span>
            <input
              type="submit"
              id="submit_user"
               @click="login"
              value="提交"
              class="submit"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade in" v-if="registerView">
      <div class="modal-dialog popup">
        <div class="close" @click="closeRegister">
          <i class="iconfont icon-close" style="font-size: 40px;"></i>
        </div>
        <div class="pop-content">
          <h2 class="tips">注册成为会员</h2>
          <div class="form-box">
            <div class="form-group">
              <i class="iconfont icon-yonghu"></i>
              <input
                type="text"
                placeholder="账号(6-10位数字和字母)"
                maxlength="10" @keydown="pulicError=''"  @blur="getCode" v-on:keyup.enter="registerTest"
                     v-model="passKey.userName"
                class="ps-input ps-input1"
              >
            </div>
            <div class="form-group">
              <i class="iconfont icon-mima"></i>
              <input
                :type="isShowPassword11?'password':'text'"
                autocomplete="off"
                placeholder="密   码(8-20位数字或字母）"
                maxlength="20" @keydown="pulicError=''"  v-on:keyup.enter="registerTest"
                     v-model="passKey.password"
                class="ps-input inpt-pwd"
              >
              <span class="pubeyes iconfont icon-yanjing" @click="isShowPassword11 = !isShowPassword11"></span>
            </div>
            <div class="form-group">
                <i class="iconfont icon-mima"></i>
                <input
                @keydown="pulicError=''" v-on:keyup.enter="registerTest" :type="isShowPassword22?'password':'text'" placeholder="请重复密码" type="password"
                     v-model="passKey.password_confirmation"
                class="ps-input inpt-pwd"
              >
              <span class="pubeyes iconfont icon-yanjing" @click="isShowPassword22 = !isShowPassword22"></span>
            </div>
            <div class="form-group" v-for="(item,index) in register">
              <i :class="item.ico"></i>
              <input
                @keydown="pulicError=''" v-on:keyup.enter="registerTest" :placeholder="item.placeholder" type="text"
                     v-model="item.value"
                class="ps-input ps-input1"
              >
            </div>
            <div class="form-group">
              <i class="iconfont icon-yanzhengma"></i>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请输入验证码" type="text"
                     v-model="passKey.code" class="ps-input ps-input2">
              <!-- <a href="javascript:;" @click="getCode" class="captcha-code icon_popup">
                <img :src="codeImg">
              </a> -->
              <a href="javascript:;" class="yzm_reg captcha-code icon_popup" >
                  <img class="checkLoginCodeImage" @click="getCode" :src="codeImg" >
              </a>

            </div>


            <div class="form-group" v-if='iscode'>
              <i class="iconfont icon-yanzhengma"></i>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请输入邀请码" type="text"
                     v-model="intacode"  :readonly="incodeReadonly" id="incode" class="ps-input inpt-pwd">
            </div>
            <span class="validate"></span>
            <input id="submit_user" value="提交" class="submit" @click="registerTest">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/service/public/UserService.js";
import store from "@/vuex/store";
import {_SetPost,postS,getS} from '@/service/public/service.js'
// import { postS, getS } from "@/service/public/service.js";
// import $ from "jquery";
import data from '../../public/games/public.js'
export default {
  mixins: [data],
  data() {
    return {
      navId:1,
      passKey: {
        //  userName:'',
        //  password: '',
        //  code:''
      },
      isShowPassword:true,
      isShowPassword11:true,
      isShowPassword22:true,
      loginView: false,
      registerView: false,
      paizhaoShow: false,
      // password_confirmation: '',
      // code:'',
      // codeImg: "/static/dqr/img/yzm.png",
      // time: this.getTimes(new Date()),
      // code_show: parseInt(localStorage.is_code_show),
      userName: '',
      intacode:'',
      password: '',
      password_confirmation: '',
      phoneNumber: '',
      pulicError: '',
      register: [],
      codeImg: '/static/public/image/common/code.jpg',
      captcha_key: '',
      code: '',
      agent: null,
      iscode:false,
      islink:true,
      incodeReadonly: false,
      nvaList: [
        {
          name: "彩票游戏",
          href: "/plays/hall",
          id: "lottery",
          class: "navlottery"
        },
        { name: "体育赛事", href: "/home/tiyu", id: "sport", class: "navsp" },
        { name: "真人娱乐", href: "/home/live", id: "lives", class: "navtv" },
        { name: "电子游艺", href: "/home/games", id: "game", class: "navcp" },
        { name: "捕鱼游戏", href: "/home/buyu", id: "byw", class: "navbyw" },
        { name: "棋牌游戏", href: "/home/qipai", id: "chess", class: "navqp" }
      ],
      sportsGame: [
          {
            name: '体育赛事',
            text: 'SPORTS',

            list: [
              {
                name: '皇冠体育',
                id: '39',
                 platform: 'sport',
              },
              {
                name: '沙巴体育',
                id: '38',
                 platform: 'sport',
              },
              {
                name: 'BBIN体育',
                id: '41',
                 platform: 'sport',
              },
              {
                name: 'AG体育',
                id: '40',
                 platform: 'sport',
              }
            ]
          }
        ],
      isShowKey: "",
      navMenuList: [],
      livegame:[
        {
            name: '真人娱乐',
            text: 'LIVE CASINO',
            link: '/home/live',
            platform: 'live_casino',
            hotShow: true,
            list: [
              {
                name: 'AG视讯',
                id: '31'
              },
              {
                name: 'BBIN视讯',
                id: '32'
              },
              {
                name: 'BG视讯',
                id: '3180'
              },
              {
                name: 'DG视讯',
                id: '42'
              },
              {
                name: 'DS视讯',
                id: '34'
              },
              {
                name: 'LEBO视讯',
                id: '44'
              },
              {
                name: 'OG视讯',
                id: '48'
              },
              {
                name: 'eBET视讯',
                id: '43'
              },
              {
                name: 'LMG视讯',

                id: '45'
              },
              {
                name: '欧博视讯',
                id: '46'
              },
              {
                name: 'SA视讯',
                id: '49'
              }
            ]
          },
      ],
      chessgame:[
        {
            name: '棋牌游戏',
            text: 'CHESS',
            platform: 'KY_CHESS',
            hotShow: true,
            gameName: '0',
            list: [
              {
                name: '斗地主',
                gameName: '610',
                platform: 'KY_CHESS'
              },
              {
                name: '抢庄牛牛',
                gameName: '830',
                platform: 'KY_CHESS'
              },
              {
                name: '炸金花',
                gameName: '220',
                platform: 'KY_CHESS',
                id: "41"
              },
              {
                name: '德州扑克',
                platform: 'KY_CHESS',
                gameName: '620'
              },
              {
                name: '21点',
                platform: 'KY_CHESS',
                gameName: '600'
              }
            ]
          },
      ]
    };
  },
  methods: {
    closeRegister(){
      this.registerView=false;
      this.passKey.userName="";
      this.passKey.password="";
      this.passKey.code="";
      this.passKey.password_confirmation="";
      this.intacode="";
      this.reset();
    },
    closeLogin(){
      this.loginView=false;
      this.passKey.userName="";
      this.passKey.password="";
      this.passKey.code="";
      this.reset();
    },

    reset(){
           let registerPc = JSON.parse(localStorage.getItem('config')).register.pc
     let registermodel = JSON.parse(localStorage.getItem('config')).site_model
          if(registermodel=='invite_code'){
             this.iscode=true;
          }else{
            this.iscode=false;
          }
     registerPc.forEach((v, i) => {
          this.register[i] = {}
          switch (v) {
            case 'phone':
              this.register[i].placeholder = '请输入手机号'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '手机号'
              this.register[i].ico = "iconfont icon-shouji"
              break
            case 'email':
              this.register[i].placeholder = '请输入邮箱地址'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '邮箱'
              this.register[i].ico = "iconfont icon-youxiang"
              break
            case 'wechat':
              this.register[i].placeholder = '请输入微信号'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '微信'
              this.register[i].ico = "iconfont icon-more"
              break
            case 'realName':
              this.register[i].placeholder = '请输入真实姓名'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '真实姓名'
              this.register[i].ico = "iconfont icon-yonghu"
              break
            case 'payPassword':
              this.register[i].placeholder = '请输入支付密码'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '支付密码'
               this.register[i].ico = "iconfont icon-mima"
              break
          }
        })
    },

    getCode() {
        if (!this.passKey.userName) {
          return false
        }
        getS(`captcha`, { userName:this.passKey.userName}).then(res => {
            if (res.code == 200) {
              this.codeImg = res.data.captcha_image_text
              this.captcha_key = res.data.captcha_key
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
          if (!this.passKey.code || this.passKey.code == '') {
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
            // this.$router.push('/home')
            UserService.setCache(res, 'v1', 'login')
            window.location.href = '/'
          } else {
            alert(res.message)
            this.is_code_show();
          }
        })
      },
    goView(item) {

      if(item.link!="/plays/hall"){
         this.navId=item.num;
      }
      if (!item) return false;

      if(item.link=='/plays/hall'){
        window.open('#/plays/hall','_blank')
      }else{
        this.$router.push(item.link);
        
      }

      // if(item=='/plays/hall'){
      //   window.open('#/plays/hall','_blank')
      // }else{
      //   this.$router.push(item);
      // }
    },
      async registerSubmit (params) {
        //   let params = {
        //     userName: this.userName || null,
        //     password: this.password || null,
        //     phone: this.phoneNumber || null
        //     //  password_confirmation:this.password_confirmation||null
        //   };
        let res = await postS(`register`, params)
        if (res.code == 200) {
          UserService.setCachereg(res, 'v1')
           window.location.href = '/'
          // this.$router.push("/home");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 500);
        }else {
          this.dNotify(res.message, 'error')
        }
      },
    async registerTest() {
      let params = {};
      params.userName = this.passKey.userName;
      params.password = this.passKey.password;
      params.phone  = this.passKey.phoneNumber;
      params.code = this.passKey.code;
      params.device = "pc";
      params.captcha_key = this.captcha_key;
      let flag = true;
      let staueAcc = this.validateAccountUserNamenew(this.passKey.userName);
      let stauePassword = this.validateAccountnew(this.passKey.password);
      // console.log(staueAcc,stauePassword)
      if (!staueAcc) {
        alert('请输入6-10位数字或字母组成的帐号')
        return false;
      }
      if (!stauePassword) {
        alert('请输入8-20位数字或字母组成的密码')
        return false;
      }
      if (this.passKey.password !== this.passKey.password_confirmation) {
        alert('两次密码不一致')
        return false;
      }
      if (!this.passKey.code || this.passKey.code == '') {
        alert('请输入验证码')
        return false;
      }
      if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
        alert('请输入4位验证码')
        return false;
      }

      if (this.iscode == true) {
        if (this.intacode.length < 6 || this.intacode.length > 6) {
          this.pulicError = "请输入6位邀请码";
          return false;
        }
      }


      if (this.intacode) {
        params.invite_code = this.intacode;
      }

      for (let i = 0; i < this.register.length; i++) {
        if (!this.register[i].value) {
          this.pulicError = this.register[i].placeholder;
          flag = false;
          break;
        }
        params[this.register[i].key] = this.register[i].value;
      }

      if (!flag) {
        return false;
      }

      if (this.agent) {
         params.agent = this.agent;
      }

      this.$http.post(`${this.$HOST_NAME}/checkUsername/${this.passKey.userName}`, {}).then(res => {
          // console.log(res);
          //先检测账号是否可以使用。。。
          //下面根据结果来进行注册
          if (res && res.code === 200) {
            postS(`register`, params).then(res => {
              // 注册的时候，在后台进行后续的其他验证
              // console.log(res)
              if (res.code === 200) {
                UserService.setCache(res, 'v1')

                setTimeout(() => {
                    // this.reset();
                  alert('注册成功')
                  window.location.reload()
                }, 500)
              } else {
                //最后在后台验证注册是否成功，并且返回失败的提示
                console.log(res);
                alert(res.message)
                // this.pulicError = res.message
              }
            })
          } else {
            alert('帐号已存在')
            // this.pulicError = '帐号已存在'
            return false
          }
        })

      // let res = await _SetPost(
      //   `${this.$HOST_NAME}/checkUsername/${this.userName}`,
      //   {}
      // );
      // if (res && res.code == 200) {
      // } else {
      //   this.pulicError = "账号已存在";

      //   return false;
      // }
      // this.registerSubmit(params);
    },
    goYouhui() {
      this.$router.push("/home/youhui");
    },
    goHome() {
      this.$router.push("/home");
    },
    goAent() {
      this.$router.push("/home/agent");
    },
    goKefu() {
      let service = JSON.parse(localStorage.config).service;
      if (service) {
        let ser = service.find(item => item.status === "on");
        if (ser) {
          window.open(ser.url);
        }
      }
    },
    toggleNav(i, link) {
      if (link == "/plays/hall") {
        window.open("#/plays/hall");
        return false;
      }

      if (link == "vr_lottery") {
        if (!localStorage.token || !localStorage.userinfo) {
          alert("未登录");
          return false;
        } else {
          window.open("http://pjs.vrbetapi.com/Bet/Index/39");
        }
      }

      this.$store.commit("ly88/setNav", i);
      this.$router.push(link);
    },
    logout() {
      UserService.logout.call(this);
    },
    forget() {
      alert("忘记帐号密码，请联系在线客服人员取回！");
    },
    getBalance() {
      this.refreshS = true;
      getS(`/member/balance`).then(res => {
        if (res.code == 200) {
          let userinfo = JSON.parse(localStorage.userinfo);
          userinfo.balance = res.data.member;
          userinfo.agent = res.data.agency;
          this.$store.commit("mainState/reloadUserinfo", userinfo);
          this.refreshS = false;
          alert("刷新余额成功");
        } else {
          // alert("服务器报错");
        }
      });
    },
    goUserCen(name, num) {
      //name的类型有 ：  recharge （充值）  personage （个人资料）
      //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
      this.$store.commit("showPersonal", {
        bool: true
      });
      this.$store.commit("showContent", {
        parent: name
      });
      this.$store.commit("showNav", {
        child: num
      });
    },
    is_code_show() {
      getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },
    thirdParty (item, platform) {
        if (item.link == '/plays/hall') {
          window.open('#/plays/hall')
          return false
        }

        if (item.id) {
          this.getItemId(item)
        } else if (item.gameName) {
          this.trustLogin(item)
        } else if (item.num) {
          this.$router.push('/home/games?id=' + item.num)
        } else {
          this.$router.push(item.link)
        }
      }
  },
  computed: {
    userinfo() {
      return this.$store.state.mainState.userinfo;
    }
  },
  mounted() {
    this.intacode = this.GetQueryString("agent") || this.GetQueryString("k");
    this.incodeReadonly = !!this.intacode;
  },
  created() {
     this.is_code_show();
     this.agent = this.GetQueryString('agent')||this.GetQueryString('k');
     let registerPc = JSON.parse(localStorage.getItem('config')).register.pc
     let registermodel = JSON.parse(localStorage.getItem('config')).site_model
          if(registermodel=='invite_code'){
             this.iscode=true;
          }else{
            this.iscode=false;
          }
     registerPc.forEach((v, i) => {
          this.register[i] = {}
          switch (v) {
            case 'phone':
              this.register[i].placeholder = '请输入手机号'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '手机号'
              this.register[i].ico = "iconfont icon-shouji"
              break
            case 'email':
              this.register[i].placeholder = '请输入邮箱地址'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '邮箱'
              this.register[i].ico = "iconfont icon-youxiang"
              break
            case 'wechat':
              this.register[i].placeholder = '请输入微信号'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '微信'
              this.register[i].ico = "iconfont icon-more"
              break
            case 'realName':
              this.register[i].placeholder = '请输入真实姓名'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '真实姓名'
              this.register[i].ico = "iconfont icon-yonghu"
              break
            case 'payPassword':
              this.register[i].placeholder = '请输入支付密码'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '支付密码'
               this.register[i].ico = "iconfont icon-mima"
              break
          }
        })
  },
  store
};
</script>

<style lang="less" scoped>
// /static/klk/
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_394899_0k8d3ggxxx647vi.eot?t=1508472664452"); /* IE9*/
  src: url("//at.alicdn.com/t/font_394899_0k8d3ggxxx647vi.eot?t=1508472664452#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff;charset=utf-8;base64,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")
      format("woff"),
    url("//at.alicdn.com/t/font_394899_0k8d3ggxxx647vi.ttf?t=1508472664452")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/font_394899_0k8d3ggxxx647vi.svg?t=1508472664452#iconfont")
      format("svg"); /* iOS 4.1- */
}
img {
  border: none;
  vertical-align: middle;
}
.wrapper {
  width: 1000px;
  margin: 0 auto;
}
.licenseShow {
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
}

.licenseShow:before {
  content: "";
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}

.licenseShow .licenseImg {
  position: relative;
  width: 800px;
  vertical-align: middle;
  height: 800px;
  line-height: 800px;
  display: inline-block;
  background: #e6e6e6;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

.licenseShow .btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  height: 40px;
  line-height: 33px;
  text-align: center;
  width: 40px;
  font-size: 20px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #868484;
  border: 4px solid #fff;
}
.clearfix::before,
.clearfix::after,
.wrapper::before,
.wrapper::after,
.row::before,
.row::after,
.content::before,
.content::after {
  content: ".";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}
.icon-close:before {
  content: "\e63f";
}
.icon-shuaxin:before { content: "\e600"; }
.icon-shouji:before {
  content: "\e621";
}
.top {
  height: 44px;
  line-height: 44px;
  background: #040301;
  border-bottom: 1px solid #484646;
  overflow: hidden;
  a{
    color:#fff;
  }
}

.top > div.container {
  width: 1280px;
  margin: 0 auto;
  color: #fff;
  font-size: 14px;
}

.top .left {
  float: left;
  color: #fff;
}

.top .left a {
  margin-right: 10px;
  padding-right: 11px;
  position: relative;
  font-weight: 100;
  color: #fff;
}

.top .left a i {
  display: block;
  height: 8px;
  position: absolute;
  border-right: 1px solid #fff;
  right: 0;
  top: 6px;
  opacity: 0.5;
}

.top .right .i-item {
  display: inline-block;
  margin-right: 6px;
}

.top .i-btn,
.top .right .i-item {
  height: 30px;
  line-height: 30px;
}
.top .netlink{
  display:inline-block;
  color:rgb(255, 255, 0);
  margin-right:10px;
}
.top .btn001 {
  color: #fff;
  display: inline-block;
  text-align: center;
  width: 100px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #386be6;
  margin-left: 0;
}

.top .btn001.btn-other {
  background-color: #b09029;
  margin-left: 25px;
}

.top .btn002 {
  background: #df3531;
}

.top .btn002,
.top .btn003 {
  color: #fff;
  display: inline-block;
  text-align: center;
  width: 100px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.top .btn003 {
  background: #b09029;
}

.top .ml {
  margin-left: 25px;
}

.top .red {
  color: red;
}
.slot_menu {
  display: none;
  background: #040301;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  top: 138px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 20;
  padding-top: 11px;
  width: 280px;
  z-index: 99;
}

.slot_menu a {
  display: block;
  height: 40px;
  border-bottom: 1px dashed #777;
  padding: 6px 0;
  display: inline-block;
  width: 120px;
}

.slot_menu a img {
  display: inline-block;
  height: 100%;
}

.slot_menu a:hover {
  background-color: #ce302d;
}
.ag-ebet,
.sportlist {
    display: none;
    text-align: center;
    position: absolute;
    z-index: 2;
    top: 87px;
    padding: 10px 0;
    left: 50%;
    z-index: 99;
    background: #040301;
    width: 140px;
    transform: translateX(-50%);
}

.ag-ebet .sportItem,
.sportlist .sportItem {


}
.sportlist .sportItem span,.ag-ebet .sportItem span{
  display:block;
  height:40px;
  border-bottom: 1px dashed #777 !important;
  padding: 6px 0 !important;
  margin-top:0!important;
}
.sportItem span:hover {
  background-color: #ce302d;
}

.ag-ebet a img {
  display: block;
  height: 100%;
}
.nav-wr {
  height: 88px;
  min-width: 1280px;
  background: #040301;
  border-bottom: 3px solid #40352f;
}

.nav-wr .nav {
  width: 1280px;
  margin: 0 auto;
}

.nav-wr .nav .logo {
  display: inline-block;
  line-height: 88px;
}

.nav-wr .nav-link > a {
  text-align: center;
  display: inline-block;
  height: 88px;
  line-height: 26px;
  font-size: 16px;
  width: 95px;
  float: left;
  color: #fff;
  position:relative;
}

.nav-wr .nav-link span {
  width: 100%;
  height: 40px;
  display: block;
  margin-top: 15px;
}

.nav-wr .nav-link span.navicon1 {
  background: url(/static/ly88/img/nav1.fae35c8.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon2 {
  background: url(/static/ly88/img/nav2.33493fb.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon3 {
  background: url(/static/ly88/img/nav3.280a237.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon4 {
  background: url(/static/ly88/img/nav4.c3cc7e6.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon5 {
  background: url(/static/ly88/img/nav15.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon6 {
  background: url(/static/ly88/img/nav6.dd8a590.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon7 {
  background: url(/static/ly88/img/nav16.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon8 {
  background: url(/static/ly88/img/nav17.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon9 {
  background: url(/static/ly88/img/nav9.9fe7002.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon10 {
  background: url(/static/ly88/img/nav10.382932c.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon11 {
  background: url(/static/ly88/img/nav11.900d254.png) no-repeat center 0;
}

.nav-wr .nav-link span.navicon12 {
  background: url(/static/ly88/img/nav12.ed0bcab.png) no-repeat center 0;
}

.nav-wr .nav-link > a.active,
.nav-wr .nav-link > a:hover {
  color: #fff;
  cursor: pointer;
  background: #ce302d;
}
.nav-wr .nav-link > .trueSport:hover .sportlist{
  display:block!important;
}
.nav-wr .nav-link > .trueMan:hover .ag-ebet{
  display:block!important;
}
.nav-wr .nav-link a.active span,
.nav-wr .nav-link a:hover span {
  color: #fff;
  background-position: center -40px;
}
.modal {
  position: fixed;
  z-index: 999 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  outline: 0;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-yonghu:before {
  content: "\e699";
}
.icon-mima:before {
  content: "\e68f";
}
.icon-yanzhengma:before {
  content: "\e633";
}
.icon-yanjing:before {
  content: "\e6b5";
}

.icon-xiafan:before {
  content: "\e601";
}

.icon-yanjing1:before {
  content: "\e609";
}
.modal-dialog {
    position: absolute;
    width: 700px;
    padding-bottom: 20px;
    background: #fff;
    border-radius: 8px;
    transition: transform 0.15s ease-out;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.modal-dialog .close {
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ccc;
}

.modal-dialog .pop-content {
  position: relative;
  padding-bottom: 30px;
  padding-top: 54px;
}

.modal-dialog .pop-content h2 {
  font-size: 24px;
  color: #282828;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 400;
}

.modal-dialog .form-box {
  width: 300px;
  margin: 0 auto;
}

.modal-dialog .form-box .form-group {
  height: 34px;
  line-height: 34px;
  position: relative;
  margin-bottom: 14px;
  width: 100%;
}

.modal-dialog .form-box .validate {
  display: block;
  margin: 10px 0;
  font-size: 12px;
  color: #dbbb6f;
  min-height: 16px;
  text-align: center;
}

.modal-dialog .form-box p {
  text-align: center;
  color: #999;
}

.modal-dialog .form-box .captcha-code {
  width: 90px;
  height: 34px;
  float: left;
  display: block;
  position: relative;
  background: no-repeat;
}

.modal-dialog .form-box .captcha-code img {
  height: 34px;
  width: 90px;
  vertical-align: top;
}

.modal-dialog .form-box .ps-input {
  width: 300px;
  border: 0;
  background: 0 0;
  border-bottom: 1px solid #ccc;
}

.modal-dialog .form-box .ps-input,
.modal-dialog .form-box .ps-input2 {
  height: 34px;
  outline: 0;
  line-height: 34px;
  font-size: 16px;
  color: #333;
  padding: 0 20px 0 30px;
}

.modal-dialog .form-box .ps-input2 {
  width: 210px !important;
  float: left;
  border-bottom: 1px solid #ccc;
}

.modal-dialog .form-box i.iconfont {
  position: absolute;
  height: 100%;
  line-height: 34px;
  top: 0;
  left: 0;
  color: #000;
  font-size: 24px;
  display: inline-block;
}

.modal-dialog .form-box .icon-yanjing {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  line-height: 34px;
  height: 100% !important;
  color: #f66;
}

.modal-dialog .icon_popup {
  position: absolute;
  display: block;
}

.modal-dialog .submit {
  width: 300px;
  height: 40px;
  background: #dbbb6f;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  display: block;
  border-radius: 4px;
  border: 0;
}
.modal-dialog .form-box {
  width: 300px;
  margin: 0 auto;
}

.modal-dialog .form-box .form-group {
  height: 34px;
  line-height: 34px;
  position: relative;
  margin-bottom: 14px;
  width: 100%;
}

.modal-dialog .form-box .validate {
  display: block;
  margin: 10px 0;
  font-size: 12px;
  color: #dbbb6f;
  min-height: 16px;
  text-align: center;
}

.modal-dialog .form-box p {
  text-align: center;
  color: #999;
}

.modal-dialog .form-box .captcha-code {
  width: 90px;
  height: 34px;
  float: left;
  display: block;
  position: relative;
  background: no-repeat;
}

.modal-dialog .form-box .captcha-code img {
  height: 34px;
  width: 90px;
  vertical-align: top;
}

.modal-dialog .form-box .ps-input {
  width: 300px;
  border: 0;
  background: 0 0;
  border-bottom: 1px solid #ccc;
}

.modal-dialog .form-box .ps-input,
.modal-dialog .form-box .ps-input2 {
  height: 34px;
  outline: 0;
  line-height: 34px;
  font-size: 16px;
  color: #333;
  padding: 0 20px 0 30px;
}

.form-rowbox .inputbox {
  width: 600px;
  min-height: 45px;
  margin: 0 auto 12px;
  clear: both;
  position: relative;
  line-height: 45px;
}

.form-rowbox .inputbox .label {
  font-size: 16px;
  color: #fff;
  float: left;
  height: 45px;
  line-height: 45px;
  min-width: 112px;
  text-align: right;
}

.form-rowbox .inputbox .select-group {
  display: inline-block;
  vertical-align: middle;
}

.form-rowbox .inputbox .select-group a.active,
.form-rowbox .inputbox .select-group a:hover {
  background: #dbbb6f;
  color: #fff;
  border: 1px solid #444;
}

.form-rowbox .inputbox .select-group a {
  padding: 0 5px;
  border: 1px solid #999;
  font-weight: 700;
  height: 31px;
  text-align: center;
  line-height: 31px;
  font-size: 14px;
  display: inline-block;
  color: #999;
  float: left;
  margin-right: 11px;
  margin-bottom: 10px;
}

.form-rowbox .inputbox .input,
.form-rowbox .inputbox input,
.form-rowbox .inputbox select {
  outline: none;
  background: #f8f8f8;
  background-size: 23px 13px;
  width: 470px;
  padding: 5px;
  font-size: 14px;
  line-height: 43 \0;
  border-radius: 4px;
  border: 1px solid #cacaca;
  height: 46px;
  color: #333;
  line-height: 34px;
  text-indent: 10px;
}

.form-rowbox .formbtn {
  cursor: pointer;
  letter-spacing: 4px;
  width: 320px;
  height: 40px;
  line-height: 40px;
  display: block;
  font-size: 16px;
  background: #dbbb6f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  margin: 24px auto 0;
  font-weight: 700;
}

.form-rowbox .formbtn[disabled] {
  background: #ccc;
  cursor: not-allowed;
}

.form-box .row-group {
  padding: 14px 0 5px;
}

.form-box .inputbox {
  display: inline-block;
  margin: 5px 16px 5px 0;
  line-height: 32px;
  font-size: 12px !important;
}

.form-box .inputbox .label,
.form-box .inputbox label {
  line-height: 30px;
  font-size: 16px;
  float: left;
  color: #fff;
  font-weight: 700;
}

.form-box .inputbox .input,
.form-box .inputbox input,
.form-box .inputbox select {
  display: inline-block;
  float: left;
  width: 158px !important;
  background: #fff;
  vertical-align: top !important;
  border: 1px solid #444;
  height: 32px;
  font-size: 12px;
  color: #313131;
  border-radius: 4px;
  padding: 0 8px;
}

.form-box .btn-box {
  padding: 15px 0 0 128px;
}

.form-box .btn {
  background: #dbbb6f;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  padding: 3px 25px;
  border-radius: 3px;
  color: #fff;
  line-height: 24px;
  font-size: 14px;
  margin-top: 6px;
  transition: all 0.1s;
}
</style>


