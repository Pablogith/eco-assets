import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { WeatherModule } from '@features/weather/weather.module';

@Component({
  selector: 'eac-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, WeatherModule],
})
export class HomePageComponent {}
