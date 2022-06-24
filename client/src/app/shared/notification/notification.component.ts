import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Notification } from '@core/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eac-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NotificationComponent implements AfterViewInit {
  @Input() notification!: Notification;
  @ViewChild('notificationRef') notificationElement!: ElementRef;

  public closeModal(): void {
    this.notificationElement.nativeElement.style.transform = 'translateX(150%)';
    this.notificationElement.nativeElement.style.display = 'none';
  }

  public ngAfterViewInit(): void {
    this.notificationElement.nativeElement.style.transform = 'translateX(150%)';
    this.notificationElement.nativeElement.classList.remove('hidden');
    setTimeout(() => {
      this.notificationElement.nativeElement.style.transform = 'translateX(0%)';
      this.notificationElement.nativeElement.style.display = 'block';
    }, 1_000);
    setTimeout(() => {
      this.closeModal();
    }, 10_000);
  }
}
