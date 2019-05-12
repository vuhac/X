<template>
  <div class="help">
    <div class="wrapper">
      <div :style="{display:$route.params.p_id==1 ? 'block':'none'}" class="page">
        <div class="title">存款帮助</div>
        <div class="article">
          <p>
            一、公司入款:（赠送存款金额1.0%）强烈推荐使用</p>
          <p>
            <br>
            1. 会员登入后点击 【充值】，选择【网银转帐】<br>
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
            如入款帐号已过期，大佬彩票恕不负责！万请见谅，感谢配合。<br>
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
            1. 会员登入后点击 【充值】，选择【网银转帐】<br>
            2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便大佬彩票客服第一时间与您联系。<br>
            3. 选择”支付银行”。<br>
            支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br>
            4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。<br>
            5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的大佬彩票会员帐号。<br>
            <br>
            存款需知:<br>
            大佬彩票最低存款为$10人民币，最高存款无上限!<br>
            未开通网银的会员，请亲洽您的银行柜台办理。<br>
            如有任何问题，请洽24小时在线客服。</p>
          <br>
        </div>
      </div>
      <div :style="{display:$route.params.p_id==2 ? 'block':'none'}" class="page">
        <div class="title">联系我们</div>
        <div class="article">
          <p align="left">
            大佬彩票的客服中心全年无休，提供1周7天、每天24小时的优质服务。</p>
          <p align="left">
            如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</p>
          <p align="left">
            点击"在线客服"链接，即可进入在线客服系统与客服人员联系。</p>
          <p align="left">
            您亦可使用Email与客服人员取得联系</p>
          <p align="left">
            会员邮箱:dalaocp@163.com</p>
        </div>
      </div>
      <div :style="{display:$route.params.p_id==3 ? 'block':'none'}" class="page">
        <div class="title">取款帮助</div>
        <div class="article">
          <p>
            <strong>您可以通过以下方式取款：</strong></p>
          <ol>
            <li align="left">会员登入后点选“提款”。</li>
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

            <li align="left">大佬彩票保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。</li>
          </ol>
          <table border="1" cellpadding="0" cellspacing="0" style="width: 598px;" width="598">
            <tbody>
            <tr>
              <td style="width: 40px;">
                <p align="center">
                  存款</p>
              </td>
              <td style="width: 60px;">
                <p align="center">
                  存款金额</p>
              </td>
              <td>
                <p align="center">
                  存款后余额</p>
              </td>
              <td>
                <p align="center">
                  会员打码</p>
              </td>
            </tr>
            <tr>
              <td>
                <p align="center">
                  第三次</p>
              </td>
              <td>
                <p align="center">
                  7,000</p>
              </td>
              <td style="width: 70px;">
                <p align="center">
                  20,000</p>
              </td>
              <td>
                <p align="left">
                  8,000---存款7000后~下注8000元 ,并且多了1000,有通过常态性稽核</p>
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
                <p align="left">
                  5,500---存款8000后~下注5500+1000元没通过常态性稽核,须扣行政费用2400及手续费50块。</p>
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
                <p align="left">
                  5,500---存款5000后~下注5500+5500+1000元有通过常态性稽核</p>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <p align="left">
                  所以常态性稽核~会扣除第2次的存款金额8000*30%=2400,及50块手续费才可以出款。</p>
              </td>
            </tr>
            </tbody>
          </table>
          <p align="left">
            **如有任何问题，请洽24小时在线客服！</p>
          <p align="left">
            **请注意**各游戏和局/未接受/取消注单，不纳入有效投注计算。运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注。</p>
          <p align="left">
            **大赔率产品包括: 1X2、过关、波胆、总入球、半全场、双胜彩、冠军赛。</p>
          <p align="left">
            **大佬彩票相关优惠，请详见‘优惠活动’</p><br>
        </div>
      </div>
      <div :style="{display:$route.params.p_id==4 ? 'block':'none'}" class="page">
        <div class="title">常见问题</div>
        <div class="article">
          <div id="Union">
            <ul class="mtab-menual">
              <li @click="tab=1">一般常见问题</li>
              <li @click="tab=2">游戏及投注问题</li>
              <li @click="tab=3">技术常见问题</li>
            </ul>
            <div v-show="tab==1">
              <p>
                Q1: 如何加入大佬彩票？</p>
              <p align="left">
                A1: 您可以直接点选 立即加入，确实填写资料后，可立即登记成为大佬彩票会员。<br>
                <br>
                Q2: 我可以直接在网络上存款吗？<br>
                A2: 可以，大佬彩票提供多种在线存款选择，详情请参照 存款须知。</p>
              <p align="left">
                Q3: 我在那里可以找到游戏的规则？<br>
                A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。<br>
                <br>
                Q4: 你们的游戏会用多少副牌？</p>
              <p align="left">
                A4: 在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</p>
              <p align="left">
                Q5: 您们何时会洗牌?<br>
                A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</p>
              <p align="left">
                Q6: 我的注码的限制是多少？<br>
                A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。</p>
              <p align="left">
                Q7: 如果忘记密码怎么办？<br>
                A7: 你可点击首页忘记密码功能，填写你当初留下的邮箱，即可取回你当初设定的密码。当你无法收取邮件时，你也可以联系24小时在线客服人员咨询协助取回你的帐号密码。</p>
              <p>
                Q8: 当你注册时出现，姓名已注册。<br>
                A8: 你可透过24小时在线客服人员协助处理。</p>
            </div>
            <div v-show="tab==2">
              <p>
                Q1: 请问我在哪边可以找到游戏规则？</p>
              <p align="left">
                A1: 在你为登入之前，你可以在各个游戏项目内，看见游戏规则的选项，清楚告知游的玩法、规则及派彩方式。 在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</p>
              <p align="left">
                Q2: 请问个个游戏的注额为多少？<br>
                A2: 真人游戏-最低下注20RMB最高限额50000RMB<br>
                体育博彩-最低下注10RMB最高限额30000RMB<br>
                彩票游戏-最低下注5RMB最高限额依照游戏及玩法不同，最高可到50000RMB<br>
                电子机率-最低下注0.2RMB最高限额依照游戏及玩法不同</p>
              <p align="left">
                Q3: 你们的游戏会用多少副牌？<br>
                A3:在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</p>
              <p align="left">
                Q4: 您们何时会洗牌?<br>
                A4: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</p>
            </div>
            <div v-show="tab==3">
              <p>
                Q: 最低的硬件系统要求是什么?</p>
              <ol>
                <li align="left">任何可以接上互联网的计算机。</li>
                <li align="left">SVGA显示适配器–最少要1204x768像素256色彩以上。</li>
                <li align="left">区域宽带。</li>
                <li align="left">Windows , Mac OS X , Linux操作系统。</li>
                <li align="left">Internet Explorer浏览器v6.0 或以上 (版本7.0 或以上更好)，Mozilla Firefox (浏览器v3.0
                  或以上)，Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)
                </li>
                <li align="left">要浏览在线娱乐城，你可以在 Macromedia网站下载Macromedia Flash Player浏览器附加程序(8.0或以上版本)。</li>
              </ol>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { _SetGet, _SetPost } from '@/service/public/service.js'

  export default {
    data () {
      return {
        showData: [],
        zeRen: 1,
        QUE: 1,
        lianM: 1,
        tab: 1
      }
    },
    methods: {
      chenge: function (n) {
        this.$router.push({
          path: '/home/contactUs/' + n
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .help {
    background: #000 url(/static/dalao/img/bg_promotions.jpg) center top no-repeat;

    .wrapper {
      width: 1000px;
      height: 100%;
      margin: auto;
      padding: 20px 0;

      .page {
        color: #fff;
        width: 800px;
        margin: auto;
        padding: 10px 50px;
        border: 3px double rgb(162, 47, 40);
        min-height: 700px;

        .title {
          font-size: 20px;
        }

        .article {
          font-size: 13px;
          line-height: 18px;

          ul.mtab-menual {
            border-bottom: 3px solid #aaa;
            margin-top: 10px;

            li {
              color: #d4d4d4;
              background-color: #404040;
              display: inline-block;
              margin-right: 4px;
              padding: 1px 10px;
              cursor: pointer;
              border-radius: 5px 5px 0 0;
              transition: background-color 0.4s;
            }
          }
        }
      }
    }
  }
</style>
