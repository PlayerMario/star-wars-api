import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpeciesResponse } from '../interfaces/species.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  public getSpecieList(page: number): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(`${environment.API_BASE_URL}/species/?page=${page}`);
  }
}
