import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './shared/animations'; 
import { AppConstants } from './shared/constants';
import { SunProgressService } from './services/sun-progress.service';
import { Globals } from './shared/globals';
import { BlackmenuComponent } from './shared/blackmenu/blackmenu.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {
  title = 'horoscope';
  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,) { }

  @ViewChild(BlackmenuComponent, {static: false}) child:BlackmenuComponent;
  showMenu = false;
  ngOnInit() {
  	
  }

  onShowMenu() {
  	this.showMenu = !this.showMenu;
  	if(this.showMenu) {
  		this.child.showMenu();
  	} else {
  		this.child.hiddenMenu();
  	}
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }   
}
