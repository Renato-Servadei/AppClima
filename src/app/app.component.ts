import { Component } from '@angular/core';
import { ForecastService } from './Services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'appClima';

  constructor(private forecastService : ForecastService){}

  ngOnInit() {
    this.forecastService.weather$.subscribe(console.log)
  }
}
