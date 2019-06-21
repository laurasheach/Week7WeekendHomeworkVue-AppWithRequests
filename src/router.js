import Vue from 'vue';
import Router from 'vue-router';
import Articles from '@/views/Articles';
import Favourites from '@/views/Favourites';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/articles/',
      name: 'articles',
      component: Articles
    },
    {
      path: '/favourites/',
      name: 'favourites',
      component: Favourites
    }
  ]
})

export default router;
