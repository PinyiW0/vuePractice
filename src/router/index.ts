import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { // 前台
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        { 
          path: '', // 空路径 
          redirect: '/home' // 重新導向 home 加了之後才能正常運行
        },
        { 
          path: 'home',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        { // 練習一
          path: 'one',
          name: 'one',
          component: () => import('../views/front/PracticeOne.vue'),
        },
        { // 練習二
          path: 'two',
          name: 'two',
          component: () => import('../views/front/PracticeTwo.vue'),
        },
        { // 練習三
          path: 'three',
          name: 'three',
          component: () => import('../views/front/PracticeThree.vue'),
        },
        { // 練習四
          path: 'four',
          name: 'four',
          component: () => import('../views/front/PracticeFour.vue'),
        },
      ],
    },
  ]
})

export default router
