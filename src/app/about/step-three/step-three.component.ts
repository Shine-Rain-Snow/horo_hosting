import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  next: number = 0;
  ngOnInit() {
    this.sunService.setProgressShow(true);
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(4);
    this.sunService.setAboutVal(50);
    this.next = 50;
    $(".step-three").bind("wheel", (event) => {  
      if(event.originalEvent.deltaY > 0) {
        //scroll down
        this.next += 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next > 60) {
          this.sunService.setAboutVal(60);
          $(".step-three").fadeOut(600);
          setTimeout(() => {
            this.router.navigate(['/about/step-images']);
          }, 600);
         
        } 
      } else {
        //scroll up
        this.next -= 2;
        this.sunService.setAboutVal(this.next); 
        if(this.next < 50) {
          this.next = 0;
          $(".step-three").fadeOut(600);
          this.sunService.setAboutVal(40); 
          setTimeout(() => {
            this.router.navigate(['/about/step-two']); 
          }, 600);
             
        }
        
      }
    });

   }
  

}
