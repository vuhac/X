<template>
  <div class="home-contactUs">
    <div class="container clearfloat">
      <!-- 左边导航 -->
      <div class="helpSlider">
        <h2>About</h2>
        <ul class="helpMenu">
          <li :class="active==key?'curr':''" v-for="(item,key) in aboutData" :key="key" @click="active=key">
            <a>{{item}}</a></li>
        </ul>
      </div>

      <div class="helpContent" v-if="active ==0">
        <h4 class="_title">关于我们</h4>
        <div class="helpArtical">
          <p>体彩天下网成立于2014年，长期秉持＂客户第一、用户至上＂的服务宗旨，为广大用户提供最优质的购彩体验。</p>
          <p>携手中博提供最专业的彩票投注系统，为广大用户提供＂安全、可靠、极致＂的服务体验。</p>
          <p>提供最合理的赔率，多渠道的收付款方式，多元化的投注玩法让广大用户享受高品质的购彩体验。</p>
          <p></p>

          <h3>诚信为本：</h3>
          <p>作为专业的彩票投注平台，我们承诺，为每一位用户提供最安全、最公平的购彩服务。</p>

          <p></p>

          <h3>安全与信誉:</h3>
          <p style="padding-left: 30px;">专业严谨的风险控管，以及第三方资金保险，100％保证玩家资金。</p>
          <p style="padding-left: 30px;">获得国际第三方TST公司的系统认证。</p>
          <p style="padding-left: 30px;">诺顿分级评级为安全网站，绝无任何恶意软件。</p>
          <p style="padding-left: 30px;">获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家隐私。</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==1">
        <h4 class="_title">联系我们</h4>
        <div class="helpArtical">
          <p>体彩天下网暂时仅提供在线咨询服务，点击网站右上角＂在线客服＂即可进行在线咨询；</p>
          <p>我们提供全天24小时在线咨询服务，全年无休；专业的客服团队，24小时为您解答所有疑问；</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==2">
        <h4 class="_title">商务合作</h4>
        <div class="helpArtical">
          <h3>内容合作</h3>
          <p>如果您拥有精彩或原创的与彩票玩法彩票技巧等相关的内容或其他资源,欢迎您与我们取得联系！</p>
          <p></p>

          <h3>广告合作</h3>
          <p>通过对网站广告位的互换及其他自由组合形式的广告资源置换来扩大宣传、增加多样化服务入口，最终以提升网站用户能获取更多附加价值为目的。如果您有相应的资源，非常欢迎您和我们取得联系。</p>

          <p></p>

          <h3>媒体合作</h3>
          <p>如果您拥有互联网、微信、微博等各类传统与新媒体的丰富资源欢迎您与我们取得联系,让我们通过双方的友好合作来共同提高彼此的影响力！</p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==3">
        <h4 class="_title">法律声明</h4>
        <div class="helpArtical">
          <p>
            本网站提供的任何内容（包括但不限于数据、文字、图表、图象、声音或录象等）的版权均属于本网站或相关权利人。未经本网站或相关权利人事先的书面许可，您不得以任何方式擅自复制、再造、传播、出版、转帖、改编或陈列本网站的内容。同时，未经本网站书面许可，对于本网站上的任何内容，任何人不得在非本网站所属的服务器上做镜像。任何未经授权使用本网站的行为都将违反《中华人民共和国著作权法》和其他法律法规以及有关国际公约的规定。
          </p>
        </div>
      </div>

      <div class="helpContent" v-if="active ==4">
        <h4 class="_title">隐私声明</h4>
        <div class="helpArtical">
          <p>
            在登陆时向我们提供您的个人信息是基于对我们的信任，我们会以专业、谨慎和负责的态度对待您的个人信息。我们认为隐私权是您的重要权利，我们尊重您的隐私权，您提供的信息只能用于帮助我们为您提供更好的服务，因此，我们制定了个人信息保密制度以保护您的个人信息。凡以任何方式登陆本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。我们的隐私权保护条款如下：
          </p>
          <h3>个人信息的收集</h3>
          <p>在您注册、使用本网站服务时，经您的同意，我们收集与个人身份有关的信息。如果您无法提供相应信息，可能会不能使用对应服务。我们也会基于优化用户体验的目的，收集其他有关的信息，以便优化我们的网站服务。</p>
          <h3>隐私的保护</h3>
          <p>保护用户隐私是本网站的一项基本政策。本网站不会公布或传播您在本网站注册的任何资料，但下列情况除外：</p>
          <p>1）事先获得用户的明确授权；</p>
          <p>2）用户对自身信息保密不当原因，导致用户非公开信息泄露；</p>
          <p>3）由于网络线路、黑客攻击、计算机病毒、政府管制等原因造成的资料泄露、丢失、被盗用或被篡改等；</p>
          <p>4）根据有关法律法规的要求； </p>
          <p>5）依据法院或仲裁机构的裁判或裁决，以及其他司法程序的要求；</p>
          <p>6）按照相关政府主管部门的要求；</p>
          <h3>自我更新与信息公开</h3>
          <p>
            我们鼓励您自我更新和修改个人信息以使其安全和有效。您能在任何时候非常容易地获取并修改您的个人信息，您可以随时自行决定修改、删除您在网站上的相关资料。您是唯一对您的帐号和密码信息负有保密责任的人，任何情况下，请小心妥善保管。</p>
          <p>
            无论何时您自愿在公开场合披露个人信息， 此种信息可能被他人收集及使用，因此造成您的个人信息泄露，网站不承担责任。
          </p>
          <h3>提示</h3>
          <p>我们可能会不时修改我们的隐私政策，这些修改会反映在本声明中，我们的任何修改都会将您的权益和满意度置於首位，我们希望您在每次访问我们的网页时都查阅我们的隐私声明，用户继续享用服务，则视为接受服务条款的变动。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        aboutData: ['关于我们', '联系我们', '商务合作', '法律声明', '隐私声明'],
        active: 0
      }
    },
    created () {
       this.active=this.$route.params.p_id
    },
    watch: {
      $route (to, from) {
        this.active = to.params.p_id
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-contactUs {
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
