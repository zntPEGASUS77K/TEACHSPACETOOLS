import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUpdateDialogComponent } from './room-update-dialog.component';

describe('RoomUpdateDialogComponent', () => {
  let component: RoomUpdateDialogComponent;
  let fixture: ComponentFixture<RoomUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomUpdateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
