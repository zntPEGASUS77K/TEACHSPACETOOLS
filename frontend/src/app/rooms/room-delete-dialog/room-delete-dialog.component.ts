import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-room-delete-dialog',
  templateUrl: './room-delete-dialog.component.html',
  styleUrls: ['./room-delete-dialog.component.css'],
  standalone: false
})
export class RoomDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RoomDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { codeSal: number; designation: string }
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}