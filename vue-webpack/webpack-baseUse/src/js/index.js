// 引入jquery模块
import $ from "jquery";

// 引入样式文件
import "../css/init.css";
import "../css/base.less";
import "../css/index.scss";

// 引入精简版vue的框架
import Vue from "vue";
// 引入app根组件
import App from "../components/app.vue";

// 实现隔行变色
$(function() {
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "skyblue");
});

class animal {
  static a = 2;
}
console.log(animal.a);

// 创建vm的实例对象
const vm = new Vue({
  el: "#app",
  render: h => h(App)
});
