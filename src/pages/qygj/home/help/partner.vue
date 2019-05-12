<template>
    <div class="box">
        <div class="warp">
            <div class="tab_warp">
                <div class="menu">
                    <ul class="menu_one">
                        <li v-for="(item,index) in menuArr" :key="index" class="menu_one_li" @click="bgc(item)"
                         :class="{'on':changet==item.cid}">
                            <img src="/static/hqyl/img/daili/file.png" class="ic">
                            {{item.tit}}
                            <ul class="menu_two" v-if="changet==item.cid">
                                <li class="menu_two_li" v-for="(ite,ind) in item.child" :key="ind" :class="{'active':change==ite.id}" @click="bgcTwo(ite)">
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
                            <div class="bor"></div>
                            <div class="m_title_two">注册成功后，您可自娱投注亦可赚取下级会员流水返佣，娱乐赚钱两不误</div>
                            <div class="action">
                                <div class="ac">
                                    <span class="ac_tit">功能1</span>
                                    <div class="ac_box">
                                        <p class="ac_box_tit">代理帐号</p>
                                        <p class="ac_box_tit">自行娱乐</p>
                                        <div style="width:40px;height:2px;background:#bfbfbf;margin:auto;margin-top:25px;"></div>
                                    </div>
                                </div>
                                <div class="ac">
                                    <span class="ac_tit">功能2</span>
                                    <div class="ac_box">
                                        <p class="ac_box_tit">发展</p>
                                        <p class="ac_box_tit">下线代理</p>
                                        <div style="width:40px;height:2px;background:#bfbfbf;margin:auto;margin-top:25px;"></div>
                                    </div>
                                </div>
                                <div class="ac">
                                    <span class="ac_tit">功能3</span>
                                    <div class="ac_box">
                                        <p class="ac_box_tit">发展</p>
                                        <p class="ac_box_tit">下线会员</p>
                                        <div style="width:40px;height:2px;background:#bfbfbf;margin:auto;margin-top:25px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="m_title">代理佣金计算方式</div>
                            <div class="bor"></div>
                            <div class="m_title_two">流水洗码是根据下级会员所产生的有效投注计算，不计输赢，代理即可赚取</div>
                            <div class="profit">
                                <p class="pro_one">(下级会员+下级代理发展的会员)<br>产生的所有有效投注额</p>
                                <p class="pro_two">X</p>
                                <p class="pro_th">分润点</p>
                                <p class="pro_fo">=</p>
                                <p class="pro_fi">代理受益<br>（佣金）</p>
                            </div>
                            <div class="m_title">代理共赢亮点</div>
                            <div class="bor"></div>
                            <div class="sections">
                                <div class="s_ac">
                                    <p>1</p>
                                    <p>佣金结算</p>
                                    <p>佣金日结，于次日自动派送至游戏帐号，自行提款即可</p>
                                </div>
                                <div class="s_ac">
                                    <p>2</p>
                                    <p>有效注单</p>
                                    <p>代理发展的线下会员必须是真实有效，如虚假注册或无风险下注产生有效投注，将取消佣金派送或代理资格</p>
                                </div>
                                <div class="s_ac">
                                    <p>3</p>
                                    <p>资源合作</p>
                                    <p>如果你有好的推广资源，请立即向公司申请定制邀请注册验证码专属推广网站</p>
                                </div>
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
                    img:'/static/hqyl/img/daili/1.png',
                    child:[],
                },
                {
                    tit:'金字塔代理教程',
                    id:2,
                    cid:2,
                    img:'/static/hqyl/img/daili/1.jpg',
                    child:[
                        {tit:'1:如何邀请注册帐号',id:3,img:'/static/hqyl/img/daili/re.png'},
                        {tit:'2:如何进入代理中心',id:4,img:'/static/hqyl/img/daili/8.png'},
                        {tit:'3:如何生成邀链接',id:5,img:'/static/hqyl/img/daili/9.png'},
                        {tit:'4:如何管理邀链接',id:6,img:'/static/hqyl/img/daili/4.png'},
                        {tit:'5:如何查看下级人数',id:7,img:'/static/hqyl/img/daili/7.png'},
                        {tit:'6:如何查看下级列表',id:8,img:'/static/hqyl/img/daili/5.png'},
                        {tit:'7:如何查看下级财务',id:9,img:'/static/hqyl/img/daili/6.png'},
                        {tit:'8:如何查看代理受益',id:10,img:'/static/hqyl/img/daili/1.png'},
                        {tit:'9:如何查看下级报表',id:11,img:'/static/hqyl/img/daili/3.png'},
                        {tit:'10:如何查看报表总汇',id:12,img:'/static/hqyl/img/daili/2.png'},
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
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .box{
        background: #393939;
        width:1920px;
        margin:0 auto;
        height:1000px;
        .warp{
        width:1000px;
        margin:0 auto;
        background:#393939;
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
                    background:url(/static/hqyl/img/daili/ell_bg.png) no-repeat;
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
                        background:url(/static/hqyl/img/daili/qq.png) no-repeat;
                    }
                    .i2{
                        display: block;
                        width:18px;
                        height:18px;
                        background-size:100% 100%;
                        background:url(/static/hqyl/img/daili/wechat.png) no-repeat;
                    }
                }
                .but:hover{
                    background:url(/static/hqyl/img/daili/ell_bg1.png) no-repeat;
                    background-size:100% 100%;
                }
            }
        }
        .tab_warp{
            width:100%;
            .menu{
                width:220px;
                float: left;
                margin-left:20px;
                .menu_one{
                    width:100%;
                    .menu_one_li{
                        width:210px;
                        height:40px;
                        background:url(/static/hqyl/img/daili/ell_bg3.png) no-repeat;
                        background-size:100% 100%;
                        margin:10px;
                        color:#fff;
                        line-height: 40px;
                        .ic{
                            width:14px;
                            height:14px;
                            margin:0 15px;
                        }
                        .menu_two{
                            width:100%;
                            .menu_two_li{
                                width:210px;
                                height:40px;
                                background: #585858;
                                color:#fff;
                                line-height: 40px;
                                padding-left:30px;
                            }
                            .menu_two_li:hover{
                                background:#d3a646;
                                cursor: pointer;
                            }
                            .active{
                                background:#d3a646;
                            }
                        }
                    }
                    .menu_one_li:hover{
                        background:url(/static/hqyl/img/daili/ell_bg4.png) no-repeat;
                        background-size:100% 100%;
                        cursor: pointer;
                    }
                    .on{
                        background:url(/static/hqyl/img/daili/ell_bg4.png) no-repeat;
                        background-size:100% 100%;
                    }
                }
            }
            .content{
                width:715px;
                float: left;
                margin-left:20px;
                border: 1px solid #7e6950;
                background: #585858;
                border-radius: 4px;
                position:relative;
                min-height: 500px;
                padding-bottom:20px;
                .per{
                    width:50px;
                    height:50px;
                    position: absolute;
                    left:-15px; top:200px;
                    background: url(/static/hqyl/img/daili/per.png) no-repeat;
                    background-size: 100% 100%;
                }
                .per:hover{
                    cursor: pointer;
                }
                .next{
                    width:50px;
                    height:50px;
                    position: absolute;
                    right:-15px; top:200px;
                    background: url(/static/hqyl/img/daili/next.png) no-repeat;
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
                            height:94px;
                            font-size: 26px;
                            color:#fff;
                            text-align: center;
                            line-height: 94px;
                        }
                        .bor{
                            width:120px;
                            height:2px;
                            background: #828282;
                            margin:auto;
                        }
                        .m_title_two{
                            width: 100%;
                            height:30px;
                            text-align:center;
                            line-height:30px;
                            margin:20px 0;
                            color:#Fff;
                        }
                        .action{
                            display: flex;
                            justify-content: space-around;
                            width:550px;
                            margin:auto;
                            .ac{
                                width: 183px;
                                .ac_tit{
                                    text-align: center;
                                    font-size:12px;
                                    color:#fff;
                                    display: block;
                                }
                                .ac_box{
                                    width: 130px;
                                    height: 130px;
                                    border: 2px solid #b79f65;
                                    border-radius: 50%;
                                    padding: 18px;
                                    margin:auto;
                                    margin-top: 12px;
                                    padding-top:20px;
                                    .ac_box_tit{
                                        width:100%;
                                        display: block;
                                        font-size:18px;
                                        color:white;
                                        text-align:center;
                                        margin-top:10px;
                                    }
                                }
                            }
                        }
                        .profit{
                            width:685px;
                            height:108px;
                            background: #636363;
                            margin:auto;
                            display: flex;
                            .pro_one{
                                width:314px;
                                height:78px;
                                padding: 15px 25px;
                                color: #dcbe6b;
                                background: #515151;
                                margin-left: 28px;
                                text-align: center;
                                font-size: 18px;
                                border-radius: 2%;
                                line-height:25px;
                                margin-top:16px;
                            }
                            .pro_two{
                                width:18px;
                                height:30px;
                                background: #636363;
                                color: #515151;
                                font-weight: 800;
                                font-size:26px;
                                margin-top:50px;
                                margin-left:10px;
                            }
                            .pro_th{
                                width:104px;
                                height:54px;
                                background: #515151;
                                margin-left:10px;
                                color: #dcbe6b;
                                text-align: center;
                                line-height:54px;
                                margin-top:40px;
                                font-size: 18px;
                            }
                            .pro_fo{
                                width:18px;
                                height:30px;
                                background: #636363;
                                color: #515151;
                                font-weight: 800;
                                font-size:26px;
                                margin-top:50px;
                                margin-left:10px;
                            }
                            .pro_fi{
                                width:127px;
                                height:78px;
                                padding: 15px 25px;
                                color: #dcbe6b;
                                background: #515151;
                                margin-left: 16px;
                                text-align: center;
                                font-size: 18px;
                                border-radius: 2%;
                                line-height:25px;
                                margin-top:16px;
                            }
                        }
                        .sections{
                            width:685px;
                            height:230px;
                            display: flex;
                            justify-content: space-around;
                            margin:auto;
                            margin-top:20px;
                            .s_ac{
                                width:32%;
                                height: 230px;
                                background: #636363;
                                padding: 10px 20px;
                                margin-left: 6px;
                                color: #fff;
                                text-align: center;
                                p:nth-of-type(1){
                                    font-size: 63px;
                                    color: #a1a1a1;
                                }
                                p:nth-of-type(2){
                                    margin-top: 5px;
                                    font-size: 18px;
                                }
                                p:nth-of-type(3){
                                    margin-top: 5px;
                                    text-align: left;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .img_ctwo{
                        width:100%;
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


