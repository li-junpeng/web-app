<!--
 * loading-16
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-14
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="balls">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 0.5s;

.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing $time ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing $time ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}

</style>
