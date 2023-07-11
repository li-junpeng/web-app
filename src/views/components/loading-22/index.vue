<!--
 * loading-22
 *
 * @from https://cssfx.netlify.app/
 * @author Junpeng.Li
 * @date 2023-07-11 14-29
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <svg viewBox="0 0 50 50">
      <circle class="ring" cx="25" cy="25" r="20"></circle>
      <circle class="ball" cx="25" cy="5" r="3.5"></circle>
    </svg>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: hsla(341, 97%, 59%, 0.3);
  stroke-width: 2;
}

.ball {
  fill: #fc2f70;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
