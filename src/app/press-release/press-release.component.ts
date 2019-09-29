import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.scss']
})
export class PressReleaseComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }


  imagePath;
  prevIndex = -5;
  ngOnInit() {
    let self = this;
   
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(7);
    
    $(".ar-item").hover(function() {
      let ar_index = $('.ar-item').index(this) + 1;
      $(".ar-item span").hover(function() {
        let p_index;
        
        $(".img-hover-zoom--brightness img").css({
          opacity: "0.5",
          transform: "scale(1)"
        });
     
        p_index = $(".ar-item span").index(this) + 1;
        self.prevIndex = p_index;
        console.log("o="+p_index);
        
        self.imagePath = "../../assets/img/press-release/"+p_index+".jpg";
        $(".article_titles").css("background-color", "transparent"); 
        $(".press_title").css("visibility", "hidden");
        $(document).ready(function() {
          $(".img-hover-zoom--brightness img").animate({
            opacity: "1",
            // "scale": "{percent: 100}"
            transform: "scale(1.3)"
          }, 2000);
        });
      
        $(".img-hover-zoom--brightness img").animate({
          opacity: "1",
          // "scale": "{percent: 100}"
          transform: 'scale(' + '1.3' + ')'
        }, 2000);
      }, function() {
        //when leave hover
        self.imagePath = "";
        $(".img-hover-zoom--brightness img").css({
          "opacity": "0.5"
        });
        $(".article_titles").css("background-color", "#DCE6DD"); 
        $(".press_title").css("visibility", "visible");
      });
    });
  }


}
