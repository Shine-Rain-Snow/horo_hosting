import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {

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
    this.sunService.setAboutVal(70);
    this.next = 70;
    //image preload part 
    if (this.historyImgURL = this.sunService.getHistoryImageURL()) {
      this.historyImgFlag = false;
    } else {
      //console.log("local image");
      this.historyImgFlag = true;
    }
    $(".step-four").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 1.5;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 80) {
          this.sunService.setAboutVal(80);
          $(".step-four").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/about/step-five']);
          }, 600);
         
        } 
      } else {
        //scroll up
        this.next -= 1.5;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 70) {
          this.next = 0;
          $(".step-four").fadeOut(600);
          this.sunService.setAboutVal(60); 
          setTimeout(() => {
            this.router.navigate(['/about/step-images']); 
          }, 600);
             
        }
        
      }
    });

   }

   getHistoryImagePath(iNum: Number) {
     return this.historyImgURL[iNum.toString()];
   }
  

}

