import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { SlideOverComponent } from './slide-over/slide-over.component';
import { DynamicDirective } from '@shared/dynamic/dynamic.directive';
import { BatteryModule } from '@features/battery/battery.module';

@NgModule({
  declarations: [TitleComponent, SlideOverComponent, DynamicDirective],
  imports: [CommonModule, BatteryModule],
  exports: [TitleComponent, SlideOverComponent],
})
export class SharedModule {}
