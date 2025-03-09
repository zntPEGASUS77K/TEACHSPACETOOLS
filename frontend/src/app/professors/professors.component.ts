import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfAddDialogComponent } from './prof-add-dialog/prof-add-dialog.component';
import { ProfUpdateDialogComponent } from './prof-update-dialog/prof-update-dialog.component';
import { ProfDeleteDialogComponent } from './prof-delete-dialog/prof-delete-dialog.component';
import { config } from '../../../src/app/config';

interface ProfDTO {
  codeProf: number;
  nom: string;
  prenom: string;
  grade: string;
}

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css'],
  standalone: false
})
export class ProfessorsComponent implements OnInit {
  displayedColumns: string[] = ['codeProf', 'nom', 'prenom', 'grade', 'actions'];
  dataSource = new MatTableDataSource<ProfDTO>([]);
  searchQuery: string = '';
  notFound: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProfs();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadProfs(): void {
    this.http.get<ProfDTO[]>(`http://localhost:8085/api/${config.apiVersion}/profs`).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.notFound = data.length === 0;
      },
      error: (err) => {
        console.error('Error when retrieving professors:', err);
        this.dataSource.data = [];
        this.notFound = true;
      }
    });
  }

  searchProfs(): void {
    if (!this.searchQuery.trim()) {
      this.loadProfs();
      return;
    }
    const codeProf = parseInt(this.searchQuery, 10);
    if (!isNaN(codeProf)) {
      this.http.get<ProfDTO>(`http://localhost:8085/api/${config.apiVersion}/profs/${codeProf}`).subscribe({
        next: (data) => {
          this.dataSource.data = [data];
          this.notFound = false;
        },
        error: (err) => {
          console.error('Error when searching by code:', err);
          this.dataSource.data = [];
          this.notFound = true;
        }
      });
    } else {
      this.http.get<ProfDTO[]>(`http://localhost:8085/api/${config.apiVersion}/profs/search/nom/${this.searchQuery}`).subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.notFound = data.length === 0;
        },
        error: (err) => {
          console.error('Name search error:', err);
          this.dataSource.data = [];
          this.notFound = true;
        }
      });
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ProfAddDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post<ProfDTO>(`http://localhost:8085/api/${config.apiVersion}/profs`, result).subscribe({
          next: () => {
            this.loadProfs();
            this.openSnackBar('Professor created successfully!');
          },
          error: (err) => console.error('Error adding professors:', err)
        });
      }
    });
  }

  openUpdateDialog(prof: ProfDTO): void {
    const dialogRef = this.dialog.open(ProfUpdateDialogComponent, {
      width: '400px',
      data: { ...prof }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.put<ProfDTO>(`http://localhost:8085/api/${config.apiVersion}/profs/${result.codeProf}`, result).subscribe({
          next: () => {
            this.loadProfs();
            this.openSnackBar('Professor updated successfully!');
          },
          error: (err) => console.error('Error updating professor:', err)
        });
      }
    });
  }

  openDeleteDialog(prof: ProfDTO): void {
    const dialogRef = this.dialog.open(ProfDeleteDialogComponent, {
      width: '400px',
      data: { ...prof }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8085/api/${config.apiVersion}/profs/${prof.codeProf}`).subscribe({
          next: () => {
            this.loadProfs();
            this.openSnackBar('Professor deleted successfully!');
          },
          error: (err) => console.error('Error deleting professor:', err)
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