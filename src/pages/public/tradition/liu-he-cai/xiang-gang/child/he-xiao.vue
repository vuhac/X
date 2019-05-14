<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="he-xiao-header-wrap">
          <div :key="index" v-for="(item,index) in navigation" class="he-xiao-header-item">
            <span :class="{'active':item.title==navSelect}" @click="navSelectFc(item,index)">{{item.title}}</span>
          </div>
        </div>
        <div class="decial-1 alignItems">
          <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
            <div class="all-item">
              <el-checkbox-group v-model="checkList">
                <div @click="cbClick(itemOut,itemInner)" :key="indexInner"
                     v-for="(itemInner,indexInner) in itemOut.mess" class="box he-xiao-cheacBox">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <el-checkbox @click.native.stop="''" @change="checkboxChange($event,itemInner)"
                               :disabled="disabledCheckBox" :label="itemInner"></el-checkbox>
                  <div :style="{'background':itemThird.color}" class="number" :key="indexThird"
                       v-for="(itemThird,indexThird) in itemInner.list">
                    {{itemThird.ball}}
                  </div>
                </div>
              </el-checkbox-group>
            </div>

          </div>
        </div>
        <!-- <vp-history ref="vpHistory"></vp-history> -->
      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit v-on:range-say="rangeChange" v-on:submit-Input-say="fastInput"
                            v-on:submit-resetAll="resetAll" v-on:submit-review="review" :totalCount="totalCount"
                            :selectFast="selectFast" :saveSelectMoney="saveSelectMoney" :rangleType="rangleType" :confirmbet="confirmbet">
        </vp-fast-and-submit>
      </div>
    </form>
    <Modal :scrollable=true title="投注信息" v-model="modal" class-name="vp-betting-warp" width="584" height="400"
           @on-ok="submit">
      <!-- @on-cancel="cancel" -->

      <vp-betting ref="betting"></vp-betting>
    </Modal>
  </div>
</template>
<script>
  import vpBetting from '../../../components/betting/betting'
  import vpFastAndSubmit from '../../../components/fast-and-submit/submit'
  import UserService from '@/service/public/UserService.js'
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
      },
      animalList: {
        type: Object
      }
    },
    data () {
      return {
        modal: false,
        confirmbet:true,
        rangleType: '六合彩',
        oddsList: '',
        animaList: '',
        navSelect: '六肖',
        maxSelect: 6,
        checkList: [],
        disabledCheckBox: false,
        totalCount: {
          number: 0,
          total: 0
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
        navigation: [
          {title: '二肖'},
          {title: '三肖'},
          {title: '四肖'},
          {title: '五肖'},
          {title: '六肖'},
          {title: '七肖'},
          {title: '八肖'},
          {title: '九肖'},
          {title: '十肖'},
          {title: '十一肖'}
        ],
        listTop: data.heXiao.listTop
      }
    },
    methods: {
      // 点击选外面选中
      cbClick (datasOut, datasInt) {
        if (!this.checkList.length) {
          datasInt.active = true
          this.checkList.push(datasInt)
        } else {
          //先去掉点击一样的
          datasInt.active = !datasInt.active
          let staue = true
          this.checkList.forEach((item, v) => {
            if (item.id == datasInt.id) {
              this.checkList.splice(v, 1)
              staue = false
              this.calculationTotal()
            }
          })
          if (!staue) return false
          if (datasInt.active) {
            this.checkList.push(datasInt)
            this.calculationTotal()
          }
        }
      },
      //切换合肖方式
      navSelectFc (item, index) {
        this.navSelect = item.title
        this.checkList = []
        this.resetAll()
        this.getOdds()
      },
      // 选中取消checkbox
      checkboxChange ($event, datas) {
        // console.log(this.checkList)
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.ball == datas.ball) {
              inItem.active = $event
            }
            if (this.saveSelectMoney.money && inItem.active) {
              inItem.model = this.saveSelectMoney.money
            }
          })
        })
        this.calculationTotal()
      },
      //快速替换填金额
      fastInput (type) {
        if (!this.isopen) return false
        if (!type) {
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (inItem.active) {
                inItem.model = this.saveSelectMoney.money
              }
            })
          })
        }

        this.calculationTotal()
      },
      //计算全部金额
      calculationTotal () {
        // 计算总数
        if (
          (this.navSelect == '二肖' && this.checkList.length == 2) ||
          (this.navSelect == '三肖' && this.checkList.length == 3) ||
          (this.navSelect == '四肖' && this.checkList.length == 4) ||
          (this.navSelect == '五肖' && this.checkList.length == 5) ||
          (this.navSelect == '六肖' && this.checkList.length == 6) ||
          (this.navSelect == '七肖' && this.checkList.length == 7) ||
          (this.navSelect == '八肖' && this.checkList.length == 8) ||
          (this.navSelect == '九肖' && this.checkList.length == 9) ||
          (this.navSelect == '十肖' && this.checkList.length == 10) ||
          (this.navSelect == '十一肖' && this.checkList.length == 11)
        ) {
          this.totalCount.number = 1
          if (this.saveSelectMoney.money) {
            this.totalCount.total = this.saveSelectMoney.money
          }
        } else {
          this.totalCount.number = 0
          this.totalCount.total = 0
        }
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
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            let numString = ''
            if (this.navSelect == '二肖') {
              numString = '20260'
            }
            if (this.navSelect == '三肖') {
              numString = '20261'
            }
            if (this.navSelect == '四肖') {
              numString = '20262'
            }
            if (this.navSelect == '五肖') {
              numString = '20263'
            }
            if (this.navSelect == '六肖') {
              numString = '20264'
            }
            if (this.navSelect == '七肖') {
              numString = '20265'
            }
            if (this.navSelect == '八肖') {
              numString = '20266'
            }
            if (this.navSelect == '九肖') {
              numString = '20267'
            }
            if (this.navSelect == '十肖') {
              numString = '20268'
            }
            if (this.navSelect == '十一肖') {
              numString = '20269'
            }
            //   保存提交code
            inItem.code = numString
            inItem.price = this.oddsList[
            '' + numString + '_' + inItem.ball + ''
              ].odds
            inItem.fsrate = this.oddsList[
            '' + numString + '_' + inItem.ball + ''
              ].fsrate
          })
        })
      },
      async getAnimaNum () {
        if (!this.animaList) {
          this.animaList = this.animalList
          this.animNumBelong()
        } else {
          this.animNumBelong()
        }
      },
      //分发生肖对应号
      async animNumBelong () {
        this.listTop.forEach(outItem => {
          outItem &&
          outItem.mess.forEach(innerItem => {
            innerItem.list.forEach((thirdItem, v) => {
              thirdItem.ball =
                this.animaList['' + innerItem.ball + ''][v] > 9
                  ? this.animaList['' + innerItem.ball + ''][v].toString()
                  : '0' +
                  this.animaList['' + innerItem.ball + ''][v].toString()
            })
          })
        })
        this.animCorBelong()
      },
      //分发生肖颜色
      animCorBelong () {
        let red = [
          1,
          7,
          13,
          19,
          23,
          29,
          35,
          45,
          2,
          8,
          12,
          18,
          24,
          30,
          34,
          40,
          46
        ]
        let blue = [3, 9, 15, 25, 31, 37, 41, 47, 4, 10, 14, 20, 26, 36, 42, 48]
        let green = [
          5,
          11,
          17,
          21,
          27,
          33,
          39,
          43,
          6,
          16,
          22,
          28,
          32,
          38,
          44,
          49
        ]
        this.listTop.forEach(outItem => {
          outItem &&
          outItem.mess.forEach(innerItem => {
            innerItem.list.forEach(thirdItem => {
              if (red.includes(+thirdItem.ball)) {
                thirdItem.color = '#BC2A1B'
              }
              if (blue.includes(+thirdItem.ball)) {
                thirdItem.color = '#1C8CE2'
              }
              if (green.includes(+thirdItem.ball)) {
                thirdItem.color = '#49BB27'
              }
            })
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
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.active = false
            inItem.model = ''
          })
        })
        //清空提交
        this.submitList = [] //提交清空
        this.checkList = []
        this.seletPriceStaue = ''
        this.saveSelectMoney.money = '' //清空输入钱
        this.selectFast.list.forEach((item, v) => {
          item.active = false
        })
        this.totalCount.number = 0
        this.totalCount.total = 0
      },





      
      // 提交前检查，展示
      review () {

        if (!this.isopen) return false
        if (
          (this.navSelect == '二肖' && this.checkList.length != 2) ||
          (this.navSelect == '三肖' && this.checkList.length != 3) ||
          (this.navSelect == '四肖' && this.checkList.length != 4) ||
          (this.navSelect == '五肖' && this.checkList.length != 5) ||
          (this.navSelect == '六肖' && this.checkList.length != 6) ||
          (this.navSelect == '七肖' && this.checkList.length != 7) ||
          (this.navSelect == '八肖' && this.checkList.length != 8) ||
          (this.navSelect == '九肖' && this.checkList.length != 9) ||
          (this.navSelect == '十肖' && this.checkList.length != 10) ||
          (this.navSelect == '十一肖' && this.checkList.length != 11)
        ) {
          this.$store.commit('alert/showTipModel', {
            bool: true,
            title: '请选择' + this.navSelect + '!!',
            model: 'warn'
          })
          return false
        }
        // 上面已经选择了，下面改判断是否选中了金额
        let staue = true
        let ballString = ''
        let minPrice = 0
        this.submitList = []
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active) {
              this.submitList.push(inItem)
              ballString += inItem.ball + ',';
              +inItem.price > minPrice
                ? (minPrice = +inItem.price)
                : (minPrice = minPrice)
            }
          })
        })
        // console.log(this.submitList)

        console.log(status,ballString,minPrice)

        // console.log(ballString.length)
        // console.log(minPrice)
        // if (!staue) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "下注金额不可小於最低限度:10!!",
        //     model: "warn"
        //   });
        //   return false;
        // }
        // console.log(this.submitList.length)
        // 是否选中
        if(!this.submitList.length){
            this.$store.commit('alert/showTipModel', {
              bool: true,
              title: '请选择' + this.navSelect + '!!',
              model: 'warn'
            })
            return false
        }

        if(!this.saveSelectMoney.money){
            this.$store.commit('alert/showTipModel', {
                bool: true,
                title: '请选择金额!',
                model: 'warn'
            })
            return false
        }

        if (this.submitList.length) {
          //此处和弹出框（选中彩种和金额）有关
          this.modal = true
        } else {
          this.$store.commit('alert/showTipModel', {
            bool: true,
            title: '请选择并输金额!',
            model: 'warn'
          })
          return false
        }
        this.$refs.betting.getList(
          [
            {
              title: this.navSelect,
              ball: ballString.substring(0, ballString.length - 1),
              model: this.saveSelectMoney.money,
              price: minPrice
            }
          ],
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
          let finalModel = this.saveSelectMoney.money
          submitArr.push({
            'code': item.ball,
            'playway': item.code,
            'odds': +item.price,
            'money': finalModel,
            'ball': item.title,
            'attach': ''
          })
        })
        if (!localStorage.token) {
          this.dNotify('您未登录', 'error')
          // this.$store.commit("alert/showLogin", true);
          return false
        }
        this.confirmbet=false
        let res = await this.$http.post(`${this.$HOST_NAME}/lottery/submit`, {
          lotteryId: this.$route.meta.id,
          issue: this.childNeedMess.issue,
          code: JSON.stringify(submitArr),
          rebate: this.rebate
        })
        if (res && res.code == 200) {
          this.confirmbet=true
          this.dNotify(res.data, 'success')
          this.resetAll()
          UserService.vpGetBasicInfo.call(this)
        } else {
           this.confirmbet=true
          this.dNotify(res.message, 'error')
        }
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
      },
      animalList: {
        handler: function (val, oldVal) {
          this.getAnimaNum()
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

      if (JSON.stringify(this.animalList) != '{}') this.getAnimaNum()
    },
    mounted () {},
    components: {
      vpBetting,
      vpFastAndSubmit,
      vpHistory
    },
    store
  }
</script>
<style lang="less" scoped>
  @import "../../../../../../assets/less/public/var.less";
  /deep/ .ivu-modal{
     margin:0
  }
  .lottery-content-all-wrap {
    padding: 20px 0 20px 25px;
    display: flex;

    .lottery-content-all-left {
      width: @container-left-width;
      float: left;

      .he-xiao-header-wrap {
        width: 100%;
        height: 48px;
        border: 1px solid @theme-border-color;
        padding: 10px 48px;

        .he-xiao-header-item {
          float: left;
          margin-right: 29px;

          span {
            font-size: 14px;
            line-height: 24px;
            cursor: pointer;
            padding: 6px 11px;
            color: #888888;
            border-radius: 2px;

            &.active {
              background: #0093d9;
              color: #fff;
            }
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .alignItems {
        display: flex;
        align-items: stretch;
      }

      .decial-1 {
        &-item {
          border: 1px solid @theme-border-color;
          border-left: 0;
          width: 50%;
          float: left;

          &:last-child {
            border-right: 1px solid @theme-border-color;
          }

          &:first-child {
            border-left: 1px solid @theme-border-color;
          }

          .all-item {
            padding-top: 5px;
            padding-bottom: 5px;

            .box {
              cursor: pointer;
              padding: 10px 0 10px 45px;
              text-align: center;
              position: relative;
              line-height: 32px;
              width: 100%;

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
                margin-right: 18px;
                border-radius: 50%;

                &.active {
                  // background: #FF5C5C;
                  // color: #fff;
                }
              }

              .price {
                color: #888;
                line-height: 32px;
                font-size: 16px;
                margin-right: 18px;
                float: left;
                min-width: 32px;

                &.active {
                  // color: #FF5C5C;
                  // opacity: 1;
                }
              }

              .el-checkbox {
                float: left;
                margin-right: 25px;
              }

              .number {
                float: left;
                width: 32px;
                height: 32px;
                text-align: center;
                border-radius: 50%;
                margin-left: 10px;
                color: #fff;
                font-size: 18px;
                border: 1px solid #ececec;
              }

              &:first-child {
                padding-top: 15px;
              }

              &:last-child {
                padding-bottom: 15px;
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
