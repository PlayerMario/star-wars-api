import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanetDialogComponent } from 'src/app/dialogs/planet-dialog/planet-dialog.component';
import { Planet, PlanetResponse } from 'src/app/interfaces/planets.interface';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetList: Planet[] = [];
  page = 1;
  numPages = 0;
  planetSelec: PlanetResponse | undefined

  constructor(private planetService: PlanetsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.planetService.getPlanet(this.page).subscribe(resp =>{
      this.planetList = resp.results;
      if (this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
    })
  }

  counter() {
    return new Array(this.numPages)
  }

  mostrarImg(planet : Planet) {
    let id = planet.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }

  cambiarPagina(num: number) {
    this.page = num;
    this.planetService.getPlanet(this.page).subscribe(resp => {
      this.planetList = resp.results;
    })
  }

  mostrarInformacion(planet: Planet) {
    this.planetService.getPlanetInfo(planet).subscribe(resp => {
      this.planetSelec = resp;
      this.dialog.open(PlanetDialogComponent, {
        data: {
          planetInfo: this.planetSelec
        }
      })
    })
  }
}
