import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OccupancyAddDialogComponent } from './occupancy-add-dialog/occupancy-add-dialog.component';
import { OccupancyUpdateDialogComponent } from './occupancy-update-dialog/occupancy-update-dialog.component';
import { OccupancyDeleteDialogComponent } from './occupancy-delete-dialog/occupancy-delete-dialog.component';
import { config } from '../../app/config';

interface OccuperDTO {
  id: number;
  codeProf: number;
  codeSal: number;
  date: string; // Explicitement une chaîne au format "yyyy-MM-dd"
}

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css'],
  standalone: false,
})
export class OccupancyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codeProf', 'codeSal', 'date', 'actions'];
  dataSource = new MatTableDataSource<OccuperDTO>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadOccupancy();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadOccupancy(): void {
    this.http.get<OccuperDTO[]>(`http://localhost:8085/api/${config.apiVersion}/occuper`).subscribe({
      next: (data) => {
        // Assurer que les dates sont au format "yyyy-MM-dd"
        const formattedData = data.map(item => ({
          ...item,
          date: new Date(item.date).toISOString().split('T')[0] // Normaliser la date
        }));
        this.dataSource.data = formattedData;
      },
      error: (err) => {
        console.error('Error when retrieving occupancy:', err);
        this.dataSource.data = [];
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(OccupancyAddDialogComponent, {
      width: '400px',
      data: { profs: [], salles: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post<OccuperDTO>(`http://localhost:8085/api/${config.apiVersion}/occuper`, result).subscribe({
          next: () => {
            this.loadOccupancy();
            this.openSnackBar('Occupancy added successfully!');
          },
          error: (err) => console.error('Error adding occupancy:', err)
        });
      }
    });
  }

  openUpdateDialog(occuper: OccuperDTO): void {
    const dialogRef = this.dialog.open(OccupancyUpdateDialogComponent, {
      width: '400px',
      data: { ...occuper, profs: [], salles: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.put<OccuperDTO>(`http://localhost:8085/api/${config.apiVersion}/occuper/${result.id}`, result).subscribe({
          next: () => {
            this.loadOccupancy();
            this.openSnackBar('Occupancy updated successfully!');
          },
          error: (err) => console.error('Error updating occupancy:', err)
        });
      }
    });
  }

  openDeleteDialog(occuper: OccuperDTO): void {
    const dialogRef = this.dialog.open(OccupancyDeleteDialogComponent, {
      width: '400px',
      data: { ...occuper }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8085/api/${config.apiVersion}/occuper/${occuper.id}`).subscribe({
          next: () => {
            this.loadOccupancy();
            this.openSnackBar('Occupancy deleted successfully!');
          },
          error: (err) => console.error('Error deleting occupancy:', err)
        });
      }
    });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar']
    });
  }
}