<template>
  <div class="content content-padded fontsize07 native-scroll" style="padding-right: .5rem;padding-left: .5rem;">
    <div id="ruleHtmlget" class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
      <div id="XYNC" style="font-size: 14px; display: block; font-family: '微软雅黑';" class="ui-body">
        <p style="text-align: left;">北京时间（GMT+8）每天早上09:00至晚上23:00，每20分钟一期，每天开42期。 </p>
        <br>
        <h3 style="font-size:15px;font-weight:bold">具体游戏规则如下</h3>
        <ol>
          <li>
            <span style="color: #FF0000; font-weight: bold;">第一球~第八球</span>
            <p>每一个号码为一投注组合，假如投注号码为开奖号码并在所投的球位置，视为中奖，其余情形视为不中奖。</p>
            <p>
            </p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">第一球~第八球</font>
                <p>指下注的每一球特码与开出之号码其开奖顺序及开奖号码相同，视为中奖，如第一球开出号码 8，下注第一球为 8 者视为中奖，其余情形视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">两面</font>
                <p>指单、双；大、小；尾大、尾小；合单、合双。</p>
              </li>
              <li>
                <font style="font-weight: bold;">单、双</font>
                <p>号码为双数叫双，如8、16；号码为单数叫单，如19、5。</p>
              </li>
              <li>
                <font style="font-weight: bold;">大、小</font>
                <p>开出之号码大于或等于11为大，小于或等于10为小。</p>
              </li>
              <li>
                <font style="font-weight: bold;">尾大、小</font>
                <p>开出之尾数大于或等于5为尾大，小于或等于4为尾小。</p>
              </li>
              <li>
                <font style="font-weight: bold;">合单、双</font>
                <p>开出之个位数与十位数之和为单、双的一种玩法。</p>
              </li>
            </ul>
          </li>

          <li>
            <span style="color: #FF0000; font-weight: bold;">中发白</span>
            <p></p>
            <p></p>
            <p style="color: red;">
              <font style="font-weight: bold;">中 </font>01、02、03、04、05、06、07</p>
            <p style="color: green">
              <font style="font-weight: bold;">发 </font>08、09、10、11、12、13、14</p>
            <p style="color: 000000;">
              <font style="font-weight: bold;">白 </font>15、16、17、18、19、20</p>

          </li>
          <li>
            <span style="color: #FF0000; font-weight: bold;">东南西北</span>
            <p></p>
            <p></p>
            <p style="color: red;">
              <font style="font-weight: bold;">东 </font>01、05、09、13、17</p>
            <p style="color: green">
              <font style="font-weight: bold;">南 </font>02、06、10、14、18</p>
            <p style="color: blueviolet;">
              <font style="font-weight: bold;">西 </font>03、07、11、15、19</p>
            <p style="color: blue;">
              <font style="font-weight: bold;">北 </font>04、08、12、16、20</p>
          </li>
          <li>
            <span style="color: #FF0000; font-weight: bold;">总和</span>
            <p></p>
            <p></p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">总和单双</font>
                <p>所有8个开奖号码的数字总和值是单数为总和单，如数字总和值是31、51；所有8个开奖号码的数字总和值是双数为总和双，如数字总和是42、80；假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">总和大小</font>
                <p>
                  所有8个开奖号码的数字总和值85到132为总大；所有8个开奖号码的数字总和值36到83为总分小；所有8个开奖号码的数字总和值为84打和；如开奖号码为01、20、02、08、17、09、11，数字总和是68，则总分小。假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖，打和不计算结果。</p>
              </li>
              <li>
                <font style="font-weight: bold;">总尾大小</font>
                <p>所有8个开奖号码的数字总和数值的个位数大于或等于5为总尾大，小于或等于4为总尾小；假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。</p>
              </li>
            </ul>
          </li>
          <li>
            <span style="color: #FF0000; font-weight: bold;">龙虎</span>
            <p></p>
            <p></p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">第一球龙虎</font>
                <p>第一球号码大于第八球号码视为龙中奖、反之小于视为虎中奖，其余情形视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">第二球龙虎</font>
                <p>第二球号码大于第七球号码视为龙中奖、反之小于视为虎中奖，其余情形视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">第三球龙虎</font>
                <p>第三球号码大于第六球号码视为龙中奖、反之小于视为虎中奖，其余情形视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">第四球龙虎</font>
                <p>第四球号码大于第五球号码视为龙中奖、反之小于视为虎中奖，其余情形视为不中奖。</p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
