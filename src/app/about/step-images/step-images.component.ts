import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-step-images',
  templateUrl: './step-images.component.html',
  styleUrls: ['./step-images.component.scss']
})
export class StepImagesComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  next: number = 0;
  aboutImgFlag = true;
  aboutImgURL;
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(60);
    this.next = 60;
    //image preload
    if (this.aboutImgURL = this.sunService.getAboutImageURL()) {
      this.aboutImgFlag = false;
    } else {
      console.log("local image");
      this.aboutImgFlag = true;
    }

    $(".step-images").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 1;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 70) {
          this.sunService.setAboutVal(70);
          $(".step-images").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/about/step-four']);
          }, 600);
         
        } 
      } else {
        //scroll up
        this.next -= 1;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 60) {
          this.next = 0;
          $(".step-images").fadeOut(600);
          this.sunService.setAboutVal(50); 
          setTimeout(() => {
            this.router.navigate(['/about/step-three']); 
          }, 600);
             
        }
        
      }
    });

   }

   getAboutImagePath(iNum: Number) {
    // console.log(this.aboutImgURL[iNum.toString()])
     return this.aboutImgURL[iNum.toString()];
  }
  

}

