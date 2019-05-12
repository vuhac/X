<template>

  <div class="issue">

    <div class="banner"></div>


    <div class="content">
      <h2>常见问题</h2>
      <p>Q1: 如何加入客拉客？</p>
      <p>A1: 您可以直接点选
        <router-link tag="span" to="/home">免费开户</router-link>
        ，确认填写资料后，可立即登记成为客拉客会员。
      </p>
      <p>Q2: 我可以直接在网络上存款吗？</p>
      <p>A2: 可以，客拉客提供多种在线存款选择，详情请参照 存款须知。</p>
      <p>Q3: 我在哪里可以找到游戏的规则？</p>
      <p>A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同</p>
      <p>同时，可以弹跳窗口随时提醒您游戏规则。</p>
      <p>Q4: 你们的游戏会用多少副牌？</p>
      <p>A4: 在百家乐我们会用8副牌，其它游戏则会根据其性质有所调整。</p>
      <p>Q5: 你们何时会洗牌?</p>
      <p>A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</p>
      <p>Q6: 我的注码的限制是多少？</p>
      <p>A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。</p>
      <p>Q7: 如果忘记密码怎么办？</p>
      <p>A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回你的帐号密码。</p>
      <p>Q8: 当您注册时出现，姓名已注册。</p>
      <p>A8: 您可 通过24小时在线客服人员协助处理。</p>


    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .issue {
    .banner {
      width: 100%;
      height: 200px;
      background: url("/static/qygj/img/thirdparty/cjwt.jpg") no-repeat center top;
    }

    .content {
      width: 1200px;
      margin: 30px auto;
      border: 1px solid #b48c68;
      background: #f1f1f1;
      padding: 15px;

      h2 {
        font-size: 20px;
        font-family: 微软雅黑;
        color: #000;
        margin-bottom: 5px;
      }

      p {
        font-family: 微软雅黑;
        color: #000;
        font-size: 14px;
        line-height: 20px;

        span {
          color: rgb(255, 0, 0);
          cursor: pointer;
        }
      }
    }
  }
</style>
