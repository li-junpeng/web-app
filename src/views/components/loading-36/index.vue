<!--
 * loading-36
 *
 * @from https://codepen.io/alphardex/pen/abzaxBB
 * @author Junpeng.Li
 * @date 2023-07-11 16:15
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

.loading {
  --loading-width: 45px;
  position: relative;
  width: var(--loading-width);
  height: var(--loading-width);
  transform: rotate(75deg);

  .bar {
    position: absolute;
    animation: 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;

    &:nth-child(1) {
      bottom: calc(var(--loading-width) / 3);
      width: calc(var(--loading-width) / 3);
      height: 100%;
      background: #0984e3;
      transform: scaleY(0);
      transform-origin: bottom;
      animation-name: slide-bottom-top;
    }

    &:nth-child(2) {
      left: calc(var(--loading-width) / 3);
      width: 100%;
      height: calc(var(--loading-width) / 3);
      background: #d63031;
      transform: scaleX(0);
      transform-origin: left;
      animation-name: slide-left-right;
    }

    &:nth-child(3) {
      top: calc(var(--loading-width) / 3);
      right: 0;
      width: calc(var(--loading-width) / 3);
      height: 100%;
      background: #fdcb6e;
      transform: scaleY(0);
      transform-origin: top;
      animation-name: slide-top-bottom;
    }

    &:nth-child(4) {
      right: calc(var(--loading-width) / 3);
      bottom: 0;
      width: 100%;
      height: calc(var(--loading-width) / 3);
      background: #00b894;
      transform: scaleX(0);
      transform-origin: right;
      animation-name: slide-right-left;
    }
  }
}

@each $start, $end, $transform in (bottom, top, scaleY(1)),
  (left, right, scaleX(1)), (top, bottom, scaleY(1)), (right, left, scaleX(1)) {
  @keyframes slide-#{$start}-#{$end} {
    50% {
      transform: #{$transform};
      transform-origin: #{$start};
    }

    50.1% {
      transform-origin: #{$end};
    }

    to {
      transform-origin: #{$end};
    }
  }
}

</style>
