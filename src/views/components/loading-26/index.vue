<!--
 * loading-26
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-37
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading-box">
      <div class="coin"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

.loading-box {
  perspective: 120px;
}

.coin {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid #fc2f70;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}
</style>
