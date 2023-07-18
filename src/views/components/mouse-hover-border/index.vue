<!--
 * 边框跟随鼠标高亮
 *
 * @author Junpeng.Li
 * @date 2023-07-18 10-36
-->
<script setup lang="ts">
import { onMounted } from 'vue'

defineOptions({
  name: 'MouseHoverBorder'
})

onMounted(() => {
  const container = document.querySelector('.container')
  const cards = document.querySelectorAll('.card')

  container.onmousemove = (e) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    }
  }
})
</script>

<template>
  <div class="body">
    <div class="container">
      <div
        v-for="i in 6"
        :key="i"
        class="card"
      >
        <div class="inner">区域{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  background-color: #141414;
  width: 100%;
  height: 100%;


  .container {
    display: grid;
    margin: 0 auto;
    padding-top: 1em;
    width: 90%;
    color: #f0f0f0;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    text-align: center;

    .card {
      aspect-ratio: 4/3;
      border-radius: 8px;
      background: rgba(255, 255, 255, .1);
      position: relative;
      overflow: hidden;

      .inner {
        position: absolute;
        background-color: #222;
        inset: 2px;
        border-radius: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        left: var(--x, -1000px);
        top: var(--y, -1000px);
        background: radial-gradient(
            closest-side circle,
            rgba(255, 255, 255, .6) 0%,
            transparent
        );
        border-radius: inherit;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
