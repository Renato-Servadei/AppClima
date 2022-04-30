import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from '../animations/loading-animations';
import { CurrentWeatherService } from '../Services/current-weather.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations: [loadingAnimation()] 
})
export class LoadingComponent implements OnInit {

  _elements: string [] = ['#ffe5ec', '#ff80a0', '#ff2e63', '#800020', '#1a0006'];
  elements: string [] = this._elements;
  
  constructor(public currentWeatherService : CurrentWeatherService) { }

  ngOnInit(): void {
    this.set();
  }

  set(){
    this.elements = this._elements;
    this.scheduleNextIteration();
  }

  clear() {
    this.elements = [];
    this.scheduleNextIteration();
  }

  scheduleNextIteration() {
    setTimeout(()=>{
      if(this.elements.length == 0) return this.set();
      this.clear()
    },100 * this._elements.length + 300)
  }
}
