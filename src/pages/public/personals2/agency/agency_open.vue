<template>
  <div class="apply_open">
    <!-- 头部 -->
    <div class="header">
      <ul>
        <li>
          <span>下级开户</span>
        </li>
        <li class="aisle">
          <span :class="{spanActive:spanActive ==0}" @click="toggle(0)">精准开户</span>
        </li>
        <li class="aisle">
          <span :class="{spanActive:spanActive ==1}" @click="toggle(1)">生成邀请链接</span>
        </li>
        <li class="aisle">
          <span :class="{spanActive:spanActive ==2}" @click="toggle(2)">管理邀请链接</span>
        </li>
      </ul>
    </div>
    <!-- 精准开户 -->
    <div class="content" v-if="spanActive ==0">
      <!-- 开户类型 -->
      <div class="row">
        <label>开户类型</label>
        <div :class="{open_type:open_type ==1}" @click="tochangetype(1)">代理</div>
        <div :class="{open_type:open_type ==0}" @click="tochangetype(0)">会员</div>
        <div class="view_odds" @click="openodds()">
          <p>查看彩票返点赔率表</p>
        </div>
      </div>
      <!-- 用户名 -->
      <div class="row">
        <label>开户帐号</label>
        <input type="text" v-model="userName" placeholder="6-10位数字或字母" maxlength="10">
      </div>
      <!-- 默认密码 -->
      <div class="row">
        <label>默认密码</label>
        <input type="text" v-model="password" disabled>
      </div>
      <!-- 彩票返点 -->
      <div class="caipiaoContent">
        <h3>分润设置</h3>
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
        <div class="setRefund" style="top:26px">
          <div class="setRefund-main" @click="MaxRefund2">
            <div class="refund-row">
              <label>统一设置：</label>
              <img
                src="/static/public/image/userImg/jianshao.png"
                alt
                class="leftImg"
                @click="reduce2"
              >
              <img
                src="/static/public/image/userImg/zengjia.png"
                alt
                class="rightImg"
                @click="increase2"
              >
            </div>
            <div class="refund-row" v-for="(item,i) in caipiaoList" :key="i">
              <label style="width:106px">{{item.name}}：</label>
              <Select v-model="item.rebate" @on-change="MaxRefund2">
                <Option v-for="v in item.option" :value="v.value" :key="v.value">{{v.name}}</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <!-- 反水设置 -->
      <div class="refundContent" style="top:168px">
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
                @click="reduce"
              >
              <img
                src="/static/public/image/userImg/zengjia.png"
                alt
                class="rightImg"
                @click="increase"
              >
            </div>
            <div class="refund-row" v-for="(item,i) in setRefund" :key="i">
              <label>{{item.name}}：</label>
              <Select v-model="item.rebate" @on-change="MaxRefund1">
                <Option v-for="v in item.option" :value="v.value" :key="v.value">{{v.name}}</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div class="submitPay" @click="submitOpen">确认提交</div>
    </div>
    <!-- 生成邀请链接 -->
    <div class="content" v-if="spanActive ==1">
      <!--用户类型 -->
      <div class="row">
        <label>开户类型</label>

        <div :class="{open_type:open_type==1}" @click="tochangetype(1)">代理</div>
        <div :class="{open_type:open_type ==0}" @click="tochangetype(0)">会员</div>
        <div class="view_odds" @click="openodds()">
          <p>查看彩票返点赔率表</p>
        </div>
      </div>
      <!-- 返点 -->
      <div class="caipiaoContent">
        <h3>分润设置</h3>
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
        <div class="setRefund" style="top:26px">
          <div class="setRefund-main" @click="MaxRefund2">
            <div class="refund-row">
              <label>统一设置：</label>
              <img
                src="/static/public/image/userImg/jianshao.png"
                alt
                class="leftImg"
                @click="reduce2"
              >
              <img
                src="/static/public/image/userImg/zengjia.png"
                alt
                class="rightImg"
                @click="increase2"
              >
            </div>
            <div class="refund-row" v-for="(item,i) in caipiaoList" :key="i">
              <label  style="width:106px">{{item.name}}：</label>
              <Select v-model="item.rebate" @on-change="MaxRefund2">
                <Option v-for="v in item.option" :value="v.value" :key="v.value">{{v.name}}</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <!-- 反水设置 -->
      <div class="refundContent" style="top:67px">
        <div
          class="bar"
          v-for="(item,i) in refundData"
          :key="i"
          :class="{refundList:refundList ==i}"
          @click="toggleRefund(i,item.list,item.name)"
        >
          <label>{{item.name}}：</label>
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
                @click="reduce"
              >
              <img
                src="/static/public/image/userImg/zengjia.png"
                alt
                class="rightImg"
                @click="increase"
              >
            </div>
            <div class="refund-row" v-for="(item,i) in setRefund" :key="i">
              <label>{{item.name}}：</label>
              <Select v-model="item.rebate" @on-change="MaxRefund1">
                <Option v-for="v in item.option" :value="v.value" :key="v.value">{{v.name}}</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <!-- 点击确认按钮 -->
      <div class="submitPay" @click="domainAdd" style="bottom:-100px;">确认提交</div>
    </div>
    <!-- 创建管理链接-->
    <div class="content" v-if="spanActive ==2">
      <!--用户类型 -->
      <div class="row">
        <label>开户类型</label>

        <div :class="{open_type1:open_type1 ==2}" @click="changeUserType(2)">全部</div>
        <div :class="{open_type1:open_type1 ==1}" @click="changeUserType(1)">代理</div>
        <div :class="{open_type1:open_type1 ==0}" @click="changeUserType(0)">会员</div>
      </div>
      <!-- 表格 -->
      <div class="Management">
        <Table
          :columns="columns"
          :data="data"
          no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"
        >></Table>
        <Page class="page"  size="small" :current="i" :total="total" @on-change="hanlderPage" v-if="total>0" :page-size=8></Page>
      </div>
    </div>
    <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">{{toastText}}</div>
    <!--菜点返点赔率表  -->
    <div class="point_ball" v-if="pointBall">
      <div class="point_table">
        <div class="point_table_header">
          <p>彩票返点赔率表</p>
        </div>
        <!-- 关闭按钮 -->
        <div class="vp-admin-wrap-close" @click="close('big')">
          <div class="vp-admin-wrap-close-empty">
            <a></a>
          </div>
        </div>
        <div class="point_table_middle">
          <ul>
            <li>
              <el-cascader style="cursor: pointer;"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange"
                placeholder="请选择彩种和玩法"
              ></el-cascader>
            </li>
            <li style="margin-left:26px;margin-right:10px">
              <p style="font-size:14px">抽取点数</p>
            </li>
            <li>
              <input style="cursor: pointer;"
                type="number"
                step="0.1"
                name="points"
                min="0.1"
                max="100.0"
                placeholder="请输入彩种和游戏玩法"
                v-model="dot"
              >
            </li>
            <li style="margin-left:22px">
              <div class="computedBtn"  @click="getPlayway()">
                <span>计算赔率</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="point_table_footer">
          <div class="point_table_form">
            <Table
              :columns="columns2"
              :data="items"
              no-data-text="<div style='margin:100px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"
            >></Table>
            <Page class="page" :current="i" size="small" :total="total" @on-change="hanlderPage" v-if="total>0" :page-size="10"></Page>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情 -->
    <div class="point_details" v-if="pointDetails">
      <div class="point_table">
        <div class="point_table_header">
          <p>详情</p>
        </div>
        <!-- 关闭按钮 -->
        <div class="vp-admin-wrap-close" @click="close('small')">
          <div class="vp-admin-wrap-close-empty">
            <a></a>
          </div>
        </div>
        <div class="point_table_content">
          <!-- 彩票 -->
          <div class="caipiaodetails">
            <div
              class="bar"
              v-for="(item,i) in caipiaoDetailsList"
              :key="i"
              :class="{refundList:caipiaoNum ==i}"
              @click="toggleCaipiao(i,item.list,item.name)"
            >
              <label>{{item.name}}：</label>
              <span>{{item.active |fixed}}%</span>
              <i class="ivu-icon ivu-icon-chevron-right"></i>
            </div>
            <div class="setRefund" style="top:0x">
              <div class="setRefund-main" @click="MaxRefund2('caipiaoDetailsList')">
                <div class="refund-row">
                  <label>统一设置：</label>
                  <img src="/static/public/image/userImg/jianshao.png" alt class="leftImg">
                  <img src="/static/public/image/userImg/zengjia.png" alt class="rightImg">
                </div>
                <div class="refund-row" v-for="(item,i) in caipiaoList" :key="i">
                  <label  style="width:106px">{{item.name}}</label>
                  <span>{{item.value}}%</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 返水 -->
          <div class="refunddetails">
            <div
              class="bar"
              v-for="(item,i) in rebateDetailsList"
              :key="i"
              :class="{refundList:refundList ==i}"
              @click="toggleRefund(i,item.list,item.name)"
            >
              <label>{{item.name}}：</label>
              <span>{{item.active |fixed}}%</span>
              <i class="ivu-icon ivu-icon-chevron-right"></i>
            </div>
            <div class="setRefund">
              <div class="setRefund-main" @click="MaxRefund2('rebateDetailsList')">
                <div class="refund-row">
                  <label>统一设置：</label>
                  <img src="/static/public/image/userImg/jianshao.png" alt class="leftImg">
                  <img src="/static/public/image/userImg/zengjia.png" alt class="rightImg">
                </div>
                <div class="refund-row" v-for="(item,i) in setRefund" :key="i">
                  <label>{{item.name}}：</label>
                  <span>{{item.value}}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "./agency";
import issuesData from "./components/odds";
export default {
  mixins: [mixins],
  data() {
    return {
      spanActive: 0,
      // 精准开户用户名
      userName: "",
      pointBall: false,
      pointDetails: false,
      // 精准开户默认密码
      password: "12345678",
      param: {},
      member: [],
      // 返点的数组
      // 赔率计算
      options: issuesData,
      selectedOptions: [],
      // 用来区别每一组反水
      i: 1,
      total: 0,
      url: `${this.$HOST_NAME}/Agency/createMember`,
      //  提示
      toastShow: false,
      toastNum: 130,
      toastText: "",
      rebatedata: [],
      caipiaoNum: 0,
      caipiaoList: [],
      caipiaoName: "",
      data: [],
      columns: [
        {
          title: "邀请链接",
          key: "userName",
          align: "center",
          width: 270,
          render: (h, params) => {
            return h("div", [
              h("input", {
                attrs: {
                  type: "type",
                  value: params.row.domain,
                  disabled: "disabled"
                },
                style: {
                  border: "1px solid #dbdbdb",
                  height: "36px",
                  width: "210px",
                  borderRadius: "8px",
                  outline: "none",
                  paddingLeft: "10px",
                  fontSize: "14px",
                  color: "#999"
                }
              }),
              h(
                "span",
                {
                  style: {
                    marginLeft: "10px",
                    fontSize: "14px",
                    color: "#808080",
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.Copy(params.row.domain);
                    }
                  }
                },
                "复制"
              )
            ]);
          }
        },
        {
          title: "生成时间",
          key: "Deposit",
          align: "center",
          // width: 234,
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
          title: "状态",
          key: "created_at",
          align: "center",
          // width: 82,
          render: (h, params) => {
            return h("div", [
              h("span", params.row.status == "yes" ? "启用" : "禁用")
            ]);
          }
        },
        {
          title: "注册人数",
          key: "balance",
          align: "center",
          // width: 180,
          render: (h, params) => {
            return h("span", params.row.registeredtotal);
          }
        },
        {
          title: "操作",
          key: "preferential",
          align: "center",
          // width: 140,
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: {
                    marginRight: "4px",
                    cursor: "pointer",
                    color: "rgba(245,145,70,1)"
                  },
                  domProps: {
                    title: "查看详情"
                  },
                  on: {
                    click: () => {
                      this.pointDetails = true;
                      this.refund = this.set_refund2(params.row);

                    }
                  }
                },
                [h("span", "详情")]
              ),
              h("span", {
                style: {
                  display: "inline-block",
                  width: "1px",
                  height: "16px",
                  background: "rgba(219,219,219,1)",
                  verticalAlign: "middle",

                }
              }),
              h(
                "span",
                {
                  style: {
                    cursor: "pointer",
                    marginLeft: "4px",
                    color: "rgba(245,145,70,1)"
                  },
                  on: {
                    click: () => {
                      if (params.row.status == "yes") {
                        this.domainUp(params.row.id, "no");
                      } else {
                        this.domainUp(params.row.id, "yes");
                      }
                    }
                  }
                },
                [h("span", params.row.status == "yes" ? "禁用" : "启用")]
              )
            ]);
          }
        }
      ],
      columns2: [
        {
          title: "游戏玩法",
          key: "created_at",
          align: "center",
          width: 343,
          render: (h, params) => {
            return h("div", [h("span", params.row.code)]);
          }
        },
        {
          title: "下级点数",
          key: "userName",
          align: "center",
          width: 343,
          render: (h, params) => {
            return h("div", [h("span", this.dot + "%")]);
          }
        },
        {
          title: "下级赔率",
          key: "userName",
          align: "center",
          width: 346,
          render: (h, params) => {
            return h("div", [h("span", params.row.odds)]);
          }
        }
      ],
      open_type: 1,
      open_type1: 2,
      gameName: "香港六合彩",
      gamePay: "特码",
      dot: "",
      lid: 1,
      big: "特码",
      items: [],
      userType: 2
    };
  },
  methods: {
    // 代理和普通用户切换
    toggle(i) {
      this.spanActive = i;
      this.toastShow = false;
      if (i == 2) {
        this.query_open();
      }else{
        this.getRefundInfo()
      }
    },
    handleChange(value) {
      this.lid = value[0];
      this.big = value[1];
    },
    changeUserType(i) {
      this.open_type1 = i;
      this.userType = i;
      this.i = 1;
      this.query_open();
    },
    hanlderPage(i) {
      this.i = i;
      this.query_open();
    },
    close(count) {
      if(count=="small"){
        this.pointDetails = false;
      }else{
        this.pointBall = false;
      }
    },
    set_refund2(list) {
      let refund = JSON.parse(localStorage.refund);
      let rerundList = [];
      for (let key in refund) {
        let refundObj = {}
        refundObj.key = key
        rerundList.push(Object.assign(refundObj,refund[key]))
      }
      rerundList.forEach(element => {
        element.list.forEach(item => {
          item.value = list[item.key];
        });
      });
      this.caipiaoDetailsList = [];
      this.rebateDetailsList = [];
      rerundList.forEach((v, e) => {
        if (v.key == "lottery") {
          let kuaisan = [];
          let liuhecai = [];
          let pk10 = [];
          let dipancai = [];
          let kuaileshifen = [];
          let shishicai = [];
          let shiyixuanwu = [];
          let pcdandan = [];
          v.list.forEach((k, i) => {
            if (v.list[i].class_name == "快3") {
              kuaisan.push(v.list[i]);
            }
            if (v.list[i].class_name == "六合彩") {
              liuhecai.push(v.list[i]);
            }
            if (v.list[i].class_name == "PK10") {
              pk10.push(v.list[i]);
            }
            if (v.list[i].class_name == "低频彩") {
              dipancai.push(v.list[i]);
            }
            if (v.list[i].class_name == "快乐十分") {
              kuaileshifen.push(v.list[i]);
            }
            if (v.list[i].class_name == "时时彩") {
              shishicai.push(v.list[i]);
            }
            if (v.list[i].class_name == "11选5") {
              shiyixuanwu.push(v.list[i]);
            }
            if (v.list[i].class_name == "PC蛋蛋") {
              pcdandan.push(v.list[i]);
            }
          });
          this.caipiaoDetailsList.push(
            { name: "快三", list: kuaisan },
            { name: "六合彩", list: liuhecai },
            { name: "pk10", list: pk10 },
            { name: "低频彩", list: dipancai },
            { name: "快乐十分", list: kuaileshifen },
            { name: "时时彩", list: shishicai },
            { name: "11选5", list: shiyixuanwu },
            { name: "PC蛋蛋", list: pcdandan }
          );
          let list = this.caipiaoDetailsList;
           list.forEach(v => {
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
          this.caipiaoList = list[0].list;
          this.caipiaoName = list[0].name;
          this.MaxRefund2('caipiaoDetailsList');
        } else {
          this.rebateDetailsList.push(rerundList[e]);
          let list2 = this.rebateDetailsList;
          list2.forEach(v => {
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
          this.setRefund = list2[0].list;
          this.refundName = list2[0].name;
          this.MaxRefund2('rebateDetailsList');
          if(this.$websiteName=='t500w' || this.$websiteName =='jhcp' || this.$websiteName =='fczx'||this.$websiteName =="cjw"){
            this.rebateDetailsList= this.rebateDetailsList.filter(item =>item.key =="chess" || item.key=="ct_lottery");
          }
        }
      });
    },
    //切换管理邀请链接
    openodds() {
      this.pointBall = true;
    },
    domainUp(id, status) {
      this.$postS(`agency/domainUp`, { id: id, status: status }).then(res => {
        if (res.code == 200) {
          if (status == "yes") {
            this.$success("已启用成功");
          } else {
            this.$success("已禁用成功");
          }
          setTimeout(() => {
            this.i = this.i;
            this.query_open();
          }, 1000);
        }
      });
    },
    // 复制
    Copy(link) {
      this.$success("复制成功");
      this.$copyText(link);
    },
    // 改变类型
    tochangetype(i) {
      this.open_type = i;
      this.toastShow = false;
    },
    //计算赔率
    getPlayway() {
      if (!this.dot) return this.$success("请输入抽取下级点数");
      this.$postS("agency/getPlaywaySet", {
        lid: this.lid,
        dot: this.dot
      }).then(res => {
        if (res && res.code == 200) {
          res.data.forEach(element => {
            if (element.big == this.big) {
              this.items = element.items[0].code;
            }
          });
        }
      });;
    },
    //管理邀请链接
    query_open() {
      this.$store.commit("loading", true);
      if (this.open_type1 == 2) {
        this.$postS(`agency/domainList?page=${this.i}`, {
          pagesize: "8"
        }).then(res => {
          if (res.code == 200) {
            this.data = res.data.list.data;
            this.total = res.data.list.total;
            this.site_model = res.data.site_model;
            this.$store.commit("loading", false);
          } else {
            this.$store.commit("loading", false);
            this.$error(res.message);
          }
        });
      } else {
        this.$postS(`agency/domainList?page=${this.i}`, {
          pagesize: "8",
          is_agency: this.open_type1
        }).then(res => {
          if (res.code == 200) {
            this.data = res.data.list.data;
            this.total = res.data.list.total;
            this.$store.commit("loading", false);
          } else {
            this.$store.commit("loading", false);
            this.$error(res.message);
          }
        });
      }
    },
    //提交按钮
    submitOpen() {
      let rebateData = JSON.parse(localStorage.refund);
      this.rebatedata.forEach(v => {
        v.list.forEach(a => {
          rebateData[a.id] = a.rebate;
        });
      });
      this.param.rebate = JSON.stringify(rebateData);
      if (this.spanActive == 0) {
        this.param.account_name = this.userName.toString();
        this.param.account_password = this.password.toString();
        this.param.account_type = this.open_type.toString();
        let userNameReg = /^[0-9A-Za-z]{6,10}$/;
        let ifUserName = userNameReg.test(this.param.account_name);
        if (!this.param.account_name || ifUserName == false) {
          this.toastText = "请输入6-10位帐号";
          (this.toastNum = 130), (this.toastShow = true);
          return false;
        }
      } else {
        this.url = `${this.$HOST_NAME}/Agency/createDomain`;
      }
      this.toastShow = false;
      this.param.json_value = this.productJsonParams().toString();
      this.$postS(`member/create-account`, {
        account_name: this.param.account_name,
        account_password: this.param.account_password,
        json_value: this.param.json_value,
        account_type: this.param.account_type
      }).then(res => {
        if (res.code == 200) {
          this.$success(res.data);
          this.param = {};
          this.userName = "";
        } else {
          this.$error(res.message);
        }
      });
    },
    domainAdd() {
      let params = {};
      params.type = this.open_type;
      params.json_value = this.productJsonParams();
      this.$postS(`agency/domainAdd`, params).then(res => {
        if (res && res.code == 200) {
          this.$success("添加成功");
        }
      });
    },
    //彩票切换
    toggleCaipiao(i, list, name) {
      this.caipiaoNum = i;
      this.caipiaoList = list;
      this.caipiaoName = name;
    },

    MaxRefund2(list) {
      if(list =="caipiaoDetailsList"){
          this.caipiaoDetailsList.forEach((v, i) => {
            v.active = +v.active;
            let max = 0;
            v.list.forEach(item => {
              if (item.rebate > max) max = item.rebate;
            });
            if (max == 0) {
              v.active = "0.0";
            } else {
              v.active = max;
            }
          });
      }else if(list=="rebateDetailsList"){
          this.rebateDetailsList.forEach((v, i) => {
            v.active = +v.active;
            let max = 0;
            v.list.forEach(item => {
              if (item.rebate > max) max = item.rebate;
            });
            if (max == 0) {
              v.active = "0.0";
            } else {
              v.active = max;
            }
          });
      }else{
        this.rebatedata.forEach((v, i) => {
          v.active = +v.active;
          let max = 0;
          v.list.forEach(item => {
            if (item.rebate > max) max = item.rebate;
          });
          if (max == 0) {
            v.active = "0.0";
          } else {
            v.active = max;
          }
        });
      }
    },
  },
  created() {
    this.$nextTick(() => {
      this.getRefundInfo();
      this.query_open();
      let site_model = JSON.parse(localStorage.config).site_model;
      let item = {
        title: "邀请码",
        key: "agencyCode",
        align: "center",
        // width: 117,
        render: (h, params) => {
          return h("div", [
            h("input", {
              attrs: {
                type: "type",
                value: params.row.agencyCode,
                disabled: "disabled"
              },
              style: {
                border: "1px solid #dbdbdb",
                height: "36px",
                width: "67px",
                borderRadius: "8px",
                outline: "none",
                paddingLeft: "10px",
                fontSize: "14px",
                color: "#999"
              }
            }),
            h(
                "span",
                {
                  style: {
                    marginLeft: "10px",
                    fontSize: "14px",
                    color: "#808080",
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.Copy(params.row.agencyCode);
                    }
                  }
                },
                "复制"
              )
            ]);
          }
      }
      if (site_model=="invite_code"){
        this.columns.splice(1,0,item)
      }
    });
  },
  mounted() {
    this.MaxRefund2();
  }
};
</script>
<style lang="less">
.peronsals .point_table_footer .ivu-table-body {
  height: 400px !important;
}
@input: {
  width: 135px;
  height: 42px;
  font-size: 16px;
  background: rgba(113, 14, 31, 1);
  border: 0 solid #f5f5f5;
  border-radius: 10px;
  // padding: 0 16px;
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
};
@inputFouce: {
  outline: none !important;
  border: 1px solid rgba(254, 134, 93, 0.6);
  box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
    0 1px 10px 5px rgba(254, 134, 93, 0.14);
};
@inputPlaceholder: {
  width: 55px;
  height: 42px;
  font-size: 14px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(170, 170, 170, 1);
  line-height: 42px;
  text-indent: 15px;
};
@caipiaoContent: {
  height: 348px;
  h3 {
    width: 67px;
    height: 15px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 15px;
    margin-left: 28px;
    margin-bottom: 6px;
    margin-top: 10px;
  }
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
      display: inline-block;
      height: 30px;
      width: 100px;
      line-height: 30px;
      text-align: center;
      border-radius: 10px 0 0 10px;
    }
    span {
      font-size: 15px;
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
    top: 0px;
    left: 270px;
    border: 1px solid #f5f5f5;
    overflow: hidden;
    max-height: 275px;
    .setRefund-main {
      padding: 5px 10px;
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
          // background: #000;
          // color: #D7D7D7;
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
        .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
          height: 24px;
          line-height: 24px;
        }
      }
    }
  }
};
@vp-admin-wrap-close: {
  position: absolute;
  z-index: 999999;
  top: 12px;
  right: 0px;
  cursor: pointer;
  width: 60px;
  height: 40px;
  background: #f2f2f2;
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
  &:hover {
    background: linear-gradient(180deg, #ff3492, #ff1e4f);
  }
  .vp-admin-wrap-close-empty {
    position: relative;
    background: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 56px;
    left: 2px;
    top: 2px;
    -moz-transition: all 0.5s ease-in;
    -webkit-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    a {
      position: absolute;
      top: 9px;
      left: 9px;
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url("/static/public/image/common/vp-common-close.png") #fff;
      background-size: 98% 98%;
      // transform: rotate(0deg);
    }
    &:hover {
      transform: translateX(40%);

    }
  }
};
@page: {
  position: absolute;
  right: 20px;
  bottom: 100px;
};
@setrefund: {
  position: absolute;
  width: 214px;
  top: 20px;
  left: 288px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  max-height: 275px;
  .setRefund-main {
    padding: 5px 10px;
    height: 275px;
    max-height: 275px;
    overflow: auto;
    width: 140%;
    padding-right: 30px;
    position: relative;
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
      .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
        height: 24px;
        line-height: 24px;
      }
    }
  }
};
@point_header: {
  width: 1021px;
  height: 68px;
  padding: 0 25px;
  border-bottom: 1px solid;
  border-color: rgba(219, 219, 219, 1);
  p {
    width: 132px;
    height: 19px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 68px;
  }
};
@refundContent: {
  position: absolute;
  right: -500px;
  top: 88px;
  width: 100%;
  .bar {
    margin-top: 20px;
    padding-left: 28px;
    cursor: pointer;
    width: 30%;
    label {
      cursor: pointer;
      padding-left: 5px;
      font-size: 15px;
      font-family: "Microsoft YaHei";
      vertical-align: middle;
      display: inline-block;
      height: 30px;
      width: 100px;
      line-height: 30px;
      text-align: center;
      border-radius: 10px 0 0 10px;
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
    @setrefund();
  }
};
.ivu-table {
  .ivu-table-body .ivu-table-overflowX {
    height: 400px !important;
  }
}
.peronsals .setRefund .ivu-select-dropdown-list {
  max-height: 160px;
}
.apply_open {
  .header {
    border-bottom: 1px solid #f3f3f3;
    height: 66px;
    line-height: 66px;
    margin-left: 28px;
    ul {
      line-height: 66px;
      overflow: hidden;
      padding: 15px 0;
      li {
        padding: 0 20px;
        font-size: 1.8em;
        height: 40px;
        float: left;
        line-height: 40px;
        text-align: center;
      }
      li:nth-child(1) {
        padding: 0;
        height: 40px;
        line-height: 40px;
        span {
          line-height: 28px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          display: inline-block;
          padding-right: 14px;
          height: 28px;
          border-right: 1px solid #dbdbdb;
          font-weight: 400;
          color: #696969;
        }
      }
      .aisle {
        border: none;
        font-size: 1.6em;
        font-weight: 200;
        padding-left: 14px;
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
  .content {
     position: relative;
    .row {
      label {
        width: 67px;
        height: 16px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 52px;
        margin-right: 15px;
        margin-left: 28px;
      }
      div {
        width: 64px;
        height: 32px;
        line-height: 30px;
        border: 1px solid rgba(153, 153, 153, 1);
        border-radius: 5px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
      div:nth-child(3),
      div:nth-child(4) {
        margin-left: 31px;
      }
      .open_type,
      .open_type1 {
        width: 64px;
        height: 32px;
        line-height: 30px;
        border: 1px solid rgba(255, 145, 70, 1);
        background: linear-gradient(
          0deg,
          rgba(255, 134, 134, 1),
          rgba(238, 188, 93, 1)
        );
        border-radius: 5px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        font-family: MicrosoftYaHei;
        color: white;
        display: inline-block;
      }
      .oneSet {
        background: rgb(255, 123, 0);
        color: #fff;
        border-radius: 8px;
        padding: 6px 90px;
        cursor: pointer;
      }
      input {
        height: 36px;
        font-size: 16px;
        background: rgba(113, 14, 31, 1);
        border: 0 solid #f5f5f5;
        border-radius: 10px;
        // padding: 0 16px;
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
      input::-webkit-input-placeholder {
        @inputPlaceholder();
      }
      input:focus {
        outline: none !important;
        border: 1px solid rgba(254, 134, 93, 0.6);
        box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
          0 1px 10px 5px rgba(254, 134, 93, 0.14);
      }
      .ivu-select {
        width: 240px;
        .ivu-select-dropdown-list {
          max-height: 160px;
        }
      }
      span {
        font-size: 14.25px;
        vertical-align: middle;
      }
      .ivu-radio-group {
        margin-left: 30px;
      }
      .radio-span {
        font-size: 1.2em;
        font-weight: 200;
        color: #999;
      }
    }
    .row:nth-child(1) {
      cursor: pointer;
      position: relative;
      .view_odds {
        position: absolute;
        top: 0;
        right: 28px;
        width: 151px;
        height: 52px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        border: 0;
        color: rgba(255, 145, 70, 1);
        line-height: 52px;
      }
    }
    .page {
      @page();
    }
    .caipiaoContent {
      height: 348px;
      position: relative;
      .bar {
        margin-top: 7px !important;
      }
      @caipiaoContent();
    }
    .refundContent {
      @refundContent();
    }
    .submitPay {
      width: 140px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 1.8em;
      background: linear-gradient(180deg, #ff3494, #ff1c4b);
      border-radius: 5px;
      margin: 12px auto;
      cursor: pointer;
    }
  }
  .toast {
    width: 200px;
    height: 30px;
    line-height: 30px;
    background: #ff9900;
    color: #fff;
    font-size: 14px;
    font-weight: 200;
    position: absolute;
    right: 400px;
    top: 30px;
    border-radius: 5px;
    z-index: 99;
    text-indent: 1em;
  }
  .toast::after {
    content: "";
    width: 0;
    height: 0;
    border-width: 4px 8px 4px 0px;
    border-style: solid;
    border-color: transparent #f90 transparent transparent;
    display: block;
    position: absolute;
    top: 10px;
    left: -8px;
  }
  .point_ball {
    width: 1270px;
    height: 650px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    left: 0;
    top: 0;
    z-index: 999999;
    position: absolute;
    .point_table {
      overflow: hidden;
      width: 1021px;
      height: 576px;
      background: rgba(255, 255, 255, 1);
      border-radius: 15px;
      z-index: 9999999;
      opacity: 1;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      .point_table_header {
        @point_header();
      }
      .vp-admin-wrap-close {
        @vp-admin-wrap-close();
      }
      .point_table_middle {
        margin: 23px 0;
        padding: 0 23px;
        height: 42px;
        line-height: 42px;
        ul {
          overflow: hidden;
          li {
            float: left;
            height: 42px;
            .computedBtn {
              text-align: center;
              width: 106px;
              height: 36px;
              cursor: pointer;
              background: linear-gradient(
                0deg,
                rgba(255, 134, 134, 1),
                rgba(253, 64, 64, 1)
              );
              border-radius: 5px;
              vertical-align: middle;
              margin-top: 3px;
              span {
                width: 64px;
                height: 16px;
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 25px;
              }
            }
            input {
              @input();
            }
            input:focus {
              @inputFouce();
            }
            input::-webkit-input-placeholder {
              @inputPlaceholder();
            }
            li:nth-child(1) {
              width: 240px;
              input {
                height: 42px;
              }
            }
            li:nth-child(2) {
              width: 56px;
              height: 36px;
              margin-left: 26px;
              p {
                width: 56px;
                height: 42px;
                font-size: 14px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                line-height: 42px;
                color: rgba(51, 51, 51, 1);
              }
            }
            li:nth-child(3) {
              margin-left: 10px;
              margin-right: 22px;
              overflow: hidden;
              input {
                height: 42px;
              }
            }
            li:nth-child(4) {
              vertical-align: middle;
            }
          }
        }
        .point_table_footer {
          .peronsals .ivu-table-body {
            height: 400px !important;
          }
        }
      }
    }
  }
  .point_details {
    width: 1270px;
    height: 650px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    left: 0;
    top: 0;
    z-index: 999999;
    position: absolute;
    .point_table {
      overflow: hidden;
      width: 1021px;
      height: 576px;
      background: rgba(255, 255, 255, 1);
      border-radius: 15px;
      z-index: 9999999;
      opacity: 1;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      .point_table_header {
        @point_header();
      }
      .vp-admin-wrap-close {
        @vp-admin-wrap-close();
      }
    }
    .point_table_content {
      .caipiaodetails {
        position: relative;
        top: 20px;
        @caipiaoContent();
      }
      .refunddetails {
        @refundContent();
        top: 88px;
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
      }
    }
  }
}
</style>
