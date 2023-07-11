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
    },
    {
      path: '/loading-03',
      name: 'Loading03',
      meta: {
        title: 'loading - 03'
      },
      component: () => import('@/views/components/loading-03/index.vue')
    },
    {
      path: '/loading-04',
      name: 'Loading04',
      meta: {
        title: 'loading - 04'
      },
      component: () => import('@/views/components/loading-04/index.vue')
    },
    {
      path: '/loading-05',
      name: 'Loading05',
      meta: {
        title: 'loading - 05'
      },
      component: () => import('@/views/components/loading-05/index.vue')
    },
    {
      path: '/loading-06',
      name: 'Loading06',
      meta: {
        title: 'loading - 06'
      },
      component: () => import('@/views/components/loading-06/index.vue')
    },
    {
      path: '/loading-07',
      name: 'Loading07',
      meta: {
        title: 'loading - 07'
      },
      component: () => import('@/views/components/loading-07/index.vue')
    },
    {
      path: '/loading-08',
      name: 'Loading08',
      meta: {
        title: 'loading - 08'
      },
      component: () => import('@/views/components/loading-08/index.vue')
    },
    {
      path: '/loading-09',
      name: 'Loading09',
      meta: {
        title: 'loading - 09'
      },
      component: () => import('@/views/components/loading-09/index.vue')
    },
    {
      path: '/loading-10',
      name: 'Loading10',
      meta: {
        title: 'loading - 10'
      },
      component: () => import('@/views/components/loading-10/index.vue')
    },
    {
      path: '/loading-11',
      name: 'Loading11',
      meta: {
        title: 'loading - 11'
      },
      component: () => import('@/views/components/loading-11/index.vue')
    },
    {
      path: '/loading-12',
      name: 'Loading12',
      meta: {
        title: 'loading - 12'
      },
      component: () => import('@/views/components/loading-12/index.vue')
    },
    {
      path: '/loading-13',
      name: 'Loading13',
      meta: {
        title: 'loading - 13'
      },
      component: () => import('@/views/components/loading-13/index.vue')
    },
    {
      path: '/loading-14',
      name: 'Loading14',
      meta: {
        title: 'loading - 14'
      },
      component: () => import('@/views/components/loading-14/index.vue')
    },
    {
      path: '/loading-15',
      name: 'Loading15',
      meta: {
        title: 'loading - 15'
      },
      component: () => import('@/views/components/loading-15/index.vue')
    },
    {
      path: '/loading-16',
      name: 'Loading16',
      meta: {
        title: 'loading - 16'
      },
      component: () => import('@/views/components/loading-16/index.vue')
    },
    {
      path: '/loading-17',
      name: 'Loading17',
      meta: {
        title: 'loading - 17'
      },
      component: () => import('@/views/components/loading-17/index.vue')
    },
    {
      path: '/loading-18',
      name: 'Loading18',
      meta: {
        title: 'loading - 18'
      },
      component: () => import('@/views/components/loading-18/index.vue')
    },
    {
      path: '/loading-19',
      name: 'Loading19',
      meta: {
        title: 'loading - 19'
      },
      component: () => import('@/views/components/loading-19/index.vue')
    },
    {
      path: '/loading-20',
      name: 'Loading20',
      meta: {
        title: 'loading - 20'
      },
      component: () => import('@/views/components/loading-20/index.vue')
    },
    {
      path: '/loading-21',
      name: 'Loading21',
      meta: {
        title: 'loading - 21'
      },
      component: () => import('@/views/components/loading-21/index.vue')
    },
    {
      path: '/loading-22',
      name: 'Loading22',
      meta: {
        title: 'loading - 22'
      },
      component: () => import('@/views/components/loading-22/index.vue')
    },
    {
      path: '/loading-23',
      name: 'Loading23',
      meta: {
        title: 'loading - 23'
      },
      component: () => import('@/views/components/loading-23/index.vue')
    },
    {
      path: '/loading-24',
      name: 'Loading24',
      meta: {
        title: 'loading - 24'
      },
      component: () => import('@/views/components/loading-24/index.vue')
    },
    {
      path: '/loading-25',
      name: 'Loading25',
      meta: {
        title: 'loading - 25'
      },
      component: () => import('@/views/components/loading-25/index.vue')
    },
    {
      path: '/loading-26',
      name: 'Loading26',
      meta: {
        title: 'loading - 26'
      },
      component: () => import('@/views/components/loading-26/index.vue')
    },
    {
      path: '/loading-27',
      name: 'Loading27',
      meta: {
        title: 'loading - 27'
      },
      component: () => import('@/views/components/loading-27/index.vue')
    },
    {
      path: '/text-melt-expand',
      name: 'TextMeltExpand',
      meta: {
        title: '文字融化展开'
      },
      component: () => import('@/views/components/text-melt-expand/index.vue')
    },
    {
      path: '/tooltip-content',
      name: 'TooltipContent',
      meta: {
        title: '提示框内容'
      },
      component: () => import('@/views/components/tooltip-content/index.vue')
    },
    {
      path: '/login-01',
      name: 'Login01',
      meta: {
        title: '登录页'
      },
      component: () => import('@/views/components/login-01/index.vue')
    },
    {
      path: '/text-effect-01',
      name: 'TextEffect01',
      meta: {
        title: 'text-effect-01'
      },
      component: () => import('@/views/components/text-effect-01/index.vue')
    }
  ]
})

export default router
