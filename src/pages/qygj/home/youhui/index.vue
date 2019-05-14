<template>
  <div>
    <div class="banner-bg">
      <!-- <div class="newgong"> -->
      <!-- <div class="newgong-content">
        <div class="notice">
          <i class="iconfont icon-sound"></i>
        </div>
        <div class="demolist list"> -->
      <!-- <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
              onmouseover="this.stop()"
              style="color: white; font-size: 14px; line-height: 40px;overflow: hidden;height: 40px;font-weight:600">
        <span v-html="lantern"></span>
      </marquee> -->
      <!-- </div>
    </div> -->
      <!-- </div>  -->
    </div>
    <div class="maincontainer" :class="{night:colorbool}">
      <div class="content">
        <div class="main clear">
          <div class="slider" v-for="(item,i) in list" :key="i" @click="onClick(item)">
            <div class="promotion-item">
              <div class="promotion-info">
                <div class="pic">
                  <img :src="item.img" alt="">
                </div>
                <div class="promotion-intro">
                  <div class="clear">
                    <h3 class="title">{{item.title}}</h3>
                    <div class="type-name">{{item.active_type}}</div>
                  </div>
                  <div class="subtitle">{{item.active_content}}</div>
                  <div class="active-time">
                    <i></i>
                    活动时间:{{item.time}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :scrollable=true :title="title" ok-text="关闭" v-model="showPopout" width="850" height="820"
           class="vp-popout-box">
      <div class="popout-box">
        <div class="close" @click="showPopout=false">
          <span></span>
        </div>
        <div v-html="content"></div>
        <!--<div class="context">
          <h4 class="act-title">活动时间1：</h4>
          <p class="act-text">2019年01月01日到2019年12月31日</p>

          <h4 class="act-title">活动对象：</h4>
          <p class="act-text">千赢所有会员</p>

          <h4 class="act-title">活动场所：</h4>
          <p class="act-text">PT国际、PG、千赢PT平台的“经典老虎机”和“电动吃角子老虎”、NT、QT、DT、AE、MG、SW、PNG或CQ9平台</p>
          <h4 class="act-title">活动内容：</h4>

          <div class="table-box">
            <table class="table table11" cellpadding="0" cellspacing="0">
              <tbody>
              <tr>
                <th>会员等级</th>
                <th>申请门槛</th>
                <th>上限金额</th>
                <th>救援金比例</th>
              </tr>
              <tr>
                <td>新会员，忠实会员</td>
                <td>存款100元负盈利10元及以上</td>
                <td>无上限</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>星级会员</td>
                <td>存款100元负盈利10元及以上</td>
                <td>无上限</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>黄金会员</td>
                <td>存款100元负盈利10元及以上</td>
                <td>无上限</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>白金会员</td>
                <td>存款100元负盈利10元及以上</td>
                <td>无上限</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>钻石会员</td>
                <td>存款100元负盈利10元及以上</td>
                <td>无上限</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>至尊会员</td>
                <td>存款100元负盈利10元及以上</td>
                <td>无上限</td>
                <td>10%</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="act-title">活动规则：</h4>
          <div class="act-rule-cont">
            <p><span class="num">1.</span> 奖金无需申请，每天14点之前统一派发到帐（计算您昨天00：00：00到23：59：59的输赢）;您进入
              <span class="cc0">“帐号管理”&#45;&#45;“全民自助”&#45;&#45;“救援金”自行领取。</span></p>
            <p><span class="num">2.</span> 救援金计算方式：
              <span class="cc0">（会员PT国际/PG/PT/NT/QT/DT/AE/MG/PNG/SW/CQ9平台负盈利 — 红利）*会员对应比例</span>。</p>
            <p class="cc0">特别说明：计算会员PT国际、PG、PT平台、NT、QT、DT、AE、MG、PNG、SW、CQ9负盈利和红利的时间为昨天00:00:00到23:59:59。</p>
            <p class="cc0">老虎机平台负盈利定义：千赢会员在PT平台的“经典老虎机”和“电动吃角子老虎机”的输值、PT国际、PG、NT、QT、DT、AE、MG、PNG、SW、CQ9老虎机的输值。</p>
            <p class="cc0">红利定义：全部平台的返水;全部平台优惠;红包</p>
            <p class="cc0">举例说明：您当天存款100元，优惠10元，返水10元，玩老虎机输值100</p>
            <p class="cc0">救援金=（100输值-10优惠红利-10返水红利）* 会员对应比例</p>
            <p><span class="num">3.</span> 领取救援金时，对应的老虎机平台的余额必须小于5元。</p>
            <p><span class="num">4.</span> 救援奖金需10倍流水即可提款。</p>
            <p class="cc0"><span class="num">5.</span> 救援金有效时间为60天（从派发当天开始计算），规定时间内未领取会自动取消。</p>
            <p><span class="num">6.</span> 此次优惠每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行帐号姓名及号码)
              及IP地址只能享有一次优惠,一旦确认为套利玩家，立即没收盈利和本金。</p>
            <p><span class="num">7.</span>
              救援金玩家必须在PT平台“经典老虎机”和“电动吃角子老虎”、PT国际、PG、NT、QT、DT、AE、MG、PNG、SW、CQ9老虎机平台游戏中进行投注。所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏，所有Pontoon游戏，各种Craps游戏，赌场战争游戏，娱乐场Hold'em游戏，牌九游戏，多旋转老虎机(地妖之穴、海洋公主、三倍利润、热带滚筒和部落生活)和老虎机奖金翻倍投注将不计算在内，如投注此类游戏将取消申领资格，扣除所有红利以及盈利。
            </p>
            <p><span class="num">8.</span> 千赢国际拥有本次活动的最终解释权。</p>
          </div>
        </div>-->
      </div>
    </Modal>
    <Modal v-model="ifmodel" class-name="agent-transfer" width="424" :mask-closable="false">
      <div class="vp-admin-wrap-close" slot="close">
        <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div>
      </div>
      <div slot="header" class="tishi">
        <span>提示</span>
      </div>
      <div class="agent-con">
        <span class="iconspan"><span class="tispan">精彩活动,敬请期待!</span></span>
        <a class='pay' href="javascript:void (0)" @click="close_messageAlert()">关闭</a>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        title:"",
        lantern: "",
        showPopout: false,
        ifmodel: false,
        content: "",
        list: [
          {
            title: '每日签到',
            img: require('../../../../../static/qygj/img/youhui/qiandao.jpg'),
            type: 'single',
            active_type: '专题优惠',
            active_content: '天天有奖8888元',
            time: '2019年4月1日至2019年12月31日',
            id: 1,
            param: '/static/qygj/html/active/qiandao/index.html'
          },
          {
            title: '棋牌上上签',
            img: require('../../../../../static/qygj/img/youhui/qpssq.jpg'),
            type: 'single',
            active_type: '专题优惠',
            active_content: '财运天天不打烊',
            time: '2019年4月1日至2019年12月31日',
            id: 2,
            param: '/static/qygj/html/active/qpssq/index.html'
          },
          {
            title: '下载云闪付',
            img: require('../../../../../static/qygj/img/youhui/ysf.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '即送88元',
            time: '2019年4月1日至2019年12月31日',
            id: 3,
            param: `<div class="context">
          <h4 class="act-title">活动时间：</h4>
          <p class="act-text">即日起</p>
          <h4 class="act-title">活动要求：</h4>
          <p class="act-text">2019年4月1日前注册的会员</p>
          <h4 class="act-title">申请方式：</h4>
          <p class="act-text">联系7*24小时在线客服申请</p>
           <h4 class="act-title">活动详情：</h4>
          <p class="act-text">要您手机下载云闪付提供截图，并且使用云闪付首次单笔充值100元即可申请88元礼金。</p>
          <h4 class="act-title">优惠规则：</h4>
          <div class="act-rule-cont">
            <p><span class="num">1.</span> 此优惠以人民币（CNY）计算。</p>
            <p><span class="num">2.</span> 每一个帐号只能申请一次。</p>
            <p><span class="num">3.</span> 每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠。</p>
            <p><span class="num">4.</span> 若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利。</p>
            <p><span class="num">5.</span> 此活动所得彩金的会员只需六倍流水即可申请出款，且可同时与其它优惠活动共享。</p>
          </div>
           <img src="../../../../../static/qygj/img/youhui/ysfc.png" alt="" class="img">
        </div>`
          },
          {
            title: '免息借呗',
            img: require('../../../../../static/qygj/img/youhui/jiebei.jpg'),
            type: 'dialog',
            active_type: '专题优惠',
            active_content: '最高可借1560000元',
            time: '2019年4月1日至2019年12月31日',
            id: 4,
            param: '/static/qygj/html/active/qpssq/index.html'
          },
          // 有表格
          {
            title: '巅峰钜惠 独特打造',
            img: require('../../../../../static/qygj/img/youhui/rkyh.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '公司入款优惠赠送 iphone xs Max',
            time: '2018年12月30日至2019年4月25日',
            id: 5,
            param: `<div class="context">
              <h4 class="act-title">活动时间：</h4>
              <p class="act-text">2018年12月30日至2019年4月25日</p>
              <h4 class="act-title">活动对象：</h4>
              <p class="act-text">澳门新葡京忠实新老会员</p>
              <h4 class="act-title">活动前言：</h4>
              <p class="act-text">创造非凡想象彰显财团风采，澳门新葡京恭祝您在2019猪年旺翻天，恭祝您福多财多好运多，公司入款优惠赠送iPhone XS Max全新打造不一样优惠价值豪情钜惠放肆任性送</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                                      <tr>
                                        <td>累计存款</td>
                                        <td>赠送机型</td>
                                        <td>领取上限</td>
                                      </tr>
                                      <tr>
                                        <td>600000+</td>
                                        <td>iPhone XS（64G）</td>
                                        <td>1部</td>
                                      </tr>
                                      <tr>
                                        <td>800000+</td>
                                        <td>iPhone XS Max（256G）</td>
                                        <td>1部</td>
                                      </tr>
                                      <tr>
                                        <td>1000000+</td>
                                        <td>iPhone XS Max（512G）</td>
                                        <td>1部</td>
                                      </tr>
                                      </tbody>
                </table>
              </div>
              <p class="act-text">例如：2018年12月30日至2019年4月25日期间累计汇款金额达到100w+ 就可以申请iPhone XS Max（512G）手机一部，活动时间内提前达到可提前申请</p>
              <h4 class="act-title">达到什么条件才能参加？</h4>
              <p class="act-text">通过手机银行转卡、网银转卡、支付宝转卡、微信转卡、ATM存款、柜台转帐，当天总存款投注额达到3倍流水系统自动默认参加（套利用户系统自动过滤）。</p>
                <h4 class="act-title">银行转帐需注意什么？</h4>
              <p class="act-text">在入款时需先查看→存取款→银行转帐当前展示的最新银行帐号，如入至停用帐号，该笔款项将不列入统计。</p>
              <h4 class="act-title">优惠如何领取？</h4>
              <p class="act-text">请使用邮箱发送至shenqingvip888@163.com申请，并在信件提供以下资料：<br>
              主旨：入款优惠iPhone XS Max <br>
                                      会员帐号：<br>
                                      会员姓名：<br>
                                      收件地址：<br>
                                      收件电话：<br>
                                      累计存款：例：1000000<br>
                                      申请机型：iPhone XS Max（512G）<br>
                                      机型颜色：例：金色
              </p>
              <h4 class="act-title">存款超过100万可以申请多部？</h4>
              <p class="act-text">存款超过100万可以3选1每个会员只能选择一部</p>
              <h4 class="act-title">可以兑换现金？</h4>
              <p class="act-text">该优惠使用实物的方式派送，不能兑换现金，谢谢</p>
              <h4 class="act-title">提前达到条件可以先领取？</h4>
              <p class="act-text">可以的，在活动时间内只要您到达指定条件任何时间都可以发送申请</p>
              <h4 class="act-title">通过线上支付可以参与？</h4>
              <p class="act-text">不可以，通过线上支付的金额将不列入计算，该优惠只针对银行转帐的会员。</p>
              <h4 class="act-title">银行转帐有什么回馈？</h4>
              <p class="act-text">通过银行转帐的会员不仅可以领到入款1%（现金派送）还能累计存款申请iPhone XS Max哦~优惠多多更划算</p>
              <h4 class="act-title">该优惠有限制游戏？</h4>
              <p class="act-text">通过银行转帐的会员游戏【香港六合彩】将不列入统计名单。</p>
              <h4 class="act-title">优惠规则：</h4>
              <div class="act-rule-cont">
                <p><span class="num">1.</span> 此活动统计累计存款总额均由系统自动统计如有异议，以澳门新葡京查询为准。</p>
                <p><span class="num">2.</span> 每个会员每个帐号在活动时间内只能申请一部。</p>
                <p><span class="num">3.</span> 此活动在规定时间内有提前到达条件可随时发送邮箱申请。</p>
                <p><span class="num">4.</span> 此活动在统计的时间内【充值三倍以下打码】将不符合参与此优惠。</p>
                <p><span class="num">5.</span> 此活动在统计的时间内【存在多个对打行为】将不符合参与此优惠。</p>
                <p><span class="num">6.</span> 	澳门新葡京保留对此活动的最终解释权，且在任何情况下可随时更改，停止，取消该优惠活动的权利。</p>
              </div>
            </div>`
          },
          {
            title: '视讯金管家',
            img: require('../../../../../static/qygj/img/youhui/sxjgj.jpg'),
            type: 'single',
            active_type: '专题优惠',
            active_content: '成就永久收益',
            time: '2019年4月1日至2019年12月31日',
            id: 6,
            param: '/static/qygj/html/active/sxjgj/index.html'
          },
          {
            title: '棋牌金管家',
            img: require('../../../../../static/qygj/img/youhui/qpjgj.jpg'),
            type: 'single',
            active_type: '专题优惠',
            active_content: '成就永久收益',
            time: '2019年4月1日至2019年12月31日',
            id: 7,
            param: '/static/qygj/html/active/qpjgj/index.html'
          },
          {
            title: '彩票金管家',
            img: require('../../../../../static/qygj/img/youhui/cpjgj.jpg'),
            type: 'single',
            active_type: '专题优惠',
            active_content: '成就永久收益',
            time: '2019年4月1日至2019年12月31日',
            id: 8,
            param: '/static/qygj/html/active/cpjgj/index.html'
          },
          {
            title: '电子金管家',
            img: require('../../../../../static/qygj/img/youhui/dzjgj.jpg'),
            type: 'single',
            active_type: '专题优惠',
            active_content: '成就永久收益',
            time: '2019年4月1日至2019年12月31日',
            id: 9,
            param: '/static/qygj/html/active/dzjgj/index.html'
          },
          {
            title: '2019年12期亿元现金回馈',
            img: require('../../../../../static/qygj/img/youhui/publish.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '2019年精彩无限',
            time: '2019年1月1日至2019年12月31日',
            id: 10,
            param: `<div class="context">
              <h4 class="act-title">活动前言：</h4>
              <p class="act-text">感谢各位新老会员一路的支持与陪伴，往后每一期的亿元彩金将更加丰富精彩。</p>
              <p class="act-text">不忘初心～感恩前进～我司推出更多的优惠专题【金管家】【免息借呗】【帐号买卖】，每个会员帐号都享有至高无上的价值体验，终身有效！机会来啦！赶紧呼朋唤友一起分享吧！</p>
              <h4 class="act-title">活动详情：</h4>
              <p class="act-text">2019年猪年“诸事如意”。每月亿元现金回馈，澳门新葡京将继续遵从我们的承诺优惠永不停止， “服务至上，客户第一”的经营理念，竭诚为每一位玩家提供最贴心最真诚的优惠。</p>
            <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
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
                                        <td>第四期亿元彩金（策划中）</td>
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
              </div>
              <h4 class="act-title">品牌优势：</h4>
              <div class="act-rule-cont">
                <p><span class="num">1.</span> 	资金足够雄厚：信誉遥遥领先于其它娱乐城。</p>
                <p><span class="num">2.</span> 优惠足够多样：【每月亿元现金】【视讯金管家】【棋牌金管家】【彩票金管家】【电子金管家】等大型活动。</p>
                <p><span class="num">3.</span> 创新足够超前：涉及金融领域，【免息借呗】单一会员最高可借1560000元！【帐号自由买卖】体现会员帐号价值。</p>
                <p><span class="num">4.</span> 	支付足够先进：网银、支付宝、微信、银联支付单笔10-50000元，支付秒到帐。</p>
                <p><span class="num">5.</span> 取款足够自由：24小时自由取款，不限次数免手续费，3-5分钟火速到帐！</p>
                <p><span class="num">6.</span> 	营业足够合法：澳门新葡京持有各地区博彩线上牌照。</p>
              </div>
            </div>`
          },
          {
            title: '2019年第3期亿元彩金大回馈',
            img: require('../../../../../static/qygj/img/youhui/201903.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '豪礼无限送',
            time: '2019年3月1日至2019年3月31日',
            id: 11,
            param: `<div class="context">
                <h4 class="act-title">活动内容：</h4>
                <p class="act-text">感谢各位会员长期以来对澳门新葡京的支持与厚爱，澳门新葡京将会给予会员最大的优惠和红利，2019年第三期亿元现金将继续进行，无论新老会员，只要您在2019-03-01至2019-03-31有进行存款并且游戏，无论输赢都将参与本期的亿元现金回馈活动。</p>
              <div class="table-box">
                  <table class="table table11" cellpadding="0" cellspacing="0">
                    <tbody>
                                        <tr>
                                          <td style="width: 33%;">活动对象</td>
                                          <td>总有效投注</td>
                                          <td>赠送金额</td>
                                        </tr>
                                        <tr>
                                          <td rowspan="8">2019年3-1日至3-31日 <br> 总有效投注</td>
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
                </div>
                <p class="act-text">月月亿元现金回馈，豪礼永不停，只要您有在澳门新葡京注册，存款，游戏将自动参与我们的月月亿元现金回馈，我司同时推出更多的优惠专题【金管家】【免息借呗】【帐号买卖】，每个会员帐号都享有至高无上的价值体验，终身有效！尽显您会员帐号的价值！</p>
                <h4 class="act-title">优惠规则：</h4>
              <div class="act-rule-cont">
                  <p><span class="num">1.</span> 此优惠以人民币（CNY）计算，统计时间：美东时间2019-03-01到2019-03-31此外时间不予以计算</p>
                  <p><span class="num">2.</span> 会员总有效投注由系统自动统计，若有任何异议。以澳门新葡京查询结果为准</p>
                  <p><span class="num">3.</span> 此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p><span class="num">4.</span> 此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p><span class="num">5.</span> 此活动在统计时间内【相同IP的会员帐号】都不符合参与此活动，系统无法给予自动派送彩金</p>
                  <p><span class="num">6.</span> 此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                  <p><span class="num">7.</span> 此活动无需申请全由系统自动派送。派送时间2019-04-08 15:00请各位会员注意查收</p>
                </div>
                <h4 class="act-title">优惠与条款：</h4>
                <div class="act-rule-cont">
                  <p><span class="num">1.</span> 每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                  <p><span class="num">2.</span> 若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                  <p><span class="num">3.</span> 澳门新葡京所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                  <p><span class="num">4.</span> 澳门新葡京将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                </div>
              </div>`
          },
          {
            title: '惊喜百家乐',
            img: require('../../../../../static/qygj/img/youhui/bjl.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '庄家“一点绝杀”闲家',
            time: '2019年4月1日至2019年12月31日',
            id: 12,
            param: `<div class="context">
              <h4 class="act-title">活动详情：</h4>
              <p class="act-text">【澳门新葡京】真人娱乐场，在一局牌面中出现庄家以最终牌面和值为1点绝杀闲家最终牌面和值0点时，即可回馈投注庄家金额30%奖金，最高奖金1888元（每人每天只限领取一次彩金优惠）</p>
              <p class="act-text">【例如：百家乐游戏中会员投注庄家100元，庄家以最终牌面和值为1点胜闲家以最终牌面和值为0点，庄家以1点绝杀闲家0点，会员即申请投注庄家金额30%奖励】其余玩法和点杀均不计算。</p>
              <h4 class="act-title">活动细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>	此活动是指在百家乐一局游戏中出现庄家以最终牌面和值为1点胜闲家最终牌面和值为0点并且当局中最低投注庄家金额为100元即可申请领取投注庄家金额30%彩金，在同一局中同时投注庄家与闲家则无法领取该彩金优惠。</p>
              <p><span class="num">2.</span>	此活动均按北京时间计算，会员满足条件后，请联系在线客服申请，彩金将于30分钟内自动派发至会员帐号，当天的注单只能当天领取，逾期则视为自动放弃。（每位会员每天仅限领取一次彩金优惠）</p>
              <p><span class="num">3.</span>	此优惠只限于娱乐真人游戏，娱乐其他游戏不参与此活动，如果领取此优惠投注其它游戏将扣除所得，退回本金</p>
              <p><span class="num">4.</span>	此活动在活动时间内【注册多个会员帐号】只能使用一个帐号申请，其余帐号均不符合申请条件</p>
              <p><span class="num">5.</span>	此活动所得彩金的会员只需一倍流水即可申请出款</p>
              <p><span class="num">6.</span>	在活动时间内【系统判定的套利会员】均不符合申请条件</p>
              <p><span class="num">7.</span>	澳门新葡京保留对此活动的最终解释权，且在任何情况下可随时更改，停止，取消该优惠活动的权利</p>
              </div>
            </div>`
          },
          {
            title: '银联支付 存款大回馈',
            img: require('../../../../../static/qygj/img/youhui/yinlian.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '天天回馈888元',
            time: '2019年4月1日至2019年12月31日',
            id: 13,
            param: `<div class="context">
              <h4 class="act-title">活动时间：</h4>
              <p class="act-text">即日起 (结束时间以官网通知为准)</p>
              <h4 class="act-title">活动详情：</h4>
                <p class="act-text">通过【银联钱包】、【银联支付】中存款支付，以当日的总存款金额为准，次日即可获得相应的奖励，最高888元，精彩送不停。</p>
            <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
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
              </div>
              <p class="act-text">注：每个帐号每日仅限申请一次，建议累计到最高存款总额申请。</p>
              <h4 class="act-title">活动规则：</h4>
            <div class="act-rule-cont">
                <p><span class="num">1.</span> 此活动统计时间：北京时间中午12点至次日北京时间中午12点，此外时间将不予计算当天存款总额。</p>
                <p><span class="num">2.</span> 此活动无需申请全程由系统自动派送，派送时间于统计时间中午15:30分请各位会员注意查收。</p>
                <p><span class="num">3.</span> 会员使用银联钱包、银联支付当日存款总额均由系统自动计算，如有任何异议，以澳门新葡京查询结果为准。</p>
                <p><span class="num">4.</span> 此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，系统无法给予自动派送彩金。</p>
                <p><span class="num">5.</span> 此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金。</p>
                <p><span class="num">6.</span> 此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享。</p>
                <p><span class="num">7.</span> 澳门新葡京保留对此活动的最终解释权，且在任何情况下可随时更改，停止，取消该优惠活动的权利。</p>
              </div>
            </div>`
          },
          {
            title: '周岁礼金',
            img: require('../../../../../static/qygj/img/youhui/birthday.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '风雨同舟 一起前行',
            time: '2019年4月1日至2019年12月31日',
            id: 14,
            param: `<div class="context">
                <h4 class="act-title">活动详情：</h4>
                <p class="act-text">风雨同舟,一起前行，澳门新葡京特别推出 周岁奖 礼金活动，凡是在澳门新葡京注册满一年以上的会员，皆有机会申请周岁礼金。存款次数越多，礼金越高。赶紧来行动吧</p>
                <h4 class="act-title">活动时间：</h4>
                  <p class="act-text">即日起</p>
                            <h4 class="act-title">活动内容：</h4>
              <div class="table-box">
                  <table class="table table11" cellpadding="0" cellspacing="0">
                    <tbody>
                                        <tr>
                                          <td>申请条件</td>
                                          <td>总存款次数</td>
                                          <td>本月总存款</td>
                                          <td>本月总有效投注</td>
                                          <td>周岁礼金</td>
                                        </tr>
                                        <tr>
                                          <td>注册满一年以上</td>
                                          <td>88</td>
                                          <td>5000+</td>
                                          <td>20000+</td>
                                          <td>88</td>
                                        </tr>
                                        <tr>
                                          <td>注册满二年以上</td>
                                          <td>188</td>
                                          <td>10000+</td>
                                          <td>50000+</td>
                                          <td>188</td>
                                        </tr>
                                        <tr>
                                          <td>注册满三年以上</td>
                                          <td>288</td>
                                          <td>30000+</td>
                                          <td>100000+</td>
                                          <td>288</td>
                                        </tr>
                                        </tbody>
                  </table>
                </div>
                <p class="act-text">统计时间以美东时间为准</p>
                <p class="act-text">注：本活动的有效投注仅限真人视讯和电子游艺有效 （其他游戏一律不计算有效投注）</p>
                <h4 class="act-title">申请方式：</h4>
                          <p class="act-text">联系24小时在线客服申请</p>
                          <p class="act-text">符合申请条件的会员可立即进行申请 （客服会在受理后10分钟之内进行派送彩金）</p>
              <h4 class="act-title">规则与条款：</h4>
              <div class="act-rule-cont">
                <p><span class="num">1.</span> 任何形式的同IP、同姓名、同一张银行卡号、或相同（似）关联信息，仅限领取一次周岁奖。</p>
                <p><span class="num">2.</span> 周岁奖仅统计各平台电子游艺和真人视讯的有效投注，其他类型游戏不计算在内。</p>
                <p><span class="num">3.</span> 申请条件必须全部满足，注册时间、总存款次数、本月总存款、本月总有效投注缺一不可。</p>
                <p><span class="num">4.</span> 参与此优惠会员所得周岁彩金，一倍有效投注即可提款，游戏无限制。</p>
                <p><span class="num">5.</span> 彩金均由系统自动统计，如对统计结果存在疑问以澳门新葡京查询结果为准。</p>
                <p><span class="num">6.</span> 澳门新葡京保留对该活动的最终解释权;以及在无通知的情况下修改、终止活动的权利;适用于所有优惠。</p>
                </div>
              </div>`
          },
          {
            title: '畅玩捕鱼 豪礼不停',
            img: require('../../../../../static/qygj/img/youhui/buyu.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '万炮齐发 一炮而鸣',
            time: '2019年4月1日至2019年12月31日',
            id: 15,
            param: `<div class="context">
                      <h4 class="act-title">活动时间：</h4>
                      <p class="act-text">即日起</p>
                      <h4 class="act-title">活动要求：</h4>
                        <p class="act-text">捕鱼类游戏</p>
                                  <h4 class="act-title">活动详情：</h4>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                                              <tr>
                                                <td>炮弹金额（元）</td>
                                                <td>鱼的倍数</td>
                                                <td>获得彩金</td>
                                                <td>派送时间</td>
                                              </tr>
                                              <tr>
                                                <td>1+</td>
                                                <td rowspan="6">30倍以上的鱼</td>
                                                <td>8</td>
                                                <td rowspan="6">美东时间当日联系在线客服进行申请</td>
                                              </tr>
                                              <tr>
                                                <td>5+</td>
                                                <td>18</td>
                                              </tr>
                                              <tr>
                                                <td>10+</td>
                                                <td>28</td>
                                              </tr>
                                              <tr>
                                                <td>20+</td>
                                                <td>38</td>
                                              </tr>
                                              <tr>
                                                <td>50+</td>
                                                <td>58</td>
                                              </tr>
                                              <tr>
                                                <td>99+</td>
                                                <td>88</td>
                                              </tr>
                                              </tbody>
                        </table>
                      </div>
                      <p class="act-text">以美东时间为准</p>
                      <h4 class="act-title">申请方式：</h4>
                                <p class="act-text">提供会员帐号+捕鱼平台+注单号、联系24小时在线客服进行申请</p>
            <h4 class="act-title">规则与条款：</h4>
                    <div class="act-rule-cont">
                    <p><span class="num">1.</span> 所获得彩金需一倍流水才能取款。</p>
                    <p><span class="num">2.</span> 中奖的注单需当日进行申请（以美东时间为准），逾期视为自动放弃。</p>
                    <p><span class="num">3.</span> 澳门新葡京的所有优惠特为玩家而设,如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利。</p>
                    <p><span class="num">4.</span> 澳门新葡京保留对该活动的最终解释权；以及在无通知的情况下修改、终止活动的权利；适用于所有优惠。</p>
                      </div>
                    </div>`
          },
          {
            title: '快速彩票 奖金大派送',
            img: require('../../../../../static/qygj/img/youhui/kscp.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '每日加奖8888元',
            time: '2018年9月15日起',
            id: 16,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">活动时间：2018年9月15号</p>
                      <p class="act-text">截止时间：官网展示为准</p>
                      <p class="act-text">活动对象：全体新老玩家</p>
                      <p class="act-text">活动注释：会员帐号成就永久收益【快速系列彩票】不计输赢下注皆有返利</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                                              <tr>
                                                <td>活动项目</td>
                                                <td>有效投注</td>
                                                <td>活动奖金</td>
                                              </tr>
                                              <tr>
                              <td rowspan="9">
                                快速系列<br>三分系列<br>五分系列
                              </td>
                              <td>5000</td>
                              <td>18</td>
                            </tr>
                            <tr>
                              <td>10000</td>
                              <td>38</td>
                            </tr>
                            <tr>
                              <td>50000</td>
                              <td>188</td>
                            </tr>
                            <tr>
                              <td>100000</td>
                              <td>388</td>
                            </tr>
                                              <tr>
                                                <td>300000</td>
                                                <td>888</td>
                                              </tr>
                                              <tr>
                                                <td>500000</td>
                                                <td>1888</td>
                                              </tr>
                                              <tr>
                                                <td>1000000</td>
                                                <td>3888</td>
                                              </tr>
                                              <tr>
                                                <td>3000000</td>
                                                <td>5888</td>
                                              </tr>
                                              <tr>
                                                <td>5000000</td>
                                                <td>8888</td>
                                              </tr>
                                              </tbody>
                        </table>
                      </div>
            <h4 class="act-title">活动规则：</h4>
                    <div class="act-rule-cont">
                    <p><span class="num">1.</span> 所获得的彩金需一倍流水才能进行提款</p>
                    <p><span class="num">2.</span> 每天每个会员只能申请一次</p>
                    <p><span class="num">3.</span> 统计时间为美东时间（当天中午12:00至次日中午11:59:59）</p>
                    <p><span class="num">4.</span> 每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                    <p><span class="num">5.</span> 若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                    <p><span class="num">6.</span> 澳门新葡京所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                    <p><span class="num">7.</span> 澳门新葡京将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                      </div>
                    </div>`
          },
          {
            title: '开元棋牌 豪礼相赠',
            img: require('../../../../../static/qygj/img/youhui/ky_hl.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '玩家对垒 公平竞技',
            time: '2019年4月1日至2019年12月31日',
            id: 17,
            param: `<div class="context">
                      <h4 class="act-title">活动详情：</h4>
                      <p class="act-text">会员于KG开元棋牌游戏中，只要每天有效投注达到以下等级者，即可获得澳门新葡京赠送的额外豪礼，最高可获得8888元！</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                                                        <tr>
                                                            <td>每日有效投注</td>
                                                            <td>可获彩金</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10000+</td>
                                                            <td>18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50000+</td>
                                                            <td>88</td>
                                                        </tr>
                                                        <tr>
                                                            <td>100000+</td>
                                                            <td>188</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500000+</td>
                                                            <td>588</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1000000+</td>
                                                            <td>888</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3000000+</td>
                                                            <td>1888</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5000000+</td>
                                                            <td>5888</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10000000+</td>
                                                            <td>8888</td>
                                                        </tr>
                                                        </tbody>
                        </table>
                      </div>
                      <p class="act-text">注：日结时间，以当日美东时间00:00至次日美东时间23:59（即北京时间12:00，次日11:59）为计算一天。</p>
                      <h4 class="act-title">申请方式：</h4>
                      <p class="act-text">请联系24小时在线客服申请</p>
                      <h4 class="act-title">优惠规则：</h4>
            <div class="act-rule-cont">
            <p><span class="num">1.</span> 每个会员每天只能申请一次（逾期没有领取视为自动放弃）</p>
            <p><span class="num">2.</span> 会员总有效投注均由系统统计为准，若有任何异议。以澳门新葡京查询结果为准</p>
            <p><span class="num">3.</span> 此活动在统计时间内【充值投注一倍流水的会员】都不符合参与此活动，无法给予自动派送彩金</p>
            <p><span class="num">4.</span> 此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，无法给予自动派送彩金</p>
            <p><span class="num">5.</span> 此活动在统计时间内【相同IP的会员帐号】都不符合参与此活动，无法给予自动派送彩金</p>
            <p><span class="num">6.</span> 此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享</p>
                      </div>
            <h4 class="act-title">优惠与条款：</h4>
                    <div class="act-rule-cont">
                      <p><span class="num">1.</span> 每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                      <p><span class="num">2.</span> 若会员有重复申请或注册多帐号行为，公司保留取消或收回优惠彩金及盈利的权利</p>
                      <p><span class="num">3.</span> 澳门新葡京所有优惠活动为真实玩家而设，任何团队或个人以不诚实的方式套取红利的行为，公司有权保留冻结、取消该团队或个人帐号及帐号余额的权利</p>
                      <p><span class="num">4.</span> 澳门新葡京将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                      </div>
                    </div>`
          },
          {
            title: '开元棋牌 亏损救援金',
            img: require('../../../../../static/qygj/img/youhui/ky_ks.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '万人对战 公平竞技',
            time: '2019年4月1日至2019年12月31日',
            id: 18,
            param: `<div class="context">
                      <h4 class="act-title">活动详情：</h4>
                      <p class="act-text">澳门新葡京棋牌对战游戏强势加盟、公平竞技，开元棋牌拥有多种玩法：炸金花、三公、抢庄牛牛、德州扑克、二八杠等等更多游戏持续更新中！</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                                                        <tr>
                                                            <td>当天亏损金额</td>
                                                            <td>次日赠送彩金</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1000+</td>
                                                            <td>8</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3000+</td>
                                                            <td>18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5000+</td>
                                                            <td>38</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10000+</td>
                                                            <td>88</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50000+</td>
                                                            <td>288</td>
                                                        </tr>
                                                        <tr>
                              <td>100000+</td>
                              <td>588</td>
                            </tr>
                            <tr>
                              <td>500000+</td>
                              <td>1888</td>
                            </tr>
                            <tr>
                              <td>1000000+</td>
                              <td>3888</td>
                            </tr>
                                                        </tbody>
                        </table>
                      </div>
                      <p class="act-text">注：日结时间，以当日美东时间00:00至次日美东时间23:59（即北京时间12:00，次日11:59）为计算一天。</p>
                      <h4 class="act-title">申请方式：</h4>
                      <p class="act-text">请联系24小时在线客服申请</p>
            <h4 class="act-title">优惠与条款：</h4>
                    <div class="act-rule-cont">
                    <p><span class="num">1.</span> 所有彩金只需1倍下注即可提现，每个会员每天只能申请一次</p>
                    <p><span class="num">2.</span> 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用于确认是否享有该优惠的资质</p>
                    <p><span class="num">3.</span> 每位玩家、每户、每一地址、每一电子邮箱、每一电话、相同的支付方式及IP地址等只能一个帐号享有优惠</p>
                    <p><span class="num">4.</span> 澳门新葡京将保留对活动的最终解释权，且在任何情况下可随时更改、停止、取消该优惠活动的权利</p>
                      </div>
                    </div>`
          },
          // 开始部分
          {
            title: '你取我就送 ',
            img: require('../../../../../static/qygj/img/youhui/gift.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '让"礼"遇见你',
            time: '2019年4月1日至2019年12月31日',
            id: 19,
            param: `<div class="context">
              <h4 class="act-title">活动对象：</h4>
              <p class="act-text">澳门新葡京忠实新老会员</p>
              <h4 class="act-title">活动时间：</h4>
              <p class="act-text">澳门新葡京忠实新老会员</p>
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">贺新年，迎新春，澳门新葡京2019最给力的优惠活动，取款之后还有礼。</p>
              <p class="act-text">即日起，凡是在澳门新葡京单笔存款超过100元以上的，取款金额是充值金额10倍以上的，都有资格申请你取我就送的优惠活动。</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                                      <tr>
                                        <td>单笔存款金额</td>
                                        <td>取款金额</td>
                                        <td>赠送金额</td>
                                      </tr>
                                      <tr>
                                        <td>100-999</td>
                                        <td rowspan='5'>存款金额的十倍</td>
                                        <td>38</td>
                                      </tr>
                                      <tr>
                                        <td>1000-9999</td>

                                        <td>188</td>
                                      </tr>
                                      <tr>
                                        <td>10000-49999</td>

                                        <td>888</td>
                                      </tr>
                                      <tr>
                                        <td>50000-99999</td>

                                        <td>1888</td>
                                      </tr>
                                       <tr>
                                        <td>100000以上</td>

                                        <td>8888</td>
                                      </tr>
                                      </tbody>
                </table>

              </div>
              <p class="act-text">注：该活动仅限娱乐真人视讯、彩票游戏、体育赛事的会员申请（六合彩和电子游艺不符合申请条件）。</p>
              <h4 class="act-title">申请方式</h4>
              <p class="act-text">联系24小时在线客服申请。</p>
                <h4 class="act-title">活动规则</h4>
              <p class="act-text">1.此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享；</p>
              <p class="act-text">2.仅限当天有效，每个会员每日只限申请一次（美东时间计算）；</p>
              <p class="act-text">3.会员取款一切都按照财务系统审核出款成功为准，其它情况一律视为不符合标准；</p>
              <p class="act-text">4.此活动在统计时间内【注册多个会员帐号】都不符合参与此活动，系统无法给予自动派送彩金；</p>
              <p class="act-text">5.参与该优惠表示您同意《一般优惠规则与条款》。</p>

                <h4 class="act-title">优惠规则与条款</h4>
              <p class="act-text">1.所有优惠以人民币(CNY)为结算金额，以美东时间(EDT)为计时区间；</p>
              <p class="act-text">2.每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行帐号)
                                            及IP地址只能享有一次优惠；若会员有重复申请帐号行为，公司保留取消或收回会员优惠彩金的权利；</p>
              <p class="act-text">3.澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利；</p>
              <p class="act-text">4.若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；</p>
              <p class="act-text">5.当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团队或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保可以从该存款红利或其它推广活动提供的优惠获利，澳门新葡京保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利，包括任何注单异常的电子游戏均不参与公司的任何优惠。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；</p>
              <p class="act-text">6.澳门新葡京保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。</p>

               <h4 class="act-title">优惠规则与条款：</h4>
                <div class="act-rule-cont">
                  <p><span class="num">1.</span> 所有优惠以人民币（CNY）为计算金额，以美东时间（EDT）为计时时间。</p>
                  <p><span class="num">2.</span> 每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行帐号)及IP地址只能享有一次优惠；若会员有重复申请帐号行为，公司保留取消或收回会员优惠彩金的权利；</p>
                  <p><span class="num">3.</span> 澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利；</p>
                  <p><span class="num">4.</span>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质；</p>
                  <p><span class="num">5.</span> 当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团队或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保可以从该存款红利或其它推广活动提供的优惠获利，澳门新葡京保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利，包括任何注单异常的电子游戏均不参与公司的任何优惠。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；</p>
                  <p><span class="num">6.</span> 澳门新葡京保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利，适用于所有优惠。</p>
                </div>


            </div>`
          },
          {
            title: '微信全新版本 ',
            img: require('../../../../../static/qygj/img/youhui/wxx.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '微信支付转帐到银行卡秒到帐',
            time: '2019年4月1日至2019年12月31日',
            id: 20,
            param: `<div class="context">
              <img src="../../../../../static/qygj/img/youhui/wxxc.png" class="img">
            </div>`
          },
          {
            title: '体育投注 天天有奖',
            img: require('../../../../../static/qygj/img/youhui/tiyu.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '现金直送1888元',
            time: '2019年4月1日至2019年12月31日',
            id: 21,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">活动时间：2019年01月01号</p>
              <p class="act-text">活动对象：澳门新葡京全体新老会员</p>
              <p class="act-text">活动期间：在澳门新葡京体育赛事的游戏投注总额，符合以下条件的会员即可申请赠送彩金，领取每日相应投注额奖金。</p>

              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>当天有效投注</td>
                        <td>2万</td>
                        <td>5万</td>
                        <td>10万</td>
                        <td>20万</td>
                        <td>50万</td>
                        <td>80万</td>
                      </tr>
                      <tr>
                        <td>赠送彩金</td>
                        <td>18元</td>
                        <td>88元</td>
                        <td>188元</td>
                        <td>288元</td>
                        <td>588元</td>
                        <td>1888元</td>
                      </tr>
                      </tbody>
                </table>

              </div>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">符合此活动的会员请于次日中午13:00至16:00联系在线客服申请</p>
              <h4 class="act-title">活动细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
              <p><span class="num">2.</span>所有平局，无效，被取消或对赌的注单将不被计算在有效投注额内。</p>
              <p><span class="num">3.</span>会员有效投注额均由系统自动统计，若有任何异议，以澳门新葡京查询结果为准。</p>
              <p><span class="num">4.</span>符合此活动的会员请于次日中午13:00至16:00联系在线客服申请，过此期间未来申请的会员视为放弃此优惠。</p>
              <p><span class="num">5.</span>此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其它优惠活动共享。</p>
              <p><span class="num">6.</span>此活动在统计时间内【注册多个会员帐号】都不符合赠送彩金条件，将无法申请此彩金。</p>
              <p><span class="num">7.</span>澳门新葡京保留对此活动的最终解释权，且在任何情况下可随时更改，停止，取消该优惠活动的权利。</p>
              </div>


            </div>`
          },

          {
            title: '公司网站打开非新葡京页面',
            img: require('../../../../../static/qygj/img/youhui/dns.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '修改dns解决一切非正常问题',
            time: '2019年4月1日至2019年12月31日',
            id: 22,
            param: `<div class="context">
              <img src="../../../../../static/qygj/img/youhui/dnsc.jpg" class="img">
            </div>`
          },

           {
            title: '大炮一响 黄金万两',
            img: require('../../../../../static/qygj/img/youhui/wzby.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '玩"赚"捕鱼 天天返利',
            time: '2019年4月1日至2019年12月31日',
            id: 23,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">即日起，所有会员于澳门新葡京投注MW千炮捕鱼、AG捕鱼王II，按照美东时间计算当日投注盈利或亏损100元及以上，次日即可申请相对应的彩金，每日最高可达8888元。</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>当日亏损或盈利</td>
                        <td>盈利可获彩金</td>
                        <td>亏损可获彩金</td>

                      </tr>
                      <tr>
                        <td>100+</td>
                        <td>3</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>500+</td>
                        <td>15</td>
                        <td>28</td>
                      </tr>
                      <tr>
                        <td>1000+</td>
                        <td>25</td>
                        <td>38</td>
                      </tr>
                      <tr>
                        <td>3000+</td>
                        <td>58</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>5000+</td>
                        <td>68</td>
                        <td>138</td>
                      </tr>
                      <tr>
                        <td>10000+</td>
                        <td>118</td>
                        <td>188</td>
                      </tr>
                      <tr>
                        <td>50000+</td>
                        <td>388</td>
                        <td>888</td>
                      </tr>
                      <tr>
                        <td>100000+</td>
                        <td>1888</td>
                        <td>3888</td>
                      </tr>
                      <tr>
                        <td>500000+</td>
                        <td>5888</td>
                        <td>8888</td>
                      </tr>
                      </tbody>
                </table>

              </div>
              <p class="act-text">例如：当日在AG电子游艺【捕鱼王2代】游戏中亏损10000元则次日可申请获得的加赠彩金为188元。</p>
              <p class="act-text">例如：当日在MW大满贯电子【千炮捕鱼】游戏中盈利3000元则次日可申请获得的加赠彩金为58元。</p>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">会员确定达到申请要求后，请于北京时间次日12点后24小时内联系在线客服进行申请，逾期视为自动放弃。</p>
              <h4 class="act-title">活动细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所获得彩金只需一倍打码即可出款。</p>
              <p><span class="num">2.</span>日结区间以北京时间当日中午12：00开始至次日北京时间中午12:00计算。</p>
              <p><span class="num">3.</span>澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结 取消该团体或个人帐号及帐号结余的权利。</p>
              <p><span class="num">4.</span>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
              <p><span class="num">5.</span>此活动可与其它优惠同时进行享用。</p>
              <p><span class="num">6.</span>澳门新葡京保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
              </div>
            </div>`
          },

           {
            title: '玩"赚"连环夺宝',
            img: require('../../../../../static/qygj/img/youhui/lhdb.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '糖果派对天天消除拿大奖',
            time: '2019年4月1日至2019年12月31日',
            id: 24,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">连环夺宝，糖果派对-消除大作战，领取无限奖金！！！</p>
              <p class="act-text">会员于BBIN电子游艺【连环夺宝】或【糖果派对2】游戏中，单一局号“消除”次数达7次以上，即可获赠惊喜加倍彩金，最高可达50倍奖励，最高彩金无上限！</p>

              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>单局消除次数</td>
                        <td>彩金奖励</td>

                      </tr>
                      <tr>
                        <td>7次或以上</td>
                        <td>有效投注金额X3倍</td>
                      </tr>
                      <tr>
                        <td>12次或以上</td>
                        <td>有效投注金额X10倍</td>
                      </tr>
                       <tr>
                        <td>15次或以上</td>
                        <td>有效投注金额X20倍</td>
                      </tr>
                      <tr>
                        <td>20次或以上</td>
                        <td>有效投注金额X50倍</td>
                      </tr>
                      </tbody>
                </table>

              </div>
              <p class="act-text">范例：会员于BBIN电子游艺中的糖果派对连续消除7次及以上，每线下注10元，所获奖金倍数为3倍，可得奖金为30元。</p>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">会员确定达到申请要求后，请于注单产生后24小时内联系在线客服进行申请，逾期视为自动放弃。</p>
              <h4 class="act-title">活动细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所获得彩金只需一倍打码即可出款。</p>
              <p><span class="num">2.</span>游戏中【钻头】也可计算于消除次数中，一次消除中不止一种宝石或糖果的也只能算一次，消除种类中显示“—”不在计算次数中；</p>
              <p><span class="num">3.</span>糖果派对游戏中盘面中出现1个Free game图案，即中奖获得10次免费游戏的注单无法申请此项优惠。</p>
              <p><span class="num">4.</span>注单只限产生后24小时之内有效，每位会员每天所产生的所有中奖注单只能申请一个，每个会员每天仅限申请一次，每个注单只能申请一项优惠，申请成功后当天剩余注单一律作废不可以用作次日申请。（时间按美东时间计算）</p>
              <p><span class="num">5.</span>所以因任何因素被取消注单或因中奖后彩金加码游戏所产生之注单号，均不在计算范围内。</p>
              <p><span class="num">6.</span>澳门新葡京保留所有权利在任何时候可以更改、停止、取消优惠活动。</p>
              </div>
            </div>`
          },

          {
            title: '玩MG 天天领取得意金',
            img: require('../../../../../static/qygj/img/youhui/mgdyj.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '开心豪礼享不停',
            time: '2019年4月1日至2019年12月31日',
            id: 25,
            param: `<div class="context">
              <h4 class="act-title">活动详情：</h4>
              <p class="act-text">即日起会员于澳门新葡京MG电子游艺投注，一天内有效投注额达到5000元以上即可获得澳门新葡京送出的得意彩金，天天豪礼，乐享不停。</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
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
                        <td>88元</td>
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
                        <td>2888元</td>
                      </tr>
                      </tbody>
                </table>
              </div>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">会员确定达到申请要求后，请于北京时间次日12点后24小时内联系在线客服进行申请，逾期视为自动放弃。</p>
              <h4 class="act-title">活动细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所获得彩金只需一倍打码即可出款。</p>
              <p><span class="num">2.</span>日结区间以北京时间当日中午12：00开始至次日北京时间中午12:00计算。</p>
              <p><span class="num">3.</span>澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结 取消该团体或个人帐号及帐号结余的权利。</p>
              <p><span class="num">4.</span>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
              <p><span class="num">5.</span>此活动可与其它优惠同时进行享用。</p>
              <p><span class="num">6.</span>澳门新葡京保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
              </div>
            </div>`
          },


          {
            title: 'PT电子 每日签到',
            img: require('../../../../../static/qygj/img/youhui/ptqd.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '天天有奖',
            time: '2019年4月1日至2019年12月31日',
            id: 26,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">即日起会员于澳门新葡京投注PT电子游艺，按照美东时间计算当天存款100元，PT有效投注达到2018，即可获得相对应的签到彩金哦，连续7天不间断存款还有额外嘉奖哦！</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>活动详情</td>
                        <td>活动条件</td>
                        <td>签到天数</td>
                        <td>可获彩金</td>
                      </tr>
                      <tr>
                        <td rowspan="8">PT电子</td>
                        <td rowspan="8">当天存款100元<br>有效投注2018+</td>
                        <td>第一天</td>
                        <td>28</td>
                      </tr>
                       <tr>
                        <td>第二天</td>
                        <td>38</td>
                      </tr>
                      <tr>
                        <td>第三天</td>
                        <td>48</td>
                      </tr>
                      <tr>
                        <td>第四天</td>
                        <td>68</td>
                      </tr>
                      <tr>
                        <td>第五天</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>第六天</td>
                        <td>108</td>
                      </tr>
                      <tr>
                        <td>第七天</td>
                        <td>138</td>
                      </tr>
                      <tr>
                        <td>连续七天不间断额外嘉奖</td>
                        <td>138</td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <p>例如：会员于第一天存款100元在PT电子有效投注2018即可申请28元，会员与第二天存款100元在PT电子有效投注2018，即可申请38元；以此类推。</p>
              <p>例如：会员每天存款100元完成有效投注2018，连续签到7天不间断，即可获得额外嘉奖218元。</p>


              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>活动详情</td>
                        <td>活动条件</td>
                        <td>签到天数</td>
                        <td>可获彩金</td>
                      </tr>
                      <tr>
                        <td rowspan="8">PT电子</td>
                        <td rowspan="8">当天存款300元<br>有效投注12018+</td>
                        <td>第一天</td>
                        <td>58</td>
                      </tr>
                       <tr>
                        <td>第二天</td>
                        <td>68</td>
                      </tr>
                      <tr>
                        <td>第三天</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>第四天</td>
                        <td>138</td>
                      </tr>
                      <tr>
                        <td>第五天</td>
                        <td>188</td>
                      </tr>
                      <tr>
                        <td>第六天</td>
                        <td>208</td>
                      </tr>
                      <tr>
                        <td>第七天</td>
                        <td>258</td>
                      </tr>
                      <tr>
                        <td>连续七天不间断额外嘉奖</td>
                        <td>388</td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <p>例如：会员于第一天存款300元在PT电子有效投注12018，即可申请58元，会员与第二天存款300元在PT电子有效投注12018，即可申请68元；以此类推。</p>
              <p>例如：会员每天存款300元完成有效投注12018，连续签到7天不间断，即可获得额外嘉奖388元。</p>
              <h4 class="act-title">活动申请方式与细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所获得奖金需一倍流水方可申请提款；</p>
              <p><span class="num">2.</span>每位会员每天仅限申请一次，天数按照美东时间计算；</p>
              <p><span class="num">3.</span>符合申请条件的会员请在次日24小时内联系在线客服进行申请。审核通过后在线客服会将相应彩金添加到您的游戏帐号上，逾期视为自动放弃；</p>
              <p><span class="num">4.</span>此优惠活动仅限于PT电子游艺！</p>
              <p><span class="num">5.</span>澳门新葡京保留对活动的最终解释权；以及在无通知的情况下修改、终止活动的权利；适用于所有优惠。</p>
              </div>
            </div>`
          },

          {
            title: '电子超级奖金',
            img: require('../../../../../static/qygj/img/youhui/dzcjjj.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '奖上加奖',
            time: '2019年4月1日至2019年12月31日',
            id: 27,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">即日起所有进行电子游艺投注的会员，只要您投注中奖，即可获得澳门新葡京派送的额外加奖，最高加奖8888元；奖上加奖，丰富奖金等您来拿……</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>单注派奖</td>
                        <td>赠送金额</td>
                      </tr>
                      <tr>
                        <td>500+</td>
                        <td>38元</td>
                      </tr>
                      <tr>
                        <td>1000+</td>
                        <td>88元</td>
                      </tr>
                      <tr>
                        <td>5000元+</td>
                        <td>168元</td>
                      </tr>
                      <tr>
                        <td>10000元+</td>
                        <td>508元</td>
                      </tr>
                      <tr>
                        <td>30000元+</td>
                        <td>1888元</td>
                      </tr>
                      <tr>
                        <td>100000元+</td>
                        <td>6888元</td>
                      </tr>
                      <tr>
                        <td>300000元+</td>
                        <td>8888元</td>
                      </tr>
                      </tbody>
                </table>
              </div>
              <p>注：捕鱼类型游戏，不参与此优惠活动。</p>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">符合申请条件的会员请在游戏派彩后的24小时内联系在线客服进行申请，审核通过后在线客服会将相应彩金添加到您的游戏帐号上，逾期视为自动放弃优惠。</p>
              <h4 class="act-title">活动细则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所获得奖金需一倍流水方可申请提款。</p>
              <p><span class="num">2.</span>注单只限产生后24小时之内有效，每位会员每天所产生的所有中奖注单只能申请一个，每个会员每天仅限申请一次，每个注单只能申请一项优惠，申请成功后当天剩余注单一律作废不可以用作次日申请，时间按美东时间计算(不包括免费游戏)。</p>
              <p><span class="num">3.</span>澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利。</p>
              <p><span class="num">4.</span>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
              <p><span class="num">5.</span>此活动可与其它优惠同时进行享用。</p>
              <p><span class="num">6.</span>澳门新葡京保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
              </div>
            </div>`
          },
          {
            title: '电子游艺激情7天乐',
            img: require('../../../../../static/qygj/img/youhui/jqqtl.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '3888周周送',
            time: '2019年4月1日至2019年12月31日',
            id: 28,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">凡是在澳门新葡京进行电子游艺游戏，七天累计有效投注达5万，即可获得澳门新葡京送出的彩金，最高达3888元。</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>周有效投注</td>
                        <td>可获彩金</td>
                      </tr>
                      <tr>
                        <td>5万+</td>
                        <td>38元</td>
                      </tr>
                      <tr>
                        <td>10万+</td>
                        <td>108元</td>
                      </tr>
                      <tr>
                        <td>30万+</td>
                        <td>238元</td>
                      </tr>
                      <tr>
                        <td>50万+</td>
                        <td>668元</td>
                      </tr>
                      <tr>
                        <td>100万+</td>
                        <td>1188元</td>
                      </tr>
                      <tr>
                        <td>300万+</td>
                        <td>2688元</td>
                      </tr>
                      <tr>
                        <td>500万+</td>
                        <td>3888元</td>
                      </tr>
                      </tbody>
                </table>
              </div>
              <p>统计周期：美东时间周一至周日</p>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">会员达到周有效投注要求后于次周—12点后24小时内联系在线客服申请，逾期视为自动放弃。</p>
              <h4 class="act-title">活动归则：</h4>
            <div class="act-rule-cont">
              <p><span class="num">1.</span>所有彩金只需1倍下注即可提现，每个会员每周只能参与一次，计算周期为（美东时间周一至周日）。</p>
              <p><span class="num">2.</span>澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利。</p>
              <p><span class="num">3.</span>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
              <p><span class="num">4.</span>此活动可与其它优惠同时进行享用。</p>
              <p><span class="num">5.</span>澳门新葡京保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
              </div>
            </div>`
          },

          {
            title: '电子游艺勇猛闯关',
            img: require('../../../../../static/qygj/img/youhui/ymcg.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '丰富彩金关关派送',
            time: '2019年4月1日至2019年12月31日',
            id: 29,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">即日起，澳门新葡京所有新老会员进行电子游艺投注，每天最低达到10000有效投注，即可获得澳门新葡京送出的闯关彩金，通关更享1588元给力彩金……</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>关卡</td>
                        <td>每日有效投注</td>
                        <td>可获彩金</td>
                        <td>累计可获彩金</td>
                      </tr>
                      <tr>
                        <td>第一关</td>
                        <td>10000+</td>
                        <td>18</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>第二关</td>
                        <td>50000+</td>
                        <td>58</td>
                        <td>76</td>
                      </tr>
                      <tr>
                        <td>第三关</td>
                        <td>100000+</td>
                        <td>98</td>
                        <td>174</td>
                      </tr>
                      <tr>
                        <td>第四关</td>
                        <td>300000+</td>
                        <td>168</td>
                        <td>342</td>
                      </tr>
                      <tr>
                        <td>第五关</td>
                        <td>500000+</td>
                        <td>358</td>
                        <td>700</td>
                      </tr>
                      <tr>
                        <td>第六关</td>
                        <td>1000000+</td>
                        <td>888</td>
                        <td>1588</td>
                      </tr>
                      </tbody>
                </table>
              </div>
              <p>例：会员累积有效投注达到五万（第二关），即可获得 累计奖金：18+58=76；达到30万（第四关）即可获得累计奖金18+58+98+168=342元！ 以此类推</p>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">符合申请条件的会员请在24小时内联系在线客服进行申请，审核通过后在线客服会将相应彩金添加到您的游戏帐号上，逾期视为自动放弃优惠。</p>

              <h4 class="act-title">规则与条款：</h4>
              <div class="act-rule-cont">
                <p><span class="num">1.</span>所获彩金只需1倍下注即可提现，每个会员每天只能申请一次。</p>
                <p><span class="num">2.</span> 日结区间以北京时间当日中午12:00开始至次日北京时间中午12:00计算。</p>
                <p><span class="num">3.</span> 澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团队或个人帐号及帐号结余的权利。</p>
                <p><span class="num">4.</span> 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                <p><span class="num">5.</span> 此活动可与其它优惠同时进行享用。</p>
                <p><span class="num">6.</span> 澳门新葡京保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
                </div>
            </div>`
          },


           {
            title: '雪中送碳 电子救援金',
            img: require('../../../../../static/qygj/img/youhui/xzst.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '助您东山再起',
            time: '2019年4月1日至2019年12月31日',
            id: 30,
            param: `<div class="context">
              <h4 class="act-title">活动内容：</h4>
              <p class="act-text">即日起，会员于澳门新葡京投注电子游艺，按照美东时间计算当日亏损达到500元或以上，次日即可申请亏损救援彩金，给力无上限。</p>
              <div class="table-box">
                <table class="table table11" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td>亏损金额</td>
                        <td>可获救援金额</td>
                      </tr>
                      <tr>
                        <td>500元及以上</td>
                        <td>亏损金额的2%</td>
                      </tr>
                      <tr>
                        <td>5000元及以上</td>
                        <td>亏损金额的3%</td>
                      </tr>
                      <tr>
                        <td>10000元及以上</td>
                        <td>亏损金额的6%</td>
                      </tr>
                      <tr>
                        <td>100000元及以上</td>
                        <td>亏损金额的8%</td>
                      </tr>
                      </tbody>
                </table>
              </div>
              <p>范例：</p>
              <p>当日在电子游艺实际亏损3000元，即可申请获得的彩金为3000*2%=60元。</p>
              <p>当日在电子游艺实际亏损9000元，即可申请获得的彩金为9000*3%=270元。</p>
              <p>当日在电子游艺实际亏损15000元，即可申请获得的彩金为15000*6%=900元。</p>
              <p>注：捕鱼类型游戏，不参与此优惠活动</p>
              <h4 class="act-title">申请方式：</h4>
              <p class="act-text">会员确定达到申请要求后，请于北京时间次日12点后24小时内联系在线客服进行申请；审核通过后活动部门会将相应彩金添加到您的游戏帐号上，逾期视为自动放弃。</p>
              <h4 class="act-title">活动规则：</h4>
              <div class="act-rule-cont">
                <p><span class="num">1.</span>所获得彩金只需一倍打码即可出款。</p>
                <p><span class="num">2.</span> 日结区间以北京时间当日中午12:00开始次日北京时间中午12:00计算。</p>
                <p><span class="num">3.</span>澳门新葡京的所有优惠特为玩家而设，如发现任何团队或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结 取消该团队或个人帐号及帐号结余的权利。</p>
                <p><span class="num">4.</span> 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                <p><span class="num">5.</span> 此活动可与其它优惠同时进行享用。</p>
                <p><span class="num">6.</span> 澳门新葡京保留所有权利在任何时候都可以更改、停止、取消该优惠活动。</p>
                </div>
            </div>`
          },



          {
            title: '天天返水 豪情大放送',
            img: require('../../../../../static/qygj/img/youhui/fanshui.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '最高可达2.0%无上限',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">澳门新葡京返水火热进行中，投注1元起，不计输赢，天天返水洗码，高达2.0%！</p>
                      <h4 class="act-title">返水内容：</h4>

                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                                <td>有效投注</td>
                                <td>真人视讯</td>
                                <td>电子游艺</td>
                                 <td>体育赛事</td>
                            </tr>
                            <tr>
                                <td>1000万+</td>
                                <td>0.8%</td>
                                <td>2.0%</td>
                                 <td>1.3%</td>
                            </tr>
                            <tr>
                                <td>600万+</td>
                                <td>0.7%</td>
                                <td>1.8%</td>
                                 <td>1.2%</td>
                            </tr>
                            <tr>
                                <td>300万+</td>
                                <td>0.6%</td>
                                <td>1.5%</td>
                                 <td>1.1%</td>
                            </tr>
                            <tr>
                                <td>1元+</td>
                                <td>0.5%</td>
                                <td>1.2%</td>
                                 <td>1.0%</td>
                            </tr>
                            </tbody>
                        </table>
                      </div>
                      <p class="act-text">返水优惠无需申请，计算和发放时间如下</p>
                      <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                                <td>澳门新葡京</td>
                                <td>美东时间</td>
                                <td>北京时间</td>
                            </tr>
                            <tr>
                                <td>返水结算时间</td>
                                <td>当日00：00-23：59</td>
                                <td>当日12：00至次日11：59</td>
                            </tr>
                            <tr>
                                <td>返水发放时间</td>
                                <td>次日日03：00-04：30</td>
                                <td>次日15：30至次日16：30</td>
                            </tr>
                            </tbody>
                        </table>
                      </div>
                      <h4 class="act-title">活动细则：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 本优惠适合所有澳门新葡京的有效会员；</p>
                        <p><span class="num">2.</span> 该活动可与其它优惠活动并用；</p>
                        <p><span class="num">3.</span> 返水计算：当日各项有效投注x各项优惠百分比=可获返水金额；</p>
                        <p><span class="num">4.</span> 会员所得的返水只需要一倍有效投注，即可申请提款；</p>
                        <p><span class="num">5.</span> 若会员不参与活动，请在汇款前告知在线客服人员，未事先告知的会员，将默认自愿接受存款优惠及活动规则；</p>
                        <p><span class="num">6.</span> 参与该优惠，即表示您同意《优惠规则与条款》</p>
                      </div>
                      <h4 class="act-title">优惠规则与条款：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
                        <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡/信用卡/银行帐号）及IP地址只能享有一次优惠；若会员有重复申请帐号行为，公司保留取消或收回会员优惠彩金的权利。</p>
                        <p><span class="num">3.</span> 澳门新葡京的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司等行为、公司保留冻结、取消该团体或个人帐号及帐号结余的权利。</p>
                        <p><span class="num">4.</span> 若会员对活动有争议时，为确保双方利益，不觉身份到用行为、澳门新葡京有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。</p>
                        <p><span class="num">5.</span> 当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团体或个人投下一连串的关联赌注，即以造成无论赛果怎样都可以确保可以从该存款红利或其它推广活动提供的优惠获利，澳门新葡京保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以此补偿我们的行政成本。</p>
                        <p><span class="num">6.</span> 澳门新葡京保留对活动的最终解释权；以及在无通知的情况下修改，终止此活动的权利；适用于所有优惠。</p>
                        </div>
                    </div>`
          },


          {
            title: '选择好品牌为您的资金护航',
            img: require('../../../../../static/qygj/img/youhui/pinpai.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '1.0%红利优惠回馈',
            time: '2019年4月1日至2019年12月31日',
            id: 32,
            param: `<div class="context">
                      <h4 class="act-title">详细规则：</h4>
                      <p class="act-text">澳门新葡京会员使用网上转帐、ATM转帐、ATM现金存款、柜台存款，赠送1.0%，财付通转帐赠送1.0%，支付宝转帐赠送1.0%，祝您游戏愉快。</p>

                      <h4 class="act-title">特别声明：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 无论是个人或团体，如有任何威胁、滥用澳门新葡京优惠的行为，经财务审核，澳门新葡京保留权利取消，收回优惠以及优惠产生的盈利。</p>
                        <p><span class="num">2.</span> 投注在体育赛事，对冲或对打投注不计，未接受注单/赛果为平的注单不计。在真人娱乐/电子游艺/对战/彩票游戏投注，无风险投注不计。无风险投注包括百家乐同时投注庄家，闲家、轮盘同时投注黑色、红色、单、双、大、小、任何取消注单赛事或局数不计。</p>
                        <p><span class="num">3.</span> 澳门新葡京在会员有重复申请帐号行为时，保留取消、收回会员优惠红利的权利。每位玩家。每一地址、每一电子邮箱、每一电话号码相同支付卡/信用卡号码，以及共用电脑环境（例如：网吧/其它公共电脑等）只能够于同区间获得一个新用户优惠红利。这项优惠之适用于每位客户在澳门新葡京唯一申领本优惠的帐号。</p>
                        <p><span class="num">4.</span> 所有澳门新葡京的优惠是特别为玩家而设，在玩家注册资讯有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京保留权利要求客户向我们提供充足有效文件，并以各种方式辨别客户是否符合资格享有我们的任何优惠。</p>
                        <p><span class="num">5.</span> 澳门新葡京保留所有权利在任何时候可以更改。停止。取消优惠活动。</p>
                      </div>

                    </div>`
          },


          {
            title: '天外一笔意外惊喜',
            img: require('../../../../../static/qygj/img/youhui/smcj.jpg'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '神秘彩金随机派送',
            time: '2019年4月1日至2019年12月31日',
            id: 33,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">澳门新葡京将不定期派发神秘彩金给予在澳门新葡京的会员们，彩金没有门槛限制、不设上限金额，只要您在澳门新葡京有注册过帐号，只要您曾经登录过澳门新葡京，就算您不曾在我们公司存款游戏过，都有可能收到我们为您随机派发的惊喜彩金。</p>
                      <p class="act-text">神秘彩金无需申请，直接划入会员帐号或绑定之银行帐号。</p>
                      <p class="act-text">凡是获得神秘彩金的会员，我们将在彩金存入会员帐号或绑定之银行帐号后，通过站内信或电话通知，彩金发放纯属随机。</p>
                      <h4 class="act-title">活动规则：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 存入会员帐号内的神秘彩金只需1倍流水即可提款；</p>
                        <p><span class="num">2.</span> 参与该优惠，即表示您同意《优惠规则与条款》。</p>
                      </div>

                      <h4 class="act-title">优惠规则与条款：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 所有优惠以人民币（CNY）为计算金额，以美东时间（EDT）为计时时间。</p>
                        <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付卡\信用卡号码及IP地址只能享有一次优惠；若会员重复申请帐号行为，公司保留取消或收回会员优惠彩金的权利。</p>
                        <p><span class="num">3.</span> 澳门新葡京的所有优惠是特别为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人帐号及帐号结余的权利。</p>
                        <p><span class="num">4.</span>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，澳门新葡京保留权利要求客户向我们提供充足有效的文件，用以确认是否享有该优惠的资格。</p>
                        <p><span class="num">5.</span> 当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司或推广的条款，又或我们有任何证据有任何团队或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保从该存款红利或其它推广活动提供的优惠获利，澳门新葡京保留权利向此团队或个人停止、取消或索回已支付的全部优惠获利。此外，公司亦保留向这些客户扣去相当于优惠红利价值的行政费用，以补偿我们的行政成本。</p>
                        <p><span class="num">6.</span> 澳门新葡京保留会活动的最终解释权；以及在无通知的情况下修改、终止活动的权利；适用于所有优惠。</p>
                      </div>

                    </div>`
          },
        ]
      }
    },
    methods: {
      onClick(item) {
        switch (item.type) {
          case 'single':
            window.open(item.param, '_blank')
            break

          case 'content':
            this.showContent(item.title,item.param)
            break

          case 'dialog':
            this.messageAlert()
        }
      },
      openPage(page) {
        window.open(page, '_blank')
      },
      showContent(a,b) {
        this.title = a
        this.showPopout = true
        this.content = b
      },
      async getLantern() {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'lantern',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length) return false
          this.lantern = res.data.data[0] && res.data.data[0].description
        }
      },
      messageAlert() {
        this.ifmodel = true
      },
      close_messageAlert() {
        this.ifmodel = false
      },
    },
    created: function () {
    },
    mounted() {
      this.getLantern();
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
    },
    watch: {},
    components: {},
    computed: {
      colorbool() {
        return this.$store.state.mainState.color
      },
    }
  }
</script>

<style lang="less" scoped>
  /*提示未开始*/
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


  .clear::after {
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0;
  }

  .clear {
    zoom: 1;
  }

  .banner-bg {
    width: 1920px;
    height: 400px;
    background: url(/static/qygj/img/youhui/yh.jpg) no-repeat center top;
    position: relative;
    margin: 0 auto;

    .newgong {
      position: absolute;
      width: 100%;
      height: 40px;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 12;

      .newgong-content {
        width: 1200px;
        height: 40px;
        margin: 0 auto;

        .notice {
          display: inline-block;
          float: left;
          position: relative;
          top: 12px;
          left: 25px;
          margin-right: 50px;

          i {
            font-weight: 600;
            color: white;
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
          }
        }

        .demolist {
          display: inline-block;
          width: 990px;
        }
      }
    }
  }

  .maincontainer {
    // padding:20px;
    padding: 30px 20px 20px;
    // background: url(/static/qygj/img/youhui/bg.jpg) no-repeat, #f3f2ef;
    // background-size:100%;
    max-width: 1920px;
    min-width:1200px;
    margin: 0 auto;
    background: #e3eaf1;

    .content {
      width: 1200px;
      margin: 0 auto;

      .main {
        padding: 20px 0;

        .slider {
          float: left;
          position: relative;
          border-radius: 10px;
          margin-right: 40px;
          margin-bottom: 20px;
          cursor: pointer;
          font-family: 'Microsoft Yahei';
          transform: translateY(0);
          transition: transform 500ms;

          &:hover {
            transform: translateY(-5px)
          }

          .promotion-item {
            float: left;
            width: 373px;
            border-radius: 10px;
            color: #333;
            -webkit-box-shadow: 0 0.1rem 0.1rem transparent;
            box-shadow: 0 0.1rem 0.1rem transparent;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition: all 0.15s ease-in-out;
            transition: all 0.15s ease-in-out;
            background-color: white;
            box-sizing: border-box;

            .promotion-info {
              position: relative;
              border-radius: 10px;

              .pic {
                position: relative;
                overflow: hidden;

                img {
                  height: 215px;
                  width: 100%;
                  border-radius: 10px 10px 0 0;
                }
              }

              .promotion-intro {
                margin: 15px 30px 5px;
                font-size: 16px;
                color: #333;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                .title {
                  float: left;
                  font-weight: bold;
                }

                .type-name {
                  float: right;
                  width: 70px;
                  line-height: 20px;
                  border-radius: 10px;
                  font-size: 12px;
                  text-align: center;
                  background: #e3eaf1;
                  color: #7d8eb6;
                }

                .subtitle {
                  margin: 10px 0;
                  font-size: 14px;
                }

                .active-time {
                  margin-bottom: 15px;
                  font-size: 12px;
                  color: #999;
                }

              }
            }
          }
        }

        .slider:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }


  .vp-popout-box {
    border-radius: 20px;
    background-color: #fff;

    /deep/ .ivu-modal {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -425px;
      margin-top: -410px;
    }

    /deep/ .ivu-modal-close {
      display: none;
    }

    .close {
      display: block;
      position: absolute;
      top: 8px;
      right: 8px;
      width: 44px;
      height: 44px;
      line-height: 44px;
      border: 2px solid #fff;
      border-radius: 50%;
      text-align: center;
      font-size: 30px;
      color: #fff;
      cursor: pointer;

      span {
        display: block;
        width: 44px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-radius: 50%;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        background: url(/static/qygj/img/youhui/close.png) no-repeat 42% 42%;
        -webkit-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        -ms-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
      }
    }

    /deep/ .context {
      font-family: "Microsoft YaHei", Verdana, Arial !important;
      font-size: 14px;
      height: 740px;
      padding: 25px 50px;
      overflow-y: auto;

      .act-title {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0 5px;
      }

      .act-text {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .table {
        width: 100%;
        margin: 30px 0 20px 0;
        border-collapse: separate;
        border-spacing: 0;
        border-left: 1px solid #bbb;
        border-top: 1px solid #bbb;
        border-radius: 3px;
        color: #333;

        tbody {
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;

        }

        tr {
          height: 40px;
        }

        th {
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          text-align: center;
          vertical-align: middle;
          font-weight: bold;
          color: #333;
          background: #e3eaf1;
          line-height: 3;
        }

        td {
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          padding: 5px;
          line-height: 2;
          text-align: center;
          vertical-align: middle;
          background: #f3f4f4;
        }
      }

      .img {
        width: 100%;
      }

      .act-rule-cont {
        box-sizing: border-box;

        p {
          position: relative;
          padding-left: 20px;

          .num {
            position: absolute;
            top: 0;
            left: 0;
          }

        }

        .cc0 {
          color: #fe4a4a;
        }
      }
    }

    /deep/ .ivu-modal-header {
      position: relative;
      top: -2px;
      margin: 0;
      padding: 0;
      width: 850px;
      height: 60px;
      // padding-top: 5px;
      border-radius: 20px 20px 0 0;
      text-align: center;
      color: #fff;
      border: none;
      background: linear-gradient(90deg, #9968fd, #fc49af) no-repeat center top;

      .ivu-modal-header-inner {
        color: #fff;
        margin-top: 12px;
        font-size: 16px;
      }
    }

    /deep/ .ivu-modal-footer {
      display: none;

      .ivu-btn-text {
        display: none;
      }

      .ivu-btn-primary {

      }
    }

    .popout-box {
      min-height: 427px;
      font-family: "Microsoft YaHei";
      font-size: 24px;
      line-height: 1.5;
      color: #383838;
      height: 760px;
    }


  }

  /deep/ .ivu-modal-content {
    border-radius: 20px;
    margin: 0;
    padding: 0;
  }

  /deep/ .ivu-modal-body {
    margin: 0;
    padding: 0;

  }

  /deep/ .ivu-modal-wrap {
    margin: 0;
    padding: 0;
  }

  .night {
    background: rgba(18, 21, 66, .8)
  }
</style>
