<!--
 * 会发光的灯泡
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/%E6%91%87%E6%99%83%E5%B0%8F%E7%93%B6
 * @author Junpeng.Li
 * @date 2023-06-08 17:26
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="bottle">
      <div class="water"></div>
    </div>
    <div class="bottle-bottom"></div>
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

  .bottle {
    margin: auto;
    width: 300px;
    height: 300px;
    background: #ffffff1a;
    border-radius: 50%;
    position: relative;
    animation: bottle-animate linear 3s infinite;
    transform-origin: bottom center;

    &::before {
      display: block;
      content: "";
      width: 150px;
      height: 60px;
      border-radius: 70%;
      background: #505250;
      position: absolute;
      left: 50%;
      top: -5px;
      transform: translate(-50%);
      box-shadow: 0 10px 5px #000;
    }

    .water {
      background: #41c1fb;
      position: absolute;
      left: 10px;
      top: 50%;
      right: 10px;
      bottom: 10px;
      border-bottom-left-radius: 150px;
      border-bottom-right-radius: 150px;
      animation: wtaer-animate linear 3s infinite;
      transform-origin: top center;
      filter: drop-shadow(0 0 80px #41c1fb);

      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 20px;
        background: #0da2e7;
        border-radius: 50%;
        position: absolute;
        top: -10px;
      }
    }
  }

  .bottle-bottom {
    margin: auto;
    position: absolute;
    left: 50%;
    top: calc(50% + 150px);
    width: 300px;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    transform: translate(-50%);
    border-radius: 50%;
  }

  @keyframes bottle-animate {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0);
      filter: hue-rotate(360deg);
    }
  }

  @keyframes water-animate {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(15deg);
    }
    1000% {
      transform: rotate(0);
    }
  }
}
</style>
