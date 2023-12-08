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
          name: 'login',
          component: () => import('../views/System/Login.vue'),
        }
      ],
    },
    {
      path: "/",
      redirect: '/layout/dashboard'
    },
  ]
})

export default router
