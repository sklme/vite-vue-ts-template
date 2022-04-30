import { RouteRecordRaw } from 'vue-router';

import PageOne from '@/index/views/PageOne.vue';
import PageTwo from '@/index/views/PageTwo.js';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PageOne,
  },
  {
    path: '/page-2',
    name: '哈哈',
    component: PageTwo,
  },
];

export default routes;
