<template>
  <div id="content_bg" class="content-main-bg">
    <div class="content clear">
      <div class="sidebar fl" id="sidebar">
        <ul class="clear">
          <li :class="[$route.params.id== index ? 'move':'']"  @click="tab(index)"  v-for="(item,index) in items" :key="index" >{{item.item}}</li>
        </ul>
      </div>

      <div class="main fr">
        <div class="right" id="items">
          <div class="item" v-show="$route.params.id==0">
            <h3 class="title">关于我们</h3>
            <dl>
                <dt>关于我们</dt>
                <dd>
                    最具公信力的博彩公司、更有高质量的游戏平台， 手机彩票为哥斯达黎加合法注册之博彩公司之一。公司不仅拥有市场上最多元化的游戏投注平台，同时为客户提供实时、刺激、高信誉的服务保证、高质量的游戏平台，也是公司的首要宗旨。在日渐热络、成熟的网络博彩市场中，除了多元化的游戏外，网络安全最为客户注重，公司针对现阶段网络安全问题，成立了网络安全维护中心，彻底为客户的网络安全解决了后顾之忧，诺顿分级评级审核"手机彩票"为最安全网站之一，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家所有隐私
                </dd>
                <dt>诚信为本：</dt>
                <dd>全网最高信誉，从手机彩票开始！作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的博彩娱乐，以及全方位的服务。我们采用坚实、稳定与安全的博彩系统。所有游戏共同的优点 — 不须耗时下载；界面简单明了；操作功能齐全；画面精致优雅；游戏结果公平、公正、公开！由于您的信息保密度至关重要。我们将坚持实行严格保密和隐私制度</dd>
                <dt>多元化游戏：</dt>
                <dd>除了体育游戏项目多元化外，全方位提供：香港六合彩，时时彩，快乐彩等。精挑细选各种在线游戏，给您提供最好的选择。真人荷官及现场娱乐也是无可挑剔的，信誉可靠：设有 7×24小时进行在线监测，确保每一局游戏结果均为现场真实的游戏结果，而不是计算机默认的游戏结果，在我们的真人娱乐城，您可饱览整个赌场大厅和靓丽的美女荷官。玩法众多如真人百家乐，真人骰宝，真人龙虎以及真人轮盘。您也可以选择容易上手的快乐彩消遣时光。。</dd>
                <dt>大赢家</dt>
                <dd>在手机彩票的用户都是大赢家，我们将不间断的推出更多优惠，以实际、简单的申请方式迎待各来宾！。</dd>
                <dt>慈善公益：</dt>
                <dd>手机彩票更肩负起对社会、对慈善公益的责任，也将永不磨灭的针对社会的需要作出更多的贡献。</dd>
                <dt>客户服务：</dt>
                <dd>在竞争激烈的博彩市场中，手机彩票向来是众多玩家一致的明理选择，除了有多元化的娱乐产品使人流连忘返、更有高质量的服务以及 手机彩票长久以来的良好信誉在广大玩家群众之间建立了口碑</dd>
                <dt>我们为客户提供最专业的娱乐服务：</dt>
                <dd>
                    1、365天×24小时专业的客户服务，全天候处理会员出入款的相关事宜，严格训练的客服团队，以专业、亲切的态度，让每位玩家有宾至如归的感觉!<br/>
                    2、多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；<br/>
                    3、举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。
                </dd>
                <dt>游戏责任：</dt>
                <dt>手机彩票提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</dt>
                <dd>
                    • 禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。<br/>
                    • 自定博彩预算，幷按预算下注。
                </dd>
                <dt>帐号与资金</dt>
                <dd>
                    玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进行。进入玩家帐号数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们绝不会向第三方（包括政府）透露客户数据。<br/>
                    手机彩票更专注于玩家的利益、最给力的优惠活动时时回馈各新老会员用户。品牌信誉，首选 手机彩票！<br/>
                </dd>
            </dl>
          </div>
          <div class="item"  v-show="$route.params.id==1">
            <h3 class="title">联系我们</h3>
            <dl>
                <dd>
                    手机彩票的客服中心全年无休，提供1周7天、每天24小时的优质服务。<br/>
                    如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务<br/>
                    点击"在线客服"链接，即可进入在线客服系统与客服人员联系。<br/>
                </dd>
            </dl>
          </div>
          <div class="item" v-show="$route.params.id==2" >
            <h3 class="title">存款帮助</h3>
            <dl>
                <dt>一、公司入款:（赠送存款金额1.0%手续费）强烈推荐使用</dt>
                <dd>
                    1. 会员登入后点击 [在线存款]，选择 [公司入款]<br/>
                    2. 请选择欲使用的银行卡。        <br/>
                    3. 选择银行后，网页会显示可存入的银行帐号。可直接点击网页上银行标志，自动为您带到银行首页，<br/>
                  登入您个入网银后，请将款项转入公司提供的入款帐号。<br/>
                    ※如您使用农业银行/工商银行， 请将公司入款订单号贴入您网银 [备注/附言] 字段<br/>

                    ※建议选择与您转帐的银行同一家，同银行间转帐可以立即到帐，若跨行转帐有可能较晚到帐。※<br/>

                    可以自由选择:<br/>

                    (1).网络银行: 登入自己的网络银行页面，从银行网页上转帐到指定银行帐号 中。<br/>

                    (2).ATM自动柜员机 : 到实体自动柜员机以银行卡或是现金方式存入，没有开启网银功能与存现金的会员可用<br/>

                    (3).银行柜台转帐 : 到银行柜台完成转帐手续<br/>

                    ※公司入款注意事项※<br/>

                    亲切提醒您，公司入款银行随时更变，请于每次入款前，确认您可以使用的入款帐号。<br/>

                    如入款帐号已过期， 手机彩票恕不负责！万请见谅，感谢配合。<br/>

                    4. 核对提交数据/提交申请<br/>

                    汇款完成请填写并提交相关数据，并备份您的公司入款订单号。 系统在收到款项后会进行比对，如果存款金<br/>

                    额、时间相符合，则会将款项加入您的游戏帐号中。处理时间通常为5-30分钟。(跨行转帐时间可能会超过30分)<br/>

                    5. 若5钟内未到帐，请联系在线客服人员。<br/>

                    客服人员会与您核对存款数据，必要时需要您提供截图、转帐数据等相关证明。<br/>
                </dd>
                <dt>二、在线存款 :</dt>
                <dd>
                    1. 会员登入后点击 [在线存款]，选择 [在线付款]<br/>

                    2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便 手机彩票客服第一时间与您联系。<br/>

                    3. 选择”支付银行”。

                    支援借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br/>

                    4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您帐号数据加密，请耐心等待。,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国光大银行,深圳平安银行。<br/>

                    5. 进入网络银行页面，请确实填写您银行帐号信息，支付成功，额度将在10分钟内系统处理完成，立即加入您的 手机彩票会员帐号。,中国工商银行,中国建设银行,招商银行,交通银行,上海浦东发展银行,中国<br/>
                    光大银行,深圳平安银行。<br/>

                    存款需知:<br/>

                    手机彩票最低存款为$100人民币，最高存款无上限!<br/>

                    未开通网银的会员，请到银行柜台办理。<br/>

                    如有任何问题，请联系24小时在线客服。<br/>
                </dd>

            </dl>
          </div>
          <div class="item" v-show="$route.params.id==3" >
            <h3 class="title">取款帮助</h3>
            <dl>
                <dt>您可以通过以下方式取款：</dt>
                <dd>
                    会员登入后点选“在线取款”。<br/>

                    输入选择“取款密码”，并确认提款人姓名与您银行帐号持有人相符。<br/>

                    输入“取款额度”以及“有效的手机号码”，如有任何问题，方便客服人员在第一时间与您联系。<br/>

                    确认提款银行帐号正确。<br/>

                    可以选择以下方式取款：<br/>

                    绑定中国工商银行(优先)、中国农业银行、北京银行、交通银行、中国银行、中国建设银行、中国光大银行、兴业银行、中国民生银行总行、招商银行、中信银行、广东发展银行、中国邮政、深圳发展银行、上海浦东发展银行。<br/>

                    24小时取款，5分钟内到帐，不限制取款金额，不限制取款次数，如有任何问题，请联系24小时在线客服，<br/>
                </dd>
                <dt>【取款注意事项】</dt>
                <dd>
                    最低取款为$100人民币，取款上限为$200000人民币。(在线支付每日最高取款总额上限为$300000人民币,公司入款每日最高取款总额上限为$1000000人民币)。 手机彩票保留权利审核会员帐号，若由最后一次入款起，有效下注金额需达到入款金额的100%，未达到而申请出款者，公司将收取入款金额的30%行政费用，以及$50出款手续费。<br/>

                    <table border="1" colspan='0' rowspan='0' >
                        <tr>
                            <td>存款</td>
                            <td>存款金额</td>
                            <td>存款后余额</td>
                            <td>会员打码</td>
                        </tr>
                         <tr>
                            <td>第三次</td>
                            <td>7,000</td>
                            <td>20,000	</td>
                            <td>8,000---存款7000后~下注8000元 ,并且多了1000,有通过常态性稽核</td>
                        </tr>
                         <tr>
                            <td>第二次</td>
                            <td>8,000</td>
                            <td>12,000</td>
                            <td> 5,500---存款8000后~下注5500+1000元没通过常态性稽核,须扣费用2400及手续费50</td>
                        </tr>
                         <tr>
                            <td>第一次</td>
                            <td>5,000</td>
                            <td>5,000</td>
                            <td>5,500---存款5000后~下注5500+5500+1000元有通过常态性稽核</td>
                        </tr>
                    </table>


                    所以常态性稽核~会扣除第2次的存款金额8000*30%=2400,及50块手续费才可以出款<br/>

                    **如有任何问题，请联系24小时在线客服！<br/>

                    **请注意**各游戏和局/未接受/取消注单，不纳入有效投注计算。运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注。<br/>

                    **大赔率产品包括: 1X2、过关、波胆、总入球、半全场、双胜彩、冠军赛。<br/>

                    **手机彩票相关优惠，请详见‘优惠活动’<br/>
                </dd>
            </dl>
          </div>
          <div class="item" v-show="$route.params.id==4">
            <h3 class="title">合作伙伴</h3>
            <dl>
                <dt>联盟方案 联盟协议</dt>
                <dd>
                    手机彩票，与AG进行技术合作，拥有菲律宾合法注册之博彩公司。拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们自豪的提供会员最优惠的回 馈，给予合作伙伴最优势的营利回报! 无论您拥有的是网络资源，或是人脉资源，都欢迎您来加入手机彩票合作伙伴的行列，无须负担任何费用，就可以开始无上限的收入。 手机彩票，绝对是您最聪明的选择!<br/>

                    注册申请<br/>

                    请点击[代理注册]在线提出申请，填写正确的各项数据，邮箱，手机，名字必须写真实的，方便以后支付给您佣金，如果以后在支付佣金的时候发现数据错误，一律不给予支付佣金。<br/>

                    请代理注册成功之后，编辑您以后要领取彩金的银行帐号,银行用户名,代理帐号,发送到邮箱,我们进行绑定,每个月系统就会自动把佣金转到您提供的银行帐号上,代理要更改银行帐号的,必须提前一个星期联系在线客服进行修改，否则本公司一律不负责。 手机彩票城会评估审核联盟申请讯息，3日内由专员与您联系开通，并提供您的注册帐号、密码及推广链接。<br/>

                    <table border="1" colspan='0' rowspan='0'>
                        <tr>
                            <td>当月营利</td>
                            <td>当月最低有效会员</td>
                            <td>真人、运动、电子</td>
                            <td>彩票（有效投注）</td>
                            <td>体育投注</td>
                        </tr>
                        <tr>
                            <td>50000</td>
                            <td>5或以上</td>
                            <td>30%</td>
                            <td>0.1%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td>50001~500000</td>
                            <td>10或以上</td>
                            <td>35%</td>
                            <td>0.1%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td>500001~800000</td>
                            <td>30或以上</td>
                            <td>40%</td>
                            <td>0.1%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td>800001~1000000</td>
                            <td>50或以上</td>
                            <td>45%</td>
                            <td>0.1%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td>1000001以上</td>
                            <td>100或以上</td>
                            <td>50%</td>
                            <td>0.1%</td>
                            <td>10%</td>
                        </tr>
                    </table>

                    投注额达到（1000元）视为有效会员！（每月10号为退佣到帐处理时间）<br/>

                    注：澳门新葡京保留上述条例之最终更改权！<br/>

                    请谨记任何使用不诚实方法以骗取佣金将会永久冻结帐号，佣金一律不予发还！<br/>

                    回馈/佣金计算<br/>

                    ●退水(前期累积+当期总退水) - 费用(前期累积+当期总费用),当相减下来有两个结果：<br/>

                    正数 跟 负数<br/>

                    ●正数时：相减下来的金额+派彩(前期累积+当期总派彩)*退佣比例= 可获得佣金<br/>

                    【举例：A代理 退水金额1万，费用5000，有效派彩5万元，退佣比例25%】<br/>

                    退水1万元 – 费用5000=尚有5000<br/>

                    可获佣金= 5000+( 派彩金额 5万* 25% )=17,500<br/>

                    ●负数时：(相减下来的金额+派彩(前期累积+当期总派彩))*退佣比例= 可获得佣金<br/>

                    【举例：A代理 退水金额5000，费用1万，有效派彩5万元，退佣比例25%】<br/>

                    退水5000元 – 费用1万=尚有-5000<br/>

                    可获佣金= (-5000+ 派彩金额 5万)* 25% =11,250<br/>

                    ●请注意：视讯、球类、机率等项目，以报表中【派彩】字段，扣除相应费用后，依照上表门坎 X 佣金百分比。<br/>

                    ●彩票项目以报表中【实际投注】字段X 0.1% 佣金百分比后，扣除相应费用<br/>

                    ●月联盟体系以：视讯、球类、机率、彩票等项目的【派彩/投注量】扣除相应费用后产生退佣总计，成以相应退佣百分比后。<br/>

                    ●相应费用包括：会员各项优惠、存/取款相应手续费(请留意：手机彩票会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。<br/>

                    ●【当月最低有效会员】定义为，在月结区间内进行过最少一次有效下注的会员，如联盟体系当月未达【当月最低有效会员】最低门坎5人，则该月无法领取佣金回馈。联盟体系当月营利达到标准，而【当月最低有效会员】人数未达相应最低门坎，则该月佣金比例依照【当月最低有效会员】人数所达门坎相应的百分比进行退佣。 例：体系当月营利为￥200001，而当月有效会员人数为5人，联盟虽达到营利为￥200001，却未达到有效会员10人以上，故依照联盟有效会员人数5人的门坎的退佣比例核算。<br/>

                    <table border="1" colspan='0' rowspan='0'>
                        <tr>
                            <td>视讯</td>
                            <td>球类</td>
                            <td>机率</td>
                            <td>彩票</td>
                        </tr>
                        <tr>
                            <td>30%</td>
                            <td>30%</td>
                            <td>30%</td>
                            <td>0.1%</td>
                        </tr>
                    </table>
                    <!-- 视讯	球类	机率	彩票
                    30%	30%	30%	0.1% -->
                    例：联盟体系当月最低有效会员达12人，当月派彩：视讯￥300000，球类￥-120000，机率￥20000，彩票有效投注￥800000。如联盟体系当月相应费用统计为￥14000，则佣金计算方式为：<br/>

                    当月佣金计算：<br/>

                    (总派彩金额￥200000，退佣百分比为30%)<br/>

                    (￥800000 彩票投注 x 0.1% 返点百分比) - ￥14000 相应费用= -13200<br/>

                    (-13200+￥200000派彩)*30%=￥56040佣金<br/>

                    *佣金百分比，依未扣除相应费用前之"各项派彩"金额为准。<br/>

                    **假若本月可获得佣金为负数，派彩及费用将会带到下个月继续累计至可获得佣金为正数并高于￥500即可领取。<br/>

                    回馈/佣金支付<br/>

                    联盟佣金计算，结算区间为本月第一个礼拜一至下月第一个礼拜一前的周日，将会员盈利，以联盟方案分红公式计算，佣金由承办客服于每个月的第一个礼拜三开始与代理确认金额后，在5个工作天内将佣金直接汇入代理联盟登记之银行帐号。<br/>
                </dd>
            </dl>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

     data () {
      return {
        items: [
          {item: '关于我们'},
          {item: '联系我们'},
          {item: '存款帮助'},
          {item: '取款帮助'},
          {item: '合作伙伴'}
        ]
      }
    },
    methods: {
      tab (index) {
        this.$router.push({
          path: '/home/about/' + index
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.clear{
  clear: both;
  zoom: 1;
  overflow: hidden;
}
.relative{
    position: relative;
}

.content-main-bg{
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
    overflow:hidden;
    background: #f3f4f5;
}

#content_bg .content{
    width:1200px;
    margin:20px auto;
}

#content_bg .content .sidebar{
    width:290px;
}

#content_bg .content .sidebar ul{
    width:100%;
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2);
}

#content_bg .content .sidebar ul li{
    float: left;
    width:100%;
    height:65px;
    line-height:65px;
    padding-left: 45px;
    border-left: 4px solid transparent;
    font-size:16px;
    color: #333;
    cursor:pointer;
}

#content_bg .content .sidebar ul li:hover,
#content_bg .content .sidebar ul li.move{
    border-left: 4px solid #a1bdf0;
    background: #f6fafe;
    color: #a1bdf0;
}
#content_bg .content .sidebar ul li:nth-last-of-type(1):hover,
#content_bg .content .sidebar ul li:nth-last-of-type(1).move{
    border-radius: 0 0 0 5px ;
}
#content_bg .content .sidebar ul li:nth-of-type(1):hover,
#content_bg .content .sidebar ul li:nth-of-type(1).move{
    border-radius: 5px 0 0 0;
}
#content_bg .content .sidebar ul li .iconfont{
    margin-right: 10px;
    font-size: 24px;
    vertical-align: middle;
}
#content_bg .content .main .right{
    width:890px;
    min-height:700px;
    margin:0 auto;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
}

#content_bg .content .main .right .title{
    height: 65px;
    line-height: 65px;
    padding: 0 25px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
}

#content_bg .content .main .right h2{
    height:60px;
    width:642px;
    line-height:60px;
    font-size:28px;
    margin-bottom:20px;
    border-bottom:2px solid #e1ceae;
}
#content_bg .content .main .right dl{
    padding:10px 25px 30px;
}
#content_bg .content .main .right dl dt{
    margin: 15px 0;
    font-size: 16px;
    color:#333;
    font-weight:bold;
}

#content_bg .content .main .right dl dd{
    line-height: 2.2;
    font-size: 16px;
}
#content_bg .content .main .right dl dd table tr td{
    border: 1px solid ;
    text-align: center;
    padding: 0 10px;
}
.rule-list{
    font-size: 18px;
    padding:0  25px;
    border-bottom: 1px solid #ddd;
}
.rule-list li{
    display: inline-block;
    height: 65px;
    line-height: 65px;
    margin-right: 50px;
    color: #333;
    cursor: pointer;
}
.rule-list li.active,
.rule-list li:hover{
    border-bottom: 2px solid #333;
}

.url-link{
    display: inline-block;
    height: 36px;
    line-height: 36px;
    color: #3075f2;
}
.text-center{
    text-align: center;
}
.red{
    color: #ff4a3b;
}
.table th{
    background: #e3eaf1;
    height:30px;
    color:#333;
}
.table td, table th{
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding: 5px;
    background: #f3f4f4;
    text-align:center;
}
.table{
    width: 97%;
    margin: 12px;
    border-top: 1px solid #bbb;
    border-left: 1px solid #bbb;
    border-spacing: 0;
    font-size: 16px;
    color: #333;
    border-radius: 10px;
     border-collapse: separate;
}
.table tr{
    height: 30px;
}

table th:nth-last-of-type(1){
    border-radius: 0 10px 0 0;
}
table  th:nth-of-type(1){
    border-radius: 10px 0  0 0;
}
 table  td.bottom-border-radius{
    border-radius: 0  0 10px 0;
}
 table td.left-border-radius{
    border-radius: 0  0 0 10px ;
}

.markedCss{
    font-size: 16px;
    font-weight: bold;
    color: #007AFF;
}



.license-container{
    overflow: hidden;
    border: 5px solid #e6cdb7;
}

.license1{
    float: left;
    width: 25%;
    border-right: 5px solid #e6cdb7;
}

.license1>img{
    width: 100%;

}
.detail-intro{
    float: left;
    width: auto;
    padding: 7% 5%;
}
.detail-intro>p{
   line-height: 3;
}
.detail-intro>p span{
    color: red;
}

.detail-intro>a{
    display: block;
    height: 60px;
    line-height: 60px;
    text-align: left;
}

.detail-intro .btn{
    display: inline-block;
    text-align: center;
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
    background: #fd4747 ;
    color: #fff;
}

.detail-intro img{
    vertical-align: middle;
}

.service-cont li{
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 200px;
    padding: 20px;
    margin-right: 10px;
    text-align: center;
    border-radius: 10px;
    background: #eff3f7;
    -webkit-box-shadow: 0 0.1rem 0.1rem transparent;
    box-shadow: 0 0.1rem 0.1rem transparent;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
}

.service-cont li:hover{
    -webkit-box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    -webkit-transform: translateY(-2%);
    -ms-transform: translateY(-2%);
    transform: translateY(-2%);
}
.block{
    display: block;
}
.service-context{
    line-height: 1;
}

.service-context .service-title{
    margin: 20px 0 5px;
    color: #333;
    font-size: 14px;
}
.service-context .service-text{
    margin-bottom: 20px;
    color: #999;
    font-size: 12px;
}
.service-context .service-btn{
    height: 26px;
    line-height: 25px;
    width: 80px;
    border-radius: 13px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: #a1bdf0;

}
 .code-cont{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    padding: 20px 8px;
     text-align: center;
    border-radius: 10px;
    font-size: 14px;
    color: #fff;
    background: #8facdf;
}

.code-cont.show{
    display: block;
}

.email-item{
    display: inline-block;
    width: 270px;
    margin:30px 10px 0 0;
    line-height: 1;
    padding: 15px 25px;
    border-radius: 10px;
    background: #eff3f7;
}

.email-item .service-title{
    margin-bottom: 8px;
    color: #333;
    font-size: 14px;
}
.email-item .service-text{
    color: #999;
    font-size: 12px;
    line-height: 1.5;

}
.email-item .service-title .iconfont{
    margin-right: 5px;
    font-size: 16px;
    color: #f3c56d;
}
.top_nav .dropdown {
    width: 714px;
}

.content-main-bg.night{
    background: url(/images/main-bg-night.jpg) repeat-y center top;
}
</style>
