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
  spread_mode;
  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');
    console.log(this.deck_mode+this.spread_mode);
    if(this.deck_mode == 1) {

    }
    if(this.deck_mode == 2) {

    }
    if(this.deck_mode == 3) {

    }
    if(this.spread_mode == 1) {

    }
    if(this.spread_mode == 2) {
      
    }
    if(this.spread_mode == 3) {
      
    }
  }

}
