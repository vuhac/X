<template>
  <div class="record">
    <!-- <div
      v-if="rankData.data.length"
      class="title"
    >开奖记录</div>
    <Table
      v-if="rankData.data.length"
      :columns="rankData.columns"
      :data="rankData.data"
      border
      disabled-hover
      size="small"
      ref="table"
      class="rank-table"
    >
    </Table> -->
 <div class="decial-right-ranking" v-if="rankList.length">
    <div class="title clearfix">
      <span>两面长龙排行</span>
    </div>
    <div class="decial-right-ranking-wrap">
      <div class="decial-right-ranking-item" style="width:139px">
        <div v-for="(item,index) in rankList" :key='index' style="width:139px">{{Object.entries(item)[0][0]}}</div>
      </div>
      <div class="decial-right-ranking-item bot" style="width:59px">
        <div v-for="(item,index) in rankList" :key='index' style="width:59px">{{Object.entries(item)[0][1]}}期</div>
      </div>
    </div>
  </div>
  <div class="gap"></div>
  <div
    v-if="betData.data.length"
    class="title clearfix"
  >
    <span>投注记录</span>
    <a
      href="javascript:;"
      @click="goUserCen('personage',1)"
    >更多 <Icon
        type="ios-arrow-right"
        size="14"
      ></Icon></a>
  </div>
  <Table
    v-if="betData.data.length"
    :columns="betData.columns"
    :data="betData.data"
    border
    width="200"
    disabled-hover
    size="small"
    ref="table"
    :class="{'scrollBool':betData.data.length<5}"
  ></Table>
</div>
</template>

<script>
import LotterySev from '@/pages/public/tradition/data/LotterySev.js'
export default {
  props: {},
  data() {
    return {
      rankList: [],
      issueshow:"",
      i:1,
      rankData: {
        columns: [
          {
            title: "期号",
            key: "issue",
            width: 45,
            align: "center",
            render: (h, params) => {
              let str = params.row.issue + "";
              let start = str.length - 3;
              let end = str.length;
              return h("span", str.substring(start, end));
            }
          },
          {
            title: "开奖号",
            key: "resultInfo",
            align: "center",
            render: (h, params) => {
              let Template = {
                props: ["row"],
                data() {
                  return {
                    style: {
                      width: "68px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }
                  };
                },
                template: `
                    <Poptip placement="bottom" trigger="hover">
                        <div :style="style">{{row.resultInfo}}</div>
                        <div slot="content">{{row.resultInfo}}</div>
                    </Poptip>`
              };
              return h(Template, {
                props: {
                  row: params.row
                }
              });
            }
          },
          {
            title: "和值",
            align: "center",
            width: 30,
            render: (h, params) => {
              return h("span", params.row.resultInfo.split(",")[0]);
            }
          },
          {
            title: "形态",
            align: "center",
            width: 48,
            render: (h, params) => {
              let list = params.row.luzhu.split(",");
              let need = [list[0], list[1]];
              let Template = {
                props: ["row"],
                data() {
                  return {
                    flex: {
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    },
                    ball: {
                      width: "19px",
                      height: "19px",
                      lineHeight: "19px",
                      borderRadius: "50%",
                      background: "#ed3f14",
                      color: "#ffff"
                    }
                  };
                },
                template: `
                  <div :style="flex">
                    <div :style="ball">{{row[0]}}</div>
                    <div :style="ball">{{row[1]}}</div>
                  </div>
                `
              };
              return h(Template, {
                props: {
                  row: need
                }
              });
            }
          }
        ],
        data: []
      },
      betData: {
        columns: [
          {
            title: "期号",
            key: "issue",
            width: 45,
            align: "center",
            render: (h, params) => {
              let str = params.row.issue + "";
              let start = str.length - 3;
              let end = str.length;
              return h("span", {
                  domProps: {
                    title:"投注内容:"+params.row.lotteryName+"-"+params.row.playwayName+"-"+params.row.ball+'-'+(!isNaN(Number(params.row.betInfo))==true?((params.row.betInfo*1)>4?'大':'小'):params.row.betInfo)

                  },
                  style: {
                    cursor:'pointer'
                   }
              },
              [h("span", str.substring(start, end))]
              );
            }
          },
          {
            title: "投注金额",
            key: "betAmount",
            width:50,
            minWidth: 50,
            align: "center"
          },
          {
            title: "状态",
            align: "center",
            width: 45,
            render: (h,params) => {
              let text;
              const { status } = params.row;
              switch (status) {
                case 1:
                  text = "已中奖";
                  break;
                case 2:
                  text = "未中奖";
                  break;
                case 3:
                  text = "和";
                  break;
                case 4: // 人工撤销
                case 5: // 系统撤销
                  text = "已撤销";
                  break;
                default:
                  text = "待开奖";
                  break;
              }
              return h(
                "span",
                {
                  style: {
                    color: status === 1 ? "#ed3f14" : ""
                  }
                },
                text
              );
            }
          },
          {
            title: "操作",
            align: "center",
            width: 59,
            minWidth:59,
            render: (h, params) => {
              console.log(params)
              let that = this;
              return h(
                "span",
                {
                  on: {
                    click:() =>{
                      if(params.row.status == 0){
                          that.cancelBet(params);
                      }
                    }
                  },
                  style:{
                    cursor:(params.row.status ==0) ?'pointer':'auto'
                  }
                },
                params.row.status === 0 ? "撤销" : "-"
              );
            }
          }
        ],
        data: []
      },
      date: this.getYMD(new Date()),
      platform:'',
      status:'',
      userinfo:localStorage.token || "",
      timer:null,
      issueshow:"",
      showdata:true,
    };
  },
  methods: {
    async getTrend(datas) {
      this.rankData.data = datas.slice(0, 10);
    },
    async getTrend (datas) {
        this.rankList = datas;
    },
    async getBetRecord1() {
      if(this.userinfo){
          this.$store.commit("loading", true);
          this.$getS(`member/bet-record/list?page=`+ new Date().getTime(), {
            date: this.date,
            game_platform: this.platform,
            game_class: 'lottery',
            status: this.status !== "" ? this.status : this.status,
            limit:10,
            page: this.i
          }).then(res => {
            if (res.code == 200) {
              this.betData.data=[]
              this.betData.data =res.data.data.list;
              this.total = res.data.total;
              this.validBetAmount1 = res.data.data.amount;
              this.total_bet1 = res.data.data.amount.total_bet;
              this.total_win1 = res.data.data.amount.total_win;
            } 
            else{
              if(!localStorage.token){
                  clearInterval(this.timer)
              }
            }
            this.$store.commit("loading",false);
          });
        }
    },
    cancelBet(params) {
      let data = {
        recordId: params.row.id,
        betTime: params.row.betTime
      };
      this.$http.post(`${this.$HOST_NAME}/lottery/cancel`, data).then(res => {
        if (res && res.code == 200) {
          this.dNotify(res.data, "success");
          this.$set(this.betData.data[params.index], "status", 4);
          params.row.status = 4;
        } else {
          this.dNotify(res.message, "error");
        }
      });
    },
    goUserCen(name, num) {
      this.$store.commit("showPersonal", { bool: true });
      this.$store.commit("showContent", { parent: name });
      this.$store.commit("showNav", { child: num });
    }
  },
  created(){
    this.getBetRecord1();
    console.log("666666666666")
    console.log(this.lotteryiuss)
  },
  computed: {
    getUserIcons() {
        return this.$store.state.personal.isPersonal;
    },
    lotteryiuss(){
        return  this.$store.state.mainState.lotteryiuss;
    }
  },
  watch: {
    getUserIcons(val) {
      console.log(val)
      if(val){
        clearInterval(this.timer)
      }
    },
    '$store.state.alert.tipModel.model':function(newVal,oldVal){
      if(newVal =='success'){
         console.log("成功呢")
         this.getBetRecord1();
      }
    },
    lotteryiuss(val){
        this.issueshow=val
    }
  },
  mounted(){
    this.timer = setInterval(()=>{
      setTimeout(this.getBetRecord1,0)
    },1000*10)
  },
  destroyed(){
    clearInterval(this.timer)
  }
};
</script>
<style lang="less" scoped>
.scrollBool{
  /deep/.ivu-table-body{
    overflow-y: hidden!important;
  }
}

/deep/.ivu-table-wrapper{
  border-radius: 4px;
}
/deep/.ivu-table {
  .ivu-table-body{
    max-height: 200px !important;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .ivu-table-header{
    table{
      width: 200px!important;
    }
  }
}
/deep/.ivu-table::after{
  content:"";
  width:0;  
}
.record {
  margin-top: 20px;
  .rank-table {
    /deep/.ivu-table-body {
      height: 200px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
    ::-webkit-scrollbar {
      width: 3px;
    }
  }
  /deep/ .ive-table-header{
    /deep/ th:nth-child(1){
      border-radius:4px; 
    }
  }
  /deep/.ivu-table-cell {
    padding-left: 0;
    padding-right: 0;
  }
  /deep/.ivu-btn-small {
    padding: 0px 2px;
  }
  /deep/.ivu-table{
    border-radius: 5px;
  }
  /deep/.ivu-table-tip {
    overflow-x: hidden;
  }
  /deep/.ivu-table-border::before{
    content:'';
    width:0;
  }
  /deep/.ivu-table-wrapper{
    border-bottom:1px solid #dddee1;
    border-right:1px solid #dddee1;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    span {
      float: left;
    }
    a {
      float: right;
      font-size: 12px;
    }
  }
  .gap {
    height: 20px;
  }
}
</style>


