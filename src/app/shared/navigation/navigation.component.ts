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
     
      switch(this.curPage) {
        case 1: {
         
          this.colorPreference = 'white';
          break;
        }
        case 2: {
         
          this.colorPreference = 'white';
          break;
        }
        // astrology inner page
        case 3: {
        
          this.colorPreference = 'black';
          break;
        }
        // contact page
        case 6: {
        
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
