<template>
  <div class="record">
    <div
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
    </Table>
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
      disabled-hover
      size="small"
      ref="table"
    ></Table>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      timmer: null,
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
              return h("span", str.substring(start, end));
            }
          },
          {
            title: "投注金额",
            key: "betAmount",
            minWidth: 49,
            align: "center"
          },
          {
            title: "状态",
            align: "center",
            width: 45,
            render: (h, params) => {
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
            width: 35,
            render: (h, params) => {
              let that = this;
              return h(
                "a",
                {
                  on: {
                    click() {
                      that.cancelBet(params);
                    }
                  }
                },
                params.row.status === 0 ? "撤销" : "-"
              );
            }
          }
        ],
        data: []
      }
    };
  },
  computed: {
    fetchTime() {
      return this.$store.state.lottery.fetchTime;
    }
  },
  watch: {
    // 延时请求，动态更新数据至投注记录视图
    fetchTime(newVal, oldVal) {
      this.timmer = setTimeout(() => {
        this.getRecordDelay();
      }, 2000);
    }
  },
  methods: {
    async getRecordDelay() {
      let idArr = this.$route.fullPath.split("/");
      let lotteryId =
        idArr.filter(item => Number.isInteger(item * 1) && item !== "")[0] * 1;
      let res = await this.$http.post(`${this.$HOST_NAME}/lottery/results`, {
        lotteryId: lotteryId
      });
      if (res && res.code === 200) {
        if (this.$route.meta.series === "lhc") {
          return false;
        }
        this.getNumRecord(res.data.history);
        this.getBetRecord(res.data.bet);
      }
    },
    async getNumRecord(datas) {
      this.rankData.data = datas.slice(0, 10);
    },
    async getBetRecord(datas) {
      this.betData.data = datas ? datas.slice(0, 5) : [];
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
  }
};
</script>
<style lang="less" scoped>
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
  /deep/.ivu-table-cell {
    padding-left: 0;
    padding-right: 0;
  }
  /deep/.ivu-btn-small {
    padding: 0px 2px;
  }
  /deep/.ivu-table-tip {
    overflow-x: hidden;
  }
  /deep/.ivu-table-wrapper {
    border-top: 1px solid #ebe9e9;
    border-left: 1px solid #ebe9e9;
  }
  /deep/.ivu-table-border td,
  /deep/.ivu-table-border th {
    border-right: 1px solid #ebe9e9;
  }
  /deep/.ivu-table td,
  /deep/.ivu-table th {
    border-bottom: 1px solid #ebe9e9;
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


