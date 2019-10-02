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
    private sunService: SunProgressService,
     ) { 
    }
  
  next: number = 0;
  nDownScrolling = 0;
  nUpScrollling = 0;
  astURL;
  imgFlag = true;
  ngOnInit() {
    

    if (this.astURL = this.sunService.getAstVideoURL()) {
      this.imgFlag = false;
    } else {
      this.imgFlag = true;
    }
    // setTimeout(() => {
      
    //   $("#backgroundvid")[0].play();
    //   $("#backgroundvid")[0].muted = true;
    //   $("#backgroundvid")[0].autoplay = true;
    // }, 10);

    this.sunService.setProgressShow(true);
    this.sunService.setAstVal(0);
    this.sunService.setCurrentPage(2);
    this.sunService.setShowMenu(true);
   
    this.next = 0;
    let introFlag = true;
    let astinnerFlag = true;
    $(".astrology").bind("wheel", (event) => {  
        if(event.originalEvent.deltaY > 0) {
          //scroll up
          this.next += 2;
          this.sunService.setAstVal(this.next);
          this.nDownScrolling = 0;
          this.nUpScrollling++;
          if(this.nUpScrollling > 3) {
            if(astinnerFlag) {
              this.nUpScrollling = 0;              
              this.next = 40;
              this.sunService.setAstVal(40);
              this.router.navigate(['/astrology/ast-inner']); 
              astinnerFlag = false;
            }
          }
            
        }else {
            //scroll down

            this.next -= 2;
            this.sunService.setAstVal(this.next);
            this.nDownScrolling++;
            this.nUpScrollling = 0;
            if(this.nDownScrolling > 3) {
              if(introFlag) {
                this.next = 0;
                this.nDownScrolling = 0;
                this.sunService.setAstVal(0);
                this.sunService.setIntroVal(0);
                this.router.navigate(['/intro']);
                introFlag = false;
              }
            }
        }
      });
        
  } 

  public getImagePath(): string {
    if (this.astURL = this.sunService.getAstVideoURL()) {
      this.imgFlag = false;
      return this.astURL = this.sunService.getAstVideoURL(); 
    } else {
      this.imgFlag = true;
    }
  }

  ngOnDestroy() {
    
  }

}
