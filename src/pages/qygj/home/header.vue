<template>
  <div class="new-header">
    <!-- 头部上面 -->
    <div class="header-top" :class="{night:colorbool}" >
    <!-- <div class="header-top" :class="{night:colorbool}" :style="{backgroundColor:headerbgColor}"> -->
      <!-- 登录 -->
      <div class="login">
        <!-- <div class="sj">
            <a href="javascript:void(0)" style="color:#697dac;">美东时间 -&nbsp;<span id="EST_reciprocal">{{time}}</span></a>
        </div> -->
         <!-- <ul class="login_after tools clear" :class="{headerColor:headerColorBool}">

                <li class="js-change-mode change-mode-cont" data-mode=""><a href="javascript:void(0)">线路检测</a>
                </li>
                <li class="js-change-mode change-mode-cont" data-mode=""><a href="javascript:void(0)">免息借呗</a>
                </li>
                <li class="js-change-mode change-mode-cont" data-mode=""><a href="javascript:void(0)">金管家</a>
                </li>

         </ul> -->
         <ul class="headerLinkBox">
            <li @click="goHeader(0)">
              <a href="javascript:void(0)">线路检测</a>
            </li>
            <li @click="goHeader(1)">
              <a href="javascript:void(0)">免息借呗</a>
            </li>
            <li @click="goHeader(2)">
              <a href="javascript:void(0)">金管家</a>
            </li>

         </ul>
        <!-- 登录前 -->
        <div class="login-before" v-if="!userinfo" :class="{headerColor:headerColorBool}">
          <!-- 帐号 -->
          <div class="username">
            <input type="text" placeholder="帐号" id="userName" v-model="passKey.userName" @blur="getCode" @focus="focusname">
          </div>
          <!-- 密码 -->
          <div class="password">
            <input maxlength="20" type="password" placeholder="密码" v-model="passKey.password" v-on:keyup.enter="login">
          </div>
          <!-- 验证码 -->
          <div class="code"  v-if="code_show">
            <input maxlength="4" type="text" placeholder="验证码" v-model="passKey.code" v-on:keyup.enter="login">
            <span :style="{backgroundImage: 'url(' + codeImg + ')', backgroundSize:'100% 100%'}" @click="getCode"></span>
          </div>
          <!-- 登录 -->
          <div>
            <input type="button" value="登录" id="loginBtn" @click="login">
          </div>
          <!-- 开户 -->
          <div>
            <router-link tag="input" to="/home/register" type="button" value="免费开户" id="resetBtn"></router-link>
          </div>
          <!-- 试玩 -->
          <div>
            <!-- <input type="button" value="试玩" @click="tryPlay" style="background-color: #7fb1a7"> -->
            <router-link tag="input" to="/home" type="button" value="试玩"  style="background-color: #7fb1a7" @click.native="tryPlay"></router-link>
          </div>
          <!-- 忘记密码 -->
          <div class="last_item">
            <a class="forgetpwd" @click="forget" href="javascript:void(0)">帐号问题?</a>
          </div>
        </div>

        <!-- 登录后 -->
        <div class="login-after" v-if="userinfo">

          <!-- 欢迎 -->
          <div class="part1" :class="{headerColor:headerColorBool}">
            <span>欢迎您！</span>
            <i class="vip-sprite"
               :style="{backgroundImage: 'url(' + dengjiImg + ')', backgroundPosition:left+'px '+top+'px'}"></i>
            <span>帐号：</span>
            <span>{{userinfo.userName}}</span>
          </div>
          <!-- 余额 -->
          <div class="part2 " :class="{headerColor:headerColorBool}">
            &nbsp;
            <label>
              <label>余额(RMB):</label>
            </label>
            <span style="margin-left: 5px; margin-right: 5px;">{{userinfo&&userinfo.balance}}</span>
          </div>

          <div class="part3" :class="{headerColor:headerColorBool}">
            <a href="javascript:void(0);" style="background: #df3e7b;color:#fff;border-radius: 5px;" @click="getBalance">
              <label style="cursor:pointer" for="" v-if="!showReload">一键刷新</label>
              <label style="cursor:pointer" for="" v-if="showReload">正在刷新</label>
            </a>
          </div>

          <div class="part5" :class="{headerColor:headerColorBool}">
            <i class="iconfont icon-home-user"></i>
            <a href="javascript:void(0)" @click="goUserCen('personage',0)">会员中心</a>

            <div class="login-dropdown" style="width: 120px;">
              <ul>
                <li @click="goUserCen('recharge',0)">存款</li>
                <li @click="goUserCen('withdraw',0)">提款</li>

              </ul>
            </div>
          </div>

          <div class="part6" :class="{headerColor:headerColorBool}">
            <i class="iconfont icon-home-message"></i>
            <a href="javascript:void(0)" @click="goUserCen('message',0)">
              我的信息
            </a>
          </div>

          <div class="last_item">
            <a href="javascript:void(0);" @click="logout">登出</a>
          </div>
        </div>
      </div>
       <Modal
              :visible.sync="modal6"
               class="model"
               width="306"
               height="146"
              v-model="showmodle"
              title="信息"
              :loading="loading"
              @on-ok="asyncOK">
              <p>开始进行缓存清除，完毕后将会刷新网站！</p>
          </Modal>
    </div>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import {postS,getS} from '@/service/public/service.js'
  // import "@/assets/home-main-iconfont/iconfont.css";
  // import "@/assets/home-main-iconfont/iconfont.js";
  export default {
    data () {
      return {
        time:"",
        colorbool:false,
        modal6: false,
        loading: true,
        headerColorBool:false,
        headerbgColor:"#697dac",
        headerbgColor:"#d0d9e5",
        showmodle:false,
        passKey: {},
        codeImg: '/static/qygj/img/thirdparty/code.jpg',
        dengjiImg: '/static/qygj/img/thirdparty/vip-sprites.png',
        left: 5,
        top: -193,
        showReload: false,
        code_show: parseInt(localStorage.is_code_show),
        // background-position: 5px -193px;
      }
    },
    methods: {
      // getCode () {
      //   if (!this.passKey.userName) {
      //     // alert("请输入6位帐号");
      //     return false
      //   }

      //   if (this.passKey.userName.length < 5) {
      //     // alert("请输入6位帐号");
      //     this.passKey.userName = ''
      //     var oInput = document.getElementById('userName')
      //     oInput.focus()
      //     return false
      //   }

      //   this.$http
      //     .post(`${this.$HOST_NAME}/captcha`, {
      //        userName: this.passKey.userName
      //     })
      //     .then(res => {
      //       if (res.code == 200) {
      //         this.codeImg = res.data.captcha_image_text
      //         this.passKey.captcha_key = res.data.captcha_key
      //       } else {
      //         this.$store.commit('alert/showTipModel', {
      //           bool: true,
      //           title: res.message,
      //           model: 'warn'
      //         })
      //       }
      //     })
      // },
      goHeader(typeNum){
        if(typeNum==0){
          // 线路检测
          // alert("暂未开放，敬请期待")
          return false;
        }else if(typeNum==1){
          // 借呗
          alert("暂未开放，敬请期待")
        }else if(typeNum==2){
          // 金管家
          window.open("/static/qygj/html/active/sxjgj/index.html","_blank");
        }
      },
            //获取时间
      ee(num) {
        if (num < 10) {
          num = "0" + num;
        }
        return num;
      },
      we(num){
        switch (num) {
          case 1: num = "一"; break;
          case 2: num = "二"; break;
          case 3: num = "三"; break;
          case 4: num = "四"; break;
          case 5: num = "五"; break;
          case 6: num = "六"; break;
          case 7: num = "七"; break;
        }
        return num;
      },
      getTimes() {
        var that = this;
        let timestam = new Date().getTime();
        let time = timestam - 43200000;
        let dateObj = new Date(time),
            p0 = this.ee,
            Y = dateObj.getFullYear(),
            Mh = dateObj.getMonth() + 1,
            D = p0(dateObj.getDate()),
            X = this.we(dateObj.getDay()),
            H = p0(dateObj.getHours()),
            M = p0(dateObj.getMinutes()),
            S = p0(dateObj.getSeconds());

        if (Mh > 12) {
            Mh = "01";
        } else if (Mh < 10) {
            Mh = "0" + Mh;
        }
        let str = `${Y}/${Mh}/${D} ${H}:${M}:${S}`;
        this.time = str ;
      },



      focusname(){

      },
      changcolor(){
        this.colorbool=!this.colorbool
        console.log(this.colorbool)
         this.$store.commit('mainState/changcolor',this.colorbool)
      },
      getCode() {
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
        if (!this.validateAccountLogin(this.passKey.userName)) {
          this.$store.commit('alert/newshowtip',{
               bool:true,
               title:'请输入5-20位数字或字母组成的帐号',
               model:'',
               leftspan:false
            })

           return false
        }
        if (!this.validateAccountLogin(this.passKey.password)) {
          this.$store.commit('alert/newshowtip',{
               bool:true,
               title:'请输入5-20位数字或字母组成的密码',
               model:'',
                leftspan:false
            })

          return false
        }
        if(this.code_show){
          if (this.passKey.code == '') {
          this.$store.commit('alert/newshowtip',{
               bool:true,
               title:'验证码请务必输入',
               model:'',
               leftspan:true
            })
          return false
        }
        }
        if(this.code_show){
           if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
             this.$store.commit('alert/newshowtip',{
               bool:true,
               title:'请输入4位验证码',
               model:'',
               leftspan:true
            })
             return false
         }
        }
           this.passKey.device = 'pc';
           postS(`login`, this.passKey).then(res => {
           if (res.code == 200) {
            this.$router.push({
              name: 'clause'
            })
            UserService.setCache(res, 'v1', 'login')
          } else {

             this.$store.commit('alert/newshowtip',{
               bool:true,
               title:res.message,
               model:'',
              leftspan:true
            })
            this.is_code_show();
          }
        })
      },
      cleanUp(){
            this.showmodle=true

      },
      asyncOK(){
           window.location.reload()
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
            }
          })
      },
      // 打开个人中心
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
        // let res = await this.$http.post('/api/test/registerTest', {})
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
      forget () {
        this.$store.commit('alert/newshowtip',{
               bool:true,
               title:'忘记帐号密码,请联系在线客服人员取回！',
               model:'',
               leftspan:false
            })
      },
      is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    }
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    watch:{
    // '$route.path': function (newVal, oldVal) {
    //       this.$store.commit('mainState/getRoute',newVal)
    //       if(newVal !== "/home" && newVal !=='/home/youhui'){
    //         this.headerColorBool =  true
    //       }else{
    //         this.headerColorBool =  false
    //       }
    //       if(newVal === "/home/live"){
    //         this.headerbgColor = "#96344a"
    //       }
    //       else if(newVal === "/home/buyu"){
    //         this.headerbgColor = "#1672d6"
    //       }
    //       else if(newVal ==='/home/tiyu' ){
    //         this.headerbgColor = '#121931'
    //       }
    //       else if(newVal ==='/home/games' ){
    //         this.headerbgColor = '#30328c'
    //       }
    //       else if(newVal == '/home/qipai'){
    //         this.headerbgColor = '#af8d4a'
    //       }
    //       else{
    //         this.headerbgColor = "#d0d9e5"
    //       }
    //    }
    },
    mounted () {
      // 夜间模式
      // let date = new Date()
      // let newHour = date.getHours()
      // if(newHour>=18 || newHour<=5){
      //   this.changcolor()
        // }
      //获取时间
      let time = setInterval( this.getTimes, 1000);

      let routerSrc  = this.$store.state.mainState.routeSrc;
       if(routerSrc !== "/home" && routerSrc !=='/home/youhui'){
            this.headerColorBool =  true
          }
      if(routerSrc ==="/home/live"){
          this.headerbgColor = "#96344a"
      }
      else if(routerSrc === "/home/buyu"){
          this.headerbgColor = "#1672d6"
      }
      else if(routerSrc ==='/home/tiyu' ){
          this.headerbgColor = '#121931'
      }
      else if(routerSrc ==='/home/games' ){
          this.headerbgColor = '#30328c'
      }
      else if(routerSrc == '/home/qipai'){
          this.headerbgColor = '#af8d4a'
      }

      else{
          this.headerbgColor = "#d0d9e5"
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
      if (!this.userinfo) return false
      switch (this.userinfo.levelId) {
        case 2:
          this.top = 1
          break
        case 3:
          this.top = -31
          break
        case 4:
          this.top = -64
          break
        case 5:
          this.top = -96
          break
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  .headerLinkBox{
    width:300px;
    display:inline-block;
    overflow:hidden;
    height:100%;
    li{
      float: left;
      // width:60px;
      margin:0 15px;
      a{
            color: #697dac;
            font-size: 15px;
      }
    }
  }




  .new-header {
    background: #fff;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
    .header-top {
      height: 60px;
      background: #d0d9e5;
      line-height: 60px;
      .login {
        margin: 0 auto;
        width: 1200px;
        .sj{
          // width:100px;
          height:100%;
          // background-color: red;
          display:inline-block;
          font-size:15px;
          margin-left:64px;
        }
        input{
          width: 150px;
          height: 34px;
          padding: 0 0 0 5px;
          background: #aab7ca;
          line-height: 34px;
          color:#fff;
          border: none;
          font-size: 14px;
          outline: none;
          text-indent: 4px;
          border-radius:5px;
        }
        input:focus{
           background: #fff;
           color: #697dac;
        }
        input::-webkit-input-placeholder{
          color: #fff;
        }

        input[type="button"] {
          width: 80px;
          height: 34px;
          line-height: 34px;
          border-radius:5px;
          color: #fff;
          cursor:pointer;
        }
        .login_after{
          width: 100px;
          float: left;
          height: 40px;
           li{
            height: 40px;
            line-height: 40px;
            margin-left:10px;

            a{
              color: #697dac;
              font-size:14px;
            }
           }

        }
        .headerColor{
          color:white!important;
          a{
            color:white!important;
          }
          li{
            a{
              color:white;
            }
          }
        }
        .login-before {
          float: right;
          margin-right:12px;
          div {
            float: left;
            position: relative;
            margin: 0 6px 0;
            text-align: left;

            #loginBtn {
              background:#df3e7b;
            }

            #resetBtn {
              background: #697dac;
            }
          }

          .code {
            input {
              width: 160px;
            }

            span {
              display: inline-block;
              cursor: pointer;
              width: 89px;
              height: 34px;
              position: absolute;
              right: 0;
              top: 13px;
            }
          }

          .last_item {
            margin: 0 0 0 6px;

            a {
              line-height: 34px;
              color: #697dac;
              cursor: pointer;
              font-size: 14px;
            }
          }
        }

        .login-after {
          float: right;
          font-size: 13px;
          margin-right: 6px;
          a {
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #697dac;
            width: 60px;
            display: inline-block;
          }

          div {
            height: 50px;
            margin-right: 10px;
            float: left;
            line-height: 50px;
            color: #697dac;
            font-size: 15px;

            i {
              vertical-align: middle;
            }

            a {
              vertical-align: middle;
            }
          }

          .part1 {
            .vip-sprite {
              width: 38px;
              height: 30px;
              display: inline-block;
              vertical-align: middle;
              margin-right: 4px;
            }
          }

          .part5 {
            position: relative;

            .login-dropdown {
              display: none;
              position: absolute;
              top: 50px;
              left: -30px;
              z-index: 9999666;
              height:68px;
              line-height: 68px;
              border-radius: 0 0 10px 10px;
              box-shadow: 3px 3px 6px rgba(0, 0, 0, .5);
              background-color: #fff;

              ul {
                li {
                  display: block;
                  width: 100%;
                  text-align: center;
                  height: 34px;
                  line-height: 34px;
                  cursor: pointer;
                }
                li:last-child:hover{
                      border-radius:0 0 10px 10px;
                }
                li:hover {
                    background: #d0d9e5;
                }
              }
            }
          }

          .part5:hover {
            .login-dropdown {
              display: block;
            }
          }

          .last_item {
            a {
             background: #697dac;
             border-radius: 5px;
             color:#fff;
            }
          }
        }
      }
    }
    .night{
       background: rgb(16, 17, 35)
    }
  }
 .model /deep/.ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -153px;
        margin-top: -73px;
  }
  .model /deep/.ivu-modal-close{
    display: none;
  }
  .model /deep/.ivu-btn-text{
    display: none
  }
  .model /deep/.ivu-modal-body p{
     font-size: 14px;
  }
</style>
