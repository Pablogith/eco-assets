import { Component } from '@angular/core';
import { dropdownMenu } from '@features/battery/animations';

@Component({
  selector: 'eac-battery-edit-form',
  templateUrl: './battery-edit-form.component.html',
  styleUrls: ['./battery-edit-form.component.scss'],
  animations: [dropdownMenu],
})
export class BatteryEditFormComponent {
  public statusDropdownIsOpen = false;

  public toggleStatusDropdown(): void {
    this.statusDropdownIsOpen = !this.statusDropdownIsOpen;
  }
}
