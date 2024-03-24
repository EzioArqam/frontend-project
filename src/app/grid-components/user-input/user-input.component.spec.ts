// Create a new file named "user-input.component.spec.ts" in your Angular project.

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInputComponent } from './user-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LimitToTwentyDirective } from '../../directives/limit-to-twenty/limit-to-twenty.directive';
import { GridGeneratorService } from '../../services/grid-generator/grid-generator.service';
import { NotifierService } from '../../services/notifier/notifier.service';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('UserInputComponent', () => {
  let fixture: ComponentFixture<UserInputComponent>;
  let component: UserInputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [ReactiveFormsModule,UserInputComponent,
        MatInput,
        MatLabel,
        MatFormField,
        MatButton,
        LimitToTwentyDirective],
      providers: [GridGeneratorService, NotifierService, provideAnimations()]
    }).compileComponents();
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit gridNumbers onGenerateGrid', () => {
    spyOn(component.gridGenerationInvoked, 'emit');
    component.gridGeneratorForm.controls['totalSum'].setValue('10');
    component.onGenerateGrid();
    expect(component.gridGenerationInvoked.emit).toHaveBeenCalledWith({
      gridNumbers: jasmine.any(Array)
    });
  });
});
