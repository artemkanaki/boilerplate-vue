import { ErrorInfo } from '../types';

export class ComponentError extends Error implements ErrorInfo {
  public titleLocalizationKey: string;
  public description: string;
  public hideAfterMs: number;

  constructor(titleLocalizationKey: string, description: string, hideAfterMs?: number) {
    super();

    this.titleLocalizationKey = titleLocalizationKey;
    this.description = description;
    this.hideAfterMs = hideAfterMs;
  }
}
