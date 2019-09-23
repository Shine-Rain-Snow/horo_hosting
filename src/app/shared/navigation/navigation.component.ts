import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  colorPreference = 'white';
  myVar;
  curPage;
  ngOnInit() {
    
    this.myVar = setInterval(() => {
      this.curPage = this.sunService.getCurrentPage();
      console.log("dd"+this.curPage);
      switch(this.curPage) {
        case 1: {
          console.log("intro");
          this.colorPreference = 'white';
          break;
        }
        case 2: {
          console.log("ast");
          this.colorPreference = 'white';
          break;
        }
        case 3: {
          console.log("inner");
          this.colorPreference = 'black';
          break;
        }
      }
    }, 50);
     
    
    
  }

  ngOnDestroy() {
    clearInterval(this.myVar);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  
  }
}
