<!--
 * 菜单按钮动画
 *
 * @from 抖音 https://www.douyin.com/video/7219573491320786180
 * @author Junpeng.Li
 * @date 2023-06-07 21:52
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="line-01"></div>
      <div class="line-02"></div>
      <div class="line-03"></div>
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

  .content {
    width: 80px;
    height: 70px;
    padding-left: 10px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    div {
      height: 5px;
      border-radius: 5px;
      background-color: #2e86de;
      margin-top: 15px;
      transition: all .5s;
    }

    .line-01 {
      width: 60px;
    }

    .line-02 {
      width: 40px;
    }

    .line-03 {
      width: 20px;
    }

    &:hover .line-01 {
      transform: translateY(17px) rotate(45deg);
    }

    &:hover .line-02 {
      transform: translate(100%);
      opacity: 0;
    }

    &:hover .line-03 {
      transform: translateY(-25px) rotate(-45deg);
      width: 60px;
    }
  }
}
</style>
