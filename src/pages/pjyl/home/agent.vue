<template>
    <div class="box">
        <div class="warp">
            <!-- <div class="but-group">
                <ul class="box">
                    <li class="but"><span class="i1"></span><span>QQ会员</span></li>
                    <li class="but" @mouseenter="num=true" @mouseleave="num=false"><span class="i2"></span><span>微信会员</span></li>
                    <transition name="fade">
                        <dir class="ewm" v-show="num"><img src=""></dir>
                    </transition>
                </ul>
            </div> -->
            <div class="tab_warp">
                <div class="menu">
                    <ul class="menu_one">
                        <li v-for="(item,index) in menuArr" :key="index" class="menu_one_li" @click="bgc(item)"
                         :class="{'on':changet==item.cid}">
                            <img src="/static/pjyl/img/daili1/press@2x.png" class="ic">
                            {{item.tit}}
                            <ul class="menu_two" v-if="changet==item.cid">
                                <li class="menu_two_li" v-for="(ite,ind) in item.child" :key="ind" :class="{'active':change==ite.id}" @click.stop="bgcTwo(ite)">
                                    {{ite.tit}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="content" @mouseenter="lr=true" @mouseleave="lr=false">
                    <div class="img_c" v-for="(item,index) in menuArr" :key="index">
                        <div class="mode" v-show="change==item.id">
                            <div class="m_title">既是玩家也是代理.合为一体</div>
                            <!-- <div class="bor"></div> -->
                            <div class="m_title_two">注册成功后，您可自娱投注亦可赚取下级会员流水返佣，娱乐赚钱两不误</div>
                            <div class="action">
                                <div class="ac">
                                    <!-- <span class="ac_tit">功能1</span> -->
                                    <div class="ac_box">
                                        <!-- <p class="ac_box_tit">帐号</p> -->
                                        <!-- <img src="/static/pjyl/img/daili1/yule.png"/> -->
                                        <i class="icon iconfont icon-pc-proxy-_9" style="color:#f13131;font-size:41px"></i>
                                        <p class="ac_box_tit">代理自行娱乐</p>

                                    </div>
                                </div>
                                <div class="ac">
                                    <!-- <span class="ac_tit">功能2</span> -->
                                    <div class="ac_box">
                                        <!-- <p class="ac_box_tit"></p> -->
                                        <!-- <img src="/static/pjyl/img/daili1/daili1.png"/> -->
                                        <i class="icon iconfont icon-pc-proxy-_6" style="color:#f13131;font-size:41px"></i>
                                        <p class="ac_box_tit">发展下线代理</p>

                                    </div>
                                </div>
                                <div class="ac">
                                    <!-- <span class="ac_tit">功能3</span> -->
                                    <div class="ac_box">
                                        <!-- <p class="ac_box_tit"></p> -->
                                        <!-- <img src="/static/pjyl/img/daili1/vip.png"/> -->
                                        <i class="icon iconfont icon-pc-proxy-_7" style="color:#f13131;font-size:44px"></i>
                                        <p class="ac_box_tit">发展下线会员</p>

                                    </div>
                                </div>
                            </div>
                            <div class="bgwrapper">
                                <div class="m_title money">代理佣金计算方式</div>
                                <!-- <div class="bor"></div> -->
                                <div class="m_title_two water">流水洗码是根据下级会员所产生的有效投注计算，不计输赢，代理即可赚取</div>
                                <div class="profit">
                                    <p class="pro_one"><i class="icon iconfont icon-pc-proxy-_11" style="color:white;font-size:75px"></i><br> <span style="position:relative;top:10px">有效投注额</span>  <br> <span style="position:relative;top:5px;font-size:13px">(下级会员+下级代理会员)</span> </p>
                                    <p class="pro_two"><i class="icon iconfont icon-pc-proxy-_3" style="color:white;font-size:35px"></i></p>
                                    <p class="pro_th"><i class="icon iconfont icon-pc-proxy-_10" style="color:white;font-size:75px"></i> <br> <span style="position:relative;top:18px">分润点</span> </p>
                                    <p class="pro_fo"><i class="icon iconfont icon-pc-proxy-_2" style="color:white;font-size:35px"></i></p>
                                    <p class="pro_fi"><i class="icon iconfont icon-pc-proxy-_8" style="color:white;font-size:75px"></i><br> <span style="position:relative;top:18px">代理佣金</span>  </p>
                                </div>
                            </div>

                            <div class="m_title">代理共赢点</div>
                            <!-- <div class="bor"></div> -->
                            <div class="sections">
                                <div class="outBox">

                                    <div class="bigBox1">
                                        <div class="wrapper">
                                            <!-- <p><img src="/static/pjyl/img/daili1/icon-shouyirijie@2x.png"  /></p> -->
                                            <p style="margin:15px 0;"><i class="icon iconfont icon-pc-proxy-_" style="color:#f13131;font-size:80px"></i></p>
                                            <p>佣金结算</p>
                                            <p>
                                                <span>次日自动派送至游戏帐号 </span>
                                                <span>自行提款即可</span>
                                            </p>
                                        </div>
                                        <div class="s_ac"></div>
                                    </div>



                                    <div class="bigBox2">
                                         <div class="wrapper">
                                            <p style="margin:15px 0;"><i class="icon iconfont icon-pc-proxy-_4" style="color:#f13131;font-size:80px"></i></p>
                                            <p>有效注单</p>
                                            <p>
                                                <span>线下会员须是真实有效，如虚假注</span>
                                                <span>册或无风险下注产生有效</span>
                                                <span>投注，将取消佣金派送</span>
                                                <span>或代理资格</span>
                                            </p>
                                        </div>
                                        <div class="s_ac"></div>
                                    </div>

                                    <div class="bigBox3">
                                         <div class="wrapper">
                                            <p style="margin:15px 0;"><i class="icon iconfont icon-pc-proxy-_9" style="color:#f13131;font-size:80px"></i></p>
                                            <p>资源合作</p>
                                            <p>
                                                <span>如果你有好的推广资源，请立</span>
                                                <span>即向公司申请定制邀请注</span>
                                                <span>册验证码专属推广</span>
                                                <span>网站</span>
                                            </p>
                                        </div>
                                        <div class="s_ac"></div>
                                    </div>

                                </div>











                                <!-- <div class="s_ac">
                                    <div class="wrapper">
                                        <p><i class="icon iconfont h5-icon-pc-proxy-4" style="color:#f13131;font-size:66px"></i></p>
                                        <p>有效注单</p>
                                        <p>
                                            <span>线下会员须是真实有效，如虚假注</span>
                                            <span>册或无风险下注产生有效</span>
                                            <span>投注，将取消佣金派送</span>
                                            <span>或代理资格</span>
                                        </p>
                                    </div>

                                </div>
                                <div class="s_ac">
                                    <div class="wrapper">
                                        <p><i class="icon iconfont h5-icon-pc-proxy-7" style="color:#f13131;font-size:66px"></i></p>
                                        <p>资源合作</p>
                                        <p>
                                            <span>如果你有好的推广资源，请立</span>
                                            <span>即向公司申请定制邀请注</span>
                                            <span>册验证码专属推广</span>
                                            <span>网站</span>
                                        </p>
                                    </div>

                                </div> -->
                            </div>
                        </div>
                        <div class="img_ctwo" v-show="change==ite.id" v-for="(ite,ind) in item.child" :key="ind">
                            <transition name="fade">
                                <div class="per" @click="per(item)" v-show="lr"></div>
                            </transition>
                            <img :src="ite.img">
                            <transition name="fade">
                                <div class="next" @click="next(item)" v-show="lr"></div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div style="clear:both;"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'agent',
    data(){
        return{
            change:1,
            changet:1,
            num:false,
            lr:false,
            menuArr:[
                {
                    tit:'金字塔代理模式',
                    id:1,
                    cid:1,
                    img:'/static/pjyl/img/daili1/1.png',
                    child:[],
                },
                {
                    tit:'金字塔代理教程',
                    id:2,
                    cid:2,
                    img:'/static/pjyl/img/daili1/1.jpg',
                    child:[
                        {tit:'1:如何邀请注册帐号',id:3,img:'/static/pjyl/img/daili1/re.jpg'},
                        {tit:'2:如何进入代理中心',id:4,img:'/static/pjyl/img/daili1/8.png'},
                        {tit:'3:如何生成邀链接',id:5,img:'/static/pjyl/img/daili1/9.png'},
                        {tit:'4:如何管理邀链接',id:6,img:'/static/pjyl/img/daili1/4.png'},
                        {tit:'5:如何查看下级人数',id:7,img:'/static/pjyl/img/daili1/7.png'},
                        {tit:'6:如何查看下级列表',id:8,img:'/static/pjyl/img/daili1/5.png'},
                        {tit:'7:如何查看下级财务',id:9,img:'/static/pjyl/img/daili1/6.png'},
                        {tit:'8:如何查看代理受益',id:10,img:'/static/pjyl/img/daili1/1.png'},
                        {tit:'9:如何查看下级报表',id:11,img:'/static/pjyl/img/daili1/3.png'},
                        {tit:'10:如何查看报表总汇',id:12,img:'/static/pjyl/img/daili1/2.jpg'},
                    ]
                }
            ]
        }
    },
    methods:{
        bgc(item){
            this.changet = item.cid
            this.change = item.id
            if(item.cid==2){
                this.change=3
            }
        },
        bgcTwo(ite){
            this.$nextTick(function (){
                this.change = ite.id
            })
        },
        per(item){
            if(this.change>item.child[0].id){
                this.change--
            } else{
                return false
            }
        },
        next(item){
            if(this.change<item.child[item.child.length-1].id){
                this.change++
            } else{
                return false
            }
        }
    }
}
</script>
<style lang="less" scoped>
.outBox{
    width:100%;
    height:100%;
    position:relative;
}
    .bigBox1{
        width:100%;
        height:100%;
        position:absolute;
        left:-8px;
        top:-50px;
        .s_ac{
             position:absolute;
            left:0;
            top:0;
            width: 200px;
            height: 200px;
            background: transparent;
            padding: 10px;
            margin-left: 6px;
            color: #666;
            text-align: center;
            transform:rotate(-45deg);
            border:1px solid rgba(241,49,49,1);
            border-radius:5px;
            position:relative;
        }
        .wrapper{
            position:absolute;
            left:5px;
            top:0;
            // transform:rotate(45deg);
            // width: 124%;
            width:200px;
            height:200px;
            text-align: center;
            p{
                text-align: center;
                margin:0;
                color:#333;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                    color:#666;
                    margin: 4px 0;
                }
            }
            p:nth-of-type(1){
                font-size: 63px;
                color: #a1a1a1;
            }
            p:nth-of-type(2){
                margin-top: 5px;
                font-size: 18px;
            }
            p:nth-of-type(3){
                margin-top: 14px;
                text-align: left;
                font-size: 13px;
            }
        }
    }
    .bigBox2{
        width:100%;
        height:100%;
        position:absolute;
        left:238px;
        top:0px;
        .s_ac{
             position:absolute;
            left:0;
            top:0;
            width: 200px;
            height: 200px;
            background: transparent;
            padding: 10px;
            margin-left: 6px;
            color: #666;
            text-align: center;
            transform:rotate(-45deg);
            border:1px solid rgba(241,49,49,1);
            border-radius:5px;
            position:relative;
        }
        .wrapper{
            position:absolute;
            left:5px;
            top:-13px;
            // transform:rotate(45deg);
            // width: 124%;
            width:200px;
            height:200px;
            text-align: center;
            p{
                text-align: center;
                margin:0;
                color:#333;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                    color:#666;
                    margin: 4px 0;
                }
            }
            p:nth-of-type(1){
                font-size: 63px;
                color: #a1a1a1;
            }
            p:nth-of-type(2){
                margin-top: 5px;
                font-size: 18px;
            }
            p:nth-of-type(3){
                margin-top: 14px;
                text-align: left;
                font-size: 13px;
            }
        }
    }
    .bigBox3{
        width:100%;
        height:100%;
         position:absolute;
        left:482px;
        top:-50px;
        .s_ac{
             position:absolute;
            left:0;
            top:0;
            width: 200px;
            height: 200px;
            background: transparent;
            padding: 10px;
            margin-left: 6px;
            color: #666;
            text-align: center;
            transform:rotate(-45deg);
            border:1px solid rgba(241,49,49,1);
            border-radius:5px;
            position:relative;
        }
        .wrapper{
            position:absolute;
            left:5px;
            top:0;
            // transform:rotate(45deg);
            // width: 124%;
            width:200px;
            height:200px;
            text-align: center;
            p{
                text-align: center;
                margin:0;
                color:#333;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                    color:#666;
                    margin: 4px 0;
                }
            }
            p:nth-of-type(1){
                font-size: 63px;
                color: #a1a1a1;
            }
            p:nth-of-type(2){
                margin-top: 5px;
                font-size: 18px;
            }
            p:nth-of-type(3){
                margin-top: 14px;
                text-align: left;
                font-size: 13px;
            }
        }
    }




    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    }
    .box{
        background: #fff;
        .warp{
        width:1000px;
        margin:20px auto;
        // background:#393939;
        min-height: 640px;
        .but-group{
            width:100%;
            height:118px;
            display: flex;
            align-items: center;
            justify-content: center;
            .box{
                width:524px;
                height:42px;
                display: flex;
                justify-content: space-around;
                position: relative;
                .ewm{
                    width:150px;
                    height:150px;
                    position: absolute;
                    right:55px;
                    bottom:-170px;
                    background:#fff;
                    padding:5px;
                    z-index:3;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .but{
                    width:141px;
                    height:42px;
                    background:url(/static/pjyl/img/daili1/ell_bg.png) no-repeat;
                    background-size:100% 100%;
                    color:#fff;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 0 20px;
                    .i1{
                        display: block;
                        width:18px;
                        height:18px;
                        background-size:100% 100%;
                        background:url(/static/pjyl/img/daili1/qq.png) no-repeat;
                    }
                    .i2{
                        display: block;
                        width:18px;
                        height:18px;
                        background-size:100% 100%;
                        background:url(/static/pjyl/img/daili1/wechat.png) no-repeat;
                    }
                }
                .but:hover{
                    background:url(/static/pjyl/img/daili1/ell_bg1.png) no-repeat;
                    background-size:100% 100%;
                }
            }
        }
        .tab_warp{
            width:100%;
            position: relative;
            top: 20px;
            .menu{
                width:200px;
                float: left;
                // margin-left:20px;
                min-height:510px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(230,230,230,1);
                padding-top:7px;
                .menu_one{
                    width:100%;
                    .menu_one_li{
                        width:200px;
                        height:40px;
                        // margin:5px;
                        line-height: 40px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:#333;
                        position:relative;
                        .ic{
                            width:14px;
                            height:14px;
                            margin:0 15px;
                        }
                        .menu_two{
                            width:100%;
                            .menu_two_li{
                                width:200px;
                                height:40px;
                                background: transparent;
                                color:#333;
                                line-height: 40px;
                                padding-left:30px;
                            }

                            .menu_two_li:hover{
                                cursor: pointer;
                                color:#f13131;
                            }
                            .menu_two_li.active:hover{
                                color:#fff;
                            }
                            .active{
                                background:#f13131;
                                color:#fff;
                            }
                            .menu_two_li.on:last-child{
                                background:transparent!important;
                                color:#333;
                            }

                        }
                    }
                    .menu_one_li:last-child::after{
                        clear: both;
                        display: inline-block;
                        content: '';
                        width: 0;
                        border-width: 4px;
                        border-style: solid;
                        border-color: #888 transparent transparent transparent;
                        transform: rotate(270deg);
                        right: 24px;
                        top: 17px;
                        position: absolute;
                        z-index: 22;
                    }
                    .menu_one_li:hover{
                        background:transparent;
                        cursor: pointer;
                        color:#f13131;
                    }
                    .menu_one_li:last-child:hover::after{
                        transform: rotate(360deg);
                        border-color: #f13131 transparent transparent transparent;
                    }
                    .menu_one_li.on:hover{
                        background:#f13131;
                        color:#fff;
                    }
                    .menu_one_li.on:last-child::after{
                        clear: both;
                        display: inline-block;
                        content: '';
                        width: 0;
                        border-width: 4px;
                        border-style: solid;
                        border-color: #fff transparent transparent transparent;
                        transform: rotate(360deg);
                        /* margin-left: 20px; */
                        top: 17px;
                        right: 24px;
                        position: absolute;
                        z-index: 22;
                    }

                    .menu_one_li:hover img{

                    }
                    .on{
                        background:#f13131;
                        color:#fff;
                        margin-left:-1px;
                    }
                }
            }
            .content{
                    width: 780px;
                    float: left;
                    margin-left: 20px;
                    border-radius: 4px;
                    position: relative;
                    padding-bottom: 20px;
                    min-height: 650px;
                    background: #ffffff;
                    border: 1px solid #e6e6e6;

                .per{
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    left: -15px;
                    top: 50%;
                    background: url(/static/pjyl/img/daili1/per.png) no-repeat;
                    background-size: 100% 100%;
                    transform: translateY(-50%);
                }
                .per:hover{
                    cursor: pointer;
                }
                .next{
                    width:50px;
                    height:50px;
                    position: absolute;
                    right:-15px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: url(/static/pjyl/img/daili1/next.png) no-repeat;
                    background-size: 100% 100%;
                }
                .next{
                    cursor: pointer;
                }
                .img_c{
                    width: 100%;
                    .mode{
                        width:100%;
                        .m_title{
                            width:100%;
                            height:60px;
                            font-size: 26px;
                            color:#333;
                            text-align: center;
                            line-height: 76px;
                        }
                        .bor{
                            width:120px;
                            height:2px;
                            background: #828282;
                            margin:auto;
                        }
                        .m_title_two{
                            width: 100%;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                            margin: 12px 0;
                            color: #666;
                            margin-top: 12px;
                            margin-bottom: 15px;
                        }
                        .action{
                                display: flex;
                                -ms-flex-pack: distribute;
                                justify-content: space-around;
                                width: 550px;
                                margin: auto;
                                margin-bottom: 80px;
                                margin-top: 34px;
                            .ac{
                                width: 183px;
                                .ac_tit{
                                    text-align: center;
                                    font-size:12px;
                                    color:#666;
                                    display: block;
                                }
                                .ac_box{
                                    width: 138px;
                                    height: 138px;
                                    border: 1px dashed #f13131;
                                    border-radius: 50%;
                                    padding: 18px;
                                    margin:auto;
                                    margin-top: 12px;
                                    padding-top:20px;
                                    position:relative;
                                    i{
                                        position: absolute;
                                        left: 50%;
                                        transform: translateX(-50%);
                                    }
                                    .ac_box_tit{
                                        width:100%;
                                        display: block;
                                        font-size:16px;
                                        color:#666;
                                        text-align:center;
                                        margin-top:60px;
                                    }
                                }
                            }
                        }
                        .bgwrapper{
                            height:340px;
                            background:url(/static/pjyl/img/daili1/hand2.png) no-repeat center;
                            margin-bottom: 80px;
                            .m_title.money{
                                color:#fff;
                            }
                            .m_title_two.water{
                                color:#fff;
                                margin-top: 12px;
                                font-size: 15px;
                            }
                        }
                        .profit{
                            width:685px;
                            // height:108px;
                            // background: #636363;
                            margin:auto;
                            display: flex;
                            margin-top:35px;
                            .pro_one{
                                width: 240px;
                                height: 78px;
                                padding: 33px 25px;
                                color: #fff;
                                background: transparent;
                                margin-left: 28px;
                                text-align: center;
                                font-size: 18px;
                                border-radius: 2%;
                                line-height: 25px;
                                margin-top: 16px;
                            }
                            .pro_two{
                                width: 55px;
                                height: 30px;
                                background: transparent;
                                color: #fff;
                                font-weight: 800;
                                font-size: 26px;
                                margin-top: 45px;
                                margin-left: 0;
                            }
                            .pro_th{
                                width: 104px;
                                height: 50px;
                                padding: 0px 25px;
                                background: transparent;
                                margin-left: 10px;
                                color: #fff;
                                text-align: center;
                                line-height: 30px;
                                margin-top: 40px;
                                font-size: 18px;
                            }
                            .pro_fo{
                                width: 31px;
                                height: 30px;
                                background: transparent;
                                color: #fff;
                                font-weight: 800;
                                font-size: 26px;
                                margin-top: 45px;
                                margin-left: 30px;
                            }
                            .pro_fi{
                                width: 124px;
                                height: 78px;
                                padding: 26px 25px;
                                color: #fff;
                                background: transparent;
                                margin-left: 16px;
                                text-align: center;
                                font-size: 18px;
                                border-radius: 2%;
                                line-height: 29px;
                                margin-top: 16px;
                            }
                        }
                        .sections{
                            width: 685px;
                            height: 230px;
                            display: -ms-flexbox;
                            display: flex;
                            -ms-flex-pack: distribute;
                            justify-content: space-around;
                            margin: auto;
                            margin-top: 46px;
                            margin-bottom: 70px;
                            // .s_ac{
                            //     width: 200px;
                            //     height: 200px;
                            //     background: transparent;
                            //     padding: 10px;
                            //     margin-left: 6px;
                            //     color: #666;
                            //     text-align: center;
                            //     transform:rotate(-45deg);
                            //     border:1px solid rgba(241,49,49,1);
                            //     border-radius:5px;
                            //     position:relative;
                            //     .wrapper{
                            //         transform:rotate(45deg);
                            //         width: 124%;
                            //         p{
                            //             margin:0;
                            //             color:#333;
                            //             span{
                            //                 display:block;
                            //                 width:100%;
                            //                 text-align:center;
                            //                 color:#666;
                            //                 margin: 4px 0;
                            //             }
                            //         }
                            //         p:nth-of-type(1){
                            //             font-size: 63px;
                            //             color: #a1a1a1;
                            //         }
                            //         p:nth-of-type(2){
                            //             margin-top: 5px;
                            //             font-size: 18px;
                            //         }
                            //         p:nth-of-type(3){
                            //             margin-top: 14px;
                            //             text-align: left;
                            //             font-size: 13px;
                            //         }
                            //     }

                            // }
                            // .s_ac:first-child{
                            //     left: -18px;
                            //     top: -50px;
                            //     .wrapper{
                            //         position: relative;
                            //         left: -16px;
                            //         top: -20px;
                            //     }
                            // }
                            // .s_ac:nth-child(2){
                            //     top: 5px;
                            //     left: -2px;
                            //     .wrapper{
                            //         position: relative;
                            //         top: -39px;
                            //         left: -9px;
                            //     }
                            // }
                            // .s_ac:last-child{
                            //     right: -13px;
                            //     top: -50px;
                            //     .wrapper{
                            //         position: relative;
                            //         top: -37px;
                            //         left: -18px;
                            //     }
                            // }
                        }
                    }
                    .img_ctwo{
                        width:100%;
                        position:relative;
                        img{
                            width:100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
