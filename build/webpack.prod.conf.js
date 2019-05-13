'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
  },
  plugins: [
    new cleanWebpackPlugin(['dist/*/*'], {
      root: path.resolve(__dirname, '../'),
      exclude: ['.git']
    }),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_debugger: true,
    //     drop_console: true
    //   },
    //   sourceMap: config.build.productionSourceMap,
    //   parallel: true
    // }),
    new ParallelUglifyPlugin({ // 多进程并行处理压缩。
      cacheDir: '.cache/', // 缓存压缩后的结果，下次遇到一样的输入时直接从缓存中获取压缩后的结
      uglifyJS: {
        output: {
          comments: false, // 删除所有注释
          beautify: false // 最紧凑的输出，不保留空格和制表符
        },
        compress: {
          warnings: false, // 删除无用代码时不输出警告
          drop_console: true, // 删除所有console语句，可以兼容IE
          collapse_vars: true, // 内嵌已定义但只使用一次的变量
          reduce_vars: true, // 提取使用多次但没定义的静态值到变量
        }
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // set the following option to `true` if you want to extract CSS from
      // codesplit chunks into this main css file as well.
      // This will result in *all* of your app's CSS being loaded upfront.
      allChunks: false,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap ?
        {
          safe: true,
          map: {
            inline: false
          }
        } :
        {
          safe: true
        }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),
    //客拉客
    new HtmlWebpackPlugin(
      config.build.buildDir === 'klk' || config.build.buildDir === 'all' ? {
        filename: './klk/index.html',
        template: './src/pages/klk/index.html',
        inject: true,
        chunks: ['pages/klk/index', 'vendor', 'manifest']
      } : {}
    ),
    //花生娱乐
    new HtmlWebpackPlugin(
      config.build.buildDir === 'hsyl' || config.build.buildDir === 'all' ? {
        filename: './hsyl/index.html',
        template: './src/pages/hsyl/index.html',
        inject: true,
        chunks: ['pages/hsyl/index', 'vendor', 'manifest']
      } : {}
    ),
    //打包环境
    new HtmlWebpackPlugin(
      config.build.buildDir === 'hqyl' || config.build.buildDir === 'all' ? {
        filename: './hqyl/index.html',
        template: './src/pages/hqyl/index.html',
        inject: true,
        chunks: ['pages/hqyl/index', 'vendor', 'manifest']
      } : {}
    ),
    //500w h50005
    new HtmlWebpackPlugin(
      config.build.buildDir === '500w' || config.build.buildDir === 'all' ? {
        filename: './500w/index.html',
        template: './src/pages/500w/index.html',
        inject: true,
        chunks: ['pages/500w/index', 'vendor', 'manifest']
      } : {}
    ),
    //地球人彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'dqr' || config.build.buildDir === 'all' ? {
        filename: './dqr/index.html',
        template: './src/pages/dqr/index.html',
        inject: true,
        chunks: ['pages/dqr/index', 'vendor', 'manifest']
      } : {}
    ),
    //测试站地球人彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'test' || config.build.buildDir === 'all' ? {
        filename: './test/index.html',
        template: './src/pages/test/index.html',
        inject: true,
        chunks: ['pages/test/index', 'vendor', 'manifest']
      } : {}
    ),
    //大佬
    new HtmlWebpackPlugin(
      config.build.buildDir === 'dalao' || config.build.buildDir === 'all' ? {
        filename: './dalao/index.html',
        template: './src/pages/dalao/index.html',
        inject: true,
        chunks: ['pages/dalao/index', 'vendor', 'manifest']
      } : {}
    ),
    //全民彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'qmcp' || config.build.buildDir === 'all' ? {
        filename: './qmcp/index.html',
        template: './src/pages/qmcp/index.html',
        inject: true,
        chunks: ['pages/qmcp/index', 'vendor', 'manifest']
      } : {}
    ),
    //多多彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'ddcp' || config.build.buildDir === 'all' ? {
        filename: './ddcp/index.html',
        template: './src/pages/ddcp/index.html',
        inject: true,
        chunks: ['pages/ddcp/index', 'vendor', 'manifest']
      } : {}
    ),
    new HtmlWebpackPlugin(
      config.build.buildDir === '500wcp' || config.build.buildDir === 'all' ? {
        filename: './500wcp/index.html',
        template: './src/pages/500wcp/index.html',
        inject: true,
        chunks: ['pages/500wcp/index', 'vendor', 'manifest']
      } : {}
    ),
    //彩票之家
    new HtmlWebpackPlugin(
      config.build.buildDir === 'cpzj' || config.build.buildDir === 'all' ? {
        filename: './cpzj/index.html',
        template: './src/pages/cpzj/index.html',
        inject: true,
        chunks: ['pages/cpzj/index', 'vendor', 'manifest']
      } : {}
    ),
    //凤凰彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'fhcp' || config.build.buildDir === 'all' ? {
        filename: './fhcp/index.html',
        template: './src/pages/fhcp/index.html',
        inject: true,
        chunks: ['pages/fhcp/index', 'vendor', 'manifest']
      } : {}
    ),
    //E彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'ecp' || config.build.buildDir === 'all' ? {
        filename: './ecp/index.html',
        template: './src/pages/ecp/index.html',
        inject: true,
        chunks: ['pages/ecp/index', 'vendor', 'manifest']
      } : {}
    ),
    //E盈彩
    new HtmlWebpackPlugin(
      config.build.buildDir === 'eyc' || config.build.buildDir === 'all' ? {
        filename: './eyc/index.html',
        template: './src/pages/eyc/index.html',
        inject: true,
        chunks: ['pages/eyc/index', 'vendor', 'manifest']
      } : {}
    ),
    new HtmlWebpackPlugin(
      config.build.buildDir === 'g500' || config.build.buildDir === 'all' ? {
        filename: './g500/index.html',
        template: './src/pages/g500/index.html',
        inject: true,
        chunks: ['pages/g500/index', 'vendor', 'manifest']
      } : {}
    ),
    //新葡京
    new HtmlWebpackPlugin(
      config.build.buildDir === 'qygj' || config.build.buildDir === 'all' ? {
        filename: './qygj/index.html',
        template: './src/pages/qygj/index.html',
        inject: true,
        chunks: ['pages/qygj/index', 'vendor', 'manifest']
      } : {}
    ),
    //手机彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'sjcp' || config.build.buildDir === 'all' ? {
        filename: './sjcp/index.html',
        template: './src/pages/sjcp/index.html',
        inject: true,
        chunks: ['pages/sjcp/index', 'vendor', 'manifest']
      } : {}
    ),
    //新葡京
    new HtmlWebpackPlugin(
      config.build.buildDir === 'xpj' || config.build.buildDir === 'all' ? {
        filename: './xpj/index.html',
        template: './src/pages/xpj/index.html',
        inject: true,
        chunks: ['pages/xpj/index', 'vendor', 'manifest']
      } : {}
    ),
    //网易彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'wycp' || config.build.buildDir === 'all' ? {
        filename: './wycp/index.html',
        template: './src/pages/wycp/index.html',
        inject: true,
        chunks: ['pages/wycp/index', 'vendor', 'manifest']
      } : {}
    ),
    //创世大发
    new HtmlWebpackPlugin(
      config.build.buildDir === 'csdf' || config.build.buildDir === 'all' ? {
        filename: './csdf/index.html',
        template: './src/pages/csdf/index.html',
        inject: true,
        chunks: ['pages/csdf/index', 'vendor', 'manifest']
      } : {}
    ),
    //广东会
    new HtmlWebpackPlugin(
      config.build.buildDir === 'jltx' || config.build.buildDir === 'all' ? {
        filename: './jltx/index.html',
        template: './src/pages/jltx/index.html',
        inject: true,
        chunks: ['pages/jltx/index', 'vendor', 'manifest']
      } : {}
    ),
    // 10个网站
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'blr' || config.build.buildDir === 'all' ? {
    //     filename: './blr/index.html',
    //     template: './src/pages/blr/index.html',
    //     inject: true,
    //     chunks: ['pages/blr/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'mgdc' || config.build.buildDir === 'all' ? {
    //     filename: './mgdc/index.html',
    //     template: './src/pages/mgdc/index.html',
    //     inject: true,
    //     chunks: ['pages/mgdc/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'jsyl' || config.build.buildDir === 'all' ? {
    //     filename: './jsyl/index.html',
    //     template: './src/pages/jsyl/index.html',
    //     inject: true,
    //     chunks: ['pages/jsyl/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'tctx' || config.build.buildDir === 'all' ? {
    //     filename: './tctx/index.html',
    //     template: './src/pages/tctx/index.html',
    //     inject: true,
    //     chunks: ['pages/tctx/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'pjdc' || config.build.buildDir === 'all' ? {
    //     filename: './pjdc/index.html',
    //     template: './src/pages/pjdc/index.html',
    //     inject: true,
    //     chunks: ['pages/pjdc/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'tycjt' || config.build.buildDir === 'all' ? {
    //     filename: './tycjt/index.html',
    //     template: './src/pages/tycjt/index.html',
    //     inject: true,
    //     chunks: ['pages/tycjt/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'betsb' || config.build.buildDir === 'all' ? {
    //     filename: './betsb/index.html',
    //     template: './src/pages/betsb/index.html',
    //     inject: true,
    //     chunks: ['pages/betsb/index', 'vendor', 'manifest']
    //   } : {}
    // ),

    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'vnso' || config.build.buildDir === 'all' ? {
    //     filename: './vnso/index.html',
    //     template: './src/pages/vnso/index.html',
    //     inject: true,
    //     chunks: ['pages/vnso/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'vnst' || config.build.buildDir === 'all' ? {
    //     filename: './vnst/index.html',
    //     template: './src/pages/vnst/index.html',
    //     inject: true,
    //     chunks: ['pages/vnst/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'lycp  ' || config.build.buildDir === 'all' ? {
    //     filename: './lycp/index.html',
    //     template: './src/pages/lycp/index.html',
    //     inject: true,
    //     chunks: ['pages/lycp/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    //福彩在线
    new HtmlWebpackPlugin(
      config.build.buildDir === 'fczx' || config.build.buildDir === 'all' ? {
        filename: './fczx/index.html',
        template: './src/pages/fczx/index.html',
        inject: true,
        chunks: ['pages/fczx/index', 'vendor', 'manifest']
      } : {}
    ),
    //500w彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 't500w' || config.build.buildDir === 'all' ? {
        filename: './t500w/index.html',
        template: './src/pages/t500w/index.html',
        inject: true,
        chunks: ['pages/t500w/index', 'vendor', 'manifest']
      } : {}
    ),
    //9号彩票
    new HtmlWebpackPlugin(
      config.build.buildDir === 'jhcp' || config.build.buildDir === 'all' ? {
        filename: './jhcp/index.html',
        template: './src/pages/jhcp/index.html',
        inject: true,
        chunks: ['pages/jhcp/index', 'vendor', 'manifest']
      } : {}
    ),
    //财经网
    new HtmlWebpackPlugin(
      config.build.buildDir === 'cjw' || config.build.buildDir === 'all' ? {
        filename: './cjw/index.html',
        template: './src/pages/cjw/index.html',
        inject: true,
        chunks: ['pages/cjw/index', 'vendor', 'manifest']
      } : {}
    ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'mgm' || config.build.buildDir === 'all' ? {
    //     filename: './mgm/index.html',
    //     template: './src/pages/mgm/index.html',
    //     inject: true,
    //     chunks: ['pages/mgm/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    //澳门新葡京
    new HtmlWebpackPlugin(
      config.build.buildDir === 't111' || config.build.buildDir === 'all' ? {
        filename: './t111/index.html',
        template: './src/pages/t111/index.html',
        inject: true,
        chunks: ['pages/t111/index', 'vendor', 'manifest']
      } : {}
    ),
    //
    new HtmlWebpackPlugin(
      config.build.buildDir === 'jlcp' || config.build.buildDir === 'all' ? {
        filename: './jlcp/index.html',
        template: './src/pages/jlcp/index.html',
        inject: true,
        chunks: ['pages/jlcp/index', 'vendor', 'manifest']
      } : {}
    ),
    new HtmlWebpackPlugin(
      config.build.buildDir === 'szc' || config.build.buildDir === 'all' ? {
        filename: './szc/index.html',
        template: './src/pages/szc/index.html',
        inject: true,
        chunks: ['pages/szc/index', 'vendor', 'manifest']
      } : {}
    ),
    new HtmlWebpackPlugin(
      config.build.buildDir === 'zyyl' || config.build.buildDir === 'all' ? {
        filename: './zyyl/index.html',
        template: './src/pages/zyyl/index.html',
        inject: true,
        chunks: ['pages/zyyl/index', 'vendor', 'manifest']
      } : {}
    ),
    new HtmlWebpackPlugin(
      config.build.buildDir === 'ly88' || config.build.buildDir === 'all' ? {
        filename: './ly88/index.html',
        template: './src/pages/ly88/index.html',
        inject: true,
        chunks: ['pages/ly88/index', 'vendor', 'manifest']
      } : {}
    ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'yibo' || config.build.buildDir === 'all' ? {
    //     filename: './yibo/index.html',
    //     template: './src/pages/yibo/index.html',
    //     inject: true,
    //     chunks: ['pages/yibo/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    new HtmlWebpackPlugin(
      config.build.buildDir === 'pjyl' || config.build.buildDir === 'all' ? {
        filename: './pjyl/index.html',
        template: './src/pages/pjyl/index.html',
        inject: true,
        chunks: ['pages/pjyl/index', 'vendor', 'manifest']
      } : {}
    ),
    // new HtmlWebpackPlugin(
    //   config.build.buildDir === 'xb02' || config.build.buildDir === 'all' ? {
    //     filename: './xb02/index.html',
    //     template: './src/pages/xb02/index.html',
    //     inject: true,
    //     chunks: ['pages/xb02/index', 'vendor', 'manifest']
    //   } : {}
    // ),
    //打包环境
    // new HtmlWebpackPlugin({
    //   filename:'./live2.html',
    //   template:'./src/pages/new/hua-sheng/index.html',
    //   inject: true,
    //   chunks:['pages/new/hua-sheng/index','vendor','manifest']
    // }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
