import { Injectable } from '@angular/core';
import { BaseHttpService } from '@core/classes';
import { map, Observable } from 'rxjs';
import { User } from '@features/user/models';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService {
  public getBatteriesById(id: User['id']): Observable<User['batteries']> {
    return this.http
      .get<User>(`${this.config.API_URL}me/${id}/batteries`, {
        headers: this.headers,
      })
      .pipe(map((user: User) => user.batteries));
  }

  public getProfileDataById(id: User['id']): Observable<User> {
    return this.http.get<User>(`${this.config.API_URL}me/${id}`, {
      headers: this.headers,
    });
  }
}
