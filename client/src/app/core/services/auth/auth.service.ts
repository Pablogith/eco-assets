import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, Subscription, throwError } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { loginFailure, loginSuccess, logout } from '@store/actions/auth.action';
import { AuthState } from '@store/models/auth';
import { authFeatureKey } from '@store/reducers/auth.reducers';
import { NotificationsService } from '@core/services';
import { Notification } from '@core/models';
import { BaseHttpService } from '@core/classes';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  private notificationService = inject(NotificationsService);
  private store = inject(Store);

  constructor() {
    super();
  }

  public signIn(user: any): Subscription {
    return this.http
      .post(`${this.config.API_URL}auth/login`, { user })
      .subscribe(
        (res: any) => {
          localStorage.setItem(this.ACCESS_TOKEN_KEY, res.access_token);
          this.getUserProfile(res.email).subscribe(user => {
            this.store.dispatch(loginSuccess({ user: user }));
            this.router.navigate(['home']);

            const notification: Notification = {
              message: 'Welcome back!',
              type: 'success',
            };
            this.notificationService.show(notification);
          });
        },
        err => {
          this.store.dispatch(
            loginFailure({ errorMessage: err.error.message })
          );
          const notification: Notification = {
            message: err.error.message,
            type: 'error',
          };
          this.notificationService.show(notification);
        }
      );
  }

  public getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  public isLoggedIn(): Observable<boolean> {
    return this.store.pipe(
      // @ts-ignore
      select(authFeatureKey),
      map((state: AuthState) => state.isAuthenticated)
    );
  }

  public doLogout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    this.store.dispatch(logout());
    this.router.navigate(['auth/sign-in']);
  }

  private getUserProfile(email: any): Observable<any> {
    let api = `${this.config.API_URL}users/me?email=${email}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map(res => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}
