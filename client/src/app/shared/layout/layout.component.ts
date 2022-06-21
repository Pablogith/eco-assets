import { Component } from '@angular/core';
import { menuOverlay, triggerDropdownMenu, menu } from "@shared/layout/animations";

@Component({
  selector: 'eac-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [triggerDropdownMenu, menuOverlay, menu]
})
export class LayoutComponent {
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
}
