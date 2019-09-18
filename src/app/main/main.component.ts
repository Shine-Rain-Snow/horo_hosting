import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SunProgressService } from '../services/sun-progress.service';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
    private sunService: SunProgressService) { 
  	
  }

  ngOnInit() {
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(0);
  	setTimeout(() => {
      this.router.navigate(['/intro']);
      this.sunService.setIntroTitleShow(true);
	  }, 5000);
  }

}
