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

  myVar;
  ngOnInit() {
    //const introObervable = this.sunService.getIntroVal();
    //console.log(introObervable);
    // introObervable.subscribe((globalsData: Globals) => {
    //   console.log(globalsData);
    //   //this.introVal = gIntro;
    // });
    this.myVar = setInterval(() => {
      this.introVal = this.sunService.getIntroVal();
      this.astVal = this.sunService.getAstVal();
      this.aboutVal = this.sunService.getAboutVal();
    }, 10);
    
    this.contactVal = this.stateData.gContact;
    this.counselingVal = this.stateData.gCounseling;
  }

  ngOnDestroy() {
    clearInterval(this.myVar);
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

  onAbout() {
    this.sunService.setAstVal(100);
    this.sunService.setIntroVal(100);
    this.router.navigate(['/about']);
  }
  
}
