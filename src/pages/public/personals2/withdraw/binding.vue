<template>
  <div class="binding">
    <div class="header">
      绑定银行卡
    </div>
    <div class="content clearfloat">

      <div class="deposit-left fl">
        <div class="row">
          <label class="text">
            提款人姓名：
          </label>
          <input type="text" v-model="cardName" maxlength="15" v-if="!$store.state.mainState.userinfo.realName">
          <input type="text" v-model="cardName" disabled v-else>

        </div>

        <div class="row">
          <label class="text">
            开户银行：
          </label>
          <Select v-model="bankId" v-if="!qitaBank">
            <Option v-for="(item,i) in bankData" :key="i" :value="item">{{item}}</Option>
          </Select>
          <input type="text" v-model="bankId" v-else>

          <!-- <input type="hidden" v-model="item.id"> -->
        </div>
        <div class="row">
          <label class="text">
            银行卡号：
          </label>
          <input type="text" v-model="cardNum2" v-on:keyup="cardgeshi" autocomplete='off'>
        </div>

        <div class="row">
          <label class="text">
            银行所在省/市：
          </label>
          <Select class="adressSelect" v-model="cardAddress" style="width:120px;" @on-change="hanlderAddres">
            <Option v-for="(item,i) in addresData" :key="i" :value="item.name">{{item.name}}</Option>
          </Select>

          <Select class="csSelect" v-model="addressInfo" style="width:120px;">
            <Option v-for="(item,i) in addresList" :key="i" :value="item">{{item}}</Option>
          </Select>
          <!-- <v-distpicker class="distpicker"  @selected="onSelected"></v-distpicker> -->
        </div>
        <!-- <div class="row">
                                     <label class="text">
                                         银行分行：
                                     </label>
                                     <input type="text">
                          </div> -->
                
        <div class="row" v-if="this.$store.state.mainState.userinfo.payPassword == 'unset'">
          <label class="text">
            资金密码：
          </label>
          <input type="password" v-model="payPassword" maxlength="6" autocomplete='off'>
        </div>
         <div class="row">
              <label class="text">
                确认密码：
              </label>
              <input type="password" maxlength="6" v-model="confirmPay">
        </div>

        <div class="row" v-if="this.$store.state.mainState.userinfo.secret=='unset'">
          <label class="text">
            密保问题：
          </label>
          <Select v-model="key" class="mbSelect">
            <Option v-for="(item,i) in secretKeyList" :key="i" :value="item">{{item}}</Option>
          </Select>
        </div>
        <div class="row" v-if="this.$store.state.mainState.userinfo.secret=='unset'">
          <label class="text">
            密保答案：
          </label>
          <input type="text" v-model="value">
        </div>

        <div class="bar">
          <label>温馨提示：</label>
          <span>取款前请设置密保问题，并牢记信息
            <!-- <span @click="setEncrypted">设置密保问题</span> -->
        </span>

        </div>

        <!-- <span class="max-bank">最多可绑定5张提款银行卡</span> -->

        <div class="submit" @click="setBank" :class="{'active':canClick}">
          确认提交
        </div>

        <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">
          {{toastText}}
        </div>

      </div>

      <div class="deposit-right fl">
        <Carousel v-model="value1" loop radius-dot v-if="bankList.length">
          <CarouselItem v-for="(item,i) in bankList" :key="i">
            <div class="bank" :style="{backgroundImage: 'url(' + item.imgUrl + ')', backgroundSize:'cover'}">
              <div class="title">
                <img src="/static/public/image/bank/yhk.png" alt="">
                <span>{{item.bankName}}</span>
              </div>

              <div class="bank-kh">
                <p>{{item.cardNum}}</p>
              </div>
              <div class="bank-info">
                <span class="fl">取款人：{{item.cardName}}</span>

                <span class="fr">
                  绑定时间： {{item.created_at}}
                </span>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
        <div v-else style='margin:100px 0;text-align:center;'><img src='/static/public/image/userImg/no-data.png'
                                                                   alt=''></div>
      </div>
    </div>

  </div>

  
</template>

<script>
  import store from '@/vuex/store'
  import VDistpicker from 'v-distpicker'
  import addres from '@/service/public/addres'
  import UserService from '@/service/public/UserService.js'

  export default {
    data () {
      return {
        value1: 0,
        autoplay: 3500,
        bankList: [],
        bankId: '',
        qitaBank: false,
        cardName: this.$store.state.mainState.userinfo.realName,
        cardAddress: '',
        toastShow: false,
        toastNum: 30,
        cardNum: '',
        cardNum2:'',
        payPassword: '',
        confirmPay:'',
        toastText: '',
        bankData: [
          '工商银行',
          '农业银行',
          '建设银行',
          '招商银行',
          '中国银行',
          '浦发银行',
          '中信银行',
          '交通银行',
          '民生银行',
          '兴业银行',
          '邮政银行',
          '光大银行',
          '华夏银行',
          '浙商银行',
          '包商银行',
          '北京银行',
          '上海银行',
          '哈尔滨银行',
          '江苏银行',
          '其它'
        ],
        secretKeyList: [],
        addresData: addres.province_list,
        addresList: [],
        addressInfo: '',
        key: '',
        value: '',
        canClick: false,
        param:'',
      }
    },
    methods: {
      userBank () {
        this.$http.post(`${this.$HOST_NAME}/member/bank`).then(res => {
          if (res.code == 200) {
            this.bankList = res.data.reverse()
            this.bankList.forEach(v => {
              v.created_at = this.$moment
                .unix(v.created_at - 0)
                .format('YYYY-MM-DD HH:mm:ss')
              v.cardNum = v.cardNum
                .replace(/\s/g, '  ')
                .replace(/(.{4})/g, '$1 ')
              try {
                v.imgUrl = `/static/public/image/bankImg/${v.bankName}.png`
              } catch (err) {
                v.imgUrl = `/static/public/image/bankImg/morenBank.png`
              }
            })
            // this.secretKey();
            this.$store.commit('loading', false)
          } else {
            this.$store.commit('loading', false)
          }
        })
      },
      // onSelected(data) {
      //   this.cardAddress = data.province.value + data.city.value;
      // },
      hanlderAddres (val) {
        this.addresData.forEach(v => {
          if (v.name == val) {
            this.addresList = v.list
          }
        })
      },
      cardgeshi(){
          var v=this.cardNum2;
          if (/\S{5}/.test(v)) {
            this.cardNum2 = v.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
        }
      },
      setBank () {
        if (this.canClick) {
          return false
        }
        var reg = /^[\u4E00-\u9FA5·]+$/
        if (!reg.test(this.cardName) &&
          !this.$store.state.mainState.userinfo.realName
        ) {
          this.toastText = '请输入正确的提款名'
          this.toastShow = true
          this.toastNum = 25
          return false
        }

        // if (this.cardName.length > 4) {
        //   this.toastText = "提款名不能大于4位";
        //   this.toastShow = true;
        //   this.toastNum = 30;
        //   return false;
        // }

        if (!this.bankId) {
          this.toastText = '请选择或输入银行'
          this.toastShow = true
          this.toastNum = 80
          return false
        }
          

          this.cardNum = this.cardNum2.replace(/\s/g,""); 
          console.log(this.cardNum);
        if (this.cardNum.length < 16 || this.cardNum.length > 20) {
          this.toastText = '请输入16~20位银行卡号'
          this.toastShow = true
          this.toastNum = 130
          return false
        }

        var num = /^\d*$/ //全数字
        if (!num.exec(this.cardNum)) {
          this.toastText = '请输入正确的银行卡号'
          this.toastShow = true
          this.toastNum = 135
          return false
        }

        if (!this.cardAddress) {
          this.toastText = '请选择银行所在地'
          this.toastShow = true
          this.toastNum = 188
          return false
        }

        if (!this.payPassword &&
          this.$store.state.mainState.userinfo.payPassword == 'unset'
        ) {
          this.toastText = '请输入支付密码'
          this.toastShow = true
          this.toastNum = 240
          return false
        }
        if(this.payPassword!=this.confirmPay&& this.$store.state.mainState.userinfo.payPassword == 'unset'){
           this.toastText = '两次密码不一样'
           this.toastShow = true
           this.toastNum = 292
           return false
        }
         if(!this.confirmPay&& this.$store.state.mainState.userinfo.payPassword == 'set'){
           this.toastText = '请输入支付密码'
           this.toastShow = true
           this.toastNum = 240
           return false
        }
        
        if (!this.key&& this.$store.state.mainState.userinfo.secret=='unset') {
          this.toastText = '请选择密保问题'
          this.toastShow = true
          this.toastNum = 345
          return false
        }

        if (!this.value && this.$store.state.mainState.userinfo.secret=='unset') {
          this.toastText = '请输入密保问题'
          this.toastShow = true
          this.toastNum = 398
          return false
        }
        this.toastShow = false
        if(this.$store.state.mainState.userinfo.payPassword == 'unset'){
             if(this.$store.state.mainState.userinfo.secret=='unset'){
                this.param = {
                bankName: this.bankId,
                cardNum: this.cardNum.trim(),
                cardAddress: this.cardAddress + this.addressInfo,
                payPassword:this.payPassword,
                payPassword_confirmation:this.confirmPay,
                key: this.key,
                value: this.value
              }
            }else{
              this.param = {
                bankName: this.bankId,
                cardNum: this.cardNum.trim(),
                cardAddress: this.cardAddress + this.addressInfo,
                payPassword:this.payPassword,
                payPassword_confirmation:this.confirmPay,
              }
             }
        }
       
        if (this.$store.state.mainState.userinfo.payPassword == 'set'){ 
              this.param = {
              bankName: this.bankId,
              cardNum: this.cardNum.trim(),
              cardAddress: this.cardAddress + this.addressInfo,
              payPassword :this.confirmPay
            }
        }
        if(!this.$store.state.mainState.userinfo.realName){
            this.param.cardName=this.cardName
        }
        
        this.canClick = true
        setTimeout(() => {
          this.canClick = false
        }, 3 * 1000)
   
        this.$postS(`member/set-bank-info`, this.param).then(res => {
          if (res.code == 200) {
            this.$success('绑定成功')
            this.userBank()
            this.param={}
            this.payPassword = ''
            this.value = ''
            this.cardNum2 = ''
            this.cardAddress = ''
            this.addressInfo=''
            this.confirmPay=''
            this.bankId=''

            UserService.vpGetBasicInfo.call(this)
          } else {
            this.$error(res.message)
          }
        })

        // let bankName;
        // this.bankData.forEach(v => {
        //   if ((v.bankId = this.bankId)) {
        //     bankName = v.bankName;
        //   }
        // });
        // if (this.cardName) {
        //   if (this.cardName.length > 4) {
        //     this.toastText = "提款名不能大于4位";
        //     this.toastShow = true;
        //     this.toastNum = 30;
        //   } else {
        //     if (this.bankId) {
        //       if (this.cardNum) {
        //         if (this.cardAddress) {
        //           if (this.payPassword && this.bankList.length == 0) {
        //             if (this.key || this.$store.state.mainState.userinfo.secret) {
        //               if (
        //                 this.value ||
        //                 this.$store.state.mainState.userinfo.secret
        //               ) {
        //                 this.toastShow = false;
        //                 this.$http
        //                   .post(`${this.$HOST_NAME}/member/setBank`, {
        //                     bankName: this.bankId,
        //                     cardName: this.cardName,
        //                     cardNum: this.cardNum,
        //                     cardAddress: this.cardAddress + this.addressInfo,
        //                     default: "yes",
        //                     bankId: 1,
        //                     payPassword: this.payPassword,
        //                     key: this.key,
        //                     value: this.value
        //                   })
        //                   .then(res => {
        //                     if (res.code == 200) {
        //                       this.$success("绑定成功");
        //                       this.userBank();
        //                       this.payPassword = "";
        //                       this.value = "";
        //                       this.cardNum = "";
        //                       this.cardAddress = "";
        //                       UserService.vpGetBasicInfo.call(this);
        //                     } else {
        //                       this.$error(res.message);
        //                     }
        //                   });
        //               } else {
        //                 this.hanlderValue();
        //               }
        //             } else {
        //               this.toastText = "请选择密保问题";
        //               this.toastShow = true;
        //               this.toastNum = 320;
        //             }
        //           } else {
        //             this.hanlderPasword();
        //           }
        //         } else {
        //           this.hanlderCardAddress();
        //         }
        //       } else {
        //         this.hanlderCard();
        //       }
        //     } else {
        //       this.hanlderBank();
        //     }
        //   }
        // } else {
        //   this.hanlderName();
        // }
      },
      setEncrypted () {
        this.$store.commit('showNav', {
          child: 7
        })
        this.$store.commit('showContent', {
          parent: 'personage'
        })
        this.$store.commit('bankSafety', 2)
      },

      // commonBank() {
      //   this.$http.post("${this.$HOST_NAME}/common/bank").then(res => {
      //     if (res.code == 200) {
      //       this.bankData = res.data;
      //     }
      //   });
      // },
      secretKey () {
        this.$http.post(`${this.$HOST_NAME}/member/secretKey`).then(res => {
          if (res.code == 200) {
            this.secretKeyList = res.data
            // this.key = res.data[0];
            this.loginKey = res.data[0]
          }
        })
      }
    },
    created () {
      this.$nextTick(() => {
        this.$store.commit('loading', true)
        this.userBank()
        this.secretKey()
      })
    },
    destroyed () {
      this.$store.commit('loading', false)
    },
    components: {
      VDistpicker
    },
    watch: {
      bankId (newValue, oldValue) {
        if (newValue == '其它') {
          this.qitaBank = true
          this.bankId = ''
        }
      }
    }
  }
</script>

<style lang="less">
.peronsals .binding .content  .deposit-left{
  .ivu-select {
      width: 242px;
      .ivu-select-dropdown-list {
        height: 265px;
      }
    }
    .adressSelect {
      .ivu-select-dropdown-list {
        height: 340px;
      }
    }
    .csSelect {
      .ivu-select-dropdown-list {
        max-height: 340px;
        height: auto;
      }
    }
    .mbSelect {
      .ivu-select-dropdown-list {
        max-height: 230px;
        height: auto;
      }
    }
}
  .binding {
    .header {
      height: 66px;
      //  font-weight: 200;
      border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      margin: 0 14px;
      font-family: "Microsoft YaHei";
    }
    .content {
      .deposit-left {
        padding-top: 6px;
        width: 52%;
        position: relative;
        .row {
          margin-top: 15px;
          .text {
            display: inline-block;
            width: 144px;
            text-align: right;
            font-size: 15px;
            font-family: "Microsoft YaHei";
            vertical-align: middle;
          }
          input {
            height: 38px;
            font-size: 16px;
            background: #f5f5f5;
            border: 1px solid #f5f5f5;
            border-radius: 10px;
            // padding: 0 16px;
            text-align: left;
            text-indent: 0.7em;
            -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
            -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
            box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
            color: #666;
            &:not(.other) {
              width: 242px;
              height: 38px;
              background: #f9f9f9;
            }
          }
          input:focus {
            outline: none !important;
            border: 1px solid rgba(254, 134, 93, 0.6);
            box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
          }
          
          // .distpicker {
          //   display: inline-block;
          //   // select:nth-child(3){
          //   //     display: none;
          //   // }
          //   // select {
          //   //   width: 80px;
          //   //   padding: 0.5em 0;
          //   //   padding-left: 0.5em;
          //   //   height: 38px;
          //   //   background: linear-gradient(
          //   //     to bottom,
          //   //     #ffffff 0,
          //   //     #ffffff 50%,
          //   //     #f0f0f0 100%
          //   //   );
          //   //   color: #666;
          //   //   border-radius: 10px;
          //   //   outline: none;
          //   // }
          //   // select:hover {
          //   //   border-color: #dddee1;
          //   //   background: #f90;
          //   //   color: #fff;
          //   // }
          //   // option {
          //   //   background: linear-gradient(
          //   //     to bottom,
          //   //     rgba(65, 60, 90, 0.85) 0,
          //   //     #00051a 100%
          //   //   );
          //   //   position: relative;
          //   // }
          //   // option::after {
          //   //   content: "";
          //   //   position: absolute;
          //   //   top: 0;
          //   //   left: 0;
          //   //   background: #000;
          //   //   width: 100%;
          //   //   height: 100%;
          //   // }
          // }
        }
        .bar {
          // margin-top: 36px;
          height: 50px;
          line-height: 50px;
          // border-bottom: 1px solid #dbdbdb;
          label {
            display: inline-block;
            width: 144px;
            text-align: right;
            font-size: 15px;
            font-family: "Microsoft YaHei";
          }
          span {
            font-size: 15px;
            font-family: "Microsoft YaHei";
            span {
              color: #f90;
              text-decoration: underline;
              font-family: "Microsoft YaHei";
              cursor: pointer;
              font-size: 15px;
              padding-left: 5px;
              padding-left: -2px;
            }
          }
        }
        .submit {
          width: 140px;
          height: 42px;
          line-height: 42px;
          text-align: center;
          color: #fff;
          font-size: 1.8em;
          background: linear-gradient(180deg, #ff3492, #ff1e4f);
          border-radius: 10px;
          margin-top: 10px;
          margin-left: 150px;
          display: inline-block;
          cursor: pointer;
          &.active {
            background: linear-gradient(180deg, #ccc, #eee);
            &:hover {
              cursor: not-allowed;
            }
          }
        }
        .max-bank {
          padding-left: 20px;
          font-size: 1.3em;
          display: block;
          font-size: 15px;
          border-bottom: 1px solid #f3f3f3;
          padding-bottom: 20px;
          margin: 1px 50px;
        }
        .toast {
          width: 200px;
          height: 30px;
          line-height: 30px;
          background: #ff9900;
          color: #fff;
          font-size: 14px;
          font-weight: 200;
          position: absolute;
          right: -65px;
          top: 30px;
          border-radius: 5px;
          z-index: 99;
          text-indent: 1em;
        }
        .toast::after {
          content: "";
          width: 0;
          height: 0;
          border-width: 4px 8px 4px 0px;
          border-style: solid;
          border-color: transparent #f90 transparent transparent;
          display: block;
          position: absolute;
          top: 10px;
          left: -8px;
        }
      }
      .deposit-right {
        width: 48%;
        height: 584px;
        background: #f2f2f2;
        border-radius: 0 0 15px 0;
        // margin-top: 66px;
        .bank {
          width: 380px;
          height: 210px;
          // background: linear-gradient(90deg, #ff6d4f, #fb4f5a);
          margin: 0 auto;
          margin-top: 25px;
          border-radius: 23px;
          padding: 18px 20px;
          background-color: #000;
          .title {
            img {
              width: 36px;
              vertical-align: middle;
              margin-right: 8px;
              opacity: 0;
            }
            span {
              font-size: 1.6em;
              color: #fff;
              vertical-align: middle;
              margin-left: 5px;
            }
          }
          .bank-kh {
            height: 110px;
            line-height: 110px;
            text-align: center;
            p {
              font-size: 2.6em;
              color: #fff;
            }
          }
          .bank-info {
            height: 36px;
            line-height: 36px;
            span {
              display: inline-block;
              font-size: 1.4em;
              color: #fff;
            }
          }
        }
        .ivu-carousel-dots-inside {
          bottom: -20px;
        }
      }
    }
  }
</style>
