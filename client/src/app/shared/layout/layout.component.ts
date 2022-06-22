import { Component, inject } from "@angular/core";
import { AuthService } from "@core/services/auth/auth.service";
import { menuOverlay, triggerDropdownMenu, menu } from "@shared/layout/animations";

@Component({
  selector: 'eac-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [triggerDropdownMenu, menuOverlay, menu]
})
export class LayoutComponent {
  private authService = inject(AuthService);

  public profileDropdownIsOpen = false;
  public mobileMenuIsOpen = false;

  public toggleProfileDropdown(): void {
    this.profileDropdownIsOpen = !this.profileDropdownIsOpen;
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
