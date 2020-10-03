import Vue from 'vue';
import VueRouter, { RawLocation, Route as VueRoute } from 'vue-router';

import { NotFoundPage } from '../pages/not.found.page';
import { Route } from '../constants';
import { store } from '../store';
import { MainPage } from '../pages/main.page';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: Route.MainPage,
      name: 'MainPage',
      component: MainPage
    },
    {
      path: Route.NotFound,
      component: NotFoundPage,
    }
  ],
  mode: 'hash',
  linkActiveClass: 'active'
});
