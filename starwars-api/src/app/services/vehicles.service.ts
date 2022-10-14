import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle, VehicleResponse } from '../interfaces/vehicles.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  public getVehicle(page: number): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(`${environment.API_BASE_URL}/vehicles/?page=${page}`)
  }

  public getVehicleInfo(vehicle: Vehicle): Observable<VehicleResponse> {
    let idVehicle = vehicle.url.split("/")[5]
    return this.http.get<VehicleResponse>(`${environment.API_BASE_URL}/vehicles/${idVehicle}`);
  }
}
