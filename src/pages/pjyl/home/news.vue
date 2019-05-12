<template>
  <div class="newgong">
    <div class="newgong-content">
      <div class="notice">
          <div class="noticeTxt"></div>
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
    // 新文字走马灯接口
    async getLantern () {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
        type: 'lantern',
        // desc_client_type: 'html'
        client_type:"PC"
      })
      if (res && res.code == 200) {
        // if (!res.data.data.length) return false
        // this.lantern = res.data.data[0] && res.data.data[0].description

        if(res.data.data.length){
          this.lantern = res.data.data[0] && res.data.data[0].description
        }else{  
          console.log("文字走马灯没有数据返回")
          return false;
        }

      }
      // 参数： type: lantern 走马灯
      // 参数： type: popups 弹窗
      // 参数： type: notice 提示
    },
    },
    mounted () {
      this.getLantern()
    }
  }
</script>
<style lang="less" scoped>
  .newgong {
    // background: #eeeeee; 
    width: 100%;
    z-index: 8;
    /* color: #ef3123; */
    /* border-top: 1px solid #3d3b46; */
    /* border-bottom: 1px solid #3d3b46; */
    position: absolute;
    bottom: -36px;

    .newgong-content {
      width: 1000px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;

      .notice {
        float: left;
        position: relative;
        top: 2px;
        left: 25px;
        height: 100%;
        margin-right: 50px;
        .noticeTxt{
          position:absolute;
          top:-23px;
          left:0;
          width:79px;
          height:79px;
          background:url(/static/pjyl/img/pjyl/index/news.png) no-repeat center;
        }
 
      }

      .demolist {
        display: inline-block;
        width: 858px;
        height: 100%;
        margin-left: 79px;
        marquee {
          font-size: 15px;
          line-height: 36px;
          height: 36px;
          color:#c89752 ;
        }
      }
    }
  }
</style>
