import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GeolocationService } from './Services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'appClima';

  constructor(public geolocationService : GeolocationService){}

  ngOnInit() {

  }
}
