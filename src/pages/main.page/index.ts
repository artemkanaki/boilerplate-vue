import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import template from './template.vue';
import { ErrorInfo } from '../../types';
import { ErrorMessageComponent } from '../../components/error.message.component';

@Component({
  mixins: [template],
  components: {
    'error-message': ErrorMessageComponent,
  }
})
export class MainPage extends Vue {
  errorInfo: ErrorInfo;

  constructor() {
    super();

    this.errorInfo = null;
  }

  onError(error: ErrorInfo) {
    this.errorInfo = error;
  }
}
