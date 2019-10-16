import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-select-cards',
  templateUrl: './select-cards.component.html',
  styleUrls: ['./select-cards.component.scss']
})
export class SelectCardsComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private aRoute: ActivatedRoute) { }
  deck_mode;
  spread_mode;
  card_num = 0;
  card_mode_text = "";
  card_mode_text1 = "";
  oneFlag = false;
  threeCardFlag = false;
  backImg;
  ngOnInit() {
    let self = this;
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');
    if(this.deck_mode == 0) {
      this.deck_mode = 1;
    }
    if(this.spread_mode == 0) {
      this.spread_mode = 1;     
    }
    $(".back-reading").click(function() {
      self.router.navigate(['/tarot']);
    });

    if(this.deck_mode == 1) {
      this.backImg = "assets/img/tarot/tarot6.jpg";
    }
    if(this.deck_mode == 2) {
      this.backImg = "assets/img/tarot/tarot7.png";
    }
    if(this.deck_mode == 3) {
      this.backImg = "assets/img/tarot/tarot6.jpg";
    }


    // single card mode
    
    if(this.spread_mode == 1) {
      this.card_mode_text = "Single card";
      this.card_mode_text1 = "one card !";
      let prevNum = 0;
      let cNum = 0;
      $(".sel-cards-imgs img").hover(function() {
        $(".sel-cards-arc").css({background: self.getRandomColor()});        
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num; 
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({top: "-=5%"});
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({filter: "brightness(120%)"});
        self.oneFlag = true;
      }, function() {
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({top: "+=5%"});
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({filter: "brightness(100%)"});
      });

      $(".sel-cards-imgs img").click(function() {
        $(".sel-cards-imgs img:nth-child("+cNum+")").animate({
          top: "-=15%"
        }, 500).animate({
          top: "160%",
        }, {
          duration: 1100,
          complete: function() {
            self.router.navigate(['/tarot/single-card', {deck_mode:self.deck_mode, spread_mode:self.spread_mode}]);
          }
        });
      });
      
    }
    //three card mode
    if(this.spread_mode == 2) {
      this.card_mode_text = "Three cards";
      this.card_mode_text1 = "Three cards !";
      let threeFlag = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
      let cNum = 0;
      let countCard = 0;

      $(".sel-cards-imgs img").hover(function() {
        $(".sel-cards-arc").css({background: self.getRandomColor()});        
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num; 
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({top: "-=3%"});
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({filter: "brightness(120%)"});
        self.oneFlag = true;
      }, function() {
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({top: "+=3%"});
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({filter: "brightness(100%)"});
      });
     
      $(".sel-cards-imgs img").click(function(){
        $(".sel-cards-arc").css("background-color", self.getRandomColor());
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num;

        $(".sel-cards-imgs img:nth-child("+cNum+")").animate({
          top: "-=15%"
        }, 500).animate({
          top: "160%",
        }, {
          duration: 1100,
          complete: function() {
            
            if(countCard == 2) {
              self.threeCardFlag = true;
              self.router.navigate(['/tarot/show-cards', {deck_mode:self.deck_mode, spread_mode:self.spread_mode}]);
            } else {
              self.threeCardFlag = false;
            }
            countCard++; 
            threeFlag[cNum] = !threeFlag[cNum];   
          }
        });
      });
      
    }

    //celtic cross card mode
    if(this.spread_mode == 3) {
      this.card_mode_text = "Celtic Cross Deep";
      this.card_mode_text1 = "Ten cards !";
      let threeFlag = [true,true,true,true,true,
      true,true,true,true,true,
      true,true,true,true,true,
      true,true,true,true,true,true,true,true,true];
      let cNum = 0;
      let countCard = 0;

      $(".sel-cards-imgs img").hover(function() {
        $(".sel-cards-arc").css({background: self.getRandomColor()});        
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num; 
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({top: "-=3%"});
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({filter: "brightness(120%)"});
        self.oneFlag = true;
      }, function() {
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({top: "+=3%"});
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({filter: "brightness(100%)"});
      });
     
      $(".sel-cards-imgs img").click(function(){
        $(".sel-cards-arc").css("background-color", self.getRandomColor());
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num;

        $(".sel-cards-imgs img:nth-child("+cNum+")").animate({
          top: "-=15%"
        }, 500).animate({
          top: "160%",
        }, {
          duration: 1100,
          complete: function() {
            
            if(countCard == 9) {
              self.threeCardFlag = true;
              self.router.navigate(['/tarot/celtic-cards', {deck_mode:self.deck_mode, spread_mode:self.spread_mode, celtic_random_mode: 1}]);
            } else {
              self.threeCardFlag = false;
            }
            countCard++; 
            threeFlag[cNum] = !threeFlag[cNum];   
          }
        });
      });
      
    }

    // color changing section
    $(".sel-item2 p:nth-child(1)").hover(function() {
      $(".sel-item2 p:nth-child(1)").css({'color': self.getFourColor()});
    }, function() {
      $(".sel-item2 p:nth-child(1)").css({'color': '#5A3594'});
    });
    // $(".arrow-symbol").hover(function(){
    //   let colStr = "linear-gradient(to bottom, transparent 50%,"+self.getFourColor()+", 50%)";      
    //   $(".arrow-dash").css({'background-image': colStr});
    //   $(".arrow-symbol i").css({'color': self.getFourColor()});
    // });
    $(".back-reading").hover(function(){
      $(".back-reading").css({'color': self.getFourColor()});
    }, function(){
      $(".back-reading").css({'color': '#5A3594'});
    });

  }

  getFourColor() {
    // orange ,deep blue ,yello purple light
    let fourColor = ['#FF7F00', '#0021f3', '#FFFF00', '#e79aff']
    let randomNum
    randomNum = Math.floor((Math.random() * 4) + 1);
    return fourColor[randomNum-1];
  }


  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
