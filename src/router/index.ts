import { createRouter, createWebHashHistory } from 'vue-router'


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
        }
      ],
    },
    {
      path: "/",
      redirect: '/layout'
    },
  ]
})

export default router
