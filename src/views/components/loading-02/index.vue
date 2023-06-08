<!--
 * loading - 01
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/loading%E5%90%88%E9%9B%86
 * @author Junpeng.Li
 * @date 2023-06-08 17:44
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading loading1"></div>
    <div class="loading loading2"></div>
    <div class="loading loading3"></div>
  </div>
</template>

<style scoped lang="scss">
$loading-size: 80px;
$loading-width: 5px;

.container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .loading {
    width: $loading-size;
    height: $loading-size;
    border-radius: 50%;
    animation: animate 0.6s linear infinite;
  }

  .loading1 {
    border: $loading-width solid #d7d2d2;
    border-top-color: #21a1f1;
  }

  .loading2 {
    border: $loading-width solid #f83e3e;
    border-top-color: transparent;
    border-right-color: transparent;
  }

  .loading3 {
    border: $loading-width solid transparent;
    border-top-color: red;
    border-bottom-color: #73b6f9;
  }

  @keyframes animate {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
