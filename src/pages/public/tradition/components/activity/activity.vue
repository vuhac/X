<template>
  <div class="vp-activity">
    <div class="activity-content">
      <i class="iconfont icon-sound"></i>
      <span class="textBox">
                  <marquee onmouseover=this.stop() onmouseout=this.start() direction="left" scrollamount="2"
                           scrolldelay="0" loop="-1" width="1060" hspace="10" vspace="10">
                    <span v-html="notice"></span>
                  </marquee>
        <!-- <span ref="textContent" class="text">{{text}}</span> -->
                </span>
    </div>

  </div>

</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: false
      }
    },
    data () {
      return {
        timer: {},
        timerLeft: '',
        notice: ''
      }
    },
    methods: {

      // 彩票顶部走马灯内容
      // async getDatas () {

      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {type: 'lantern', desc_client_type: 'html'})
      //   if (res && res.code == 200) {
      //     if (!res.data.data.length) return false
      //     this.notice = res.data.data[0] && res.data.data[0].description
      //   } else {
      //     // this.$toast.fail(res.data);
      //   }
      // },


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
            this.notice = res.data.data[0] && res.data.data[0].description
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
      // this.getDatas()
      this.getLantern();
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../../../assets/less/public/var.less';

  .vp-activity {
    padding: 9px 23px;
    // border-bottom: 1px solid @theme-border-color;
    .activity-content {
      // padding: 10px 15px;
      position: relative;
      background: #fbfafa;
      border-radius: 5px;
      font-size: 14px;
      color: #999;
      height: 40px;
      overflow: hidden;

      i {
        position: absolute;
        top: 12px;
        font-size: 18px;
        color: #FF0000;
        left: 16px;
      }

      .textBox {
        position: absolute;
        margin-left: 30px;
        display: inline-block;
        width: 1060px;
        overflow: hidden;
        top: 3px;
        // padding: 10px;
        // -webkit-animation:mymove 6s  cubic-bezier(0,0,1,1)  infinite;
        // -moz-animation:mymove 6s  cubic-bezier(0,0,1,1)  infinite;
        // -o-animation:mymove 6s  cubic-bezier(0,0,1,1)  infinite;
        // -ms-animation:mymove 6s  cubic-bezier(0,0,1,1)  infinite;
        // animation:mymove 6s  cubic-bezier(0,0,1,1)  infinite;
        //  @-webkit-keyframes mymove
        //   {
        //     0%{top:-24px;}
        //     30%{top:3px;}
        //     70%{top:3px;}
        //     100%{top:30px;}
        //   }
        //  @-moz-keyframes mymove
        //   {
        //     0%{top:-24px;}
        //     30%{top:3px;}
        //     70%{top:3px;}
        //     100%{top:30px;}
        //   }
        //  @-ms-keyframes mymove
        //   {
        //     0%{top:-24px;}
        //     30%{top:3px;}
        //     70%{top:3px;}
        //     100%{top:30px;}
        //   }
        //  @-o-keyframes mymove
        //   {
        //     0%{top:-24px;}
        //     30%{top:3px;}
        //     70%{top:3px;}
        //     100%{top:30px;}
        //   }
        //  @keyframes mymove
        //   {
        //     0%{top:-24px;}
        //     30%{top:3px;}
        //     70%{top:3px;}
        //     100%{top:30px;}
        //   }
      }
    }
  }
</style>
