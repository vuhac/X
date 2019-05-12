<template>
  <div class="fishing_main">
    <div class="wrapper0">
      <div class="live-video-contance">
        <div class="bocai-public-cenernt wrapper">
          <div class="main_weclome clearfix">
            <div class="menu">
              <ul class="clearfix">
                <li>
                  <a @click="chenge(1)" :class="[handpages==1 ? 'active':'']" class="about" id="menu-aboutUs">关于我们</a>
                </li>
                <li>
                  <a @click="chenge(2)" :class="[handpages==2 ? 'active':'']" class="lxwm" id="menu-contactUs">联络我们</a>
                </li>
                <li>
                  <a @click="chenge(3)" :class="[handpages==3 ? 'active':'']" class="responsibility"
                     id="liablity">合作伙伴</a>
                </li>
                <li>
                  <a @click="chenge(4)" :class="[handpages==4 ? 'active':'']" class="deposit"
                     id="menu-faqDeposit">存款帮助</a>
                </li>
                <li>
                  <a @click="chenge(5)" :class="[handpages==5 ? 'active':'']" class="withdraw" id="menu-faqWithdraw">取款帮助</a>
                </li>
                <li>
                  <a @click="chenge(6)" :class="[handpages==6 ? 'active':'']" class="faq" id="menu-faq">常见问题</a>
                </li>
                <li>
                  <a @click="chenge(7)" :class="[handpages==7 ? 'active':'']" class="faq" id="menu-faq">责任博彩</a>
                </li>
              </ul>
            </div>

            <div :style="{display:handpages==1 ? 'block':'none'}" class="page">
              <h3>关于我们</h3>
              <p>品牌信誉-首选全民彩票，<strong style="color: #ffff00">最具公信力的博彩公司、更有高质量的游戏平台</strong>，全民彩票为菲律宾马尼拉注册之博彩公司之一。公司不仅拥有市场上最多元化的游戏投注平台，同时为客户提供实时、刺激、高信誉的服务保证、高质量的游戏平台，也是公司的首要宗旨。在日渐热络、成熟的网络博彩市场中，除了多元化的游戏外，网络安全最为客户注重，公司针对现阶段网络安全问题，成立了网络安全维护中心，彻底为客户的网络安全解决了后顾之忧，诺顿分级评级审核"全民彩票"为最安全网站之一，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家所有隐私。
              </p>
              <p><strong>诚信为本：</strong></p>
              <p>全网最高信誉，从全民彩票开始！作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的
                博彩娱乐，以及全方位的服务。我们采用坚实、稳定与安全的博彩系统。所有游戏共同的优点 — 无须耗时下载；界面简单明了；操作功能齐全；画面精致优雅；游戏结果公平、公正、公开
                ！由于您的信息保密度至关重要。我们将坚持实行严格保密和隐私制度。</p>
              <p><strong>多元化游戏：</strong></p>
              <p>除了体育游戏项目多元化外，全方位提供：香港六合彩，时时彩，快乐彩等。精挑细选各种在线游戏，给您提供最好的选择
                。真人荷官及现场娱乐也是无可挑剔的，信誉可靠：设有 7×24小时进行在线监测，确保每一局游戏结果均为现场真实的游戏结果，而不是计算机默认的游戏结果，在我们的真人娱乐城，您
                可饱览整个赌场大厅和靓丽的美女荷官。玩法众多如真人百家乐，真人骰宝，真人龙虎以及真人轮盘。您也可以选择容易上手的KENO快乐彩消遣时光。。</p>
              <p><strong>大赢家</strong></p>
              <p>在全民彩票的用户都是大赢家，我们将不间断的推出更多优惠，以实际、简单的申请方式迎待各来宾！。</p>
              <p><strong>慈善公益</strong></p>
              <p>全民彩票更肩负起对社会、对慈善公益的责任，也将永不磨灭的针对社会的需要作出更多的贡献。</p>
              <p><strong>客户服务：</strong></p>
              <p>在竞争激烈的博彩市场中，全民彩票向来是众多玩家一致的明理选择，除了有多元化的娱乐产品使人流连忘返、更有高质
                量的服务以及全民彩票长久以来的良好信誉在广大玩家群众之间建立了口碑。</p>
              <p><strong>我们为客户提供最专业的娱乐服务：</strong></p>
              <p>1、365天×24小时专业的客户服务，全天候处理会员出入款的相关事宜，严格训练的客服团队，以专业、亲切的态度，让每
                位玩家有宾至如归的感觉!</p>
              <p>2、多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；</p>
              <p>3、举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。</p>
              <p><strong>游戏责任：</strong></p>
              <p>全民彩票提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</p>
              <p>• 禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。</p>
              <p>• 自定博彩预算，幷按预算下注。</p>
              <p><strong>帐号与资金：</strong></p>
              <p>玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进
                行。进入玩家帐号数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提
                供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们绝不会向第三方（包括政府）透露客户数据。</p>
              <p><strong>全民彩票更专注于玩家的利益、最给力的优惠活动时时回馈各新老会员用户。
                品牌信誉，首选全民彩票！</strong></p>
            </div>
            <div :style="{display:handpages==2 ? 'block':'none'}" class="page">
              <h3>联络我们</h3>
              <p>如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</p>
              <p>点击<a style="color:#f00;cursor: pointer;"
                      onclick="onlineService('http://gzz833.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=944333&amp;configID=41469&amp;jid=1980520380');">"在线客服"</a>链接，即可进入在线客服系统与客服人员联系。
              </p>
              <p>您亦可点击网站右侧的在线客服QQ与客服人员联系。</p>
              <p>QQ:</p>
              <p>您亦可使用Email与客服人员取得联系。</p>
              <p>Email:qmcp@tgjt888.com</p>
            </div>
            <div :style="{display:handpages==3 ? 'block':'none'}" class="page">
              <h3>合作伙伴</h3>
              <p id="#Union1" class="mtab">联盟方案</p>
              <p id="#Union2">联盟协议</p>
              <p>
                全民彩票，与AG进行技术合作，拥有菲律宾合法注册之博彩公司。拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们自豪的提供会员最优惠的回
                馈，给予合作伙伴最优势的营利回报! 无论您拥有的是网络资源，或是人脉资源，都欢迎您来加入全民彩票合作伙伴的行列，无须负担任何费用，就可以开始无上限的收入。全民彩票，绝对是您最聪明的选择!</p>
              <p>
                ?注册申请<br>
                请点击[代理注册]在线提出申请，填写正确的各项数据，邮箱，手机，名字必须写真实的，方便以后支付给您佣金，如果以后在支付佣金的时候发现数据错误，一律不给予支付佣金。<br>
                请代理注册成功之后，编辑您以后要领取彩金的银行帐号,银行用户名,代理帐号,发送到邮箱,我们进行绑定,每个月系统就会自动把佣金转到您提供的银行帐号上,请代理要
                更改银行帐号的,必须提前一个星期联系在线客服进行修改，否则本公司一律不负责。全民彩票会评估审核联盟申请讯息，3日内由专员与您联系开通，并提供您的注册帐号、密码及推广链接。</p>
              <table border="1" cellpadding="0" cellspacing="0" width="700">
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
                                    注：全民彩票保留上述条例之最终更改权！<br>
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
                <span
                  style="color: #ff0000;">●相应费用包括：会员各项优惠、存/取款相应手续费(请留意：全民彩票会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。</span><br>
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
                联盟佣金计算，结算区间为本月第一个礼拜一至下月第一个礼拜一前的周日，将会员盈利，以联盟方案分红公式计算，佣金由承办客服于每个月的<span
                style="color: #ff0000;">第一个礼拜三开始</span>与代理确认金额后，在<span style="color: #ff0000;">5个工作天内</span>将佣金直接汇入代理联盟登记之银行帐号。
              </p>
            </div>
            <div :style="{display:handpages==4 ? 'block':'none'}" class="page">
              <h3>存款帮助</h3>
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
                如入款帐号已过期，全民彩票恕不负责！万请见谅，感谢配合。<br>
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
                2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便全民彩票客服第一时间与您联系。<br>
                3. 选择”支付银行”。<br>
                支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br>
                4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。<br>
                5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的全民彩票会员帐号。<br>
                <br>
                存款需知:<br>
                全民彩票最低存款为$100人民币，最高存款无上限!<br>
                未开通网银的会员，请您到银行柜台办理。<br>
                如有任何问题，请联系24小时在线客服。</p>
            </div>
            <div :style="{display:handpages==5 ? 'block':'none'}" class="page">
              <h3>取款帮助</h3>
              <p>
                ? <strong>您可以通过以下方式取款：</strong></p>
              <p>会员登入后点选“在线取款”。</p>
              <p>输入选择“取款密码”，并确认提款人姓名与您银行帐号持有人相符。</p>
              <p>输入“取款额度”以及“有效的手机号码”，如有任何问题，方便客服人员在第一时间与您联系。</p>
              <p>确认提款银行帐号正确。</p>
              <p>可以选择以下方式取款：<br>
                绑定中国工商银行(优先)、中国农业银行、北京银行、交通银行、中国银行、中国建设银行、中国光大银行、兴业银行、中国民生银行总行、招商银行、中信银行、广东发展银行、中国邮政、深圳发展银行、上海浦东发展银行。<br>
                24小时取款，5分钟内到帐，不限制取款金额，不限制取款次数，如有任何问题，请联系24小时在线客服，</p>
              <p align="left">
                ?<strong>【取款注意事项】</strong></p>
              <p>最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。</p>
              <p>全民彩票保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。</p>
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
                **全民彩票相关优惠，请详见‘优惠活动’</p>
            </div>
            <div :style="{display:handpages==6 ? 'block':'none'}" class="page">
              <h3>常见问题</h3>
              <p>一般常见问题</p>
              <p>游戏及投注问题</p>
              <p>技术常见问题</p>
              <p>
                Q1: 如何加入全民彩票？</p>
              <p align="left">
                A1: 您可以直接点选 立即加入，确实填写资料后，可立即登记成为全民彩票会员。<br>
                <br>
                Q2: 我可以直接在网络上存款吗？<br>
                A2: 可以，全民彩票提供多种在线存款选择，详情请参照 存款须知。</p>
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
            <div :style="{display:handpages==7 ? 'block':'none'}" class="page">
              <h3>责任与博彩</h3>
              <p id="#Union2">条款与规则</p>
              <p>
                <strong>一. 未满博彩年龄</strong><br>
                全民彩票积极推行负责任博彩，並极力拒絕未成年玩家使用我们的软体进行网上娱乐。同时，我们更透过专业人员及各种有效方法，以防止问题博彩的发生。如您的电脑被未满18岁的人士使用，
                我们建议您设定电脑资料保密以防止帐号号码/用户名称被盗用。父母或者监护人可以使用一系列的第三方软件来监控或者限制电脑的互联网使用：<br>
                1. Net Nanny过滤软件防止儿童浏览不适宜的网站内容: www.netnanny.com<br>
                2. CYBERsitter过滤软件允许父母增加自定义过滤网站: www.cybersitter.com<br>
              </p>
              <p>
                <strong>二. 博彩责任</strong></p>
              <p>
                本公司希望客户高兴与满意本公司提供的网上博彩服务。我们会为客户在博彩自律方面提供多方面的帮助。如您担心博彩会严重影响您或他人的生活，我们建议：<br>
                a) 在登录我们的系统时，不要让未成人士在萤光幕显示范围內观看或停留。</p>
              <p>
                b) 如果用户需要离开系统的操作范围，请谨记使用密码锁住电脑。</p>
              <p>
                c) 各用户务必将全民彩票帐号及密码放置在安全地方。</p>
              <p>
                d) 请于电脑使用年龄保护软体，以限制未成年用户到访特定网站及使用相关程式。</p>
              <p>
                e) 切勿与未成年人士分享信用卡或帐号等相关资讯 。</p>
              <p>
                f) 当用户从他人电脑登入全民彩票软件时，或从远端位置(无线网吧、机场、酒店或其他公共场所)进行登录及娱乐活动时，请留意是否已隔离任何未成年人士。</p>
              <p>
                <strong>三. 严重博彩引发的问题：</strong></p>
              <p>您会否因为博彩而不上班或不上学？</p>
              <p>您博彩是否为了逃避烦闷或不愉快的生活？</p>
              <p>当您博彩花光钱时，您是否感到失望甚至绝望，并且希望马上能再进行赌博？</p>
              <p>您会否博彩到最后一分钱彩罢休？</p>
              <p>您有否曾经用谎言掩饰您花在博彩上的时间和金钱？</p>
              <p>您博彩是不是因为争执，沮丧或失望？</p>
              <p>您有没有因为博彩而感到失落甚至轻生？</p>
              <p>您是否对您的家人，朋友或爱好失去了兴趣？</p>
              <p>您输了之后，是否马上想把输的钱赢回来？</p>
              <p>在这些问题中您回答的‘是’越多，您就越接近具备严重博彩问题。 </p>
              <p>
                <strong>四. 以下提示也许能帮助您控制博彩问题：</strong></p>
              <p>博彩只是一种娱乐，不应被视为赚钱的方法</p>
              <p>避免有把输的钱赢回来的想法</p>
              <p>只投注您付得起的金额</p>
              <p>时刻记着花在博彩上的时间和金钱</p>
              <p>
                <br>
                <strong>五. 责任感和正直诚信</strong></p>
              <p>
                全面彩票，致力提高服务水准，並承诺向客户履行最大程度上的责任，包括诚信、透明度、合法性等各方面。如客户遇上任何有关负责任博彩的问题，可24小时向我们的客户服务部联络。我们承诺会于一年365日，不间断地为用户提供技术支援及相关问题解答服务。</p>
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    .wrapper0 {
      height: 100%;
    }

    .live-video-contance {
      background-size: 100% 100%;
      overflow: hidden;

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
              transition: 0.2s all ease-in-out;
              margin-right: 78px;

              &:nth-child(3n) {
                margin-right: 0;
              }

              &:hover,
              &.active {
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

  .guide_about {
    background: #e6e9f0;
    padding-bottom: 20px;
  }

  .guide_about .main_weclome {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: #f6f6f6;
  }

  .page {
    float: right;
    width: 1000px;
    min-height: 900px;
    padding: 40px;
    box-sizing: border-box;
    color: #ffcac7;

    p {
      line-height: 25px;
      font-size: 14px;
    }

    h3 {
      width: 100%;
      text-align: center;
      line-height: 25px;
      font-size: 18px;
    }

    table {
      border: 1px solid gray;
      margin: auto 30px;

      td {
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        width: 150px;
      }
    }
  }

  .guide_about .main_weclome {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: #f6f6f6;
  }

  .guide_about .main_weclome {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: #f6f6f6;
  }

  .guide_about .page {
    float: right;
    width: 1000px;
    min-height: 900px;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .menu {
    float: left;
    width: 185px;
    margin: 100px 0 0;
    font-weight: bold;
    border: 1px solid #fff;
    height: 505px;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 6px;

    li {
      a {
        color: #2c2c2c;
        height: 69px;
        line-height: 69px;
        display: block;
        text-align: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: color 0.3s ease;
      }

      a:hover {
        background-image: url(/static/qmcp/img/nav/nav_active.png);
        background-color: #f00;
        color: #fff;
        font-weight: bold;
      }

      a.active {
        color: #fff;
      }
    }
  }

  .page .content h2 {
    font-size: 16px;
    color: #4c8ffa;
    padding: 20px 0;
    font-weight: normal;
  }

  .page .content li {
    font-size: 14px;
    line-height: 2;
  }

  .page .content table {
    width: 100%;
  }

  .page .content tr:nth-child(2n + 1) {
    background: #f9f9f9;
  }

  .page .content th,
  .page .content td {
    padding: 20px;
    white-space: nowrap;
    text-align: center;
  }

  .page .content th {
    color: #fff;
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
