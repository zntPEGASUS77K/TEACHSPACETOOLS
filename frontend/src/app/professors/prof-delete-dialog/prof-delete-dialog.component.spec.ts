import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDeleteDialogComponent } from './prof-delete-dialog.component';

describe('ProfDeleteDialogComponent', () => {
  let component: ProfDeleteDialogComponent;
  let fixture: ComponentFixture<ProfDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
