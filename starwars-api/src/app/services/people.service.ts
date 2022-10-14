import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People, PeopleResponse } from '../interfaces/people.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public getPeopleList(page: number): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${environment.API_BASE_URL}/people/?page=${page}`);
  }

  public getPeopleInfo(people: People): Observable<PeopleResponse> {
    let idPeople = people.url.split("/")[5]
    return this.http.get<PeopleResponse>(`${environment.API_BASE_URL}/people/${idPeople}`);
  }
}