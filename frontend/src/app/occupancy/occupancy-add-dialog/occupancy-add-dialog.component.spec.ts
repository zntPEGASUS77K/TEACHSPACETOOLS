import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyAddDialogComponent } from './occupancy-add-dialog.component';

describe('OccupancyAddDialogComponent', () => {
  let component: OccupancyAddDialogComponent;
  let fixture: ComponentFixture<OccupancyAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OccupancyAddDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
