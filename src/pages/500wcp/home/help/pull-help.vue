<template>
  <div class="body">
    <h2>取款帮助</h2>
    <!--<ul class="tab clear-fix">-->
    <!--<li :class="{active: index === 0}" @click="index = 0">责任与博彩</li>-->
    <!--<li :class="{active: index === 1}" @click="index = 1">条款与规则条款与规则</li>-->
    <!--</ul>-->
    <div class="content">
      <p>
        ? <strong>您可以通过以下方式取款：</strong></p>
      <ol>
        <li align="left">会员登入后点选“在线取款”。</li>
        <li align="left">输入选择“取款密码”，并确认提款人姓名与您银行帐号持有人相符。</li>
        <li align="left">输入“取款额度”以及“有效的手机号码”，如有任何问题，方便客服人员在第一时间与您联系。</li>
        <li align="left">确认提款银行帐号正确。</li>
        <li align="left">可以选择以下方式取款：<br>
          绑定中国工商银行(优先)、中国农业银行、北京银行、交通银行、中国银行、中国建设银行、中国光大银行、兴业银行、中国民生银行总行、招商银行、中信银行、广东发展银行、中国邮政、深圳发展银行、上海浦东发展银行。<br>
          24小时取款，5分钟内到帐，不限制取款金额，不限制取款次数，如有任何问题，请联系24小时在线客服，
        </li>
      </ol>
      <p align="left">
        ?<strong>【取款注意事项】</strong></p>
      <ol>
        <li align="left">最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。</li>

        <li align="left">500万彩票保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。</li>
      </ol>
      <br/>
      <table border="1" cellpadding="0" cellspacing="0" style="width: 900px;" width="900">
        <tbody>
        <tr>
          <td style="width: 40px;">
            <p align="center">存款</p>
          </td>
          <td style="width: 60px;">
            <p align="center">存款金额</p>
          </td>
          <td>
            <p align="center">存款后余额</p>
          </td>
          <td>
            <p align="center">会员打码</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">第三次</p>
          </td>
          <td>
            <p align="center">7,000</p>
          </td>
          <td style="width: 70px;">
            <p align="center">20,000</p>
          </td>
          <td>
            <p align="left">8,000---存款7000后~下注8000元 ,并且多了1000,有通过常态性稽核</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              第二次</p>
          </td>
          <td>
            <p align="center">
              8,000</p>
          </td>
          <td>
            <p align="center">
              12,000</p>
          </td>
          <td>
            <p align="left">5,500---存款8000后~下注5500+1000元没通过常态性稽核,须扣行政费用2400及手续费50块。</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              第一次</p>
          </td>
          <td>
            <p align="center">
              5,000</p>
          </td>
          <td>
            <p align="center">
              5,000</p>
          </td>
          <td>
            <p align="left">5,500---存款5000后~下注5500+5500+1000元有通过常态性稽核</p>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <p align="left">所以常态性稽核~会扣除第2次的存款金额8000*30%=2400,及50块手续费才可以出款。</p>
          </td>
        </tr>
        </tbody>
      </table>
      <br/>
      <p align="left">**如有任何问题，请洽24小时在线客服！</p>
      <p align="left">**请注意**各游戏和局/未接受/取消注单，不纳入有效投注计算。运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注。</p>
      <p align="left">**大赔率产品包括: 1X2、过关、波胆、总入球、半全场、双胜彩、冠军赛。</p>
      <p align="left">**500万彩票相关优惠，请详见‘优惠活动’</p>
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

      table {
        border: 1px solid #696969;

        tr {
          border-bottom: 1px solid #696969;

          &:last-child {
            border-bottom: none;
          }

          td {
            border-right: 1px solid #696969;

            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }
  }
</style>
