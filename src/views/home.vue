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

</script>

<template>
  <div class="page-container">
    <div
      v-for="(com, index) in coms"
      :key="index"
      class="component-box"
    >
      <router-link :to="com.path" target="_blank">
        <img :src="com.thumb" :alt="com.title" class="component-thumb">
      </router-link>
      <span class="component-title">{{ com.title }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 10px;
  display: flex;
  gap: 50px 32px;
  flex-wrap: wrap;
  font-size: 14px;

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

    .component-title {
      width: 100%;
      margin-top: 10px;
      text-align: left;
      cursor: default;
    }
  }
}
</style>
