import { Component, OnInit } from '@angular/core';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';


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
            if(this.introVal >= 100){
              this.onAst();
            }
            break;
          }
          //astrology page
          case 2: {
            this.astVal += 0.1;
            this.sunService.setAstVal(this.astVal);
            if(this.astVal >= 40) {
              this.onAstInner();
            }
            if(this.astVal >= 100){
              this.onAbout();
            }
            break;
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
   
    
    this.sunService.setIntroVal(0);
    this.sunService.setAstVal(0);
    this.sunService.setAboutVal(0);
    this.router.navigate(['/intro']);
  }

  onAst() {
    this.sunService.setAstVal(0);
    this.sunService.setIntroVal(100);
    this.router.navigate(['/astrology']);
  }

  onAstInner() {
    this.sunService.setAstVal(40);
    this.router.navigate(['/astrology/ast-inner']);
  }

  onAbout() {
    this.sunService.setAstVal(100);
    this.sunService.setIntroVal(100);
    this.router.navigate(['/about']);
  }
  
}
