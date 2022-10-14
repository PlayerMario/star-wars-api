import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmData } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-film-dialog',
  templateUrl: './film-dialog.component.html',
  styleUrls: ['./film-dialog.component.css']
})
export class FilmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public filmData: FilmData) { }

  ngOnInit(): void {
  }

}
