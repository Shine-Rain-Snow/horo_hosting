import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { BackendService } from '../services/backend.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.scss']
})
export class CounselingComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService,
    private backendService: BackendService) { }

  watch_clock;
  counselingImgFlag = true;
  counselingImgURL;
  // user info data
  preventSpamNum = "";
  ngOnInit() {
    let self = this;
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(5);
    this.sunService.setShowMenu(true);

    if (this.counselingImgURL = this.sunService.getCounselingImageURL()) {
      console.log(this.counselingImgURL);
      this.counselingImgFlag = false;
    } else {
      //console.log("local image");
      this.counselingImgFlag = true;
    }

    this.displayTime();
    this.watch_clock = setInterval(this.displayTime, 1000);

    
    for(let i=0; i<6; i++) {
     this.preventSpamNum += String(Math.floor(Math.random() * 10));
    }

  }

  ngOnDestroy() {
    clearInterval(this.watch_clock);
  }

  displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getUTCHours();
    let minutes = currentTime.getUTCMinutes();
    let seconds = currentTime.getUTCSeconds();
    
  
    let bangkok_hr;
    let newyork_hr;
    let utc_min;
    let utc_sec;
    // Let's set the AM and PM meridiem and 
    // 12-hour format
    let bangkok_meridiem = "AM";  // Default is AM
    let newyork_meridiem = "AM";  // Default is AM
    bangkok_hr = hours-5;
    newyork_hr = hours - 16;
    // 0 AM and 0 PM should read as 12
    if (bangkok_hr === 0) {
      bangkok_hr = 12;    
    } else if(bangkok_hr < 0) {
      bangkok_hr = 24 + bangkok_hr;
    }

    if (newyork_hr === 0) {
      newyork_hr = 12;    
    } else if(newyork_hr < 0) {
      newyork_hr = 24 + newyork_hr;
    }
    // If hours is greater than 12
    if (bangkok_hr > 12) {
        bangkok_hr = bangkok_hr - 12; // Convert to 12-hour format
        newyork_meridiem = "PM"; // Keep track of the meridiem
    }
    
    if (newyork_hr > 12) {
      newyork_hr = newyork_hr - 12; // Convert to 12-hour format
      bangkok_meridiem = "PM"; // Keep track of the meridiem
    }
    
    // If the hours digit is less than 10
    
    if(bangkok_hr < 10) {
        bangkok_hr = "0" + bangkok_hr;
    }
    if(newyork_hr < 10) {
      newyork_hr = "0" + newyork_hr;
    }
    // Format minutes and seconds the same way
    if(minutes < 10) {
      utc_min = "0" + minutes;      
    }  else {
      utc_min = minutes;
    }      
    if(seconds < 10) {
      utc_sec = "0" + seconds;
    } else {
      utc_sec = seconds;
    }
    
    // This gets a "handle" to the clock div in our HTML
   
    //console.log(bangkok_clockDiv);
    $(".bangkok-time-img").text(bangkok_hr + ":" + utc_min + ":" + utc_sec + " " + bangkok_meridiem);
    $(".newyork-time-img").text(newyork_hr + ":" + utc_min + ":" + utc_sec + " " + newyork_meridiem);
  }

  onSendPayPal(f: NgForm) {
    let firstName = f.value.firstName;
    let lastName = f.value.lastName;
    let phone = f.value.phone;
    let email = f.value.email;
    let city = f.value.city;
    let zipeCode =  f.value.zipcode;
    let country = f.value.country;
    let verifyNum = f.value.verifyCode;

    if(typeof firstName!='undefined' && firstName && firstName.trim()) {
      if(typeof lastName!='undefined' && lastName && lastName.trim()) {
        if(typeof phone!='undefined' && phone && phone.trim()) {
        if(typeof email!='undefined' && email && email.trim()) {
          if(typeof city!='undefined' && city && city.trim()) {
            if(typeof zipeCode!='undefined' && zipeCode && zipeCode.trim()) {
              if(typeof country!='undefined' && country && country.trim()) {
                if(typeof verifyNum!='undefined' && verifyNum && verifyNum.trim()) {
                  if(Number(this.preventSpamNum) == verifyNum) {
                    console.log("send request to backend");
                    this.backendService.insertBookOrder(f.value).subscribe((data: any[]) => {
                      console.log(data);
                    });  
                  }
                }
              }
            }
          }
        }
      }
      }
    }
    
    
  }

  getCounselingImagePath() {
    return this.counselingImgURL;
  }

}
