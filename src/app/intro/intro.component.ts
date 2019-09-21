import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [],
})
export class IntroComponent implements OnInit {
 
  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }

  next: number = 0;
  photoInterval;
  videoInterval;
  scrollingInterval;
  numPhoto = 8;
  numMovies = 8;
  scroll_flag: boolean;
  animaFlag: boolean = true;
  failFlag: boolean = false;
  
 
  ngOnInit() {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // console.log(this.router.url);
    // if(this.router.url == '/intro') {
    //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //     return false;
    //   };
    // }
    let self = this;
    this.scroll_flag = this.sunService.getIntroTitleShow();
    this.sunService.setCurrentPage(1);
    
    // if(!this.scroll_flag) {
    //   this.animaFlag = false;
    //   this.sunService.setIntroVal(40);
    // }
    //title moving 
   
    setTimeout(() => {
      $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
      $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
    }, 100);
    //scrolling symbol
   
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
    let scrollUpCount = 0;
    let scrollDownCount = 0;
    this.sunService.setIntroVal(0);
    $(".intro").bind("DOMMouseScroll mousewheel", (event) => {
      if(this.scroll_flag) {
        this.scroll_flag = false;
        this.next = 0;
        this.sunService.setIntroVal(0);
      }
      
      this.sunService.setIntroTitleShow(false);
      this.sunService.setProgressShow(true);
      
      
    
      
      if(event.originalEvent.detail > 0) {
        //scroll up
        
        //scrollUpCount++;
        //scrollDownCount = 0;
        // if(scrollUpCount > 5) {
        //   if(this.next >= 40){
        //     this.sunService.setIntroVal(0);
        //     this.router.navigate(['/astrology']);
        //     scrollUpCount = 0;
        //   } else {
        //     this.next = 40;
        //     this.sunService.setIntroVal(40);
        //     this.scroll_flag = false;
        //     scrollUpCount = 0;
        //   }
        // }
        this.next++;
        this.sunService.setIntroVal(this.next);
        if(this.next > 100) {
          this.next = 100;
          this.sunService.setIntroVal(0);
          this.router.navigate(['/astrology']);
        }
            
      } else {
        //scroll down
       
        //scrollUpCount = 0;
        //scrollDownCount++;
        this.next--;
        this.sunService.setIntroVal(this.next);
        if(this.next < 0) {
          this.next = 0;
          this.sunService.setIntroVal(0);
          this.router.navigate(['/intro']);
        }
        // if(scrollDownCount > 3) {
        //   if(this.next >= 45) {
        //     this.next = 40;
        //     scrollDownCount = 0;
        //     this.sunService.setIntroVal(40);
        //   }
        //   else if(this.next>40 && this.next<45) {
        //     this.next = 0;
        //     scrollDownCount = 0;
        //     this.sunService.setIntroVal(0);
            
        //     // setTimeout(() => {
        //     //   $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
        //     //   $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
            
        //     // }, 100);
        //   } else {
        //     // this.scroll_flag = true;
        //     // scrollDownCount = 0;
           
        //     // setTimeout(() => {
        //     //   $(".ofer").animate({left: '0px', opacity: '1'}, 9000);
        //     //   $(".cohen").animate({left: '0px', opacity: '1'}, 9000);
        //     // }, 100);
        //   }
        // }
        
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
    console.log("animation started! with number = "+ n);
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
        console.log("animation succssfulylly finished=this is n="+n);
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
          console.log('which is active ='+ m);
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
}