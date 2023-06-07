<!--
 * 输入框标签动画
 *
 * @from 抖音 https://www.douyin.com/video/7233274262419672375
 * @author Junpeng.Li
 * @date 2023-06-07 16:41
-->
<script lang="ts">

</script>

<template>
  <div class="container">
    <div class="input-box">
      <input type="text" required/>
      <span>用户名</span>
    </div>
    <div class="input-box">
      <input type="text" required/>
      <span>密码</span>
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
  flex-direction: column;
  gap: 10px;
}

.input-box {
  position: relative;
  width: 250px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    outline: none;

    &:valid ~ span,
    &:focus ~ span {
      color: orange;
      transform: translateX(10px) translateY(-7px);
      font-size: .65em;
      padding: 0 10px;
      background-color: #fff;
    }
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    font-size: 1em;
    pointer-events: none;
    color: #ccc;
    transition: all .5s;
  }
}
</style>
