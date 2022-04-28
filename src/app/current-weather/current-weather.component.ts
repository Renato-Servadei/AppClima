import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../Services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.sass']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public weatherService : CurrentWeatherService) { }

  ngOnInit(): void {
  }

}
