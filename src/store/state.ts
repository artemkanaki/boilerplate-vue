import { Locale, localeKey } from '../constants';

export interface State {
  locale: Locale;
  defaultLocale: Locale;
}

export const state: State = {
  locale: localStorage.getItem(localeKey) as Locale,
  defaultLocale: process.env.DEFAULT_LOCALE as Locale,
};
