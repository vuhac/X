<template>
  <div class="vp-admin-wrap">
    <div class="vp-admin-wrap-close" @click="close">
      <div class="vp-admin-wrap-close-empty">
        <a></a>
      </div>
    </div>
    <div class="line"></div>
    <vp-lgion :clean="clean" v-on:child-say="resetClean" v-if="modal=='登入帐号'"></vp-lgion>
    <vp-register :clean="clean" v-on:child-say="resetClean" v-if="modal=='注册帐号'"></vp-register>
  </div>
</template>


<script>
  import vpLgion from './login'
  import vpRegister from './register'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        clean:false
      }
    },
    methods: {
      // reset(){
      //   this.userName='';
      //   this.password='';
      //   this.password_confirmation='';
      //   this.phoneNumber='';
      //   this.pulicError='';
      //   this.code='';
      //   this.intacode='';
      //   this.captcha_key=''
      // },
      resetClean(){
        this.clean=false
      },
      close () {
        this.clean=true
        this.$store.commit('alert/showLogin', false)
        // reset()
      }
    },
    computed: {
      modal () {
        return this.$store.state.alert.login.chooseModel
        // reset()
      }
    },
    components: {
      vpLgion,
      vpRegister
    },
    store
  }
</script>
<style lang="less" scoped>
  .vp-admin-wrap-close {
    position: absolute;
    top: 15px;
    right: 0px;
    cursor: pointer;
    width: 60px;
    height: 40px;
    background: #F2F2F2;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;
     &:hover {
          background: linear-gradient(180deg, #ff3492, #ff1e4f);
     }
    .vp-admin-wrap-close-empty {
      position: relative;
      background: #fff;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 56px;
      left: 2px;
      top: 2px;
      -moz-transition: all 0.5s ease-in;
      -webkit-transition: all 0.5s ease-in;
       -o-transition: all 0.5s ease-in;
       transition: all 0.5s ease-in;
      a {
        position: absolute;
        top: 6px;
        left: 5px;
        width: 25px;
        height: 25px;
        display: inline-block;
        background: url('/static/public/image/common/vp-common-close.png') #fff;
        background-size: 98% 98%;
      }
       &:hover {
            transform: translateX(40%);
            // &::before{
            //   color: #fff;
            // }
          }
    }
  }
  .line{
    position: absolute;
    top: 62px;
    left: 30px;
    height: 1px;
    background-color: #ebecef;
    width: 690px;
  }
</style>
