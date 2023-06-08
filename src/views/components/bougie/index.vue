<!--
 * 蜡烛
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/%E8%9C%A1%E7%83%9B
 * @author Junpeng.Li
 * @date 2023-06-08 17:31
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="candle">
      <div class="fire fire1"></div>
      <div class="fire fire2"></div>
      <div class="fire fire3"></div>
      <div class="body"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .candle {
    width: 100px;
    height: 100px;
    position: relative;

    .fire {
      position: absolute;
      bottom: 0;
      border-radius: 0 100%;
      animation: animate 2s linear infinite;
      transform-origin: bottom right;
      filter: drop-shadow(0 0 50px #fff);

      &.fire1 {
        width: 50px;
        height: 100px;
        background: #f8ddab;
      }

      &.fire2 {
        width: 25px;
        height: 60px;
        background-color: #fabf8d;
        left: 25px
      }

      &.fire3 {
        width: 15px;
        height: 25px;
        background-color: #faa79e;
        left: 35px;
      }
    }

    .body {
      width: 50px;
      height: 200px;
      border-radius: 10px 10px 0 0;
      background-color: #fff;
      position: absolute;
      bottom: -200px;
      left: 20px;
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg) scale(1.1);
    }

    50% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(0deg) scale(1.1);
    }
  }
}
</style>
