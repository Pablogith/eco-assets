import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  readonly API_URL: string;
}

export const APP_CONFIG_VALUE: AppConfig = {
  API_URL: 'http://localhost:3000/',
};
