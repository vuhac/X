<template>

  <div class="carouse">
    <el-carousel :interval="5000" arrow="never" height="530px" indicator-position="none">
      <el-carousel-item v-for="(item,i) in carouselData" :key="i">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        // value1: 0
        carouselData: [
          {img: require('/static/img/klk/thirdparty/1.jpg')},
          {img: require('/static/img/klk/thirdparty/klk2.jpg')},
          {img: require('/static/img/klk/thirdparty/2.jpg')},
          {img: require('/static/img/klk/thirdparty/3.jpg')},
          {img: require('/static/img/klk/thirdparty/4.jpg')},
          {img: require('/static/img/klk/thirdparty/5.jpg')},
        ]
      }
    }
  }
</script>

<style lang="less">
  .carouse {
    position: relative;
    overflow: hidden;
    /* width: 1904px; */
    height: 530px;
  }
</style>
