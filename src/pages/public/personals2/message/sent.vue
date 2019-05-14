<template>
  <div class="preferential">
    <div class="header">
      已发信息
    </div>

    <div class="content clearfloat" v-if="messageData.length">
      <div class="left fl">

        <div class="left-time">
        </div>

        <div class="row clearfloat" v-for="(item,i) in messageData" :key="i" @click="toggle(i,item)">
          <div class="time fl">
            <p>{{item.send_time}}</p>
            <p>{{item.day}}</p>
          </div>
          <span class="round"></span>
          <span class="system">
            系统
          </span>

          <div class="content fr" :class="{contentActive:contentActive ==i}">
            <div class="title">{{item.title}}</div>
            <div class="main" v-html="item.content">

            </div>
          </div>

        </div>

        <div class="page">
          <Page :current="i" :total="total" size="small" :page-size="5" @on-change="hanlderPage"></Page>
        </div>
      </div>
      <!-- <div class="right fl">

                   </div> -->
      <sent-right class="fr right" :messageDetail="messageDetail" :receivedText="receivedText"
                  :flag="flag"></sent-right>
    </div>

    <div v-else style='margin:100px 0;text-align:center;'><img src='/static/public/image/userImg/no-message.png' alt=''>
    </div>
  </div>

</template>

<script>
  import sentRight from './sent_right'

  function getMyDay (date) {
    var week
    if (date == 1) week = '周一'
    if (date == 2) week = '周二'
    if (date == 3) week = '周三'
    if (date == 4) week = '周四'
    if (date == 5) week = '周五'
    if (date == 6) week = '周六'
    if (date == 0) week = '周日'
    return week
  }

  export default {
    data () {
      return {
        messageData: [],
        contentActive: 0,
        // item: "",
        messageDetail: {},
        total: '',
        i: 1,
        flag: false,
        receivedText: ''
      }
    },
    methods: {
      getmessage () {
        this.$store.commit('loading', true)
        this.$http
          .post(`${this.$HOST_NAME}/member/messageReceived?page=` + this.i, {
            prePage: 5
          })
          .then(res => {
            if (res.code == 200) {
              if (res.data.data.length > 0) {
                res.data.data.forEach(v => {
                  v.updated_at = v.send_time
                  v.day = getMyDay(
                    this.$moment.unix(v.send_time - 0).format('d')
                  )
                  v.send_time = this.$moment
                    .unix(v.send_time - 0)
                    .format('MM-DD')

                  // v.created_at = v.send_time;
                })
                this.messageData = res.data.data
                this.id = res.data.data[0].id
                this.total = res.data.total
                this.messageDetail = res.data.data[0]
              }
              // this.message();

              this.$store.commit('loading', false)
            }
          })
      },
      toggle (i, item) {
        this.contentActive = i
        if (item.received.length !== 0) {
          this.receivedText = item.received[0].content

          this.flag = true
        } else {
          this.flag = false
        }
        this.messageDetail = item
        // this.message();
      },
      message () {
        // this.$http
        //   .post("${this.$HOST_NAME}/member/messageDetail", { id: this.id })
        //   .then(res => {
        //     if (res.code == 200) {
        //       this.messageDetail = res.data[0];
        //     }
        //   });
      },
      hanlderPage (i) {
        this.i = i
        this.getmessage()
      }
    },
    created () {
      this.$nextTick(() => {
        this.getmessage()
      })
    },
    destroyed () {
      this.$store.commit('loading', false)
    },
    components: {sentRight}
  }
</script>

<style lang="less" scoped>
  .preferential {
    .header {
      height: 66px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      margin: 0 14px;
    }
    .content {
      .left {
        width: 52%;
        padding-top: 20px;
        position: relative;
        height: 654px;
        // padding-left: 106px;
        .left-time {
          position: absolute;
          top: 20px;
          left: 0;
          height: 530px;
          width: 106px;
          border-right: 1px solid #dbdbdb;
        }

        .row {
          padding-right: 24px;
          padding-left: 36px;
          position: relative;
          .time {
            line-height: 26px;
            margin-top: 15px;
            font-size: 16px;
            p:nth-child(2) {
              font-size: 14px;
            }
          }
          .round {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: #ff9900;
            border-radius: 50%;
            position: absolute;
            left: 100px;
            top: 36px;
          }
          .system {
            display: inline-block;
            width: 42px;
            height: 24px;
            background: #f90;
            line-height: 24px;
            text-align: center;
            color: #fff;
            border-radius: 5px;
            font-size: 14px;
            position: absolute;
            top: 29px;
            left: 122px;
          }
          .system::after {
            content: "";
            width: 0;
            height: 0;
            border-width: 4px 7px 4px 0px;
            border-style: solid;
            border-color: transparent #f90 transparent transparent;
            display: block;
            position: absolute;
            top: 8px;
            left: -7px;
          }
          .content {
            width: 336px;
            border-radius: 10px;
            height: 86px;
            padding: 10px 30px 10px 20px;
            cursor: pointer;
            .title {
              color: #333;
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 14px;
            }
            .main {
              line-height: 18px;
              height: 36px;
              overflow: hidden;
            }
          }
          .contentActive {
            background: #f9f9f9;
          }
        }
        .page {
          position: absolute;
          right: 25px;
          bottom: 80px;
        }
      }
      .right {
        width: 48%;

        background: #f2f2f2;
        padding: 28px;
        border-radius: 0 0 15px 0;
        height: 584px;
      }
    }
  }
</style>
