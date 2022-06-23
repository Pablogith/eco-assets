import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {AuthState} from "@store/models/auth";
import {authFeatureKey} from "@store/reducers/auth.reducers";

@Component({
  selector: 'eac-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomePageComponent {
  public currentUserName!: string;

  constructor(private store: Store<AuthState>) {
    // @ts-ignore
    this.store.pipe(select(authFeatureKey)).subscribe((user: any) => {
      this.currentUserName = user.user.name;
    });
  }
}
