<template>


  <div class="mobileCon">
    <div class="container ">
      <div class="mobileText">
          <h1><img src="/static/jhcp/img/App.png" /></h1>
          <h2>02885.com</h2>
          <img class="cutFinger" src="/static/jhcp/img/finger.png" />
          <div class="android"><img src="/static/jhcp/img/mqrcode.png" alt=""></div>
      </div>

      <div class="slide">
          <ul>
            <li :class="{active:tabIndex==i}" v-for="(item,i) in slideData" :key="i"><img :src="item" alt=""></li>
          </ul>
      </div>
      <!-- <div class="mobileSlide">
        <div class="slideTxtBox">
          <img src="../../../../static/jhcp/img/home/5-grade.png" alt="">
        </div>
      </div>
      <div class="qrcode">
        <img src="../../../../static/jhcp/img/mqrcode.png" alt="">
      </div>
      <div class="shouzhi">
        <img src="../../../../static/jhcp/img/home/shouzhipng.png" alt="">
      </div> -->
    </div>

  </div>

</template>

<script>
  export default {
    data(){
      return{
        tabIndex:0,
        slideData:['/static/public/image/mobile/1-home.png','/static/public/image/mobile/2-home.png','/static/public/image/mobile/3-home.png','/static/public/image/mobile/4-home.png','/static/public/image/mobile/5-home.png'],
      }
    },
    methods:{
      change(){
        if(this.tabIndex == 4){
          this.tabIndex = 0 ;
        }else{
          this.tabIndex ++ ;
        }
      }
    },
    mounted(){
      let timer = setInterval(this.change,3000);
    }
  }
</script>

<style lang="less" scoped>
  .mobileCon {
    background:#977a5a url("/static/jhcp/img/bg.jpg") 50% no-repeat;
    width: 100%;
    min-width: 1000px;
    height: 655px;
    overflow: hidden;
    user-select: none;

    .container {
      position: relative;
      width: 1000px;
      margin: 0 auto;
      height: 620px;
      padding-top: 115px;
      padding-left: 162px;

      .mobileText{
        transition-duration: 1s;
        width: 375px;
        height: 460px;
        margin-left: -153px;
        margin-top: 32px;
        z-index: 2;
        h1{
          position: absolute;
          left: 27px;
          top: 108px;
          overflow: hidden;

          img{
            width: 56px;
            height: 56px;
            border-radius:8px;
          }
        }
        h2{
          font-size: 30px;
          color: #e4393c;
          -webkit-user-select: text;
          user-select: text;
          position: absolute;
          top: 243px;
          left: 10px;
        }
        .cutFinger{
          position: absolute;
          left: 467px;
          top: 227px;
          z-index: 99;
        }
        .android{
          position: absolute;
          top: 364px;
          left: 17px;
          overflow: hidden;

          img{
            width: 120px;
            height: 120px;
          }
        }
      }

      .slide{
        position: absolute;
        width: 650px;
        height: 680px;
        right: -118px;
        top: 82px;

        li{
          display: none;
          transition: all 1s ease;
        }
        li.active{
          display: block;
        }
      }

      // .mobileSlide {
      //   position: absolute;
      //   width: 650px;
      //   height: 680px;
      //   right: -84px;
      //   top: 41px;

      //   .slideTxtBox {
      //     position: absolute;
      //     top: 42px;
      //     left: 32px;
      //     background: #000;

      //     img {
      //       position: absolute;
      //       top: 0;
      //       left: 0;
      //       vertical-align: middle;
      //     }
      //   }
      // }

      // .shouzhi {
      //   position: absolute;
      //   top: 228px;
      //   right: 363px;
      // }

      // .qrcode {
      //   position: absolute;
      //   top: 225px;
      //   left: 7px;

      //   img {
      //     width: 200px;
      //     height: 200px;
      //   }
      // }
    }
  }
</style>
