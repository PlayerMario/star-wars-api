import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starships.interface';
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

  constructor(private starshipsService: StarshipsService) { }

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

}
