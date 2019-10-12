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
  oneFlag = false;
  threeCardFlag = false;
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

    // single card mode
    
    if(this.spread_mode == 1) {
      this.card_mode_text = "Single";
      let prevNum = 0;
      let cNum = 0;
      $(".sel-cards-imgs img").click(function(){
        $(".sel-cards-arc").css("background-color", self.getRandomColor());
        self.oneFlag = true;
        prevNum =  self.card_num;
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num;
        
        $(".sel-cards-imgs img:nth-child("+cNum+")").css({
          top: "-=10%"
        });
        if(prevNum > 0) {
          $(".sel-cards-imgs img:nth-child("+prevNum+")").css({
            top: "+=10%"
          });
        }
        
      });
    }
    //three card mode
    if(this.spread_mode == 2) {
      this.card_mode_text = "Three";
      let threeFlag = [true,true,true,true,true,true,true,true,true];
      let cNum = 0;
      let countCard = 0;
     
      $(".sel-cards-imgs img").click(function(){
        $(".sel-cards-arc").css("background-color", self.getRandomColor());
        self.card_num = $(".sel-cards-imgs img").index(this) + 1;
        cNum = self.card_num;
        if(threeFlag[cNum]) {

          if(countCard < 3) {
             $(".sel-cards-imgs img:nth-child("+cNum+")").css({
               top: "-=10%"
             });
             countCard++; 
             threeFlag[cNum] = !threeFlag[cNum];         
          }

         
        } else {
          $(".sel-cards-imgs img:nth-child("+cNum+")").css({
            top: "+=10%"
          });
          countCard--;
          threeFlag[cNum] = !threeFlag[cNum];
        }
        console.log("con="+countCard);

        if(countCard == 3) {
          self.threeCardFlag = true;
        } else {
          self.threeCardFlag = false;
        }
      });
    }

    
  }

  cardPredict() {
    if(this.spread_mode == 1) {
      if(this.oneFlag) {
        this.router.navigate(['/tarot/show-cards', {deck_mode:this.deck_mode, spread_mode:this.spread_mode}]);
      }
    }
    if(this.spread_mode == 2) {
      if(this.threeCardFlag) {
        this.router.navigate(['/tarot/show-cards', {deck_mode:this.deck_mode, spread_mode:this.spread_mode}]);
      }
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

}
