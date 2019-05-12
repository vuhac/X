const state = {
  //当前选中保存
  // navActive: '首页'
  isPersonal: false,  
  liActive: 0,
  contentView: 'recharge',
  navView: 0,
  navActive: 0,
  navText: '充值',
  paymentData: [],
  categoryId: '',
  itemDatas: '',
  withdraw: 0,
  isRefresh: 0,
  bankSafety: 0,
  payName: '',
  classType: '',
  loadingShow: false,
  uid:"",
  // rechangeActive:0
  list_userid:"",
  showclean:false,
  gameList:null
 
}

const datas = {
  state,
  mutations: {
    async showPersonal (state, datas) {
      state.isPersonal = datas.bool
      state.liActive = datas.num

      //  打开个人中心 让html,body滚动条隐藏掉
      if (datas.bool) {
        document.querySelector('html').setAttribute('style', 'overflow: hidden')

      } else {
        document.querySelector('html').setAttribute('style', 'overflow: auto')
        // localStorage.removeItem('userBank')
      }
    },
  
    showContent (state, datas) {
      state.contentView = datas.parent
    },
    listUserId(state,datas){
      console.log(datas)
      state.list_userid = datas
    },
    userIdbyDetails(state,datas){
      console.log(state,datas)
      state.uid = datas
    },
    showNav (state, datas) {
      state.navView = datas.child
    },
    liActive (state, datas) {
      state.navActive = datas
    },
    navText (state, datas) {
      state.navText = datas
    },
    withdraw (state, datas) {
      state.withdraw = datas
    },
    refresh (state, datas) {
      state.isRefresh += datas
    },
    payment (state, datas) {
      state.categoryId = datas.id
      state.itemDatas = datas
    },
    paymentDataFc (state, datas) {
      state.paymentData = datas
    },
    bankSafety (state, num) {
      state.bankSafety = num
    },
    loading (state, bool) {
      state.loadingShow = bool
    },
   showclean(state,datas){
     state.showclean=datas.newbool
   }
    
  },
  actions: {}
}

export default datas
