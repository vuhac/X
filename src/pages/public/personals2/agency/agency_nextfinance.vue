<template>
	<div class="next">
		<div class="next-content">
			<div class="header">
				<ul>
					<li>
						<span @click="gonext" style="cursor: pointer;">下级财务</span>
					</li>
					<li class="aisle" v-for="(item,index) in  titleTypeList" :key="index">
						<span :class="{spanActive:titleType ==item.type}" @click="gettype(item.type)">{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="search">
				<div class="search-input">
					<input type="text" placeholder="请输入帐号" v-model="username">
				</div>
				<div class="status">
					<label>状态</label>
					<Select class="status-select" v-model="searchStstus">
						<Option v-for="(item_a,i) in searchStstusList" :key="i" :value="item_a.selectStatus">{{item_a.selectName}}</Option>
					</Select>
				</div>
				<div class="searchBtn" @click="searchBtn">搜索</div>
				<RadioGroup v-model="day" @on-change="hanlderRadio">
					<Radio label="1">
						<span class="radio-span">今日</span>
					</Radio>
					<Radio label="2">
						<span class="radio-span">昨天</span>
					</Radio>
					<Radio label="3">
						<span class="radio-span">最近七天</span>
					</Radio>
				</RadioGroup>

				<DatePicker placeholder="选择时间" type="daterange" placement="bottom-end" style="width: 236px;margin-left:25px;"
				 @on-change="hanlderTime"></DatePicker>
			</div>

			<Table :columns="column" :data="data" no-data-text="<div style='margin:30px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
			<!-- <div class="page"> -->
			<Page class="page" size="small" :total="total" @on-change="hanlderPage" v-if="total>0"></Page>
			<!-- </div> -->

			<div class="tot-income" v-if="data.length">
				<span>{{spanitem}}:</span>
				<span>{{totposit.toFixed(2)}}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      day: "1",
      timeStart: "",
      timeEnd: "",
      data: [],
      spanActive: 1,
      username: "",
      titleType: 1,
      total: 0,
      i: 1,
      financeShow:false,
      totposit: 0,
      titleTypeList: [
        {
          name: "存款",
          type: 1,
          status: [
            {
              selectName: "全部",
              selectStatus: 0
            },
            {
              selectName: "成功",
              selectStatus: 1
            },
            {
              selectName: "失败",
              selectStatus: 2
            },
            {
              selectName: "审核中",
              selectStatus: 3
            },
            {
              selectName: "待支付",
              selectStatus: 4
            }
          ],
          columns: [
            {
              title: "帐号",
              key: "username",
              align: "center"
            },
            {
              title: "存款方式",
              key: "subType",
              align: "center"
            },
            {
              title: "存款时间",
              key: "time",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span",
                    this.$moment.unix(params.row.time - 0).format("YYYY-MM-DD HH:mm:ss")

                  )
                ]);
              }
            },
            {
              title: "存款金额",
              key: "amount",
              align: "center",
              render: (h, params) => {
                return h("span", (params.row.amount * 1).toFixed(2));
              }
            },
            {
              title: "状态",
              key: "status",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span", params.row.status == "success"? "成功":(params.row.status == "fail" ? "失败": (params.row.status == "wait" ? "审核中" : "待支付"))
                  )
                ]);
              }
            }
          ]
        },
        {
          name: "取款",
          type: 2,
          status: [
            {
              selectName: "全部",
              selectStatus: 0
            },
            {
              selectName: "成功",
              selectStatus: 1
            },
            {
              selectName: "失败",
              selectStatus: 2
            },
            {
              selectName: "审核中",
              selectStatus: 3
            },
            {
              selectName: "处理中",
              selectStatus: 4
            }
          ],
          columns: [
            {
              title: "帐号",
              key: "username",
              align: "center"
            },
            {
              title: "取款银行",
              key: "bankName",
              align: "center"
            },
            {
              title: "银行卡号",
              key: "bankId",
              align: "center"
            },
            {
              title: "姓名",
              key: "bankAccountName",
              align: "center"
            },
            {
              title: "取款时间",
              key: "time",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span",
                    this.$moment.unix(params.row.time - 0).format("YYYY-MM-DD HH:mm:ss")
                  )
                ]);
              }
            },
            {
              title: "取款金额",
              key: "amount",
              align: "center",
              render: (h, params) => {
                return h("span", (params.row.amount * 1).toFixed(2));
              }
            },
            {
              title: "状态",
              key: "status",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span", params.row.status == "success" ? "成功": (params.row.status == "fail" ? "失败" : (params.row.status == "wait" ? "审核中" : "系统处理中"))
                  )
                ]);
              }
            }
          ]
        },
        {
          name: "返水",
          type: 3,
          status: [
            {
              selectName: "全部",
              selectStatus: 0
            },
            {
              selectName: "成功",
              selectStatus: 1
            },
            {
              selectName: "失败",
              selectStatus: 2
            },
            {
              selectName: "审核中",
              selectStatus: 3
            },
            {
              selectName: "待返水",
              selectStatus: 4
            }
          ],
          columns: [
            {
              title: "帐号",
              key: "userName",
              align: "center"
            },
            {
              title: "返点金额",
              key: "amount",
              align: "center",
              render: (h, params) => {
                return h("span", (params.row.amount * 1).toFixed(2));
              }
            },
            {
              title: "状态",
              key: "status",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span",
                    params.row.status == "success" ? "成功" : (params.row.status == "fail" ? "失败" : (params.row.status == "wait" ? "审核中" : "成功"))
                  )
                ]);
              }
            }
          ]
        },
        {
          name: "优惠",
          type: 4,
          status: [
            {
              selectName: "全部",
              selectStatus: 0
            },
            {
              selectName: "成功",
              selectStatus: 1
            },
            {
              selectName: "失败",
              selectStatus: 2
            },
            {
              selectName: "审核中",
              selectStatus: 3
            }
          ],
          columns: [
            {
              title: "帐号",
              key: "userName",
              align: "center"
            },
            {
              title: "优惠类型",
              key: "title",
              align: "center"
            },
            {
              title: "领取时间",
              key: "created_at",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span",
                     this.$moment.unix(params.row.created_at - 0).format("YYYY-MM-DD HH:mm:ss")
                  )
                ]);
              }
            },
            {
              title: "金额",
              key: "bouns",
              align: "center",
              render: (h, params) => {
                return h("span", (params.row.bouns * 1).toFixed(2));
              }
            },
            {
              title: "状态",
              key: "status",
              align: "center",
              render: (h, params) => {
                return h("div", [
                  h(
                    "span",
                    params.row.status == "success"? "成功": (params.row.status == "fail" ? "失败" : "审核中")
                  )
                ]);
              }
            }
          ]
        }
      ],
      searchStstus: 0,
      spanlist: ["总存款", "总取款", "总返点", "总优惠"],
      spanitem: "总存款",
      searchStstusList: [
        {
          selectName: "全部",
          selectStatus: 0
        },
        {
          selectName: "成功",
          selectStatus: 1
        },
        {
          selectName: "失败",
          selectStatus: 2
        },
        {
          selectName: "审核中",
          selectStatus: 3
        },
        {
          selectName: "待支付",
          selectStatus: 4
        }
      ],
      column: [
        {
          title: "帐号",
          key: "username",
          align: "center"
        },
        {
          title: "存款方式",
          key: "subType",
          align: "center"
        },
        {
          title: "存款时间",
          key: "time",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                this.$moment.unix(params.row.time - 0).format("YYYY-MM-DD HH:mm:ss")
              )
            ]);
          }
        },
        {
          title: "存款金额",
          key: "amount",
          align: "center",
          render: (h, params) => {
            return h("span", (params.row.amount * 1).toFixed(2));
          }
        },
        {
          title: "状态",
          key: "status",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "span", params.row.status == "success" ? "成功":(params.row.status == "fail" ? "失败" : (params.row.status == "wait" ? "审核中" : "待支付"))
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    getfinance() {
      this.$store.commit("loading", true);
      this.$postS(`agency/lowerFinance21?page=` + this.i, {
        st: this.timeStart || this.getYMD(new Date()),
        et: this.timeEnd || this.getYMD(new Date()),
        pagesize: "9",
        type: this.titleType,
        uname: this.username,
        status: this.searchStstus
      }).then(res => {
        if (res.code == 200 && res.data.data) {
          this.data = res.data.data;
          this.total = res.data.total;

          if (this.titleType == 1) {
            this.totposit = 0;
            this.data.forEach(item => {
              if (item.status == "success") {
                this.totposit += item.amount * 1;
              }
            });
          } else if (this.titleType == 2) {
            this.totposit = 0;
            this.data.forEach(item => {
              if (item.status == "success") {
                this.totposit += item.amount * 1;
              }
            });
          } else if (this.titleType == 3) {
            this.totposit = 0;
            this.data.forEach(item => {
              this.totposit += item.amount * 1;
            });
          } else {
            this.totposit = 0;
            this.data.forEach(item => {
              if (item.status == "success") {
                this.totposit += item.bouns * 1;
              }
            });
          }
          this.$store.commit("loading", false);
        } else if (res.code==200 && res.data.length==0) {
          this.$error('您没有下级代理');
          this.$store.commit("loading", false);
        } else {
          this.$store.commit("loading", false);
        }
      });
    },
    hanlderTime(date) {
      this.timeStart = date[0];
      this.timeEnd = date[1];
      this.getfinance();
    },
    hanlderRadio(val) {
      if (val == 1) {
        this.timeStart = this.getYMD(new Date());
        this.timeEnd = this.getYMD(new Date());
      } else if (val == 2) {
        this.timeStart = this.getYMD(new Date() - 1000 * 60 * 60 * 24);
        this.timeEnd = this.getYMD(new Date() - 1000 * 60 * 60 * 24);
      } else {
        this.timeStart = this.getYMD(new Date() - 1000 * 60 * 60 * 24 * 6);
        this.timeEnd = this.getYMD(new Date());
      }
      this.getfinance();
    },
    hanlderPage(i) {
      this.i = i;
      this.getfinance();
    },
    searchBtn() {
      if (this.username == this.$store.state.mainState.userinfo.userName) {
        this.$error("不可查询自己哦");
        return false;
      }
      this.getfinance();
    },
    gettype(itemtype) {
      this.titleType = itemtype;
      this.getfinance();
    },
    gonext(){
      this.titleType = 1
      this.searchStstus=0
      this.username=''
      this.hanlderRadio(1)
      this.day='1'
      this.getfinance()
    }
  },
  created() {
    this.getfinance();
    setInterval(()=>{
      this.financeShow = true
    },500)
  },
  watch: {
    titleType(newValue, oldValue) {
      this.searchStstusList = null;
      this.column = null;
      this.titleTypeList.forEach((v,i)=>{
        if (this.titleType == parseInt(i+1)) {
          this.searchStstusList = this.titleTypeList[i].status;
          this.column = this.titleTypeList[i].columns;
          this.spanitem = this.spanlist[i];

        }
      })
     }
  }
}
</script>
<style lang="less" scoped>
.next {
  .next-content {
    position: relative;
    height: 650px;
    overflow: hidden;

    .header {
      height: 60px;
      line-height: 85px;
      border-bottom: 1px solid #f3f3f3;
      margin: 10px 14px 0px 14px;
      display: flex;
      align-items: flex-end;

      ul {
        li {
          padding: 0 10px;
          font-size: 1.8em;
          height: 30px;
          float: left;
          line-height: 30px;
          margin-bottom: 10px;
          text-align: center;
          border-right: 1px solid #dbdbdb;
        }

        .aisle {
          border: none;
          font-size: 1.6em;
          font-weight: 200;

          span {
            padding: 6px 20px;
            cursor: pointer;
          }

          .spanActive {
            background: linear-gradient(180deg, #fe8983, #f0b761);
            border-radius: 10px;
            color: #fff;
          }
        }
      }
    }

    .search {
      height: 64px;
      line-height: 64px;
      padding: 0 10px;
      display: flex;
      align-items: center;

      .search-input {
        width: 196px;
        margin-left: 15px;
        display: flex;
        align-items: center;

        input {
          height: 36px;
          font-size: 16px;
          background: #f5f5f5;
          border: 0 solid #f5f5f5;
          border-radius: 10px;
          // padding: 0 16px;
          padding-left: 6px;
          text-align: left;
          text-indent: 5px;
          -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          color: #666;
          border-color: none;
        }

        input:focus {
          outline: none !important;
          border: 1px solid rgba(254, 134, 93, 0.6);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
            0 1px 10px 5px rgba(254, 134, 93, 0.14);
        }
      }

      .status {
        display: flex;
        align-items: center;
        margin-left: 21px;

        label {
          font-size: 16px;
        }

        .status-select {
          width: 79px;
          height: 36px;
          vertical-align: middle;
          margin-left: 10px;
        }
      }

      .searchBtn {
        vertical-align: middle;
        width: 80px;
        height: 36px;
        border-radius: 5px;
        background: linear-gradient(180deg, #ff3492, #ff1e4f);
        color: #fff;
        line-height: 36px;
        text-align: center;
        display: inline-block;
        margin-left: 20px;
        font-size: 18px;
        cursor: pointer;
        margin-right: 20px;
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
