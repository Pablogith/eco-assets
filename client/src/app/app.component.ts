import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { NotificationDirective } from '@core/directives';
import { NotificationsService } from '@core/services';
import { NotificationComponent } from '@shared/notification/notification.component';
import { Notification } from '@core/models';

@Component({
  selector: 'eac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NotificationDirective, { static: true })
  notificationHost!: NotificationDirective;

  public isAuthRoute: boolean = false;

  private router = inject(Router);
  private notificationService = inject(NotificationsService);

  public ngOnInit(): void {
    this.listenRouterEventsForAuthPath();
    this.listenNotifications();
  }

  private listenRouterEventsForAuthPath(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((e: string) => {
        this.isAuthRoute = e.includes('auth');
      });
  }

  private loadNotificationComponent(notification: Notification): void {
    const viewContainerRef = this.notificationHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(
      NotificationComponent
    );

    componentRef.instance.notification = notification;
  }

  private listenNotifications(): void {
    this.notificationService.notifications.subscribe(
      (notification: Notification) => {
        this.loadNotificationComponent(notification);
      }
    );
  }
}
