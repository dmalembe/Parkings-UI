import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkingInfo';
import { ParkingService } from '../parking.service'

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {

  parkings: ParkingInfo[];
  isloaded: Boolean = false;

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParkings().subscribe(
      Response =>{
        this.parkings = Response;
        this.isloaded = true;
      }
    )
  }

  CalculStyleStatut(parking: ParkingInfo){
    if(parking.statut === "OUVERT"){
        return {color:'green'}
      } else if (parking.statut === "ABONNES"){
          return {color:'orange'}
      } else if(parking.statut === "FERME"){
          return {color:'red'}
      } else {
        return {'font-style': 'italic'}
      }
    }

  
   

}
