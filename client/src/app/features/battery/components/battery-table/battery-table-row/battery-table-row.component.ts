import { Component, inject, Input } from '@angular/core';
import { Battery } from '@features/battery/models';
import { Store } from '@ngrx/store';
import { UiStateComponents } from '@store/models/uiState';
import { openOverlay } from '@store/actions/ui.action';

@Component({
  selector: 'eac-battery-table-row',
  templateUrl: './battery-table-row.component.html',
  styleUrls: ['./battery-table-row.component.scss'],
})
export class BatteryTableRowComponent {
  @Input() battery!: Battery;
  private store = inject(Store);

  public get status(): Battery['status'] {
    return this.battery.status;
  }

  public openOverlay(): void {
    this.store.dispatch(
      openOverlay({
        title: 'Edit Battery',
        component: UiStateComponents.BatteryEditFormComponent,
        data: {
          battery: this.battery,
        },
      })
    );
  }
}
