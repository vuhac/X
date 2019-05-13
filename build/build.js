'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

require('shelljs/global')
const ora = require('ora')
const shell = require('shelljs')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const fs = require('fs')
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);

const spinner = ora('building for production...')
spinner.start()

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)//等于../dist/static

// run()

// 移除
// function run () {
//   rm(config.build.assetsRoot, err => {
//     if (err) run()
//     webpack(webpackConfig, function (err, stats) {
//       spinner.stop()
//       if (err) throw err
//       process.stdout.write(stats.toString({
//         colors: true,
//         modules: false,
//         children: false,
//         chunks: false,
//         chunkModules: false
//       }) + '\n\n')
//
//       if (stats.hasErrors()) {
//         console.log(chalk.red('  Build failed with errors.\n'))
//         process.exit(1)
//       }
//
//       replacePath(path.join(assetsPath, '../')) //等于../dist/static/../  == /dist/
//       console.log(chalk.cyan('  Build complete.\n'))
//       console.log(chalk.yellow(
//         '  Tip: built files are meant to be served over an HTTP server.\n' +
//         '  Opening index.html over file:// won\'t work.\n'
//       ))
//     })
//   })
// }

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  replacePath(path.join(assetsPath, '../')) //等于../dist/static/../  == /dist/
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})

function cpLog () {
  console.log('CYPE => ', ...arguments)
  shell.cp(...arguments)
}

function replacePath (folder) {//folder == /dist/
  let files = fs.readdirSync(folder)//files== klk,static,style.css,style.css.map
  for (let f of files) {
    let p = path.join(folder, f)//p=  /dist/static  /dist/klk  /dist/style.css
    let stat = fs.statSync(p)//返回文件方法返回一个stat数组对象，包含以下信息
    if (f !== 'static' && stat.isDirectory()
      && (config.build.buildDir === 'all' || config.build.buildDir === f)) {

      let childStatic = path.join(p, '/static/')
      cpLog(path.join(assetsPath, '../style.css'), p);
      [
        { dir: '/fonts/', opt: '-R' },
        { dir: '/img/', opt: '-R' },
        { dir: '/public/', opt: '-R' },
        { dir: `/${f}/`, opt: '-R' },
        { dir: `/css/pages/${f}/`, opt: '-R' },
        { dir: '/css/pages/public/', opt: '-R' },
        { dir: '/js/', opt: '-f' },
        { dir: `/js/pages/${f}/`, opt: '-R' },
        { dir: '/js/pages/public/', opt: '-R' }
      ].forEach(item => {
        let from = path.join(assetsPath, item.dir + '/*')
        let to = path.join(childStatic, item.dir)
        shell.mkdir('-p', to)
        cpLog(item.opt, from, to)
      })
    }
  }

  // shell.rm('-Rf', folder + '/static');
  // shell.rm(folder + '/style.css');
}
