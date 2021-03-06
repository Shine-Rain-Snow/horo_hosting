import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [],
})
export class IntroComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private domSanitizer: DomSanitizer) { }

  next: number = 0;
  photoInterval;
  videoInterval;
  scrollingInterval;
  numPhoto = 8;
  numMovies = 8;
  scroll_flag: boolean;
  animaFlag: boolean = true;
  failFlag: boolean = false;
  introURL;
  introURL1;
  playInterval;
  introImgFlag;
  introImgURL;
  ngOnInit() {
    let self = this;
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(1);
    // this.sunService.setProgressShow(false);
    this.scroll_flag = this.sunService.getIntroTitleShow();
    
    //image preload
    
    if (this.introImgURL = this.sunService.getIntroImageURL()) {
      this.introImgFlag = false;
    } else {
      console.log("local image");
      this.introImgFlag = true;
    }  
    
    setTimeout(() => {
      $("#playV1")[0].play();
      $("#playV1")[0].muted = true;
      $("#playV2")[0].play();
      $("#playV2")[0].muted = true;
      $("#playV3")[0].play();
      $("#playV3")[0].muted = true;
      $("#playV4")[0].play();
      $("#playV4")[0].muted = true;
      $("#playV5")[0].play();
      $("#playV5")[0].muted = true;
      $("#playV6")[0].play();
      $("#playV6")[0].muted = true;
      $("#playV7")[0].play();
      $("#playV7")[0].muted = true;
      $("#playV8")[0].play();
      $("#playV8")[0].muted = true;
    }, 1);
    
     
    if(navigator.userAgent.indexOf("Chrome") != -1 ){
      console.log("chrome");  
    }
    else{
      console.log("not chrome");
    }

    //scrollbar, title animation part
   
    if(screen.width < 901) {
      setTimeout(() => {
      $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
      $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
      $(".intro_tex_content").animate({opacity: '1'}, 9000);
      
      this.scrollingInterval = setInterval(function(){
      
        $(".scroll_symbol").animate({
          width: '60px',
        }, 
        {
          duration: 2000,
          easing: "linear",
          complete: function() {
            $(".scroll_symbol").css({ width: '0px' });
          }
        });
      }, 2100);

    }, 100);
    } else {
      setTimeout(() => {
      $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
      $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
      $(".intro_tex_content").animate({opacity: '1'}, 9000);
      
      this.scrollingInterval = setInterval(function(){
      
        $(".scroll_symbol").animate({
          height: '60px',
        }, 
        {
          duration: 2000,
          easing: "linear",
          complete: function() {
            $(".scroll_symbol").css({ height: '0px' });
          }
        });
      }, 2100);
    }, 100);
    }
    
    //scrolling symbol
    let scrollUpCount = 0;
    let scrollDownCount = 0;
    //this.sunService.setIntroVal(0);
    let astFlag = true;
    let astFlag40 = true;
    $(".intro").bind("wheel", (event) => {

      if(this.scroll_flag) {
        this.scroll_flag = false;
        this.next = 0;
        this.sunService.setIntroVal(0);
      }
      this.sunService.setIntroTitleShow(false);
      this.sunService.setProgressShow(true);
      this.next = this.sunService.getIntroVal();
      if(event.originalEvent.deltaY > 0) {
        //scroll up
        scrollDownCount = 0;
        scrollUpCount++;
        this.next += 5;
        if(astFlag)
          this.sunService.setIntroVal(this.next);
        if(scrollUpCount > 3) {

          if(this.next > 43){
            
              if(astFlag) {
                this.sunService.setIntroVal(0);
                scrollUpCount = 0;
                this.router.navigate(['/astrology']); 
                astFlag = false;
              }
              
          } 
          if(this.next < 40) {
            if(astFlag40) {
              this.next = 40;
              this.sunService.setIntroVal(40);
              this.animaFlag = false;
              scrollUpCount = 0;
              astFlag40 = false;
            }
            
          }
        }
        
      } else if(event.originalEvent.deltaY < 0) {
        //scroll down
       
        scrollUpCount = 0;
        scrollDownCount++;
        
        if(scrollDownCount > 2) {
          if(this.next >= 45) {
            
            this.next = 40;
            scrollDownCount = 0;
            
            this.sunService.setIntroVal(40);
          }
          else if(this.next>40 && this.next<45) {
            this.next = 0;
            scrollDownCount = 0;
            this.sunService.setIntroVal(0);
            $(".intro").fadeOut(1000);
            setTimeout(() => {
            this.router.navigate(['/intro']); 
            }, 1000);
          } else {
            this.next = 0;
            scrollDownCount = 0;
            this.sunService.setIntroVal(0);
            $(".intro").fadeOut(1000);
            setTimeout(() => {
            this.router.navigate(['/intro']); 
            }, 1000);
           
          }
        }
      }
    });

    //android touch moving implements
    
    let andStartPos, andEndPos;
    let andStartTouch, andEndTouch;
    let andTouchFlag = false;
    let lastMove = null;
    let andGap;
    $(".intro").bind("touchstart", (event) => {
      andStartTouch = event.touches[0];
      andStartPos = andStartTouch.pageX;
      andTouchFlag = true;
      this.sunService.setIntroTitleShow(false);
      this.sunService.setProgressShow(true);
      if(this.scroll_flag) {
        this.scroll_flag = false;
        this.next = 0;
        this.sunService.setIntroVal(0);
      }
    });

    $(".intro").bind("touchmove", (event) => {
      lastMove = event;
    });

    $(".intro").bind("touchend", (event) => {
      andEndTouch = lastMove.touches[0];
      andEndPos = andEndTouch.pageX;
      if(andTouchFlag) {
        andTouchFlag = false;
        andGap = andEndPos - andStartPos;
        console.log("gap="+andGap);
        if(andGap > -40 && andGap  < 0) {
          this.animaFlag = false;
          this.sunService.setIntroVal(40);
        } 
        if( andGap < -80) {
          console.log("go to next");
          this.router.navigate(['/astrology']); 
        } 
        if( andGap > 0) {
          
          $(".intro").fadeOut(1000);
          setTimeout(() => {
            this.router.navigate(['/intro']); 
          }, 1000);
        }
      }
    });


    //photo and video are moving by this function.
    clearInterval(this.photoInterval);
    clearInterval(this.videoInterval);
    clearInterval(this.scrollingInterval);
    
    $(".photo").finish();
    $(".photo span").removeClass("active");
    $(".photo span").css({top: '100%'});
    $(".photo span").removeClass("prev");
    $(".photo span").css({visibility: 'hidden'});
    
    $(".photo span:nth-child(1)").addClass("active");
    $(".photo span:nth-child(1)").css({top: '0%'});
    $(".photo span:nth-child(2)").addClass("prev");

    $(".movies").finish();
    $(".movies span").removeClass("active");
    $(".movies span").css({top: '100%'});
    $(".movies span").removeClass("prev");
    $(".movies span").css({visibility: 'hidden'});
    
    $(".movies span:nth-child(1)").addClass("active");
    $(".movies span:nth-child(1)").css({top: '0%'});
    $(".movies span:nth-child(2)").addClass("prev");
    
    this.movePhoto();
    this.moveMovies();
    
    this.photoInterval = setInterval(this.movePhoto, 10100);
    this.videoInterval = setInterval(this.moveMovies, 10100);
    
    setTimeout(()=> {
      this.animaFlag = false;
      this.sunService.setIntroVal(40);
    }, 10000*7);
  }

  ngOnDestroy() {
    clearInterval(this.photoInterval);
    clearInterval(this.videoInterval);
    clearInterval(this.scrollingInterval);
    clearInterval(this.playInterval);
    this.sunService.setIntroVal(0);
    $(".photo").finish();
    $(".movies").finish();
  }

  movePhoto() {
    const numPhoto = 8;
    let n = 0, m =0;
    
    for(let i=1; i<= numPhoto; i++) {
      if($(".photo span:nth-child("+i+")").hasClass("active")){
        n = i;
        break;
      }
    }
    
    $(".photo span").css({visibility:'hidden'});
      if( n == numPhoto) {
        
        $(".photo span:nth-child(1)").css({visibility: 'visible'});
        $(".photo span:nth-child("+numPhoto+")").css({visibility: 'visible'});
      } else {
        
        $(".photo span:nth-child("+n+")").css({visibility: 'visible'});
        m = n + 1;
        $(".photo span:nth-child("+m+")").css({visibility: 'visible'});
    }

    $(".photo").animate({
      top: '-=100%'
    }, 
    {
      duration: 10000,
      easing: "linear",
      complete: function() {
        
        $(".photo").css({top: '0%'});
        $(".photo span").css({top:'100%'});
        let m, k;
        if( n == numPhoto) {
          $(".photo span:nth-child(1)").css({top: '0%'});
        } else {
          m = n + 1;
          $(".photo span:nth-child("+m+")").css({top: '0%'});
        }
        

        $(".photo span:nth-child("+n+")").removeClass('active');
        m = n + 1;
        if(m > numPhoto) {
          $(".photo span:nth-child(1)").addClass('active');
          $(".photo span:nth-child(1)").removeClass('prev');
        } else {
          
          $(".photo span:nth-child("+m+")").addClass('active');
          $(".photo span:nth-child("+m+")").removeClass('prev');
          m = 0;
        }
        k = n + 2;
        if(k > numPhoto) {
          $(".photo span:nth-child(1)").addClass('prev');
        } else {
          $(".photo span:nth-child("+k+")").addClass('prev');
          k = 0;
        }
        
         

      },
      fail: function() {
      
        $(".photo").finish();
        
        $(".photo > span").removeClass("active");
        $(".photo > span").css({top: '100%'});
        $(".photo > span").removeClass("prev");
        $(".photo > span").css({visibility: 'hidden'});
        $(".photo span:nth-child(1)").addClass("active");
        $(".photo span:nth-child(1)").css({top: '0%'});
        $(".photo span:nth-child(2)").addClass("prev");
    
      }
    });

  }


  moveMovies() {
    const numMovies = 8;
    let n
    for(let i=1; i<= numMovies; i++) {
      if($(".movies span:nth-child("+i+")").hasClass("active")){
        n = i;
        break;
      }
    }

    $(".movies span").css({visibility:'hidden'});
    if( n == numMovies) {
      $(".movies span:nth-child(1)").css({visibility: 'visible'});
      $(".movies span:nth-child("+numMovies+")").css({visibility: 'visible'});
    } else {
      $(".movies span:nth-child("+n+")").css({visibility: 'visible'});
      let m = n + 1;
      $(".movies span:nth-child("+m+")").css({visibility: 'visible'});
    } 

    $(".movies").animate({
      top: '-=100%'
    }, 
    {
      duration: 10000,
      easing: "linear",
      complete: function() {
        $(".movies").css({top: '0%'});
        $(".movies span").css({top:'100%'});
        let m, k;
        if( n == numMovies) {
          $(".movies span:nth-child(1)").css({top: '0%'});
        } else {
          m = n + 1;
          $(".movies span:nth-child("+m+")").css({top: '0%'});
        }
        

        $(".movies span:nth-child("+n+")").removeClass('active');
        m = n + 1;
        if(m > numMovies) {
          $(".movies span:nth-child(1)").addClass('active');
          $(".movies span:nth-child(1)").removeClass('prev');
        } else {
          $(".movies span:nth-child("+m+")").addClass('active');
          $(".movies span:nth-child("+m+")").removeClass('prev');
        }
        k = n + 2;
        if(k > numMovies) {
          $(".movies span:nth-child(1)").addClass('prev');
        } else {
          $(".movies span:nth-child("+k+")").addClass('prev');
        }
        
      },
      fail: function() {
        $(".movies").finish();
        $(".movies span").removeClass("active");
        $(".movies span").css({top: '100%'});
        $(".movies span").removeClass("prev");
        $(".movies span").css({visibility: 'hidden'});
        
        $(".movies span:nth-child(1)").addClass("active");
        $(".movies span:nth-child(1)").css({top: '0%'});
        $(".movies span:nth-child(2)").addClass("prev");
      }
    });

  }

  public getImagePath(): string {
    
    if (this.introURL = this.sunService.getIntroVideoURL()) {
      return this.introURL = this.sunService.getIntroVideoURL(); //  after get the video from documents service
    }
  }

  public getImagePath1(): string {
    
    if (this.introURL1 = this.sunService.getIntroVideoURL1()) {
      return this.introURL1 = this.sunService.getIntroVideoURL1(); //  after get the video from documents service
    }
  }

  getIntroImagePath(iNum: Number) {
    // console.log(this.aboutImgURL[iNum.toString()])
     return this.introImgURL[iNum.toString()];
  }

  // getIntroImageFlag(iNum: Number) {
  //   return this.introImgFlag[iNum.toString()];
  // }
 
}