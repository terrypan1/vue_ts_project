import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
