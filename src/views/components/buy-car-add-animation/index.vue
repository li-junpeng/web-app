<!--
 * 购物车添加商品时的抛物线动画
 *
 * @from 抖音 https://www.douyin.com/video/7187398068252331322
 * @author Junpeng.Li
 * @date 2023-06-07 22:09
-->
<script setup lang="ts">
import {onMounted, Ref, ref} from 'vue'

const containerRef: Ref<HTMLDivElement | null> = ref(null)
const carRef: Ref<HTMLDivElement | null> = ref(null)
const btnRef: Ref<HTMLButtonElement | null> = ref(null)

// + 号按钮的尺寸（宽度和高度）
const PLUS_SIZE = 30

const onPlusProduct = () => {
  // 创建 + 号按钮
  const div = document.createElement('div')
  div.className = 'plus'
  div.innerHTML = `<div class="plus-child">+</div>`
  containerRef.value?.appendChild(div)

  // 计算 + 号按钮出现的位置
  const btnRect = btnRef.value?.getBoundingClientRect()
  const plusLeft = btnRect.left + btnRect.width / 2 - PLUS_SIZE / 2
  const plusTop = btnRect.top - PLUS_SIZE

  // 计算 + 号按钮要移动到的目标位置
  const carRect = carRef.value?.getBoundingClientRect()
  const plusTargetX = carRect.left + carRect.width / 2 - PLUS_SIZE / 2 - plusLeft
  const plusTargetY = carRect.top - PLUS_SIZE - plusTop

  div.style.setProperty('--btn-size', `${PLUS_SIZE}px`)
  div.style.setProperty('--left', `${plusLeft}px`)
  div.style.setProperty('--top', `${plusTop}px`)
  div.style.setProperty('--target-x', `${plusTargetX}px`)
  div.style.setProperty('--target-y', `${plusTargetY}px`)

  // 动画结束之后移除div
  div.addEventListener('animationend', () => {
    div.remove()
  })
}

onMounted(() => {

})
</script>

<template>
  <div ref="containerRef" class="container">
    <div ref="carRef" class="car">
      <i>
        <svg t="1686149505969" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1504" width="64" height="64">
          <path
            d="M352.972955 831.860239c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C416.962204 860.414581 388.407862 831.860239 352.972955 831.860239L352.972955 831.860239z"
            fill="#ffffff" p-id="1505"></path>
          <path
            d="M801.069713 831.860239c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C865.058962 860.414581 836.332605 831.860239 801.069713 831.860239L801.069713 831.860239z"
            fill="#ffffff" p-id="1506"></path>
          <path
            d="M937.304888 188.527465C920.963548 169.949941 898.429699 159.973123 874.003696 159.973123L232.907106 159.973123l-2.236183-13.073072c-5.676466-46.615824-46.615824-82.910801-93.231648-82.910801L97.015958 63.989249c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l40.251302 0c13.933143 0 28.210314 12.729044 29.930455 28.210314l30.96254 178.550647 54.356459 382.043339c5.676466 46.615824 46.099782 83.082815 92.371577 83.082815l520.17067 0c17.717453 0 31.994625-14.277171 31.994625-31.994625s-14.277171-31.994625-31.994625-31.994625L344.716278 735.876365c-13.589115 0-27.006215-12.55703-28.898371-27.522258l-5.332437-37.327062 507.61364-31.306568c46.099782 0 86.695112-36.466991 92.027549-81.362674L960.870821 270.062154C964.483118 239.271628 956.054426 209.513187 937.304888 188.527465z"
            fill="#ffffff" p-id="1507"></path>
        </svg>
      </i>
    </div>
    <button ref="btnRef" class="btn" @click="onPlusProduct">Click Me!</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;

  .car {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: #4184de;
    border-radius: 50%;
    left: 30%;
    bottom: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      zoom: .5;
    }
  }

  .btn {
    padding: 10px 15px;
    border: none;
    background-color: #4184de;
    color: #fff;
    border-radius: 3px;
    position: absolute;
    right: 50%;
    top: 20%;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  :deep(.plus) {
    --animation-time: .3s;

    width: var(--btn-size);
    height: var(--btn-size);
    border-radius: 50%;
    position: absolute;
    top: var(--top);
    left: var(--left);
    animation: moveY var(--animation-time) cubic-bezier(.5, -.5, 1, 1);

    .plus-child {
      width: 100%;
      height: 100%;
      background-color: #4184de;
      border-radius: 50%;
      position: absolute;
      animation: moveX var(--animation-time) linear;
      color: #fff;
      font-size: 25px;
      text-align: center;
      line-height: 28px;
    }
  }

  @keyframes moveY {
    to {
      transform: translateY(var(--target-y));
    }
  }

  @keyframes moveX {
    to {
      transform: translateX(var(--target-x));
    }
  }
}
</style>
