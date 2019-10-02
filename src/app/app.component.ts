import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './shared/animations'; 
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'horoscope';
  constructor() { }
  
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }   
}
