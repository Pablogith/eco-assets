import { Injectable } from '@angular/core';
import { Battery } from '@features/battery/models';
import { map, Observable } from 'rxjs';
import { BaseHttpService } from '@core/classes';

@Injectable({
  providedIn: 'root',
})
export class BatteryService extends BaseHttpService {
  public getAll(): Observable<Battery[]> {
    return this.http.get<Battery[]>(`${this.config.API_URL}batteries`, {
      headers: this.headers,
    });
  }

  public getById(id: Battery['id']): Observable<Battery> {
    return this.http.get<Battery>(`${this.config.API_URL}batteries/${id}`, {
      headers: this.headers,
    });
  }

  public create(battery: Battery): Observable<Battery> {
    return this.http
      .post<{ battery: Battery }>(`${this.config.API_URL}batteries`, battery, {
        headers: this.headers,
      })
      .pipe(map((response: { battery: Battery }) => response.battery));
  }

  public update(battery: Battery): Observable<Battery> {
    return this.http.put<Battery>(
      `${this.config.API_URL}batteries/${battery.id}`,
      battery,
      { headers: this.headers }
    );
  }

  public delete(id: Battery['id']): Observable<Battery> {
    return this.http.delete<Battery>(`${this.config.API_URL}batteries/${id}`, {
      headers: this.headers,
    });
  }

  public getAllStatus(): Observable<Battery['status'][]> {
    return this.http
      .get<{ batteryStatus: Battery['status'][] }>(
        `${this.config.API_URL}batteries/status`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map(
          (response: { batteryStatus: Battery['status'][] }) =>
            response.batteryStatus
        )
      );
  }
}
