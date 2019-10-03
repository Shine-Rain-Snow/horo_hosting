import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-blackmenu',
  templateUrl: './blackmenu.component.html',
  styleUrls: ['./blackmenu.component.scss']
})
export class BlackmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
  	$(".black-menu").animate({
  		width: "98%",
  		height: "98%"
  	}, {
      duration: 600,
      easing: "swing",
      complete: function() {
        $(".menu-items").css({
          visibility: "visible"
        });
      }
    } );
  }

  hiddenMenu() {
    $(".menu-items").css({
          visibility: "hidden"
    });
	$(".black-menu").animate({
  		width: "20%",
  		height: "7%"
  	},{
      duration: 600,
      easing: "swing",
      complete: function() {
        
      }
    }  );
  }

}
