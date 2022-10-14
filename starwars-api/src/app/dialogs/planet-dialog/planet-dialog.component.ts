import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanetData } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-planet-dialog',
  templateUrl: './planet-dialog.component.html',
  styleUrls: ['./planet-dialog.component.css']
})
export class PlanetDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public planetData: PlanetData) { }

  ngOnInit(): void {
  }

}
