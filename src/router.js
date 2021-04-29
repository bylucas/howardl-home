import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Javascript from './views/Javascript.vue';
import Php from './views/Php.vue';
import Scss from './views/Scss.vue';
import Terminal from './views/Terminal.vue';
import Wordpress from './views/Wordpress.vue';

import Variables from './views/javascript/Variables.vue';
import Functions from './views/javascript/Functions.vue';

const history = createWebHistory();

const routes = [
    {
      path: '/',
      //name: 'Home',
      component: Home
    },
    {
      path: '/javascript',
      //name: 'Javascript',
      component: Javascript,
      children: [
        { path: '/variables', component: Variables },
        { path: '/functions', component: Functions },
      ]
    },
  {
    path: '/php',
    component: Php
  },
  {
    path: '/scss',
    component: Scss
  },
  {
    path: '/terminal',
    component: Terminal
  },
  {
    path: '/wordpress',
    component: Wordpress
  }
  ];

  const router = createRouter({
    history,
    routes
  });

export default router;