import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NotifierService } from '../../services/notifier/notifier.service';

@Directive({
  selector: '[limitToTwenty]',
  standalone: true
})
export class LimitToTwentyDirective {
  constructor(private el: ElementRef,private control : NgControl,private notifierService:NotifierService) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    const inputValue = inputElement.value;

    // Parse the input value as an integer
    const numericValue = parseInt(inputValue, 10);

    // Check if the parsed value is a valid number
    if (!isNaN(numericValue)) {
      // Truncate the last digit if it exceeds 20
      let clampedValue = numericValue;
      if (numericValue > 20) {
        this.notifierService.showErrorSnackbar("Input values between 0 to 20 are allowed")
        clampedValue = Math.floor(numericValue / 10);
      }
      // Update the input value
      inputElement.value = clampedValue.toString();
    } else {
      // If input is not a valid number, clear the input

      
      inputElement.value = '';
    }
    this.el.nativeElement.value = inputElement.value
    this.control?.control?.setValue(inputElement.value);
  }
}