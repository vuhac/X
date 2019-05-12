<template>
  <div class="maincontainer">
    <!-- <div id="hdpublic"></div>
    <div id="news" popup-news="" popup-page="register home">
      <div class="wrapper">
        <div class="marquee">
          <marquee scrollamount="3" scrolldelay="100" direction="left" onmouseover="this.stop();"
                   onmouseout="this.start();" style="cursor:pointer;color: white;
    font-size: 14px;
    line-height: 34px;
    overflow: hidden;
    height: 34px;">
            <span v-html="lantern"></span>
          </marquee>
        </div>
      </div>
    </div> -->

    <div class="main">
      <div class="content">
        <div class="cont_info">
          <!--<div style="background-color: rgb(18, 28, 39)">-->
          <div>

            <!--<div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="mayday"><img
                src="/static/xpj/img/youhui/mayday.png"/></a>
              <div class="Content_box" style="display: none;" id="img_mayday">
                <div class="promotContent">
                  <h2 class="con_title">活动前言</h2>
                  <p>劳动是神奇的，劳动是伟大的，劳动者用勤劳的双手和智慧，编织了这个五彩斑斓的世界，创造了人类的文明，让我们一起在这个特别的日子里，向全世界的劳动者致敬！</p>
                  <h2 class="con_title">活动一</h2>
                  <p>活动时间：2019年4月1日至2019年4月30日</p>
                  <p>
                    活动内容：所有新葡京赌场新老会员凡在活动期间累积存款5000元皆可获得51元五一礼金，礼金无需申请，系统将于北京时间2019年5月1日15:30自动派送到您的会员帐号上，给您备好筹码激战五一！</p>
                  <table>
                    <tbody>
                    <tr>
                      <td style="width: 33%;">活动对象</td>
                      <td>累积存款</td>
                      <td>五一礼金</td>
                    </tr>
                    <tr>
                      <td>4月1日至4月30日</td>
                      <td>5000元+</td>
                      <td>51元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>温馨提示：尚未注册/存款的亲们强烈建议您注册/存款，天天参与多项优惠活动噢！给力优惠速来参与！</p>
                  <h2 class="con_title">活动二</h2>
                  <p>活动时间：2019年4月25日至2019年4月30日</p>
                  <p>活动内容：所有新葡京赌场新老会员凡在美东时间2019年4月25日 至
                    4月30日，当月游戏盈利或者亏损100元+，最高可获8888元五一礼金！系统将于北京时间2019年5月1日15:30自动派送到您的会员帐号上，给您备好筹码激战五一！</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>盈利/亏损金额</td>
                      <td>盈利赠送比例</td>
                      <td>亏损赠送比例</td>
                      <td>上限礼金</td>
                    </tr>
                    <tr>
                      <td>100元+</td>
                      <td>1.0%</td>
                      <td>1.5%</td>
                      <td>8888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <h2 class="con_title">活动规则</h2>
                  <p>1. 所有活动礼金仅需要一倍打码即可提款</p>
                  <p>2. 会员累积存款、盈利、亏损、均由系统自动统计，如有任何异议以新葡京赌场查询为准</p>
                  <p>3. 在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>4. 统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>5. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>6. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质</p>
                  <p>7. 新葡京赌场保留对活动的最终解释权；以及在无通知的情况下修改、终止活动的权利</p>
                </div>
              </div>
            </div>-->

            <!--<div style="margin-bottom: 10px;">
              <a class="menuHead" href="javascript:void(0)"  @click="messageAlert()"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/mayday.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>-->

            <!--<div style="margin-bottom: 10px;">
              <a class="menuHead" href="/static/xpj/html/active/jiebei/index.html" target="_blank"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/jiebei.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>-->
            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qiandao"
                 href="/static/xpj/html/active/qiandao/index.html" target="_blank"><img
                src="/static/xpj/img/youhui/qiandao.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qiandao">

              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qpssq"
                 href="/static/xpj/html/active/qpssq/index.html" target="_blank"><img
                src="/static/xpj/img/youhui/qpssq.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qpssq">

              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="ysf"><img
                src="/static/xpj/img/youhui/ysf.png"/></a>
              <div class="Content_box" style="display: none;" id="img_ysf">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>即日起</p>
                  <h2 class="con_title">活动要求</h2>
                  <p>2019年4月1日前注册的会员</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>联系7×24小时在线客服申请</p>
                  <h2 class="con_title">活动详情</h2>
                  <p>只要您手机下载云闪付提供截图，并且使用云闪付首次单笔充值100元即可申请88元礼金。</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1、 此优惠以人民币（CNY）计算。</p>
                  <p>2、 每一个帐号只能申请一次。</p>
                  <p>3、 每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>4、 若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>5、 此活动所得彩金的会员只需六倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                </div>
                <img src="/static/xpj/img/youhui/ysfc.png"/>
              </div>
            </div>

            <div style="margin-bottom: 10px;" @click="messageAlert()">
              <a class="menuHead" href="javascript:void(0)"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/jiebei.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" href="/static/xpj/html/active/sxjgj/index.html" target="_blank"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/sxjgj.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" href="/static/xpj/html/active/qpjgj/index.html" target="_blank"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/qpjgj.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" href="/static/xpj/html/active/dzjgj/index.html" target="_blank"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/dzjgj.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" href="/static/xpj/html/active/cpjgj/index.html" target="_blank"
                 style="margin-bottom: 10px;"><img src="/static/xpj/img/youhui/cpjgj.png"/></a>
              <div class="Content_box" style="display: none;">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="publish"><img
                src="/static/xpj/img/youhui/publish.png"/></a>
              <div class="Content_box" style="display: none;" id="img_publish">
                <div class="promotContent">
                  <h2 class="con_title">活动前言</h2>
                  <p>感谢各位新老会员一路的支持与陪伴，往后每一期的亿元彩金将更加丰富精彩。</p>
                  <p>不忘初心～感恩前进～我司即将推出更多的优惠专题【金管家】【免息借呗】【帐号买卖】，每个会员帐号都享有至高无上的价值体验，终身有效！机会来啦！赶紧呼朋唤友一起分享吧！</p>
                  <h2 class="con_title">活动详情</h2>
                  <p>2019年猪年“诸事如意”。每月亿元现金回馈，新葡京赌场将继续遵从我们的承诺优惠永不停止， “服务至上，客户第一”的经营理念，竭诚为每一位玩家提供最贴心最真诚的优惠。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td colspan="3">2019年12期亿元现金回馈揭晓时间</td>
                    </tr>
                    <tr>
                      <td>第一期亿元彩金（已派送）</td>
                      <td>第二期亿元彩金（已派送）</td>
                      <td>第三期亿元彩金（已派送）</td>
                    </tr>
                    <tr>
                      <td>第四期亿元彩金（已派送）</td>
                      <td>第五期亿元彩金（策划中）</td>
                      <td>第六期亿元彩金（策划中）</td>
                    </tr>
                    <tr>
                      <td>第七期亿元彩金（策划中）</td>
                      <td>第八期亿元彩金（策划中）</td>
                      <td>第九期亿元彩金（策划中）</td>
                    </tr>
                    <tr>
                      <td>第十期亿元彩金（策划中）</td>
                      <td>第十一期亿元彩金（策划中）</td>
                      <td>第十二期亿元彩金（策划中）</td>
                    </tr>
                    </tbody>
                  </table>
                  <h2 class="con_title">品牌优势</h2>
                  <p>1． 资金足够雄厚：信誉遥遥领先于其它娱乐城。</p>
                  <p>2． 优惠足够多样：【每月亿元现金】【视讯金管家】【棋牌金管家】【彩票金管家】【电子金管家】等大型活动。</p>
                  <p>3． 创新足够超前：涉及金融领域，【免息借呗】单一会员最高可借1560000元！【帐号自由买卖】体现会员帐号价值。</p>
                  <p>4． 支付足够先进：网银、支付宝、微信、银联支付单笔10-50000元，支付秒到帐。</p>
                  <p>5． 取款足够自由：24小时自由取款，不限次数免手续费，3-5分钟火速到帐！</p>
                  <p>6． 营业足够合法：新葡京赌场持有各地区博彩线上牌照。</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="zhuanzhang"><img
                src="/static/xpj/img/youhui/zhuanzhang.png"/></a>
              <div class="Content_box" style="display: none;" id="img_zhuanzhang">
                <div class="promotContent">
                  <img src="/static/xpj/img/youhui/zhuanzhangc.jpg"/>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="201904"><img
                src="/static/xpj/img/youhui/201904.png"/></a>
              <div class="Content_box" style="display: none;" id="img_201904">
                <div class="promotContent">
                  <h2 class="con_title">活动内容</h2>
                  <p>感谢各位会员长期以来对新葡京赌场的支持与厚爱，新葡京赌场将会给予会员最大的优惠和红利，2019年第四期亿元现金将继续进行，无论新老会员，只要您在2019-04-01至2019-04-30有进行存款并且游戏，无论输赢都将参与本期的亿元现金回馈活动。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td style="width: 33%;">活动对象</td>
                      <td>有效投注</td>
                      <td>赠送金额</td>
                    </tr>
                    <tr>
                      <td rowspan="8">2019年4-1日至4-30日 <br> 总有效投注</td>
                      <td>100+</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>10000+</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>50000+</td>
                      <td>188</td>
                    </tr>
                    <tr>
                      <td>100000+</td>
                      <td>588</td>
                    </tr>
                    <tr>
                      <td>1000000+</td>
                      <td>888</td>
                    </tr>
                    <tr>
                      <td>5000000+</td>
                      <td>1888</td>
                    </tr>
                    <tr>
                      <td>10000000+</td>
                      <td>8888</td>
                    </tr>
                    <tr>
                      <td>50000000+</td>
                      <td>18888</td>
                    </tr>
                    </tbody>
                  </table>
                  <br>
                  <p>月月亿元金-豪礼永不停，只要您有在新葡京赌场注册，存款，游戏将自动参与我们的月月亿元现金回馈，每个会员帐号都享有至高无上的价值体验，终身有效！尽显您会员帐号的价值！</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1.此优惠以人民币（CNY）计算，统计时间：美东时间2019-04-01到2019-04-30此外时间不予以计算</p>
                  <p>2.会员总有效投注由系统自动统计，若有任何异议。以新葡京赌场查询结果为准</p>
                  <p>3.此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>4.此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>5.此活动在统计时间内【相同IP的会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>6.此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                  <p>7.此活动无需申请全由系统自动派送。派送时间2019-05-03 15:00请各位会员注意查收</p>
                  <h2 class="con_title">优惠与条款</h2>
                  <p>1、每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>2、若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>3、新葡京赌场所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p>4、新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="bjl"><img
                src="/static/xpj/img/youhui/bjl.png"/></a>
              <div class="Content_box" style="display: none;" id="img_bjl">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>【新葡京赌场】真人娱乐场，在一局牌面中出现庄家以最终牌面和值为1点绝杀闲家最终牌面和值0点时，即可回馈投注庄家金额30%奖金，最高奖金1888元（每人每天只限领取一次彩金优惠）
                    【例如：百家乐游戏中会员投注庄家100元，庄家以最终牌面和值为1点胜闲家以最终牌面和值为0点，庄家以1点绝杀闲家0点，会员即申请投注庄家金额30%奖励】其余玩法和点杀均不计算。</p>
                  <h2 class="con_title">活动细则</h2>
                  <p>1.
                    此活动是指在百家乐一局游戏中出现庄家以最终牌面和值为1点胜闲家最终牌面和值为0点并且当局中最低投注庄家金额为100元即可申请领取投注庄家金额30%彩金，在同一局中同时投注庄家与闲家则无法领取该彩金优惠。</p>
                  <p>2. 此活动均按北京时间计算，会员满足条件后，请联系在线客服申请，彩金将于30分钟内自动派发至会员帐号，当天的注单只能当天领取，逾期则视为自动放弃。（每位会员每天仅限领取一次彩金优惠）</p>
                  <p>3. 此优惠只限于娱乐真人游戏，娱乐其他游戏不参与此活动，如果领取此优惠投注其它游戏将扣除所得，退回本金</p>
                  <p>4. 此活动在活动时间内【注册多个会员帐号】只能使用一个帐号申请，其余帐号均不符合申请条件</p>
                  <p>5. 此活动所得彩金的会员只需一倍流水即可申请出款</p>
                  <p>6. 在活动时间内【系统判定的套利会员】均不符合申请条件</p>
                  <p>7. 新葡京赌场保留对此活动的最终解释权，且在任何情况下可随时更改，停止，取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="yinlian"><img
                src="/static/xpj/img/youhui/yinlian.png"/></a>
              <div class="Content_box" style="display: none;" id="img_yinlian">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>通过【银联钱包】、【银联支付】中存款支付，以当日的总存款金额为准，次日即可获得相应的奖励，最高888元，精彩送不停。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>当日总存款</td>
                      <td>加赠优惠</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>8元</td>
                    </tr>
                    <tr>
                      <td>10000元+</td>
                      <td>18元</td>
                    </tr>
                    <tr>
                      <td>50000元+</td>
                      <td>88元</td>
                    </tr>
                    <tr>
                      <td>100000元+</td>
                      <td>188元</td>
                    </tr>
                    <tr>
                      <td>300000元+</td>
                      <td>588元</td>
                    </tr>
                    <tr>
                      <td>500000元+</td>
                      <td>888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！ <a href="/#/home/register" style="color:#000;background:#ff0000;"
                                                       target="_blank">【立即注册GO】</a></p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 此活动统计时间：北京时间中午12点至次日北京时间中午12点，此外时间将不予计算当天存款总额。</p>
                  <p>2. 此活动无需申请全程由系统自动派送，派送时间于次日中午15:30，请各位注意查收。</p>
                  <p>3. 会员使用银联钱包、银联支付当日存款总额均由系统自动计算，如有任何异议，以新葡京赌场查询结果为准。</p>
                  <p>4. 此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，系统无法给予自动派送彩金。</p>
                  <p>5. 此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金。</p>
                  <p>6. 此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享。</p>
                  <p>7. 新葡京赌场保留对此活动的最终解释权，且在任何情况下可随时更改，停止，取消该优惠活动的权利。</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="kscp"><img
                src="/static/xpj/img/youhui/kscp.png"/></a>
              <div class="Content_box" style="display: none;" id="img_kscp">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>会员帐号成就永久收益【快速系列彩票】不计输赢下注皆有返利</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>活动类型</td>
                      <td>有效投注</td>
                      <td>每日收益</td>
                    </tr>
                    <tr>
                      <td rowspan="8">
                        快速系列<br>三分系列<br>五分系列
                      </td>
                      <td>5000元+</td>
                      <td>18元</td>
                    </tr>
                    <tr>
                      <td>10000元+</td>
                      <td>38元</td>
                    </tr>
                    <tr>
                      <td>50000元+</td>
                      <td>188元</td>
                    </tr>
                    <tr>
                      <td>100000元+</td>
                      <td>388元</td>
                    </tr>
                    <tr>
                      <td>300000元+</td>
                      <td>888元</td>
                    </tr>
                    <tr>
                      <td>500000元+</td>
                      <td>1888元</td>
                    </tr>
                    <tr>
                      <td>1000000元+</td>
                      <td>3888元</td>
                    </tr>
                    <tr>
                      <td>3000000元+</td>
                      <td>5888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>例A：会员在快速时时彩当日有效投注10000元即可申请每日收益38元</p>
                  <p>例B：会员在三分时时彩当日有效投注500000元即可申请每日收益1888元</p>
                  <p>例C：会员在五分赛车当日有效投注1000000元即可申请每日收益3888元</p>
                  <h2 class="con_title">活动规则</h2>
                  <p>1. 统计时间为美东时间（当天中午12:00至次日中午11:59:59）</p>
                  <p>2. 申请时间为当天中午12:00至次日中午11:59:59逾期视为放弃</p>
                  <p>3. 会员所有获得的每日收益金需一倍打码才能提交出款申请</p>
                  <p>4. 每天每个会员只能申请一次，建议以当天最高有效投注申请</p>
                  <p>5. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金。</p>
                  <p>6. 若会员有重复申请或注册多帐号行为，新葡京赌场保留取消或收回优惠彩金及盈利的权利</p>
                  <p>7. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="bydr1"><img
                src="/static/xpj/img/youhui/bydr1.png"/></a>
              <div class="Content_box" style="display: none;" id="img_bydr1">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>即日起：所有新老会员投注所有的捕鱼游戏，按照美东时间计算当日盈利或亏损100元或以上，次日即可申请相应彩金，每日最高可达8888元。尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a
                    href="/#/home/register" style="color:#000;background:#ff0000;"
                    target="_blank">【立即注册GO】</a></p>
                  <table>
                    <tbody>
                    <tr>
                      <td>当日盈利或亏损</td>
                      <td>盈利加赠彩金</td>
                      <td>亏损加赠彩金</td>
                    </tr>
                    <tr>
                      <td>100元+</td>
                      <td>3元</td>
                      <td>8元</td>
                    </tr>
                    <tr>
                      <td>500元+</td>
                      <td>15元</td>
                      <td>28元</td>
                    </tr>
                    <tr>
                      <td>1000元+</td>
                      <td>25元</td>
                      <td>38元</td>
                    </tr>
                    <tr>
                      <td>3000元+</td>
                      <td>58元</td>
                      <td>88元</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>68元</td>
                      <td>138元</td>
                    </tr>
                    <tr>
                      <td>10000元+</td>
                      <td>118元</td>
                      <td>188元</td>
                    </tr>
                    <tr>
                      <td>50000元+</td>
                      <td>388元</td>
                      <td>888元</td>
                    </tr>
                    <tr>
                      <td>100000元+</td>
                      <td>1888元</td>
                      <td>3888元</td>
                    </tr>
                    <tr>
                      <td>500000元+</td>
                      <td>5888元</td>
                      <td>8888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>例如：当日在AG电子捕鱼王中盈利10000元，则次日可申请相应彩金为118元，亏损可申请188元。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件的会员请于北京时间次日12点后24小时内联系在线客服进行申请，逾期视为自动放弃。</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间</p>
                  <p>2. 此优惠所获得的彩金需一倍打码才能提交出款申请</p>
                  <p>3. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金。</p>
                  <p>4. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                  <p>5. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="bydr2"><img
                src="/static/xpj/img/youhui/bydr2.png"/></a>
              <div class="Content_box" style="display: none;" id="img_bydr2">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>
                    所有会员凡在活动期间每日投注“捕鱼游戏”，累积有效投注达到以下关卡门槛，即可参与捕鱼大闯关活动，关关都有奖金赠送；达到通关，可累计抱回28888元。尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！
                    <a href="/#/home/register" style="color:#000;background:#ff0000;"
                       target="_blank">【立即注册GO】</a></p>
                  <table>
                    <tbody>
                    <tr>
                      <td>关卡</td>
                      <td>累积有效投注</td>
                      <td>可获奖金</td>
                      <td>累积可获奖金</td>
                    </tr>
                    <tr>
                      <td>第一关</td>
                      <td>2000元+</td>
                      <td>5元</td>
                      <td>5元</td>
                    </tr>
                    <tr>
                      <td>第二关</td>
                      <td>5000元+</td>
                      <td>13元</td>
                      <td>18元</td>
                    </tr>
                    <tr>
                      <td>第三关</td>
                      <td>10000元+</td>
                      <td>20元</td>
                      <td>38元</td>
                    </tr>
                    <tr>
                      <td>第四关</td>
                      <td>30000元+</td>
                      <td>50元</td>
                      <td>88元</td>
                    </tr>
                    <tr>
                      <td>第五关</td>
                      <td>100000元+</td>
                      <td>130元</td>
                      <td>218元</td>
                    </tr>
                    <tr>
                      <td>第六关</td>
                      <td>300000元+</td>
                      <td>300元</td>
                      <td>518元</td>
                    </tr>
                    <tr>
                      <td>第七关</td>
                      <td>500000元+</td>
                      <td>600元</td>
                      <td>1118元</td>
                    </tr>
                    <tr>
                      <td>第八关</td>
                      <td>1000000元+</td>
                      <td>900元</td>
                      <td>2018元</td>
                    </tr>
                    <tr>
                      <td>第九关</td>
                      <td>3000000元+</td>
                      <td>2000元</td>
                      <td>4018元</td>
                    </tr>
                    <tr>
                      <td>第十关</td>
                      <td>6000000元+</td>
                      <td>5000元</td>
                      <td>9018元</td>
                    </tr>
                    <tr>
                      <td>第十一关</td>
                      <td>10000000元+</td>
                      <td>8000元</td>
                      <td>17018元</td>
                    </tr>
                    <tr>
                      <td>第十二关</td>
                      <td>20000000元+</td>
                      <td>11870元</td>
                      <td>28888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>例A：每关奖金只可申请一次，通关可获十二关全部奖金！累计奖金28888元。会员可一次性申请多个关卡奖金，如：有效投注到五关、可一次性申请（第一至第五关）奖金!</p>
                  <p>例B：会员累积有效投注达到300万（第九关）即可获得累计奖金5+13+20+50+130+300+600+900+2000=4018元！ 以此类推。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件的会员请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间</p>
                  <p>2. 此优惠所获得的彩金需一倍打码才能提交出款申请</p>
                  <p>3. 最高可获十二关奖金，抱得28888元大奖。本期申请时间结束后即停止申请本期冲关奖金。</p>
                  <p>4. 捕鱼日闯关优惠每个会员每天可以申请多次，一次可申请多个关卡奖金。</p>
                  <p>5. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>6. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质</p>
                  <p>7. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="bydr3"><img
                src="/static/xpj/img/youhui/bydr3.png"/></a>
              <div class="Content_box" style="display: none;" id="img_bydr3">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>所有新老会员进行捕鱼游戏单局投注产生以下六种情况即可获得加赠赔率彩金，奖金无上限，还在等什么呢，快快行动起来吧。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>中奖赔率</td>
                      <td>加赠彩金</td>
                      <td>彩金上限</td>
                    </tr>
                    <tr>
                      <td>派彩÷实际投注≥10倍</td>
                      <td>实际投注金额x1</td>
                      <td rowspan="6">无上限</td>
                    </tr>
                    <tr>
                      <td>派彩÷实际投注≥50倍</td>
                      <td>实际投注金额x3</td>
                    </tr>
                    <tr>
                      <td>派彩÷实际投注≥100倍</td>
                      <td>实际投注金额x5</td>
                    </tr>
                    <tr>
                      <td>派彩÷实际投注≥200倍</td>
                      <td>实际投注金额x10</td>
                    </tr>
                    <tr>
                      <td>派彩÷实际投注≥300倍</td>
                      <td>实际投注金额x20</td>
                    </tr>
                    <tr>
                      <td>派彩÷实际投注≥500倍</td>
                      <td>实际投注金额x30</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>例A：会员投注JDB财神捕鱼，实际投注额为60，派彩为4200，赔率=派彩÷投注=4200÷60=70，加赠彩金=60×3=180 元</p>
                  <p>❤所有因任何因素被取消的注单，或因中奖后彩金加码游戏所产生的单号，均不在计算范围之内。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件的会员请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间</p>
                  <p>2.
                    注单只限产生后24小时之内有效，每位会员每天所产生的所有中奖注单只能申请一个，每个会员每天仅限申请一次，每个注单只能申请一项优惠，申请成功后当天剩余注单一律作废不可以用作次日申请。（时间按美东时间计算）</p>
                  <p>3. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>4. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质</p>
                  <p>5. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="fanshui"><img
                src="/static/xpj/img/youhui/fanshui.png"/></a>
              <div class="Content_box" style="display: none;" id="img_fanshui">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>即日起（结束以官方通知为准）</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>只要您在新葡京赌场玩真人视讯、棋牌游戏、捕鱼游戏、体育赛事，当日打码1元以上即可一键实时返水。</p>
                  <br>
                  <table class="flower">
                    <tbody>
                    <tr class="firstRow">
                      <td>有效投注</td>
                      <td>真人视讯</td>
                      <td>棋牌游戏</td>
                      <td>体育赛事</td>
                      <td>CQ9、JDB、MG、MW、PT电子</td>
                      <td>其它电子</td>
                    </tr>
                    <tr>
                      <td>1元+</td>
                      <td>0.5%</td>
                      <td>0.7%</td>
                      <td>0.8%</td>
                      <td>1.3%</td>
                      <td>1.2%</td>
                    </tr>
                    <tr>
                      <td>200万+</td>
                      <td>0.6%</td>
                      <td>0.9%</td>
                      <td>0.9%</td>
                      <td>1.8%</td>
                      <td>1.5%</td>
                    </tr>
                    <tr>
                      <td>500万+</td>
                      <td>0.7%</td>
                      <td>1.1%</td>
                      <td>1.0%</td>
                      <td>2.5%</td>
                      <td>2.0%</td>
                    </tr>
                    <tr>
                      <td>1000万+</td>
                      <td>0.8%</td>
                      <td>1.5%</td>
                      <td>1.2%</td>
                      <td>3.0%</td>
                      <td>2.5%</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>范例：会员MG当前总有效投注量30万，则可获得3900返水彩金(30万X1.3%=3900)，如未领取继续游戏，返水金额系统会自动计算增加。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>天天返水无需申请，结算期间和发放时间如下：</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>新葡京赌场</td>
                      <td>美东时间</td>
                      <td>北京时间</td>
                    </tr>
                    <tr>
                      <td>返水结算时间</td>
                      <td>当日00:00-23:59</td>
                      <td>当日12:00-次日11:59</td>
                    </tr>
                    <tr>
                      <td>返水发放时间</td>
                      <td>次日03:30-04:00</td>
                      <td>次日15:30-16:00</td>
                    </tr>
                    </tbody>
                  </table>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
                  <p>2. 会员每日有效投注满￥1元，皆可享受真人视讯、棋牌游戏、电子游戏,返点回馈</p>
                  <p>3.
                    每位玩家、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡/信用卡/银行帐号）及IP地址只能享有一次优惠；若会员有重复申请帐号行为，公司保留取消或收回会员优惠彩金的权利</p>
                  <p>4. 新葡京赌场的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利</p>
                  <p>5. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有 该优惠的资质</p>
                  <p>6. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>7. 新葡京赌场保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qpyx1"><img
                src="/static/xpj/img/youhui/qpyx1.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qpyx1">
                <div class="promotContent">
                  <h2 class="con_title">活动内容</h2>
                  <p>会员于新葡京赌场进行棋牌游戏投注的会员，不计输赢，每天达到最低有效投注10000+，次日联系客服申请得意彩金，最高8888元，您还在等什么呢?赶快邀请好友一起来玩牌吧！</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>每日有效投注</td>
                      <td>可获彩金</td>
                    </tr>
                    <tr>
                      <td>10000+</td>
                      <td>18元</td>
                    </tr>
                    <tr>
                      <td>50000+</td>
                      <td>88元</td>
                    </tr>
                    <tr>
                      <td>100000+</td>
                      <td>188元</td>
                    </tr>
                    <tr>
                      <td>500000+</td>
                      <td>588元</td>
                    </tr>
                    <tr>
                      <td>1000000+</td>
                      <td>888元</td>
                    </tr>
                    <tr>
                      <td>3000000+</td>
                      <td>1888元</td>
                    </tr>
                    <tr>
                      <td>5000000+</td>
                      <td>5888元</td>
                    </tr>
                    <tr>
                      <td>10000000+</td>
                      <td>8888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>注：日结时间，以当日美东时间00:00至当日美东时间23:59（即北京时间12:00，次日11:59）为计算一天。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>请联系24小时在线客服申请</p>

                  <h2 class="con_title">优惠规则</h2>
                  <p>1.每个会员每天只能申请一次（逾期没有领取视为自动放弃）</p>
                  <p>2.会员总有效投注均由系统统计为准，若有任何异议。以新葡京赌场查询结果为准</p>
                  <p>3.此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，无法给予自动派送彩金</p>
                  <p>4.此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，无法给予自动派送彩金</p>
                  <p>5.此活动在统计时间内【相同IP的会员帐号】都不符合参与此活动，无法给予自动派送彩金</p>
                  <p>6.此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>

                  <h2 class="con_title">优惠与条款</h2>
                  <p>1、每位玩家、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>2、若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>3、新葡京赌场所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p>4、新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qpyx2"><img
                src="/static/xpj/img/youhui/qpyx2.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qpyx2">
                <div class="promotContent">
                  <h2 class="con_title">活动内容</h2>
                  <p>即日起，会员在棋牌游艺中进行投注，当日累积有效投注达到以下关卡门槛，即可参与棋牌闯关活动，关关都有奖金赠送；达到通关，可累计抱回18888元。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>关卡</td>
                      <td>累计有效投注</td>
                      <td>可获奖金</td>
                      <td>累计可获奖金</td>
                    </tr>
                    <tr>
                      <td>第一关</td>
                      <td>1000+</td>
                      <td>8元</td>
                      <td>8元</td>
                    </tr>
                    <tr>
                      <td>第二关</td>
                      <td>10000+</td>
                      <td>18元</td>
                      <td>26元</td>
                    </tr>
                    <tr>
                      <td>第三关</td>
                      <td>50000+</td>
                      <td>58元</td>
                      <td>84元</td>
                    </tr>
                    <tr>
                      <td>第四关</td>
                      <td>100000+</td>
                      <td>88元</td>
                      <td>172元</td>
                    </tr>
                    <tr>
                      <td>第五关</td>
                      <td>500000+</td>
                      <td>188元</td>
                      <td>360元</td>
                    </tr>
                    <tr>
                      <td>第六关</td>
                      <td>800000+</td>
                      <td>388元</td>
                      <td>748元</td>
                    </tr>
                    <tr>
                      <td>第七关</td>
                      <td>1000000+</td>
                      <td>588元</td>
                      <td>1336元</td>
                    </tr>
                    <tr>
                      <td>第八关</td>
                      <td>3000000+</td>
                      <td>888元</td>
                      <td>2224元</td>
                    </tr>
                    <tr>
                      <td>第九关</td>
                      <td>5000000+</td>
                      <td>1888元</td>
                      <td>4112元</td>
                    </tr>
                    <tr>
                      <td>第十关</td>
                      <td>8000000+</td>
                      <td>5888元</td>
                      <td>10000元</td>
                    </tr>
                    <tr>
                      <td>第十一关</td>
                      <td>10000000+</td>
                      <td>8888元</td>
                      <td>18888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>如：会员累积有效投注达到10万（第五关）即可获得累计奖金8+18+58+88+188=360元！！以此类推。</p>
                  <p>注：美东时间比北京时间慢12个小时哦！例如：美东时间2019年1月1号凌晨01:00点换算北京时间为2019年1月1号下午13:00点，以此类推。</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1.此优惠以人民币（CNY）计算，统计时间：美东时间00：00到23:59此外时间不予以计算</p>
                  <p>2.会员总有效投注均由系统自动统计，若有任何异议。以新葡京赌场查询结果为准.</p>
                  <p>3.此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>4.此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>5.此活动在统计时间内【相同IP的会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p>6.此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                  <p>7.此活动无需申请全由系统自动派送。派送时间每天北京时间 15:00请各位会员注意查收</p>
                  <h2 class="con_title">优惠与条款</h2>
                  <p>1、每位玩家、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>2、若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>3、新葡京赌场所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p>4、新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qpyx3"><img
                src="/static/xpj/img/youhui/qpyx3.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qpyx3">
                <div class="promotContent">
                  <h2 class="con_title">活动详情</h2>
                  <p>即日起，会员于所有棋牌对战游戏中，以下方指定牌型胜出，即可领取派彩金额的一倍奖金，奖金上限888元。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>游戏名称</td>
                      <td>中奖牌型</td>
                    </tr>
                    <tr>
                      <td>牛牛</td>
                      <td>五小牛</td>
                    </tr>
                    <tr>
                      <td>炸金花</td>
                      <td>豹子</td>
                    </tr>
                    <tr>
                      <td>德州扑克</td>
                      <td>皇家同花</td>
                    </tr>
                    <tr>
                      <td>二八杠</td>
                      <td>二八杠</td>
                    </tr>
                    <tr>
                      <td>牌九</td>
                      <td>至尊</td>
                    </tr>
                    <tr>
                      <td>三公</td>
                      <td>爆玖</td>
                    </tr>
                    </tbody>
                  </table>
                  <h2 class="con_title">申请方式</h2>
                  <p>请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 每天每个游戏皆可参加一次，相同游戏只能申请一个注单的奖金；（逾期没有领取视为自动放弃）</p>
                  <p>2. 注单有效期限为24小时，当天产生符合要求的注单只能申请一个</p>
                  <p>3. 因游戏数据庞大，中奖之后需即刻查询记录提供注单号申请，注单号只保留最近10笔的投注，若因没有即刻查询提交申请，导致无法查询注单号，将视为放弃，无法再协助查询办理</p>
                  <p>4. 此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                  <h2 class="con_title">优惠条款</h2>
                  <p>1、每位玩家、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>2、若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>3、新葡京赌场所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p>4、新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qpyx4"><img
                src="/static/xpj/img/youhui/qpyx4.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qpyx4">
                <div class="promotContent">
                  <h2 class="con_title">活动详情</h2>
                  <p>在所有棋牌游戏中每天娱乐200局以上（含200局），次日即可申请最高1888元奖励，邀您玩乐！</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>完成局数</td>
                      <td>可获奖金</td>
                    </tr>
                    <tr>
                      <td>200局+</td>
                      <td>8元</td>
                    </tr>
                    <tr>
                      <td>1000局+</td>
                      <td>38元</td>
                    </tr>
                    <tr>
                      <td>5000局+</td>
                      <td>138元</td>
                    </tr>
                    <tr>
                      <td>10000局+</td>
                      <td>588元</td>
                    </tr>
                    <tr>
                      <td>50000局+</td>
                      <td>888元</td>
                    </tr>
                    <tr>
                      <td>100000局+</td>
                      <td>1888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <h2 class="con_title">申请方式</h2>
                  <p>请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 局数每天统计一次，以美东时间为计算时区</p>
                  <p>2. 完成局数以系统后台数据为准</p>
                  <p>3. 此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，无法给予自动派送彩金</p>
                  <p>4. 此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，无法给予自动派送彩金</p>
                  <p>5. 此活动在统计时间内【相同IP的会员帐号】都不符合参与此活动，无法给予自动派送彩金</p>
                  <p>6. 此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                  <h2 class="con_title">优惠条款</h2>
                  <p>1、每位玩家、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>2、若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>3、新葡京赌场所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p>4、新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qpyx5"><img
                src="/static/xpj/img/youhui/qpyx5.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qpyx5">
                <div class="promotContent">
                  <h2 class="con_title">活动内容</h2>
                  <p>
                    所有会员凡在新葡京赌场每日投注所有棋牌中进行游戏，投注1元起，无限好运金等您拿回家，最高领取投注总额×15%，还在等什么？好胆您就来呀！尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您噢！</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>连赢局数</td>
                      <td>赠送比例</td>
                    </tr>
                    <tr>
                      <td>3局</td>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <td>5局</td>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <td>10局</td>
                      <td>8%</td>
                    </tr>
                    <tr>
                      <td>15局</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>20局</td>
                      <td>15%</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>例如：会员在棋牌中进行游戏，连赢三局以上即可申请3%的好运金！（提示：连赢后未进行投注前立即申请，继续投注后将无法申请连赢奖励）</p>
                  <p>【例：下注金额分别为：100、300、300元，(100+300+300)×3%=21元，会员即可获得21元的好运金】</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1、所有因任何因素被取消的注单，或因中奖后彩金加码游戏所产生的单号，均不在计算范围之内</p>
                  <p>2、此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                  <p>3、每位玩家、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p>4、若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p>5、新葡京赌场所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p>6、新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy1"><img
                src="/static/xpj/img/youhui/dzyy1.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy1">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>
                    所有新老会员进行电子游艺单局投注产生以下五种情况即可获得加赠赔率彩金，最高奖赏8888元。所有新老会员进行电子游艺单局投注产生以下五种情况即可获得加赠赔率彩金，最高奖赏8888元。所有新老会员进行电子游艺单局投注产生以下五种情况即可获得加赠赔率彩金，最高奖赏8888元。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>中奖赔率</td>
                      <td>加赠彩金</td>
                      <td>优惠上限</td>
                    </tr>
                    <tr>
                      <td>≥60倍</td>
                      <td>当局有效投注金额x1</td>
                      <td rowspan="5">8888元</td>
                    </tr>
                    <tr>
                      <td>≥120倍</td>
                      <td>当局有效投注金额x3</td>
                    </tr>
                    <tr>
                      <td>≥150倍</td>
                      <td>当局有效投注金额x8</td>
                    </tr>
                    <tr>
                      <td>≥200倍</td>
                      <td>当局有效投注金额x12</td>
                    </tr>
                    <tr>
                      <td>≥300倍</td>
                      <td>当局有效投注金额x20</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>注：捕鱼类型、桌面类游戏，不参与此优惠活动！尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a href="/#/home/register"
                                                                            style="color:#000;background:#ff0000;"
                                                                            target="_blank">【立即注册GO】</a></p>
                  <p>A. 除以投注金额大于或等于60倍，即可获得此局投注金额的1倍彩金，奖金上限8888元。</p>
                  <p>B. 派彩金额除以投注金额大于或等于120倍，即可获得此局投注金额的3倍彩金，奖金上限8888元。</p>
                  <p>C. 派彩金额除以投注金额大于或等于150倍，即可获得此局投注金额的8倍彩金，奖金上限8888元。</p>
                  <p>C. 派彩金额除以投注金额大于或等于150倍，即可获得此局投注金额的8倍彩金，奖金上限8888元。</p>
                  <p>E. 派彩金额除以投注金额大于或等于300倍，即可获得此局投注金额的20倍彩金，奖金上限8888元。</p>
                  <p>●所有因任何因素被取消的注单，或因中奖后彩金加码游戏所产生的单号，均不在计算范围之内。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间。</p>
                  <p>2.
                    注单只限产生后24小时之内有效，每位会员每天所产生的所有中奖注单只能申请一个，每个会员每天仅限申请一次，每个注单只能申请一项优惠，申请成功后当天剩余注单一律作废不可以用作次日申请。（时间按美东时间计算）</p>
                  <p>3. 此活动所得彩金的会员只需一倍流水即可申请出款</p>
                  <p>4. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金。</p>
                  <p>5. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                  <p>6. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy2"><img
                src="/static/xpj/img/youhui/dzyy2.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy2">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>会员于【新葡京赌场】进行棋牌、捕鱼、电子游艺游戏中，负盈利，即可申请紧急救援金。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>单笔存款金额</td>
                      <td>当帐号余额</td>
                      <td>救援金比例</td>
                      <td>彩金上限</td>
                      <td>流水限制</td>
                    </tr>
                    <tr>
                      <td>100元+</td>
                      <td>低于10元</td>
                      <td>2%</td>
                      <td>无上限</td>
                      <td>5倍流水</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>●尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a href="/#/home/register" style="color:#000;background:#ff0000;"
                                                       target="_blank">【立即注册GO】</a></p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 此活动所得彩金的会员需五倍流水即可申请出款，不与官网其它优惠共享</p>
                  <p>2. 所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间</p>
                  <p>3. 救援金每笔存款结算一次，请在帐号低于10元的时候立刻申请，若玩家该笔存款失利后，直接再存款并进行下注则视为主动放弃上笔存款的救援金。</p>
                  <p>4. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金。</p>
                  <p>5. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                  <p>6. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy3"><img
                src="/static/xpj/img/youhui/dzyy3.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy3">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>会员于电子游艺游戏中，只要您单个注单派彩金额超过1000元，即可获得加赠彩金最高18888元，丰富奖金等您来拿</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>单注派彩金额</td>
                      <td>加赠彩金</td>
                      <td>流水限制</td>
                    </tr>
                    <tr>
                      <td>1000元+</td>
                      <td>18元</td>
                      <td rowspan="9">2倍流水</td>
                    </tr>
                    <tr>
                      <td>2000元+</td>
                      <td>38元</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>88元</td>
                    </tr>
                    <tr>
                      <td>10000元+</td>
                      <td>288元</td>
                    </tr>
                    <tr>
                      <td>30000元+</td>
                      <td>888元</td>
                    </tr>
                    <tr>
                      <td>50000元+</td>
                      <td>1888元</td>
                    </tr>
                    <tr>
                      <td>100000元+</td>
                      <td>3888元</td>
                    </tr>
                    <tr>
                      <td>200000元+</td>
                      <td>8888元</td>
                    </tr>
                    <tr>
                      <td>300000元+</td>
                      <td>18888元</td>
                    </tr>
                    )
                    </tbody>
                  </table>
                  <p>注单号码查询方式（登入会员帐号→进入游戏界面→点击下注记录→即可查询注单号）尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a href="/#/home/register"
                                                                                            style="color:#000;background:#ff0000;"
                                                                                            target="_blank">【立即注册GO】</a>
                  </p>
                  <p>注：此活动最低投注1元起即可申请，电子游艺中赠送的免费抽奖机会产生的注单，以及任何原因被取消的注单投注额小于1元的注单，均不具备参与本次活动。</p>
                  <p>范例：会员在“惑星战记”游戏中下注50元，派彩10000元，即可申请288元加赠彩金，2倍流水即可提款。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 此活动所得彩金的会员需2倍流水即可申请出款</p>
                  <p>2. 所有捕鱼游戏均不参与该活动</p>
                  <p>3. 电子游艺中赠送给您的免费抽奖机会所产生的注单，并不作为参与本次活动的有效注单，以及任何原因投注额小于1元，均不具备参与本次活动</p>
                  <p>4. 注单只限当日有效，每位会员每天仅限申请一个注单，每个注单仅限申请一次，天数按照美东时间进行计算</p>
                  <p>5. 所中奖的注单需在24小时内联系在线客服申请，逾期视为放弃</p>
                  <p>6. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>7. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质</p>
                  <p>8. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy4"><img
                src="/static/xpj/img/youhui/dzyy4.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy4">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>会员进行“电子游艺”按照美东时间计算每款游戏完成5000以上的有效投注即算完成一个任务，完成2个以上即可获得最高888元的悬赏彩金</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>每款游戏有效投注</td>
                      <td>完成任务数量</td>
                      <td>可获悬赏彩金</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>2个</td>
                      <td>18元</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>5个</td>
                      <td>88元</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>8个</td>
                      <td>188元</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>15个</td>
                      <td>388元</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>25个</td>
                      <td>888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>例如：按照美东时间计算该天内完成5款电子每一款游戏有效投注额均达到5000以上，即可获得88元悬赏彩金！</p>
                  <p>尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a href="/#/home/register" style="color:#000;background:#ff0000;"
                                                      target="_blank">【立即注册GO】</a></p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 此活动所得彩金的会员需一倍流水即可申请出款</p>
                  <p>2. 每位会员每天仅限申请一次，天数按照美东时间计算</p>
                  <p>3. 符合申请条件的会员请在美东时间23:59:59之前进行申请，逾期视为自动放弃优惠</p>
                  <p>4. 电子游艺中赠送给您的免费抽奖机会所产生的注单，并不作为参与本次活动有效注单，以及任何原因投注额小于1元，均不具备参与本次活动</p>
                  <p>5. 所有因任何因素被取消之注单，或中奖后彩金加码游戏所产生之单号，均不在计算范围之内</p>
                  <p>6. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>7. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质</p>
                  <p>8. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy5"><img
                src="/static/xpj/img/youhui/dzyy5.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy5">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>即日起新葡京赌场新老会员均可参与，只要您在【电子游艺】中产生以下幸运注单号码即可获得幸运彩金，最高888倍。尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a
                    href="/#/home/register" style="color:#000;background:#ff0000;"
                    target="_blank">【立即注册GO】</a></p>
                  <table>
                    <tbody>
                    <tr>
                      <td>下注金额</td>
                      <td>注单尾数</td>
                      <td>可获彩金</td>
                      <td>彩金上限</td>
                    </tr>
                    <tr>
                      <td rowspan="7">1 元起</td>
                      <td>最后二位为18</td>
                      <td>下注金额的1倍</td>
                      <td>88 元</td>
                    </tr>
                    <tr>
                      <td>最后三位为888</td>
                      <td>下注金额的3倍</td>
                      <td>888 元</td>
                    </tr>
                    <tr>
                      <td>最后四位为8888</td>
                      <td>下注金额的8倍</td>
                      <td>1888 元</td>
                    </tr>
                    <tr>
                      <td>最后五位为88888</td>
                      <td>下注金额的38倍</td>
                      <td>2888 元</td>
                    </tr>
                    <tr>
                      <td>最后六位为888888</td>
                      <td>下注金额的188倍</td>
                      <td>6888 元</td>
                    </tr>
                    <tr>
                      <td>最后七位为8888888</td>
                      <td>下注金额的388倍</td>
                      <td>38888 元</td>
                    </tr>
                    <tr>
                      <td>最后八位为88888888</td>
                      <td>下注金额的888倍</td>
                      <td>58888 元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>注单号码查询方式（登入游戏页面-下注记录-即可查询注单号）</p>
                  <p>注：此活动最低投注1元起即可申请，电子游艺中赠送的免费抽奖机会产生的注单【MG平台不参与此优惠活动】，以及任何原因被取消的注单投注额小于1元的注单，均不具备参与本次活动。</p>
                  <p>范例：会员在【连环夺宝2】游戏中下注10元，产生注单：2820179888，即可申请10×3=30元幸运注单彩金，一倍流水即可提款。</p>
                  <h2 class="con_title">申请方式</h2>
                  <p>所中奖的注单须在美东时间当天24小时内提交申请，逾期视为放弃，谢谢！ <br>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间</p>
                  <p>2. 所有因任何因素被取消之注单，或因中奖后彩金加码游戏所产生之单号，均不在计算范围之内。</p>
                  <p>3. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>4. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，新葡京赌场有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                  <p>5. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy6"><img
                src="/static/xpj/img/youhui/dzyy6.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy6">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>会员在BBIN电子游艺中【连环夺宝】或【糖果派对】进行投注，单一局号消除8次以上，即可获得最高100倍奖励，彩金无上限。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>单局消耗次数</td>
                      <td>彩金倍数</td>
                      <td>彩金上限</td>
                    </tr>
                    <tr>
                      <td>8次以上</td>
                      <td>有效投注额*3倍</td>
                      <td rowspan="6">无上限</td>
                    </tr>
                    <tr>
                      <td>12次以上</td>
                      <td>有效投注额*6倍</td>
                    </tr>
                    <tr>
                      <td>16次以上</td>
                      <td>有效投注额*12倍</td>
                    </tr>
                    <tr>
                      <td>20次以上</td>
                      <td>有效投注额*20倍</td>
                    </tr>
                    <tr>
                      <td>30次以上</td>
                      <td>有效投注额*50倍</td>
                    </tr>
                    <tr>
                      <td>50次以上</td>
                      <td>有效投注额*100倍</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>★此活动仅限以下游戏，游戏列表如下：</p>
                  <table>
                    <tbody>
                    <tr>
                      <td colspan="4">活动列表</td>
                    </tr>
                    <tr>
                      <td>糖果派对</td>
                      <td>糖果派对2</td>
                      <td>连环夺宝</td>
                      <td>连环夺宝2</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>注：以上四款游戏产生的中奖注单每天都可申请一次，中奖注单最低有效投注1元起。（申请按美东时间计算）尚未注册/存款的亲们强烈建议您注册/存款，超
                    多优惠等着您哟！<a href="/#/home/register" style="color:#000;background:#ff0000;"
                               target="_blank">【立即注册GO】</a>
                  </p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所获得奖金一倍流水即可申请提款</p>
                  <p>2. 游戏中「钻头」也可计算于消除次数中，一次消除中不止一种宝石或糖果的也只能算一次，消除种类中显示“—”不在计算次数中</p>
                  <p>3. 糖果派对游戏中的当盘面中出现1个Free game图案，即中奖获得10次免费游玩的注单无法申请此项优惠</p>
                  <p>4. 会员每天所产生的中奖注单只能申请一次</p>
                  <p>5. 所有中奖者需在24小时内联系在线客服，逾期视为自动放弃</p>
                  <p>6. 所有因任何因素被取消注单，或因中奖后彩金加码游戏所产生之注单号，均不再计算范围内</p>
                  <p>7. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>8. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dzyy7"><img
                src="/static/xpj/img/youhui/dzyy7.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dzyy7">
                <div class="promotContent">
                  <h2 class="con_title">活动时间</h2>
                  <p>以官网展示为准</p>
                  <h2 class="con_title">活动对象</h2>
                  <p>新葡京赌场全体会员</p>
                  <h2 class="con_title">活动内容</h2>
                  <p>即日起会员于新葡京赌场MG电子游艺投注，一天内有效投注额达到5000元以上即可获得新葡京赌场送出的得意彩金，天天豪礼，乐享不停。</p>
                  <table>
                    <tbody>
                    <tr>
                      <td>MG当日有效投注</td>
                      <td>得意彩金</td>
                    </tr>
                    <tr>
                      <td>5000元+</td>
                      <td>38元</td>
                    </tr>
                    <tr>
                      <td>10000元+</td>
                      <td>58元</td>
                    </tr>
                    <tr>
                      <td>30000元+</td>
                      <td>188元</td>
                    </tr>
                    <tr>
                      <td>100000元+</td>
                      <td>888元</td>
                    </tr>
                    <tr>
                      <td>300000元+</td>
                      <td>1888元</td>
                    </tr>
                    <tr>
                      <td>500000元+</td>
                      <td>2888元</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>尚未注册/存款的亲们强烈建议您注册/存款，超多优惠等着您哟！<a href="/#/home/register" style="color:#000;background:#ff0000;"
                                                      target="_blank">【立即注册GO】</a>
                  </p>
                  <h2 class="con_title">申请方式</h2>
                  <p>符合条件请联系24小时在线客服申请</p>
                  <h2 class="con_title">优惠规则</h2>
                  <p>1. 所获得奖金需一倍流水即可申请提款</p>
                  <p>2. 每位会员每天仅限申请一次，天数按照美东时间计算</p>
                  <p>3. 此优惠活动仅限于MG电子游艺！</p>
                  <p>4. 无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为系统将自动拉入优惠黑名单将不能参与所有优惠，并取消该团队或个人优惠金额盈利金额，只保留本金</p>
                  <p>5. 新葡京赌场将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利，谢谢！</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="ifmodel"
      class-name="agent-transfer"
      width="424"
      :mask-closable="false"
    >
      <div
        class="vp-admin-wrap-close"
        slot="close"

      >
        <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div>
      </div>
      <div slot="header" class="tishi">
        <span>提示</span>
      </div>
      <div class="agent-con">
        <span class="iconspan"><span class="tispan">精彩活动，即将揭晓！</span></span>
        <a class='pay' href="javascript:void (0)" @click="close_messageAlert()">关闭</a>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  data () {
    return {
      dateTime: 0,
      ifmodel: false
      // lantern: ''
    }
  },
  methods: {
    messageAlert () {
      this.ifmodel = true
    },
    close_messageAlert () {
      this.ifmodel = false
    },
    // async getLantern () {
    //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
    //     type: 'lantern',
    //     desc_client_type: 'html'
    //   })
    //   if (res && res.code == 200) {
    //     if (!res.data.data.length) return false
    //     this.lantern = res.data.data[0] && res.data.data[0].description
    //   }
    //   // 参数： type: lantern 走马灯
    //   // 参数： type: popups 弹窗
    //   // 参数： type: notice 提示
    // },
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
    // this.getLantern()
    const res = await this.$http.create().get('/')
    if (res && res.status === 200) {
      this.dateTime = new Date(res.headers.date).getTime()
    }
    this.refresh()
  },
  updated () {
    // this.refresh()
  },
  watch: {},
  components: {}
}
</script>

<style lang="less" scoped>

  /deep/ .ivu-modal-mask {
    z-index: 2000;
  }

  /deep/ .ivu-modal-wrap {
    z-index: 2000;
  }

  /deep/ .ivu-modal-close {
    right: 0;
  }

  /deep/ .ivu-modal-footer {
    border-top: none;
    display: none;
  }

  /deep/ .ivu-modal {
    top: 50%;
    margin-top: -159px;
    height: 318px;
  }

  /deep/ .ivu-modal-header {
    border-bottom: none;
    padding: 0;
  }

  /deep/ .ivu-modal-close .ivu-icon-ios-close-empty {
    display: none;
  }

  /deep/ .ivu-modal-body {
    padding: 0;
  }

  /deep/ .ivu-modal-close {
    top: 3px;
  }

  .headerp {
    text-align: center;
    margin-top: 20px;
  }

  .tishi {
    height: 43px;
    line-height: 43px;
    font-size: 18px;
    color: 565656;
    background-color: #e5e5e5;
    border-radius: 6px 6px 0 0;

    span {
      margin-left: 30px;
    }
  }

  .agent-con {
    position: relative;
    height: 157px;

  }

  .icon-baojing {
    font-size: 45px;
    color: #f90;
  }

  .iconspan {
    margin-left: 82px;
    height: 45px;
    line-height: 45px;
    display: block;
    font-size: 16px;
    position: relative;
    margin-top: 40px;

    .tispan {
      margin-left: 10px;
      position: absolute;
      font-size: 26px;
      color: #1f1f1f;
    }
  }

  .pay {
    display: block;
    position: absolute;
    width: 160px;
    height: 35px;
    background: linear-gradient(180deg, #ff3492, #ff1e4f);
    text-align: center;
    line-height: 35px;
    color: #fff;
    font-size: 18px;
    left: 130px;
    top: 80px;
    border-radius: 10px;
  }

  .vp-admin-wrap-close {
    width: 60px;
    height: 40px;
    background: #f2f2f2;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;

    &:hover {
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
    }

    .vp-admin-wrap-close-empty {
      position: relative;
      background: #fff;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 56px;
      left: 2px;
      top: 2px;
      -moz-transition: all 0.5s ease-in;
      -webkit-transition: all 0.5s ease-in;
      -o-transition: all 0.5s ease-in;
      transition: all 0.5s ease-in;

      a {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url("/static/public/image/common/vp-common-close.png") #fff;
        background-size: 98% 98%;
        // transform: rotate(0deg);
      }

      &:hover {
        transform: translateX(40%);
        // &::before{
        //   color: #fff;
        // }
      }
    }
  }

  // #hdpublic {
  //   margin-top: -148px;
  //   height: 431px;
  //   background: #1a2a56 url(/static/xpj/img/banner_youhui.jpg) no-repeat center top;
  // }

  // #news {
  //   position: relative;
  //   z-index: 1;
  //   margin-top: -34px;
  //   height: 34px;
  //   border-bottom: 1px solid #263c78;
  //   background: url(/static/xpj/img/newbg.png);

  //   .wrapper {
  //     position: relative;
  //     width: 1040px;
  //     margin: 0 auto;
  //     padding: 0 0 0 95px;
  //     height: 34px;
  //     line-height: 34px;
  //     background: url(/static/xpj/img/news.png) no-repeat left center;

  //     .marquee {
  //       float: left;
  //       width: 945px;
  //       color: #FFFFFF;
  //       font-size: 10px;
  //     }
  //   }
  // }

  .content {
    background: #142044 url(/static/xpj/img/bg.jpg) no-repeat center top;
    padding-top: 20px;

    .cont_info {
      width: 1040px;
      margin: 0px auto;
      padding: 24px 39px;
      background-color: #131f3f;
      border: 1px solid #1e3064;

      img {
        width: 960px;
      }
    }
  }

  td {
    vertical-align: middle;
  }

  .promotContent {
    padding: 10px;
    color: #fff;
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
    color: #ffffff;
    text-align: justify;
  }

  .promotContent h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
  }

  .promotContent img {
    width: 980px;
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
    line-height: 1.5;
    margin-top: 12px;
    color: rgb(250, 220, 75);
  }

  #yh_pic a img {
    padding: 0 20px;
  }

</style>
