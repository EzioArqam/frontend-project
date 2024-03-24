import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef, MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-custom-error',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  templateUrl: './snackbar-custom-error.component.html',
  styleUrl: './snackbar-custom-error.component.scss'
})
export class SnackbarCustomErrorComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
  snackBarRef = inject(MatSnackBarRef);

}

