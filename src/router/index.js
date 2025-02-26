import { createWebHistory, createRouter } from 'vue-router';

import BoardMain from '../components/BoardMain.vue';
import BoardDetail from '../components/BoardDetail.vue';

const routes = [

  {
    path: '/',
    name: 'BoardMain',
    component: BoardMain,
  },
  {
    path: '/Board_detail/:id',
    name: 'BoardDetail',
    component: BoardDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;