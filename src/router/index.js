import { createWebHistory, createRouter } from 'vue-router';

import BoardMain from '../components/BoardMain.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardRegister from '../components/BoardRegister.vue';

const routes = [

  {
    path: '/',
    name: 'BoardMain',
    component: BoardMain,
  },
  {
    path: '/board_register',
    name: 'BoardRegister',
    component: BoardRegister,
  },
  {
    path: '/board_detail/:idx',
    name: 'BoardDetail',
    component: BoardDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;