import { State } from './state';
import {
  Locale,
  localeKey,
  STORE_SET_LOCALE,
} from '../constants';

export const mutations = {
  [STORE_SET_LOCALE](state: State, locale: Locale) {
    state.locale = locale;
    localStorage.setItem(localeKey, locale);
  },
};
