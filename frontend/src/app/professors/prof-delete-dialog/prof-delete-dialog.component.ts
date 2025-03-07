import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prof-delete-dialog',
  templateUrl: './prof-delete-dialog.component.html',
  styleUrls: ['./prof-delete-dialog.component.css'],
  standalone: false
})
export class ProfDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProfDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { codeProf: number; nom: string; prenom: string; grade: string }
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}