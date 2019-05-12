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


        // 初始化弹框信息
        getPosition(){

            let appears_location="";
            let bounce_location="";
            let fullPath=this.$router.currentRoute.fullPath;
            // 是否首页
            if(fullPath=="/home"){
            this.popoutObj.appears_location=1;
            }else if(fullPath.includes("/home/live")||
            fullPath.includes("/home/games")||
            fullPath.includes("/home/buyu")||
            fullPath.includes("/plays/hall")||
            fullPath.includes("/home/tiyu")
            ){
            this.popoutObj.appears_location=2;
            }else {
            // 非游戏页面和首页
            this.popoutObj.appears_location=3;
            }


            // 是否登录
            if(localStorage.token){
            // 存在表示登录后
            this.popoutObj.bounce_location=2;
            }else{
            // 登录前
            this.popoutObj.bounce_location=1;
            }
        },



        // 新的弹出框内容
        async getPopout1 () {
            // if (!this.$store.state.mainState.ifpourT || localStorage.token)
            //   return false
            this.getPosition();
            
            if(this.popoutObj.appears_location==3){
            // 非首页和游戏页，不用请求
            console.log("非首页或游戏页，不弹出框")
            return false;
            }

            let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
            type: 'popups',
            // desc_client_type: 'html',
            client_type:this.popoutObj.client_type,
            appears_location:this.popoutObj.appears_location,
            bounce_location:this.popoutObj.bounce_location,
            })
            // console.log(res);
            // if (res && res.code == 200) {
            //   // if (!res.data.data.length) return false
            //   // this.showPopout = true



            //   if(res.data.data.length){

            //       this.popups = res.data.data[0] && res.data.data[0].description
            //       this.$store.commit('mainState/resetPour', true)

            //       if(res.data.data[0].appears_location==this.popoutObj.appears_location){
            //         // 一致，现在还要判断，是否登录也是一致的
            //         if(res.data.data[0].bounce_location!=3){
            //           // 返回数据显示，并非是不限制登录，都要弹出（登录前和登录后，都要）
            //           if(res.data.data[0].bounce_location==res.data.data[0].bounce_location){
            //             // 表示符合后台返回的情况,弹出
            //             this.showPopout=true;
            //           }else{
            //             // 不符合，不弹出
            //             this.showPopout=false;
            //           }
                    

            //         }else{
            //           // 登录前和登录后，都要弹出
            //           this.showPopout=true;
            //         }

            //       }else{
            //         // 当前页和后台返回的页面不一致（主要判断是否是游戏页面和首页），
            //         if(res.data.data[0].appears_location=="1,2"){
            //           // 所有页面都要弹出
            //           this.showPopout=true;
            //         }else{
            //           // 不弹
            //           this.showPopout=true;
            //         }

            //       }



            //   }else{
            //     console.log("弹出框接口没有内容返回")
            //     return false;
            //   }


            // }else{
            //   console.log("链接出错",res)
            // }

            // 换一种写法
            let hasContent=false;
            if(res&&res.code==200){
            if(res.data.data.length){
                hasContent=true;
            }

            }else{
            console.log("链接出错",res)
            return false;
            }

            let is_appears_location=false;
            // 判断登录状态按钮
            if(hasContent){
                // this.popups = (res.data.data[0] && res.data.data[0].description)?res.data.data[0].description:res.data.data[0].pc_pic
                
                if(res.data.data[0] && res.data.data[0].description){
                console.log("文本")
                this.isTest=true;
                this.popups=res.data.data[0].description
                }else{
                console.log("图片")
                this.isTest=false;
                this.popups=res.data.data[0].pc_pic
                }



                this.$store.commit('mainState/resetPour', true)
                if(res.data.data[0].appears_location==this.popoutObj.appears_location){
                is_appears_location=true;
                }
            }else{
            console.log("弹出框接口没有内容返回")
                return false;
            }


            if(is_appears_location){
                // 登录状态一直
                if(res.data.data[0].bounce_location!=3){
                // 返回数据显示，并非是不限制登录，都要弹出（登录前和登录后，都要）
                if(res.data.data[0].bounce_location==res.data.data[0].bounce_location){
                    // 表示符合后台返回的情况,弹出
                    this.showPopout=true;
                }else{
                    // 不符合，不弹出
                    this.showPopout=false;
                }
                }else{
                // 不限制，都要弹出
                    this.showPopout=true;

                }
            }else{
                // 当前页和后台返回的页面不一致（主要判断是否是游戏页面和首页），
                if(res.data.data[0].appears_location=="1,2"){
                    // 所有页面都要弹出
                    this.showPopout=true;
                }else{
                    // 不弹
                    this.showPopout=true;
                }




            }
            
            this.showimg=false;




        },
    },



    created(){
        this.getPopout1();
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