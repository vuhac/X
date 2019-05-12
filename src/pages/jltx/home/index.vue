<template>

    <div>
        <section class="public-contance">
            <div class="robin-banner robin-content">
                <div class="swiper-container" id="banner-sidler">
                    <div class='carsouel robin-banner' >
                        <!-- 新轮播图接口写法 -->
                        <div class="carouse" >
                            <el-carousel :interval="5000" arrow="never" height="418px" style="overflow:visible;">
                                <el-carousel-item v-for="(item,i) in carouselData" :key="i">
                                <!-- 线下本地，没有图片的写法 -->
                                <!-- <a href="javascript:void(0)" @click="bannerGo(item)">
                                    <img :src="item.newPic" alt="">
                                </a> -->

                                <!-- 正式上线后写法 -->
                                <a href="javascript:void(0)" >
                                    <img :src="item.img" alt="">
                                </a>
                                </el-carousel-item>
                            </el-carousel>
                        </div>

                        
                    </div>
 
                </div>
                <div class="newgong">
                    <div class="newgong-content">
                        <div class="notice" style="margin-left:-22px;">
                            <!-- <i class="iconfont icon-sound"></i> -->
                            <img src="/static/jltx/img/notice-iocn.png" alt="">
                        </div> 
                        <div class="demolist list">
                             <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                                onmouseover="this.stop()"
                                style="color: rgb(81,81,81); font-size: 14px; line-height: 47px;overflow: hidden;height: 47px;">
                            <span v-html="lantern"></span>
                        </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class='public-contance'>
            <div class='public-sidler-modle'>
                <div class='robin-silder-boxing' id='slideBox' style='position:relative'>
                    <!-- 左按钮 -->
                    <div class="menu_lr_btn" style="left: 10px;" @click='btnChangeGameId("desc")'>
                        <span id="prev" style="background: url('/static/jltx/img/left.png'); display: inline-block; width: 12px; height: 20px; cursor: pointer" ></span>
                    </div>
                    <!-- 右按钮 -->
                    <div class="menu_lr_btn" style="right: 10px;" @click='btnChangeGameId("add")'>
                        <span id="next" style="background: url('/static/jltx/img/right.png'); display: inline-block; width: 12px; height: 20px; cursor: pointer"></span>
                    </div>
                    
                    <!-- 文字当行栏 -->
                    <div class="tabs J_slide_trigger" style="width: 629px;">

                        <div style="width: 632px;height:32px; overflow: hidden;position:relative" id="slider">
                            <ul style="width: 2310px;" id="wame_wrap" @mouseover="stopLb" @mouseout="startLb">
                               <li class='textLi' v-for="(liveItem,liveIndex) in liveDatas" :key="liveIndex"  :class="[{'active':gameId===liveIndex},liveItem.class]" @click="changeNum(liveIndex)">
                                   <a href="javascript:void(0)">{{liveItem.name}}</a>
                               </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 上上面轮播图 -->
                    <div class="J_slide_clip" style="position: relative; overflow: hidden; height: 360px; width: 687px;">
                        <ul class="J_slide_list move picUl" @mouseover="stopLb" @mouseout="startLb">
                            <li v-for="(item,index) in liveDatas" :key="index" class="J_slide_item picLi" style="float: left;">
                                <a href="javascript:void(0)">
                                    <img :src="item.bgSrc" height="356" width="687" alt="" @click='getItemId(item)'>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class='robin-aside-box'>
                    <div class='robin-winning-user'>
                        <div  id="winngingRanking">
                            <div class="con-tit con-tit2" style="height: 33px;line-height: 33px;position: relative;font-size: 18px;">
                                <span class="robin-aside-box-span span1" style="margin-left:5px;">排名</span>
                                <span class="robin-aside-box-span span2" style="margin-left:28px;">用户</span>
                                <span class="robin-aside-box-span span3" style="margin-left:50px;">投资总额</span>
                                <div class="winning-box1">
                                    <ul class="winning-list">
                                        <li class="winning-item" v-for="(item, i) in winningInfo" :key="i" style="height:29px;height:29px;">
                                            <span :class="[{ sort: i<=2 }, 'sort1']" >{{i+1}}</span>
                                            <span class="name">{{item.name.padEnd(8, '*')}}</span>
                                            <span class="num">{{item.num}}元</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="robin-scan-code">
                        <div class="rob-scan-games">扫&nbsp;&nbsp;一&nbsp;&nbsp;扫<br>随时游戏</div>
                        <div class="robin-iphone-box">手机版</div>
                        <div class="QR-code" ref="qr-code">
                            <!-- <img src="/static/jltx/img/code.png" width="96" height="96"> -->
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="robin-push-box">
                <div class="robin-out-box">
                    <div class="robin-in-box">
                        <a href="javascript:void(0)" v-for="(asideItem,asideIndex) in asideList" :key="asideIndex" :class="[{'active':asideActive==asideIndex}]" @click="changeAside(asideIndex)">
                            {{asideItem.name}}
                            <span>{{asideItem.text}}</span>
                        </a>
                    </div>
                </div>
                <div id="tas-swiper" class="swiper-container">
                    <div class="swiper-wrapper" :style="{transform: 'translate3d(0px,' + swiperTop + 'px, 0px)'}">
                        <div class="swiper-slide swiper-slide-visible swiper-slide-active" style="width: 876px; height: 351px;" v-for="(swiperItem,swiperIndex) in asideList" :key="swiperIndex">
                            <router-link :to="{path:swiperItem.path}">
                                <img :src="swiperItem.bgSrc">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>  
        </div>



        <!-- <Modal width="700" height="550" :scrollable=true :mask-closable=false v-model="showimg" class='guanbi alert-img'>
            <img width="100%" height="100%" :src="imgsrc"/>
            <span class="close" @click="close"></span>
        </Modal> -->

        <!-- <vp-mc :imgsrc="imgsrc"></vp-mc> -->

    </div>
</template>
<script>
import store from '@/vuex/store'
import data from '../../public/games/public.js'
import vpMc from "./mc"
export default {
    mixins:[data],
    data(){
        return {
            carouselData:[],
            // 轮播图索引
            ivu_value:0,
            showimg:true,
            // 传给弹框的一个值
            imgsrc:'/static/jltx/img/yunshanfu.png',
            lunbo:[
              
                {name:'',path:'/static/jltx/img/yslb/1-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/2-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/3-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/4-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/5-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/jiebei-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/jltx2-min.jpg',link:''},
                {name:'',path:'/static/jltx/img/yslb/jgj-min.jpg',link:''},

            ],
            liveDatas: [
           
                {name: 'AG视讯厅', platform: 'live_casino', id: '14', class: 'ag',bgSrc:'/static/jltx/img/ys/ag-min.jpg'},
                {name: 'BBIN视讯厅', platform: 'live_casino', id: '15', class: 'bb',bgSrc:'/static/jltx/img/ys/bbin-min.jpg'},
                {name: 'BG视讯厅', platform: 'live_casino', id: '44', class: 'bg',bgSrc:'/static/jltx/img/ys/bg-min.jpg'},
                {name: 'DG视讯厅', platform: 'live_casino', id: '33', class: 'dg',bgSrc:'/static/jltx/img/ys/dg-min.jpg'},
                {name: 'DS视讯厅', platform: 'live_casino', id: '16', class: 'ds',bgSrc:'/static/jltx/img/ys/ds-min.jpg'},
                {name: 'LEBO视讯厅', platform: 'live_casino', id: '35', class: 'lebo',bgSrc:'/static/jltx/img/ys/lebo-min.jpg'},
                {name: 'OG视讯厅', platform: 'live_casino', id: '39', class: 'og',bgSrc:'/static/jltx/img/ys/og-min.jpg'},
                {name: 'eBET视讯厅', platform: 'live_casino', id: '34', class: 'ebet',bgSrc:'/static/jltx/img/ys/ebet-min.jpg'},
                {name: 'LMG视讯厅', platform: 'live_casino', id: '36', class: 'lmg',bgSrc:'/static/jltx/img/ys/lmg-min.jpg'},
                {name: '欧博视讯厅', platform: 'live_casino', id: '37', class: 'ob',bgSrc:'/static/jltx/img/ys/ob-min.jpg'},
                {name: 'SA视讯厅', platform: 'live_casino', id: '40', class: 'sa',bgSrc:'/static/jltx/img/ys/sa-min.jpg'},
            ],
            winningInfo:[],
            asideList:[
                {name:"MG电子游艺",text:'MG CASINO',bgSrc:'/static/jltx/img/ysdz/mg-min.jpg',path:'/home/games?id=10022&name=MG老虎机'},
                {name:'PT电子游艺',text:'PT CASINO',bgSrc:'/static/jltx/img/ysdz/pt-min.jpg',path:'/home/games?id=10024&name=PT老虎机'},
                {name:'BBIN电子游艺',text:'BBIN CASINO',bgSrc:'/static/jltx/img/ysdz/bbin-min.jpg',path:'/home/games?id=10016&name=BBIN老虎机'},
                {name:'AG电子游艺',text:'AG CASINO',bgSrc:'/static/jltx/img/ysdz/ag-min.jpg',path:'/home/games?id=10015&name=AG老虎机'},
                {name:'MW大满贯',text:'MW CASINO',bgSrc:'/static/jltx/img/ysdz/mw-min.jpg',path:'/home/games?id=10023&name=MW老虎机'}
            ],
            asideActive:0,
            gameId:0,
            noticePosition:0,
            swiperTop:0,
            lantern: '',
            gameId:0,
            timer:null,
        }
    },
    methods:{
    //获取banner新接口,改用老接口，已经进行了兼容
      async getBanner () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
          position: 'banner',
          clientType: 'pc'
        })
        if (res && res.code == 200) {
          // 加判断，防止没有轮播图数据返回时的情况
          if(res.data[0]){
            this.carouselData = res.data[0] && res.data[0].body
            this.downloadAppTarget = res.data[0] && res.data[0].downloadAppTarget
            // console.log(this.carouselData);
            // console.log(this.downloadAppTarget)
            // this.carouselData&&this.carouselData.forEach((item,index)=>{
            //   item.newPic="/static/test/img/0425test/banner"+(index+1)+".jpg";
            // })
          }else{
            console.log("轮播接口没有数据返回")
          }
        }

      },



        // async getLantern () {
        //     let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
        //     type: 'lantern',
        //     desc_client_type: 'html'
        //     })
        //     if (res && res.code == 200) {
        //     if (!res.data.data.length) return false
        //     this.lantern = res.data.data[0] && res.data.data[0].description
        //     }
        //     // 参数： type: lantern 走马灯
        //     // 参数： type: popups 弹窗
        //     // 参数： type: notice 提示
        // },
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

        changeAside(index){
            console.log(index,this.swiperTop)
            this.asideActive =index;
        },
        initWinningInfo () {
            let length = 50
            let data = []
            for (let i = 0; i < length; i++) {
            let num = parseInt(Math.random() * (Math.random() * (Math.random() * 360000)))
            num = num < 10 ? num * 1234 : num
            num = num < 100 ? num * 123 : num
            num = num < 1000 ? num * 12 : num
            let name = String.fromCharCode((num % 26) + 97) + num.toString(32)
            name = name.substr(0, 3)
            data[i] = {name,num}
            }
            this.arraySort(data, (v1, v2) => v1.num < v2.num)
            this.winningInfo = data;
        },
        close(){
          this.showimg=false;
        },

        //根据gameId的变化，文字栏跟着一起变
        changeNum(index){
            let textGap=105;
            let ul=document.getElementById("wame_wrap")
            let textList=document.getElementsByClassName('textLi');
            this.gameId = index;

            //点击发生变化
            let mLeft=0;
            let prevNum=this.gameId-3;
            let nextNum=textList.length-1-this.gameId;
            if(nextNum>=3){
                mLeft=prevNum*textGap;
            }else{
                mLeft=(textList.length-6)*textGap;
            }

            if(prevNum<=0){
                mLeft=0;
            }
            ul.style.left=-mLeft+'px';

            this.ulChange(this.gameId);
        },
        //前后按钮点击效果
        btnChangeGameId(type){
            let that=this;
            //暫停輪播圖
            this.stopLb();
            let ul=document.getElementById("wame_wrap")
            let textList=document.getElementsByClassName('textLi');
            console.log(type,this.gameId)
            if(type=='add'){
                if(this.gameId<textList.length-1){
                    this.gameId++
                }else{//最后一页,跳转到第一页
                    this.gameId=0;
                }
            }
            if(type=='desc'){
                if(this.gameId>0){
                    this.gameId--;
                }else{
                    console.log(this.gameId)
                    this.gameId=textList.length-1;
                }
            }
            this.changeNum(this.gameId);
            // 啓動輪播圖
            this.startLb();
        },
        //下面图片轮播效果
        ulChange(index){
            let picGap=687;
            let picUl=document.getElementsByClassName('picUl')[0];
            let picList=document.getElementsByClassName('picLi');

            let pLeft=0;
            this.gameId=index;
            pLeft=this.gameId*picGap;
            picUl.style.left=-pLeft+'px';
        },
        //播放輪播圖
        playFn(){
            let that=this;
            let textList=document.getElementsByClassName('textLi');
            let picUl=document.getElementsByClassName('picUl')[0];

            if(that.gameId<textList.length-1){//小于列表长度，id++
                that.gameId++;
            }else{//否则，说明已经是最大长度了，需要重置回0
                that.gameId=0;
            }
            that.changeNum(that.gameId); 
        },
        //暂停轮播图
        stopLb(){
            clearInterval(this.timer);
        },
        // 启动定时器
        startLb(){
            let that=this;
            this.timer=setInterval(that.playFn,3000)
        }
    },
    watch:{
        'asideActive':function(newVal,oldVal){
            if(newVal>oldVal){
                this.swiperTop -=351*(Math.abs(newVal-oldVal));
            }else{
                this.swiperTop +=351*(Math.abs(newVal-oldVal));
            }
        },
       
    },
    mounted(){
        this.getBanner();
        this.initWinningInfo();
        this.getLantern();
        this.createDownloadQRCode({
            el: this.$refs['qr-code'],
            url: window.location.origin + '/m#/download',
            size: 96
      })
    },
    created(){
        this.$nextTick(()=>{
            this.startLb();
        })
        setTimeout(()=>{
            this.showimg=false;
        },7000)
    },
    components:{
        vpMc
    },
    destroyed(){
        this.stopLb();
    }
}
</script>
<style lang="less" scoped>

    .picUl{
        position:absolute;
        width:15114px;
        left:0;
        top:0;
    }

    .J_slide_list{
        transition-duration: 0.6s;
    }
    .move{
        transition: all .3s ease;
    }
    .public-contance{
        width: 1100px;
        height: auto;
        margin: auto;
    }
    .robin-banner{
        width: 100%;
        overflow: hidden;
        margin-top: 6px;
    }
    .robin-content{
        position: relative;
       
    }
    #banner-sidler{
        height: 418px;
    }
    .swiper-container {
        margin:0 auto;
        position:relative;
        overflow:hidden;
        direction:ltr;
        -webkit-backface-visibility:hidden;
        -moz-backface-visibility:hidden;
        -ms-backface-visibility:hidden;
        -o-backface-visibility:hidden;
        backface-visibility:hidden;
        /* Fix of Webkit flickering */
        z-index:1;
    }
    .swiper-wrapper {
        transition-duration: 0.6s;
        width: 876px;
        height: 1755px;
        position:relative;
        width:100%;
        overflow: hidden;
        display: block;
        -webkit-transition-property:-webkit-transform, left, top;
        -webkit-transition-duration:0.6s;
        -webkit-transform:translate3d(0px,0,0);
        -webkit-transition-timing-function:ease;
        
        -moz-transition-property:-moz-transform, left, top;
        -moz-transition-duration:0.6s;
        -moz-transform:translate3d(0px,0,0);
        -moz-transition-timing-function:ease;
        
        -o-transition-property:-o-transform, left, top;
        -o-transition-duration:0.6s;
        -o-transform:translate3d(0px,0,0);
        -o-transition-timing-function:ease;
        -o-transform:translate(0px,0px);
        
        -ms-transition-property:-ms-transform, left, top;
        -ms-transition-duration:0.6s;
        -ms-transform:translate3d(0px,0,0);
        -ms-transition-timing-function:ease;
        
        transition-property:transform, left, top;
        transition-duration:0.6s;
        transform:translate3d(0px,0,0);
        transition-timing-function:ease;

        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }

    .robin-banner img{
        width: 100%;
        height: 100%;
    }
    .lunbopic{
        width:100%;
        height:100%;
    }

    #public-sidler-modle{
        width: 100%;
        height: 410px;
    }

    .robin-silder-boxing{
        width: 687px;
        height: 410px;
        float: left;
        background: #ec2f2d;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .menu_lr_btn {
        position: absolute;
        top: 16px;
        cursor: pointer;
    }
    .robin-push-box{
        width: 100%;
        height: 351px;
        margin: 9px 0 35px 0;
    }
    .robin-out-box{
        width: 216px;
        height: 351px;
        background: #cf3a36;
        float: left;
    }
    .robin-in-box{
        width: 200px;
        height: 320px;
        background: #fff;
        margin: auto;
        margin-top: 15px;
    }
    .robin-in-box a.active{
        background: #971e1a;
        border-bottom: 1px solid #971e1a;
        color: #fff;
    }
    .robin-in-box a{
        display: block;
        // height: 47.5px;
        text-align: center;
        height:64px;
        font-size: 16px;
        color: #353535;
        padding-top: 18px;
        box-sizing:border-box;
        border-bottom: 1px solid #e5e5e5;
    }
    .robin-in-box a.active span{
        color: #fff;
    }
    .robin-in-box a span{
        display: block;
        color: #b3b3b3;
        padding-top: 2px;
        font-size: 10px;
        overflow: hidden;
        padding-bottom:11px;
    }
    #tas-swiper{
        width: 876px;
        height: 351px;
        float: right;
    }
    .swiper-slide {
        float: left;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }
    .content-live{
        width:100%;
        height:418px;
        background-color: red;
        overflow: hidden;
    }
    .public-sidler-modle{
        width: 100%;
        height: 410px;
    }
    .robin-silder-boxing{
        width: 687px;
        height: 410px;
        float: left;
        background: #ec2f2d;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .robin-aside-box-span{
        display: inline-block;
        text-align: center;
        color:rgb(0,0,0);
        .span1{
            width:50px;
        }
        .span1{
            width:90px;
        }
        .span1{
            width:88px;
        }

    }
    .menu_lr_btn {
        position: absolute;
        top: 16px;
        cursor: pointer;
    }

    .public-contance div > ul > li > a {
        width: 105px;
    }

    .tabs{
        width: 672px;
        height: 32px;
        line-height: 32px;
        background: #fff;
        margin: auto;
        margin-top: 11px;
        margin-bottom: 11px;
        .active a{
            display: inline-block;
            color: #FFF;
            background: #971e1a;
            text-decoration: none;
        }
        #wame_wrap{
            width:2310px;
            height:32px;
            position:absolute;
            left:0;
            top:0;
            li{
                width:105px;
                height:32px;
                float: left;
                a:hover{
                    display: inline-block;
                    color: #FFF;
                    background: #971e1a;
                    text-decoration: none;
                }
            }
        }
    }
    .tabs a{
        display: block;
        float: left;
        width: 112px;
        text-align: center;
        font-size: 12px;
    }
    .robin-aside-box{
        width: 403px;
        float: right;
    }
    .robin-winning-user{
        width: 100%;
        height: 283px;
        background: url(/static/jltx/img/bg1.png) no-repeat;
        background-size: 100% 100%;


    }
    #winngingRanking{
        display: inline-block;margin: 77px 0 0 118px; width: 245px; height: 175px; overflow: hidden;
    }
     .winning-box1{
          overflow: hidden;
          position: relative;
          height: 126px;;
          &:hover .winning-list{
            animation-play-state:paused;
          }
          .winning-list {
            position: relative;
            left:0;
            top:0;
            -webkit-animation: animateSub 40s linear infinite;
            -o-animation: animateSub 40s linear infinite;
            -moz-animation: animateSub 40s linear infinite;
            animation: animateSub 40s linear infinite;
            @keyframes animateSub {
              0% {
                top: 0;
              }
              100% {
                top: -700px;
              }
            }
            .winning-item {
              width: 100%;
              padding:0 10px;
              line-height: 18px;
              &:after {
                content: '';
                display: table;
                clear: both;
                zoom:1;
              }
              &:nth-child(1),
              &:nth-child(2),
              &:nth-child(3){
                .order {
                  background-color: red;
                }
              }
            
              .order {
                display:block;
                float: left;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: white;
                background-color: #afafaf;
                border-radius: 4px;
              }
              .name{
                float:left;
                color:#fcc43e;
                font-weight: normal;
                font-size: 16px;
                height: 29px;
                line-height: 29px;
                margin-left:35px;
                color:rgb(0,0,0);
              }
              .sort{
                float:left;
                width:25px;
                color:#f27800;
                text-align: center;
                font-weight: normal;
                font-size: 16px;
                height:25px;
                color:#fff;
                background:#e4393c!important;
              }
              .sort1{
                float:left;
                width:25px;
                color:#f27800;
                text-align: center;
                font-weight: normal;
                font-size: 16px;
                height:25px;
                color:#fff;
                background:#afafaf;
              }
              .num {
                float: right;
                line-height: 29px;
                height:29px;
                color:rgb(0,0,0);
                margin-right: 8px;
                font-weight: normal;
                font-size: 14px;
              }
            }
          }
        }

    .robin-scan-code{
        width: 100%;
        height: 118px;
        background: #cf3a36;
        border-radius: 5px;
        margin-top: 7px;
    }
    .rob-scan-games{
        width: 186px;
        float: left;
        text-align: center;
        font-size: 26px;
        color: #fff;
        line-height: 40px;
        padding-top: 20px;
    }
    .robin-iphone-box{
        width: 28px;
        height: 89px;
        border-radius: 15px;
        border: 2px solid #fff;
        float: left;
        color: #fff;
        font-size: 18px;
        text-align: center;
        padding-top: 7px;
        margin-top: 9px;
    }
    .QR-code{
        width: 100px;
        height: 100px;
        float: left;
        margin: 10px 0 0 52px;
        padding: 2px;
        background-color: #fff;
    }
    
    .public-contance{
        width: 1100px;
        height: auto;
        margin: auto;
    }
    .announcement_list{
        width: 100%;
        height: 47px;
        overflow: hidden;
        padding: 0 0 0 25px;
        color: #515151;
        background: url(/static/jltx/img/home/notice-iocn.png) 0 17px no-repeat;
    }

    .announcement_list li{
        height: 47px;
        line-height: 47px;
        overflow: hidden;
    }
    .menu_lr_btn {
        position: absolute;
        top: 16px;
        cursor: pointer;
    }

    .public-contance div > ul > li > a {
        width: 105px;
    }

    .newgong {
        // position: absolute;
        height: 47px;
        width: 100%;
        // bottom: 0;
        // left: 0;
        // background: rgba(0, 0, 0, 0.4);
        z-index: 12;
        .newgong-content {
            width: 1100px;
            height: 47px;
            margin: 0 auto;
            .notice {
            display: inline-block;
            float: left;
            position: relative;
            top: 16px;
            left: 25px;
            margin-right: 30px;
            i {
                color: #000;
                font-size: 21px;
            }
            }
            .demolist {
            display: inline-block;
            width: 990px;
            margin-left:20px;
            }
        }
    }


    .gg-box{
        /deep/.ivu-modal {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -328px;
            margin-top: -276px;
        }
    }
    .alert-img {
        /deep/ .ivu-modal-content {
        background-color: transparent;
        }
        /deep/ .ivu-modal-footer{
            display:none;
        }
        /deep/ .ivu-modal{
            // height:550px;
            position:absolute;
            top:50%;
            left:50%;
            margin-left: -350px;
            margin-top: -275px;
        }
        /deep/ .ivu-modal-body{
            padding:0;
            height:550px;
        }

        /deep/ .ivu-modal-close{
            width:50px;
            height:50px;
            opacity:0;
            right:0;
        }
    }



</style>
