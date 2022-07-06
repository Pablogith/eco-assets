import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BatteryCreateFormComponent,
  BatteryEditFormComponent,
  BatteryTableComponent,
  BatteryTableRowComponent,
} from '@features/battery/components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BatteryTableComponent,
    BatteryTableRowComponent,
    BatteryEditFormComponent,
    BatteryCreateFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    BatteryTableComponent,
    BatteryEditFormComponent,
    BatteryCreateFormComponent,
  ],
})
export class BatteryModule {}
