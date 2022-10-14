import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specie, SpecieResponse } from '../interfaces/species.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  public getSpecieList(page: number): Observable<SpecieResponse> {
    return this.http.get<SpecieResponse>(`${environment.API_BASE_URL}/species/?page=${page}`);
  }

  public getSpecieInfo(specie: Specie): Observable<SpecieResponse> {
    let idSpecie = specie.url.split("/")[5]
    return this.http.get<SpecieResponse>(`${environment.API_BASE_URL}/species/${idSpecie}`);
  }
}
