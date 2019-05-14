//配置接口数据
import Vue from 'vue'
import axios from 'axios'
import store from '@/vuex/store'
import UserService from './UserService.js'

const qs = require('qs')
export const HOST_NAME = ''

//公共请求
export let _SetPost = (url, params) => axios({
  url: HOST_NAME + url,
  method: 'post',
  data: {
    ...params
  }
})
//公共请求
export let _SetGet = (url, params) => axios({
  url: HOST_NAME + url,
  method: 'get',
  data: {
    ...params
  }
})


// //获取首页列表
// export let _GetWorkPageList = params => axios({
//   url: `${HOST_NAME}/Default/GetWorkPageList`,
//   method: 'post',
//   data: {
//     ...params
//   }
// });

//测试域名
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// 配置formdata格式
// axios.defaults.withCredentials = true;
axios.defaults.timeout = 20000
axios.defaults.transformRequest = [(data) => {
  // console.log(data);
  return qs.stringify(data)
}]

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.token}`
  return config
}, function (error) {
  return Promise.reject(error)
})

UserService.vpSetConfig()
axios.interceptors.response.use((response) => {
  if (response.data.sign > localStorage.getItem('configTime') && !response.config.url.includes('/config')) {
    UserService.vpReloadConfig()
  }
  if (response.data.code === 5003 || response.data.code === 5002) {
    localStorage.removeItem('userBank')
    UserService.removeCache()
    store.commit('alert/showTipModel', {bool: true, title: '您未登录！', model: 'warn'})
    return false
  } else if (response.data.code === 5000) {
    // response.data.code === 5000
    UserService.vpSetConfig()
    location.href = '/static/public/html/weihu/index.html'
  } else if (response.data.code === 5005) {
    store.commit('alert/showTipModel', {bool: true, title: response.data.message, model: 'warn'})
    window.history.back(-1)
    return false
  }else if(response.data.code === 4000){
    // response.data.code === 4000
    // 非法访问
    location.href = '/static/public/html/feifa/index.html'
  }
  // 验证是否过期
  if (localStorage.token && !response.config.url.includes('/member/refresh')) {
    UserService.expired(localStorage.token)
  }

  if (response.data.code === 200) {
    return response.data
  } else if (response.data.code === 5006) { 
    return false
  } else {
    store.commit('alert/showTipModel', {bool: false, title: response.data.message, model: 'warn'})
  }

  return response.data
}, (err) => {
  if(err.request.responseURL.indexOf('/member/balance') <= -1){
    store.commit('alert/showTipModel', {bool: true, title: '网络异常,请稍后重试。', model: 'warn'})
  }
  return err;
})
//注册
// Vue.prototype.$http = axios //post
//新的api 借口访问
 export let postS = (url, params) => axios({
  headers: { 'Accept': 'application/x.tg.v2+json' },
  url: `/frontend/${Vue.prototype.$HOST_NAME?Vue.prototype.$HOST_NAME.substring(10):'v1'}/` + url,
  // url: '/frontend/v1/' + url,
  method: 'post',
  data: {
    ...params
  }
});
export let getS = (url, params) => axios({
  headers: { 'Accept': 'application/x.tg.v2+json' },
  url: `/frontend/${Vue.prototype.$HOST_NAME?Vue.prototype.$HOST_NAME.substring(10):'v1'}/` + url,
  // url: '/frontend/v1/' + url,
  method: 'get',
  params: {
    ...params
  }
}) 
Vue.prototype.$getS = getS;
Vue.prototype.$http = axios;  //post
Vue.prototype.$postS = postS;