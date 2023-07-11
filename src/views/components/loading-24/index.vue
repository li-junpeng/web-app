<!--
 * loading-24
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-31
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
@use "../base";

.balls {
  width: 3.5em;
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
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.balls div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.balls div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
