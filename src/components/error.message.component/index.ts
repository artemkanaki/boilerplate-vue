import Vue from 'vue';
import Component from 'vue-class-component';
import template from './template.vue';
import { Prop, Watch } from 'vue-property-decorator';
import { ErrorInfo } from '../../types';

@Component({
  mixins: [ template ],
})
export class ErrorMessageComponent extends Vue {
  @Prop()
  errorInfo: ErrorInfo;

  titleLocalizationKey: string;
  description: string;
  countOfErrors: number;

  shown: boolean;
  showingInProcess: boolean;

  queue: Array<ErrorInfo & { count: number, signature: string }>;

  stdShowingMs: number;
  animationDurationMs: number;

  constructor() {
    super();

    this.titleLocalizationKey = '';
    this.description = '';
    this.shown = false;
    this.showingInProcess = false;
    this.countOfErrors = 0;

    this.queue = [];
    this.animationDurationMs = 1000;
    this.stdShowingMs = 3000;
  }

  @Watch('errorInfo')
  processNewErrorMessage() {
    if (this.errorInfo) {
      const messageSignature = this.generateMessageSignature(this.errorInfo);
      const error = this.queue.find((errorInfo) => errorInfo.signature === messageSignature);

      if (error) {
        error.count += 1;
        this.countOfErrors = error.count;
      } else {
        const message = {
          titleLocalizationKey: this.errorInfo.titleLocalizationKey,
          description: this.errorInfo.description,
          hideAfterMs: this.errorInfo.hideAfterMs,
          count: 1,
          signature: messageSignature,
        };

        this.queue.push(message);

        this.showNextError();
      }
    }
  }

  showNextError() {
    if (this.showingInProcess === false && this.queue.length) {
      this.showingInProcess = true;
      const error = this.queue[0];
      this.showError(error);
    }
  }

  showError(error: ErrorInfo & { count: number, signature: string }) {
    this.titleLocalizationKey = error.titleLocalizationKey;
    this.description = error.description;
    this.countOfErrors = error.count;

    this.shown = true;

    const timeoutMs = Number.isSafeInteger(error.hideAfterMs) ? error.hideAfterMs : this.stdShowingMs;

    setTimeout(this.hideError.bind(this), timeoutMs);
  }

  hideError() {
    this.queue.shift();
    this.shown = false;

    setTimeout(() => {
      this.titleLocalizationKey = '';
      this.description = '';

      this.showingInProcess = false;

      this.showNextError();
    }, this.animationDurationMs);
  }

  generateMessageSignature(error: ErrorInfo) {
    return `${error.titleLocalizationKey}:${error.description}`;
  }
}
