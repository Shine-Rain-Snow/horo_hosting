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
  showMenu = false;
  aboutVal;
  ngOnInit() {
    
    this.myVar = setInterval(() => {
      this.curPage = this.sunService.getCurrentPage();
      this.showMenu = this.sunService.getShowMenu();
      this.aboutVal = this.sunService.getAboutVal();
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
        //about page
        case 4: {
          if(this.aboutVal >= 40 && this.aboutVal < 60) {
            
            this.colorPreference = 'white';
          }
          else 
            this.colorPreference = 'black';
          break;
        }
        //counseling page
        case 5: {
          this.colorPreference = 'black';
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
