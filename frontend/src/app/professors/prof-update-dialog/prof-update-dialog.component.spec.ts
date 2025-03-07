import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfUpdateDialogComponent } from './prof-update-dialog.component';

describe('ProfUpdateDialogComponent', () => {
  let component: ProfUpdateDialogComponent;
  let fixture: ComponentFixture<ProfUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfUpdateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
