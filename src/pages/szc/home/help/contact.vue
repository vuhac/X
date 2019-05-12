<template>

  <div class="contact">

    <div class="banner"></div>


    <div class="content">
      <h2>联系我们</h2>

      <p>澳博的客服中心全年无休，提供1周7天、每天24小时的优质服务。</p>
      <p>如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</p>
      <p>点击"在线客服"链接，即可进入在线客服系统与客服人员联系。</p>
      <p>您亦可使用Email与客服人员取得联系</p>
      <p>官方邮箱：szc22k@163.com</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .contact {
    .banner {
      width: 100%;
      height: 200px;
      background: url("/static/szc/img/thirdparty/lxwm.jpg") no-repeat center top;
    }

    .content {
      width: 1200px;
      margin: 30px auto;
      border: 1px solid #b48c68;
      background: #f1f1f1;
      padding: 15px;
      min-height: 704px;

      h2 {
        font-size: 20px;
        font-family: 微软雅黑;
        color: #000;
        margin-bottom: 5px;
      }

      p {
        font-family: 微软雅黑;
        color: #000;
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
</style>
