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
        title: '流光卡片'
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
    }
  ]
})

export default router
