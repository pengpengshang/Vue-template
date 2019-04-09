<template>

  <div>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>

    </el-row>

    <p class="testLess">这是测试less</p>

  </div>

</template>

<script>
    export default {
        name: "Index",
    }
</script>

<style scoped lang="less">

  @color: blue;
  .testLess{
    color: @color;
  }

</style>
