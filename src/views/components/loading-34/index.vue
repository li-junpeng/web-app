<!--
 * loading-34
 *
 * @from https://codepen.io/aybukeceylan/pen/JjoQrxj
 * @author Junpeng.Li
 * @date 2023-07-11 16-08
-->
<script setup lang="ts">

</script>

<template>
  <div class="page-box">
    <div class="container">
      <div class="box">
        <div class="fading-lines"></div>
      </div>
      <div class="box">
        <div class="dots"></div>
      </div>
      <div class="box">
        <div class="twin-circles"></div>
      </div>
      <div class="box">
        <div class="wave"></div>
      </div>
      <div class="box">
        <div class="circle"></div>
      </div>
      <div class="box">
        <div class="bouncing-bar">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="box">
        <div class="focus"></div>
      </div>
      <div class="box">
        <div class="spinner-dots"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-box {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  --icon-color: rgb(2, 90, 108);
  --icon-color-lighten: rgba(2, 90, 108, 0.25);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 600px;
  height: 300px;
}

.box {
  width: calc(25% - 12px);
  height: 50%;
  background-color: #fff;
  border-radius: 4px;
  margin: 16px 6px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dots {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--icon-color);
  opacity: 1;
  animation: dot-middle 1s infinite linear;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--icon-color);
  }

  &:before {
    left: -28px;
    opacity: 0.25;
    animation: dot-left 1s infinite linear;
  }

  &:after {
    left: 28px;
    opacity: 1;
    animation: dot-right 1s infinite linear;
  }
}

@keyframes dot-middle {
  0% {
    opacity: 1;
  }
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dot-left {
  0% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0.25;
  }
}

@keyframes dot-right {
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}

.twin-circles {
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: var(--icon-color);
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    animation: 2s ease-in-out infinite;
    animation-direction: alternate;
  }

  &:before {
    opacity: 0.7;
    animation-name: moveLeft;
  }

  &:after {
    opacity: 0.5;
    animation-name: moveRight;
  }
}

@keyframes moveLeft {
  25% {
    transform: translatex(-50%);
  }
  50%, 60% {
    transform: translatex(0);
  }
  100% {
    transform: translatex(50%);
  }
}

@keyframes moveRight {
  25% {
    transform: translatex(50%);
  }
  50%, 60% {
    transform: translatex(0);
  }
  100% {
    transform: translatex(-50%);
  }
}

.wave {
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  opacity: 1;

  &:before, &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px var(--icon-color) solid;
    width: 100%;
    height: 100%;
    left: 0px;
  }

  &:before {
    animation: wave-outer 0.6s infinite linear;
    transform: scale(1);
    opacity: 1;
  }

  &:after {
    animation: wave-inner 0.6s infinite linear;
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes wave-outer {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.5);
  }
}

@keyframes wave-inner {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.circle {
  width: 50px;
  height: 50px;
  border: 6px var(--icon-color-lighten) solid;
  border-top: 6px var(--icon-color) solid;
  border-radius: 50%;
  animation: spin-circle .8s infinite linear;
}

@keyframes spin-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.focus {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--icon-color);

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #fff;
    top: -6px;
    left: -6px;
    animation: focus 1s infinite ease-in-out;
  }
}

@keyframes focus {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.bouncing-bar {
  display: flex;
}

.line {
  height: 20px;
  width: 4px;
  background: var(--icon-color);
  margin-right: 4px;
  border-radius: 6px;
  animation: line-bounce 1s infinite ease-in-out,;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    animation-delay: 0.4s;
  }
}

@keyframes line-bounce {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2);
  }
  40% {
    transform: scale(1);
  }
}

.spinner-dots {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--icon-color);
  opacity: 1;
  transform-origin: 50% 50%;
  animation: spin-dot 1s infinite linear;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--icon-color);
  }

  &:before {
    left: -28px;
    opacity: 0.25;
  }

  &:after {
    left: 28px;
    opacity: 0.25;
  }
}

@keyframes spin-dot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.fading-lines {
  position: relative;
  background: var(--icon-color);
  width: 4px;
  height: 32px;
  border-radius: 6px;
  animation: jump-load-1 1s ease infinite alternate;
  animation-delay: 0.25s;

  &:before, &:after {
    content: '';
    position: absolute;
    background: var(--icon-color);
    width: 4px;
    height: 32px;
    border-radius: 6px;
    top: 0;
    animation: jump-load-2 1s ease infinite;
    animation-direction: alternate;
  }

  &:before {
    left: -8px;
  }

  &:after {
    left: 8px;
    animation-delay: 0.4s;
  }
}

@keyframes jump-load-1 {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-16px);
  }
}

@keyframes jump-load-2 {
  from {
    transform: translateY(16px);
  }
  to {
    transform: translateY(-16x);
  }
}

@media screen and (max-width: 520px) {
  .box {
    width: calc(50% - 20px);
  }
}
</style>
