// 导入m1模块成员
import m1 from "./m1";
// 按需导入m2模块成员
import { name as alias, say } from "./m2";
// 直接导入并执行m3模块成员
import "./m3";

// 打印m1
console.log(m1);
// 打印m1
console.log(alias);
