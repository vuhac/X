<template>
  <div class="container activity" id="ActivityBox">

    <div class="bannerHead">
      <ul class="bannerUl">
        <li @click="fetchActive(item.id)" :class="{activeItem:activeId === item.id}"
            v-for="(item,index) in headerList" :key="index">
          <!--                  v-for="(item,index) in headerList" :key="index" :style="{width:1000/headerList.length+'px'}">-->
          <div class="liItem">
            <a href="javascript:void(0)">
              <span>{{item.activity_cate_name}}</span>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="showList.length>0">
      <div v-for="(item,index) in showList" :key="index" ref="active-item">
        <!-- 链接活动 -->
        <div class="floor fix" v-if="item.activity_type=='url_activity'" @click="goUrl(item)">
          <div class="showDetail fix">
            <img :src="item.image.pc" v-if="item.image.pc" alt class="ImgLI floorTitleImg defaultImg">
            <div class="floorRright">
              <h2>{{item.title}}</h2>
              <p>{{item.child_title}}</p>
              <a href="javascript:;">查看详情
                <i></i>
              </a>
            </div>
          </div>
          <div id="detail_idcaijin" class="floorDetail floorHide">
            <div id="content_caijin">
              <div class="content_bg"></div>
            </div>
          </div>

        </div>

        <!-- 此处是点击显隐的效果 -->

        <div class="floor fix" v-else-if="item.activity_type=='normal_activity'" @click="bindOpen(item, index)">
          <div class="showDetail fix">
            <img :src="item.image.pc" v-if="item.image.pc" alt class="ImgLI floorTitleImg defaultImg">
            <div class="floorRright">
              <h2>{{item.title}}</h2>
              <p>{{item.child_title}}</p>
              <a href="javascript:;">查看详情
                <i></i>
              </a>
            </div>
          </div>
          <div class="floorDetail" v-show="targetId===item.id" :id="'img_'+item.image.pc">
            <div v-if="item.desc_type=='pic'">
              <img :src="typeof item.description === 'object' && item.description.pc"
                   alt="加载失败">
            </div>
            <div class="content_bg" v-else-if="typeof item.description === 'object' && item.description.pc">
              <div v-html="item.description.pc"></div>
            </div>
          </div>
        </div>
        <div class="floorLine"></div>
      </div>
    </div>
    <div v-else>
      <p style='text-align:center;'>"暂无活动，敬请期待！"</p>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  data () {
    return {
      targetId: '',
      activeName: '',
      timer: null,
      ifmodel: false,
      activeId: -1,
      activitylist: [],
      showList: [],
      headerList: [
        {
          activity_cate_name: '全部',
          id: -1
        }
      ]
    }
  },
  methods: {
    // 获取活动分类、
    async getActiveCate () {
      let res = await this.$http.get(`${this.$HOST_NAME}/site/getActivityCateList?client_type=PC`)
      console.log(res)
      if (res && res.code == 200) {
        // 获取数据成功
        res.data && res.data.forEach((item, index) => {
          this.headerList.push(item)
        })
      }
      console.log(this.headerList)
    },

    // 2019.04.25获取数据,假设获取到所有的活动数据
    async getActivety () {
      // /site/getActivityCateList
      let res = await this.$http.post(`${this.$HOST_NAME}/site/getActivityList`, {
        // type: 'popups',
        // // desc_client_type: 'html'
        client_type: 'PC'

      })
      console.log(res)
      if (res && res.code === 200) {
        // 过滤掉停用的活动
        console.log(res)
        this.activitylist = res.data && res.data.filter((item, index) => {
          if (item.status === 'yes') {
            if (item.description) {
              try {
                item.description = JSON.parse(item.description)
              } catch (e) {
                item.description = null
              }
            }
            if (item.image) {
              try {
                item.image = JSON.parse(item.image)
              } catch (e) {
                item.image = null
              }
            }
            if (item.url_link) {
              try {
                item.url_link = JSON.parse(item.url_link)
              } catch (e) {
                item.url_link = null
              }
            }
            return item
          }
        })
      }
      this.showList = this.activitylist
      console.log(this.activitylist)
    },
    // 切换活动
    fetchActive (activeId) {
      this.activeId = activeId
      if (activeId === -1) {
        this.showList = this.activitylist
      } else {
        console.log(activeId)
        this.showList = this.activitylist.filter((item, index) => {
          console.log(item)
          if (item.activity_cate_id === activeId) {
            return item
          }
        })
        console.log(this.showList)
      }
    },

    bindOpen (item, index) {
      if (item.activity_status === 0) {
        this.ifmodel = true
        return false
      } else {
        this.targetId === item.id ? this.targetId = '' : this.targetId = item.id
        // document.documentElement.scrollTop = 0
        // document.documentElement.scrollTop = document.body.scrollTop = 0
        if (this.targetId) {
          // document.documentElement.scrollTo(0, this.$refs['active-item'][index].offsetTop)
          this.$nextTick(() => {
            document.documentElement.scrollTop = document.body.scrollTop = this.$refs['active-item'][index].offsetTop
          })
        }
      }
    },
    goUrl (item) {
      if (item.activity_status === 0) {
        this.ifmodel = true
        return false
      }

      let url = item.url_link && item.url_link.pc
      if (url) {
        // 存在url,要跳转
        console.log(url)
        window.open(url, '_blank')
      } else {
        console.log('没有链接')
        window.open('/', '_blank')
        //  window.open(`/static/jltx/html/active/${link}`,"_blank")
      }
    },
    close_messageAlert () {
      this.ifmodel = false
    }

  },
  created: function () {
    this.getActiveCate()
    // 获取数据
    this.getActivety()
    // this.$nextTick(()=>{
    //   this.bindOpen();
    // })
  },
  mounted () {

  },
  watch: {},
  components: {}
}
</script>

<style lang="less" scoped>
  /*导航*/
  .bannerHead {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    /*padding: 0 50px;*/
    background-color: #ffffff;

    .bannerUl {
      width: 100%;
      height: 100%;
      /*border-bottom: 1px solid #dbdbbd;*/
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*align-items: center;*/

      li {
        float: left;
        text-align: left;
        height: 100%;
        min-width: 100px;
        // background: yellow;
        /*background-color: #0d0d18;*/
        line-height: 60px;
        /*text-align: center;*/
        // border-right:1px solid #666;
        box-sizing: border-box;
        color: #696969;
        font-size: 18px;

        .liItem {
          display: inline-block;
          text-align: center;

          a {
            color: #f13131;
          }

          i {
            width: 30px;
            height: 80px;
            // display: inline-block;
            float: left;
            // background-color: green;
          }

          span {
            float: right;
          }
        }

        &:first-child {
          text-align: left;
          margin-left: 15px;
        }

        &:last-child {
          text-align: left;
        }
      }

      li.activeItem {
        // background-color: green;
        /*background-color: #4e0606;*/
        color: #e0ab63;

        a {
          color: #ffb102;
        }
      }

      li:last-child {
        border: 0;
      }
    }
  }

  /*弹窗*/
  /deep/ .ivu-modal-mask {
    z-index: 2000;
  }

  /deep/ .ivu-modal-wrap {
    z-index: 2000;
  }

  /deep/ .ivu-modal-close {
    right: 0;
  }

  /deep/ .ivu-modal-footer {
    border-top: none;
    display: none;
  }

  /deep/ .ivu-modal {
    top: 50%;
    margin-top: -159px;
    height: 318px;
  }

  /deep/ .ivu-modal-header {
    border-bottom: none;
    padding: 0;
  }

  /deep/ .ivu-modal-close .ivu-icon-ios-close-empty {
    display: none;
  }

  /deep/ .ivu-modal-body {
    padding: 0;
  }

  /deep/ .ivu-modal-close {
    top: 3px;
  }

  .headerp {
    text-align: center;
    margin-top: 20px;
  }

  .tishi {
    height: 43px;
    line-height: 43px;
    font-size: 18px;
    color: 565656;
    background-color: #e5e5e5;
    border-radius: 6px 6px 0 0;

    span {
      margin-left: 30px;
    }
  }

  .agent-con {
    position: relative;
    height: 157px;

  }

  .icon-baojing {
    font-size: 45px;
    color: #f90;
  }

  .iconspan {
    margin-left: 82px;
    height: 45px;
    line-height: 45px;
    display: block;
    font-size: 16px;
    position: relative;
    margin-top: 40px;

    .tispan {
      margin-left: 10px;
      position: absolute;
      font-size: 26px;
      color: #1f1f1f;
    }
  }

  .pay {
    display: block;
    position: absolute;
    width: 160px;
    height: 35px;
    background: linear-gradient(180deg, #ff3492, #ff1e4f);
    text-align: center;
    line-height: 35px;
    color: #fff;
    font-size: 18px;
    left: 130px;
    top: 80px;
    border-radius: 10px;
  }

  .vp-admin-wrap-close {
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
        // &::before{
        //   color: #fff;
        // }
      }
    }
  }

  .red {
    color: #ff0000;
  }

  /deep/ .content_bg {
    width: 100%;
    margin: 12px 0;
    padding: 25px 40px 0;
    background-color: #f3f3f3;

    .con_title {
      background: #de1644;
      border-radius: 25px;
      padding: 10px 20px;
      margin: 20px 0;
      font-size: 22px;
      color: #fff;
      display: inline-block;
    }

    p {
      font-size: 16px;
    }

    .logo {
      width: 250px;
      height: 85px;
      background: url("/static/csdf/img/logo.png") no-repeat;
      background-size: contain;
      margin: 10px auto;
    }

    table {
      text-align: center;
      table-layout: fixed;
      border-spacing: 0;
      border-collapse: collapse;
      width: 100%;
      margin: 10px 0;
      color: #000;

      tbody .firstRow {
        background-color: #d91a42;
        color: #ffffff;
      }

      th {
        border: 1px solid #e6e6e6;
        height: 40px;
        font-size: 14px;
        background-color: #4393be;
        color: #fff;
        font-weight: 100;
        vertical-align: middle;
      }

      td {
        border: 1px solid #000000;
        height: 40px;
        font-size: 14px;
        vertical-align: middle;
      }
    }

  }

  body {
    background: #e6e6e6 !important;
  }

  .container {
    width: 1000px;
    margin: 0 auto;
  }

  .activity {
    background: #e6e6e6;
    box-sizing: border-box;
    color: #666;
    font: 12px/2em Microsoft YaHei, SimSun, Arial;

    .show a i {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }

  .floor {
    background: #fff;
    box-shadow: 0 4px 8px #c7c7c7;
    padding: 15px;
  }

  .show {
    display: block;
  }

  .floorLine {
    background: url("/static/csdf/img/youhui/activityShaw.7aa4879.png") no-repeat;
    width: 100%;
    height: 15px;
    padding: 0 3px;
    margin-left: -3px;
  }

  .fix:before {
    content: "";
    display: table;
  }

  .fix:after {
    clear: both;
    overflow: hidden;
    content: "";
    display: table;
    outline: none;
  }

  /*.activity .floor:first-child {*/
  /*  margin-top: 15px;*/
  /*}*/

  .showDetail {
    cursor: pointer;
  }

  .floor .floorTitleImg {
    float: left;
    width: 680px;
    height: 170px;
  }

  .floor .floorRright {
    float: left;
    width: 290px;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .floor .floorRright h2 {
    font-size: 28px;
    font-weight: 100;
    margin: 0;
    color: #e4393c;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }

  .floor .floorRright p {
    font-size: 14px;
    padding: 12px 0;
    height: 72px;
    word-break: break-all;
  }

  .floor .floorRright a {
    font-size: 18px;
    display: block;
    line-height: 40px;
    width: 120px;
    background: #e4393c;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    padding-right: 18px;
    box-sizing: border-box;
  }

  .floor .floorRright a i {
    position: absolute;
    margin-top: 15px;
    margin-left: 8px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #f09394;
    transition: 0.1s;
  }

  .floorDetail {
    margin-top: 15px !important;
    border-top: 2px dashed #e6e6e6;
    overflow: hidden;
    width: 970px !important;
    clear: both;
    word-break: break-all;
    overflow-x: auto;

    i {
      color: #f76727;
      font-size: 14px;
    }

    h3 {
      display: block;
      background: #d2dbe0;
      width: 84px;
      text-align: center;
      line-height: 28px;
      font-size: 14px;
      margin-top: 30px;
      margin-bottom: 14px;

      i {
        display: inline-block;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-left: 10px solid #d2dbe0;
        position: absolute;
        margin-left: 14px;
      }
    }

    em {
      margin-right: 15px;
      font-size: 14px;
    }

    .disable {
      background: #d6d6d6;
      color: #999;
    }

    a {
      font-size: 16px;
      color: #fff;
      background: #e4393c;
      border-radius: 4px;
      padding: 7px 18px;
    }
  }

  .tbplus {
    position: relative;
    width: 145px;

    i {
      position: absolute;
      left: 12px;
      bottom: 3px;
      color: #fff;
    }

    ins {
      border-bottom: 1px solid #7fbbdc;
      position: absolute;
      width: 147px;
      -webkit-transform: rotate(15.2deg);
      transform: rotate(15.2deg);
      left: -1px;
      top: 19px;
    }

    em {
      position: absolute;
      right: -10px;
      top: -2px;
      font-size: 14px;
    }
  }

  .floorHide {
    display: none;
  }

  .defaultImg {
    background: url('https://static16.7875222.com/201905/IMG16118_166F_BB5D_222A.png') 50% no-repeat !important;
    background-size: cover;
    background-color: #f3f3f3 !important;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  ins {
    text-decoration: none;
    margin: 0 4px;
  }
</style>
