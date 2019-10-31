import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { BackendService } from '../../services/backend.service';
import { Globals } from '../../shared/globals';
declare let $: any;

@Component({
  selector: 'app-ast-inner',
  templateUrl: './ast-inner.component.html',
  styleUrls: ['./ast-inner.component.scss']
})
export class AstInnerComponent implements OnInit {

  constructor(private router: Router,
    public stateData: Globals, 
    private sunService: SunProgressService,
    private backendService: BackendService) { }
  
  sunsign_description = {
      "aries_career": ``,
      "aries_love": ``,
      
      "taurus_career": ``,
      "taurus_love": ``,

      "gemini_career": ``,
      "gemini_love": ``,
     
      "cancer_career": ``,
      "cancer_love": ``,

      "leo_career": ``,
      "leo_love": ``,  
      
      "virgo_career": ``,
      "virgo_love": ``,
      
      "libra_career": ``,
      "libra_love": ``,

      "scorpio_career": ``,
      "scorpio_love": ``,
      
      "sagi_career": ``,
      "sagi_love": ``,

      "capricorn_career": ``,
      "capricorn_love": ``,

      "aquarius_career": ``,
      "aquarius_love": ``,

      "pisces_career": ``,
      "pisces_love": ``,

  }
  next;
  astInnerYear;
  ngOnInit() {

   let self = this;
   this.sunService.setCurrentPage(3);
   this.sunService.setProgressShow(true);
   this.sunService.setShowMenu(true);
   this.next = 40;
   this.sunService.setAstVal(40);
   //set year
   this.astInnerYear = (new Date()).getFullYear();

   //get text from backend
   this.backendService.getSunSignALLText().subscribe((data: any[]) => {
      
      this.sunsign_description.aries_career = data['results'][0].career;
      this.sunsign_description.aries_love = data['results'][0].love; 

      this.sunsign_description.taurus_career = data['results'][1].career;
      this.sunsign_description.taurus_love = data['results'][1].love;  

      this.sunsign_description.gemini_career = data['results'][2].career;
      this.sunsign_description.gemini_love = data['results'][2].love; 

      this.sunsign_description.cancer_career = data['results'][3].career;
      this.sunsign_description.cancer_love = data['results'][3].love; 

      this.sunsign_description.leo_career = data['results'][4].career;
      this.sunsign_description.leo_love = data['results'][4].love; 

      this.sunsign_description.virgo_career = data['results'][5].career;
      this.sunsign_description.virgo_love = data['results'][5].love;

      this.sunsign_description.libra_career = data['results'][6].career;
      this.sunsign_description.libra_love = data['results'][6].love;  
       
      this.sunsign_description.scorpio_career = data['results'][7].career;
      this.sunsign_description.scorpio_love = data['results'][7].love;
      
      this.sunsign_description.sagi_career = data['results'][8].career;
      this.sunsign_description.sagi_love = data['results'][8].love;
      
      this.sunsign_description.capricorn_career = data['results'][9].career;
      this.sunsign_description.capricorn_love = data['results'][9].love;
      
      this.sunsign_description.aquarius_career = data['results'][10].career;
      this.sunsign_description.aquarius_love = data['results'][10].love;
      
      this.sunsign_description.pisces_career = data['results'][11].career;
      this.sunsign_description.pisces_love = data['results'][11].love;
   });  

    //moving effect
    $(".g-scrolling-carousel").css({
       
        left: '30%',
    });
    $(".g-scrolling-carousel").animate({
        left: '0%'
    }, 
    {duration: 2500,
    easing: "swing"});

   this.scrolling(self, this.next); 
   let hei = $("body").height();
   $(".sunsign_text").children().css({
   	height: hei*0.45+'px'	
   });
   $(".sunsign_img").children().css({
   	height: hei*0.3+'px'	
   });

   $(".sunsign_img .left_img .origin_img img").css({
    // background: 'green',
    width: hei*0.3 * 592/392 +'px',
    height: hei*0.3 + 'px',	
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0%)',
  });
  $(".sunsign_img .right_img .origin_img img").css({
    // background: 'blue',
    width: hei*0.3 * 592/392 +'px',
    height: hei*0.3 + 'px',	
    position: 'relative',
    // top: '50%',
    left: '50%',
    transform: 'translate(-50%, 0%)',
  });

   let lmg, rmg;
   let lWidth, lHeight, rWidth, rHeight;
   $(".item_container:nth-child(1) .left_img").
   css("background-image", "url('../../../assets/img/astInner/aries_taurus/aries_back.jpg')");
   $(".item_container:nth-child(1) .right_img").
   css("background-image", "url('../../../assets/img/astInner/aries_taurus/taurus_back.jpg')");
   

   $(".item_container:nth-child(2) .left_img").
   css("background-image", "url('../../../assets/img/astInner/gemini-cancer/gemini_back.jpg')");
   $(".item_container:nth-child(2) .right_img").
   css("background-image", "url('../../../assets/img/astInner/gemini-cancer/cancer_back.jpg')");


   $(".item_container:nth-child(3) .left_img").
   css("background-image", "url('../../../assets/img/astInner/leo-virgo/leo_back.jpg')");
   $(".item_container:nth-child(3) .right_img").
   css("background-image", "url('../../../assets/img/astInner/leo-virgo/virgo_back.jpg')");

  
   $(".item_container:nth-child(4) .left_img").
   css("background-image", "url('../../../assets/img/astInner/libra-scorpio/libra_back.jpg')");
   $(".item_container:nth-child(4) .right_img").
   css("background-image", "url('../../../assets/img/astInner/libra-scorpio/scorpio_back.jpg')");

   
   $(".item_container:nth-child(5) .left_img").
   css("background-image", "url('../../../assets/img/astInner/sagi-capricorn/sagi_back.jpg')");
   $(".item_container:nth-child(5) .right_img").
   css("background-image", "url('../../../assets/img/astInner/sagi-capricorn/capricorn_back.jpg')");

   
   $(".item_container:nth-child(6) .left_img").
   css("background-image", "url('../../../assets/img/astInner/aquarius-pisces/aquarius_back.jpg')");
   $(".item_container:nth-child(6) .right_img").
   css("background-image", "url('../../../assets/img/astInner/aquarius-pisces/pisces_back.jpg')");

   setTimeout(() => {
    $(this).css("background-size", "cover");
    // $(".left_img img").css("visibility", "hidden");
    let llWidth, llHeight, rrWidth, rrHeight;
    for(let i=1; i<7; i++) {
        let lmg = new Image;
        lmg.src = $(".item_container:nth-child("+i+") .left_img").css('background-image').replace(/url\(\"|\"\)$/ig, "");
        llWidth = lmg.width;
        llHeight = lmg.height;
        
        $(".item_container:nth-child("+i+") .left_img").css({
            width: llWidth*hei*0.3/llHeight+'px',
            height: hei*0.3+'px',
        });
 
        let rmg = new Image;
        rmg.src = $(".item_container:nth-child("+i+") .right_img").css('background-image').replace(/url\(\"|\"\)$/ig, "");
 
        rrWidth = rmg.width;
        rrHeight = rmg.height;
       
        $(".item_container:nth-child("+i+") .right_img").css({
            width: hei*0.3*rrWidth/rrHeight+'px',
            height: hei*0.3+'px',
        });
    }
   }, 10);

    $(".left_img img").css("visibility", "visible");
    $(".left_img").css("background-size", "0 0");
    $(".left_img").hover(function(){
        $(this).css("background-size", "cover");
        $(".left_img img").css("visibility", "hidden");
        let lWidth, lHeight;
        for(let i=1; i<7; i++) {
            let lmg = new Image;
            lmg.src = $(".item_container:nth-child("+i+") .left_img").css('background-image').replace(/url\(\"|\"\)$/ig, "");
            lWidth = lmg.width;
            lHeight = lmg.height;
            
            $(".item_container:nth-child("+i+") .left_img").css({
                width: lWidth*hei*0.3/lHeight+'px',
                height: hei*0.3+'px',
            });

            
        }
    }, function(){
        $(this).css("background-size", "0 0");
        $(".left_img img").css("visibility", "visible");
    });

    $(".right_img img").css("visibility", "visible");
    $(".right_img").css("background-size", "0 0");
    $(".right_img").hover(function(){
        $(this).css("background-size", "cover");
        $(".right_img img").css("visibility", "hidden");
        let rWidth, rHeight;
        for(let i=1; i<7; i++) {
            
            let rmg = new Image;
            rmg.src = $(".item_container:nth-child("+i+") .right_img").css('background-image').replace(/url\(\"|\"\)$/ig, "");

            rWidth = rmg.width;
            rHeight = rmg.height;
           
            $(".item_container:nth-child("+i+") .right_img").css({
                width: hei*0.3*rWidth/rHeight+'px',
                height: hei*0.3+'px',
            });
        }

       
    }, function(){
        $(this).css("background-size", "0 0");
        $(".right_img img").css("visibility", "visible");
    });

  }

  goAstrology() {
      this.sunService.setAllZero();
      this.router.navigate(['/astrology']);
  }

  goAbout() {
    this.sunService.setAllZero();
    this.router.navigate(['/about']);
  }

  scrolling(self, next) {

    if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
      var defaults = {
        scrolling: true,
        amount: false
      };
      var x,left,down,newX,oldX,maxScrollLeft,am,amX,amL,leftElem,rightElem,currx,itemsInner,element,elements;
      var element = $(".g-scrolling-carousel .items-inner");
      var amount = element.children(":first").outerWidth(true);
        
      leftElem = $('<span />').addClass('jc-left');
      rightElem = $('<span />').addClass('jc-right');
      element.parent().append(leftElem).append(rightElem);

      maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
      left = element.scrollLeft();
      if(maxScrollLeft == left) {
          rightElem.hide();
      } else {
          rightElem.show();
      }
      if(left == 0) {
          leftElem.hide();
      } else {
          leftElem.show();
      }
      let curIndex = 0;
      let nDownScrolling = 0;
      let astFlag = true;
      let aboutFlag = true;
      let moveFlag = true;
         element.bind("DOMMouseScroll", function (event) {    
        var oEvent = event.originalEvent, 
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
        position = element.scrollLeft();
        //let origin_pos = position;
        position += direction > 0 ? -amount : amount;
        //let animation_pos = position;
        //element.scrollLeft(position);

        
        if(moveFlag) {
          moveFlag = false;
          element.animate({
            scrollLeft: position+'px'
          }, 
          {
              duration: 1000,
              easing: "swing",
              complete: function() {
                moveFlag = true;
                if(event.originalEvent.detail < 0) {
            //scroll down
                next -= 10;    
                
                  if(next < 40) {
                    
                      if(astFlag) {
                        next = 0;
                        nDownScrolling = 0;   
                        self.sunService.setAllZero();
                        self.router.navigate(['/astrology']);
                        astFlag = false;
                      }
                  } else {
                    self.sunService.setAstVal(next);
                  }
                  }
                  
                  if(event.originalEvent.detail > 0) {
                      //scroll up
                      next += 10;
                       
                      if(next > 100) {
                        if (aboutFlag) {
                          next = 100;
                          self.sunService.setAstVal(0);
                          self.router.navigate(['/about']);
                          aboutFlag = false;
                        }
                      } else {
                        self.sunService.setAstVal(next);
                      }
                  }
                  }
              });
        }

        event.preventDefault();
        maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
        left = element.scrollLeft();
        if(maxScrollLeft == left) {
            rightElem.fadeOut(200);
        } else {
            rightElem.fadeIn(200);
           
        }
        if(left == 0) {
            leftElem.fadeOut(200);
            
        } else {
            leftElem.fadeIn(200);
        }

      });
    }
    else {
      // not firefox 
      var defaults = {
        scrolling: true,
        amount: false
      };
      var x,left,down,newX,oldX,maxScrollLeft,am,amX,amL,leftElem,rightElem,currx,itemsInner,element,elements;
      var element = $(".g-scrolling-carousel .items-inner");
      var amount = element.children(":first").outerWidth(true);
        
      leftElem = $('<span />').addClass('jc-left');
      rightElem = $('<span />').addClass('jc-right');
      element.parent().append(leftElem).append(rightElem);

      maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
      left = element.scrollLeft();
      if(maxScrollLeft == left) {
          rightElem.hide();
      } else {
          rightElem.show();
      }
      if(left == 0) {
          leftElem.hide();
      } else {
          leftElem.show();
      }
      let curIndex = 0;
      let nDownScrolling = 0;
      let astFlag = true;
      let aboutFlag = true;
      let moveFlag = true;
      let circleFlag = false;
      let circleUpDown = 0;
      element.bind("wheel", function (event) {    
        var oEvent = event.originalEvent, 
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
        position = element.scrollLeft();
        //let origin_pos = position;
        position += direction > 0 ? -amount : amount;
        //let animation_pos = position;
        //element.scrollLeft(position);

        
        if(moveFlag && !circleFlag) {
          $(".hidden_circle").css({visibility: "hidden"});
          moveFlag = false;
          element.animate({
            scrollLeft: position+'px'
          }, 
          {
              duration: 1000,
              easing: "swing",
              complete: function() {
                moveFlag = true;

                if(event.originalEvent.deltaY < 0) {
                  //scroll down
                  next -= 10;    
                
                  if(next < 40) {
                    
                      if(astFlag) {
                        next = 0;
                        nDownScrolling = 0;   
                        self.sunService.setAllZero();
                        self.router.navigate(['/astrology']);
                        astFlag = false;
                      }
                  } else {
                    self.sunService.setAstVal(next);
                  }
                }
                
                if(event.originalEvent.deltaY > 0) {
                    //scroll up
                    next += 10;
                     
                    if(next > 100) {
                      next = 100;
                      if (aboutFlag) {
                        next = 100;
                        self.sunService.setAstVal(100);
                        //self.router.navigate(['/about']);
                        aboutFlag = false;
                      }
                    } else {
                      self.sunService.setAstVal(next);
                    }
                }
                console.log("current console"+next);
                if(next > 90) {
                  circleFlag = true;  
                  console.log("work circle");
                }
              }
          });
        }
        // circle next effecting
        if(circleFlag) {
          $(".hidden_circle").css({visibility: "visible"});
          if(event.originalEvent.deltaY < 0) {
            circleUpDown--;
            console.log("down="+circleUpDown);
            if(circleUpDown < 0) {
              circleFlag = false;
              circleUpDown = 0;
            } else if(circleUpDown == 0) {
              $(".next_circle span").css({visibility: "hidden"});
              $(".quarter-circle-top-right").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 1) {
              $(".quarter-circle-bottom-right").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 2) {
              $(".quarter-circle-bottom-left").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 3) {
              $(".quarter-circle-top-left").css({visibility: "hidden"}, 100);
            }
          }
          if(event.originalEvent.deltaY > 0) {
            circleUpDown++;
            console.log("up="+circleUpDown);
            if(circleUpDown > 4) {

              next = 100;
              $(".next_circle>div").css({visibility:"hidden"});
              $(".next_circle span").css({visibility:"hidden"});
              self.sunService.setAstVal(100);
              self.router.navigate(['/about']);
              aboutFlag = false;
              // circleUpDown = 0;
            } else if(circleUpDown == 1) {
              $(".next_circle span").css({visibility: "visible"});
              $(".quarter-circle-top-right").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 2) {
              $(".quarter-circle-bottom-right").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 3) {
              $(".quarter-circle-bottom-left").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 4) {
              $(".quarter-circle-top-left").css({visibility: "visible"}, 100);
            }
          }  
          

        }
        event.preventDefault();
        maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
        left = element.scrollLeft();
        if(maxScrollLeft == left) {
            rightElem.fadeOut(200);
        } else {
            rightElem.fadeIn(200);
           
        }
        if(left == 0) {
            leftElem.fadeOut(200);
            
        } else {
            leftElem.fadeIn(200);
        }

      });
      
      //android touch moving implements
    
      let andStartPos, andEndPos;
      let andStartTouch, andEndTouch;
      let andTouchFlag = false;
      let lastMove = null;
      let andGap;
      element.bind("touchstart", (event) => {
        andStartTouch = event.touches[0];
        andStartPos = andStartTouch.pageX;
        andTouchFlag = true;      
      });

      element.bind("touchmove", (event) => {
        lastMove = event;
      });

        // var oEvent = event.originalEvent, 
        // direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
        // position = element.scrollLeft();
        // //let origin_pos = position;
        // position += direction > 0 ? -amount : amount;
      let position = 0;  
      element.bind("touchend", (event) => {
        andEndTouch = lastMove.touches[0];
        andEndPos = andEndTouch.pageX;
        
        if(andTouchFlag) {
          andTouchFlag = false;
          andGap = andEndPos - andStartPos;
          if(andGap  > 0) {
            position += -screen.width;
          } 
          if( andGap < 0) {
            position += screen.width;
          } 

          if(moveFlag) {
          $(".hidden_circle").css({visibility: "hidden"});
          console.log("posi"+position);
          moveFlag = false;
          element.animate({
            scrollLeft: position+'px'
          }, 
          {
              duration: 1000,
              easing: "swing",
              complete: function() {
                moveFlag = true;

                if(andGap > 0) {
                  //scroll down
                  next -= 10;    
                  console.log("up="+next); 
                  if(next < 40) {
                      next = 0;
                      self.router.navigate(['/astrology']);
                  } else {
                    self.sunService.setAstVal(next);
                  }
                }
                
                if(andGap < 0) {
                    //scroll up
                    next += 10;
                    console.log("up="+next); 
                    if(next > 90) {
                      next = 100;
                      self.router.navigate(['/about']);
                    } else {
                      self.sunService.setAstVal(next);
                    }
                }
                // console.log("current console"+next);
                // if(next > 90) {
                //   circleFlag = true;  
                //   console.log("work circle");
                // }
              }
          });
        }
          
        }
      }); 
    }


  }

  ngOnDestroy() {
    
  }

}
