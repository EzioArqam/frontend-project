import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCustomInfoComponent } from './snackbar-custom-info.component';

describe('SnackbarCustomInfoComponent', () => {
  let component: SnackbarCustomInfoComponent;
  let fixture: ComponentFixture<SnackbarCustomInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarCustomInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackbarCustomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
