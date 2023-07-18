<!--
 * 太阳
 *
 * @from 抖音 https://www.douyin.com/video/7237360778683206973
 * @author Junpeng.Li
 * @date 2023-06-07 13:52
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="ball">

    </div>
  </div>
</template>

<style scoped lang="scss">
$sun-size: 200px;

.container {
  width: 100%;
  height: 100%;
  background-color: #000;

  .ball {
    width: $sun-size;
    height: $sun-size;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px #fff,
      -10px 0 80px #ff0,
      -10px 0 40px #ff2039,
      inset 0 0 50px #fff,
      inset -50px 0 80px #ff0,
      inset 20px 0 50px #ff2039
      inset -50px 0 200px #ff0,
      inset 20px 0 50px #ff2039;
    animation: sun-animate 4s ease-in-out infinite;
  }

  @keyframes sun-animate {
    50% {
      box-shadow: 0 0 50px #fff,
      -10px 0 80px #ff2039,
      -10px 0 80px #ff0,
      inset 0 0 50px #fff,
      inset -50px 0 80px #ff0,
      inset 50px 0 80px #ff2039,
      inset -50px 0 200px #ff2039,
      inset 50px 0 200px #ff0;
    }
  }
}
</style>
