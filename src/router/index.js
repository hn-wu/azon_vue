import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue';
import CmdView from '../views/CmdView.vue';
import FileView from '../views/FileView.vue';
import ProcessView from '../views/ProcessView.vue';
import NetworkView from '../views/NetworkView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      name: 'user',
      component: UserView,
    },
    {
      path: '/cmd',
      name: 'cmd',
      component: CmdView,
    },
    {
      path: '/file',
      name: 'file',
      component: FileView,
    },
    {
      path: '/process',
      name: 'process',
      component: ProcessView,
    },
    {
      path: '/network',
      name: 'network',
      component: NetworkView,
    },
  ]
})
export default router;
