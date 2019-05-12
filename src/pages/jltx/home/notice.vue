<template>
    <div class="newgong">
        <div class="newgong-content">
            <div class="notice" style="margin-left:-22px;">
                <!-- <i class="iconfont icon-sound"></i> -->
                <img src="/static/jltx/img/notice-iocn.png" alt="">
            </div> 
            <div class="demolist list">
                    <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                    onmouseover="this.stop()"
                    style="color: rgb(81,81,81); font-size: 14px; line-height: 47px;overflow: hidden;height: 47px;">
                <span v-html="lantern"></span>
            </marquee>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lantern:""
        }
    },
    methods:{
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
        // async getLantern () {
        //     let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
        //     type: 'lantern',
        //     desc_client_type: 'html'
        //     })
        //     if (res && res.code == 200) {
        //     if (!res.data.data.length) return false
        //     this.lantern = res.data.data[0] && res.data.data[0].description
        //     }
        //     // 参数： type: lantern 走马灯
        //     // 参数： type: popups 弹窗
        //     // 参数： type: notice 提示
        // },
    },
    mounted() {
        this.getLantern();
    },
}
</script>
<style lang="less" scoped>
        .newgong {
        // position: absolute;
        height: 47px;
        width: 100%;
        // bottom: 0;
        // left: 0;
        // background: rgba(0, 0, 0, 0.4);
        z-index: 12;
        .newgong-content {
            width: 1100px;
            height: 47px;
            margin: 0 auto;
            .notice {
            display: inline-block;
            float: left;
            position: relative;
            top: 16px;
            left: 25px;
            margin-right: 50px;
            i {
                color: #000;
                font-size: 21px;
            }
            }
            .demolist {
            display: inline-block;
            width: 990px;
            }
        }
    }
</style>
