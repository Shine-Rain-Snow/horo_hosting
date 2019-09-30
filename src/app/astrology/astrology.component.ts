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
    ) {  }
  
  next: number = 0;
  nDownScrolling = 0;
  nUpScrollling = 0;

  
  astURL;
  
  ngOnInit() {
    $(".astrology").css({opacity: "0.3"});
    $(".astrology").animate({
      opacity: "1"
    },1000);

    setTimeout(() => {
      
      $("#backgroundvid")[0].play();
      $("#backgroundvid")[0].muted = true;
      $("#backgroundvid")[0].autoplay = true;
    }, 10);

    this.sunService.setProgressShow(true);
    this.sunService.setAstVal(0);
    this.sunService.setCurrentPage(2);
    this.sunService.setShowMenu(true);
   
    this.next = 0;
    $(".astrology").bind("wheel", (event) => {  
        if(event.originalEvent.deltaY > 0) {
          //scroll up
          this.next += 2;
          this.sunService.setAstVal(this.next);
        
          
            this.nUpScrollling++;
            if(this.nUpScrollling > 6) {
              this.nUpScrollling = 0;
              this.next = 40;
              this.sunService.setAstVal(40);
              $(".astrology").fadeOut(1800, "swing");
              $(".transition_wall_up").toggleClass("anim-trans-up");
              setTimeout(() => {
                this.router.navigate(['/astrology/ast-inner']); 
              }, 2000);
            
            }
        
            
        }else {
            //scroll down

            this.next -= 2;
            this.sunService.setAstVal(this.next);
            this.nDownScrolling++;
            if(this.nDownScrolling > 6) {
            
              this.next = 0;
              this.nDownScrolling = 0;
              this.sunService.setAstVal(0);
              this.sunService.setIntroVal(0);

              
              $(".astrology").fadeOut(1800, "swing");
              $(".transition_wall_down").toggleClass("anim-trans-down");
              setTimeout(() => {
                this.router.navigate(['/intro']); 
              }, 2000);

            
            }
        }
      });
        
  } 

  public getImagePath(): string {
    if (this.astURL = this.sunService.getAstVideoURL()) {
      return this.astURL = this.sunService.getAstVideoURL(); 
    }
   //console.log("Not found Ast video");
  }

  ngOnDestroy() {
    
  }

}


