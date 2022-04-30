import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LoadingComponent } from './loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeolocationButtonComponent } from './geolocation-button/geolocation-button.component'

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeatherIconsComponent,
    WeatherCardComponent,
    ForecastComponent,
    LoadingComponent,
    GeolocationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
