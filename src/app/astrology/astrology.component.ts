import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.scss']
})


export class AstrologyComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService) {  }
  
  next: number = 0;
  nDownScrolling = 0;
  nUpScrollling = 0;
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.sunService.setProgressShow(true);
    this.sunService.setAstVal(0);
    this.sunService.setCurrentPage(2);
    var astVal = this.sunService.getAstVal();
    if(astVal == 0) 
      this.next = 0;
    if(astVal == 100)
      this.next = AppConstants.SCROLLING_COUNT;
    if(astVal > 0 && astVal < 100)
      this.next = astVal / 10;
    $(".astrology").bind("DOMMouseScroll mousewheel", (event) => {  
        if(event.originalEvent.deltaY > 0) {
          //scroll down
          this.next++;
          
          this.sunService.setAstVal(this.next * 10); 
          if(this.next > AppConstants.SCROLLING_COUNT*0.4) {
            this.nUpScrollling++;
            if(this.nUpScrollling > 5) {
              this.nUpScrollling = 0;
              this.next = 40;
              this.sunService.setAstVal(40);
              this.router.navigate(['/astrology/ast-inner']);
            }
          }
            
        }else {
            //scroll up

            this.next--;
            this.sunService.setAstVal(this.next * 10);
            if(this.next < 0) {
              this.nDownScrolling++;
              if(this.nDownScrolling > 5) {
                this.next = 0;
                this.nDownScrolling = 0;
                this.sunService.setAstVal(0);
                this.sunService.setIntroVal(0);
                this.router.navigate(['/intro']); 
                 
              }
               
            } 
        }
    });
  } 

  ngOnDestroy() {
    
  }

  goPrev() {
    this.router.navigate(['/intro']);
  }
}
