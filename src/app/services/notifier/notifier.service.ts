// notifier.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarCustomErrorComponent } from '../../custom-snackbar-component/snackbar-custom-error/snackbar-custom-error.component';
import { SnackbarCustomInfoComponent } from '../../custom-snackbar-component/snackbar-custom-info/snackbar-custom-info.component';

@Injectable({
  providedIn: 'root', // Make the service available globally
})
export class NotifierService {
  constructor(private snackBar: MatSnackBar) {}

  showErrorSnackbar(message: string): void {
    this.snackBar.openFromComponent(SnackbarCustomErrorComponent,{duration: 3000,data:message})
  }
  showInfoSnackbar(message: string): void {
    this.snackBar.openFromComponent(SnackbarCustomInfoComponent,{duration: 3000,data:message})
  }
}
