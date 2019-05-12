<template>
     <div>
        <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">  
          <div class="popout-box">
          <span v-html="popups" v-if="isTest"></span>
           <img :src="popups" v-else />
        </div>
        </Modal>
        <slot></slot>
     </div>
</template>
<script>
export default {
    data(){
       return{
        isTest:true,
        popoutObj:{
          client_type:"PC"
        },
        popups:"",
        showPopout:false,
       }
    },
    methods:{
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
          fullPath.includes("/home/tiyu")||
          fullPath.includes("/home/chess")||
          fullPath.includes("/home/sport")||
          fullPath.includes("/home/qipai")||
          fullPath.includes("/home/caipiao")
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
        // 换一种写法
        let hasContent=false;
        if(res&&res.code==200){
          if(res.data.data.length){
            hasContent=true;
            if(localStorage.token && this.popoutObj.appears_location==1){
                this.$store.state.mainState.showDialog.home.login=false
            }else if(!localStorage.token && this.popoutObj.appears_location==1){
                this.$store.state.mainState.showDialog.home.noLogin=false
            }else if(localStorage.token && this.popoutObj.appears_location==2){
                this.$store.state.mainState.showDialog.game.login=false
            }else if(!localStorage.token && this.popoutObj.appears_location==2){
                 this.$store.state.mainState.showDialog.game.noLogin=false
            }

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
      },
      
    },
    created(){
      let {game,home}=this.dalaDog
      if(game.login && game.noLogin && home.login && home.noLogin){
         
          this.getPopout1();
      }
    },
    computed: {
      dalaDog(){
        return  this.$store.state.mainState.showDialog;
      },
     },
     watch:{
        $route(nVal,oVal){
          let {game,home}=this.dalaDog
           if(nVal.path=="/home" &&  !oVal.path.includes("/plays/hall")&&!oVal.path.includes("/rules")){
                if(home.login && home.noLogin){
                      this.getPopout1()
                }
           }
           if(nVal.path=="/home/qipai"||nVal.path=="/home/tiyu" ||nVal.path=="/home/live"||nVal.path=="/home/buyu"||nVal.path.includes("/home/games")){
                 if(game.login && game.noLogin){
                      this.getPopout1()
                 }
           }
       }
     },
}
</script>
<style lang="less" scoped>

</style>
