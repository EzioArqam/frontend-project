import { Component } from '@angular/core';
import { MainContentAreaComponent } from './grid-components/main-content-area/main-content-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContentAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-project';

ngOnInit(){

}


}
 