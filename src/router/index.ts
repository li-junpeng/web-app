import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/streamer-card',
      name: 'StreamerCard',
      meta: {
        title: '流光卡片',
        // 优先获取thumb字段为缩略图图片，如果没有该属性，则以路由 path + .png 为准
        thumb: '/assets/images/component-thumb/streamer-card.png'
      },
      component: () => import('@/views/components/streamer-card/index.vue')
    },
    {
      path: '/love-you-heart',
      name: 'LoveYouHeart',
      meta: {
        title: '爱你的心'
      },
      component: () => import('@/views/components/love-you-heart/index.vue')
    },
    {
      path: '/rotate-menu-button',
      name: 'RotateMenuButton',
      meta: {
        title: '旋转菜单按钮'
      },
      component: () => import('@/views/components/rotate-menu-button/index.vue')
    },
    {
      path: '/css-animations-show-type',
      name: 'CssAnimationsShowType',
      meta: {
        title: 'css-animations'
      },
      component: () => import('@/views/components/css-animations-show-type/index.vue')
    },
    {
      path: '/sun',
      name: 'Sun',
      meta: {
        title: '太阳'
      },
      component: () => import('@/views/components/sun/index.vue')
    },
    {
      path: '/water-drop',
      name: 'WaterDrop',
      meta: {
        title: '水滴'
      },
      component: () => import('@/views/components/water-drop/index.vue')
    },
    {
      path: '/cloud-rain',
      name: 'CloudRain',
      meta: {
        title: '下雨'
      },
      component: () => import('@/views/components/cloud-rain/index.vue')
    },
    {
      path: '/phone-charge',
      name: 'PhoneCharge',
      meta: {
        title: '手机充电'
      },
      component: () => import('@/views/components/phone-charge/index.vue')
    }
  ]
})

export default router
