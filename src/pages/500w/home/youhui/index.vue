<template>
  <div class="container activity" id="ActivityBox">
    <div v-show="false">
      <div id="main_id_day" class="floor fix">
        <div id="id_day" class="showDetail fix">
          <img
            src="/static/500w/img/youhui/activity1.png"
            alt
            class="ImgLI floorTitleImg defaultImg"
          >
          <div class="floorRright">
            <h2>每日加奖</h2>
            <p>每日加奖是根据会员昨日投注金额进行加奖，奖金无上限。</p>
            <a href="javascript:;">查看详情
              <i></i>
            </a>
          </div>
        </div>
        <div id="detail_id_day" class="floorDetail floorHide">
          <div class="inHtml">
            <h3>每日加奖
              <i></i>
            </h3>
            <em>昨日投注：
              <i>0.00</i>
            </em>
            <em>当前等级：
              <i>未登录</i>
            </em>
            <em>加奖比例：
              <i>0.00%</i>
            </em>
            <em>可得加奖：
              <i>0.00</i>
            </em>
            <a href="javascript:;" class="disable">不可领取</a>
            <h3>加奖比例
              <i></i>
            </h3>
            <table width="60%">
              <tbody>
                <tr>
                  <th class="tbplus">
                    <i>等级</i>
                    <ins></ins>
                    <em>昨日投注</em>
                  </th>
                  <th>100+</th>
                  <th>10000+</th>
                  <th>200000+</th>
                </tr>
                <tr>
                  <td>VIP1</td>
                  <td>0.00%</td>
                  <td>0.00%</td>
                  <td>0.00%</td>
                </tr>
                <tr>
                  <td>VIP2</td>
                  <td>0.00%</td>
                  <td>0.00%</td>
                  <td>0.00%</td>
                </tr>
                <tr>
                  <td>VIP3</td>
                  <td>0.10%</td>
                  <td>0.20%</td>
                  <td>0.30%</td>
                </tr>
                <tr>
                  <td>VIP4</td>
                  <td>0.20%</td>
                  <td>0.30%</td>
                  <td>0.40%</td>
                </tr>
                <tr>
                  <td>VIP5</td>
                  <td>0.30%</td>
                  <td>0.40%</td>
                  <td>0.50%</td>
                </tr>
                <tr>
                  <td>VIP6</td>
                  <td>0.40%</td>
                  <td>0.50%</td>
                  <td>0.60%</td>
                </tr>
                <tr>
                  <td>VIP7</td>
                  <td>0.50%</td>
                  <td>0.60%</td>
                  <td>0.70%</td>
                </tr>
                <tr>
                  <td>VIP8</td>
                  <td>0.60%</td>
                  <td>0.70%</td>
                  <td>0.80%</td>
                </tr>
                <tr>
                  <td>VIP9</td>
                  <td>0.70%</td>
                  <td>0.80%</td>
                  <td>0.90%</td>
                </tr>
              </tbody>
            </table>
            <h3>活动说明
              <i></i>
            </h3>
          </div>
          <div class="activityCon">
            <p>1、每日加奖在每日凌晨00:20后开放领取；</p>
            <p>2、加奖比例是根据会员等级以及昨日累计投注金额进行一定比例的加奖；</p>
            <p>3、需VIP1以上且昨日投注额大于或等于100才能获得加奖；</p>
            <p>4、撤单和其他无效投注将不计算在内；</p>
            <p>5、活动奖金逾期未领取，视为自动放弃活动资格。</p>
          </div>
        </div>
      </div>
      <div class="floorLine"></div>
      <div id="main_id_growth" class="floor fix">
        <div id="id_growth" class="showDetail fix">
          <img
            src="/static/500w/img/youhui/activity2.png"
            alt
            class="ImgLI floorTitleImg defaultImg"
          >
          <div class="floorRright">
            <h2>晋级奖励</h2>
            <p>会员每晋升一个等级，都能获得奖励，最高可达6888元。</p>
            <a href="javascript:;">查看详情
              <i></i>
            </a>
          </div>
        </div>
        <div id="detail_id_growth" class="floorDetail floorHide">
          <div class="inHtml">
            <h3>晋级奖励
              <i></i>
            </h3>
            <em>当前等级：
              <i>未登录</i>
            </em>
            <em>晋级奖励：
              <i>0.00</i>
            </em>
            <a href="javascript:;" class="disable">不可领取</a>
            <h3>晋级机制
              <i></i>
            </h3>
            <table width="60%" style="table-layout: fixed;">
              <tbody>
                <tr>
                  <th>等级</th>
                  <th>头衔</th>
                  <th>成长积分</th>
                  <th>晋级奖励(元)</th>
                  <th>跳级奖励(元)</th>
                </tr>
                <tr>
                  <td>VIP1</td>
                  <td>农民</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>VIP2</td>
                  <td>地主</td>
                  <td>500</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>VIP3</td>
                  <td>知县</td>
                  <td>1000</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>VIP4</td>
                  <td>通判</td>
                  <td>5000</td>
                  <td>10</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>VIP5</td>
                  <td>知府</td>
                  <td>10000</td>
                  <td>58</td>
                  <td>74</td>
                </tr>
                <tr>
                  <td>VIP6</td>
                  <td>总督</td>
                  <td>50000</td>
                  <td>188</td>
                  <td>262</td>
                </tr>
                <tr>
                  <td>VIP7</td>
                  <td>巡抚</td>
                  <td>250000</td>
                  <td>588</td>
                  <td>850</td>
                </tr>
                <tr>
                  <td>VIP8</td>
                  <td>丞相</td>
                  <td>1000000</td>
                  <td>1688</td>
                  <td>2538</td>
                </tr>
                <tr>
                  <td>VIP9</td>
                  <td>帝王</td>
                  <td>5000000</td>
                  <td>6888</td>
                  <td>9426</td>
                </tr>
              </tbody>
            </table>
            <h3>活动说明
              <i></i>
            </h3>
          </div>
          <div class="activityCon">
            <p>1、会员每晋升一个等级，都能获得奖励，最高可达6888元。</p>
            <p>2、充值1元可获得1成长积分。</p>
            <p>
              <br>
            </p>
            <p>例1：奥巴马从VIP1直接晋升到VIP4，他将能获得(1+5+10)*110%=18元奖励(小数点无条件进位)。</p>
            <p>例2：本拉登从VIP2直接晋升到VIP4，他将能获得(5+10)*110%=17元奖励(小数点无条件进位)
              <span>。</span>
            </p>
          </div>
        </div>
      </div>
      <div class="floorLine"></div>
      <div id="main_id1003241" class="floor fix">
        <div id="id1003241" class="showDetail fix">
          <img
            src="/static/500w/img/youhui/10713311-2627-4ad2-aa75-a29f94d6e734.jpg"
            alt
            class="ImgLI floorTitleImg defaultImg"
          >
          <div class="floorRright">
            <h2>情满中秋，欢聚国庆</h2>
            <p>情满中秋，欢聚国庆</p>
            <a href="javascript:;">查看详情
              <i></i>
            </a>
          </div>
        </div>
        <div id="detail_id1003241" class="floorDetail floorHide">
          <div id="content_1003241">
            <img
              style="max-width:970px;"
              src="/static/500w/img/youhui/0dd43137-3a7d-4cb1-9eae-6a6009e9a82d.jpg"
              alt
            >
            <p style="display:none;"></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="main_id_redb"
      class="floor fix"
      onclick="window.open('/static/500w/html/activity/active/czjhb/index.html','_blank')"
    >
      <div id="id_redb" class="showDetail fix">
        <img src="/static/500w/img/youhui/redb.gif" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>红包雨天天下</h2>
          <p>亿元现金红包等你拿</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div
      id="main_id_jgj"
      class="floor fix"
      onclick="window.open('/static/500w/html/activity/active/jgj/index.html','_blank')"
    >
      <div id="id_jgj" class="showDetail fix">
        <img src="/static/500w/img/youhui/jgj.jpg" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>彩票金管家</h2>
          <p>永远累积打码</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <!--<div id="main_idmayday" class="floor fix">
      <div id="idmayday" class="showDetail fix">
        <img src="/static/500w/img/youhui/mayday.png" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>五一“劳动节”</h2>
          <p>充值存款大惠送 最高18888</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_idmayday" class="floorDetail floorHide">
        <div id="content_mayday">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/maydayc.png" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>-->

    <div id="main_idtjhc" class="floor fix">
      <div id="idtjhc" class="showDetail fix">
        <img src="/static/500w/img/youhui/tjhc.png" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>天降横财 月进斗金</h2>
          <p>每月现金回馈</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_idtjhc" class="floorDetail floorHide">
        <div id="content_tjhc">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/tjhcc.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div id="main_idqpyx" class="floor fix">
      <div id="idqpyx" class="showDetail fix">
        <img src="/static/500w/img/youhui/qpyx.png" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>万人在线 棋牌游戏</h2>
          <p>惊喜不断</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_idqpyx" class="floorDetail floorHide">
        <div id="content_qpyx">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/qpyxc.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div id="main_idwuye" class="floor fix">
      <div id="idwuye" class="showDetail fix">
        <img src="/static/500w/img/youhui/wuye.png" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>午夜玩彩最刺激</h2>
          <p>好运彩金送不停</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_idwuye" class="floorDetail floorHide">
        <div id="content_wuye">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/wuyec.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div id="main_idky_ks" class="floor fix">
      <div id="idky_ks" class="showDetail fix">
        <img src="/static/500w/img/youhui/ky_ks.png" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>开元棋牌</h2>
          <p>亏损救援金</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_idky_ks" class="floorDetail floorHide">
        <div id="content_ky_ks">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/ky_ksc.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>


    <div id="main_iddmw" class="floor fix">
      <div id="iddmw" class="showDetail fix">
        <img src="/static/500w/img/youhui/dmw.png" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>千万彩金回馈</h2>
          <p>谁是最强打码王</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_iddmw" class="floorDetail floorHide">
        <div id="content_dmw">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/dmwc.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>
    <div id="main_iddaili" class="floor fix">
      <div id="iddaili" class="showDetail fix">
        <img src="/static/500w/img/youhui/daili.jpg" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>代理集结令</h2>
          <p>带你赚翻天</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_iddaili" class="floorDetail floorHide">
        <div id="content_daili">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/dailic.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div id="main_id10013701" class="floor fix">
      <div id="id10013701" class="showDetail fix">
        <img src="/static/500w/img/youhui/huikuan.jpg" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>银行卡赠送1%</h2>
          <p>豪礼送不停~</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id10013701" class="floorDetail floorHide">
        <div id="content_10013701">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/huikuanc.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div
      id="main_id_zhuanpan"
      class="floor fix"
      onclick="window.open('/static/500w/html/activity/active/opportunity/index.html','_blank')"
    >
      <div id="id_zhuanpan" class="showDetail fix">
        <img src="/static/500w/img/youhui/zhuanpan.jpg" alt class="ImgLI floorTitleImg defaultImg">
        <div class="floorRright">
          <h2>幸运大转盘</h2>
          <p>豪礼送不停</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>

    <div id="main_id1001360" class="floor fix">
      <div id="id1001360" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/46d10efa-54af-4737-a257-8034021c6865.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>微信解除限制</h2>
          <p>微信扫码支付，解除额外限制，大额无忧</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001360" class="floorDetail floorHide">
        <div id="content_1001360">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/wxxz.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>

    <div class="floorLine"></div>
    <div id="main_id1001361" class="floor fix">
      <div id="id1001361" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/a1c25d36-3987-4df9-85e7-a3b62b474bda.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>支付宝大额转帐</h2>
          <p>支付宝转帐大额无忧，存款再无限制</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001361" class="floorDetail floorHide">
        <div id="content_1001361">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/zfbxz.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>
    <div id="main_id1001362" class="floor fix">
      <div id="id1001362" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/182a7bf9-76e1-4b05-8b4f-efb499f76727.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>云闪付大额转帐无忧</h2>
          <p>云闪付大额转帐，充值快，秒到帐，省时间</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001362" class="floorDetail floorHide">
        <div id="content_1001362">
          <div style="text-align:center;">
            <img style="max-width:970px;" src="/static/500w/img/youhui/ysf.jpg" alt>
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>

    <div id="main_id1001369" class="floor fix">
      <div id="id1001369" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/5af3b189-808c-4827-83e7-deb645903803.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>新会员首存大礼包</h2>
          <p>新会员首次存款即送19元彩金</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001369" class="floorDetail floorHide">
        <div id="content_1001369">
          <div style="text-align:center;">
            <img
              style="max-width:970px;"
              src="/static/500w/img/youhui/0823f43e-44fa-4aff-bd49-e2879af59250.jpg"
              alt
            >
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <template v-if="false">
      <div class="floorLine"></div>
      <div id="main_id1001357" class="floor fix">
        <div id="id1001357" class="showDetail fix">
          <img
            src="/static/500w/img/youhui/68fba8fe-e27e-4dac-bfd2-a715f95c1b22.jpg"
            alt
            class="ImgLI floorTitleImg defaultImg"
          >
          <div class="floorRright">
            <h2>银行卡狂送1%</h2>
            <p>银行卡入款狂送1%，次次存-次次送</p>
            <a href="javascript:;">查看详情
              <i></i>
            </a>
          </div>
        </div>
        <div id="detail_id1001357" class="floorDetail floorHide">
          <div id="content_1001357">
            <div style="text-align:center;">
              <img
                style="max-width:970px;"
                src="/static/500w/img/youhui/c5f2dca4-2c84-4ed5-b30b-0c1b3f9a0482.jpg"
                alt
              >
            </div>
            <p style="display:none;"></p>
            <p></p>
          </div>
        </div>
      </div>
    </template>
    <div class="floorLine"></div>

    <div class="floorLine"></div>
    <div id="main_id1001363" class="floor fix">
      <div id="id1001363" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/41a09999-c3bd-463b-beb3-bebdb76e47e8.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>神秘彩金</h2>
          <p>神秘彩金好礼相送，祝君好运~</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001363" class="floorDetail floorHide">
        <div id="content_1001363">
          <div style="text-align:center;">
            <img
              style="max-width:970px;"
              src="/static/500w/img/youhui/4c2551de-6156-49c0-85c9-a4066ace111e.jpg"
              alt
            >
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>
    <div id="main_id1001365" class="floor fix">
      <div id="id1001365" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/f32af1e4-df22-4e1d-86f7-cb4656b6cbc9.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>全新服务</h2>
          <p>全新服务，全新彩种，一如既往的为您服务</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001365" class="floorDetail floorHide">
        <div id="content_1001365">
          <div style="text-align:center;">
            <img
              style="max-width:970px;"
              src="/static/500w/img/youhui/f6fc72f2-7023-4e9a-85fa-3045ece0dc14.jpg"
              alt
            >
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>
    <div id="main_id1001364" class="floor fix">
      <div id="id1001364" class="showDetail fix">
        <img
          src="/static/500w/img/youhui/08caa2f3-eb6b-494a-ab4c-830e6f13867a.jpg"
          alt
          class="ImgLI floorTitleImg defaultImg"
        >
        <div class="floorRright">
          <h2>绝对优势</h2>
          <p>500彩票网是您明智的选择，最给力网投品牌</p>
          <a href="javascript:;">查看详情
            <i></i>
          </a>
        </div>
      </div>
      <div id="detail_id1001364" class="floorDetail floorHide">
        <div id="content_1001364">
          <div style="text-align:center;">
            <img
              style="max-width:970px;"
              src="/static/500w/img/youhui/b5bcd2cf-210a-46b5-bcc6-1f24ce3807b7.jpg"
              alt
            >
          </div>
          <p style="display:none;"></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="floorLine"></div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },
  methods: {},
  created: function() {},
  mounted() {
    $("[id^='id']").on("click", function() {
      var t = $(this).attr("id");
      $("#detail_" + t).hasClass("floorShow")
        ? ($("#detail_" + t)
            .removeClass("floorShow")
            .addClass("floorHide"),
          $(this)
            .parent("div")
            .removeClass("show"))
        : ($(".floorDetail")
            .removeClass("floorShow")
            .addClass("floorHide"),
          $("#detail_" + t)
            .removeClass("floorHide")
            .addClass("floorShow"),
          $("html,body").animate(
            { scrollTop: $("#main_" + t).offset().top },
            0
          ),
          $(this)
            .parent("div")
            .addClass("show"));
    });
    $(".menuHead").bind("click", function() {
      var hid = $(this).attr("id");
      var im = $("#img_" + hid);
      if (im.css("display") === "none") {
        $(".Content_box").hide();
        im.show();
      } else {
        im.hide();
      }
    });
  },
  watch: {},
  components: {}
};
</script>

<style lang="less" scoped>
body {
  background: #e6e6e6 !important;
}

.container {
  width: 1000px;
  margin: 0 auto;
}

.activity {
  background: #e6e6e6;
  box-sizing: border-box;
  color: #666;
  font: 12px/2em Microsoft YaHei, SimSun, Arial;

  .show a i {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}

.floor {
  background: #fff;
  box-shadow: 0 4px 8px #c7c7c7;
  padding: 15px;
}

.show {
  display: block;
}

.floorLine {
  background: url("/static/500w/img/youhui/activityShaw.7aa4879.png") no-repeat;
  width: 100%;
  height: 15px;
  padding: 0 3px;
  margin-left: -3px;
}

.fix:before {
  content: "";
  display: table;
}

.fix:after {
  clear: both;
  overflow: hidden;
  content: "";
  display: table;
  outline: none;
}

.activity .floor:first-child {
  margin-top: 15px;
}

.showDetail {
  cursor: pointer;
}

.floor .floorTitleImg {
  float: left;
  width: 680px;
  height: 170px;
}

.floor .floorRright {
  float: left;
  width: 290px;
  padding: 0 15px;
  box-sizing: border-box;
}

.floor .floorRright h2 {
  font-size: 28px;
  font-weight: 100;
  margin: 0;
  color: #e4393c;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}

.floor .floorRright p {
  font-size: 14px;
  padding: 12px 0;
  height: 72px;
  word-break: break-all;
}

.floor .floorRright a {
  font-size: 18px;
  display: block;
  line-height: 40px;
  width: 120px;
  background: #e4393c;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  padding-right: 18px;
  box-sizing: border-box;
}

.floor .floorRright a i {
  position: absolute;
  margin-top: 15px;
  margin-left: 8px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #f09394;
  transition: 0.1s;
}

.floorDetail {
  margin-top: 15px !important;
  border-top: 2px dashed #e6e6e6;
  overflow: hidden;
  width: 970px !important;
  clear: both;
  word-break: break-all;
  overflow-x: auto;

  i {
    color: #f76727;
    font-size: 14px;
  }

  h3 {
    display: block;
    background: #d2dbe0;
    width: 84px;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 14px;

    i {
      display: inline-block;
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      border-left: 10px solid #d2dbe0;
      position: absolute;
      margin-left: 14px;
    }
  }

  em {
    margin-right: 15px;
    font-size: 14px;
  }

  .disable {
    background: #d6d6d6;
    color: #999;
  }

  a {
    font-size: 16px;
    color: #fff;
    background: #e4393c;
    border-radius: 4px;
    padding: 7px 18px;
  }

  table {
    text-align: center;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;

    th {
      border: 1px solid #e6e6e6;
      height: 40px;
      font-size: 14px;
      background-color: #4393be;
      color: #fff;
      font-weight: 100;
      vertical-align: middle;
    }

    td {
      border: 1px solid #e6e6e6;
      height: 40px;
      font-size: 14px;
      vertical-align: middle;
    }
  }
}

.tbplus {
  position: relative;
  width: 145px;

  i {
    position: absolute;
    left: 12px;
    bottom: 3px;
    color: #fff;
  }

  ins {
    border-bottom: 1px solid #7fbbdc;
    position: absolute;
    width: 147px;
    -webkit-transform: rotate(15.2deg);
    transform: rotate(15.2deg);
    left: -1px;
    top: 19px;
  }

  em {
    position: absolute;
    right: -10px;
    top: -2px;
    font-size: 14px;
  }
}

.floorHide {
  display: none;
}

.defaultImg {
  background: url(/static/500w/img/youhui/notPicture.png) 50% no-repeat !important;
  background-size: cover;
  background-color: #f3f3f3 !important;
}

img {
  vertical-align: middle;
  border: 0;
}

ins {
  text-decoration: none;
  margin: 0 4px;
}
</style>
