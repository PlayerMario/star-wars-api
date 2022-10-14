import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeopleData } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.css']
})
export class PeopleDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public peopleData: PeopleData) { }

  ngOnInit(): void {
  }

}
