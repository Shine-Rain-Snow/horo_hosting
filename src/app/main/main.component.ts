import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private dom: DomSanitizer) { 
  	
  }
  flagIntro = false;
  flagAst = false;
  flagContact = false;
  flagAbout = false;
  downInterval;
  ngOnInit() {
    let self  = this;
   
    this.videoIntroDownload(self);
    this.videoAstDownload(self);
    this.videoContactDownload(self);
    this.videoAboutDownload(self);
    
    
    //this.sunService.setAstVideoURL(astURL);
    this.sunService.setProgressShow(false);
    this.sunService.setShowMenu(false);
    this.sunService.setCurrentPage(0);
  	setTimeout(() => {
          this.router.navigate(['/intro']);
          this.sunService.setIntroTitleShow(true);
    }, 9600);
  }

  ngOnDestroy() {
    clearInterval(this.downInterval);
  }

  videoIntroDownload(self) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://oferc.herokuapp.com/assets/video/intro_1.Ogg', true);
    req.responseType = 'blob';
    
    const video = document.querySelector('video');
    req.onload = function() {
     
      if (this.status === 200) {
          
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          //video.src = vid;
          let url = self.dom.bypassSecurityTrustUrl(vid);  
          self.sunService.setIntroVideoURL(url); 
          self.flagIntro = true;
          console.log("INTRO");
         
      } 
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

  videoAstDownload(self) {
    var req = new XMLHttpRequest();
    // req.open('GET', 'https://oferc.herokuapp.com/assets/video/astrology.Ogg', true);
    req.open('GET', 'https://oferc.herokuapp.com/assets/img/astrology.jpg', true);
    req.responseType = 'blob';
    const video = document.querySelector('video');
    req.onload = function(e) {
      
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          
          let url = self.dom.bypassSecurityTrustUrl(vid);  
          self.sunService.setAstVideoURL(url); 
          self.flagAst = true;
          console.log("ast video downloaded");
          
          //video.src = vid;
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }
    req.send();
  }

  

  videoContactDownload(self) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://oferc.herokuapp.com/assets/video/contact_thailand.Ogg', true);
    req.responseType = 'blob';
    const video = document.querySelector('video');
    req.onload = function() {
      
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        console.log("contact");
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          //video.src = vid;
          let url = self.dom.bypassSecurityTrustUrl(vid);  
          self.sunService.setContactVideoURL(url); 
          self.flagContact = true;
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

  videoAboutDownload(self) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://oferc.herokuapp.com/assets/video/about_inner1.Ogg', true);
    req.responseType = 'blob';
    const video = document.querySelector('video');
    req.onload = function() {
      
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        console.log("about");
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          //video.src = vid;
          let url = self.dom.bypassSecurityTrustUrl(vid);  
          self.sunService.setAboutVideoURL(url); 
          self.flagAbout = true;
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

}
