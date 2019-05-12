<template>
  <div class="content content-padded fontsize07 native-scroll" style="padding-right: .5rem;padding-left: .5rem;">
    <div id="ruleHtmlget" class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
      <div id="XYNC" class="ui-body">
        <div>
          <font style="font-weight: bold;">一般投注说明</font>
          <p>客户一经在本公司开户或投注，即被视为已接受这些规则。
            为了避免出现争议，请务必在下注之后检查“ 下注状况 ”。
            开奖后接受的投注，将被视为无效。
            公布之所有赔率为浮动赔率，派彩时的赔率将以本公司确认投注时之赔率为准。
            『六合彩』当次确认下注时间与上次确认下注时间10秒钟内：出现同群组且内容相同2笔以上之注单，本公司只承认一笔有效注单，其余一律注销。
            (举例1：十秒内出现快速下注特别号01,02,03同群组同内容的注单两组以上,本公司只保留一组有效,其余将注销)
            (举例2：十秒内出现快速下注特别号01,02,03 和快速下注特别号01,02,因群组号码不同,则认定两组皆为有效注单)</p>
          <font style="font-weight: bold;">六合彩规则说明 （注：以下所有投注皆含本金）</font>
        </div>
        <ol style="font-family: '微软雅黑';">
          <li><span style="color: #FF0000; font-weight: bold;">特码</span>
            <p></p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">单、双</font>
                <p>特码为偶数叫特双，为奇数叫特单，出49退回本金；</p>
              </li>
              <li>
                <font style="font-weight: bold;">大、小</font>
                <p>开出之特码大于或等于25为特码大，小于或等于24为特码小，出49退回本金；</p>
              </li>
              <li>
                <font style="font-weight: bold;">大单</font>
                <p>开出之特码大于或等于25的单数为特码大单，如33、37，49为和退回本金。</p>
              </li>
              <li>
                <font style="font-weight: bold;">小单</font>
                <p>开出之特码小于或等于23的单数为特码小单，如17、21，49为和退回本金。</p>
              </li>
              <li>
                <font style="font-weight: bold;">大双</font>
                <p>开出之特码大于或等于26的双数为特码大双，如28、32，49为和退回本金。</p>
              </li>
              <li>
                <font style="font-weight: bold;">小双</font>
                <p>开出之特码小于或等于24的双数为特码小双，如18、22，49为和退回本金。</p>
              </li>

              <li>
                <font style="font-weight: bold;">波色</font>
                <p>指开出之特码所属的颜色；</p>
              </li>
              <li>
                <font style="font-weight: bold;">合数单、双</font>
                <p>合单：指开出特码的个位数加上十位数之和为奇数；合双：指开出特码的个位数加上十位数之和为偶数；出49退回本金； </p>
              </li>
              <li>
                <font style="font-weight: bold;">尾大、尾小</font>
                <p>特尾小：开出之特码尾数（0-4），特尾大：开出之特码尾数（5-9）,49号为和。</p>
              </li>
            </ul>
            <p>例：如特码为25，则特码为大，为单，为蓝波，为合单，为尾大；如特码为2，则特码为小，为双，为红波，为合双，为尾小；特码为49时，则大小单双为和，合数单双为和，波色为绿波，尾数大小为和。出49退回本金；</p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">正码</span>
            <p>当期开出之前6个号码叫正码。第一时间出来的叫正码1，依次叫正码2、正码3……正码6，不以大小排序。 </p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">总分</span>
            <p>所有七个开奖号码的分数总和</p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">单、双</font>
                <p>所有七个开奖号码的分数总和是单数叫(总分单) ，如分数总和是103、193；分数总和是双数叫(总分双)，如分数总和是108、160；</p>
              </li>
              <li>
                <font style="font-weight: bold;">大、小</font>
                <p>所有七个开奖号码的分数总和大于或等于175为总分大；分数总和小于或等于174为总分小。如开奖号码为01、07、15、29、38、46、24，分数总和是160，则总分小。</p>
              </li>

            </ul>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">正码特1-6</span>
            <p>正1特、正2特、正3特、正4特、正5特、正6特:指下注的正码特与开出之正码其开奖顺序及开奖号码相同，视为中奖，如第一个正码开奖为13号，下注第一个正码特为13则视为中奖，其它号码视为不中奖。</p>
            <p>正码1、正码2、正码3、正码4 、正码5、正码6的大小单双、波色、合数单双与特码的大小单双、波色、合数单双规则相同，如正码1为25，则正码1为大，为单，为蓝波，为尾大；正码2为2，
              则正码2为小，为双，为红波，为尾小；号码为49时退还本金，则大小单双、合数单双为和，波色为绿波，尾数大小为和。 </p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">波色</span>
            <p>指号码所属的颜色</p>
            <p style="color: red;">
              <font style="font-weight: bold;">红波 </font>01, 02, 07, 08, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45,
              46；
            </p>
            <p style="color:#438CD0">
              <font style="font-weight: bold;">蓝波 </font>03, 04, 09, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48；
            </p>
            <p style="color: green;">
              <font style="font-weight: bold;">绿波 </font>05, 06, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49。
            </p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">连码</span>
            <ul>
              <li>
                <font style="font-weight: bold;">三全中</font>
                <p>每三个号码为一组合，若三个号码都是开奖号码之正码，视为中奖，其余情形视为不中奖。如03、04、05三个都是开奖号码之正码，视为中奖，如两个正码加上一个特别号码视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">三中二</font>
                <p>所投注的每三个号码为一组合，若其中2个是开奖号码中的正码，视为中奖，叫三中二；若3个都是开奖号码中的 正码，叫三中二之中三，其余情形视为不中奖，如03、04、05为一组合，开奖号码中有03
                  、04两个正码，没有05，叫三中二，按三中二赔付；如开奖号码中有03、04、05三个正码，叫三中二之中三，按中三赔付；如出现1个或没有，视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">二全中</font>
                <p>每二个号码为一组合，二个号码都是开奖号码之正码，视为中奖，其余情形视为不中奖（含一个正码加一个特别号码之情形）。</p>
              </li>
              <li>
                <font style="font-weight: bold;">二中特</font>
                <p>每二个号码为一组合，二个号码都是开奖号码之正码，叫二中特之二中；若其中一个是正码，一个是特别号码，叫二中特之中特；其余情形视为不中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">特串</font>
                <p>每二个号码为一组合，其中一个是正码，一个是特别号码，视为中奖，其余情形视为不中奖（含二个号码都是正码之情形）。</p>
              </li>
              <li>
                <font style="font-weight: bold;">四中一</font>
                <p>每四个号码为一个组合，只要正码有开出所选四个号码其中一个，视为中奖（如中两个或两个以上也按照四中一的赔率计算）</p>
              </li>
            </ul>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">过关</span>
            <p>任选2-6个号码为一投注组合，只要单期所开出之开奖结果符合您所选定之串联结果，即视为中奖，若其中一项结果不中，则视为不中奖；若其中一项结果为和，其余结果都中奖的情形，也视为中奖；和的项目赔率以一计算</p>
          </li>

          <li>
            <span style="color: #FF0000; font-weight: bold;">半波</span>
            <p>以特码色波和特码单双大小为一个投注组合，当开出特码符合投注组合，即视为中奖。其余情况视为不中奖.若开出特码为49时退还本金，所有投注半波任一个组合视为和局，其余情况视为不中奖.</p>
          </li>

          <li>
            <span style="color: #FF0000; font-weight: bold;">一肖</span>
            <p>指开出的7个开奖号码中含有投注所属生肖的一个或多个号码，即视为中奖，不论同生肖的号码出现一个或多个，派彩只派一次。<span style="color:#f00">请注意：49亦算输，不为和</span>
            </p>
          </li>
          <li>
            <span style="color: #FF0000; font-weight: bold;">尾数</span>
            <p>指7个开奖号码中含有所属​​尾数的一个或多个号码，不论同尾数的号码出现一个或多个，派彩只派一次。</p>
            <p>
              <font style="font-weight: bold;">0尾 </font>10，20，30，40；
            </p>
            <p>
              <font style="font-weight: bold;">1尾 </font>01，11，21，31，41；
            </p>
            <p>
              <font style="font-weight: bold;">2尾 </font>02，12，22，32，42；
            </p>
            <p>
              <font style="font-weight: bold;">3尾 </font>03，13，23，33，43；
            </p>
            <p>
              <font style="font-weight: bold;">4尾 </font>04，14，24，34，44；
            </p>
            <p>
              <font style="font-weight: bold;">5尾 </font>05，15，25，35，45；
            </p>
            <p>
              <font style="font-weight: bold;">6尾 </font>06，16，26，36，46；
            </p>
            <p>
              <font style="font-weight: bold;">7尾 </font>07，17，27，37，47；
            </p>
            <p>
              <font style="font-weight: bold;">8尾 </font>08，18，28，38，48；
            </p>
            <p>
              <font style="font-weight: bold;">9尾 </font>09，19，29，39，49；
            </p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">特码生肖</span>
            <p>指开出特码所属的生肖。</p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">合肖</span>
            <p>选2~11生肖(排列如同生肖)为一组合，并选择开奖号码的特码是否在此组合内，若选择是"中"(可选择2~11个生肖)且开奖号码的特码亦在此组合内，即视为中奖；若当期特码开出49号，则所有组合皆视为和局。</p>
          </li>
          <li>
            <span style="color: #FF0000; font-weight: bold;">生肖连</span>
            <p>挑选2~5生肖（排列如同生肖）为一个组合，一个生肖对应多个号码，不论同生肖的号码出现一个或多个，派彩只派一次。每个生肖都有自己的赔率，下注组合的总赔率，取该组合生肖的最低赔率为总赔率。<span
              style="color:#f00">请注意49亦算输赢，不为和</span></p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">二肖连（ 中 ）</font>
                <p>选择二个生肖为一投注组合进行下注。该注的二个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">二肖连（不中）</font>
                <p>选择二个生肖为一投注组合进行下注。该注的二个生肖必须没在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">三肖连（ 中 ）</font>
                <p>选择三个生肖为一投注组合进行下注。该注的三个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">三肖连（不中）</font>
                <p>选择三个生肖为一投注组合进行下注。该注的三个生肖必须没在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">四肖连（ 中 ）</font>
                <p>选择四个生肖为一投注组合进行下注。该注的四个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">四肖连（不中）</font>
                <p>选择四个生肖为一投注组合进行下注。该注的四个生肖必须没在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">五肖连（ 中 ）</font>
                <p>选择五个生肖为一投注组合进行下注。该注的五个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
              </li>
            </ul>
          </li>
          <li>
            <span style="color: #FF0000; font-weight: bold;">尾数连</span>
            <p>挑选2~4个尾数为一组合；一个尾数对应多个号码，不论同尾数的号码出现一个或多个，派彩只派一次。每个尾数都有自己的赔率，下注组合的总赔率，取该组合尾数的最低赔率为总赔率。<span
              style="color:#f00">请注意49亦算输赢，不为和</span></p>
            <ul type="square">
              <li>
                <font style="font-weight: bold;">二尾连（ 中 ）</font>
                <p>选择二个尾数为一投注组合进行下注。该注的二个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">二尾连（不中）</font>
                <p>选择二个尾数为一投注组合进行下注。该注的二个尾数必须没在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">三尾连（ 中 ）</font>
                <p>选择三个尾数为一投注组合进行下注。该注的三个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">三尾连（不中）</font>
                <p>选择三个尾数为一投注组合进行下注。该注的三个尾数必须没在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">四尾连（ 中 ）</font>
                <p>选择四个尾数为一投注组合进行下注。该注的四个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
              </li>
              <li>
                <font style="font-weight: bold;">四尾连（不中）</font>
                <p>选择四个尾数为一投注组合进行下注。该注的四个尾数必须没在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
              </li>

            </ul>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">家禽、野兽</span>
            <p>是一种快速下注模式，根据十二生肖其动物特性来区分。家禽包括：牛、马、羊、鸡、狗、猪；野兽包括：鼠、虎、兔、龙、蛇、猴。 [应用于特码生肖、六肖等项目]</p>
          </li>
          <li><span style="color: #FF0000; font-weight: bold;">全不中</span>
            <p>挑选5~12个号码为一个组合，当期号码(所有正码与最后开出的特码)皆没有坐落于投注时所挑选之号码组合内，则视为中奖，若是有任何一个当期号码开在所挑选的号码组合情形视为不中奖。
              例如当期号码为19,24,17,34,40,39,特别号49，所挑选5个号码(称为五不中)，若所挑选的号码内皆沒有坐落于当期号码，则为中奖</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

