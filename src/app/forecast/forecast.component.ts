import { Component, OnInit } from '@angular/core';
import { showUp, showUpStaggered } from '../animations/showUp-animations';
import { ForecastService } from '../Services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'], 
  animations : [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor(public forecastService : ForecastService) { }

  ngOnInit(): void {
  }

}
