//导入vue组件
import Vue from "vue";
// import Vue from '../node_modules/vue/dist/vue'

//导入App组件
import app from "./App.vue";

//TODO1：导入路由模块
import VueRouter from "vue-router";

//TODO2：安装路由模块,必须手动安装
Vue.use(VueRouter);

//TODO3:导入需要展示的组件
import account from "./main/Account.vue";
import goodsList from "./main/GoodsList.vue";

// 导入Account的两个子组件
import login from "./subCom/login.vue";
import register from "./subCom/register.vue";

//TODO4:创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/account" },
    {
      path: "/account",
      component: account,
      //嵌套子路由
      children: [
        { path: "/account/login", component: login },
        { path: "/account/register", component: register }
      ]
    },
    { path: "/goodsList", component: goodsList }
  ]
});

//创建组件模板
// var App={
//   template:'<h3>123</h3>'
// }

//创建一个vm实例，使用render函数渲染指定组件
var vm = new Vue({
  el: "#app",
  render: c => c(app),
  //TODO4:将路由对象挂载到Vue实例上
  router
});
