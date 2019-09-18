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
  scroll_flag: boolean;
  ngOnInit() {
    
    let self = this;
    this.scroll_flag = this.sunService.getIntroTitleShow();
    this.sunService.setCurrentPage(1);
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
    // mouse scrolling section
    if(this.sunService.getIntroVal() == 0) 
      this.next = 0;
    if(this.sunService.getIntroVal() == 100)
      this.next = AppConstants.SCROLLING_COUNT;
    $(".intro").bind("DOMMouseScroll mousewheel", (event) => {
      if(this.scroll_flag) {
        this.scroll_flag = false;
        this.next = 4;
        this.sunService.setIntroVal(this.next * 10);
      }
      
      this.sunService.setIntroTitleShow(false);
      this.sunService.setProgressShow(true);
      
      if(event.originalEvent.detail > 0) {
        //scroll down
        this.next++;
        this.sunService.setIntroVal(this.next * 10); 
        if(this.next > AppConstants.SCROLLING_COUNT){
          this.router.navigate(['/astrology']);
          this.sunService.setIntroVal(100);
        }
          
            
      } else {
        //scroll up
        this.next--;
        if(this.next < 0) {
          this.next = 0;
          this.sunService.setIntroVal(0);
        }
        this.sunService.setIntroVal(this.next * 10);
        //this.router.navigate(['/intro']);    
      }
    });

    //photo and video are moving by this function.
    this.movePhoto();
    this.moveMovies();
    this.photoInterval = setInterval(this.movePhoto, 90100);
    this.videoInterval = setInterval(this.moveMovies, 90100);
  }

  ngOnDestroy() {
    if(this.next >= 0 && this.next <= AppConstants.SCROLLING_COUNT) {
      this.sunService.setIntroVal(100);
    }
    clearInterval(this.photoInterval);
    clearInterval(this.videoInterval);
    clearInterval(this.scrollingInterval);
  }
 
  movePhoto() {
    const numPhoto = 8;
    let n
    for(let i=1; i<= numPhoto; i++) {
      if($("span:nth-child("+i+")").hasClass("active")){
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
      let m = n + 1;
      $(".photo span:nth-child("+m+")").css({visibility: 'visible'});
    } 

    $(".photo").animate({
      top: '-=100%'
    }, 
    {
      duration: 90000,
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
        }
        k = n + 2;
        if(k > numPhoto) {
          $(".photo span:nth-child(1)").addClass('prev');
        } else {
          $(".photo span:nth-child("+k+")").addClass('prev');
        }
        
      }
    });

  }


  moveMovies() {
    const numPhoto = 8;
    let n
    for(let i=1; i<= numPhoto; i++) {
      if($(".movies span:nth-child("+i+")").hasClass("active")){
        n = i;
        break;
      }
    }

    $(".movies span").css({visibility:'hidden'});
    if( n == numPhoto) {
      $(".movies span:nth-child(1)").css({visibility: 'visible'});
      $(".movies span:nth-child("+numPhoto+")").css({visibility: 'visible'});
    } else {
      $(".movies span:nth-child("+n+")").css({visibility: 'visible'});
      let m = n + 1;
      $(".movies span:nth-child("+m+")").css({visibility: 'visible'});
    } 

    $(".movies").animate({
      top: '-=100%'
    }, 
    {
      duration: 90000,
      easing: "linear",
      complete: function() {
        $(".movies").css({top: '0%'});
        $(".movies span").css({top:'100%'});
        let m, k;
        if( n == numPhoto) {
          $(".movies span:nth-child(1)").css({top: '0%'});
        } else {
          m = n + 1;
          $(".movies span:nth-child("+m+")").css({top: '0%'});
        }
        

        $(".movies span:nth-child("+n+")").removeClass('active');
        m = n + 1;
        if(m > numPhoto) {
          $(".movies span:nth-child(1)").addClass('active');
          $(".movies span:nth-child(1)").removeClass('prev');
        } else {
          $(".movies span:nth-child("+m+")").addClass('active');
          $(".movies span:nth-child("+m+")").removeClass('prev');
        }
        k = n + 2;
        if(k > numPhoto) {
          $(".movies span:nth-child(1)").addClass('prev');
        } else {
          $(".movies span:nth-child("+k+")").addClass('prev');
        }
        
      }
    });

  }
}