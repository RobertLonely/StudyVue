// 导入处理路径的模块
var path = require("path");

//导入自动生成html文件的插件
var htmlWebpackPlugin = require("html-webpack-plugin");

//导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//导入抽离css文件的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 导入压缩css文件的插件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var webpack = require("webpack");

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./src/main.js"), //项目入口文件
    vendors: ["jquery", "bootstrap"]
  },
  output: {
    //配置输出选项
    path: path.resolve(__dirname, "./dist"), //配置输出路径
    filename: "js/bundle.js" //配置输出文件名
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"), //模板路径
      filename: "index.html", //自动生成的html文件的名称
      minify: {
        // 压缩HTML代码
        collapseWhitespace: true, // 合并空白字符
        removeComments: true, // 移除注释
        removeAttributeQuotes: true // 移除属性上的引号
      }
    }),
    //要删除的文件
    new CleanWebpackPlugin(),
    //抽取css文件
    new ExtractTextPlugin("css/styles.css"),
    // 压缩CSS文件的插件
    new OptimizeCssAssetsPlugin()
  ],
  module: {
    //用来配置第三方loader模块
    rules: [
      //文件匹配规则
      //处理css文件规则
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "../" // 设置图片路径
        })
      },
      //处理less文件规则
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"],
          publicPath: "../" // 设置图片路径
        })
      },
      //处理scss文件规则
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "../" // 设置图片路径
        })
      },
      //处理图片规则
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: "url-loader?limit=7360&name=images/[hash:8]-[name].[ext]"
      },
      //处理字体文件的规则
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
      // 配置 Babel 来转换高级的ES6语法
      { test: /\.js$/, use: "babel-loader", exclude: "/node_modules/" }
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "initial",
          minChunks: 1
        }
      }
    }
  }
};
