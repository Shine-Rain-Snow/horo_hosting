import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  next: number = 0;
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(80);
    this.next = 80;
    $(".step-six").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 3;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 100) {
          this.sunService.setAboutVal(0);
          $(".step-six").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/counseling']);
          }, 600);
         
        } 
       
      } else {
        //scroll up
        this.next -= 3;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 80) {
          this.next = 0;
          $(".step-six").fadeOut(600);
          this.sunService.setAboutVal(60); 
          setTimeout(() => {
            this.router.navigate(['/about/step-five']); 
          }, 600);
             
        }
        
      }
    });

   }
  

}


