import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import CreatePost from '../views/CreatePost.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

export const RoutePath = {
    home: '/',
    login: '/login',
    createpost: '/createpost',
    article: '/articles/:id',
};

const Routes:Array<RouteRecordRaw> = [
    { name:'Home', path: RoutePath.home, component: HomePage},
    { name:'Login', path: RoutePath.login, component: Login},
    { name:'CreatePost', path: RoutePath.createpost, component: CreatePost},
    { name:'article', path: RoutePath.article, component: ArticleDetail},
]

export default Routes;