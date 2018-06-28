var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var packageJson = require('../package.json')

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

  var banner =
      '/*!\n' +
      ' * RONG UI v' + packageJson.version + ' (http://gitlab.rong360.com/RFE/rong-ui)\n' +
      ' * (c) ' + new Date().getFullYear() + ' Rong360 FE Team \n' +
      ' * Released under the MIT License.\n' +
      ' */';

delete baseWebpackConfig.entry
var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    dialog: '@/components/dialog/index.js',
    loading: '@/components/loading/index.js',
    rbutton: '@/components/rButton/index.js',
    rdatepicker: '@/components/rDatepicker/index.js',
    remail: '@/components/rEmail/index.js',
    rfloat: '@/components/rFloat/index.js',
    ricon: '@/components/rIcon/index.js',
    ridcard: '@/components/rIDCard/index.js',
    rinput: '@/components/rInput/index.js',
    rint: '@/components/rInt/index.js',
    rkeyboard: '@/components/rKeyboard/index.js',
    rmvcode: '@/components/rMvcode/index.js',
    rnumber: '@/components/rNumber/index.js',
    // rProgress: '@/components/rProgress/index.js',
    //rradio: '@/components/rRadio/index.js'
    rregion: '@/components/rRegion/index.js',
    rselect: '@/components/rSelect/index.js',
    rtelephone: '@/components/rTelephone/index.js',
    rtitlebar: '@/components/rTitlebar/index.js',
    rupload: '@/components/rUpload/index.js',
    rvcode: '@/components/rVcode/index.js',
    rTabs: '@/components/rTabs/index.js',
    //tip: '@/components/tip/index.js',
    toast: '@/components/toast/index.js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true
    })
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    library: 'js/[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin(),
    new webpack.BannerPlugin({banner: banner, raw: true, entryOnly: true})
  ]
})

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig
