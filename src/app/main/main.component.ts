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
    // predownload section
    this.videoIntroDownload(self);
    this.imageIntroDownload(self);
    this.videoAstDownload(self);
    this.videoContactDownload(self);
    this.videoAboutDownload(self);
    this.imagePressDownload(self);
    this.imageBooksDownload(self);
    this.imageAboutDownload(self);
    this.imageHistoryDownload(self);
    this.imageCounselingDownload(self);
    this.imageTarotDownload(self);
    this.imageRiderDownload(self);
    this.imageHermeticDownload(self);
    this.imageLenormandDownload(self);

    this.sunService.setProgressShow(false);
    this.sunService.setShowMenu(false);
    this.sunService.setCurrentPage(0);
  	setTimeout(() => {
      this.router.navigate(['/intro']);
      this.sunService.setIntroTitleShow(true);
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.downInterval);
  }

  videoIntroDownload(self) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://ofercohen.net/assets/video/intro_1.Ogg', true);
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
          console.log("intro");
         
      } 
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();

    var req1 = new XMLHttpRequest();
    req1.open('GET', 'https://ofercohen.net/assets/video/intro_2.Ogg', true);
    req1.responseType = 'blob';
    
    req1.onload = function() {
     
      if (this.status === 200) {
          
          var videoBlob1 = this.response;
          var vid1 = URL.createObjectURL(videoBlob1); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          //video.src = vid;
          let url1 = self.dom.bypassSecurityTrustUrl(vid1);  
          self.sunService.setIntroVideoURL1(url1); 
          self.flagIntro = true;
          console.log("intro1");
         
      } 
    }
    req1.onerror = function() {
      // Error
      console.log("error");
    }

    req1.send();
  }

  imageIntroDownload(self) {
    let pressReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<9; i++) {
        pressReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/intro/intro_'+i+'.jpg';
        pressReq[i].open('GET', imgStr[i], true);
        pressReq[i].responseType = 'blob';
       
        pressReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);                
              self.sunService.setIntroImageURL(url);  
              //console.log(i+"remote="+url[i]);             
          }
        }
        pressReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        pressReq[i].send();
    }
  }

  videoAstDownload(self) {
    var req = new XMLHttpRequest();
    
    req.open('GET', 'https://ofercohen.net/assets/img/astrology.jpg', true);
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
          console.log("ast main image downloaded");
          
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
    req.open('GET', 'https://ofercohen.net/assets/video/contact_thailand.Ogg', true);
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
    req.open('GET', 'https://ofercohen.net/assets/video/about_inner1.Ogg', true);
    req.responseType = 'blob';
    const video = document.querySelector('video');
    req.onload = function() {
      
      
      if (this.status === 200) {
        
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          
          let url = self.dom.bypassSecurityTrustUrl(vid);  
          self.sunService.setAboutVideoURL(url); 
          self.flagAbout = true;
          console.log("about");
      }
    }
    req.onerror = function() {
      // Error
      console.log("error");
    }

    req.send();
  }

  
  imagePressDownload(self) {

    let pressReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<=20; i++) {
        pressReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/press-release/'+i+'.jpg';
        pressReq[i].open('GET', imgStr[i], true);
        pressReq[i].responseType = 'blob';
       
        pressReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);  
              
              self.sunService.setPressImageURL(url); 
              
          }
        }
        pressReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        pressReq[i].send();
    }
    
  }

  imageBooksDownload(self) {

    let pressReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<=4; i++) {
        pressReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/books/books'+i+'.png';

        pressReq[i].open('GET', imgStr[i], true);
        pressReq[i].responseType = 'blob';
       
        pressReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);  
              
              self.sunService.setBooksImageURL(url); 
              //console.log(i+"remoteblalbl"+url[i]);
          }
        }
        pressReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        pressReq[i].send();
    }
    
  }

  imageAboutDownload(self) {

    let pressReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=0; i<7; i++) {
        pressReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/about/about'+i+'.jpg';
        pressReq[i].open('GET', imgStr[i], true);
        pressReq[i].responseType = 'blob';
       
        pressReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);                
              self.sunService.setAboutImageURL(url);  
              //console.log(i+"remote="+url[i]);             
          }
        }
        pressReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        pressReq[i].send();
    }
    
  }

  imageHistoryDownload(self) {

    let pressReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<11; i++) {
        pressReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/about/his'+i+'.png';
        pressReq[i].open('GET', imgStr[i], true);
        pressReq[i].responseType = 'blob';
       
        pressReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);                
              self.sunService.setHistoryImageURL(url);  
              //console.log(i+"remote="+url[i]);             
          }
        }
        pressReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        pressReq[i].send();
    }
    
  }

  imageCounselingDownload(self) {
    var reqCounseling = new XMLHttpRequest();    
    reqCounseling.open('GET', 'https://ofercohen.net/assets/img/counseling/counseling.png', true);
    reqCounseling.responseType = 'blob';
    reqCounseling.onload = function(e) {
      
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          
          let url = self.dom.bypassSecurityTrustUrl(vid);  
          self.sunService.setCounselingImageURL(url); 
          
          console.log("reqCounseling image downloaded"+url);
      }
    }
    reqCounseling.onerror = function() {
      // Error
      console.log("error");
    }
    reqCounseling.send();
  }
  
  imageTarotDownload(self) {
    let pressReqTarot = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<=11; i++) {
        pressReqTarot[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/tarot/tarot'+i+'.png';
        pressReqTarot[i].open('GET', imgStr[i], true);
        pressReqTarot[i].responseType = 'blob';
       
        pressReqTarot[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);  
              
              self.sunService.setTarotImageURL(url); 
             
          }
        }
        pressReqTarot[i].onerror = function() {
          // Error
          console.log("error");
        }

        pressReqTarot[i].send();
    }
  }

  imageRiderDownload(self) {
    let riderReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<=22; i++) {
        riderReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/tarot/ridercard/'+i+'.png';
        riderReq[i].open('GET', imgStr[i], true);
        riderReq[i].responseType = 'blob';
       
        riderReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);                
              self.sunService.setRiderImageURL(url); 
              //console.log(url);
          }
        }
        riderReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        riderReq[i].send();
    }
  }

  imageHermeticDownload(self) {
    let hermeticReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<=22; i++) {
        hermeticReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/tarot/hermetic/'+i+'.jpg';
        hermeticReq[i].open('GET', imgStr[i], true);
        hermeticReq[i].responseType = 'blob';
       
        hermeticReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);                
              self.sunService.setHermeticImageURL(url); 
              //
              //console.log(url);
          }
        }
        hermeticReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        hermeticReq[i].send();
    }
  }

  imageLenormandDownload(self) {
    let lenormandReq = [];
    let pressCount = 0;
    let videoBlob = [];
    let vid = [];
    let url = [];
    let imgStr = [];
    let imgArray;
    for(let i=1; i<=36; i++) {
        lenormandReq[i] = new XMLHttpRequest();
        imgStr[i] = 'https://ofercohen.net/assets/img/tarot/lenormand/'+i+'.jpg';
        lenormandReq[i].open('GET', imgStr[i], true);
        lenormandReq[i].responseType = 'blob';
       
        lenormandReq[i].onload = function() {
          
          if (this.status === 200) {
            
              videoBlob[i] = this.response;
              vid[i] = URL.createObjectURL(videoBlob[i]); 
              url[i] = self.dom.bypassSecurityTrustUrl(vid[i]);                
              self.sunService.setLenormandImageURL(url); 
              //console.log(url);
          }
        }
        lenormandReq[i].onerror = function() {
          // Error
          console.log("error");
        }

        lenormandReq[i].send();
    }
  }


}
