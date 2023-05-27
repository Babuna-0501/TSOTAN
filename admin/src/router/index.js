import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'

import home from '../pages/home'
import add from '../pages/add'
import list from '../pages/list'
import edit from '../pages/edit'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'add',
          path: '/add',
          component:add
        },
        {
          name: 'list',
          path: '/list',
          component:list
        },
        {
          name: 'edit',
          path: '/edit/:id',
          component:edit
        },
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  