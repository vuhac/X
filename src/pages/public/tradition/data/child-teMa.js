const mixin = {
  props: {
    animalList: {
      type: Object
    }
  },
  data: function () {
    return {}
  },
  methods: {
    //切换特码方式
    navSelectFc (item) {
      this.navSelect = item.title
      this.resetAllAdd()
      this.getOdds()
    },
    // 右边快速选择生肖
    rightFastAnimaFc (item) {
      if (!this.isopen) return false
      item.active = !item.active
      this.checkAnima(item)
    },
    // 右边快速选择大小单双
    rightFastHalfFc (datas) {
      if (!this.isopen) return false
      this.active.rightFastHalf = datas
      this.checkHalf(datas)
    },
    //获取生肖对应号
    async getAnimaNum () {
      this.animaList = this.animalList
      this.animNumBelong()
    },
    //分发生肖对应号
    async animNumBelong () {
      this.listTop.forEach(outItem => {
        outItem &&
        outItem.mess.forEach(innerItem => {
          if (this.animaList['鼠'].includes(+innerItem.ball)) {
            innerItem.animal = '鼠'
          } else if (this.animaList['牛'].includes(+innerItem.ball)) {
            innerItem.animal = '牛'
          } else if (this.animaList['虎'].includes(+innerItem.ball)) {
            innerItem.animal = '虎'
          } else if (this.animaList['兔'].includes(+innerItem.ball)) {
            innerItem.animal = '兔'
          } else if (this.animaList['龙'].includes(+innerItem.ball)) {
            innerItem.animal = '龙'
          } else if (this.animaList['蛇'].includes(+innerItem.ball)) {
            innerItem.animal = '蛇'
          } else if (this.animaList['马'].includes(+innerItem.ball)) {
            innerItem.animal = '马'
          } else if (this.animaList['羊'].includes(+innerItem.ball)) {
            innerItem.animal = '羊'
          } else if (this.animaList['猴'].includes(+innerItem.ball)) {
            innerItem.animal = '猴'
          } else if (this.animaList['鸡'].includes(+innerItem.ball)) {
            innerItem.animal = '鸡'
          } else if (this.animaList['狗'].includes(+innerItem.ball)) {
            innerItem.animal = '狗'
          } else if (this.animaList['猪'].includes(+innerItem.ball)) {
            innerItem.animal = '猪'
          }
        })
      })
    },
    // 选择波色
    checkBoSe (type) {
      // console.log("点击了宏达")
      if (!this.isopen) return false
      // 2019.04.13之前六合彩，点击情况，清除所有（包括快速选中的金额）
      // this.resetAll()
      // 2019.04.13之后六合彩，点击情况，清除所有（不包括快速选中的金额）
      this.resetKj();
      //  console.log(type)
      if (type == '红大') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball >= 25 && inItem && inItem.boSe == '红') {
              inItem.active = true
            }
          })
        })
      } else if (type == '红小') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball < 25 && inItem && inItem.boSe == '红') {
              inItem.active = true
            }
          })
        })
      } else if (type == '红单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 != 0 && inItem && inItem.boSe == '红') {
              inItem.active = true
            }
          })
        })
      } else if (type == '红双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 == 0 && inItem && inItem.boSe == '红') {
              inItem.active = true
            }
          })
        })
      } else if (type == '红合单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.he == '单' && inItem && inItem.boSe == '红') {
              inItem.active = true
            }
          })
        })
      } else if (type == '红合双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.he == '双' && inItem && inItem.boSe == '红') {
              inItem.active = true
            }
          })
        })
      } else if (type == '绿大') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball >= 25 && inItem && inItem.boSe == '绿') {
              inItem.active = true
            }
          })
        })
      } else if (type == '绿小') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball < 25 && inItem && inItem.boSe == '绿') {
              inItem.active = true
            }
          })
        })
      } else if (type == '绿单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 != 0 && inItem && inItem.boSe == '绿') {
              inItem.active = true
            }
          })
        })
      } else if (type == '绿双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 == 0 && inItem && inItem.boSe == '绿') {
              inItem.active = true
            }
          })
        })
      } else if (type == '绿合单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.he == '单' && inItem && inItem.boSe == '绿') {
              inItem.active = true
            }
          })
        })
      } else if (type == '绿合双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.he == '双' && inItem && inItem.boSe == '绿') {
              inItem.active = true
            }
          })
        })
      } else if (type == '蓝大') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball >= 25 && inItem && inItem.boSe == '蓝') {
              inItem.active = true
            }
          })
        })
      } else if (type == '蓝小') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball < 25 && inItem && inItem.boSe == '蓝') {
              inItem.active = true
            }
          })
        })
      } else if (type == '蓝单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 != 0 && inItem && inItem.boSe == '蓝') {
              inItem.active = true
            }
          })
        })
      } else if (type == '蓝双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 == 0 && inItem && inItem.boSe == '蓝') {
              inItem.active = true
            }
          })
        })
      } else if (type == '蓝合单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.he == '单' && inItem && inItem.boSe == '蓝') {
              inItem.active = true
            }
          })
        })
      } else if (type == '蓝合双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.he == '双' && inItem && inItem.boSe == '蓝') {
              inItem.active = true
            }
          })
        })
      }
      // this.calculationTotal()
      // console.log(this.allData)
      // debugger
      // this.fastInput();
      // console.log(this.saveSelectMoney.money)
      // 直接在这里查询看看，是否有选中的金额，如果有，就直接添加进入
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

      this.calculationTotal()
    },

    //快捷选中，不清除钱数
    resetKj() {
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
      // this.saveSelectMoney.money = '' //清空输入钱
      // this.selectFast.list.forEach((item, v) => {
      //   item.active = false
      // })
      this.totalCount.number = 0
      this.totalCount.total = 0
      if (this.listRigTemaAnima) {
        this.listRigTemaAnima.forEach((item) => {
          item.active = false
        })
      }
    },


    //获取快速选择一半
    checkHalf (half) {
      this.resetAll()
      if (half == '单') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 != 0) {
              inItem.active = true
            }
          })
        })
      } else if (half == '双') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball % 2 == 0) {
              inItem.active = true
            }
          })
        })
      } else if (half == '大') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball >= 25) {
              inItem.active = true
            }
          })
        })
      } else if (half == '小') {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball < 25) {
              inItem.active = true
            }
          })
        })
      }
    },
    //获取快速选择生肖
    checkAnima (datas) {
      if (!this.isopen) return false
      this.listTop.forEach((outItem, v) => {
        outItem.mess &&
        outItem.mess.forEach((inItem, v) => {
          if (datas.title == inItem.animal) {
            inItem.active = !inItem.active
          }
        })
      })
    },
    // 重置所有信息六合彩特殊
    resetAllAdd () {
      this.listTop.forEach((outItem, v) => {
        outItem.mess &&
        outItem.mess.forEach((inItem, v) => {
          inItem.active = false
          inItem.model = ''
        })
      })
      this.listBot.forEach((outItem, v) => {
        outItem.mess &&
        outItem.mess.forEach((inItem, v) => {
          inItem.active = false
          inItem.model = ''
        })
      })
      //清空提交
      this.submitList = [] //提交清空
      this.totalCount = {number: 0, total: 0} //计数清空
      this.listRigTemaAnima.forEach(item => {
        item.active = false //还原生肖选择
      })
      this.active.rightFastHalf = ''
      this.temaType = ''
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
      let reviewArr = []
      this.listTop.forEach((outItem, v) => {
        outItem.mess &&
        outItem.mess.forEach((inItem, v) => {
          if (inItem.active && inItem.model) {
            reviewArr.push(inItem)
          }
        })
      })
      this.listBot.forEach((outItem, v) => {
        outItem.mess &&
        outItem.mess.forEach((inItem, v) => {
          if (inItem.active && inItem.model) {
            reviewArr.push(inItem)
          }
        })
      })
      this.publicReview(reviewArr)
    }
  },
  // 听封盘
  watch: {
    temaType (type) {
      this.checkBoSe(type)
    },
    animalList: {
      handler: function (val, oldVal) {
        // console.log(this.animalList)
        this.getAnimaNum()
      },
      deep: true
    }
  }
}

export default mixin


