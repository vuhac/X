<template>
  <div class="internerBank">
    <!-- 头部 -->
    <div class="header">
      <ul>
        <li>
          <img src="/static/public/image/userImg/wangyin-pay@3x.png" alt="">
          <span>网银转帐</span>
        </li>
      </ul>
    </div>
    <!-- 宣传栏 -->
    <div class="warning-wrap" v-if="this.$store.state.mainState.flag">
      <div class="warning">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-user-sound"></use>
        </svg>
        <span>{{notice}}</span>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content">
      <div class="bar">
        <label class="text">选择汇入银行：</label>
        <Select v-model="depositId" @on-change="selectVal">
          <Option v-for="(item,i) in depositBank" :key="i" :value="item.id">{{item.bankName}}</Option>
        </Select>
      </div>

      <div class="bar" v-if="bankShow">
        <label class="text">汇入银行：</label>
        <div class="bank" :style="{backgroundImage: 'url(' + depositDetail.imgUrl + ')', backgroundSize:'cover'}">
          <div class="title">
            <img src="/static/public/image/bank/yhk.png" alt="">
            <span>{{depositDetail.bankName}}</span>
            <!-- <a class="fr"  @click="onCopy(depositDetail.bankName)">复制</a> -->
          </div>

          <div class="row">
            <label>姓名：</label>
            <span class="cardNameOv">{{depositDetail.cardName}}</span>
            <a class="fr" @click="onCopy(depositDetail.cardName)">复制</a>
          </div>

          <div class="row">
            <label>帐号：</label>
            <span>{{depositDetail.cardNum}}</span>
            <a class="fr" @click="onCopy(depositDetail.cardNum)">复制</a>
          </div>

          <div class="row">
            <label>开户行：</label>
            <span>{{depositDetail.cardAddress}}</span>
            <a class="fr" @click="onCopy(depositDetail.cardAddress)">复制</a>
          </div>
        </div>

      </div>

      <div class="bar">
        <label class="text">存款金额：</label>
        <input type="text" v-model="amount">
        <RadioGroup v-model="amount" class="RadioGroup">
          <Radio label="50">

            <span class="radio-span">50</span>
          </Radio>
          <Radio label="100">

            <span class="radio-span">100</span>
          </Radio>
          <Radio label="500">
            <span class="radio-span">500</span>
          </Radio>
          <Radio label="1000">
            <span class="radio-span">1000</span>
          </Radio>
          <Radio label="5000">
            <span class="radio-span">5000</span>
          </Radio>
        </RadioGroup>
      </div>

      <div class="bar" v-if="preferentialList.length !==0">
        <label class="text">优惠方式：</label>
        <Select v-model="preferentiaId">
          <Option v-for="(item,i) in preferentialList" :value="item.id" :key="i">{{item.title}}</Option>
        </Select>
      </div>

      <div class="bar">
        <label class="text">汇款方式：</label>
        <Select v-model="type">
          <Option v-for="(item,i) in typeList" :key="i" :value="item.value">{{item.name}}</Option>
        </Select>
      </div>

      <div class="bar">
        <label class="text">汇款姓名：</label>
        <input type="text" v-model="name">
      </div>

      <div class="bar">
        <label class="text">汇款时间：</label>
        <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placement="top" style="width: 200px" placeholder="请选择时间"
                    v-model="timer" @on-change="hanlderTimer"></DatePicker>
      </div>
    </div>

    <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">
      {{toastText}}
    </div>

    <div class="submitPay" :class="{'active':!subMitStaue}" @click="application">
      确认提交
    </div>

    <!-- <Spin size="large" fix v-if="ListSpinShow"></Spin> -->
    <Modal
      v-model="ifmodel"
      class-name="agent-transfer"
      width="345"
      :mask-closable="false"
    >
      <div
        class="vp-admin-wrap-close"
        slot="close"

      >
        <!-- <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div> -->
      </div>
      <div slot="header" class="tishi">
           <span>请填写真实姓名</span>
      </div>
      <div class="agent-con">
           <span class="rename">请务必填写真实姓名，一旦绑定将无法修改姓名</span>
           <input type="text" placeholder="真实姓名" id="inputtext" v-model="realName">
          <!-- <span v-show="showname" class="showname">*请输入用户名</span> -->
      </div>
      <div slot="footer" class="footer">
            <span class="span1" @click="hidemode">取消</span>
            <span @click="sendName">确定</span>
      </div>
    </Modal>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import UserService from "@/service/public/UserService.js";

  export default {
    data () {
      return {
        subMitStaue: true,
        notice:
          '公司银行帐号随时更换! 请每次存款都至 [汇款提交] 进行操作。 入款至已过期帐号，公司无法查收，恕不负责!', //顶部公告
        amount: '',
        ifmodel:false,
        depositBank: [],
        depositDetail: {},
        depositId: '',
        realName:"",
        showname:false,
        typeList: [
          {name: '网银转帐', value: '网银转帐'},
          {name: '支付宝转帐', value: '支付宝转帐'},
          {name: '微信转帐', value: '微信转帐'},
          {name: '银行柜台', value: '银行柜台'},
          {name: 'ATM现金', value: 'ATM现金'},
          {name: 'ATM卡转', value: 'ATM卡转'},
          {name: '手机转帐', value: '手机转帐'},
          {name: '其他', value: '其他方式'}
        ],
        type: '网银转帐',
        toastShow: false,
        toastNum: 345,
        toastText: '请选择存款金额',
        timer: '',
        preferentialList: [],
        preferentiaId: '',
        name: ''
      }
    },
    methods: {
      // 银行卡信息复制
      onCopy (text) {
        this.$copyText(text.replace(/\s*/g, '')).then(() => {
          this.$success('复制成功')
        })
      },

      // 清除
      formClean() {
        this.depositId = ''
        this.amount = ''
        this.name = ''
        this.timer = ''
        this.type = '网银转帐'
      },

      // 存款申请
      application () {
        if (!this.subMitStaue) {
          return false
        }
        if (!this.depositId) {
          this.toastShow = true
          this.toastText = '请选择汇入银行'
          this.toastNum = 130
          setTimeout(() => {
            this.toastShow = false
          }, 2000)
          return false
        }

        let isAmount = this.dInvalidMoney(this.amount)

        if (!isAmount) {
          this.toastShow = true
          this.toastText = '请输入正确存款金额'
          this.toastNum = 335
          setTimeout(() => {
            this.toastShow = false
          }, 2000)
          return false
        }

        if (this.amount - 0 < 10) {
          this.toastShow = true
          this.toastText = '存款金额不能低于10元'
          this.toastNum = 335
          setTimeout(() => {
            this.toastShow = false
          }, 2000)
          return false
        }

        if (this.amount - 0 < 10) {
          this.toastShow = true
          this.toastText = '存款金额不能高于10000元'
          setTimeout(() => {
            this.toastShow = false
          }, 2000)
          this.toastNum = 335
          return false
        }

        let reg = /^[\u4E00-\u9FA5]+$/

        if (!reg.test(this.name)) {
          this.toastShow = true
          this.toastText = '请输入正确汇款姓名'
          this.toastNum = 435
          return false
        }

        if (!this.timer) {
          this.toastShow = true
          this.toastText = '请选择时间'
          this.toastNum = 486
          return false
        }

        this.toastShow = false

        this.subMitStaue = false
        setTimeout(() => {
          this.subMitStaue = true
        }, 5 * 1000)
         if(!JSON.parse(localStorage.userinfo).realName){
            this.ifmodel=true
            return false
        }
        this.sendmoney()
      },

      // 选中汇入银行
      selectVal (val) {
        this.depositBank.forEach(v => {
          if (v.id == val) this.depositDetail = v
        })
      },

      // 存款金额 选项
      // hanlderAmount() {
      //   if (this.amount) {
      //     this.toastShow = false;
      //   } else {
      //     this.toastShow = true;
      //     setTimeout(() => {
      //       this.toastShow = false;
      //     }, 3000);
      //   }
      // },

      // 获取系统入款卡信息
      getbank () {
        this.$store.commit('loading', true)
        this.$http.post(`${this.$HOST_NAME}/deposit/bank`).then(res => {
          if (res.code == 200) {
            res.data.forEach(v => {
              // 给银行卡添加背景图片
              try {
                v.imgUrl = `/static/public/image/bankImg/${
                  v.bankName
                  }.png`
              } catch (err) {
                v.imgUrl = `/static/public/image/bankImg/morenBank.png`
              }

              v.cardNum = v.cardNum
                .replace(/\s/g, '  ')
                .replace(/(.{4})/g, '$1 ')
            })
            this.depositBank = res.data
            // this.depositDetail = res.data[0];
            // this.depositId = res.data[0].id;
            this.$store.commit('loading', false)
          } else {
            this.$error(res.message, 6000)
          }
        })
      },
      hidemode(){
          this.ifmodel=false
        //   this.$store.commit('showPersonal', {
        //     bool: false
        // })
      },
      sendName(){
        if(this.realName){
          this.$postS(`member/set-member-info`, {
                realName:this.realName
           }).then(res=>{
                if(res && res.code==200){
                    this.ifmodel=false
                    UserService.vpGetBasicInfo.call(this);
                    this.sendmoney()
                 }
           })
        }else{
        }
       
      },
      sendmoney(){
            this.$http
            .post(`${this.$HOST_NAME}/deposit/application`, {
              amount: this.amount,
              depositId: this.depositId,
              bankId: this.depositDetail.cardNum.replace(/\s/g, ''), //用户银行卡号
              bankName: this.depositDetail.bankName, //用户银行名称
              bankAccountName: this.depositDetail.cardName, //用户姓名
              bankSerialNumber: '',
              type: this.type,
              preferentialId: this.preferentiaId,
              depositRealName: this.name,
              depositTime: this.timer
              })
              .then(res => {
                if (res.code == 200) {
                  this.$success('提交成功，请等待审核')
                } else {

                  this.$error('提交失败，请检查您输入的内容')
                }
                console.log(res)
                this.formClean()
              })
      },
      // 获取存款优惠方式
      getPreferential () {
        // this.$http.post(`${this.$HOST_NAME}/preferential/deposit`).then(res => {
        //   if (res.code == 200) {
        //     res.data.forEach((v, i) => {
        //       this.preferentialList[i] = {};
        //       this.preferentialList[i].id = v.id;
        //       this.preferentialList[i].title = v.title;
        //     });
        //   }
        // });
      },
      hanlderTimer (date) {
        this.timer = date
      }
    },
    created () {
      this.$nextTick(() => {
        this.getbank()
        // this.getPreferential();
      })
      // let realName = JSON.parse(localStorage.userinfo).realName;
      // console.log(realName)
      // if(realName==""){
      //       this.ifmodel=true
      // }
    },
    destroyed () {
      this.$store.commit('loading', false)
    },
    computed: {
      bankShow () {
        if (this.depositId) {
          return true
        } else {
          return false
        }
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  .internerBank {
    padding: 0 14px;
    .header {
      border-bottom: 1px solid #f3f3f3;
      height: 56px;
      color: #696969;
      line-height: 75px;
      padding-top: 10px;
      ul {
        li {
          width: 126px;
          font-size: 16px;
          height: 40px;
          float: left;
          line-height: 40px;
          text-align: center;
          border-right: 1px solid #dbdbdb;
          img {
            width: 24px;
            vertical-align: middle;
            margin-right: 5px;
          }
          span {
            vertical-align: middle;
          }
        }
      }
    }
    .warning-wrap {
      background-color: #fff;
      padding: 20px 30px 0 30px;
      .warning {
        height: 40px;
        line-height: 40px;
        color: #ff3333;
        background-color: #f9f9f9;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.4em;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        .icon {
          width: 17px;
          height: 17px;
          fill: #979797;
          overflow: hidden;
          margin-left: 12px;
          margin-right: 5px;
          vertical-align: middle;
        }
      }
    }
    .content {
      border-bottom: 1px solid #f3f3f3;
      padding-bottom: 10px;
      .bar {
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
          height: 36px;
          //border: 0 solid #f5f5f5;
          // outline: none;
          font-size: 16px;
          background: #f5f5f5;
          border: 1px solid #f5f5f5;
          border-radius: 10px;
          // padding: 0 16px;
          text-align: left;
          text-indent: 0.6em;
          -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          color: #666;

          &:not(.other) {
            width: 200px;
            height: 36px;
            background: #f9f9f9;
          }
          .ivu-radio {
            font-size: 16px;
            color: #666;
          }
        }
        input:focus {
          outline: none !important;
          border: 1px solid rgba(254, 134, 93, 0.6);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
          0 1px 10px 5px rgba(254, 134, 93, 0.14);
        }
        .ivu-select {
          width: 200px;
        }
        .ivu-select-selection {
          background: #f9f9f9;
        }
        .bank {
          width: 280px;
          height: 130px;
          // background: linear-gradient(90deg, #96c2fd, #538af7);
          display: inline-block;
          vertical-align: middle;
          padding: 10px 6px 10px 6px;
          font-size: #fff;
          border-radius: 10px;
          a {
            text-decoration: underline;
            font-size: 1em;
            color: #fff;
            margin-left: 6px;
            font-weight: 100;
          }
          .title {
            img {
              width: 36px;
              vertical-align: middle;
              margin-right: 25px;
              opacity: 0;
            }
            span {
              font-size: 15px;
              color: #fff;
              vertical-align: middle;
            }
            a {
              margin-top: 10px;
              font-size: 13px;
            }
          }
          .row {
            padding-top: 10px;
            font-size: 13px;
            color: #fff;
            label {
              width: 52px;
              display: inline-block;
              text-align: left;
              margin-left: 10px;
            }
            a {
              font-size: 13px;
            }
            .cardNameOv {
              width: 165px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
        .RadioGroup {
          padding-left: 20px;
        }
      }
    }
    .submitPay {
      width: 140px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 1.8em;
      background: linear-gradient(180deg, #ff3492, #ff1e4f);

      border-radius: 10px;
      margin-top: 15px;
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
    .toast {
      width: 200px;
      height: 30px;
      line-height: 30px;
      background: #ff9900;
      color: #fff;
      font-size: 14px;
      font-weight: 200;
      position: absolute;
      right: 455px;
      top: 340px;
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
    /deep/ .ivu-time-picker-cells-cell {
      color: #a7a7a7;
    }
    /deep/ .ivu-time-picker-cells-cell:hover {
      background: rgba(254, 192, 83, 0.82);
      color: #fff;
    }
    /deep/ .ivu-time-picker-cells-cell-selected {
      background: #2d8cf0;
      color: #fff;
    }
  }
    /deep/ .ivu-modal-mask {
    z-index: 2000;
  }

  /deep/ .ivu-modal-wrap {
    z-index: 2000;
  }

  /deep/ .ivu-modal-close {
    right: 0;
  }

  /deep/ .ivu-modal-footer {
    border-top: none;
    padding: 0;
    text-align: left;
  }

  /deep/ .ivu-modal {
    top: 50%;
    margin-top: -159px;
    height: 318px;
  }

  /deep/ .ivu-modal-header {
    border-bottom: none;
    padding: 0;
  }

  /deep/ .ivu-modal-close .ivu-icon-ios-close-empty {
    display: none;
  }

  /deep/ .ivu-modal-body {
    padding: 0;
  }

  /deep/ .ivu-modal-close {
    top: 3px;
  }
  .footer{
     height: 39px;
     background: #D93D32;
     border-radius: 0 0 6px 6px;
     display: flex;
     span{
        width: 172.5px;
        height: 39px;
        display: inline-block;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 39px;
        text-align: center;
        cursor: pointer;
     }
     .span1{
        border-right:1px solid #e96057; 
     }
  }
  .headerp {
    text-align: center;
    margin-top: 20px;
  }

  .tishi {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #403D58;
    border-radius: 6px 6px 0 0;
    border-bottom:1px solid #4B495C; 
    span {
      margin-left: 110px;
      margin-top: 16px;
      font-size:18px; 
    }
  }

  .agent-con {
    position: relative;
    background-color: #403D58;
    height: 135px;
    padding-top:17px; 
    .showname{
       color: #D93D32;
    }
    .rename{
       margin-left: 27px;
       font-size: 14px;
       color: #fff;
    }
    input{
        width: 238px;
        height: 38px;
        margin-left:54px;
        margin-top: 21px; 
        border: 1px solid #6E6C7C;
        border-radius:3px;
        color: #fff;
        text-indent: 5px;
    }
    #inputtext{
       background-color: #403D58;
    }
  }

  .icon-baojing {
    font-size: 45px;
    color: #f90;
  }

  .iconspan {
    margin-left: 82px;
    height: 45px;
    line-height: 45px;
    display: block;
    font-size: 16px;
    position: relative;
    margin-top: 40px;

    .tispan {
      margin-left: 10px;
      position: absolute;
      font-size: 26px;
      color: #1f1f1f;
    }
  }

  .pay {
    display: block;
    position: absolute;
    width: 160px;
    height: 35px;
    background: linear-gradient(180deg, #ff3492, #ff1e4f);
    text-align: center;
    line-height: 35px;
    color: #fff;
    font-size: 18px;
    left: 130px;
    top: 80px;
    border-radius: 10px;
  }

  .vp-admin-wrap-close {
    display: none;
    width: 60px;
    height: 40px;
    background: #f2f2f2;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;

    &:hover {
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
    }

    .vp-admin-wrap-close-empty {
      position: relative;
      background: #fff;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 56px;
      left: 2px;
      top: 2px;
      -moz-transition: all 0.5s ease-in;
      -webkit-transition: all 0.5s ease-in;
      -o-transition: all 0.5s ease-in;
      transition: all 0.5s ease-in;

      a {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url("/static/public/image/common/vp-common-close.png") #fff;
        background-size: 98% 98%;
        // transform: rotate(0deg);
      }

      &:hover {
        transform: translateX(40%);
        // &::before{
        //   color: #fff;
        // }
      }
    }
  }
</style>
