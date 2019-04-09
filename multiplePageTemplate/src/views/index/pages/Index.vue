<template>

  <div class="main">
    <p class="testLess">这是一个模板界面2222</p>
  </div>

</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped lang="less">

  @color: red;
  .main {
    background-color: @color;
    .testLess {
      color: white;
    }
  }

</style>
