import { inject, Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Router } from "@angular/router";
import {catchError, map, Observable, Subscription, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private API_ENDPOINT: string = 'http://localhost:3000';
  private ACCESS_TOKEN_KEY = 'access_token';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private currentUser = {};

  public signIn(user: any): Subscription {
    return this.http
      .post<any>(`${this.API_ENDPOINT}/auth/login`, { user })
      .subscribe((res: any) => {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, res.access_token);
        this.getUserProfile(res.email).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['home']);
        });
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
