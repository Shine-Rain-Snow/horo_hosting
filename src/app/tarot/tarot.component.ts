import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';
// this is tarot main ts file
@Component({
  selector: 'app-tarot',
  templateUrl: './tarot.component.html',
  styleUrls: ['./tarot.component.scss']
})
export class TarotComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private domSanitizer: DomSanitizer) { }

  deck_mode = 0;
  spread_mode = 0;
  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    let self = this;
    //hover effting jquery
    $(".classic_rider").click(function(){
      $(".classic_rider_text").css({color: "#5A3594"});
      $(".hermetic_text").css({color: "black"});
      $(".lenormand_text").css({color: "black"});
      //$(".left_triangle").css({"border-bottom-color": "#C6B3C6"});
      self.deck_mode = 1;
      $(".third_mode").css({visibility: "visible"});

      $(".left-hand1").css({visibility: "visible"});
      $(".left-hand2").css({visibility: "hidden"});
      $(".left-hand3").css({visibility: "hidden"});

    });
    $(".hermetic").click(function(){
      $(".classic_rider_text").css({color: "black"});
      $(".hermetic_text").css({color: "#5A3594"});
      $(".lenormand_text").css({color: "black"});
      //$(".left_triangle").css({"border-bottom-color": "orange"});
      self.deck_mode = 2;
      $(".third_mode").css({visibility: "visible"});

      $(".left-hand1").css({visibility: "hidden"});
      $(".left-hand2").css({visibility: "visible"});
      $(".left-hand3").css({visibility: "hidden"});
    });
    $(".lenormand").click(function(){
      $(".classic_rider_text").css({color: "black"});
      $(".hermetic_text").css({color: "black"});
      $(".lenormand_text").css({color: "#5A3594"});
      //$(".left_triangle").css({"border-bottom-color": "green"});
      self.deck_mode = 3;
      

      $(".left-hand1").css({visibility: "hidden"});
      $(".left-hand2").css({visibility: "hidden"});
      $(".left-hand3").css({visibility: "visible"});

      $(".third_mode").css({visibility: "hidden"});
      $(".third_mode_text_col2 img").css({visibility: "hidden"});
    });

     $(".first_mode").click(function(){
      $(".first_mode_text").css({color: "#5A3594"});
      $(".second_mode_text").css({color: "black"});
      $(".third_mode_text").css({color: "black"});
      //$(".left_triangle").css({"border-bottom-color": "#C6B3C6"});
      self.spread_mode = 1;

      $(".first_mode_text img").css({visibility: "visible"});
      $(".second_mode_text img").css({visibility: "hidden"});
      $(".third_mode_text_col2 img").css({visibility: "hidden"});
    });

    $(".second_mode").click(function(){
      $(".first_mode_text").css({color: "black"});
      $(".second_mode_text").css({color: "#5A3594"});
      $(".third_mode_text").css({color: "black"});
      //$(".left_triangle").css({"border-bottom-color": "orange"});
      self.spread_mode = 2;

      $(".first_mode_text img").css({visibility: "hidden"});
      $(".second_mode_text img").css({visibility: "visible"});
      $(".third_mode_text_col2 img").css({visibility: "hidden"});
    });
    $(".third_mode").click(function(){
      $(".first_mode_text").css({color: "black"});
      $(".second_mode_text").css({color: "black"});
      $(".third_mode_text").css({color: "#5A3594"});
      //$(".left_triangle").css({"border-bottom-color": "green"});
      self.spread_mode = 3;

       $(".first_mode_text img").css({visibility: "hidden"});
      $(".second_mode_text img").css({visibility: "hidden"});
      $(".third_mode_text_col2 img").css({visibility: "visible"});
    });

    $(".classic_rider").hover(function(){
      //$(".left_triangle").css({"border-top-color": self.getFourColor()});
      //$(".classic_rider_text").css({color: '#FF7F00'});
      let triC = self.getFourColor();    
      let triStr = "linear-gradient(to bottom left, transparent 0%, transparent 50%,"+ triC +" 50%,"+triC+" 100%)";
      $(".tri-img").css({"background": triStr});
    }, function(){
      //$(".left_triangle").css({"border-top-color": "#C6B3C6"});
       //$(".classic_rider_text").css({color: 'black'});

      $(".tri-img").css({"background": "linear-gradient(to bottom left, transparent 0%, transparent 50%, #5A3594 50%, #5A3594 100%)"});
    });

    $(".hermetic").hover(function(){
      //$(".left_triangle").css({"border-bottom-color": self.getFourColor()});
      //$(".hermetic_text").css({color: '#FF7F00'});
      let triC = self.getFourColor();    
      let triStr = "linear-gradient(to bottom left, transparent 0%, transparent 50%,"+ triC +" 50%,"+triC+" 100%)";
      $(".tri-img").css({"background": triStr});
    }, function(){
      //$(".left_triangle").css({"border-bottom-color": "#C6B3C6"});
      //$(".hermetic_text").css({color: 'black'});
      $(".tri-img").css({"background": "linear-gradient(to bottom left, transparent 0%, transparent 50%, #5A3594 50%, #5A3594 100%)"});
    });
    $(".lenormand").hover(function(){
      //$(".left_triangle").css({"border-bottom-color": self.getFourColor()});
      //$(".lenormand_text").css({color: '#FF7F00'});
      let triC = self.getFourColor();    
      let triStr = "linear-gradient(to bottom left, transparent 0%, transparent 50%,"+ triC +" 50%,"+triC+" 100%)";
      $(".tri-img").css({"background": triStr});
    }, function(){
     // $(".left_triangle").css({"border-bottom-color": "#C6B3C6"});
      //$(".lenormand_text").css({color: 'black'});
      $(".tri-img").css({"background": "linear-gradient(to bottom left, transparent 0%, transparent 50%, #5A3594 50%, #5A3594 100%)"});
    });

    $(".first_mode").hover(function(){
      let triC = self.getFourColor();    
      let triStr = "linear-gradient(to bottom left, transparent 0%, transparent 50%,"+ triC +" 50%,"+triC+" 100%)";
      $(".tri-img").css({"background": triStr});
    }, function(){
      $(".tri-img").css({"background": "linear-gradient(to bottom left, transparent 0%, transparent 50%, #5A3594 50%, #5A3594 100%)"});
    });

    $(".second_mode").hover(function(){
      let triC = self.getFourColor();    
      let triStr = "linear-gradient(to bottom left, transparent 0%, transparent 50%,"+ triC +" 50%,"+triC+" 100%)";
      $(".tri-img").css({"background": triStr});
    }, function(){
      $(".tri-img").css({"background": "linear-gradient(to bottom left, transparent 0%, transparent 50%, #5A3594 50%, #5A3594 100%)"});
    });
    $(".third_mode").hover(function(){
      let triC = self.getFourColor();    
      let triStr = "linear-gradient(to bottom left, transparent 0%, transparent 50%,"+ triC +" 50%,"+triC+" 100%)";
      $(".tri-img").css({"background": triStr});
    }, function(){
      $(".tri-img").css({"background": "linear-gradient(to bottom left, transparent 0%, transparent 50%, #5A3594 50%, #5A3594 100%)"});
    });

    // hovering effect for changing color
    $(".tarot_title").hover(function(){
       $(".tarot_title").css({color: self.getFourColor()});
    }, function(){
       $(".tarot_title").css({color: '#5A3594'});
    });
    $(".raven_text").hover(function() {
      $(".raven_text").css({color: self.getFourColor()});
    }, function(){
      $(".raven_text").css({color:'#5A3594'});
    });
  }

  flyRaven() {
    let self = this;
    if(self.deck_mode == 3 && self.spread_mode == 3) {
      self.router.navigate(['/tarot']);   
    } else {
      $(".black_raven img:nth-child(1)").css({visibility: "hidden"});
      $(".black_raven img:nth-child(2)").css({
        visibility: "visible", 
        bottom: "4%",
        position: "fixed",
        width: "12%",
        height: "26%"
       });
      $(".black_raven img:nth-child(2)").animate({
        left: "-10%",
        bottom: "100%",
      }, {
        duration: 4000,
        complete: function() { 
          if(self.deck_mode == 3) {
            self.router.navigate(['/tarot/lenormand-select', {deck_mode:self.deck_mode, spread_mode:self.spread_mode}]); 
          } else {
            self.router.navigate(['/tarot/select-cards', {deck_mode:self.deck_mode, spread_mode:self.spread_mode}]); 
          }
        }
      });
    }
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getFourColor() {
    // orange ,deep blue ,yello purple light
    let fourColor = ['#FF7F00', '#0021f3', '#FFFF00', '#e79aff']
    let randomNum
    randomNum = Math.floor((Math.random() * 4) + 1);
    return fourColor[randomNum-1];
  }

}
