<!--
 * loading-group-03
 *
 * @from    https://whirl.netlify.app/
 * @github  https://github.com/jh3y/whirl
 * @author Junpeng.Li
 * @date 2023-07-18 15-40
-->
<script setup lang="ts">
defineOptions({
  name: 'LoadingGroup03'
})
</script>

<template>
  <div class="container">
    <div class="loading-box loading-01">
      <div class="bar-spin"></div>
    </div>
    <div class="loading-box loading-02">
      <div class="battery"></div>
    </div>
    <div class="loading-box loading-03">
      <div class="bloom"></div>
    </div>
    <div class="loading-box loading-04">
      <div class="borders"></div>
    </div>
    <div class="loading-box loading-05">
      <div class="box-spin"></div>
    </div>
    <div class="loading-box loading-06">
      <div class="breakout"></div>
    </div>
    <div class="loading-box loading-07">
      <div class="color-arc"></div>
    </div>
    <div class="loading-box loading-08">
      <div class="color-bridge"></div>
    </div>
    <div class="loading-box loading-09">
      <div class="cyclical"></div>
    </div>
    <div class="loading-box loading-10">
      <div class="flip-square-travel"></div>
    </div>
    <div class="loading-box loading-11">
      <div class="hourglass"></div>
    </div>
    <div class="loading-box loading-12">
      <div class="load-man"></div>
    </div>
    <div class="loading-box loading-13">
      <div class="rainbow"></div>
    </div>
    <div class="loading-box loading-14">
      <div class="sliding-tiles-bordered"></div>
    </div>
    <div class="loading-box loading-15">
      <div class="zonal"></div>
    </div>
  </div>
</template>

<style lang="scss">
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

  .vertical-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-01 {
    .bar-spin {
      -webkit-animation: spin 3s infinite linear;
      animation: spin 3s infinite linear;
      height: 50px;
      position: relative;
      width: 50px;
    }

    .bar-spin:before {
      content: '';
      display: block;
      height: 50px;
      width: 10px;
      -webkit-animation: spin .5s infinite;
      animation: spin .5s infinite;
      background: var(--primary, #fff);
      position: absolute;
      left: 50%;
      margin-left: -5px;
    }

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
  }

  .loading-02 {
    .battery {
      height: 60px;
      width: 40px;
      background: transparent;
      border-radius: 2px;
      border: 5px solid var(--primary);
      position: relative;
    }

    .battery:before {
      content: '';
      height: 12px;
      width: 20px;
      background: var(--primary);
      position: absolute;
      bottom: 100%;
      left: 50%;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      border-radius: 2px;
    }

    .battery:after {
      -webkit-animation: battery-charge 1s infinite steps(6);
      animation: battery-charge 1s infinite steps(6);
      background: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(5%, transparent), color-stop(5%, var(--primary)), color-stop(19%, var(--primary)), color-stop(19%, transparent), color-stop(24%, transparent), color-stop(24%, var(--primary)), color-stop(38%, var(--primary)), color-stop(38%, transparent), color-stop(43%, transparent), color-stop(43%, var(--primary)), color-stop(57%, var(--primary)), color-stop(57%, transparent), color-stop(62%, transparent), color-stop(62%, var(--primary)), color-stop(76%, var(--primary)), color-stop(76%, transparent), color-stop(81%, transparent), color-stop(81%, var(--primary)), color-stop(95%, var(--primary)), color-stop(95%, transparent));
      background: linear-gradient(0deg, transparent, transparent 5%, var(--primary) 5%, var(--primary) 19%, transparent 19%, transparent 24%, var(--primary) 24%, var(--primary) 38%, transparent 38%, transparent 43%, var(--primary) 43%, var(--primary) 57%, transparent 57%, transparent 62%, var(--primary) 62%, var(--primary) 76%, transparent 76%, transparent 81%, var(--primary) 81%, var(--primary) 95%, transparent 95%);
      content: '';
      height: 100%;
      left: 50%;
      position: absolute;
      top: 0;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      width: 24px;
    }

    @-webkit-keyframes battery-charge {
      0% {
        -webkit-clip-path: inset(100% 0 0 0);
        clip-path: inset(100% 0 0 0);
      }
      100% {
        -webkit-clip-path: inset(-18% 0 0 0);
        clip-path: inset(-18% 0 0 0);
      }
    }

    @keyframes battery-charge {
      0% {
        -webkit-clip-path: inset(100% 0 0 0);
        clip-path: inset(100% 0 0 0);
      }
      100% {
        -webkit-clip-path: inset(-18% 0 0 0);
        clip-path: inset(-18% 0 0 0);
      }
    }
  }

  .loading-03 {
    .bloom {
      height: 30px;
      position: relative;
      width: 30px;
    }

    .bloom:before, .bloom:after {
      border-radius: 100%;
      content: '';
      display: block;
      height: 30px;
      width: 30px;
    }

    .bloom:before {
      background-color: var(--primary);
      -webkit-animation: scale-up 1s infinite ease;
      animation: scale-up 1s infinite ease;
    }

    .bloom:after {
      -webkit-animation: scale 1s infinite;
      animation: scale 1s infinite;
      border: 4px solid var(--primary);
      left: 0;
      position: absolute;
      top: 0;
      box-sizing: border-box;
    }

    @-webkit-keyframes scale-up {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    @keyframes scale-up {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    @-webkit-keyframes scale {
      0%, 50% {
        opacity: 0;
      }
      55% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: scale(2);
        transform: scale(2);
      }
    }

    @keyframes scale {
      0%, 50% {
        opacity: 0;
      }
      55% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: scale(2);
        transform: scale(2);
      }
    }
  }

  .loading-04 {
    .borders {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 50px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      width: 50px;
    }

    .borders:after, .borders:before {
      border: 6px solid var(--primary);
      border-radius: 100%;
      position: absolute;
      content: '';
      display: block;
    }

    .borders:before {
      border-bottom-color: transparent;
      border-left-color: transparent;
      animation: spin .75s infinite linear reverse;
      height: 30px;
      width: 30px;
    }

    .borders:after {
      -webkit-animation: spin .5s infinite linear;
      animation: spin .5s infinite linear;
      height: 50px;
      width: 50px;
      border-right-color: transparent;
      border-top-color: transparent;
    }

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
  }

  .loading-05 {
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

    .box-spin {
      -webkit-animation: spin 3s infinite linear;
      animation: spin 3s infinite linear;
      height: 50px;
      position: relative;
      width: 50px;
    }

    .box-spin:before {
      content: '';
      display: block;
      height: 25px;
      width: 25px;
      -webkit-animation: spin .5s infinite;
      animation: spin .5s infinite;
      background: var(--primary, #fff);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -25px;
      margin-top: -25px;
    }
  }

  .loading-06 {
    @-webkit-keyframes breakout {
      0%,
      40% {
        border-width: 25px;
      }
      60% {
        border-color: var(--primary);
        border-width: 6px;
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        border-color: var(--secondary);
        opacity: 0;
        -webkit-transform: scale(2);
        transform: scale(2);
      }
    }
    @keyframes breakout {
      0%,
      40% {
        border-width: 25px;
      }
      60% {
        border-color: var(--primary);
        border-width: 6px;
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        border-color: var(--secondary);
        opacity: 0;
        -webkit-transform: scale(2);
        transform: scale(2);
      }
    }

    .breakout {
      position: relative;
      height: 50px;
      width: 50px;
    }

    .breakout:before {
      -webkit-animation: breakout 1.5s infinite;
      animation: breakout 1.5s infinite;
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      border: 6px solid var(--primary);
      border-radius: 100%;
      box-sizing: border-box;
    }
  }

  .loading-07 {
    .color-arc {
      -webkit-clip-path: inset(0% 50% 50% 0%);
      clip-path: inset(0% 50% 50% 0%);
      height: 50px;
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(-25%, -25%);
      transform: translate(-25%, -25%);
      width: 50px;
    }

    .color-arc:before {
      animation: spin 1.25s infinite linear reverse;
      border-width: 6px;
      border-style: solid;
      border-top-color: var(--primary);
      border-bottom-color: var(--primary);
      border-left-color: var(--secondary);
      border-radius: 100%;
      border-right-color: var(--secondary);
      content: '';
      display: block;
      height: 50px;
      width: 50px;
    }

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
  }

  .loading-08 {
    .color-bridge {
      -webkit-clip-path: inset(-2% 0% 50% 0);
      clip-path: inset(-2% 0% 50% 0);
      height: 50px;
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(-50%, -25%);
      transform: translate(-50%, -25%);
      width: 50px;
    }

    .color-bridge:before {
      -webkit-animation: spin 1.25s infinite linear;
      animation: spin 1.25s infinite linear;
      border-bottom-color: var(--primary);
      border-left-color: var(--secondary);
      border-radius: 100%;
      border-right-color: var(--secondary);
      border-style: solid;
      border-top-color: var(--primary);
      border-width: 6px;
      content: '';
      display: block;
      height: 50px;
      width: 50px;
      box-sizing: border-box;
    }

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
  }

  .loading-09 {
    @-webkit-keyframes grow {
      0%, 100% {
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
      }
    }
    @keyframes grow {
      0%, 100% {
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
      }
    }

    .cyclical {
      -webkit-animation: spin 2s infinite linear;
      animation: spin 2s infinite linear;
      height: 50px;
      position: relative;
      width: 50px;
    }

    .cyclical:after, .cyclical:before {
      -webkit-animation: grow 1.25s infinite ease;
      animation: grow 1.25s infinite ease;
      background: var(--primary);
      border-radius: 100%;
      left: 50%;
      position: absolute;
      top: 50%;
      content: '';
      box-sizing: border-box;
    }

    .cyclical:after {
      height: 50%;
      width: 50%;
      -webkit-transform-origin: 40% 80%;
      transform-origin: 40% 80%;
    }

    .cyclical:before {
      height: 75%;
      width: 75%;
      -webkit-transform-origin: -40% -80%;
      transform-origin: -40% -80%;
    }

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
  }

  .loading-10 {
    .flip-square-travel {
      -webkit-animation: flip-square-travel-switch 2s infinite linear;
      animation: flip-square-travel-switch 2s infinite linear;
      height: 50px;
      -webkit-perspective: 150px;
      perspective: 150px;
      position: relative;
      width: 50px;
    }

    .flip-square-travel:before {
      -webkit-animation: flip-square-travel 1s infinite;
      animation: flip-square-travel 1s infinite;
      background-color: var(--primary);
      content: '';
      display: block;
      height: 50px;
      width: 50px;
      position: absolute;
      -webkit-transform-origin: bottom;
      transform-origin: bottom;
    }

    @-webkit-keyframes flip-square-travel-switch {
      0%, 50% {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      50.001%, 100% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }

    @keyframes flip-square-travel-switch {
      0%, 50% {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      50.001%, 100% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }

    @-webkit-keyframes flip-square-travel {
      0% {
        -webkit-transform: translate(0, 0) rotateX(0deg);
        transform: translate(0, 0) rotateX(0deg);
      }
      50% {
        -webkit-transform: translate(0, -100%) rotateX(0deg);
        transform: translate(0, -100%) rotateX(0deg);
      }
      100% {
        -webkit-transform: translate(0, -100%) rotateX(-180deg);
        transform: translate(0, -100%) rotateX(-180deg);
      }
    }

    @keyframes flip-square-travel {
      0% {
        -webkit-transform: translate(0, 0) rotateX(0deg);
        transform: translate(0, 0) rotateX(0deg);
      }
      50% {
        -webkit-transform: translate(0, -100%) rotateX(0deg);
        transform: translate(0, -100%) rotateX(0deg);
      }
      100% {
        -webkit-transform: translate(0, -100%) rotateX(-180deg);
        transform: translate(0, -100%) rotateX(-180deg);
      }
    }
  }

  .loading-11 {
    @-webkit-keyframes hourglass-spin {
      0%, 10% {
        background-position: 0 90%;
      }
      40%,
      60% {
        background-position: 0 10%;
      }
      90%,
      100% {
        background-position: 0 -70%;
      }
    }
    @keyframes hourglass-spin {
      0%, 10% {
        background-position: 0 90%;
      }
      40%,
      60% {
        background-position: 0 10%;
      }
      90%,
      100% {
        background-position: 0 -70%;
      }
    }

    @-webkit-keyframes hourglass-container-spin {
      0%,
      40% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      90% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
    }

    @keyframes hourglass-container-spin {
      0%,
      40% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      90% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
    }

    .hourglass {
      -webkit-animation: hourglass-container-spin 4s infinite;
      animation: hourglass-container-spin 4s infinite;
      height: 40px;
      position: relative;
      width: 40px;
    }

    .hourglass:after, .hourglass:before {
      box-sizing: border-box;
      background-size: 100% 300%;
      border-radius: 100%;
      border: 4px solid var(--primary);
      height: 40px;
      width: 40px;
      -webkit-animation-name: hourglass-spin;
      animation-name: hourglass-spin;
      -webkit-animation-duration: 4s;
      animation-duration: 4s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      content: '';
      position: absolute;
      background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(50%, transparent), color-stop(50%, var(--secondary)), to(var(--secondary)));
      background-image: linear-gradient(0deg, transparent, transparent 50%, var(--secondary) 50%, var(--secondary));
    }

    .hourglass:after {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    .hourglass:before {
      -webkit-animation-delay: -2s;
      animation-delay: -2s;
      animation-direction: reverse;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  .loading-12 {
    .load-man {
      -webkit-animation: load-man-travel 1.2s infinite linear;
      animation: load-man-travel 1.2s infinite linear;
      background: repeating-linear-gradient(90deg, var(--secondary), var(--secondary) 5%, transparent 5%, transparent 35%);
      height: 10px;
      left: 50%;
      margin-top: -5px;
      position: absolute;
      top: 50%;
      width: 200px;
      /**
        * Our pseudo elements create the head pieces
        *
        * They are near identical minus subtle differences in animation and border
        * styling
      */
      /**
      * The top head piece
      */
      /**
      * The bottom head piece
      */
    }

    .load-man:after, .load-man:before {
      content: '';
      position: absolute;
      left: -25px;
      top: 50%;
      border: 25px solid var(--primary);
      border-radius: 100%;
      margin-top: -25px;
    }

    .load-man:before {
      --close: -90;
      -webkit-animation: load-man-chomp 0.35s infinite linear;
      animation: load-man-chomp 0.35s infinite linear;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }

    .load-man:after {
      --close: 0;
      -webkit-animation: load-man-chomp 0.35s infinite linear;
      animation: load-man-chomp 0.35s infinite linear;
      border-right-color: transparent;
      border-top-color: transparent;
    }

    @-webkit-keyframes load-man-travel {
      to {
        background-position: -200px 0;
      }
    }

    @keyframes load-man-travel {
      to {
        background-position: -200px 0;
      }
    }

    @-webkit-keyframes load-man-chomp {
      0% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      50% {
        -webkit-transform: rotate(calc(var(--close) * 1deg));
        transform: rotate(calc(var(--close) * 1deg));
      }
      100% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }

    @keyframes load-man-chomp {
      0% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      50% {
        -webkit-transform: rotate(calc(var(--close) * 1deg));
        transform: rotate(calc(var(--close) * 1deg));
      }
      100% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  }

  .loading-13 {
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

    .rainbow {
      border-radius: 100%;
      -webkit-clip-path: inset(0 0 50% 0);
      clip-path: inset(0 0 50% 0);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      height: 100px;
      position: absolute;
      width: 100px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -25%);
      transform: translate(-50%, -25%);
    }

    .rainbow:after {
      content: '';
      height: 10px;
      width: 10px;
      position: absolute;
      border-radius: 100%;
      -webkit-box-shadow: -40px -2px 0 1px #ffffff, -35px -6px 0 1px #ffffff, -30px -2px 0 1px #ffffff, -30px -8px 0 1px #ffffff, -25px -2px 0 1px #ffffff, -25px -8px 0 1px #ffffff, -20px -6px 0 1px #ffffff, -15px -2px 0 1px #ffffff, 40px -2px 0 1px #ffffff, 35px -6px 0 1px #ffffff, 30px -2px 0 1px #ffffff, 30px -8px 0 1px #ffffff, 25px -2px 0 1px #ffffff, 25px -8px 0 1px #ffffff, 20px -6px 0 1px #ffffff, 15px -2px 0 1px #ffffff;
      box-shadow: -40px -2px 0 1px #ffffff, -35px -6px 0 1px #ffffff, -30px -2px 0 1px #ffffff, -30px -8px 0 1px #ffffff, -25px -2px 0 1px #ffffff, -25px -8px 0 1px #ffffff, -20px -6px 0 1px #ffffff, -15px -2px 0 1px #ffffff, 40px -2px 0 1px #ffffff, 35px -6px 0 1px #ffffff, 30px -2px 0 1px #ffffff, 30px -8px 0 1px #ffffff, 25px -2px 0 1px #ffffff, 25px -8px 0 1px #ffffff, 20px -6px 0 1px #ffffff, 15px -2px 0 1px #ffffff;
    }

    .rainbow:before {
      content: '';
      height: 80px;
      width: 80px;
      -webkit-animation: spin 1.5s infinite;
      animation: spin 1.5s infinite;
      border-radius: 100%;
      -webkit-box-shadow: 0 0 0 4px #f22613 inset, 0 0 0 8px #f89406 inset, 0 0 0 12px #f9bf3b inset, 0 0 0 16px #2ecc71 inset, 0 0 0 20px #19b5fe inset, 0 0 0 24px #663399 inset, 0 0 0 28px #bf55ec inset;
      box-shadow: 0 0 0 4px #f22613 inset, 0 0 0 8px #f89406 inset, 0 0 0 12px #f9bf3b inset, 0 0 0 16px #2ecc71 inset, 0 0 0 20px #19b5fe inset, 0 0 0 24px #663399 inset, 0 0 0 28px #bf55ec inset;
      -webkit-clip-path: inset(0 0 50% 0);
      clip-path: inset(0 0 50% 0);
      overflow: hidden;
      position: absolute;
    }
  }

  .loading-14 {
    @-webkit-keyframes sliding-tile-bordered {
      0% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
      10% {
        -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
        transform: translate(-50%, -50%) translate(50%, -50%);
      }
      20%,
      80% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
      90% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
        transform: translate(-50%, -50%) translate(-50%, 50%);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
    }
    @keyframes sliding-tile-bordered {
      0% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
      10% {
        -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
        transform: translate(-50%, -50%) translate(50%, -50%);
      }
      20%,
      80% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
      90% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
        transform: translate(-50%, -50%) translate(-50%, 50%);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
    }

    @-webkit-keyframes sliding-tile-bordered-2 {
      0% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
      10% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
        transform: translate(-50%, -50%) translate(-50%, 50%);
      }
      20%,
      80% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
      90% {
        -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
        transform: translate(-50%, -50%) translate(50%, -50%);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
    }

    @keyframes sliding-tile-bordered-2 {
      0% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
      10% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, 50%);
        transform: translate(-50%, -50%) translate(-50%, 50%);
      }
      20%,
      80% {
        -webkit-transform: translate(-50%, -50%) translate(-50%, -50%);
        transform: translate(-50%, -50%) translate(-50%, -50%);
      }
      90% {
        -webkit-transform: translate(-50%, -50%) translate(50%, -50%);
        transform: translate(-50%, -50%) translate(50%, -50%);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) translate(50%, 50%);
        transform: translate(-50%, -50%) translate(50%, 50%);
      }
    }

    @-webkit-keyframes tile-rotate {
      0%,
      20% {
        -webkit-transform: perspective(50px) rotateY(0deg);
        transform: perspective(50px) rotateY(0deg);
      }
      30%,
      70% {
        -webkit-transform: perspective(50px) rotateY(180deg);
        transform: perspective(50px) rotateY(180deg);
      }
      80%,
      100% {
        -webkit-transform: perspective(50px) rotate(360deg);
        transform: perspective(50px) rotate(360deg);
      }
    }

    @keyframes tile-rotate {
      0%,
      20% {
        -webkit-transform: perspective(50px) rotateY(0deg);
        transform: perspective(50px) rotateY(0deg);
      }
      30%,
      70% {
        -webkit-transform: perspective(50px) rotateY(180deg);
        transform: perspective(50px) rotateY(180deg);
      }
      80%,
      100% {
        -webkit-transform: perspective(50px) rotate(360deg);
        transform: perspective(50px) rotate(360deg);
      }
    }

    .sliding-tiles-bordered {
      -webkit-animation: tile-rotate 4s infinite linear;
      animation: tile-rotate 4s infinite linear;
      border: 4px solid var(--primary);
      height: 50px;
      left: 50%;
      margin-left: -25px;
      margin-top: -25px;
      position: absolute;
      top: 50%;
      width: 50px;
    }

    .sliding-tiles-bordered:after, .sliding-tiles-bordered:before {
      -webkit-animation: sliding-tile-bordered 2s infinite linear;
      animation: sliding-tile-bordered 2s infinite linear;
      background-color: var(--primary);
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: 20px;
      width: 20px;
    }

    .sliding-tiles-bordered:after {
      -webkit-animation: sliding-tile-bordered-2 2s infinite linear;
      animation: sliding-tile-bordered-2 2s infinite linear;
    }
  }

  .loading-15 {
    @-webkit-keyframes zonal-flash {
      0% {
        -webkit-transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
        transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
      }
      10% {
        -webkit-transform: scale(1) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
        transform: scale(1) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
      }
      20% {
        -webkit-transform: scale(0) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
        transform: scale(0) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
      }
      30% {
        -webkit-transform: scale(1) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
        transform: scale(1) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
      }
      40% {
        -webkit-transform: scale(0) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
        transform: scale(0) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
      }
      50% {
        -webkit-transform: scale(1) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
        transform: scale(1) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
      }
      60% {
        -webkit-transform: scale(0) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
        transform: scale(0) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
      }
      70% {
        -webkit-transform: scale(1) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
        transform: scale(1) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
      }
      80% {
        -webkit-transform: scale(0) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
        transform: scale(0) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
      }
      90% {
        -webkit-transform: scale(1) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
        transform: scale(1) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
      }
      100% {
        -webkit-transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
        transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
      }
    }
    @keyframes zonal-flash {
      0% {
        -webkit-transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
        transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
      }
      10% {
        -webkit-transform: scale(1) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
        transform: scale(1) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
      }
      20% {
        -webkit-transform: scale(0) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
        transform: scale(0) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
      }
      30% {
        -webkit-transform: scale(1) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
        transform: scale(1) translate(calc(var(--x2) * 1%), calc(var(--y2) * 1%));
      }
      40% {
        -webkit-transform: scale(0) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
        transform: scale(0) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
      }
      50% {
        -webkit-transform: scale(1) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
        transform: scale(1) translate(calc(var(--x3) * 1%), calc(var(--y3) * 1%));
      }
      60% {
        -webkit-transform: scale(0) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
        transform: scale(0) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
      }
      70% {
        -webkit-transform: scale(1) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
        transform: scale(1) translate(calc(var(--x4) * 1%), calc(var(--y4) * 1%));
      }
      80% {
        -webkit-transform: scale(0) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
        transform: scale(0) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
      }
      90% {
        -webkit-transform: scale(1) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
        transform: scale(1) translate(calc(var(--x5) * 1%), calc(var(--y5) * 1%));
      }
      100% {
        -webkit-transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
        transform: scale(0) translate(calc(var(--x1) * 1%), calc(var(--y1) * 1%));
      }
    }

    .zonal {
      --size: 20;
      height: calc(var(--size) * 1px);
      width: calc(var(--size) * 1px);
      position: absolute;
    }

    .zonal:after, .zonal:before {
      -webkit-animation: zonal-flash 4s infinite ease;
      animation: zonal-flash 4s infinite ease;
      border-radius: 100%;
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
    }

    .zonal:after {
      background-color: var(--primary);
      --x1: 55;
      --x2: -196;
      --x3: -122;
      --x4: 2;
      --x5: 198;
      --y1: 113;
      --y2: 221;
      --y3: -141;
      --y4: -164;
      --y5: -44;
    }

    .zonal:before {
      -webkit-animation-delay: -2s;
      animation-delay: -2s;
      background-color: var(--secondary);
      --x1: -151;
      --x2: -192;
      --x3: -112;
      --x4: -109;
      --x5: 155;
      --y1: 222;
      --y2: -121;
      --y3: -227;
      --y4: -115;
      --y5: 129;
    }
  }
}
</style>
