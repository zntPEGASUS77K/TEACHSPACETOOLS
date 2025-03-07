import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ]
})
export class SideBarComponent {
  menuItems = [
    { label: 'Professors', icon: 'school', route: '/profs' },
    { label: 'Rooms', icon: 'meeting_room', route: '/salles' },
    { label: 'Occupancy', icon: 'schedule', route: '/occuper' }
  ];
}
