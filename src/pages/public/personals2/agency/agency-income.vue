<template>
     <div class="income">
        <div class="income-content " v-if="income">
            <div class="header" @click="goincome">
                我的收益
            </div>
            <div class="income-search">
                <div class="income-icon">
                    <img src="/static/public/image/proimt/p-netprofit@2x.png" alt="">
                    <div>
                        <p>今日收益</p>
                        <p>{{money.toFixed(2)}}</p>
                    </div>
                </div>
                <div class="search">
                 <RadioGroup v-model="day"  @on-change="hanlderRadio">
                    <Radio label="1">

                    <span class="radio-span">本周</span>
                    </Radio>
                    <Radio label="2">

                    <span class="radio-span">上周</span>
                    </Radio>
                    <Radio label="3">

                    <span class="radio-span">本月</span>
                    </Radio>

                    <Radio label="4">
                    <span class="radio-span">上月</span>
                    </Radio>
                  </RadioGroup>
                </div>
            </div>

            <div class="table-content">
                 <Table :columns="columns" :data="data"
                    no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
            </div>
            <!-- <div class="page">
               <Page :current="i" v-if="total>0" :total="total" size="small" @on-change="hanlderPage"></Page>
            </div> -->
            <div class="page" v-if="ispage">
                <ul data-v-21c13104="" class="page ivu-page mini" >
                    <li title="上一页" class="ivu-page-prev" :class="{'ivu-page-disabled':isSelect==1}" @click="prev">
                        <a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a>
                    </li>
                    <li title="1" class="ivu-page-item" :class="{'ivu-page-item-active': isSelect ==1}" @click="slect(1)" v-if="page>=1">
                        <a>1</a>
                    </li>
                    <li title="2" class="ivu-page-item" :class="{'ivu-page-item-active': isSelect ==2}"  @click="slect(2)"  v-if="page>=2">
                        <a>2</a>
                    </li>
                     <li title="3" class="ivu-page-item" :class="{'ivu-page-item-active': isSelect ==3}"  @click="slect(3)" v-if="page>=3">
                        <a>3</a>
                    </li>
                    <li title="4" class="ivu-page-item" :class="{'ivu-page-item-active': isSelect ==4}"  @click="slect(4)" v-if="page>=4">
                        <a>4</a>
                    </li>
                    <li title="下一页" class="ivu-page-next" @click="next" :class="{'ivu-page-disabled':isSelect==page}">
                        <a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a>
                    </li>
                </ul>
            </div>
            <div class="tot-income" v-if="data.length">
                <span>总分润 :</span>
                <span>{{totalAmount.toFixed(2)}}</span>
            </div>
        </div>

         <div class="personal-income" v-else>
                <div class="header">
                     <span @click="gospan">我的收益 ></span>
                     <span>{{nexttime}}</span>
               </div>
               <div class="personal-table">
                    <!-- <Table v-if="data2.length" :columns="columns1" :data="data2"></Table>
                    <div class="no-data-text" v-else style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div> -->
                   <Table :columns="columns1" :data="data2"
                    no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>

                   <Page :current="i" v-if="total>0" :total="total" size="small" @on-change="hanlderPage" class="page"></Page>

               </div>

                <div class="tot-income" v-if="data2.length">
                    <span>总返佣金额 :</span>
                    <span>{{totcom.toFixed(2)}}</span>
                </div>
         </div>
      </div>
  </template>
<script>
import store from "@/vuex/store";
export default {
  data() {
    return {
      columns: [
        {
          title: "时间",
          key: "date",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("span", params.row.date + "       星期" + params.row.week)
            ]);
          }
        },
        {
          title: "总投注额",
          key: "allbetAmount",
          align: "center"
          //      render: (h, params) => {
          //   return h('span', ((params.row.allbetAmount)*1).toFixed(2))
          // }
        },
        {
          title: "直属投注额",
          key: "lowerbetAmount",
          align: "center"
        },
        {
          title: "总分润额",
          key: "allnetAmount",
          align: "center"
        },
        {
          title: "直属分润额",
          key: "lowernetAmount",
          align: "center"
        },
        {
          title: "操作",
          key: "preferential",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  class: 'listShowAA',
                  attrs: {
                    class: "deleteLink"

                  },
                  style: {
                    color: "#FF9146",
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.income = false;
                      document.getElementsByClassName('income')[0].classList.add('income2')
                      this.nexttime = params.row.date;
                      this.getnextlist();
                    }
                  }
                },
                "详情"
              )
            ]);
          }
        }
      ],
      data: [],
      data2: [],
      day: "1",
      isSelect: 1,
      toggleIncome: "income-content",
      timeStart: "",
      timeEnd: "",
      money: 0.0,
      total: 0,
      pagesize: 9,
      page: 0,
      nexttime: 0,
      totcom: 0,
      ispage: false,
      i: 1,
      totalAmount: 0,
      income: true,
      columns1: [
        {
          title: "类型",
          key: "type",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "span",params.row.type == "lottery"? "彩票返点": (params.row.type == "slots" ? "电子娱乐" : (params.row.type == "livecasino"? "真人视讯" : (params.row.type == "sports" ? "体育赛事" : "棋牌游戏")))
              )
            ]);
          }
        },
        {
          title: "会员帐号",
          key: "betuname",
          align: "center"
        },
        {
          title: "会员类型",
          key: "status",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("span", params.row.status == 1 ? "直属代理" : "非直属代理")
            ]);
          }
        },
        {
          title: "已返有效投注",
          key: "betmoney",
          align: "center"
        },
        {
          title: "返佣金额",
          key: "givemoney",
          align: "center"
          //     render: (h, params) => {
          //   return h('span', ((params.row.givemoney)*1).toFixed(2))
          // }
        }
      ]
    };
  },
  methods: {
    hanlderRadio(val) {
      this.day = val;
      this.isSelect = 1;
      this.getincome();
    },
    slect(val) {
      this.isSelect = val;
      this.getincome();
    },
     //上一页
    prev() {
      this.isSelect = this.isSelect - 1;
      if (this.isSelect <= 1) {
        this.isSelect = 1;
      }
      this.getincome();
    },
    hanlderPage(i) {
      this.i = i;
      this.getnextlist();
    },
    //下一页
    next() {
      this.isSelect = this.isSelect + 1;
      if (this.isSelect >= this.page) {
        this.isSelect = this.page;
      }
      this.getincome();
    },
    gospan() {
      this.income = true;
      document.getElementsByClassName('income')[0].classList.remove('income2')
      this.getincome();
    },
    goincome(){
      this.day='1'
      this.getincome()
    },
    //获取下级收益
    getincome() {
      this.$store.commit("loading", true);
      this.$postS(`agency/myEarnings`, {
        date: this.day
      }).then(res => {
        if (res.code == 200 && res.data.list.length!=0) {
          this.totalAmount = 0;
          this.total = res.data.list.length;
          res.data.list.forEach(item => {
            this.totalAmount += item.allnetAmount * 1;
          });
            this.page = Math.ceil(this.total / this.pagesize);
            this.ispage = true;
            this.getPageCurData(res.data.list, this.pagesize, this.isSelect)
          this.$store.commit("loading", false);
        } else {
          this.$store.commit("loading", false);
        }
      });
    },
    //获取数据对应分页吗的数据
     getPageCurData(date, PageSize, PageNo) {
    // 假如当前页码是2 每页展示10条 那么就是data[10] 到 data[19] 当前第2页展示的数据 如：第11条就是 10 * 2 - 10 + 0 = 10
      this.data=[];
      for(let i = 0; i < PageSize; i++) {
         let idx = PageSize * PageNo - PageSize + i;
      if(idx < date.length) this.data.push(date[idx]);
      }
         return this.data;
     },
    getnextlist() {
      this.$store.commit("loading", true);
      this.$postS(`agency/myEarningsSecond?page=${this.i}`, {
        date: this.nexttime,
        pagesize: "10"
      }).then(res => {
        if (res.code == 200) {
          this.totcom = 0;
          this.data2 = res.data.data;
          this.total = res.data.total;
          this.data2.forEach(item => {
            this.totcom += item.givemoney * 1;
          });
          this.$store.commit("loading", false);
        } else {
          this.$store.commit("loading", false);
        }
      });
    },
    //获取今天的收益
    gettoday() {
      this.$getS(`agency/todayEarnings`).then(res => {
        if (res.code == 200) {
          this.money = res.data.money;
        }
      });
    }
  },
  created() {
    this.getincome();
    this.gettoday();
  },
  computed: {},
  destroyed() {},
  store
};
</script>
<style lang="less" scoped>
.income {
  .income-content {
    position: relative;
    height: 650px;
    overflow: hidden;
    .header {
      margin: 0 14px;
      height: 66px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 18px;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      cursor: pointer;
    }
    .income-search {
      //   padding: 10px 0 26px 10px;
      height: 70px;
      vertical-align: 70px;
      //   padding: 15px 0;
      display: flex;
      .income-icon {
        display: flex;
        align-items: center;
        padding-left: 25px;
        // border: 1px solid blue;
        img {
          width: 40px;
          height: 40px;
          margin-right: 6px;
        }
        div {
          p:nth-child(1) {
            color: #333;
            font-size: 14px;
            padding: 5px 0;
          }
          p:nth-child(2) {
            color: #ff9146;
            font-size: 16px;
          }
        }
      }
      .search {
        height: 70px;
        line-height: 70px;
        margin-left: 605px;
      }
    }
    .tot-income {
      position: absolute;
      left: 26px;
      bottom: 25px;
      span:nth-child(1) {
        color: #000000;
        font-size: 18px;
      }
      span:nth-child(2) {
        color: #ff9146;
        font-size: 18px;
      }
    }
    .page {
      ul {
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 25px;
        bottom: 25px;
      }
    }
  }

  .personal-income {
    position: relative;
    height: 650px;
    .no-data-text {
      text-align: center;
    }
    .header {
      margin: 0 14px;
      height: 66px;
      font-size: 18px;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      span:nth-child(1) {
        cursor: pointer;
      }
    }

    .tot-income {
      position: absolute;
      left: 26px;
      bottom: 25px;
      span:nth-child(1) {
        color: #000000;
        font-size: 18px;
      }
      span:nth-child(2) {
        color: #ff9146;
        font-size: 18px;
      }
    }
    .page {
      position: absolute;
      right: 25px;
      bottom: 25px;
    }
  }
}
</style>

