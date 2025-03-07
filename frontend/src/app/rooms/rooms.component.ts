import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { RoomAddDialogComponent } from '../rooms/room-add-dialog/room-add-dialog.component';
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
  displayedColumns: string[] = ['codeSal', 'designation'];
  dataSource: SalleDTO[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.http.get<SalleDTO[]>(`http://localhost:8085/api/${config.apiVersion}/salles`).subscribe({
      next: (data) => this.dataSource = data,
      error: (err) => console.error('Room recovery error:', err)
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(RoomAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post<SalleDTO>(`http://localhost:8085/api/${config.apiVersion}/salles`, result).subscribe({
          next: () => this.loadRooms(),
          error: (err) => console.error('Error adding room:', err)
        });
      }
    });
  }
}