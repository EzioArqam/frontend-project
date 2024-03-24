import { NgFor } from '@angular/common';
import { Component, ErrorHandler, Input } from '@angular/core';
import { ScriptingErrorHandler } from '../../global-error-handler/error-handler.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  providers: [{provide: ErrorHandler, useClass: ScriptingErrorHandler}]
})
export class GridComponent {
@Input() gridNumbers: number[] = [];

}
