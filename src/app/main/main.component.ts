import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { 
  	
  }

  ngOnInit() {
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(0);
  	setTimeout(() => {
      this.router.navigate(['/intro']);
      this.sunService.setIntroTitleShow(true);
      this.sunService.setIntroRefrsh(true);
	  }, 4600);
  }

}
