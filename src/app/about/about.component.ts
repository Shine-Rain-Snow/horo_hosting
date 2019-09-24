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
  ngOnInit() {
    
    this.next = 0;
    this.sunService.setProgressShow(true);
    this.sunService.setCurrentPage(4);

    $(".about_page").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 3;
        this.sunService.setAboutVal(this.next); 
        // if(this.next > 20) {
        //   this.router.navigate(['/about/step-one']);
        // } 
        if(this.next > 100){
          this.router.navigate(['/counseling']);
          this.sunService.setAboutVal(0);
        }
      } else {
        //scroll up
        this.next -= 3;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 0) {
          this.next = 0;
          this.sunService.setAboutVal(0);
          this.sunService.setAstVal(0);
          this.router.navigate(['/astrology']);    
        }
        
      }
    });
  }

  ngOnDestroy() {
    if(this.next >= 0 && this.next <= AppConstants.SCROLLING_COUNT) {
      this.sunService.setAboutVal(0);
    }
  }

}
