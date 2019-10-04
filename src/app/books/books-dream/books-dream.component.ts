import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-books-dream',
  templateUrl: './books-dream.component.html',
  styleUrls: ['./books-dream.component.scss']
})
export class BooksDreamComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }

  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(8);
  }

}
