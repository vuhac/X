<template>
  <div class="new-side-css">
    <!-- :default-openeds=posit.parentPosit  default-active default-openeds只加一个 -->
    <!-- <el-menu ref="sideElMenu" router :unique-opened=true :default-active=router class="el-menu-vertical-demo" activeTextColor="#ff0000" @select="handleSelect" @open="handleOpen" @close="handleClose">
      <el-submenu :index="''+index" :key="index" v-for="(item,index) in sideDatas">
        <template slot="title">
            <label @click="toHome(item)" for="">
              <i><img :src="item.name|capitalize"></i>
              <span>{{item.name}}</span>
            </label>
  </template>
          <el-menu-item-group>
            <el-menu-item :key="innerIndex" v-for="(innerItem,innerIndex) in item.lottery"  :index="''+'/plays/tradition/'+innerItem.id">{{innerItem.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu> -->
    <ul>
      <li v-for="(item,i) in sideDatas" :key="i" @click="goTo(item.id)">
        <img :src="item.id|capitalize" alt="">
        <span>{{item.name}}</span>
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>


  </div>
</template>
<script>
  // 获取侧边导航ico分类
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        sideDatas: [],
        router: '/'
      }
    },
    methods: {
      // 分类ico,一般不动
      // async getLIst() {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/games/lottery/category`, {});
      //   // return false;
      //   if (res && res.code == 200) {
      //     this.sideDatas = res.data;
      //     // 提取常用彩票
      //     let conmmonUse = {
      //       name: "常用彩票",
      //       id: "100",
      //       lottery: []
      //     };
      //     this.sideDatas.forEach((item) => {
      //       item && item.lottery.forEach((innerItem) => {
      //         if (innerItem.tag == '常用') {
      //           conmmonUse.lottery.push(innerItem);
      //         }
      //       });
      //     });
      //     //只显示常用5个
      //     // console.log(conmmonUse.lottery)
      //     if (conmmonUse.lottery.length > 5) {
      //       conmmonUse.lottery.splice(5, conmmonUse.lottery.length);
      //     }
      //     this.sideDatas.unshift(conmmonUse);
      //     //加大厅
      //     this.sideDatas.unshift({
      //       name: "购彩大厅",
      //       lottery: []
      //     })
      //     res.data && this.sideDatas.forEach((item) => {
      //       //常玩
      //       if (item && item.id == "100") {
      //         item.lottery && item.lottery.splice(5, 100);
      //       }
      //       // this.commonUsed(item);

      //     });
      //     //系列(放在路由之后)
      //     this.series();
      //     this.$store.commit('lottery/setReady');
      //     // console.log(this.sideDatas)
      //   } else {
      //     this.dNotify(res.message, 'error');
      //   }
      // },
      //分配系列类型
      series () {
        console.log(this.sideDatas);
        this.sideDatas.forEach(outItem => {
          console.log(outItem.lottery)
          outItem.lottery &&
          outItem.lottery.forEach(intItem => {
            console.log(intItem);
            if (
              intItem &&
              intItem.router &&
              intItem.router == this.$route.path.toString() &&
              outItem.name != '常用彩种'
            ) {
              this.$store.commit('lottery/resetSeriesMsg', {
                code: intItem.code,
                series: JSON.parse(intItem.special_setting).series,
                id: intItem.id,
                title: intItem.name
              })
            }
          })
        })
      },
      toHome (item) {
        // console.log(item.name)
        if (item.name == '购彩大厅') {
          this.$router.push({
            path: '/plays/hall'
          })
        }
      },
      handleOpen (key, keyPath) {},
      handleSelect (key, keyPath) {},
      handleClose (key, keyPath) {},

      // 获取左边导航栏
      getLeftMenu () {
        this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
          id:30001,
          device:"pc"
        }).then(res=>{
          // console.log(res);
            if (res && res.code == 200) {
              let list = res.data[30001]
              list.forEach(item => {
                item.id ? (item.router = `/plays/tradition/${item.id}`) : ''
              })
              if(list.length>22){
                list=list.splice(0,22);
              }
              console.log(list);
              list.push({
                name: '更多彩票',
                router: '/home',
                id: '438'
              })
              this.sideDatas = list
              // console.log(this.sideDatas)
              this.$store.commit('lottery/setReady')
            }
        })


        // this.$http
        //   .post(`${this.$HOST_NAME}/games/lottery/leftMenu`, {
        //     prePage: 14
        //   })
        //   .then(res => {
        //     if (res && res.code == 200) {
        //       let list = res.data
        //       list.forEach(item => {
        //         item.id ? (item.router = `/plays/tradition/${item.id}`) : ''
        //       })
        //       list.push({
        //         name: '更多彩票',
        //         router: '/home',
        //         id: '438'
        //       })
        //       this.sideDatas = list
        //       console.log(this.sideDatas)
        //       this.$store.commit('lottery/setReady')
        //     }
        //   })
      },

      goTo (id) {

         if(localStorage.token){
             if(localStorage.Public_User=='test'){
                this.dNotify("彩票暂无试玩,立即注册", "error")
          }else{
            if (id !== '438') {
          this.$router.push({
            path: `/plays/tradition/${id}`
          })
          } else {
          this.$router.push({
            path: '/plays/hall'
          })
          }
          }
         }else{
             this.$store.commit('alert/showLogin', true)
             this.$store.commit('alert/setLoginTitle', '用户登录')  
         }
        
      }
    },
    // 监听路由跳转
    watch: {
      $route () {
        this.series()
      }
    },
    mounted () {},
    created () {
      this.getLeftMenu()
      this.router = this.$route.path
    },
    computed: {},
    filters: {
      capitalize: function (value) {
        try {
          return `/static/public/image/lottery/nico/svg/${value}.svg`
        } catch (err) {
          return `/static/public/image/lottery/ico/vp-changwan-ico.png`
        }
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  // @import '../assets/less/var.less';
  .new-side-css {
    ul {
      li {
        height: 58px;
        border-bottom: 1px solid #f5f5f5;
        line-height: 58px;
        position: relative;
        padding-left: 58px;
        cursor: pointer;

        img {
          width: 40px;
          position: absolute;
          top: 9px;
          left: 10px;
        }

        i {
          position: absolute;
          right: 10px;
          top: 20px;
        }
      }
    }
  }
</style>
