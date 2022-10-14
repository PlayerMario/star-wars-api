import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet, PlanetResponse } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getPlanet(page: number): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(`${environment.API_BASE_URL}/planets/?page=${page}`)
  }
 
  public getPlanetInfo(planet: Planet): Observable<PlanetResponse> {
    let idPlaneta = planet.url.split("/")[5]
    return this.http.get<PlanetResponse>(`${environment.API_BASE_URL}/planets/${idPlaneta}`);
  }
}
