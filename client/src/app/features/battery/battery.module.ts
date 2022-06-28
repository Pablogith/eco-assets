import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BatteryEditFormComponent,
  BatteryTableComponent,
  BatteryTableRowComponent,
} from '@features/battery/components';

@NgModule({
  declarations: [
    BatteryTableComponent,
    BatteryTableRowComponent,
    BatteryEditFormComponent,
  ],
  imports: [CommonModule],
  exports: [BatteryTableComponent, BatteryEditFormComponent],
})
export class BatteryModule {}
