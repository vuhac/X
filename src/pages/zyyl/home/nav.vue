<template>

    <div style="height:50px;background:#684d82;width:100%;" >
      <div id="header-nav" style="width:1200px;margin:0 auto;position:relative;height:50px;">
          <!-- <span id="header-line-01" style="position: absolute;border-left: 1px solid #9683a8;height: 20px;width: 1px;top: 18px;left: 650px;"></span> -->


          <a v-for="(item,index) in classifyList" :key="index"  href="javascript:void(0)" class="tplnk" @click="goLink(item)">
            <div class="tplnk_rline">
                  <div class="arrow"></div>
              </div>
              <div class="nav-cur"></div>
              {{item.name}}
          </a>


          <div class="userBox" v-if="userinfo" style="padding-top:3px;">


            <div v-if="!logoStyle">
              <!-- 首页 -->
              <div  class="header-index-wrap" style="z-index:999;position: absolute;width: 291px;height: 55px;right: 0;background:#fff;color:#000;box-sizing: border-box">
                  <div id="headerBase01"></div>
                  <div style="display: inline-block;text-align: center;float: left">
                      <p style="font-size: 14px;color:#000;margin-top: 6px;">{{userinfo.userName}}<span class="index-level-0" style="margin: 4px auto 0 5px;display: inline-block;position:relative;top:3px;left: 2px;"></span></p>
                  </div>
                  <img id="baseImg02" class="index-login-arrow" src="/static/zyyl/img/logo/arrowd.png">
                  <!-- 首页 -->
                  <div class="index-hidden-area">
                      <div style="margin-top: 15px;font-size: 14px;color:#999999;text-align: left;width: 100%;margin-left: 15px;margin-right: auto">
                          余额：{{userinfo.balance}}
                          <!-- <img id="iconMessage" style="cursor: pointer;position: absolute;top: 8px;left: 252px;" src="/static/zyyl/img/logo/vip0.png"> -->
                          <a href='javascript:void(0)' style="color:#666;display: inline-block;padding: 5px;border: 1px solid #eee;border-radius: 15px;margin-left: 108px;font-size: 14px;cursor:pointer;" @click="getBalance">刷新余额</a>
                          <span id="messageCircle" style="position: absolute;width: 10px;height: 10px;display: inline-block;background: red;border-radius: 50%;right: 12px;top: 5px;visibility: hidden"></span>
                      </div>
                      <div  class="deposit-button" style="cursor: pointer;font-size: 16px;margin: 20px auto 0 auto;color: #fff;line-height: 36px;text-align: center;border-radius: 5px;background: rgb( 106, 67, 145 );width: 260px;height: 36px;" @click="goUserCen('recharge',0)">充值</div>
                      <div style="width: 260px;margin: 0 auto;font-size: 0;padding-top: 10px;">
                          <span  style="cursor: pointer;text-align: center;color: #a460e8;line-height:36px;font-size:16px;display: inline-block;border: 1px solid #a460e8;border-radius: 5px;background: rgb( 255, 255, 255 );width: 258px;height: 36px;box-sizing: border-box" @click="goUserCen('withdraw',0)">提款</span>
                      </div>
                      <div style="width: 260px;margin: 0 auto;font-size: 0;padding-top: 15px;overflow: hidden">
                          <p  style="float: left;cursor:pointer;font-size: 14px;line-height: 1;color: #62a5e3;" @click="goUserCen('personage',0)">进入会员中心&gt;</p>
                          <p @click="logout" style="float: right;cursor:pointer;font-size: 14px;line-height: 1;color: #62a5e3;">退出登录&gt;</p>
                      </div>
                  </div>
              </div>

              <!-- 这里是否首页显示广告 -->
              <div v-show="!logoStyle" class='anBox' style='width:291px;position:absolute;right:0;top:238px;border-bottom:2px solid #684d82'>
                  <div class="index-wms-content-wrap" style="position: relative">
                      <div class="slide">
                        <h6>中奖名单</h6>
                        <!-- <table>
                          <tr v-for="(item,index) in winList" :key="index">
                            <td>
                              <img :src="item.imgsrc" alt="">
                              <p>帐号昵称：<span>{{item.name}}<br>昨日奖金：<i>{{item.cash}}</i></span></p>
                            </td>
                            <td :class="{oneIns:index==0,twoIns:index==1,threeIns:index==2}">{{index+1}}</td>
                          </tr>

                        </table> -->

                        <div style="overflow:hidden;top:0;" class="bWinlist" id="winUl">
                          <ul class="winerList">
                            <li class="clearfloat" v-for="(item,key) in scrollDatas" :key="key" style="
                              vertical-align: middle;
                              padding: 5px;
                              overflow: hidden;
                              box-sizing: border-box;">
                              <img :src="item.ico" style="
                                    width: 65px;
                                    float: left;
                                    margin-left: 5px;
                                    margin-right:5px;">
                              <div class="rightBox" style="
                                    float: left;
                                   
                                    margin-top: 5px;">
                                <p class="color" style='padding:10px 0 5px;'>
                                  {{item.account}}**** {{item.name}}
                                </p>
                                <p class="color"  style='padding:10px 0 5px;'>喜中<span style="color:red;">¥{{item.out}}</span></p>
                              </div>

                            </li>
                          </ul>
                        </div>

                      </div>

                      





                  </div>


              </div>

            </div>

            <!-- 非首页 -->
            <div v-if="logoStyle">

              <div  class="header-index-wrap notHomeBox" style="z-index:999;position: absolute;width: 291px;height: 47px;right: 0;background:#71558c;color:#000;box-sizing: border-box">
                  <div id="headerBase01"></div>
                  <div style="display: inline-block;text-align: center;float: left">
                      <p style="font-size: 14px;color:#fff;margin-top: 6px;">{{userinfo.userName}}<span class="index-level-0" style="margin: 4px auto 0 5px;display: inline-block;position:relative;top:3px;left: 2px;"></span></p>
                  </div>
                  <img id="baseImg02" class="index-login-arrow" src="/static/zyyl/img/logo/arrowd.png">

                  <!-- 非首页影藏 -->
                  <div class="index-hidden-area notHome">
                      <div style="margin-top: 15px;font-size: 14px;color:#999999;text-align: left;width: 100%;margin-left: 15px;margin-right: auto">
                          余额：{{userinfo.balance}}
                          <!-- <img id="iconMessage" style="cursor: pointer;position: absolute;top: 8px;left: 252px;" src="/static/zyyl/img/logo/vip0.png"> -->
                          <a href='javascript:void(0)' style="color:#666;display: inline-block;padding: 5px;border: 1px solid #eee;border-radius: 15px;margin-left: 108px;font-size: 14px;cursor:pointer;" @click="getBalance">刷新余额</a>
                          <span id="messageCircle" style="position: absolute;width: 10px;height: 10px;display: inline-block;background: red;border-radius: 50%;right: 12px;top: 5px;visibility: hidden"></span>
                      </div>
                      <div  class="deposit-button" style="cursor: pointer;font-size: 16px;margin: 20px auto 0 auto;color: #fff;line-height: 36px;text-align: center;border-radius: 5px;background: rgb( 106, 67, 145 );width: 260px;height: 36px;" @click="goUserCen('recharge',0)">充值</div>
                      <div style="width: 260px;margin: 0 auto;font-size: 0;padding-top: 10px;">
                          <span  style="cursor: pointer;text-align: center;color: #a460e8;line-height:36px;font-size:16px;display: inline-block;border: 1px solid #a460e8;border-radius: 5px;background: rgb( 255, 255, 255 );width: 258px;height: 36px;box-sizing: border-box" @click="goUserCen('withdraw',0)">提款</span>
                      </div>
                      <div style="width: 260px;margin: 0 auto;font-size: 0;padding-top: 15px;overflow: hidden">
                          <p  style="float: left;cursor:pointer;font-size: 14px;line-height: 1;color: #62a5e3;" @click="goUserCen('personage',0)">进入会员中心&gt;</p>
                          <p @click="logout" style="float: right;cursor:pointer;font-size: 14px;line-height: 1;color: #62a5e3;">退出登录&gt;</p>
                      </div>
                  </div>
              </div>


            </div>





          </div>




<!-- 未登录 -->
          <div v-if="!userinfo">
<!-- 非首页 -->
            <div class="logoBox" v-show="!logoStyle">

              <div class="index-right-wrap" style="border-left:1px solid #ededed;border-right:1px solid #ededed">
                <a href="javascript:void(0)" target="_blank">
                    <picture>
                       
                    </picture>
                </a>
                    <p style="font-weight: bold;padding:20px 0;line-height: 1;width: 100%;color: #6a4391;font-size: 18px;text-align: center">会员登录</p>
                    <div class="input-wrap">
                        <i style="position: absolute;top: 11px;left: 15px;" class="index-sprite _3"></i>
                        <input v-model="passKey.userName" @blur="getCode" autocomplete="off" id="userName" class="user-icon" type="text" maxlength="20" placeholder="会员帐号">
                    </div>
                    <div class="input-wrap" >
                        <i style="position: absolute;top: 11px;left: 15px;" class="index-sprite _4"></i>
                        <input v-model="passKey.password" autocomplete="off" id="userPwd" class="pwd-icon" type="password" maxlength="20" placeholder="密码" style="border-top:0">
                    </div>

                    <div class="input-wrap" style="margin-bottom: 10px;" v-show="code_show">
                        <i style="position: absolute;top: 11px;left: 15px;" class="yzmPic" ></i>
                        <input v-model="passKey.code"  autocomplete="off" id="userPwd1" class="pwd-icon" type="test" maxlength="4" placeholder="验证码" style="border-top:0;padding-left:40px;" >
                        <img
                        class="yzmImg"
                         :src="codeImg" @click="getCode" />
                    </div>
                    <div style="width:100%;height:30px;" v-show="code_show==0">

                    </div>
                    <div class="index-login-btn" style="margin:10px auto 0px;" @click="login">登录</div>

                    <p class="index-other-function-text" style="margin:8px auto;">
                        <span style="cursor:default"><span style="cursor: pointer"  @click="forget">忘记密码</span></span>
                        <span @click="goRegister">没帐号？立即注册 &gt;</span>
                    </p>
                <!-- <div class="index-bottom-line"></div> -->




                <div class="index-wms-content-wrap" style="position: relative;">
                      <div class="slide" style="margin-top:0;">
                        <h6>中奖信息</h6>
                        <div style="overflow:hidden;top:0;" class="bWinlist" id="winUl">
                          <ul class="winerList">
                            <li class="clearfloat" v-for="(item,key) in scrollDatas" :key="key" style="
                              vertical-align: middle;
                              padding: 5px;
                              overflow: hidden;
                              box-sizing: border-box;">
                              <img :src="item.ico" style="
                                    width: 65px;
                                    float: left;
                                    margin-left: 5px;
                                    margin-right:5px;">
                              <div class="rightBox" style="
                                    float: left;
                                    margin-top: 5px;">
                                <p class="color" style='padding:10px 0 5px;'>
                                  {{item.account}}**** {{item.name}}
                                </p>
                                <p class="color"  style='padding:10px 0 5px;'>喜中<span style="color:red;">¥{{item.out}}</span></p>
                              </div>

                            </li>
                          </ul>
                        </div>
                      </div>

                </div>
            </div>




          </div>

          <div class="anotherLogoBox"  v-show="logoStyle">
                <div style="text-align: right;box-sizing: border-box;position: absolute;width: 306px;height: 48px;right: 0;overflow: hidden;padding-top: 9px;">
                    <span  style="margin-right: 10px;cursor: pointer;color: #fff;display: inline-block;width: 100px;height: 32px;background: #657fe3;border-radius: 5px;text-align: center;line-height: 32px;" @click="antLogin">登录</span>
                    <span  style="cursor:pointer;color: #fff;display: inline-block;width: 100px;height: 32px;background:#a671ff;border-radius: 5px;text-align: center;line-height: 32px;" @click="goRegister">免费开户</span>
                </div>
              </div>
          </div>



          </div>





      <vp-login ></vp-login>

    </div>


</template>

<script>
import $ from "jquery";
import data from "../../public/games/public.js";
import {postS,getS} from '@/service/public/service.js'
import vpLogin from "../admin/logo"
import vpRegister from "../admin/register"
import UserService from '@/service/public/UserService'

export default {
  mixins: [data],
  data() {
    return {
      winList:[],
      initwinList:[
          {
            name:"逆***",
            cash:"923770",
            imgsrc:"/static/zyyl/img/win/slder.jpg"
          },
          {
            name:"龙***",
            cash:"420732",
            imgsrc:"/static/zyyl/img/win/slder8.jpg"
          },
          {
            name:"赐***",
            cash:"231702",
            imgsrc:"/static/zyyl/img/win/slder1.jpg"
          },
          {
            name:"寒***",
            cash:"462465",
            imgsrc:"/static/zyyl/img/win/slder3.jpg"
          },
          {
            name:"小***",
            cash:"789361",
            imgsrc:"/static/zyyl/img/win/slder2.jpg"
          },

          {
            name:"六***",
            cash:"798452",
            imgsrc:"/static/zyyl/img/win/slder4.jpg"
          },
          {
            name:"黯***",
            cash:"462355",
            imgsrc:"/static/zyyl/img/win/slder5.jpg"
          },
          {
            name:"妥***",
            cash:"416513",
            imgsrc:"/static/zyyl/img/win/slder6.jpg"
          },
          {
            name:"杰***",
            cash:"645612",
            imgsrc:"/static/zyyl/img/win/slder7.jpg"
          },
          {
            name:"倪***",
            cash:"150653",
            imgsrc:"/static/zyyl/img/win/slder8.jpg"
          },
          {
            name:"帝***",
            cash:"465562",
            imgsrc:"/static/zyyl/img/win/td1.jpg"
          },

      ],
      // 公告是图片还是文字
      isTest:true,
      popoutObj:{
        client_type:"PC"
      },
      popups:"",
      // showPopout:false,


      isLogin:false,
      // isRegister:false,
      passKey:{
        userName:"",
        password:""
      },
      codeImg: '/static/zyyl/img/thirdparty/code.jpg',
      code_show: parseInt(localStorage.is_code_show),
      // 登录框样式
      logoStyle:false,
      // 中奖信息
      scrollDatas: [],

      classifyList: [
        {
          name:"首页",
          link:"/home"
        },
        {
          name: "彩票游戏",
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
              // gameName: "610",
              platform: "KY_CHESS",
              link: "/home/games?id=10042&name=开元棋牌",
            },
            {
              name: "VG棋牌",
              // gameName: "830",
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
              img: "/static/zyyl/img/thirdparty/agty.png",
              id: "31"
            },
            {
              name: "BBIN视讯",
              img: "/static/zyyl/img/thirdparty/bb.png",
              id: "32"
            },
            {
              name: "BG视讯",
              img: "/static/zyyl/img/thirdparty/bg.png",
              id: "3180"
            },
            {
              name: "DG视讯",
              img: "/static/zyyl/img/thirdparty/gpi.png",
              id: "42"
            },
            {
              name: "DS视讯",
              img: "/static/zyyl/img/thirdparty/DS.png",
              id: "34"
            },
            {
              name: "LEBO视讯",
              img: "/static/zyyl/img/thirdparty/lebo.png",
              id: "44"
            },
            {
              name: "OG视讯",
              img: "/static/zyyl/img/thirdparty/evo.png",
              id: "48"
            },
            {
              name: "eBET视讯",
              img: "/static/zyyl/img/thirdparty/ebet.png",
              id: "43"
            },
            {
              name: "LMG视讯",
              img: "/static/zyyl/img/thirdparty/LMG.png",
              id: "45"
            },
            {
              name: "欧博视讯",
              img: "/static/zyyl/img/thirdparty/ab.png",
              id: "46"
            },
            {
              name: "SA视讯",
              img: "/static/zyyl/img/thirdparty/sa.png",
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
            name: "电子游艺",
            text: "GAME",
            platform: "AG_GAME",
            selectNum:3,
            link: "/home/games?id=10022&name=MG老虎机",
            className:"LS-lines",
            hotShow:true,
        },
        {
          name: "体育赛事",
          text: "SPORTS",
          platform: "sport",
          link:"/home/tiyu",
          list: [
            {
              name: "皇冠体育",
              img: "/static/zyyl/img/thirdparty/hg.png",
              id: "39"
            },
            {
              name: "沙巴体育",
              img: "/static/zyyl/img/thirdparty/saba.png",
              id: "38"
            },
            {
              name: "BBIN体育",
              img: "/static/zyyl/img/thirdparty/bb.png",
              id: "41"
            },
            {
              name: "AG体育",
              img: "/static/zyyl/img/thirdparty/agty.png",
              id: "40"
            }
          ]
        },
        {
          name: "优惠活动",
          text: "PROMOTION",
          link: "/home/youhui"
        },
        // {
        //   name: "在线客服",
        //   text: "SERVICE",
        //   link: "service"
        // }
      ],
       // 滚动名单
      random: [
        {
          account: "",
          name: "PT游戏满月财富",
          ico: "/static/public/image/game/ptgame/ashfmf.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏丛林之心",
          ico: "/static/public/image/game/ptgame/ashhotj.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏猫女王",
          ico: "/static/public/image/game/ptgame/catqk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏埃斯梅拉达",
          ico: "/static/public/image/game/ptgame/esmk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏古怪猴子",
          ico: "/static/public/image/game/ptgame/fm.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏玛丽莲梦露",
          ico: "/static/public/image/game/ptgame/gtsmrln.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏年年有余",
          ico: "/static/public/image/game/ptgame/nian_k.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏幸运直击",
          ico: "/static/public/image/game/ptgame/sol.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏三倍猴子",
          ico: "/static/public/image/game/ptgame/trpmnk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏招财进宝",
          ico: "/static/public/image/game/ptgame/zcjb.jpg",
          in: 0,
          out: 0
        }
      ],
      carsourlist:["1220525424","467"],
    };
  },
  methods: {
    getWinlist(){
      console.log("开始选中奖名单")
      // 随机三个中奖名单
      let numList=[];

      for(let i =0;i<100;i++){
        let oNum=Math.floor(Math.random()*this.initwinList.length);
        if(numList.indexOf(oNum)==-1){
          numList.push(oNum);
          this.winList.push(this.initwinList[oNum]);
        }
        if(this.winList.length>=3){
          console.log(this.winList)
          return false;

        }
      }
      console.log(this.winList);
    },

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
      // console.log(this.code_show)
      if (this.code_show == 0) {
        return;
      }
      if(!this.passKey.userName){
        return false;
      }
      if (this.passKey.userName.length < 5) {
           alert("请输入6位帐号");
          //  this.passKey.userName = ''
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
    is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },
    // 登录
    login () {
        if (!this.validateAccountLogin(this.passKey.userName)) {
          alert('请输入5-20位数字或字母组成的帐号')
          return false
        }
        if (!this.validateAccountLogin(this.passKey.password)) {
          alert('请输入5-20位数字或字母组成的密码')
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
            // this.$router.push({
            //   name: 'clause'
            // })
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
    // // 打开注册框
    goRegister(){
      // 注册弹框
      // this.isRegister=true;
      this.$store.commit('yibo/showBox',{showBox:true,isLogin:false})
    },
    antLogin(){
      // this.isLogin=true;
      this.is_code_show()
      this.$store.commit('yibo/showBox',{showBox:true,isLogin:true})
    },
    // 小轮播图

    goHome() {
      this.$router.push("/home");
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
        }else{
          this.$router.push(item.link);
        }
        // this.trustLogin(item);
      }
    },
    thirdParty(item, platform) {
      console.log("132321132")
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
    }
  },

  created(){
    this.is_code_show();
    // this.genList();
    // 生成中将列表

    if(this.$router.currentRoute.fullPath=="/home"){
      this.logoStyle=false
    }else{
      this.logoStyle=true;
    }


    // this.getWinlist()

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

    // 随机账号
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
      let obj = {};
      Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)]);
      datas.push(obj);
    }
    // debugger
    // 求出随机数
    datas.forEach((item, v) => {
      item.in = Math.random().toFixed(2) * 1000;
      item.out =
        Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 10000
          : Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100;
      item.account = generateMixed(3);
      this.carsourlist[0]= Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 1220525424
          : Math.ceil(Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 1000000);
      this.carsourlist[1]=Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 1000
          : Math.ceil(Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 10);
    });
    this.scrollDatas = datas;





  },
   mounted() {

  },
  computed:{
    userinfo () {
        return this.$store.state.mainState.userinfo
    }
  },
  watch:{
    $route(){
      console.log(this.$router)
      if(this.$router.currentRoute.fullPath=="/home"){
        this.logoStyle=false
      }else{
        this.logoStyle=true;
      }
    },
  },
  components:{
    vpLogin,
    vpRegister
  }
};
</script>

<style lang="less" scoped>

  @keyframes animatesub {
    0% {
      top: 0;
    }
    100% {
      top: -4075px;
    }
  }
  .bWinlist{
    height:178px;
    position:relative;
    .winerList{
      animation: animatesub 120s linear infinite;
      position:absolute;
      left:0;
      top:0;
    }
  }



  .yzmPic{
    background:url(/static/zyyl/img/yzmpic.png) center center no-repeat;
    width:20px;
    height:20px;
    background-size:cover;
    position: absolute;
    top: 8px;
    left: 13px;
  }

  .yzmImg{
      position: absolute;
      top: 3px;
      width: 100px;
      right: 4px;
      height: 35px;
  }
  .carouse{
    width:260px;
    height:158px;
    a{
      img{
        width:100%;
        height:158px;
      }
    }
  }



  .tplnk {
    color: #fff;
    width: 112px;
    position: relative;
    font-size: 15px;
    top: 4px;


    height: 49px;
    line-height: 49px;
    text-align: center;
    text-decoration: none;
    display: block;
    float: left;
    // color: #484848;
    position: relative;
    // width: 130px;
    font-size: 14px;
    font-weight: bold;
    &:hover{
      color: #e1af7f;

    }

    .nav-cur {
        width: 110px;
        height: 4px;
        background: #d48aff;
        top: 44px;
        left: 0;
        position: absolute;
        display: none;
        color:#fff;
    }
  }

  .tplnk#nav_2 .icon-down, .tplnk#nav_3 .icon-down,.tplnk#nav_4 .icon-down, .tplnk#nav_6 .icon-down {
      position: absolute;
      top: 21px;
      right: 17px;
  }
  .tplnk#nav_2 .icon-down, .tplnk#nav_4 .icon-down, .tplnk#nav_3 .icon-down {
      top: 22px;
      right: 9px;
  }
  .icon-down {
      background-image: url(/static/zyyl/img/icon.png);
      background-position: -521px -387px;
      width: 11px;
      height: 6px;
  }

  .live-menu .info {
    position: relative;
    .live-agqj {
        position: absolute;
        top: 17px;
        left: 77px;
        width: 190px;
        height: 150px;
        cursor: pointer;
        img {
            margin: 0 0 0 15px;
        }
    }

    .live-agin {
        position: absolute;
        top: 17px;
        left: 268px;
        height: 150px;
        width: 141px;
        cursor: pointer;
        img {
            margin: 0 0 0 24px;
        }
    }

    .live-tel {
        position: absolute;
        top: 17px;
        height: 150px;
        width: 130px;
        right: 77px;
        cursor: pointer;
        img {
            margin: 0 0 0 10px;
        }
    }
  }

  .sports-menu {
      background: url(/static/zyyl/img/a_sprite.png) no-repeat;
      height: 184px;
      background-position: -546px -211px;
      left: -75px;
      top: 36px;
      width: 339px !important;
  }

  .sports-menu {
      // background: url(../../__images/sports-menu2.png) no-repeat;
      // width: 509px;
      // height: 184px;
      position: absolute;
      z-index: 101;
      // left: 198px;
      // top: 115px;
      // display: none;
      .info {
          position: relative;
          .sports-ysb {
              position: absolute;
              top: 17px;
              left: 8px;
              width: 155px;
              height: 150px;
              cursor: pointer;
              img {
                  margin: 0 0 0 5px;
              }
          }
          .sports-saba {
              position: absolute;
              top: 17px;
              left: 180px;
              height: 150px;
              width: 145px;
              cursor: pointer;
              padding-left: 5px;
              img {
                  margin: 0;
              }
          }
      }
  }
  ._1 {
      height: 184px;
      width: 343px;
      background-position: -546px -211px;
  }
  .index-sprite {
      background: url(/static/zyyl/img/a_sprite.png) no-repeat;
      display: block;
  }
  .sports-menu {
      width: 502px !important;
  }



  .lobby-menu {
      background: url(/static/zyyl/img/a_sprite.png) no-repeat;
      height: 183px;
      background-position: 0 -214px;
      width: 389px;

      // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAh8AAAC3CAMAAACFU8xJAAADAFBMV…qlcFwcmHh2ICuSGSw28y47/cn87+d3/rE7/xRodFcP8g1Wj0Ed7DVhcgAAAABJRU5ErkJggg==) no-repeat;
      // width: 410px;
      // height: 183px;
      position: absolute;
      z-index: 101;
      // top: 115px;
      // left: 50px;
      // display: none;
      text-align: center;

      .icon1 {
          position: absolute;
          top: 29px;
          left: 206px;
      }

      .info {
          width: 255px;
          height: 140px;
          padding: 24px 0 0 125px;
          color: #f8f2ff;
          font-size: 16px;
          display: inline-block;

          .div-top {
              width: 85px;
              float: left;
              height: 49px;
              line-height: 49px;
              text-align: center;
              cursor: pointer;

          }
          .div-middle {
              width: 85px;
              float: left;
              height: 49px;
              line-height: 49px;
              text-align: center;
              cursor: pointer;
          }
          .div-bottom {
              float: left;
              width: 85px;
              height: 49px;
              text-align: center;
              line-height: 49px;
              cursor: pointer;
          }
      }
  }

  .icon-small-hot {
      background-image: url(/static/zyyl/img/icon.png);
      background-position: -506px -381px;
      width: 15px;
      height: 15px;
  }





  .index-right-wrap {
      width: 290px;
      height: 456px;
      position: absolute;
      top: 0;
      right: 0px;
      z-index: 996;
      // border-bottom: 2px solid rgb(198, 171, 222);
      border-top: 2px solid rgb(198, 171, 222);
      background: rgb(255, 255, 255);
  }

  .input-wrap {
      position: relative;
      width: 260px;
      height: 40px;
      margin: 0px auto;
  }

  .index-sprite{background:url(/static/zyyl/img/a_sprite.png)  no-repeat;display: block}
  ._16{height:1px;width:1px;background-position:0 0;}
  ._4{height:18px;width:16px;background-position:-1px 0;}
  ._3{height:18px;width:16px;background-position:-17px 0;}
  ._9{height:18px;width:16px;background-position:-33px 0;}
  ._13{height:18px;width:24px;background-position: -49px 0;}
  ._14{height:34px;width:34px;background-position:0 -21px;}
  ._17{height:32px;width:41px;background-position:-36px -22px;}
  ._6{height:58px;width:58px;background-position:-1px -62px;}
  ._8{height:23px;width:69px;background-position:-93px -85px;}
  ._12{height:79px;width:79px;background-position:-83px 0;}
  ._20{height:143px;width:95px;background-position:-364px 0;}
  ._18{height:109px;width:122px;background-position:-651px 0;}
  ._15{height:205px;width:155px;background-position:-203px 0;}
  ._19{height:158px;width:168px;background-position:-478px 0;}
  ._2{height:42px;width:196px;background-position:0 -127px;}
  ._11{height:89px;width:278px;background-position:-902px -123px;}
  ._7{height:89px;width:278px;background-position:-907px -217px;}
  ._10{height:89px;width:278px;background-position:-909px -311px;}
  ._1{height:184px;width:343px;background-position:-546px -211px;}
  ._21{height:183px;width:543px;background-position:0 -214px;}
  ._15{height:254px;width:1200px;background-position:0 -419px;}
  ._5{height:120px;width:1200px;background-position:0 -678px;}



  .input-wrap input.user-icon {
      // text-indent: 40px;
  }
  .input-wrap input {
      color: rgb(153, 153, 153);
      width: 260px;
      height: 40px;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(219, 219, 219);
      border-image: initial;
      outline: 0px;
      text-indent: 5px;
      padding-left:40px;
  }

.index-error {
    width: 260px;
    line-height: 1;
    color: red;
    font-size: 14px;
    text-indent: 20px;
    visibility: hidden;
    display: block;
    height: 14px;
    margin: 0px auto;
    background: url(/static/zyyl/img/err.png) 0px 0px / 14px no-repeat;
    background-position: 0px 0px;
}

.index-login-btn {
    background-color: rgb(106, 67, 145);
    width: 260px;
    height: 36px;
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    cursor: pointer;
    border-radius: 5px;
    margin: 14px auto 0px;
}


.index-other-function-text {
    width: 260px;
    line-height: 1;
    font-size: 0px;
    color: rgb(98, 165, 227);
    margin: 15px auto 0px;
    span {
        width: 50%;
        display: inline-block;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
    }
}

.index-bottom-line {
    width: 260px;
    height: 1px;
    border-top: 1px solid rgb(237, 237, 237);
    margin: 15px auto 16px;
}
.index-wms-content-wrap{
  border-bottom:2px solid #684d82;

  .title {
      width: 260px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      color: rgb(183, 176, 188);
      margin: 0px auto;
      .cur {
          color: rgb(106, 67, 145);
      }
  }
}

.index-wms-box-01 {
    width: 260px;
    height: 158px;
    position: relative;
    margin: 10px auto 0px;
}
.swiper-container {
    width:100%;
    height:100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
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
      height: 53px;
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




// 登录后
.header-index-wrap {
    cursor: pointer;
    position: relative;
}
#headerBase01 {
    margin-top: 6px;
    margin-right: 10px;
    margin-left: 14px;
    float: left;
    width: 35px;
    height: 35px;
    background: url(/static/zyyl/img/logo/user.png) no-repeat;
    background-size: cover;
}
.index-level-0 {
    width: 36px;
    height: 18px;
    background: url(/static/zyyl/img/logo/vip0.png) no-repeat;
    background-size: cover;
}
.index-login-arrow {
    position: absolute;
    top: 24px;
    right: 15px;
    cursor: pointer;
}
.index-hidden-area {
    position: absolute;
    width: 290px;
    height: 180px;
    box-sizing: border-box;
    border: 1px solid #ededed;
    background: #fff;
    top: 55px;
    // display: none;
}

.notHomeBox{
  .index-hidden-area{
    top:47px!important;
    height:190px!important;
  }
  .notHome{
    display:none;
  }
  &:hover{
    .notHome{
      display:block;
    }
  }
}
</style>
