import * as VueRouter from 'vue-router'
import Routes from './Routes'

const Router = VueRouter.createRouter({
   history: VueRouter.createWebHistory(),
   routes: Routes, 
});

export default Router;