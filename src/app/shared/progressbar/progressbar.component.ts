import { Component, OnInit } from '@angular/core';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [ Globals ],
})
export class ProgressbarComponent implements OnInit {

  constructor(private router: Router,
    public stateData: Globals, 
    private sunService: SunProgressService) { }
  introVal: number;
  astVal: number;
  contactVal: number;
  aboutVal: number;
  counselingVal: number;
  
  progressShow: boolean;
  myVar;
  barMove;
  mCurrentPage = 0;
  colorPreference;
  ngOnInit() {
  
    this.myVar = setInterval(() => {
      this.introVal = this.sunService.getIntroVal();
      this.astVal = this.sunService.getAstVal();
      this.aboutVal = this.sunService.getAboutVal();
      this.progressShow = this.sunService.getProgressShow();
      this.mCurrentPage = this.sunService.getCurrentPage();
    }, 10);
   
    this.contactVal = this.stateData.gContact;
    this.counselingVal = this.stateData.gCounseling;
    if(!this.progressShow) {
      this.barMove = setInterval(() => {
       
        switch(this.mCurrentPage) {
          //Intro page
          case 1: {
            this.introVal += 0.1;  
            this.sunService.setIntroVal(this.introVal);
            this.colorPreference = 'white';
            $(".progress_container").removeClass("about-change");
            if(this.introVal > 100) {
              this.sunService.setIntroVal(100);
              break;
            }
            break;
          }
          //astrology page
          case 2: {
            this.astVal += 0.1;
            this.sunService.setAstVal(this.astVal);
            this.colorPreference = 'white';
            $(".progress_container").removeClass("about-change");
            if(this.astVal > 40) {
              this.sunService.setAstVal(40);
              break;
            }    
            break;
          }
          //ast-inner page
          case 3: {
            this.colorPreference = 'black';
            $(".progress_container").removeClass("about-change");
            this.sunService.setAstVal(this.astVal);
            break;
           
          }
          // about page
          case 4: {
            this.colorPreference = 'black';
            $(".progress_container").addClass("about-change");
            if(this.aboutVal < 30) {
              this.aboutVal += 0.1;
              this.sunService.setAboutVal(this.aboutVal);
            } else {
              break;
            }
            
            break;
          }
          //counseling page
          case 5: {
            $(".progress_container").removeClass("about-change");
            this.colorPreference = 'black';
          }
        }
      }, 50);
    }
    
  }

  ngOnDestroy() {
    clearInterval(this.myVar);
    clearInterval(this.barMove);
  }

  onIntro() {
    
      this.sunService.setAllZero();
      this.router.navigate(['/intro']);
    
  }

  onAst() {
    this.sunService.setAllZero();
    this.router.navigate(['/astrology']);
  }

  onAstInner() {
    this.sunService.setAstVal(40);
    this.router.navigate(['/astrology/ast-inner']);
  }

  onAbout() {
    this.sunService.setAllZero();
    this.router.navigate(['/about']);
  }

  onCounseling() {
    this.sunService.setAllZero();
    this.router.navigate(['/counseling']);
  }

  onContact() {
    this.sunService.setAllZero();
    this.router.navigate(['/contact']);
  }
}