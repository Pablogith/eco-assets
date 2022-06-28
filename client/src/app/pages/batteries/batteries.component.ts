import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BatteryModule } from '@features/battery/battery.module';

@Component({
  selector: 'eac-batteries',
  templateUrl: './batteries.component.html',
  styleUrls: ['./batteries.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, BatteryModule],
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
export class BatteriesComponent {
  public currentTab: string = 'all-batteries';

  public setTab(tab: string): void {
    this.currentTab = tab;
  }
}
