<!--
 * loading - 01
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/loading
 * @author Junpeng.Li
 * @date 2023-06-08 17:37
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="box">
      <span style="--i: 1;"></span>
      <span style="--i: 2;"></span>
      <span style="--i: 3;"></span>
      <span style="--i: 4;"></span>
      <span style="--i: 5;"></span>
      <span style="--i: 6;"></span>
      <span style="--i: 7;"></span>
      <span style="--i: 8;"></span>
      <span style="--i: 9;"></span>
      <span style="--i: 10;"></span>
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
    width: 120px;
    height: 120px;
    position: relative;

    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: rotate(calc(36deg * var(--i)));
      animation: loading-animate infinite 5s linear;

      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 35px;
        height: 35px;
        background-color: #00ff0a;
        border-radius: 50%;
        box-shadow: 0 0 10px #00ff0a,
        0 0 20px #00ff0a,
        0 0 30px #00ff0a,
        0 0 40px #00ff0a,
        0 0 80px #00ff0a;
        animation: color-scale-animate 1s linear infinite;
        animation-delay: calc(.1s * var(--i));
      }
    }
  }

  @keyframes loading-animate {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes color-scale-animate {
    0% {
      transform: scale(1);
    }

    80%, 100% {
      transform: scale(0);
    }
  }
}
</style>
