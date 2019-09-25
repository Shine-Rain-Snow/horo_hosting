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
  astURL;
  ngOnInit() {
    let self  = this;
    // this.videoAstDownload(self);
    this.videoIntroDownload();
    this.videoContactDownload();
    
    this.videoAstDownload(self);
    //this.sunService.setAstVideoURL(astURL);
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(0);
  	// setTimeout(() => {
    //   this.router.navigate(['/intro']);
    //   this.sunService.setIntroTitleShow(true);
    //   this.sunService.setIntroRefrsh(true);
    // }, 4600);
    
    $(".animate").click(()=>{
      this.router.navigate(['/intro']);
      this.sunService.setIntroTitleShow(true);
      this.sunService.setIntroRefrsh(true);
    });
  }

  videoAstDownload(self) {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://oferc.herokuapp.com/assets/video/astrology.Ogg', true);
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
          //console.log("vid"+vid);
          //return vid;
          // Video is now downloaded
          console.log("ast downloaded");
          // and we can set it as source on the video element
          video.src = vid;
          // console.log("Ast"+e);
          // console.log("url"+vid);
          // console.log("req"+req);
          
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

  videoIntroDownload() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://oferc.herokuapp.com/assets/video/intro_1.Ogg', true);
    req.responseType = 'blob';
    const video = document.querySelector('video');
    req.onload = function() {
      
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        console.log("INTRO");
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          video.src = vid;
          
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

  videoContactDownload() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://oferc.herokuapp.com/assets/video/contact_thailand.Ogg', true);
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
          video.src = vid;
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

}
