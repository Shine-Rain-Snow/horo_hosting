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
  aboutImgFlag = true;
  aboutImgURL;
  ngOnInit() {
    
    this.next = 0;
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(0);
    //image preload part 
    if (this.aboutImgURL = this.sunService.getAboutImageURL()) {
      this.aboutImgFlag = false;
    } else {
      //console.log("local image");
      this.aboutImgFlag = true;
    }

    let oneFlag = true;
    let astFlag = true;
    $(".about_page").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 12;
        this.sunService.setAboutVal(this.next); 
        this.nUpScrollling++;
        if(this.next > 10) {
          if(oneFlag) {
            this.sunService.setAboutVal(30); 
            this.router.navigate(['/about/step-one']);
            oneFlag = false;
          }
          
        }
   
      } else {
        //scroll up
        this.next -= 1;
        this.sunService.setAboutVal(this.next); 
        //if(this.next < 0) {
        this.nDownScrolling++;
        if(this.nDownScrolling > 1) {
          if(astFlag) {
            this.next = 0;
            this.nDownScrolling = 0;
            this.sunService.setAboutVal(0);
            this.sunService.setAstVal(0);
            this.router.navigate(['/astrology']);   
            astFlag = false;
          }
          
        }
      }
    });

    //android touch moving implements
    
    let andStartPos, andEndPos;
    let andStartTouch, andEndTouch;
    let andTouchFlag = false;
    let lastMove = null;
    let andGap;
    $(".about_page").bind("touchstart", (event) => {
      andStartTouch = event.touches[0];
      andStartPos = andStartTouch.pageX;
      andTouchFlag = true;      
    });

    $(".about_page").bind("touchmove", (event) => {
      lastMove = event;
    });

    $(".about_page").bind("touchend", (event) => {
      andEndTouch = lastMove.touches[0];
      andEndPos = andEndTouch.pageX;
      if(andTouchFlag) {
        andTouchFlag = false;
        andGap = andEndPos - andStartPos;
       
        if(andGap  < 0) {
          this.sunService.setIntroVal(0);
          this.sunService.setAstVal(40);
          this.router.navigate(['/about/step-one']); 
        } 
        if( andGap > 0) {
          this.router.navigate(['/astrology']);
        } 
      }
    });
  }

  getAboutImagePath(iNum: Number) {
     return this.aboutImgURL[iNum.toString()];
  }

  ngOnDestroy() {
    if(this.next >= 0 && this.next <= AppConstants.SCROLLING_COUNT) {
      this.sunService.setAboutVal(0);
    }
  }

}
