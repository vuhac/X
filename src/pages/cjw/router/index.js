import Vue from 'vue'
import Router from 'vue-router'
//默认空首页
const index = r => require.ensure([], () => r(require('@/pages/cjw/index.vue')), 'index')
// 新首页
const vpHome = r => require.ensure([], () => r(require('@/pages/cjw/home')), 'vpHome')

const vpHomeLive = r => require.ensure([], () => r(require('@/pages/cjw/home/home-live')), 'vpHomeLive')
const vpGames = r => require.ensure([], () => r(require('@/pages/cjw/home/games')), 'vpGames')
const vpBuyu = r => require.ensure([], () => r(require('@/pages/cjw/home/buyu')), 'vpBuyu')
const vpYouhui = r => require.ensure([], () => r(require('@/pages/cjw/home/youhui')), 'vpYouhui')
const vpLoading = r => require.ensure([], () => r(require('@/pages/public/games/loading')), 'vpLoading')
// const register = r => require.ensure([], () => r(require('@/pages/cjw/home/register')), 'register')
const help = r => require.ensure([], () => r(require('@/pages/cjw/home/help/index.vue')), 'help')
const question = r => require.ensure([], () => r(require('@/pages/cjw/home/help/question.vue')), 'question')
const vpQipai = r => require.ensure([], () => r(require('@/pages/cjw/home/qipai')), 'vpQipai')
const vpSport = r => require.ensure([], () => r(require('@/pages/cjw/home/sport')), 'vpSport')
const contactUs = r => require.ensure([], () => r(require('@/pages/cjw/home/contactUs')), 'contactUs')
const clause = r => require.ensure([], () => r(require('@/pages/cjw/home/clause')), 'clause')
const agent = r => require.ensure([], () => r(require('@/pages/cjw/home/agent')), 'agent')


//购彩大厅
import vpHall from '@/pages/public/tradition/vp-hall'
//动画
const hall_Animate = r => require.ensure([], () => r(require('@/pages/public/tradition/animate/index')), 'hall_Animate')
// 传统彩空页面
const traditioIndex = r => require.ensure([], () => r(require('@/pages/public/tradition')), 'traditioIndex')
// 时时彩
const sh_chongqing = r => require.ensure([], () => r(require('@/pages/public/tradition/shi-shi-cai/chong-qing/index')), 'sh_chongqing')
// 六合彩
const liu_xianggang = r => require.ensure([], () => r(require('@/pages/public/tradition/liu-he-cai/xiang-gang/index')), 'liu_xianggang')
// 快三
const ks_jiangsu = r => require.ensure([], () => r(require('@/pages/public/tradition/kuai-san/jiangsu/index')), 'ks_jiangsu')
// pc蛋蛋
const pc_dandan = r => require.ensure([], () => r(require('@/pages/public/tradition/pc-dan-dan/pc-dan-dan/index')), 'pc_dandan')
// pk10
const pk_beijing = r => require.ensure([], () => r(require('@/pages/public/tradition/pk10/bei-jing/index')), 'pk_beijing')
// const pk_feiding= r => require.ensure([], () => r(require('@/pages/pk10/xy-fei-ding/index')), 'pk_feiding'); 
//快乐十分
const kl_guangdong = r => require.ensure([], () => r(require('@/pages/public/tradition/kuai-le-shi-fen/guang-dong/index')), 'kl_guangdong')
//十一选5
const ele_guangdong = r => require.ensure([], () => r(require('@/pages/public/tradition/eleven-selection-five/guang-dong/index')), 'ele_guangdong')
//低频彩
const di_fucai3D = r => require.ensure([], () => r(require('@/pages/public/tradition/di-pin-cai/fu-cai-3D/index')), 'di_fucai3D')
// 传统彩end

//开奖走势
const vp_trend = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend')), 'vp_trend')
const vp_trend_cp11x5 = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/cp11x5')), 'vp_trend_cp11x5')
const vp_trend_dpc = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/dpc')), 'vp_trend_dpc')
const vp_trend_gdklsf = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/gdklsf')), 'vp_trend_gdklsf')
const vp_trend_k3 = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/k3')), 'vp_trend_k3')
const vp_trend_lhc = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/lhc')), 'vp_trend_lhc')
const vp_trend_pk10 = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/pk10')), 'vp_trend_pk10')
const vp_trend_pcdd = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/pcdd')), 'vp_trend_pcdd')
const vp_trend_ssc = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-trend/child/ssc')), 'vp_trend_ssc')

// 游戏规则
const gameRules = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules')), 'gameRules')
// const rules_gameReport = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/gameReport/rule-index.vue')), 'rules_gameReport');
const rules_shishicai = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/shishicai/rule-index.vue')), 'rules_shishicai')
const rules_liuhecai = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/liuhecai/rule-index.vue')), 'rules_liuhecai')
const rules_pcdandan = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/pcdandan/rule-index.vue')), 'rules_pcdandan')
const rules_kuaisan = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/kuaisan/rule-index.vue')), 'rules_kuaisan')
const rules_eleven = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/eleven/rule-index.vue')), 'rules_eleven')
const rules_pk10 = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/pk10/rule-index.vue')), 'rules_pk10')
const rules_kuaile = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/kuaile/rule-index.vue')), 'rules_kuaile')
const rules_dipin = r => require.ensure([], () => r(require('@/pages/public/tradition/vp-game-rules/child/dipin/rule-index.vue')), 'rules_dipin')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/clause',//协议页面
      component: clause,
      name: 'clause'
    },
    {
      path: '/',
      component: index,
      redirect: '/home',
      children: [
        // 主页
        {
          path: '/home',
          component: vpHome,
        },
        {
          path: '/home/live',
          component: vpHomeLive,
        },
        {
          path: '/home/games',
          component: vpGames,
        },
        {
          path: '/home/buyu',
          component: vpBuyu,
        },
        {
          path: '/home/youhui',
          component: vpYouhui,
          name: 'vpYouhui'
        },
        {
          path: '/home/agent',
          component: agent,
          name: 'agent'
        },
        {
          path: '/home/qipai',
          component: vpQipai,
          name: 'vpQipai'
        },
        {
          path: '/home/sport',
          component: vpSport,
          name: 'vpSport'
        },
        {
          path: '/home/contactUs',
          component: contactUs,
          name: 'contactUs'
        },
        // {
        //   path: '/home/register',
        //   component: register,
        //   name: 'register'
        // },
        {
          path: '/home/help',
          component: help,
        },
        {
          path: '/home/question',
          component: question,
          name: 'question'
        },
        // 传统彩票
        {
          path: '/plays',
          component: traditioIndex,
          children: [
            // 开奖动画
            {
              path: 'animate',
              component: hall_Animate,
            },
            // 购彩大厅（传统彩票）
            {
              path: 'hall',
              component: vpHall,
            },
            // 时时彩
            {
              path: 'tradition/4',
              component: sh_chongqing,
              meta: {id: 4, name: '重庆时时彩', code: 'cqssc', 'series': 'ssc',}
            },
            {
              path: 'tradition/14',
              component: sh_chongqing,
              meta: {id: 14, name: '新疆时时彩', code: 'xjssc', 'series': 'ssc',}
            },
            {
              path: 'tradition/15',
              component: sh_chongqing,
              meta: {id: 15, name: '天津时时彩', code: 'tjssc', 'series': 'ssc',}
            },
            {
              path: 'tradition/16',
              component: sh_chongqing,
              meta: {id: 16, name: '快速时时彩', code: 'ksssc', 'series': 'ssc',}
            },
            {
              path: 'tradition/17',
              component: sh_chongqing,
              meta: {id: 17, name: '3分时时彩', code: 'sfssc', 'series': 'ssc',}
            },
            //六合彩
            {
              path: 'tradition/18',
              component: liu_xianggang,
              meta: {id: 18, name: '快速六合彩', code: 'kslhc', 'series': 'lhc',}
            },
            {
              path: 'tradition/19',
              component: liu_xianggang,
              meta: {id: 19, name: '5分六合彩', code: 'wflhc', 'series': 'lhc',}
            },
            {
              path: 'tradition/1',
              component: liu_xianggang,
              meta: {id: 1, name: '香港六合彩', code: 'xglhc', 'series': 'lhc',}
            },
            // pc蛋蛋
            {
              path: 'tradition/10',
              component: pc_dandan,
              meta: {id: 10, name: '北京PC蛋蛋', code: 'bjpcdd', 'series': 'pcdd',}
            },
            //快三 
            {
              path: 'tradition/9',
              component: ks_jiangsu,
              meta: {id: 9, name: '江苏快3', code: 'jsk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2900',
              component: ks_jiangsu,
              meta: {id: 2900, name: '北京快3', code: 'bjk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2901',
              component: ks_jiangsu,
              meta: {id: 2901, name: '甘肃快3', code: 'gsk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2902',
              component: ks_jiangsu,
              meta: {id: 2902, name: '广西快3', code: 'gxk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2903',
              component: ks_jiangsu,
              meta: {id: 2903, name: '贵州快3', code: 'gzk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2904',
              component: ks_jiangsu,
              meta: {id: 2904, name: '河北快3', code: 'hbk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2905',
              component: ks_jiangsu,
              meta: {id: 2905, name: '湖北快3', code: 'hubk3', 'series': 'k3',}
            },
            {
              path: 'tradition/2906',
              component: ks_jiangsu,
              meta: {id: 2906, name: '上海快3', code: 'shk3', 'series': 'k3',}
            },
            {
              path: 'tradition/25',
              component: ks_jiangsu,
              meta: {id: 25, name: '安徽快3', code: 'ahk3', 'series': 'k3',}
            },
            {
              path: 'tradition/26',
              component: ks_jiangsu,
              meta: {id: 26, name: '吉林快3', code: 'jlk3', 'series': 'k3',}
            },
            {
              path: 'tradition/27',
              component: ks_jiangsu,
              meta: {id: 27, name: '快速快3', code: 'ksk3', 'series': 'k3',}
            },
            {
              path: 'tradition/3631',
              component: ks_jiangsu,
              meta: {id: 3631, name: '3分快3', code: 'sfk3', 'series': 'k3',}
            },
            {
              path: 'tradition/3632',
              component: ks_jiangsu,
              meta: {id: 3632, name: '5分快3', code: 'wfk3', 'series': 'k3',}
            },
            // pk10
            {
              path: 'tradition/2',
              component: pk_beijing,
              meta: {id: 2, name: '北京赛车PK10', code: 'bjsc', 'series': 'pk10',}
            },
            {
              path: 'tradition/12',
              component: pk_beijing,
              meta: {id: 12, name: '快速赛车PK10', code: 'kssc', 'series': 'pk10',}
            },
            {
              path: 'tradition/13',
              component: pk_beijing,
              meta: {id: 13, name: '3分赛车PK10', code: 'sfsc', 'series': 'pk10',}
            },
            {
              path: 'tradition/3630',
              component: pk_beijing,
              meta: {id: 3630, name: '5分赛车PK10', code: 'wfsc', 'series': 'pk10',}
            },
            {
              path: 'tradition/3',
              component: pk_beijing,
              meta: {id: 3, name: '幸运飞艇', code: 'xyft', 'series': 'pk10',}
            },
            {
              path: 'tradition/10044',
              component: pk_beijing,
              meta: {id: 10044, name: '香港赛马', code: 'xgsm', 'series': 'pk10',}
            },
            {
              path: 'tradition/10045',
              component: pk_beijing,
              meta: {id: 10045, name: '澳门赛马', code: 'amsm', 'series': 'pk10',}
            },
            //快乐十分
            {
              path: 'tradition/5',
              component: kl_guangdong,
              meta: {id: 5, name: '广东快乐十分', code: 'gdklsf', 'series': 'klsf',}
            },
            {
              path: 'tradition/20',
              component: kl_guangdong,
              meta: {id: 20, name: '湖南快乐十分', code: 'hnklsf', 'series': 'klsf',}
            }, {
              path: 'tradition/6',
              component: kl_guangdong,
              meta: {id: 6, name: '幸运农场', code: 'xync', 'series': 'klsf',}
            },
            // 广东11选5
            {
              path: 'tradition/24',
              component: ele_guangdong,
              meta: {id: 24, name: '快速11选5', code: 'ks11x5', 'series': 'cp11x5',}
            },
            {
              path: 'tradition/7',
              component: ele_guangdong,
              meta: {id: 7, name: '广东11选5', code: 'gd11x5', 'series': 'cp11x5',}
            },
            {
              path: 'tradition/21',
              component: ele_guangdong,
              meta: {id: 21, name: '江西11选5', code: 'jx11x5', 'series': 'cp11x5',}
            },
            {
              path: 'tradition/22',
              component: ele_guangdong,
              meta: {id: 22, name: '上海11选5', code: 'sh11x5', 'series': 'cp11x5',}
            },
            {
              path: 'tradition/23',
              component: ele_guangdong,
              meta: {id: 23, name: '山东11选5', code: 'sd11x5', 'series': 'cp11x5',}
            },
            // 低势盘
            {
              path: 'tradition/11',
              component: di_fucai3D,
              meta: {id: 11, name: '福彩3D', code: 'fcsd', 'series': 'sd',}
            }, {
              path: 'tradition/28',
              component: di_fucai3D,
              meta: {id: 28, name: '排列3', code: 'pl3', 'series': 'sd',}
            }, {
              path: 'tradition/29',
              component: di_fucai3D,
              meta: {id: 29, name: '上海时时乐', code: 'shssl', 'series': 'sd',}
            },
          ]
        },
        //开奖走势（传统彩票）
        {
          path: '/trend',
          component: vp_trend,
          children: [
            //11选5
            {
              path: '7',
              component: vp_trend_cp11x5,
            },
            {
              path: '21',
              component: vp_trend_cp11x5,
            },
            {
              path: '22',
              component: vp_trend_cp11x5,
            },
            {
              path: '23',
              component: vp_trend_cp11x5,
            },
            {
              path: '24',
              component: vp_trend_cp11x5,
            },
            //六合彩
            {
              path: '1',
              component: vp_trend_lhc,
            },
            {
              path: '18',
              component: vp_trend_lhc,
            },
            {
              path: '19',
              component: vp_trend_lhc,
            },
            // 时时彩
            {
              path: '4',
              component: vp_trend_ssc,
            },
            {
              path: '14',
              component: vp_trend_ssc,
            },
            {
              path: '15',
              component: vp_trend_ssc,
            },
            {
              path: '16',
              component: vp_trend_ssc,
            },
            {
              path: '17',
              component: vp_trend_ssc,
            },
            // pc蛋蛋
            {
              path: '10',
              component: vp_trend_pcdd,
            },
            //快三
            {
              path: '9',
              component: vp_trend_k3,
            }, {
              path: '25',
              component: vp_trend_k3,
            }, {
              path: '26',
              component: vp_trend_k3,
            }, {
              path: '27',
              component: vp_trend_k3
            }, {
              path: '2900',
              component: vp_trend_k3
            }, {
              path: '2901',
              component: vp_trend_k3
            }, {
              path: '2902',
              component: vp_trend_k3
            }, {
              path: '2903',
              component: vp_trend_k3
            }, {
              path: '2904',
              component: vp_trend_k3
            }, {
              path: '2905',
              component: vp_trend_k3
            }, {
              path: '2906',
              component: vp_trend_k3
            },{
              path: '3631',
              component: vp_trend_k3
            },{
              path: '3632',
              component: vp_trend_k3
            },
            // PK10 
            {
              path: '2',
              component: vp_trend_pk10,
            }, {
              path: '3',
              component: vp_trend_pk10,
            }, {
              path: '12',
              component: vp_trend_pk10,
            }, {
              path: '13',
              component: vp_trend_pk10
            },{
              path: '3630',
              component: vp_trend_pk10
            },{
              path: '10044',
              component: vp_trend_pk10
            },{
              path: '10045',
              component: vp_trend_pk10
            },
            //快乐十分 
            {
              path: '5',
              component: vp_trend_gdklsf,
            }, {
              path: '6',
              component: vp_trend_gdklsf,
            }, {
              path: '20',
              component: vp_trend_gdklsf,
            },
            //低频彩
            {
              path: '11',
              component: vp_trend_dpc,
            }, {
              path: '28',
              component: vp_trend_dpc,
            }, {
              path: '29',
              component: vp_trend_dpc,
            },
          ]
        },
        //彩票规则 
        {
          path: '/rules',
          component: gameRules,
          children: [
            // {
            //   path: 'gameReport',
            //   component: rules_gameReport,
            //   meta: {
            //     name: '体育赛事'
            //   }
            // },
            {
              path: 'ssc',
              component: rules_shishicai,
              meta: {
                name: '时时彩'
              }
            }, {
              path: 'lhc',
              component: rules_liuhecai,
              meta: {
                name: '六合彩'
              }
            }, {
              path: 'pcdd',
              component: rules_pcdandan,
              meta: {
                name: 'PC蛋蛋'
              }
            }, {
              path: 'k3',
              component: rules_kuaisan,
              meta: {
                name: '快3'
              }
            }, {
              path: 'cp11x5',
              component: rules_eleven,
              meta: {
                name: '11选5'
              }
            }, {
              path: 'pk10',
              component: rules_pk10,
              meta: {
                name: 'PK10'
              }
            }, {
              path: 'klsf',
              component: rules_kuaile,
              meta: {
                name: '快乐十分'
              }
            }, {
              path: 'sd',
              component: rules_dipin,
              meta: {
                name: '低频彩'
              }
            }]
        },
      ]
    }, {
      path: '/loading',
      component: vpLoading,
    }]
})

export default router

