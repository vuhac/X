<template>
  <div class="decial-right-ranking">
    <div class="decial-right-ranking-title">两面长龙排行</div>
    <div class="decial-right-ranking-wrap">
      <div class="decial-right-ranking-item">
        <div v-for="(item,index) in rankList" :key='index'>{{Object.entries(item)[0][0]}}</div>
      </div>
      <div class="decial-right-ranking-item bot">
        <div v-for="(item,index) in rankList" :key='index'>{{Object.entries(item)[0][1]}}期</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    data () {
      return {
        rankList: [],

      }
    },
    methods: {
      async getTrend (datas) {
        this.rankList = datas
      },
    },
    created: function () {
    },
    mounted () {
    },
    watch: {},
    computed: {},

    components: {}
  }
</script>

