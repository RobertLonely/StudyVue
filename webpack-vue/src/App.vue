<template>
  <div>
    <h3>这是{{msg}}组件</h3>
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
h3 {
  color: red;
}
</style>