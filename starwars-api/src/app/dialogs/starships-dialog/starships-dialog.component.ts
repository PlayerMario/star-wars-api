import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StarshipData } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-starships-dialog',
  templateUrl: './starships-dialog.component.html',
  styleUrls: ['./starships-dialog.component.css']
})
export class StarshipsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public starshipData: StarshipData) { }

  ngOnInit(): void {
  }

}
