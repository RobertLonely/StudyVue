// 导入处理路径的模块
var path = require("path");
//导入自动生成html文件的插件
var htmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/main.js"), //项目入口文件
  output: {
    //配置输出选项
    path: path.resolve(__dirname, "./dist"), //配置输出路径
    filename: "bundle.js" //配置输出文件名
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"), //模板路径
      filename: "index.html" //自动生成的html文件的名称
    }),
    new webpack.HotModuleReplacementPlugin() //实例化一个热更新的模块对象
  ],
  devServer: {
    open: true,
    port: 7000,
    hot: true
  },
  module: {
    //用来配置第三方loader模块
    rules: [
      //文件匹配规则
      //处理css文件规则
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //处理less文件规则
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      //处理scss文件规则
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      //处理图片规则
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: "url-loader?limit=7360&name=[hash:8].[name].[ext]"
      },
      //处理字体文件的规则
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
      // 配置 Babel 来转换高级的ES6语法
      { test: /\.js$/, use: "babel-loader", exclude: "/node_modules/" }
    ]
  }
};
