<template>
  <div style="background:#f9f9f9;">
    <div class="content-view">
      <div class="content-side">
        <vp-side></vp-side>
      </div>
      <transition name="fade" mode="out-in">
        <router-view :key="activeDate"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  // 侧边导航栏
  import vpSide from './components/side/side'

  export default {
    data () {
      return {
        activeDate: 'start'
      }
    },
    methods: {
      async setBalanceToLocal () {
        if (!localStorage.token) {
          return false
        }
        let res = await this.$http.post(`${this.$HOST_NAME}/member/setBalanceToLocal`, {})
        if (res && res.code == 200) {
        } else {

        }
      },
    },
    created: function () {
      this.setBalanceToLocal()
    },
    mounted () {
    },
    //这个没法重新加载动画
    render (createElement) {
      return createElement(App)
    },
    watch: {

      // 防止组件不刷新，路由一旦有变动就刷新key
      $route () {
        // this.render();
        this.activeDate = new Date().getTime()
        // console.log(this.activeDate)
      }
    },
    components: {
      vpSide
    }
  }
</script>

<style lang="less" scoped>

</style>
