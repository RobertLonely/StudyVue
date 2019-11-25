<template>
  <div>
    <h4>这是{{msg}}组件</h4>
  </div>
</template>

<script>
export default {
  // 注意：组件中的 data 必须是 function
  data() {
    return { msg: "register" };
  }
};
</script>

<style>
</style>