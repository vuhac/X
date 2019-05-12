<template>
  <div>
    <vp-trend-header></vp-trend-header>
    <transition name="fade" mode="out-in" :key="activeDate">
      <router-view :key="activeDate">
      </router-view>
    </transition>
  </div>

</template>

<script>
  import vpTrendHeader from './header/index.vue'

  export default {
    data () {
      return {
        activeDate: 'start'
      }
    },
    methods: {},
    created: function () {
    },
    mounted () {
      this.activeDate = new Date().getTime()
    },
    watch: {
      $route () {
        this.activeDate = new Date().getTime()
      }
    },
    components: {
      vpTrendHeader
    }
  }
</script>

<style lang="less" scoped>

</style>
