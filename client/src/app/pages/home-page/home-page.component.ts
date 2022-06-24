import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AuthState } from '@store/models/auth';
import { authFeatureKey } from '@store/reducers/auth.reducers';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'eac-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomePageComponent {
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
