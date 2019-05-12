<!--  <template>
  <div class="footer-bg clear">
    <div class="footer">
      <div class="footer_advantage">
        <div class="wp clear">

          <div class="advan_box clear">
            <div class="bg_box">
              <div class="bg-demo"></div>
            </div>
            <div class="advan_text">
              <div>试玩体验</div>
              <div>上百款游戏，不用花钱照样玩!</div>
            </div>
          </div>
          <div class="advan_box clear">
            <div class="bg_box">
              <div class="bg-deposit"></div>
            </div>
            <div class="advan_text">
              <div>存款平均到帐速度</div>
              <div class="time_text">
                <span class="counter minute">0</span>分
                <span class="counter second">52</span>秒
              </div>
            </div>
          </div>
          <div class=" advan_box last_item clear">
            <div class="bg_box">
              <div class="bg-withdraw"></div>
            </div>
            <div class="advan_text">
              <div>取款平均到帐速度</div>
              <div class="time_text">
                <span class="counter minutetwo">0</span>分
                <span class="counter secondtwo">52</span>秒
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="foot_links">
        <div class="wp">
          <a href="javascript:void(0);" class="clickable" @click="goHelp('/home/about')">关于我们</a>
          <a href="javascript:void(0)" @click="goHelp('/home/contact')">联系我们</a>

          <a href="javascript:void(0)" @click="goHelp('/home/partner')">合作伙伴</a>

          <a href="javascript:void(0)" @click="goHelp('/home/savings')">存款帮助</a>

          <a href="javascript:void(0);" @click="goHelp('/home/help_withdrawals')">取款帮助</a>
          <a href="javascript:void(0)" @click="goHelp('/home/issue')">常见问题</a>
        </div>
      </div>

      <div class="platform">
        <div class="wp">
          <div>
            <ul>
              <li>
                <a class="bg-pt_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-et_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-dc_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-n2_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-dt_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-mg_logo" href="javascript:void(0)"></a>
              </li>
              <li>
                <a class="bg-pg_logo" href="javascript:void(0)"></a>
              </li>
            </ul>
          </div>

          <div>

          </div>

        </div>

      </div>

      <div class="copyright">
        <div class="wp">
          <div>
            Copyright&nbsp;©&nbsp;客拉客&nbsp;Reserved
          </div>
        </div>
      </div>

    </div>
    <div v-show="show_mobile" class="appDown animated mobile_auto" :class="{'active':animatedStaues}">
      <span @click="show_mobile=false" class="clBtn"></span>
    </div>

    <Modal :scrollable=true title="提示信息" v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap" width="450">
      <div class="tipModel-box">
                <span>
                    <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
                    <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
                    <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
                </span>

        <span>{{tipDatas.title}}</span>

      </div>
    </Modal>
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        show_mobile: true,
        animatedStaues: false
      }
    },
    methods: {
      goHelp (link) {
        this.$router.push(link)
      }
    },
    computed: {

      tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
    mounted () {
      setTimeout(() => {
        this.animatedStaues = true
      }, 1500)
    },
    store
  }
</script>

<style lang="less" scoped>
  .footer-bg {
    margin: 0 auto;
    max-width: 1920px;
    background: #fff;

    .footer {
      min-width: 1200px;
    }

    .wp {
      width: 1200px;
      margin: 0 auto;
    }

    .footer_advantage {
      height: 130px;
      padding-top: 28px;
      background: #fff;
      color: #000;

      .advan_box {
        width: 453px;
        float: left;

        .bg_box {
          width: 80px;
          height: 80px;
          float: left;
          padding: 17px 0 0 17px;
          margin-right: 10px;
          border: 1px solid #bdbdbd;
          border-radius: 15px;

          .bg-demo {
            background-image: url(/static/pjyl/img/footer_tleft.png);
            margin-top: -2px;
            margin-left: -2px;
            width: 57px;
            height: 53px;
            background-position: -13px -13px;
          }

          .bg-deposit {
            background-image: url(/static/pjyl/img/footer_center.png);
            background-position: -15px -14px;
            margin-top: -3px;
            width: 46px;
            height: 45px;
          }

          .bg-withdraw {
            width: 46px;
            height: 45px;
            background-image: url(/static/pjyl/img/footer_right.png);
            background-position: -15px -15px;
            margin-top: -2px;
          }
        }

        .advan_text {
          height: 80px;
          padding-top: 16px;
          float: left;

          div {
            font-size: 18px;

            &:last-child {
              color: #c7c7c7;
              padding-top: 8px;
            }
          }

          &.clear:after {
            content: "";
            display: block;
            clear: both;
          }

          div.time_text {
            color: #ff6666;
          }
        }

        &:last-child {
          width: 234px;
        }
      }
    }

    .foot_links {
      height: 60px;
      text-align: center;
      color: #fff;
      background: #2c2d2e;
      border-top: 1px solid #232425;
      border-bottom: 1px solid #232425;

      a {
        margin: 0 20px;
        color: #fff;
        line-height: 60px;
      }
    }

    .platform {
      padding: 20px 0 10px 0;
      background: #2c2d2e;
      color: #fff;

      ul {
        height: auto;
        overflow: auto;
        margin-left: 112px;

        li {
          width: 130px;
          height: 45px;
          float: left;
          margin: 0 5px 10px;
          background: #282829;
          text-align: center;

          a {
            background: url(/static/pjyl/img/footer_sprites.png);
            background-position: 23px -39px;
            width: 130px;
            height: 45px;
            display: block;
            cursor: default;
          }
        }

        li:nth-child(2) {
          a {
            background-position: -7px -341px;
          }
        }

        li:nth-child(3) {
          a {
            background-position: 15px 0;
          }
        }

        li:nth-child(4) {
          a {
            background-position: -7px -383px;
          }
        }

        li:nth-child(5) {
          a {
            background: url(/static/pjyl/img/footer_logo3.png) no-repeat;
            background-position: 19px 1px;
            background-size: 89px;
          }
        }

        li:nth-child(6) {
          a {
            background-position: 21px 104px;
          }
        }

        li:nth-child(7) {
          a {
            background: url(/static/pjyl/img/footer_logo4.png) no-repeat;
            background-position: 16px -7px;
            background-size: 93px;
          }
        }
      }
    }

    .copyright {
      height: 60px;
      background: #1d1d1d;

      div {
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 60px;
      }
    }
  }

  .mobile_auto {
    position: fixed;
    z-index: 99999;
    left: 20px;
    bottom: 30px;
    cursor: pointer;
    width: 302px;
    height: 260px;
    background-image: url(/static/pjyl/img/APPxx.png?1);

    .clBtn {
      position: absolute;
      right: 40px;
      top: 5px;
      padding: 18px;
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      -webkit-animation: animateSub 2s linear infinite;
      -o-animation: animateSub 2s linear infinite;
      -moz-animation: animateSub 2s linear infinite;
      animation: animateSub 2s linear infinite;
    }

    @-webkit-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-moz-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-o-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-ms-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
  }
</style>
-->


<template>
  <div>

  <footer id="footer">
        <!-- <div id="footer-info">
            <ul class="wrapper">
                <li class="qq">
                    <span class="title">投诉QQ:</span>
                    <span class="text ng-binding" ng-bind="ContactInfo.QQ3" ng-click="qqClick(ContactInfo.QQ3)">857637666</span>
                </li>
                <li class="email">
                    <span class="title">Email</span>
                    <span class="text ng-binding" ng-bind="ContactInfo.Email">xpj22858@gmail.com</span>
                </li>
                <li class="qq">
                    <span class="title">客服QQ:</span>
                    <span class="text ng-binding" ng-bind="ContactInfo.QQ2" ng-click="qqClick(ContactInfo.QQ2)">853593333</span>
                </li>
                <li class="chat">
                    <span class="title">Support</span>
                    <span class="text" ng-click="lineChatClick()">7x24小时在线客服</span>
                </li>
            </ul>
        </div> -->
        <div id="footer-bottom" class="wrapper">
            <p>
                Copyright © 新葡京 Reserved
            </p>

            <ul id="footer-nav">
                <li><a href="javascrip:void(0)" @click="goHelp(1)">关于我们</a></li>
                <li><a href="javascrip:void(0)" @click="goHelp(2)">联系我们</a></li>
                <li><a href="javascrip:void(0)" @click="goHelp(3)">合作伙伴</a></li>
                <li><a href="javascrip:void(0)" @click="goHelp(4)">存款帮助</a></li>
                <li><a href="javascrip:void(0)" @click="goHelp(5)">取款帮助</a></li>
                <li><a href="javascrip:void(0)" @click="goHelp(6)">常见问题</a></li>
                <li><a href="javascrip:void(0)" @click="downLoad">客戶端</a></li>
            </ul>
        </div>
    </footer>
    <Modal :scrollable=true title="提示信息" v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap" width="450">
      <div class="tipModel-box">
                <span>
                    <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
                    <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
                    <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
                </span>

        <span>{{tipDatas.title}}</span>

      </div>
    </Modal>
     </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
    methods:{
      downLoad(){
        window.open("/static/pjyl/html/download/index.html","_blank")
      },
        goHelp (link) {
          // this.$router.push(link)
          this.$router.push({path:'/home/register',query:{id:link}})
        },
        // 2019.04.25新文章接口
        // 文章
        async getArticle(title){
          // let res=await this.$http.post(`${this.$HOST_NAME}/site/newNotice`,{
          //   type:"article",
          //   client_type:"PC",
          //   title
          // })
          // let articleData="";
          // if(res&&res.code==200&&res.data.data[0]){
          //   // 请求成功
          //   // 存入本地存储，在对应的页面获取数据即可
          //   articleData=JSON.stringify(res.data.data[0].description);
          //   // localStorage.setItem("articleData",articleData);
          // }
          // let goUrl="";
          // switch(title){
          //   case "关于我们":
          //   goUrl='/home/about';
          //   break;
          //   case "联系我们":
          //   goUrl='/home/contact';
          //   break;
          //   case "合作伙伴":
          //   goUrl='/home/partner';
          //   break;
          //   case "存款帮助":
          //   goUrl='/home/savings';
          //   break;
          //   case "取款帮助":
          //   goUrl='/home/help_withdrawals';
          //   break;
          //   case "常见问题":
          //   goUrl='/home/issue';
          //   break;
          //   default:
          //   goUrl='/home/about';
          //   break;
          // }
          // this.goHelp(goUrl)
        },
    }
  }

</script>
<style lang="less" scoped>
#footer{
  padding-top: 70px;
  background: #c89752 url(/static/pjyl/img/pjyl/footer_logo.png) center 12px no-repeat;
}
#footer-info {
    background: #222;
}
#footer-info ul {
    height: 100px;
    padding: 35px 0 0 195px;
    background: url(/static/pjyl/img/pjyl/info_title.png) left center no-repeat;
}
.wrapper {
    position: relative;
    width: 1000px;
    margin: 0 auto;
}
#footer-info li.qq {
    width: 196px;
}
#footer-info li {
    display: inline-block;
    width: 198px;
    padding-left: 35px;
    color: #c8c8c8;
    font-size: 13px;
    vertical-align: top;
}
#footer-info li.qq .title {
    background: url(/static/pjyl/img/pjyl/info_qq.png) left center no-repeat;
}
#footer-info li .title {
    padding-left: 30px;
}
#footer-info li .text {
    display: block;
    color: #f7f5a3;
    font-size: 16px;
}
[ng-click] {
    cursor: pointer;
}
#footer-info li.email {
    width: 228px;
}
#footer-info li.email .title {
    background: url(/static/pjyl/img/pjyl/info_mail.png) left center no-repeat;
}
#footer-info li .title {
    padding-left: 30px;
}
#footer-info li .text {
    display: block;
    color: #f7f5a3;
    font-size: 16px;
}
#footer-info li.qq {
    width: 196px;
}
#footer-info li+li {
    background: url(/static/pjyl/img/pjyl/info_border.png) left center no-repeat;
}
#footer-info li {
    display: inline-block;
    width: 198px;
    padding-left: 35px;
    color: #c8c8c8;
    font-size: 13px;
    vertical-align: top;
}
#footer-info li.qq .title {
    background: url(/static/pjyl/img/pjyl/info_qq.png) left center no-repeat;
}
#footer-info li.chat {
    width: 170px;
}
#footer-info li.chat .title {
    background: url(/static/pjyl/img/pjyl/info_chat.png) left center no-repeat;
}
#footer-bottom {
    padding: 10px 0;
    font-size: 12px;
    color: #222;
    overflow: hidden;
}
#footer-bottom p {
    float: left;
    margin: 0;
}
#footer-nav {
    float: right;
}
#footer-nav li {
    display: inline-block;
    vertical-align: middle;
}
#footer-nav a {
    color: #222;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
}
#footer-nav li+li:before {
    content: '／';
    padding: 0 7px;
    color: #222;
}
</style>

