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
            title: '天降横财',
            img: require('../../../../../static/t111/img/youhui/jiang.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '月进斗金',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">即日起，澳门新葡京所有新老会员，只要您在指定时间内2019年每月1号至月底进行娱乐投注，存款金额达到指定门槛，我们将最高赠送您588888元彩金，每月准时推出现金回馈，您还等什么，邀您朋友一起立即加入澳门新葡京，坐拥会员独特价值，尽享尊贵礼遇！</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td>当月额累积存款</td>
                              <td>5倍打码彩金</td>
                              <td>7倍打码彩金</td>
                              <td>10倍打码彩金</td>
                              <td>20倍打码彩金</td>
                              <td>彩金出款要求</td>
                              <td>领取方式</td>
                            </tr>
                            <tr>
                              <td>5千+</td>
                              <td>38</td>
                              <td>58</td>
                              <td>88</td>
                              <td>168</td>
                              <td rowspan="14">一倍流水</td>
                              <td rowspan="14">联系在线客服</td>
                            </tr>
                            <tr>
                              <td>1万+</td>
                              <td>58</td>
                              <td>88</td>
                              <td>168</td>
                              <td>288</td>
                             
                            </tr>
                            <tr>
                              <td>5万+</td>
                              <td>88</td>
                              <td>168</td>
                              <td>288</td>
                              <td>588</td>
                            </tr>
                            <tr>
                              <td>10万+</td>
                              <td>388</td>
                              <td>588</td>
                              <td>888</td>
                              <td>1288</td>
                            </tr>
                            <tr>
                              <td>20万+</td>
                              <td>588</td>
                              <td>888</td>
                              <td>1288</td>
                              <td>1688</td>
                            </tr>
                            <tr>
                              <td>50万+</td>
                              <td>888</td>
                              <td>1288</td>
                              <td>1688</td>
                              <td>2188</td>
                            </tr>
                            <tr>
                              <td>100万+</td>
                              <td>1288</td>
                              <td>1688</td>
                              <td>2188</td>
                              <td>2888</td>
                            </tr>
                            <tr>
                              <td>200万+</td>
                              <td>1888</td>
                              <td>2888</td>
                              <td>3888</td>
                              <td>5888</td>
                            </tr>
                            <tr>
                              <td>500万+</td>
                              <td>2888</td>
                              <td>5888</td>
                              <td>8888</td>
                              <td>16888</td>
                            </tr>
                            <tr>
                              <td>800万+</td>
                              <td>8888</td>
                              <td>16888</td>
                              <td>28888</td>
                              <td>58888</td>
                            </tr>
                            <tr>
                              <td>1200万+</td>
                              <td>28888</td>
                              <td>58888</td>
                              <td>88888</td>
                              <td>128888</td>
                            </tr>
                            <tr>
                              <td>1500万+</td>
                              <td>58888</td>
                              <td>88888</td>
                              <td>128888</td>
                              <td>168888</td>
                            </tr>
                            <tr>
                              <td>2000万+</td>
                              <td>88888</td>
                              <td>128888</td>
                              <td>168888</td>
                              <td>288888</td>
                            </tr>
                            <tr>
                              <td>5000万+</td>
                              <td>168888</td>
                              <td>218888</td>
                              <td>288888</td>
                              <td>588888</td>
                            </tr>
                            </tbody>
                        </table>
                      </div>
                      <p class="act-text">注：活动时间内，新老会员当月累积存款和累积打码同时达标的情况下，计算打码的彩种为IG传统彩，IG新传统彩！满足要求的情况下，次日可以去在线客服领取上月累积存款打码倍数彩金，存款金额无论什么方式充值都累积，彩金不计算在内！跟网银存款1%同时领取！例如A会员上月累积存款220万，传统彩打码220*10=2200万打码，即可在本月1-3号联系在线客服领取3888每月现金回馈彩金！逾期为自动放弃彩金！
派发时间
每月3号领取上月累积存款现金回馈！</p>
                      <h4 class="act-title">优惠规则及条款：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间</p>
                        <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
                        <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
                        <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
                        <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利</p>
                        <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利</p>
                        <p><span class="num>7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
                      `
          },

           {
            title: '千万彩金回馈',
            img: require('../../../../../static/t111/img/youhui/huikui.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '不服来战',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动详情：</h4>
                      <p class="act-text">凡是会员在北京时间2019年3月5日起当日存款总金额500元起有效投注达到5000元以上</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                                <td>有效投注</td>
                                <td>赠送彩金</td>
                                <td>游戏类型</td>
                                 <td>流水限制</td>
                            </tr>
                            <tr>
                              <td>5千</td>
                              <td>8</td>
                              <td rowspan="11">此活动仅参与传统彩<br/><br/>（六合彩除外）8码<br/><br/>以上含8码不参与此<br/><br/>优惠</td>
                              <td rowspan="11">一倍流水即可出款</td>
                            </tr>
                             <tr>
                              <td>1万</td>
                              <td>28</td>
                          
                            </tr>
                             <tr>
                              <td>2万</td>
                              <td>58</td>
                            
                            </tr>
                             <tr>
                              <td>5万</td>
                              <td>128</td>
                             
                            </tr>
                             <tr>
                              <td>10万</td>
                              <td>258</td>
                              
                            </tr>
                             <tr>
                              <td>20万</td>
                              <td>388</td>
                            
                            </tr>
                             <tr>
                              <td>50万</td>
                              <td>788</td>
                              
                            </tr>
                             <tr>
                              <td>100万</td>
                              <td>1888</td>
                             
                            </tr>
                             <tr>
                              <td>300万</td>
                              <td>3888</td>
                              
                            </tr>
                             <tr>
                              <td>500万</td>
                              <td>5888</td>
                             
                            </tr>
                             <tr>
                              <td>1000万</td>
                              <td>8888</td>
                            
                            </tr>

                            </tbody>
                        </table>
                      </div>  
                      <h4 class="act-title">活动说明：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 本活动时间以美东时间计算！</p>
                        <p><span class="num">2.</span> 所获得奖金需要一倍流水即可申请提款！</p>
                        <p><span class="num">3.</span> 任何出现对打情况的投注【例：彩票同时下注大，小，单，双】将不累计有效投注</p>
                        <p><span class="num">4.</span> 参与该优惠即表示同意【优惠规则及条款】</p>
                        
                      </div>
                      <h4 class="act-title">优惠规则与条款：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间</p>
                        <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
                        <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
                        <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
                        <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
                        <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
                        <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                        </div>
                    </div>`
          },

          {
            title: '开元棋牌',
            img: require('../../../../../static/t111/img/youhui/ky_hl.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '豪礼相赠',
            time: '2019年4月1日至2019年12月31日',
            id: 17,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">会员于KG开元棋牌游戏中，只要每天有效投注达到以下等级者，即可获得澳门新葡京赠送的额外豪礼，最高可获得8888元！</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>每日有效投注</td>
                                <td>棋牌彩金</td>
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
                              
                        </table>
                      </div>
                      <p class="act-text">注：日结时间，以当日美东时间00：00至次日美东时间23：59（即北京时间12：00，次日11：59）为计算一天。</p>
                      <h4 class="act-title">申请方式</h4>
                      <p class="act-text">请联系24小时在线客服申请。</p>
                      <h4 class="act-title">活动说明</h4>
                      <p class="act-text">1、每个会员每天只能申请一次（逾期没有领取视为自动放弃）。</p>
                      <p class="act-text">2、会员总有效投注均由系统统计为准，若有任何异议，以澳门新葡京查询结果为准。</p>
                      <p class="act-text">3、此活动在统计时间内【充值投注一倍流水的会员，注册多个会员账号，相同IP的会员账号】都不符合参与此活动，无法给予自动派送彩金。</p>
                      <p class="act-text">4、此活动所得彩金的会员只需一倍流水即可申请出款，且可同时与其他优惠活动共享。</p>
                      <h4 class="act-title">规则与条款</h4>
            <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>


                    </div>`
          },


          {
            title: '开元棋牌',
            img: require('../../../../../static/t111/img/youhui/ky_ks.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '亏损救援金',
            time: '2019年4月1日至2019年12月31日',
            id: 18,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">澳门新葡京棋牌对战游戏强势加盟，公平竞技，开元棋牌多种玩法：炸金花，三公，抢庄牛牛，德州扑克，二八杠等等更多游戏持续更新中！</p>
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
                              <td>888</td>
                            </tr>
                            <tr>
                              <td>500000+</td>
                              <td>8888</td>
                            </tr>
                            <tr>
                              <td>1000000+</td>
                              <td>18888</td>
                            </tr>
                                                        </tbody>
                        </table>
                      </div>
                      <p class="act-text">注：日结时间，以当日美东时间00:00至次日美东时间23:59（即北京时间12:00，次日11:59）为计算一天。</p>
                      <h4 class="act-title">申请方式：</h4>
                      <p class="act-text">请联系24小时在线客服申请</p>
            <h4 class="act-title">优惠与条款：</h4>
                    <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
                    </div>`
          },

             {
            title: '关注澳门新葡京',
            img: require('../../../../../static/t111/img/youhui/zhan.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '站内信',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">有一份惊喜，叫神秘！</p>
                      <p class="act-text">有一种相见，叫不期而遇！</p>
                      <p class="act-text">当它们彼此邂逅，那是一段缘分！</p>
                      <p class="act-text">不期而遇的神秘！</p>
                      <p class="act-text">不期而遇的梦想！</p>
                      <p class="act-text">神秘彩金！</p>
                      <p class="act-text">不期而遇！</p>
                      <p class="act-text">让生活多一份期待！</p>
                      <p class="act-text">让梦想触手可及！</p>
                      <p class="act-text">让澳门新葡京与您相伴！</p>
                      
                      <p class="act-text">只要您有注册过账号，只要您曾经登录过，就算您不曾存款游戏过。都是有机会获得澳门新葡京随机降临的神秘彩金，喜从天降，人人都有机会，谁说天上不会掉馅饼？
敬请澳门新葡京所有新老会员多多关注澳门新葡京站内的《个人消息》兴许下一个幸运儿就是您！</p>
                    
                      <p class="act-text">1.神秘彩金均由系统随机派送，时间不定，金额不限。</p>
                      <p class="act-text">参与此活动即表示您已同意以下『优惠规则及条款』中所述的条款条约。</p>
                      <h4 class="act-title">优惠与条款：</h4>
                      <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
     

                    `
          },
          {
            title: '新会员',
            img: require('../../../../../static/t111/img/youhui/newVip.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '首次存款',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">回馈老会员再赠新会员，真诚欢迎新会员的加入及信赖</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                                <td>新会员首存金额</td>
                                <td>存100元</td>
                                <td>存500元</td>
                                 <td>存1000元</td>
                                 <td>存5000元</td>
                                 <td>存10000元</td>
                            </tr>
                           <tr>
                              <td>赠送金额</td>
                                <td>送19元</td>
                                <td>送39元</td>
                                 <td>送59元</td>
                                 <td>送99元</td>
                                 <td>送199元</td>
                           </tr>
                            </tbody>
                        </table>
                      </div>
                      <p class="act-text">感恩回馈的同时，澳门新葡京欢迎更多的新会员加入我们，现在起只要您加入澳门新葡京并完成首次充值100元以上，即可获得澳门新葡京派送的19元幸运彩金，老品牌值得信赖！</p>
                   
                      <h4 class="act-title">活动说明：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 19元幸运彩金只需1倍下注即可提款，每一位会员只能申请一次。</p>
                        <p><span class="num">2.</span> 符合申请条件的会员请在成功存款后未进行投注前提出申请，如已进行投注，则申请视为无效。</p>
                        <p><span class="num">3.</span> 澳门新葡京的所有优惠为玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁，滥用公司优惠的行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
                        <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京要求会员向我们提供充足的有效证件，用以确认是否享有该优惠的资质。</p>
                        <p><span class="num">5.</span> 此活动可与其他优惠活动叠加使用</p>
                        <p><span class="num">6.</span> 澳门新葡京保留所有权利，在无通知情况下更改，停止，取消该优惠活动。</p>
                        <p><span class="num">7.</span> 参与该优惠，即表示您同意《优惠规则及条款》。</p>

                      </div>
                      <h4 class="act-title">申请方式：</h4>
                      <p class="act-text">请联系24小时在线客服申请。</p>
                      <h4 class="act-title">优惠规则与条款：</h4>
                      <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
                    </div>`
          },

           {
            title: '午夜玩彩',
            img: require('../../../../../static/t111/img/youhui/wy.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '最刺激',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动介绍：</h4>
                      <p class="act-text">会员凡在北京时间每天晚上00：00—早上08：00在澳门新葡京下注热门彩种就能获得午夜幸运彩金，每日随机赠送1500名-2000名幸运玩家，赠送10元-8888不等午夜幸运彩金！  
(投注以下彩种有效：快速赛车，3分赛车，5分赛车，快速时时彩，3分时时彩，快速六合彩，5分六合彩， 快速快3，快速11选5）</p>
                      <h4 class="act-title">活动时间：</h4>
 <p class="act-text">开始时间：2019年3月20日，截止时间：以平台通知为准</p>
                      <h4 class="act-title">活动对象：</h4>
<p class="act-text">澳门新葡京全体新老会员</p>
<h4 class="act-title">申请方式：</h4>
<p class="act-text">开始时间：2019年3月20日，截止时间：以平台通知为准</p>
                    
                      <h4 class="act-title">优惠规则与条款：</h4>
                      <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
                    </div>`
          },

          {
            title: '888￥生日礼金',
            img: require('../../../../../static/t111/img/youhui/birthday.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '为您庆生',
            time: '2019年4月1日至2019年12月31日',
            id: 14,
            param: `<div class="context">
                <h4 class="act-title">活动内容：</h4>
                <p class="act-text">活动时间：即日起（全年度活动）</p>
                <p class="act-text">结束时间：以官网优惠活动展示为准</p>
                <p class="act-text">活动对象：澳门新葡京全体新老会员</p>
                <p class="act-text">在您生日当天，联系在线客服进行申请！</p>
                <p class="act-text">申请流程：向在线客服索取活动邮箱发送申请（需提供有效证件）</p>
              <h4 class="act-title">优惠规则与条款：</h4>
             <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
              </div>`
          },

           {
            title: '全新为您服务',
            img: require('../../../../../static/t111/img/youhui/allSer.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '让您满载而归',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动介绍：</h4>
                      <p class="act-text">澳门新葡京，在广大会员的信任与支持下，公司逐渐发展壮大，但努力永不止步，我们秉承“服务至上，客户第一”的经营理念，竭诚为广大会员提供专业，优质，高效的服务。为更好的提高服务质量，公司的回访专员将每月随机抽取50名会员进行服务满意程度调查，被抽查到的会员最高获得999元现金筹码！感谢您的配合~</p>
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">1.每月参与调查的对象是系统随机抽查，会员需配合专员回访，最高获得999彩金，因个别原因不能配合者视为自动放弃该优惠！</p>
                      <p class="act-text">2.获得奖金需一倍流水即可申请提款！</p>
                      <p class="act-text">3.参与该优惠，即表示您同意《优惠规则及条款》</p>
                      <h4 class="act-title">申请方式：</h4>
                      <p class="act-text">澳门新葡京的新老会员均可发送邮件（向在线客服索取邮箱账号）联系我们回访专员加入回访当中，届时将有机会参与服务质量抽查，更有彩金礼包相送，期待您的参与~</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                                <td>邮件</td>
                                <td>服务质量调查</td>
                               
                            </tr>
                            <tr>
                                <td>邮件内容</td>
                                <td>会员账号：***</td>
                             
                            </tr>
                            <tr>
                                <td></td>
                                <td>会员名字：***</td>
                            
                            </tr>
                            <tr>
                                <td></td>
                                <td>手机号码：***</td>
                            
                            </tr>
                        
                            </tbody>
                        </table>
                      </div>
                      
                      <h4 class="act-title">优惠规则与条款：</h4>
                     <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>
                    </div>`
          },

          {
            title: '神秘彩金',
            img: require('../../../../../static/t111/img/youhui/smcj.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '随机派送',
            time: '2019年4月1日至2019年12月31日',
            id: 33,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">活动时间：即日起（全年度活动）。</p>
                      <p class="act-text">结束时间：以官网优惠活动展示为准。</p>
                      <p class="act-text">活动对象：澳门新葡京全体新老会员。</p>
                      <p class="act-text">澳门新葡京将不定期派发惊喜彩金给予全体新老会员们，彩金没有门槛限制，不设上限下额，只要您在澳门新葡京有注册过账号，或曾经登陆过澳门新葡京，又或不曾在我们公司存款游戏过但有绑定银行卡账号，都可以享受到我们为您随机派发的神秘惊喜彩金。</p>
<p class="act-text">神秘彩金随机派发。</p>
<p class="act-text">无门槛设置，不设上限下额，下一位“幸运儿”就是您！</p>
<p class="act-text">彩金没有门槛限制，不设上限下额！</p>
<p class="act-text">神秘彩金无需发送申请，直接划入会员账号或绑定的银行账号！</p>
<p class="act-text">注：凡是获得神秘彩金的会员，我们将会在彩金存入对应银行账号后，通过会员中心的“个人消息”进行通知，神秘彩金金额随机发放，还望会员能够继续支持大佬彩票，祝您成为下一个幸运儿！</p>
  

                      <h4 class="act-title">优惠规则与条款：</h4>
                     <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
                      </div>

                    </div>`
          },



          {
            title: '银行卡入款',
            img: require('../../../../../static/t111/img/youhui/bank.png'),
            type: 'content',
            active_type: '长期优惠',
            active_content: '赠送0.5%',
            time: '2019年4月1日至2019年12月31日',
            id: 31,
            param: `<div class="context">
                      <h4 class="act-title">活动内容：</h4>
                      <p class="act-text">银行卡入款每笔赠送0.5%彩金，次次存，次次送，无上限，无需申请
汇款成功后系统自动添加彩金至会员账号</p>
                    <div class="table-box">
                        <table class="table table11" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                                <td>单笔存款金额</td>
                                <td>立即赠送</td>
                                <td>流水倍数</td>
                                 <td>彩金上限</td>
                            </tr>
                            <tr>
                                <td>100元以上</td>
                                <td>0.5%</td>
                                <td>1倍</td>
                                 <td>无上限</td>
                            </tr>
                            
                            </tbody>
                        </table>
                      </div>
                     
                    
                      <h4 class="act-title">活动说明：</h4>
                      <div class="act-rule-cont">
                        <p><span class="num">1.</span> 请会员登录账号点击（线上存款）-（转账支付），认准我们公司入款账号进行存款；</p>
                        <p><span class="num">2.</span> 所有会员入款充值前，需登录会员账号查询公司汇款银行账号是否变更，如存入过期账号，概不负责！</p>
                        <p><span class="num">3.</span> 如检测到会员有套取彩金行为，平台有权要求该会员3倍有效打码量才可进行出款；</p>
                        <p><span class="num">4.</span> 该优惠无需申请，存款成功后自动添加；</p>
                        <p><span class="num">5.</span> 参与该优惠，即表示您同意《优惠规则与条款》；</p>
                      </div>
                      <h4 class="act-title">优惠规则与条款：</h4>
                      <div class="act-rule-cont">
            <p><span class="num">1.</span> 所有优惠以人民币（CNY）为结算金额，以美东时间（EDT）为计时区间。</p>
            <p><span class="num">2.</span> 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式（相同借记卡／信用卡／银行账户）及IP地址只能享有一次优惠，若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利！</p>
            <p><span class="num">3.</span> 澳门新葡京的所有优惠特为真实玩家而设，如发现任何个人或团体，以不诚实方式套取红利或任何威胁,滥用公司优惠等行为，公司保留取消冻结该个人或团体账号结余的权利。</p>
            <p><span class="num">4.</span> 若会员对活动有争议，为确保双方利益，杜绝身份盗取行为，澳门新葡京有权要求会员向我们提供充足的有效的证件，用以确认是否享有该优惠的资质。</p>
            <p><span class="num">5.</span> 当参与优惠会员未能完全遵守或违反，滥用任何有关公司优惠或推广的条款，又或我们有证据证明有个人或团队下一连串关联赌注借以造成无论赛过怎样都可以确保从该存款红利或其它推广活动提供的优惠活动，澳门新葡京保留向该个人或团体停止、取消优惠或收回已支付的全部优惠红利权利，此外，公司保留向这些客户扣除相当与红利价值的行政费用补偿我们行政成本的权利。</p>
            <p><span class="num">6.</span> 澳门新葡京保留在无通知的情况下更改、停止、取消优惠或素回已支取的全部优惠的权利。</p>
            <p><span class="num">7.</span> 为避免对文字的理解歧义，澳门新葡京保留对活动最终解释权。</p>
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
    background: url(/static/t111/img/youhui/yh.jpg) no-repeat center top;
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
    // background: url(/static/t111/img/youhui/bg.jpg) no-repeat, #f3f2ef;
    // background-size:100%;
    width: 1920px;
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
        background: url(/static/t111/img/youhui/close.png) no-repeat 42% 42%;
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
        // font-weight: bold;
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
