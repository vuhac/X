<template>
  <div class="maincontainer" style="background:#f8f8f8;">
    <div class="main">
      <div class="content">
        <div style="width: 1000px; margin: 0 auto; padding: 20px 22px; background-color: #fff; box-sizing: content-box;">
          <div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="daili"><img
                src="/static/cjw/img/youhui/daili.png"/></a>
              <div class="Content_box" style="display: none;" id="img_daili">
                <div class="promotContent">
                  <h2 class="con_title">一、金字塔无限层层代</h2>
                  <p>1.代理除了可以拿自己下级的返点差，也可以获得下级的下级所带来的返点差</p>
                  <p>2.一级代理可以给下级设置低于自己的返点比例，也只有下级的返点比例比自己的低，才能获得下级投注给你带来的返点</p>
                  <h2 class="con_title">二、新无限代双向返点</h2>
                  <p>传统的层层代理模式，只有会员下注中奖的时候，上级代理才能获得对应的返点，我们新无限层层代模式，改变了传统的思维方式，无论下级会员投注是否中奖，只要是产生了有效投注，无论是否中奖，都可以获得对应的返点</p>
                  <h2 class="con_title">三、下级的赔率计算方法</h2>
                  <p>假如平台是最高返点比例1.5%，如果你给下级设置的1.0%的返点比例对应的赔率是9.95，那么你的下级赔率是：（1-（平台最高返点比例-下级用户返点比例）*平台最高赔率 <br>
                    例如：（1-（0.15-0.01）*9.95=0.995*9.95=9.90025 <br>
                    既你设置的1%的返点比例对应的赔率是9.90025</p>
                  <h2 class="con_title">四、如何计算下级产生的返点</h2>
                  <p>同样是以上级给下级设置的1%的返点比例去计算 <br>
                    返点计算（上级返点比例-下级返点比例）*投注金额 <br>
                    假如你的返点比例是1.5%你给下级设置的返点比例是1%。下级有效打码10000（无论输赢，有效打码），那么上级能拿到返点金额是（0.015-0.01）*10000=50元</p>
                  <p>注：为了金字塔层层代有效长远发展，上级给下级最高开到比自己低0.1的赔率，给下及有效发展下级的空间!</p>
                  <p>例如：</p>
                  <p>1.A代理赔率9.95，给下级开了9.85的赔率，既A发展了10个下级，各自打码1万。10*10000=10万打码量，A代理获得的佣金是100000*0.1=1000元佣金！</p>
                  <p>2.B代理赔率9.95，给A开了9.9赔率，既A发展了10个下级代理各自打码1万，这10个9.9的下级同样各自发展了10个9.85的下级，也是每个人打码1万 <br>
                    同样是开到了9.85的赔率，那么B获得的代理佣金就是直属下级的打码10万*0.5%+直属下级的10*10*10000*0.5=1000000*0.5=5000元，共计5500元代理佣金 <br>
                    以此类推，给自己下级发展空间，给自己带来的利益是多少，长远发展建议给下级一定的发展空间</p>
                  <h2 class="con_title">优惠规则与条款</h2>
                  <p>1.所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间；</p>
                  <p>2.每位玩家﹑每户﹑每一住址、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行帐号)
                    及IP地址只能享有一次优惠；若会员有重复申请帐号行为，公司保留取消或收回会员优惠彩金的权利；</p>
                  <p>3.彩经网的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利；</p>
                  <p>4.若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，彩经网有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；</p>
                  <p>5.当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团队或个人投下一连串的关联赌注，借以造成无论赛果怎样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，彩经网保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；</p>
                  <p>6.彩经网保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。</p>
                </div>

              </div>
            </div>

            <!--<div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="xhy"><img
                src="/static/cjw/img/youhui/xhy.png"/></a>
              <div class="Content_box" style="display: none;" id="img_xhy">
                <div class="promotContent">
                  <h2 class="con_title">活动内容</h2>
                  <p>感恩回馈者会员的同时，彩经网欢迎更多的新会员加入我们，现在起只要您加入彩经网并完成首次充值100元以上，即可获得彩经网派送的18元幸运彩金，老品牌值得信赖!!</p>
                  <h2 class="con_title">活动说明</h2>
                  <p>1、18元幸运彩金只需1倍下注即可提款，每一 位会员只能申请一次。</p>
                  <p>2、符合申请条件的会员请在成功存款后未进行投注前提出申请，如已进行投注，则申请视为无效。</p>
                  <p>3、 彩经网的所有优惠特为玩家而设，如果发现任何团队或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人及帐号余额的权利。</p>
                  <p>4、若会员活动有争议时，为确保双方利益。杜绝身份盗用行为，彩经网有权要求会员向我们提供充足有效的证件，用以确认是否享有该优惠。</p>
                  <p>5、此活动可与其他优惠同时进行享用。</p>
                  <p>6、彩经网保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
                  <p>7、参与该优惠，即表示您同意(优惠规则)。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合申请条件的会员请在成功存款后未进行投注咨询”彩经网24小时在线客服”进行申请，彩金将会在第一-时间受理派送18元幸运彩金，由于申请的会员人数较多，如有耽搁延误，敬请谅解!</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1.所有优惠以人民币(CNY)结算，以北京时间(EDT) 为计时区间。</p>
                  <p>2.每位玩家、住址、电子邮箱、电话号码、相同支付方式(相同借记卡/信用卡/银行帐号)及IP地址只能享有一次优惠若会员有重复申请帐号行为，公同保留取消或收回会员优惠活动的权利。</p>
                  <p>3.彩经网的所有优惠特为玩家而设，如发现任何团体/个人，以任何方式进行套取公司红利或任何威胁、滥用公司优惠等行为，公司保留冻结，取消该团体/个人帐号及帐号结算的权利。</p>
                  <p>4.若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，彩经网有权要求会员向我们提供充足有效文件，确认是否享有该优惠的资格。</p>
                  <p>5.当参与优惠会员未能完全避守、或违反/滥用任何有关公司优惠或推广的条款，我们有任何证据有任何团队或个人投下一连串的关联赌注，及以造成无论赛事怎样都可以确保可以从该存款红利或其他推广活动中优惠获利，彩经网保留权利向此团队/个人停止，取消优惠或索回已领取的全部优惠红利。此外彩经网亦保留权利向这些客服扣去相当于优惠红利价值的行政费用，以补偿我们的行政成本。</p>
                  <p>6.彩经网保留对活动最终解释权，以及在无通知的情况下修改/终止活动的权利:适用于所有优惠。</p>
                </div>
              </div>
            </div>-->

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="niuniu"><img
                src="/static/cjw/img/youhui/niuniu.png"/></a>
              <div class="Content_box" style="display: none;" id="img_niuniu">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>长期</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>开元棋牌、天豪棋牌</p>
                  <h2 class="con_title">活动详情</h2>
                  <p>所有会员在开元棋牌或天豪棋牌的(抢庄牛牛)游戏中，单局抢庄成功并且“牛牛通吃”即可获得额外彩金奖励，爆冷通赔即可申请通赔“我"买单，最高8888元。</p>
                  <table border="1">
                    <tr>
                      <td>类型</td>
                      <td>单局盈利</td>
                      <td>额外彩金</td>
                      <td>类型</td>
                      <td>单局亏损</td>
                      <td>买单彩金</td>
                    </tr>
                    <tr>
                      <td rowspan="8">牛牛通吃</td>
                      <td>600+</td>
                      <td>12</td>
                      <td rowspan="8">爆冷通赔</td>
                      <td>500+</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>3000+</td>
                      <td>28</td>
                      <td>1000+</td>
                      <td>58</td>

                    </tr>
                    <tr>
                      <td>10000+</td>
                      <td>98</td>
                      <td>3000+</td>
                      <td>128</td>

                    </tr>
                    <tr>
                      <td>30000+</td>
                      <td>388</td>
                      <td>10000+</td>
                      <td>388</td>

                    </tr>
                    <tr>
                      <td>100000+</td>
                      <td>1888</td>
                      <td>30000+</td>
                      <td>1888</td>

                    </tr>
                    <tr>
                      <td>300000+</td>
                      <td>3888</td>
                      <td>100000+</td>
                      <td>3888</td>

                    </tr>
                    <tr>
                      <td>500000+</td>
                      <td>5888</td>
                      <td>300000+</td>
                      <td>5888</td>

                    </tr>
                    <tr>
                      <td>3000000+</td>
                      <td>8888</td>
                      <td>5000000+</td>
                      <td>8888</td>

                    </tr>
                  </table>
                  <h2 class="con_title">活动细则</h2>
                  <p>1、查询方式:登入会员帐号会员中心记录查询下注记录选择类型棋牌查询。</p>
                  <p>2、例:抢庄成功，牛牛通吃(庄家赢三个闲家)派彩3000+，提供当局主单号即可申领28元额外彩金。</p>
                  <p>3、例:抢庄成功，爆冷通赔(庄家赔三个闲家)亏损3000+，提供当局主单号即可申领128元买单彩金。</p>
                  <p>4、奖励只需一倍流水方可提款。</p>
                  <p>5、符合申请条件的会员请在北京时间当日联系在线客服进行申请，通吃与通赔北京时间每日限领共计三次。</p>
                  <h2 class="con_title">规则与条款</h2>
                  <p>1.所有优惠以人民币(CNY)结算，以北京时间(EDT) 为计时区间。</p>
                  <p>2.每位玩家、住址、电子邮箱、电话号码、相同支付方式(相同借记卡/信用卡/银行帐号)及IP地址只能享有一次优惠若会员有重复申请帐号行为，公同保留取消或收回会员优惠活动的权利。</p>
                  <p>3.彩经网的所有优惠特为玩家而设，如发现任何团体/个人，以任何方式进行套取公司红利或任何威胁、滥用公司优惠等行为，公司保留冻结，取消该团体/个人帐号及帐号结算的权利。</p>
                  <p>4.若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，彩经网有权要求会员向我们提供充足有效文件，确认是否享有该优惠的资格。</p>
                  <p>5.当参与优惠会员未能完全避守、或违反/滥用任何有关公司优惠或推广的条款，我们有任何证据有任何团队或个人投下一连串的关联赌注，及以造成无论赛事怎样都可以确保可以从该存款红利或其他推广活动中优惠获利，彩经网保留权利向此团队/个人停止，取消优惠或索回已领取的全部优惠红利。此外彩经网亦保留权利向这些客服扣去相当于优惠红利价值的行政费用，以补偿我们的行政成本。</p>
                  <p>6.彩经网保留对活动最终解释权，以及在无通知的情况下修改/终止活动的权利:适用于所有优惠。</p>
                </div>

              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qkds"><img
                src="/static/cjw/img/youhui/qkds.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qkds">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>长期</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>开元棋牌、天豪棋牌</p>
                  <h2 class="con_title">活动详情</h2>
                  <p>所有会员参与开元棋牌、天豪棋牌棋牌投注，当日累积投注达到要求，即可在次日联系在线客服中请通关彩金，最高88彩金奖励</p>
                  <table>
                    <tr>
                      <td>累积投注</td>
                      <td>彩金奖励</td>
                      <td>派送时间</td>
                    </tr>
                    <tr>
                      <td>1000+</td>
                      <td>8</td>
                      <td rowspan="12">次日（北京时间）<br/> <br/>24点之前联系在线客服申请</td>
                    </tr>
                    <tr>
                      <td>5000+</td>
                      <td>28</td>

                    </tr>
                    <tr>
                      <td>1万+</td>
                      <td>58</td>

                    </tr>
                    <tr>
                      <td>5万+</td>
                      <td>188</td>

                    </tr>
                    <tr>
                      <td>10万+</td>
                      <td>288</td>

                    </tr>
                    <tr>
                      <td>30万+</td>
                      <td>888</td>

                    </tr>
                    <tr>
                      <td>50万+</td>
                      <td>1288</td>

                    </tr>
                    <tr>
                      <td>100万+</td>
                      <td>1888</td>

                    </tr>
                    <tr>
                      <td>300万+</td>
                      <td>5888</td>

                    </tr>
                    <tr>
                      <td>500万+</td>
                      <td>8888</td>

                    </tr>
                    <tr>
                      <td>1000万+</td>
                      <td>18888</td>

                    </tr>
                    <tr>
                      <td>3000万+</td>
                      <td>88888</td>
                    </tr>
                  </table>
                  <h2 class="con_title">活动细则</h2>
                  <p>1、此活动只针对快速类彩有效投注额，彩金一倍流水取款。 </p>
                  <p>2、活动彩金申请时间，联系在线客服申请，过期未领取视为自动弃权。(本活动最终解释权归彩经网所有)。</p>
                  <h2 class="con_title">规则与条款</h2>
                  <p>1.所有优惠以人民币(CNY)结算，以北京时间(EDT) 为计时区间。</p>
                  <p>2.每位玩家、住址、电子邮箱、电话号码、相同支付方式(相同借记卡/信用卡/银行帐号)及IP地址只能享有一次优惠若会员有重复申请帐号行为，公同保留取消或收回会员优惠活动的权利。</p>
                  <p>3.彩经网的所有优惠特为玩家而设，如发现任何团体/个人，以任何方式进行套取公司红利或任何威胁、滥用公司优惠等行为，公司保留冻结，取消该团体/个人帐号及帐号结算的权利。</p>
                  <p>4.若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，彩经网有权要求会员向我们提供充足有效文件，确认是否享有该优惠的资格。</p>
                  <p>5.当参与优惠会员未能完全避守、或违反/滥用任何有关公司优惠或推广的条款，我们有任何证据有任何团队或个人投下一连串的关联赌注，及以造成无论赛事怎样都可以确保可以从该存款红利或其他推广活动中优惠获利，彩经网保留权利向此团队/个人停止，取消优惠或索回已领取的全部优惠红利。此外彩经网亦保留权利向这些客服扣去相当于优惠红利价值的行政费用，以补偿我们的行政成本。</p>
                  <p>6.彩经网保留对活动最终解释权，以及在无通知的情况下修改/终止活动的权利:适用于所有优惠。</p>
                </div>

              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="kscp"><img
                src="/static/cjw/img/youhui/kscp.png"/></a>
              <div class="Content_box" style="display: none;" id="img_kscp">
                 <div class="promotContent">
                  <h2 class="con_title">活动详情</h2>
                  <p>即日起到12.31日，娱乐彩票游戏：五分赛车、快速赛车、五分时时彩、三分时时彩、一分时时彩、快速快三的会员，只要你累计有效投注达到活动要求，即可获得对应的活动彩金，彩经网彩票24小时不打样，等的就是您来闯</p>
                  <table>
                    <tr>
                      <td>关卡</td>
                      <td>累计有效投注</td>
                      <td>可获彩金</td>
                    </tr>
                    <tr>
                      <td>第一关</td>
                      <td>1W</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>第二关</td>
                      <td>3W</td>
                      <td>288</td>
                    </tr>
                    <tr>
                      <td>第三关</td>
                      <td>5W</td>
                      <td>588</td>
                    </tr>
                    <tr>
                      <td>第四关</td>
                      <td>10W</td>
                      <td>888</td>
                    </tr>
                    <tr>
                      <td>第五关</td>
                      <td>20W</td>
                      <td>1888</td>
                    </tr>
                    <tr>
                      <td>第六关</td>
                      <td>50W</td>
                      <td>3888</td>
                    </tr>
                    <tr>
                      <td>第七关</td>
                      <td>100W</td>
                      <td>5888</td>
                    </tr>
                    <tr>
                      <td>第八关</td>
                      <td>300W</td>
                      <td>13888</td>
                    </tr>
                    <tr>
                      <td>第九关</td>
                      <td>500W</td>
                      <td>18888</td>
                    </tr>
                    <tr>
                      <td>第十关</td>
                      <td>1000W</td>
                      <td>38888</td>
                    </tr>
                  </table>
                  <h2 class="con_title">活动细则</h2>
                  <p>1、此活动只针对快速类彩有效投注额，彩金一倍流水取款。 </p>
                  <p>2、活动彩金申请时间，联系在线客服申请，过期未领取视为自动弃权。(本活动最终解释权归彩经网所有)。</p>
                  <h2 class="con_title">规则与条款</h2>
                  <p>1.所有优惠以人民币(CNY)结算，以北京时间(EDT为计时区间。</p>
                  <p>2.每位玩家、住址、电子邮箱、电话号码、相同支付方式(相同借记卡/信用卡/根行帐号)及IP地址只能享有一次优惠；若会员有重复申请帐号行为，公司保留取消或收回会员优惠活动的权利。</p>
                  <p>3.彩经网的所有优惠特为玩家而设，如发现任何团体/个人，以任何方式进行套取公司红利或任何威、滥用公司优惠等行为，公司保留冻结，取消该团体/个人帐号及帐号结算的权利。</p>
                  <p>4.若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，彩经网有权要求会员向我们提供充足有效文件，确认是否享有该优惠的资格。</p>
                  <p>5.当参与优会员未能完全遵守、或违反/濫用任何有关公司优惠或推广的条款，我们有任何证据有任何团队或个人投下一连串的关联赌注，及以造成无论赛事怎样都可以确保可以从该存款红利或其他推广活动中优患获利，彩经网保留权利向此团队/个人停止，取消优惠或索回已领取的全部优惠红利。此外彩经网亦保留权利向这些客服扣去相当于优惠红利价值的行政费用，以补偿我们的行政成本。</p>
                  <p>6.彩经网保留对活动最终解释权，以及在无通知的情况下修改/终止活动的权利；适用于所有优惠。</p>
                </div>

              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="ysf"><img
                src="/static/cjw/img/youhui/ysf.png"/></a>
              <div class="Content_box" style="display: none;" id="img_ysf">
                <img src="/static/cjw/img/youhui/ysfc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="zfb"><img
                src="/static/cjw/img/youhui/zfb.png"/></a>
              <div class="Content_box" style="display: none;" id="img_zfb">
                <img src="/static/cjw/img/youhui/zfbc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="wxx"><img
                src="/static/cjw/img/youhui/wxx.png"/></a>
              <div class="Content_box" style="display: none;" id="img_wxx">
                <img src="/static/cjw/img/youhui/wxxc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="wxsm"><img
                src="/static/cjw/img/youhui/wxsm.png"/></a>
              <div class="Content_box" style="display: none;" id="img_wxsm">
                <img src="/static/cjw/img/youhui/wxsmc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dns"><img
                src="/static/cjw/img/youhui/dns.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dns">
                <img src="/static/cjw/img/youhui/dnsc.png" alt="">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  data () {
    return {
      dateTime: 0
    }
  },
  methods: {
    refresh () {
      $('.menuHead').bind('click', function () {
        var hid = $(this).attr('id')
        var im = $('#img_' + hid)
        if (im.css('display') === 'none') {
          $('.Content_box').hide()
          im.show()
        } else {
          im.hide()
        }
      })
    }
  },
  created: function () {
  },
  async mounted () {
    const res = await this.$http.create().get('/')
    if (res && res.status === 200) {
      this.dateTime = new Date(res.headers.date).getTime()
    }
    this.refresh()
  },
  updated () {

  },
  watch: {},
  components: {}
}
</script>

<style lang="less" scoped>
  /*.maincontainer {
    padding-top: 60px;
    background: url(/static/klk/img/youhui/bg.jpg) no-repeat, #f3f2ef;
    background-size:100%;
  }*/

  td {
    vertical-align: middle;
  }

  .promotContent {
    padding: 10px;
    color: #000;
  }

  .promotContent table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0;
  }

  .promotContent table td {
    border: 1px solid #ccc;
    text-align: center;
    padding: 8px 0;
    font-size: 16px;
  }

  .promotContent p {
    font-size: 16px;
    line-height: 25px;
    color: #000;
    text-align: justify;
  }

  .promotContent hr {
    height: 1px;
    background-color: rgb(250, 220, 75);
    border: 0;
  }

  .promotContent .top_title {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
  }

  .promotContent .con_title {
    font-size: 19px;
    margin-top: 12px;
    /*color: rgb(250,220,75);*/
  }

  #yh_pic a img {
    padding: 0 20px;
  }

</style>
