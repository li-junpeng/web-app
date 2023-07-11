<!--
 * loading-06
 *
 * @from https://epic-spinners.epicmax.co/
 * @author Junpeng.Li
 * @date 2023-07-11 11-43
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="semi-polar-spinner">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 2000ms;

.semi-polar-spinner,
.semi-polar-spinner * {
  box-sizing: border-box;
}

.semi-polar-spinner {
  height: 65px;
  width: 65px;
  position: relative;

  .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(65px * 0.05) solid transparent;
    border-top-color: #ff1d5e;
    border-left-color: #ff1d5e;
    animation: semi-polar-spinner-animation $time infinite;
  }

  .ring:nth-child(1) {
    height: calc(65px - 65px * 0.2 * 0);
    width: calc(65px - 65px * 0.2 * 0);
    top: calc(65px * 0.1 * 0);
    left: calc(65px * 0.1 * 0);
    animation-delay: calc($time * 0.1 * 4);
    z-index: 5;
  }

  .ring:nth-child(2) {
    height: calc(65px - 65px * 0.2 * 1);
    width: calc(65px - 65px * 0.2 * 1);
    top: calc(65px * 0.1 * 1);
    left: calc(65px * 0.1 * 1);
    animation-delay: calc($time * 0.1 * 3);
    z-index: 4;
  }

  .ring:nth-child(3) {
    height: calc(65px - 65px * 0.2 * 2);
    width: calc(65px - 65px * 0.2 * 2);
    top: calc(65px * 0.1 * 2);
    left: calc(65px * 0.1 * 2);
    animation-delay: calc($time * 0.1 * 2);
    z-index: 3;
  }

  .ring:nth-child(4) {
    height: calc(65px - 65px * 0.2 * 3);
    width: calc(65px - 65px * 0.2 * 3);
    top: calc(65px * 0.1 * 3);
    left: calc(65px * 0.1 * 3);
    animation-delay: calc($time * 0.1 * 1);
    z-index: 2;
  }

  .ring:nth-child(5) {
    height: calc(65px - 65px * 0.2 * 4);
    width: calc(65px - 65px * 0.2 * 4);
    top: calc(65px * 0.1 * 4);
    left: calc(65px * 0.1 * 4);
    animation-delay: calc($time * 0.1 * 0);
    z-index: 1;
  }
}

@keyframes semi-polar-spinner-animation {
  50% {
    transform: rotate(360deg) scale(0.7);
  }
}
</style>
