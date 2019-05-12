<template>
  <div class="new-home">
    <div class="container clearfloat">

      <!--通告区域-->
      <div class="notice clear-fix">
        <div class="notice-l">
          <i class="fa fa-fw fa-bullhorn"></i>
          最新通告
        </div>
        <div class="notice-content">
          <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                   onmouseover="this.stop()"
                   style="color: #666666; font-size: 15px; line-height: 40px;overflow: hidden;height: 40px;">
            <span v-html="lantern"></span>
          </marquee>
        </div>
      </div>

      <!-- 左边 -->
      <div class="wrapL">
        <!-- 左边导航 -->
        <div class="lotteryMenuTop clearfloat" v-show="false">
          <div :class="['ltbtn',{'active':(active==0)}]" @click="active=0">官方彩</div>
          <div :class="['ltbtn',{'active':(active==1)},'ctbtn']" @click="active=1">传统彩</div>
        </div>

        <ul class="subnav" v-if="active==0">
          <li v-for="(item,key) in wraplData1" :key="key">
            <a target="_blank" class="MustLogin" @click="goto(item.router)">
              <img :src="item.img" alt>
              <span class="sortName">{{item.sortNmae}}</span>
              <span class="des">{{item.des}}</span>
            </a>
          </li>
        </ul>

        <ul class="subnav" v-if="active==1">
          <li v-for="(item,key) in wraplCtData1" :key="key">
            <a target="_blank" class="MustLogin" @click="goto(item.router)">
              <img :src="item.img" alt>
              <span class="sortName">{{item.sortNmae}}</span>
              <span class="des">{{item.des}}</span>
            </a>
          </li>
        </ul>

        <!-- <ul class="subnav" v-if="active==0">
          <li v-for="(item,key) in wraplData" :key="key">
            <a target="_blank" class="MustLogin" @click="goto(item.router)">
              <img :src="item.img" alt>
              <span class="sortName">{{item.sortNmae}}</span>
              <span class="des">{{item.des}}</span>
            </a>
          </li>
        </ul>

        <ul class="subnav" v-if="active==1">
          <li v-for="(item,key) in wraplCtData" :key="key">
            <a target="_blank" class="MustLogin" @click="goto(item.router)">
              <img :src="item.img" alt>
              <span class="sortName">{{item.sortNmae}}</span>
              <span class="des">{{item.des}}</span>
            </a>
          </li>
        </ul> -->

      </div>
      <!-- 中间 -->
      <div class="wrapC">
        <div class="banner">
          <Carousel autoplay arrow='never' v-model="autoPlay" loop >
            <CarouselItem v-for="(item,i) in carouselData" :key="i">
              <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
                <img :src="item.img" style="height:250px;" alt>
              </a>
              <img :src="item.img" style="height:250px;" alt v-else>
            </CarouselItem>

        </Carousel>


        </div>

        <div class="autoTab">

          <ul class="hd clearfloat">
            <li :class="{on:hdActive==0}" @click="getResult({type:'jsk3',id:9});hdActive=0">江苏快3</li>
            <li :class="{on:hdActive==1}" @click="getResult({type:'wfk3',id:3632});hdActive=1">5分快3</li>
            <li :class="{on:hdActive==2}" @click="getResult({type:'sfk3',id:3631});hdActive=2">3分快3</li>
          </ul>

          <div class="bd" v-if="hdActive==0">
            <div class="shaizi">
              <label for="" :key="index" v-for="(item,index) in allReData[0].lastresultInfoArr">
                <span :class="'active'+item"></span><i v-if="index<2">+</i>
              </label>
              <i>=</i>
              <em>{{allReData[0].total}}</em>
            </div>

            <div class="bd-text">
              <p>
                <span>当前期：第<i>{{allReData[0].lastissue}}</i>期</span>
                <span>开奖号码：<i>{{allReData[0].lastresultInfo}}</i></span>
                <span>和值：<i>{{allReData[0].total}}</i></span>
                <span>形态：<a class="valueType">{{allReData[0].lastluzhuArr[0]}}</a><a class="valueType">{{allReData[0].lastluzhuArr[1]}}</a>
                                  </span>
              </p>
            </div>
          </div>

          <div class="bd" v-if="hdActive==1">
            <div class="shaizi">
              <label for="" :key="index" v-for="(item,index) in allReData[1].lastresultInfoArr">
                <span :class="'active'+item"></span><i v-if="index<2">+</i>
              </label>
              <i>=</i>
              <em>{{allReData[1].total}}</em>
            </div>

             <div class="bd-text">
              <p>
                <span>当前期：第<i>{{allReData[1].lastissue}}</i>期</span>
                <span>开奖号码：<i>{{allReData[1].lastresultInfo}}</i></span>
                <span>和值：<i>{{allReData[1].total}}</i></span>
                <span>形态：<a class="valueType">{{allReData[1].lastluzhuArr[0]}}</a><a class="valueType">{{allReData[1].lastluzhuArr[1]}}</a>
                                  </span>
              </p>
            </div>
          </div>

          <div class="bd" v-if="hdActive==2">
            <div class="shaizi">
              <label for="" :key="index" v-for="(item,index) in allReData[2].lastresultInfoArr">
                <span :class="'active'+item"></span><i v-if="index<2">+</i>
              </label>
              <i>=</i>
              <em>{{allReData[2].total}}</em>
            </div>

             <div class="bd-text">
              <p>
                <span>当前期：第<i>{{allReData[2].lastissue}}</i>期</span>
                <span>开奖号码：<i>{{allReData[2].lastresultInfo}}</i></span>
                <span>和值：<i>{{allReData[2].total}}</i></span>
                <span>形态：<a class="valueType">{{allReData[2].lastluzhuArr[0]}}</a><a class="valueType">{{allReData[2].lastluzhuArr[1]}}</a>
                                  </span>
              </p>
            </div>
          </div>

        </div>


      </div>
      <!-- 右边 -->
      <div class="wrapR">
        <!-- 登录前 -->
        <div class="login-after" v-if="!userinfo">
          <a href="javascript:void(0)" @click="login">登录</a>
          <a @click="register">注册帐号</a>
        </div>

        <!-- 登陆后 -->
        <div class="login-before" v-else>
          <h3>欢迎您，{{userinfo.userName}}</h3>
          <a class="loginout" @click="logout">
            <em>退出</em>
            <i class="el-icon-close"></i>
          </a>
        </div>

        <div class="slide">
          <h6>昨日奖金榜</h6>
          <table>
            <tr>
              <td>
                <img src="../../../../static/jhcp/img/home/td1.jpg" alt>
                <p>
                  帐号昵称：
                  <span>逆***</span>
                  <br>昨日奖金：
                  <i>923770</i>
                </p>
              </td>
              <td>
                <ins class="oneIns">1</ins>
              </td>
            </tr>

            <tr>
              <td>
                <img src="../../../../static/jhcp/img/home/slder8.jpg" alt>
                <p>
                  帐号昵称：
                  <span>龙***</span>
                  <br>昨日奖金：
                  <i>420732</i>
                </p>
              </td>
              <td>
                <ins class="twoIns">2</ins>
              </td>
            </tr>
            <tr>
              <td>
                <img src="../../../../static/jhcp/img/home/slder1.jpg" alt>
                <p>
                  帐号昵称：
                  <span>赐***</span>
                  <br>昨日奖金：
                  <i>231702</i>
                </p>
              </td>
              <td>
                <ins class="threeIns">3</ins>
              </td>
            </tr>
          </table>
        </div>

        <div class="winningList">
          <h6>中奖信息</h6>
          <div style="overflow:hidden;">
            <ul class="winerList">
              <li class="clearfloat" v-for="(item,key) in scrollDatas" :key="key">
                <img :src="item.ico">
                <p class="color">
                  {{item.account}}**** {{item.name}}
                  <br>喜中
                  <span>¥{{item.out}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- svg动画 -->
    <div class="home-svg" v-if="svgShow">
      <!-- <svg width='100px' height='100px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring">
        <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
         <circle cx="50" cy="50" r="40" stroke-dasharray="163.36281798666926 87.9645943005142" stroke="#dc3b40" fill="none" stroke-width="20">
           <animateTransform attributeName="transform" type="rotate" values="0 50 50;180 50 50;360 50 50;" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite" begin="0s"></animateTransform>
        </circle>
      </svg>-->
      <embed type="image/svg+xml" src="../../../../static/jhcp/img/loading.svg">
    </div>
    <Modal
      :scrollable="true"
      title="网站公告"
      ok-text="关闭"
      v-model="showPopout"
      width="657"
      class="vp-popout-box"
    >
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>
    <Modal width="657" height="546.67" :scrollable="true" v-model="showimg" class="guanbi">
      <img width="100%" height="100%" src="/static/jhcp/img/pcAlert.png">
      <span class="close" @click="close"></span>
    </Modal>

    <div class="my-modal" v-show="ifLogin">
      <div class="bg"></div>
      <div class="my-modal-content">
        <div class="my-register">注册帐号</div>
        <vp-admin-index></vp-admin-index>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/service/public/UserService.js";
import store from "@/vuex/store";
import vpAdminIndex from '../../public/tradition/components/admin'

export default {
  data() {
    return {
      showimg: false,
      active: 1,
      svgShow: true,
      showPopout: false,
      popups: "",
      autoPlay:0,
      carouselData: [],
      lantern:'',

      wraplData1: [
          {
            img: '/static/public/image/lottery/nico/png/9.png',
            sortNmae: '江苏快3',
            des: '全天41期',
            router: '#/plays/tradition/9'
          },
          {
            img: '/static/public/image/lottery/nico/png/2.png',
            sortNmae: '北京赛车',
            des: '全天44期',
            router: '#/plays/tradition/2'
          },
          {
            img: '/static/public/image/lottery/nico/png/12.png',
            sortNmae: '快速赛车',
            des: '全天1152期',
            router: '#/plays/tradition/12'
          },
          {
            img: '/static/public/image/lottery/nico/png/13.png',
            sortNmae: '3分赛车',
            des: '3分钟1期',
            router: '#/plays/tradition/13'
          },
          {
            img: '/static/public/image/lottery/nico/png/4.png',
            sortNmae: '重庆时时彩',
            des: '全天59期',
            router: '#/plays/tradition/4'
          },
          {
            img: '/static/public/image/lottery/nico/png/16.png',
            sortNmae: '快速时时彩',
            des: '全天1152期',
            router: '#/plays/tradition/16'
          },
          {
            img: '/static/public/image/lottery/nico/png/17.png',
            sortNmae: '3分时时彩',
            des: '全天480期',
            router: '#/plays/tradition/17'
          },
          {
            img: '/static/public/image/lottery/nico/png/1.png',
            sortNmae: '香港六合彩',
            des: '一周三期',
            router: '#/plays/tradition/1'
          },
          {
            img: '/static/public/image/lottery/nico/png/18.png',
            sortNmae: '快速六合彩',
            des: '全天1152期',
            router: '#/plays/tradition/18'
          },
          {
            img: '/static/public/image/lottery/nico/png/19.png',
            sortNmae: '5分六合彩',
            des: '5分钟1期',
            router: '#/plays/tradition/19'
          }
        ],
      wraplCtData1: [
          {
          img: '/static/public/image/lottery/nico/png/9.png',
          sortNmae: '江苏快三',
          des: '全天41期',
          router: '#/plays/tradition/9'
        },
          {
          img: '/static/public/image/lottery/nico/png/3632.png',
          sortNmae: '5分快三',
          des: '全天288期',
          router: '#/plays/tradition/3632'
        },
        {
          img: '/static/public/image/lottery/nico/png/27.png',
          sortNmae: '快速快三',
          des: '全天1152期',
          router: '#/plays/tradition/27'
        },
        {
          img: '/static/public/image/lottery/nico/png/17.png',
          sortNmae: '三分时时彩',
          des: '全天480期',
          router: '#/plays/tradition/17'
        },
        {
          img: '/static/public/image/lottery/nico/png/16.png',
          sortNmae: '快速时时彩',
          des: '全天1152',
          router: '#/plays/tradition/16'
        },
        {
          img: '/static/public/image/lottery/nico/png/18.png',
          sortNmae: '五分赛车pk10',
          des: '全天288期',
          router: '#/plays/tradition/3630'
        },
        {
          img: '/static/public/image/lottery/nico/png/12.png',
          sortNmae: '快速赛车',
          des: '全天1152期',
          router: '#/plays/tradition/12'
        },
        {
          img: '/static/public/image/lottery/nico/png/1.png',
          sortNmae: '香港六合彩',
          des: '全天153期',
          router: '#/plays/tradition/1'
        },
        {
          img: '/static/public/image/lottery/nico/png/18.png',
          sortNmae: '快速六合彩',
          des: '一周3期',
          router: '#/plays/tradition/18'
        },
        {
          img: '/static/public/image/lottery/nico/png/5.png',
          sortNmae: '广东11选5',
          des: '全天42期',
          router: '#/plays/tradition/5'
        }
      ],

      wraplData: [
        {
          img: "/static/jhcp/img/home/vp-9.png",
          sortNmae: "江苏快3",
          des: "全天41期",
          router: "#/plays/tradition/9"
        },
        {
          img: "/static/jhcp/img/home/PK10.png",
          sortNmae: "北京赛车",
          des: "全天44期",
          router: "#/plays/tradition/2"
        },
        {
          img: "/static/jhcp/img/home/vp-12.png",
          sortNmae: "快速赛车",
          des: "全天1152期",
          router: "#/plays/tradition/12"
        },
        {
          img: "/static/jhcp/img/home/vp-13.png",
          sortNmae: "3分赛车",
          des: "3分钟1期",
          router: "#/plays/tradition/13"
        },
        {
          img: "/static/jhcp/img/home/vp-4.png",
          sortNmae: "重庆时时彩",
          des: "全天59期",
          router: "#/plays/tradition/4"
        },
        {
          img: "/static/jhcp/img/home/vp-16.png",
          sortNmae: "快速时时彩",
          des: "全天1152期",
          router: "#/plays/tradition/16"
        },
        {
          img: "/static/jhcp/img/home/vp-17.png",
          sortNmae: "3分时时彩",
          des: "全天480期",
          router: "#/plays/tradition/17"
        },
        {
          img: "/static/jhcp/img/home/vp-1.png",
          sortNmae: "香港六合彩",
          des: "一周三期",
          router: "#/plays/tradition/1"
        },
        {
          img: "/static/jhcp/img/home/vp-18.png",
          sortNmae: "快速六合彩",
          des: "全天1152期",
          router: "#/plays/tradition/18"
        },
        {
          img: "/static/jhcp/img/home/vp-19.png",
          sortNmae: "5分六合彩",
          des: "5分钟1期",
          router: "#/plays/tradition/19"
        }
      ],
      wraplCtData: [
        {
          img: "/static/public/image/lottery/ico/vp-江苏快3.png",
          sortNmae: "江苏快3",
          des: "全天41期",
          router: "#/plays/tradition/9"
        },
        {
          img: "/static/public/image/lottery/ico/vp-5分快3.png",
          sortNmae: "五分快3",
          des: "全天288期",
          router: "#/plays/tradition/3632"
        },
        {
          img: "/static/public/image/lottery/ico/vp-快速快3.png",
          sortNmae: "快速快3",
          des: "全天1152期",
          router: "#/plays/tradition/27"
        },
        {
          img: "/static/public/image/lottery/ico/vp-3分时时彩.png",
          sortNmae: "3分时时彩",
          des: "全天480期",
          router: "#/plays/tradition/17"
        },
        {
          img: "/static/public/image/lottery/ico/vp-快速时时彩.png",
          sortNmae: "快速时时彩",
          des: "全天1152期",
          router: "#/plays/tradition/16"
        },

         {
          img: "/static/public/image/lottery/ico/vp-5分赛车PK10.png",
          sortNmae: "5分赛车PK10",
          des: "全天288期",
          router: "#/plays/tradition/3630"
        },
        {
          img: "/static/public/image/lottery/ico/vp-快速赛车PK10.png",
          sortNmae: "快速赛车PK10",
          des: "全天1152期",
          router: "#/plays/tradition/12"
        },
        {
          img: "/static/public/image/lottery/ico/vp-香港六合彩.png",
          sortNmae: "香港六合彩",
          des: "全天153期",
          router: "#/plays/tradition/1"
        },
        {
          img: "/static/public/image/lottery/ico/vp-快速六合彩.png",
          sortNmae: "快速六合彩",
          des: "全天960期",
          router: "#/plays/tradition/18"
        },
        {
          img: "/static/public/image/lottery/ico/vp-广东11选5.png",
          sortNmae: "广东11选5",
          des: "全天42期",
          router: "#/plays/tradition/7"
        }
      ],
      hdActive: 0,
      // 滚动名单
      random: [
        {
          account: "",
          name: "江苏快3",
          ico: "/static/jhcp/img/home/slder1.jpg",
          out: 0
        },
        {
          account: "",
          name: "湖北快3",
          ico: "/static/jhcp/img/home/slder.jpg",
          out: 0
        },
        {
          account: "",
          name: "5分六合",
          ico: "/static/jhcp/img/home/slder2.jpg",
          out: 0
        },
        {
          account: "",
          name: "极速赛车",
          ico: "/static/jhcp/img/home/slder3.jpg",
          out: 0
        },
        {
          account: "",
          name: "北京赛车",
          ico: "/static/jhcp/img/home/slder4.jpg",
          out: 0
        },
        {
          account: "",
          name: "快速11选5",
          ico: "/static/jhcp/img/home/slder5.jpg",
          out: 0
        },
        {
          account: "",
          name: "幸运飞艇",
          ico: "/static/jhcp/img/home/td1.jpg",
          out: 0
        },
        {
          account: "",
          name: "重庆时时彩",
          ico: "/static/jhcp/img/home/slder6.jpg",
          out: 0
        },
        {
          account: "",
          name: "幸运农场",
          ico: "/static/jhcp/img/home/slder7.jpg",
          out: 0
        },
        {
          account: "",
          name: "广东快乐十分",
          ico: "/static/jhcp/img/home/slder8.jpg",
          out: 0
        }
      ],
      scrollDatas: [],
      allReData: [
           {
            router: '#/plays/tradition/9',
            id: 9,
            type: 'jsk3',
            lastissue: '',
            lastresultInfo: '',
            lastresultInfoArr: '',
            lastluzhu: '',
            lastluzhuArr: '',
            total: ''
          },
          {
            router: '#/plays/tradition/3632',
            id: 3632,
            type: 'wfk3',
            lastissue: '',
            lastresultInfo: '',
            lastresultInfoArr: '',
            lastluzhu: '',
            lastluzhuArr: '',
            total: ''
          },
          {
            router: '#/plays/tradition/3631',
            id: 3631,
            type:'sfk3',
            lastissue: '',
            lastresultInfo: '',
            lastresultInfoArr: '',
            lastluzhu: '',
            lastluzhuArr: '',
            total: ''
          }
        ]
    };
  },
  methods: {
    // async getPopout() {
    //   if (!this.$store.state.mainState.ifpourT || localStorage.token)
    //     return false;
    //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
    //     type: "popups",
    //     desc_client_type: "html"
    //   });
    //   if (res && res.code == 200) {
    //     if (!res.data.data.length) return false;
    //     this.showPopout = true;
    //     this.showimg = false;
    //     this.popups = res.data.data[0] && res.data.data[0].description;
    //     this.$store.commit("mainState/resetPour", false);
    //   }
    // },
    //注册
    register () {
        this.$store.commit('alert/showLogin', true)
        this.$store.commit('alert/setChooseModel', '注册帐号')
        this.$store.commit('alert/setLoginTitle', '注册帐号')
    },
    login(){
      this.$router.push("/home/login")
    },
    close() {
      this.showimg = false;
    },
    goto(item) {
      if (localStorage.token) {
        if (localStorage.Public_User == "test") {
          this.dNotify("彩票暂无试玩,立即注册", "error");
        } else {
          var newitem = item.split("#")[1];
          this.$router.push({
            path: newitem
          });
        }
      } else {
        this.$router.push({ path: "/home/login" });
      }
    },
    //获取banner
    async getBanner() {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
        position: "banner",
        clientType: "pc"
      });
      if (res && res.code == 200) {
        this.carouselData = res.data[0] && res.data[0].body;
      }
    },

    async getResult(item) {
      let res = await this.$http.get(
        `${this.$HOST_NAME}/lottery/getIssue/${item.id}`,
        {}
      );

      if (res && res.code == 200) {

        switch (item.type) {
          case 'jsk3':
            this.allReData[0].lastissue = res.data.lastissue
            this.allReData[0].lastresultInfo = res.data.lastresultInfo
            this.allReData[0].lastresultInfoArr = res.data.lastresultInfo.split(
              ','
            )
            this.allReData[0].total =
              parseInt(this.allReData[0].lastresultInfoArr[0]) +
              parseInt(this.allReData[0].lastresultInfoArr[1]) +
              parseInt(this.allReData[0].lastresultInfoArr[2])
            this.allReData[0].lastluzhu = res.data.lastluzhu
            this.allReData[0].lastluzhuArr = res.data.lastluzhu.split(',')
            break
          case 'wfk3':
            this.allReData[1].lastissue = res.data.lastissue
            this.allReData[1].lastresultInfo = res.data.lastresultInfo
            this.allReData[1].lastresultInfoArr = res.data.lastresultInfo.split(
              ','
            )
            this.allReData[1].total =
              parseInt(this.allReData[1].lastresultInfoArr[0]) +
              parseInt(this.allReData[1].lastresultInfoArr[1]) +
              parseInt(this.allReData[1].lastresultInfoArr[2])
            this.allReData[1].lastluzhu = res.data.lastluzhu
            this.allReData[1].lastluzhuArr = res.data.lastluzhu.split(',')
            break
          case 'sfk3':
            this.allReData[2].lastissue = res.data.lastissue
            this.allReData[2].lastresultInfo = res.data.lastresultInfo
            this.allReData[2].lastresultInfoArr = res.data.lastresultInfo.split(
              ','
            )
            this.allReData[2].total =
              parseInt(this.allReData[2].lastresultInfoArr[0]) +
              parseInt(this.allReData[2].lastresultInfoArr[1]) +
              parseInt(this.allReData[2].lastresultInfoArr[2])
            this.allReData[2].lastluzhu = res.data.lastluzhu
            this.allReData[2].lastluzhuArr = res.data.lastluzhu.split(',')
            break

        }
        this.svgShow = false;

      }
      console.log(this.allReData)
    },
    setNavCurr() {
      this.$store.commit("setCurr", 1);
      this.$router.push("/home/youhui");
    },
    logout() {
      UserService.logout.call(this);
    },
    // 新文字走马灯接口
    async getLantern () {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
        type: 'lantern',
        // desc_client_type: 'html'
        client_type:"PC"
      })
      if (res && res.code == 200) {
        // if (!res.data.data.length) return false
        // this.lantern = res.data.data[0] && res.data.data[0].description

        if(res.data.data.length){
          this.lantern = res.data.data[0] && res.data.data[0].description
        }else{  
          console.log("文字走马灯没有数据返回")
          return false;
        }

      }
      // 参数： type: lantern 走马灯
      // 参数： type: popups 弹窗
      // 参数： type: notice 提示
    },
    // 获取公告
    // async getLantern () {
    //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
    //     type: 'lantern',
    //     desc_client_type: 'html'
    //   })
    //   if (res && res.code == 200) {
    //     if (!res.data.data.length) return false
    //     this.lantern = res.data.data[0] && res.data.data[0].description
    //   }
    //   // 参数： type: lantern 走马灯
    //   // 参数： type: popups 弹窗
    //   // 参数： type: notice 提示
    // },

  },
  components: {
    vpAdminIndex
  },
  created() {
    if(localStorage.zhuce){
      if(!localStorage.token){
        this.register();
        localStorage.removeItem("zhuce");
      }
    };
    this.getLantern();

    // this.svgShow = true;
    let chars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "j",
      "k",
      "-",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    function generateMixed(n) {
      var res = "";
      for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 61);
        res += chars[id];
      }
      return res;
    }
    //50个模型demo
    let datas = [];
    for (let index = 0; index < 50; index++) {
      // debugger;
      let obj = {};
      Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)]);
      datas.push(obj);
    }
    // 求出随机数
    datas.forEach((item, v) => {
      let arr = [2, 3, 5, 4];
      item.out =
        Math.ceil(Math.random() * 10) *
        Math.pow(
          arr[Math.floor(Math.random() * arr.length)],
          arr[Math.floor(Math.random() * arr.length)]
        );
      item.account = generateMixed(3);
    });
    this.scrollDatas = datas;
  },
  mounted() {

    this.getResult({ type: "jsk3", id: 9 });
    this.getResult({ type: "wfk3", id: 3632 });
    this.getResult({ type: "sfk3", id: 3631 });
    // this.getPopout();
    this.getBanner();
  },
  computed: {
    userinfo() {
      return this.$store.state.mainState.userinfo;
    },
    // 是否提示信息
    tipDatas () {
      return this.$store.state.alert.tipModel;
    },
    // 是否显示登录
    ifLogin () {
      return this.$store.state.alert.login.ifLogin;
    },
    // 登录注册标题切换
    modelTitle () {
      return this.$store.state.alert.login.modelTitle;
    }
  },
  store
};
</script>

<style lang="less" scoped>
@keyframes animatesub {
  0% {
    top: 0;
  }
  100% {
    top: -2000px;
  }
}

.new-home {
  padding-top: 45px;
  padding-bottom: 10px;
  position:relative;
  .container {
    width: 1000px;
    margin: 0 auto;
    .notice {
        position:absolute;
        top:0;
        width:1000px;
        height: 40px;
        line-height: 40px;
        left:50%;
        transform:translateX(-50%);
        .notice-l {
          width: 100px;
          color: red;
          font-size: 14px;
          font-weight: 600;
          float: left;

          > i.fa {
            display: inline-block;
            font-size: 20px;
            width: 34px;
            height: 25px;
            background: url(/static/jhcp/img/noticeIcon.png);
            position: relative;
            top: 7px;
          }
        }

        .notice-content {
          width: 900px;
          height: 40px;
          float: left;
          padding-right:4px;
        }
      }


    .wrapL {
      width: 232px;
      background: #fffdf3;
      border: 1px solid #e6c9a0;
      border-top: 3px solid #e6c9a0;
      float: left;
      height: 468px;

      .lotteryMenuTop {
        .ltbtn {
          // display: inline-block;
          float: left;
          width: 50%;
          height: 30px;
          text-align: center;
          position: relative;
          font-size: 15px;
          color: #333;
          font-weight: 700;
          line-height: 29px;
          border-bottom: 1px solid #f4f1d9;
          border-top: 1px solid #f4f1d9;
          cursor: pointer;
        }

        .active {
          border-left: 1px solid #f4f1d9;
          color: #333;
        }

        .active::before {
          content: "";
          width: 100%;
          height: 3.5px;
          display: inline-block;
          position: absolute;
          top: -3.5px;
          left: 0;
          background: #e4393c;
        }

        .ctbtn {
          border-left: 1px solid #f4f1d9;
        }
      }

      .subnav {
        li {
          height: 46.4px;
          line-height: 46px;
          border-bottom: 1px dashed #ddd;
          padding: 2px 7px;

          &:last-child {
            border-bottom: none;
          }

          a {
            display: block;
            height: 100%;

            img {
              // margin: 2px 5px;
              // width: 38px;
              // height: 38px;
              width:36px;
              height:36px;
              margin:3px 5px;
              display: inline-block;
            }

            .sortName {
              margin-right: 5px;
              margin-bottom: 10px;
              vertical-align: top;
              font-size: 14px;
              color: #333;
              font-weight: 700;
            }

            .des {
              margin-right: 5px;
              margin-bottom: 10px;
              vertical-align: top;
              color: #999;
              font-size: 12px;
              font-weight: 100;
            }
          }
        }

        li:hover {
          img {
            transition: 0.5s;
            transform: rotate(1turn);
            // transform-origin: 17px 25px;
          }
        }
      }
    }

    .wrapC {
      width: 488px;
      margin-left: 13px;
      float: left;
      height: 468px;

      .banner {
        height: 251px;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .autoTab {
        height: 204px;
        margin-top: 13px;
        border: 1px solid #d7e2f7;
        box-sizing: border-box;

        .hd {
          li {
            width: 33.33333%;
            text-align: center;
            line-height: 30px;
            background: #edf7ff;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #d7e2f7;
            box-sizing: border-box;
            cursor: pointer;
            float: left;
            font-size: 12px;
            color: #666;
          }

          .on {
            border-top: 2px solid #e4393c;
            background: #fff;
            border-bottom: none;
            margin-top: -1px;
          }
        }

        .bd {
          .shaizi {
            margin-top: 32px;
            text-align: center;

            span {
              display: inline-block;
              background: url("../../../../static/jhcp/img/home/open_num.png");
              width: 60px;
              height: 60px;
              vertical-align: middle;

              &.active1 {
                background-position-y: 0px;
              }

              &.active2 {
                background-position-y: -60px;
              }

              &.active3 {
                background-position-y: -120px;
              }

              &.active4 {
                background-position-y: -180px;
              }

              &.active5 {
                background-position-y: -240px;
              }

              &.active6 {
                background-position-y: -305px;
              }
            }

            i {
              font-size: 25px;
              vertical-align: middle;
              color: #999;
              margin: 10px;
            }

            em {
              font-size: 25px;
              color: #333;
              vertical-align: middle;
              margin: 3px;
            }
          }

          .bd-text {
            margin-top: 20px;

            p {
              text-align: center;
              font-size: 12px;

              span {
                margin-right: 14px;

                i {
                  color: red;
                  margin: 0 3px;
                }

                a {
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  line-height: 18px;
                  color: #fff;
                  background: #ff9726;
                  border-radius: 2px;
                  margin-right: 6px;
                }

                a + a {
                  background: #5691d7;
                }
              }

              span:last-child {
                margin: 0;
              }
            }
          }

          .kslhc {
            .number {
              padding-top: 26px !important;
              em {
                border-radius: 0 !important;
                border: none !important;
                width: 30px !important;
                height: 30px !important;
                display: inline-block;
                text-align: center;
                font-weight: 100;
                margin: 0 5px;
                cursor: default;
                font-size: 18px !important;
                line-height: 30px !important;
                text-align: center;
                &.Blue {
                  background: #1c8ce2;
                }

                &.Red {
                  background: #bc2a1b;
                }

                &.Green {
                  background: #49bb27;
                }

                &:nth-child(6) {
                  // margin-right: 30px;
                }
              }
            }

            .mainColorBtn {
              margin-top: 18px !important;
            }
          }

          .pk10 {
            .number {
              padding-top: 26px !important;

              em {
                width: 30px !important;
                height: 30px !important;
                font-size: 18px !important;
                line-height: 30px !important;
                border-radius: 0 !important;
                border: none !important;

                &.pkActive01 {
                  background: #e6de0b;
                }

                &.pkActive02 {
                  background: #4b84f8;
                }

                &.pkActive03 {
                  background: #4c4c4c;
                }

                &.pkActive04 {
                  background: #d86f1a;
                }

                &.pkActive05 {
                  background: #80e7e6;
                }

                &.pkActive06 {
                  background: #4403f3;
                }

                &.pkActive07 {
                  background: #dfdfdf;
                }

                &.pkActive08 {
                  background: #d10108;
                }

                &.pkActive09 {
                  background: #650000;
                }

                &.pkActive10 {
                  background: #73c32e;
                }
              }
            }

            .mainColorBtn {
              margin-top: 18px !important;
            }
          }

          .cqssc {
            text-align: center;

            .number {
              float: left;
              padding-top: 45px;
              padding-left: 40px;

              em {
                border: 1px solid #b13032;
                background: linear-gradient(180deg, #e46062 2%, #c72c2e);
                font-size: 30px;
                color: #fff;
                border-radius: 50%;
                width: 41px;
                height: 41px;
                display: inline-block;
                line-height: 41px;
                text-align: center;
                font-weight: 100;
                margin: 0 5px;
                cursor: default;
              }
            }

            .mainColorBtn {
              display: inline-block;
              line-height: 30px;
              color: #fff !important;
              padding: 0 15px;
              border-radius: 3px;
              font-size: 14px;
              margin-right: 10px;
              min-width: 55px;
              text-align: center;
              cursor: pointer;
              background: #e4393c;
              margin: 10px 0;
              margin-top: 51px;
            }
          }
        }
      }
    }

    .wrapR {
      float: left;
      width: 252px;
      height: 472px;
      margin-left: 13px;

      .login-after {
        height: 44px;

        a {
          display: inline-block;
          width: 117.5px;
          text-align: center;
          background: #fff9dd;
          line-height: 42px;
          color: #e4393c;
          font-size: 16px;
          font-weight: 700;
          border: 1px solid #ebd4b3;
          box-sizing: border-box;
          border-radius: 2px;
        }

        a:nth-child(2) {
          margin-left: 12px;
        }
      }

      .login-before {
        padding: 0 15px;
        height: 44px;
        background: #fffdf3;
        border-radius: 2px;
        border: 1px solid #ebd4b3;
        border-top: 3px solid #ebd4b3;
        position: relative;

        h3 {
          line-height: 26px;
          text-align: center;
          margin: 7px;
          font-size: 14px;
          color: #36c;
          font-weight: bolder;
        }

        .loginout {
          width: 45px;
          height: 15px;
          line-height: 15px;
          display: inline-block;
          cursor: pointer;
          border: none;
          position: absolute;
          z-index: 2;
          top: 12px;
          right: 10px;
          line-height: 15px;
          padding-left: 5px;
          border-radius: 2px;
          font-size: 12px;
          color: #ccc;

          em {
            color: #fff;
          }
        }

        .loginout:hover {
          background: #d8d8d8;

          i {
            color: #fff;
          }
        }
      }

      .slide {
        border: 1px solid #dce1e5;
        margin-top: 13px;

        h6 {
          margin: 0;
          padding: 0 8px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
          font-weight: 600;
        }

        table {
          margin: 5px 0;
          height: 152px;
          position: relative;
          border-collapse: collapse;
          border-spacing: 0;

          tr {
            height: 50px;
            border-bottom: 1px dashed #ccc;

            td {
              text-align: left;
              padding: 7px 15px;
              padding-right: 12px;
              border-right: none;
              vertical-align: middle;

              img {
                height: 36px;
                width: 36px;
                float: left;
                border-radius: 50%;
                margin-right: 9px;
                transition: 0.5s;
              }

              p {
                margin: 0;
                margin-top: 0;
                line-height: 1.7;
                height: 36px;
                font-size: 12px;

                i {
                  color: red;
                }
              }

              ins {
                display: block;
                width: 25px;
                height: 25px;
                margin: 0 auto;
                text-decoration: none;
                vertical-align: middle;
                color: #fff;
                border-radius: 50%;
                text-align: center;
                line-height: 25px;
              }

              .oneIns {
                background: radial-gradient(
                  circle at 25px 25px,
                  #c12f33,
                  #ca9293
                );
              }

              .twoIns {
                background: radial-gradient(
                  circle at 25px 25px,
                  #2b82cc,
                  #53b0fe
                );
              }

              .threeIns {
                background: radial-gradient(
                  circle at 25px 25px,
                  #c57532,
                  #f8a968
                );
              }
            }

            td:first-child {
              width: 280px;
            }
          }
        }
      }

      .winningList {
        margin-top: 13px;
        border: 1px solid #dce1e5;
        height: 204px;
        overflow: hidden;

        h6 {
          margin: 0;
          padding: 0 8px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
          font-weight: 600;
        }

        .winerList {
          position: relative;
          animation: animatesub 80s linear infinite;

          &:hover {
            animation-play-state: paused;
          }

          li {
            height: 58px;
            cursor: default;
            padding: 0 15px;

            img {
              height: 36px;
              width: 36px;
              border-radius: 50%;
              float: left;
              margin-top: 2px;
              margin-right: 9px;
              transition: 0.5s;
            }

            p {
              margin: 0;
              float: left;
              line-height: 1.7;
              font-size: 12px;

              span {
                color: #f63745;
                margin: 0 5px;
              }
            }
          }
        }
      }
    }
  }

  .home-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 820px;
    text-align: center;
    line-height: 820px;
    background: #fff;
    z-index: 1001;
  }

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
      background-color: #ff0000;
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
    }

    // /deep/
  }
}

.guanbi img {
  position: relative;
}
.guanbi /deep/ .ivu-modal-footer {
  display: none;
}
.guanbi /deep/ .ivu-modal-body {
  padding: 0 !important;
  height: 546.67px;
}
.guanbi /deep/ .ivu-modal-close {
  display: none;
}
.guanbi /deep/ .ivu-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -328px;
  margin-top: -273px;
}
.guanbi .close {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  top: 3px;
  right: 3px;
  cursor: pointer;
}

.my-modal {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  .bg {
  z-index: 9998;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
    background-color: rgba(0,0,0,0.36)
  }
  .my-modal-content {
    max-width: 750px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
    background-color: #fff;
    // padding: 5% 0;
    border-radius: 10px;

    .vp-admin-wrap{
      padding: 116px 0 0px;
    }

    .my-register{
        position: absolute;
        font-size: 20px;
        line-height: 20px;
        color: #333;
        font-weight: normal;
        border-bottom: 2px solid #FF0024;
        padding: 20px 10px 20px 10px;
        top:0px;
        left: 30px;
        z-index: 99;
    }
  }
}
</style>
