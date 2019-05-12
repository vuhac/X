<template>
  <div class="body">
    <h2>联系我们</h2>
    <!--<ul class="tab clear-fix">-->
    <!--<li :class="{active: index === 0}" @click="index = 0">责任与博彩</li>-->
    <!--<li :class="{active: index === 1}" @click="index = 1">条款与规则条款与规则</li>-->
    <!--</ul>-->
    <div class="content">
      <div>
        <p align="left">
          彩票之家的客服中心全年无休，提供1周7天、每天24小时的优质服务。</p>
        <p align="left">
          如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</p>
        <p align="left">
          点击"在线客服"连结，即可进入在线客服系统与客服人员联系。</p>
        <!-- <p align="left">
          您亦可使用Email与客服人员取得联系</p>
        <p align="left">
          会员邮箱：bcccesq013@163.com</p> -->
      </div>
      <br>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style type="text/less" lang="less" scoped>
  .body {
    width: 1000px;
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    background-color: #e5e5e5;
    letter-spacing: 0.1rem;

    h2 {
      font-size: 32px;
      color: black;
    }

    .content {
      margin-top: 20px;
      line-height: 20px;
    }
  }
</style>
