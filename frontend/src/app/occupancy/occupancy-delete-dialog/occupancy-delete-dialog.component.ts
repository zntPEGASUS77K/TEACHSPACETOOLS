import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-occupancy-delete-dialog',
  templateUrl: './occupancy-delete-dialog.component.html',
  styleUrls: ['./occupancy-delete-dialog.component.css'],
  standalone: false
})
export class OccupancyDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OccupancyDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}