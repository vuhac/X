<template>
  <div class="self-help">
    <div class="header">
      实时返水
    </div>


    <div class="content" v-if="detail">
      <Table :columns="columns" :data="data" :class="datalength>=9 ? 'rank':''"  no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
      <div class="selfHelpBtn" @click="yijian">
        实时返水
      </div>

      <p class="shuoming">
        返水说明: 所有平台返水都是按美东时间计算，会员可随时返水。如会员未自行返水， 系统每天将自动为您返水。由于数据同步有延迟，请下注后30分钟左右再来返水！
      </p>
    </div>


    <div class="content" v-else>
      <Table :columns="columns1" :data="data1" no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
      <div class="selfHelpBtn" @click="detail = true">
        返回上级
      </div>
    </div>


  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        refundData: {},
        // refundDetail:[],
        columns: [{
          title: '游戏平台',
          align: 'center',
          key: 'platformName'
        },
          {
            title: '有效投注',
            align: 'center',
            key: 'validBetAmount',
            render: (h, params) => {
              return h('div', [
                Math.floor(params.row.validBetAmount * 100) / 100
              ])
            }
          },
          {
            title: '返水比例',
            align: 'center',
            key: 'point',
            render: (h, params) => {
              return h('div', [params.row.point + '%'])
            }
          },
          {
            title: '返水金额',
            align: 'center',
            key: 'amount',
            render: (h, params) => {
              return h('div', [Math.floor(params.row.amount * 100) / 100])
            }
          },
          // {
          //   title: '操作',
          //   align: 'center',
          //   render: (h, params) => {
          //     return h('div', [
          //       params.row.name == '合计' ?
          //         '' :
          //         h(
          //           'span', {
          //             style: {
          //               cursor: 'pointer',
          //               border: '1px solid #dbdbdb',
          //               padding: '6px 12px',
          //               display: 'inline-block',
          //               borderRadius: '15px',
          //               // background: 'linear-gradient(180deg,#ff3494, #ff1c4b)',
          //               backgroundColor:'#f99',
          //               color: '#fff'
          //             },
          //             on: {
          //               click: () => {
          //                 // this.detail = false
          //                 // this.data1 = this.data[0]
          //               }
          //             }
          //           },
          //           '查看详情'
          //         )
          //     ])
          //   }
          // }
        ],
        data: [],
        columns1: [{
          title: '游戏平台',
          align: 'center',
          key: 'platformName'
        },
          {
            title: '有效投注',
            align: 'center',
            key: 'validBetAmount'
          },
          {
            title: '返水比例',
            align: 'center',
            key: 'point',
            render: (h, params) => {
              return h('div', [params.row.point + '%'])
            }
          },
          {
            title: '返水金额',
            align: 'center',
            key: 'amount'
          }
        ],
        data1: [],
        detail: true,
        datalength:0,
      }
    },
    methods: {
      refund () {
         this.$getS(`member/bonus/refund`, {
            execType: 'select'
          })
          .then(res => {
            if (res.code == 200 && res.data.list.length!=0) {
               
              // let total = res.data['合计']
              // delete res.data['合计']

              // for (let key of Object.keys(res.data)) {
              //   let vm = 0
              //   let am = 0
              //   let point = 0
              //   res.data[key].forEach(v => {
              //     vm += parseFloat(v.validBetAmount)
              //     am += parseFloat(v.amount)
              //     point = point < v.point ? v.point : point
              //   })

              //   this.data.push({
              //     name: key,
              //     validBetAmount: vm,
              //     point: point + '%',
              //     amount: am
              //   })
              // }
              // this.data.push({
              //   name: total[0].platformName,
              //   validBetAmount: total[0].validBetAmount,
              //   point: '-',
              //   amount: total[0].amount
              // })

              this.data=res.data.list
              this.datalength=res.data.list.length
              this.refundData = res.data
            } else {
              this.$store.commit('loading', false)
            }
            this.$store.commit('loading', false)
          })
      },
      yijian () {
        this.$getS(`member/bonus/refund`, {
            execType: 'execute'
          })
          .then(res => {
            if (res.code == 200) {
              if (res.data) {
                this.$success('总返水金额' + res.data.total_amount.amount)
                this.data = []
                this.refund()
              } else {
                this.$error('暂无返水')
              }
            } else {
              this.$error(res.message)
            }
          })
      }
    },
    created () {
      this.$nextTick(() => {
        this.$store.commit('loading', true)
        this.refund()
      })
    },
    destroyed () {
      this.$store.commit('loading', false)
    },
    store
  }
</script>

<style lang="less">
  .self-help {
    .header {
      height: 66px;
      padding: 0 14px;
      // line-height: 66px;
      // border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      margin: 0 14px;
    }
    .content {
      // border-bottom: 1px solid #f3f3f3;
      // padding: 10px;
      height: 582px;
      background: #eee;
      .row {
        padding: 6px 0;
        .title {
          width: 100px;
          color: #fff;
          background: #fa5c5c;
          text-align: center;
          font-size: 1.4em;
          height: 35px;
          line-height: 35px;
          border-radius: 8px;
        }
        .row-content {
          border-top: 1px solid pink;
          span {
            display: inline-block;
            width: 16.66%;
            padding: 5px 0;
            font-size: 14px;
            span {
              width: 48%;
              display: inline-block;
              text-align: left;
            }
            span:nth-child(1) {
              text-align: right;
            }
            span:nth-child(2) {
              color: #999;
            }
          }
        }
      }
      .ivu-table-body {
        height: auto;
        .ivu-table-row:nth-child(odd) td {
          background: #fff;
        }
        .ivu-table-row {
          td {
            height: 36px;
          }
        }
      }
      .shuoming {
        font-size: 16.25px;
        padding: 30px;
        line-height: 25px;
      }
    }
    .rank{
      /deep/.ivu-table-body{
      height: 350px;
      overflow-y: auto;
      overflow-x: hidden;
      cursor: pointer;
      }
   }
    .selfHelpBtn {
      width: 140px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 1.8em;
      background: linear-gradient(180deg, #ff3494, #ff1c4b);
      border-radius: 10px;
      margin: 0 auto;
      cursor: pointer;
      margin-top: 30px;
    }
  }
</style>
