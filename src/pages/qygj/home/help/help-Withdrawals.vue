<template>

  <div class="issue">

    <div class="banner"></div>


    <div class="content">
      <h2>取款帮助</h2>

      <h3>您可以通过以下方式取款：</h3>
      <p>会员登入后点选“在线取款”。</p>
      <p>输入选择“取款密码”，并确认提款人姓名与您银行帐号持有人相符。</p>
      <p>输入“取款额度”以及“有效的手机号码”，如有任何问题，方便客服人员在第一时间与您联系。</p>
      <p>确认提款银行帐号正确。</p>
      <p>可以选择以下方式取款：</p>
      <p>绑定中国工商银行(优先)、中国农业银行、北京银行、交通银行、中国银行、中国建设银行、中国光大银行、兴业银行、中国民生银行总行、招商银行、中信银行、广东发展银行、中国邮政、深圳发展银行、上海浦东发展银行。</p>
      <p>24小时取款，5分钟内到帐，不限制取款金额，不限制取款次数，如有任何问题，请联系24小时在线客服，</p>
      <h3>【取款注意事项】</h3>
      <p>最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。

        客拉客保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。</p>
      <table border="1" width="51%">
        <tbody>
        <tr>
          <td align="center"><font face="微软雅黑">存款</font></td>
          <td align="center"><font face="微软雅黑">存款金额</font></td>
          <td align="center"><font face="微软雅黑">存款后余额</font></td>
          <td align="center"><font face="微软雅黑">会员打码</font></td>
        </tr>
        <tr>
          <td align="center"><font face="微软雅黑">第三次</font></td>
          <td align="center"><font face="微软雅黑">7,000</font></td>
          <td align="center"><font face="微软雅黑">20,000</font></td>
          <td align="center">
            <p align="left"><font face="微软雅黑">8,000---存款7000后~下注8000元
              ,并且多了1000,有通过常态性稽核</font></p></td>
        </tr>
        <tr>
          <td align="center"><font face="微软雅黑">第二次</font></td>
          <td align="center"><font face="微软雅黑">8,000</font></td>
          <td align="center"><font face="微软雅黑">12,000</font></td>
          <td align="center">
            <p align="left"><font face="微软雅黑">5,500---存款8000后~下注5500+1000元没通过常态性稽核,须扣费用2400及手续费50</font></p></td>
        </tr>
        <tr>
          <td align="center"><font face="微软雅黑">第一次</font></td>
          <td align="center"><font face="微软雅黑">5,000</font></td>
          <td align="center"><font face="微软雅黑">5,000</font></td>
          <td align="center">
            <p align="left"><font face="微软雅黑">5,500---存款5000后~下注5500+5500+1000元有通过常态性稽核</font></p></td>
        </tr>
        <tr>
          <td colspan="4">
            <p align="left"><font face="微软雅黑">所以常态性稽核~会扣除第2次的存款金额8000*30%=2400,及50块手续费才可以出款</font></p></td>
        </tr>
        </tbody>
      </table>
      <p>**如有任何问题，请联系24小时在线客服！</p>
      <p>**请注意**各游戏和局/未接受/取消注单，不纳入有效投注计算。运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注。</p>
      <p>**大赔率产品包括: 1X2、过关、波胆、总入球、半全场、双胜彩、冠军赛。</p>
      <p>**客拉客相关优惠，请详见‘优惠活动’</p>


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
      background: url("/static/qygj/img/thirdparty/qkbz.jpg") no-repeat center top;
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

      h3 {
        font-size: 16px;
        font-family: 微软雅黑;
        line-height: 20px;
        color: #000;
        font-weight: 600;
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

      table {
        border-spacing: 0;
        border-collapse: collapse;
        border: 1px solid grey;

        tbody {
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;

          td {
            border: 1px solid #000;
            font-size: 14px;
            text-align: center;
            color: #000;
            line-height: 25px;
          }
        }
      }
    }
  }
</style>
