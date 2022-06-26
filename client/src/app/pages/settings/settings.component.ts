import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SettingsMyAccountComponent } from '@pages/settings/settings-my-account/settings-my-account.component';
import { CommonModule } from '@angular/common';
import { SettingsAppearanceComponent } from '@pages/settings/settings-appearance/settings-appearance.component';
import { SettingsBillingComponent } from '@pages/settings/settings-billing/settings-billing.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'eac-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    SettingsMyAccountComponent,
    SettingsAppearanceComponent,
    SettingsBillingComponent,
  ],
  animations: [
    trigger('enterTrigger', [
      state(
        'fadeIn',
        style({
          opacity: '1',
          transform: 'translateY(50%)',
        })
      ),
      transition('void => *', [style({ opacity: '0' }), animate('500ms')]),
    ]),
  ],
})
export class SettingsComponent {
  public currentTab: string = 'my-account';

  public setTab(tab: string): void {
    this.currentTab = tab;
  }
}
