import { inject, Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Router } from "@angular/router";
import {catchError, map, Observable, Subscription, throwError} from "rxjs";
import {select, Store} from "@ngrx/store";
import {loginFailure, loginSuccess, logout} from "@store/actions/auth.action";
import {AuthState} from "@store/models/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser$!: Observable<any>;
  public isAuthenticated$!: Observable<boolean>;
  public errorMessage$!: Observable<any>;

  private http = inject(HttpClient);
  private router = inject(Router);
  private API_ENDPOINT: string = 'http://localhost:3000';
  private ACCESS_TOKEN_KEY = 'access_token';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private store: Store<AuthState>) {
    this.currentUser$ = store.pipe(select('user'));
    this.isAuthenticated$ = store.pipe(select('isAuthenticated'));
    this.errorMessage$ = store.pipe(select('errorMessage'));
  }

  public signIn(user: any): Subscription {
    return this.http
      .post<any>(`${this.API_ENDPOINT}/auth/login`, { user })
      .subscribe((res: any) => {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, res.access_token);
        this.getUserProfile(res.email).subscribe((user) => {
          console.log(user);
          this.store.dispatch(loginSuccess({ user: user }));
          this.router.navigate(['home']);
        });
      }, (err) => {
        this.store.dispatch(loginFailure({ errorMessage: err.error.message }));
      });
  }

  public getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    return authToken !== null;
  }

  public doLogout(): void {
    let removeToken = localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    if (removeToken == null) {
      this.store.dispatch(logout());
      this.router.navigate(['auth/sign-in']);
    }
  }

  private getUserProfile(email: any): Observable<any> {
    let api = `${this.API_ENDPOINT}/users/me?email=${email}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}
