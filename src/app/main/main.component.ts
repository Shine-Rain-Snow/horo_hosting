import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { 
  	
  }

  ngOnInit() {
    this.videoAstDownload();
    this.videoIntroDownload();
    this.videoContactDownload();
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(0);
  	setTimeout(() => {
      this.router.navigate(['/intro']);
      this.sunService.setIntroTitleShow(true);
      this.sunService.setIntroRefrsh(true);
    }, 4600);
    
    // $(".animate").click(()=>{
    //   this.router.navigate(['/intro']);
    //   this.sunService.setIntroTitleShow(true);
    //   this.sunService.setIntroRefrsh(true);
    // });
  }

  videoAstDownload() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://oferc.herokuapp.com/assets/video/astrology.Ogg', true);
    req.responseType = 'blob';
    const video = document.querySelector('video');
    req.onload = function() {
      
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        console.log("Ast");
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

  videoIntroDownload() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://oferc.herokuapp.com/assets/video/intro_1.ogg', true);
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

}
