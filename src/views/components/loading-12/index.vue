<!--
 * loading-12
 *
 * @from https://epic-spinners.epicmax.co/
 * @author Junpeng.Li
 * @date 2023-07-11 14-00
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="looping-rhombuses-spinner">
      <div class="rhombus"></div>
      <div class="rhombus"></div>
      <div class="rhombus"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 2500ms;

.looping-rhombuses-spinner, .looping-rhombuses-spinner * {
  box-sizing: border-box;
}

.looping-rhombuses-spinner {
  width: calc(15px * 4);
  height: 15px;
  position: relative;
}

.looping-rhombuses-spinner .rhombus {
  height: 15px;
  width: 15px;
  background-color: #ff1d5e;
  left: calc(15px * 4);
  position: absolute;
  margin: 0 auto;
  border-radius: 2px;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: looping-rhombuses-spinner-animation $time linear infinite;
}

.looping-rhombuses-spinner .rhombus:nth-child(1) {
  animation-delay: calc($time * 1 / -1.5);
}

.looping-rhombuses-spinner .rhombus:nth-child(2) {
  animation-delay: calc($time * 2 / -1.5);
}

.looping-rhombuses-spinner .rhombus:nth-child(3) {
  animation-delay: calc($time * 3 / -1.5);
}

@keyframes looping-rhombuses-spinner-animation {
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(-233%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(-466%) rotate(45deg) scale(0);
  }
}
</style>
