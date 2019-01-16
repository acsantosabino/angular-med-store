import { Component } from '@angular/core';
import { ELEMENT_DATA_COMPRA } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-med-store';

  constructor() {
    window.localStorage.setItem('cart', JSON.stringify(ELEMENT_DATA_COMPRA));
  }
}
