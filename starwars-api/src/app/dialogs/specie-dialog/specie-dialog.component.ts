import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpecieData } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-specie-dialog',
  templateUrl: './specie-dialog.component.html',
  styleUrls: ['./specie-dialog.component.css']
})
export class SpecieDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public specieData: SpecieData) { }

  ngOnInit(): void {
  }

}
