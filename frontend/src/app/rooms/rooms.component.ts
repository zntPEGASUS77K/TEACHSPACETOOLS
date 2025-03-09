import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RoomAddDialogComponent } from '../rooms/room-add-dialog/room-add-dialog.component';
import { RoomUpdateDialogComponent } from '../rooms/room-update-dialog/room-update-dialog.component';
import { RoomDeleteDialogComponent } from '../rooms/room-delete-dialog/room-delete-dialog.component';
import { config } from '../../../src/app/config';

interface SalleDTO {
  codeSal: number;
  designation: string;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  standalone: false,
})
export class RoomsComponent implements OnInit {
  displayedColumns: string[] = ['codeSal', 'designation', 'actions'];
  dataSource = new MatTableDataSource<SalleDTO>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadRooms(): void {
    this.http.get<SalleDTO[]>(`http://localhost:8085/api/${config.apiVersion}/salles`).subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('Error when retrieving Rooms:', err);
        this.dataSource.data = [];
      }  
    });
        
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(RoomAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post<SalleDTO>(`http://localhost:8085/api/${config.apiVersion}/salles`, result).subscribe({
          next: () => {
            this.loadRooms();
            this.openSnackBar('Room added successfully!');
          },
          error: (err) => console.error('Error adding room:', err)
        });
      }
    });
  }

  openUpdateDialog(room: SalleDTO): void {
    const dialogRef = this.dialog.open(RoomUpdateDialogComponent, {
      width: '400px',
      data: { ...room }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.put<SalleDTO>(`http://localhost:8085/api/${config.apiVersion}/salles/${result.codeSal}`, result).subscribe({
          next: () => {
            this.loadRooms();
            this.openSnackBar('Room updated successfully!');
          },
          error: (err) => console.error('Error updating room:', err)
        });
      }
    });
  }

  openDeleteDialog(room: SalleDTO): void {
    const dialogRef = this.dialog.open(RoomDeleteDialogComponent, {
      width: '400px',
      data: { ...room }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8085/api/${config.apiVersion}/salles/${room.codeSal}`).subscribe({
          next: () => {
            this.loadRooms();
            this.openSnackBar('Room deleted successfully!');
          },
          error: (err) => console.error('Error deleting room:', err)
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