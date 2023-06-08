<!--
 * 文字融化展开
 *
 * @from https://www.douyin.com/video/7218817965058215205
 * @author Junpeng.Li
 * @date 2023-06-08 22:31
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="box">
      <span class="text">webapp.junpeng.site</span>
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
    background-color: #000;
    filter: contrast(30);

    .text {
      font-size: 100px;
      color: #fff;
      letter-spacing: 0;
      animation: show-up-animate 3s forwards;
    }

    @keyframes show-up-animate {
      from {
        letter-spacing: -50px;
        filter: blur(10px);
      }

      to {
        letter-spacing: 10px;
        filter: blur(2px);
      }
    }
  }
}
</style>
