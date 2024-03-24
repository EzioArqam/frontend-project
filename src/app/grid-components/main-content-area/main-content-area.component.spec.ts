// Create a new file named "main-content-area.component.spec.ts" in your Angular project.

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContentAreaComponent } from './main-content-area.component';
import { GridComponent } from '../grid/grid.component';
import { UserInputComponent } from '../user-input/user-input.component';
import { ErrorHandler } from '@angular/core';
import { ScriptingErrorHandler } from '../../global-error-handler/error-handler.service';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('MainContentAreaComponent', () => {
  let fixture: ComponentFixture<MainContentAreaComponent>;
  let component: MainContentAreaComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers: [{ provide: ErrorHandler, useClass: ScriptingErrorHandler },provideAnimations()],
      imports: [GridComponent, UserInputComponent,MainContentAreaComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(MainContentAreaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set gridNumbers and loadGrid onGridGenerationInvoked', () => {
    const mockGridData = { gridNumbers: [1, 2, 3] };
    component.onGridGenerationInvoked(mockGridData);
    expect(component.gridNumbers).toEqual([1, 2, 3]);
    expect(component.loadGrid).toBe(true);
  });
});
