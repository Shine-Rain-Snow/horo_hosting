import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }

  next: number = 0;
  nUpScrollling: number = 0;
  nDownScrolling = 0;
  ngOnInit() {
    
    this.next = 0;
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(0);
    let oneFlag = true;
    let astFlag = true;
    $(".about_page").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 1;
        this.sunService.setAboutVal(this.next); 
        this.nUpScrollling++;
        if(this.nUpScrollling > 3) {
          if(oneFlag) {
            this.sunService.setAboutVal(30); 
            this.router.navigate(['/about/step-one']);
            oneFlag = false;
          }
          
        }
        //if(this.next > 30) {
          
        
        //} 
        // if(this.next > 100){
        //   this.router.navigate(['/counseling']);
        //   this.sunService.setAboutVal(0);
        // }
      } else {
        //scroll up
        this.next -= 1;
        this.sunService.setAboutVal(this.next); 
        //if(this.next < 0) {
        this.nDownScrolling++;
        if(this.nDownScrolling > 2) {
          if(astFlag) {
            this.next = 0;
            this.nDownScrolling = 0;
            this.sunService.setAboutVal(0);
            this.sunService.setAstVal(0);
            this.router.navigate(['/astrology']);   
            astFlag = false;
          }
          
        }
          
          
       // }
        
      }
    });
  }

  ngOnDestroy() {
    if(this.next >= 0 && this.next <= AppConstants.SCROLLING_COUNT) {
      this.sunService.setAboutVal(0);
    }
  }

}
