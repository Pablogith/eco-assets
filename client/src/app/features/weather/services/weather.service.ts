import { Injectable } from '@angular/core';
import { BaseHttpService } from '@core/classes';
import { Observable } from 'rxjs';
import { WeatherLocation, WeatherResponse } from '@features/weather/models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService extends BaseHttpService {
  public getForecast(
    forecastLocation: WeatherLocation
  ): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      this.getApiEndpoint(forecastLocation)
    );
  }

  private getApiEndpoint(forecastLocation: WeatherLocation): string {
    return `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${forecastLocation.lat}&lon=${forecastLocation.lon}&appid=2b8b63ec7814aa21e8f5af4ca0b8f2fc&mode=json&units=metric`;
  }
}
