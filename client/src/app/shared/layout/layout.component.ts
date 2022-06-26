import { Component, inject } from '@angular/core';
import { AuthService } from '@core/services';
import {
  menu,
  menuOverlay,
  triggerDropdownMenu,
} from '@shared/layout/animations';

@Component({
  selector: 'eac-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [triggerDropdownMenu, menuOverlay, menu],
})
export class LayoutComponent {
  private authService = inject(AuthService);

  public profileDropdownIsOpen = false;
  public notificationsDropdownIsOpen = false;
  public mobileMenuIsOpen = false;
  public title = 'Dashboard';

  public toggleProfileDropdown(): void {
    this.profileDropdownIsOpen = !this.profileDropdownIsOpen;
  }

  public toggleNotificationsDropdown(): void {
    this.notificationsDropdownIsOpen = !this.notificationsDropdownIsOpen;
  }

  public closeMobileMenu(): void {
    this.mobileMenuIsOpen = false;
  }

  public openMobileMenu(): void {
    this.mobileMenuIsOpen = true;
  }

  public signOut(): void {
    this.authService.doLogout();
  }
}
