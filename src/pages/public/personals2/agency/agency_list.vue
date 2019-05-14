<template>
  <div class="apply_list">
    <div class="apply_frist" v-if="firstlevel">
      <div class="apply_list_content" v-if="toggleTeam=='list'">
        <div class="applyList_header">下级列表</div>
        <div class="applyList_content">
          <div class="content_header">
            <!-- 会员帐号 -->
            <div class="agency_userName">
              <input type="text" v-model="userName" placeholder="请输入会员帐号">
            </div>
            <div class="agency_typename">
              <span>用户类型</span>
            </div>
            <!-- 开户类型 -->
            <div class="agency_type">
              <Select v-model="usertype">
                <Option v-for="(item,i) in typeList" :key="i" :value="item.value">{{item.name}}</Option>
              </Select>
            </div>
            <!-- 搜索 -->
            <div class="agency_search">
              <div class="searchBtn" @click="getinformation2">
                <span>搜索</span>
              </div>
            </div>
          </div>
          <div class="content_main">
            <div class="listTable">
              <Table
                :columns="columns"
                :data="data"
                no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"
              >></Table>
              <Page
                class="page"
                size="small"
                :current="i"
                :total="total"
                @on-change="hanlderPage"
                :page-size="8"
                v-if="total>0"
              ></Page>
            </div>
          </div>
        </div>
        <div class="toast" v-if="showToast">
          <div class="top">
            <img alt>
            <p>确认将{{user}}升级为代理</p>
          </div>
          <div class="bottom">
            <p @click="determine()">确定</p>
            <p @click="cancel()">取消</p>
          </div>
        </div>
      </div>

      <div class="apply_update" v-else>
        <div class="applyList_header">
          <p>{{userName}}详情</p>
        </div>
        <div class="applyList_content">
          <!-- 彩票返点 -->
          <div class="caipiaoContent">
            <div
              class="bar"
              v-for="(item,i) in rebatedata"
              :key="i"
              :class="{refundList:caipiaoNum ==i}"
              @click="toggleCaipiao(i,item.list,item.name)"
            >
              <label>{{item.name}}：</label>
              <span>{{item.active |fixed}}%</span>
              <i class="ivu-icon ivu-icon-chevron-right"></i>
            </div>
            <div class="setRefund">
              <div class="setRefund-main" @click="MaxRefund2">
                <div class="refund-row">
                  <label>统一设置：</label>
                  <img
                    src="/static/public/image/userImg/jianshao.png"
                    alt
                    class="leftImg"
                    @click="reduce2()"
                  >
                  <img
                    src="/static/public/image/userImg/zengjia.png"
                    alt
                    class="rightImg"
                    @click="increase2()"
                  >
                </div>
                <div class="refund-row" v-for="(item,i) in caipiaoList" :key="i">
                  <label>{{item.name}}：</label>
                  <Select v-model="item.rebate" @on-change="MaxRefund2">
                    <Option v-for="v in item.option" :value="v.value" :key="v.value">{{v.name}}</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <!-- 反水设置 -->
          <div class="refundContent">
            <div
              class="bar"
              v-for="(item,i) in refundData"
              :key="i"
              :class="{refundList:refundList ==i}"
              @click="toggleRefund(i,item.list,item.name)"
            >
              <label>{{item.name}}:</label>
              <span>{{item.active |fixed}}%</span>
              <i class="ivu-icon ivu-icon-chevron-right"></i>
            </div>
            <div class="setRefund">
              <div class="setRefund-main" @click="MaxRefund1">
                <div class="refund-row">
                  <label>统一设置：</label>
                  <img
                    src="/static/public/image/userImg/jianshao.png"
                    alt
                    class="leftImg"
                    @click="reduce()"
                  >
                  <img
                    src="/static/public/image/userImg/zengjia.png"
                    alt
                    class="rightImg"
                    @click="increase()"
                  >
                </div>
                <div class="refund-row" v-for="(item,i) in setRefund" :key="i">
                  <label>{{item.name}}：</label>

                  <Select v-model="item.rebate" @on-change="MaxRefund1">
                    <Option v-for="v in item.option" :value="v.value" :key="+v.value">{{v.name}}</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="submitPay">
          <p @click="submitOpen()">确认修改</p>
          <p @click="goback()">返回</p>
        </div>
      </div>
    </div>
    <div class="appliy_Subordinate" v-else>
      <div class="apply_list_content" v-if="toggleTeam=='list'">
        <div class="applyList_header">
          <p v-for="(item,i)  in dataLink" :key="i">
            <label v-show="dataShow" v-if="i>0">></label>
            <span @click="hanlderClick" data-getvalue="item">{{item.uname}}</span>
          </p>
        </div>
        <div class="applyList_content">
          <div class="content_header">
            <!-- 会员帐号 -->
            <div class="agency_userName">
              <input type="text" v-model="userName" placeholder="请输入会员帐号">
            </div>
            <div class="agency_typename">
              <span>用户类型</span>
            </div>
            <!-- 开户类型 -->
            <div class="agency_type">
              <Select v-model="usertype">
                <Option v-for="(item,i) in typeList" :key="i" :value="item.value">{{item.name}}</Option>
              </Select>
            </div>
            <!-- 搜索 -->
            <div class="agency_search">
              <div class="searchBtn" @click="getinformation2">
                <span>搜索</span>
              </div>
            </div>
          </div>
          <div class="content_main">
            <div class="listTable">
              <Table
                :columns="columns"
                :data="data"
                no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"
              >></Table>
              <Page
                class="page"
                size="small"
                :current="i"
                :total="total"
                :page-size="8"
                @on-change="hanlderPage"
                v-if="total>0"
              ></Page>
            </div>
            <div style="margin:100px 0;" v-show="!data">
              <img src="/static/public/image/userImg/no-data.png" alt>
            </div>
          </div>
        </div>
        <div class="toast" v-if="showToast">
          <div class="top">
            <img alt>
            <p>确认将{{user}}升级为代理</p>
          </div>
          <div class="bottom">
            <p @click="determine()">确定</p>
            <p @click="cancel()">取消</p>
          </div>
        </div>
      </div>
      <div class="apply_update" v-else>
        <div class="applyList_header">
          <p>{{userName}}详情</p>
        </div>
        <div class="applyList_content">
          <!-- 彩票返点 -->
          <div class="caipiaodetails">
            <div
              class="bar"
              v-for="(item,i) in rebatedata"
              :key="i"
              :class="{refundList:caipiaoNum ==i}"
              @click="toggleCaipiao(i,item.list,item.name)"
            >
              <label>{{item.name}}：</label>
              <span>{{item.active |fixed}}%</span>
              <i class="ivu-icon ivu-icon-chevron-right"></i>
            </div>
            <div class="setRefund" style="top:0x">
              <div class="setRefund-main" @click="MaxRefund2">
                <div class="refund-row">
                  <label>统一设置：</label>
                  <img
                    src="/static/public/image/userImg/jianshao.png"
                    alt
                    class="leftImg"
                    @click="reduce2()"
                  >
                  <img
                    src="/static/public/image/userImg/zengjia.png"
                    alt
                    class="rightImg"
                    @click="increase2()"
                  >
                </div>
                <div class="refund-row" v-for="(item,i) in caipiaoList" :key="i">
                  <label>{{item.name}}</label>
                  <Select v-model="item.rebate" @on-change="MaxRefund2">
                    <Option v-for="v in item.option" :value="v.value" :key="v.value">{{v.name}}</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <!-- 反水设置 -->
          <div class="refundContent">
            <div
              class="bar"
              v-for="(item,i) in refundData"
              :key="i"
              :class="{refundList:refundList ==i}"
              @click="toggleRefund(i,item.list,item.name)"
            >
              <label>{{item.name}}：</label>
              <span>{{item.active}}%</span>
              <i class="ivu-icon iactivevu-icon-chevron-right"></i>
            </div>
            <div class="setRefund">
              <div class="setRefund-main" @click="MaxRefund1">
                <div class="refund-row">
                  <label>统一设置：</label>
                  <img
                    src="/static/public/image/userImg/jianshao.png"
                    alt
                    class="leftImg"
                    @click="reduce()"
                  >
                  <img
                    src="/static/public/image/userImg/zengjia.png"
                    alt
                    class="rightImg"
                    @click="increase()"
                  >
                </div>
                <div class="refund-row" v-for="(item,i) in setRefund" :key="i">
                  <label>{{item.name}}：</label>
                  <Select v-model="item.rebate" @on-change="MaxRefund1">
                    <Option v-for="v in item.option" :value="v.value" :key="+v.value">{{v.name}}</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="submitPay">
          <p @click="submitOpen()">确认修改</p>
          <p @click="goback()">返回</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "./agency";
export default {
  mixins: [mixins],
  data() {
    return {
      // 切换用户开户,生成邀请链接的样式
      spanActive: 0,
      showToast: false,
      // 精准开户用户名
      userName: "",
      // 精准开户默认密码
      password: "123456",
      param: {},
      user: "",
      uid: "",
      typeList: [
        { name: "全部", value: "全部" },
        { name: "会员", value: "会员" },
        { name: "代理", value: "代理" }
      ],
      usertype: "全部",
      all: true,
      url: `${this.$HOST_NAME}/Agency/createMember`,
      rebatedata: [],
      toggleTeam: "list",
      caipiaoNum: 0,
      reportData: {},
      caipiaoList: [],
      caipiaoName: "",
      data: [],
      columns: [
        {
          title: "帐号",
          key: "userName",
          align: "center",
          width: 144,
          render: (h, params) => {
            return h("div", [h("span", params.row.userName)]);
          }
        },
        {
          title: "姓名",
          key: "Deposit",
          align: "center",
          width: 114,
          render: (h, params) => {
            return h("div", [
              h("span", params.row.realName == "" ? "无" : params.row.realName)
            ]);
          }
        },
        {
          title: "用户类型",
          key: "created_at",
          align: "center",
          width: 84,
          render: (h, params) => {
            return h("div", [
              h("span", params.row.is_agency == "0" ? "会员" : "代理")
            ]);
          }
        },
        {
          title: "下级人数",
          key: "balance",
          align: "center",
          width: 84,
          cursor: "pointer",
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: {
                    cursor: params.row.countuser * 1 > 0 ? "pointer" : "",
                    marginLeft: "4px",
                    width: "26px",
                    height: "11px",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHei",
                    fontWeight: "400",
                    color:
                      params.row.countuser * 1 > 0
                        ? "rgba(255,145,70,1)"
                        : "rgba(85,85,85,1)"
                  },
                  class:params.row.countuser * 1 > 0 ?'listShowAA':'',
                  on: {
                    click: () => {
                      if (
                        params.row.countuser * 1 > 0 &&
                        params.row.is_agency == "1"
                      ) {
                        this.firstlevel = false;

                        this.userName = params.row.userName;
                        this.uid = params.row.uid;
                        this.type = params.row.is_agency;
                        this.hanlderLink();
                        this.i = 1
                        this.getinformation();
                      } else {
                      }
                    }
                  }
                },
                [h("span", params.row.countuser)]
              )
            ]);
          }
        },
        {
          title: "余额",
          key: "preferential",
          align: "center",
          width: 114,
          render: (h, params) => {
            return h("span", (params.row.balance * 1).toFixed(2));
          }
        },
        {
          title: "注册时间",
          key: "created_at",
          align: "center",
          width: 144,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                this.$moment
                  .unix(params.row.created_at - 0)
                  .format("YYYY-MM-DD HH:mm:ss")
              )
            ]);
          }
        },
        {
          title: "最后登录",
          key: "balance",
          align: "center",
          width: 144,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                this.$moment
                  .unix(params.row.lastTime - 0)
                  .format("YYYY-MM-DD HH:mm:ss")
              )
            ]);
          }
        },
        {
          title: "状态",
          key: "preferential",
          align: "center",
          width: 99,
          render: (h, params) => {
            return h("div", [
              h("span", params.row.status == "yes" ? "启用" : "禁用")
            ]);
          }
        },
        {
          title: "操作",
          key: "balance",
          align: "center",
          width: 101,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: {
                    cursor: "pointer",
                    marginRight: params.row.is_agency == "0" ? "12px" : "0px"
                  },
                  domProps: {
                    title: "修改赔率"
                  },
                  on: {
                    click: () => {
                      this.toggleTeam = "update";
                      this.userName = params.row.userName;
                      this.$store.commit("listUserId", params.row.uid);
                      this.changeOpenData(params.row)
                    }
                  }
                },
                [
                  h("img", {
                    attrs: {
                      src: "/static/public/image/userImg/edit-btu@3x.png"
                    },
                    style: {
                      fontSize: "12px",
                      marginRight: "3px",
                      width: "16px",
                      transform: "translateY(20%)"
                    }
                  })
                ]
              ),
              h(
                "span",
                {
                  style: {
                    cursor: "pointer",
                    display:
                      params.row.is_agency == "0" ? "inline-block" : "none"
                  },
                  domProps: {
                    title: params.row.is_agency == "0" ? "升级为代理" : ""
                  },
                  on: {
                    click: () => {
                      if (params.row.is_agency == "0") {
                        this.toggleTeam = "list";
                        this.user = params.row.userName;
                        this.showToast = true;
                        this.upgrade(params.row.uid);
                      }
                    }
                  }
                },
                [
                  h("img", {
                    attrs: {
                      src:
                        params.row.is_agency == "0"
                          ? "/static/public/image/userImg/shengji-btu@3x.png"
                          : "/static/public/image/userImg/white.png"
                    },
                    style: {
                      fontSize: "12px",
                      marginRight: "3px",
                      width: "16px",
                      transform: "translateY(20%)"
                    }
                  })
                ]
              )
            ]);
          }
        }
      ],
      i: 1,
      open_type: 0,
      total: 0,
      firstlevel: true,
      dataLink: [
        {
          uname: "下级列表",
          uid: this.$store.state.mainState.userinfo.agencyInfo.uid
        }
      ]
    };
  },
  methods: {
    cancel() {
      this.showToast = false;
    },
    hanlderLink() {
      if (this.userName != this.$store.state.mainState.userinfo.userName) {
        let newObj = {};
        newObj.uname = this.userName;
        newObj.uid = this.uid;
        this.dataLink.push(newObj);
        this.dataShow = true;
      }
    },
    changeOpenData(data){
      if(this.dataLink.length>=2){
        this.set_list(data);
      }
      this.rebatedata.forEach(v=>{
        v.list.forEach(element=>{
          element.rebate = (data[element.key]*1).toFixed(1)
        })
      })
      this.refundData.forEach(v=>{
        v.list.forEach(element=>{
          element.rebate = (data[element.key]*1).toFixed(1)
        })
      })
      this.MaxRefund2()
      this.MaxRefund1()
    },
    hanlderClick(e) {
      for (let i = 0; i < this.dataLink.length; i++) {
        let obj = this.dataLink[i];
        if (e.toElement.firstChild.data == "下级报表") {
          this.uid = obj.uid;
          this.dataLink.splice(1);
        } else if (e.toElement.firstChild.data == obj.uname) {
          this.uid = obj.uid;
          this.dataLink.splice(i + 1);
        }
      }
      this.getinformation();
    },
    set_list(data){
       let refund = JSON.parse(localStorage.refund);
       for ( let i in refund){
         refund[i].list.forEach(element=>{
           element.value = data[element.key]
         })
       }
      this.getRefundInfo(refund)
    },
    goback() {
      this.toggleTeam = "list";
      this.i = this.$store.state.personal.pagesizeNum;
      this.getinformation()
    },
    hanlderPage(i) {
      this.i = i;
      this.$store.commit("psNumber",i)
      this.getinformation();
    },
    upgrade(uid) {
      this.$store.commit("userIdbyDetails", uid);
    },
    determine() {
      this.showToast = false;
      const uid = this.$store.state.personal.uid;
      this.$postS(`agency/lowerUpStatus?page=${this.i}`, {
        type: "2",
        uid: uid * 1,
        val: "yes"
      }).then(res => {
        if (res.code == 200) {
          this.$success("升级代理成功");
          let uid = JSON.parse(localStorage.userinfo).uid;
          this.i = this.i;
          this.getinformation();
          this.$store.commit("loading", false);
        } else {
          this.$error(res.message);
          this.$store.commit("loading", false);
        }
      });
    },
    submitOpen() {
      let uid = this.$store.state.personal.list_userid;
      let rebateData = JSON.parse(JSON.parse(localStorage.userinfo).rebate);
      this.rebatedata.forEach(v => {
        v.list.forEach(a => {
          rebateData[a.id] = a.rebate;
        });
      });
      let json_value = this.productJsonParams().toString();
      this.$postS(`agency/lowerUpRefund?page=${this.i}`, {
        uid: uid,
        json_value: json_value
      }).then(res => {
        if (res.code == 200) {
          this.$success(res.data);
          this.param = {};
        } else {
          this.$error(res.message);
        }
      });
    },
    toggleCaipiao(i, list, name) {
      this.caipiaoNum = i;
      this.caipiaoList = list;
      this.caipiaoName = name;
    },

    MaxRefund2() {
      let tempList = [...this.rebatedata]
      this.rebatedata.forEach((v, i) => {
        v.active = +v.active;
        let max = 0;
        v.list.forEach(item => {
          if (item.rebate > max) max = item.rebate;
        });
        if (max == 0) {
          v.active = "0.0";
          this.rebatedata = [...tempList]
        } else {
          this.$set(v,"active",max)
          this.rebatedata = [...tempList]
        }
      });
    },
    getinformation() {
      this.$store.commit("loading", true);
      let uname = this.userName || JSON.parse(localStorage.userinfo).userName;
      let uid = this.uid || JSON.parse(localStorage.userinfo).uid;
      this.type = 2;
      switch (this.usertype) {
        case "全部":
          this.type = 2;
          break;
        case "会员":
          this.type = 0;
          break;
        case "代理":
          this.type = 1;
        default:
          break;
      }
      this.$postS(`agency/lowerList21?page=${this.i}`, {
        type: this.type,
        uid: uid,
        pagesize: "8"
      }).then(res => {
        if (res.code == 200) {
          this.data = res.data.data;
          this.total = res.data.total;
          this.$store.commit("loading", false);
        } else {
          this.$store.commit("loading", false);
          this.data = "";
          this.total = "";
          this.$error(res.message);
        }
      });
      this.userName = "";
    },
    getinformation2() {
      this.$store.commit("loading", true);
      this.i = 1;
      let uname = this.userName || JSON.parse(localStorage.userinfo).userName;
      let uid = this.uid || JSON.parse(localStorage.userinfo).uid;
      switch (this.usertype) {
        case "全部":
          this.type = 2;
          break;
        case "会员":
          this.type = 0;
          break;
        case "代理":
          this.type = 1;
        default:
          break;
      }
      if (
        this.userName == JSON.parse(localStorage.userinfo).userName ||
        this.userName == ""
      ) {
        this.dataLink = [{ uname: "下级列表", uid: "" }];
        this.uid = JSON.parse(localStorage.userinfo).uid;
        this.getinformation()
        return false
      }
      if (this.userName == JSON.parse(localStorage.userinfo).userName) {
        this.$success("不可以搜索自己哦");
        this.$store.commit("loading", false);
      } else {
        this.$postS(`agency/lowerList21?page=${this.i}`, {
          type: this.type,
          uname: uname,
          pagesize: "8"
        }).then(res => {
          if (res.code == 200) {
            this.data = res.data.data;
            this.total = res.data.total;
            this.$store.commit("loading", false);
          } else {
            this.$store.commit("loading", false);
            this.data = ""
            this.total = "";
            this.$success("查询的用户不在当前代理名下");
          }
        });
      }
    }
  },
  filters: {
    caplitalize: function(item) {
      let arr = [];
      item.forEach(v => {
        arr.push(parseFloat(v.value));
      });
      return Math.max(...arr);
    }
  },
  created() {
    this.$nextTick(() => {
      this.getinformation();
      this.getRefundInfo();
    });
  }
};
</script>
<style lang="less">
.peronsals .apply_list .ivu-select-dropdown-list {
  max-height: 160px;
}
.apply_list {
  .apply_frist {
    .apply_list_content {
      .applyList_header {
        margin: 0 14px;
        height: 66px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 1.8em;
        padding-left: 10px;
        color: #696969;
        line-height: 85px;
        font-weight: 400;
        p {
          width: auto;
          height: 68px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 68px;
        }
      }
      .applyList_content {
        input::-webkit-input-placeholder {
          width: 55px;
          height: 42px;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(170, 170, 170, 1);
          line-height: 42px;
          text-indent: 15px;
        }
        input:-ms-input-placeholder {
          width: 55px;
          height: 42px;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(170, 170, 170, 1);
          line-height: 42px;
          text-indent: 15px;
        }
        .content_header {
          margin-top: 15px;
          margin-bottom: 18px;
          line-height: 38px;
          div {
            display: inline-block;
          }
          .agency_typename {
            margin-left: 24px;
            margin-right: 11px;
            width: 64px;
            height: 17px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 25px;
          }
          .agency_type {
            .ivu-select-placeholder {
              width: 76px;
            }
          }
          margin-left: 25px;
          .agency_userName {
            width: 240px;
            height: 36px;
            input {
              height: 36px;
              font-size: 16px;
              background: rgba(113, 14, 31, 1);
              border: 1px solid #f5f5f5;
              border-radius: 10px;
              text-align: left;
              text-indent: 1em;
              -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              color: #666;
              &:not(.other) {
                width: 240px;
                height: 38px;
                background: #fdfdfd;
              }
              .ivu-radio {
                font-size: 16px;
                color: #666;
              }
            }
            input:focus {
              outline: none !important;
              border: 1px solid rgba(254, 134, 93, 0.6);
              box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
                0 1px 10px 5px rgba(254, 134, 93, 0.14);
            }
          }
          .agency_search {
            margin-left: 21px;
            .searchBtn {
              width: 80px;
              height: 36px;
              border-radius: 5px;
              background: linear-gradient(180deg, #ff3492, #ff1e4f);
              color: #fff;
              line-height: 36px;
              text-align: center;
              display: inline-block;
              margin: 0 20px;
              font-size: 18px;
              cursor: pointer;
              span {
                line-height: 36px;
                width: 36px;
                height: 16px;
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
        .content_main {
          .ivu-table {
            td {
              line-height: 20px;
            }
            .ivu-table-body {
              height: 478px;
            }
          }
          .listTable {
            .page {
              position: absolute;
              right: 20px;
              bottom: 35px;
            }
          }
        }
      }
      .toast {
        width: 280px;
        height: 165px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -140px;
        margin-top: -82.5px;
        z-index: 2019;
        .top {
          height: 125px;
          background: #413c5a;
          border-radius: 8px 8px 0 0;
          display: flex;
          text-align:center;
          padding:20px 20px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            display: block;
            width: 42px;
            margin-bottom: 20px;
          }
          p {
            line-height:25px;
            color: #fff;
            font-weight: 200;
            font-size: 18px;
          }
        }
        .bottom {
          height: 40px;
          width: 100%;
          background: #ec2426;
          line-height: 40px;
          font-size: 16px;
          color: #fff;
          border-radius: 0 0 8px 8px;
          p {
            display: inline-block;
            text-align: center;
            width: 49%;
            cursor: pointer;
          }
          p:nth-child(2) {
            border-left: 1px solid #413c3c;
          }
        }
      }
    }
  }

  .appliy_Subordinate {
    .apply_list_content {
      .applyList_header {
        margin: 0 14px;
        height: 66px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 1.8em;
        padding-left: 10px;
        color: #696969;
        line-height: 85px;
        font-weight: 400;
        overflow: hidden;
        p {
          display: inline-block;
          width: auto;
          height: 68px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: #696969;
          line-height: 68px;
          span {
            cursor: pointer;
          }
        }
      }
      .applyList_content {
        input::-webkit-input-placeholder {
          width: 55px;
          height: 42px;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(170, 170, 170, 1);
          line-height: 42px;
          text-indent: 15px;
        }
        input:-ms-input-placeholder {
          width: 55px;
          height: 42px;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(170, 170, 170, 1);
          line-height: 42px;
          text-indent: 15px;
        }
        .content_header {
          margin-top: 15px;
          margin-bottom: 18px;
          line-height: 38px;
          div {
            display: inline-block;
          }
          .agency_typename {
            margin-left: 24px;
            margin-right: 11px;
            width: 64px;
            height: 17px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 25px;
          }
          .agency_type {
            .ivu-select-placeholder {
              width: 76px;
            }
          }
          margin-left: 25px;
          .agency_userName {
            width: 240px;
            height: 36px;
            input {
              height: 36px;
              font-size: 16px;
              background: rgba(113, 14, 31, 1);
              border: 1px solid #f5f5f5;
              border-radius: 10px;
              text-align: left;
              text-indent: 1em;
              -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
              color: #666;
              &:not(.other) {
                width: 240px;
                height: 38px;
                background: #fdfdfd;
              }
              .ivu-radio {
                font-size: 16px;
                color: #666;
              }
            }
            input:focus {
              outline: none !important;
              border: 1px solid rgba(254, 134, 93, 0.6);
              box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
                0 1px 10px 5px rgba(254, 134, 93, 0.14);
            }
          }
          .agency_search {
            margin-left: 21px;
            .searchBtn {
              width: 80px;
              height: 36px;
              border-radius: 5px;
              background: linear-gradient(180deg, #ff3492, #ff1e4f);
              color: #fff;
              line-height: 36px;
              text-align: center;
              display: inline-block;
              margin: 0 20px;
              font-size: 18px;
              cursor: pointer;
              span {
                line-height: 36px;
                width: 36px;
                height: 16px;
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
        .content_main {
          .ivu-table-body {
            height: 478px;
          }
          .listTable {
            .page {
              position: absolute;
              right: 20px;
              bottom: 35px;
            }
          }
        }
      }
      .toast {
        width: 280px;
        height: 165px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -140px;
        margin-top: -82.5px;
        z-index: 2019;
        .top {
          height: 125px;
          background: #413c5a;
          border-radius: 8px 8px 0 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            display: block;
            width: 42px;
            margin-bottom: 20px;
          }
          p {
            line-height:25px;
            color: #fff;
            font-weight: 200;
            font-size: 18px;
          }
        }
        .bottom {
          height: 40px;
          width: 100%;
          background: #ec2426;
          line-height: 40px;
          font-size: 16px;
          color: #fff;
          border-radius: 0 0 8px 8px;
          p {
            display: inline-block;
            text-align: center;
            width: 49%;
            cursor: pointer;
          }
          p:nth-child(2) {
            border-left: 1px solid #413c3c;
          }
        }
      }
    }
  }
  .apply_update {
    .applyList_header {
      margin: 0 14px;
      height: 66px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      p {
        width: auto;
        height: 68px;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #696969;
        line-height: 68px;
      }
    }
    .applyList_content {
      margin-top: 50px;
      .caipiaoContent,
      .caipiaodetails {
        position: relative;
        .bar {
          margin-top: 20px;
          padding-left: 30px;
          cursor: pointer;
          width: 30%;
          label {
            // width: 150px;
            cursor: pointer;
            padding-left: 5px;
            font-size: 15px;
            font-family: "Microsoft YaHei";
            vertical-align: middle;
            // background: linear-gradient(180deg, #fe8983, #f0b761);
            // color: #fff;
            // padding: 6.5px 8px;
            display: inline-block;
            height: 30px;
            width: 100px;
            line-height: 30px;
            text-align: center;
            border-radius: 10px 0 0 10px;
            // background: pink;
          }
          span {
            font-size: 15px;
            /* border: 1px solid #000; */
            /* display: inline-block; */
            display: inline-block;
            height: 30px;
            width: 90px;
            line-height: 30px;
            text-align: center;
            vertical-align: middle;
            margin-left: -3px;
            // background: #000;
            // color: #D7D7D7;
            margin-right: 10px;
            color: #666;
          }
          i {
            color: #bebebe;
            vertical-align: middle;
            font-size: 15px;
          }
        }
        .refundList {
          label {
            background: linear-gradient(180deg, #fe8983, #f0b761);
            color: #fff;
          }
          span {
            background: #f4f4f4;
          }
        }
        .setRefund {
          position: absolute;
          width: 230px;
          // height: 200px;
          top: 0px;
          left: 260px;
          border: 1px solid #f5f5f5;
          overflow: hidden;
          max-height: 275px;
          .setRefund-main {
            padding: 5px 10px;
            // height: auto;
            height: 275px;
            max-height: 275px;
            overflow: auto;
            width: 140%;
            padding-right: 30px;
            position: relative;
            // padding-top: 30px;
            .refund-row {
              margin-bottom: 10px;
              position: relative;
              span {
                font-size: 15px;
                display: inline-block;
                height: 30px;
                width: 90px;
                line-height: 30px;
                text-align: center;
                vertical-align: middle;
                margin-left: -3px;
                margin-right: 10px;
                color: #666;
              }
              .leftImg {
                position: absolute;
                top: -2px;
                left: 105px;
                cursor: pointer;
              }
              .rightImg {
                position: absolute;
                top: -2px;
                left: 160px;
                cursor: pointer;
              }
              label {
                vertical-align: middle;
                display: inline-block;
                font-size: 14px;
                display: inline-block;
                width: 100px;
                text-align: right;
              }
              .ivu-select {
                width: 98px;
              }
              .ivu-select-single .ivu-select-selection {
                height: 24px;
                border-radius: 5px;
              }
              .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
              .ivu-select-single
                .ivu-select-selection
                .ivu-select-selected-value {
                height: 24px;
                line-height: 24px;
              }
            }
          }
        }
      }
      .refundContent {
        position: absolute;
        right: -720px;
        width: 100%;
        top: 100px;
        .bar {
          margin-top: 20px;
          padding-left: 28px;
          cursor: pointer;
          width: 30%;
          label {
            // width: 150px;
            cursor: pointer;
            padding-left: 5px;
            font-size: 15px;
            font-family: "Microsoft YaHei";
            vertical-align: middle;
            // background: linear-gradient(180deg, #fe8983, #f0b761);
            // color: #fff;
            // padding: 6.5px 8px;
            display: inline-block;
            height: 30px;
            width: 100px;
            line-height: 30px;
            text-align: center;
            border-radius: 10px 0 0 10px;
            // background: pink;
          }
          span {
            font-size: 15px;
            /* border: 1px solid #000; */
            /* display: inline-block; */
            display: inline-block;
            height: 30px;
            width: 90px;
            line-height: 30px;
            text-align: center;
            vertical-align: middle;
            margin-left: -3px;
            // background: #000;
            // color: #D7D7D7;
            margin-right: 10px;
            color: #666;
          }
          i {
            color: #bebebe;
            vertical-align: middle;
            font-size: 15px;
          }
        }
        .refundList {
          label {
            background: linear-gradient(180deg, #fe8983, #f0b761);
            color: #fff;
          }
          span {
            background: #f4f4f4;
          }
        }
        .setRefund {
          position: absolute;
          width: 214px;
          // height: 200px;
          top: 20px;
          left: 288px;
          border: 1px solid #f5f5f5;
          overflow: hidden;
          max-height: 275px;
          .setRefund-main {
            padding: 5px 10px;
            // height: auto;
            height: 275px;
            max-height: 275px;
            overflow: auto;
            width: 140%;
            padding-right: 30px;
            position: relative;
            // padding-top: 30px;
            .refund-row {
              margin-bottom: 10px;
              position: relative;
              .leftImg {
                position: absolute;
                top: -2px;
                left: 105px;
                cursor: pointer;
              }
              .rightImg {
                position: absolute;
                top: -2px;
                left: 160px;
                cursor: pointer;
              }
              label {
                vertical-align: middle;
                display: inline-block;
                font-size: 14px;
                display: inline-block;
                width: 90px;
                text-align: right;
              }
              .ivu-select {
                width: 98px;
              }
              .ivu-select-single .ivu-select-selection {
                height: 24px;
                border-radius: 5px;
              }
              .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
              .ivu-select-single
                .ivu-select-selection
                .ivu-select-selected-value {
                height: 24px;
                line-height: 24px;
              }
            }
          }
        }
      }
    }
    .submitPay {
      height: 42px;
      position: absolute;
      bottom: 30px;
      display: inline-block;
      left: 50%;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 1.8em;
      margin: 12px auto;
      cursor: pointer;
      p {
        width: 140px;
        display: inline-block;
        background: linear-gradient(180deg, #ff3494, #ff1c4b);
        border-radius: 5px;
        cursor: pointer;
      }
      p:nth-child(2) {
        margin-left: 20px;
      }
    }
  }
}
</style>
