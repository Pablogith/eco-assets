import { Component, inject } from '@angular/core';
import { AuthService } from '@core/services';
import { select, Store } from '@ngrx/store';
import {
  menu,
  menuOverlay,
  triggerDropdownMenu,
} from '@shared/layout/animations';
import { AuthState } from '@store/models/auth';
import { map, Observable } from 'rxjs';
import { authFeatureKey } from '@store/reducers/auth.reducers';

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
  public currentUser$!: Observable<string>;

  constructor(private store: Store<AuthState>) {
    this.currentUser$ = this.store.pipe(
      // @ts-ignore
      select(authFeatureKey),
      map(
        (state: AuthState) => `${state.user?.firstName} ${state.user?.lastName}`
      ),
      map((name: string) => (name ? name : 'Guest'))
    );
  }

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
