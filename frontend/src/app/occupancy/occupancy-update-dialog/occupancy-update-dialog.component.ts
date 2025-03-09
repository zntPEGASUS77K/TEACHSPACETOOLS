import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';

@Component({
  selector: 'app-occupancy-update-dialog',
  templateUrl: './occupancy-update-dialog.component.html',
  styleUrls: ['./occupancy-update-dialog.component.css'],
  standalone: false
})
export class OccupancyUpdateDialogComponent {
  occupancy: { id: number; codeProf: number; codeSal: number; date: string };

  constructor(
    public dialogRef: MatDialogRef<OccupancyUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; codeProf: number; codeSal: number; date: string; profs: any[]; salles: any[] },
    private http: HttpClient
  ) {
    this.occupancy = { ...data, date: data.date || new Date().toISOString().split('T')[0] };
    if (!data.profs.length) {
      this.http.get<any[]>(`http://localhost:8085/api/${config.apiVersion}/profs`).subscribe(profs => {
        this.data.profs = profs;
      });
    }
    if (!data.salles.length) {
      this.http.get<any[]>(`http://localhost:8085/api/${config.apiVersion}/salles`).subscribe(salles => {
        this.data.salles = salles;
      });
    }
  }

  save(): void {
    if (this.occupancy.date) {
      const adjustedDate = new Date(this.occupancy.date);
      adjustedDate.setMinutes(adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset());
      this.occupancy.date = adjustedDate.toISOString().split('T')[0];
    }
    this.dialogRef.close(this.occupancy);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}