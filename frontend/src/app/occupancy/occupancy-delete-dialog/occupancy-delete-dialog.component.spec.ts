import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyDeleteDialogComponent } from './occupancy-delete-dialog.component';

describe('OccupancyDeleteDialogComponent', () => {
  let component: OccupancyDeleteDialogComponent;
  let fixture: ComponentFixture<OccupancyDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OccupancyDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
