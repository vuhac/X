<template>
  <div class="toast" v-if="ToastShow">
    <div class="top">
      <img :src="img" alt="">
      <p>{{message}}</p>
    </div>
    <div class="bottom" @click="callback">
      确认
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        ToastShow: false,
        message: '',
        img: ''
        // goBinding: false
      }
    },
    methods: {
      callback () {
        this.ToastShow = false
        if (this.goBinding) {
          this.$store.commit("showContent", { name: "withdraw", num: 3 });
          this.$store.commit("withdraw", 2);
        }
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  .toast {
    width: 280px;
    height: 165px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -140px;
    margin-top: -82.5px;
    z-index: 201999;
    .top {
      height: 125px;
      background: #413c5a;
      border-radius: 8px 8px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        display: block;
        width: 42px;
        margin-bottom: 20px;
      }
      p {
        color: #fff;
        font-weight: 200;
      }
    }
    .bottom {
      height: 40px;
      background: #ec2426;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      border-radius: 0 0 8px 8px;
      cursor: pointer;
    }
  }
</style>
