const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
// 创建插件的实例对象
const vuePlugin = new VueLoaderPlugin();

// 导入生成预览页面的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
  // 指定要使用的模板文件
  template: "./src/index.html",
  //指定要生成的文件名称。该文件存在于内存中，在目录中不显示
  filename: "index.html"
});

module.exports = {
  mode: "development", // 开发环境不会进行代码压缩混淆，比生产环境打包速度更快
  entry: path.join(__dirname, "./src/js/index.js"),
  output: { path: path.join(__dirname, "./dist"), filename: "bundle.js" },
  plugins: [htmlPlugin, vuePlugin],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      },
      {
        test: /\.jpg|jpeg|png|gif|bmp|ttf|eot|svg|woff$/,
        use: "url-loader?limit=87748"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
};
