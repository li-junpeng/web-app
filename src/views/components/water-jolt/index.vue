<!--
 * 水杯晃动效果
 *
 * @from 抖音 https://www.douyin.com/video/7216749387777608971
 * @author Junpeng.Li
 * @date 2023-06-07 17:26
-->
<script setup lang="ts">
defineOptions({
  name: 'WaterJolt'
})
</script>

<template>
  <div class="container">
    <div class="glass-box"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;

  .glass-box {
    width: 200px;
    height: 200px;
    box-shadow: inset 0 0 150px #07b1ee;
    margin: auto;
    position: relative;
    overflow: hidden;
    /* 绘制瓶身，看起来像个杯子 */
    clip-path: polygon(
      0 0,
      100% 0,
      170px 100%,
      30px 100%
    );

    &::before {
      content: "";
      width: 200%;
      height: 200%;
      background-color: #fff;
      position: absolute;
      top: -150%;
      left: -50%;
      /* 水晃动效果主要依靠这个圆角 */
      border-radius: 20% 40% 30% 60%;
      animation: jolt-animate 5s linear infinite;
    }
  }

  @keyframes jolt-animate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
