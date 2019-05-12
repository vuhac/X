<template>
    <div class="mcBox" v-show="showBox">

            <div class="login-box" id="login-box" v-show="isLogin">
                <div class="icon-cancle " @click='close'></div>
                <div class="login-info">
                    <div class="tiles">会员登录</div>
                    <div class="hdr-fcn ">
                        <a id="blgo-s2"></a>
                        <div class="lgn-inpt">
                            <input v-model="passKey.userName" type="text" class="flt-l" id="user_login_name" maxlength="15" name="user_login_name" placeholder="帐号" data-tag_id="1223" @blur="getCode" data-depth="3">
                            <div class="arrow1 icon-game_peo"></div>
                            <div class="separator"></div>
                            <div class="password_eyes password_eyes3" >
                                <input v-model="passKey.password" type="password" id="logincaptcha" class="flt-r" maxlength="16" name="logincaptcha" placeholder="密码" >

                            </div>
                            <div class="password_eyes password_eyes2" v-show="code_show">
                                <input v-model="passKey.code" type="password" id="user_login_password" class="flt-r" maxlength="16" name="user_login_password" placeholder="验证码" style="padding-left:0;text-indent:10px;padding-right:37px;">
                                <img :src="codeImg" @click="getCode" />
                            </div>
                            <div class="arrow2 icon-game_pas"></div>
                        </div>
                        <div id="login_btn02" name="login_btn02" class="login_btn" @click="login">登录</div>

                        <div  class="free_account_btn" @click="goRegister">
                            <div class="icon-cny"></div>免费开户
                        </div>
                    </div>
                </div>
                <div class="register-content"></div>
            </div>



            <!-- 注册框 -->

            <div class="register-pup" id="register-pup"  v-show="!isLogin">
                <div class="icon-cancle" @click="close"></div>

                <div class="register-left">
                    <div class="icon-register"></div>
                </div>
                <!-- <div class="register-content" style="display:none;">

                    <div class="checkbox no-border" style="margin-top: 24px;">
                        <input class="box roundedOne" value="None" id="roundedOne1" name="check" checked="" type="checkbox" title="">
                        <label>我确认我已年满18岁，并已阅读和接受本网站的策略，隐私声明，<a target="_blank" href="aboutus.htm?page=4" data-tag_id="1126" data-depth="2">条款及条件</a>。</label>
                    </div>
                    <div class="buttons">
                        <a id="fast-register-btn" href="javascript:void(0);">马上注册</a>
                        <span class="info">已有帐号？</span>
                        <a class="login" href="#" onclick="javascript:prj.pop('','login','');" data-tag_id="1222" data-depth="2">在此登录</a>
                    </div>
                </div> -->
                <div class="register-mobile">
                    <div class="inpt-group">
                        <div id="phone-remid" class="phone-remid" style="margin-right:15px;">帐号：</div>
                        <input class="inpt1 br" id="registerPhone" @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="帐号6-10位数字或字母" type="text" v-model="passKey.userName" @blur="getCode" maxlength="10">
                    </div>

                    <div class="inpt-group">
                        <div class="password-class">
                            <div id="phone-remid" class="phone-remid" style="margin-right:15px;">密码：</div>
                            <input @keydown="pulicError=''"  class="inpt1 br" v-on:keyup.enter="registerTest" placeholder="密码 8-20位数字或字母" type="password" v-model="passKey.password" maxlength="20">
                        </div>

                        <span id="passwordfield_w-01" class="vldn-txt"></span>
                    </div>
                    <div class="inpt-group">
                        <div class="password-class">
                            <div id="phone-remid" class="phone-remid" style="margin-right:15px;">重复密码：</div>
                            <input @keydown="pulicError=''" class="inpt1 br"  v-on:keyup.enter="registerTest" placeholder="请重复密码" type="password"
                     v-model="password_confirmation">
                        </div>
                        <span id="passwordfield_w-01" class="vldn-txt"></span>
                    </div>

                    <!-- 验证码是否显示 -->
                    <div class="inpt-group" >
                        <div id="phone-remid" class="phone-remid" style="margin-right:15px;">验证码：</div>
                        <input type="text" class="inpt_code br captcha-field" v-model="code" @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请输入验证码">
                        <a class="inp_btn re_send_bank disabled" href="javascript:void(0)" style="border:0;background:none;">
                            <img :src="codeImg" alt="" style="width:65px;height:32px;" @click="getCode">
                        </a>
                        <div  class="message-remid"></div>
                    </div>


                    <!-- 手机号之类 -->
                    <div class="inpt-group list" :key='index' v-for="(item,index) in register">
                        <div class="password-class">
                            <div id="phone-remid" class="phone-remid" style="margin-right:15px;">{{item.name}}:</div>
                            <input @keydown="pulicError=''" class="inpt1 br"  v-on:keyup.enter="registerTest" :placeholder="item.placeholder"
                                type="text" v-model="item.value">

                        </div>
                        <span id="passwordfield_w-01" class="vldn-txt"></span>
                    </div>




                    <!-- 邀请码是否显示 -->
                    <div class="inpt-group" v-if='iscode'>
                        <div id="phone-remid" class="phone-remid" style="margin-right:15px;">邀请码：</div>

                        <input @keydown="pulicError=''" class="inpt_code br captcha-field"  v-on:keyup.enter="registerTest" placeholder="邀请码" type="text" v-model="intacode"  :readonly="incodeReadonly" id="incode">

                        <!-- <div  class="message-remid">请输入邀请码</div> -->
                    </div>


                    <div class="checkbox no-border" style="margin-top: 20px;">
                        <!-- <input class="box roundedOne" value="None" id="roundedOne2" name="check" checked="" type="checkbox" data-tag_id="1116" data-depth="2"> -->
                        <label style="margin-left:24px;font-size:14px;">完成即视为同意已满18岁，且同意各项开户条约。</label>
                    </div>
                    <div class="checkbox no-border" style="margin-top: 20px;">
                        <label style="margin-left:30px;color:red;">{{pulicError}}</label>
                    </div>
                    <div class="buttons">
                        <a id="submitMobileBtn" href="javascript:void(0);" data-tag_id="1116" @click="registerTest">马上注册</a>
                        <span class="info">已有帐号？</span>
                        <a class="login" href="javascript:void(0)" @click="antLogin">在此登录</a>
                    </div>
                </div>
            </div>



    </div>



</template>
<script>
import {postS,getS} from '@/service/public/service.js'
import UserService from '@/service/public/UserService'
import { _SetGet,_SetPost } from '@/service/public/service.js'

export default {

  data(){
     return {
        //  注册界面
        // userName: '',
        intacode:'',
        // password: '',
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



        //  错误提示

        // 下面是登录界面的
         passKey:{
            userName:"",
            password:""
        },
        // codeImg: '/static/zyyl/img/thirdparty/code.jpg',
        code_show: parseInt(localStorage.is_code_show),
     }
  },
  methods:{
      reset(){
          this.passKey.userName="";
          this.passKey.password="";
          this.phoneNumber="";
          this.pulicError="";
          this.password_confirmation="";
          this.code="";
          this.initRegister();
      },
    //   注册
      async registerTest () {
        let staueAcc = this.validateAccountUserNamenew(this.passKey.userName)
        let stauePassword = this.validateAccountnew(this.passKey.password)

        if (!staueAcc) {
          this.pulicError = '帐号6-10位数字或字母'
          return false
        }
        if (!stauePassword) {
          this.pulicError = '密码 8-20位数字或字母'
          return false
        }

        if (this.passKey.password !== this.password_confirmation) {
          this.pulicError = '两次密码不一致'
          return false
        }
        if (this.code === '') {
          this.pulicError = '请输入验证码'
          return false
        }
        if (this.code.length < 4 || this.code.length > 4) {
          this.pulicError = '请输入4位验证码'
          return false
        }

        //   if (!stauePhone) {
        //     this.pulicError = "输入的手机号有误";
        //     return false;
        //   }
         if(this.iscode==true){
           if(this.intacode.length<6|| this.intacode.length>6){
               this.pulicError='请输入6位邀请码'
               return false
           }
        }
        let params = {}
        params.userName = this.passKey.userName
        params.password = this.passKey.password
        params.code = this.code
        params.device = 'pc'
        params.captcha_key = this.captcha_key
        let flag = true

        if(this.intacode){
           params.invite_code=this.intacode
        }


        for (let i = 0; i < this.register.length; i++) {
          if (!this.register[i].value) {
            this.pulicError = this.register[i].placeholder
            flag = false
            break
          }
          params[this.register[i].key] = this.register[i].value
        }

        if (!flag) {
          return false
        }

        if (this.agent) {

          params.agent =this.agent

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
                    this.reset();
                  alert('注册成功')
                  window.location.reload()
                }, 500)
              } else {
                //最后在后台验证注册是否成功，并且返回失败的提示
                console.log(res);
                // alert(res.message)
                this.pulicError = res.message
              }
            })
          } else {
            // alert('帐号已存在')
            this.pulicError = '帐号已存在'
            return false
          }
        })



        // let res = await _SetPost(
        //   `${this.$HOST_NAME}/checkUsername/${this.passKey.userName}`, {}
        // )
        // if (res && res.code == 200) {} else {
        //   this.pulicError = '帐号已存在'

        //   return false
        // }
        // this.registerSubmit(params)
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
      // 验证码
    // getCode() {
    //   if (this.code_show == 0) {
    //     return;
    //   }
    //   if (this.passKey.userName.length < 5) {
    //        alert("请输入6位帐号");
    //        this.passKey.userName = ''
    //        var oInput = document.getElementById('userName')
    //        oInput.focus()
    //        return false
    //   }
    //    getS(`captcha`,{ userName: this.passKey.userName } ).then(res => {
    //     if (res.code == 200) {
    //       this.codeImg = res.data.captcha_image_text;
    //       this.captcha_key = res.data.captcha_key;
    //     }else{
    //         this.$store.commit('alert/showTipModel',{
    //            bool:true,
    //            title:res.message,
    //            model:'warn'
    //         })
    //     }
    //   });
    // },
    getCode () {
        if(this.code_show==0){
            // 不显示验证码
            return false;
        }
        if (!this.passKey.userName) {
            return false
        }
        if(this.passKey.userName.length<5){
            alert("请输入6位帐号")
            return false
        }
        this.$http
        .get(`/frontend/v1/captcha`, {
        headers: { Accept: "application/x.tg.v2+json" },
        params: { userName: this.passKey.userName }
        })
        .then(res => {
        console.log(res);
        if (res.code == 200) {
            // console.log(res)
            this.codeImg = res.data.captcha_image_text
            this.captcha_key = res.data.captcha_key
        }
        })
    },


    is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },
    // 登录
    login () {
        if (!this.validateAccountLogin(this.passKey.userName)) {
          alert('请输入6-10位数字或字母组成的帐号')
          return false
        }
        if (!this.validateAccountLogin(this.passKey.password)) {
          alert('请输入8-20位数字或字母组成的密码')
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

           postS(`login`, this.passKey).then(res => {
           if (res.code == 200) {
               this.reset();
            UserService.setCache(res, 'v1', 'login')
            window.location.href = '/'
          } else {
            alert(res.message)
            this.is_code_show();
          }
        })
    },
    close(){
        this.$store.commit('yibo/showBox',{showBox:false,isLogin:false})
        this.reset();
    },

    antLogin(){
      // this.isLogin=true;
    //   let userinfo=localStorage.token;
      if(localStorage.token){
        //   已登录，此时不能登录
        alert("您已登录！")
        return false;
      }else{
            this.$store.commit('yibo/showBox',{showBox:true,isLogin:true})
            this.reset();
      }

    },
    goRegister(){
      // 注册弹框
      // this.isRegister=true;
      this.$store.commit('yibo/showBox',{showBox:true,isLogin:false})
      this.reset();
    },
    // 初始化注册表
    initRegister(){
        if(this.isLogin){
            // 登录框
            this.is_code_show();
        }else{
            // 注册框
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
                break
                case 'email':
                this.register[i].placeholder = '请输入邮箱地址'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '邮箱'
                break
                case 'wechat':
                this.register[i].placeholder = '请输入微信号'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '微信'
                break
                case 'realName':
                this.register[i].placeholder = '请输入真实姓名'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '真实姓名'
                break
                case 'payPassword':
                this.register[i].placeholder = '请输入支付密码'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '支付密码'
                break
            }
            })
        }
    }
  },
  created(){

        if(this.isLogin){
            // 登录框
            this.is_code_show();
        }else{
            // 注册框
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
                break
                case 'email':
                this.register[i].placeholder = '请输入邮箱地址'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '邮箱'
                break
                case 'wechat':
                this.register[i].placeholder = '请输入微信号'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '微信'
                break
                case 'realName':
                this.register[i].placeholder = '请输入真实姓名'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '真实姓名'
                break
                case 'payPassword':
                this.register[i].placeholder = '请输入支付密码'
                this.register[i].value = ''
                this.register[i].key = v
                this.register[i].name = '支付密码'
                break
            }
            })
        }



  },
  mounted(){

  },
  computed:{
    showBox(){
        return this.$store.state.yibo.showBox
    },
    isLogin(){
        this.is_code_show();
        return this.$store.state.yibo.isLogin
    },

  },

}
</script>
<style lang="less" scoped>
    .mcBox{
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color: rgba(0,0,0,.8);
        z-index:1000;
            .login-box {
                position: fixed;
                background: url(/static/zyyl/img/logo/login-box.png) no-repeat;
                width: 554px;
                height: 319px;
                z-index: 999;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                .icon-cancle {
                    position: absolute;
                    right: 14px;
                    top: 5px;
                    cursor: pointer;
                    background-image: url(/static/zyyl/img/logo/icon.png);
                    background-position: -469px -263px;
                    width: 33px;
                    height: 35px;

                }

                .login-info {
                    width: 320px;
                    float: right;
                    .tiles {
                        color: #743aa4;
                        font-size: 14px;
                        font-weight: bold;
                        width: 80px;
                        margin: 0 auto;
                        padding: 19px 0 15px 0;
                    }
                    .lgn-inpt {
                        width: 200px;
                        margin: 0 auto;
                        position: relative;
                        input {
                            outline-color: #59397b;
                            width: 160px;
                            height: 37px;
                            border: 0;
                            padding: 0;
                            background-color: #FFFFFF;
                            padding-left: 37px;
                            line-height: 30px;
                            font-size: 12px;
                            color: #333;
                            margin-right: 10px;
                            border: 1px solid #ccc;
                            -webkit-border-radius: 5px;
                            margin-bottom: 15px;
                            box-sizing:content-box;
                        }
                    }

                    .arrow1 {
                        position: absolute;
                        top: 8px;
                        left: 4px;
                    }
                    .arrow2 {
                        position: absolute;
                        top: 60px;
                        left: 4px;
                    }

                    .free_account_btn {
                        cursor: pointer;
                        width: 200px;
                        height: 39px;
                        margin: 0 auto;
                        outline: 0;
                        margin-top: 9px;
                        font-size: 15px;
                        color: #fff;
                        background-color: #a671ff;
                        text-align: center;
                        line-height: 38px;
                        -webkit-border-radius: 5px;
                    }

                    .icon-cny {
                        float: left;
                        position: absolute;
                        margin-top: 7px;
                        margin-left: 35px;
                    }

                    .login_btn {
                        cursor: pointer;
                        width: 200px;
                        height: 39px;
                        outline: 0;
                        margin-top: 25px;
                        font-size: 15px;
                        color: #fff;
                        background-color: #7187de;
                        text-align: center;
                        line-height: 38px;
                        margin: 0 auto;
                        -webkit-border-radius: 5px;
                    }
                }
            }

    }

    .icon-game_peo {
        background-image: url(/static/zyyl/img/logo/icon.png);
        background-position: -506px -81px;
        width: 25px;
        height: 25px;
    }
    .icon-cny {
        background-image: url(/static/zyyl/img/logo/icon.png);
        background-position: -83px -468px;
        width: 27px;
        height: 27px;
    }
    .icon-game_pas {
        background-image: url(/static/zyyl/img/logo/icon.png);
        background-position: -506px -56px;
        width: 25px;
        height: 25px;
    }
    .password_eyes2{
        position:relative;
        img{
            position:absolute;
            right:3px;
            top:2px;
            width:80px;
            height:35px;
        }
    }



    // 注册
    .register-pup, .register-pup2 {
        // width: 765px;
        width:720px;
        // height: 380px;
        position: fixed;
        top: 30%;
        z-index: 999;
        background: #FFFFFF;
        -webkit-border-radius: 8px;
    }
//     .register-pup .icon-cancle, .register-pup2 .icon-cancle {
//     position: absolute;
//     right: 10px;
//     top: 6px;
//     cursor: pointer;
// }
    .register-pup{
        padding:30px;
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    }

    .icon-cancle {
        background-image: url(/static/zyyl/img/logo/icon.png);
        background-position: -469px -263px;
        width: 33px;
        height: 35px;
    }
    .register-pup .icon-cancle, .register-pup2 .icon-cancle {
        position: absolute;
        right: 10px;
        top: 6px;
        cursor: pointer;
    }
    .register-pup .register-top .register-top-div, .register-pup2 .register-top .register-top-div {
        cursor: pointer;
        width: 160px;
        height: 33px;
        color: #9973e6;
        background-color: #FFFFFF;
        font-size: 16px;
        -webkit-border-radius: 20px;
        float: left;
        text-align: center;
        line-height: 32px;
        margin-right: 25px;
        border: 1px solid #9973e6;
        position: relative;
    }
    .register-pup .register-top .register-top-div .registerOrdinary, .register-pup2 .register-top .register-top-div .registerOrdinary {
        width: 29px;
        height: 24px;
        background: url(/static/zyyl/img/logo/registerOrdinary.png) no-repeat;
    }
    .register-pup .register-top .register-top-div div, .register-pup2 .register-top .register-top-div div {
        position: absolute;
        top: 5px;
        left: 25px;
    }
    .register-pup .register-top .register-top-div span, .register-pup2 .register-top .register-top-div span {
        margin-left: 20px;
    }



    .register-pup .register-left, .register-pup2 .register-left {
        // float: left;
        width: 210px;
        // padding-left: 42px;
        // padding-top: 10px;
        position: absolute;
        /* margin: auto; */
        top: 50%;
        transform: translateY(-50%);
        left: 42px;
    }
    .icon-register {
        background-image: url(/static/zyyl/img/logo/registerLogo.png);
        // background-position: 0 -114px;
        // width: 160px;
        // height: 159px;
        width:200px;
        height:200px;
        background-size:cover;
    }
    .phone-remid{
        width:95px;
        text-align: right;
    }
    .register-pup .register-content, .register-pup .register-mobile, .register-pup2 .register-content, .register-pup2 .register-mobile {
        float: right;
        // width: 540px;
        color: #b7b7b7;
    }
    .register-pup .register-content .no-border a, .register-pup .register-mobile .no-border a, .register-pup2 .register-content .no-border a, .register-pup2 .register-mobile .no-border a {
        text-decoration: underline;
        color: #b7b7b7;
    }
    #fast-register-btn {
        font-size: 14px;
        color: #fff;
        text-align: center;
        width: 285px;
        height: 40px;
        line-height: 38px;
        display: inline-block;
        border-radius: 6px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        background: #9973e6;
    }
    .register-pup .register-content .buttons .info, .register-pup .register-mobile .buttons .info, .register-pup2 .register-content .buttons .info, .register-pup2 .register-mobile .buttons .info {
        padding-left: 10px;
    }
    .register-pup .register-content .buttons .login, .register-pup .register-mobile .buttons .login, .register-pup2 .register-content .buttons .login, .register-pup2 .register-mobile .buttons .login {
        color: #cca352;
        text-decoration: underline;
    }
    .register-pup .register-content .inpt-group, .register-pup .register-mobile .inpt-group, .register-pup2 .register-content .inpt-group, .register-pup2 .register-mobile .inpt-group {
        height: 34px;
        margin-bottom: 15px;
        clear: both;
        position: relative;
    }
    .register-pup .register-content .inpt-group .inpt1, .register-pup .register-mobile .inpt-group .inpt1, .register-pup2 .register-content .inpt-group .inpt1, .register-pup2 .register-mobile .inpt-group .inpt1 {
        outline-color: #9973e6;
        // width: 230px;
        width:270px;
        height: 32px;
        border: 1px solid #dbdbdb;
        line-height: 32px;
        padding: 0 10px;
        float: left;
        -webkit-border-radius: 3px;
    }
    .register-pup .register-content .inpt-group .phone-remid, .register-pup .register-mobile .inpt-group .phone-remid, .register-pup2 .register-content .inpt-group .phone-remid, .register-pup2 .register-mobile .inpt-group .phone-remid {
        color: #727272;
        padding-top: 10px;
        float: left;
        padding-left: 10px;
    }
    .register-pup .register-content .inpt-group .password-class, .register-pup .register-mobile .inpt-group .password-class, .register-pup2 .register-content .inpt-group .password-class, .register-pup2 .register-mobile .inpt-group .password-class {
        float: left;
    }
    .register-pup .register-content .inpt-group .icon-eye-close, .register-pup .register-mobile .inpt-group .icon-eye-close, .register-pup2 .register-content .inpt-group .icon-eye-close, .register-pup2 .register-mobile .inpt-group .icon-eye-close {
        position: absolute;
        left: 200px;
        top: 12px;
        cursor: pointer;
    }
    .icon-eye-close {
        background-image: url(/static/zyyl/img/logo/icon.png);
        background-position: -506px -354px;
        width: 25px;
        height: 11px;
    }
    .register-pup .register-content .inpt-group .vldn-txt, .register-pup .register-mobile .inpt-group .vldn-txt, .register-pup2 .register-content .inpt-group .vldn-txt, .register-pup2 .register-mobile .inpt-group .vldn-txt {
        position: absolute;
        left: 260px;
        top: 11px;
        color: #fe0d0d;
        display: none;
    }
    .register-pup .register-content .inpt-group .inpt_code, .register-pup .register-mobile .inpt-group .inpt_code, .register-pup2 .register-content .inpt-group .inpt_code, .register-pup2 .register-mobile .inpt-group .inpt_code {
        outline-color: #9973e6;
        // width: 110px;
        width:202px;
        height: 32px;
        border: 1px solid #dbdbdb;
        line-height: 32px;
        padding: 0 10px;
        float: left;
        -webkit-border-radius: 3px;
    }
    .register-pup .register-content .inpt-group .inp_btn.disabled, .register-pup .register-mobile .inpt-group .inp_btn.disabled, .register-pup2 .register-content .inpt-group .inp_btn.disabled, .register-pup2 .register-mobile .inpt-group .inp_btn.disabled {
        background: #cccccc;
    }
    .register-pup .register-content .buttons, .register-pup .register-mobile .buttons, .register-pup2 .register-content .buttons, .register-pup2 .register-mobile .buttons {
        margin-top: 14px;
        font-weight: bold;
    }

    .register-pup .register-content .buttons #submitBtn, .register-pup .register-content .buttons #submitMobileBtn, .register-pup .register-mobile .buttons #submitBtn, .register-pup .register-mobile .buttons #submitMobileBtn, .register-pup2 .register-content .buttons #submitBtn, .register-pup2 .register-content .buttons #submitMobileBtn, .register-pup2 .register-mobile .buttons #submitBtn, .register-pup2 .register-mobile .buttons #submitMobileBtn {
        font-size: 14px;
        color: #fff;
        text-align: center;
        // width: 285px;
        width:250px;
        height: 40px;
        line-height: 38px;
        display: inline-block;
        border-radius: 6px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        background: #9973e6;
    }


</style>
