<!--
 * 手机充电
 *
 * @from 抖音 https://www.douyin.com/video/7200613684157189432
 * @author Junpeng.Li
 * @date 2023-06-07 15:26
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="box">
      <div class="number">98.6%</div>
      <div class="contrast">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble-home"></div>
        <div class="circle"></div>
      </div>
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

  .box {
    width: 800px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .number {
      color: #fff;
      position: absolute;
      z-index: 1;
      width: 200px;
      height: 200px;
      line-height: 200px;
      text-align: center;
      font-size: 30px;
      left: 50%;
      top: 25%;
      margin-left: -100px;
    }

    .contrast {
      width: 100%;
      height: 100%;
      background-color: #000;
      position: relative;
      /* 对比度 */
      filter: contrast(15);
      animation: hue-rotate 5s linear infinite;

      .circle {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 20%;
        left: 50%;
        margin-left: -150px;
        filter: blur(8px);
        animation: circle-rotate 5s linear infinite;

        &::before {
          content: "";
          width: 200px;
          height: 200px;
          background-color: cyan;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 42% 38% 63% 49% / 45%;
        }

        /* 中心圆 */
        &::after {
          content: "";
          width: 178px;
          height: 178px;
          background-color: #000;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }

      .bubble-home {
        width: 100px;
        height: 40px;
        background-color: cyan;
        position: absolute;
        left: 44%;
        bottom: 0;
        margin-right: -50px;
        border-radius: 100px 100px 0 0;
        filter: blur(8px);
      }

      .bubble {
        width: 20px;
        height: 20px;
        background-color: cyan;
        border-radius: 100%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        z-index: 2;
        filter: blur(5px);
        animation: bubble-up 5s ease-in-out infinite;

        &:nth-child(1) {
          width: 20px;
          height: 20px;
          left: 50%;
          animation-delay: 1s;
          animation-duration: 5s;
        }

        &:nth-child(2) {
          width: 22px;
          height: 22px;
          left: 49%;
          animation-delay: 4s;
          animation-duration: 2s;
        }

        &:nth-child(3) {
          width: 24px;
          height: 24px;
          left: 47%;
          animation-delay: 3s;
          animation-duration: 3s;
        }

        &:nth-child(4) {
          width: 18px;
          height: 18px;
          left: 53%;
          animation-delay: 3s;
          animation-duration: 4s;
        }

        &:nth-child(5) {
          width: 26px;
          height: 26px;
          left: 51%;
          animation-delay: 4s;
          animation-duration: 5s;
        }
      }
    }

    @keyframes hue-rotate {
      0% {
        filter: contrast(15) hue-rotate(0);
      }
      100% {
        filter: contrast(15) hue-rotate(360deg);
      }
    }

    @keyframes circle-rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes bubble-up {
      0% {
        bottom: 0;
      }
      100% {
        bottom: calc(80% - 260px);
      }
    }
  }
}
</style>
