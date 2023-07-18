<!--
 * loading加载动画
 *
 * @from 抖音 https://www.douyin.com/video/7242140459001187643
 * @author Junpeng.Li
 * @date 2023-06-08 22:07
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading-box"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading-box {
    position: relative;
    width: 300px;
    height: 300px;
    --color: #b78eff;

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-top: 10px solid #fff;
      border-radius: 50%;
      filter: drop-shadow(0 0 2px var(--color)) drop-shadow(0 0 5px var(--color)) drop-shadow(0 0 10px var(--color)) drop-shadow(0 0 20px var(--color));
      animation: rotate-animate 3s linear infinite;
    }

    &::after {
      --color: #ffec41;
      animation-delay: -1.5s;
    }

    @keyframes rotate-animate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
