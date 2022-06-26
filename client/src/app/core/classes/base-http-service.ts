import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export abstract class BaseHttpService {
  protected readonly http = inject(HttpClient);
  protected readonly router = inject(Router);
  protected readonly BASE_URL = 'http://localhost:3000/';
}
