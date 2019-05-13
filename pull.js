const path = require('path')
const fs = require('fs')
const { exec, execSync, spawn, spawnSync } = require('child_process')

/**
 * 分库站点
 * @type {string[]}
 */
const sites = require('./sites')

if (!fs.existsSync(path.resolve(__dirname, 'lottery-sites'))) {
  fs.mkdirSync(path.resolve(__dirname, 'lottery-sites'))
}

const task = []

sites.forEach(site => {
  const execs = [
    `cd ${path.resolve(__dirname, 'lottery-sites')}`,
    'git pull'
  ]

  task.push(execs)
})

let i = 0

function execTask () {
  const execs = task[i]

  if (execs) {
    console.log('开始同步')
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

execTask()
