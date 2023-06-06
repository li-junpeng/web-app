<!--
 * css中animation效果样式
 *
 * @author Junpeng.Li
 * @date 2023-06-06 23:40
-->
<script lang="ts" setup>
const animations = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'steps(8)']
</script>

<template>
  <div class="container">
    <div class="animation-box">
      <div
        v-for="item in animations"
        class="animation-item"
        :style="{
          '--animate-type': item
        }"
      >
        <span>{{ item }}</span>
        <div class="animation-item__bar">
          <div class="animation-item__bar-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$background-color: #0c1022;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $background-color;

  .animation-box {
    .animation-item {
      display: flex;
      color: #fff;
      align-items: center;
      gap: 30px;
      margin-top: 20px;

      span {
        flex: 1;
      }

      .animation-item__bar {
        width: 300px;
        height: 30px;
        border: 1px solid #77602b;
        border-radius: 6px;
        display: flex;
        align-items: center;
        padding: 0 5px;

        .animation-item__bar-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #006d00;
          animation: dot-animate 2s var(--animate-type) infinite;
        }
      }

      @keyframes dot-animate {
        0% {
          transform: translateX(0);
        }

        50% {
          transform: translateX(270px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>
