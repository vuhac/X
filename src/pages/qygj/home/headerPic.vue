<template>
    <div class="picBox">
        <img :src="headerImg" alt="">

    </div>
</template>
<script>
export default {
    props:{
        headerImg:{
            type:String
        }
    }
}
</script>
<style lang="less" scoped>
    .picBox{
        min-width: 1200px;
        max-width:1920px;
        margin:0 auto;
    }

    .newgong {
        position: absolute;
        height: 40px;
        width: 100%;
        bottom:0px;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 12;
        .newgong-content {
          width: 1200px;
          height: 40px;
          margin: 0 auto;
          .notice {
            display: inline-block;
            float: left;
            position: relative;
            top: 12px;
            left: 25px;
            margin-right: 50px;
            i {
              font-weight: 600;
              color:white;
              font-family: "iconfont" !important;
              font-size: 16px;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
            }
          }
        .demolist {
          display: inline-block;
          width: 990px;
        }
      }
    }
</style>