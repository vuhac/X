import store from '@/vuex/store'
const Agency = {
  data: function () {
    return {
      refundData: [],
      // 反水选中的
      refundList: 0,
      // 选中的反水比例
      setRefund: [],
      caipiaoDetailsList: [],
      rebateDetailsList: []
    }
  },
  methods: {
    // 获取反水信息
    getRefundInfo(SubordinateData) {
      this.$getS(`member/refund-rebate`)
        .then(res => {
          if (res.code == 200) {
            localStorage.setItem('refund', JSON.stringify(res.data))
            let refundObj = SubordinateData || res.data;
            for (let key in refundObj) {
              if ( key== "lottery") {
                let arr = [];
                let kuaisan = [];
                let liuhecai = [];
                let pk10 = [];
                let dipancai = [];
                let kuaileshifen = [];
                let shishicai = [];
                let shiyixuanwu = [];
                let pcdandan = [];
                let lottery = refundObj.lottery;
                for (let key in lottery.list) {
                  if (lottery.list[key].class_name == "快3") {
                    kuaisan.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "六合彩") {
                    liuhecai.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "PK10") {
                    pk10.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "低频彩") {
                    dipancai.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "快乐十分") {
                    kuaileshifen.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "时时彩") {
                    shishicai.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "11选5") {
                    shiyixuanwu.push(lottery.list[key]);
                  }
                  if (lottery.list[key].class_name == "PC蛋蛋") {
                    pcdandan.push(lottery.list[key]);
                  }
                }
      
                let rebatelist = {
                  "快三": kuaisan,
                  "六合彩": liuhecai,
                  pk10,
                  "低频彩": dipancai,
                  "快乐十分": kuaileshifen,
                  "时时彩": shishicai,
                  "11选5": shiyixuanwu,
                  "PC蛋蛋": pcdandan,
                };
                for (let key in rebatelist) {
                  rebatelist[key].forEach((a, i) => {
                    a.value = (a.value*1).toFixed(1)
                    a.rebate = a.value;
                    a.option = [
                      {
                        value: "0.0",
                        name: "0.0%"
                      }
                    ];
                    for (let j = 1; j <= a.value * 10; j++) {
                      a.option.push({
                        value: (j / 10).toFixed(1),
                        name:  (j / 10).toFixed(1) + "%"
                      })
                    } 
                    a.option = a.option.sort(this.compare("value"));
                  });
                  arr.push({
                    list: rebatelist[key],
                    name: key,
                    active: "0.0"
                  });
                }
                this.rebatedata = arr;
                console.log(arr)
                this.caipiaoList = arr[0].list;
                this.caipiaoName = arr[0].name;
                this.MaxRefund2();
              }else{
                this.refundData = []
                let refundObj1 = this.cloneObj(refundObj);
                delete refundObj1.lottery
                for(let i in refundObj1){
                  this.refundData.push(refundObj[i])
                }
                this.refundData.forEach(v => {
                  v.active = "0.0%"
                  v.list.forEach((a, i) => {
                    a.value = (a.value*1).toFixed(1)
                    a.rebate = a.value
                    a.option = [{
                      value: "0.0",
                      name: "0.0%"
                    }]
                    for (let j = 1; j <= a.value * 10; j++) {
                      a.option.push({
                        value: (j / 10).toFixed(1),
                        name: (j / 10).toFixed(1) + "%"
                      })
                    }
                    a.option = a.option.sort(this.compare("value"))
                  })
                })
                if(this.$websiteName=='t500w' || this.$websiteName =='jhcp' || this.$websiteName =='fczx' ||this.$websiteName =='cjw'){
                  this.refundData= this.refundData.filter(item => item.name =='彩票返水' || item.name=='棋牌返水');
                }
                this.setRefund = this.refundData[0].list
                this.refundName = this.refundData[0].name
                this.MaxRefund1()
              }
            }
          } else {
            this.$store.commit("loading",false)
          }
        })
    },
    //减少
    reduce() {
      this.setRefund.forEach(v => {
        v.rebate =
          v.rebate * 10 - 1 <= 0
            ? "0.0"
            : String((v.rebate * 10 - 1) / 10).indexOf(".") != -1
            ? String((v.rebate * 10 - 1) / 10)
            : String((v.rebate * 10 - 1) / 10) + ".0";
      });
    },
    //统一设置加
    increase() {
      let refund = JSON.parse(JSON.parse(localStorage.userinfo).rebate);
      this.setRefund.forEach(v => {
        v.rebate =
          v.rebate * 10 + 1 >= v.value * 10 + 1
            ? v.value
            : String((v.rebate * 10 + 1) / 10).indexOf(".") != -1
            ? String((v.rebate * 10 + 1) / 10)
            : String((v.rebate * 10 + 1) / 10) + ".0";
      });
    },
    cloneObj(obj){
      var str, newobj = obj.constructor === Array ? [] : {};
      if(typeof obj !== 'object'){
          return;
      } else if(window.JSON){
          str = JSON.stringify(obj), //系列化对象
          newobj = JSON.parse(str); //还原
      } else {
          for(var i in obj){
              newobj[i] = typeof obj[i] === 'object' ? 
              cloneObj(obj[i]) : obj[i]; 
          }
      }
      return newobj;
    },
    //排序  
    compare(property){
      return function(obj1,obj2){
        var value1 = obj1[property]
        var value2 = obj2[property]
        return value2 - value1
      }
    },
     // 统一设置减
     reduce2() {
      this.caipiaoList.forEach(v => {
        v.rebate =
          v.rebate * 10 - 1 <= 0
            ? "0.0"
            : String((v.rebate * 10 - 1) / 10).indexOf(".") != -1
            ? String((v.rebate * 10 - 1) / 10)
            : String((v.rebate * 10 - 1) / 10) + ".0";
      })
    },
    //统一设置加
    increase2() {
      let refund = JSON.parse(JSON.parse(localStorage.userinfo).rebate);
      this.caipiaoList.forEach(v => {
        v.rebate =
          v.rebate * 10 + 1 >= v.value * 10 + 1
            ? v.value
            : String((v.rebate * 10 + 1) / 10).indexOf(".") != -1
            ? String((v.rebate * 10 + 1) / 10)
            : String((v.rebate * 10 + 1) / 10) + ".0";
      });
    },
    // 最大反水
    MaxRefund1() {
      let tempList = [...this.refundData]
      this.refundData.forEach((v, i) => {
        v.active = +v.active;
        let max = 0;
        v.list.forEach(item => {
          if (item.rebate > max) max = item.rebate;
        });
        if (max == 0) {
          v.active = "0.0";
          this.refundData = [...tempList]
        } else {
          this.$set(v,"active",max)
          this.refundData = [...tempList]
        }
      });
    },
    // 转换成JSON格式
    productJsonParams() {
      let sendParam = {}
      let sendParam2 = {}
      this.refundData.forEach(v => {
        v.list.forEach((a, b) => {
          a.rebate = a.rebate;
          sendParam[a.key] = (((a.rebate) * 1).toFixed(1)).toString()
        })
      })
      this.rebatedata.forEach(v => {
        v.list.forEach((a, b) => {
          a.rebate = a.rebate;
          sendParam2[a.key] = (((a.rebate) * 1).toFixed(1)).toString()
        })
      })
      return (JSON.stringify(Object.assign(sendParam, sendParam2)))
    },  
    // 切换反水选中
    toggleRefund(i, list, name) {
      this.refundList = i
      this.setRefund = list
      this.refundName = name
    },
  },
  filters: {
    caplitalize: function(item) {
      let arr = [];
      item.forEach(v => {
        arr.push(parseFloat(v.value));
      });
      return (Math.max(...arr)).toFixed(1);
    },
     fixed(value) {
       if(!value) return;
       return (value*1).toFixed(1)
    }
  },
  beforeDestroy() {
    this.$store.commit('loading', false)
    localStorage.removeItem('refund')
  },
  store
}

export default Agency
