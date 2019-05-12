<template>
  <div class="homeLive-wrap">
    <div class="livebanner">

        <!-- 跑马灯 -->
      <div class="newgong">
        <div class="newgong-content">
          <div class="notice">
            <!-- <i class="iconfont icon-sound"></i> -->
            <img src="/static/pjyl/img/pjyl/index/news.png" alt="">
          </div>

          <div class="demolist list">
            <marquee
              v-if="lantern"
              align="middle"
              direction="left"
              loop="-1"
              scrollamount="3"
              onmouseout="this.start()"
              onmouseover="this.stop()"
              style="color: white; font-size: 14px; line-height: 30px;overflow: hidden;height: 30px;"
            >
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>
    
    </div>
    <vp-Home-Live></vp-Home-Live>
  </div>
</template>
<script>
  import vpHomeLive from '../../../public/home-live/index'
  // import 

  export default {
    data () {
      return {
        lantern:''
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
    created: function () {
    },
    mounted () {
      this.getLantern();
    },
    watch: {},
    components: {
      vpHomeLive
    }
  }
</script>

<style lang="less" scoped>
  .homeLive-wrap {
    // margin-bottom: 20px;
    // padding-top: 30px;
    // background: url("/static/public/image/game/live/zr.jpg") no-repeat top center #f1f1f1;
      position: relative;
      z-index: 1;
      // padding-top: 167px;
      background:#c89752;
    .livebanner{
      height: 342px;
      background:url(/static/pjyl/img/pjyl/banner.jpg) no-repeat top center;
      position:relative;
    }
    /deep/ .live{
      background:url(/static/pjyl/img/pjyl/content_bg.jpg) no-repeat top center;
      padding-top:75px;
    } 
  }
  .newgong {
    height: 36px;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 12;
    position: absolute;

    .newgong-content {
      width: 1000px;
      height: 36px;
      margin: 0 auto;
      position:relative;
      .notice {
        display: inline-block;
        float: left;
        position: absolute;
        top: -18px;
        left: -9px;
        margin-right: 50px;
        z-index: 100;
        i {
          color: #fff;
          font-size: 23px;
        }
      }

      .demolist {
        display: inline-block;
        width: 1070px;
        padding-left:70px;
      }
      /deep/.el-carousel{
        overflow:visible;
      }
    }
  }
  
</style>
