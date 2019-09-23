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
    $(".about_page").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next++;
        this.sunService.setAboutVal(this.next * 10); 
        if(this.next > AppConstants.SCROLLING_COUNT){
          //this.router.navigate(['/counseling']);
          this.next = AppConstants.SCROLLING_COUNT;
          this.sunService.setAboutVal(100);
        }
          
            
      } else {
        //scroll up
        this.next--;
        if(this.next < 0) {
          this.next = 0;
          this.sunService.setAboutVal(0);
          this.sunService.setAstVal(100);
          this.router.navigate(['/astrology/ast-inner']);    
        }
        this.sunService.setAboutVal(this.next * 10);
        
      }
    });
  }

  ngOnDestroy() {
    if(this.next >= 0 && this.next <= AppConstants.SCROLLING_COUNT) {
      this.sunService.setAboutVal(0);
    }
  }

}
