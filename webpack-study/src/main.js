//导入Jquery
import $ from "jquery";
//导入 css样式表
import './css/index.css'
//导入 less样式表
import './css/index.less'
//导入 scss样式表
// import './css/index.scss'

//导入bootstrap样式表
// 注意：如果要通过路径的形式，去引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层目录,直接写包的名称然后后面跟上具体的文件路径不写 node_modules这一层目录 ，默认就会去node_modules中查找
import 'bootstrap/dist/css/bootstrap.css'

$(function() {
  $("li:odd").css("backgroundColor", "red");
  $("li:even").css("backgroundColor", "pink");
});

// class关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class A{
  static a=12;
}
console.log(A.a);

