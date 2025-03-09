import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDeleteDialogComponent } from './room-delete-dialog.component';

describe('RoomDeleteDialogComponent', () => {
  let component: RoomDeleteDialogComponent;
  let fixture: ComponentFixture<RoomDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
