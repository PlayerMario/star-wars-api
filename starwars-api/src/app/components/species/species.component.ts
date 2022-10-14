import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  
  specieList: Specie[] = [];
  page = 1;
  numPages = 0;

  constructor(private specieService: SpeciesService) { }

  ngOnInit(): void {
    this.specieService.getSpecieList(this.page).subscribe( resp => {
      this.specieList = resp.results;
      if (this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
    })
  }

  counter() {
    return new Array(this.numPages)
  }

  mostrarImg(specie: Specie) {
    let id = specie.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

  cambiarPagina(num: number) {
    this.page = num;
    this.specieService.getSpecieList(this.page).subscribe(resp => {
      this.specieList = resp.results;
    })
  }





}
