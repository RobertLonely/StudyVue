<template>
  <div>
    <h2>这是{{msg}}组件</h2>
    <router-link to="/account">账户</router-link>
    <router-link to="/goodsList">商品列表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 注意：组件中的 data 必须是 function
  data() {
    return { msg: "APP" };
  }
};
</script>

<style>
</style>