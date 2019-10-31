import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService,
    private backendService: BackendService,
    private authService: AuthService) { }
  adminFlag = 0;
  ngOnInit() {
    let self = this;
    $(".session-portal").click(function() {
      self.adminFlag = 0;
      $(".session-portal a").addClass("active");
      $(".article-manager a").removeClass("active");
      $(".admin-setting a").removeClass("active");
    });
    $(".article-manager").click(function() {
      self.adminFlag = 1;
      $(".session-portal a").removeClass("active");
      $(".article-manager a").addClass("active");
      $(".admin-setting a").removeClass("active");
    });
    $(".admin-setting").click(function() {
      self.adminFlag = 2;
      $(".session-portal a").removeClass("active");
      $(".article-manager a").removeClass("active");
      $(".admin-setting a").addClass("active");
    });
    
  }

  ngOnDestroy() {
    this.authService.logout();
  }

  

}
