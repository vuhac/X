<template>
    <div class="newgong">
        <div class="newgong-content">
            <div class="notice" style="margin-left:-22px;">
                <!-- <img src="/static/jltx/img/notice-iocn.png" alt=""> -->
                <div class="noticePic">

                </div>
            </div> 
            <div class="demolist list">
                    <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                    onmouseover="this.stop()"
                    style="color: #fff; font-size: 14px; overflow: hidden;position:relative;top:-10px">
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
        position: absolute;
        height: 30px;
        width: 100%;
        bottom:0;
        // margin:9px 0 2px 0;
        // border-bottom:1px solid #eee;
        // bottom: 0;
        // left: 0;
        // background: rgba(0, 0, 0, 0.4);
        overflow: hidden;
        z-index: 12;
        background:url(/static/zyyl/img/trans-bg.png) repeat;
        .newgong-content {
            width: 1200px;
            height: 30px;
            margin: 0 auto;
            .notice {
                display: inline-block;
                float: left;
                position: relative;
                top: 5px;
                left: 21px;
                margin-right: 50px;
                width: 30px;
                .noticePic{
                    background:url("/static/zyyl/img/a_sprite.png");
                    background-position:-49px 0;
                    width:24px;
                    height:18px;
                }
            i {
                color: #000;
                font-size: 21px;
            }
            }
            .demolist {
                position: relative;
                left: 45px;
                width: 1150px;
                height: 30px;
            }
        }
    }
</style>
