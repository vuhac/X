<template>
     <div class="people">
        <div class="people-content">
            <div class="header" @click="relpeople"> 
                 下级人数
            </div>
            <div class="radio">
                  <RadioGroup v-model="day" @on-change="hanlderRadio">
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
            <Table :columns="column" :data="data"
                    no-data-text="<div style='margin:30px 0;'><img src='/static/public/image/userImg/no-data.png' alt=''></div>"></Table>
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
        </div>
     </div>
</template>
<script>
export default {
  data() {
    return {
      day: "1",
      data: [],
      isSelect: 1,
      pagesize: 9,
      ispage: false,
      page: 0,
      column: [
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
          title: "总人数",
          key: "count",
          align: "center"
        },
        {
          title: "新增用户",
          key: "newuser",
          align: "center"
        },
        {
          title: "存款人数",
          key: "deposituser",
          align: "center"
        },
        {
          title: "存款金额",
          key: "deposit",
          align: "center",
          render: (h, params) => {
            return h("span", (params.row.deposit * 1).toFixed(2));
          }
        }
      ]
    };
  },
  methods: {
    getpeople() {
      this.$store.commit("loading", true);
      this.$postS(`agency/lowerPeople`, {
        date: this.day
      }).then(res => {
        if (res.code == 200 && res.data.length!=0) {
            this.total = res.data.length;
            this.page = Math.ceil(this.total / this.pagesize);
            this.ispage = true;
            this.getPageCurData(res.data, this.pagesize, this.isSelect)
            this.$store.commit("loading", false);
        } else if (res.code == 200 && res.data.length==0) {
          this.$error('您没有下级代理');
          this.$store.commit("loading", false);
        } else {
          this.$store.commit("loading", false);
        }
      });
    },
    hanlderRadio(val) {
      this.day = val;
      this.getpeople();
    },
    relpeople(){
      this.day='1'
      this.getpeople()
    },
    slect(val) {
      this.isSelect = val;
      this.getpeople();
    },
    prev() {
      this.isSelect = this.isSelect - 1;
      if (this.isSelect <= 1) {
        this.isSelect = 1;
      }
      this.getpeople();
    },
    next() {
      this.isSelect = this.isSelect + 1;
      if (this.isSelect >= this.page) {
        this.isSelect = this.page;
      }
      this.getpeople();
    },
    //分页 获取对应的页码的数据
     getPageCurData(date, PageSize, PageNo) {
      this.data=[];
      for(let i = 0; i < PageSize; i++) {
         let idx = PageSize * PageNo - PageSize + i; 
      if(idx < date.length) this.data.push(date[idx]); 
      }
         return this.data;
     }
  },
  created() {
    this.getpeople();
  }
};
</script>
<style lang="less" scoped>
.people {
  .people-content {
    position: relative;
    height: 650px;
    overflow: hidden;
    .header {
      font-size: 18px;
      margin: 0 14px;
      height: 66px;
      border-bottom: 1px solid #f3f3f3;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
      cursor: pointer;
    }
    .radio {
      line-height: 60px;
      padding-left: 26px;
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
}
</style>

