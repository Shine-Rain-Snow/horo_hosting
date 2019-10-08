import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService) { }

  contactURL;
  thaiVidFlag = true;
  ngOnInit() {
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(6);
    this.sunService.setShowMenu(true);
    
    if (this.contactURL = this.sunService.getContactVideoURL()) {
      this.thaiVidFlag  = false;
      console.log("this is remote"+this.sunService.getContactVideoURL());
    } else {
      console.log("this is local dev");
      this.thaiVidFlag = true;
    }
    setTimeout(function() {
      $("#thaivid")[0].play();
      $("#thaivid")[0].muted = true;
      $("#indiavid")[0].play();
      $("#indiavid")[0].muted = true;
    }, 10);


  }

  public getContactPath(): string {
    if (this.contactURL = this.sunService.getContactVideoURL()) {
      return this.contactURL = this.sunService.getContactVideoURL(); //  after get the image from documents service
    }
   //console.log("Not found Contact video");
  }
  
  onPress() {
    this.sunService.setAllZero();
    this.router.navigate(['/press-release']);
    
  }

  

}


