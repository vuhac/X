<template>
  <div class="home-contactUs">
    <div class="wrapper0">
      <div class="live-video-contance">
        <div class="bocai-public-cenernt wrapper">
          <div class="main_weclome">
            <div class="menu">
              <div class="hesder">
                <div>快捷导航</div>
                <div>FAST NAVIGATION</div>
              </div>
              <ul>
                <li :class="[$route.params.p_id==1 ? 'ab-active':'']">
                  <a @click="chenge(1)" class="about" id="menu-aboutUs">关于我们</a>
                </li>
                <li :class="[$route.params.p_id==2 ? 'ab-active':'']">
                  <a @click="chenge(2)" class="lxwm" id="menu-contactUs">取款帮助</a>
                </li>
                <li :class="[$route.params.p_id==3 ? 'ab-active':'']">
                  <a @click="chenge(3)" class="responsibility" id="liablity">存款帮助</a>
                </li>
                <li :class="[$route.params.p_id==4 ? 'ab-active':'']">
                  <a @click="chenge(4)" class="deposit" id="menu-faqDeposit">合作伙伴</a>
                </li>
                <li :class="[$route.params.p_id==5 ? 'ab-active':'']">
                  <a @click="chenge(5)" class="withdraw" id="menu-faqWithdraw">联系我们</a>
                </li>
                <li :class="[$route.params.p_idndpages==6 ? 'ab-active':'']">
                  <a @click="chenge(6)" class="faq" id="menu-faq">常见问题</a>
                </li>
                <li :class="[$route.params.p_id==7 ? 'ab-active':'']">
                  <a @click="chenge(7)" class="faq" id="menu-faq">责任博彩</a>
                </li>
              </ul>
            </div>


            <div :style="{display:$route.params.p_id==1 ? 'block':'none'}" class="page">
              <div class="headTitle">关于我们</div>
              <div class="gys">
                <p><span style="font-family: 微软雅黑">品牌信誉-首选地球人，<strong><span style="color: #ffff00">最具公信力的博彩公司、更有高质量的游戏平台

                              </span></strong>，地球人为菲律宾合法注册之博彩公司之一。公司不仅拥有市场上最多元化的游戏投注平台，同时为客户提供实时、刺激、高信誉的服务保证、高质量的游戏平台

                              ，也是公司的首要宗旨。在日渐热络、成熟的网络博彩市场中，除了多元化的游戏外，网络安全最为客户注重，公司针对现阶段网络安全问题，成立了网络安全维护中心，彻底为客户的网络

                              安全解决了后顾之忧，诺顿分级评级审核"地球人"为最安全网站之一，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家所有隐私。</span>
                </p>
                <p><strong><span style="font-family: 微软雅黑">诚信为本：</span></strong></p>
                <p><span style="font-family: 微软雅黑">全网最高信誉，从地球人开始！作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的

                              博彩娱乐，以及全方位的服务。我们采用坚实、稳定与安全的博彩系统。所有游戏共同的优点 — 不须耗时下载；界面简单明了；操作功能齐全；画面精致优雅；游戏结果公平、公正、公开

                              ！由于您的信息保密度至关重要。我们将坚持实行严格保密和隐私制度。</span></p>
                <p><strong><span style="font-family: 微软雅黑">多元化游戏：</span></strong></p>
                <p><span style="font-family: 微软雅黑">除了体育游戏项目多元化外，全方位提供：香港六合彩，时时彩，快乐彩等。精挑细选各种在线游戏，给您提供最好的选择

                              。真人荷官及现场娱乐也是无可挑剔的，信誉可靠：设有 7×24小时进行在线监测，确保每一局游戏结果均为现场真实的游戏结果，而不是计算机默认的游戏结果，在我们的真人娱乐城，您

                              可饱览整个赌场大厅和靓丽的美女荷官。玩法众多如真人百家乐，真人骰宝，真人龙虎以及真人轮盘。您也可以选择容易上手的KENO快乐彩消遣时光。</span></p>
                <p><strong><span style="font-family: 微软雅黑">大赢家</span></strong></p>
                <p><span style="font-family: 微软雅黑">在地球人的用户都是大赢家，我们将不间断的推出更多优惠，以实际、简单的申请方式迎待各来宾！。</span></p>
                <p><strong><span style="font-family: 微软雅黑">慈善公益</span></strong></p>
                <p><span style="font-family: 微软雅黑">地球人更肩负起对社会、对慈善公益的责任，也将永不磨灭的针对社会的需要作出更多的贡献。</span></p>
                <p><strong><span style="font-family: 微软雅黑">客户服务：</span></strong></p>
                <p><span style="font-family: 微软雅黑">在竞争激烈的博彩市场中，地球人向来是众多玩家一致的明理选择，除了有多元化的娱乐产品使人流连忘返、更有高质

                              量的服务以及地球人长久以来的良好信誉在广大玩家群众之间建立了口碑。</span></p>
                <p><strong><span style="font-family: 微软雅黑">我们为客户提供最专业的娱乐服务：</span></strong></p>
                <p><span style="font-family: 微软雅黑">1、365天×24小时专业的客户服务，全天候处理会员出入款的相关事宜，严格训练的客服团队，以专业、亲切的态度，让每

                              位玩家有宾至如归的感觉!</span></p>
                <p><span style="font-family: 微软雅黑">2、多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；</span></p>
                <p><span style="font-family: 微软雅黑">3、举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。</span></p>
                <p><strong><span style="font-family: 微软雅黑">游戏责任：</span></strong></p>
                <p><span style="font-family: 微软雅黑">地球人提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</span></p>
                <p><span style="font-family: 微软雅黑">• 禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。</span></p>
                <p><span style="font-family: 微软雅黑">• 自定博彩预算，幷按预算下注。</span></p>
                <p><strong><span style="font-family: 微软雅黑">帐号与资金：</span></strong></p>
                <p><span style="font-family: 微软雅黑">玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进

                              行。进入玩家帐号数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提

                              供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们绝不会向第三方（包括政府）透露客户数据。</span></p>
                <p><span style="font-size: 14px"><strong><span style="font-family: 微软雅黑">地球人更专注于玩家的利益、最给力的优惠活动时时回馈各新老会员用户。

                              品牌信誉，首选地球人！</span></strong></span></p>
              </div>
            </div>
            <div :style="{display:$route.params.p_id==2 ? 'block':'none'}" class="page">
              <div class="headTitle">取款帮助</div>
              <div class="gys">
                <div>
                  <p>
                  </p>
                  <p style="font-weight: 700;">
                    <font face="微软雅黑">? 您可以通过以下方式取款：</font></p>
                  <p>
                    <font face="微软雅黑">
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
                      如入款帐号已过期，地球人恕不负责！万请见谅，感谢配合。<br>
                      <br>
                      4. 核对提交数据/提交申请<br>
                      汇款完成请填写并提交相关数据，并备份您的公司入款订单号。 系统在收到款项后会进行比对，如果存款金<br>
                      额、时间相符合，则会将款项加入您的游戏帐号中。处理时间通常为5-30分钟。(跨行转帐时间可能会超过30分)<br>
                      <br>
                      5. 若5钟内未到帐，请联系在线客服人员。<br>
                      客服人员会与您核对存款数据，必要时需要您提供截图、转帐数据等相关证明。<br>
                      <br>
                      二、在线存款 :</font></p>
                  <p>
                    <font face="微软雅黑">1. 会员登入后点击 [在线存款]，选择 [在线付款]<br>
                      2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便地球人客服第一时间与您联系。<br>
                      3. 选择”支付银行”。<br>
                      支援借记卡：中国农业银行,中国</font></p>
                  <p>
                  </p>
                  <p>
                    <font face="微软雅黑">? <strong>您可以通过以下方式取款：</strong></font></p>
                  <ol>
                    <li align="left"><font face="微软雅黑">会员登入后点选“在线取款”。</font></li>
                    <li align="left"><font face="微软雅黑">输入选择“取款密码”，并确认提款人姓名与您银行帐号持有人相符。</font></li>
                    <li align="left"><font face="微软雅黑">输入“取款额度”以及“有效的手机号码”，如有任何问题，方便客服人员在第一时间与您联系。</font></li>
                    <li align="left"><font face="微软雅黑">确认提款银行帐号正确。</font></li>
                    <li align="left"><font face="微软雅黑">可以选择以下方式取款：<br>
                      绑定中国工商银行(优先)、中国农业银行、北京银行、交通银行、中国银行、中国建设银行、中国光大银行、兴业银行、中国民生银行总行、招商银行、中信银行、广东发展银行、中国邮政、深圳发展银行、上海浦东发展银行。<br>
                      24小时取款，5分钟内到帐，不限制取款金额，不限制取款次数，如有任何问题，请联系24小时在线客服，</font></li>
                  </ol>
                  <p align="left">
                    <font face="微软雅黑">?<strong>【取款注意事项】</strong></font></p>
                  <ol>
                    <li align="left"><font face="微软雅黑">最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。</font>
                    </li>

                    <li align="left"><font face="微软雅黑">地球人保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。</font>
                    </li>
                  </ol>
                  <table border="1" cellpadding="0" cellspacing="0" style="width: 598px;" width="598">
                    <tbody>
                    <tr>
                      <td style="width: 40px;">
                        <p align="center">
                          <font face="微软雅黑">存款</font></p>
                      </td>
                      <td style="width: 60px;">
                        <p align="center">
                          <font face="微软雅黑">存款金额</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">存款后余额</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">会员打码</font></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">第三次</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">7,000</font></p>
                      </td>
                      <td style="width: 70px;">
                        <p align="center">
                          <font face="微软雅黑">20,000</font></p>
                      </td>
                      <td>
                        <p align="left">
                          <font face="微软雅黑">8,000---存款7000后~下注8000元 ,并且多了1000,有通过常态性稽核</font></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">第二次</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">8,000</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">12,000</font></p>
                      </td>
                      <td>
                        <p align="left">
                          <font face="微软雅黑">5,500---存款8000后~下注5500+1000元没通过常态性稽核,须扣行政费用2400及手续费50块。</font></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">第一次</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">5,000</font></p>
                      </td>
                      <td>
                        <p align="center">
                          <font face="微软雅黑">5,000</font></p>
                      </td>
                      <td>
                        <p align="left">
                          <font face="微软雅黑">5,500---存款5000后~下注5500+5500+1000元有通过常态性稽核</font></p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <p align="left">
                          <font face="微软雅黑">所以常态性稽核~会扣除第2次的存款金额8000*30%=2400,及50块手续费才可以出款。</font></p>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <p align="left">
                    <font face="微软雅黑">**如有任何问题，请洽24小时在线客服！</font></p>
                  <p align="left">
                    <font face="微软雅黑">**请注意**各游戏和局/未接受/取消注单，不纳入有效投注计算。运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注。</font>
                  </p>
                  <p align="left">
                    <font face="微软雅黑">**大赔率产品包括: 1X2、过关、波胆、总入球、半全场、双胜彩、冠军赛。</font></p>
                  <p align="left">
                    <font face="微软雅黑">**地球人相关优惠，请详见‘优惠活动’</font></p><font face="微软雅黑">工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br>
                  4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。<br>
                  5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的地球人会员帐号。<br>
                  <br>
                  存款需知:<br>
                  地球人最低存款为100人民币，最高存款无上限!<br>
                  未开通网银的会员，请亲洽您的银行柜台办理。<br>
                  如有任何问题，请洽24小时在线客服。</font>
                  <p></p>
                </div>
              </div>
            </div>
            <div :style="{display:$route.params.p_id==3 ? 'block':'none'}" class="page">
              <div class="headTitle">存款帮助</div>
              <div class="gys">
                <div>
                  <p>
                  </p>
                  <p>
                    <font face="微软雅黑">一、公司入款:强烈推荐使用</font></p>
                  <p>
                    <font face="微软雅黑">
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
                      如入款帐号已过期，地球人恕不负责！万请见谅，感谢配合。<br>
                      <br>
                      4. 核对提交数据/提交申请<br>
                      汇款完成请填写并提交相关数据，并备份您的公司入款订单号。 系统在收到款项后会进行比对，如果存款金<br>
                      额、时间相符合，则会将款项加入您的游戏帐号中。处理时间通常为5-30分钟。(跨行转帐时间可能会超过30分)<br>
                      <br>
                      5. 若5钟内未到帐，请联系在线客服人员。<br>
                      客服人员会与您核对存款数据，必要时需要您提供截图、转帐数据等相关证明。<br>
                      <br>
                      二、在线存款 :</font></p>
                  <p>
                    <font face="微软雅黑">1. 会员登入后点击 [在线存款]，选择 [在线付款]<br>
                      2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便地球人客服第一时间与您联系。<br>
                      3. 选择”支付银行”。<br>
                      支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br>
                      4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。<br>
                      5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的地球人会员帐号。<br>
                      <br>
                      存款需知:<br>
                      地球人最低存款为100人民币，最高存款无上限!<br>
                      未开通网银的会员，请亲洽您的银行柜台办理。<br>
                      如有任何问题，请洽24小时在线客服。</font></p>
                </div>
              </div>
            </div>
            <div :style="{display:$route.params.p_id==4 ? 'block':'none'}" class="page">
              <div class="headTitle">合作伙伴</div>
              <div class="gys">
                <div id="Union">
                  <ul class="mtab-menual" style="">
                    <li @click="lianM=1" id="#Union1" class="mtab"><font face="微软雅黑">联盟方案</font></li>
                    <li @click="lianM=2" id="#Union2"><font face="微软雅黑">联盟协议</font></li>
                  </ul>
                  <div id="Union1" :style="{display:lianM==1 ? 'block':'none'}">
                    <p>
                      <font face="微软雅黑">地球人，与AG进行技术合作，拥有菲律宾合法注册之博彩公司。拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们自豪的提供会员最优惠的回
                        馈，给予合作伙伴最优势的营利回报! 无论您拥有的是网络资源，或是人脉资源，都欢迎您来加入地球人合作伙伴的行列，无须负担任何费用，就可以开始无上限的收入。
                        地球人，绝对是您最聪明的选择!</font></p>
                    <p>
                      <font face="微软雅黑">?注册申请<br>
                        请点击[代理注册]在线提出申请，填写正确的各项数据，邮箱，手机，名字必须写真实的，方便以后支付给您佣金，如果以后在支付佣金的时候发现数据错误，一律不给予支付佣金。<br>
                        请代理注册成功之后，编辑您以后要领取彩金的银行帐号,银行用户名,代理帐号,发送到邮箱,我们进行绑定,每个月系统就会自动把佣金转到您提供的银行帐号上,请代理要
                        更改银行帐号的,必须提前一个星期联系在线客服进行修改，否则本公司一律不负责。
                        地球人城会评估审核联盟申请讯息，3日内由专员与您联系开通，并提供您的注册帐号、密码及推广链接。</font></p>
                    <table border="1" cellpadding="0" cellspacing="0" style="width: 593px;" width="593">
                      <tbody>
                      <tr>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">当月营利</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">当月最低有效会员</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">真人、运动、电子</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">彩票（有效投注）</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">体育投注</span></font></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">1--50000</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">5或以上</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">30%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">0.1%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">10%</font></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">50001~500000</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">10或以上</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">35%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">0.1%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">10%</font></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">500001~800000</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">30或以上</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">40%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">0.1%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">10%</font></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">800001~1000000</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">50或以上</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">45%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">0.1%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">10%</font></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">1000001以上</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">100或以上</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">50%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">0.1%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">10%</font></p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                      <font face="微软雅黑">
                                        <span style="color: #ff0000;">投注额达到（1000元）视为有效会员！（每月10号为退佣到帐处理时间）<br>
                                            注：地球人保留上述条例之最终更改权！<br>
                                            请谨记任何使用不诚实方法以骗取佣金将会永久冻结帐号，佣金一律不予发还！</span></font></p>
                    <p>
                      <font face="微软雅黑">? 回馈/佣金计算<br>
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
                        ●彩票项目以报表中【实际投注】字段X 0.1% 佣金百分比后，扣除相应费用</font></p>
                    <p>
                      <font face="微软雅黑">●月联盟体系以：视讯、球类、机率、彩票等项目的【派彩/投注量】扣除相应费用后产生退佣总计，成以相应退佣百分比后。<br>
                        <span style="color: #ff0000;">●相应费用包括：会员各项优惠、存/取款相应手续费(请留意：地球人会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。</span><br>
                        ●【当月最低有效会员】定义为，在月结区间内进行过最少一次有效下注的会员，如联盟体系当月未达【当月最低有效会员】最低门坎5人，则该月无法领取佣金回馈。联盟体系当月营利达到标准，而【当月最低有效会员】人数未达相应最低门坎，则该月佣金比例依照【当月最低有效会员】人数所达门坎相应的百分比进行退佣。<br>
                        例：体系当月营利为￥200001，而当月有效会员人数为5人，联盟虽达到营利为￥200001，却未达到有效会员10人以上，故依照联盟有效会员人数5人的门坎的退佣比例核算。</font></p>
                    <table border="1" cellpadding="0" cellspacing="0" style="width: 500px;" width="500">
                      <tbody>
                      <tr>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">视讯</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">球类</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">机率</span></font></p>
                        </td>
                        <td style="background-color: rgb(102, 51, 102);">
                          <p align="center">
                            <font face="微软雅黑">
                              <span style="color: #ffffff;">彩票</span></font></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">30%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">30%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">30%</font></p>
                        </td>
                        <td>
                          <p align="center">
                            <font face="微软雅黑">0.1%</font></p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                      <font face="微软雅黑">例：联盟体系当月最低有效会员达12人，当月派彩：视讯￥300000，球类￥-120000，机率￥20000，彩票有效投注￥800000。如联盟体系当月相应费用统计为￥14000，则佣金计算方式为：</font>
                    </p>
                    <p>
                      <font face="微软雅黑">当月佣金计算：<br>
                        (总派彩金额￥200000，退佣百分比为30%)<br>
                        (￥800000 彩票投注 x 0.1% 返点百分比) - ￥14000 相应费用= -13200<br>
                        (-13200+￥200000派彩)*30%=￥56040佣金</font></p>
                    <p>
                      <font face="微软雅黑">*佣金百分比，依未扣除相应费用前之"各项派彩"金额为准。<br>
                        <span style="color: #ff0000;">*假若本月可获得佣金为负数，派彩及费用将会带到下个月继续累计至可获得佣金为正数并高于￥500即可领取。</span></font>
                    </p>
                    <p>
                      <font face="微软雅黑">? 回馈/佣金支付<br>
                        联盟佣金计算，结算区间为本月第一个礼拜一至下月第一个礼拜一前的周日，将会员盈利，以联盟方案分红公式计算，佣金由承办客服于每个月的<span style="color: #ff0000;">第一个礼拜三开始</span>与代理确认金额后，在<span
                          style="color: #ff0000;">5个工作天内</span>将佣金直接汇入代理联盟登记之银行帐号。</font></p>
                  </div>
                  <div id="Union2" :style="{display:lianM==2 ? 'block':'none'}">
                    <p>
                    </p>
                    <p>
                      <font face="微软雅黑">
                        <strong>一、地球人对代理联盟的权利与义务</strong></font></p>
                    <ol>
                      <li align="left"><font face="微软雅黑">地球人的客服部会登记联盟的会员并会观察他们的投注状况。联盟及会员必须同意并遵守
                        地球人的会员条例，政策及操作程序。地球人保留拒绝或冻结联盟/会员帐号权利</font></li>
                      <li align="left"><font face="微软雅黑">代理联盟可随时登入接口观察旗下会员的下注状况及会员在网站的活动概况。
                        地球人的客服部会根据代理联盟旗下的会员计算所得的佣金。</font></li>
                      <li align="left"><font face="微软雅黑">地球人保留可以修改合约书上的任何条例，包括: 现有的佣金范围、佣金计划、付款程序、及参考计划条例的权力，
                        地球人会以电邮、网站公告等方法通知代理联盟。
                        代理联盟对于所做的修改有异议，代理联盟可选择终止合约，或洽客服人员反映意见。 如修改后代理联盟无任何异议，便视作默认合约修改，代理联盟必须遵守更改后的相关规定。</font></li>
                    </ol>
                    <p align="left">
                      <font face="微软雅黑">
                        <strong>二、代理联盟对地球人的权力及义务</strong></font></p>
                    <ol>
                      <li align="left"><font face="微软雅黑">代理联盟应尽其所能，广泛地宣传、销售及推广地球人，使代理本身及
                        地球人的利润最大化。代理联盟可在不违反法律下，以正面形象宣传、销售及推广地球人，并有责任义务告知旗下会员所有地球人的相关优惠条件及产品。</font></li>
                      <li align="left"><font face="微软雅黑">代理联盟选择的地球人推广手法若需付费，则代理应承担该费用。</font></li>
                      <li align="left"><font face="微软雅黑">任何地球人相关信息包括: 标志、报表、游戏画面、图样、文案等，代理联盟不得私自复制、公开、分发有关材料，
                        地球人保留法律追诉权。
                        如代理在做业务推广有相关需要，请随时洽地球人。</font></li>
                    </ol>
                    <p align="left">
                      <font face="微软雅黑">
                        <strong>三、规则条款</strong></font></p>
                    <ol>
                      <li align="left"><font face="微软雅黑">各阶层代理联盟不可在未经地球人许可情况下开设双/多个的代理帐号，也不可从
                        地球人帐号或相关人士赚取佣金。请谨记任何阶层代理不能用代理帐号下注，地球人有权终止并封存帐号及所有在游戏中赚取的佣金。</font></li>
                      <li align="left"><font face="微软雅黑">为确保所有地球人会员帐号隐私与权益，地球人不会提供任何会员密码，或会员个人资料。各阶层代理联盟亦不得以任何方式取得会员数据，或任意登入下层会员帐号，如发现代理联盟有侵害
                        地球人会员隐私行为，地球人有权取消代理联盟红利，并取消代理联盟帐号。</font></li>
                      <li align="left"><font face="微软雅黑">代理联盟旗下的会员不得开设多于一个的帐号。地球人有权要求会员提供有效的身份证明以验证会员的身份，并保留以IP判定是否重复会员的权利。如违反上述事项，
                        地球人有权终止玩家进行游戏并封存帐号及所有于游戏中赚取的佣金</font></li>
                      <li align="left"><font face="微软雅黑">代理联盟不可为自己或其他联盟下的有效投注会员,只能是公司直属下的有效投注会员,
                        代理每月需有5个下线有效投注（有效投注为每周至少上线3次进行正常投注），如有违反联盟协议
                        地球人有权终止并封存帐号及所有在游戏中赚取的佣金。</font></li>
                      <li align="left"><font face="微软雅黑">如代理联盟旗下的会员因为违反条例而被禁止享用地球人的游戏，或
                        地球人退回存款给会员，地球人将不会分配相应的佣金给代理联盟。如代理联盟旗下会员存款用的信用卡、银行资料须经审核，地球人保留相关佣金直至审核完成。</font></li>
                      <li align="left"><font face="微软雅黑">合约内的条件会以地球人通知接受代理联盟加入后开始执行。地球人及代理联盟可随时终止此合约，在任何情况下，代理联盟如果想终止合约，都必须以书面/电邮方式提早于七日内通知
                        地球人。
                        代理联盟的表现会3个月审核一次，如代理联盟已不是现有的合作成员则本合约书可以在任何时间终止。如合作伙伴违反合约条例，地球人有权立即终止合约。</font></li>
                      <li align="left"><font face="微软雅黑">在没有地球人许可下，代理联盟不能透露及授权地球人相关密数据，包括代理联盟所获得的回馈、佣金报表、计算等;代理联盟有义务在合约终止后仍执行机密文件及数据的保密。</font>
                      </li>
                      <li align="left"><font
                        face="微软雅黑">在合约终止后，代理联盟及地球人将不须要履行双方的权利及义务。终止合约并不会解除代理联盟于终止合约前应履行的义务。</font></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div :style="{display:$route.params.p_id==5 ? 'block':'none'}" class="page">
              <div class="headTitle">联系我们</div>
              <div class="gys">
                <div>
                  <p align="left">
                    <font face="微软雅黑">地球人的客服中心全年无休，提供1周7天、每天24小时的优质服务。</font></p>
                  <p align="left">
                    <font face="微软雅黑">如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</font></p>
                  <p align="left">
                    <font face="微软雅黑">点击"在线客服"链接，即可进入在线客服系统与客服人员联系。</font></p>
                  <p align="left">
                    <font face="微软雅黑">您亦可使用Email与客服人员取得联系</font></p>
                  <p align="left">
                    <font face="微软雅黑">会员邮箱：bcccesq002@163.com</font></p>
                </div>
              </div>
            </div>
            <div :style="{display:$route.params.p_id==6 ? 'block':'none'}" class="page">
              <div class="headTitle">常见问题</div>
              <div class="gys">
                <div id="Union">
                  <ul class="mtab-menual" style="">
                    <li @click="QUE=1" id="#Union1" class="mtab"><font face="微软雅黑">一般常见问题</font></li>
                    <li @click="QUE=2" id="#Union2"><font face="微软雅黑">游戏及投注问题</font></li>
                    <li @click="QUE=3" id="#Union3"><font face="微软雅黑">技术常见问题</font></li>
                  </ul>
                  <div id="Union1" :style="{display:QUE==1 ? 'block':'none'}">
                    <p>
                      <font face="微软雅黑">Q1: 如何加入地球人？</font></p>
                    <p align="left">
                      <font face="微软雅黑">A1: 您可以直接点选 立即加入，确实填写资料后，可立即登记成为地球人会员。<br>
                        <br>
                        Q2: 我可以直接在网络上存款吗？<br>
                        A2: 可以，地球人提供多种在线存款选择，详情请参照 存款须知。</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q3: 我在那里可以找到游戏的规则？<br>
                        A3:
                        在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。<br>
                        <br>
                        Q4: 您们的游戏会用多少副牌？</font></p>
                    <p align="left">
                      <font face="微软雅黑">A4: 在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q5: 您们何时会洗牌?<br>
                        A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q6: 我的注码的限制是多少？<br>
                        A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q7: 如果忘记密码怎么办？<br>
                        A7: 您可点击首页忘记密码功能，填写您当初留下的邮箱，即可取回您当初设定的密码。当您无法收取邮件时，您也可以联系24小时在线客服人员咨询协助取回您的帐号密码。</font></p>
                    <p>
                      <font face="微软雅黑">Q8: 当您注册时出现，姓名已注册。<br>
                        A8: 您可透过24小时在线客服人员协助处理。</font></p>
                  </div>
                  <div id="Union2" :style="{display:QUE==2 ? 'block':'none'}">
                    <p>
                      <font face="微软雅黑">Q1: 请问我在哪边可以找到游戏规则？</font></p>
                    <p align="left">
                      <font face="微软雅黑">A1: 在您为登入之前，您可以在各个游戏项目内，看见游戏规则的选项，清楚告知游的玩法、规则及派彩方式。
                        在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q2: 请问个个游戏的注额为多少？<br>
                        A2: 真人游戏-最低下注20RMB最高限额50000RMB<br>
                        体育博彩-最低下注10RMB最高限额30000RMB<br>
                        彩票游戏-最低下注5RMB最高限额依照游戏及玩法不同，最高可到50000RMB<br>
                        电子机率-最低下注0.2RMB最高限额依照游戏及玩法不同</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q3: 您们的游戏会用多少副牌？<br>
                        A3:在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</font></p>
                    <p align="left">
                      <font face="微软雅黑">Q4: 您们何时会洗牌?<br>
                        A4: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</font></p>
                  </div>
                  <div id="Union3" :style="{display:QUE==3 ? 'block':'none'}">
                    <p>
                      <font face="微软雅黑">Q: 最低的硬件系统要求是什么?</font></p>
                    <ol>
                      <li align="left"><font face="微软雅黑">任何可以接上互联网的计算机。</font></li>
                      <li align="left"><font face="微软雅黑">SVGA显示适配器–最少要1204x768像素256色彩以上。</font></li>
                      <li align="left"><font face="微软雅黑">区域宽带。</font></li>
                      <li align="left"><font face="微软雅黑">Windows , Mac OS X , Linux操作系统。</font></li>
                      <li align="left"><font face="微软雅黑">Internet Explorer浏览器v6.0 或以上 (版本7.0 或以上更好)，Mozilla Firefox
                        (浏览器v3.0
                        或以上)，Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)</font></li>
                      <li align="left"><font face="微软雅黑">要浏览在线娱乐城，您可以在 Macromedia网站下载Macromedia Flash
                        Player浏览器附加程序(8.0或以上版本)。
                      </font></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div :style="{display:$route.params.p_id==7 ? 'block':'none'}" class="page">
              <div class="headTitle">责任博彩</div>
              <div class="gys">
                <div id="Union">
                  <ul>
                    <li id="#Union1" @click="zeRen=1" class="mtab"><font face="微软雅黑">责任与博彩</font></li>
                    <li id="#Union2" @click="zeRen=2" class=""><font face="微软雅黑">条款与规则</font></li>
                  </ul>
                  <div id="Union1" :style="{display:zeRen==1 ? 'block':'none'}">
                    <p>
                      <font face="微软雅黑">
                        <strong>一. 未满博彩年龄</strong><br>
                        地球人积极推行负责任博彩，並极力拒絕未成年玩家使用我们的软体进行网上娱乐。同时，我们更透过专业人员及各种有效方法，以防止问题博彩的发生。如您的电脑被未满18岁的人士使用，
                        我们建议您设定电脑资料保密以防止帐号号码/用户名称被盗用。父母或者监护人可以使用一系列的第三方软件来监控或者限制电脑的互联网使用：<br>
                        1. Net Nanny过滤软件防止儿童浏览不适宜的网站内容: www.netnanny.com<br>
                        2. CYBERsitter过滤软件允许父母增加自定义过滤网站: www.cybersitter.com<br>
                      </font>
                    </p>
                    <p>
                      <font face="微软雅黑">
                        <strong>二. 博彩责任</strong></font></p>
                    <p>
                      <font face="微软雅黑">本公司希望客户高兴与满意本公司提供的网上博彩服务。我们会为客户在博彩自律方面提供多方面的帮助。如您担心博彩会严重影响您或他人的生活，我们建议：<br>
                        a) 在登录我们的系统时，不要让未成人士在萤光幕显示范围內观看或停留。</font></p>
                    <p>
                      <font face="微软雅黑">b) 如果用户需要离开系统的操作范围，请谨记使用密码锁住电脑。</font></p>
                    <p>
                      <font face="微软雅黑">c) 各用户务必将地球人帐号及密码放置在安全地方。</font></p>
                    <p>
                      <font face="微软雅黑">d) 请于电脑使用年龄保护软体，以限制未成年用户到访特定网站及使用相关程式。</font></p>
                    <p>
                      <font face="微软雅黑">e) 切勿与未成年人士分享信用卡或帐号等相关资讯 。</font></p>
                    <p>
                      <font face="微软雅黑">f)
                        当用户从他人电脑登入地球人软件时，或从远端位置(无线网吧、机场、酒店或其他公共场所)进行登录及娱乐活动时，请留意是否已隔离任何未成年人士。</font></p>
                    <p>
                      <font face="微软雅黑">
                        <strong>三. 严重博彩引发的问题：</strong></font></p>
                    <ol>
                      <li class=""><font face="微软雅黑">您会否因为博彩而不上班或不上学？</font></li>
                      <li class=""><font face="微软雅黑">您博彩是否为了逃避烦闷或不愉快的生活？</font></li>
                      <li class=""><font face="微软雅黑">当您博彩花光钱时，您是否感到失望甚至绝望，并且希望马上能再进行赌博？</font></li>
                      <li class=""><font face="微软雅黑">您会否博彩到最后一分钱彩罢休？</font></li>
                      <li class=""><font face="微软雅黑">您有否曾经用谎言掩饰您花在博彩上的时间和金钱？</font></li>
                      <li class=""><font face="微软雅黑">您博彩是不是因为争执，沮丧或失望？</font></li>
                      <li class=""><font face="微软雅黑">您有没有因为博彩而感到失落甚至轻生？</font></li>
                      <li class=""><font face="微软雅黑">您是否对您的家人，朋友或爱好失去了兴趣？</font></li>
                      <li class=""><font face="微软雅黑">您输了之后，是否马上想把输的钱赢回来？</font></li>
                    </ol>
                    <div>
                      <p class=""><font face="微软雅黑">在这些问题中您回答的‘是’越多，您就越接近具备严重博彩问题。 </font></p>
                    </div>
                    <p>
                      <font face="微软雅黑">
                        <strong>四. 以下提示也许能帮助您控制博彩问题：</strong></font></p>
                    <ol>
                      <li class=""><font face="微软雅黑">博彩只是一种娱乐，不应被视为赚钱的方法</font></li>
                      <li class=""><font face="微软雅黑">避免有把输的钱赢回来的想法</font></li>
                      <li class=""><font face="微软雅黑">只投注您付得起的金额</font></li>
                      <li class=""><font face="微软雅黑">时刻记着花在博彩上的时间和金钱</font></li>
                    </ol>
                    <p>
                      <font face="微软雅黑">
                        <br>
                        <strong>五. 责任感和正直诚信</strong></font></p>
                    <p>
                      <font face="微软雅黑">地球人，致力提高服务水准，並承诺向客户履行最大程度上的责任，包括诚信、透明度、合法性等各方面。如客户遇上任何有关负责任博彩的问题，可24小时向我们的客户服务部联络。我们承诺会于一年365日，不间断地为用户提供技术支援及相关问题解答服务。</font>
                    </p>
                  </div>
                  <div id="Union2" :style="{display:zeRen==2 ? 'block':'none'}" style="display: none;">
                    <ol>
                      <li class=""><font face="微软雅黑">每个客户只能拥有一个帐号，如发现客户拥有多个帐号，本公司有权冻结客户的帐号以及取消该帐号内所有胜出的投注。本公司有权保留取消任何因素导致帐号结余不正确的金额。此外如发现帐号持有人与亲属共同使用多个不同帐号，本公司有权限制客户每人各保留最多一个帐号。</font>
                      </li>
                      <li class=""><font face="微软雅黑">用户有义务保障本身的用户名称和密码的隐私安全，并且不应允许任何第三方以任何形式，通过该用户名称和密码使用本网站之所有游戏，否则，一切责任需由该用户全部承担。</font>
                      </li>
                      <li class=""><font face="微软雅黑">用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。</font></li>
                      <li class=""><font face="微软雅黑">地球人站时间均为美东时间。</font></li>
                      <li class=""><font face="微软雅黑">本网站只向符合法定年龄的用户提供服务，客户在进行投注时必须年满18岁。</font></li>
                      <li class=""><font face="微软雅黑">本网站有权拒绝或不接受任何用户以任何不正当方式登入或参与本网站所有游戏之权利。</font></li>
                      <li class=""><font face="微软雅黑">因人为或系统发生不能预测因素所导致的失误，本公司管理层保留最终决定权。</font></li>
                      <li class=""><font face="微软雅黑">因发生不可抗拒的灾害或人为入侵破坏行为，所造成的网站故障或资料损坏等情况，以本网站最终数据为最后的处理数据，所以各会员应尽量保留或列印资料，本网站才接受跟进投诉。</font>
                      </li>
                      <li class=""><font face="微软雅黑">为避免任何争议，各用户在参与本网站所有游戏过程中或在结束游戏前，务必检查该会员帐号的资料，如发现任何异常情况，应立即与代理商联系查证，否则该用户将被视为同意并且接受。其帐号之一切数据或历史数据，以本公司资料库中的资料为准，用户不得异议。</font>
                      </li>
                      <li class=""><font face="微软雅黑">并且无须事本公司保留所有规则的修改权，先公布。</font></li>
                      <li class=""><font face="微软雅黑">不论在任何情况下，本公司都有最终决定权。</font></li>
                    </ol>
                  </div>
                </div>
              </div>
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
        zeRen: 1,
        QUE: 1,
        lianM: 1
      }
    },
    // beforeRouteUpdate(to, from, next){
    //   // console.log(to.params.p_id)
    //   this.handpages = to.params.p_id
    //   next()
    // },
    methods: {
      chenge: function (n) {
        this.$router.push({
          path: '/home/contactUs/' + n
        })
      }
    },
    mounted () {
      // console.log(this.$route.params.p_id)
    },
    filters: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="less" scoped>
  .home-contactUs {
    background: rgb(7, 12, 31) url(/static/dqr/img/bg1.jpg) no-repeat !important;
    background-size: 100% 100%;
    background-position: center top;
    background-repeat: no-repeat;
    min-height: 1100px;
    .wrapper0 {
      height: 100%;
    }
    .live-video-contance {
      overflow: hidden;
      padding-top: 20px;
      .wrapper {
        width: 1100px;
        height: 100%;
        margin: auto;
        .main_weclome {
          overflow: hidden;
          zoom: 1;
          padding: 20px 0 20px 0;
          border-radius: 8px;
          background-color: #1a1a1a;
          box-shadow: 0 0 20px #2f2f2f;
          margin-bottom: 20px;
        }
      }
    }
  }
  .menu{
    float: left;
    width: 329px;
    height: 466px;
    background: #f6f6f6;
    background: url('/static/dqr/img/home/gyws_05.jpg') no-repeat center top;
    ul {
      padding-top: 15px;
    }
    li {
      display: block;
      color: #fff;
      height: 58px;
      line-height: 58px;
      font-size: 18px;
      background: url('/static/dqr/img/home/sdv_07.jpg') no-repeat center -10px;
      margin-top: -8px;

      &:hover, &.ab-active {
        background: url('/static/dqr/img/home/sdv_03.jpg') no-repeat center -10px;
        a {
          color: #000;
        }
      }
      a {
        position: relative;
        color: #fff;
        display: block;
        height: 100%;
        text-align: center;
        // &.ab-active{
        //   position: relative;
        //   color: #4d8cfa;
        //   background: #FFF;
        // }
      }

      .cur {
        position: relative;
        color: #4d8cfa;
        background: #FFF;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          width: 3px;
          height: 100%;
          background: #4d8cfa;
        }
      }

    }

    .hesder {
      div {
        color: #fff;
        text-align: center;

        &:first-child {
          font-size: 20px;
          margin-top: 10px;
          font-weight: bold;
        }

        &:last-child {
          font-size: 12px;
          margin-top: 2px;
          line-height: 20px;
        }

      }
    }

  }

  .page {
    width: 716px;
    float: right;
    margin-right: 32px;

    .headTitle {
      font-size: 20px;
      color: #fff;
      text-align: center;
      width: 100%;
      margin-top: 25px;
      padding-bottom: 15px;
      border-bottom: solid 1px #313131;
      margin-bottom: 20px;
    }

    .gys {
      color: #fff;
      font-family: "Microsoft Yahei";
      font-size: 14px;
      text-align: left;
      line-height: 26px;

      font {
        color: #f9fb9d;
        width: 100%;
        float: left;
        display: block;
      }

      #Union {
        ul {
          list-style: none;
          border-bottom: 3px solid #AAA;
          margin-top: 10px;
          height: 33px;

          li {
            color: #000;
            background-color: #AAA;
            display: inline-block;
            margin-right: 4px;
            padding: 3px 10px;
            cursor: pointer;
            border-radius: 5px 5px 0 0;
            transition: background-color .4s;
          }
        }
      }

      table {
        td {
          border: 1px solid grey;
        }

      }

    }
  }


</style>
