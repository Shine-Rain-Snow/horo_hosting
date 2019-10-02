import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  next: number;
  aboutURL;
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(40);

    this.next = 40;
    let oneFlag = true;
    $(".step-two").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 50) {
          this.sunService.setAboutVal(50); 
          $(".step-two").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/about/step-three']);
          }, 600);
         
        } 
      } else {
        //scroll up
        this.next -= 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 40) {
          if(oneFlag) {
            this.sunService.setAboutVal(30);
            $(".step-two").fadeOut(600);
            setTimeout(() => {
              this.router.navigate(['/about/step-one']); 
            }, 600);
            oneFlag = false;
          }
          
             
        }
        
      }
    });
  }

  public getImagePath(): string {
    if (this.aboutURL = this.sunService.getAboutVideoURL()) {
      return this.aboutURL = this.sunService.getAboutVideoURL(); //  after get the image from documents service
    }
   //console.log("Not found Ast video");
  }

}
