<template>
  <div class="item item1">
    <div class="lottery-logo">
      <!-- <img class="ico" :src="$route.meta.name|capitalize" alt=""> -->
      
      <div class="logoBox">
        <img class="ico" :src="$route.meta.id|capitalize" alt="">
        <div class="hoverMaskBox"></div>
      </div>

      <div class="title-wrap">
        <div class="textBox">

              <div class="name">{{$route.meta.name}}</div>
                <div class="number">
                  第<span>{{showIssue}}</span>期
                  <span v-if="$route.meta.id==11?false:$route.meta.id==28?false:true"><span class="black">&nbsp;总共:</span>
                                <span
                                  v-if="$route.meta.id==12||$route.meta.id==16||$route.meta.id==24||$route.meta.id==27">1152</span>
                                <span v-else-if="$route.meta.id==18">960</span>
                                <span v-else-if="$route.meta.id==13||$route.meta.id==17">480</span>
                                <span v-else-if="$route.meta.id==19">288</span>
                                <span v-else-if="$route.meta.id==3">180</span>
                                <span v-else-if="$route.meta.id==14">48</span>
                                <span v-else-if="$route.meta.id==15">42</span>
                                <span v-else-if="$route.meta.id==6">97</span>
                                <span v-else-if="$route.meta.id==26">40</span>
                                <span v-else-if="$route.meta.id==2900">44</span>
                                <span v-else-if="$route.meta.id==2901">36</span>
                                <span v-else-if="$route.meta.id==2902">40</span>
                                <span v-else-if="$route.meta.id==2903||$route.meta.id==2905">39</span>
                                <span v-else-if="$route.meta.id==2904">41</span>
                                <span v-else-if="$route.meta.id==2906">41</span>
                                <span v-else-if="$route.meta.id==3630">288</span>
                                <span v-else-if="$route.meta.id==25">40</span>
                                <span v-else-if="$route.meta.id==22">45</span>
                                <span v-else-if="$route.meta.id==23">43</span>
                                <span v-else-if="$route.meta.id==29">23</span>
                                <span v-else-if="$route.meta.id==21">42</span>
                                <span v-else-if="$route.meta.id==3631">480</span>
                                <span v-else-if="$route.meta.id==3632">288</span>
                                <span v-else-if="$route.meta.id==10044">720</span>
                                <span v-else-if="$route.meta.id==10045">480</span>
                                <span v-else>{{childNeedMess.total}}</span>
                                <span class="black">期</span></span>
                </div>
                <div class="plays-wrap">
                  <div class="plays">
                    <span @click="playsChoose('官方玩法')" :class="{'active':active.plays=='官方玩法'}">官方玩法</span>
                    <!-- <span @click="playsChoose('快捷玩法')" :class="{'active':active.plays=='快捷玩法'}">
                    <img src="../../../../assets/images/new.png" alt=""> 快捷玩法
                    </span> -->
                    <span @click="playsChoose('传统玩法')" :class="{'active':active.plays=='传统玩法'}">传统玩法</span>
                  </div>
                </div>

        </div>


      </div>
    </div>

  </div>
</template>
<script>

  export default {
    props: {
      childNeedMess: {
        type: Object
      }
    },

    data () {
      return {
        active: {
          plays: '传统玩法'
        },
        ico: '',
        showIssue: ''
      }
    },
    methods: {
      // 玩法选择（快速玩法）
      playsChoose (datas) {
        if (datas != '传统玩法') {
          this.dNotify('即将上线', 'warn')
          // setTimeout(()=>{
          //     this.$store.commit('alert/showTipModel', {bool:false,title:'即将上线',model:'warn'});
          // },1000);
        }

        // this.active.plays=datas;
        this.$emit('plays-say', datas)
      }
    },
    created () {
    },

    computed: {

    },
    mounted () {
      if (this.$route.meta.code != 'bjsc' && this.$route.meta.code != 'bjpcdd' && this.$route.meta.id != 1) {
        this.showIssue = this.lastIssue && this.lastIssue.toString().substring(4, this.lastIssue.length)
      } else {
        this.showIssue = this.lastIssue
      }
    },
    watch: {
      childNeedMess: {
        handler: function (val, oldVal) {
          if (this.$route.meta.code != 'bjsc' && this.$route.meta.code != 'bjpcdd' && this.$route.meta.id != 1) {
            this.showIssue = this.childNeedMess.issue && this.childNeedMess.issue.toString().substring(4, this.childNeedMess.issue.length)
          } else {
            this.showIssue = this.childNeedMess.issue
          }
        },
        deep: true
      }
    },
    filters: {
      capitalize: function (value) {
        try {
          // return `/static/public/image/lottery/ico/vp-${value}.png`
          return `/static/public/image/lottery/nico/png/${value}.png`

        } catch (err) {
          return `/static/public/image/lottery/ico/vp-changwan-ico.png`
        }

      }
    },
    components: {}
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import '../../../../../assets/less/public/var.less';

  .item1 {
    position: relative;
    border-right: 1px dashed #ccc;
    text-align: center;
    padding-top: 15px;

    .lottery-logo {
      // display: inline-block;
      width:100%;
      height:100%;
    }

    &:hover {
      .hoverMaskBox {
        background-position: top left, bottom right, 0 0, 0 0;
      }
    }

    &.over {
      padding-right: 19px;
      padding-left: 19px;
    }

    .hoverMaskBox {
      position: absolute;
      width: 120px;
      height: 120px;
      background-image: url('/static/public/image/lottery/ico/button_bg.png'), url('/static/public/image/lottery/ico/button_bg.png');
      background-position: bottom left, top right, 0 0, 0 0;
      -webkit-transition: background-position 1s;
      -moz-transition: background-position 1s;
      transition: background-position 1s;
    }

    .ico {
      width: 120px;
      height: 120px;
      float: left;
      margin-right: 28px;

      &.over {
        margin-right: 20px;
      }
    }
    .logoBox{
      width:120px;
      float: left;
      height:100%;
      margin-left:25px;
    }
    .title-wrap {
      // text-align: left;
      float: left;
      width:273px;
      text-align: center;
      .textBox{
        display:inline-block;

      }
      .name {
        font-size: 40px;
        color: rgba(85, 85, 85, 1);
        line-height: 40px;
        padding-bottom: 12px;
        text-align: center;
      }

      .number {
        width: 215px;
        font-size: 14px;
        color: rgba(85, 85, 85, 1);
        padding-bottom: 18px;
        text-align: center;

        span {
          color: #FF0000;
        }

        span.black {
          color: #000;
        }
      }

      .plays-wrap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .plays {
          font-size: 14px;
          color: rgba(136, 136, 136, 1);
          display: flex;

          span {
            position: relative;
            background: #f8f8f8;
            border: 1px solid #eaeaea;
            border-right: 0;
            padding: 8px;
            cursor: pointer;
            float: left;
            white-space: nowrap;

            &.active {
              background: #fff;
              color: #FC0000;
            }

            &:first-child {
              border-top-left-radius: 2px;
              border-bottom-left-radius: 2px;
            }

            &:nth-child(2) {
              img {
                position: absolute;
                top: -10px;
                left: 32px;
              }
            }

            &:last-child {
              border-right: 1px solid #eaeaea;
              border-top-right-radius: 2px;
              border-bottom-right-radius: 2px;
            }

          }
        }
      }

    }
  }
</style>
