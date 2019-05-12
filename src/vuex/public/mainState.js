function getUserInfo () {
  if (!localStorage.getItem('userinfo')) return null
  try {
    return JSON.parse(localStorage.getItem('userinfo'))
  } catch (e) {
    localStorage.setItem('userinfo', '')
    return null
  }
}

const state = {
  userinfo: getUserInfo(),
  flag: true,
  aid: '',
  ifpourT: true,
  websoc:{},
  color:false,
  routeSrc:"",
  navIndex:0,
  nightCheck:false,
  gameList:null,
  downloadUrl:{},
  lotteryiuss:"",
  showDialog: {
    home: {
      login: true,
      noLogin: true
    },
    game: {
      login: true,
      noLogin: true
    }
  }
}

const datas = {
  namespaced: true,
  state,
  mutations: {
    // 重置用户个人信息
    resetUserinfo (state, bool) {
      state.userinfo = bool
    },
    // 下载链接
    getDownLoad(state,datas){
      state.downloadUrl = datas
    },
    // 刷新个人信息余额使用
    reloadUserinfo (state, userinfo) {
      localStorage.setItem('userinfo', JSON.stringify(userinfo))
      state.userinfo = localStorage.userinfo && JSON.parse(localStorage.userinfo)
    },
    //期数 
    lotteryiuss(state,datas){
       state.lotteryiuss=datas
    },
    getGameList(state,datas){
      console.log(datas)
      state.gameList = datas
    },
    getNigth(state,data){
      state.nightCheck = data
    },
    resetFlag (state, bool) {
      state.flag = bool
    },
    getNavIndex(state,data){
      state.navIndex = data
    },
    getRoute(state,data){
      console.log(data)
      state.routeSrc = data
    },
    resetPour (state, bool) {
      state.ifpourT = bool
    },
    websoc(state,data){
      state.websoc=data;
    },
    changcolor(state,data){
      state.color=data
    },
    getDialog(state,data){
       state.showDialog=data
    }
  }
}

export default datas
