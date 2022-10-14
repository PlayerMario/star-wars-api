import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesList: Vehicle[] = [];
  page = 1;
  numPages = 0;

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicle(this.page).subscribe( resp => {
      this.vehiclesList = resp.results;
      if (this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
    })
  }

  
  mostrarImg(vehicle: Vehicle) {
    let id = vehicle.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
  }

  counter() {
    return new Array(this.numPages)
  }

  cambiarPagina(num: number) {
    this.page = num;
    this.vehicleService.getVehicle(this.page).subscribe(resp => {
      this.vehiclesList = resp.results;
    })
  }

}
