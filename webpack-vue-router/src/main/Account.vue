<template>
  <div>
    <h3>这是{{msg}}组件</h3>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 注意：组件中的 data 必须是 function
  data() {
    return { msg: "Account" };
  }
};
</script>

<style lang="less" scoped>
body {
  div {
    text-decoration: underline;
  }
}
</style>