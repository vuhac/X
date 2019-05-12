<template>
  <div class="body">
    <h2>责任博彩</h2>
    <ul class="tab clear-fix">
      <li :class="{active: index === 0}" @click="index = 0">责任与博彩</li>
      <li :class="{active: index === 1}" @click="index = 1">条款与规则条款与规则</li>
    </ul>
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
            <strong style=" color: #000;font-weight: 700;font-size: 1.1rem;">一. 未满博彩年龄</strong><br>
            彩票之家积极推行责任博彩，並极力拒絕未成年玩家使用我们的软体进行网上娱乐。同时，我们更透过专业人员及各种有效方法，以防止问题博彩的发生。如您的电脑被未满18岁的人士使用，
            我们建议您设定电脑资料保密以防止帐号号码/用户名称被盗用。父母或者监护人可以使用一系列的第三方软件来监控或者限制电脑的互联网使用：<br>
            1. Net Nanny过滤软件防止儿童浏览不适宜的网站内容: www.netnanny.com<br>
            2. CYBERsitter过滤软件允许父母增加自定义过滤网站: www.cybersitter.com<br>
        </p>
        <p>
            <strong style=" color: #000;font-weight: 700;font-size: 1.1rem;">二. 博彩责任</strong></p>
        <p>
            本公司希望客户高兴与满意本公司提供的网上博彩服务。我们会为客户在博彩自律方面提供多方面的帮助。如您担心博彩会严重影响您或他人的生活，我们建议：<br>
            a) 在登录我们的系统时，不要让未成人士在萤光幕显示范围內观看或停留。</p>
        <p>
            b) 如果用户需要离开系统的操作范围，请谨记使用密码锁住电脑。</p>
        <p>
            c) 各用户务必将彩票之家帐号及密码放置在安全地方。</p>
        <p>
            d) 请于电脑使用年龄保护软体，以限制未成年用户到访特定网站及使用相关程式。</p>
        <p>
            e) 切勿与未成年人士分享信用卡或帐号等相关资讯 。</p>
        <p>
            f) 当用户从他人电脑登入彩票之家软件时，或从远端位置(无线网吧、机场、酒店或其他公共场所)进行登录及娱乐活动时，请留意是否已隔离任何未成年人士。</p>
        <p>
            <strong style=" color: #000;font-weight: 700;font-size: 1.1rem;">三. 严重博彩引发的问题：</strong></p>
        <ol>
            <li>您会否因为博彩而不上班或不上学？</li>
            <li>您博彩是否为了逃避烦闷或不愉快的生活？</li>
            <li>当您博彩花光钱时，您是否感到失望甚至绝望，并且希望马上能再进行赌博？</li>
            <li>您会否博彩到最后一分钱彩罢休？</li>
            <li>您有否曾经用谎言掩饰您花在博彩上的时间和金钱？</li>
            <li>您博彩是不是因为争执，沮丧或失望？</li>
            <li>您有没有因为博彩而感到失落甚至轻生？</li>
            <li>您是否对您的家人，朋友或爱好失去了兴趣？</li>
            <li>您输了之后，是否马上想把输的钱赢回来？</li>
        </ol>
        <ul>
            <li>在这些问题中您回答的‘是’越多，您就越接近具备严重博彩问题。 </li>
        </ul>
        <p>
            <strong style=" color: #000;font-weight: 700;font-size: 1.1rem;">四. 以下提示也许能帮助您控制博彩问题：</strong></p>
        <ol>
            <li>博彩只是一种娱乐，不应被视为赚钱的方法</li>
            <li>避免有把输的钱赢回来的想法</li>
            <li>只投注您付得起的金额</li>
            <li>时刻记着花在博彩上的时间和金钱</li>
        </ol>
        <p>
            <br>
            <strong style=" color: #000;font-weight: 700;font-size: 1.1rem;">五. 责任感和正直诚信</strong></p>
        <p>
            全面彩票，致力提高服务水准，並承诺向客户履行最大程度上的责任，包括诚信、透明度、合法性等各方面。如客户遇上任何有关责任博彩的问题，可24小时向我们的客户服务部联络。我们承诺会于一年365日，不间断地为用户提供技术支援及相关问题解答服务。</p>
`, `
        <ol>
            <li>每个客户只能拥有一个帐号，如发现客户拥有多个帐号，本公司有权冻结客户的帐号以及取消该帐号内所有胜出的投注。本公司有权保留取消任何因素导致帐号结余不正确的金额。此外如发现帐号持有人与亲属共同使用多个不同帐号，本公司有权限制客户每人各保留最多一个帐号。</li>
            <li>用户有义务保障本身的用户名称和密码的隐私安全，并且不应允许任何第三方以任何形式，通过该用户名称和密码使用本网站之所有游戏，否则，一切责任需由该用户全部承担。</li>
            <li>用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。</li>
            <li>彩票之家站时间均为美东时间。</li>
            <li>本网站只向符合法定年龄的用户提供服务，客户在进行投注时必须年满18岁。</li>
            <li>本网站有权拒绝或不接受任何用户以任何不正当方式登入或参与本网站所有游戏之权利。</li>
            <li>因人为或系统发生不能预测因素所导致的失误，本公司管理层保留最终决定权。</li>
            <li>因发生不可抗拒的灾害或人为入侵破坏行为，所造成的网站故障或资料损坏等情况，以本网站最终数据为最后的处理数据，所以各会员应尽量保留或列印资料，本网站才接受跟进投诉。</li>
            <li>为避免任何争议，各用户在参与本网站所有游戏过程中或在结束游戏前，务必检查该会员帐号的资料，如发现任何异常情况，应立即与代理商联系查证，否则该用户将被视为同意并且接受。其帐号之一切数据或历史数据，以本公司资料库中的资料为准，用户不得异议。</li>
            <li>并且无须事本公司保留所有规则的修改权，先公布。</li>
            <li>不论在任何情况下，本公司都有最终决定权。</li>
        </ol>
`
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
