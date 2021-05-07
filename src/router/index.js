import Vue from 'vue';
import Router from 'vue-router';

import Demo from '@/components/Demo';
import qlist from '@/components/Home/qlist';
import qEdit from '@/components/Home/qEdit';
import qFill from '@/components/Home/qFill';
import qData from '@/components/Home/qData';
import qPeople from '@/components/Home/qPeople';
import person from '@/components/Person/person';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/answer/:num',
      name: 'answer',
      component: Demo
    },
    {
      path: '/person/:num',
      name:'person',
      component:person
    },
    {
        path: '/',
        name: 'qlist',
        component: qlist
    }, {
      path: '/data/:num',
      name: 'qData',
      component: qData
    },
    {
      path: '/fill/:num',
      name: 'qFill',
      component: qFill
    },
    {
      path: '/edit/:num',
      name: 'qEdit',
      component: qEdit
    },{
      path: '/people/:num',
      name: 'qPeople',
      component: qPeople
    }
   ]
})
