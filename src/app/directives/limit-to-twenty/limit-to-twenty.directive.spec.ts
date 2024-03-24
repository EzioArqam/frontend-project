
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed
import { LimitToTwentyDirective } from './limit-to-twenty.directive';

@Component({
  template: `
    <input type="text" [limitToTwenty] [(ngModel)]="value">
  `
},)
class TestComponent {
  value: string = "";
}

describe('LimitToTwentyDirective', () => {
  let component = TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [FormsModule,LimitToTwentyDirective] // Add FormsModule if needed
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    inputElement = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should allow valid input within the range', () => {
    inputElement.nativeElement.value = '10';
    inputElement.triggerEventHandler('input', { target: inputElement.nativeElement });
    fixture.detectChanges();
    expect(fixture.componentInstance.value).toBe('10');
  });

  it('should truncate input exceeding 20', () => {
    inputElement.nativeElement.value = '25';
    inputElement.triggerEventHandler('input', { target: inputElement.nativeElement });
    fixture.detectChanges();
    expect(fixture.componentInstance.value).toBe('2');
  });

  it('should clear input if not a valid number', () => {
    inputElement.nativeElement.value = 'abc';
    inputElement.triggerEventHandler('input', { target: inputElement.nativeElement });
    fixture.detectChanges();
    expect(fixture.componentInstance.value).toBe('');
  });
});
