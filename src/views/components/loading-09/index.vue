<!--
 * loading-09
 *
 * @from https://epic-spinners.epicmax.co/
 * @author Junpeng.Li
 * @date 2023-07-11 11-53
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flower-spinner">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../base.scss";

$time: 2.5s;

.flower-spinner, .flower-spinner * {
  box-sizing: border-box;
}

.flower-spinner {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.flower-spinner .dots-container {
  height: calc(70px / 7);
  width: calc(70px / 7);
}

.flower-spinner .smaller-dot {
  background: #ff1d5e;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  animation: flower-spinner-smaller-dot-animation $time 0s infinite both;
}

.flower-spinner .bigger-dot {
  background: #ff1d5e;
  height: 100%;
  width: 100%;
  padding: 10%;
  border-radius: 50%;
  animation: flower-spinner-bigger-dot-animation $time 0s infinite both;
}

@keyframes flower-spinner-bigger-dot-animation {
  0%, 100% {
    box-shadow: rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0;
  }

  50% {
    transform: rotate(180deg);
  }

  25%, 75% {
    box-shadow: rgb(255, 29, 94) 26px 0 0,
    rgb(255, 29, 94) -26px 0px 0px,
    rgb(255, 29, 94) 0px 26px 0px,
    rgb(255, 29, 94) 0px -26px 0px,
    rgb(255, 29, 94) 19px -19px 0px,
    rgb(255, 29, 94) 19px 19px 0px,
    rgb(255, 29, 94) -19px -19px 0px,
    rgb(255, 29, 94) -19px 19px 0px;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0;
  }
}

@keyframes flower-spinner-smaller-dot-animation {
  0%, 100% {
    box-shadow: rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0;
  }

  25%, 75% {
    box-shadow: rgb(255, 29, 94) 14px 0 0,
    rgb(255, 29, 94) -14px 0px 0px,
    rgb(255, 29, 94) 0px 14px 0px,
    rgb(255, 29, 94) 0px -14px 0px,
    rgb(255, 29, 94) 10px -10px 0px,
    rgb(255, 29, 94) 10px 10px 0px,
    rgb(255, 29, 94) -10px -10px 0px,
    rgb(255, 29, 94) -10px 10px 0px;
  }

  100% {
    box-shadow: rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0,
    rgb(255, 29, 94) 0 0 0;
  }
}
</style>
