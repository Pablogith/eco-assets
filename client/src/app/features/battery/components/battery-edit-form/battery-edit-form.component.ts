import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'eac-battery-edit-form',
  templateUrl: './battery-edit-form.component.html',
  styleUrls: ['./battery-edit-form.component.scss'],
  animations: [
    trigger('dropdownMenu', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'close',
        style({
          opacity: 0,
          transform: 'translateY(.25rem)',
          display: 'none',
        })
      ),
      transition('open => close', [animate('150ms ease-in')]),
      transition('close => open', [
        style({
          display: 'block',
        }),
        animate('300ms 200ms ease-out'),
      ]),
    ]),
  ],
})
export class BatteryEditFormComponent {
  public statusDropdownIsOpen = false;

  public toggleStatusDropdown(): void {
    this.statusDropdownIsOpen = !this.statusDropdownIsOpen;
  }
}
