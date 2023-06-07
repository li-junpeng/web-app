<!--
 * 下雨
 *
 * @from 抖音 https://www.douyin.com/video/7196215150259604736
 * @author Junpeng.Li
 * @date 2023-06-07 15:02
-->
<script lang="ts">
</script>

<template>
  <div class="container">
    <div class="cloud-box">
      <div class="clouds"></div>
      <div class="rain">
        <span
          v-for="num in 10"
          :style="{
            '--item-index': Math.random()
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background-color: #2b2b2b;
  display: flex;

  .cloud-box {
    width: 320px;
    height: 80px;
    background-color: #b0aaaa;
    border-radius: 50px;
    margin: auto;
    position: relative;

    &:after {
      content: "";
      width: 100%;
      height: 10px;
      background-color: #b0aaaa;
      border-radius: 50%;
      position: absolute;
      bottom: -150px;
    }

    .clouds {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #b0aaaa;
      position: absolute;
      top: -50px;
      left: 50px;

      &:after {
        content: "";
        width: 130px;
        height: 130px;
        background-color: #b0aaaa;
        position: absolute;
        left: 80px;
        top: -30px;
        border-radius: 50%;
      }
    }

    .rain {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%);

      span {
        width: 15px;
        height: 15px;
        transform: scale(0);
        background-color: #fff;
        border-radius: 50%;
        margin: 0 5px;
        animation: rain-animate 2s linear infinite;
        animation-delay: calc(var(--item-index) * 2s);
      }
    }

    @keyframes rain-animate {
      0% {
        transform: translateY(0) scale(0);
      }
      100% {
        transform: translateY(170px) scale(1);
      }
    }
  }

}
</style>
