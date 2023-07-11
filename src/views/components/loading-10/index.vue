<!--
 * loading-10
 *
 * @from https://epic-spinners.epicmax.co/
 * @author Junpeng.Li
 * @date 2023-07-11 11-58
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="spring-spinner">
      <div class="spring-spinner-part top">
        <div class="spring-spinner-rotator"></div>
      </div>
      <div class="spring-spinner-part bottom">
        <div class="spring-spinner-rotator"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 3s;

.spring-spinner, .spring-spinner * {
  box-sizing: border-box;
}

.spring-spinner {
  height: 60px;
  width: 60px;
}

.spring-spinner .spring-spinner-part {
  overflow: hidden;
  height: calc(60px / 2);
  width: 60px;
}

.spring-spinner  .spring-spinner-part.bottom {
  transform: rotate(180deg) scale(-1, 1);
}

.spring-spinner .spring-spinner-rotator {
  width: 60px;
  height: 60px;
  border: calc(60px / 7) solid transparent;
  border-right-color: #ff1d5e;
  border-top-color: #ff1d5e;
  border-radius: 50%;
  box-sizing: border-box;
  animation: spring-spinner-animation $time ease-in-out infinite;
  transform: rotate(-200deg);
}

@keyframes spring-spinner-animation {
  0% {
    border-width: calc(60px / 7);
  }
  25% {
    border-width: calc(60px / 23.33);
  }
  50% {
    transform: rotate(115deg);
    border-width: calc(60px / 7);
  }
  75% {
    border-width: calc(60px / 23.33);
  }
  100% {
    border-width: calc(60px / 7);
  }
}
</style>
