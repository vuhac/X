<template>
  <div>
    <div id="hdpublic"></div>
    <div id="news" popup-news="" popup-page="register home">
      <div class="wrapper">
       <div class="marquee">
         <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()"
                     style="color: white; font-size: 14px; line-height: 34px;overflow: hidden;height: 34px;"
            >
              <span v-html="lantern"></span>
            </marquee>
      </div>
      </div>
    </div>

    <div class="reginer_box">
      <div class="reginer_cont">
        <div id="left_center">
          <ul id="sidebar">
            <li><a @click="goLink('/home/games?id=10022&name=MG老虎机')">电子游艺</a></li>
            <li><a @click="goLink('/home/games?id=10022&name=MG老虎机')">MG电子</a></li>
            <li><a @click="goLink('/home/buyu')">捕鱼游戏</a></li>
            <li><a @click="goLink('/home/live')">真人视讯</a></li>
            <li><a @click="goLink('/home/tiyu')">体育赛事</a></li>
            <li><a @click="goLink('/home/youhui')">优惠活动</a></li>
            <li><a @click="goLink('/kefu')">在线客服</a></li>
          </ul>
        </div>

        <div id="right_center">

          <!-- 关于我们 -->
          <div class="guanyuwom" v-show="$route.params.id == 'guanyu'">
            <h2>关于我们</h2>

            <p>
              品牌信誉-首选新葡京赌场，最具公信力的博彩公司、更有高质量的游戏平台，新葡京赌场为哥斯达黎加合法注册之博彩公司之一。公司不仅拥有市场上最多元化的游戏投注平台，同时为客户提供实时、刺激、高信誉的服务保证、高质量的游戏平台，也是公司的首要宗旨。在日渐热络、成熟的网络博彩市场中，除了多元化的游戏外，网络安全最为客户注重，公司针对现阶段网络安全问题，成立了网络安全维护中心，彻底为客户的网络安全解决了后顾之忧，诺顿分级评级审核"新葡京赌场"为最安全网站之一，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家所有隐私。
            </p>

            <h3>诚信为本：</h3>

            <p>
              全网最高信誉，从新葡京赌场开始！作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的博彩娱乐，以及全方位的服务。我们采用坚实、稳定与安全的博彩系统。所有游戏共同的优点 — 不须耗时下载；界面简单明了；操作功能齐全；画面精致优雅；游戏结果公平、公正、公开！由于您的信息保密度至关重要。我们将坚持实行严格保密和隐私制度。
            </p>

            <h3>多元化游戏：</h3>

            <p>
              除了体育游戏项目多元化外，全方位提供：香港六合彩，时时彩，快乐彩等。精挑细选各种在线游戏，给您提供最好的选择。真人荷官及现场娱乐也是无可挑剔的，信誉可靠：设有 7×24小时进行在线监测，确保每一局游戏结果均为现场真实的游戏结果，而不是计算机默认的游戏结果，在我们的真人娱乐城，您可饱览整个赌场大厅和靓丽的美女荷官。玩法众多如真人百家乐，真人骰宝，真人龙虎以及真人轮盘。您也可以选择容易上手的KENO快乐彩消遣时光。。
            </p>

            <h3>大赢家</h3>

            <p>
              在新葡京赌场的用户都是大赢家，我们将不间断的推出更多优惠，以实际、简单的申请方式迎待各来宾！。
            </p>

            <h3>慈善公益</h3>

            <p>
              新葡京赌场更肩负起对社会、对慈善公益的责任，也将永不磨灭的针对社会的需要作出更多的贡献。
            </p>

            <h3>客户服务：</h3>

            <p>在竞争激烈的博彩市场中，新葡京赌场向来是众多玩家一致的明理选择，除了有多元化的娱乐产品使人流连忘返、更有高质量的服务以及新葡京赌场长久以来的良好信誉在广大玩家群众之间建立了口碑。</p>

            <h3>我们为客户提供最专业的娱乐服务：</h3>
            <p>
              1、365天×24小时专业的客户服务，全天候处理会员出入款的相关事宜，严格训练的客服团队，以专业、亲切的态度，让每位玩家有宾至如归的感觉!<br/>
              2、多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；<br/>
              3、举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。
            </p>

            <h3>游戏责任：</h3>

            <p>新葡京赌场提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</p>
            <p>
              • 禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。<br/>
              • 自定博彩预算，幷按预算下注。
            </p>

            <h3>帐号与资金：</h3>

            <p>
              玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进行。进入玩家帐号数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们绝不会向第三方（包括政府）透露客户数据。
            </p>

            <p>
              新葡京赌场更专注于玩家的利益、最给力的优惠活动时时回馈各新老会员用户。品牌信誉，首选新葡京赌场！
            </p>

          </div>

          <!-- 代理加盟 -->
          <div class="guanyuwom" v-show="$route.params.id == 'daili'">
            <h2>代理加盟</h2>
             <div id="articles">
               <div id="Union">
                  <ul class="mtab-menual" style>
                    <li :class="daili =='fanan'?'mtab':''"  @click="daili='fanan'">联盟方案</li>
                    <li :class="daili =='xieyi'?'mtab':''"  @click="daili='xieyi'">联盟协议</li>
                    <li :class="daili =='denglu'?'mtab':''"  @click="daili='denglu'">代理登录</li>
                    <li :class="daili =='zhuce'?'mtab':''"  @click="daili='zhuce'">代理注册</li>
                  </ul>
                  <div  v-show="daili=='fanan'">
                    <p>Q1: 如何加入新葡京赌场？</p>
                    <p align="left">A1: 您可以点击主页面右上角的“免费开户”，确实填写资料后，可立即登记成为新葡京赌场会员。
                      <br>
                      <br>Q2: 我可以直接在网络上存款吗？
                      <br>A2: 可以，新葡京赌场提供多种在线存款选择，详情请参照 存款须知。
                    </p>
                    <p align="left">Q3: 我在那里可以找到游戏的规则？
                      <br>A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。
                      <br>
                      <br>Q4: 你们的游戏会用多少副牌？
                    </p>
                    <p align="left">A4: 在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</p>
                    <p align="left">Q5: 您们何时会洗牌?
                      <br>A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。
                    </p>
                    <p align="left">Q6: 我的注码的限制是多少？
                      <br>A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。
                    </p>
                    <p align="left">Q7: 如果忘记密码怎么办？
                      <br>A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回你的帐号密码。
                    </p>
                    <p>Q8: 当你注册时出现，姓名已注册。
                      <br>A8: 您可通过24小时在线客服人员协助处理。
                    </p>
                  </div>
                  <div  v-show="daili=='xieyi'">
                    <p>Q1: 请问我在哪边可以找到游戏规则？</p>
                    <p
                      align="left"
                    >A1: 您未登入之前，您可以在各个游戏项目内，看见游戏规则的选项，清楚告知游的玩法、规则及派彩方式。 在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</p>
                    <p align="left">Q2: 请问每个游戏的注额为多少？
                      <br>A2: 真人游戏-最低下注20RMB最高限额50000RMB
                      <br>体育博彩-最低下注10RMB最高限额30000RMB
                      <br>彩票游戏-最低下注5RMB最高限额依照游戏及玩法不同，最高可到50000RMB
                      <br>电子游艺-最低下注0.2RMB最高限额依照游戏及玩法不同
                    </p>
                    <p align="left">Q3: 你们的游戏会用多少副牌？
                      <br>A3:在百家乐我们会用8副牌，其它游戏则会根据其性质有所调整。
                    </p>
                    <p align="left">Q4: 您们何时会洗牌?
                      <br>A4: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。
                    </p>
                  </div>
                  <div v-show="daili=='denglu'">
                    <p>Q: 最低的硬件系统要求是什么?</p>
                    <p style="margin-left:30px;">
                      1、任何可以接上互联网的计算机。
                      2、SVGA显示适配器–最少要1204x768像素256色彩以上。
                      3、区域宽带。
                      4、Windows , Mac OS X , Linux操作系统。
                      5、Internet Explorer浏览器v6.0 或以上 (版本7.0 或以上更好)，Mozilla Firefox (浏览器v3.0 或以上)，Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)
                      6、要浏览在线娱乐城，你可以在 Macromedia网站下载Macromedia Flash Player浏览器附加程序(8.0或以上版本)。
                    </p>
                  </div>
                  <div v-show="daili=='zhuce'">
                    <p>Q: 最低的硬件系统要求是什么?</p>
                    <p style="margin-left:30px;">
                      1、任何可以接上互联网的计算机。
                      2、SVGA显示适配器–最少要1204x768像素256色彩以上。
                      3、区域宽带。
                      4、Windows , Mac OS X , Linux操作系统。
                      5、Internet Explorer浏览器v6.0 或以上 (版本7.0 或以上更好)，Mozilla Firefox (浏览器v3.0 或以上)，Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)
                      6、要浏览在线娱乐城，你可以在 Macromedia网站下载Macromedia Flash Player浏览器附加程序(8.0或以上版本)。
                    </p>
                  </div>
                </div>
              </div>
          </div>

          <!-- 联系我们 -->
          <div class="guanyuwom" v-show="$route.params.id == 'lianxi'">
            <h2>联系我们</h2>
            <p>新葡京赌场的客服中心全年无休，提供1周7天、每天24小时的优质服务。
              <br>如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务
              <br>点击"在线客服"链接，即可进入在线客服系统与客服人员联系。
              <!-- <br>您亦可使用Email与客服人员取得联系
              <br>会员邮箱：pj9800com@gmail.com
              <br>代理邮箱：pj9800com@gmail.com
              <br>投诉地址：xpj720@gmail.com
              <br>我司为保证服务态度与质量，现已开通投诉平台，若您对客服的服务态度不满或有答询方式有任何异议，可截图记录并发送到此投诉邮箱，我们将在6小时之内核查并回馈。 -->
            </p>
          </div>

          <!-- 存款帮助 -->
          <div class="guanyuwom" v-show="$route.params.id == 'cunkuan'">
            <h2>存款帮助</h2>
            <p>一、公司入款:（赠送存款金额1.2%手续费）强烈推荐使用</p>
            <p>1. 会员登入后点击 [在线存款]，选择 [公司入款]
              <br>2. 请选择欲使用的银行卡。
              <br>3. 选择银行后，网页会显示可存入的银行帐号。可直接点击网页上银行标志，自动为您带到银行首页，
              <br>登入您个入网银后，请将款项转入公司提供的入款帐号。
              <br>※如您使用农业银行/工商银行， 请将公司入款订单号贴入您网银 [备注/附言] 字段
              <br>※建议选择与您转帐的银行同一家，同银行间转帐可以立即到帐，若跨行转帐有可能较晚到帐。※
            </p>
            <p>可以自由选择:
              <br>(1).网络银行: 登入自己的网络银行页面，从银行网页上转帐到指定银行帐号 中。
              <br>(2).ATM自动柜员机 : 到实体自动柜员机以银行卡或是现金方式存入，没有开启网银功能与存现金的会员可用
              <br>(3).银行柜台转帐 : 到银行柜台完成转帐手续
            </p>
            <p>※公司入款注意事项※
              <br>亲切提醒您，公司入款银行随时更变，请于每次入款前，确认您可以使用的入款帐号。
              <br>如入款帐号已过期，新葡京赌场恕不负责！万请见谅，感谢配合。
            </p>
            <p>
              4. 核对提交数据/提交申请
              <br>汇款完成请填写并提交相关数据，并备份您的公司入款订单号。 系统在收到款项后会进行比对，如果存款金
              额、时间相符合，则会将款项加入您的游戏帐号中。处理时间通常为5-30分钟。(跨行转帐时间可能会超过30分)
            </p>
            <p>5. 若5钟内未到帐，请联系在线客服人员。
              <br>客服人员会与您核对存款数据，必要时需要您提供截图、转帐数据等相关证明。
            </p>
            <p>二、在线存款 :</p>
            <p>1. 会员登入后点击 [在线存款]，选择 [在线付款]
              <br>2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便新葡京赌场客服第一时间与您联系。
              <br>3. 选择”支付银行”。
              <br>支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。
              <br>4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。
              <br>5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的新葡京赌场会员帐号。
            </p>
            <p>存款需知:
              <br>新葡京赌场最低存款为$100人民币，最高存款无上限!
              <br>未开通网银的会员，请亲洽您的银行柜台办理。
              <br>如有任何问题，请洽24小时在线客服。
            </p>
          </div>

          <!-- 取款帮助 -->
          <div class="guanyuwom" v-show="$route.params.id == 'qukuan'">
            <h2>取款帮助</h2>
            <p>? 您可以通过以下方式取款：</p>
            <p style="margin-left:30px;">
              1.会员登入后点选“在线取款”。
              <br>2.输入选择“取款密码”，并确认提款人姓名与您银行帐号持有人相符。
              <br>3. 输入“取款额度”以及“有效的手机号码”，如有任何问题，方便客服人员在第一时间与您联系。
              <br>4.确认提款银行帐号正确。
              <br>5.可以选择以下方式取款：
              <br>绑定中国工商银行(优先)、中国农业银行、北京银行、交通银行、中国银行、中国建设银行、中国光大银行、兴业银行、中国民生银行总行、招商银行、中信银行、广东发展银行、中国邮政、深圳发展银行、上海浦东发展银行。
              24小时取款，5分钟内到帐，不限制取款金额，不限制取款次数（24小时内出款三次以上，每次出款须承担50元手续费用），如有任何问题，请联系24小时在线客服，
            </p>
            <p>?【取款注意事项】</p>
            <p
              style="margin-left:30px;"
            >1.最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。
              <br>2.24小时内若出款三次以上，除需审核外，每次出款须承担50元手续费用。
              <br>3.新葡京赌场保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。
            </p>
            <table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
              <tbody>
                <tr>
                  <td style="width: 50px;">
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
                    <p align="center">第二次</p>
                  </td>
                  <td>
                    <p align="center">8,000</p>
                  </td>
                  <td>
                    <p align="center">12,000</p>
                  </td>
                  <td>
                    <p align="left">5,500---存款8000后~下注5500+1000元没通过常态性稽核,须扣行政费用2400及手续费50块。</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p align="center">第一次</p>
                  </td>
                  <td>
                    <p align="center">5,000</p>
                  </td>
                  <td>
                    <p align="center">5,000</p>
                  </td>
                  <td>
                    <p align="left">5,500---存款5000后~下注5500+5500+1000元有通过常态性稽核</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <p align="center">所以常态性稽核~会扣除第2次的存款金额8000*30%=2400,及50块手续费才可以出款。</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>**如有任何问题，请洽24小时在线客服！</p>
            <p>**请注意**各游戏和局/未接受/取消注单，不纳入有效投注计算。运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注。</p>
            <p>**大赔率产品包括: 1X2、过关、波胆、总入球、半全场、双胜彩、冠军赛。</p>
            <p>**新葡京赌场相关优惠，请详见‘优惠活动’</p>
          </div>

          <!-- 常见问题 -->
          <div class="guanyuwom" v-show="$route.params.id == 'question'">
            <h2>常见问题</h2>
             <div id="articles">
              <div id="Union">
                <ul class="mtab-menual" style>
                  <li id="#Union1" :class="question =='common'?'mtab':''"  @click="question='common'">一般常见问题</li>
                  <li id="#Union2" :class="question =='game'?'mtab':''"  @click="question='game'">游戏及投注问题</li>
                  <li id="#Union3" :class="question =='technology'?'mtab':''"  @click="question='technology'">技术常见问题</li>
                </ul>
                <div id="Union1" v-show="question=='common'">
                  <p>Q1: 如何加入新葡京赌场？</p>
                  <p align="left">A1: 您可以点击主页面右上角的“免费开户”，确实填写资料后，可立即登记成为新葡京赌场会员。
                    <br>
                    <br>Q2: 我可以直接在网络上存款吗？
                    <br>A2: 可以，新葡京赌场提供多种在线存款选择，详情请参照 存款须知。
                  </p>
                  <p align="left">Q3: 我在那里可以找到游戏的规则？
                    <br>A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。
                    <br>
                    <br>Q4: 你们的游戏会用多少副牌？
                  </p>
                  <p align="left">A4: 在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</p>
                  <p align="left">Q5: 您们何时会洗牌?
                    <br>A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。
                  </p>
                  <p align="left">Q6: 我的注码的限制是多少？
                    <br>A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。
                  </p>
                  <p align="left">Q7: 如果忘记密码怎么办？
                    <br>A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回你的帐号密码。
                  </p>
                  <p>Q8: 当你注册时出现，姓名已注册。
                    <br>A8: 您可通过24小时在线客服人员协助处理。
                  </p>
                </div>
                <div id="Union2" v-show="question=='game'">
                  <p>Q1: 请问我在哪边可以找到游戏规则？</p>
                  <p
                    align="left"
                  >A1: 您未登入之前，您可以在各个游戏项目内，看见游戏规则的选项，清楚告知游的玩法、规则及派彩方式。 在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</p>
                  <p align="left">Q2: 请问每个游戏的注额为多少？
                    <br>A2: 真人游戏-最低下注20RMB最高限额50000RMB
                    <br>体育博彩-最低下注10RMB最高限额30000RMB
                    <br>彩票游戏-最低下注5RMB最高限额依照游戏及玩法不同，最高可到50000RMB
                    <br>电子游艺-最低下注0.2RMB最高限额依照游戏及玩法不同
                  </p>
                  <p align="left">Q3: 你们的游戏会用多少副牌？
                    <br>A3:在百家乐我们会用8副牌，其它游戏则会根据其性质有所调整。
                  </p>
                  <p align="left">Q4: 您们何时会洗牌?
                    <br>A4: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。
                  </p>
                </div>
                <div id="Union3" v-show="question=='technology'">
                  <p>Q: 最低的硬件系统要求是什么?</p>
                  <p style="margin-left:30px;">
                    1、任何可以接上互联网的计算机。
                    2、SVGA显示适配器–最少要1204x768像素256色彩以上。
                    3、区域宽带。
                    4、Windows , Mac OS X , Linux操作系统。
                    5、Internet Explorer浏览器v6.0 或以上 (版本7.0 或以上更好)，Mozilla Firefox (浏览器v3.0 或以上)，Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)
                    6、要浏览在线娱乐城，你可以在 Macromedia网站下载Macromedia Flash Player浏览器附加程序(8.0或以上版本)。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 负责任博彩 -->
          <div class="guanyuwom" v-show="$route.params.id == 'bocai'">
              <h2>负责任博彩</h2>
          </div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quCont: "plan",
      question:'common',
      daili:'fanan',
      lantern: ''
    };
  },
  mounted() {

  },
  methods: {
    goLink(link) {
      if (link === '/kefu') {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      } else if(link==='/home/tiyu'){
        if (!localStorage.token || !localStorage.userinfo){
          alert('未登录');
          return false;
        }else{
         window.open("#/loading?name=皇冠体育&classId=21")
        }

      }else{
        this.$router.push({
          path: link
        });
      }

    },
    async getLantern () {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
        type: 'lantern',
        desc_client_type: 'html'
      })
      if (res && res.code == 200) {
        if (!res.data.data.length) return false
        this.lantern = res.data.data[0] && res.data.data[0].description
      }
      // 参数： type: lantern 走马灯
      // 参数： type: popups 弹窗
      // 参数： type: notice 提示
    },
  },

  created() {

  }
};
</script>

<style lang="less" scoped>
#hdpublic{
  margin-top: -148px;
  height: 431px;
  background: #1a2a56 url(/static/xpj/img/banner_about.jpg) no-repeat center top;
}
#news {
  position: relative;
  z-index: 1;
  margin-top: -35px;
  height: 34px;
  border-bottom: 1px solid #263c78;
  background: url(/static/xpj/img/newbg.png);
  .wrapper {
    position: relative;
    width: 1040px;
    margin: 0 auto;
    padding: 0 0 0 95px;
    height: 34px;
    line-height: 34px;
    background: url(/static/xpj/img/news.png) no-repeat left center;

    .marquee {
      float: left;
      width: 945px;
      color: #FFFFFF;
      font-size: 10px;
      height: 34px;
    }
  }
}

.reginer_box{
  width: 100%;
  overflow: hidden;
  // position: relative;
  background: #142044  url('/static/xpj/img/reginer_bg.jpg') center top  no-repeat;

  .reginer_cont {
    width: 1040px;
    height: auto;
    margin:20px auto;
    padding: 33px 33px 22px;
    border: 1px solid #1e3064;
    background: url(/static/xpj/img/unlobbybg.png);
    overflow: hidden;

     #left_center {
      float: left;
      width: 235px;
      height: 683px;
      padding: 86px 0 0;
      background: url(/static/xpj/img/aside.png) no-repeat left top;
      overflow: hidden;

      #sidebar li {
        width: 232px;
        height: 48px;

        a {
          display: block;
          height: 100%;
          padding-left: 68px;
          color: #fff;
          font-size: 16px;
          text-align: left;
          text-decoration: none;
          line-height: 45px;
          background: url(/static/xpj/img/aside_btn.png) no-repeat;
        }

        &:hover a{
          color: #f4f183;
          background: url(/static/xpj/img/aside_btnh.png) no-repeat;
        }

      }
    }
    #right_center {
      float: right;
      float: right;
      width: 707px;
      min-height: 683px;
      padding: 0 4px 0 10px;
      color: #5c89e5;
      text-align: left;

    }
  }

  .guanyuwom {
    color: #5c89e5;
    line-height: 1.428571429;
    font-family: 'Microsoft YaHei',"Helvetica Neue",Helvetica,Arial,sans-serif;

    h2 {
      height: 73px;
      color: #fff;
      margin: -33px 0 0 0;
      line-height: 73px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      background: url(/static/xpj/img/h2.png) no-repeat center center;
      font-family: 'Microsoft YaHei',"Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    h3{
      font-size: 12px;
      text-align: left;
    }

    p{
      margin: 1em 0;
      font-size: 12px;
      line-height: 2em;
    }
    td{
      text-align: center;
      background: #131e3f;
      border: 1px solid #5c89e5;
    }
  }

  #articles ul.mtab-menual {
    display: block;
    padding-left: 0;
    text-align: left;
    border-bottom: 1px solid #d2d2d3;
  }
  #articles ul.mtab-menual li {
    display: inline-block;
    width: 110px;
    height: 42px;
    color: #fff;
    font-size: 14px;
    line-height: 43px;
    text-align: center;
    background: #1b2d63;
    cursor: pointer;
    -moz-border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
  }
  #articles ul.mtab-menual li.mtab {
    color: #1b2d63;
    background: #d2d2d3;
  }

}


</style>
