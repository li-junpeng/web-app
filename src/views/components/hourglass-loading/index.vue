<!--
 * 沙漏加载动画
 *
 * @from 抖音 https://www.douyin.com/video/7200840951013707063
 * @author Junpeng.Li
 * @date 2023-06-07 16:16
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="loading-box">
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  .loading-box {
    width: 86px;
    height: 196px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    animation: rotating 2s linear infinite;

    /* 沙子往下流的效果 */
    &::after {
      content: "";
      width: 5px;
      height: 85px;
      background-color: #cabbe9;
      position: absolute;
      top: 14px;
      animation: flow 2s linear infinite;
    }

    .top,
    .bottom {
      width: 70px;
      height: 70px;
      border-style: solid;
      border-color: #dcdcdc;
      border-width: 4px 4px 12px 12px;
      border-radius: 50% 100% 50% 30%;
      position: relative;
      overflow: hidden;

      /* 沙漏里的沙子 */
      &::before {
        content: "";
        position: absolute;
        left: -15px;
        width: inherit;
        height: inherit;
        background-color: #cabbe9;
        animation: 2s linear infinite;
      }
    }

    .top {
      transform: rotate(-45deg);

      &::before {
        border-radius: 0 100% 0 0;
        animation-name: drop-sand;
      }
    }

    .bottom {
      transform: rotate(135deg);

      &::before {
        border-radius: 0 0 0 25%;
        transform: translate(50px, -50px);
        animation-name: fill-sand;
      }
    }
  }

  @keyframes rotating {
    0%, 90% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes drop-sand {
    to {
      transform: translate(-50px, 50px);
    }
  }

  @keyframes fill-sand {
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes flow {
    10%, 100% {
      transform: translateY(64px);
    }
  }
}
</style>
