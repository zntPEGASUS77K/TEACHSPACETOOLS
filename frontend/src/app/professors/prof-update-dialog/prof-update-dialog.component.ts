import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prof-update-dialog',
  templateUrl: './prof-update-dialog.component.html',
  styleUrls: ['./prof-update-dialog.component.css'],
  standalone: false
})
export class ProfUpdateDialogComponent {
  prof: { codeProf: number; nom: string; prenom: string; grade: string };

  constructor(
    public dialogRef: MatDialogRef<ProfUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { codeProf: number; nom: string; prenom: string; grade: string }
  ) {
    this.prof = { ...data };
  }

  save(): void {
    this.dialogRef.close(this.prof);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}