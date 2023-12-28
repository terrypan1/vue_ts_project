import { createRouter, createWebHashHistory } from 'vue-router'

//RouteRecordRaw 內置的類型接口
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/BaseLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/Dashboard/TsDashboard.vue'),
        },
        {
          path: 'todo',
          name: 'todo',
          component: () => import('../views/Todo/Todo.vue'),
        },
        {
          path: 'canvasDemo',
          name: 'canvasDemo',
          component: () => import('../views/CanvasDemo/CanvasDemo.vue'),
        },
        {
          path: 'flastPickerDemo',
          name: 'flastPickerDemo',
          component: () => import('../views/Forms/FlatPickr.vue'),
        },
        {
          path: 'scrumboard',
          name: 'scrumboard',
          component: () => import('../views/Draggable/Scrumboard.vue'),
        },
        {
          path: 'login',
          name: 'layouLogin',
          component: () => import('../views/Anthentication/Login.vue'),
        },
        {
          path: 'helpers',
          name: 'helpers',
          component: () => import('../views/Tables/Helpers.vue'),
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('../views/Apps/Chat.vue'),
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: () => import('../views/Apps/Calendar.vue'),
        },
        {
          path: 'priceCalculator',
          name: 'priceCalculator',
          component: () => import('../views/Apps/PriceCalculator.vue'),
        },
        {
          path: 'imagesOverlay',
          name: 'imagesOverlay',
          component: () => import('../views/Elements/ImagesOverlay.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: "/",
      redirect: 'login'
    },
  ]
})

export default router
