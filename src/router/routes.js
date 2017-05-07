import App from '../App.vue';
import NotFoundComponent from '../NotFound.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: App,
    beforeEnter: (to, from, next) => {
      next();
      // console.warn('To', to);
      // console.warn('From', from);
    }
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