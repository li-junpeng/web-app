<!--
 * aurora borealis text
 *
 * from https://codepen.io/yoksel/pen/xbxOGO
 * @author Junpeng.Li
 * @date 2023-07-11 14-58
-->
<script setup lang="ts">

</script>

<template>
  <div class="demo--dancing-shadows">
    <h1 class="demo--dancing-shadows__title">
    <span class="text-wrapper">
      <span class="text-items">
        <span class="text-item text-item--1">Aurora</span>
        <span class="text-item text-item--2">Borealis</span>
        <span class="text-item text-item--3">Text</span>
      </span>
     </span>
    </h1>
  </div>
</template>

<style scoped lang="scss">
$shadow-size: 15vh;
$shadow-offset: $shadow-size * 1.5;
$shadow-colors: purple, violet, teal, orangered, yellow, crimson, yellowgreen, orange, darkturquoise, pink, steelblue, turquoise, coral, skyblue, darkviolet, gold, darkslateblue;
$colors-max: length($shadow-colors);

$shadows-steps: 4;
$colors-in-step: round($colors-max/$shadows-steps);

$title-text-color: white;
$title-bg-color: black;


$matrix-h: 30;
$matrix-v: 20;

@function get_color($position) {
  $color: nth($shadow-colors, 1);


  @if ($position < $colors-max) {
    $color: nth($shadow-colors, $position);
  } @else {
    $fixed-position: $position % $colors-max + 1;
    $color: nth($shadow-colors, $fixed-position);
  }

  @return $color;
}

@function shadow-matrix ($color-offset: 0) {
  $out: null;
  $cell-counter: 1;

  @for $cell_column from 1 through $matrix-v {
    $step-v: ($cell_column - 1) * $shadow-offset;

    @for $cell_row from 1 through $matrix-h {
      $color: get_color($cell-counter + $color-offset);

      $step-h: ($cell_row - 1) * $shadow-offset;
      $out: append($out, $step-h $step-v $shadow-size $shadow-size $color, comma);

      $cell-counter: $cell-counter + 1;

    }

  }

  @return $out;

}

@import url(https://fonts.googleapis.com/css?family=Lobster&subset=latin,cyrillic);

HTML,
BODY {
  width: 100%;
  height: 100%;
}

BODY {
  background: #000;
}

.demo--dancing-shadows__title {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;

  .text-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 5% 0;
    font-size: 23vh;
    line-height: 1.05;
    font-style: italic;
    font-family: Lobster;
    background: $title-bg-color;
    text-shadow: 0 .1rem $title-bg-color,
    0 .2rem $title-bg-color,
    0 .3rem $title-bg-color,
    0 .4rem $title-bg-color,
    0 .6rem $title-bg-color,
    0 .7rem $title-text-color,
    0 .8rem $title-text-color;
    color: $title-text-color;
    mix-blend-mode: darken;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    box-shadow: shadow-matrix();
    animation: shadows-cells 2s linear infinite;
  }
}

.text-items {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 3.3em;
  margin: 0 auto;
  /*   border: 2px solid red; */
  transform: translateY(-50%) rotate(-10deg);
  text-align: center;
}

.text-item {
  display: block;
  position: relative;

  &--2 {
    margin-left: -.4em;
  }

  &--3 {
    margin-left: -.7em;
  }
}

@keyframes shadows-cells {
  25% {
    box-shadow: shadow-matrix($colors-in-step*2);
  }
  45% {
    box-shadow: shadow-matrix($colors-in-step);
  }
  75% {
    box-shadow: shadow-matrix($colors-in-step*3);
  }
}
</style>
