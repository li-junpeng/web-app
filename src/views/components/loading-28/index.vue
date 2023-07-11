<!--
 * loading-28
 *
 * @from https://codepen.io/cosmo9x/pen/RwGRxoy
 * @author Junpeng.Li
 * @date 2023-07-11 15-32
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

.loader {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  animation: animate 0.8s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  animation: animate 0.8s linear infinite;
}

.loader span:nth-child(1) {
  filter: blur(5px);
}

.loader span:nth-child(2) {
  filter: blur(10px);
}

.loader span:nth-child(3) {
  filter: blur(25px);
}

.loader span:nth-child(4) {
  filter: blur(50px);
}

.loader:after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #240229;
  border-radius: 50%;
}
</style>
