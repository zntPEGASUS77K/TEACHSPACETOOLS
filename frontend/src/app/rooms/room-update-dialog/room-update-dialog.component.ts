import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-room-update-dialog',
  templateUrl: './room-update-dialog.component.html',
  styleUrls: ['./room-update-dialog.component.css'],
  standalone: false
})
export class RoomUpdateDialogComponent {
  room: { codeSal: number; designation: string };

  constructor(
    public dialogRef: MatDialogRef<RoomUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { codeSal: number; designation: string }
  ) {
    this.room = { ...data };
  }

  save(): void {
    this.dialogRef.close(this.room);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}