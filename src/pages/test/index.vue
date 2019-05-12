<template>
  <div>
    <div class="vp-hsyl-style" :class="{'tcgBlur':$store.state.personal.isPersonal}">
      <!-- 传统彩票 -->
      <div class="vp-lottery-style" v-if="
        $route.path.includes('/plays')||
        $route.path.includes('/rules')||
        $route.path.includes('/trend')
        ">
        <vp-lot-header :lotHeadDatas='lotHeadDatas'></vp-lot-header>
        <router-view class="content-container"></router-view>
      </div>
      <!-- 主页 -->
      <div v-else class="hsyl-cont-wrap">
        <vp-home-header></vp-home-header>
        <vp-nav></vp-nav>
        <vp-aside></vp-aside>
        <router-view></router-view>
        <vp-home-footer></vp-home-footer>
      </div>


    </div>
    <div class="personals-wrap-style">
      <personals></personals>
    </div>
    <comModal></comModal>

  </div>
</template>
<script>
  let timer
  import vpLotHeader from '@/pages/public/tradition/components/header/header'
  import vpHomeHeader from './home/header'
  import vpNav from './home/nav'
  import vpAside from './home/Aside'
  import vpHomeFooter from './home/footer'
  import personals from '../public/personals'
  import store from '@/vuex/store'
  import comModal from  "../public/home/common.vue"

  export default {
    data () {
      return {
     
        lotHeadDatas: {
          logoUrl: '/static/klk/img/logo.png',
          downLoadurl: '/static/klk/html/download/index.html'
        },
        popups:"",
      }
    },
    methods: {
      recalc () {
        this.init()
      },
      init () {
        // 手机适配
        if (this.dPcOrMobile() == 'iphone') {
          document.querySelector('body').style.minHeight = 2420 + 'px'
        } else {
          document.querySelector('body').style.minHeight = 'auto'
        }
      },
      getBalance () {
        if (localStorage.token) {
          this.$getS(`/member/balance`).then(res => {
            if (res.code == 200) {
              let userinfo = JSON.parse(localStorage.userinfo)
              userinfo.balance = res.data.member
              userinfo.agent=res.data.agency
              this.$store.commit('mainState/reloadUserinfo', userinfo)
            }
          })
        } else {
          clearInterval(timer)
        }
      },


      // 文章清缓存问题
      articleRoute(){
        // 当前路由路径
          let fullPath=this.$router.currentRoute.fullPath;
          console.log(fullPath)
          let title="";
          let usList=["about","contact","partner","savings","help_withdrawals","issue"];
          // let titleList=["关于我们","联系我们","合作伙伴","存款帮助","取款帮助","常见问题"];
          let titleList={
            "about":"关于我们",
            "contact":"联系我们",
            "partner":"合作伙伴",
            "savings":"存款帮助",
            "help_withdrawals":"取款帮助",
            "issue":"常见问题"
          }
          let isAbout=false;
          usList.forEach((item,index)=>{
            console.log(item)
            if(fullPath.includes(item)){
              // 正好匹配
              isAbout=true;
              console.log(item)
              this.getArticle(titleList[item]);
              return false;
            }
          })
          if(!isAbout){
            // 防止没有数据
            this.getArticle("关于我们");
          }
      },


      // 2019.04.25新文章接口
      // 文章
      async getArticle(title){
        let res=await this.$http.post(`${this.$HOST_NAME}/site/newNotice`,{
          type:"article",
          client_type:"PC",
          title
        })
        let articleData="";
        if(res&&res.code==200){
          // 请求成功
          // 存入本地存储，在对应的页面获取数据即可
          if(res.data.data){
            // 存在返回值为空的情况
            articleData=JSON.stringify(res.data.data[0].description);
            localStorage.setItem("articleData",articleData);
            debugger
          }
        }

      },




    },
    created () {
      this.$http.get(`${this.$HOST_NAME}/games/list`).then(res => {
        if (res.code == 200) {
          localStorage.setItem('gameList', JSON.stringify(res.data))
        }
      })
      clearInterval(timer)
      timer = setInterval(this.getBalance, 10000)

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState == 'hidden') {
          clearInterval(timer)
        } else if (document.visibilityState == 'visible') {
          timer = setInterval(this.getBalance, 10000)
        }
      })

       // 关于我们缓存问题
        // this.articleRoute();


      // 测试获取当前域名
      let host=window.location.host;
      let host1=document.domain;
      console.log(host,host1)
    },
    // watch:{
    //   $route(nVal,oVal){
    //     this.getPopout1();
    //     console.log(nVal);
    //     // 关于我们缓存问题
    //     // this.articleRoute();
    //   },
    // },
    components: {
      vpHomeHeader,
      vpLotHeader,
      vpNav,
      vpAside,
      vpHomeFooter,
      personals,
      comModal
    },
    store
  }
</script>


<style lang="less" scoped>
// 2019.04.25根据弹框添加
        .vp-popout-box {
      /deep/ .ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -328px;
        margin-top: -273px;
      }

      /deep/ .ivu-modal-close {
        z-index: 2;
        top: 6px;

        i {
          color: #fff;
        }
      }

      /deep/ .ivu-modal-header {
        width: 650px;
        height: 34px;
        margin-top: 5px;
        margin-left: 3px;
        padding: 0;
        border-radius: 10px;
        border: 1px solid #494437;
        background: #ff0000;
        color: #ffffff;
        font-weight: bold;
        position: relative;
        top: 4px;

        .ivu-modal-header-inner {
          color: #fff;
          line-height: 34px;
          height: 34px;
          padding-left: 15px;
        }
      }

      /deep/ .ivu-modal-footer {
        border-top: 1px solid #cdd5da;

        .ivu-btn-text {
          display: none;
        }

        .ivu-btn-primary {
          background: #ff0000;
          border-color: #ff0000;
          padding: 3px 12px 3px 12px;
          border-radius: 6px;
        }
      }

      .popout-box {
        min-height: 427px;
        font-family: "Microsoft YaHei";
        font-size: 24px;
        line-height: 1.5;
        color: #383838;
        // text-align: center;
      }
      /deep/.popout-imgBox{
        // vertical-align: middle;
        text-align: center;
        img{
          vertical-align: middle;
        }
      }
      // /deep/
    }
</style>





