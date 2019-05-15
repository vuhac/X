<template>
  <div class="home-help">
    <div class="container clearfloat">
      <!-- 左边导航 -->
      <div class="helpSlider">
        <h2>Help</h2>
        <ul class="helpMenu">
          <li :class="active==key?'curr':''" v-for="(item,key) in aboutData" :key="key" @click="active=key">
            <a>{{item}}</a></li>
        </ul>
      </div>

      <div class="helpContent" v-if="active ==0">
        <h4 class="_title">如何注册</h4>
        <div class="helpArtical">
          <p>点击网站右上角＂用户注册＂按钮，就可以进入用户注册页面；</p>
          <p>按照提示，填写注册信息，即可完成注册；</p>
          <p>帐号为6-20位字符，支持数字和字母，禁止以0开头；</p>
          <p>密码为6-20位字符，支持数字、字母；</p>
          <!-- <p>资金密码为4-6字符，支持数字；</p>
          <p>注册完成后，系统将随机分配一张头像，进入＂我的帐号＂＂个人信息＂可以修改头像和设置昵称；</p> -->
        </div>
      </div>

      <div class="helpContent" v-if="active ==1">
        <h4 class="_title">如何充值</h4>
        <div class="helpArtical">
          <p>帐号登录后，点击网站右上角＂充值＂按钮，就可以进入充值页面；</p>
          <p>我目前网站提供了＂银行转帐＂＂快捷支付＂＂支付宝＂＂微信支付＂＂QQ＂＂京东＂充值方式；</p>
          <p>如实填写充值信息，并提交充值订单，1-2分钟左右，刷新帐号余额，即可到帐；</p>
          <p>点击＂我的帐号＂＂交易记录＂可查看每日的交易明细；</p>
          <p>大额充值建议使用＂银行转帐＂；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==2">
        <h4 class="_title">如何购彩</h4>
        <div class="helpArtical">
          <p>购彩前需要先进行充值，帐号有余额才可以进行购彩投注；</p>
          <p>充值完成后，可进入＂购彩大厅＂选择您喜欢的彩票进行投注；</p>
          <p>彩票投注页面，提供了＂玩法说明＂＂走势图＂，可以帮您更快了解＂玩法规则＂和＂开奖走势＂</p>
          <p>投注完成后，可以进入＂我的帐号＂＂投注记录＂，查看您的投注明细，查看是否中奖；</p>
          <p>投注完成后，需等开奖后，才能查看是否中奖；</p>
          <p>投注成功后，系统将自动从您的帐号余额扣除对应的投注金额，如果中奖，奖金会自动添加到您的帐号余额；</p>
          <p>可以进入＂我的帐号＂＂交易记录＂，查看您的帐号交易明细；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==3">
        <h4 class="_title">如何提现</h4>
        <div class="helpArtical">
          <p>
            中奖后如何提现？点击网站右上角＂提现＂按钮，就可以进入提现页面；
          </p>
          <p>选择您绑定的银行卡，填写您要提现的金额，并输入＂资金密码＂；</p>
          <p>提现订单提交后，3-5分钟左右即可到帐，可登陆银行查看银行帐号余额；</p>
          <p>点击＂我的帐号＂＂交易记录＂可查看每日的交易明细；</p>
          <p>提现之前需先设置＂资金密码＂和绑定您要用来提现的银行卡；</p>
          <p>提现金额不能大于可提现金额</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==4">
        <h4 class="_title">手机如何购彩</h4>
        <div class="helpArtical">
          <p>直接在手机浏览器输入网址，即可登录手机版，无需下载；</p>
          <p>手机版随时随地可以进行投注，更加便捷，建议广大用户使用手机版进行投注；</p>
          <p>建议使用＂谷歌＂＂苹果＂＂UC＂浏览器，操作体验更佳；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==5">
        <h4 class="_title">在线客服时间</h4>
        <div class="helpArtical">
          <p>在线客服提供全天24小时咨询服务，全年无休；</p>
          <p>在游戏中遇到任何问题，欢迎随时咨询我们的24小时在线客服，我们竭诚为您提供最高品质的咨询服务；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==6">
        <h4 class="_title">什么是资金密码</h4>
        <div class="helpArtical">
          <p>资金密码不同于登陆密码，是另外要设置的一个密码；</p>
          <p>资金密码一般用于提现、绑定银行卡等操作，可以保障帐号资金安全；</p>
          <p>为了帐号安全，设置资金密码时不能跟登陆密码相同；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==7">
        <h4 class="_title">如何绑定银行卡</h4>
        <div class="helpArtical">
          <p>进入＂我的帐号＂＂银行卡管理＂可以绑定您要用来提现的银行卡；</p>
          <p>绑定银行卡前，需先设置资金密码；</p>
          <p>银行卡最多只允许绑定5张；</p>
          <p>银行卡绑定支持所有主流银行；</p>
          <p>为了用户资金安全，已成功提现的银行卡将自动锁定，无法删除和修改；如想弃用银行卡，可联系在线客服禁用该银行卡；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==8">
        <h4 class="_title">帐号安全</h4>
        <div class="helpArtical">
          <p>为了广大用户的帐号安全，网站的＂安全中心＂提供了多项提升帐号安全系数的功能；</p>
          <p>新用户注册完成后，请及时进入＂安全中心＂绑定＂密保手机＂＂密保问题＂＂密保邮箱＂；</p>
          <p>用户忘记密码时，可通过以上功能，找回密码；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==9">
        <h4 class="_title">什么是可提现金额</h4>
        <div class="helpArtical">
          <p>可提现金额，就是帐号可以用来提现的金额，</p>
          <p>为防止洗钱，充值的钱，要进行投注，才可以提现，</p>
          <p></p>

          <h3>可提现金额计算公式如下：</h3>
          <p>可提现金额=投注金额+中奖金额（小于或等于余额）</p>
          <p>*投注金额不含撤单的投注金额</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        aboutData: [
          '如何注册',
          '如何充值',
          '如何购彩',
          '如何提现',
          '手机如何购彩',
          '在线客服时间',
          '什么是资金密码',
          '如何绑定银行卡',
          '帐号安全',
          '什么是可提现金额'
        ],
        active: 0
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-help {
    background: #e6e6e6;
    padding-bottom: 10px;

    .container {
      width: 1000px;
      margin: 0 auto;
      padding-top: 15px;

      .helpSlider {
        background: #fff;
        width: 200px;
        float: left;
        min-height: 500px;

        h2 {
          background-color: #e4393c;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          color: #fff;
          font-weight: 100;
          margin: 0;
        }

        .helpMenu {
          li {
            border-top: 1px solid #eff0f1;
            line-height: 35px;
            font-size: 14px;

            a {
              padding-left: 25px;
              display: block;
              font-size: 14px;
              color: #666;
            }
          }

          .curr {
            a {
              color: #e4393c;
              border-left: 3px solid;
            }
          }
        }
      }

      .helpContent {
        width: 780px;
        float: left;
        background: #fff;
        min-height: 500px;
        margin-left: 20px;
        padding: 30px;
        box-sizing: border-box;

        ._title {
          font-size: 18px;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #fce1e6;
          margin-top: 30px;
          color: #333;
          font-weight: 600;
          margin: 0;
        }

        .helpArtical {
          margin-top: 8px;
          font-family: "Microsoft YaHei" !important;

          p {
            font-size: 14px;
            padding: 6px 0;
            line-height: 24px;
          }

          h3 {
            font-size: 15px;
            font-weight: 600;
            color: #333;
            padding: 4px 0;
          }
        }
      }
    }
  }
</style>
