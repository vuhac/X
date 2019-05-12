// 公共弹框显示设置
const state = {
  login: {
    ifLogin: false,
    modelTitle: '登入帐号',
    chooseModel: '登入帐号',
  },

  //提示显示框状态
  tipModel: {
    bool: false,
    title: '',
    model: ''//warn,success,error
  },
  promit: {
    isPromit: false,

  },
  newtip:{
    bool:false,
    title:"",
    model:"",
    leftspan:false
  }
}

const datas = {
  namespaced: true,
  state,
  mutations: {
    // 是否显示提示信息
    showTipModel (state, datas) {
      console.log(datas)
      state.tipModel.bool = datas.bool
      state.tipModel.title = datas.title
      state.tipModel.model = datas.model
    },
    // 是否显示登录弹框
    showLogin (state, bool) {
      state.login.ifLogin = bool
    },
    // 改变注册和登录公用标题
    setLoginTitle (state, title) {
      state.login.modelTitle = title
    },
    //设置显示登录还是注册框
    setChooseModel (state, model) {
      state.login.chooseModel = model
    },
    newshowtip(state,datas){
      state.newtip.bool=datas.bool
      state.newtip.title=datas.title
      state.newtip.model=datas.model
      state.newtip.leftspan=datas.leftspan
    }
    
  },
  actions: {
    // 异步操作封装在action
  }
}

export default datas
