import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Javascript from './views/Javascript.vue';
import Php from './views/Php.vue';
import Scss from './views/Scss.vue';
import Terminal from './views/Terminal.vue';
import Wordpress from './views/Wordpress.vue';

const history = createWebHistory();

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/javascript',
      component: Javascript
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