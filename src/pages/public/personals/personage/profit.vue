<template>
  <div class="withdrawal-record">
    <!-- <div class="header">
    盈亏报表
    </div> -->
    <div class="content">

      <div class="search">

        <DatePicker type="daterange" placement="bottom-end" style="width: 236px;" placeholder="选择时间"
                    @on-change="hanlderDate"></DatePicker>
        <span @click="searchWithdrawal">搜索</span>
      </div>


      <Table :columns="columns" :data="data"
             no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>


      <div class="page">
        <Page :current="i" v-if="total>0" :total="total" size="small" @on-change="hanlderPage"></Page>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        day: '1',
        total: 0,
        i: 1,
        startTime: '',
        endTime: '',

        columns: [
          {
            title: '提款编号',
            align: 'center',
            width: 160,
            key: 'code'
          },
          {
            title: '银行名称',
            align: 'center',
            key: 'bankName'
          },
          {
            title: '提款金额',
            align: 'center',
            key: 'amount'
          },
          {
            title: '提款时间',
            align: 'center',
            key: 'time',
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
            render: (h, params) => {
              return h('div', [
                h(
                  'span',
                  params.row.status == 'success'
                    ? '成功'
                    : false || params.row.status == 'fail' ? '失败' : '审核中'
                )
              ])
            }
          },
          {
            title: '手续费',
            align: 'center',
            key: 'fees'
          },
          {
            title: '催帐',
            align: 'center',
            key: 'status',
            render: (h, params) => {
              return h('div', [
                params.row.status == 'wait'
                  ? h(
                  'span',
                  {
                    style: {
                      cursor: 'pointer',
                      border: '1px solid #dbdbdb',
                      padding: '6px 12px',
                      display: 'inline-block',
                      borderRadius: '5px',
                      background: 'linear-gradient(180deg,#ff8181,#fd4949)',
                      color: '#fff'
                    },
                    on: {
                      click: () => {
                        this.emergency(params.row.id, params.row.time)
                      }
                    }
                  },
                  '催帐'
                  )
                  : h(
                  'span',
                  {
                    style: {
                      cursor: 'pointer',
                      border: '1px solid #dbdbdb',
                      padding: '6px 12px',
                      display: 'inline-block',
                      borderRadius: '5px',
                      background: '#f9f9f9'
                    },
                    on: {
                      click: () => {
                        this.$error('该状态无法申请催帐')
                      }
                    }
                  },
                  '催帐'
                  )
              ])
            }
          }
        ],
        data: []
      }
    },
    methods: {
      depositRecord () {
        this.$http
          .post(`${this.$HOST_NAME}/withdrawals/index?page=` + this.i, {
            startTime: this.startTime || '2018-01-01',
            endTime: this.endTime || this.getYMD(new Date()),
            limit: 10
          })
          .then(res => {
            if (res.code == 200) {
              this.data = res.data.data
              this.total = res.data.total
            }
          })
      },
      searchWithdrawal () {
        this.i = 1
        this.depositRecord()
      },
      hanlderPage (i) {
        this.i = i
        this.depositRecord()
      },
      emergency (id, date) {
        this.$http
          .post(`${this.$HOST_NAME}/emergency/application`, {
            financeId: id,
            type: 'withdrawals',
            date: this.$moment.unix(date - 0).format('YYYY-MM-DD')
          })
          .then(res => {
            if (res.code == 200) {
              this.$success('催帐成功')
            } else {
              this.$error(res.message)
            }
          })
      },
      // hanlderRadio(val) {
      //   this.i = 1;
      //   if (val == "1") {
      //     this.startTime = this.getYMD(new Date());
      //     this.endTime = this.getYMD(new Date());
      //   } else if (val == "2") {
      //     this.startTime = this.getYMD(new Date() - 1000 * 60 * 60 * 24);
      //     this.endTime = this.getYMD(new Date() - 1000 * 60 * 60 * 24);
      //   } else {
      //     this.startTime = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 7);
      //   }
      //   this.withdrawals();
      // },
      hanlderDate (date) {
        this.startTime = date[0]
        this.endTime = date[1]
      }
    },

    created () {
      // this.depositRecord();
    }
  }
</script>

<style lang="less" scoped>
  .withdrawal-record {

    .content {
      // position: relative;
      .search {
        height: 64px;
        line-height: 64px;
        padding: 0 10px;
        padding: 0 14px;
        span {
          display: inline-block;
          width: 80px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 1.6em;
          font-weight: 200;
          color: #fff;
          background: linear-gradient(180deg, #ff3492, #ff1e4f);
          border-radius: 5px;
          margin-left: 18px;
          letter-spacing: 5px;
          cursor: pointer;
        }
      }
      .page {
        position: absolute;
        right: 25px;
        bottom: 20px;
      }
    }
  }
</style>
