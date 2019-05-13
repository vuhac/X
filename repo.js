const axios = require('axios')
const qs = require('qs')
const path = require('path')
const fs = require('fs')
const { exec, execSync, spawn, spawnSync } = require('child_process')

/**
 * 分库站点
 * @type {string[]}
 */
const sites = require('./sites')

const config = {
  uid: 83,
  user: 'xiaokangnew',
  token: 'cf010bb8139040cc0313c7f3f4073552379a4eb5',
  server: '10.10.121.251',
  base: 'lottery-repo-',
  baseDir: path.resolve(__dirname, 'dist'),
  sshFile: '$HOME/.ssh/repo'
}

const users = [
  'zs',
  'candice',
  'gt'
]

/**
 * GOGS 请求配置
 * @type {AxiosInstance}
 */
const $http = axios.create({
  baseURL: `http://${config.server}/api/v1`,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application.json',
    'Authorization': 'token ' + config.token
  }
})

$http.defaults.timeout = 20000
// $http.defaults.transformRequest = [(data) => {
//   return qs.stringify(data)
// }]

// 添加请求拦截器
$http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  response = response.data
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error.response.data)
})

// $http.get(
//   '/users/search',
//   {
//     params: {
//       // q: 'lottery-site-repo-'
//       q: 'xiaokangnew',
//       // uid: 56,
//       // limit: 1,
//       // page: 1
//     }
//   }
// ).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.error(err)
// })

/**
 * GOGS 接口
 * @type {{}}
 */
const api = {
  getOriginRepos () {
    return $http.get(
      '/repos/search',
      {
        params: {
          q: config.base,
          uid: config.uid,
          limit: 1000,
          page: 1
        }
      }
    )
  },
  createRepo (name) {
    return $http.post(
      '/user/repos',
      {
        name: name,
        // user: config.uid,
        uid: config.uid,
        private: true
      }
    )
  },
  addCollaborators (site) {
    users.forEach(user => {
      $http.put(`/repos/${config.user}/${config.base + site}/collaborators/${user}`, {
        permission: 'admin'
      })
    })
  }
}

const sitesOriginStatus = {}

function main () {
  // 获取远端分库仓库列表,并对比仓库列表,没有的就创建
  api.getOriginRepos().then(res => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  开始检查远端')
    if (res.ok && Object.prototype.toString.call(res.data) === '[object Array]') {
      sites.forEach(site => {
        if (!res.data.find(item => item.name === config.base + site)) {
          api.createRepo(config.base + site).then(createRes => {
            console.log('创建远端仓库成功: ' + createRes.name)
            api.addCollaborators(site)
            sitesOriginStatus[site] = true
            checkOrigin()
          }).catch(err => {
            console.error(err)
            console.error('创建远端仓库失败:' + config.base + site)
          })
        } else {
          console.log('远端仓库已存在:' + config.base + site)
          api.addCollaborators(site)
          sitesOriginStatus[site] = true
          checkOrigin()
        }
      })
    } else {
      console.error('获取远端仓库列表失败......')
    }

  })

  // sites.forEach(site => {
  //   $http.delete(`/repos/${config.user}/${config.base + site}`)
  // })
}

function checkOrigin () {
  if (sites.every(site => sitesOriginStatus[site])) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  远端检查完成\n')
    console.log('\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  开始检查本地仓库状态\n')
    checkLocation()
  }
}

const task = []

function checkLocation () {
  sites.forEach(site => {
    let execs = []
    if (fs.existsSync(path.resolve(config.baseDir, site, '.git'))) {
      console.log(`文件夹 < ${site} > 已经初始化,开始提交`)
      execs = [
        `cd ${path.resolve(config.baseDir, site)}`,
        'git add -A',
        'git commit -m Build',
        'git pull',
        'git push'
      ]
    } else {
      execs = [
        `cd ${path.resolve(config.baseDir, site)}`,
        'git init',
        'git add -A',
        'git commit -m INIT',
        `git remote add origin gogs@${config.server}:${config.user}/${config.base}${site}.git`,
        'git push -u origin master --force'
      ]
    }

    task.push(execs)
  })

  execTask()
}

// execTask()

let i = 0
function execTask () {
  let execs = task[i]

  if (execs) {
    exec(execs.join(' && '), function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      execTask()
    })
  }

  i++
}

main()
