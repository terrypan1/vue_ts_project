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
          path: 'datatable',
          name: 'datatable',
          component: () => import('../views/Tables/Vue3-Datatable.vue'),
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
        {
          path: 'infiniteScroll',
          name: 'infiniteScroll',
          component: () => import('../views/Apps/infiniteScroll.vue'),
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: () => import('../views/Elements/Carousel.vue'),
        },
        {
          path: 'pagination',
          name: 'pagination',
          component: () => import('../views/Elements/Pagination.vue'),
        },
        {
          path: 'wizard',
          name: 'wizard',
          component: () => import('../views/Elements/Wizard.vue'),
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
