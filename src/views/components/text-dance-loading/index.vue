<!--
 * 会跳动的文字加载动画
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/%E6%96%87%E5%AD%97%E8%B7%B3%E5%8A%A8loading
 * @author Junpeng.Li
 * @date 2023-06-08 17:13
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="txt" style="--i:1">L</div>
      <div class="txt" style="--i:2">o</div>
      <div class="txt" style="--i:3">a</div>
      <div class="txt" style="--i:4">d</div>
      <div class="txt" style="--i:5">i</div>
      <div class="txt" style="--i:6">n</div>
      <div class="txt" style="--i:7">g</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  .content {
    color: #FFF;
    display: flex;
    font-size: 80px;
    font-weight: bolder;

    .txt {
      animation: dance-animate ease .5s infinite alternate;
      animation-delay: calc(var(--i) / 10 * 1s);
    }
  }

  @keyframes dance-animate {
    100% {
      color: #91c5b0;
      filter: drop-shadow(0 0 10px #91c5b0);
      transform: translateY(50px);
    }
  }
}
</style>
