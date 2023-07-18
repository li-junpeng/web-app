<!--
 * loading-group-02
 *
 * @from    https://whirl.netlify.app/
 * @github  https://github.com/jh3y/whirl
 * @author Junpeng.Li
 * @date 2023-07-18 14-47
-->
<script setup lang="ts">
defineOptions({
  name: 'LoadingGroup02'
})
</script>

<template>
  <div class="container">
    <div class="loading-box loading-01">
      <div class="scale-dots"></div>
    </div>
    <div class="loading-box loading-02">
      <div class="scale-dots-offset"></div>
    </div>
    <div class="loading-box loading-03">
      <div class="scan"></div>
    </div>
    <div class="loading-box loading-04">
      <div class="siblings"></div>
    </div>
    <div class="loading-box loading-05">
      <div class="side-to-side"></div>
    </div>
    <div class="loading-box loading-06">
      <div class="sliding-tiles"></div>
    </div>
    <div class="loading-box loading-07">
      <div class="snake"></div>
    </div>
    <div class="loading-box loading-08">
      <div class="spinning-coin"></div>
    </div>
    <div class="loading-box loading-09">
      <div class="spinning-coin-fall"></div>
    </div>
    <div class="loading-box loading-10">
      <div class="spinning-dots"></div>
    </div>
    <div class="loading-box loading-11">
      <div class="spinning-dots-scaled"></div>
    </div>
    <div class="loading-box loading-12">
      <div class="split"></div>
    </div>
    <div class="loading-box loading-13">
      <div class="square-of-dots"></div>
    </div>
    <div class="loading-box loading-14">
      <div class="stop-and-go"></div>
    </div>
    <div class="loading-box loading-15">
      <div class="swap"></div>
    </div>
    <div class="loading-box loading-16">
      <div class="throw"></div>
    </div>
    <div class="loading-box loading-17">
      <div class="traditional"></div>
    </div>
    <div class="loading-box loading-18">
      <div class="trigger"></div>
    </div>
    <div class="loading-box loading-19">
      <div class="tumble"></div>
    </div>
    <div class="loading-box loading-20">
      <div class="whirl"></div>
    </div>
    <div class="loading-box loading-21">
      <div class="wind-up"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow: auto;

  --primary: #fafafa;
  --secondary: #f9690e;

  .loading-box {
    width: 200px;
    height: 200px;
    background-color: #2a2a2a;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    position: relative;
  }

  .loading-01 {
    @-webkit-keyframes scale-dots {
      0% {
        -webkit-transform: scale(0) translateX(-40px);
        transform: scale(0) translateX(-40px);
      }
      10% {
        -webkit-transform: scale(1) translateX(-40px);
        transform: scale(1) translateX(-40px);
      }
      20% {
        -webkit-transform: scale(0) translateX(-40px);
        transform: scale(0) translateX(-40px);
      }
      30% {
        -webkit-transform: scale(0) translateX(0);
        transform: scale(0) translateX(0);
      }
      40% {
        -webkit-transform: scale(1.25) translateX(0);
        transform: scale(1.25) translateX(0);
      }
      50% {
        -webkit-transform: scale(0) translateX(0);
        transform: scale(0) translateX(0);
      }
      60% {
        -webkit-transform: scale(0) translateX(40px);
        transform: scale(0) translateX(40px);
      }
      70% {
        -webkit-transform: scale(1) translateX(40px);
        transform: scale(1) translateX(40px);
      }
      80%,
      100% {
        -webkit-transform: scale(0) translateX(40px);
        transform: scale(0) translateX(40px);
      }
    }
    @keyframes scale-dots {
      0% {
        -webkit-transform: scale(0) translateX(-40px);
        transform: scale(0) translateX(-40px);
      }
      10% {
        -webkit-transform: scale(1) translateX(-40px);
        transform: scale(1) translateX(-40px);
      }
      20% {
        -webkit-transform: scale(0) translateX(-40px);
        transform: scale(0) translateX(-40px);
      }
      30% {
        -webkit-transform: scale(0) translateX(0);
        transform: scale(0) translateX(0);
      }
      40% {
        -webkit-transform: scale(1.25) translateX(0);
        transform: scale(1.25) translateX(0);
      }
      50% {
        -webkit-transform: scale(0) translateX(0);
        transform: scale(0) translateX(0);
      }
      60% {
        -webkit-transform: scale(0) translateX(40px);
        transform: scale(0) translateX(40px);
      }
      70% {
        -webkit-transform: scale(1) translateX(40px);
        transform: scale(1) translateX(40px);
      }
      80%,
      100% {
        -webkit-transform: scale(0) translateX(40px);
        transform: scale(0) translateX(40px);
      }
    }

    .scale-dots {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .scale-dots:before {
      -webkit-animation: scale-dots 3s infinite;
      animation: scale-dots 3s infinite;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      height: 30px;
      width: 30px;
    }
  }

  .loading-02 {
    @-webkit-keyframes scale-dots-offset {
      0% {
        -webkit-transform: translateX(-40px) scale(0);
        transform: translateX(-40px) scale(0);
      }
      10% {
        -webkit-transform: translateX(-40px) scale(1);
        transform: translateX(-40px) scale(1);
      }
      20% {
        -webkit-transform: translateX(-40px) scale(0);
        transform: translateX(-40px) scale(0);
      }
      30% {
        -webkit-transform: translateX(0) scale(0);
        transform: translateX(0) scale(0);
      }
      40% {
        -webkit-transform: translateX(0) scale(1);
        transform: translateX(0) scale(1);
      }
      50% {
        -webkit-transform: translateX(0) scale(0);
        transform: translateX(0) scale(0);
      }
      60% {
        -webkit-transform: translateX(40px) scale(0);
        transform: translateX(40px) scale(0);
      }
      70% {
        -webkit-transform: translateX(40px) scale(1);
        transform: translateX(40px) scale(1);
      }
      80%,
      100% {
        -webkit-transform: translateX(40px) scale(0);
        transform: translateX(40px) scale(0);
      }
    }
    @keyframes scale-dots-offset {
      0% {
        -webkit-transform: translateX(-40px) scale(0);
        transform: translateX(-40px) scale(0);
      }
      10% {
        -webkit-transform: translateX(-40px) scale(1);
        transform: translateX(-40px) scale(1);
      }
      20% {
        -webkit-transform: translateX(-40px) scale(0);
        transform: translateX(-40px) scale(0);
      }
      30% {
        -webkit-transform: translateX(0) scale(0);
        transform: translateX(0) scale(0);
      }
      40% {
        -webkit-transform: translateX(0) scale(1);
        transform: translateX(0) scale(1);
      }
      50% {
        -webkit-transform: translateX(0) scale(0);
        transform: translateX(0) scale(0);
      }
      60% {
        -webkit-transform: translateX(40px) scale(0);
        transform: translateX(40px) scale(0);
      }
      70% {
        -webkit-transform: translateX(40px) scale(1);
        transform: translateX(40px) scale(1);
      }
      80%,
      100% {
        -webkit-transform: translateX(40px) scale(0);
        transform: translateX(40px) scale(0);
      }
    }

    .scale-dots-offset {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .scale-dots-offset:before {
      -webkit-animation: scale-dots-offset 3s infinite;
      animation: scale-dots-offset 3s infinite;
      background: var(--primary);
      border-radius: 100%;
      content: '';
      height: 30px;
      width: 30px;
    }
  }

  .loading-03 {
    @-webkit-keyframes scan {
      0% {
        background-position: -5px 0;
      }
      50% {
        background-position: 40px 0;
      }
      100% {
        background-position: 40px 50px;
      }
    }
    @keyframes scan {
      0% {
        background-position: -5px 0;
      }
      50% {
        background-position: 40px 0;
      }
      100% {
        background-position: 40px 50px;
      }
    }

    .scan {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .scan:before {
      -webkit-animation: scan 1s infinite;
      animation: scan 1s infinite;
      background: -webkit-gradient(linear, left top, right top, color-stop(20%, var(--primary)), color-stop(20%, transparent), to(transparent)), -webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--primary)), color-stop(20%, transparent), to(transparent));
      background: linear-gradient(90deg, var(--primary) 20%, transparent 20%, transparent), linear-gradient(0deg, var(--primary) 20%, transparent 20%, transparent);
      background-size: 50px 50px;
      border: 5px solid var(--primary);
      content: '';
      height: 50px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 50px;
    }
  }

  .loading-04 {
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .siblings {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .siblings:after, .siblings:before {
      border: 6px solid var(--primary);
      border-radius: 100%;
      content: '';
    }

    .siblings:after {
      -webkit-animation: spin 1.5s infinite linear;
      animation: spin 1.5s infinite linear;
      border-right-color: transparent;
      height: 50px;
      width: 50px;
    }

    .siblings:before {
      animation: spin .75s infinite linear reverse;
      border-left-color: transparent;
      height: 25px;
      width: 25px;
    }
  }

  .loading-05 {
    @-webkit-keyframes side-to-side {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-150%);
        transform: translateX(-150%);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(150%);
        transform: translateX(150%);
      }
    }
    @keyframes side-to-side {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-150%);
        transform: translateX(-150%);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(150%);
        transform: translateX(150%);
      }
    }

    .side-to-side {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .side-to-side:before {
      -webkit-animation: side-to-side .5s infinite alternate ease-in-out;
      animation: side-to-side .5s infinite alternate ease-in-out;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      height: 30px;
      width: 30px;
    }
  }

  .loading-06 {
    @-webkit-keyframes sliding-tile {
      0% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
      25% {
        -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
        transform: translate(-50%, -50%) translate(50%, -50%);
      }
      50% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
      75% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
        transform: translate(-50%, -50%) translate(-50%, 50%);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
    }
    @keyframes sliding-tile {
      0% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
      25% {
        -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
        transform: translate(-50%, -50%) translate(50%, -50%);
      }
      50% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
      75% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
        transform: translate(-50%, -50%) translate(-50%, 50%);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
    }

    .sliding-tiles:after, .sliding-tiles:before {
      -webkit-animation: sliding-tile 1.25s infinite linear;
      animation: sliding-tile 1.25s infinite linear;
      background-color: var(--primary);
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: 20px;
      width: 20px;
    }

    .sliding-tiles:after {
      -webkit-animation: sliding-tile 1.25s -0.625s infinite linear;
      animation: sliding-tile 1.25s -0.625s infinite linear;
    }
  }

  .loading-07 {
    .snake:after {
      -webkit-animation: snake 2s infinite both ease;
      animation: snake 2s infinite both ease;
      border-radius: 100%;
      content: '';
      height: 10px;
      left: 50%;
      margin-left: -32.5px;
      margin-top: -5px;
      position: absolute;
      top: 50%;
      width: 10px;
    }

    @-webkit-keyframes snake {
      0%,
      5% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      10% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      15% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      20% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      25% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      30% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      35% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      40% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      45% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 -10px var(--primary);
      }
      50% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      55% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      65% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      70% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      75% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      85% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      90% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 0 var(--primary);
      }
      95%,
      100% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
    }

    @keyframes snake {
      0%,
      5% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      10% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      15% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      20% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      25% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      30% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      35% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      40% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
      45% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 -10px var(--primary);
      }
      50% {
        -webkit-box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 0 var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      55% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      65% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 0 var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      70% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      75% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 0 var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 0 var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      85% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 0 var(--primary), 30px 0 0 0 var(--primary);
      }
      90% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 0 var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 0 var(--primary);
      }
      95%,
      100% {
        -webkit-box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
        box-shadow: 15px 15px 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 15px -15px 0 -10px var(--primary), 15px 0 0 -10px var(--primary), 30px 0 0 -10px var(--primary);
      }
    }
  }

  .loading-08 {
    @-webkit-keyframes spinning-coin {
      0% {
        -webkit-transform: perspective(160px) rotateY(0deg);
        transform: perspective(160px) rotateY(0deg);
      }
      10% {
        -webkit-transform: perspective(160px) rotateY(-65deg);
        transform: perspective(160px) rotateY(-65deg);
      }
      90%,
      100% {
        -webkit-transform: perspective(160px) rotateY(2880deg);
        transform: perspective(160px) rotateY(2880deg);
      }
    }
    @keyframes spinning-coin {
      0% {
        -webkit-transform: perspective(160px) rotateY(0deg);
        transform: perspective(160px) rotateY(0deg);
      }
      10% {
        -webkit-transform: perspective(160px) rotateY(-65deg);
        transform: perspective(160px) rotateY(-65deg);
      }
      90%,
      100% {
        -webkit-transform: perspective(160px) rotateY(2880deg);
        transform: perspective(160px) rotateY(2880deg);
      }
    }

    .spinning-coin {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .spinning-coin:before {
      -webkit-animation: spinning-coin 3s infinite;
      animation: spinning-coin 3s infinite;
      border-radius: 100%;
      background-color: var(--primary);
      -webkit-transform-origin: center;
      transform-origin: center;
      content: '';
      height: 40px;
      width: 40px;
    }
  }

  .loading-09 {
    @-webkit-keyframes spinning-coin-fall {
      0% {
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(0deg) rotateX(0deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(0deg) rotateX(0deg);
      }
      10% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(-65deg) rotateX(0deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(-65deg) rotateX(0deg);
      }
      70% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(1440deg) rotateX(0deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(1440deg) rotateX(0deg);
      }
      90%,
      100% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(2880deg) rotateX(90deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(2880deg) rotateX(90deg);
      }
    }
    @keyframes spinning-coin-fall {
      0% {
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(0deg) rotateX(0deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(0deg) rotateX(0deg);
      }
      10% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(-65deg) rotateX(0deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(-65deg) rotateX(0deg);
      }
      70% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(1440deg) rotateX(0deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(1440deg) rotateX(0deg);
      }
      90%,
      100% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) perspective(160px) rotateY(2880deg) rotateX(90deg);
        transform: translate(-50%, -50%) perspective(160px) rotateY(2880deg) rotateX(90deg);
      }
    }

    .spinning-coin-fall:before {
      -webkit-animation: spinning-coin-fall 3s infinite;
      animation: spinning-coin-fall 3s infinite;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      -webkit-transform-origin: center;
      transform-origin: center;
      width: 40px;
    }
  }

  .loading-10 {
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .spinning-dots {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .spinning-dots:before {
      -webkit-animation: spin 1.5s infinite linear;
      animation: spin 1.5s infinite linear;
      border-radius: 10px;
      -webkit-box-shadow: 25px 0 0 0 var(--primary), 15.58725px 19.54579px 0 0 var(--primary), -5.56302px 24.3732px 0 0 var(--primary), -22.52422px 10.84709px 0 0 var(--primary), -22.52422px -10.84709px 0 0 var(--primary), -5.56302px -24.3732px 0 0 var(--primary), 15.58725px -19.54579px 0 0 var(--primary);
      box-shadow: 25px 0 0 0 var(--primary), 15.58725px 19.54579px 0 0 var(--primary), -5.56302px 24.3732px 0 0 var(--primary), -22.52422px 10.84709px 0 0 var(--primary), -22.52422px -10.84709px 0 0 var(--primary), -5.56302px -24.3732px 0 0 var(--primary), 15.58725px -19.54579px 0 0 var(--primary);
      content: '';
      height: 10px;
      width: 10px;
    }
  }

  .loading-11 {
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .spinning-dots-scaled {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .spinning-dots-scaled:before {
      -webkit-animation: spin 1.5s infinite linear;
      animation: spin 1.5s infinite linear;
      border-radius: 8px;
      -webkit-box-shadow: 20px 0 0 -4px var(--primary), 12.4698px 15.63663px 0 -4px var(--primary), -4.45042px 19.49856px 0 -3px var(--primary), -18.01938px 8.67767px 0 -2px var(--primary), -18.01938px -8.67767px 0 -1px var(--primary), -4.45042px -19.49856px 0 1px var(--primary), 12.4698px -15.63663px 0 2px var(--primary);
      box-shadow: 20px 0 0 -4px var(--primary), 12.4698px 15.63663px 0 -4px var(--primary), -4.45042px 19.49856px 0 -3px var(--primary), -18.01938px 8.67767px 0 -2px var(--primary), -18.01938px -8.67767px 0 -1px var(--primary), -4.45042px -19.49856px 0 1px var(--primary), 12.4698px -15.63663px 0 2px var(--primary);
      content: '';
      height: 8px;
      width: 8px;
    }
  }

  .loading-12 {
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .split {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .split:after, .split:before {
      border-radius: 100%;
      content: '';
      position: absolute;
    }

    .split:after {
      -webkit-animation: spin 1s infinite linear;
      animation: spin 1s infinite linear;
      border: 10px solid var(--primary);
      border-left-color: transparent;
      border-right-color: transparent;
      height: 50px;
      width: 50px;
    }

    .split:before {
      background: var(--primary);
      height: 14px;
      width: 14px;
    }
  }

  .loading-13 {
    .square-of-dots:before {
      -webkit-animation: square-of-dots 1s infinite linear;
      animation: square-of-dots 1s infinite linear;
      border-radius: 100%;
      content: '';
      height: 10px;
      left: 50%;
      margin-left: -47.5px;
      margin-top: -5px;
      position: absolute;
      top: 50%;
      width: 10px;
    }

    @-webkit-keyframes square-of-dots {
      0% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      10% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      20% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      30% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      40% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 -10px var(--primary);
      }
      50% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      70% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      90% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
    }

    @keyframes square-of-dots {
      0% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      10% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      20% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      30% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
      40% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 -10px var(--primary);
      }
      50% {
        -webkit-box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 0 var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 0 var(--primary), 30px -15px 0 0 var(--primary), 30px 0 0 0 var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      70% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 0 var(--primary), 45px -15px 0 0 var(--primary), 45px 0 0 0 var(--primary), 45px 15px 0 0 var(--primary), 45px 30px 0 0 var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 0 var(--primary), 60px 0 0 0 var(--primary), 60px -15px 0 0 var(--primary), 75px 0 0 0 var(--primary);
      }
      90% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 0 var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
        box-shadow: 15px 0 0 -10px var(--primary), 30px 15px 0 -10px var(--primary), 30px -15px 0 -10px var(--primary), 30px 0 0 -10px var(--primary), 45px -30px 0 -10px var(--primary), 45px -15px 0 -10px var(--primary), 45px 0 0 -10px var(--primary), 45px 15px 0 -10px var(--primary), 45px 30px 0 -10px var(--primary), 60px 15px 0 -10px var(--primary), 60px 0 0 -10px var(--primary), 60px -15px 0 -10px var(--primary), 75px 0 0 -10px var(--primary);
      }
    }
  }

  .loading-14 {
    @-webkit-keyframes stop-and-go {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      60% {
        -webkit-transform: rotate(1440deg);
        transform: rotate(1440deg);
      }
      100% {
        -webkit-transform: rotate(1080deg);
        transform: rotate(1080deg);
      }
    }
    @keyframes stop-and-go {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      60% {
        -webkit-transform: rotate(1440deg);
        transform: rotate(1440deg);
      }
      100% {
        -webkit-transform: rotate(1080deg);
        transform: rotate(1080deg);
      }
    }

    .stop-and-go {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .stop-and-go:before {
      -webkit-animation: stop-and-go 1s infinite;
      animation: stop-and-go 1s infinite;
      border: 25px solid var(--primary);
      border-left-color: transparent;
      border-radius: 100%;
      border-right-color: transparent;
      content: '';
      height: 50px;
      width: 50px;
    }
  }

  .loading-15 {
    @-webkit-keyframes swap {
      0%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes swap {
      0%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    .swap {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swap:after, .swap:before {
      border-radius: 100%;
      content: '';
      height: 50px;
      opacity: .5;
      position: absolute;
      width: 50px;
    }

    .swap:after {
      -webkit-animation: swap 1.5s -0.75s infinite;
      animation: swap 1.5s -0.75s infinite;
      background-color: var(--primary);
    }

    .swap:before {
      -webkit-animation: swap 1.5s infinite;
      animation: swap 1.5s infinite;
      background-color: var(--secondary);
    }
  }

  .loading-16 {
    @-webkit-keyframes throw {
      0% {
        -webkit-transform: scale(0.75) translateX(-250%);
        transform: scale(0.75) translateX(-250%);
      }
      50% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
      100% {
        -webkit-transform: scale(0.75) translateX(250%);
        transform: scale(0.75) translateX(250%);
      }
    }
    @keyframes throw {
      0% {
        -webkit-transform: scale(0.75) translateX(-250%);
        transform: scale(0.75) translateX(-250%);
      }
      50% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
      100% {
        -webkit-transform: scale(0.75) translateX(250%);
        transform: scale(0.75) translateX(250%);
      }
    }

    .throw {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .throw:before {
      -webkit-animation: throw .75s infinite alternate ease-in-out;
      animation: throw .75s infinite alternate ease-in-out;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      height: 20px;
      width: 20px;
    }
  }

  .loading-17 {
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .traditional {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .traditional:before {
      -webkit-animation: spin .5s infinite linear;
      animation: spin .5s infinite linear;
      border-radius: 100%;
      -webkit-box-shadow: inset -2px 0 0 0 var(--primary);
      box-shadow: inset -2px 0 0 0 var(--primary);
      content: '';
      height: 50px;
      position: absolute;
      width: 50px;
    }
  }

  .loading-18 {
    @-webkit-keyframes trigger {
      0%, 100% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      30% {
        -webkit-box-shadow: -30px 30px 0 5px #fff, -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 5px #fff, -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      40% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 5px #fff, 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 5px #fff, 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      50% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 5px #fff, 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 5px #fff, 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      60% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 5px #fff, 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 5px #fff, 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      70% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 5px #fff;
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 5px #fff;
      }
      80% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
    }
    @keyframes trigger {
      0%, 100% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      30% {
        -webkit-box-shadow: -30px 30px 0 5px #fff, -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 5px #fff, -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      40% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 5px #fff, 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 5px #fff, 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      50% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 5px #fff, 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 5px #fff, 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      60% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 5px #fff, 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 5px #fff, 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
      70% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 5px #fff;
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 5px #fff;
      }
      80% {
        -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
        box-shadow: -30px 30px 0 0 rgba(255, 255, 255, 0.5), -15px 30px 0 0 rgba(255, 255, 255, 0.5), 0 30px 0 0 rgba(255, 255, 255, 0.5), 15px 30px 0 0 rgba(255, 255, 255, 0.5), 30px 30px 0 0 rgba(255, 255, 255, 0.5);
      }
    }

    .trigger:before {
      -webkit-animation: trigger 1s infinite ease;
      animation: trigger 1s infinite ease;
      content: '';
      height: 20px;
      left: 50%;
      margin-left: -5px;
      margin-top: -40px;
      position: absolute;
      top: 50%;
      width: 10px;
    }
  }

  .loading-19 {
    @-webkit-keyframes tumble {
      0% {
        -webkit-transform: rotate(180deg) translateY(-17px);
        transform: rotate(180deg) translateY(-17px);
      }
      100% {
        -webkit-transform: rotate(540deg) translateY(-17px);
        transform: rotate(540deg) translateY(-17px);
      }
    }
    @keyframes tumble {
      0% {
        -webkit-transform: rotate(180deg) translateY(-17px);
        transform: rotate(180deg) translateY(-17px);
      }
      100% {
        -webkit-transform: rotate(540deg) translateY(-17px);
        transform: rotate(540deg) translateY(-17px);
      }
    }

    .tumble {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tumble:after, .tumble:before {
      border-radius: 100%;
      content: '';
      position: absolute;
    }

    .tumble:after {
      -webkit-animation: tumble 1s infinite;
      animation: tumble 1s infinite;
      background-color: var(--primary);
      -webkit-box-shadow: 8px 6px 0 0 var(--secondary), -8px 6px 0 0 var(--secondary);
      box-shadow: 8px 6px 0 0 var(--secondary), -8px 6px 0 0 var(--secondary);
      height: 16px;
      width: 16px;
    }

    .tumble:before {
      border: 6px solid var(--primary);
      height: 50px;
      width: 50px;
    }
  }

  .loading-20 {
    @-webkit-keyframes whirl {
      0% {
        -webkit-transform: scale(0) rotate(-45deg) translateY(0);
        transform: scale(0) rotate(-45deg) translateY(0);
      }
      50% {
        -webkit-transform: scale(1.25) rotate(960deg) translateY(100%);
        transform: scale(1.25) rotate(960deg) translateY(100%);
      }
      100% {
        -webkit-transform: scale(0) rotate(2000deg) translateY(0);
        transform: scale(0) rotate(2000deg) translateY(0);
      }
    }
    @keyframes whirl {
      0% {
        -webkit-transform: scale(0) rotate(-45deg) translateY(0);
        transform: scale(0) rotate(-45deg) translateY(0);
      }
      50% {
        -webkit-transform: scale(1.25) rotate(960deg) translateY(100%);
        transform: scale(1.25) rotate(960deg) translateY(100%);
      }
      100% {
        -webkit-transform: scale(0) rotate(2000deg) translateY(0);
        transform: scale(0) rotate(2000deg) translateY(0);
      }
    }

    .whirl {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .whirl:before {
      -webkit-animation: whirl 2s infinite linear;
      animation: whirl 2s infinite linear;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      height: 30px;
      width: 30px;
    }
  }

  .loading-21 {
    @-webkit-keyframes wind-up {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      10%,
      15% {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
      20%,
      25% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      30%,
      35% {
        -webkit-transform: rotate(-270deg);
        transform: rotate(-270deg);
      }
      40%,
      50% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
      100% {
        -webkit-transform: rotate(720deg);
        transform: rotate(720deg);
      }
    }
    @keyframes wind-up {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      10%,
      15% {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
      20%,
      25% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      30%,
      35% {
        -webkit-transform: rotate(-270deg);
        transform: rotate(-270deg);
      }
      40%,
      50% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
      100% {
        -webkit-transform: rotate(720deg);
        transform: rotate(720deg);
      }
    }

    .wind-up:before {
      -webkit-animation: wind-up 3s infinite;
      animation: wind-up 3s infinite;
      border: 6px solid var(--primary);
      content: '';
      display: block;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
