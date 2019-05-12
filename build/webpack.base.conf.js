'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var glob = require('glob')  //addvcu
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var entryJS
if (config.build.buildDir == 'all') {
  entryJS = glob.sync('./src/pages/**/*.js').reduce(function (prev, curr) {
    prev[curr.slice(6, -3)] = ['babel-polyfill', curr]
    return prev
  }, {}) //addvcu正则获取
} else {
  entryJS = glob.sync('./src/pages/' + config.build.buildDir + '/*.js').reduce(function (prev, curr) {
    prev[curr.slice(6, -3)] = ['babel-polyfill', curr]
    return prev
  }, {})
}

module.exports = {
  cache: true, //开启缓存功能，这样只有变化的文件才会重新加载，可提升构建速度
  context: path.resolve(__dirname, '../'),
  entry: entryJS,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'), //省略号代表默认src  @/service/service.js
      // 'swiper': 'swiper/dist/js/swiper.js'
    }
  },
  externals: {
    QRCode: 'QRCode'
  },
  module: {
    loaders: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file'
      }
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('img/[path][name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   jQuery: "jquery",
    //   $: "jquery"
    // })
    // ,
    new ExtractTextPlugin('style.css'),
    new webpack.BannerPlugin('This file is created by qianduan'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
