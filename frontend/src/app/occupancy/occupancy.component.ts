import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { OccupancyAddDialogComponent } from '../occupancy/occupancy-add-dialog/occupancy-add-dialog.component';
import { config } from '../../../src/app/config';

interface OccuperDTO {
  id: number;
  codeProf: number;
  codeSal: number;
  date: string;
}

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css'],
  standalone: false
})
export class OccupancyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codeProf', 'codeSal', 'date'];
  dataSource: OccuperDTO[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadOccupancy();
  }

  loadOccupancy(): void {
    this.http.get<OccuperDTO[]>(`http://localhost:8085/api/${config.apiVersion}/occuper`).subscribe({
      next: (data) => this.dataSource = data,
      error: (err) => console.error('Error when retrieving occupancies:', err)
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(OccupancyAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post<OccuperDTO>(`http://localhost:8085/api/${config.apiVersion}/occuper`, result).subscribe({
          next: () => this.loadOccupancy(),
          error: (err) => console.error('Error adding occupancy:', err)
        });
      }
    });
  }
}