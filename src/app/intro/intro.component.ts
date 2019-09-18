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
  ngOnInit() {
   
    if(this.sunService.getIntroVal() == 0) 
      this.next = 0;
    if(this.sunService.getIntroVal() == 100)
      this.next = AppConstants.SCROLLING_COUNT;
    $(".intro").bind("DOMMouseScroll mousewheel", (event) => {  
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
    this.movePhoto();
    setInterval(this.movePhoto, 11600);
  }

  ngOnDestroy() {
    if(this.next >= 0 && this.next <= AppConstants.SCROLLING_COUNT) {
      this.sunService.setIntroVal(100);
    }
  }

  movePhoto() {
    if($(".photo span:first-child").hasClass("active")){
     
        $(".photo span").css({
          visibility:'visible'
        });
        $(".photo span:nth-child(3)").css({
          visibility: 'hidden'
        });
        $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".photo span:nth-child(3)").css({
                top: '100%'
              });
              $(".photo span:nth-child(2)").css({
                top: '0%'
              });
              $(".photo span:nth-child(1)").css({
                top: '100%'
              });
              $(".photo").css({
                top: '0%'
              });
              $(".photo span:first-child").removeClass('active');
              $(".photo span:nth-child(2)").addClass('active');
              $(".photo span:nth-child(2)").removeClass('prev');
              $(".photo span:nth-child(3)").addClass('prev');
            }
          });
          
    }

    if($(".photo span:nth-child(2)").hasClass("active")){
     
         $(".photo span").css({
          visibility:'visible'
          });
          $(".photo span:nth-child(1)").css({
            visibility: 'hidden'
          });
          $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".photo span:nth-child(1)").css({
                top: '100%'
              });
              $(".photo span:nth-child(3)").css({
                top: '0%'
              });
              $(".photo span:nth-child(2)").css({
                top: '100%'  
              });
              $(".photo").css({
                top: '0%'
              });
              $(".photo span:nth-child(2)").removeClass('active');
              $(".photo span:nth-child(3)").addClass('active');
              $(".photo span:nth-child(3)").removeClass('prev');
              $(".photo span:nth-child(1)").addClass('prev');
            }
          });
          
    }

    if($(".photo span:nth-child(3)").hasClass("active")){
      
         $(".photo span").css({
          visibility:'visible'
          });
          $(".photo span:nth-child(2)").css({
            visibility: 'hidden'
          });
        $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".photo span:nth-child(1)").css({
                top: '0%'
              });
              $(".photo span:nth-child(3)").css({
                top: '100%'
              });
              $(".photo span:nth-child(2)").css({
                top: '100%'  
              });
              $(".photo").css({
                top: '0%'
              });
              $(".photo span:nth-child(3)").removeClass('active');
              $(".photo span:nth-child(1)").addClass('active');
              $(".photo span:first-child").removeClass('prev');
              $(".photo span:nth-child(2)").addClass('prev');
            }
          });
    }
  }


  moveVideo() {
    if($(".movies span:first-child").hasClass("active")){
     
        $(".movies span").css({
          visibility:'visible'
        });
        $(".movies span:nth-child(3)").css({
          visibility: 'hidden'
        });
        $(".movies").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".movies span:nth-child(3)").css({
                top: '100%'
              });
              $(".movies span:nth-child(2)").css({
                top: '0%'
              });
              $(".movies span:nth-child(1)").css({
                top: '100%'
              });
              $(".movies").css({
                top: '0%'
              });
              $(".movies span:first-child").removeClass('active');
              $(".movies span:nth-child(2)").addClass('active');
              $(".movies span:nth-child(2)").removeClass('prev');
              $(".movies span:nth-child(3)").addClass('prev');
            }
          });
          
    }

    if($(".movies span:nth-child(2)").hasClass("active")){
     
         $(".movies span").css({
          visibility:'visible'
          });
          $(".movies span:nth-child(1)").css({
            visibility: 'hidden'
          });
          $(".movies").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".movies span:nth-child(1)").css({
                top: '100%'
              });
              $(".movies span:nth-child(3)").css({
                top: '0%'
              });
              $(".movies span:nth-child(2)").css({
                top: '100%'  
              });
              $(".movies").css({
                top: '0%'
              });
              $(".movies span:nth-child(2)").removeClass('active');
              $(".movies span:nth-child(3)").addClass('active');
              $(".movies span:nth-child(3)").removeClass('prev');
              $(".movies span:nth-child(1)").addClass('prev');
            }
          });
          
    }

    if($(".movies span:nth-child(3)").hasClass("active")){
      
         $(".movies span").css({
          visibility:'visible'
          });
          $(".movies span:nth-child(2)").css({
            visibility: 'hidden'
          });
        $(".movies").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".movies span:nth-child(1)").css({
                top: '0%'
              });
              $(".movies span:nth-child(3)").css({
                top: '100%'
              });
              $(".movies span:nth-child(2)").css({
                top: '100%'  
              });
              $(".movies").css({
                top: '0%'
              });
              $(".movies span:nth-child(3)").removeClass('active');
              $(".movies span:nth-child(1)").addClass('active');
              $(".movies span:first-child").removeClass('prev');
              $(".movies span:nth-child(2)").addClass('prev');
            }
          });
    }
  }
}