import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleData } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public vehicleData: VehicleData) { }

  ngOnInit(): void {
  }

}
