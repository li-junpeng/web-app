<!--
 * loading group
 *
 * @from    https://whirl.netlify.app/
 * @github  https://github.com/jh3y/whirl
 * @author Junpeng.Li
 * @date 2023-07-18 13-48
-->
<script setup lang="ts">
defineOptions({
  name: 'LoadingGroup01'
})
</script>

<template>
  <div class="container">
    <div class="loading-box loading-01">
      <div class="arc"></div>
    </div>
    <div class="loading-box loading-02">
      <div class="basic"></div>
    </div>
    <div class="loading-box loading-03">
      <div class="bounce"></div>
    </div>
    <div class="loading-box loading-04">
      <div class="chase"></div>
    </div>
    <div class="loading-box loading-05">
      <div class="color-range"></div>
    </div>
    <div class="loading-box loading-06">
      <div class="color-wheel"></div>
    </div>
    <div class="loading-box loading-07">
      <div class="different-directions"></div>
    </div>
    <div class="loading-box loading-08">
      <div class="dots"></div>
    </div>
    <div class="loading-box loading-09">
      <div class="dots-fade"></div>
    </div>
    <div class="loading-box loading-10">
      <div class="dots-flow"></div>
    </div>
    <div class="loading-box loading-11">
      <div class="double-ringed"></div>
    </div>
    <div class="loading-box loading-12">
      <div class="double-up"></div>
    </div>
    <div class="loading-box loading-13">
      <div class="duo"></div>
    </div>
    <div class="loading-box loading-14">
      <div class="eclipse"></div>
    </div>
    <div class="loading-box loading-15">
      <div class="eight"></div>
    </div>
    <div class="loading-box loading-16">
      <div class="fidget"></div>
    </div>
    <div class="loading-box loading-17">
      <div class="flickering-pentagon"></div>
    </div>
    <div class="loading-box loading-18">
      <div class="flip-square"></div>
    </div>
    <div class="loading-box loading-19">
      <div class="fly-by"></div>
    </div>
    <div class="loading-box loading-20">
      <div class="four-dots"></div>
    </div>
    <div class="loading-box loading-21">
      <div class="gyro"></div>
    </div>
    <div class="loading-box loading-22">
      <div class="half-ring"></div>
    </div>
    <div class="loading-box loading-23">
      <div class="line"></div>
    </div>
    <div class="loading-box loading-24">
      <div class="line-of-dots"></div>
    </div>
    <div class="loading-box loading-25">
      <div class="mexican-wave"></div>
    </div>
    <div class="loading-box loading-26">
      <div class="orbit"></div>
    </div>
    <div class="loading-box loading-27">
      <div class="outline-square"></div>
    </div>
    <div class="loading-box loading-28">
      <div class="palette"></div>
    </div>
    <div class="loading-box loading-29">
      <div class="pendulum"></div>
    </div>
    <div class="loading-box loading-30">
      <div class="pill"></div>
    </div>
    <div class="loading-box loading-31">
      <div class="radial"></div>
    </div>
    <div class="loading-box loading-32">
      <div class="rays"></div>
    </div>
    <div class="loading-box loading-33">
      <div class="ring-of-dots"></div>
    </div>
    <div class="loading-box loading-34">
      <div class="ringed"></div>
    </div>
    <div class="loading-box loading-35">
      <div class="rings"></div>
    </div>
    <div class="loading-box loading-36">
      <div class="rotary"></div>
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

  .loading-01 {
    .arc:before {
      -webkit-animation: spin 0.5s infinite linear;
      animation: spin 0.5s infinite linear;
      border-radius: 100%;
      border-top: 6px solid var(--primary, #fff);
      content: '';
      display: block;
      height: 50px;
      width: 50px;
    }

    @-webkit-keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .loading-02 {
    .basic:before {
      content: '';
      display: block;
      height: 50px;
      width: 50px;
      -webkit-animation: spin .5s infinite linear;
      animation: spin .5s infinite linear;
      border: 6px var(--primary) solid;
      border-left-color: var(--secondary);
      border-radius: 100%;
    }

    @-webkit-keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .loading-03 {
    @-webkit-keyframes whirl-bounce {
      0% {
        -webkit-transform: translate(0, -150%) scaleX(1) scaleY(1);
        transform: translate(0, -150%) scaleX(1) scaleY(1);
      }
      100% {
        -webkit-transform: translate(0, 150%) scaleX(1.1) scaleY(0.9);
        transform: translate(0, 150%) scaleX(1.1) scaleY(0.9);
      }
    }
    @keyframes whirl-bounce {
      0% {
        -webkit-transform: translate(0, -150%) scaleX(1) scaleY(1);
        transform: translate(0, -150%) scaleX(1) scaleY(1);
      }
      100% {
        -webkit-transform: translate(0, 150%) scaleX(1.1) scaleY(0.9);
        transform: translate(0, 150%) scaleX(1.1) scaleY(0.9);
      }
    }

    .bounce:before {
      -webkit-animation: whirl-bounce 0.5s cubic-bezier(0.6, 0.3, 0.8, 0.5) alternate infinite;
      animation: whirl-bounce 0.5s cubic-bezier(0.6, 0.3, 0.8, 0.5) alternate infinite;
      background: var(--primary);
      border-radius: 100%;
      content: '';
      display: block;
      height: 20px;
      width: 20px;
      -webkit-transform-origin: bottom center;
      transform-origin: bottom center;
    }
  }

  .loading-04 {
    .chase {
      position: relative;
      left: -15px;
      top: -10px;
    }

    .chase:after, .chase:before {
      content: '';
      height: 30px;
      width: 30px;
      display: block;
      -webkit-animation: out .5s backwards, spin 1.25s .5s infinite ease;
      animation: out .5s backwards, spin 1.25s .5s infinite ease;
      border: 5px solid var(--primary);
      border-radius: 100%;
      -webkit-box-shadow: 0 -40px 0 -5px var(--primary);
      box-shadow: 0 -40px 0 -5px var(--primary);
      position: absolute;
    }

    .chase:after {
      -webkit-animation-delay: 0s, 1.25s;
      animation-delay: 0s, 1.25s;
    }

    @-webkit-keyframes out {
      from {
        -webkit-box-shadow: 0 0 0 -5px var(--primary);
        box-shadow: 0 0 0 -5px var(--primary);
      }
    }

    @keyframes out {
      from {
        -webkit-box-shadow: 0 0 0 -5px var(--primary);
        box-shadow: 0 0 0 -5px var(--primary);
      }
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
    @-webkit-keyframes whirl-color-range {
      0% {
        -webkit-box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
        box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
      }
      20% {
        -webkit-box-shadow: 0 20px 0 0 #d13fec, 15px 20px 0 0 #e79cf5, 30px 20px 0 0 #fdf9fe, 45px 20px 0 0 white, 60px 20px 0 0 #9a12b3;
        box-shadow: 0 20px 0 0 #d13fec, 15px 20px 0 0 #e79cf5, 30px 20px 0 0 #fdf9fe, 45px 20px 0 0 white, 60px 20px 0 0 #9a12b3;
      }
      40% {
        -webkit-box-shadow: 0 20px 0 0 #e79cf5, 15px 20px 0 0 #fdf9fe, 30px 20px 0 0 white, 45px 20px 0 0 #9a12b3, 60px 20px 0 0 #d13fec;
        box-shadow: 0 20px 0 0 #e79cf5, 15px 20px 0 0 #fdf9fe, 30px 20px 0 0 white, 45px 20px 0 0 #9a12b3, 60px 20px 0 0 #d13fec;
      }
      60% {
        -webkit-box-shadow: 0 20px 0 0 #fdf9fe, 15px 20px 0 0 white, 30px 20px 0 0 #9a12b3, 45px 20px 0 0 #d13fec, 60px 20px 0 0 #e79cf5;
        box-shadow: 0 20px 0 0 #fdf9fe, 15px 20px 0 0 white, 30px 20px 0 0 #9a12b3, 45px 20px 0 0 #d13fec, 60px 20px 0 0 #e79cf5;
      }
      80% {
        -webkit-box-shadow: 0 20px 0 0 white, 15px 20px 0 0 #9a12b3, 30px 20px 0 0 #d13fec, 45px 20px 0 0 #e79cf5, 60px 20px 0 0 #fdf9fe;
        box-shadow: 0 20px 0 0 white, 15px 20px 0 0 #9a12b3, 30px 20px 0 0 #d13fec, 45px 20px 0 0 #e79cf5, 60px 20px 0 0 #fdf9fe;
      }
      100% {
        -webkit-box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
        box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
      }
    }
    @keyframes whirl-color-range {
      0% {
        -webkit-box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
        box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
      }
      20% {
        -webkit-box-shadow: 0 20px 0 0 #d13fec, 15px 20px 0 0 #e79cf5, 30px 20px 0 0 #fdf9fe, 45px 20px 0 0 white, 60px 20px 0 0 #9a12b3;
        box-shadow: 0 20px 0 0 #d13fec, 15px 20px 0 0 #e79cf5, 30px 20px 0 0 #fdf9fe, 45px 20px 0 0 white, 60px 20px 0 0 #9a12b3;
      }
      40% {
        -webkit-box-shadow: 0 20px 0 0 #e79cf5, 15px 20px 0 0 #fdf9fe, 30px 20px 0 0 white, 45px 20px 0 0 #9a12b3, 60px 20px 0 0 #d13fec;
        box-shadow: 0 20px 0 0 #e79cf5, 15px 20px 0 0 #fdf9fe, 30px 20px 0 0 white, 45px 20px 0 0 #9a12b3, 60px 20px 0 0 #d13fec;
      }
      60% {
        -webkit-box-shadow: 0 20px 0 0 #fdf9fe, 15px 20px 0 0 white, 30px 20px 0 0 #9a12b3, 45px 20px 0 0 #d13fec, 60px 20px 0 0 #e79cf5;
        box-shadow: 0 20px 0 0 #fdf9fe, 15px 20px 0 0 white, 30px 20px 0 0 #9a12b3, 45px 20px 0 0 #d13fec, 60px 20px 0 0 #e79cf5;
      }
      80% {
        -webkit-box-shadow: 0 20px 0 0 white, 15px 20px 0 0 #9a12b3, 30px 20px 0 0 #d13fec, 45px 20px 0 0 #e79cf5, 60px 20px 0 0 #fdf9fe;
        box-shadow: 0 20px 0 0 white, 15px 20px 0 0 #9a12b3, 30px 20px 0 0 #d13fec, 45px 20px 0 0 #e79cf5, 60px 20px 0 0 #fdf9fe;
      }
      100% {
        -webkit-box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
        box-shadow: 0 20px 0 0 #9a12b3, 15px 20px 0 0 #d13fec, 30px 20px 0 0 #e79cf5, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
      }
    }

    .color-range {
      display: flex;
    }

    .color-range:before {
      -webkit-animation: whirl-color-range .5s infinite ease;
      animation: whirl-color-range .5s infinite ease;
      content: '';
      height: 20px;
      -webkit-transform: translate(-30px, -20px);
      transform: translate(-30px, -20px);
      width: 10px;
    }
  }

  .loading-06 {
    .color-wheel:before {
      -webkit-animation: spin 1.5s infinite linear;
      animation: spin 1.5s infinite linear;
      content: '';
      display: block;
      height: 50px;
      width: 50px;
      border-width: 25px;
      border-style: solid;
      border-left-color: var(--primary);
      border-bottom-color: var(--secondary);
      border-radius: 100%;
      border-right-color: var(--primary);
      border-top-color: var(--secondary);
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

  .loading-07 {
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

    .different-directions {
      position: relative;
    }

    .different-directions:after, .different-directions:before {
      content: '';
      display: block;
      border-radius: 100%;
      height: 8px;
      width: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -4px;
      margin-left: -4px;
    }

    .different-directions:after {
      animation: spin 2s infinite linear reverse;
      -webkit-box-shadow: 20px 0 0 0 var(--primary), 12.4698px 15.63663px 0 0 var(--primary), -4.45042px 19.49856px 0 0 var(--primary), -18.01938px 8.67767px 0 0 var(--primary), -18.01938px -8.67767px 0 0 var(--primary), -4.45042px -19.49856px 0 0 var(--primary), 12.4698px -15.63663px 0 0 var(--primary);
      box-shadow: 20px 0 0 0 var(--primary), 12.4698px 15.63663px 0 0 var(--primary), -4.45042px 19.49856px 0 0 var(--primary), -18.01938px 8.67767px 0 0 var(--primary), -18.01938px -8.67767px 0 0 var(--primary), -4.45042px -19.49856px 0 0 var(--primary), 12.4698px -15.63663px 0 0 var(--primary);
    }

    .different-directions:before {
      -webkit-animation: spin 2s infinite linear;
      animation: spin 2s infinite linear;
      -webkit-box-shadow: 35px 0 0 0 var(--primary), 21.82214px 27.3641px 0 0 var(--primary), -7.78823px 34.12248px 0 0 var(--primary), -31.53391px 15.18593px 0 0 var(--primary), -31.53391px -15.18593px 0 0 var(--primary), -7.78823px -34.12248px 0 0 var(--primary), 21.82214px -27.3641px 0 0 var(--primary);
      box-shadow: 35px 0 0 0 var(--primary), 21.82214px 27.3641px 0 0 var(--primary), -7.78823px 34.12248px 0 0 var(--primary), -31.53391px 15.18593px 0 0 var(--primary), -31.53391px -15.18593px 0 0 var(--primary), -7.78823px -34.12248px 0 0 var(--primary), 21.82214px -27.3641px 0 0 var(--primary);
    }
  }

  .loading-08 {
    .dots:before {
      display: block;
      height: 5px;
      width: 5px;
      content: '';
      -webkit-animation: spin 1s infinite;
      animation: spin 1s infinite;
      border-radius: 100%;
      -webkit-box-shadow: 20px 0 0 5px var(--primary), -20px 0 0 5px var(--primary);
      box-shadow: 20px 0 0 5px var(--primary), -20px 0 0 5px var(--primary);
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
    @-webkit-keyframes dots-fade {
      0% {
        background: var(--primary);
        opacity: 0;
        -webkit-transform: translateX(-175%);
        transform: translateX(-175%);
      }
      10% {
        opacity: 1;
        -webkit-transform: translateX(-175%);
        transform: translateX(-175%);
      }
      20% {
        background: var(--primary);
        opacity: 0;
        -webkit-transform: translateX(-175%);
        transform: translateX(-175%);
      }
      30% {
        opacity: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      40% {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      50% {
        background: var(--secondary);
        opacity: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      60% {
        background-color: var(--primary);
        opacity: 0;
        -webkit-transform: translateX(175%);
        transform: translateX(175%);
      }
      70% {
        opacity: 1;
        -webkit-transform: translateX(175%);
        transform: translateX(175%);
      }
      80%,
      100% {
        opacity: 0;
        -webkit-transform: translateX(175%);
        transform: translateX(175%);
      }
    }
    @keyframes dots-fade {
      0% {
        background: var(--primary);
        opacity: 0;
        -webkit-transform: translateX(-175%);
        transform: translateX(-175%);
      }
      10% {
        opacity: 1;
        -webkit-transform: translateX(-175%);
        transform: translateX(-175%);
      }
      20% {
        background: var(--primary);
        opacity: 0;
        -webkit-transform: translateX(-175%);
        transform: translateX(-175%);
      }
      30% {
        opacity: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      40% {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      50% {
        background: var(--secondary);
        opacity: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      60% {
        background-color: var(--primary);
        opacity: 0;
        -webkit-transform: translateX(175%);
        transform: translateX(175%);
      }
      70% {
        opacity: 1;
        -webkit-transform: translateX(175%);
        transform: translateX(175%);
      }
      80%,
      100% {
        opacity: 0;
        -webkit-transform: translateX(175%);
        transform: translateX(175%);
      }
    }

    .dots-fade:before {
      -webkit-animation: dots-fade 2s infinite;
      animation: dots-fade 2s infinite;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      display: block;
      height: 20px;
      width: 20px;
    }
  }

  .loading-10 {
    .dots-flow:before {
      -webkit-animation: dots-flow .85s infinite ease;
      animation: dots-flow .85s infinite ease;
      border-radius: 100%;
      content: '';
      height: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -40px);
      transform: translate(-50%, -40px);
      width: 16px;
    }

    @-webkit-keyframes dots-flow {
      0%, 100% {
        -webkit-box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 0 white;
        box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 0 white;
      }
      35% {
        -webkit-box-shadow: -26px 32px 0 4px purple, 0 32px 0 0 white, 26px 32px 0 0 white;
        box-shadow: -26px 32px 0 4px purple, 0 32px 0 0 white, 26px 32px 0 0 white;
      }
      50% {
        -webkit-box-shadow: -26px 32px 0 0 white, 0 32px 0 4px purple, 26px 32px 0 0 white;
        box-shadow: -26px 32px 0 0 white, 0 32px 0 4px purple, 26px 32px 0 0 white;
      }
      65% {
        -webkit-box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 4px purple;
        box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 4px purple;
      }
    }

    @keyframes dots-flow {
      0%, 100% {
        -webkit-box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 0 white;
        box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 0 white;
      }
      35% {
        -webkit-box-shadow: -26px 32px 0 4px purple, 0 32px 0 0 white, 26px 32px 0 0 white;
        box-shadow: -26px 32px 0 4px purple, 0 32px 0 0 white, 26px 32px 0 0 white;
      }
      50% {
        -webkit-box-shadow: -26px 32px 0 0 white, 0 32px 0 4px purple, 26px 32px 0 0 white;
        box-shadow: -26px 32px 0 0 white, 0 32px 0 4px purple, 26px 32px 0 0 white;
      }
      65% {
        -webkit-box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 4px purple;
        box-shadow: -26px 32px 0 0 white, 0 32px 0 0 white, 26px 32px 0 4px purple;
      }
    }
  }

  .loading-11 {
    .double-ringed {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .double-ringed:after, .double-ringed:before {
      border-radius: 100%;
      display: block;
      content: '';
      position: absolute;
    }

    .double-ringed:after {
      height: 15px;
      width: 15px;
      -webkit-animation: spin 1s infinite linear;
      animation: spin 1s infinite linear;
      -webkit-box-shadow: 19px 0 0 0 var(--secondary), -19px 0 0 0 var(--secondary);
      box-shadow: 19px 0 0 0 var(--secondary), -19px 0 0 0 var(--secondary);
    }

    .double-ringed:before {
      height: 40px;
      width: 40px;
      border: 2px solid var(--primary);
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

  .loading-12 {
    .double-up:before {
      display: block;
      content: '';
      height: 50px;
      width: 50px;
      -webkit-animation: spin 1.5s infinite linear;
      animation: spin 1.5s infinite linear;
      border: 10px var(--primary) double;
      border-left-style: solid;
      border-radius: 100%;
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

  .loading-13 {
    .duo:before {
      height: 50px;
      width: 50px;
      content: '';
      display: block;
      -webkit-animation: spin 1.5s infinite linear;
      animation: spin 1.5s infinite linear;
      border-width: 6px;
      border-style: solid;
      border-bottom-color: var(--primary);
      border-top-color: var(--primary);
      border-left-color: var(--secondary);
      border-radius: 100%;
      border-right-color: var(--secondary);
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

  .loading-14 {
    .eclipse:before {
      display: block;
      content: '';
      height: 50px;
      width: 50px;
      -webkit-animation: eclipse 1s infinite ease;
      animation: eclipse 1s infinite ease;
      background-color: var(--bg);
      border-radius: 100%;
    }

    @-webkit-keyframes eclipse {
      from {
        -webkit-box-shadow: inset 50px 0 0 0 var(--primary);
        box-shadow: inset 50px 0 0 0 var(--primary);
      }
      to {
        -webkit-box-shadow: inset -50px 0 0 0 var(--primary);
        box-shadow: inset -50px 0 0 0 var(--primary);
      }
    }

    @keyframes eclipse {
      from {
        -webkit-box-shadow: inset 50px 0 0 0 var(--primary);
        box-shadow: inset 50px 0 0 0 var(--primary);
      }
      to {
        -webkit-box-shadow: inset -50px 0 0 0 var(--primary);
        box-shadow: inset -50px 0 0 0 var(--primary);
      }
    }
  }

  .loading-15 {
    @-webkit-keyframes eight {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
      }
      50% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
      51% {
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }
      100% {
        -webkit-transform-origin: right top;
        transform-origin: right top;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
    @keyframes eight {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
      }
      50% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
      51% {
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }
      100% {
        -webkit-transform-origin: right top;
        transform-origin: right top;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }

    .eight:before {
      -webkit-animation: eight 1.5s infinite ease;
      animation: eight 1.5s infinite ease;
      background-color: var(--primary);
      display: block;
      height: 30px;
      width: 30px;
      content: '';
    }
  }

  .loading-16 {
    @-webkit-keyframes fidget {
      10% {
        -webkit-transform: skewX(60deg);
        transform: skewX(60deg);
      }
      20% {
        -webkit-transform: skewX(-60deg);
        transform: skewX(-60deg);
      }
      30% {
        -webkit-transform: skewX(0deg);
        transform: skewX(0deg);
      }
      40% {
        -webkit-transform: skewY(60deg);
        transform: skewY(60deg);
      }
      50% {
        -webkit-transform: skewY(-60deg);
        transform: skewY(-60deg);
      }
      60% {
        -webkit-transform: skewY(0);
        transform: skewY(0);
      }
    }
    @keyframes fidget {
      10% {
        -webkit-transform: skewX(60deg);
        transform: skewX(60deg);
      }
      20% {
        -webkit-transform: skewX(-60deg);
        transform: skewX(-60deg);
      }
      30% {
        -webkit-transform: skewX(0deg);
        transform: skewX(0deg);
      }
      40% {
        -webkit-transform: skewY(60deg);
        transform: skewY(60deg);
      }
      50% {
        -webkit-transform: skewY(-60deg);
        transform: skewY(-60deg);
      }
      60% {
        -webkit-transform: skewY(0);
        transform: skewY(0);
      }
    }

    .fidget:before {
      -webkit-animation: fidget 1s infinite ease;
      animation: fidget 1s infinite ease;
      background-color: var(--primary);
      border-radius: 100%;
      display: block;
      content: '';
      height: 40px;
      width: 40px;
    }
  }

  .loading-17 {
    @-webkit-keyframes flickering-pentagon {
      20% {
        -webkit-box-shadow: 30px 0 0 0 var(--secondary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--secondary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      40% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--secondary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--secondary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--secondary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--secondary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--secondary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--secondary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--secondary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--secondary);
      }
    }
    @keyframes flickering-pentagon {
      20% {
        -webkit-box-shadow: 30px 0 0 0 var(--secondary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--secondary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      40% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--secondary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--secondary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--secondary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--secondary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--secondary), 9.27051px -28.5317px 0 0 var(--primary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--secondary), 9.27051px -28.5317px 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--secondary);
        box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--secondary);
      }
    }

    .flickering-pentagon:before {
      -webkit-animation: flickering-pentagon 1.25s infinite linear;
      animation: flickering-pentagon 1.25s infinite linear;
      -webkit-box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      box-shadow: 30px 0 0 0 var(--primary), 9.27051px 28.5317px 0 0 var(--primary), -24.27051px 17.63356px 0 0 var(--primary), -24.27051px -17.63356px 0 0 var(--primary), 9.27051px -28.5317px 0 0 var(--primary);
      border-radius: 100%;
      display: block;
      content: '';
      height: 6px;
      width: 6px;
    }
  }

  .loading-18 {
    .flip-square:before {
      -webkit-animation: flip-square 1.5s infinite;
      animation: flip-square 1.5s infinite;
      background-color: var(--primary);
      content: '';
      display: block;
      height: 50px;
      width: 50px;
    }

    @-webkit-keyframes flip-square {
      0% {
        -webkit-transform: perspective(50px) rotate(45deg) rotateX(0deg) rotateY(0deg);
        transform: perspective(50px) rotate(45deg) rotateX(0deg) rotateY(0deg);
      }
      50% {
        -webkit-transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(0deg);
        transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(0deg);
      }
      100% {
        -webkit-transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(-180deg);
        transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(-180deg);
      }
    }

    @keyframes flip-square {
      0% {
        -webkit-transform: perspective(50px) rotate(45deg) rotateX(0deg) rotateY(0deg);
        transform: perspective(50px) rotate(45deg) rotateX(0deg) rotateY(0deg);
      }
      50% {
        -webkit-transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(0deg);
        transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(0deg);
      }
      100% {
        -webkit-transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(-180deg);
        transform: perspective(50px) rotate(45deg) rotateX(-180deg) rotateY(-180deg);
      }
    }
  }

  .loading-19 {
    @-webkit-keyframes fly-by {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-200%) scale(0);
        transform: translateX(-200%) scale(0);
      }
      50% {
        opacity: 1;
        -webkit-transform: translateX(0) scale(1.25);
        transform: translateX(0) scale(1.25);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(200%) scale(0);
        transform: translateX(200%) scale(0);
      }
    }
    @keyframes fly-by {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-200%) scale(0);
        transform: translateX(-200%) scale(0);
      }
      50% {
        opacity: 1;
        -webkit-transform: translateX(0) scale(1.25);
        transform: translateX(0) scale(1.25);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(200%) scale(0);
        transform: translateX(200%) scale(0);
      }
    }

    .fly-by:before {
      -webkit-animation: fly-by 1s infinite ease;
      animation: fly-by 1s infinite ease;
      background-color: var(--primary);
      border-radius: 100%;
      display: block;
      content: '';
      height: 40px;
      width: 40px;
    }
  }

  .loading-20 {
    .four-dots:before {
      display: block;
      height: 5px;
      width: 5px;
      content: '';
      -webkit-animation: spin 1s infinite;
      animation: spin 1s infinite;
      border-radius: 100%;
      -webkit-box-shadow: 20px 0 0 5px var(--primary), 0 20px 0 5px var(--secondary), 0 -20px 0 5px var(--secondary), -20px 0 0 5px var(--primary);
      box-shadow: 20px 0 0 5px var(--primary), 0 20px 0 5px var(--secondary), 0 -20px 0 5px var(--secondary), -20px 0 0 5px var(--primary);
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

  .loading-21 {
    @-webkit-keyframes gyro {
      0% {
        -webkit-transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
        transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
      }
      50% {
        -webkit-transform: scale(0.5) rotate(1440deg) translateY(0);
        transform: scale(0.5) rotate(1440deg) translateY(0);
      }
      100% {
        -webkit-transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
        transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
      }
    }
    @keyframes gyro {
      0% {
        -webkit-transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
        transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
      }
      50% {
        -webkit-transform: scale(0.5) rotate(1440deg) translateY(0);
        transform: scale(0.5) rotate(1440deg) translateY(0);
      }
      100% {
        -webkit-transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
        transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
      }
    }

    .gyro {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .gyro:after, .gyro:before {
      --radius: 250;
      -webkit-animation: gyro 2s infinite linear;
      animation: gyro 2s infinite linear;
      background: var(--primary);
      border-radius: 100%;
      content: '';
      height: 20px;
      width: 20px;
      position: absolute;
    }

    .gyro:before {
      --radius: -250;
      background: var(--secondary);
    }
  }

  .loading-22 {
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

    .half-ring:before {
      -webkit-animation: spin 1s infinite linear;
      animation: spin 1s infinite linear;
      border-radius: 10px;
      -webkit-box-shadow: 25px 0px 0 0 rgba(255, 255, 255, 0.2), 20.22542px 14.69463px 0 0 rgba(255, 255, 255, 0.4), 7.72542px 23.77641px 0 0 rgba(255, 255, 255, 0.6), -7.72542px 23.77641px 0 0 rgba(255, 255, 255, 0.8), -20.22542px 14.69463px 0 0 white;
      box-shadow: 25px 0px 0 0 rgba(255, 255, 255, 0.2), 20.22542px 14.69463px 0 0 rgba(255, 255, 255, 0.4), 7.72542px 23.77641px 0 0 rgba(255, 255, 255, 0.6), -7.72542px 23.77641px 0 0 rgba(255, 255, 255, 0.8), -20.22542px 14.69463px 0 0 white;
      height: 10px;
      width: 10px;
      display: block;
      content: '';
    }
  }

  .loading-23 {
    @-webkit-keyframes line {
      from {
        background-position: -60px 0;
      }
      to {
        background-position: 60px 0;
      }
    }
    @keyframes line {
      from {
        background-position: -60px 0;
      }
      to {
        background-position: 60px 0;
      }
    }

    .line:before {
      -webkit-animation: line .75s infinite alternate ease-in-out;
      animation: line .75s infinite alternate ease-in-out;
      background: -webkit-gradient(linear, left top, right top, from(var(--primary)), to(var(--primary)));
      background: linear-gradient(90deg, var(--primary), var(--primary));
      background-repeat: no-repeat;
      background-size: 60px 20px;
      content: '';
      display: block;
      height: 20px;
      width: 60px;
    }
  }

  .loading-24 {
    .line-of-dots {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .line-of-dots:before {
      -webkit-animation: line-of-dots 1s infinite ease backwards;
      animation: line-of-dots 1s infinite ease backwards;
      border-radius: 100%;
      content: '';
      height: 10px;
      -webkit-transform: translate(0, -100%);
      transform: translate(0, -100%);
      width: 10px;
    }

    @-webkit-keyframes line-of-dots {
      0% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      10% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      20% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      30% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      40% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 -10px var(--primary);
      }
      50% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      70% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      90% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
    }

    @keyframes line-of-dots {
      0% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      10% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      20% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      30% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
      40% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 -10px var(--primary);
      }
      50% {
        -webkit-box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 0 var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 0 var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      70% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 0 var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      80% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 0 var(--primary), 30px 10px 0 0 var(--primary);
      }
      90% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 0 var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
        box-shadow: -30px 10px 0 -10px var(--primary), -15px 10px 0 -10px var(--primary), 0 10px 0 -10px var(--primary), 15px 10px 0 -10px var(--primary), 30px 10px 0 -10px var(--primary);
      }
    }
  }

  .loading-25 {
    .mexican-wave:before {
      -webkit-animation: mexican-wave .75s infinite ease backwards;
      animation: mexican-wave .75s infinite ease backwards;
      border-radius: 100%;
      content: '';
      height: 10px;
      position: absolute;
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
      width: 10px;
    }

    @-webkit-keyframes mexican-wave {
      0% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      15% {
        -webkit-box-shadow: -30px -20px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -20px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      30% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -20px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -20px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      45% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -20px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -20px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -20px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -20px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      75% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -20px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -20px 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
    }

    @keyframes mexican-wave {
      0% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      15% {
        -webkit-box-shadow: -30px -20px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -20px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      30% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -20px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -20px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      45% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -20px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -20px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      60% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -20px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -20px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
      75% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -20px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -20px 0 0 var(--primary);
      }
      100% {
        -webkit-box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
        box-shadow: -30px -10px 0 0 var(--primary), -15px -10px 0 0 var(--primary), 0 -10px 0 0 var(--primary), 15px -10px 0 0 var(--primary), 30px -10px 0 0 var(--primary);
      }
    }
  }

  .loading-26 {
    @-webkit-keyframes orbit {
      0% {
        opacity: 0;
        -webkit-transform: scale(0) translateX(-300%);
        transform: scale(0) translateX(-300%);
      }
      50% {
        opacity: 1;
        -webkit-transform: scale(1.25) translateX(0);
        transform: scale(1.25) translateX(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: scale(0) translateX(300%);
        transform: scale(0) translateX(300%);
      }
    }
    @keyframes orbit {
      0% {
        opacity: 0;
        -webkit-transform: scale(0) translateX(-300%);
        transform: scale(0) translateX(-300%);
      }
      50% {
        opacity: 1;
        -webkit-transform: scale(1.25) translateX(0);
        transform: scale(1.25) translateX(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: scale(0) translateX(300%);
        transform: scale(0) translateX(300%);
      }
    }

    .orbit:before {
      -webkit-animation: orbit 1s infinite;
      animation: orbit 1s infinite;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      height: 50px;
      width: 50px;
      display: block;
    }
  }

  .loading-27 {
    @-webkit-keyframes outline-square {
      0% {
        background: var(--primary);
        -webkit-transform: translate(-100%, -100%);
        transform: translate(-100%, -100%);
      }
      25% {
        background: var(--secondary);
        -webkit-transform: translate(-100%, 100%);
        transform: translate(-100%, 100%);
      }
      50% {
        background: var(--primary);
        -webkit-transform: translate(100%, 100%);
        transform: translate(100%, 100%);
      }
      75% {
        background: var(--secondary);
        -webkit-transform: translate(100%, -100%);
        transform: translate(100%, -100%);
      }
      100% {
        background: var(--primary);
        -webkit-transform: translate(-100%, -100%);
        transform: translate(-100%, -100%);
      }
    }
    @keyframes outline-square {
      0% {
        background: var(--primary);
        -webkit-transform: translate(-100%, -100%);
        transform: translate(-100%, -100%);
      }
      25% {
        background: var(--secondary);
        -webkit-transform: translate(-100%, 100%);
        transform: translate(-100%, 100%);
      }
      50% {
        background: var(--primary);
        -webkit-transform: translate(100%, 100%);
        transform: translate(100%, 100%);
      }
      75% {
        background: var(--secondary);
        -webkit-transform: translate(100%, -100%);
        transform: translate(100%, -100%);
      }
      100% {
        background: var(--primary);
        -webkit-transform: translate(-100%, -100%);
        transform: translate(-100%, -100%);
      }
    }

    .outline-square:before {
      content: '';
      display: block;
      height: 30px;
      width: 30px;
      -webkit-animation: outline-square 1.5s infinite;
      animation: outline-square 1.5s infinite;
      border-radius: 100%;
    }
  }

  .loading-28 {
    @-webkit-keyframes palette {
      0% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
      }
      20% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
        box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
      }
      40% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
      }
      60% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
        box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
      }
      80% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
      }
      100% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes palette {
      0% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
      }
      20% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
        box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
      }
      40% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
      }
      60% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
        box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--secondary);
      }
      80% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--primary), 6.18034px 19.02113px 0 0 var(--secondary), -16.18034px 11.75571px 0 0 var(--primary), -16.18034px -11.75571px 0 0 var(--secondary), 6.18034px -19.02113px 0 0 var(--primary);
      }
      100% {
        color: var(--primary);
        -webkit-box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
        box-shadow: 20px 0px 0 0 var(--secondary), 6.18034px 19.02113px 0 0 var(--primary), -16.18034px 11.75571px 0 0 var(--secondary), -16.18034px -11.75571px 0 0 var(--primary), 6.18034px -19.02113px 0 0 var(--primary);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .palette:before {
      content: '';
      display: block;
      height: 12px;
      width: 12px;
      -webkit-animation: palette 2s infinite linear;
      animation: palette 2s infinite linear;
      border-radius: 100%;
    }
  }

  .loading-29 {
    @-webkit-keyframes pendulum {
      from {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg);
      }
      to {
        -webkit-transform: rotate(-50deg);
        transform: rotate(-50deg);
      }
    }
    @keyframes pendulum {
      from {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg);
      }
      to {
        -webkit-transform: rotate(-50deg);
        transform: rotate(-50deg);
      }
    }

    .pendulum:after {
      background: var(--primary);
      border-radius: 100%;
      bottom: 0;
      content: '';
      height: 30px;
      width: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -15px;
      -webkit-transform-origin: 50% -200%;
      transform-origin: 50% -200%;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      -webkit-animation: pendulum 1s infinite alternate ease-in-out;
      animation: pendulum 1s infinite alternate ease-in-out;
    }
  }

  .loading-30 {
    @-webkit-keyframes pill {
      0% {
        background-position: 0 0;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      25% {
        background-position: 0 100%;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        background-position: 0 100%;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      75% {
        background-position: 0 200%;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      100% {
        background-position: 0 200%;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes pill {
      0% {
        background-position: 0 0;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      25% {
        background-position: 0 100%;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        background-position: 0 100%;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      75% {
        background-position: 0 200%;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      100% {
        background-position: 0 200%;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .pill {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pill:before {
      content: '';
      height: 60px;
      width: 30px;
      -webkit-animation: pill 2s infinite backwards;
      animation: pill 2s infinite backwards;
      background: -webkit-gradient(linear, left bottom, left top, from(var(--secondary)), color-stop(50%, var(--secondary)), color-stop(50%, transparent), to(transparent));
      background: linear-gradient(0deg, var(--secondary), var(--secondary) 50%, transparent 50%, transparent);
      background-size: 100% 200%;
      background-repeat: no-repeat;
      border: 6px solid var(--primary);
      border-radius: 15px;
    }
  }

  .loading-31 {
    @-webkit-keyframes radial {
      0% {
        -webkit-transform: rotate(calc(var(--base) * 1deg)) translateY(150%);
        transform: rotate(calc(var(--base) * 1deg)) translateY(150%);
      }
      100% {
        -webkit-transform: rotate(calc((var(--base) + 1440) * 1deg)) translateY(150%);
        transform: rotate(calc((var(--base) + 1440) * 1deg)) translateY(150%);
      }
    }
    @keyframes radial {
      0% {
        -webkit-transform: rotate(calc(var(--base) * 1deg)) translateY(150%);
        transform: rotate(calc(var(--base) * 1deg)) translateY(150%);
      }
      100% {
        -webkit-transform: rotate(calc((var(--base) + 1440) * 1deg)) translateY(150%);
        transform: rotate(calc((var(--base) + 1440) * 1deg)) translateY(150%);
      }
    }

    .radial {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .radial:after, .radial:before {
      background-color: var(--color);
      -webkit-animation: radial 0.75s infinite linear;
      animation: radial 0.75s infinite linear;
      content: '';
      display: block;
      height: 10px;
      width: 5px;
    }

    .radial:after {
      --color: var(--secondary);
      --base: 0;
    }

    .radial:before {
      --base: 180;
      --color: var(--primary);
    }
  }

  .loading-32 {
    @-webkit-keyframes rays {
      from {
        opacity: 1;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      to {
        opacity: 0;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes rays {
      from {
        opacity: 1;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      to {
        opacity: 0;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    .rays {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .rays:after, .rays:before {
      border-radius: 100%;
      content: '';
      position: absolute;
    }

    .rays:after {
      -webkit-animation: rays 1.5s infinite;
      animation: rays 1.5s infinite;
      border: 10px solid var(--primary);
      height: 100px;
      width: 100px;
    }

    .rays:before {
      background: var(--primary);
      height: 20px;
      width: 20px;
    }
  }

  .loading-33 {
    @-webkit-keyframes ring-of-dots {
      0% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
      }
      14.28571% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 #ba98dd, -4.45042px -19.49856px 0 0 #663399, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 #ba98dd, -4.45042px -19.49856px 0 0 #663399, 12.4698px -15.63663px 0 0 white;
      }
      28.57143% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 #ba98dd, -18.01938px -8.67767px 0 0 #663399, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 #ba98dd, -18.01938px -8.67767px 0 0 #663399, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      42.85714% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 #ba98dd, -18.01938px 8.67767px 0 0 #663399, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 #ba98dd, -18.01938px 8.67767px 0 0 #663399, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      57.14286% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 #ba98dd, -4.45042px 19.49856px 0 0 #663399, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 #ba98dd, -4.45042px 19.49856px 0 0 #663399, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      71.42857% {
        -webkit-box-shadow: 20px 0px 0 0 #ba98dd, 12.4698px 15.63663px 0 0 #663399, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 #ba98dd, 12.4698px 15.63663px 0 0 #663399, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      85.71429% {
        -webkit-box-shadow: 20px 0px 0 0 #663399, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 #ba98dd;
        box-shadow: 20px 0px 0 0 #663399, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 #ba98dd;
      }
      100% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
      }
    }
    @keyframes ring-of-dots {
      0% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
      }
      14.28571% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 #ba98dd, -4.45042px -19.49856px 0 0 #663399, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 #ba98dd, -4.45042px -19.49856px 0 0 #663399, 12.4698px -15.63663px 0 0 white;
      }
      28.57143% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 #ba98dd, -18.01938px -8.67767px 0 0 #663399, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 #ba98dd, -18.01938px -8.67767px 0 0 #663399, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      42.85714% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 #ba98dd, -18.01938px 8.67767px 0 0 #663399, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 #ba98dd, -18.01938px 8.67767px 0 0 #663399, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      57.14286% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 #ba98dd, -4.45042px 19.49856px 0 0 #663399, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 #ba98dd, -4.45042px 19.49856px 0 0 #663399, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      71.42857% {
        -webkit-box-shadow: 20px 0px 0 0 #ba98dd, 12.4698px 15.63663px 0 0 #663399, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
        box-shadow: 20px 0px 0 0 #ba98dd, 12.4698px 15.63663px 0 0 #663399, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 white;
      }
      85.71429% {
        -webkit-box-shadow: 20px 0px 0 0 #663399, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 #ba98dd;
        box-shadow: 20px 0px 0 0 #663399, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 white, 12.4698px -15.63663px 0 0 #ba98dd;
      }
      100% {
        -webkit-box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
        box-shadow: 20px 0px 0 0 white, 12.4698px 15.63663px 0 0 white, -4.45042px 19.49856px 0 0 white, -18.01938px 8.67767px 0 0 white, -18.01938px -8.67767px 0 0 white, -4.45042px -19.49856px 0 0 #ba98dd, 12.4698px -15.63663px 0 0 #663399;
      }
    }

    .ring-of-dots:before {
      animation: ring-of-dots 1s infinite linear reverse;
      border-radius: 10px;
      content: '';
      display: block;
      height: 10px;
      width: 10px;
    }
  }

  .loading-34 {
    @-webkit-keyframes ringed {
      to {
        -webkit-transform: rotate(360deg) translateY(-22px);
        transform: rotate(360deg) translateY(-22px);
      }
    }
    @keyframes ringed {
      to {
        -webkit-transform: rotate(360deg) translateY(-22px);
        transform: rotate(360deg) translateY(-22px);
      }
    }

    .ringed {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ringed:after, .ringed:before {
      border-radius: 100%;
      content: '';
      position: absolute;
    }

    .ringed:after {
      -webkit-animation: ringed .75s infinite linear both;
      animation: ringed .75s infinite linear both;
      background: var(--secondary);
      height: 16px;
      -webkit-transform: rotate(0deg) translateY(-22px);
      transform: rotate(0deg) translateY(-22px);
      width: 16px;
    }

    .ringed:before {
      border: 6px solid var(--primary);
      height: 50px;
      width: 50px;
    }
  }

  .loading-35 {
    @-webkit-keyframes rings {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rings {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .rings:after, .rings:before {
      -webkit-animation: rings 1s infinite linear;
      animation: rings 1s infinite linear;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 6px solid rgba(255, 255, 255, 0.5);
      border-radius: 100%;
      content: '';
      height: 30px;
      left: 50%;
      margin-top: -15px;
      position: absolute;
      top: 50%;
      width: 30px;
    }

    .rings:after {
      border-left-color: #fff;
      margin-left: -2px;
    }

    .rings:before {
      animation-direction: reverse;
      border-right-color: #fff;
      margin-left: -28px;
    }
  }

  .loading-36 {
    @-webkit-keyframes rotary {
      0% {
        -webkit-transform: rotate(0deg) translateX(150%) scale(1);
        transform: rotate(0deg) translateX(150%) scale(1);
      }
      25% {
        -webkit-transform: rotate(90deg) translateX(150%) scale(0);
        transform: rotate(90deg) translateX(150%) scale(0);
      }
      75% {
        -webkit-transform: rotate(270deg) translateX(150%) scale(1.5);
        transform: rotate(270deg) translateX(150%) scale(1.5);
      }
      100% {
        -webkit-transform: rotate(360deg) translateX(150%) scale(1);
        transform: rotate(360deg) translateX(150%) scale(1);
      }
    }
    @keyframes rotary {
      0% {
        -webkit-transform: rotate(0deg) translateX(150%) scale(1);
        transform: rotate(0deg) translateX(150%) scale(1);
      }
      25% {
        -webkit-transform: rotate(90deg) translateX(150%) scale(0);
        transform: rotate(90deg) translateX(150%) scale(0);
      }
      75% {
        -webkit-transform: rotate(270deg) translateX(150%) scale(1.5);
        transform: rotate(270deg) translateX(150%) scale(1.5);
      }
      100% {
        -webkit-transform: rotate(360deg) translateX(150%) scale(1);
        transform: rotate(360deg) translateX(150%) scale(1);
      }
    }

    .rotary:before {
      -webkit-animation: rotary 1s infinite linear;
      animation: rotary 1s infinite linear;
      background-color: var(--primary);
      border-radius: 100%;
      content: '';
      display: block;
      height: 25px;
      width: 25px;
    }
  }

}
</style>
