import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-prof-add-dialog',
  templateUrl: './prof-add-dialog.component.html',
  styleUrls: ['./prof-add-dialog.component.css'],
  standalone: false
})
export class ProfAddDialogComponent {
  prof = { nom: '', prenom: '', grade: '' };

  constructor(public dialogRef: MatDialogRef<ProfAddDialogComponent>) {}

  save(): void {
    this.dialogRef.close(this.prof);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}