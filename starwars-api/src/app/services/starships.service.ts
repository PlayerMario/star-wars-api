import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Starship, StarshipsResponse } from '../interfaces/starships.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  public getStarships(page: number): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(`${environment.API_BASE_URL}/starships/?page=${page}`);
  }

  public getStarshipsInfo(starship: Starship): Observable<StarshipsResponse> {
    let idStarship = starship.url.split("/")[5]
    return this.http.get<StarshipsResponse>(`${environment.API_BASE_URL}/starships/${idStarship}`);
  }
}