<template>
  <div class="wbw-register">
    <h3 class="reg_tit">【500万彩票集团】</h3>
    <p class="reg_small">
      尊贵价值唯您独享，欢迎您的加入！手机APP一键存取款，随时随地畅玩，轻松玩爆！</p>
    <p class="reg_small">1、添加客服QQ/微信领取首存礼金8-8888元，天天免费救援金，天天免费抢红包；<br/>
    2、全面支持【微信、支付宝、QQ钱包、网银、财付通、花呗、京东钱包】，支付秒到帐；<br/>
    3、存款10元起，24小时提款不限次数，无需手续费，1-3分钟快速到帐；</p>

    <ul class="regMain">

      <li>
        <span>帐号：</span>
        <input type="text" autocomplete="off" maxlength="10" class="userInput" v-model="userName" @blur="getCode" placeholder="帐号6-10位数字或字母">
      </li>

      <li>
        <span>密码：</span>
        <input type="password" maxlength="20" autocomplete="off" class="userInput" v-model="password" placeholder="密码 8-20位数字或字母">
      </li>

      <li>
        <span>重复密码：</span>
        <input type="password" maxlength="20" autocomplete="off" class="userInput" v-model="password_confirmation" placeholder="请重复密码">
      </li>

      <li v-for="(item,key) in register" :key="key">
        <span>{{item.name}}</span>
        <input type="text" autocomplete="off" maxlength="11" class="userInput" v-model="item.value" placeholder="请输入手机号">
      </li>

      <li>
        <span>验 证 码：</span>
        <input type="passwoed" maxlength="4" autocomplete="off" class="userInput" v-model="code" placeholder="请输入验证码">
        <span class="codeyzm" :style="{backgroundImage: 'url(' + codeImg + ')', backgroundSize:'cover'}"
              @click="getCode"></span>
      </li>

       <li v-if="iscode">
        <span>邀请码：</span>
        <input type="text" autocomplete="off" class="userInput" v-model="intacode" maxlength="6"  placeholder="邀请码" :readonly="incodeReadonly">
      </li>


      <li>
        <span></span>
        <input type="checkbox" style="width: inherit; margin-right: 5px;" v-model="isCheckbox">
        <span class="man18">我已经年满18岁</span>
      </li>

      <li style="margin-top: 10px;">
        <span></span>
        <a class="mainColorBtn" @click="registerTest">注 册</a>
        <a class="chongzhi" @click="chongzhi">重 置</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import {_SetPost,postS,getS} from '@/service/public/service.js'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        userName: '',
        password: '',
        password_confirmation: '',
        phoneNumber: '',
        pulicError: '',
        register: [],
        codeImg: '/static/ddcp/img/home/code.jpg',
        captcha_key: '',
        code: '',
        agent: null,
        isCheckbox: true,
        intacode:'',
        iscode:false,
        incodeReadonly: false,
      }
    },
    methods: {
      async registerTest () {
        let staueAcc = this.validateAccountUserNamenew(this.userName)
        let stauePassword = this.validateAccountnew(this.password)


        if (!staueAcc) {
          alert('帐号 6-10位数字或字母')
          return false
        }
        if (!stauePassword) {
          alert('密码 8-20位数字或字母')
          return false
        }
        if (!this.isCheckbox) {
          alert('请确认您是否年满18周岁')
          return false
        }

        if (this.password != this.password_confirmation) {
          alert('两次密码不一致')
          return false
        }
        if (this.code == '') {
          alert('请输入验证码')
          return false
        }
        if (this.code.length < 4 || this.code.length > 4) {
          alert('请输入4位验证码')
          return false
        }
        //   if (!stauePhone) {
        //     this.pulicError = "输入的手机号有误";
        //     return false;
        //   }
         if(this.iscode==true){
           if(!this.intacode||this.intacode.length<6|| this.intacode.length>6){
               alert('请输入6位邀请码')
               return false
           }
        }
        let params = {}
        params.userName = this.userName
        params.password = this.password
        params.device = 'pc'
        params.code = this.code
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
          params.agent = this.agent
        }

        let res = await _SetPost(
          `${this.$HOST_NAME}/checkUsername/${this.userName}`, {}
        )
        if (res && res.code == 200) {} else {
          alert('帐号已存在')
          return false
        }
        this.registerSubmit(params)
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
            localStorage.setItem('refund', JSON.stringify(refund))
          })
          window.location.href = '/'
        } else {
          this.dNotify(res.message, 'error')
        }
      },
      login () {
        this.$store.commit('mainState/setChooseModel', '登录')
        this.$store.commit('mainState/setLoginTitle', '登录')
      },
      getCode () {
        if (!this.userName) {
          return false
        }

        getS(`captcha`, { userName:this.userName}).then(res => {
          if (res.code == 200) {
            this.codeImg = res.data.captcha_image_text
            this.captcha_key = res.data.captcha_key
          }
        })

      },
      chongzhi () {
        this.userName = ''
        this.password = ''
        this.password_confirmation = ''
        this.code = ''
        this.register.forEach(v => {
          v.value = ''
        })
      }
    },

    created () {
      this.$nextTick(() => {
        this.agent = this.GetQueryString('agent')||this.GetQueryString('k');
        // console.log(this.agent)
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
      })
    },
     mounted () {
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
    },
    store
  }
</script>

<style lang="less" scoped>
  .reg_tit {
    line-height: 50px;
  }

  .reg_small{
    line-height: 20px;
  }

  .wbw-register {
    width: 870px;
    min-height: 480px;
    margin: 30px auto;
    border: 1px solid #e1e1e2;
    padding-top: 20px;
    font-size: 14px;
    background: url("../../../../static/ddcp/img/home/loginBg.png") no-repeat 450px 220px #fff;

    h3 {
      font-size: 24px;
      color: #ff2c55;
      margin-bottom: 5px;
      margin-left: 30px;
      margin-top: 0;
    }

    p {
      margin-left: 30px;
      color: #646464;
      margin-bottom: 10px;
      margin-top: 0;
    }

    .regMain {
      border-top: 1px dashed #e0e3e6;
      padding: 50px 0;
      font-size: 0;
      margin: 0 30px;

      li {
        color: #000;
        line-height: 36px;
        margin-bottom: 4px;
        position: relative;

        > span {
          display: inline-block;
          width: 18%;
          text-align: right;
          font-size: 12px;
          color: #333;
          padding-right: 5px;
        }

        .man18 {
          width: 12%;
        }

        > input {
          height: 36px;
          width: 280px;
          border: 1px solid #e7e8e8;
          background-color: #feffff;
          color: #a9a9a9;
          padding-left: 10px;
          margin: 0;
          vertical-align: top !important;
          line-height: 20px;
          padding: 5px;
          font-size: 12px;
          text-indent: 5px;
        }

        > input:focus {
          outline: none;
        }

        .codeyzm {
          width: 110px;
          height: 30px;
          padding-left: 10px;
          position: absolute;
          top: 3px;
          left: 313px;
        }

        .mainColorBtn {
          display: inline-block;
          width: 130px;
          line-height: 36px;
          color: #fff !important;
          padding: 0 15px;
          border-radius: 3px;
          font-size: 14px;
          margin-right: 10px;
          min-width: 55px;
          text-align: center;
          cursor: pointer;
          background: #e4393c;
          margin: 10px 0;
        }

        .chongzhi {
          display: inline-block;
          width: 130px;
          line-height: 36px;
          color: #fff !important;
          padding: 0 15px;
          border-radius: 3px;
          font-size: 14px;
          margin-right: 10px;
          min-width: 55px;
          text-align: center;
          cursor: pointer;
          background: rgb(113, 112, 116);
          margin: 10px 0;
          margin-left: 20px;
        }
      }
    }
  }
</style>
