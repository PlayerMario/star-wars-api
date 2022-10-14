import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeopleData } from 'src/app/interfaces/dialog.interface';
import { Film } from 'src/app/interfaces/films.interface';
import { FilmService } from 'src/app/services/films.service';

@Component({
  selector: 'app-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.css']
})
export class PeopleDialogComponent implements OnInit {

  listadoPeliculas: Film[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public peopleData: PeopleData, private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });
  }

  mostrarNombrePeliculas(film: string) {
    for (let item of this.listadoPeliculas) {
      if (item.url == film) {
        return item.title;
      }
    }
    return undefined
  }
}
