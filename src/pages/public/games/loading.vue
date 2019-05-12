<template>
  <div class="container">
    <div class="loading">
      <img src="/static/public/image/game/ptgame/loading.png" alt="">
    </div>
  </div>
</template>

<script>
  import mixin from './public.js'

  export default {
    mixins: [mixin],
    data () {
      return {}
    },
    methods: {
      async getParam () {
        let res = await this.$http.post(`${this.$HOST_NAME}/games/index`, {
          id: this.$route.query.id,
        })
        if (res && res.code == 200) {
          this.login(res.data)
        } else {
          // this.$store.commit('alert/showTipModel', {bool:true,title:res.message,model:'warn'});
          window.close()
        }
      },
    },

    created: function () {
    },
    beforeDestroy () {
    },
    mounted () {
      if (this.$route.query.login) {
        this.login(this.$route.query.id)
      } else {
        window.close()
      }

    },
    components: {},
  }
</script>

<style lang="less" scoped>
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -40px;
  }

  .loading {
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    -webkit-animation: animate 1s infinite linear;
    animation: animate 1s infinite linear;
    -moz-animation: animate 1s infinite linear;
    -o-animation: animate 1s infinite linear;
    -ms-animation: animate 1s infinite linear;
  }

  @-webkit-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-ms-keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
