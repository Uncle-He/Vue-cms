// 倒入处理路径的模块
var path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
  mode: 'development',
  entry: './src/main.js',   // 项目入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),   // 配置输出的路径
    filename: 'bundle.js'   // 配置输出的文件名
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: { // 配置所有第三方loader 模块的
    rules: [ // 第三方模块的匹配规则
      { test: /\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理css文件的规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
    ]
  },
  resolve: {
    alias: { // 修改vue导入时候包的路径
      "vue$": "vue/dist/vue.js"
    }
  }
};