<template>
  <!-- 个人中心最大的盒子 -->
  <div v-if="ifPersonal">
    <div class="peronsals">
      <div class="peronsals-content">
        <!-- 导航栏 -->
        <peronsal-aside class="peronsal-aside"></peronsal-aside>
        <!-- 关闭按钮 -->
        <div class="vp-admin-wrap-close" @click="close">
          <div class="vp-admin-wrap-close-empty">
            <a></a>
          </div>
        </div>
        <!-- 个人中心 -->
        <component :is="comPName">
        </component>
        <!-- 加载loading -->
        <div class="loading" v-if="loadingShow" ref="loading">
          <p>数据加载中...</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="waves" width="1366" height="312" viewBox="0 24 150 28"
               preserveAspectRatio="none">
            <defs>
              <path id="wave-taHGs"
                    d="m -160,44.4 c 30,0 58,-18 87.7,-18 30.3,0 58.3,18 87.3,18 30,0 58,-18 88,-18 30,0 58,18 88,18 l 0,34.5 -351,0 z"></path>
              <linearGradient id="a1-taHGs">
                <stop offset="0%" stop-color="#ffe400" stop-opacity="0.1"></stop>
                <stop offset="15%" stop-color="#ffe1bc" stop-opacity="0.25"></stop>
                <stop offset="60%" stop-color="#ff9898" stop-opacity="0.02"></stop>
                <stop offset="100%" stop-color="#fece31" stop-opacity="0.02"></stop>
              </linearGradient>
              <linearGradient id="b1-taHGs" x1="0" y1="0" x2="0" y2="1" href="#a1-taHGs"></linearGradient>
              <linearGradient id="b2-taHGs" x1="0" y1="0" x2="0" y2="1" href="#a1-taHGs"></linearGradient>
              <linearGradient id="b3-taHGs" x1="0" y1="0" x2="0" y2="1" href="#a1-taHGs"></linearGradient>
            </defs>

            <g>
              <use class="speed-1" href="#wave-taHGs" x="80" y="-2" fill="url(#b1-taHGs)"
                   transform="scale(1.5,1)"></use>
              <use class="speed-2" href="#wave-taHGs" x="-10" y="4" fill="url(#b2-taHGs)"
                   transform="scale(1.5,1)"></use>
              <use class="speed-3" href="#wave-taHGs" x="70" y="8" fill="url(#b3-taHGs)"
                   transform="scale(1.5,0.5)"></use>
              <use class="speed-4" href="#wave-taHGs" x="80" y="-2" fill="url(#b3-taHGs)"
                   transform="scale(1.5,0.5)"></use>
            </g>
          </svg> 
        </div>
      </div>
    </div>

    <!-- 打开个人中心的阴影 -->
    <div class="zhie"></div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import peronsalAside from './personal-aside'
  // 充值
  import recharge0 from './recharge/Internetbank'
  import recharge1 from './recharge/onLine'
  // 个人
  import personage0 from './personage/my-info'

  // 投注记录
  import personage1 from './personage/betrecord.vue'
  // 存款记录
  import personage2 from './personage/deposit'
  // 取款记录
  import personage3 from './personage/withdrawal'
  // 优惠记录
  import personage4 from './personage/discounts'
  // 代理记录
  import personage5 from './personage/agency'
  // 其它记录
  import personage6 from './personage/other'
  // import personage5 from "./personage/transaction";
  import personage7 from './personage/safety'

  // 取款
  import withdraw0 from './withdraw/request'
  import withdraw1 from './withdraw/binding'
  import withdraw2 from './withdraw/record'

  // 代理
  import agency0 from './agency/agency-income'
  import agency1 from './agency/agency_Report_agency'
  import agency2 from './agency/agency_repot'
  import agency6 from './agency/agency_people'

  import agency3 from './agency/agency_open'
  import agency4 from './agency/agency_list' 
  import agency5 from './agency/agency_nextfinance'
  // 消息
  import message0 from './message/preferential'
  import message1 from './message/write'
  import message2 from './message/sent'
  // 优惠
  //import discounts0 from './discounts/recommend'
  import discounts0 from './discounts/self_help'

  export default {
    data () {
      return {
        comPName: 'recharge0'
      }
    },
    methods: {
      //发射一个函数到vuex改变个人中心显示隐藏
      close () {
        this.$store.commit('showPersonal', {
          bool: false
        })
      },
       getBalance () {
        if (localStorage.token) {
          this.$getS(`member/balance`).then(res => {
            if (res.code == 200) {
              let userinfo = JSON.parse(localStorage.userinfo)
              userinfo.balance = res.data.member
              userinfo.agent=res.data.agency
              this.$store.commit('mainState/reloadUserinfo', userinfo)
            }
          })
        } 
      }
    },
    created () {
      this.comPName = this.$store.state.personal.contentView + this.$store.state.personal.navView
      this.getBalance();
    },
    mounted(){
     
    },
    computed: {
      ifPersonal () {
        return this.$store.state.personal.isPersonal
      },
      contentView () {
        return this.$store.state.personal.contentView
      },
      navView () {
        this.$store.state.personal.navView
      },
      loadingShow () {
        return this.$store.state.personal.loadingShow
      },
      ifperincome(){
              return this.$store.state.personal.ispericome
          }
    },
    watch: {
      navView: {
        handler: function (val, oldVal) { 
          if (this.contentView == 'recharge') {
            this.$store.state.personal.navView > 0 ? this.comPName = this.contentView + 1 : this.comPName = this.contentView + 0
          } else {
            this.comPName = this.$store.state.personal.contentView + this.$store.state.personal.navView
          }
        },
        deep: true
      },
      contentView: {
        handler: function (val, oldVal) {
          this.comPName = this.$store.state.personal.contentView + this.$store.state.personal.navView
        },
        deep: true
      }
    },
    components: {
      peronsalAside,
      recharge0,
      recharge1,

      personage0,
      personage1,
      personage2,
      personage3,
      personage4,
      personage5,
      personage6,
      personage7,

      withdraw0,
      withdraw1,
      withdraw2,

      agency0,
      agency1,
      agency2,
      agency3,
      agency4,
      agency5,
      agency6,

      message0,
      message1,
      message2,

      discounts0,
      // discounts1
    },
    store
  }
</script>

<style lang="less">
  * {
    font-family: "Microsoft YaHei";
  }

  @-webkit-keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @-moz-keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @-o-keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @-ms-keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .peronsals {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1500;
    // transform: scale(1);
    background-color: RGBA(0, 0, 0, 0.5);
    // filter: blur(9px);
    // transition: all 0.1s ease-in;
    font-size: 62.5%;
   
    .peronsals-content {
      width: 1270px;
      height: 650px;
      // margin: 2.5em auto;
      // position: absolute;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -635px;
      margin-top: -325px;
      background: #fff;
      padding-left: 240px;
      border-radius: 15px;
      .peronsal-aside {
        position: absolute;
        width: 240px;
        height: 100%;
        left: 0;
        top: 0;
        // background:;
        border-radius: 15px 0 0 15px;
        // background: url("/static/klk/img/greatwall.png") no-repeat bottom
        //   #f75656;
        // background-size: 100% 30%;
        background: url("/static/public/image/userImg/mockup_bg.png") right bottom no-repeat, url("/static/public/image/userImg/mackup_bg_right.png");
      }
      .vp-admin-wrap-close {
        position: absolute;
        z-index: 2000;
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
            // &::before{
            //   color: #fff;
            // }
          }
        }
        // .vp-admin-wrap-close-empty:hover {
        //   // a {
        //   //   -webkit-animation: animate 1s infinite linear;
        //   //   animation: animate 1s infinite linear;
        //   //   -moz-animation: animate 1s infinite linear;
        //   //   -o-animation: animate 1s infinite linear;
        //   //   -ms-animation: animate 1s infinite linear;
        //   //   // animation: rotate 1s linear infinite;
        //   //   // transform: rotate(90deg);
        //   //   // transition: transform 0.3s ease-in-out;
        //   //   width: 24px;
        //   //   height: 24px;
        //   //   top: 7px;
        //   //   left: 7px;
        //   // }
        // }
        // .vp-admin-wrap-close-empty:re {
        //   a {
        //     // animation: rotate 1s linear infinite;
        //     transform: rotate(90deg);
        //     transition: transform 0.3s ease-in-out;
        //     width: 24px;
        //     height: 24px;
        //     top: 7px;
        //     left: 7px;
        //   }
        // }
      }
    }
    .loading {
      width: 1030px;
      height: 584px;
      background: #fff;
      z-index: 99999;
      position: absolute;
      top: 66px;
      left: 240px;
      overflow: hidden;
      p {
        color: #666;
        font-size: 14px;
        text-align: center;
        margin-top: 100px;
      }
      svg {
        position: absolute;
        bottom: 0;
        left: 0;
        .speed-1 {
          animation-delay: -4s;
          animation: tcg-animation-move-forever 12s linear infinite;
          opacity: 0.8;
        }
        .speed-2 {
          animation-delay: -4s;
          animation-duration: 8s;
          animation: tcg-animation-move-forever 12s linear infinite;
        }
        .speed-3 {
          animation-delay: -8s;
          animation-duration: 4s;
          animation: tcg-animation-move-forever 12s linear infinite;
          opacity: 0.8;
        }
        .speed-4 {
          animation: tcg-animation-move-forever 12s linear infinite;
          opacity: 0.8;
        }
        @keyframes tcg-animation-move-forever {
          0% {
            transform: translate(-90px, 0);
          }
          100% {
            transform: translate(85px, 0);
          }
        }
      }
    }
    // 个人中心全局样式
    .ivu-input:focus {
      border: 1px solid rgba(254, 134, 93, 0.6);
      box-shadow: inset 0 1px 10px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
    }
    .ivu-input:hover {
      border: 1px solid rgba(254, 134, 93, 0.6);
      box-shadow: inset 0 1px 10px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
    }
    .ivu-input {
      background: #f9f9f9;
      height: 36px;
      border-radius: 10px;
      border: 1px solid #f5f5f5;
      box-shadow: inset 0 1px 10px 0 rgba(0, 0, 0, 0.06);
    }
    //  单选框
    .ivu-radio-wrapper {
      font-size: 14px;
    }
    .ivu-radio-checked .ivu-radio-inner {
      border-color: #ccc;
    }
    .ivu-radio-inner::after {
      background: #ff9146;
    }
    .ivu-carousel-dots li.ivu-carousel-active > button.radius {
      width: 10px;
      height: 10px;
      background: #ff9146;
    }
    .ivu-carousel-dots li button.radius {
      width: 10px;
      height: 10px;
      margin-right: 8px;
    }
    .radio-span {
      font-size: 16px;
    }
    //  下拉框
    .ivu-select-selection {
      background: #f9f9f9;
    }
    .ivu-select-dropdown {
      overflow: hidden;
      margin: 0;
      padding: 2px 0 0 0;
      max-height: 520px;
      // height: auto;;
    }
    .ivu-select-dropdown-list {
      height: auto;
      overflow: auto;
      width: 140%;
      padding-right: 30px;
      background: linear-gradient(to bottom, RGBA(65, 60, 90, 0.85) 0, RGBA(0, 5, 26, 1) 100%);
      // height: 100%;
    }
    .ivu-select-item {
      color: #fff;
      font-size: 14.25px !important;
    }
    .ivu-select-item:hover {
      background: #000;
      color: #f90;
    }
    .ivu-icon-arrow-down-b {
      color: #ccc;
    }
    .ivu-icon-arrow-down-b:before {
      content: "\F123";
    }
    .ivu-select-single .ivu-select-selection {
      height: 38px;
      background: linear-gradient(to bottom, RGBA(255, 255, 255, 1) 0, RGBA(255, 255, 255, 1) 50%, RGBA(240, 240, 240, 1) 100%);
      color: #666;
      border-radius: 10px;
      box-shadow: 0;
    }
    .ivu-select-selection:hover {
      border-color: #dddee1;
      background: #f90;
      color: #fff;
      //   .ivu-select-single .ivu-select-selection .ivu-select-placeholder,.ivu-select-single .ivu-select-selection .ivu-select-selected-value{
      //     color: #fff !important;
      //  }
      .ivu-icon-arrow-down-b {
        color: #fff;
      }
    }
    .ivu-select:focus .ivu-select-selection {
      border: 1px solid rgba(254, 134, 93, 0.6);
      box-shadow: inset 0 1px 10px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
    }
    .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
    .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
      height: 38px;
      line-height: 38px;
      border-radius: 8px;
      color: inherit;
      font-size: 14.25px;
    }
    .ivu-icon-arrow-down-b:hover {
      .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
      .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
        color: #fff;
      }
    }
    .ivu-select-single .ivu-select-selection .ivu-select-placeholder:hover,
    .ivu-select-single .ivu-select-selection .ivu-select-selected-value:hover {
      color: #fff;
    }
    .ivu-select-item-selected:hover {
      background: #000;
    }
    .ivu-select-item-selected {
      background: linear-gradient(to bottom, RGBA(65, 60, 90, 0.85) 0, RGBA(0, 5, 26, 1) 100%);
    }
    .ivu-select-visible .ivu-select-selection {
      border-color: #dddee1;
      outline: none;
      box-shadow: 0;
    }
    .ivu-select-visible {
      border: none;
    }
    .ivu-select-item-focus {
      background: transparent;
    }
    // 轮播图
    .ivu-page-next,
    .ivu-page-prev {
      background-color: transparent;
    }
    .ivu-page-item {
      background-color: transparent;
    }
    .ivu-page-item-active {
      background-color: #2d8cf0;
      border-color: #2d8cf0;
    }
    // 表格
    .ivu-table-wrapper {
      border: none;
    }
    .ivu-table:after {
      width: 0;
    }
    .ivu-table-cell {
      padding: 0 5px;
    }
    .ivu-table-cell span.listShowAA{
			color: rgb(255, 145, 70);
			cursor: pointer
		}
		.ivu-table-cell span.listShowAA:hover{
			text-decoration: underline;
		}
    .ivu-table {
      border-radius: 0 0 15px 0;
    }
    .ivu-table td.demo-table-info-column {
      background: transparent;
      color: #666;
    }
    .ivu-table-body {
      height: 555px;
      background: #efefef;
      border-radius: 0 0 15px;
    }
    .ivu-table-tip table td {
      border-radius: 0 0 15px;
      height: 555px;
    }
    .ivu-table:before {
      width: 0;
    }
    .ivu-table-header {
      border-top: 1px solid #dcdcdc;
    }
    .ivu-table th {
      height: 28px;
      color: rgb(148, 148, 148);
      border-bottom: 1px solid #dcdcdc;
      position: relative;
    }
    .ivu-table th:nth-child(1)::before {
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 6px;
      //  margin-left: 6px;
      vertical-align: text-bottom;
      cursor: pointer;
      position: absolute;
      top: 6px;
      right: 0;
      background: #ddd url("/static/public/image/userImg/list-icon.png") no-repeat;
      background-position: -342px -21px;
    }
    .ivu-table td {
      background: #efefef;
    }
    // 时间框
    .ivu-date-picker-cells-header span {
      color: #2361fe;
    }
    .ivu-date-picker-cells-header span:nth-child(1) {
      color: #fd2f28;
    }
    .ivu-date-picker-cells-header span:last-child {
      color: #fd2f28;
    }
    .ivu-picker-panel-body {
      background: linear-gradient(to bottom, RGBA(65, 60, 90, 0.92) 0, RGBA(81, 78, 98, 0.92) 100%);
    }
    .ivu-date-picker-cells span em {  
      color: #a7a7a7;
      border-radius: 50%; 
    }
    .ivu-date-picker-cells-cell-next-month em {
      color: #fff !important;
    }
    .ivu-date-picker-cells-cell:hover em {
      background: RGBA(254, 192, 83, 0.82);
    }
    .ivu-date-picker-header-label {
      color: #fff;
    }
    .ivu-date-picker-cells-cell-range::before {
      background: transparent !important;
    }
    .ivu-icon-ios-calendar-outline {
      line-height: 36px;
      color: #ccc;
    }
    .ivu-icon-ios-calendar-outline:before {
      content: "\F123";
    }
    .ivu-btn-text,
    .ivu-btn-ghost {
      color: #fff;
    }
  }

  .zhie {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // background: #fff;
    // z-index: 888;
    // background-color: RGBA(0, 0, 0, 0.5);
    filter: blur(9px);
  }
	
	//个人投注记录
	.bet_box {
		.ivu-table-body{
			height: 488px;
			box-sizing: border-box;
		}
	}
	.bet_box+.loading{
		top: 128px;
		height: 526px;
  }
  
	//下级报表
  .agency_repot{
		.ivu-table-body{
			height: 487px;
			box-sizing: border-box;
    }
    .ivu-table-tip table td{
      height: 487px;
			box-sizing: border-box;
    }
	}
  .agency_repot+.loading{
		top: 128px;
		height: 528px;
  }

  //下级列表
  .apply_list+.loading{
    top: 128px;
		height: 528px;
  }
  
	//代理报表
	.agency_repot_agency{
		.ivu-table-body{
			height: 420px;
			box-sizing: border-box;
			
		}
	}
  .agency_index+.loading{
		top: 128px;
		height: 528px;
  }
  //下级财务
    .next+.loading{
        top:123px;
        height:527px;
    }

  .next{
    .ivu-table-body{
      height:485.3px;
      box-sizing: border-box;
      }
    .ivu-table-tip{
      table{
      td{
      height: 485.3px;
      box-sizing: border-box;
      }
     }
    }
 }

      //下级收益  
    .income+.loading{
      top:137.6px;
      height: 512.4px;
    }
    .income2+.loading{
      top: 67px !important;
      height: 581px;
    }
   .income{
    .income-content{
      .ivu-table-body{
      height:484px;
      box-sizing: border-box;
      }
      .ivu-table-tip{
      table{
      td{
      height: 484px;
      box-sizing: border-box;
      }
      }
      }
      }

      }
	
    .people+.loading{
      top:130px;
      height: 520px;
    }
   .people{
    .people-content{
      .ivu-table-body{
      height:489px;
      box-sizing: border-box;
      }
      .ivu-table-tip{
      table{
      td{
      height: 489px;
      box-sizing: border-box;
      }
      }
      }
      }

      }
	 
            
          
          
</style>
