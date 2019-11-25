//导入vue组件
import Vue from "vue";
// import Vue from '../node_modules/vue/dist/vue'

//导入App组件
import App from "./App.vue";

//创建组件模板
// var App={
//   template:'<h3>123</h3>'
// }

//创建一个vm实例，使用render函数渲染指定组件
var vm = new Vue({
  el: "#app",
  render: c => c(App)
});
