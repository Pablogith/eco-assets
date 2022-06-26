import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { select, Store } from '@ngrx/store';
import { AuthState } from '@store/models/auth';
import { map, Observable } from 'rxjs';
import { authFeatureKey } from '@store/reducers/auth.reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eac-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class ProfileComponent {
  public currentUserName$!: Observable<string>;

  constructor(private store: Store<AuthState>) {
    this.currentUserName$ = this.store.pipe(
      // @ts-ignore
      select(authFeatureKey),
      map((state: AuthState) => state.user?.name),
      map((name: string) => (name ? name : 'Guest'))
    );
  }
}
