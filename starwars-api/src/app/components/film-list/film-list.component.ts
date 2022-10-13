import { Component, OnInit, Injectable } from '@angular/core';
import { Film, FilmsResponse } from 'src/app/interfaces/films.interface';
import { FilmService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  page = 1;
  filmList: Film[] = [];
  numPages = 0;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilmList(this.page).subscribe(resp => {
      this.filmList = resp.results;
      if (this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
    })
  } 

  mostrarImg(film: Film) {
    let id = film.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
  }

  counter() {
    return new Array(this.numPages)
  }

  cambiarPagina(num: number) {
    this.page = num;
    this.filmService.getFilmList(this.page).subscribe(resp => {
      this.filmList = resp.results;
    })
  }


}
