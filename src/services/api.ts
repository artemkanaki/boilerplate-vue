import * as axios from 'axios';
import { store } from '../store';

export class Api {
  private axiosInstance: axios.AxiosInstance;
  private currentAcceptLanguage: string;

  protected getApiService(): axios.AxiosInstance {
    if (!this.currentAcceptLanguage) {
      this.currentAcceptLanguage = store.getters.locale;
    }

    const localeWasChanged = this.currentAcceptLanguage !== store.getters.locale;
    if (localeWasChanged) {
      this.currentAcceptLanguage = store.getters.locale;
    }

    if (!this.axiosInstance || localeWasChanged) {
      const axiosConfig: axios.AxiosRequestConfig = {
        baseURL: process.env.API_URL,
        headers: {
          'Accept-Language': this.currentAcceptLanguage
        },
      };

      this.axiosInstance = axios.default.create(axiosConfig);
    }

    return this.axiosInstance;
  }
}
