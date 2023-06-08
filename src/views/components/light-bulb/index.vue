<!--
 * 会发光的灯泡
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/%E5%8F%91%E5%85%89%E7%81%AF%E6%B3%A1
 * @author Junpeng.Li
 * @date 2023-06-08 17:01
-->
<script setup lang="ts">
import {ref} from 'vue'

const isLight = ref(false)
</script>

<template>
  <div class="container">
    <div class="content">
      <div
        :class="['bulb', isLight && 'light']"
        @click="isLight = !isLight"
      >
        <p>wwwwww</p>
      </div>
      <div class="bottom">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #000;

  .content {
    margin: auto;

    .bulb {
      margin: auto;
      width: 200px;
      height: 200px;
      background: radial-gradient(#000000 50%, #bcbabafc);
      border: 1px solid #d8b80040;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      overflow: hidden;
      color: #686868fc;
      z-index: 5;
      user-select: none;

      p {
        height: 100px;
        border: 2px solid transparent;
        border-left-color: #686868fc;
        border-right-color: #686868fc;
        letter-spacing: -1px;
        line-height: 0.4;
        text-shadow: 0 0 20px #eadd91;
        font-size: 19px;
      }
    }

    .light {
      background: radial-gradient(#cbc6c6 30%, #fff000);
      filter: drop-shadow(0 0 50px #eede82);
      color: #f2f0e6;

      p {
        border-left-color: #d0c89f;
        border-right-color: #d0c89f;
      }
    }

    .bottom {
      width: 80px;
      height: 60px;
      background: #7d7c7c;
      margin: -10px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 9;
      position: relative;

      .line {
        flex-shrink: 0;
        width: 105%;
        height: 5px;
        border-radius: 5px;
        background-color: #9a9191;
        margin: 5px 0;
        transform: rotate(-5deg);
      }

      .bar {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%);
        width: 15px;
        height: 120%;
        background-color: #7d7c7c;
        border-radius: 15px;
        z-index: -1;
      }
    }
  }
}
</style>
