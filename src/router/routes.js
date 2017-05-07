import App from '../App.vue';
import Users from '../Users.vue';

import NotFoundComponent from '../NotFound.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: App,
    beforeEnter: (to, from, next) => {
      next();
    }
  },

  {
    path: '/users/:username',
    name: 'Users',
    component: Users
  },

  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundComponent
  },

  {
    path: '*',
    redirect: '/404'
  }
];