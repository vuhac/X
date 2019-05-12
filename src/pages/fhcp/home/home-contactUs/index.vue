<template>
  <div class="fishing_main">
    <div class="wrapper0">
      <div class="promotions_banner" :class="active">
      </div>
      <div class="live-video-contance">
        <div class="bocai-public-cenernt wrapper">
          <div class="main_weclome">
            <div class="menu">
              <ul>
                <li>
                  <a @click="chenge(1)" :class="[handpages==1 ? 'ab-active':'']" class="about"
                     id="menu-aboutUs">关于我们</a>
                </li>
                <li>
                  <a @click="chenge(2)" :class="[handpages==2 ? 'ab-active':'']" class="lxwm"
                     id="menu-contactUs">联系我们</a>
                </li>
                <li>
                  <a @click="chenge(3)" :class="[handpages==3 ? 'ab-active':'']" class="responsibility" id="liablity">理性博彩</a>
                </li>
                <li>
                  <a @click="chenge(4)" :class="[handpages==4 ? 'ab-active':'']" class="deposit" id="menu-faqDeposit">存款帮助</a>
                </li>
                <li>
                  <a @click="chenge(5)" :class="[handpages==5 ? 'ab-active':'']" class="withdraw" id="menu-faqWithdraw">取款帮助</a>
                </li>
                <li>
                  <a @click="chenge(6)" :class="[handpages==6 ? 'ab-active':'']" class="faq" id="menu-faq">常见问题</a>
                </li>

              </ul>
            </div>


            <div :style="{display:handpages==1 ? 'block':'none'}" class="page">
              <p style="font-size:24px; border-bottom:1px #666 solid; height:50px; line-height:50px; ">关于我们</p>
              <dl>
                <dd>花生娱乐是菲律宾合法注册娱乐营业公司，持有菲律宾政府卡格扬经济特区FCLRC(First Cagayan Leisure and Resort Corporation)颁发的博彩与线上赌场执照。
                </dd>
                <dd>网站所提供的所有产品和服务由菲律宾政府卡格扬经济特区FCLRC(First Cagayan Leisureand Resort Corporation)所授权和监管。</dd>
                <dd>花生娱乐为全球博彩爱好者提供最优惠的赔率和最优质的服务，并正发展成为最受欢迎的网上博彩公司。</dd>
                <dd>花生娱乐的商标在运动博彩界中站在 最前线，持有创新的市场概念和有价值观的理念令花生娱乐在业界享有最佳声誉,至今花生娱乐作为知名的线上博彩公司，为来自亚洲各国的 初级和资深博彩爱好者提供特有的服务。
                </dd>
                <dd>我们的经营理念是通过向我们的顾客提供最佳的博彩娱乐体验来发展我们的业务。</dd>
                <h3>专业运营</h3>
                <dd>汇集了全球的博彩业界精英，花生娱乐致力打造符合博彩市场需求，并值得彩迷信赖的互联网投注平台，由业界精英组成的金牌专业
                  团队，凭借对博彩市场的丰富经验，分别针对博彩信息及博彩市场策略等各方面，不断对有效管理博彩运营进行深入透彻的研究，进
                  一步将研究结果实践在产品完善化上，务求让一直给予支持的彩迷们获得最好的网络在线投注体验。
                </dd>
                <dd>花生娱乐承诺承担客户的博彩责任。经过全世界数以百万用户检验证明远程博彩是一种合法的娱乐方式。对于绝大多数的用户来说远
                  程博彩是一种令人愉快的经历，但是我们必须承认事实上有少部分参与远程博彩的用户可能是未达到法定年龄或者在生活及经济上存 在受到博彩影响困扰的问题。
                </dd>
                <dd>作为一家负责任的公司，我们关心我们的用户，用积极主动的态度去对待处理社会性的问题。为了协助您进行理性博彩，我们确保工作人员接受理性博彩意识的培训。如需更多信息或协助请联系客户服务部</dd>
                <dd>花生娱乐提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</dd>
                <dd>禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。自定博彩预算，并按预算下注。</dd>
                <dd>我们保证我们的广告、赞助商和推广活动没有把未成年人作为目标。 玩家时代是不允许未成年人使用我们的服务。这项条款是 完全符合甚至是超过位于菲律宾卡格扬河特别经济区FCRLC远程博彩监管机构的要求。
                  我们承诺将尽我们最大所能制止，但我们同 时也需要您提供以下帮助：
                </dd>
                <dd>1) 使用保护儿童软件来屏蔽所有未成年人可以进入的远程博彩网站。</dd>
                <dd>2) 当您登入我们网站时，不要让您的计算机处于无人监管的状态。</dd>
                <dd>3) 不要向未成年人透露您信用卡或者银行帐号的信息数据。</dd>
                <dd>4) 当您进入花生娱乐的任何登入接口，不要选择“保存密码”功能。</dd>
                <dd>5) 为未成年人创建独立的登入文档，这样当他们登入的时候不能接触到你的信息。</dd>
                <dd>6) 如果您怀疑某人是小于18岁（或者在他所在的地区是小于合法年龄的）但却已经在我们网站注册成为会员，请立即通知我们。</dd>
              </dl>
            </div>
            <div :style="{display:handpages==2 ? 'block':'none'}" class="page">
              <p style="font-size:24px; border-bottom:1px #666 solid; height:50px; line-height:50px; ">联系我们</p>
              <dl>
                <dd>如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</dd>
                <dd>点击<a style="color:#f00;cursor: pointer;"
                         onclick="onlineService('http://gzz833.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=944333&amp;configID=41469&amp;jid=1980520380');">"在线客服"</a>链接，即可进入在线客服系统与客服人员联系。
                </dd>
                <dd>您亦可点击网站右侧的在线客服QQ与客服人员联系。</dd>
                <dd>QQ:</dd>
                <dd>您亦可使用Email与客服人员取得联系。</dd>
                <dd>Email:fhcp6j5@163.com</dd>
              </dl>
            </div>
            <div :style="{display:handpages==3 ? 'block':'none'}" class="page">
              <p style="font-size:24px; border-bottom:1px #666 solid; height:50px; line-height:50px; ">博彩责任</p>
              <dl>
                <span><b>一. 未满博彩年龄：</b></span>
                <dd>花生娱乐积极推行负责任博彩，并极力拒绝未成年玩家使用我们的软件进行网上娱乐。同时，我们更透过专业人员及各种有效方法，以防止问题博彩的发生。
                  一旦发现使用该本网站的客户未满18岁，我们将会没收所有赢取的彩金并保留立即终止客户的投注户口操作的权利。
                </dd>
                <dd>如您的计算机被未满18岁的人士使用， 我们建议您设定计算机数据保密以防止帐号号码/用户名称被盗用。父母或者监护人可以使用一系列的第三方软件来监控或者限制计算机的互联网使用：</dd>
                <dd>Net Nanny过滤软件防止儿童浏览不适宜的网站内容: www.netnanny.com</dd>
                <dd>CYBERsitter过滤软件允许父母增加自定义过滤网站: www.cybersitter.com</dd>
                <span><b>二. 博彩责任：</b></span>
                <dd>本公司希望客户高兴与满意本公司提供的网上博彩服务。我们会为客户在博彩自律方面提供多方面的帮助。如您担心博彩会严重影响您或他人的生活，我们建议：</dd>
                <dd class="about_right_ejwz">1.在登录我们的系统时，不要让未成年人士在荧光幕显示范围内观看或停留。</dd>
                <dd class="about_right_ejwz">2.如果用户需要离开系统的操作范围，请谨记使用密码锁住计算机。</dd>
                <dd class="about_right_ejwz">3.各用户务必将花生娱乐帐号及密码放置在安全地方。</dd>
                <dd class="about_right_ejwz">4.于计算机使用年龄保护软件，以限制未成年用户到访特定网站及使用相关程序。</dd>
                <dd class="about_right_ejwz">5.切勿与未成年人士分享信用卡或帐号等相关信息 。</dd>
                <dd class="about_right_ejwz">6.当用户从他人计算机登入花生娱乐软件时，或从远程位置(无线网吧、机场、酒店或其他公共场所)进行登录及娱乐活动时，请留意是否已隔离任何未成年人士。
                </dd>
                <span><b>三. 严重博彩引发的问题：</b></span>
                <dd>您会否因为博彩而不上班或不上学？</dd>
                <dd>您博彩是否为了逃避烦闷或不愉快的生活？</dd>
                <dd>当您博彩花光钱时，您是否感到失望甚至绝望，并且希望马上能再进行赌博？</dd>
                <dd>您会否博彩到最后一分钱彩罢休？</dd>
                <dd>您有否曾经用谎言掩饰您花在博彩上的时间和金钱？</dd>
                <dd>您博彩是不是因为争执，沮丧或失望？</dd>
                <dd>您有没有因为博彩而感到失落甚至轻生？</dd>
                <dd>您是否对您的家人，朋友或爱好失去了兴趣？</dd>
                <dd>您输了之后，是否马上想把输的钱赢回来？</dd>
                <dd>在这些问题中您回答的‘是’越多，您就越接近具备严重博彩问题。</dd>
                <span><b>四. 以下提示也许能帮助您控制博彩问题：</b></span>
                <dd>博彩只是一种娱乐，不应被视为赚钱的方法</dd>
                <dd>避免有把输的钱赢回来的想法</dd>
                <dd>只投注您付得起的金额</dd>
                <dd>时刻记着花在博彩上的时间和金钱</dd>
                <span><b>五. 责任感和正直诚信：</b></span>
                <dd>
                  花生娱乐致力提高服务水平，并承诺向客户履行最大程度上的责任，包括诚信、透明度、合法性等各方面。如客户遇上任何有关负责任博彩的问题，可24小时向我们的客户服务部联络。我们承诺会于一年365日，不间断地为用户提供技术支持及相关问题解答服务。
                </dd>
                <span><b>六. 条款与规则：</b></span>
                <dd>
                  1.每个客户只能拥有一个帐号，如发现客户拥有多个帐号，本公司有权冻结客户的帐号以及取消该帐号内所有胜出的投注。本公司有权保留取消任何因素导致帐号结余不正确的金额。此外如发现帐号持有人与亲属共同使用多个不同帐号，本公司有权限制客户每人各保留最多一个帐号。
                </dd>
                <dd>2.用户有义务保障本身的用户名称和密码的隐私安全，并且不应允许任何第三方以任何形式，通过该用户名称和密码使用本网站之所有游戏，否则，一切责任需由该使用者全部承担。</dd>
                <dd>3.用户在进行游戏前应核实其所在地区进行在线游戏是否符合当地法律。</dd>
                <dd>4.花生娱乐站时间均为美东时间。</dd>
                <dd>5.本网站只向符合法定年龄的使用者提供服务，客户在进行投注时必须年满18岁。</dd>
                <dd>6.本网站有权拒绝或不接受任何使用者以任何不正当方式登入或参与本网站所有游戏之权利。</dd>
                <dd>7.因人为或系统发生不能预测因素所导致的失误，本公司管理层保留最终决定权。</dd>
                <dd>8.因发生不可抗拒的灾害或人为入侵破坏行为，所造成的网站故障或数据损坏等情况，以本网站最终数据为最后的处理数据，所以各会员应尽量保留或打印数据，本网站才接受跟进投诉。</dd>
                <dd>
                  9.为避免任何争议，各用户在参与本网站所有游戏过程中或在结束游戏前，务必检查该会员帐号的资料，如发现任何异常情况，应立即与代理商联系查证，否则该用户将被视为同意并且接受。其帐号之一切数据或历史数据，以本公司数据库中的数据为准，用户不得异议。
                </dd>
                <dd>10.并且本公司保留所有规则的修改权，无须事先公布。</dd>
                <dd>11.不论在任何情况下，本公司都有最终决定权。</dd>
              </dl>
            </div>
            <div :style="{display:handpages==4 ? 'block':'none'}" class="page">
              <p style="font-size:24px; border-bottom:1px #666 solid; height:50px; line-height:50px; ">存款帮助</p>
              <dl>
                <dd class="font_size">您现在可以通过以下方式存款到花生娱乐：</dd>
                <dd class="hengx"></dd>
                <dd class="ab-title1">一、 银行卡划款</dd>
                <dd class="font_size">
                  我们有支持银联转帐，请与线上客服联系取得划款资讯。目前提供中国工商银行，同行互转存款到帐时间约为一到五分钟，跨行划款需依据银行划款作业时间为基准，我们将于确认到帐后立刻为您游戏帐号充值。
                </dd>
                <dd class="hengx"></dd>
                <dd class="ab-title1">二、 线上支付</dd>
                <dd class="font_size">会员登入后点存款，选“线上存款”。选择入款额度，并请确实填写“联络电话” ，如有任何问题，方便花生娱乐客服第一时间与您联系。选择“支付银行”。
                  支持借记卡：中国民生银行总行,中国工商银行,中国建设银行,兴业银行,中国光大银行,深圳发展银行,中国邮政,华夏银行,上海浦东发展银行,中国银行,
                  上海银行,交通银行,广东发展银行,北京银行,中信银行,深圳平安银行,中国农业银行,招商银行。
                  确认送出后﹐将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待载入网络银行页面﹐
                  传输中已将您帐号数据加密﹐请耐心等待。
                  进入网络银行页面﹐请确实填写您银行帐号信息﹐支付成功﹐额度将在10分钟内系统处理完成，立即加入您的花生娱乐会员帐号。
                </dd>
                <dd class="hengx"></dd>
                <dd class="ab-title1">注：存款需知:</dd>
                <dd class="font_size">花生娱乐单笔最低存款为￥10人民币，单笔最高存款上限为￥500000人民币。
                  未开通网银的会员，请亲洽您的银行柜台办理。
                  如有任何问题，请您联系24小时线上客服。
                </dd>
                <dd class="hengx"></dd>
                <dd class="font_size">品牌典范-大额无忧《花生娱乐》绝对是您最明智的选择！</dd>
              </dl>
            </div>
            <div :style="{display:handpages==5 ? 'block':'none'}" class="page">
              <p style="font-size:24px; border-bottom:1px #666 solid; height:50px; line-height:50px; ">取款问题</p>
              <dl>
                <dd class="title_font">您可以通过以下方式取款：</dd>
                <dd class="font_size">1、会员登陆后点选”取款”。</dd>
                <dd class="font_size">2、页面会提示可提款金额，点击金额右边的“取款”。</dd>
                <dd class="font_size">3、输入“提款金额”、“取款密码”点击提交即可。</dd>
                <dd class="hengx"></dd>
                <dd class="title_font">取款注意事项：</dd>
                <dd class="font_size">1、最低取款为￥100人民币，取款无上限。</dd>
                <dd class="font_size">2、首次提款需绑定与注册人相符合的银行卡信息。</dd>
                <dd class="hengx"></dd>
                <dd class="font_size"><em style="color: red">**</em>如有任何疑问，欢迎您随时联系在线客服！</dd>
                <dd class="font_size"><em style="color: red">**</em>花生娱乐优惠活动，请详见'优惠活动'</dd>
              </dl>
              <div class="main_about_right"></div>
            </div>
            <div :style="{display:handpages==6 ? 'block':'none'}" class="page">
              <p style="font-size:24px; border-bottom:1px #666 solid; height:50px; line-height:50px; ">常见问题</p>
              <dl>
                <dd>1、花生娱乐支持平台自助开户吗？</dd>
                <dd>答：支持，用户有权限设置自己的会员帐号帐号和相应信息。</dd>
                <dd>2、花生娱乐充值及提款时间？</dd>
                <dd>答：全天候24小时均可充值及提款。</dd>
                <dd>3、提款次数有限制吗？</dd>
                <dd>答：每个帐号每日可以无限提款。</dd>
                <dd>4、下注后,第三方开奖机构未开奖,注单将如何处理呢？</dd>
                <dd>答：当遇到官方没有开奖数据时，我们将统一在次日的零辰2点后注销未开奖期数，您所下注的金额即可返还到您的帐号上。</dd>
                <dd>5、注册后无法得知上级的联系方式如何处理呢？</dd>
                <dd>答：可以通过又上方的在线客服联系我们。</dd>
                <dd>6、如果我的个人资料有所更改, 应当如何？</dd>
                <dd>答：请您尽快与我们的客户服务部门联系, 以确保我们记录您的最新资料, 以备不时之需。</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  // import $ from "jquery";
  export default {
    data () {
      return {

        showData: [],
        active: 'active1',
        // chengepage:-1,
        handpages: this.$route.params.p_id
      }
    },
    beforeRouteUpdate (to, from, next) {
      // console.log(to.params.p_id)
      this.handpages = to.params.p_id
      next()
    },
    methods: {
      setDatas () {
        if (this.$route.query.id == 2) {
          this.showData = this.listData2
          this.active = 'active2'
        } else {
          this.showData = this.listData
          this.active = 'active1'
        }
      },
      chenge: function (n) {
        this.handpages = n
      }
    },
    mounted () {
      this.setDatas()
      // console.log(this.$route.params.p_id)
    },
    filters: {
      capitalize: function (value) {
        try {
          return `/static/huasheng/home/img1-${value}.png`
        } catch (err) {
          return `/static/img/lottery/ico/img1-1.png`
        }

      }
    },
    computed: {
      navActive () {
        return this.$store.state.mainState.navActive
      }
    },
    watch: {
      navActive () {
        this.setDatas()
      },
    }
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    // background: url("../../../assets/images/fhcp/chess_bg.jpg") center top;
    .wrapper0 {
      background: #e6e9f0;
      // width: 1200px;
      height: 100%;
      // margin: auto;
    }

    .promotions_banner {
      height: 360px;

      &.active1 {
        background: url(/static/fhcp/img/home/lottery_banner.jpg) center no-repeat;
      }

      &.active2 {
        background: url(/static/fhcp/img/home/lotto_banner.jpg) center no-repeat;
      }
    }

    .live-video-contance {
      /*background: url(/static/huasheng/home/lottery-bg.jpg) center no-repeat;*/
      background-size: 100% 100%;
      overflow: hidden;
      /*padding: 20px 0px; */

      .wrapper {
        width: 1200px;
        height: 100%;
        margin: auto;

        .lettry-box-list {
          width: 1200px;
          margin: auto;
          overflow: hidden;
          height: auto;

          ul {
            zoom: 1;
            overflow: hidden;

            li {
              width: 340px;
              height: 160px;
              float: left;
              margin: 0 0px 30px 0;
              border: 4px #2abeec solid;
              background-size: 100% 100%;
              transition: .2s all ease-in-out;
              margin-right: 78px;

              &:nth-child(3n) {
                margin-right: 0;
              }

              &:hover, &.active {
                border: 4px #fd8240 solid;
              }

              .letter-header-box {
                width: 100%;
                height: 155px;

                .letty-logo {
                  width: 165px;
                  height: 100%;
                  float: left;
                  text-align: center;
                  margin-top: 5px;
                  margin-left: 20px;

                  img {
                    width: 141px;
                    height: 141px;
                  }

                  transition: transform 0.5s;

                  &:hover {
                    transform: rotate(360deg);
                  }
                }

                .lettery-right-box {
                  width: auto;
                  height: 100%;
                  float: left;
                  margin-left: 20px;

                  h1 {
                    font-size: 20px;
                    color: #e6e6e6;
                    margin-top: 30px;
                    font-weight: 600;
                  }

                  p {
                    font-size: 14px;
                    color: #dadada;
                    margin: 15px 0;
                  }

                  .lettey-game-box {
                    width: 85px;
                    height: 30px;
                    border-radius: 5px;
                    background: #ec8291;
                    text-align: center;
                    line-height: 30px;
                    color: #fff;
                    font-size: 14px;

                    &:hover {
                      background: #fd8240;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  dl {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    margin-left: -200px;
  }

  body {
    font-size: 14px;
    font-family: "PingFang SC", "Heiti SC", "Microsoft YaHei";
  }

  .page dd {
    font-size: 14px;
    padding: 3px;
  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    padding: 0;
    margin: 0;
  }

  dd {
    display: block;
    -webkit-margin-start: 40px;
    line-height: 18px;
  }

  .page dl {
    padding-top: 20px;
  }

  .guide_about {
    background: #e6e9f0;
    padding-bottom: 20px;
  }

  /*.menu{
      display: inline-block;
      width: 150px;
  }
  .page{
      display: inline-block;
      width: 1000px;
  }
  .menu li .ab-active {
      position: relative;
      color: #4d8cfa;
      background: #FFF;
  }
  .menu li {
      display: block;
      color: #3c3c3c;
      height: 64px;
      line-height: 64px;
      font-size: 18px;
  }
  .menu li a {
      position: relative;
      color: #000;
      display: block;
      height: 100%;
      text-align: center;
  }
  .guide_about .main_weclome {
      background: #FFF;
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      background: #f6f6f6;
  }*/
  .guide_about .main_weclome {
    background: #FFF;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: #f6f6f6;
  }

  dd {
    display: block;
    -webkit-margin-start: 40px;
  }

  .page p {
    height: 32px;
    line-height: 50px;
    color: #000000;
    font-size: 15px;
  }

  .page {
    float: right;
    width: 1000px;
    min-height: 900px;
    background: #FFF;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .guide_about .main_weclome {
    background: #FFF;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: #f6f6f6;
  }

  .guide_about .main_weclome {
    background: #FFF;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: #f6f6f6;
  }

  .guide_about .page {
    float: right;
    width: 1000px;
    min-height: 900px;
    background: #FFF;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .menu {
    float: left;
    width: 200px;
    height: 100%;
    min-height: 900px;
    background: #f6f6f6;
  }

  .menu li {
    display: block;
    color: #3c3c3c;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
  }

  .menu li a {
    position: relative;
    color: #000;
    display: block;
    height: 100%;
    text-align: center;
  }

  .menu li .cur {
    position: relative;
    color: #4d8cfa;
    background: #FFF;
  }

  .menu li .ab-active {
    position: relative;
    color: #4d8cfa;
    background: #FFF;
  }

  .menu li .cur:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 3px;
    height: 100%;
    background: #4d8cfa;
  }

  .page .title_line {
    height: 30px;
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebecef;
  }

  .page .title_line .headline {
    position: relative;
    float: left;
    font-size: 18px;
    line-height: 30px;
    padding-left: 10px;
  }

  .page .title_line .headline:before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 2px;
    height: 18px;
    background: #4d8cfa;
  }

  .page .content h2 {
    font-size: 16px;
    color: #4c8ffa;
    padding: 20px 0;
    font-weight: normal;
  }

  .page .content p {
    font-size: 14px;
    line-height: 2;
  }

  .page .content li {
    font-size: 14px;
    line-height: 2;
  }

  .page .content table {
    width: 100%;
  }

  .page .content tr:nth-child(2n+ 1) {
    background: #f9f9f9;
  }

  .page .content th,
  .page .content td {
    padding: 20px;
    white-space: nowrap;
    text-align: center;
  }

  .page .content th {
    color: #FFF;
    background: #4c8ffa;
  }

  .page .responsibility p:first-child {
    margin-top: 20px;
  }

  .page .responsibility ol {
    margin: 30px 0;
  }

  .page .faq li {
    margin: 20px 0;
  }

  .page .faq li .question {
    font-weight: bold;
    color: #000000;
  }

  .page .faq li .answer {
    color: #3c3c3c;
  }

</style>
