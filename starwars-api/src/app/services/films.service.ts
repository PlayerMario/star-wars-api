import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film, FilmsResponse } from 'src/app/interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  public getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${environment.API_BASE_URL}/films/`);
  }

  public getFilmList(page: number): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${environment.API_BASE_URL}/films/?page=${page}`);
  }

  public getFilmInfo(film: Film): Observable<FilmsResponse> {
    let idFilm = film.url.split("/")[5]
    return this.http.get<FilmsResponse>(`${environment.API_BASE_URL}/films/${idFilm}`);
  }
}
