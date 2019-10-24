import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  next: number = 0;
  historyImgFlag = true;
  historyImgURL;
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(90);
    this.next = 90;
    //image preload part 
    if (this.historyImgURL = this.sunService.getHistoryImageURL()) {
      this.historyImgFlag = false;
    } else {
      //console.log("local image");
      this.historyImgFlag = true;
    }  
    $(".step-six").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 12;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 100) {
          this.sunService.setAboutVal(0);
          $(".step-six").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/booksession']);
          }, 600);
         
        } 
       
      } else {
        //scroll up
        this.next -= 12;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 90) {
          this.next = 0;
          $(".step-six").fadeOut(600);
          this.sunService.setAboutVal(80); 
          setTimeout(() => {
            this.router.navigate(['/about/step-five']); 
          }, 600);
             
        }
        
      }
    });

    //android touch moving implements
    
    let andStartPos, andEndPos;
    let andStartTouch, andEndTouch;
    let andTouchFlag = false;
    let lastMove = null;
    let andGap;
    $(".step-six").bind("touchstart", (event) => {
      andStartTouch = event.touches[0];
      andStartPos = andStartTouch.pageX;
      andTouchFlag = true;      
    });

    $(".step-six").bind("touchmove", (event) => {
      lastMove = event;
    });

    $(".step-six").bind("touchend", (event) => {
      andEndTouch = lastMove.touches[0];
      andEndPos = andEndTouch.pageX;
      if(andTouchFlag) {
        andTouchFlag = false;
        andGap = andEndPos - andStartPos;
        
        if(andGap  < -60) {
          this.router.navigate(['/counseling']); 
        } 
        if( andGap > 60) {
          this.router.navigate(['/about/step-five']);
        } 
      }
    });

   }
  
  getHistoryImagePath(iNum: Number) {
     return this.historyImgURL[iNum.toString()];
  }

}


