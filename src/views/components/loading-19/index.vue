<!--
 * loading-19
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-20
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="box">
      <div class="plane"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 1s;

.box {
  perspective: 120px;
}

.plane {
  width: 2em;
  height: 2em;
  background-color: #fc2f70;
  transform: rotate(0);
  animation: flip $time infinite;
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}

</style>
