<template>
  <div>
    <div class="on-line" v-if="paymentData.length">
      <div class="header">
        <div class="title">
          <!-- <img :src="payName|capitalize" alt=""> -->
          <span>{{$store.state.personal.itemDatas.className.length>4?$store.state.personal.itemDatas.className:$store.state.personal.itemDatas.className}}</span>
        </div>
      </div>
      <!-- v-if="$store.state.personal.itemDatas.classType!='qr_code'"  -->
      <div v-if="$store.state.personal.itemDatas.classType!='qr_code'" class="content">
        <div class="title">
          <ul>
            <li v-for="(item,i) in paymentData" :key="i">
              <span :class="{spanActive:spanActive ==i}" @click="toggle(i,item)">充值通道{{i+1}}</span>
            </li>
          </ul>
        </div>
        <div class="content-main" v-if="spanActive ==i" v-show="!qrcodeShow" v-for="(item,i) in paymentData" :key="i">
          <div class="bar">
            <!-- <div class="bank-wrap" v-if="$store.state.personal.navView == 4&& bankList !=='null'">
                <label class="text fl">存款银行:</label>
                <div class="bank fl">
                  <div class="bank-item" v-for="(bank,i) in bankList" :class="{active:bankActive==i}" :key="bank.code" @click="selectBank(i,bank.code)">
                    <img :src="bank.icon" alt="图片加载失败">
                    <span class="ico"></span>
                  </div>
                </div>
              </div> -->
            <label class="text">存款金额:</label>
            <input type="text" v-model="amount" :placeholder="+item.minAmount+'~'+item.maxAmount+'有效金额'" v-if="!item.isFormatAmount" style="width:220px;">
            <!-- <RadioGroup v-model="amount" v-if="!item.isFormatAmount">
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
            </RadioGroup> -->

            <i-select v-model="amount" style="width:200px" v-if="item.isFormatAmount">
                <i-option v-for="(v,pricei) in item.priceList" :value="v" :key="pricei">{{v}}</i-option>
            </i-select>

              <!-- <i-select v-model="amount" style="width:200px" v-if="item.isFormatAmount">
                  <i-option v-for="(v,pricei) in priceList" :value="v" :key="pricei">{{v}}</i-option>
              </i-select> -->





          </div>
          <div class="bar" v-if="preferentialList.length !==0">
            <label class="text">优惠方式：</label>
            <Select v-model="preferentiaId">
              <Option v-for="(item,i) in preferentialList" :value="item.id" :key="i">{{item.title}}</Option>
            </Select>
          </div>
          <div class="bar bank-bar" v-if="item.codeShow && $store.state.personal.itemDatas.className === '网银在线'">
            <label class="text">存款方式:</label>
            <!-- <span>{{item.bankCode}}</span> -->
            <RadioGroup v-model="bankCode">
              <Radio v-for="(val,key,i) in item.bankCode" :label="val.code" :key="i">
                <!-- <img :src="key|capitalize" alt=""> -->

                <img :src="val.icon" alt="">
              </Radio>

            </RadioGroup>
          </div>

          <div class="bar">
            <label class="text">温馨提示:</label>
            <span>1、充值时候，切记提交订单的金额和充值的金额要相一致，这样成功率较高，1~3分钟即可到帐,</span>
            <p style="margin-left:155px;">如不一致，会导致不到帐哦【<span style="color:#F00; font-size: 14PX;">支付成功不到帐的，请找在线客服或推广代理</span>】</p>
            <p style="margin-left:134px">2、由于银行管制、导致第三方充值通道不稳定、如果充值一次未成功请换其他通道进行充值！</p>
          </div>

          <div :class="{'active':!canClick}"
               class="submitPay"
               @click="onlinePayment(item.id,item.minAmount,item.maxAmount)"
               v-if="!qrcodeShow">
            确认提交
          </div>
          <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">
            {{toastText}}
          </div>

        </div>
        <div class="qrcode" v-if="qrcodeShow">
          <div class="bar">
            <label class="text">订单号:</label>[]
            <span>{{order}}</span>
          </div>

          <div class="bar">
            <label class="text">二维码:</label>
            <canvas id="qrcode"></canvas>
          </div>

          <div class="main">
            <p>用手机{{payName}}扫一扫</p>
            <p>扫面二维码完成支付</p>
          </div>
        </div>
      </div>
      <div v-else class="content content2">
        <div class="title">
          <ul>
            <li v-for="(item,i) in paymentData" :key="i">
              <span :class="{spanActive:spanActive ==i}" @click="toggle(i,item)">充值通道{{i+1}}</span>
            </li>
          </ul>
        </div>
        <div class="content-main">
          <!-- <div class="bar">
              <label class="text">温馨提示:</label>
              <span>支付时请备注会员帐号-限额{{passKey.min_amount}}~{{passKey.max_amount}}</span>
            </div> -->
          <div class="erCode">
            <img :src="url" alt="">
          </div>
          <div class="bar">
            <span class="tip">打开{{$store.state.personal.itemDatas.className.includes('微信')?'微信': $store.state.personal.itemDatas.className.includes('支付宝')?'支付宝':$store.state.personal.itemDatas.className.includes('财付通')?'财付通':''}}扫一扫</span>
          </div>
          <div class="bar">
            <!-- <label class="text">存款金额:</label> -->
            <input placeholder="姓名" type="text" v-model="passKey.depositAccountName">
          </div>
          <div class="bar">
            <!-- <label class="text">存款金额:</label> -->
            <input :placeholder="'单笔限额'+passKey.min_amount+'~'+passKey.max_amount" type="text" v-model="passKey.money">
          </div>
          <div class="bar">
            <!-- <label class="text">订单号后九位:</label> -->
            <input placeholder="输入订单号后九位" type="text" v-model="passKey.order">
          </div>
          <!-- <div class="bar">
              <label class="text">存款时间:</label>
              <DatePicker class="cont2-Picker" placeholder="选择时间" @on-change="hanlderDate" placement="bottom-end" style="width:160px;"></DatePicker>
            </div> -->

          <div class="submitPay" @click="submitCode" :class="{'active':!canClick}">
            确认提交
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-pay-tongdao">
      <img src="/static/public/image/userImg/no-pay-tongdao.png" alt="">
    </div>

    <Modal
      v-model="ifmodel"
      class="oldmal"
      class-name="agent-transfer"
      width="424"
      :mask-closable="false"
    >
      <div
        class="vp-admin-wrap-close"
        slot="close"

      >
        <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div>
      </div>
      <div slot="header" class="tishi">
           <span>提示</span>
      </div>
      <div class="agent-con">
          <span class="iconspan"> <i class="iconfont icon-baojing"></i><span class="tispan">是否继续该笔充值</span></span>
          <a class='pay' :href="hrefpath" target="_blank">支付</a>
      </div>
      <div slot="footer"></div>
    </Modal>

   
    <Modal
      v-model="newmodel"
      class="newmodal"
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
  import QRCode from 'qrcode'
  import store from '@/vuex/store'
  // import $ from 'jquery'
  import UserService from "@/service/public/UserService.js";
  let timer
  export default {
    data () {
      return {
        priceList:[
          // {
          //   value:100,
          //   label:100
          // },
          // {
          //   value:200,
          //   label:200
          // },
          // {
          //   value:300,
          //   label:400
          // },

        ],
        datas:{
           id:"",
           minMoney:"", 
           maxMoney:"",
        },
        realName:"",
        newmodel:false,
        canClick: true,
        ifmodel:false,
        passKey: {
          money: '',
          order: '',
          time: '',
          codeId: '',
          max_amount: '',
          min_amount: '',
          code: ''
        },
        bankActive: 0,
        url: '',
        publicUrl: '',
        spanActive: 0,
        amount: '',
        bankCode: '',
        qrcodeShow: false,
        order: '',
        toastShow: false,
        toastNum: -20,
        toastText: '',
        paymentDataShow: true,
        preferentialList: [],
        preferentiaId: '',
        bankList: [],
        hrefpath:''
      }
    },
    methods: {
      selectBank (i, item) {
        this.bankActive = i
        this.bankCode = item
      },
      hidemode(){
          this.newmodel=false
      },
      toggle (i, item) {
        /*
        requestType = NNIA  无需输入金额（一般以用户在付款页面实际付款金额为准）
        requestType = NIA 需要输入金额 （一般以用户输入金额或实际付款金额为准）
        */
        // console.log(item.requestType)
        if (item.requestType === 'NNIA' ) {
          $.ajax({
            url: `${this.$HOST_NAME}/onlinePaymentNew`,
            headers: {
              // "Accept": "application/json, text/plain, */*",
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `${localStorage.token}`
            },
            async: true,
            type: 'post',
            data: {
              paymentId: item.id,
              money: 0,
              bankCode: this.bankCode,
              type: 'pc',
              preferentialId: this.preferentiaId,
              categoryId: this.$store.state.personal.categoryId
            },
            success: res => {
              if (res.code === 200) {
              window.open(res.data.formUrl,'_blank')
            } else {
                this.$error(res.message)
              }
            }
          })
        } else {
          this.bankList = item.bankCode
          this.spanActive = i
          this.qrcodeShow = false
          this.amount = ''
          if (this.$store.state.personal.itemDatas.classType == 'qr_code') {
            this.passKey.max_amount = item.max_amount
            this.passKey.min_amount = item.min_amount
            this.url = this.publicUrl + item.qr_code
            this.passKey.codeId = item.id
          }

          clearInterval(timer)
        }
      },
      onlinePayment(id, minMoney, maxMoney){
           this.datas.id=id;
           this.datas.minMoney=minMoney
           this.datas.maxMoney=maxMoney
          if(!JSON.parse(localStorage.userinfo).realName){
            this.newmodel=true
            return false
        }
        this.onlinePayment1(id, minMoney, maxMoney)
      },
      // 第三方申请支付
      onlinePayment1 (id, minMoney, maxMoney) {
        // debugger
        if (!this.canClick) {
          return false
        }
        console.log(this.amount)
        if(!this.amount){
          this.$error("请选择金额")
          return false
        }
        // debugger
        if(minMoney==0&&maxMoney==0){

        }else{
            // 单选按钮并非下拉框
            if (this.amount - 0 < minMoney - 0) {
              this.toastShow = true
              this.toastNum = -20
              this.toastText = '金额低于通道最低金额' + minMoney
              setTimeout(() => {
                this.toastShow = false
              }, 2000)
              return false
            }
            if (this.amount - 0 > maxMoney - 0) {
              this.toastShow = true
              this.toastText = '金额高于通道最高金额' + maxMoney
              this.toastNum = -20
              setTimeout(() => {
                this.toastShow = false
              }, 2000)
              return false
            }
        }

        // if (this.amount - 0 < minMoney - 0) {
        //   this.toastShow = true
        //   this.toastNum = -20
        //   this.toastText = '金额低于通道最低金额' + minMoney
        //   setTimeout(() => {
        //     this.toastShow = false
        //   }, 2000)
        //   return false
        // }
        // if (this.amount - 0 > maxMoney - 0) {
        //   this.toastShow = true
        //   this.toastText = '金额高于通道最高金额' + maxMoney
        //   this.toastNum = -20
        //   setTimeout(() => {
        //     this.toastShow = false
        //   }, 2000)
        //   return false
        // }
        this.canClick = false
        setTimeout(() => {
          this.canClick = true
        }, 5 * 1000)
        this.toastShow = false
        // 因为用了ajax同步，所以弄个定时器弄成异步
        setTimeout(() => {
          $.ajax({
            url: `${this.$HOST_NAME}/onlinePaymentNew`,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `${localStorage.token}`
            },
            async: false,
            type: 'post',
            data: {
              paymentId: id,
              money: this.amount,
              bankCode: this.bankCode,
              type: 'pc',
              preferentialId: this.preferentiaId,
              categoryId: this.$store.state.personal.categoryId
            },
            success: res => {
              if (res.code === 200) {
                if (res.data.qrCode) {
                  // tempwindow.close();

                  this.order = res.data.order
                  this.qrcodeShow = true

                  const that = this
                  this.$nextTick(() => {
                    QRCode.toCanvas(document.getElementById('qrcode'), res.data.qrCode, function (err) {
                      if (err) that.$error('生成二维码失败!')
                    })
                  })

                  // this.spanActive = 999;
                  timer = setInterval(this.payOrder, 5000)
                } else {
                  this.ifmodel=true
                  //window.open(res.data.formUrl)
                  this.hrefpath=res.data.formUrl
                }
              } else {
                this.$error(res.message)
              }
            }
          })
        }, 0)
      },
      // 查询订单
      payOrder () {
        this.$http
          .post(`${this.$HOST_NAME}/onlinePayment/order`, {
            order: this.order
          })
          .then(res => {
            if (res.data.orderStatus == 'success') {
              this.$success('支付成功')
              this.qrcodeShow = false
              this.amount = ''
              clearInterval(timer)
            }
          })
      },

      //获取优惠方式
      getPreferential () {
        // this.$http.post(`${this.$HOST_NAME}/preferential/deposit`).then(res => {
        //   if (res.code == 200) {
        //     res.data.forEach((v, i) => {
        //       this.preferentialList[i] = {};
        //       this.preferentialList[i].id = v.id;
        //       this.preferentialList[i].title = v.title;
        //     });
        //   }else{
        //     this.$error(res.message);
        //   }
        // });
      },
      hanlderDate (date) {
        this.passKey.time = date
      },
      subCode(){
          this.$http
          .post(`${this.$HOST_NAME}/deposit/qr_code_application`, {
            QRCodeId: this.passKey.codeId,
            amount: this.passKey.money,
            depositTime: this.getTime(new Date()),
            serialNumber: this.passKey.order,
            depositAccountName: this.passKey.depositAccountName
          })
          .then(res => {
            if (res.code == 200) {
              this.passKey.money = ''
              this.passKey.order = ''
              this.passKey.time = ''
              this.passKey.depositAccountName = ''
              this.$success(res.message)
            } else {
              console.log(res.message)
              this.$error(res.message)
            }
          })
      },
      // getCode(devices, payType) {
      //   this.$http
      //     .post(`${this.$HOST_NAME}/deposit/qr_code`, {
      //       devices: devices,
      //       payType: payType
      //     })
      //     .then(res => {
      //       if (res.code == 200 && res.data) {
      //         this.url = "/storage/" + res.data[0].qr_code;
      //         this.passKey.codeId = res.data[0].id;
      //         this.passKey.max_amount = res.data[0].max_amount;
      //         this.passKey.min_amount = res.data[0].min_amount;
      //       } else {
      //         this.$error(res.message);
      //       }
      //     });
      //   // http://tg.7900005.com/storage/qr_code/2018/09/2018-09-13-17-53-48-5b9a33ac8952b.png
      // },
      submitCode () {
        if (!this.canClick) {
          return false
        }

        var reg = /^[\u4E00-\u9FA5]+$/
        if (!reg.test(this.passKey.depositAccountName)) {
          this.$error('请输入正确存款姓名')
          return false
        }
        if (!this.passKey.money) {
          this.$error('请输入存款金额')
          return false
        }
        if (!this.passKey.order) {
          this.$error('请输入订单号后九位')
          return false
        }
        this.canClick = false
        setTimeout(() => {
          this.canClick = true
        }, 5 * 1000)
        if(!JSON.parse(localStorage.userinfo).realName){
            this.newmodel=true
            return false
        }
        this.subCode()
      },
      sendName(){
        if(this.realName){
          this.$postS(`member/set-member-info`, {
                realName:this.realName
           }).then(res=>{
                if(res && res.code==200){
                    this.newmodel=false
                    UserService.vpGetBasicInfo.call(this);
                    if(this.$store.state.personal.itemDatas.classType!='qr_code'){
                            let {id,minMoney,maxMoney}=this.datas
                            this.onlinePayment1(id,minMoney,maxMoney)
                       }else{
                            this.subCode()
                    }
                 }
           })
        }else{
        }
       
      },
    },
    created () {
      // this.getPreferential();
      if (localStorage.config) {
        let config = JSON.parse(localStorage.config)
        this.publicUrl = config.statics
      }
    },
    destroyed () {
      clearInterval(timer)
    },
    computed: {
      paymentData () {
        // this.bankCode = this.paymentData[this.spanActive].bankCode;
        // let bankCodeArr = this.$store.state.personal.paymentData[this.spanActive].bankCode;
        try {
          let bankCodeArr = this.$store.state.personal.paymentData
          let i = this.spanActive
          let bankCodeObj = bankCodeArr[i]
          this.bankCode = bankCodeObj.bankCode[0].code
        } catch (err) {

        }
        // this.priceList=this.$store.state.personal.paymentData.priceList
        return this.$store.state.personal.paymentData
      },
      // priceList(){
      //   return this.$store.state.personal.paymentData.priceList
      // },
      isRefresh () {
        return this.$store.state.personal.isRefresh
      },
      payName () {
        return this.$store.state.personal.payName
      },
      classType () {
        return this.$store.state.personal.classType
      }
    },
    watch: {
      priceList(){
        return this.$store.state.personal.paymentData.priceList;
      },
      isRefresh: function (newValue, oldValue) {
        if (newValue > 0) {
          this.qrcodeShow = false
          this.amount = ''
          this.spanActive = 0
          clearInterval(timer)
        }
      },
      paymentData: function (newValue, oldValue) {
        this.passKey.money = ''
        this.passKey.order = ''
        this.passKey.time = ''

        this.url = ''
        this.passKey.codeId = ''
        this.passKey.max_amount = ''
        this.passKey.min_amount = ''

        let item = newValue[this.spanActive]

        if (this.$store.state.personal.itemDatas.classType == 'qr_code' && item) {
          this.url = this.publicUrl + item.qr_code
          this.passKey.codeId = item.id
          this.passKey.max_amount = item.max_amount
          this.passKey.min_amount = item.min_amount
        }

        if (this.$store.state.personal.navView == 4 && newValue) {
          this.bankList = item.bankCode
        }
        // console.log(newValue);

        this.priceList=this.$store.state.personal.paymentData.priceList;
      }
    },
    filters: {
      capitalize: function (value) {
        if (value) {
          switch (value) {
            case '微信':
              value = 'weixin'
              break
            case '支付宝':
              value = 'zfb'
              break
            case '微信扫码':
              value = 'weixin'
              break
            case '支付宝扫码':
              value = 'zfb'
              break
            case '网银':
              value = 'wangying'
              break
            case 'QQ':
              value = 'QQ'
              break
            case '京东':
              value = 'jingdong'
              break
            case '快捷':
              value = 'kuaijie'
              break
            case '银联扫码':
              value = 'saoma'
              break
            case '百度':
              value = 'baidu'
              break
            case '银联':
              value = 'yinlian'
              break
            case '农业银行':
              value = 'bank-1'
              break
            case '工商银行':
              value = 'bank-2'
              break
            case '建设银行':
              value = 'bank-2'
              break
            case '交通银行':
              value = 'bank-3'
              break
            case '中国银行':
              value = 'bank-4'
              break
            case '招商银行':
              value = 'bank-5'
              break
            case '民生银行':
              value = 'bank-6'
              break
            case '邮政银行':
              value = 'bank-7'
              break
            case '兴业银行':
              value = 'bank-8'
              break
            case '中信银行':
              value = 'bank-9'
              break
            case '浦发银行':
              value = 'bank-10'
              break
            case '华夏银行':
              value = 'bank-11'
              break
            case '光大银行':
              value = 'bank-12'
              break
            case '北京银行':
              value = 'bank-13'
              break
            case '广发银行':
              value = 'bank-14'
              break
            case '南京银行':
              value = 'bank-15'
              break
            case '上海银行':
              value = 'bank-16'
              break
            case '平安银行':
              value = 'bank-17'
              break
            case '东亚银行':
              value = 'bank-18'
              break
          }

          return `/static/public/image/bank/${value}.png`
        }
      }
    },
    store
  }
</script>

<style lang="less" scoped>

  /deep/.ivu-select-dropdown{
    max-height:210px;
    overflow-y: auto;
  }


  .on-line {
    padding: 0 14px;
    height: 100%;
    width: 100%;
    position: relative;

    .header {
      height: 66px;
      padding-top: 15px;

      .title {
        padding-left: 30px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;

        img {
          width: 26px;
          vertical-align: middle;
        }

        span {
          font-size: 16px;
          vertical-align: middle;
          padding-left: 5px;
          border-right: 1px solid #dbdbdb;
          padding-right: 10px;
        }
      }
    }

    .content {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 14px;

      .title {
        // height: 66px;
        padding-left: 126px;
        padding-top: 10px;
        min-height: 66px;
        height: auto;
        display: inline-block;
        border-bottom: 1px solid #f5f5f5;
        padding-bottom: 10px;

        ul {
          li {
            font-size: 16px;
            font-weight: 200;
            width: 125px;
            height: 40px;
            float: left;
            line-height: 40px;
            text-align: center;

            span {
              padding: 8px 20px;
              cursor: pointer;
            }

            .spanActive {
              background: linear-gradient(180deg, #fe8983, #f0b761);
              border-radius: 10px;
              color: #fff;
            }
          }
        }
      }

      .content-main {
        // border-bottom: 1px solid #f3f3f3;
        padding-bottom: 26px;
        position: relative;

        .bar {
          margin-top: 20px;

          .bank-wrap {
            overflow: hidden;
            margin: 20px 0;

            .bank {
              width: 80%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-wrap: wrap;
              margin-left: 20px;

              .bank-item {
                position: relative;
                margin-right: 15px;
                margin-bottom: 20px;
                cursor: pointer;
                border: 1px solid #aaa;

                .ico {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 14px;
                  height: 14px;
                  display: none;
                  background-color: #fff;
                  border-radius: 100%;
                }

                img {
                  width: 150px;
                  height: auto;
                }
              }

              .bank-item.active {
                -webkit-animation-duration: 0.3s;
                animation-duration: 0.3s;
                -webkit-animation-name: bounceIn;
                animation-name: bounceIn;
                box-shadow: 0px 0px 5px 2px #68a1d8;

                .ico {
                  display: block;
                  background-image: url("/static/public/image/bank/selected.png");
                }
              }

              @keyframes bounceIn {
                from,
                20%,
                40%,
                60%,
                80%,
                to {
                  -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                0% {
                  opacity: 0;
                  -webkit-transform: scale3d(0.3, 0.3, 0.3);
                  transform: scale3d(0.3, 0.3, 0.3);
                }
                20% {
                  -webkit-transform: scale3d(1.1, 1.1, 1.1);
                  transform: scale3d(1.1, 1.1, 1.1);
                }
                40% {
                  -webkit-transform: scale3d(0.9, 0.9, 0.9);
                  transform: scale3d(0.9, 0.9, 0.9);
                }
                60% {
                  opacity: 1;
                  -webkit-transform: scale3d(1.03, 1.03, 1.03);
                  transform: scale3d(1.03, 1.03, 1.03);
                }
                80% {
                  -webkit-transform: scale3d(0.97, 0.97, 0.97);
                  transform: scale3d(0.97, 0.97, 0.97);
                }
                to {
                  opacity: 1;
                  -webkit-transform: scale3d(1, 1, 1);
                  transform: scale3d(1, 1, 1);
                }
              }
            }
          }

          .text {
            display: inline-block;
            width: 126px;
            text-align: right;
            font-size: 15px;
            font-family: "Microsoft YaHei";
            vertical-align: middle;
            margin-right: 5px;
          }

          input {
            height: 38px;
            font-size: 16px;
            background: #f5f5f5;
            border: 1px solid #f5f5f5;
            border-radius: 10px;
            // padding: 0 16px;
            text-align: left;
            text-indent: 1em;
            -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
            -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
            box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
            color: #666;

            &:not(.other) {
              width: 160px;
              height: 38px;
            }

            .ivu-radio {
              font-size: 16px;
              color: #666;
            }
          }

          input:focus {
            outline: none !important;
            border: 1px solid rgba(254, 134, 93, 0.6);
            box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
          }

          .ivu-select {
            width: 160px;
          }

          span {
            font-size: 1.4em;
            vertical-align: middle;
          }
          p{
            font-size: 1.4em;
            vertical-align: middle;
            margin-top:10px;
          }
          .ivu-radio-group {
            margin-left: 30px;
          }

          .radio-span {
            font-size: 1.2em;
            font-weight: 200;
            color: #999;
          }
        }

        .bank-bar {
          .text {
            vertical-align: top;
            padding-top: 15px;
          }

          .ivu-radio-group {
            width: 70%;
            line-height: 40px;
            margin-left: 0;
          }

          .ivu-radio-wrapper {
            margin-right: 20px;
          }

          img {
            vertical-align: middle;
          }
        }
      }

      .submitPay {
        border-top: 1px solid #f3f3f3;
        width: 140px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        color: #fff;
        font-size: 1.8em;
        background: linear-gradient(180deg, #ff3492, #ff1e4f);
        border-radius: 10px;
        margin-top: 25px;
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

      .qrcode {
        .bar {
          margin-top: 20px;

          .text {
            display: inline-block;
            width: 144px;
            text-align: right;
            font-size: 1.4em;
            vertical-align: middle;
            margin-right: 5px;
          }
        }

        .main {
          margin-left: 210px;
          font-size: 1.3em;
          margin-top: 30px;

          p {
            margin-bottom: 20px;
          }
        }

        #qrcode {
          width: 250px;
          height: 250px;
          // background: #000;
          display: inline-block;
          vertical-align: top;
        }
      }
    }

    .content2 {
      .erCode {
        width: 220px;
        height: 220px;
        border: 1px solid #eee;
        margin-top: 20px;
        margin-left: 134px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .cont2-Picker {
        /deep/ .ivu-select-dropdown {
          top: 307px !important;
          left: 298px !important;
        }
      }

      .content-main {
        .bar {
          padding-left: 135px;

          .tip {
            color: #ff8e00;
            font-size: 16px;
            width: 220px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #ff8e00;
            display: inline-block;
            border-radius: 2px;
            text-align: center;
          }

          // .text {
          //   width: 184px;
          //   text-indent: 10px;
          // }
          input {
            &:not(.other) {
              text-indent: 2px;
              padding-left: 8px;
              width: 220px;
            }
          }
        }

        .submitPay {
          margin-left: 135px;
        }
      }
    }

    .toast {
      width: 210px;
      height: 30px;
      line-height: 30px;
      background: #ff9900;
      color: #fff;
      font-size: 14px;
      font-weight: 200;
      position: absolute;
      right: 490px;
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
  }

  .no-pay-tongdao {
    img {
      display: block;
      margin: 200px auto;
    }
  }

  .ivu-radio-group {
    margin-left: 0;

    img {
      width: 106px;
      height: 20px;
    }
  }


  .oldmal{
     /deep/.ivu-modal-mask {
  z-index: 2000;
}
/deep/.ivu-modal-wrap {
  z-index: 2000;
}
/deep/.ivu-modal-close {
  right: 0;
}
/deep/.ivu-modal-footer {
  border-top: none;
  display: none;
}
/deep/.ivu-modal {
  top: 50%;
  margin-top: -159px;
  height: 318px;
}
/deep/.ivu-modal-header {
  border-bottom: none;
  padding: 0;
}
/deep/ .ivu-modal-close .ivu-icon-ios-close-empty{
  display: none;
}

/deep/ .ivu-modal-body{
   padding: 0;
}

/deep/.ivu-modal-close{
    top:3px;
}
.headerp{
   text-align: center;
   margin-top:20px;
}
.tishi{
   height: 43px;
   line-height: 43px;
   font-size:18px;
   color:565656;
   background-color:#e5e5e5;
   border-radius:6px 6px 0 0;
   span{
     margin-left: 30px;
   }
}
.agent-con{
  position: relative;
  height: 157px;

}
.icon-baojing{
  font-size: 45px;
  color: #f90;
}
.iconspan{
   margin-left:82px;
   height: 45px;
   line-height: 45px;
   display: block;
   font-size: 16px;
   position: relative;
   margin-top: 40px;
   .tispan{
      margin-left:10px;
      position: absolute;
      font-size:26px;
      color:#1f1f1f;
   }
}
.pay{
  display: block;
  position: absolute;
  width: 160px;
  height: 35px;
   background: linear-gradient(180deg, #ff3492, #ff1e4f);
  text-align: center;
  line-height: 35px;
  color: #fff;
  font-size: 18px;
  left:130px;
  top:80px;
  border-radius: 10px;
}

.vp-admin-wrap-close {
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
  }
  .newmodal{
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
    }
    }
  }
</style>
