<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <div class="decial-1 alignItems">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
              <div class="title">{{itemOut.title}}</div>
              <div class="all-item">
                <el-radio-group v-model="itemOut.checkbox">
                  <div @click="radioChange(itemOut,itemInner)" :key="indexInner"
                       v-for="(itemInner,indexInner) in itemOut.mess" class="box guo-guan-cheacBox">
                    <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                    <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                    <el-radio :disabled="disabledCheckBox" :label="itemInner">&ensp;</el-radio>
                  </div>
                </el-radio-group>
              </div>

            </div>
          </div>
          <!-- <vp-history ref="vpHistory"></vp-history>    -->
        </div>

      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit
          v-on:range-say="rangeChange"
          v-on:submit-Input-say="fastInput"
          v-on:submit-resetAll="resetAll"
          v-on:submit-review="review"
          :totalCount="totalCount"
          :selectFast="selectFast"
          :saveSelectMoney="saveSelectMoney"
          :rangleType="rangleType"
        >
        </vp-fast-and-submit>
      </div>
    </form>
    <Modal :scrollable=true
           title="投注信息"
           v-model="modal" class-name="vp-betting-warp"
           width="584" height="400"
           @on-ok="submit">
      <!-- @on-cancel="cancel" -->

      <vp-betting ref="betting"></vp-betting>
    </Modal>
  </div>
</template>
<script>

  import vpBetting from '../../../components/betting/betting'
  import vpFastAndSubmit from '../../../components/fast-and-submit/submit'

  import LotterySev from '@/pages/public/tradition/data/LotterySev.js'
  import store from '@/vuex/store'
  import data from '@/pages/public/tradition/data/liu-he-cai'
  import vpHistory from '../../../components/history/history'

  export default {
    props: {
      childNeedMess: {
        type: Object
      },
      isopen: {
        type: Boolean
      },
      oddsListPar: {
        type: Object
      }
    },
    data () {
      return {
        modal: false,
        rangleType: '六合彩',
        oddsList: '',
        seletPriceStaue: '',
        disabledCheckBox: false,
        totalCount: {
          number: 0,
          total: 0,
          db: 1, //倍数
          mol: '元', //状态
          ratio: 1  //分角倍率
        },
        saveSelectMoney: {
          money: ''
        },
        selectFast: {
          list: [
            {price: 10, active: false},
            {price: 20, active: false},
            {price: 50, active: false},
            {price: 100, active: false},
            {price: 500, active: false},
            {price: 1000, active: false}
          ],
          select: ''
        },
        submitList: [],
        listTop: data.guoGuan.listTop
      }
    },
    methods: {
      radioChange (datasOut, datasIn) {
        //当第二次点击同一个时
        // console.log(datasOut)
        // console.log(datasIn)
        if (datasOut.checkbox.ball == datasIn.ball && datasOut.title == datasIn.title && datasIn.active) {
          datasOut.checkbox = ''
          datasIn.active = false
        } else {
          datasOut.checkbox = datasIn
          if (this.saveSelectMoney.money) {
            datasIn.model = this.saveSelectMoney.money
          }
          this.listTop.forEach((outItem, v) => {
            outItem.mess && outItem.mess.forEach((inItem, v) => {
              if (inItem.title == datasIn.title && inItem.ball != datasIn.ball) {
                inItem.active = false
              } else if (inItem.title == datasIn.title && inItem.ball == datasIn.ball) {
                inItem.active = true
              }
            })
          })
        }
        this.calculationTotal()
      },
      //快速替换填金额
      fastInput (type) {
        if (!this.isopen) return false
        if (!type) {
          this.listTop.forEach((outItem, v) => {
            outItem.mess && outItem.mess.forEach((inItem, v) => {
              if (inItem.active) {
                inItem.model = this.saveSelectMoney.money
              }
            })
          })
        }

        this.calculationTotal()
      },
      //选择下拉框下注金额
      seletPrice (itemInner, itemSelet) {
        itemInner.model = itemSelet.price
        this.seletPriceStaue = ''
        this.calculationTotal()
      },
      //计算全部金额
      calculationTotal () {
        // 计算总数
        let number = 0
        let total = 0
        this.listTop.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              number += 1
              total += (+inItem.model)
            }
          })
        })
        this.totalCount.number = number
        this.totalCount.total = total
      },
      //获取赔率信息
      async getOdds () {
        if (!this.oddsList) {
          this.oddsList = this.oddsListPar
          this.oddsBelong()
        } else {
          this.oddsBelong()
        }
      },
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            inItem.price = this.oddsList['20216_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20216_' + inItem.ball + ''].fsrate
          })
        })
      },
      // 该变赔率和返水
      rangeChange () {
        //  if(!this.isopen) return false;
        // this.listTop.forEach((outItem,v)=>{
        //     outItem.mess&&outItem.mess.forEach((inItem,v)=>{
        //           inItem.active=false;
        //           inItem.model='';
        //     })
        // })
        // this.listBot.forEach((outItem,v)=>{
        //     outItem.mess&&outItem.mess.forEach((inItem,v)=>{
        //           inItem.active=false;
        //           inItem.model='';
        //     })
        // });
      },
      // 重置所有信息
      resetAll () {
        this.listTop.forEach((outItem, v) => {
          outItem.checkbox = ''
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            inItem.active = false
            inItem.model = ''
          })
        })
        //清空提交
        this.submitList = []  //提交清空
        this.seletPriceStaue = ''
        this.saveSelectMoney.money = ''//清空输入钱
        this.selectFast.list.forEach((item, v) => {
          item.active = false
        })
        this.totalCount.number = 0
        this.totalCount.total = 0
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        let staue = true
        this.submitList = []
        this.listTop.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (inItem.model && +inItem.model < 10) {
              staue = false
              return false
            }
            if (inItem.active && inItem.model) {
              this.submitList.push(inItem)
            }
          })
        })
        // if(!staue){
        //   this.$store.commit('alert/showTipModel', {bool:true,title:'下注金额不可小於最低限度:10!!',model:'warn'});
        //   return false;
        // }
        if (this.submitList.length) {
          this.modal = true
        } else {
          this.$store.commit('alert/showTipModel', {bool: true, title: '请选择并输金额!', model: 'warn'})
          return false
        }
        this.$refs.betting.getList(
          this.submitList,
          this.totalCount,
          this.childNeedMess
        )

      },
      // 封盘
      disabled () {
        // console.log("封盘了");
        this.$nextTick(() => {
          for (let i = 0; 0 < this.$refs.formDynamic.length; i++) {
            if (i == this.$refs.formDynamic.length - 1) return false
            this.$refs.formDynamic[i].setAttribute('disabled', true)
            this.$refs.formDynamic[i].style.cursor = 'not-allowed'
          }
        })
        this.modal = false
        this.disabledCheckBox = true
        this.resetAll()
      },
      // 开盘
      abled () {
        this.$nextTick(() => {
          for (let i = 0; 0 < this.$refs.formDynamic.length; i++) {
            if (i == this.$refs.formDynamic.length - 1) return false
            this.$refs.formDynamic[i].removeAttribute('disabled', false)
            this.$refs.formDynamic[i].style.cursor = 'text'
          }
        })
        this.disabledCheckBox = false
      },
      //正式提交
      async submit () {
        if (!this.isopen) return false
        let submitArr = []
        this.submitList.forEach((item) => {
          let finalModel = item.model
          submitArr.push({
            'code': item.ball,
            'playway': item.code,
            'odds': +item.price,
            'money': finalModel,
            'ball': item.title,
            'attach': ''
          })
        })
        LotterySev.vpSubmit.call(this, submitArr)
      },
      //发送走势数据
      getTrend (trend) {
        //   this.$nextTick(()=>{
        //       this.$refs['vpHistory'].getData(trend.list);
        //   })
      }

    },
    // 听封盘
    watch: {
      isopen (isopen) {
        if (isopen) {
          this.abled()
        } else {
          this.disabled()
        }
      },
      oddsListPar: {
        handler: function (val, oldVal) {
          this.getOdds()
        },
        deep: true
      }
    },
    created: function () {
      if (this.isopen) {
        this.abled()
      } else {
        this.disabled()
      }
      if (JSON.stringify(this.oddsListPar) != '{}') {
        this.getOdds()
      }

    },
    mounted () {

    },
    components: {
      vpBetting,
      vpFastAndSubmit,
      vpHistory
    },
    store
  }
</script>
<style lang="less" scoped>
  @import '../../../../../../assets/less/public/var.less';

  /deep/ .ivu-modal{
     margin:0
  }

  .lottery-content-all-wrap {
    padding: 20px 0 20px 25px;
    display: flex;

    .lottery-content-all-left {
      width: @container-left-width;
      float: left;

      .alignItems {
        display: flex;
        align-items: stretch;
      }

      .decial-1 {
        &-item {
          border: 1px solid @theme-border-color;
          border-left: 0;
          width: 175px;
          float: left;

          &:last-child {
            border-right: 1px solid @theme-border-color;
          }

          &:first-child {
            border-left: 1px solid @theme-border-color;
          }

          .num {
            height: 46px;
            letter-spacing: 6px;
            color: #444444;
            font-size: 16px;
            line-height: 46px;
            text-align: center;
            border-bottom: 2px solid #ebe9e9;
          }

          .all-item {
            padding-top: 5px;
            padding-bottom: 5px;

            .box {
              cursor: pointer;
              padding: 10px 14px 10px 14px;
              padding-left: 15px;
              text-align: center;
              position: relative;
              line-height: 32px;
              width: 143px;

              .theBall {
                width: 34px;
                height: 34px;
                font-size: 18px;
                float: left;
                display: inline-block;
                background: #f8f5f5;
                line-height: 34px;
                text-align: center;
                color: #666666;
                //   border: 1px solid #ececec;
                &.active {
                  // background: #FF5C5C;
                  // color: #fff;
                }
              }

              .price {
                color: #888;
                line-height: 32px;
                font-size: 16px;

                &.active {
                  // color: #FF5C5C;
                  // opacity: 1;
                }
              }

              &:nth-child(-n+4) {
                .theBall {
                  border-radius: 50%;
                }
              }

              &:nth-child(n+5) {
                .theBall {
                  width: 47px;
                  border-radius: 16px;
                  margin-left: -6px;
                }
              }
            }
          }

        }

      }
    }

    .lottery-content-all-right {
      width: @container-right-width;
      float: left;
      padding: 10px 0 0 30px;
    }
  }
</style>
