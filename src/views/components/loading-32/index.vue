<!--
 * loading-32
 *
 * @from https://codepen.io/viduthalai1947/pen/nyrLee
 * @author Junpeng.Li
 * @date 2023-07-11 15-54
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="timer"></div>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

$size: 100px;

.timer {
  width: $size;
  height: $size;
  background-color: transparent;
  box-shadow: inset 0 0 0 2px #fff;
  border-radius: 50%;
  position: relative;
  margin: 38px auto;
}

.timer:after,
.timer:before {
  position: absolute;
  content: "";
  background-color: #fff;
}

.timer:after {
  width: 40px;
  height: 2px;
  top: 48px;
  left: 48px;
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
  -webkit-animation: minhand 2s linear infinite;
  -moz-animation: minhand 2s linear infinite;
  animation: minhand 2s linear infinite;
}

.timer:before {
  width: 30px;
  height: 2px;
  top: 48px;
  left: 48px;
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
  -webkit-animation: hrhand 8s linear infinite;
  -moz-animation: hrhand 8s linear infinite;
  animation: hrhand 8s linear infinite;
}

@-webkit-keyframes minhand {
  0% {
    -webkit-transform: rotate(0deg)
  }
  100% {
    -webkit-transform: rotate(360deg)
  }
}

@-moz-keyframes minhand {
  0% {
    -moz-transform: rotate(0deg)
  }
  100% {
    -moz-transform: rotate(360deg)
  }
}

@keyframes minhand {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

@-webkit-keyframes hrhand {
  0% {
    -webkit-transform: rotate(0deg)
  }
  100% {
    -webkit-transform: rotate(360deg)
  }
}

@-moz-keyframes hrhand {
  0% {
    -moz-transform: rotate(0deg)
  }
  100% {
    -moz-transform: rotate(360deg)
  }
}

@keyframes hrhand {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

</style>
