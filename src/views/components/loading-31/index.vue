<!--
 * loading-31
 *
 * @from https://codepen.io/viduthalai1947/pen/nyrLee
 * @author Junpeng.Li
 * @date 2023-07-11 15-48
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="battery"></div>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

.battery {
  width: 128px;
  /* height = width / 2 */
  height: 64px;
  border: 1px #fff solid;
  border-radius: 2px;
  position: relative;
  -webkit-animation: charge 5s linear infinite;
  -moz-animation: charge 5s linear infinite;
  animation: charge 5s linear infinite;
  top: 40px;
  margin: 0 auto;
}

.battery:after {
  width: 12px;
  height: 17px;
  background-color: #fff;
  border-radius: 0 6px 6px 0;
  position: absolute;
  content: "";
  top: 23px;
  right: -12px;
}

@-webkit-keyframes charge {
  0% {
    box-shadow: inset 0 0 0 green;
  }
  100% {
    /* 126 = width(128px) - border-width(2px) */
    box-shadow: inset 126px 0 0 green;
  }
}

@-moz-keyframes charge {
  0% {
    box-shadow: inset 0 0 0 green;
  }
  100% {
    /* 126 = width(128px) - border-width(2px) */
    box-shadow: inset 126px 0 0 green;
  }
}

@keyframes charge {
  0% {
    box-shadow: inset 0 0 0 green;
  }
  100% {
    /* 126 = width(128px) - border-width(2px) */
    box-shadow: inset 126px 0 0 green;
  }
}
</style>
