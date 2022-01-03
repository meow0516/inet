import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

export const RoutePath = {
    home: '/',
    article: 'articles/:id',
};

const Routes:Array<RouteRecordRaw> = [
    { name:'Home', path: RoutePath.home, component: HomePage},
]

export default Routes;