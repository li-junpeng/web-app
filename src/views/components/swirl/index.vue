<!--
 * 漩涡动画
 *
 * @from https://gitee.com/rgbh/htmlcssdemon/tree/master/htmlcss/%E6%97%8B%E6%B6%A1
 * @author Junpeng.Li
 * @date 2023-06-08 17:17
-->
<script setup lang="ts">
import {onMounted, ref} from 'vue'

const contentRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  for (let i = 0; i < 50; i++) {
    let item = document.createElement("div")
    item.className = "item"
    item.style.setProperty("--i", `${((i + 1) * 0.1)}s`)

    contentRef.value?.append(item)
  }
})
</script>

<template>
  <div class="container">
    <div ref="contentRef" class="content"></div>
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

  .content {
    margin: auto;
    width: 500px;
    height: 300px;
    display: flex;
    position: relative;

    :deep(.item) {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      animation: animate 3s linear infinite;
      animation-delay: var(--i);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;

      &::after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: #7ef161;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: 50px;
      }
    }
  }

  @keyframes animate {
    0% {
      opacity: 1;
      transform: rotate(0deg) scale(0.5);
    }

    100% {
      opacity: 0;
      filter: hue-rotate(360deg);
      transform: rotate(360deg) scale(3);
    }
  }
}
</style>
