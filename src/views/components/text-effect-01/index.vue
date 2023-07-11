<!--
 * text-effect-01
 *
 * @author Junpeng.Li
 * @date 2023-07-11 14-53
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>
      <span>w</span>
      <span>o</span>
      <span>o</span>
      <span>h</span>
      <span>o</span>
      <span>o</span>
      <span>o</span>
      <span>!</span>
    </h1>
  </div>
</template>

<style scoped lang="scss">
@use "../base";

.container{
  -webkit-font-smoothing: antialiased;
  background-color: #FF7777;
}

h1 {
  height: 100px;
}

h1 span {
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-family: 'Titan One', cursive;
  font-size: 80px;
  color: #FFF;
  text-shadow: 0 1px 0 #CCC,
  0 2px 0 #CCC,
  0 3px 0 #CCC,
  0 4px 0 #CCC,
  0 5px 0 #CCC,
  0 6px 0 transparent,
  0 7px 0 transparent,
  0 8px 0 transparent,
  0 9px 0 transparent,
  0 10px 10px rgba(0, 0, 0, .4);
}

h1 span:nth-child(2) { animation-delay: .1s; }
h1 span:nth-child(3) { animation-delay: .2s; }
h1 span:nth-child(4) { animation-delay: .3s; }
h1 span:nth-child(5) { animation-delay: .4s; }
h1 span:nth-child(6) { animation-delay: .5s; }
h1 span:nth-child(7) { animation-delay: .6s; }
h1 span:nth-child(8) { animation-delay: .7s; }

@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC,
    0 2px 0 #CCC,
    0 3px 0 #CCC,
    0 4px 0 #CCC,
    0 5px 0 #CCC,
    0 6px 0 #CCC,
    0 7px 0 #CCC,
    0 8px 0 #CCC,
    0 9px 0 #CCC,
    0 50px 25px rgba(0, 0, 0, .2);
  }
}
</style>
