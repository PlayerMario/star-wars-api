import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StarshipsDialogComponent } from 'src/app/dialogs/starships-dialog/starships-dialog.component';
import { Starship, StarshipsResponse } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  page = 1;
  listadoNaves: Starship[] = [];
  numPages = 0;
  starshipSelec: StarshipsResponse | undefined

  constructor(private starshipsService: StarshipsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.starshipsService.getStarships(this.page).subscribe(resp => {
      this.listadoNaves = resp.results;
      if (this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
    })
  }

  counter() {
    return new Array(this.numPages)
  }

  mostrarImg(starship: Starship) {
    let idStarship = starship.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/starships/${idStarship}.jpg`
  }

  cambiarPagina(num: number) {
    this.page = num;
    this.starshipsService.getStarships(this.page).subscribe(resp => {
      this.listadoNaves = resp.results;
    })
  }

  mostrarInformacion(starship: Starship) {
    this.starshipsService.getStarshipsInfo(starship).subscribe(resp => {
      this.starshipSelec = resp;
      this.dialog.open(StarshipsDialogComponent, {
        data: {
          starshipInfo: this.starshipSelec
        }
      })
    })
  }
}
