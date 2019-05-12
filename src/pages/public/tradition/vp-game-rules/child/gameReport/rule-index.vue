<template>
  <div>
    <div class="rules-container-header">
      <ul>
        <li @click="contentSelectFc(item)" :class="{'active':item.title==contentSelect}"
            v-for="(item,index) in contentNav" :key='index'>
          <a>{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="rules-container-text">
      <General v-if="contentSelect=='一般体育说明'"></General>
      <Football v-if="contentSelect=='足球'"></Football>
      <Series v-if="contentSelect=='连串过关/复式过关'"></Series>
      <Basketball v-if="contentSelect=='篮球'"></Basketball>
      <Tennis v-if="contentSelect=='网球'"></Tennis>
      <Volleyball v-if="contentSelect=='排球'"></Volleyball>
      <Baseball v-if="contentSelect=='棒球'"></Baseball>
      <Champion v-if="contentSelect=='冠军'"></Champion>
    </div>
  </div>
</template>
<script>
  import General from './child/General'
  import Football from './child/Football'
  import Series from './child/Series'
  import Basketball from './child/Basketball'
  import Tennis from './child/Tennis'
  import Volleyball from './child/Volleyball'
  import Baseball from './child/Baseball'
  import Champion from './child/Champion'

  export default {
    data () {
      return {
        contentNav: [
          {title: '一般体育说明'},
          {title: '足球'},
          {title: '连串过关/复式过关'},
          {title: '篮球'},
          {title: '网球'},
          {title: '排球'},
          {title: '棒球'},
          {title: '冠军'}
        ],
        contentSelect: '一般体育说明'
      }
    },
    watch: {
      $route () {}
    },
    methods: {
      contentSelectFc (item) {
        this.contentSelect = item.title
      }
    },
    created () {},

    computed: {},
    mounted () {},
    components: {General, Football, Series, Basketball, Tennis, Volleyball, Baseball, Champion}
  }
</script>

<style lang="less">
  @active-color: #ff0000;
  .rules-container-header {
    height: 63px;
    border-bottom: 1px solid #e4e0e0;
    padding: 0 10px;

    ul {
      li {
        float: left;
        padding: 0 20px;
        cursor: pointer;

        a {
          color: #666;
          line-height: 60px;
        }

        &:hover {
          //  border-bottom: 3px solid #FF6600;
          a {
            color: #ff6600;
            // line-height: 60px;
          }
        }

        &.active {
          border-bottom: 3px solid #ff6600;

          a {
            color: #ff6600;
            line-height: 60px;
          }
        }
      }
    }
  }

  .rules-container-text {
    padding: 25px 30px;
    font-size: 14px;
    line-height: 30px;
    color: #444444;
    text-align: justify;

    .rules-intro {
      text-indent: 28px;
    }

    .rules-intro2 {
      text-indent: 42px;
    }

    p.b {
      font-weight: bold;
      margin-bottom: 15px;
      margin-top: 15px;
    }

    .rules-space {
      border-top: 1px solid #f4f4f4;
    }

    .rules-item-title {
      padding: 20px 0;
      color: #333;
      font-size: 16px;

      .dot {
        width: 5px;
        height: 5px;
        background: @active-color;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 2px;
      }
    }

    // 小标题
    .tipSecond {
      display: inline-block;
      text-indent: 56px;
    }

    .rules-item-plays-wrap {
      padding-bottom: 20px;
      color: #666;
      font-size: 14px;

      .rules-active {
        color: @active-color;
        // font-weight: 600;
      }
    }
  }

  .info {
    .ul1 {
      padding-left: 30px;
      list-style: decimal;
    }

    table.menu {
      text-align: center;

      td,
      th {
        width: 200px;
        height: 18px;
        border: 1px solid rgba(251, 251, 251, 0.5);

        a {
          color: #fff;
        }
      }
    }

    table.bowl {
      text-align: center;

      th,
      td {
        width: 160px;
        height: 18px;
        border: 1px solid #b9b9a3;
      }

      tr:nth-child(1) {
        background-color: #c8a670;
      }
    }

    .quick_link {
      width: 100%;
      background-color: #333333;
      font-weight: bold;
      padding: 5px 0px 5px 10px;
      color: #fff;
    }
  }
</style>
