<script setup lang="ts">
import router from '@/router/index'
import type {RouteRecord} from 'vue-router'

interface Component {
  title: string
  thumb: string
  path: string
}

const routers = router.getRoutes()
const coms: Component[] = []

const getThumbByPath = (item: RouteRecord): string => {
  let path = item.path
  if (path.startsWith('/')) {
    path = path.substring(1)
  }
  return `/assets/images/component-thumb/${path}.png`
}

routers.forEach(item => {
  const meta = item.meta
  if (Object.keys(meta).length === 0 || !meta['title']) {
    return
  }

  coms.push({
    title: meta['title'] as string,
    thumb: item.meta['thumb'] as string || getThumbByPath(item),
    path: item.path
  })
})

// TODO 后期改成配置与下方语言列表一起改
const isJsComPaths = ['/buy-car-add-animation', '/light-bulb', '/swirl']

</script>

<template>
  <div class="page-container">
    <div
      v-for="(com, index) in coms"
      :key="index"
      :title="com.title"
      class="component-box"
    >
      <router-link :to="com.path" target="_blank">
        <img :src="com.thumb" :alt="com.title" class="component-thumb">
      </router-link>
      <div class="component-introduce">
        <span class="component-title">{{ com.title }}</span>

        <!-- TODO 这里要通过配置进行生成语言列表，暂时先写死，太晚了，睡觉了...... -->
        <span class="component-use-language language-html">HTML</span>
        <span class="component-use-language language-css">CSS</span>
        <span v-if="isJsComPaths.includes(com.path)" class="component-use-language language-js">JS</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 20px 10px;
  display: flex;
  gap: 50px 32px;
  flex-wrap: wrap;
  font-size: 14px;
  background-color: #3f3a3a;
  color: #fff;

  .component-box {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;

    .component-thumb {
      width: 350px;
      height: 350px;
      border-radius: 8px;
      user-select: none;
      cursor: pointer;
    }

    .component-introduce {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;

      .component-title {
        flex: 1;
        width: 0;
        text-align: left;
        cursor: default;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .component-use-language {
        width: fit-content;
        height: 16px;
        line-height: 14px;
        border-radius: 2px;
        padding: 0 10px;
        font-size: 12px;
        user-select: none;

        &.language-html {
          background-color: #286e11;
        }

        &.language-css {
          background-color: #a94718;
        }

        &.language-js {
          background-color: #1182f7;
        }
      }
    }


  }
}
</style>
