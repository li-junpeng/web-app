<!--
 * loading-25
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-34
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading-box">
      <span class="loading-item"></span>
      <span class="loading-item"></span>
      <span class="loading-item"></span>
      <span class="loading-item"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

.loading-box {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 2em;
}

.loading-item {
  width: 0.3em;
  height: 1em;
  background-color: #fc2f70;
}

.loading-item:nth-of-type(1) {
  animation: grow 1s -0.45s ease-in-out infinite;
}

.loading-item:nth-of-type(2) {
  animation: grow 1s -0.3s ease-in-out infinite;
}

.loading-item:nth-of-type(3) {
  animation: grow 1s -0.15s ease-in-out infinite;
}

.loading-item:nth-of-type(4) {
  animation: grow 1s ease-in-out infinite;
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
}

</style>
