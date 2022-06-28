import { Component, Input } from '@angular/core';
import { Battery } from '@features/battery/models';
import { Store } from '@ngrx/store';
import { UiState, UiStateComponents } from '@store/models/uiState';
import { openOverlay } from '@store/actions/ui.actions';

@Component({
  selector: 'eac-battery-table-row',
  templateUrl: './battery-table-row.component.html',
  styleUrls: ['./battery-table-row.component.scss'],
})
export class BatteryTableRowComponent {
  @Input() battery!: Battery;

  constructor(private store: Store<UiState>) {}

  public openOverlay(): void {
    this.store.dispatch(
      openOverlay({
        title: 'Edit Battery',
        component: UiStateComponents.BatteryEditFormComponent,
      })
    );
  }
}
