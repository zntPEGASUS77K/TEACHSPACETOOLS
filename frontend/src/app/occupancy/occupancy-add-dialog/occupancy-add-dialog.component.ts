import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-occupancy-add-dialog',
  templateUrl: './occupancy-add-dialog.component.html',
  styleUrls: ['./occupancy-add-dialog.component.css'],
  standalone: false
})
export class OccupancyAddDialogComponent {
  occupancy = { codeProf: null, codeSal: null, date: '' };

  constructor(public dialogRef: MatDialogRef<OccupancyAddDialogComponent>) {}

  save(): void {
    this.dialogRef.close(this.occupancy);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}