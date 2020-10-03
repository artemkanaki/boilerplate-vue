import 'intl';
import 'intl/locale-data/jsonp/en.js';

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { store } from './store';
import { STORE_SET_LOCALE } from './constants';

const messages = {
  en: require('./locale/en.json'),
  ru: require('./locale/ru.json'),
};

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: store.getters.locale,
  fallbackLocale: store.getters.locale,
  messages,
});
