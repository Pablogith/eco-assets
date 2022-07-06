import { inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '@config/app.config';

export abstract class BaseHttpService {
  protected readonly http = inject(HttpClient);
  protected readonly router = inject(Router);
  protected readonly headers = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  protected readonly config: AppConfig = inject(APP_CONFIG);
  protected readonly ACCESS_TOKEN_KEY = 'access_token';
}
