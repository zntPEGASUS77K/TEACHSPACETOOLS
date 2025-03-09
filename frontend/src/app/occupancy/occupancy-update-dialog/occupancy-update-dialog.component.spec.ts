import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyUpdateDialogComponent } from './occupancy-update-dialog.component';

describe('OccupancyUpdateDialogComponent', () => {
  let component: OccupancyUpdateDialogComponent;
  let fixture: ComponentFixture<OccupancyUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OccupancyUpdateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
