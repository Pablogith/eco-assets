import { Component, inject, OnInit } from '@angular/core';
import { BatteryService } from '@features/battery/services';
import { Battery } from '@features/battery/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { openOverlay } from '@store/actions/ui.action';
import { UiStateComponents } from '@store/models/uiState';

@Component({
  selector: 'eac-battery-table',
  templateUrl: './battery-table.component.html',
  styleUrls: ['./battery-table.component.scss'],
})
export class BatteryTableComponent implements OnInit {
  private batteryService = inject(BatteryService);
  private store = inject(Store);
  public batteries$!: Observable<Battery[]> | null;

  public ngOnInit(): void {
    this.batteries$ = this.batteryService.getAll();
  }

  public openCreateBatteryDialog(): void {
    this.store.dispatch(
      openOverlay({
        title: 'Create Battery',
        component: UiStateComponents.BatteryCreateFormComponent,
      })
    );
  }

  public refresh(): void {
    this.batteries$ = null;
    this.batteries$ = this.batteryService.getAll();
  }
}
