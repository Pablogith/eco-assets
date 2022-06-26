import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from '@features/weather/components';

@NgModule({
  declarations: [WeatherCardComponent],
  imports: [CommonModule],
  exports: [WeatherCardComponent],
})
export class WeatherModule {}
