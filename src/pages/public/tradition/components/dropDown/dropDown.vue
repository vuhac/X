<template>
  <div class="decial-select-down">
    <div class="poptip-arrow"></div>
    <div class="select-down-wrap">
      <div @click.stop="seletPrice(itemSelet)" :key="indexSelet" v-for="(itemSelet,indexSelet) in selectDown.list"
           class="select-down">{{itemSelet.price}}
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      itemInner: {
        type: Object
      }

    },
    data () {
      return {
        selectDown: {
          list: [{price: 10}, {price: 50}, {price: 100}, {price: 500}, {price: 1000}, {price: 10000}],
          select: ''
        }
      }
    },
    methods: {
      seletPrice (itemSelet) {
        this.$emit('drop-down-say', this.itemInner, itemSelet)
      },
      hide () {
        this.$emit('drop-down-hide')
      }
    },
    mounted () {
      let $this = this
      document.querySelector('body').addEventListener('click', $this.hide, false)
    },
    beforeDestroy () {
      let $this = this
      //必须传入同一个否则取消不了
      document.querySelector('body').removeEventListener('click', $this.hide, false)

    }
  }
</script>

<style lang='less' scoped>
  @import '../../../../../assets/less/public/var.less';

  .decial-select-down {
    position: absolute;
    right: 11px;
    text-align: center;
    width: 60px;
    background: #fff;
    z-index: 9999;

    .poptip-arrow {
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border-color: transparent;
      border-style: solid;
      top: 3px;
      border-width: 0 5px 5px;
      border-bottom-color: @theme-border-color;
      left: 50%;
      margin-left: -5px;
    }

    .poptip-arrow:after {
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border-color: transparent;
      border-style: solid;
      border-width: 5px;
      content: " ";
      top: 1px;
      margin-left: -5px;
      border-top-width: 0;
      border-bottom-color: #fff;
    }

    .select-down-wrap {
      margin-top: 8px;
      border-radius: 3px;
      border: 1px solid @theme-border-color;

      .select-down {
        height: 26px;
        line-height: 26px;
        cursor: pointer;

        &:hover {
          background: #F2F2f2;
        }
      }
    }

  }
</style>
