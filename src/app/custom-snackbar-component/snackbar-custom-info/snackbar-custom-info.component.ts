import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-custom-info',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  templateUrl: './snackbar-custom-info.component.html',
  styleUrl: './snackbar-custom-info.component.scss'
})
export class SnackbarCustomInfoComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
  snackBarRef = inject(MatSnackBarRef);
}
