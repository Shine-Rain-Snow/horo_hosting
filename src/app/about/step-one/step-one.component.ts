import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

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
    this.sunService.setAboutVal(30);

    //image preload part 
    if (this.historyImgURL = this.sunService.getHistoryImageURL()) {
      this.historyImgFlag = false;
    } else {
      //console.log("local image");
      this.historyImgFlag = true;
    }

    this.next = 30;
    $(".step-one").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 1.5;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 40) {
          this.sunService.setAboutVal(40);
          $(".step-one").fadeOut(1000);
          setTimeout(() => {
            this.router.navigate(['/about/step-two']);
          }, 1000);
         
        } 
      } else {
        //scroll up
        this.next -= 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 30) {
          this.next = 0;
          this.sunService.setAboutVal(0); 
          this.router.navigate(['/about']); 
             
        }
        
      }
    });

    //android touch moving implements
    
    let andStartPos, andEndPos;
    let andStartTouch, andEndTouch;
    let andTouchFlag = false;
    let lastMove = null;
    let andGap;
    $(".step-one").bind("touchstart", (event) => {
      andStartTouch = event.touches[0];
      andStartPos = andStartTouch.pageX;
      andTouchFlag = true;      
    });

    $(".step-one").bind("touchmove", (event) => {
      lastMove = event;
    });

    $(".step-one").bind("touchend", (event) => {
      andEndTouch = lastMove.touches[0];
      andEndPos = andEndTouch.pageX;
      if(andTouchFlag) {
        andTouchFlag = false;
        andGap = andEndPos - andStartPos;
        
        if(andGap  < -60) {
          this.router.navigate(['/about/step-two']); 
        } 
        if( andGap > 60) {
          this.router.navigate(['/about']);
        } 
      }
    });
  }

  getHistoryImagePath(iNum: Number) {
     return this.historyImgURL[iNum.toString()];
  }

}
