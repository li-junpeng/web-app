<!--
 * 水滴
 *
 * @from 抖音 https://www.douyin.com/video/7234764964630646076
 * @author Junpeng.Li
 * @date 2023-06-07 14:21
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="water-box"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 168, 255, .8);

  .water-box {
    width: 200px;
    height: 200px;
    border-radius: 31% 69% 57% 43% / 46% 26% 74% 54%;
    box-shadow:
      10px 15px 20px rgba(0, 0, 0, .3),
      15px 20px 30px rgba(0, 0, 0, .1),
      inset 15px 20px 25px rgba(0, 0, 0, .5),
      inset -15px -20px 25px rgba(255, 255, 255, .5);
    position: relative;
    animation: drop-animate 10s linear infinite;

    &:after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      left: 60px;
      top: 60px;
      background-color: rgba(255, 255, 255, .8);
      border-radius: 63% 37% 70% 30% / 52% 60% 40% 48%;
      box-shadow: 0 0 6px 6px rgba(255, 255, 255, .8);
    }
  }

  @keyframes drop-animate {
    25% {
      border-radius: 46% 54% 65% 35% / 32% 44% 56% 68%;
    }
    50% {
      border-radius: 55% 45% 49% 51% / 50% 28% 72% 50%;
    }
    75% {
      border-radius: 42% 58% 39% 61% / 35% 45% 55% 65%;
    }
    100% {
      border-radius: 52% 48% 57% 43% / 56% 48% 52% 44%;
    }
  }
}
</style>
