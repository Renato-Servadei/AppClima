import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Coords } from 'src/structures/coords.structure';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public coordsSubject: Subject<Coords> = new Subject<Coords>();
  public coords$ : Observable<Coords> = this.coordsSubject.asObservable();
  public permission$ : Promise<String>;
  public coordsPromise?: Promise<Coords>;

  constructor() { 
    this.permission$ = navigator.permissions.query({name: 'geolocation'})
                        .then(permission => permission.state);
  }

  requestGeolocation() {
    if(!this.coordsPromise){
      this.coordsPromise = this.getGeolocation()
    }
    
    this.coordsPromise.then((coords)=>{
      this.coordsSubject.next(coords) 
    });
  }

  getGeolocation(): Promise<Coords>{
    return new Promise((res, rej)=>{
      if(!navigator || !('geolocation' in navigator)) return rej('La geolocalizacion no está disponible');

      navigator.geolocation.getCurrentPosition((position)=>{
        res({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    });
  }
}
