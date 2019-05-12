import vpBetting from '@/pages/public/tradition/components/betting/betting'
import vpFastAndSubmit from '@/pages/public/tradition/components/fast-and-submit/submit'
import vpDropDown from '@/pages/public/tradition/components/dropDown/dropDown'
import vpRanking from '@/pages/public/tradition/components/ranking/ranking3'
import vpHistory from '@/pages/public/tradition/components/history/history'
import store from '@/vuex/store'
import UserService from '@/service/public/UserService'

const mixin = {
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
  data: function () {
    return {
      luZhuStaueCode: '',
      luZhuDatas: '',
      modal: false,
      rangeVal: 25,
      visible: false,
      rebate: 0, //返利点
      oddsList: '',
      seletPriceStaue: '',
      totalCount: {
        number: 0,
        total: 0,
        db: 1, //倍数
        mol: '元', //状态
        ratio: 1 //分角倍率
      },
      saveSelectMoney: {
        money: ''
      },
      submitList: [],
      // 组合
      submitDatas: {
        submitList: [],
        list1: [],
        list2: [],
        list3: []
      },
      active: {
        moneyStaue: '5',
        ballHistory: '大小'
      },
      selectDown: {
        list: [{
          price: 10
        }, {
          price: 50
        }, {
          price: 100
        }, {
          price: 500
        }, {
          price: 1000
        }, {
          price: 10000
        }],
        select: ''
      },
      selectFast: {
        list: [{
            price: 5,
            active: false
          },
          {
            price: 10,
            active: false
          },
          {
            price: 50,
            active: false
          },
          {
            price: 100,
            active: false
          },
          {
            price: 500,
            active: false
          },
          {
            price: 1000,
            active: false
          }
        ],
        select: ''
      },
    }
  },
  methods: {
    //选择价格框消失
    hidePrice() {
      this.seletPriceStaue = ''
    },
    //快速替换填金额
    fastInput(type) {
      // 点击红大的效果
      // console.log("点击红大的效果")
      if (!this.isopen) return false
      if (!type) {
        // console.log("没有type")
        // console.log(this.allData);
        this.allData.forEach((outItem) => {
          outItem.list.forEach((intItem) => {
            intItem.mess.forEach((thirItem) => {
              if (thirItem.active) {
                // console.log("选中了我")
                thirItem.model = this.saveSelectMoney.money
              }
            })
          })
        })
      }
      this.calculationTotal()
    },
    //计算全部金额
    calculationTotal() {
      // 计算总数
      let number = 0
      let total = 0
      this.allData.forEach((outItem) => {
        outItem.list.forEach((intItem) => {
          intItem.mess.forEach((thirItem) => {
            if (thirItem.active) {
              number += 1
              total += +thirItem.model
            }
          })
        })
      })
      this.totalCount.number = number
      this.totalCount.total = total
      if (this.childNeedMess.series === 'lhc') {
        return false
      }
      if (this.totalCount.mol === '元') {
        this.totalCount.total =
          total * +this.totalCount.ratio * +this.totalCount.db
      } else if (this.totalCount.mol === '角') {
        this.totalCount.total = (total *
          +this.totalCount.ratio *
          +this.totalCount.db
        ).toFixed(1)
      } else if (this.totalCount.mol === '分') {
        this.totalCount.total = (total *
          +this.totalCount.ratio *
          +this.totalCount.db
        ).toFixed(2)
      }
    },
    // 该变赔率和返水
    rangeChange(num) {
      // debugger
      this.rebate = num
      this.allData.forEach((outItem) => {
        outItem.list.forEach((intItem) => {
          intItem.mess.forEach((thirItem) => {
            let newPrice = (thirItem.fixedOdds * (1 - num / 100)).toString()
            newPrice = newPrice.substring(0, newPrice.lastIndexOf('.') + 4)
            if (newPrice.toString().includes('.') &&
              +newPrice.toString().substring(newPrice.toString().length - 2) === 0) {
              thirItem.price = newPrice.toString().substring(0, newPrice.toString().length - 2)
            } else if (
              newPrice.toString().includes('.') &&
              +newPrice.toString().substring(newPrice.toString().length - 1) === 0) {
              thirItem.price = newPrice.toString().substring(0, newPrice.toString().length - 1)
            } else {
              thirItem.price = newPrice
            }
          })
        })
      })
    },
    //获取赔率信息
    async getOdds() {
      if (!this.oddsList) {
        this.oddsList = this.oddsListPar;
        console.log(this.oddsList)
        this.oddsBelong()
      } else {
        this.oddsBelong()
      }
    },
    //公共还原
    resetAll() {
      this.allData.forEach((outItem) => {
        outItem.list.forEach((intItem) => {
          intItem.mess && intItem.mess.forEach((thirItem) => {
            thirItem.active = false
            thirItem.model = ''
          })
        })
      })
      //清空提交
      this.submitList = []
      this.seletPriceStaue = ''
      this.saveSelectMoney.money = '' //清空输入钱
      this.selectFast.list.forEach((item, v) => {
        item.active = false
      })
      this.totalCount.number = 0
      this.totalCount.total = 0
      if (this.listRigTemaAnima) {
        this.listRigTemaAnima.forEach((item) => {
          item.active = false
        })
      }
    },
    // 封盘
    disabled(type) {
      // console.log("封盘了")
      this.$nextTick(() => {
        for (let i = 0; 0 < this.$refs.formDynamic.length; i++) {
          if (i == this.$refs.formDynamic.length - 1) return false
          this.$refs.formDynamic[i].setAttribute('disabled', true)
          this.$refs.formDynamic[i].style.cursor = 'not-allowed'
        }
      })
      this.modal = false
      this.resetAll()
      if (!type) {
        this.dNotify('已封盘', 'warn')
      }

      // this.dNoError('已封盘');
    },
    // 开盘
    abled() {
      this.$nextTick(() => {
        for (let i = 0; 0 < this.$refs.formDynamic.length; i++) {
          if (i == this.$refs.formDynamic.length - 1) return false
          this.$refs.formDynamic[i].removeAttribute('disabled', false)
          this.$refs.formDynamic[i].style.cursor = 'text'
        }
      })
    },
    //选择下拉框下注金额
    seletPrice(itemInner, itemSelet) {
      itemInner.model = itemSelet.price
      this.seletPriceStaue = ''
      this.calculationTotal()
    },
    //点击给投注项加样式
    clickFocus(itemInner) {
      if (!this.isopen) return false
      itemInner.active = !itemInner.active
      itemInner.model = ''
      this.seletPriceStaue = ''
      if (this.saveSelectMoney.money && itemInner.active) {
        itemInner.model = this.saveSelectMoney.money
      }
      this.calculationTotal()
    },
    //键盘按起
    keyupInput(itemInner) {
      // 键盘起来时
      if (!itemInner.model) {
        this.seletPriceStaue = itemInner.id
      }
      if (this.dInvalidMoney(itemInner.model)) {
        this.calculationTotal()
      } else {
        itemInner.model = ''
        this.calculationTotal()
      }
    },
    //键盘按下输入时价格框消失
    keydownInput(itemInner) {
      this.seletPriceStaue = ''
    },
    //获取焦点时给投注项加样式
    focusInput(itemInner) {
      itemInner.active = true
      this.seletPriceStaue = itemInner.id
      this.calculationTotal()
    },
    //选择历史球记录
    chooseHistory(datas) {
      this.active.ballHistory = datas
    },
    //发送走势数据
    // getTrend(trend) {
    //   if(this.$route.meta.series=='lhc'){
    //     return false;
    //   }
    //   this.$nextTick(() => {
    //     this.$refs['vpHistory'].getData(trend.list);
    //   })
    // },
    //公共预览
    publicReview(reviewArr) {
      if (reviewArr.length) {
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
        reviewArr,
        this.totalCount,
        this.childNeedMess
      )
    },
    //正式提交
    submit(type) {
      // {code:'dpc-zsp',name:'低频彩-主势盘'}
      this.submitList = []
      this.allData.forEach((outItem) => {
        outItem.list.forEach((intItem) => {
          intItem.mess.forEach((thirItem) => {
            if (thirItem.active && thirItem.model) {
              this.submitList.push(thirItem)
            }
          })
        })
      })
      // console.log(this.submitList)
      let submitArr = []
      this.submitList.forEach((item) => {
        let finalModel
        if (this.$route.meta.series == 'lhc') {
          finalModel = item.model
        } else {
          finalModel = ((+item.model) * (+this.totalCount.ratio) * (+this.totalCount.db)).toFixed(2)
        }
        if (type && type.code === 'dpc-zsp') {
          submitArr.push({
            'code': item.title,
            'playway': item.code,
            'odds': item.fixedOdds,
            'money': finalModel,
            'ball': item.ball,
            'attach': ''
          })
        } else {
          submitArr.push({
            'code': item.ball,
            'playway': item.code,
            'odds': item.fixedOdds,
            'money': finalModel,
            'ball': item.title,
            'attach': ''
          })
        }
      })
      this.vpSubmit(submitArr)
    },
    //提交注单
    async vpSubmit(submitArr) {
      if (!localStorage.token) {
        // alert('您未登录')
        this.dNotify('您未登录', 'error')
        return false
      }

      let res = await this.$http.post(`${this.$HOST_NAME}/lottery/submit`, {
        lotteryId: this.$route.meta.id,
        issue: this.childNeedMess.issue,
        code: JSON.stringify(submitArr),
        rebate: this.rebate
      })
      if (res && res.code == 200) {
        this.dNotify(res.data, 'success')
        this.resetAll()
        this.$store.commit("lottery/fetchBetRecord", Date.now());
        UserService.vpGetBasicInfo.call(this)
      } else {
        this.dNotify(res.message, 'error')
      }
    },
    //获取露珠走势
  },
  created: function () {
    if (this.isopen) {
      this.abled()
    } else {
      this.disabled('1')
    }
    if (JSON.stringify(this.oddsListPar) != '{}') {
      this.getOdds()
    }
  },
  // 听封盘
  watch: {
    isopen(isopen) {
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
  //销毁之前
  beforeDestroy() {
    this.resetAll()
  },
  // 组件
  components: {
    vpFastAndSubmit,
    vpBetting,
    vpDropDown,
    vpRanking,
    vpHistory
  },
  store
}

export default mixin
