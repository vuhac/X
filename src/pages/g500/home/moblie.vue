<template>


  <div class="mobileCon">
    <div class="container">
      <div class="mobileSlide">
        <div class="slideTxtBox">
          <img src="../../../../static/500w/img/home/5-grade.png" alt="">
        </div>
      </div>
      <div class="qrcode">
        <!-- <img src="../../../../static/500w/img/mqrcode.png" alt=""> -->
          <div ref="qr-code"></div>
      </div>
      <div class="shouzhi">
        <img src="../../../../static/500w/img/home/shouzhipng.png" alt="">
      </div>
    </div>

  </div>

</template>

<script>

  export default {
    mounted() {
      this.createDownloadQRCode({
          el: this.$refs['qr-code'],
          url: window.location.origin + '/m#/download',
          size: 195
        })
    },


  }

  
</script>

<style lang="less" scoped>
  .mobileCon {
    background: url("../../../../static/500w/img/home/moblieBg.jpg") 50% no-repeat;
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
      padding-left: 10px;

      .mobileSlide {
        position: absolute;
        width: 650px;
        height: 680px;
        right: -84px;
        top: 41px;

        .slideTxtBox {
          position: absolute;
          top: 42px;
          left: 32px;
          background: #000;

          img {
            position: absolute;
            top: 0;
            left: 0;
            vertical-align: middle;
          }
        }
      }

      .shouzhi {
        position: absolute;
        top: 228px;
        right: 363px;
      }

      .qrcode {
        position: absolute;
        top: 225px;
        left: 7px;
        width:200px;
        height:200px;
        background:#fff;
        div{
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%)
        }
      }
    }
  }
</style>
