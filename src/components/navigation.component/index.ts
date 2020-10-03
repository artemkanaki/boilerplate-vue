import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import template from './template.vue';

@Component({
  mixins: [template],
})
export class NavigationComponent extends Vue {
}
