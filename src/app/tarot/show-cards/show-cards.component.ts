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

  //detail rider card content
  riderCard_txt = [
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

  //hermetic card detail
  hermeticCard_txt = [
    {
      title: "THE CHARIOT",
      detail: `typing here detail avout chariot`
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

  //lernomand card detail
  lenormandCard_txt = [
    {
      title: "typing here title",
      detail: `typing here detail avout chariot`
    },
    {
      title: "222",
      detail: `222`
    },
    {
      title: "333",
      detail: `333`
    },
    {
      title: "444",
      detail: `444`
    },
    {
      title: "555",
      detail: `555`
    },
    {
      title: "666",
      detail: `666`
    },
    {
      title: "777",
      detail: `777`
    },
    {
      title: "888",
      detail: `888`
    },
    {
      title: "999",
      detail: `999`
    },
    {
      title: "10",
      detail: `10`
    },
    {
      title: "11",
      detail: `11`
    },
    {
      title: "12",
      detail: `12`
    },
    {
      title: "13",
      detail: `13`
    },
    {
      title: "14",
      detail: `14`
    },
    {
      title: "15",
      detail: `15`
    },
    {
      title: "16",
      detail: `16`
    },
    {
      title: "17",
      detail: `17`
    },
    {
      title: "18",
      detail: `18`
    },
    {
      title: "19",
      detail: `19`
    },
    {
      title: "20",
      detail: `20`
    },
    {
      title: "21",
      detail: `21`
    },
    {
      title: "22",
      detail: `22`
    },
    {
      title: "23",
      detail: `23`
    },
    {
      title: "24",
      detail: `24`
    },
    {
      title: "25",
      detail: `25`
    },
    {
      title: "26",
      detail: `26`
    },
    {
      title: "27",
      detail: `27`
    },
    {
      title: "28",
      detail: `28`
    },
    {
      title: "29",
      detail: `29`
    },
    {
      title: "30",
      detail: `30`
    },
    {
      title: "31",
      detail: `31`
    },
    {
      title: "32",
      detail: `32`
    },
    {
      title: "33",
      detail: `33`
    },
    {
      title: "34",
      detail: `34`
    },
    {
      title: "35",
      detail: `35`
    },
    {
      title: "36",
      detail: `36`
    },
  ];

  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');
    console.log("deck_mode="+this.deck_mode+"spread_mode"+this.spread_mode);
    
    let threeCardNums = [];

    if(this.deck_mode == 1) {
      this.deck_folder = "ridercard";
      for(let i=1; i<=3; i++) {        
        threeCardNums[i] = Math.floor((Math.random() * 22) + 1);
        this.imagePath[i] = "assets/img/tarot/"+this.deck_folder+"/"+threeCardNums[i]+".png";
      }
    }

    if(this.deck_mode == 2) {
      this.deck_folder = "hermetic";
      for(let i=1; i<=3; i++) {        
        threeCardNums[i] = Math.floor((Math.random() * 22) + 1);
        this.imagePath[i] = "assets/img/tarot/"+this.deck_folder+"/"+threeCardNums[i]+".jpg";
      }
    }
    if(this.deck_mode == 3) {
      this.deck_folder = "lenormand";
      for(let i=1; i<=3; i++) {        
        threeCardNums[i] = Math.floor((Math.random() * 36) + 1);
        this.imagePath[i] = "assets/img/tarot/"+this.deck_folder+"/"+threeCardNums[i]+".jpg";
      }
    }
      
    this.imagePath1 = this.imagePath[1];
    this.imagePath2 = this.imagePath[2];
    this.imagePath3 = this.imagePath[3];

    if(this.deck_mode == 1) {
      this.deck_title1 = this.riderCard_txt[threeCardNums[1]-1].title;
      this.deck_title2 = this.riderCard_txt[threeCardNums[2]-1].title;
      this.deck_title3 = this.riderCard_txt[threeCardNums[3]-1].title;

      this.deck_detail1 = this.riderCard_txt[threeCardNums[1]-1].detail;
      this.deck_detail2 = this.riderCard_txt[threeCardNums[2]-1].detail;
      this.deck_detail3 = this.riderCard_txt[threeCardNums[3]-1].detail;
    }

    if(this.deck_mode == 2 ) {
      this.deck_title1 = this.hermeticCard_txt[threeCardNums[1]-1].title;
      this.deck_title2 = this.hermeticCard_txt[threeCardNums[2]-1].title;
      this.deck_title3 = this.hermeticCard_txt[threeCardNums[3]-1].title;

      this.deck_detail1 = this.hermeticCard_txt[threeCardNums[1]-1].detail;
      this.deck_detail2 = this.hermeticCard_txt[threeCardNums[2]-1].detail;
      this.deck_detail3 = this.hermeticCard_txt[threeCardNums[3]-1].detail;
    }

    if(this.deck_mode == 3) {
      this.deck_title1 = this.lenormandCard_txt[threeCardNums[1]-1].title;
      this.deck_title2 = this.lenormandCard_txt[threeCardNums[2]-1].title;
      this.deck_title3 = this.lenormandCard_txt[threeCardNums[3]-1].title;

      this.deck_detail1 = this.lenormandCard_txt[threeCardNums[1]-1].detail;
      this.deck_detail2 = this.lenormandCard_txt[threeCardNums[2]-1].detail;
      this.deck_detail3 = this.lenormandCard_txt[threeCardNums[3]-1].detail;
    }
  }

  goSelectCards() {
    this.router.navigate(['/tarot/select-cards', {deck_mode:this.deck_mode, spread_mode:this.spread_mode}]); 
  }

}
