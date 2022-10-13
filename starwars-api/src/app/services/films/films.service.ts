import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilmsResponse } from 'src/app/interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  public getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${environment.apiBaseUrl}/films/`);
  }
}
