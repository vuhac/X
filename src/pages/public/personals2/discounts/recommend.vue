<template>
  <div class="recommend">
    <div class="header">
      推荐好友
    </div>
    <div class="content">
      <div class="left fl">
        <div class="bar">
          <label class="text">注册链接:</label>
          <input type="text" v-model="linkVal">
          <span @click="Copy(linkVal)">复制链接</span>
        </div>

        <div class="bar">
          <label class="text">您的二维码:</label>
          <div id="qrcode"></div>
        </div>

        <div class="main">
          <p>扫描推送更便捷</p>
          <p>右击图标保存分享微信、QQ、微博让你推广更便捷</p>
        </div>

        <div class="bottom">
          <h3 class="font-color">温馨提示</h3>
          <p>您的好友必须从您的
            <span class="font-color">专属链接</span>来
            <span class="font-color">注册</span>。</p>
          <p>反赠金额在
            <span class="font-color">隔日18:00</span>前派发，彩金转入平台后需要达到
            <span class="font-color">1倍流水</span>才能进行提款。</p>
          <p>领取好友彩金时，对应的老虎机平台的余额必须小于5元。</p>
          <p>好友彩金有效时间为30天（从派发当日开始计算），规定时间内未领取则自动取消。</p>
        </div>
      </div>
      <div class="right fr">
        <div class="title">
          最近推荐好友记录
        </div>

        <Table :columns="columns" :data="data"
               no-data-text="<div style='line-height:453px;background:#f2f2f2;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
      </div>
    </div>
  </div>
</template>

<script>
  // import store from "@/vuex/store";
  import QRCode from 'qrcodejs2'

  export default {
    data () {
      return {
        columns: [
          {
            title: '邀请人名称',
            key: 'userName'
          },
          {
            title: '邀请时间',
            key: 'created_at',
            render: (h, params) => {
              return h('div', [
                h(
                  'span',
                  moment
                    .unix(params.row.created_at - 0)
                    .format('YYYY-MM-DD HH:mm:ss')
                )
              ])
            }
          },
          {
            title: '被邀请人帐号',
            key: 'inviteUserName'
          },
          {
            title: '站点名称',
            key: 'siteName'
          }
        ],
        data: [],
        linkVal: 'www.baidu.com'
      }
    },
    methods: {
      inviteRecord () {
        this.$http.post(`${this.$HOST_NAME}/member/invite/record`).then(res => {
          if (res.code == 200) {
            this.data = res.data.data
          }
        })
      },
      Copy (link) {
        this.$success('复制成功')
        this.$copyText(link)
      }
    },
    mounted () {
      this.$store.commit('loading', true)
      this.$nextTick(() => {
        this.$http.get(`${this.$HOST_NAME}/member/invite`).then(res => {
          if (res.code == 200) {
            this.linkVal = res.data.invite_link
            let qrcode = new QRCode('qrcode', {
              width: 202,
              height: 202, // 高度
              text: res.data.invite_link, // 二维码内容
              render: 'table' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
              // background: '#f0f'
              // foreground: '#ff0'
            })
            this.$store.commit('loading', false)
          }
        })
      })
    },
    created () {
      this.inviteRecord()
    },
    destroyed () {
      this.$store.commit('loading', false)
    }
    //   store
  }
</script>

<style lang="less">
  .ivu-table {
    background: transparent;
  }

  .recommend {
    .header {
      height: 66px;
      // line-height: 66px;
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
        .bar {
          margin-top: 30px;
          .text {
            display: inline-block;
            width: 144px;
            text-align: right;
            font-size: 1.4em;
            vertical-align: middle;
            margin-right: 10px;
          }
          input {
            height: 36px;
            border: 1px solid #dbdbdb;
            outline: none;
            text-indent: 1em;
            border-radius: 4px 0 0 4px;

            &:not(.other) {
              width: 239px;
              height: 36px;
              background: #f9f9f9;
            }
          }
          span {
            height: 36px;
            display: inline-block;
            width: 80px;
            background: linear-gradient(180deg, #ff3493, #ff1b46);
            line-height: 36px;
            color: #fff;
            text-align: center;
            margin-left: -5px;
            border-radius: 0 4px 4px 0;
            font-size: 16px;
            transform: translateY(3%);
            cursor: pointer;
          }
        }
        .main {
          // margin-left: 210px;
          text-align: center;
          font-size: 1.3em;
          margin-top: 10px;
          p:nth-child(1) {
            padding-bottom: 12px;
            font-size: 16px;
          }
        }
        .bottom {
          margin: 30px 36px;
          background: #fefef2;
          padding: 16px 8px 10px 8px;
          h3 {
            margin-bottom: 10px;
            font-size: 15px;
          }
          p {
            margin-bottom: 6px;
          }
        }
        .font-color {
          color: #ff8c53;
        }
        #qrcode {
          width: 202px;
          height: 202px;
          background: #000;
          display: inline-block;
          vertical-align: top;
        }
      }
      .right {
        width: 48%;
        border-radius: 0 0 15px 0;
        height: 650px;
        background: #f2f2f2;
        padding: 0 20px;
        .title {
          font-size: 15px;
          height: 64px;
          line-height: 64px;
        }
      }
    }
  }

  .ivu-table {
    background: #f2f2f2;
  }
</style>
