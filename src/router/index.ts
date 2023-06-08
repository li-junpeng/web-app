import {createRouter, createWebHistory} from 'vue-router'

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
        title: '手机充电效果'
      },
      component: () => import('@/views/components/phone-charge/index.vue')
    },
    {
      path: '/hourglass-loading',
      name: 'HourglassLoading',
      meta: {
        title: '沙漏加载动画'
      },
      component: () => import('@/views/components/hourglass-loading/index.vue')
    },
    {
      path: '/input-label-animation',
      name: 'InputLabelAnimation',
      meta: {
        title: '输入框标签动画'
      },
      component: () => import('@/views/components/input-label-animation/index.vue')
    },
    {
      path: '/lyrics-fill',
      name: 'LyricsFill',
      meta: {
        title: '歌词文本填充效果'
      },
      component: () => import('@/views/components/lyrics-fill/index.vue')
    },
    {
      path: '/water-jolt',
      name: 'WaterJolt',
      meta: {
        title: '水杯晃动效果'
      },
      component: () => import('@/views/components/water-jolt/index.vue')
    },
    {
      path: '/menu-btn',
      name: 'MenuBtn',
      meta: {
        title: '菜单按钮动画'
      },
      component: () => import('@/views/components/menu-btn/index.vue')
    },
    {
      path: '/buy-car-add-animation',
      name: 'BuyCarAddAnimation',
      meta: {
        title: '购物车添加商品动画'
      },
      component: () => import('@/views/components/buy-car-add-animation/index.vue')
    },
    {
      path: '/light-bulb',
      name: 'LightBulb',
      meta: {
        title: '会发光的灯泡'
      },
      component: () => import('@/views/components/light-bulb/index.vue')
    },
    {
      path: '/text-dance-loading',
      name: 'TextDanceLoading',
      meta: {
        title: '会跳动的文字加载动画'
      },
      component: () => import('@/views/components/text-dance-loading/index.vue')
    },
    {
      path: '/swirl',
      name: 'Swirl',
      meta: {
        title: '漩涡'
      },
      component: () => import('@/views/components/swirl/index.vue')
    },
    {
      path: '/jolt-bottle',
      name: 'JoltBottle',
      meta: {
        title: '摇晃的瓶子'
      },
      component: () => import('@/views/components/jolt-bottle/index.vue')
    },
    {
      path: '/bougie',
      name: 'Bougie',
      meta: {
        title: '蜡烛'
      },
      component: () => import('@/views/components/bougie/index.vue')
    },
    {
      path: '/loading-01',
      name: 'Loading01',
      meta: {
        title: 'loading - 01'
      },
      component: () => import('@/views/components/loading-01/index.vue')
    },
    {
      path: '/loading-02',
      name: 'Loading02',
      meta: {
        title: 'loading - 02'
      },
      component: () => import('@/views/components/loading-02/index.vue')
    }
  ]
})

export default router
