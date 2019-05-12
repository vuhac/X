<template>
  <div class="deposit" v-if="this.bankList.length">
    <div class="header">
      提款申请
    </div>
    <div class="content clearfloat">

      <div class="deposit-left fl">

        <Carousel v-model="value1" loop radius-dot @on-change="hanlderCarousel">
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

        <div class="pay-bankinfo">
          <!-- <div class="bar">
              <span>持卡人：{{bankDetail.cardName}}</span>
            </div>
            <div class="bar">
              <span>省/市：{{bankDetail.cardAddress}}</span>
            </div>
            <div class="bar">
              <span>开户行：{{bankDetail.bankName}}</span>
            </div>
            <div class="bar">
              <span>支行：{{bankDetail.bankName}}</span>
            </div> -->

          <div class="row">
            <label>提款金额：</label>
            <input autocomplete='off' type="text" v-model="amount" :placeholder="'可提现金额'+availableAmount+'元'"
                   onkeyup="value=value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')" @blur="hanlderAmount">
            <a href="javascript:;" @click="amount =availableAmount" style="font-size:14px;color:#2d8cf0;">全额提款</a>
          </div>
          <div class="row middle" v-if="notAmount>0">
            <span>有{{notAmount}}元不可提现</span>
            <a href="javascript:;" @click="$error(unavailableReason)">查看原因</a>
          </div>
          <div class="row">
            <label>资金密码：</label>
            <input type="password" v-model="payPassword" maxlength="6" autocomplete='off'>
          </div>
        </div>

        <div class="submit" @click="application" :class="{'active':canClick}">
          确认提交
        </div>

        <!-- <span class="max-bank">最多可以提款10次</span> -->

        <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">
          {{toastText}}
        </div>

      </div>

      <div class="deposit-right fl">
        <!-- <div class="title">
                                           最近提款申请
                                         </div> -->
        <Table :columns="columns" :data="data"
               no-data-text="<div style='line-height:453px;background:#f2f2f2;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
      </div>

    </div>

  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        value1: 0,
        bankList: [],
        // bankDetail: {},
        amount: '',
        availableAmount: '',
        notAmount: '',
        totalAmount: '',
        unavailableReason: '',
        payPassword: '',
        toastShow: false,
        toastNum: 430,
        toastText: '',
        columns: [{
          title: '银行名称',
          align: 'center',
          key: 'bankName',
          className: 'demo-table-info-column'
        },
          {
            title: '提款金额',
            align: 'center',
            key: 'amount',
            className: 'demo-table-info-column'
          },
          {
            title: '提款时间',
            key: 'time',
            align: 'center',
            className: 'demo-table-info-column',
            width: 150,
            render: (h, params) => {
              return h('div', [
                h(
                  'span',
                  this.$moment
                    .unix(params.row.time - 0)
                    .format('YYYY-MM-DD HH:mm:ss')
                )
              ])
            }
          },
          {
            title: '状态',
            align: 'center',
            key: 'status',
            className: 'demo-table-info-column',
            render: (h, params) => {
              return h('div', [
                h(
                  'span',
                  params.row.status == 'success' ?
                    '成功' :
                    false || params.row.status == 'fail' ? '失败' : '审核中'
                )
              ])
            }
          }
        ],
        data: [],
        canClick: false
      }
    },
    methods: {
      fetchUserWithdrawAmmount () {
        this.$http
          .post(`${this.$HOST_NAME}/withdrawals/getWithdrawAmount`)
          .then(res => {
            if (res.code === 200 && res.data) {
              const {
                amount,
                notAmount,
                msg,
                totalAmount
              } = res.data
              this.availableAmount = amount //可用总额
              this.notAmount = notAmount //不可用金额
              this.unavailableReason = msg.split('，')[1] //不可用原因
              this.totalAmount = totalAmount //总金额
            } else {
              this.$error(res.message)
            }
          })
      },
      // 获取用户银行卡信息
      userBank () {
        this.$store.commit('loading', true)
        this.$http.post(`${this.$HOST_NAME}/member/bank`).then(res => {
          if (res.code == 200) {
            res.data.forEach(v => {
              v.created_at = this.$moment
                .unix(v.created_at - 0)
                .format('YYYY-MM-DD')
            })
            res.data.forEach(v => {
              v.cardNum = v.cardNum
                .replace(/\s/g, '  ')
                .replace(/(.{4})/g, '$1 ')
              try {
                v.imgUrl = `/static/public/image/bankImg/${v.bankName}.png`
              } catch (err) {
                v.imgUrl = `/static/public/image/bankImg/morenBank.png`
              }
            })
            this.bankList = res.data.reverse()
            // console.log(this.bankList.length)
            if (!this.bankList.length) {
              if (localStorage.Public_User == 'test') {
                this.$error('试玩用户无权限，请注册正式用户', 3000)
              } else {
                this.$error('请绑定银行卡', 3000)
                this.$store.commit('showContent', {
                  parent: 'withdraw'
                })
                this.$store.commit('showNav', {
                  child: 1
                })
              }
              return false
            }
            this.$store.commit('loading', false)
          } else {
            // 没有银行卡跳去绑定银行卡

            // this.$store.commit("showContent", {
            //   parent: "withdraw"
            // });
            // this.$store.commit("showNav", {
            //   child: 2
            // });
          }
        })
      },
      hanlderCarousel (oldval, newval) {},

      // 取款申请
      application () {
        if (this.canClick) {
          return false
        }
        let isMoney = this.dInvalidMoney(this.amount)
        let isPwd = this.validatePwdAccount(this.payPassword)
        if (!isMoney) {
          this.toastShow = true
          this.toastNum = 375
          this.toastText = '请输入正确金额'
          return false
        }

        if (
          this.amount <
          JSON.parse(localStorage.getItem('config')).limit.withdrawalsLimit
        ) {
          this.toastShow = true
          this.toastNum = 375
          this.toastText =
            '提款金额不能小于' +
            JSON.parse(localStorage.getItem('config')).limit.withdrawalsLimit
          return false
        }

        if ((this.amount)*1 > (this.availableAmount)*1) {
          this.toastShow = true
          this.toastNum = 375
          this.toastText = '提款金额不能大于' + this.availableAmount
          return false
        }

        if (!isPwd) {
          this.toastShow = true
          this.notAmount > 0 ? this.toastNum = 465 : this.toastNum = 430
          this.toastText = '请输入正确6位数字资金密码'
          return false
        }

        if (this.availableAmount <= 0) {
          this.$toast(this.unavailableReason)
          return false
        }

        this.toastShow = false
        this.canClick = true
        setTimeout(() => {
          this.canClick = false
        }, 3 * 1000)

        // if(this.amount<JSON.parse(localStorage.getItem('config').))
        this.$http
          .post(`${this.$HOST_NAME}/member/setBalanceToLocal`)
          .then(res => {
            if (res.code == 200) {
              // this.amount = this.amount.toFixed(2)
              this.$http
                .post(`${this.$HOST_NAME}/withdrawals/application`, {
                  amount: this.amount,
                  payPassword: this.payPassword,
                  bankId: this.bankDetail.id
                })
                .then(res => {
                  if (res.code == 200) {
                    this.amount=""
                    this.payPassword=''
                    this.$success('申请成功')
                  } else {
                    this.$error(res.message)
                  }
                })
            }
          })
      },
      //  最近十条取款记录
      withdrawals () {
        this.$http.post(`${this.$HOST_NAME}/withdrawals/last`).then(res => {
          if (res.code == 200) {
            this.data = res.data
          }
        })
      },

      hanlderAmount () {
        // this.amount = amount.substring(amount.indexOf('.'),amount.indexOf('.') + 3)
        if (this.amount.indexOf('.') != -1) {
          this.amount = this.amount.substring(0, this.amount.indexOf('.') + 3)
        }
      }
    },
    created () {
      this.$nextTick(() => {
        this.userBank()
        this.withdrawals()
        this.fetchUserWithdrawAmmount()
      })
    },
    destroyed () {
      this.$store.commit('loading', false)
    },
    // destroyed() {
    //   // this.$error("", 8, true);
    // },
    computed: {
      bankDetail () {
        return this.bankList[this.value1]
      }
    }
  }
</script>

<style lang="less">
  .deposit {
    .header {
      height: 60px;
      color: #696969;
      line-height: 85px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      font-weight: 400;
      margin: 0 14px;
    }
    .content {
      .deposit-left {
        width: 52%;
        .bank {
          width: 380px;
          height: 210px;
          // background: linear-gradient(90deg, #ff6d4f, #fb4f5a);
          margin: 0 auto;
          margin-top: 25px;
          // border-radius: 10px;
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
        .pay-bankinfo {
          padding-left: 88px;
          // padding-right: 130px;
          // margin-top: 20px;
          margin-top: 78px;
          border-bottom: 1px solid #f3f3f3;
          padding-bottom: 34px;
          .row {
            &.middle {
              width: 70%;
              font-size: 14px;
              text-align: center;
              a {
                // margin-left: 30px;
                float: right;
                // font-size:14px;
              }
            }
            margin-top: 20px;
            label {
              font-size: 15px;
              font-family: "Microsoft YaHei";
            }
            input {
              height: 38px;
              font-size: 16px;
              background: #f5f5f5;
              border: 1px solid #f5f5f5;
              border-radius: 10px;
              // padding: 0 16px;
              text-indent: 3px;
              padding-left: 10px;
              -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              color: #666;
              margin-right: 20px;
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
          }
          .bar {
            margin-top: 16px;
            // padding-left: 20px;
            display: flex;
            span {
              // width: 35%;
              // display: inline-block;
              font-size: 14px;
              flex: 1;
            }
            span:nth-child(2) {
              // text-align: right;
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
          margin-top: 20px;
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
          margin-left: 24px;
          font-size: 1.3em;
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
          right: 410px;
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
        .ivu-carousel-dots-inside {
          bottom: -20px;
        }
        // .ivu-carousel-arrow,
        // .ivu-carousel-arrow-hover {
        //   display: none;
        // }
      }
      .deposit-right {
        width: 48%;
        height: 580px;
        // margin-top: 66px;
        background: #f2f2f2;
        // padding: 0 20px;
        border-radius: 0 0 15px 0;
        // margin-top: 4px;
        // .title {
        //   height: 62px;
        //   line-height: 62px;
        //   font-size: 1.6em;
        //   background: #fff;
        //   padding: 0 20px;
        // }
      }
    }
  }

  .ivu-table {
    background: #f2f2f2;
  }
</style>
