import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-add-dialog',
  templateUrl: './room-add-dialog.component.html',
  styleUrls: ['./room-add-dialog.component.css'],
  standalone: false
})
export class RoomAddDialogComponent {
  room = { designation: '' };

  constructor(public dialogRef: MatDialogRef<RoomAddDialogComponent>) {}

  save(): void {
    this.dialogRef.close(this.room);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}