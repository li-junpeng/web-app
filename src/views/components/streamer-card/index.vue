<!--
 * 流光卡片
 * <br>
 * 来源：抖音: https://www.douyin.com/video/7240724133871504698
 * @author Junpeng.Li
 * @date 2023-06-06 22:19
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="card-box">
      <span class="mask-box"></span>
      <h2 class="content-box">01</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
$background-color: #0c1022;
$flow-width: 500px;
$flow-height: 500px;
$flow-animation: flow-animate 4s linear infinite;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $background-color;

  .card-box {
    position: relative;
    width: 300px;
    height: 400px;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      width: $flow-width;
      height: $flow-height;
      background-image: conic-gradient(transparent, transparent, transparent, #00ccff);
      animation: $flow-animation;
    }

    &::after {
      content: '';
      position: absolute;
      width: $flow-width;
      height: $flow-height;
      background-image: conic-gradient(transparent, transparent, transparent, #de44d4);
      animation: $flow-animation;
      animation-delay: -2s;
    }

    .mask-box {
      position: absolute;
      /* inset: 5px === top: 5px;left: 5px;right: 5px;bottom: 5px; */
      inset: 5px;
      border-radius: 16px;
      background-color: $background-color;
      z-index: 1;
    }

    .content-box {
      position: relative;
      z-index: 2;
      color: #fff;
      font-size: 160px;
    }

    @keyframes flow-animate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
