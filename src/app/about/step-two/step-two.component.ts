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
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(40);

    this.next = 40;
    $(".step-two").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 3;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 60) {
          $(".step-two").fadeOut(1000);
          setTimeout(() => {
            this.router.navigate(['/counseling']);
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
        if(this.next < 40) {
          this.sunService.setAboutVal(40);
          $(".step-two").fadeOut(1000);
          setTimeout(() => {
            this.router.navigate(['/about/step-one']); 
          }, 1000);
             
        }
        
      }
    });
  }

}
