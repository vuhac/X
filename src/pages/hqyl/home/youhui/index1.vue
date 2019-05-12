<template>
  <div class="maincontainer" style="background:#000;">
    <div class="main">
      <div class="content">
        <div
          style="width: 100%; height: 298px; background-image: url('/static/hqyl/img/banner/banner_active.jpg')"></div>
        <div style="width: 1100px; margin: 0 auto;">
          <div class="bannerHead">
            <ul class="bannerUl">
              <li @click="fetchActive(item.id)" :class="{activeItem:activeId==item.id}"
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
          <div style="padding: 20px 50px; background-color: #0d0d18">

            <div v-if="showList.length>0">
              <template v-for="(item,index) in showList">
                <!-- 链接活动 -->
                <div :key="index" v-if="item.activity_type=='url_activity'" style="margin-bottom: 10px;">
                  <a class="menuHead" style="margin-bottom: 10px;" :id="item.image.pc" href="javascript:void(0)"
                     @click="goUrl(item)">
                     <img :src="item.image.pc" v-if="item.image.pc"/>
                  </a>
                  <div class="Content_box" style="display: none;" :id="'img_'+item.image.pc">
                  </div>
                </div>
                <!-- 此处是点击显隐的效果 -->
                <div :key="index" v-else-if="item.activity_type=='normal_activity'" style="margin-bottom: 10px;">
                  <a class="menuHead" style="margin-bottom: 10px;" :id="item.image.pc" href="javascript:void(0)"
                     @click="bindOpen(item)"><img :src="item.image.pc"/>
                  </a>

                  <div class="Content_box" v-show="targetId===item.id" :id="'img_'+item.image.pc">
                    <div class="promotContent">

                      <img :src="typeof item.description === 'object' && item.description.pc"
                           alt="加载失败" v-if="item.desc_type=='pic'">

                      <div v-else-if="typeof item.description === 'object' && item.description.pc"
                           v-html="item.description.pc"></div>
                    </div>
                  </div>
                </div>

              </template>
            </div>
            <div v-else>
              <p style='text-align:center;'>"暂无活动，敬请期待！"</p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <Modal
      v-model="ifmodel"
      class-name="agent-transfer"
      width="424"
      :mask-closable="false"
    >
      <div
        class="vp-admin-wrap-close"
        slot="close"

      >
        <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div>
      </div>
      <div slot="header" class="tishi">
        <span>提示</span>
      </div>
      <div class="agent-con">
        <span class="iconspan"><span class="tispan">精彩活动，即将揭晓！</span></span>
        <a class='pay' href="javascript:void (0)" @click="close_messageAlert()">关闭</a>
      </div>
      <div slot="footer"></div>
    </Modal>

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
      if (res && res.code == 200) {
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
      if (activeId == -1) {
        this.showList = this.activitylist
      } else {
        console.log(activeId)
        this.showList = this.activitylist.filter((item, index) => {
          console.log(item)
          if (item.activity_cate_id == activeId) {
            return item
          }
        })
        console.log(this.showList)
      }
    },

    bindOpen (item) {
      if (item.activity_status == 0) {
        this.ifmodel = true
        // this.timer=setInterval(()=>{

        // },1500)
        return false
      } else {
        this.targetId === item.id ? this.targetId = '' : this.targetId = item.id
      }
      // item.activity_status === 0 ? ifmodel = true : targetId===item.id?targetId='':targetId=item.id
      /*  let title = item.image.pc
        let idStr = 'img_' + title
        // console.log(idStr);
        let oDiv = document.getElementById('img_' + title)
        let odisplay = oDiv.style.display
        // oDiv.style.display="block";
        // console.log(oDiv)
        // console.log(odisplay)
        if (odisplay == 'block') {
          oDiv.style.display = 'none'
        } else if (odisplay == 'none') {
          oDiv.style.display = 'block'
        } */

      // $('.menuHead').bind('click', function () {
      //   var hid = $(this).attr('id')
      //   // console.log(hid)
      //   var im = $('#img_' + hid)
      //   if (im.css('display') === 'none') {
      //     $('.Content_box').hide()
      //     im.show()
      //   } else {
      //     im.hide()
      //   }
      // })
    },
    goUrl (item) {
      if (item.activity_status == 0) {
        this.ifmodel = true
        // this.timer=setInterval(()=>{

        // },1500)
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
  async mounted () {
    const res = await this.$http.create().get('/')
    if (res && res.status === 200) {
      this.dateTime = new Date(res.headers.date).getTime()
    }
    this.refresh()
  },
  updated () {

  },
  watch: {},
  components: {}
}
</script>

<style lang="less" scoped>
  .bannerHead {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    padding: 0 50px;
    background-color: #0d0d18;

    .bannerUl {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #dbdbbd;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        float: left;
        /*text-align: left;*/
        height: 100%;
        /*min-width: 100px;*/
        // background: yellow;
        background-color: #0d0d18;
        line-height: 60px;
        text-align: center;
        // border-right:1px solid #666;
        box-sizing: border-box;
        color: #696969;
        font-size: 18px;

        .liItem {
          display: inline-block;
          text-align: center;

          a {
            color: #ffffff;
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
        }
        &:last-child {
          text-align: right;
        }
      }

      li.activeItem {
        // background-color: green;
        /*background-color: #4e0606;*/
        color: #e0ab63;

        a {
          color: #e0ab63;
        }
      }

      li:last-child {
        border: 0;
      }
    }
  }

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

  body {
    background: #000;
  }

  /deep/ .promotContent {
    padding: 10px;
    color: rgb(245, 245, 245);
    img {
      width: 100%;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
      width: 100%;
      margin: 10px 0;

      td {
        border: 1px solid #ccc;
        text-align: center;
        padding: 8px 0;
        font-size: 16px;
        vertical-align: middle;
      }
    }

    p {
      font-size: 16px;
      line-height: 25px;
      color: rgb(235, 235, 235);
      text-align: justify;
    }

    hr {
      height: 1px;
      background-color: rgb(250, 220, 75);
      border: 0;
    }

    .top_title {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0;
    }

    .con_title {
      font-size: 19px;
      line-height: 1.5;
      margin-top: 12px;
      color: rgb(250, 220, 75);
    }
  }
  #yh_pic a img {
    padding: 0 20px;
  }

</style>
