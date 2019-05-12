<template>
  <div class="banner">
    <img :src="headerImg">
  </div>
</template>
<script>
export default {
    props:{
        headerImg:{
            type:String
        }
    }
};
</script>
<style lang="less" scoped>
.banner {
  height: 273px;
  max-width: 1920px;
  min-width: 1200px;
  margin: 0 auto;
  margin-bottom: -4px;
  img {
    margin-top: -2px;
  }
}
</style>
