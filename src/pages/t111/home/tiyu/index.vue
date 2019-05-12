<template>
    <div class="tiyu_cont" :class="{night:colorbool}">
        <vp-header-pic :headerImg="headerImg"></vp-header-pic>
        <div class="tiyu">
            <div id="items">
                <div :class="item.bigclass" class="clear" v-for="(item,index) in tiyulist" :key="index" >
                    <img :src="item.img" alt="" :class="item.divclass">
                    <a href="javascript:void(0);" target="_blank" @click="getItemId(item)">
                        <div class="js-join-game-btn" :data-type="item.type" :class="item.btnclass"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
   
</template>
<script>
  import data from "../../../public/games/public.js";
  import vpHeaderPic from "../headerPic";
  
  export default {
    mixins: [data],
    data () {
      return {
          headerImg:"/static/t111/img/carouel/ty.jpg",
         tiyulist:[
              {
                name: "皇冠体育",
                id: "39",
                platform: "sport",
                img:'/static/t111/img/tiyu/hg.png',
                divclass:"ag-sport",
                bigclass:'ag-game-item',
                btnclass:"ag-join-game-btn",
                type:"fanya"
              },
              {
                name: "沙巴体育",
                id: "38",
                platform: "sport",
                img:'/static/t111/img/tiyu/sb.png',
                divclass:"sb-sport",
                bigclass:'sb-game-item',
                btnclass:"sb-join-game-btn",
                type:"sb"
              },
              {
                name: "BBIN体育",
                id: "41",
                platform: "sport",
                img:"/static/t111/img/tiyu/bb.png",
                divclass:"ag-sport",
                bigclass:'ag-game-item1',
               btnclass:"ag-join-game-btn",
                type:"fanya"
              },
              {
                name: "AG体育",
                id: "40",
                platform: "sport",
                img:'/static/t111/img/tiyu/yg1.png',
                divclass:"sb-sport",
                bigclass:'sb-game-item1',
                btnclass:"sb-join-game-btn",
                type:"sb"
              }
         ]
      }
    },
    methods: {
     
    },
    created() {
      
    },
    mounted () {
    },
    watch: {},
    components:{
        vpHeaderPic
    },
    computed:{
         colorbool(){
        return this.$store.state.mainState.color
      },
    }
  }
</script>

<style lang="less" scoped>
.tiyu_cont{
    width: 100%;
    background: url("/static/t111/img/main-bg.png") top center no-repeat,
    #f3f2ef;
    background-size: 100% 100%;
    position: relative;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
    // padding: 50px 0;
    padding-bottom:50px;
    overflow: hidden;

    .tiyu{

        width: 1200px;
        margin: auto;
        margin-top:-45px;
        #items {
            width: 100%;
            overflow: hidden;
            margin: 0 auto;
            position: relative;
            .ag-game-item {
                position: relative;
                height: 541px;
                margin-bottom: 10px;
                overflow: hidden;
                background: url('/static/t111/img/tiyu/hg1.png') no-repeat center bottom;

                .ag-join-game-btn {
                    position: absolute;
                    bottom: 50px;
                    right: 232px;
                    height: 99px;
                    width: 152px;
                    background: url('/static/t111/img/tiyu/ag-join-game.png') no-repeat center top;
                    cursor: pointer;
                }
                .ag-sport{
                    position: absolute;
                    left: 170px;
                    bottom: 0;
                    transition: all .3s;
                }
                &:hover .ag-sport{
                    left: 50px;
                }
            }
            .sb-game-item {
                position: relative;
                height: 530px;
                overflow: hidden;
                background: url('/static/t111/img/tiyu/sb-bg.png') no-repeat center bottom;

               .sb-join-game-btn {
                    position: absolute;
                    bottom: 20px;
                    left: 288px;
                    height: 99px;
                    width: 152px;
                    background: url('/static/t111/img/tiyu/sb-join-game.png') no-repeat center top;
                    cursor: pointer;
                }
                .sb-sport{
                    position: absolute;
                    right: 0;
                    bottom: -40px;
                    transition: all .3s;
                }
                &:hover .sb-sport{
                    right: 50px;
                }
            }
           
            &.ag-game-item a, &.sb-game-item a {
                display: block;
                width: 100%;
                height: 100%;
            }
            .ag-game-item1 {
                position: relative;
                height: 541px;
                margin-bottom: 10px;
                overflow: hidden;
                background: url('/static/t111/img/tiyu/bb1.png') no-repeat center bottom;

                .ag-join-game-btn {
                    position: absolute;
                    bottom: 20px;
                    right: 232px;
                    height: 99px;
                    width: 152px;
                    background: url('/static/t111/img/tiyu/bb-join-game.png') no-repeat center top;
                    cursor: pointer;
                }
                .ag-sport{
                    position: absolute;
                    left: 0;
                    bottom: 0px;
                    transition: all .3s;
                }
                &:hover .ag-sport{
                    left: 50px;
                }
            }
            .sb-game-item1 {
                position: relative;
                height: 530px;
                overflow: hidden;
                background: url('/static/t111/img/tiyu/ag1.png') no-repeat center bottom;

               .sb-join-game-btn {
                    position: absolute;
                    bottom: 13px;
                    left: 362px;
                    height: 99px;
                    width: 152px;
                    background: url('/static/t111/img/tiyu/ag1-join-game.png') no-repeat center top;
                    cursor: pointer;
                }
                .sb-sport{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    transition: all .3s;
                }
                &:hover .sb-sport{
                    right: 50px;
                }
            }
            &.ag-game-item1 a, &.sb-game-item1 a {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
}
   .night{
      background: rgba(18,21,66,.8)
    }
</style>
