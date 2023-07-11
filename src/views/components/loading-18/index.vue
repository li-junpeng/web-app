<!--
 * loading-18
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-18
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading-box">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 0.8s;

.loading-box {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.loading-box .loading-dot {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade $time ease-in-out alternate infinite;
}

.loading-box .loading-dot:nth-of-type(1) {
  animation-delay: -0.4s;
}

.loading-box .loading-dot:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

</style>
