import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '@features/weather/services';
import { WeatherResponse } from '@features/weather/models';
import { NotificationsService } from '@core/services';
import { Notification } from '@core/models';

@Component({
  selector: 'eac-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  public currentWeather!: WeatherResponse;
  public date = new Date();
  public geolocationIsAvailable!: boolean;
  public isLoading: boolean = true;

  private weatherService = inject(WeatherService);
  private notificationsService = inject(NotificationsService);

  public ngOnInit(): void {
    this.getCurrentWeather();
  }

  private getCurrentWeather(): void {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const weatherLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        this.weatherService.getForecast(weatherLocation).subscribe(
          (weather: WeatherResponse) => {
            this.currentWeather = weather;
            this.geolocationIsAvailable = true;
            this.isLoading = false;
          },
          (error: Error) => {
            this.geolocationIsAvailable = false;
            this.isLoading = false;

            const notification: Notification = {
              type: 'error',
              message: 'Error getting weather',
            };
            this.notificationsService.show(notification);
          }
        );
      },
      (error: GeolocationPositionError) => {
        const notification: Notification = {
          type: 'error',
          message: error.message,
        };
        this.notificationsService.show(notification);
        this.geolocationIsAvailable = false;
        this.isLoading = false;
      }
    );
  }
}
