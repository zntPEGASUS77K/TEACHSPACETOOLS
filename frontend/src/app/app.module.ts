import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfessorsComponent } from './professors/professors.component';
import { RoomsComponent } from './rooms/rooms.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ProfAddDialogComponent } from './professors/prof-add-dialog/prof-add-dialog.component';
import { ProfUpdateDialogComponent } from './professors/prof-update-dialog/prof-update-dialog.component';
import { ProfDeleteDialogComponent } from './professors/prof-delete-dialog/prof-delete-dialog.component';
import { RoomAddDialogComponent } from './rooms/room-add-dialog/room-add-dialog.component';
import { OccupancyAddDialogComponent } from './occupancy/occupancy-add-dialog/occupancy-add-dialog.component';
import { RoomUpdateDialogComponent } from './rooms/room-update-dialog/room-update-dialog.component';
import { RoomDeleteDialogComponent } from './rooms/room-delete-dialog/room-delete-dialog.component';
import { OccupancyUpdateDialogComponent } from './occupancy/occupancy-update-dialog/occupancy-update-dialog.component';
import { OccupancyDeleteDialogComponent } from './occupancy/occupancy-delete-dialog/occupancy-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    RoomsComponent,
    OccupancyComponent,
    ProfAddDialogComponent,
    ProfUpdateDialogComponent,
    ProfDeleteDialogComponent,
    RoomAddDialogComponent,
    OccupancyAddDialogComponent,
    RoomUpdateDialogComponent,
    RoomDeleteDialogComponent,
    OccupancyUpdateDialogComponent,
    OccupancyDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'profs', component: ProfessorsComponent },
          { path: 'salles', component: RoomsComponent },
          { path: 'occuper', component: OccupancyComponent },
          { path: '', redirectTo: '/profs', pathMatch: 'full' }
        ]
      }
    ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }