<!--
 * 提示框内容
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/%E5%8C%85%E5%9B%B4%E9%98%B4%E5%BD%B1
 * @author Junpeng.Li
 * @date 2023-06-08 22:49
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="tooltip-content">webapp.junpeng.site</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .tooltip-content {
    width: 250px;
    height: 100px;
    background: #FFF;
    border-radius: 10px;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    color: #7e7777;
    position: relative;
    filter: drop-shadow(0 0 5px #797777);
    user-select: none;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 15px solid transparent;
      border-top-color: #fff;
      position: absolute;
      /* 250px = 内容区域宽度，15px = 三角宽度（border-width） */
      left: calc(250px / 2 - 15px);
    }
  }
}
</style>
