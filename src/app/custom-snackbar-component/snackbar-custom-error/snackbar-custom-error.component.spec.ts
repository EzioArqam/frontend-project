import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCustomErrorComponent } from './snackbar-custom-error.component';

describe('SnackbarCustomErrorComponent', () => {
  let component: SnackbarCustomErrorComponent;
  let fixture: ComponentFixture<SnackbarCustomErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarCustomErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackbarCustomErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
