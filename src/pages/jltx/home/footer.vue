<template>
    <div>
        <article id="public-superior-box" style="height: 100%;">
            <section class="robin-guidance" style="border-top: 1px solid #dcdcdc;">
                <div class="public-contance">
                    <div class="robin-publi-circular" v-for="(footerItem,footerIndex) in footerList" :key="footerIndex">
                        <router-link :to="{path:footerItem.path}" tag="a">
                            <div class="outer-circle">
                                <div class="inner-circle"><img :src="footerItem.Src"></div>
                            </div>
                            <p>{{footerItem.name}}</p>
                            <p class="pub-size">{{footerItem.text}}</p>
                        </router-link>
                    </div>
                </div>
            </section>
        </article>
        <footer id="public-footer" style="height: 81px;">
            <div class="public-contance" style="height: 100%">
        <!--        <div class="online-Service"><a href="javascript:void(0);" onclick="menu_url(62)">在线客服</a></div>-->
                <div class="robib-foodter-nav" style="clear: both; margin-left: 345px;">
                    <ul>
                        <li  v-for="(goInfoItem,goInfoIndex) in goInfo" :key="goInfoIndex" @click="goLink(goInfoItem.link)"><a href="javascript:void(0);">{{goInfoItem.name}}</a></li>
                    </ul>
                </div>
                <div class="Copyright" style="clear: both; margin-right: 41%">Copyright © 廣東會 Reserved</div>
            </div>

            <!-- <div v-show="show_mobile" class="appDown animated mobile_auto" :class="{'active':animatedStaues}">
                 <div class="qr-code" ref="qr-code"></div>
                <span @click="show_mobile=false" class="clBtn" style="display: inline-block;position: absolute; width: 23px;height: 23px;top: 9px;right: 42px;"></span>
            </div> -->
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show_mobile: true,
            animatedStaues: false,

            footerList:[
                {name:'如何存款',text:'HOW TO DEPOSOT',Src:'/static/jltx/img/ionic1-1.png',path:'/home/about/cunkuan'},
                {name:'如何取款',text:'WITHDRAW MONEY',Src:'/static/jltx/img/ionic1-2.png',path:'/home/about/qukuan'},
                {name:'代理加盟',text:'AGENT TO JOIN',Src:'/static/jltx/img/ionic1-3.png',path:'/home/about/partner'},
                {name:'游戏规则',text:'GAME RULES',Src:'/static/jltx/img/ionic1-4.png',path:'/rules/ssc?id=4'}
            ],
            goInfo:[
                { name:'关于我们',link:'/home/about/guanyu'},
                { name:'联系我们', link:'/home/about/lianxi'},
                { name:'合作伙伴', link:'/home/about/partner'},
                { name:'存款帮助', link:'/home/about/cunkuan'},
                { name:'取款帮助', link:'/home/about/qukuan'},
                { name:'常见问题', link:'/home/about/question'},
            ]
        }
    },
    methods:{
        goLink(link){
            if(link=='/service'){
                let service = JSON.parse(localStorage.config).service;
            if (service) {
                let ser = service.find(item => item.status === 'on')
                if (ser) {
                window.open(ser.url);
                }
            }
            }else{
                this.$router.push(link)
            }
        }
    },
   mounted(){
    //     this.createDownloadQRCode({
    //     el: this.$refs['qr-code'],
    //     url: window.location.origin + '/m#/download',
    //     size: 86
    //   })
        setTimeout(() => {
            this.animatedStaues = true
        }, 1500)
   }
}
</script>
<style lang="less" scoped>
    #public-footer{
        width: 100%;
        height: 42px;
        background: #971e1a;
        font-size: 12px;
    }
    .public-contance{
        width: 1100px;
        height: auto;
        margin: auto;
    }
    .robib-foodter-nav{
        width: auto;
        float: left;
        margin-left: 75px;
    }
    .robib-foodter-nav li{
        float: left;
        height: 42px;
        line-height: 42px;
    }
    .public-contance div>ul>li>a{
        width:105px;
    }
    .robib-foodter-nav li a{
        color: #fff;
        padding: 0 10px;
        border-right: 2px solid #fff;
    }

    #public-superior-box{
        width: 100%;
        height: 485px;
        background: #f2f2f2;
    }
    .robin-guidance{
        width: 100%;
        height: 239px;
        border-bottom: 1px solid #dcdcdc;
    }
    .robin-publi-circular{
        width: 133px;
        height: auto;
        float: left;
        margin: 27px 0 0 115px;
        float: left;
    }
    .robin-publi-circular a{
        display: block;
        color: #353535;
    }
    .outer-circle{
        display: inline-block;
        width: 133px;
        height: 133px;
        background: #f2dfe2;
        border-radius: 100%;
        margin-bottom: 17px;
    }
    .inner-circle{
        width: 120px;
        height: 120px;
        background: #cf3a36;
        border-radius: 100%;
        margin: auto;
        margin-top: 6px;
        text-align: center;
    }
    .inner-circle img{
        margin-top: 35px;
        -webkit-transition: all .2s ease-out;
        -moz-transition: all .2s ease-out;
        -ms-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out;
    }
    .robin-publi-circular p{
        text-align: center;
        font-size: 16px;
    }
    .robin-publi-circular p.pub-size{
        font-size: 12px;
    }

    .robin-publi-circular:hover img{
            transform: scale(1.2);
    }


.mobile_auto {
    position: fixed;
    z-index: 99999;
    left: 20px;
    bottom: 30px;
    cursor: pointer;
    width: 302px;
    height: 260px;
    background-image: url(/static/jltx/img/APPxx.png?1);

    .clBtn {
      position: absolute;
      right: 40px;
      top: 5px;
      padding: 18px;
      cursor: pointer;
    }
    .qr-code{
        position:absolute;
        top:85px;
        left:50px;
        width:90px;
        height:90px;
        padding:2px;
        background-color:#fff;
       
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
