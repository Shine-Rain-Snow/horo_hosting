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
    
  imgRatios = [
    {//1
      width: 5868,
      height: 4073
    },
    {//2
      width: 2834,
      height: 3896
    },
    {//3
      width: 1504,
      height: 2214
    },
    {//4
      width: 1000,
      height: 1370
    },

    {//5
      width: 2000,
      height: 2559
    },
    {//6
      width: 1000,
      height: 707
    },
    {//7
      width: 2625,
      height: 3296
    },
    {//8
      width: 1654,
      height: 2338
    },
    {//9
      width: 1,
      height: 1
    },

    {//10
      width: 1228,
      height: 4328
    },
     {//11
      width: 4158,
      height: 3192
    },
    {//12
      width: 800,
      height: 687
    },
    {//13
      width: 3286,
      height: 4181
    },
    {//14
      width: 1000,
      height: 615
    },
    {//15
      width: 1000,
      height: 694
    },

    {//16
      width: 526,
      height: 697
    },

  ];
  ngOnInit() {
    let self = this;
   
    this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(7);
    
    $(".ar-item").hover(function() {
      let ar_index = $('.ar-item').index(this) + 1;
     
      $(".ar-item span").hover(function() {
        let p_index;
        
      
        p_index = $(".ar-item span").index(this) + 1;
        self.prevIndex = p_index;
        self.imagePath = "../../assets/img/press-release/"+p_index+".jpg";
        $(".article_titles").css("background-color", "transparent"); 
        $(".article_container").css("color", "white");
        $(".press_title").css("visibility", "hidden");
        
        // text remove animate part
        $(".ar-item span").finish();
        $(".ar-item span").css({opacity: "1"});
        $(".ar-item span").animate({
          opacity: "0"
        }, {
          duration: 2000,
          complete: function() {
            
          },
        });

        //image opacity part
        let imgWidth, imgHeight;
        let zone_width      
        let img_zone_height = $(".img_zone").height();
        
        
        let cur_ratio = self.imgRatios[p_index-1].width/self.imgRatios[p_index-1].height;
        
        zone_width = img_zone_height*cur_ratio;
        
        $(".img_zone").css({width: zone_width});
      
        $(".img_zone img").finish();
        $(".img_zone img").css({
          opacity: "0.2",
          width: zone_width*1.2,
          height: img_zone_height*1.2,
          top: -zone_width*0.1,
          left: -img_zone_height*0.1,
        });
        $(".img_zone img").animate({
          opacity: "1",
          width: zone_width,
          height: img_zone_height,
          top: "0px",
          left: "0px",
        }, 
        {
          duration: 2600,
          easing: "swing"
        });

       
        
      

      }, function() {
        //when leave .ar-item span
        self.imagePath = "";
        //console.log("ar item span leave");
        $(".article_titles").css("background-color", "#7C5E62"); 
        $(".article_container").css("color", "black");
        $(".press_title").css("visibility", "visible");
        $(".ar-item span").finish();
        $(".ar-item").css({opacity: "1"});
        
      });
    },
    function() {
      //when leave ar-item,
      // console.log("ar item");
      $(".ar-item span").finish();
      $(".ar-item span").css({opacity: "1"});
    });
  }

 

}
