<template>
  <div class="fishing_main">
    <div class="wrapper clearfix">
      <div class="menu">
        <ul>
          <li>
            <a @click="handpages=1" :class="[handpages==1 ? 'ab-active':'']">关于我们</a>
          </li>
          <li>
            <a @click="handpages=2" :class="[handpages==2 ? 'ab-active':'']">代理计划</a>
          </li>
          <li>
            <a @click="handpages=3" :class="[handpages==3 ? 'ab-active':'']">常见问题</a>
          </li>
          <li>
            <a @click="handpages=4" :class="[handpages==4 ? 'ab-active':'']">联系我们</a>
          </li>

        </ul>
      </div>

      <div :style="{display:handpages==1 ? 'block':'none'}" class="page">
        <h2><span>关于我们</span></h2>
        <div class="financingContentC">
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            国际专业博彩品牌优势<br>
            <span style="line-height: 28px;">NN500</span>彩票在09年正式推出，我们拥有了全球博彩行业的精英，超专业的技术和经营团队。经过不断拓展，现正努力向业界高峰攀登！</p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            <span
              style="line-height: 28px;">NN500</span>彩票是一家拥有完整系统的网上娱乐博彩公司，凭借其雄厚的实力及其在业界中良好的关系网，致力打造成为亚洲最佳在线娱乐游戏平台。<span
            style="line-height: 28px;">NN500</span>承诺为每一位客户提供最安全保密、最稳定便捷、最精确的专业资料、5分钟提款到帐、无限制提款次数以及全方位的国际化服务。</p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            <span style="line-height: 28px;">NN500</span>彩票专业经营彩票业务，现已推出高频彩票现金投注网，主营北京赛车PK10、幸运飞艇、PC蛋蛋、重庆时时彩、天津时时彩、新疆时时彩、广东快乐十分、江苏快三、香港六合彩等项目，完全自助注册开户，现金开户，
            现金投注。我们拥有稳定的平台，成熟的玩法，简单的下注流程、以及优质的客户服务。<br>
            <span style="font-size:18px;"><span
              style="color:#2ecc71;"><strong>选择NN500彩票，十大放心理由</strong></span></span><br>
            <span style="color:#e67e22;">一、平台足够权威</span><br>
            <span style="line-height: 28px;">NN500</span>彩票获得GEOTRUST国际认证，确保网站公平、公正、公开。<br>
            <span style="color:#e67e22;">二、排名足够靠前</span><br>
            <span style="line-height: 28px;">NN500</span>彩票为最具公信力彩票投注品牌，信誉驰名亚洲，在全球海量彩票公司中独占前茅的购彩投注经营商。<br>
            <span style="color:#e67e22;">三、资金足够安全</span><br>
            <span style="line-height: 28px;">NN500</span>彩票雄厚的资金链信誉良好，大额存款无忧，资金安全有保障，免去您一切后顾之忧<br>
            <span style="color:#e67e22;">四、取款足够自由</span><br>
            <span style="line-height: 28px;">NN500</span>彩票全天自由存取款，取款3-5分钟火速到帐，且终身免手续费。<br>
            <span style="color:#e67e22;">五、活动足够给力</span><br>
            <span style="line-height: 28px;">NN500</span>彩票时时推出各项给力活动，优惠送不停，让您真正赚翻天。<br>
            <span style="color:#e67e22;">六、安全足够给力</span><br>
            <span style="line-height: 28px;">NN500</span>彩票采用128位SSL加密技术和严格的安全管理体系，确保客户资料安全得到最完善的保障。<br>
            <span style="color:#e67e22;">七、服务足够贴心</span><br>
            <span style="line-height: 28px;">NN500</span>彩票 7X24小时客服贴心的服务，温馨的呵护每一位玩家。<br>
            <span style="color:#e67e22;">八、营业足够合法</span><br>
            <span style="line-height: 28px;">NN500</span>彩票是首家获得国家政府发出彩票经营权的企业，国内首家上市的持牌彩票投注经营商。<br>
            <span style="color:#e67e22;">九、操作足够简单</span><br>
            <span style="line-height: 28px;">NN500</span>彩票秉承以客户为中心的宗旨，在开发之初就设计了诸多人性化的功能和特性，省去繁琐的麻烦，让您轻松操作。<br>
            <span style="color:#e67e22;">十、VIP足够优势</span><br>
            <span style="line-height: 28px;">NN500</span>彩票VIP尊享贵宾级的专属服务让您享有宾至如归般的帝王享受。<br>
            选择<span style="line-height: 28px;">NN500</span>彩票，等于为自己选择一份线上品牌信誉的保障！！！</p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            <span style="color:#c0392b;">中国大陆地区使用者享受多项红利优惠</span></p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            联系方式&nbsp; <a href="https://messenger.providesupport.net/messenger/081y003xegun90rv336knk4pcg.html"
                          style="color:red;" target="_blank">在线客服</a>&nbsp;&nbsp;</p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            客服QQ：<font color="#e74c3c" face="宋体"><span style="font-size: 14px;"><b>1538956789</b></span></font>
          </p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            代理QQ：<span style="font-size:10.5pt"><span style="font-family:Calibri"><strong><span
            style="color:#e74c3c"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                                <font face="宋体">1528956789</font>
                                            </span></span></span></strong></span></span></p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            投诉与建议 E-Mail：jlcp999@gmail.com&nbsp;</p>
        </div>
      </div>
      <div :style="{display:handpages==2 ? 'block':'none'}" class="page">
        <h2><span>代理计划</span></h2>
        <div class="financingContentC">
          <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-size:18px"><span
            style="color:#f39c12"><span style="font-family:Calibri"><b><span style="font-family:宋体"><span
            style="font-weight:bold">
                                                <font face="宋体">项目决定成败</font>
                                                <font face="宋体">行动决定未来</font>
                                                <font face="宋体">小小口碑宣传</font>
                                                <font face="宋体">快速简单赚钱</font>
                                            </span></span></b></span></span></span></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#f39c12"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">代理优势</font>
                                                    </span></span></span></b></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">1<font face="宋体">、</font></span></span><span
            style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">零风险，高回报，每周准时出佣，怎么玩都赚钱；</font>
                                        </span></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">2<font face="宋体">、</font></span></span><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">全年度优惠不断，满足各种类型玩家需求；</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">3<font face="宋体">、</font></span></span><span
            style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">多种支付方式供您选择，让您不会错过任何一笔佣金的支付；</font>
                                        </span></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">4<font face="宋体">、NN500</font></span></span><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">彩票</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">营运多年，深受百万玩家信赖；</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">5<font face="宋体">、</font></span></span><span
            style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">多年大力推广，品牌热度十足，代理可坐享广告品牌效应；</font>
                                        </span></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">6<font face="宋体">、</font></span></span><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">我们提供顶级</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">彩票游戏体验：时时彩、北京赛车、分分彩</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">等多种游戏。</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">7<font face="宋体">、</font></span></span><span
            style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">我们的市场策略为业界最佳，口碑也是我们最好的营销方式。</font>
                                        </span></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">8<font face="宋体">、</font></span></span><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">我们的合营团队竭诚为您服务！我们提供多种沟通管道</font>(Skype<font
              face="宋体">、</font>
                                            <font face="Calibri">QQ</font>
                                            <font face="宋体">、</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">微信、</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">电话</font>)<font face="宋体">，支持多种语言，期待为您服务</font>
                                            <font face="Calibri">!</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify">&nbsp;</p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><span style="font-size:10.5000pt"><span
            style="font-family:Calibri"><strong><span style="margin:0pt 0pt 0.0001pt; text-align:justify">
                                        <font face="宋体">现在您需要进行的是</font>
                                    </span><a href="javascript:;" onclick="register()"><span
            style="color:#f39c12">会员注册</span></a>
                                    <font face="宋体">——开始！</font>
                                </strong></span></span></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">请在线提出申请</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">，可联系在线客服，或添加</font>
                                        </span></span><strong><span style="color:#e74c3c"><span
            style="font-size:10.5000pt"><span style="font-family:宋体">
                                                    <font face="宋体">代理经理QQ</font>
                                                    <font face="宋体">：1528956789</font>
                                                </span></span></span></strong><span style="font-size:10.5000pt"><span
            style="font-family:宋体">
                                            <font face="宋体">，填写正确的各项资料，姓名、手机、银行卡务必真实有效，以便为您支付佣金。成</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">功申请后</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">由专员与您联系</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">确认</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">开通</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">。</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#f39c12"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">佣金方案</font>
                                                    </span></span></span></b></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify">&nbsp;</p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#1abc9c"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">A<font
            face="宋体">、</font></span></span></span></b><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">抽水代理方案（只针对香港六合彩）</font>
                                                    </span></span></span></b><span style="font-size:10.5000pt"><span
            style="font-family:宋体">
                                                <font face="宋体">：</font>
                                            </span></span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">不计客户输赢，只按照有效投注总量拿佣金（为您规避一切风险</font>!<font face="宋体">）</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify">&nbsp;</p>

          <table align="center" class="MsoTableGrid"
                 style="border-collapse:collapse; border:1pt solid windowtext; font-family:'Times New Roman'; font-size:10pt; height:300px; text-align:justify; width:100%">
            <tbody>
            <tr>
              <td
                style="border:1pt solid windowtext; background:#00b050; width:142pt; padding:0pt 5.4pt; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff"><span
                  style="font-weight:bold">当月有效投注量</span></span></span></span></b></span></span></strong></p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:142.05pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff"><span style="font-weight:bold">当月可得佣金</span></span></span></span></b></span></span></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:142pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-size:10.5000pt"><span style="font-family:宋体"><span
                  style="font-weight:bold">8万+</span></span></span></b></span></span></span></strong></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:142.05pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span
                  style="font-size:10.5pt"><span style="color:#e74c3c"><span style="font-family:宋体"><span
                  style="font-weight:bold">388元</span></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:142pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-size:10.5000pt"><span style="font-family:宋体"><span
                  style="font-weight:bold">38万+</span></span></span></b></span></span></span></strong></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:142.05pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span
                  style="font-size:10.5pt"><span style="color:#e74c3c"><span style="font-family:宋体"><span
                  style="font-weight:bold">3888元</span></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:142pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189"><strong><span style="color:#e74c3c"><span style="font-size:10.5pt"><span
                style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span style="font-family:宋体"><span
                style="font-weight:bold">58万+</span></span></span></b></span></span></span></strong></td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:142.05pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189"><span style="font-size:10.5pt"><span style="color:#e74c3c"><span
                style="font-family:宋体"><span style="font-weight:bold">5888元</span></span></span></span></td>
            </tr>
            <tr>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:142pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-size:10.5000pt"><span style="font-family:宋体"><span
                  style="font-weight:bold">180万+</span></span></span></b></span></span></span></strong></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:142.05pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189"><span style="font-size:10.5pt"><span style="color:#e74c3c"><span
                style="font-family:宋体"><span style="font-weight:bold">18888元</span></span></span></span></td>
            </tr>
            <tr>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:142pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-size:10.5000pt"><span style="font-family:宋体"><span
                  style="font-weight:bold">580万+</span></span></span></b></span></span></span></strong></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:142.05pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="189"><span style="font-size:10.5pt"><span style="color:#e74c3c"><span
                style="font-family:宋体"><span style="font-weight:bold">58888元</span></span></span></span></td>
            </tr>
            </tbody>
          </table>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#1abc9c"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">B、</font>
                                                    </span></span></span></b><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">日工资代理方案</font>
                                                    </span></span></span></b><span style="font-size:10.5000pt"><span
            style="font-family:宋体">
                                                <font face="宋体">：</font>
                                            </span></span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">不计客户输赢，只按照有效投注总量的百分比拿日工资（为您规避一切风险</font>!<font
            face="宋体">）</font>
                                        </span></span></span></span></strong></p>

          <table align="center" class="MsoTableGrid"
                 style="border-collapse:collapse; border:1pt solid windowtext; font-family:'Times New Roman'; font-size:10pt; height:300px; text-align:justify; width:100%">
            <tbody>
            <tr style="height:21.1500pt">
              <td
                style="border:1pt solid windowtext; background:#00b050; width:106.85pt; padding:0pt 5.4pt; text-align:center; vertical-align:middle"
                width="142">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt">
                  <font color="#ffffff">
                    <font face="宋体"><span style="font-size:14px"><b>当日有效投注量</b></span></font>
                  </font>
                </p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="108">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span
                  style="color:#ffffff">当日最低</span></span></span></span></span></strong><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">有效会员</span></span></span></span></span></strong>
                </p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:64.8pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="86">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt">
                  <font color="#ffffff">
                    <font face="宋体"><span style="font-size:14px"><b>日工资比例</b></span></font>
                  </font>
                </p>
              </td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-color:windowtext; border-bottom-width:1pt; border-left-color:windowtext; border-left-width:1pt; border-right-color:windowtext; border-right-width:1pt; border-style:none solid solid; padding:0pt 5.4pt; text-align:center; vertical-align:middle; width:106.85pt"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥5000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥3<font face="宋体">个</font></span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-color:windowtext; border-bottom-width:1pt; border-right-color:windowtext; border-right-width:1pt; border-style:none solid solid none; padding:0pt 5.4pt; text-align:center; vertical-align:middle; width:81.6pt"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">0.07%</span></b></span></span></span></strong></span></td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥50000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥8<font face="宋体">个</font></span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:64.8pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="86"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">0.09%</span></b></span></span></span></strong></span></td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥500000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥25<font face="宋体">个</font></span></b></span></span></span></strong></span>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:64.8pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="86"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">0.11%</span></b></span></span></span></strong></span></td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥1000000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥50<font face="宋体">个</font></span></b></span></span></span></strong></span>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:64.8pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="86"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">0.12%</span></b></span></span></span></strong></span></td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥5000000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥100<font face="宋体">个</font></span></b></span></span></span></strong></span>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:64.8pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="86"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">0.20%</span></b></span></span></span></strong></span></td>
            </tr>
            </tbody>
          </table>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><span style="font-family:Times New Roman,Times,serif;"><strong><span
            style="font-size:10.5pt;">注：彩票、体育、真人电子的有效投注量分开计算。</span></strong></span></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify">&nbsp;</p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="color:#1abc9c"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">C<font
            face="宋体">、正盈利代理方案（不包括</font></span></span></span></b></span></span></span><span style="color:#1abc9c"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">香港六合彩</font>
                                                    </span></span></span></b></span></span></span><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><span style="color:#1abc9c"><b><span
            style="font-size:10.5000pt"><span style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">）：</font>
                                                    </span></span></span></b></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体"><span
            style="font-weight:bold">
                                                <font face="宋体">按代理线当月派彩正盈利抽佣，最高</font>
                                                <font face="Calibri">50%</font>
                                                <font face="宋体">等你拿！</font>
                                            </span></span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <table align="center" class="MsoTableGrid"
                 style="border-collapse:collapse; border:1pt solid windowtext; font-family:'Times New Roman'; font-size:10pt; height:300px; text-align:justify; width:100%">
            <tbody>
            <tr style="height:21.1500pt">
              <td
                style="border:1pt solid windowtext; background:#00b050; width:106.85pt; padding:0pt 5.4pt; text-align:center; vertical-align:middle"
                width="142">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt">
                  <font color="#ffffff">
                    <font face="宋体"><span style="font-size:14px"><b>当月盈利/元</b></span></font>
                  </font>
                </p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="108">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">当月最低</span></span></span></span></span></strong>
                </p>

                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">有效会员</span></span></span></span></span></strong>
                </p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="123">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">彩票</span></span></span></span></span></strong></p>

                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span
                  style="color:#ffffff">佣金</span></span></span></span></span></strong><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span
                  style="color:#ffffff">比</span></span></span></span></span></strong><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">例</span></span></span></span></span></strong></p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="123">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">体育</span></span></span></span></span></strong></p>

                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span
                  style="color:#ffffff">佣金</span></span></span></span></span></strong><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">比例</span></span></span></span></span></strong></p>
              </td>
              <td
                style="background:#00b050; border-bottom-width:1pt; border-style:solid solid solid none; border-bottom-color:windowtext; width:98.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; border-top-width:1pt; border-top-color:windowtext; text-align:center; vertical-align:middle"
                width="131">
                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">真人、电子</span></span></span></span></span></strong>
                </p>

                <p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span
                  style="color:#ffffff">佣金</span></span></span></span></span></strong><strong><span
                  style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
                  style="font-family:宋体"><span style="color:#ffffff">比例</span></span></span></span></span></strong></p>
              </td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-color:windowtext; border-bottom-width:1pt; border-left-color:windowtext; border-left-width:1pt; border-right-color:windowtext; border-right-width:1pt; border-style:none solid solid; padding:0pt 5.4pt; text-align:center; vertical-align:middle; width:106.85pt"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥100</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥3个</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-color:windowtext; border-bottom-width:1pt; border-right-color:windowtext; border-right-width:1pt; border-style:none solid solid none; padding:0pt 5.4pt; text-align:center; vertical-align:middle; width:81.6pt"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">10%</span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-color:windowtext; border-bottom-width:1pt; border-right-color:windowtext; border-right-width:1pt; border-style:none solid solid none; padding:0pt 5.4pt; text-align:center; vertical-align:middle; width:81.6pt"
                width="108">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">15%</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-color:windowtext; border-bottom-width:1pt; border-right-color:windowtext; border-right-width:1pt; border-style:none solid solid none; padding:0pt 5.4pt; text-align:center; vertical-align:middle; width:81.6pt"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">25%</span></b></span></span></span></strong></span>&nbsp;
              </td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥50000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥8<font face="宋体">个</font></span></b></span></span></span></strong></span>
                </p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">15%</span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">20%</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:98.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="131">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">30%</span></b></span></span></span></strong></span></p>
              </td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥200000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥20<font face="宋体">个</font></span></b></span></span></span></strong></span>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">20%</span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">25%</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:98.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="131"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">35%</span></b></span></span></span></strong></span></td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥500000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥50<font face="宋体">个</font></span></b></span></span></span></strong></span>
                </p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">25%</span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">30%</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:98.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="131"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">40%</span></b></span></span></span></strong></span></td>
            </tr>
            <tr style="height:21.1500pt">
              <td
                style="border-bottom-width:1pt; border-style:none solid solid; border-bottom-color:windowtext; width:106.85pt; padding:0pt 5.4pt; border-left-width:1pt; border-left-color:windowtext; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="142">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">≥1000000</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:81.6pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="108"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">≥100<font face="宋体">个</font></span></b></span></span></span></strong></span>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123"><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                style="font-weight:bold">50%</span></b></span></span></span></strong></span></td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:92.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="123">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">50%</span></b></span></span></span></strong></span></p>
              </td>
              <td
                style="border-bottom-width:1pt; border-style:none solid solid none; border-bottom-color:windowtext; width:98.4pt; padding:0pt 5.4pt; border-right-width:1pt; border-right-color:windowtext; text-align:center; vertical-align:middle"
                width="131">
                <p><span align="center" style="margin:0pt 0pt 0.0001pt; text-align:center"><strong><span
                  style="color:#e74c3c"><span style="font-size:10.5pt"><span style="font-family:Calibri"><b><span
                  style="font-weight:bold">50%</span></b></span></span></span></strong></span></p>
              </td>
            </tr>
            </tbody>
          </table>

          <p><strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span style="font-size:10.5000pt"><span
            style="font-family:宋体">
                                            <font face="宋体">此代理方案</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">以月结算佣金：结算区间</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">为每月</font>1-5<font face="宋体">号</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">，将会员盈利，以联盟方案分红公式计算，佣金由承办客</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">户</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">于每个月的</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">1-5<font
            face="宋体">号与</font></span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">代理确认金额后，</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">统一</font>6-8<font face="宋体">号结算</font>
                                            <font face="Calibri">!</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#1abc9c"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">如何计算</font>
                                                    </span></span></span></b><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">有效会员及</font>
                                                    </span></span></span></b><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">活跃会员？</font>
                                                    </span></span></span></b></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span style="font-family:宋体"><span
            style="font-weight:bold">1</span></span></span></b><span style="margin:0pt 0pt 0.0001pt; text-align:left">
                                        <font face="宋体">、当日存款不低于2</font>00<font face="宋体">元，</font>
                                        <font face="宋体">即为当日有效会员；当月存款不低于3</font>00<font face="宋体">元，且总有效投注不低于1</font>
                                        <font face="Calibri">500</font>
                                        <font face="宋体">元，即为当月有效会员</font>
                                    </span></span></span></strong><span style="font-family:Times New Roman,Times,serif"><span
            style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt">。</span></strong></span></span>
          </p>

          <p><span style="font-family:Times New Roman,Times,serif"><span
            style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt">2、佣金：真人视讯、彩票、体育博彩、电子游艺项目的【派彩】金额扣除相应费用后，乘以相应退佣比例（以扣除相应费用后的净盈利为准）。</span></strong></span></span>
          </p>

          <p><span style="font-family:Times New Roman,Times,serif"><span
            style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt">3、合作伙伴获得的支付费用，其中优惠和市场费用将会累计并在每月的佣金中扣除。这些费用包括:</span></strong></span></span>
          </p>

          <p><span style="font-family:Times New Roman,Times,serif"><span
            style="margin:0pt 0pt 0.0001pt; text-align:left"><strong><span style="font-size:10.5pt">转帐费用 - 包括所有代理会员的存款和提款费用。</span></strong></span></span>
          </p>

          <p><span style="font-family:Times New Roman,Times,serif"><span
            style="margin:0pt 0pt 0.0001pt; text-align:left"><strong><span style="font-size:10.5pt">媒介费用 - 任何费用支出（为支持或协助代理而产生的促销或营销活动支出）。</span></strong></span></span>
          </p>

          <p><span style="font-family:Times New Roman,Times,serif"><span
            style="margin:0pt 0pt 0.0001pt; text-align:left"><strong><span style="font-size:10.5pt">优惠红利 - 给予代理会员的现金红利或是折扣。若本月可获得佣金为负数，负盈利及费用将会带到下个月继续累计至可获得佣金为正数即可领取。</span></strong></span></span><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">4、以上方案默认同</font>
                                            <font face="Calibri">IP</font>
                                            <font face="宋体">情况下注<span style="font-family:Times New Roman,Times,serif">册会员只计算</span>一个；</font>
                                        </span></span></span></span></strong></p>

          <p style="text-align:left; margin:0pt 0pt 0.0001pt"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#e74c3c"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">注：</font>
                                                    </span></span></span></b></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">1<font face="宋体">、NN500</font></span></span><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">彩票</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">保留上述条例之最终更改权！</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">2、</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">请谨记任何使用不诚实方法以骗取佣金将会永久冻结帐号，佣金一律不予发还！</font>
                                        </span></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">3、与NN500彩票</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">正式确立合作关系之后，须用心推广，前三个月需有每月</font>3<font face="宋体">个或以上的有效会员增长，否则公司有权终止合作关系。</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="color:#f39c12"><span
            style="font-size:10.5pt"><span style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span
            style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">提供服务：</font>
                                                    </span></span></span></b></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">1<font face="宋体">、当代理线会员大于</font>
                                            <font face="Calibri">5</font>
                                            <font face="宋体">个有效会员，累计存款达到1万元以上，代理可申请专属推广域名</font>
                                        </span></span></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">2<font face="宋体">、提前申请专属代理域名未满足相应条件需缴纳</font>
                                            <font face="Calibri">100</font>
                                            <font face="宋体">元开通，费用将在条件满足后退还！</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">3<font face="宋体">、</font>
                                            <font face="Calibri">7X24</font>
                                            <font face="宋体">小时专属代理服务，</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">联系</font>QQ<font face="宋体">：</font>
                                        </span></span><strong><span style="color:#e74c3c"><span
            style="font-size:10.5000pt"><span style="font-family:宋体">
                                                    <font face="宋体">1528956789</font>
                                                </span></span></span></strong></span></span></strong><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="font-size:10.5000pt"><span style="font-family:宋体">4<font
              face="宋体">、支持层层代理下线最高赔率限定</font></span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong>&nbsp;</strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体"><span style="color:#e74c3c">请注意</span>：</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:justify"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">联盟体系当月营利达到标准，而【当月最低有效会员】人数未达相应最低门坎，则该月佣金比例依照【当月最低有效会员】人数所达门坎相应的百分比进行退佣。</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt"><strong><span style="font-size:10.5pt"><span
            style="font-family:Calibri"><b><span style="font-size:10.5000pt"><span style="font-family:宋体"><span
            style="font-weight:bold">
                                                    <font face="宋体">例</font>
                                                </span></span></span></b><span style="font-size:10.5000pt"><span
            style="font-family:宋体">
                                            <font face="宋体">：体系当月营利</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">或有效投注满足的等级条件</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">，</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">但</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">当月有效会员人数</font>
                                        </span></span><span style="font-size:10.5000pt"><span style="font-family:宋体">
                                            <font face="宋体">不满足将按人数条件进行佣金结算。</font>
                                        </span></span></span></span></strong></p>

          <p style="margin:0pt 0pt 0.0001pt; text-align:center"><br>
            <strong><span style="font-size:10.5pt"><span style="font-family:Calibri"><span
              style="color:#e74c3c"><b><span style="font-size:10.5000pt"><span style="font-family:宋体"><span
              style="font-weight:bold">
                                                        <font face="宋体">NN500彩票官网</font>&nbsp;dd.cc
                                                    </span></span></span></b><b><span style="font-size:10.5000pt"><span
              style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">品牌典范</font>
                                                    </span></span></span></b><b><span style="font-size:10.5000pt"><span
              style="font-family:宋体"><span style="font-weight:bold">·</span></span></span></b><b><span
              style="font-size:10.5000pt"><span style="font-family:宋体"><span style="font-weight:bold">
                                                        <font face="宋体">信誉保证</font>
                                                    </span></span></span></b></span></span></span></strong></p>

        </div>
      </div>
      <div :style="{display:handpages==3 ? 'block':'none'}" class="page">
        <h2><span>常见问题</span></h2>
        <div class="financingContentC">
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            如何更改我的注册信息和帐号密码</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            需要修改注册信息和帐号密码时通过系统自行修改，需修改其他信息请联系代理专员。</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            <br></p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            为什么注册完成后无法查看全部功能</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            当您完成注册后，便可以看到您的个人信息页，请在个人信息页上完善你的实名信息，并主动联系代理专员，以便于我们为您进行审核。当审核完成后，您便可以开展您的代理业务了。</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            <br></p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            我的代理佣金什么时候结算</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            每月1至2号结算上月代理佣金，即2月2号结算（1月1号—30号）。</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            <br></p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            如何提取佣金</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            当您的佣金已经结算完成后，请主动联系代理专员，将为您处理佣金提取申请。</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            <br></p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            佣金到帐时间</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            申请提款（每月仅限提款1次）5号前到帐。首次提款需在取得代理资格后至少30天。</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            <br></p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            我帐号信息的安全性、可靠性如何保障</p>
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(240, 240, 240);">
            对于您的帐号我们首要关注的是安全，所以我们确保与我们用户有关的所有信息拥有最大的机密性。CMP向您承诺：“您的帐号信息是绝对安全，不会被泄漏或外用！</p>
          <p><br></p>
        </div>
      </div>
      <div :style="{display:handpages==4 ? 'block':'none'}" class="page">
        <h2><span>联系我们</span></h2>
        <div class="financingContentC">
          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            客服中心全年无休，提供365天每天24小时的全天候优质服务。如果您对我们有任何操作及相关问题，您可以在( 帮助中心
            )中找到答案，如果您仍然有任何疑惑，可以随时洽询我们的24小时在线客服，或使用Email与客服人员取得联系我们的客服人员将于24小时内与您联系。</p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            &nbsp;</p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            联系方式</p>

          <p style="margin:0px 0px 10.5px; text-align:start; -webkit-text-stroke-width:0px"><span
            style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);line-height:28px;margin-bottom:0px;margin-top:0px;min-height:16px;padding:0px;white-space:normal;">客服经理QQ：</span><span
            style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0); margin-bottom:0px; margin-top:0px; padding:0px"><span
            style="line-height:28px"><span style="min-height:16px"><span style="white-space:normal">
                                        <font face="宋体">
                                            <font style="box-sizing:border-box">1538956789</font>
                                        </font>
                                    </span></span></span></span></p>

          <p><span
            style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);line-height:28px;margin-bottom:0px;margin-top:0px;min-height:16px;padding:0px;white-space:normal;">代理经理QQ：<font
            face="宋体">
                                <font style="box-sizing: border-box;">1528956789</font>
                            </font></span></p>

          <p>客服经理微信：<span
            style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);line-height:28px;margin-bottom:0px;margin-top:0px;min-height:16px;padding:0px;white-space:normal;">jlcp777 &nbsp;&nbsp;</span>
          </p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            代理经理微信：<span
            style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);line-height:28px;margin-bottom:0px;margin-top:0px;min-height:16px;padding:0px;white-space:normal;">jlcp77</span>
          </p>

          <p
            style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 28px; min-height: 16px;">
            代理业务E-Mail：nn500@tgjt888.com</p>

          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        handpages: this.$route.query.p_id || 1
      }
    },
    beforeRouteUpdate (to, from, next) {
      this.handpages = to.query.p_id
      next()
    }
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    background: url(/static/jlcp/img/bootomBG.jpg);
    padding: 27px 0;

    .wrapper {
      width: 1000px;
      height: 100%;
      margin: auto;

      .menu {
        width: 176px;
        float: left;
        padding-right: 24px;

        li {
          width: 175px;
          height: 80px;
          border: 1px solid #909090;
          margin-bottom: 10px;
          font-size: 20px;
          line-height: 80px;
          cursor: pointer;

          a {
            display: block;
            border-left: 10px solid #db2552;
            color: #000;
            padding-left: 10px;
            text-decoration: none;
          }

          a.ab-active {
            color: #fff;
            background: #3b3a39;
          }
        }
      }

      .page {
        float: right;
        width: 800px;
        min-height: 600px;
        box-sizing: border-box;
        border: 1px solid #afafaf;

        h2 {
          font-size: 22px;
          line-height: 44px;
          border-bottom: 1px solid #909090;
          font-weight: normal;
          text-indent: 20px;

          span {
            border-bottom: 4px solid #db2552;
            display: inline-block;
            padding: 0 12px;
            margin-bottom: -1px;
          }
        }

        .financingContentC {
          padding: 25px 20px;

          p {
            line-height: 20px;
          }
        }
      }
    }
  }
</style>
