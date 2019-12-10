const express = require("express");
const bodyParser = require("body-parser");

// 创建web服务器
const app = express();

// 拦截所有请求，解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // 允许哪些客户端访问我
  res.header("Access-Control-Allow-Origin", "*");
  // 允许客户端使用哪些请求方法访问我
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "myToken");
  next();
});

// 01路由对应处理函数
app.get("/test", (req, res) => {
  res.send("我是测试用的");
});
app.get("/tests", (req, res) => {
  res.send("我还是测试用的");
});

// 02路由对应处理函数
app.get("/data1", (req, res) => {
  setTimeout(function() {
    res.send("first");
  }, 1000);
});
app.get("/data2", (req, res) => {
  setTimeout(function() {
    res.send("second");
  }, 2000);
});
app.get("/data3", (req, res) => {
  setTimeout(function() {
    res.send("third");
  }, 3000);
});

// 03路由对应处理函数
app.get("/fetch", (req, res) => {
  res.send("内置API，fetch方法首秀");
});

// 04路由对应处理函数
app.get("/get", (req, res) => {
  res.send("get方法:" + req.query.id);
});
app.get("/get/:id", (req, res) => {
  res.send("get方法:" + req.params.id);
});
app.delete("/delete", (req, res) => {
  res.send("delete方法:" + req.query.id);
});
app.delete("/delete/:id", (req, res) => {
  res.send("delete方法:" + req.params.id);
});
app.post("/post", (req, res) => {
  res.send("post方法:" + req.body.username + "," + req.body.password);
});
app.put("/put/:id", (req, res) => {
  res.send(
    "put方法:" +
      req.params.id +
      "," +
      req.body.username +
      "," +
      req.body.password
  );
});

// 05路由对应处理函数
app.get("/json", (req, res) => {
  res.json({ name: "罗伯特", age: 12 });
});

// 06路由对应处理函数
// app.get("/axios", (req, res) => {
//   res.send("axios首秀");
// });

// 07路由对应处理函数
app.get("/axios", (req, res) => {
  res.send("get方法：" + req.query.id);
});
app.get("/axios/:id", (req, res) => {
  res.send("get方法：" + req.params.id);
});
app.post("/axios", (req, res) => {
  res.send("post方法：" + req.body.username + "," + req.body.password);
});
app.delete("/axios", (req, res) => {
  res.send("delete方法：" + req.query.id);
});
app.delete("/axios/:id", (req, res) => {
  res.send("delete方法：" + req.params.id);
});
app.put("/axios", (req, res) => {
  res.send(
    "put方法：" +
      req.query.id +
      "," +
      req.body.username +
      "," +
      req.body.password
  );
});
app.put("/axios/:id", (req, res) => {
  res.send(
    "put方法：" +
      req.params.id +
      "," +
      req.body.username +
      "," +
      req.body.password
  );
});

// 监听web端口
app.listen(3000);
console.log("running...");
