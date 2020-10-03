import './polyfill';
import './localisation';

import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { router } from './router';
import { i18n } from './localisation';

import './style.scss';
import template from './main.vue';
import { logger } from './services/logger';
import { FooterComponent } from './components/footer.component';
import { store } from './store';
import { NavigationComponent } from './components/navigation.component';

Vue.config.errorHandler = function (err, vm, info) {
  logger.error('Vue error: ', err);
};

@Component({
  mixins: [template],
  store,
  components: {
    'navigation': NavigationComponent,
    'footer-block': FooterComponent,
  },
  router,
  i18n,
})
class App extends Vue {
  constructor() {
    super();
  }
}

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
  logger.error(errorMsg as string, url, lineNo, colNo, error);
};

export const app = new App().$mount('#app');
