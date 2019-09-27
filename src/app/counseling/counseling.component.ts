import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 
@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.scss']
})
export class CounselingComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService) { }

  ngOnInit() {
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(5);
    this.sunService.setShowMenu(true);
  }

}
