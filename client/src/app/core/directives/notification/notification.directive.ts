import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eacNotification]',
  host: {
    '[style.z-index]': '9999',
  },
})
export class NotificationDirective {
  public viewContainerRef = inject(ViewContainerRef);
}
