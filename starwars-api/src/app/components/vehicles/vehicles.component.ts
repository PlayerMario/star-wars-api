import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VehicleDialogComponent } from 'src/app/dialogs/vehicle-dialog/vehicle-dialog.component';
import { Vehicle, VehicleResponse } from 'src/app/interfaces/vehicles.interface';
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
  vehicleSelec: VehicleResponse | undefined

  constructor(private vehicleService: VehiclesService, public dialog: MatDialog) { }

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

  mostrarInformacion(vehicle: Vehicle) {
    this.vehicleService.getVehicleInfo(vehicle).subscribe(resp => {
      this.vehicleSelec = resp;
      this.dialog.open(VehicleDialogComponent, {
        data: {
          vehicleInfo: this.vehicleSelec
        }
      })
    })
  }
}
