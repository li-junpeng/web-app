<!--
 * 旋转菜单按钮
 *
 * @from 抖音 https://www.douyin.com/video/7238040415281106236
 *
 * @author Junpeng.Li
 * @date 2023-06-06 23:07
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="menu-box">
      <div class="menu-btn">
        <i class="iconfont icon-add"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 0">
        <i class="iconfont icon-home"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 1">
        <i class="iconfont icon-more"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 2">
        <i class="iconfont icon-gift"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 3">
        <i class="iconfont icon-setting"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 4">
        <i class="iconfont icon-message"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 5">
        <i class="iconfont icon-cart"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 6">
        <i class="iconfont icon-money"></i>
      </div>
      <div class="menu-child-btn" style="--menu-index: 7">
        <i class="iconfont icon-star"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://at.alicdn.com/t/c/font_4090357_z2qpnic06um.css");

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, deeppink, skyblue);

  .menu-box {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu-btn {
      position: absolute;
      z-index: 1000;
      width: 60px;
      height: 60px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .15);
      cursor: pointer;
      transition: all 1.25s;

      .iconfont {
        font-size: 32px;
      }
    }

    .menu-child-btn {
      width: 40px;
      height: 40px;
      background-color: #fff;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .15);
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;

      /* 关键代码，绕正中心旋转，添加动画延迟 */
      transform-origin: 100px;
      transition-delay: calc(.1s * var(--menu-index));
      transition: .5s;
      /* 默认8个图标居中显示 */
      transform: rotate(0deg) translateX(80px);

      .iconfont {
        /* 保证图标是正常显示的（不设置的话部分图标是歪的） */
        transform: rotate(calc(360deg / -8 * var(--menu-index)));
      }
    }

    /* hover的时候，动态旋转图标 */
    &:hover .menu-child-btn {
      transform: rotate(calc(360deg / 8 * var(--menu-index)));
    }

    /* 中心按钮，辅助旋转效果 */
    &:hover .menu-btn {
      transform: rotate(315deg);
    }
  }
}
</style>
