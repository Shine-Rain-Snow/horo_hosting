import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  next: number = 0;
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(20);
    this.next = 20;
    $(".step-one").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 3;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 40) {
          this.sunService.setAboutVal(40);
          $(".step-one").fadeOut(1000);
          setTimeout(() => {
            this.router.navigate(['/about/step-two']);
          }, 1000);
         
        } 
        // if(this.next > 100){
        //   this.router.navigate(['/counseling']);
        //   this.sunService.setAboutVal(0);
        // }
      } else {
        //scroll up
        this.next -= 3;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 20) {
          this.next = 0;
          $(".step-one").fadeOut(1000);
          setTimeout(() => {
            this.router.navigate(['/about']); 
          }, 1000);
             
        }
        
      }
    });

  }

}
