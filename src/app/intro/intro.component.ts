import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';
// import * as Vimeo from "@vimeo/player/dist/player.js";
import Player from "@vimeo/player";

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
  playInterval;

  private player: Player;



  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    // console.log(this.router.url);
    // if(this.router.url == '/intro') {
    //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //     return false;
    //   };
    // }
    let self = this;
    this.scroll_flag = this.sunService.getIntroTitleShow();
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(1);
    
    
    
 
//var iframe = document.querySelector('#playVimeo');
//this.player = new Vimeo.Player(iframe);
// player.play().then(function() {
//     console.log("success");
// }).catch(function(error) {
//     console.log(error);
// });	
// setTimeout(() => {
// 	player.play();	
// }, 10);

    
    let firstV, promisePlay;
    this.playInterval = setInterval(()=> {
      
      firstV = <HTMLVideoElement>document.querySelector('#playV');
      promisePlay = firstV.play();
      $("#playV")[0].play();
      $("#playV")[0].autoplay = true;
      if (promisePlay !== undefined) {
        promisePlay.then(_ => {
            console.log("played! success");
            clearInterval(this.playInterval);
            
          }).catch(error => {
            console.log("intro video error"+ error);
            if (this.introURL = this.sunService.getIntroVideoURL()) {
              console.log(this.sunService.getIntroVideoURL());
              const urlIntro = this.domSanitizer.bypassSecurityTrustHtml(this.introURL);
              this.player = new Player('playVimeo', {
                // url: urlIntro,
                url: 'https://oferc.herokuapp.com/assets/video/intro_1.Ogg',
                width: 800,
              }); //  after get the image from documents service
              this.player.play().then(function(){
                console.log("successed vimeo!");
              }).catch(function(error){
                console.log("error"+error);
              });
            }


          });
      }
      else {
        console.log("undefined!");
      }
    }, 100);

   
    //page reload section
    // if(this.sunService.getIntroRefresh()) {
      
    //   location.reload();
    //   this.sunService.setIntroRefrsh(false);
    // }
    // $("#playV")[0].autoplay = true;
    

    // let playPromise = $("#playV")[0].play();
    // // $("#playV")[0].autoplay = true;
    // if(playPromise !== undefined) {
    //   playPromise.then(()=>{
    //     console.log("t;his is succsesfsd");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // } else {
    //   console.log("huhu"+playPromise);
    // }
   
    //$(".playV")[0].autoplay = true;
    // if(!this.scroll_flag) {
    //   this.animaFlag = false;
    //   this.sunService.setIntroVal(40);
    // }
    //title moving 

    //video play

    // 
   
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
    //scrolling symbol
   
    
    let scrollUpCount = 0;
    let scrollDownCount = 0;
    //this.sunService.setIntroVal(0);
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
        console.log("scroll up works now");
        scrollUpCount++;
        scrollDownCount = 0;
        if(scrollUpCount > 3) {
          if(this.next >= 40){
            this.sunService.setIntroVal(0);
            $(".intro").fadeOut(1000);
            setTimeout(() => {
            this.router.navigate(['/astrology']); 
            }, 1000);
            scrollUpCount = 0;
          } else {
            this.next = 40;
            this.sunService.setIntroVal(40);
            this.animaFlag = false;
            scrollUpCount = 0;
          }
        }
        // this.next++;
        // this.sunService.setIntroVal(this.next);
        // if(this.next > 100) {
        //   this.next = 100;
        //   this.sunService.setIntroVal(0);
        //   this.router.navigate(['/astrology']);
        // }
            
      } else if(event.originalEvent.deltaY < 0) {
        //scroll down
        console.log("scroll down works now");
        scrollUpCount = 0;
        scrollDownCount++;
        // this.next--;
        // this.sunService.setIntroVal(this.next);
        // if(this.next < 0) {
        //   this.next = 0;
        //   this.sunService.setIntroVal(0);
        //   this.router.navigate(['/intro']);
        // }
        if(scrollDownCount > 3) {
          if(this.next >= 45) {
            console.log("thos"+scrollDownCount);
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
        
            // setTimeout(() => {
            //   $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
            //   $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
            
            // }, 100);
          } else {
            // this.scroll_flag = true;
            // scrollDownCount = 0;
            this.next = 0;
            scrollDownCount = 0;
            this.sunService.setIntroVal(0);
            $(".intro").fadeOut(1000);
            setTimeout(() => {
            this.router.navigate(['/intro']); 
            }, 1000);
            // setTimeout(() => {
            //   $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
            //   $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
            // }, 100);
          }
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

    
    
    // $(".movies").stop();
    // $(".movies span").removeClass("active").css({top: '100%'});
    // $(".movies span").removeClass("prev");
    // $(".movies span:nth-child(1)").addClass("active").css({top: '0%'});
    // $(".movies span:nth-child(2)").addClass("prev");
    this.movePhoto();
    this.moveMovies();
    
    
    this.photoInterval = setInterval(this.movePhoto, 10100);
    this.videoInterval = setInterval(this.moveMovies, 10100);
    
    
    setTimeout(()=> {
      this.animaFlag = false;
      //this.sunService.setIntroVal(40);
    }, 10000*7);
  }

  ngOnDestroy() {
    clearInterval(this.photoInterval);
    clearInterval(this.videoInterval);
    clearInterval(this.scrollingInterval);
    clearInterval(this.playInterval);
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
      return this.introURL = this.sunService.getIntroVideoURL(); //  after get the image from documents service
    }
   //console.log("Not found Intro video");
  }
}