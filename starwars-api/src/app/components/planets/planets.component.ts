import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planets.interface';
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

  constructor(private planetService: PlanetsService) { }

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


}
