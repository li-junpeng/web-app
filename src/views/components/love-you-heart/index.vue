<!--
 * 会跳动的爱你的心
 *
 * @from 抖音：https://www.douyin.com/video/7238814874854362425
 * @author Junpeng.Li
 * @date 2023-06-06 22:52
-->
<script lang="ts"></script>

<template>
  <div class="container">
    <div class="heart-box"></div>
  </div>
</template>

<style scoped lang="scss">
$heart-size: 200px;
$heart-color: #f20044;
$heart-shadow: -10px 10px 90px $heart-color;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #fffdfe, #d63fb2);

  .heart-box {
    width: $heart-size;
    height: $heart-size;
    background-color: $heart-color;
    position: relative;
    transform: rotate(-45deg);
    box-shadow: $heart-shadow;
    animation: heart-bounce .8s linear infinite;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: $heart-size;
      height: $heart-size;
      background-color: $heart-color;
      border-radius: 50%;
      box-shadow: $heart-shadow;
    }

    &::before {
      top: -50%;
    }

    &::after {
      right: -50%;
    }

    @keyframes heart-bounce {
      0% {
        transform: rotate(-45deg) scale(1.07);
      }

      80% {
        transform: rotate(-45deg) scale(1);
      }

      100% {
        transform: rotate(-45deg) scale(.8);
      }
    }
  }
}
</style>
