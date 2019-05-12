<template>
  <div>
    <div class="rules-container-header">
      <ul>
        <li @click="contentSelectFc(item)" :class="{'active':item.lotteryId==$route.query.id}"
            v-for="(item,index) in contentNav" :key="index">
          <a>{{item.lotteryName}}</a>
        </li>
      </ul>
    </div>
    <div class="rules-container-text" v-if="$route.query.id==10">

      <div class="content content-padded fontsize07 native-scroll" style="padding-right: 10px;padding-left: 10px;">
        <div id="ruleHtmlget" class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
          <div id="XYNC" style="font-family: '微软雅黑';" class="ui-body">
            <p>pc蛋蛋开奖是按照北京快乐8的开奖结果计算得出。取其1-6位、7-12位、13-18位，三项皆取和值的末尾数，得到的三个数字即为开奖结果。此游戏的开奖时间完全与北京福彩网发行的北京快乐8同步。</p>
            <br>
            <h3 style="font-size:15px;font-weight:bold">具体游戏规则如下</h3>
            <ol>
              <li>
                <span style="color: #FF0000; font-weight: bold;">大、小</span>
                <p></p>
                <p>注(出13押小回本金 出14押大回本本金)</p>
                <ul type="square">
                  <li>
                    <font style="font-weight: bold;">大</font>
                    <p>三个球数值相加，和值大于等于14为大。</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">小</font>
                    <p>三个球数值相加，和值小于等于13为小。</p>
                  </li>
                </ul>
              </li>
              <li>
                <span style="color: #FF0000; font-weight: bold;">单、双</span>
                <p></p>
                <p>注（出13压单回本出14押双回本）</p>
                <ul type="square">
                  <li>
                    <font style="font-weight: bold;">单</font>
                    <p>三个球数值相加，和值为单数。</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">双</font>
                    <p>三个球数值相加，和值为双数。</p>
                  </li>
                </ul>
              </li>
              <li>
                <span style="color: #FF0000; font-weight: bold;">大小单、双</span>
                <p></p>
                <p>注：（开13，14组合回本，举例 买100元小单开13就回本金 买100元大双开14就回本金）。</p>
                <ul type="square">
                  <li>
                    <font style="font-weight: bold;">大单</font>
                    <p>（三个球数值相加，和值）15,17,19,21,23,25,27为大单。</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">小单</font>
                    <p>（三个球数值相加，和值）01,03,05,07,09,11,13为小单。</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">大双</font>
                    <p>（三个球数值相加，和值）14,16,18,20,22,24,26为大双。</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">小双</font>
                    <p>（三个球数值相加，和值）00,02,04,06,08,10,12为小双。</p>
                  </li>
                </ul>
              </li>
              <li>
                <span style="color: #FF0000; font-weight: bold;">极大、小</span>
                <p></p>
                <p>注：[极小0-5] 10倍 [极大22-27] 10倍 举例：买极小100元 开奖结果为0-5其中一个数字就中1000元（包括本金）极大反之。</p>
                <ul type="square">
                  <li>
                    <font style="font-weight: bold;">极大</font>
                    <p>（三个球数值相加，和值）22，23,24,25,26,27为极大。</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">极小</font>
                    <p>（三个球数值相加，和值）00,01,02,03,04，05为极小。</p>
                  </li>
                </ul>
              </li>
              <li>
                <span style="color: #FF0000; font-weight: bold;">定位玩法(单点数字玩法)</span>
                <p>从数字0-27中选取一个数字 中奖以对应赔率含本金奖励</p>
                <p>注： 当开奖结果为：0,13,14,27(所有买的波色皆输)视为全部不中奖！</p>
                <ul type="square">
                  <li>
                    <font style="font-weight: bold;">红波</font>
                    <p style="color: red;">
                      <font style="font-weight: bold;"></font>（三个球数值相加，和值） 03,06,09,12,15,18,21,24为红波</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">绿波</font>
                    <p style="color: green;">
                      <font style="font-weight: bold;"></font>（三个球数值相加，和值） 01,04,07,10,16,19,22,25为绿波</p>
                  </li>
                  <li>
                    <font style="font-weight: bold;">蓝波</font>
                    <p style="color: blue;">
                      <font style="font-weight: bold;"></font>（三个球数值相加，和值） 02,05,08,11,17,20,23,26为蓝波</p>
                  </li>
                </ul>
              </li>
              <li>
                <span style="color: #FF0000; font-weight: bold;">豹子</span>
                <p>当期开出三个数字相同即为豹子</p>
              </li>
              <li>
                <span style="color: #FF0000; font-weight: bold;">包三</span>
                <p>在下注的三个号码中，有任意一个号码与三个特码之和一致视为中奖，其他不中！（如：开奖结果为 0.1.2.
                  和值为3，下注号码中有3为中奖，反之：如：下注0.15,26，三个特码开奖结果之和有等于0，15，26的号码视为中奖，如：开奖结果0.7.8
                  ，8.9.9.，0.0.0组合等等！）
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['sideNav'],
    data () {
      return {
        contentNav: [{title: 'pc蛋蛋', id: 10}],
      }
    },
    methods: {
      contentSelectFc (item) {
        this.$router.push({
          path: `/rules/pcdd`,
          query: {
            id: item.lotteryId
          }
        })
      }
    },
    created(){
       this.sideNav.forEach((sideItem,sideIndex)=>{
        if(sideItem.id==this.$route.query.id){
          this.contentNav = sideItem.childList;
        }else{
            sideItem.childList.forEach((contentItem,contentIndex)=>{
                if(contentItem.lotteryId == this.$route.query.id){
                  this.contentNav = sideItem.childList;
                }
            })
          }
      })
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @active-color: #ff0000;
  .rules-container-header {
    height: 63px;
    border-bottom: 1px solid #e4e0e0;
    padding: 0 10px;

    ul {
      li {
        float: left;
        padding: 0 20px;
        cursor: pointer;

        a {
          color: #666;
          line-height: 60px;
        }

        &:hover {
          //  border-bottom: 3px solid #FF6600;
          a {
            color: #ff6600;
            // line-height: 60px;
          }
        }

        &.active {
          border-bottom: 3px solid #ff6600;

          a {
            color: #ff6600;
            line-height: 60px;
          }
        }
      }
    }
  }

  .rules-container-text {
    padding: 25px 30px;
    font-size: 14px;
    line-height: 30px;
    color: #444444;
    text-align: justify;
  }
</style>
