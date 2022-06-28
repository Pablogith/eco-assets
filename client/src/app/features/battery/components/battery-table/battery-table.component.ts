import { Component, inject, OnInit } from '@angular/core';
import { BatteryService } from '@features/battery/services';
import { Battery } from '@features/battery/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'eac-battery-table',
  templateUrl: './battery-table.component.html',
  styleUrls: ['./battery-table.component.scss'],
})
export class BatteryTableComponent implements OnInit {
  private batteryService = inject(BatteryService);
  public batteries$!: Observable<Battery[]>;

  public ngOnInit(): void {
    this.batteries$ = this.batteryService.getAll();
  }
}
