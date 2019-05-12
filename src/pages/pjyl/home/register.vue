<template>
  <div class="register">
    <div class="about-banner">
      <News></News>
    </div>
    <!-- <loginBox @showPage="updatePage"></loginBox> -->


    <div class="wrapperbox">



     <div class="abount-main">
      <div class="w1200 clearfix">
        <div class="cont-left fl">
          <ul>
            <li><a href="javascript:void(0);" @click="page='register'">注册会员</a></li>
            <li><a href="javascript:void(0);" @click="page='about'">关于我们</a></li>
            <li><a href="javascript:void(0);" @click="page='lianxi'">联系我们</a></li>
            <li><a href="javascript:void(0);" @click="page='cooperation'">合作伙伴</a></li>
            <li><a href="javascript:void(0);" @click="page='deposit'">存款帮助</a></li>
            <li><a href="javascript:void(0);" @click="page='withdraw'">取款帮助</a></li>
            <li><a href="javascript:void(0);" @click="page='questions'">常见问题</a></li>
          </ul>
        </div>

        <div class="cont-right fr">
          <div class="page" v-show="page=='register'">
            <p class="title">会员注册</p>
            <div class="content">
              <fieldset>
                <legend class="join-acc">注册帐号</legend>
                <div class="row">
                  <label><span class="star">*</span>帐号:</label>
                  <input type="text" maxlength="10" v-model="userName" @blur="getCode" @keydown="pulicError=''"
                         v-on:keyup.enter="submitRegister">
                  <div class="remark">帐号：6-10位数字或字母，支持纯数字，纯字母，及数字与字母的组合</div>
                </div>
                <div class="row">
                  <label><span class="star">*</span>密码:</label>
                  <input type="password" maxlength="20" v-model="password" @keydown="pulicError=''"
                         v-on:keyup.enter="submitRegister">
                  <div class="remark">密码:8-20位数字或字母，支持纯数字，纯字母，及数字与字母的组合</div>
                </div>
                <div class="row">
                  <label><span class="star">*</span>确认密码:</label>
                  <input type="password" maxlength="20" v-model="register_password" @keydown="pulicError=''"
                         v-on:keyup.enter="submitRegister">
                </div>
                <div class="row">
                  <label><span class="star">*</span>验证码:</label>
                  <input type="text" v-model="code" @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
                  <img class="checkLoginCodeImage" :src="codeImg" @click="getCode">
                </div>
                <div class="row" v-if='iscode'>
                  <label><span class="star">*</span>邀请码:</label>
                  <!-- <input type="text" v-model="intacode" @keydown="pulicError=''" v-on:keyup.enter="submitRegister" :disabled="hasAgent"> -->


                   <!-- 只读注册 -->
                  <input @keydown="pulicError=''" v-on:keyup.enter="submitRegister" placeholder="邀请码" type="text"
                     v-model="intacode"  :readonly="incodeReadonly" id="incode">





                </div>
              </fieldset>
              <fieldset v-if="register.length">
                <legend class="join-acc">会员资料</legend>
                <div class="row" v-for="(item,index) in register" :key="index">
                  <label><span class="star">*</span>{{item.name}}:</label>
                  <input type="text" :placeholder="item.placeholder" v-model="item.value" maxlength="16"
                         @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
                </div>
              </fieldset>
              <div class="agree">
                <input type="checkbox" name="agree" v-model="agree">
                我已届满合法博彩年龄﹐且同意各项开户条约。
              </div>
              <br>
              <div class="err" v-if="pulicError">
                <i class="iconfont icon-baojing"></i>
                <span ref="pulicError">{{pulicError}}</span>
              </div>
              <div class="operate">
                <a class="btn" @click="submitRegister">确认</a>
                <a class="btn" @click="submitReset">重设</a>
              </div>

              <div class="row tip_info">
                <p>备注：</p>
                <p>1.标记有 * 者为必填项目。</p>
                <p>2.取款密码为取款时的凭证,请会员务必仔细填写。</p>
              </div>
            </div>
          </div>
          <div class="page" v-show="page=='about'">
            <p style="margin-bottom: 30px; font-size: 20px;">关于我们</p>
            <div class="case-article-content">
              <p><span style="font-family: verdana, geneva, sans-serif">品牌信誉-首选葡京娱乐，<strong><span style="color: #ffff00">最具公信力的博彩公司、更有高质量的游戏平台

                    </span></strong>，葡京娱乐为菲律宾马尼拉注册之博彩公司之一。公司不仅拥有市场上最多元化的游戏投注平台，同时为客户提供实时、刺激、高信誉的服务保证、高质量的游戏平台

                  ，也是公司的首要宗旨。在日渐热络、成熟的网络博彩市场中，除了多元化的游戏外，网络安全最为客户注重，公司针对现阶段网络安全问题，成立了网络安全维护中心，彻底为客户的网络

                  安全解决了后顾之忧，诺顿分级评级审核"葡京娱乐"为最安全网站之一，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家所有隐私。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">诚信为本：</span></strong></p>
              <p><span style="font-family: verdana, geneva, sans-serif">全网最高信誉，从葡京娱乐开始！作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的

                  博彩娱乐，以及全方位的服务。我们采用坚实、稳定与安全的博彩系统。所有游戏共同的优点 — 不须耗时下载；界面简单明了；操作功能齐全；画面精致优雅；游戏结果公平、公正、公开

                  ！由于您的信息保密度至关重要。我们将坚持实行严格保密和隐私制度。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">多元化游戏：</span></strong></p>
              <p><span style="font-family: verdana, geneva, sans-serif">除了体育游戏项目多元化外，全方位提供：香港六合彩，时时彩，快乐彩等。精挑细选各种在线游戏，给您提供最好的选择

                  。真人荷官及现场娱乐也是无可挑剔的，信誉可靠：设有 7×24小时进行在线监测，确保每一局游戏结果均为现场真实的游戏结果，而不是计算机默认的游戏结果，在我们的真人娱乐城，您

                  可饱览整个赌场大厅和靓丽的美女荷官。玩法众多如真人百家乐，真人骰宝，真人龙虎以及真人轮盘。您也可以选择容易上手的KENO快乐彩消遣时光。。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">大赢家</span></strong></p>
              <p><span
                style="font-family: verdana, geneva, sans-serif">在葡京娱乐的用户都是大赢家，我们将不间断的推出更多优惠，以实际、简单的申请方式迎待各来宾！。</span>
              </p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">慈善公益</span></strong></p>
              <p><span
                style="font-family: verdana, geneva, sans-serif">葡京娱乐更肩负起对社会、对慈善公益的责任，也将永不磨灭的针对社会的需要作出更多的贡献。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">客户服务：</span></strong></p>
              <p><span style="font-family: verdana, geneva, sans-serif">在竞争激烈的博彩市场中，葡京娱乐向来是众多玩家一致的明理选择，除了有多元化的娱乐产品使人流连忘返、更有高质

                  量的服务以及葡京娱乐长久以来的良好信誉在广大玩家群众之间建立了口碑。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">我们为客户提供最专业的娱乐服务：</span></strong></p>
              <p><span style="font-family: verdana, geneva, sans-serif">1、365天×24小时专业的客户服务，全天候处理会员出入款的相关事宜，严格训练的客服团队，以专业、亲切的态度，让每

                  位玩家有宾至如归的感觉!</span></p>
              <p><span style="font-family: verdana, geneva, sans-serif">2、多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；</span></p>
              <p><span style="font-family: verdana, geneva, sans-serif">3、举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">游戏责任：</span></strong></p>
              <p><span style="font-family: verdana, geneva, sans-serif">葡京娱乐提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</span></p>
              <p><span style="font-family: verdana, geneva, sans-serif">• 禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。</span>
              </p>
              <p><span style="font-family: verdana, geneva, sans-serif">• 自定博彩预算，幷按预算下注。</span></p>
              <p><strong><span style="font-family: verdana, geneva, sans-serif">帐号与资金：</span></strong></p>
              <p><span style="font-family: verdana, geneva, sans-serif">玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进

                  行。进入玩家帐号数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提

                  供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们绝不会向第三方（包括政府）透露客户数据。</span></p>
              <p><span style="font-size: 14px"><strong><span style="font-family: verdana, geneva, sans-serif">葡京娱乐更专注于玩家的利益、最给力的优惠活动时时回馈各新老会员用户。

                      品牌信誉，首选葡京娱乐！</span></strong></span></p>
            </div>
          </div>
          <div class="page" v-show="page=='lianxi'">
            <p style="margin-bottom: 30px; font-size: 20px;">联系我们</p>
            <div class="article">
              <p><span style="font-family: verdana, geneva, sans-serif">葡京娱乐的客服中心全年无休，提供1周7天、每天24小时的优质服务。</span></p>
              <p><span style="font-family: verdana, geneva, sans-serif">如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务
                点击"在线客服"链接，即可进入在线客服系统与客服人员联系。</span></p>
            </div>
          </div>

          <div class="page" v-show="page=='cooperation'">
            <p style="margin-bottom: 30px; font-size: 20px !important;">合作伙伴</p>
            <div class="case-article-content">
              <div id="Union">
                <ul class="mtab-menual" style="">
                  <li id="#Union1" class="mtab">联盟方案</li>
                  <li id="#Union2">联盟协议</li>
                </ul>
                <div id="Union1">
                  <p>
                    葡京娱乐彩票，与AG进行技术合作，拥有菲律宾合法注册之博彩公司。拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们自豪的提供会员最优惠的回
                    馈，给予合作伙伴最优势的营利回报! 无论您拥有的是网络资源，或是人脉资源，都欢迎您来加入葡京娱乐彩票合作伙伴的行列，无须负担任何费用，就可以开始无上限的收入。葡京娱乐彩票，绝对是您最聪明的选择!</p>
                  <p>
                    ?注册申请<br>
                    请点击[代理注册]在线提出申请，填写正确的各项数据，邮箱，手机，名字必须写真实的，方便以后支付给您佣金，如果以后在支付佣金的时候发现数据错误，一律不给予支付佣金。<br>
                    请代理注册成功之后，编辑您以后要领取彩金的银行帐号,银行账号,代理帐号,发送到邮箱,我们进行绑定,每个月系统就会自动把佣金转到您提供的银行帐号上,请代理要
                    更改银行帐号的,必须提前一个星期联系在线客服进行修改，否则本公司一律不负责。葡京娱乐彩票会评估审核联盟申请讯息，3日内由专员与您联系开通，并提供您的注册帐号、密码及推广链接。</p>
                  <table border="1" cellpadding="0" cellspacing="0" style="width: 593px;" width="593">
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
                      注：葡京娱乐彩票保留上述条例之最终更改权！<br>
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
                    <span style="color: #ff0000;">●相应费用包括：会员各项优惠、存/取款相应手续费(请留意：葡京娱乐彩票会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。</span><br>
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
                <div id="Union2" style="display: none;">
                  <p>
                  </p>
                  <p>
                    <strong>一、葡京娱乐彩票对代理联盟的权利与义务</strong></p>
                  <ol>
                    <li align="left">葡京娱乐彩票的客服部会登记联盟的会员并会观察他们的投注状况。联盟及会员必须同意并遵守葡京娱乐彩票的会员条例，政策及操作程序。葡京娱乐彩票保留拒绝或冻结联盟/会员帐号权利
                    </li>
                    <li align="left">代理联盟可随时登入接口观察旗下会员的下注状况及会员在网站的活动概况。 葡京娱乐彩票的客服部会根据代理联盟旗下的会员计算所得的佣金。</li>
                    <li align="left">葡京娱乐彩票保留可以修改合约书上的任何条例，包括: 现有的佣金范围、佣金计划、付款程序、及参考计划条例的权力，葡京娱乐彩票会以电邮、网站公告等方法通知代理联盟。
                      代理联盟对于所做的修改有异议，代理联盟可选择终止合约，或洽客服人员反映意见。 如修改后代理联盟无任何异议，便视作默认合约修改，代理联盟必须遵守更改后的相关规定。
                    </li>
                  </ol>
                  <p align="left">
                    <strong>二、代理联盟对葡京娱乐彩票的权力及义务</strong></p>
                  <ol>
                    <li align="left">
                      代理联盟应尽其所能，广泛地宣传、销售及推广葡京娱乐彩票，使代理本身及葡京娱乐彩票的利润最大化。代理联盟可在不违反法律下，以正面形象宣传、销售及推广葡京娱乐彩票，并有责任义务告知旗下会员所有葡京娱乐彩票的相关优惠条件及产品。
                    </li>
                    <li align="left">代理联盟选择的葡京娱乐彩票推广手法若需付费，则代理应承担该费用。</li>
                    <li align="left">任何葡京娱乐彩票相关信息包括: 标志、报表、游戏画面、图样、文案等，代理联盟不得私自复制、公开、分发有关材料，澳门巴黎人保留法律追诉权。
                      如代理在做业务推广有相关需要，请随时洽澳门巴黎人。
                    </li>
                  </ol>
                  <p align="left">
                    <strong>三、规则条款</strong></p>
                  <ol>
                    <li align="left">
                      各阶层代理联盟不可在未经葡京娱乐彩票许可情况下开设双/多个的代理帐号，也不可从葡京娱乐彩票人帐号或相关人士赚取佣金。请谨记任何阶层代理不能用代理帐号下注，葡京娱乐彩票有权终止并封存帐号及所有在游戏中赚取的佣金。
                    </li>
                    <li align="left">
                      为确保所有葡京娱乐彩票会员帐号隐私与权益，葡京娱乐彩票不会提供任何会员密码，或会员个人资料。各阶层代理联盟亦不得以任何方式取得会员数据，或任意登入下层会员帐号，如发现代理联盟有侵害葡京娱乐彩票会员隐私行为，葡京娱乐彩票有权取消代理联盟红利，并取消代理联盟帐号。
                    </li>
                    <li align="left">
                      代理联盟旗下的会员不得开设多于一个的帐号。葡京娱乐彩票有权要求会员提供有效的身份证明以验证会员的身份，并保留以IP判定是否重复会员的权利。如违反上述事项，葡京娱乐彩票有权终止玩家进行游戏并封存帐号及所有于游戏中赚取的佣金
                    </li>
                    <li align="left">代理联盟不可为自己或其他联盟下的有效投注会员,只能是公司直属下的有效投注会员,
                      代理每月需有5个下线有效投注（有效投注为每周至少上线3次进行正常投注），如有违反联盟协议葡京娱乐彩票有权终止并封存帐号及所有在游戏中赚取的佣金。
                    </li>
                    <li align="left">
                      如代理联盟旗下的会员因为违反条例而被禁止享用葡京娱乐彩票的游戏，或葡京娱乐彩票退回存款给会员，葡京娱乐彩票人将不会分配相应的佣金给代理联盟。如代理联盟旗下会员存款用的信用卡、银行资料须经审核，澳门巴黎人保留相关佣金直至审核完成。
                    </li>
                    <li align="left">
                      合约内的条件会以葡京娱乐彩票通知接受代理联盟加入后开始执行。葡京娱乐彩票及代理联盟可随时终止此合约，在任何情况下，代理联盟如果想终止合约，都必须以书面/电邮方式提早于七日内通知澳门巴黎人。
                      代理联盟的表现会3个月审核一次，如代理联盟已不是现有的合作成员则本合约书可以在任何时间终止。如合作伙伴违反合约条例，葡京娱乐彩票有权立即终止合约。
                    </li>
                    <li align="left">
                      在没有葡京娱乐彩票许可下，代理联盟不能透露及授权葡京娱乐彩票相关密数据，包括代理联盟所获得的回馈、佣金报表、计算等;代理联盟有义务在合约终止后仍执行机密文件及数据的保密。
                    </li>
                    <li align="left">在合约终止后，代理联盟及葡京娱乐彩票将不须要履行双方的权利及义务。终止合约并不会解除代理联盟于终止合约前应履行的义务。</li>
                  </ol>
                </div>
              </div>
              <br>
            </div>
          </div>
          <div class="page" v-show="page=='deposit'">
            <p style="margin-bottom: 30px; font-size: 20px !important;">存款帮助</p>
            <div class="case-article-content">
              <div>
                <p>
                </p>
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
                  如入款帐号已过期，葡京娱乐恕不负责！万请见谅，感谢配合。<br>
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
                  2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便澳门巴黎人客服第一时间与您联系。<br>
                  3. 选择”支付银行”。<br>
                  支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br>
                  4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。<br>
                  5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的葡京娱乐会员帐号。<br>
                  <br>
                  存款需知:<br>
                  葡京娱乐最低存款为$100人民币，最高存款无上限!<br>
                  未开通网银的会员，请亲洽您的银行柜台办理。<br>
                  如有任何问题，请洽24小时在线客服。</p>
              </div>
              <br>
            </div>
          </div>
          <div class="page" v-show="page=='withdraw'">
            <p style="margin-bottom: 30px; font-size: 20px !important;">取款帮助</p>
            <div class="case-article-content">
              <p>
              </p>
              <p>
                ? <strong>您可以通过以下方式取款：</strong></p>
              <ol>
                <li align="left">会员登入后点选“在线取款”。</li>
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
                <li align="left">最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。
                </li>

                <li align="left">葡京娱乐保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。</li>
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
                **葡京娱乐相关优惠，请详见‘优惠活动’</p><br>
            </div>
          </div>
          <div class="page" v-show="page=='questions'">
            <p style="margin-bottom: 30px; font-size: 20px !important;">常见问题</p>
            <div class="case-article-content">
              <div id="Union">
                <ul class="mtab-menual" style="">
                  <li id="#Union1" class="mtab">一般常见问题</li>
                  <li id="#Union2">游戏及投注问题</li>
                  <li id="#Union3">
                    技术常见问题
                  </li>
                </ul>
                <div id="Union1">
                  <p>
                    Q1: 如何加入葡京娱乐？</p>
                  <p align="left">
                    A1: 您可以直接点选 立即加入，确实填写资料后，可立即登记成为葡京娱乐会员。<br>
                    <br>
                    Q2: 我可以直接在网络上存款吗？<br>
                    A2: 可以，葡京娱乐提供多种在线存款选择，详情请参照 存款须知。</p>
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
                <div id="Union2" style="display: none;">
                  <p>
                    Q1: 请问我在哪边可以找到游戏规则？</p>
                  <p align="left">
                    A1: 在你为登入之前，你可以在各个游戏项目内，看见游戏规则的选项，清楚告知游的玩法、规则及派彩方式。
                    在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</p>
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
                <div id="Union3" style="display: none;">
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
    </div>



    </div>

  </div>
</template>

<script>
  import store from '@/vuex/store'
  import UserService from '@/service/public/UserService'
  import News from './news'
  // import loginBox from './loginBox'
  import { _SetPost, postS, getS } from '@/service/public/service.js'

  export default {
    components: {
       News,
      //  loginBox
    },
    data () {
      return {
        page: 'register',
        register: [],
        codeImg: '/static/pjyl/img/pjyl/code.jpg',
        captcha_key: '',
        userName: '',
        password: '',
        register_password: '',
        code: '',
        agree: false,
        pulicError: '',
        agent: null,
        iscode: false,
        hasAgent: false,
        intacode: '',
         // 邀请码只读
        incodeReadonly:false,
        id:1
      }
    },
    created () {
      console.log(this.$route)
      this.id = this.$route.query.id;
      switch(this.id){
        case 1:
        this.page='about'
        break;
        case 2:
        this.page='lianxi'
        break;
        case 3:
        this.page='cooperation'
        break;
        case 4:
        this.page='deposit'
        break;
        case 5:
        this.page='withdraw'
        break;
        case 6:
        this.page='questions'
        break;
        default:
        this.page='register'
        break;
      }
      this.intacode = this.GetQueryString('agent') || this.GetQueryString('k') || localStorage.agent
      console.log(this.intacode)
      if (this.intacode) {
        this.hasAgent = true
      }

    this.agent = this.GetQueryString('agent')||this.GetQueryString('k');
    // let register = JSON.parse(localStorage.getItem('config')).register.pc
    // let registermodel = JSON.parse(localStorage.getItem('config')).site_model
    //     if(registermodel=='invite_code'){
    //         this.iscode=true;
    //     }else{
    //       this.iscode=false;
    //     }


      let register = JSON.parse(localStorage.getItem('config')).register.pc
      let registermodel = JSON.parse(localStorage.getItem('config')).site_model
      if (registermodel == 'invite_code') {
        this.iscode = true
      } else {
        this.iscode = false
      }
      register.forEach((v, i) => {
        this.register[i] = {}
        switch (v) {
          case 'phone':
            this.register[i].placeholder = '请输入手机号'
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '手机号'
            break
          case 'email':
            this.register[i].placeholder = '请输入邮箱地址'
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '邮箱'
            break
          case 'wechat':
            this.register[i].placeholder = '请输入微信号'
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '微信'
            break
          case 'realName':
            this.register[i].placeholder = '请输入真实姓名'
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '真实姓名'
            break
          case 'payPassword':
            this.register[i].placeholder = '请输入支付密码'
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '支付密码'
            break
        }
      })
    },
     mounted(){
      // 邀请码只读
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
      // 邀请码只读
    },
    methods: {
      kefu () {
        let service = JSON.parse(localStorage.config).service
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url)
          }
        }
      },
      // updatePage (data) {//触发子组件城市选择-选择城市的事件
      //   this.page = data//改变了父组件的值
      // },
      getCode () {
        if (!this.userName) {
          alert('请输入帐号！')
          return false
        }

        getS(`captcha`, { userName: this.userName }).then(res => {
          if (res.code == 200) {
            this.codeImg = res.data.captcha_image_text
            this.captcha_key = res.data.captcha_key
          }
        })
      },
      submitReset () {
        this.userName = ''
        this.password = ''
        this.register_password = ''
        this.code = ''
        this.register &&
        this.register.forEach(item => {
          item.value = ''
        })
      },
      submitRegister () {
        let staueAcc = this.validateAccountUserNamenew(this.userName)
        let stauePassword = this.validateAccountnew(this.password)
        if (!staueAcc) {
          this.pulicError = '帐号 6-10位数字或字母'
          return false
        }
        if (!stauePassword) {
          this.pulicError = '密码 8-20位数字或字母'
          return false
        }
        if (this.password !== this.register_password) {
          this.pulicError = '两次密码不一致'
          return false
        }
        if (this.code == '') {
          this.pulicError = '请输入验证码'
          return false
        }
        if (this.code.length < 4 || this.code.length > 4) {
          this.pulicError = '请输入4位验证码'
          return false
        }

        if (!this.agree) {
          this.pulicError = '请点击同意才可以进行注册！'
          return false
        }

        let params = {}
        params.userName = this.userName
        params.password = this.password
        params.device = 'pc'
        params.code = this.code
        params.captcha_key = this.captcha_key
        let flag = true
        if (this.intacode) {
          params.invite_code = this.intacode
        }
        for (let i = 0; i < this.register.length; i++) {
          if (!this.register[i].value) {
            this.pulicError = this.register[i].placeholder
            flag = false
            break
          }
          params[this.register[i].key] = this.register[i].value
        }

        if (this.agent) {
          params.agent = this.agent
        }
        if (!flag) {
          return false
        }

        this.$http
          .post(`${this.$HOST_NAME}/checkUsername/${this.userName}`, {})
          .then(res => {
            if (res && res.code == 200) {
              postS(`register`, params).then(res => {
                if (res.code == 200) {
                  UserService.setCache(res, 'v1')
                  this.$http
                    .post(`${this.$HOST_NAME}/member/refundInfo`)
                    .then(res => {
                      let refund = res.data.platform
                      // this.refundData = refund;
                      localStorage.setItem('refund', JSON.stringify(refund))
                    })
                  setTimeout(() => {
                    // alert('注册成功')
                    window.location.href = '/'
                  }, 500)
                } else {
                  // alert(res.message)
                  this.pulicError=res.message
                }
              })
            } else {
              this.pulicError = '帐号已存在'
              return false
            }
          })
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  @h: 25px;
  @font-size: 13px;
  .register {
    background:#c89752;
    .about-banner {
      min-height: 291px;
      background: url(/static/pjyl/img/pjyl/livebanner.jpg) center no-repeat;
      position:relative;
    }

    .wrapperbox{
      width:100%;
      background: url(/static/pjyl/img/pjyl/content_bg.jpg) no-repeat top center;
      margin-top:36px;
     .abount-main {
      padding: 40px 0px;
      // background: #dddddd;
      width:1000px;
      margin:0 auto;
      padding-top:80px;
      .clearfix:after{
        clear:both;
        content:'';
        display:block;
      }

      .cont-left {
        // width: 258px;
        // height: 735px;
        // min-height: 735px;
        // max-height: 1381px;
        // background: #ffffff;

        position: relative;
        float: left;
        width: 266px;
        min-height: 735px;
        max-height: 1381px;
        padding: 100px 20px 0;
        background: #e2b67a url(/static/pjyl/img/pjyl/index/aside_title01.png) no-repeat 20px 20px;

        li {
          border-top: 2px solid #866435;
          a {
            display: block;
            width: 100%;
            height: 45px;
            line-height: 45px;
            text-align: center;
            color: #222;

          }

          a:hover {
            // background-color: #eb0c0d;
            color: #fff;
          }
        }
        li:first-child{
          border:0;
        }
      }

      .cont-right {
        min-height: 735px;
        width: 727px;
        padding: 20px 50px;
        background: rgba(4,14,27,.4);
        letter-spacing: 2px;
        li{
          color:#fff;
          margin:10px 0;
        }
        td {
          border: 1px solid #000;
        }

        p.title {
          font-size: 24px;
          text-indent: 75px;
        }

        p {
          line-height: 22px;
          color:#ffcc99;
        }

        .content {
          width: 635px;
          margin: auto;
          margin: 40px auto;

          fieldset {
            border: 1px solid #b48d3e;
            margin: 10px;
            padding: 10px;
            width: 616px;

            legend {
              font-size: @font-size;
              color: #b48d3e;
              font-weight: bold;
            }
          }

          .row {
            clear: both;
            overflow: hidden;
            margin-top: 10px;
            width: 100%;
            font-size: @font-size;

            label {
              display: inline-block;
              width: 135px;
              height: @h;
              text-indent: 10px;
              line-height: @h;
              color: #fff;
              text-align: right;
              padding-right: 10px;

              .star {
                color: #f00;
                font-weight: bold;
                vertical-align: -2px;
              }
            }

            input {
              height: @h;
              line-height: @h;
              border: 1px solid #666666;
              border-radius: 3px;
              box-shadow: 0 0 6px #3a3a3a;
              text-indent: 10px;
            }

            .remark {
              height: @h;
              line-height: @h;
              color: #fff;
              text-indent: 140px;
              margin-top: 10px;
            }

            img {
              margin-left: 5px;
              cursor: pointer;
              width: 78px;
              height: @h;
              vertical-align: middle;
            }
          }

          .agree {
            padding-left: 20px;
            height: @h;
            line-height: @h;
            color: #fff;
            font-size: @font-size;

            input {
              width: 15px;
              height: 15px;
              vertical-align: middle;
            }
          }

          .err {
            color: red;
            margin-left: 16px;
          }

          .operate {
            width: 100%;
            margin: auto;
            text-align: center;
            margin-top: 10px;

            .btn {
              display: inline-block;
              width: 80px;
              height: 40px;
              color: #000;
              background: #fff;
              line-height: 40px;
              text-align: center;
              font-size: 16px;
              box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
              border: none;
              margin: 10px 0;
              cursor: pointer;
              transition: background 0.1s ease-in-out;
              border-radius: 3px;
            }
          }

          .tip_info {
            p {
              font-size: 13px;
              height: @h;
              line-height: @h;
              padding-left: 20px;
              color: #fff;
            }
          }
        }
      }
    }


    }


  }

</style>
