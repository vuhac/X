<template>
  <div class="header" style="position: absolute;
    top: 0;
    left: 0;
    z-index: 10;">
   <div class="wrapper">
            <div id="logo-bg">
                <a href="javascript:void(0)" style="display:block;height:100%" @click="$router.push('/');">
                    <img src="/static/pjyl/img/pjyl/logo.png">
                </a>
            </div>
             <ul class="service-nav">
                        <li @click="goresister">免费开户</li>
                    <li ng-click="lineChatClick()">在线客服</li>
              </ul>
                <div id="account-box">
                    <form  class="ng-scope ng-pristine ng-invalid ng-invalid-required" v-if="!userinfo">
                        <div class="input-group" style='text-align:center;'>
                            <input id="userName" type="text" v-model="passKey.userName" @blur="getCode" placeholder="帐号："  class="ng-pristine ng-invalid ng-invalid-required">
                            <div id="check-code-wrapper" v-if="code_show">
                                <input data-checkcode-retriever="checkCode" type="text" placeholder="验证码" v-model="passKey.code" checkcode-type="Login" required="" tabindex="3" class="ng-pristine ng-invalid ng-invalid-required" style="width:75px;">
                                <img id="captcha" ng-show="checkCode.image" ng-src="" class="ng-hide">
                            </div>
                            <input id="login_password" v-model="passKey.password" type="password" placeholder="密码：" class="ng-pristine ng-invalid ng-invalid-required">
                            <img v-if="code_show" @click='getCode' :src="codeImg" alt="" style="width:74px;height:28px;vertical-align:middle;margin-right:5px;">
                        </div>
                        <div class="btn-group">
                            <button id="login-box"  @click.stop="login" type="button" class="ng-binding">登入</button>
                            <button id="forget-box" @click.stop="forget" type="button" >忘记密码</button>
                        </div>
                        <!-- <div id="agree" ng-show="loginOver" class="ng-hide" style="display: block;">
                            点击登入表示同意<a ng-click="agreement()">用户协议</a>
                        </div> -->
                    </form>

                    <div v-if="userinfo" class="userinfoBox">
                        <div class="countName">
                          <div class="counts">
                            <span>帐号：</span><span>{{userinfo.userName}}</span>
                          </div>
                          <div class="countBalance">
                            <span>余额：</span><span style="margin-right: 5px;">{{userinfo.balance}}</span>
                            <a href="javascript:void(0)"><img @click="getBalance" src="/static/pjyl/img/pjyl/index/refresh.png" alt=""></a>
                          </div>
                        </div>
                        <ul class="countOpt">
                          <li @click="goUserCen('personage',0)">
                            <a href="javascript:void(0)">会员中心</a>
                          </li>
                          <li @click="goUserCen('recharge',0)">
                            <a href="javascript:void(0)">充值</a>
                          </li>
                          <li @click="goUserCen('withdraw',0)">
                            <a href="javascript:void(0)">取款</a>
                          </li>
                          <li style="background:#c89752;" @click="logout">
                            <a href="javascript:void(0)">退出</a>
                          </li>
                        </ul>
                    </div>


                </div>
             <!-- <ul id="language" select-language="">
                <li ng-click="addFavoriteClick()">添加我的最愛</li>
                <li ng-repeat="item in language" data-language="zh-CN" class="ng-scope ng-binding">简体中文/</li> -->
                <!-- <li ng-repeat="item in language" data-language="zh-TW" class="ng-scope ng-binding">繁体中文</li> -->
                <!-- <li ng-repeat="item in language" data-language="en-US" class="ng-scope ng-binding">English</li> -->
                <!-- <li ng-repeat="item in language" data-language="th" class="ng-scope ng-binding">ภาษาไทย</li> -->
              <!-- </ul>   -->
        </div>
    <div class="nav">
        <div class="wrapper">
        <ul class="nav-bar">
        <li
          class="tpT"
          v-for="(item,i) in classifyList"
          :key="i"
          :class="{isColor:item.hotShow ==true}"
        >
          <img src="/static/pjyl/img/thirdparty/hot.gif" class="x-dh-i" alt v-if="item.hotShow">
          <span class="x-dh-t" @click="goLink(item)">{{item.name}}</span>
          <span class="x-dh-b" @click="goLink(item)">{{item.text}}</span>

          <div class="girl dropdown">
            <ol>
              <li v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">
                <a href="javascript:void(0)">
                  <img :src="v.img" width="37" height="21" alt v-if="v.img">
                  <span>{{v.name}}</span>
                </a>
              </li>
            </ol>
          </div>
        </li>
      </ul>

     
       </div>
    </div>
  </div>
</template>
<script>
import UserService from '@/service/public/UserService'
import {postS,getS} from '@/service/public/service.js'
import data from '../../public/games/public.js'

export default{
  mixins: [data],
   data () {
     return {
        passKey:{
          userName:"",
          password:""
        },
        codeImg: '/static/public/image/common/code.jpg',
        code_show: parseInt(localStorage.is_code_show),
        classifyList: [
           {
            name: "首页",
            text: "HOME",
            link: "/home"
          },
          {
            name: "购彩大厅",
            text: "LOTTERY",
            platform: "vr_lottery",
            link: "/plays/hall"
          },
          {
            name: "棋牌游戏",
            text: "CHESS",
            platform: "KY_CHESS",
            hotShow: true,
            link: "/home/qipai",
            gameName: "0",
            list: [
              {
                name: "开元棋牌",
                gameName: "610",
                platform: "KY_CHESS",
                link: "/home/games?id=10042&name=开元棋牌",
              },
              {
                name: "VG棋牌",
                gameName: "830",
                platform: "KY_CHESS",
                link: "/home/games?id=10041&name=VG棋牌",
              }
            ]
          },
          {
            name: "真人娱乐",
            text: "LIVE CASINO",
            link: "/home/live",
            platform: "live_casino",
            hotShow: true,
            list: [
              {
                name: "AG视讯",
                img: "/static/pjyl/img/thirdparty/agty.png",
                id: "31"
              },
              {
                name: "BBIN视讯",
                img: "/static/pjyl/img/thirdparty/bb.png",
                id: "32"
              },
              {
                name: "BG视讯",
                img: "/static/pjyl/img/thirdparty/bg.png",
                id: "3180"
              },
              {
                name: "DG视讯",
                img: "/static/pjyl/img/thirdparty/gpi.png",
                id: "42"
              },
              {
                name: "DS视讯",
                img: "/static/pjyl/img/thirdparty/DS.png",
                id: "34"
              },
              {
                name: "LEBO视讯",
                img: "/static/pjyl/img/thirdparty/lebo.png",
                id: "44"
              },
              {
                name: "OG视讯",
                img: "/static/pjyl/img/thirdparty/evo.png",
                id: "48"
              },
              {
                name: "eBET视讯",
                img: "/static/pjyl/img/thirdparty/ebet.png",
                id: "43"
              },
              {
                name: "LMG视讯",
                img: "/static/pjyl/img/thirdparty/LMG.png",
                id: "45"
              },
              {
                name: "欧博视讯",
                img: "/static/pjyl/img/thirdparty/ab.png",
                id: "46"
              },
              {
                name: "SA视讯",
                img: "/static/pjyl/img/thirdparty/sa.png",
                id: "49"
              }
            ]
          },
          {
            name: "捕鱼达人",
            text: "FISH",
            link: "/home/buyu"
          },
          {
            name: "体育赛事",
            text: "SPORTS",
            platform: "sport",
            link:"/home/tiyu",
            list: [
            {
              name: "皇冠体育",
              img: "/static/pjyl/img/thirdparty/hg.png",
              id: "39"
            },
            {
              name: "沙巴体育",
              img: "/static/pjyl/img/thirdparty/saba.png",
              id: "38"
            },
            {
              name: "BBIN体育",
              img: "/static/pjyl/img/thirdparty/bb.png",
              id: "40"
            },
            {
              name: "AG体育",
              img: "/static/pjyl/img/thirdparty/agty.png",
              id: "41"
            }
          ]
          },
          
          
          {
            name: "电子游艺",
            text: "ELECT RONIC",
            platform: "MG_GAME",
            hotShow: true,
            link: "/home/games?id=10022&name=MG老虎机",
            list: [
              {
                name: "PT老虎机",
                img: "/static/pjyl/img/thirdparty/pt.png",
                num: "10024"
              },
              {
                name: "AG老虎机",
                img: "/static/pjyl/img/thirdparty/agty.png",
                num: "10015"
              },
              {
                name: "CQ9电子",
                img: "/static/pjyl/img/thirdparty/CQ9.png",
                num: "10018"
                // img: require("/static/pjyl/img/thirdparty/bb.png"),
                // id: "41"
              },
              {
                name: "MG老虎机",
                // img: require("/static/pjyl/img/thirdparty/agty.png"),
                img: "/static/pjyl/img/thirdparty/mg.png",
                num: "10022"
              },
              {
                name: "FG老虎机",
                img: "/static/pjyl/img/thirdparty/fg.png",
                num: "10020"
              }
            ]
          },
          
          
          {
            name: "优惠活动",
            text: "PROMOTION",
            link: "/home/youhui"
          },
          {
            name: "代理加盟",
            text: "AGENT",
            link: "/home/agent"
          }
        ]
     }
   },
   methods:{
    goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {
        bool: true
        })
        this.$store.commit('showContent', {
        parent: name
        })
        this.$store.commit('showNav', {
        child: num
        })
    },
    //刷新金额
    getBalance () {
        // this.showReload = true
        getS(`member/balance`).then(res => {
            if (res.code == 200) {
            let userinfo = JSON.parse(localStorage.userinfo)
            userinfo.balance = res.data.member
            userinfo.agent=res.data.agency
            this.$store.commit('mainState/reloadUserinfo', userinfo)
            this.showReload = false
            alert("刷新余额成功！")
            }
        })
    },
    logout () {
        UserService.logout.call(this)
    },


    // 验证码
    getCode() {
      if (this.code_show == 0) {
        return;
      }
      if (this.passKey.userName.length < 5) {
           alert("请输入6位帐号");
           this.passKey.userName = ''
          //  var oInput = document.getElementById('userName')
          //  oInput.focus()
           return false
      }
       getS(`captcha`,{ userName: this.passKey.userName } ).then(res => {
        if (res.code == 200) {
          this.codeImg = res.data.captcha_image_text;
          this.passKey.captcha_key = res.data.captcha_key;
        }else{
            this.$store.commit('alert/showTipModel',{
               bool:true,
               title:res.message,
               model:'warn'
            })
        }
      });
    },
      // 登录
    login () {
        if (!this.validateAccountLogin(this.passKey.userName)) {
          alert('请输入6-20位数字或字母组成的帐号')
          return false
        }
        if (!this.validateAccountLogin(this.passKey.password)) {
          alert('请输入6-20位数字或字母组成的密码')
          return false
        }
        if(this.code_show){
          if (this.passKey.code == '') {
          alert('验证码请务必输入')
          return false
        }
        }
        if(this.code_show){
           if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
             alert('请输入4位验证码')
             return false
         }
        }

           postS(`login`, this.passKey).then(res => {
           if (res.code == 200) {
            UserService.setCache(res, 'v1', 'login')
            window.location.href = '/'
          } else {
            alert(res.message)
            this.is_code_show();
          }
        })
    },
    //忘记密码
    forget(){
      alert('忘记帐号密码，请联系在线客服人员取回！')
    },
    is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },



      goLink(item) {
      if (item.link) {
        if (item.link == "service") {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item =>item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
        } else if (item.link == "/plays/hall") {
             window.open("#/plays/hall");
             return false;
        }else if(item.link == "/home/youhui"){
          this.$router.push(item.link);
        }else {
          this.$router.push(item.link);
        }
      } else if (item.gameName) {
        this.trustLogin(item);
      }
     },

      thirdParty(item, platform) {
      if (item.link == "/plays/hall") {
        window.open("#/plays/hall");
        return false;
      }
      if (item.id) {
        this.getItemId(item);
      } else if (item.gameName) {
        this.trustLogin(item);
      } else if (item.num) {
        this.$router.push("/home/games?id=" + item.num);
      } else {
        this.$router.push(item.link);
      }
    },

    goresister(){
        this.$router.push("/home/register");
    }
   },
   created(){
    this.is_code_show();
   },
  computed:{
    userinfo () {
        return this.$store.state.mainState.userinfo
    }
  },
}
</script>
<style lang="less" scoped>



      .header{
            // position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 2;
            height: 167px;
            background: url(/static/pjyl/img/pjyl/header.jpg) center top no-repeat;
            .wrapper{
                height:115px;
                position:relative;
                width:1200px ;
                margin:0 auto;
                #logo-bg{
                    position: relative;
                    display: inline-block;
                    width: 252px;
                    height: 75px;
                    margin-top: 20px;
                    img{
                      width:100%;
                      height:100%;
                    }
                }
                .service-nav {
                  // display: inline-block;
                  width:102px;
                  // vertical-align: middle;
                  position:absolute;
                  right:0;
                  top:12px;
                  li{
                    width: 100px;
                    height: 28px;
                    margin-left: 5px;
                    color: #fff;
                    font-size: 20px;
                    font-family: 'Microsoft YaHei';
                    line-height: 28px;
                    background: #c89752;
                    border-radius: 5px;
                    text-align:center;
                    cursor: pointer;
                    //  float: left;
                     margin-top:12.5px;
                  }
                  li:hover{
                    background:#efb665;
                  }
               }
                #account-box{
                   position: absolute;
                   top: 26px;
                   right: 160px;
                  .userinfoBox{
                      // width:330px;
                      height:75px;
                      // border:1px solid #eee;
                      .countName{
                        // width:100px;
                        height:30px;
                        line-height: 30px;
                        color:#fff;
                        font-size:15px;
                        margin-bottom: 5px;
                        margin-top: 5px;
                        box-sizing: border-box;
                        .counts{
                          display:inline-block;
                          margin-left: 5px;
                        }
                        .countBalance{
                          display:inline-block;
                          // width:200px;
                          // width:115px;
                          // overflow:hidden;
                          margin-left:40px;
                          line-height: 20px;
                          img{
                            float: right;
                            vertical-align: middle;

                          }
                        }
                      }
                      .countOpt{
                        // width:215px;
                        overflow:hidden;
                        li{
                          float: left;
                          cursor: pointer;
                          padding: 5px 9px;
                          // background: red;
                          background: rgba(255,155,0,.8);
                          border-radius: 10px;
                          margin: 0 5px;
                          a{
                            // width:
                            display:inline-block;
                            color:#fff;
                          }
                        }
                      }

                  }




                     .input-group, .btn-group {
                      display: inline-block;
                      vertical-align: top;
                     }

                   .input-group{
                       width:240px;
                       input{
                          width: 148px;
                          height: 30px;
                          margin: 0 3px 7px 0;
                          padding-left: 5px;
                          color: #a67a49;
                          font-size: 14px;
                          border: 1px solid #a57a4a;
                          border-radius: 5px;
                          line-height: normal;
                       }
                       #check-code-wrapper {
                           position: relative;
                          display: inline-block;
                      }
                   }
                   .btn-group{
                        button {
                        display: block;
                        width: 83px;
                        height: 30px;
                        margin: 0 3px 7px 0;
                        padding: 0;
                        vertical-align: top;
                        border: none;
                        cursor:pointer;
                        }
                       #login-box {
                          color: #fff;
                          font-size: 22px;
                          font-family: 'Microsoft YaHei';
                          background: url(https://cdn.weibo-hk.com/Web.Portal/CC001-01.Portal/Content/Views/Shared/images/login.png) center top no-repeat;
                      }
                      #forget-box {
                          color: #a77d49;
                          font-size: 14px;
                          background: none;
                     }
                   }
                }

                    #language {
                      position: absolute;
                      top: 93px;
                      right: 0;
                      display: inline-block;
                      color: #a77c49;
                      font-size: 12px;
                }
                li{
                  float:left;
                  cursor:pointer;
                }
            }
            .nav{
               height: 52px;
               text-align: center;
               background: #535353;
               .wrapper{
                  position: relative;
                  width: 1000px;
                  margin: 0 auto;
                  display:flex;

              .nav-bar {
                 width:1000px;
                 height: 52px;
                //  display: inline-block;
                 vertical-align: middle;
                  li {
                    height: 52px;
                    float: left;
                    position: relative;
                    font-size: 16px;
                    color: #ffd200;
                    cursor: pointer;
                    padding: 8px 22px 0;
                    text-align: center;

                    &.tpT {
                      line-height: 20px;

                      // &:nth-child(2) {
                      //   padding-left: 20px;
                      // }
                    }

                    a {
                      width: 100%;
                      height: 100%;
                      display: inline-block;

                      .bg-home {
                        width: 25px;
                        height: 23px;
                        display: block;
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                        background: url("/static/public/image/userImg/header_nav_sprites.png") -10px -10px;
                      }

                      .bg-home:hover {
                        background: url("/static/public/image/userImg/header_nav_sprites.png") -55px -10px;
                      }
                    }

                    .x-dh-i {
                      position: absolute;
                      top: 0px;
                      right: -6px;
                    }

                    .x-dh-t {
                      display: block;
                      font-size: 16px;
                    }

                    .x-dh-b {
                      font-size: 12px;
                      white-space: nowrap;
                      color:#dfdfdf;
                    }

                    .dropdown {
                      left: 50%;
                      display: none;
                      position: absolute;
                      top: 51px;
                      z-index: 999;
                      background: rgba(31, 31, 31, 0.8);
                      line-height: normal;
                      color: #fff;
                      font-size: 13px;
                      transform: translateX(-50%);

                      li {
                        line-height: 40px;
                        color: #fff;
                        width: 120px;
                        height: 40px;
                        border-bottom: 1px dashed #ccc;
                        margin: 0;
                        padding:0;

                        a {
                          width: 100%;
                          height: 100%;
                          display: inline-block;
                          text-align: center;

                          color: #fff;

                          img {
                            border: 0;
                            vertical-align: middle;
                          }
                        }
                      }

                      li:hover {
                        background: rgb(180, 140, 104);
                      }
                    }
                  }

                  li:hover {
                    .x-dh-t {
                      color: #ff5555;
                    }

                    .x-dh-b {
                      color: #ff5555;
                    }

                    .dropdown {
                      display: block;
                    }
                  }
                }
                

            }
          }
        }
</style>
