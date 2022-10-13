import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmService } from 'src/app/services/film.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  page = 1;
  listadoPersonajes: People[] = [];
  listadoPeliculas: Film[] = [];
  numPages = 0;

  constructor(private peopleService: PeopleService, private filmService: FilmService) { }

  ngOnInit(): void {
    this.peopleService.getPeopleList(this.page).subscribe(resp => {
      this.listadoPersonajes = resp.results;
      if (this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
    });

    this.filmService.getFilm().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });
  }

  counter() {
    return new Array(this.numPages)
  }

  mostrarImg(people: People) {
    let idPeople = people.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/characters/${idPeople}.jpg`
  }

  mostrarNombrePeliculas(film: string) {
    for (let item of this.listadoPeliculas) {
      if (item.url == film) {
        return item.title;
      }
    }
    return undefined
  }

  cambiarPagina(num: number) {
    this.page = num;
    this.peopleService.getPeopleList(this.page).subscribe(resp => {
      this.listadoPersonajes = resp.results;
    })
  }
}