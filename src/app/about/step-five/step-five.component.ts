import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {


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
    this.sunService.setAboutVal(80);
    this.next = 80;
    //image preload part 
    if (this.historyImgURL = this.sunService.getHistoryImageURL()) {
      this.historyImgFlag = false;
    } else {
      //console.log("local image");
      this.historyImgFlag = true;
    }
    $(".step-five").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 90) {
          this.sunService.setAboutVal(90);
          $(".step-five").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/about/step-six']);
          }, 600);
         
        } 
      } else {
        //scroll up
        this.next -= 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 80) {
          this.next = 0;
          $(".step-five").fadeOut(600);
          this.sunService.setAboutVal(70); 
          setTimeout(() => {
            this.router.navigate(['/about/step-four']); 
          }, 600);
             
        }
        
      }
    });

   }
  
   getHistoryImagePath(iNum: Number) {
     return this.historyImgURL[iNum.toString()];
   }
}

