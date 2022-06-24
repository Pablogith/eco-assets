import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private _notifications = new Subject<Notification>();
  public readonly notifications = this._notifications.asObservable();

  public show(notification: Notification): void {
    this._notifications.next(notification);
  }
}
