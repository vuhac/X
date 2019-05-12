<template>
    <section class="robin-overall">
        <section class="public-contance" style="position:relative;">
            <div class="gaming-logo" style="width: 170px;">
                <!-- <router-link to='/home' tag="a">
                     <img src="/static/jltx/img/dianzi/logo.png" style="margin-top: 32px;margin-left: -5px;width:215px;background-size: 100%;height:80px">
                </router-link> -->
                <a href="javascript:void(0)" @click="$router.push('/');">
                     <img src="/static/jltx/img/dianzi/logo.png" style="margin-top: 32px;margin-left: -5px;width:215px;background-size: 100%;height:80px">
                </a>
            </div>
            <img src="/static/jltx/img/logo_1.png" alt="" style="margin-top: 14px; margin-left: 50px; position: relative; top: -7px;">
            <div class="robin-gam-form" v-if="!userinfo">
                <div class="register-box">
                   <a href="javascript:void(0)" @click="register">立即注册</a>
                </div>
                <div name="LoginForm" id="LoginForm" class="clearfix">
                    <div class="robin-input-box">
                       <input type="text" placeholder="帐号" id="userName" v-model="passKey.userName"  autocomplete="off"/>
                    </div>

                    <div class="robin-input-box password-box">
                       <input maxlength="20" type="password" placeholder="密码" v-model="passKey.password" v-on:keyup.enter="login" autocomplete="off"/>
                       <span @click="forget">找回</span>
                    </div>

                    <div class="robin-input-box robin-code" v-if="code_show">
                        <input maxlength="4" type="text" placeholder="验证码" @focus="getCode" v-model="passKey.code" v-on:keyup.enter="login" autocomplete="off"/>
                        <img id="vPic" :src="codeImg" width="55" height="26" border="1" align="absmiddle" alt="( 点选此处产生新验证码 )" @click="getCode" style="cursor:pointer; margin-top: 0; top: 1px; position: relative; right: -78px; top: -28px;">
                    </div>
                    <button class="login-btn" @click="login" >登录</button>
                </div>
            </div>
            <div class="logging-after-style" style="width: 520px;" v-if="userinfo">
                <div class="membership-box">
                    <p style="font-size:14px;">会员帐号：{{userinfo.userName}}</p>
                    <p class="Wallet-balance-box" style="vertical-align: middle;height: 16px;">
                        <span style="display: inline-block;vertical-align: middle;font-size:14px">钱包余额：</span>
                        <em id="user_money" style="display: inline-block;height: 16px;vertical-align: middle;" v-if="!showReload">{{userinfo&&userinfo.balance}}</em>&nbsp;
                        <a href="javascript:void(0)" v-if="showReload" style="display: inline-block; vertical-align:middle;width: 16px; height: 16px;  background: url('/static/jltx/img/loading.gif')"></a>
                        <a href="javascript:void(0)" v-if="!showReload" @click="getBalance" style="display: inline-block; vertical-align:middle;width: 16px; height: 16px;  background: url('/static/jltx/img/refresh.png')"> </a>
                    </p>
                    <p></p>
                </div>
                <div class="membsions-listion">
                    <a href="javascript:void(0)" v-for="(item,index) in personal" :key="index" @click="goUserCen(item.type,item.num)">{{item.name}}</a>
                    <a href="javascript:void(0)" @click="logout">登出</a>

                </div>
            </div>
            <nav class="robin-mune-navList" style="position: absolute; right: 0; float: right;">
                <ul>
                    <li class="x-ty" id="1" style="height:50px;" v-for="(navItem,navIndex) in navList" :key="navIndex" @click="goLink(navItem,navIndex)" :class="{'navActive':isSelect==navItem.selectNum}">
                        <a href="javascript:void(0);">
                            {{navItem.name}}<span>{{navItem.text}}</span>
                        </a>
                        <ul class="x-two-nav" id="x_1" v-if="navItem.list">
                            <li v-for="(childItem,childIndex) in navItem.list" :key="childIndex" @click.stop="thirdParty(childItem,navItem.platform)">
                                <a href="javascript:void(0)" >{{childItem.name}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </section>
    </section>
</template>
<script>

import UserService from "@/service/public/UserService.js";
import mixin from "../../public/games/public.js";
import {postS,getS} from '@/service/public/service.js'
export default {
    mixins:[mixin],
    data(){
        return{
            personal:[
                {name:"会员中心",type:"personage",num:0},
                {name:"投注记录",type:"personage",num:1},
                {name:"线上存款",type:"recharge",num:0},
                {name:"线上取款",type:"withdraw",num:0},
                {name:"未读讯息",type:"message",num:0},
            ],
            codeImg:'/static/jltx/img/yam.png',
            passKey:{
                // 必须要定义，否则会导致正则直接通过
                userName: "",
                password: "",
                // code:""
            },
            isSelect:0,
            showReload:false,
            navList: [
                {
                    name: "首页",
                    text: "HOME",
                    platform: "home",
                    selectNum:0,
                    link: "/home",
                    className:"LS-home"
                },
                {
                    name: "真人视讯",
                    text: "CASINO",
                    selectNum:1,
                    link: "/home/live",
                    platform: "live_casino",
                    className:"LS-live",
                    hotShow:true,
                },
                {
                    name: "棋牌游戏",
                    text: "CHESS",
                    platform: "KY_CHESS",
                    selectNum:2,
                    link: "/home/games?id=10042&name=开元棋牌",
                    gameName: "0",
                    className:"LS-chess",
                    list: [
                    {
                        name: "开元棋牌",
                        gameName: "0",
                        platform: "KY_CHESS",
                        id:243
                    },
                    {
                        name: "VG棋牌",
                        gameName: "1000",
                        platform: "VG_CHESS",
                        id:1091
                    }
                    ]
                },
                {
                    name: "彩票游戏",
                    text: "LOTTERY",
                    platform: "CT_LOTTERY",
                    selectNum:3,
                    routePath:"/plays/hall",
                    link: "/plays/hall",
                    gameName: "0",
                    className:"LS-lottery",
                    list: [
                    {
                        name: "传统彩票",
                        // gameName: "610",
                        platform: "CT_LOTTERY",
                        link: "/plays/hall",
                    },

                    ]
                },
                {
                    name: "电子游戏",
                    text: "GAME",
                    platform: "AG_GAME",
                    selectNum:4,
                    link: "/home/games?id=10022&name=MG老虎机",
                    className:"LS-lines",
                    hotShow:true,
                },
                {
                    name: "捕鱼游戏",
                    text: "FISHING",
                    selectNum:5,
                    link: "/home/buyu",
                    className:"LS-game"
                },
                {
                    name: "体育赛事",
                    text: "SPORTS",
                    platform: "sport",
                    selectNum:6,
                    className:"LS-ball",
                    hotShow:true,
                    list: [
                    {
                        name: "皇冠体育",
                        id: '39',
                    },
                    {
                        name: "沙巴体育",
                        id: '38',
                    },
                    {
                        name: "BBIN体育",
                        id: '41',
                    },
                    {
                        name: "AG体育",
                        id: '40',
                    }
                    ]
                },
                {
                    name: "优惠活动",
                    text: "ACTIVETY",
                    selectNum:7,
                    link: "/home/youhui",
                    className:"LS-youhui",
                    hotShow:true,
                },
                {
                    name: "在线客服",
                    text: "SERVICE",
                    selectNum:8,
                    link: "service",
                    className:"LS-kefu"
                }
            ],
            code_show:parseInt(localStorage.is_code_show)
        }
    },
    methods:{

        //获取验证码
        getCode() {
            if (this.code_show == 0) {
                return;
            }
            if (this.passKey.userName.length < 5) {
                alert("请输入6位帐号");
                this.passKey.userName = "";
                var oInput = document.getElementById("userName");
                oInput.focus();
                return false;
            }
            getS(`captcha`, { userName: this.passKey.userName }).then(res => {
                if (res.code == 200) {
                this.codeImg = res.data.captcha_image_text;
                this.passKey.captcha_key = res.data.captcha_key;
                } else {
                this.$store.commit("alert/showTipModel", {
                    bool: true,
                    title: res.message,
                    model: "warn"
                });
                }
            });
        },
        goLink(item,i) {
            if (item.link) {
            if (item.link == "service") {
                let service = JSON.parse(localStorage.config).service;
                if (service) {
                let ser = service.find(item => item.status === 'on')
                if (ser) {
                    window.open(ser.url);
                }
                }
            } else if (item.link == "/plays/hall") {
                    window.open("#/plays/hall");
                    return false;
            }else {
                this.isSelect=i;
                this.$router.push(item.link);
                
            }
            } else if (item.gameName) {
                this.trustLogin(item);
            }
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
            this.showReload = true
            getS(`member/balance`).then(res => {
                if (res.code == 200) {
                let userinfo = JSON.parse(localStorage.userinfo)
                userinfo.balance = res.data.member
                userinfo.agent=res.data.agency
                this.$store.commit('mainState/reloadUserinfo', userinfo)
                this.showReload = false
                }
            })
        },
        logout () {
            UserService.logout.call(this)
        },
        forget () {
            alert('忘记帐号密码，请联系在线客服人员取回！')
        },
        is_code_show(){
            getS(`is-show-captcha`).then(res => {
                if (res && res.code === 200) {
                this.code_show = res.data;
                }
            });
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
        login(){
            if (!this.validateAccountLogin(this.passKey.userName)) {
                alert('请输入6-20位数字或字母组成的帐号')
                return false
            }
            if (!this.validateAccountLogin(this.passKey.password)) {
                alert('请输入6-20位数字或字母组成的密码')
                return false
            }
            if (this.code_show) {
                // undefined和""不一样
                if (!this.passKey.code) {
                alert("验证码请务必输入");
                return false;
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
                console.log(res);
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
        register(){
            this.$store.commit('jltx/showRegister', true)
        }
    },
    watch:{
        // $route(newRoute,oldRoute){
        //     let that=this;
        //     let selectFlag=false;
        //     this.navList.forEach((item,index)=>{
        //         if(newRoute.fullPath!="/home"){
        //             if(item.link!="/home"){//排除item是首页的情况
        //                 if(newRoute.fullPath.includes(item.link)){
        //                     that.isSelect=item.selectNum;
        //                     selectFlag=true;
        //                 }
        //             }

        //         }
        //     })
        //     if(newRoute.fullPath!='/home'){//排除home首页
        //         if(!selectFlag){//表示进入了棋牌游戏和电子游戏的其中一个
        //             // 没有注意到，不带参数跳转时候的情况（底部footer进入关于和帮助的页面）
        //             if(newRoute.query>0){
        //                 if(newRoute.query.name.includes("棋牌")){//棋牌游戏
        //                     that.isSelect=5;
        //                 }
        //                 if(newRoute.query.name.includes("老虎机")){
        //                     that.isSelect=3;
        //                 }
        //             }

        //         }
        //     }

        //     if(newRoute.fullPath=="/home"){//首页
        //         that.isSelect=0;
        //     }
        // }
    },
    created(){
        this.is_code_show();

    },
    computed:{
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    }
}
</script>
<style lang="less" scoped>
    .navActive{
            border-bottom: 1px solid white;
    }

    .logging-after-style{
        width: 480px;
        height: 55px;
        background: #971e1a;
        border-radius: 5px;
        float: right;
        margin: 4px 0 15px 0;
        .membership-box{
            height: 18px;
            line-height: 18px;
            margin: 7px 0 0 0;
            p{
                width: auto;
                float: left;
                color: #fff;
                margin-left: 11px;
            }
            .Wallet-balance-box{
                margin-left: 34px;
                em{
                    color: #fbda30;
                }
                a{
                    color: #333333;
                    text-decoration: none;
                }
            }
        }
        .navActive{
            border-bottom: 1px solid white;
        }
        .membsions-listion {
            width: 100%;
            height: 30px;
            line-height: 30px;
            a{
                display: inline-block;
                width: 75px;
                text-align: center;
                color: #fff;
                width: 76px;
                font-size: 14px;
            }
        }
    }

    .robin-overall{
        width: 100%;
        height: 127px;
        background: #cf3a36;
    }
    .gaming-logo{
        width: auto;
        float: left;
        height: 100%;
    }
    .gaming-logo img{
        margin: 32px 0 0 0;
    }

    .robin-gam-form{
        width: auto;
        height: 35px;
        float: right;
        margin: 14px 0 28px 0;
    }
    .register-box{
        width: 84px;
        border:1px solid #fff;
        height: 33px;
        float: right;
        border-radius: 5px;
        text-align: center;
        line-height: 33px;
    }

    .register-box a{
        display: block;
        color: #fff;
    }

    .robin-gam-form #LoginForm{
        float: right;
    }

    .robin-input-box{
        width: 138px;
        float: left;
        height: 35px;
        background: #971e1a;
        border-radius: 5px;
        margin: 0 7px 0 0;
    }

    .robin-input-box input{
        width: 90%;
        float: left;
        height: 32px;
        outline:none;
        line-height: 32px;
        background: #971e1a;
        border:none;
        color: #fff;
        font-size: 14px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 0 2.5%;
    }

    .password-box{
        width: 146px;
    }
    .password-box input{
        width: 60%;
    }

    input{
        font-family: "Microsoft YaHei", "微软雅黑", Arial, Helv, Helvetica, sans-serif;
        }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    #b2b1b1;
    }

    input{
        font-size: 12px;
    }

    .password-box span{
        display: inline-block;
        width: 35px;
        height: 24px;
        background: #cf3a36;
        border-radius: 4px;
        color: #7a222d;
        font-size: 12px;
        float: right;
        margin: 5px 4px 0 0;
        text-align: center;
        line-height: 24px;
        cursor: pointer;
    }

    .robin-code input{
        width: 90%;
        margin: 0 10px 0 0;
        padding: 0 2.5%;
    }
    .login-btn{
        width: 52px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #971e1a;
        font-size: 15px;
        border-radius: 5px;
        border:none;
        outline: none;
        float: right;
        background: #fbda30;
        margin-right: 16px;
        cursor: pointer;
    }
    .robin-mune-navList{
        width: auto;
        float: right;
        .x-ty{
            margin-left: 35px;
            float: left;
            font-size: 16px;
            text-align: center;
            margin-left: 40px;
            position: relative;
            a{
                &:hover{
                    color:#fbda30;
                }
            }
            &:hover .x-two-nav{
                display: block;
            }
            .x-two-nav{
                display: none;
                position: absolute;
                background: #cf3a36;
                width: 134px;
                border-radius: 8px;
                z-index: 66;
                padding: 10px;
                top: 51px;
                left: -35px;
                li{
                   margin: 7px auto 0 auto;
                   width:70px;

                   a{
                        text-align: center;
                        box-sizing: border-box;
                        &:hover{
                            border-bottom: 1px solid white;
                        }
                   }
                }
            }
            &:hover{
                border-bottom: 1px solid #fff;
            }
        }
    }
    .robin-mune-navList li.ron_curent{
        border-bottom: 1px solid #fff;
    }

    .robin-mune-navList li a{
        display: block;
        color: #fff;
        padding: 0 0 3px 0;
    }
    .robin-mune-navList li span{
        display: block;
        font-size: 12px;
        padding: 3px 0 0 0;

    }


</style>
