import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue';
import CreatePost from '../views/CreatePost.vue';
import ArticleDetail from '../views/ArticleDetail.vue';
import CreateAccount from '../views/CreateAccount.vue';

export const RoutePath = {
  home: '/',
  login: '/login',
  createpost: '/create-post',
  article: (id?: number) => {
    return `/articles/${id || ':id'}`;
  },
  createaccount: '/create-account',
};

const Routes: Array<RouteRecordRaw> = [
  { name: 'Home', path: RoutePath.home, component: HomePage },
  { name: 'Login', path: RoutePath.login, component: Login },
  { name: 'CreatePost', path: RoutePath.createpost, component: CreatePost },
  { name: 'article', path: RoutePath.article(), component: ArticleDetail },
  {
    name: 'CreateAccount',
    path: RoutePath.createaccount,
    component: CreateAccount,
  },
];

export default Routes;
