import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.scss']
})
export class ShowCardsComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private aRoute: ActivatedRoute) { }
  deck_mode;
  deck_folder;
  spread_mode;
  imagePath = [];
  imagePath1;
  imagePath2;
  imagePath3;
  deck_title1;
  deck_title2;
  deck_title3;
  deck_detail1;
  deck_detail2;
  deck_detail3;

  //detail content
  ridercard_txt = [
    {
      title: "THE CHARIOT",
      detail: `111`
    },
    {
      title: "THE DEATH",
      detail: `222`
    },
    {
      title: "THE DEVIL",
      detail: `333`
    },
    {
      title: "THE EMPEROR",
      detail: `444`
    },
    {
      title: "THE EMPRESS",
      detail: `555`
    },
    {
      title: "THE FOOL",
      detail: `666`
    },
    {
      title: "THE HANGED_MAN",
      detail: `777`
    },
    {
      title: "THE HEMIT",
      detail: `888`
    },
    {
      title: "THE HIEROPHANT",
      detail: `999`
    },
    {
      title: "THE HIGHPRIESTESS",
      detail: `10`
    },
    {
      title: "THE JUDGMENT",
      detail: `11`
    },
    {
      title: "THE JUSTICE",
      detail: `12`
    },
    {
      title: "THE LOVERS",
      detail: `13`
    },
    {
      title: "THE MAGICIAN",
      detail: `14`
    },
    {
      title: "THE MOON",
      detail: `15`
    },
    {
      title: "THE STAR",
      detail: `16`
    },
    {
      title: "THE STRENGTH",
      detail: `17`
    },
    {
      title: "THE SUN",
      detail: `18`
    },
    {
      title: "THE TEMPERANCE",
      detail: `19`
    },
    {
      title: "THE TOWER",
      detail: `20`
    },
    {
      title: "THE WHEEL",
      detail: `21`
    },
    {
      title: "THE WORLD",
      detail: `22`
    },
  ];

  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');
    console.log("deck_mode="+this.deck_mode+"spread_mode"+this.spread_mode);
    // Math.floor((Math.random() * 22) + 1);
    if(this.deck_mode == 1) {
      this.deck_folder = "ridercard";
    }

    if(this.deck_mode == 2) {
      this.deck_folder = "hermetic";
    }
    if(this.deck_mode == 3) {
      this.deck_folder = "lenormand";
    }
    if(this.spread_mode == 1) {

    }
    //select three card mode
    if(this.spread_mode == 2) {
      let threeCardNums = [];
      for(let i=1; i<=3; i++) {        
        threeCardNums[i] = Math.floor((Math.random() * 22) + 1);
        console.log("num="+threeCardNums[i]);
        this.imagePath[i] = "assets/img/tarot/"+this.deck_folder+"/"+threeCardNums[i]+".png";
        console.log("path="+this.imagePath[i]);
      }
      this.imagePath1 = this.imagePath[1];
      this.imagePath2 = this.imagePath[2];
      this.imagePath3 = this.imagePath[3];

      if(this.deck_mode == 1) {
        this.deck_title1 = this.ridercard_txt[threeCardNums[1]-1].title;
        this.deck_title2 = this.ridercard_txt[threeCardNums[2]-1].title;
        this.deck_title3 = this.ridercard_txt[threeCardNums[3]-1].title;

        this.deck_detail1 = this.ridercard_txt[threeCardNums[1]-1].detail;
        this.deck_detail2 = this.ridercard_txt[threeCardNums[2]-1].detail;
        this.deck_detail3 = this.ridercard_txt[threeCardNums[3]-1].detail;
      }

    }

    if(this.spread_mode == 3) {
      
    }
  }

}
