<template>
  <div class="body">
    <h2>存款帮助</h2>
    <!--<ul class="tab clear-fix">-->
    <!--<li :class="{active: index === 0}" @click="index = 0">责任与博彩</li>-->
    <!--<li :class="{active: index === 1}" @click="index = 1">条款与规则条款与规则</li>-->
    <!--</ul>-->
    <div class="content" v-html="contents[index]"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        contents: [
          `
    <p>
         </p>
    <p>
        一、公司入款:强烈推荐使用</p>
    <p>
        <br>
        1. 会员登入后点击 [在线存款]，选择 [公司入款]<br>
        2. 请选择欲使用的银行卡。<br>
        3. 选择银行后，网页会显示可存入的银行帐号。可直接点击网页上银行标志，自动为您带到银行首页，<br>
        登入您个入网银后，请将款项转入公司提供的入款帐号。<br>
        ※如您使用农业银行/工商银行， 请将公司入款订单号贴入您网银 [备注/附言] 字段<br>
        ※建议选择与您转帐的银行同一家，同银行间转帐可以立即到帐，若跨行转帐有可能较晚到帐。※<br>
        <br>
        可以自由选择:<br>
        (1).网络银行: 登入自己的网络银行页面，从银行网页上转帐到指定银行帐号 中。<br>
        (2).ATM自动柜员机 : 到实体自动柜员机以银行卡或是现金方式存入，没有开启网银功能与存现金的会员可用<br>
        (3).银行柜台转帐 : 到银行柜台完成转帐手续<br>
        <br>
        ※公司入款注意事项※<br>
        亲切提醒您，公司入款银行随时更变，请于每次入款前，确认您可以使用的入款帐号。<br>
        如入款帐号已过期，彩票之家恕不负责！万请见谅，感谢配合。<br>
        <br>
        4. 核对提交数据/提交申请<br>
        汇款完成请填写并提交相关数据，并备份您的公司入款订单号。 系统在收到款项后会进行比对，如果存款金<br>
        额、时间相符合，则会将款项加入您的游戏帐号中。处理时间通常为5-30分钟。(跨行转帐时间可能会超过30分)<br>
        <br>
        5. 若5钟内未到帐，请联系在线客服人员。<br>
        客服人员会与您核对存款数据，必要时需要您提供截图、转帐数据等相关证明。<br>
        <br>
        二、在线存款 :</p>
    <p>
        1. 会员登入后点击 [在线存款]，选择 [在线付款]<br>
        2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便彩票之家客服第一时间与您联系。<br>
        3. 选择”支付银行”。<br>
        支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br>
        4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。<br>
        5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的彩票之家会员帐号。<br>
        <br>
        存款需知:<br>
        彩票之家最低存款为$100人民币，最高存款无上限!<br>
        未开通网银的会员，请亲洽您的银行柜台办理。<br>
        如有任何问题，请洽24小时在线客服。</p>
`,
        ],
        index: 0
      }
    }
  }
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

    .tab {
      margin-top: 10px;
      height: 30px;
      line-height: 30px;
      border-bottom: 2px solid #888888;

      li {
        float: left;
        color: #e5e5e5;
        background-color: black;
        padding: 0 10px;
        margin-right: 10px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        cursor: pointer;

        &:hover, &.active {
          background-color: #f13131;
        }
      }
    }

    .content {
      margin-top: 20px;
      line-height: 20px;
    }
  }
</style>
