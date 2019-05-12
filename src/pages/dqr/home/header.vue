<template>
  <div class="header-box">
    <div class="main clear">
      <div class="top_left">
        <div class="logo_icon clear animated flipInY">
          <div class="logo fleft">
            <a href="javascript:void(0)" @click="goHome"></a>
          </div>
        </div>
      </div>
      <div class="top_center">
        <div class="domain_name clear">
          <span class="domain_title"></span>
          <span class="domain_address"></span>
        </div>
        <div class="subtitle"></div>
      </div>
      <div class="bar-right">
        <div class="fright">
          <div class="top_bar">
            <a href="javascript:void(0);" class="join-btn" v-if="!userinfo" @click="tryPlay">免费试玩</a>
            <!-- <a :href="$root.mobileurl" target="_blank" class="bar_mobile">手机投注</a> | -->
            <a href="/static/dqr/html/download/index.html" target="_blank" class="bar_mobile">手机投注</a> |
            <a href="javascript:;" @click="setIndex">设为首页</a> |
            <a href="javascript:;" @click="addCollect">加入收藏</a> |
            <a href="#/home/contactUs/1">帮助信息</a>
            <span v-if="userinfo">|</span>
            <a
              href="javascript:'"
              @click="goUserCen('agency',0)"
              class="bar_mobile"
              v-if="userinfo"
            >代理加盟</a>
          </div>
          <div class="area-wrap">
            <div class="login-area log-after clear" v-if="userinfo">
              <div class="preson-info clear">
                <span class="info acc-person">
                  <strong class="account_hidden">帐号:</strong>
                  <span class="value account_name">{{userinfo&&userinfo.userName}}</span>
                </span>
                <span class="info acc-balance">
                  <strong>余额:</strong>
                  <span class="value">{{userinfo&&userinfo.balance}}</span>
                  <div
                    class="luck-icon"
                    style="display:inline-block; margin-top: -9px; background-image: none;"
                  >
                    <span style="width:20px; display:block; padding-top:2px; float:none;">
                      <a
                        href="javascript:void(0)"
                        @click="getBalance()"
                        style="display: inline-block; width: 16px; height: 16px; margin-top: 0px; background: url('/static/dqr/img/refresh.png')"
                      ></a>
                    </span>
                  </div>
                </span>
              </div>
              <div class="acc-links">
                <a
                  title="会员中心"
                  class="btn btn-navacc-member"
                  href="javascript:void(0);"
                  @click="goUserCen('personage',0)"
                >会员中心</a>
                <a
                  title="在线存款"
                  class="btn btn-navacc-deposit"
                  href="javascript:void(0);"
                  @click="goUserCen('recharge',0)"
                >充值</a>
                <a
                  title="在线取款"
                  class="btn btn-navacc-withdraw"
                  href="javascript:void(0);"
                  @click="goUserCen('withdraw',0)"
                >提款</a>
                <a title="退出" class="btn btn-login-out" href="javascript:void(0);" @click="logout">
                  <span>退出</span>
                </a>
              </div>
            </div>
            <div class="login-from" v-else>
              <div class="login-area clear">
                <div class="area-left">
                  <span class="login-mane">
                    <input
                      class="input_tip"
                      id="userName"
                      type="text"
                      size="12"
                      v-model="passKey.userName"
                      title="请填写 6-20 位大小写英数字"
                      maxlength="20"
                      placeholder="会员帐号"
                      tabindex="1"
                      required
                    >
                  </span>
                  <label v-if="code_show">
                    <span class="login-code">
                      <input
                        type="text"
                        class="input_tip input_tip_45"
                        size="7"
                        maxlength="4"
                        title="( 点击此处产生新验证码 )"
                        v-model="passKey.code"
                        @keyup.13="login"
                        placeholder="验证码"
                        @focus="getCode"
                        style="width: 45px;"
                      >
                    </span>
                    <img
                      title="点击切换验证码"
                      width="62"
                      height="24"
                      :src="codeImg"
                      @click="getCode"
                      style="background-color:white;"
                      alt="验证码"
                    >
                  </label>

                  <span class="login-password">
                    <input
                      class="input_tip"
                      type="password"
                      v-model="passKey.password"
                      @keyup.13="login"
                      autocomplete="off"
                      size="13"
                      maxlength="20"
                      title="请填写 6-20 位大小写英数字"
                      placeholder="登录密码"
                      tabindex="2"
                      required
                    >
                  </span>
                  <a
                    title="登录"
                    href="javascript:void(0)"
                    @click="login"
                    class="btn-login"
                    style="position:relative"
                  >
                    <span>登录</span>
                  </a>
                  <a
                    title="忘记密码"
                    :href="$root.config.service[0]&&$root.config.service[0].url"
                    target="_blank"
                    class="btn-member"
                  >忘记密码</a>
                </div>
                <div class="area-right">
                  <a title="免费注册" href="#/home/register" class="bnt-register"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav">
        <div class="nav-main clear">
          <div class="menu-box">
            <div class="menu" style="margin-left: -12px;">
              <ul class="clear" style="width: 1020px;">
                <li>
                  <a href="javascript:void(0)" class="Announncement" @click="goHome">
                    <!--                                    <i class="menu-icon icon4"></i>-->
                    <div>网站首页
                      <br>
                      <span style="font-size: 9px;">HOMEPAGE</span>
                    </div>
                  </a>
                </li>
                <li class="officialLottery">
                  <span class="icon-hot1"></span>
                  <a
                    href="javascript:void(0);"
                    class="lottery"
                    @click="goto({type:'lottery',router:'#/plays/hall'});"
                  >
                    <!--                                    <i class="menu-icon icon1"></i>-->
                    <div ><span class="nav-glitter">购彩大厅</span>
                      <br>
                      <span style="font-size: 9px;">LOTTERY</span>
                    </div>

                  </a>
                  <div class="menu-child1 officialLotteryShow">
                    <div
                      class="gamelist-1 clear"
                      style="background-image: none; background-color: rgba(0,0,0,0.6);"
                    >
                      <div class="official_play">
                        <div class="high_wrap">
                          <div class="gamelist_r">
                            <div class="items" style="width: 490px;">
                              <div class="item">
                                <img class="hot_tag" src="/static/dqr/img/hot_icon/1.gif">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/16'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/16.png">
                                  <p class="hot">
                                    <font>快速时时彩</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <img class="hot_tag" src="/static/dqr/img/hot_icon/1.gif">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/17'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/17.png">
                                  <p class="hot">
                                    <font>三分时时彩</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/4'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/4.png">
                                  <p class="hot">
                                    <font>重庆时时彩</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <img class="hot_tag" src="/static/dqr/img/hot_icon/1.gif">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/12'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/12.png">
                                  <p class="hot">
                                    <font>快速赛车</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <img class="hot_tag" src="/static/dqr/img/hot_icon/1.gif">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/13'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/13.png">
                                  <p class="hot">
                                    <font>三分赛车</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item" style="margin-left: 14px;">
                                <img class="hot_tag" src="/static/dqr/img/hot_icon/1.gif">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/2'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/2.png">
                                  <p class="hot">
                                    <font>北京PK拾</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/3'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/3.png">
                                  <p class="hot">
                                    <font>幸运飞艇</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <img class="hot_tag" src="/static/dqr/img/hot_icon/1.gif">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/18'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/18.png">
                                  <p class="hot">
                                    <font>快速六合彩</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/1'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/1.png">
                                  <p class="hot">
                                    <font>香港六合彩</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/5'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/5.png">
                                  <p class="hot">
                                    <font>广东快乐10分</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item" style="margin-left: 14px;">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/6'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/6.png">
                                  <p class="hot">
                                    <font>幸运农场</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/7'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/7.png">
                                  <p class="hot">
                                    <font>广东11选5</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/15'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/15.png">
                                  <p class="hot">
                                    <font>天津时时彩</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/29'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/29.png">
                                  <p class="hot">
                                    <font>上海时时乐</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="goTo({type:'lottery',router:'#/plays/tradition/9'});"
                                >
                                  <img src="/static/public/image/lottery/nico/png/9.png">
                                  <p class="hot">
                                    <font>江苏快三</font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="triangles_back" style="left: 115px;"></div>
                  </div>
                </li>
                <li class="vrLottery">
                   <span class="icon-hot1"></span>
                  <a
                    href="javascript:void(0);"
                    class="UserCenter"
                    @click="goTo({type:'lottery',router:'#/plays/tradition/1'});"
                  >
                    <div class="xdl-usercenter-divPL" style="padding-left: 0!important;"><span class="nav-glitter">六合彩</span>
                      <br>
                      <span style="font-size: 9px;">LOTTO</span>
                    </div>
                  </a>
                  <!--
                  <div class="menu-child1 vrLotteryShow">
                    <div class="gamelist-1 clear" style="background-image: none; background-color: rgba(0,0,0,0.6);">
                        <div class="official_play">
                            <div class="high_wrap">
                                <div class="gamelist_r">
                                    <div class="items" style="width: 490px;">
                                        <div class="item">
                                            <div class="item-ico" onclick="menu_url(2);">
                                                <img src="/static/dqr/img/logo/gf_a3.png">
                                                <p class="hot"><font>北京赛车</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico"  onclick="menu_url(1921);">
                                                <img src="/static/dqr/img/logo/gf_a1.png">
                                                <p class="hot"><font>重庆时时彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1990);return false">
                                                <img src="/static/dqr/img/logo/gf_a6.png">
                                                <p class="hot"><font>江苏快三</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/gf_a7.png">
                                                <p class="hot"><font>新疆时时彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/gf_a9.png">
                                                <p class="hot"><font>天津时时彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item" style="margin-left: 14px;">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/vrkt.png">
                                                <p class="hot"><font>VR快艇</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/vrsc.png">
                                                <p class="hot"><font>VR赛车</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/vrlhc.png">
                                                <p class="hot"><font>VR六合彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/vrbjl.png">
                                                <p class="hot"><font>VR百家乐</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/vr3fc.png">
                                                <p class="hot"><font>VR3分彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item" style="margin-left: 14px;">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/jx15.png">
                                                <p class="hot"><font>金星1.5分彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/hx15.png">
                                                <p class="hot"><font>火星1.5分彩</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/xy_a19.png">
                                                <p class="hot"><font>广东11选5</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/xy_a20.png">
                                                <p class="hot"><font>江西11选5</font></p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-ico" onclick="alert('请先登录');return false;menu_url(1923);return false">
                                                <img src="/static/dqr/img/logo/xy28.png">
                                                <p class="hot"><font>幸运28</font></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="triangles_back" style="left: 155px;"></div>
                  </div>-->
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="Activity"
                    data-item="ig_hall"
                    @click="goTo({router:'/home/qipai'})"
                  >
                    <!--                                    <i class="menu-icon icon3"></i>-->
                    <div>棋牌游戏
                      <br>
                      <span style="font-size: 9px;">CHESS</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="Activity"
                    @click="goTo({router:'/home/games?id=10022&name=MG老虎机'})"
                  >
                    <!--                                    <i class="menu-icon icon3"></i>-->
                    <div>电子游艺
                      <br>
                      <span style="font-size: 9px;">GAME</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="Activity"
                    @click="goTo({router:'/home/buyu'})"
                  >
                    <div>捕鱼游戏
                      <br>
                      <span style="font-size: 9px;">FISHING</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="Activity"
                    @click="goTo({router:'/home/live'})"
                  >
                    <!--                                    <i class="menu-icon icon3"></i>-->
                    <div>真人视讯
                      <br>
                      <span style="font-size: 9px;">CASINO</span>
                    </div>
                  </a>
                </li>
                <li class="sports">
                  <a href="javascript:void(0);">
                    <!--                                    <i class="menu-icon icon5"></i>-->
                    <div>体育投注
                      <br>
                      <span style="font-size: 9px;">SPORTS</span>
                    </div>
                  </a>
                  <div class="menu-child1 sportsShow">
                    <div
                      class="gamelist-1 clear"
                      style="background-image: none; background-color: rgba(0,0,0,0.6);"
                    >
                      <div class="official_play">
                        <div class="high_wrap">
                          <div class="gamelist_r">
                            <div class="items">
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="getItemId({id: '39',platform: 'sport'});"
                                >
                                  <img src="/static/dqr/img/logo/hgty.png">
                                  <p class="hot">
                                    <font>皇冠体育</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="getItemId({id: '38',platform: 'sport'});"
                                >
                                  <img src="/static/dqr/img/logo/sbty.png">
                                  <p class="hot">
                                    <font>沙巴体育</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="getItemId({id: '41',platform: 'sport'});"
                                >
                                  <img src="/static/dqr/img/logo/bbin.png">
                                  <p class="hot">
                                    <font>BB体育</font>
                                  </p>
                                </div>
                              </div>
                              <div class="item">
                                <div
                                  class="item-ico"
                                  @click="getItemId({id: '40',platform: 'sport'});"
                                >
                                  <img src="/static/dqr/img/logo/sbty.png">
                                  <p class="hot">
                                    <font>AG体育</font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="triangles_back" style="left: 155px;"></div>
                  </div>
                </li>
                <li>
                   <span class="icon-hot1"></span>
                  <a
                    href="javascript:void(0);"
                    class="mobile"
                    @click="goTo({router:'/home/youhui'})"
                  >
                    <!--                                    <i class="menu-icon icon7"></i>-->
                    <div ><span class="nav-glitter">优惠活动</span>
                      <br>
                      <span style="font-size: 9px;">ACTIVITY</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a :href="serviceUrl" class="GameInformation Announncement" target="_blank">
                    <div>在线客服
                      <br>
                      <span style="font-size: 9px;">SERVICE</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/service/public/UserService.js";
import store from "@/vuex/store";
import data from "../../public/games/public.js";
import {postS,getS} from '@/service/public/service.js'
export default {
  mixins: [data],
  data() {
    return {
      refreshS: false,
      passKey: {
        userName: "",
        password: ""
      },
      serviceUrl: null,
      codeImg: "/static/dqr/img/yzm.png",
      time: this.getTimes(new Date()),
      interval: null,
      isLogin: false,
      navList: [],
      code_show: parseInt(localStorage.is_code_show)
    };
  },
  mounted() {
    //let estObjMD = this.getTimes();
    //this.interval = setInterval(estObjMD.dispTimeMD, 1000);
    setTimeout(() => {
      this.serviceUrl =
        this.$root.config.service[0] && this.$root.config.service[0].url;
    }, 200);
  },
  methods: {
    goHome(){
       this.$router.push("/home");
    },
    getTimes() {
      var that = this;
      let estObjMD = {
        pre0: function(num) {
          if (num < 10) {
            num = "0" + num;
          }
          return num;
        },
        /* 美东時間顯示 */
        dispTimeMD: function() {
          let timestam = new Date().getTime();
          let time = timestam - 43200000;
          let dateObj = new Date(time),
            p0 = estObjMD.pre0,
            Y = dateObj.getFullYear(),
            Mh = dateObj.getMonth() + 1,
            D = p0(dateObj.getDate()),
            H = p0(dateObj.getHours()),
            M = p0(dateObj.getMinutes()),
            S = p0(dateObj.getSeconds());

          if (Mh > 12) {
            Mh = "01";
          } else if (Mh < 10) {
            Mh = "0" + Mh;
          }
          let str = `美东时间 - ${Y}/${Mh}/${D}/ ${H}:${M}:${S}`;
          that.$refs.time.innerHTML = str;
        }
      };
      return estObjMD;
    },
    getCode() {
      if (this.code_show == 0) {
        return;
      }
      if (this.passKey.userName.length < 5) {
           alert("请输入6位帐号");
           this.passKey.userName = ''
           var oInput = document.getElementById('userName')
           oInput.focus()
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
    login() {
      if (!this.validateAccountLogin(this.passKey.userName)) {
        alert("请输入6-20位数字或字母组成的帐号");
        return false;
      }
      if (!this.validateAccountLogin(this.passKey.password)) {
        alert("请输入6-20位数字或字母组成的密码");
        return false;
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
      this.passKey.device = 'pc';
      postS(`login`, this.passKey).then(res => {
        if (res.code == 200) {
          this.$router.push({
            name: 'clause'
          })
          UserService.setCache(res, 'v1', 'login')
        } else {
          alert(res.message)
          this.is_code_show();
        }
      })
    },
    logout() {
      UserService.logout.call(this);
    },
    is_code_show(){
      getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },
    getBalance() {
      this.refreshS = true;
        getS(`/member/balance`).then(res => {
        if (res.code == 200) {
          let userinfo = JSON.parse(localStorage.userinfo)
          userinfo.balance = res.data.member
          userinfo.agent=res.data.agency
          this.$store.commit("mainState/reloadUserinfo", userinfo);
          this.refreshS = false;
          alert("刷新余额成功");
        } else {
          alert("服务器报错");
        }
      });
    },
    goUserCen(name, num) {
      //name的类型有 ：  recharge （充值）  personage （个人资料）
      //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
      this.$store.commit("showPersonal", {
        bool: true
      });
      this.$store.commit("showContent", {
        parent: name
      });
      this.$store.commit("showNav", {
        child: num
      });
    },
    setIndex() {
      var content =
        '<font size="2.5">抱歉，您所使用的浏览器无法完成此操作。您需要手动将【' +
        this.$root.currentDomain +
        '】设置为首页，<br>请参考<a style="color:#57a3f3;" href="http://www.baidu.com/cache/sethelp/index.html" target="_blank">如何设为首页</a></font>';
      this.$Modal.info({
        title: "设为首页提示",
        content: content
      });
    },
    addCollect() {
      this.$Modal.info({
        title: "加入收藏提示",
        content:
          '<font size="2.5">抱歉，您所使用的浏览器无法完成此操作。<br>加入收藏失败，<br>电脑请使用Ctrl+D进行添加</font>'
      });
    },
    async tryPlay() {
     let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
      if (res && res.code == 200) {
        UserService.setCache(res, "test");

        this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
          let platform = res.data.platform;
          let alias = res.data.alias;
          let keys = Object.keys(platform);
          let refund = [];
          keys.forEach((v, i) => {
            refund[i] = {};
            refund[i].title = v;
            refund[i].list = [];
            platform[v].forEach((a, j) => {
              refund[i].list[j] = {};
              refund[i].list[j].key = Object.keys(a)[0];
              refund[i].list[j].refund = Object.values(a)[0];
              refund[i].list[j].name = alias[refund[i].list[j].key];
            });
          });

          // this.refundData = refund;
          localStorage.setItem("refund", JSON.stringify(refund));
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    },
    goTo(item) {
      if (item.router == "/qipai") {
        this.trustLogin(item);
        return false;
      } else if (item.type == "lottery") {
            if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                 window.open(item.router);
                 return false;
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }
      }
      this.$router.push({
        path: item.router
      });
    },
    goto(item){
         window.open(item.router);
        return false;
    },
    thirdParty(item) {
      // console.log(item)
      if (item.type) {
        if (item.name == "传统彩票") {
          window.open("#/plays/hall");
        } else {
          this.getItemId(item);
        }
      } else {
        this.getItemId(item);
      }
    }
  },
  computed: {
    userinfo() {
      return this.$store.state.mainState.userinfo;
    }
  },
  created() {
    this.is_code_show();
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "hidden") {
        if (!localStorage.userinfo) {
          let timer = setInterval(() => {
            if (localStorage.userinfo) {
              clearInterval(timer);
              window.location.reload();
            }
          }, 1000);
        }
      }
    });
  },
  beforeDestroy() {},
  destroyed() {
    clearInterval(this.interval);
  },
  store
};
</script>


<style lang="less" scoed>
    .header-box{
      .item-ico{
        img{
          width:70%!important;
          margin-top:15%!important;
          border-radius: 50%!important;
        }
      }
    }
     .icon-hot1 {
              background: url(/static/dqr/img/hot_icon.gif) no-repeat;
              top: 3px;
              margin-left: 82px;
              width: 21px;
              height: 9px;
              display: block;
              position: absolute;
      }
      .nav-glitter {
                -webkit-animation: nav-hot-glitter-red-green .9s infinite;
                animation: nav-hot-glitter-red-green .9s infinite;
      }
       @keyframes nav-hot-glitter-red-green {
          0% {
             color: #ff0;
          }
          50% {
             color: #ff0;
          }
          51% {
             color: #ff0000;
          }
          100% {
             color: #ff0000;
          }
        }

        @-webkit-keyframes nav-hot-glitter-red-green {
        0% {
           color: #ff0;
        }
        50% {
           color: #ff0;
        }
        51% {
          color: #ff0000;
        }
        100% {
          color: #ff0000;
         }
        }

</style>
