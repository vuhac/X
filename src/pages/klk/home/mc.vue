<template>
            <!-- 修改图片的蒙层 -->
        <div class="mcBox"  v-show="showimg">
            <span class="cellSpan"></span>
            <div class="cellContent">
                <!-- iview插件 -->
                <Icon class="mcX" type="md-close" @click="mcClose" />
                <a href="javascript:void(0)"><img :src="imgsrc" alt=""></a>
            </div>
            
        </div>

</template>
<script>
export default {
    props:{
        imgsrc:{
            type:String
        }
    },
    data(){
        return {
            showimg:true,
            // imgsrc:"/static/jltx/imgs/yunshanfu.png"
        }
    },
    methods:{
        // 关闭蒙层
        mcClose(){
            this.showimg=false;
        },

    async getPopout () {
        if (!this.$store.state.mainState.ifpourT || localStorage.token)
          return false
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'popups',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length){
            this.showimg=true
            return false
          }
          this.showPopout = true
          this.showimg=true
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      }
    },
    created(){
        this.getPopout();
    },
    mounted(){
        setTimeout(()=>{
            this.showimg=false;
        },5000)
    }
}
</script>
<style lang="less" scoped>
    // 修改图片后的居中效果
    .mcBox{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.6);
        position:fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
        z-index:10001;
        display: table;
        text-align: center;
        .cellSpan{
            display: inline-block;
            vertical-align: middle;
            height:100%;
            
        }
        .cellContent{
            position:relative;
            display: inline-block;
            vertical-align: middle;
            // background-color: red;
            .mcX{
                width:50px;
                height:50px;
                position:absolute;
                // right:10px;
                // top:110px; 
                right:102px;
                top:82px;
                // 此处位置需要根据位置随时更改
                cursor:pointer;
                font-size:40px;
                color:red;
            }
        }
    }
</style>