<!--
 * 歌词文本填充
 *
 * @from 抖音 https://www.douyin.com/video/7194055229719973154
 * @author Junpeng.Li
 * @date 2023-06-07 17:16
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <!-- title的文本要与显示的文本保持一致 -->
    <div class="content" title="HTML CSS JS">HTML CSS JS</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;

  .content {
    color: #fff;
    margin: auto;
    font-size: 70px;
    font-weight: bold;
    position: relative;

    &::before {
      content: attr(title);
      color: #06ee99;
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      white-space: nowrap;
      overflow: hidden;

      /* 右侧的光标效果，不想要的话就删掉代码 */
      border-right: 5px solid #06ee99;
      animation: fill-animate 8s linear infinite;
      filter: drop-shadow(0 0 50px #06ee99);
    }
  }

  @keyframes fill-animate {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
}
</style>
