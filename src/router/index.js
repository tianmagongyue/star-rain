import Vue from 'vue';
import Router from 'vue-router';

import Demo from '@/components/Demo';
import Form from '../components/Form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }
  ]
})
