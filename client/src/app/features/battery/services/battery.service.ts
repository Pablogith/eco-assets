import { Injectable } from '@angular/core';
import { Battery } from '@features/battery/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatteryService {
  private _batteries: Battery[] = [
    {
      id: 1,
      name: 'Battery 1',
      description: 'Battery 1 description',
      type: 'Type 1',
      voltage: 12,
      capacity: 100,
      weight: 500,
      status: 'active',
      created_at: 'Created at 1',
      location: {
        city: 'Cracow',
        country: 'Poland',
      },
      generating_power: 100,
      level: 30,
    },
  ];

  public getAll(): Observable<Battery[]> {
    return of(this._batteries);
  }
}
