import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanetResponse } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getPlanet(page: number): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(`${environment.API_BASE_URL}/planets/?page=${page}`)
  }
 
}
