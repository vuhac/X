<template>
  <div class="newgong">
    <div class="newgong-content">
      <div class="notice">
        <i class="iconfont"></i>
        <span>最新消息</span>
      </div>
      <div class="demolist list">
        <marquee align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                 onmouseover="this.stop()">
          <span v-html="lantern"></span>
        </marquee>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lantern: ''
      }
    },
    methods: {
      // 获取公告
      async getLantern () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'lantern',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length) return false
          this.lantern = res.data.data[0] && res.data.data[0].description
        }
        // 参数： type: lantern 走马灯
        // 参数： type: popups 弹窗
        // 参数： type: notice 提示
      }
    },
    mounted () {
      this.getLantern()
    }
  }
</script>
<style lang="less" scoped>
  .newgong {
    background: #eeeeee;
    width: 100%;
    z-index: 8;
    color: #ef3123;
    border-top: 1px solid #3d3b46;
    border-bottom: 1px solid #3d3b46;

    .newgong-content {
      width: 1200px;
      height: 51px;
      line-height: 51px;
      margin: 0 auto;

      .notice {
        float: left;
        position: relative;
        top: 2px;
        left: 25px;
        height: 100%;
        margin-right: 50px;

        span {
          vertical-align: text-bottom;
        }

        i {
          display: inline-block;
          background: url(/static/eyc/img/icon/new-title.png) left no-repeat;
          width: 22px;
          height: 40px;
          text-align: right;
        }
      }

      .demolist {
        display: inline-block;
        width: 990px;
        height: 100%;

        marquee {
          font-size: 15px;
          line-height: 51px;
          height: 51px;
        }
      }
    }
  }
</style>
