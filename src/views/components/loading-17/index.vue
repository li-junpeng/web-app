<!--
 * loading-17
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-16
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading-box"></div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 2s;

.loading-box {
  width: 2.5em;
  height: 3em;
  border: 3px solid transparent;
  border-top-color: #fc2f70;
  border-bottom-color: #fc2f70;
  border-radius: 50%;
  animation: spin-stretch $time ease infinite;
}

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }

  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}

</style>
