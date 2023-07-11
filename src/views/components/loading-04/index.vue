<!--
 * loading-04
 *
 * @from https://epic-spinners.epicmax.co/
 * @author Junpeng.Li
 * @date 2023-07-11 11-35
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="orbit-spinner">
      <div class="orbit"></div>
      <div class="orbit"></div>
      <div class="orbit"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 1200ms;

.orbit-spinner,
.orbit-spinner * {
  box-sizing: border-box;
}

.orbit-spinner {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;

  .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .orbit:nth-child(1) {
    left: 0;
    top: 0;
    animation: orbit-spinner-orbit-one-animation $time linear infinite;
    border-bottom: 3px solid #ff1d5e;
  }

  .orbit:nth-child(2) {
    right: 0;
    top: 0;
    animation: orbit-spinner-orbit-two-animation $time linear infinite;
    border-right: 3px solid #ff1d5e;
  }

  .orbit:nth-child(3) {
    right: 0;
    bottom: 0;
    animation: orbit-spinner-orbit-three-animation $time linear infinite;
    border-top: 3px solid #ff1d5e;
  }
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
