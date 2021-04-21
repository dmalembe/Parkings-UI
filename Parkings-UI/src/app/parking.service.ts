import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkingInfo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private HttpClient: HttpClient) { }

  getParkings(): Observable<ParkingInfo[]>{ 
    return this.HttpClient.get<ParkingInfo[]>(environment.apiUrl + "parkings/");
  }

}
