import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';

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
      $(".classic_rider_text").css({color: "#C6B3C6"});
      $(".hermetic_text").css({color: "black"});
      $(".lenormand_text").css({color: "black"});
      $(".left_triangle").css({"border-bottom-color": "#C6B3C6"});
      self.deck_mode = 1;
    });
    $(".hermetic").click(function(){
      $(".classic_rider_text").css({color: "black"});
      $(".hermetic_text").css({color: "orange"});
      $(".lenormand_text").css({color: "black"});
      $(".left_triangle").css({"border-bottom-color": "orange"});
      self.deck_mode = 2;
    });
    $(".lenormand").click(function(){
      $(".classic_rider_text").css({color: "black"});
      $(".hermetic_text").css({color: "black"});
      $(".lenormand_text").css({color: "green"});
      $(".left_triangle").css({"border-bottom-color": "green"});
      self.deck_mode = 3;
    });

     $(".first_mode").click(function(){
      $(".first_mode_text").css({color: "#C6B3C6"});
      $(".second_mode_text").css({color: "black"});
      $(".third_mode_text").css({color: "black"});
      $(".left_triangle").css({"border-bottom-color": "#C6B3C6"});
      self.spread_mode = 1;
    });
    $(".second_mode").click(function(){
      $(".first_mode_text").css({color: "black"});
      $(".second_mode_text").css({color: "orange"});
      $(".third_mode_text").css({color: "black"});
      $(".left_triangle").css({"border-bottom-color": "orange"});
      self.spread_mode = 2;
    });
    $(".third_mode").click(function(){
      $(".first_mode_text").css({color: "black"});
      $(".second_mode_text").css({color: "black"});
      $(".third_mode_text").css({color: "green"});
      $(".left_triangle").css({"border-bottom-color": "green"});
      self.spread_mode = 3;
    });

  }

  flyRaven() {
    let self = this;
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
        self.router.navigate(['/tarot/select-cards', {deck_mode:self.deck_mode, spread_mode:self.spread_mode}]);
      }
    });
  }

}
