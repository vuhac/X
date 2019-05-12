<template>
  <div class="body">
    <h2>合作伙伴</h2>
    <ul class="tab clear-fix">
      <li :class="{active: index === 0}" @click="index = 0">联盟方案</li>
      <li :class="{active: index === 1}" @click="index = 1">联盟协议</li>
    </ul>
    <div class="content" v-show="index === 0">
      <p>
        彩票之家，与AG进行技术合作，拥有菲律宾合法注册之博彩公司。拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们自豪的提供会员最优惠的回
        馈，给予合作伙伴最优势的营利回报! 无论您拥有的是网络资源，或是人脉资源，都欢迎您来加入彩票之家合作伙伴的行列，无须负担任何费用，就可以开始无上限的收入。彩票之家，绝对是您最聪明的选择!</p>
      <p>
        ?注册申请<br>
        请点击[代理注册]在线提出申请，填写正确的各项数据，邮箱，手机，名字必须写真实的，方便以后支付给您佣金，如果以后在支付佣金的时候发现数据错误，一律不给予支付佣金。<br>
        请代理注册成功之后，编辑您以后要领取彩金的银行帐号,银行用户名,代理帐号,发送到邮箱,我们进行绑定,每个月系统就会自动把佣金转到您提供的银行帐号上,请代理要
        更改银行帐号的,必须提前一个星期联系在线客服进行修改，否则本公司一律不负责。彩票之家会评估审核联盟申请讯息，3日内由专员与您联系开通，并提供您的注册帐号、密码及推广链接。</p>
      <table border="1" cellpadding="0" cellspacing="0" style="width: 800px;" width="800">
        <tbody>
        <tr>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">当月营利</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">当月最低有效会员</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">真人、运动、电子</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">彩票（有效投注）</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">体育投注</span></p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              1--50000</p>
          </td>
          <td>
            <p align="center">
              5或以上</p>
          </td>
          <td>
            <p align="center">
              20%</p>
          </td>
          <td>
            <p align="center">
              0.5%</p>
          </td>
          <td>
            <p align="center">
              10%</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              50001~500000</p>
          </td>
          <td>
            <p align="center">
              10或以上</p>
          </td>
          <td>
            <p align="center">
              25%</p>
          </td>
          <td>
            <p align="center">
              0.6%</p>
          </td>
          <td>
            <p align="center">
              10%</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              500001~800000</p>
          </td>
          <td>
            <p align="center">
              30或以上</p>
          </td>
          <td>
            <p align="center">
              30%</p>
          </td>
          <td>
            <p align="center">
              0.8%</p>
          </td>
          <td>
            <p align="center">
              10%</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              800001~1000000</p>
          </td>
          <td>
            <p align="center">
              50或以上</p>
          </td>
          <td>
            <p align="center">
              35%</p>
          </td>
          <td>
            <p align="center">
              0.9%</p>
          </td>
          <td>
            <p align="center">
              10%</p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              1000001以上</p>
          </td>
          <td>
            <p align="center">
              100或以上</p>
          </td>
          <td>
            <p align="center">
              40%</p>
          </td>
          <td>
            <p align="center">
              1%</p>
          </td>
          <td>
            <p align="center">
              10%</p>
          </td>
        </tr>
        </tbody>
      </table>
      <p>
            <span style="color: #ff0000;">投注额达到（1000元）视为有效会员！（每月10号为退佣到帐处理时间）<br>
                注：彩票之家保留上述条例之最终更改权！<br>
                请谨记任何使用不诚实方法以骗取佣金将会永久冻结帐号，佣金一律不予发还！</span></p>
      <p>
        ? 回馈/佣金计算<br>
        ●退水(前期累积+当期总退水) - 费用(前期累积+当期总费用),当相减下来有两个结果：<br>
        正数 跟 负数<br>
        ●正数时：相减下来的金额+派彩(前期累积+当期总派彩)*退佣比例= 可获得佣金<br>
        【举例：A代理 退水金额1万?费用5000?有效派彩5万元?退佣比例25%】<br>
        退水1万元 – 费用5000=尚有5000<br>
        可获佣金= 5000+( 派彩金额 5万* 25% )=17,500<br>
        ●负数时：(相减下来的金额+派彩(前期累积+当期总派彩))*退佣比例= 可获得佣金<br>
        【举例：A代理 退水金额5000?费用1万?有效派彩5万元?退佣比例25%】<br>
        退水5000元 – 费用1万=尚有-5000<br>
        可获佣金= (-5000+ 派彩金额 5万)* 25% =11,250<br>
        ●请注意：视讯、球类、机率等项目，以报表中【派彩】字段，扣除相应费用后，依照上表门坎 X 佣金百分比。<br>
        ●彩票项目以报表中【实际投注】字段X 0.1% 佣金百分比后，扣除相应费用</p>
      <p>
        ●月联盟体系以：视讯、球类、机率、彩票等项目的【派彩/投注量】扣除相应费用后产生退佣总计，成以相应退佣百分比后。<br>
        <span style="color: #ff0000;">●相应费用包括：会员各项优惠、存/取款相应手续费(请留意：彩票之家会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。</span><br>
        ●【当月最低有效会员】定义为，在月结区间内进行过最少一次有效下注的会员，如联盟体系当月未达【当月最低有效会员】最低门坎5人，则该月无法领取佣金回馈。联盟体系当月营利达到标准，而【当月最低有效会员】人数未达相应最低门坎，则该月佣金比例依照【当月最低有效会员】人数所达门坎相应的百分比进行退佣。<br>
        例：体系当月营利为￥200001，而当月有效会员人数为5人，联盟虽达到营利为￥200001，却未达到有效会员10人以上，故依照联盟有效会员人数5人的门坎的退佣比例核算。</p>
      <table border="1" cellpadding="0" cellspacing="0" style="width: 500px;" width="500">
        <tbody>
        <tr>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">视讯</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">球类</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">机率</span></p>
          </td>
          <td style="background-color: rgb(102, 51, 102);">
            <p align="center">
              <span style="color: #ffffff;">彩票</span></p>
          </td>
        </tr>
        <tr>
          <td>
            <p align="center">
              30%</p>
          </td>
          <td>
            <p align="center">
              30%</p>
          </td>
          <td>
            <p align="center">
              30%</p>
          </td>
          <td>
            <p align="center">
              0.1%</p>
          </td>
        </tr>
        </tbody>
      </table>
      <p>
        例：联盟体系当月最低有效会员达12人，当月派彩：视讯￥300000，球类￥-120000，机率￥20000，彩票有效投注￥800000。如联盟体系当月相应费用统计为￥14000，则佣金计算方式为：</p>
      <p>
        当月佣金计算：<br>
        (总派彩金额￥200000，退佣百分比为30%)<br>
        (￥800000 彩票投注 x 0.1% 返点百分比) - ￥14000 相应费用= -13200<br>
        (-13200+￥200000派彩)*30%=￥56040佣金</p>
      <p>
        *佣金百分比，依未扣除相应费用前之"各项派彩"金额为准。<br>
        <span style="color: #ff0000;">*假若本月可获得佣金为负数，派彩及费用将会带到下个月继续累计至可获得佣金为正数并高于￥500即可领取。</span></p>
      <p>
        ? 回馈/佣金支付<br>
        联盟佣金计算，结算区间为本月第一个礼拜一至下月第一个礼拜一前的周日，将会员盈利，以联盟方案分红公式计算，佣金由承办客服于每个月的<span style="color: #ff0000;">第一个礼拜三开始</span>与代理确认金额后，在<span
        style="color: #ff0000;">5个工作天内</span>将佣金直接汇入代理联盟登记之银行帐号。</p>
    </div>
    <div class="content" v-show="index === 1">
      <p>
      </p>
      <p>
        <strong>一、彩票之家对代理联盟的权利与义务</strong></p>
      <ol>
        <li align="left">彩票之家的客服部会登记联盟的会员并会观察他们的投注状况。联盟及会员必须同意并遵守彩票之家的会员条例，政策及操作程序。彩票之家保留拒绝或冻结联盟/会员帐号权利</li>
        <li align="left">代理联盟可随时登入接口观察旗下会员的下注状况及会员在网站的活动概况。 彩票之家的客服部会根据代理联盟旗下的会员计算所得的佣金。</li>
        <li align="left">彩票之家保留可以修改合约书上的任何条例，包括: 现有的佣金范围、佣金计划、付款程序、及参考计划条例的权力，彩票之家会以电邮、网站公告等方法通知代理联盟。
          代理联盟对于所做的修改有异议，代理联盟可选择终止合约，或洽客服人员反映意见。 如修改后代理联盟无任何异议，便视作默认合约修改，代理联盟必须遵守更改后的相关规定。
        </li>
      </ol>
      <p align="left">
        <strong>二、代理联盟对彩票之家的权力及义务</strong></p>
      <ol>
        <li align="left">
          代理联盟应尽其所能，广泛地宣传、销售及推广彩票之家，使代理本身及彩票之家的利润最大化。代理联盟可在不违反法律下，以正面形象宣传、销售及推广彩票之家，并有责任义务告知旗下会员所有彩票之家的相关优惠条件及产品。
        </li>
        <li align="left">代理联盟选择的彩票之家推广手法若需付费，则代理应承担该费用。</li>
        <li align="left">任何彩票之家相关信息包括: 标志、报表、游戏画面、图样、文案等，代理联盟不得私自复制、公开、分发有关材料，彩票之家保留法律追诉权。
          如代理在做业务推广有相关需要，请随时洽彩票之家。
        </li>
      </ol>
      <p align="left">
        <strong>三、规则条款</strong></p>
      <ol>
        <li align="left">
          各阶层代理联盟不可在未经彩票之家许可情况下开设双/多个的代理帐号，也不可从彩票之家人帐号或相关人士赚取佣金。请谨记任何阶层代理不能用代理帐号下注，彩票之家有权终止并封存帐号及所有在游戏中赚取的佣金。
        </li>
        <li align="left">
          为确保所有彩票之家会员帐号隐私与权益，彩票之家不会提供任何会员密码，或会员个人资料。各阶层代理联盟亦不得以任何方式取得会员数据，或任意登入下层会员帐号，如发现代理联盟有侵害彩票之家会员隐私行为，彩票之家有权取消代理联盟红利，并取消代理联盟帐号。
        </li>
        <li align="left">
          代理联盟旗下的会员不得开设多于一个的帐号。彩票之家有权要求会员提供有效的身份证明以验证会员的身份，并保留以IP判定是否重复会员的权利。如违反上述事项，彩票之家有权终止玩家进行游戏并封存帐号及所有于游戏中赚取的佣金
        </li>
        <li align="left">代理联盟不可为自己或其他联盟下的有效投注会员,只能是公司直属下的有效投注会员,
          代理每月需有5个下线有效投注（有效投注为每周至少上线3次进行正常投注），如有违反联盟协议彩票之家有权终止并封存帐号及所有在游戏中赚取的佣金。
        </li>
        <li align="left">
          如代理联盟旗下的会员因为违反条例而被禁止享用彩票之家的游戏，或彩票之家退回存款给会员，彩票之家人将不会分配相应的佣金给代理联盟。如代理联盟旗下会员存款用的信用卡、银行资料须经审核，彩票之家保留相关佣金直至审核完成。
        </li>
        <li align="left">合约内的条件会以彩票之家通知接受代理联盟加入后开始执行。彩票之家及代理联盟可随时终止此合约，在任何情况下，代理联盟如果想终止合约，都必须以书面/电邮方式提早于七日内通知彩票之家。
          代理联盟的表现会3个月审核一次，如代理联盟已不是现有的合作成员则本合约书可以在任何时间终止。如合作伙伴违反合约条例，彩票之家有权立即终止合约。
        </li>
        <li align="left">在没有彩票之家许可下，代理联盟不能透露及授权彩票之家相关密数据，包括代理联盟所获得的回馈、佣金报表、计算等;代理联盟有义务在合约终止后仍执行机密文件及数据的保密。</li>
        <li align="left">在合约终止后，代理联盟及彩票之家将不须要履行双方的权利及义务。终止合约并不会解除代理联盟于终止合约前应履行的义务。</li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
