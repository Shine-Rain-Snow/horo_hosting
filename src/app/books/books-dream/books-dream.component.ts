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
  booksImgFlag = true;
  booksImgURL;
  ngOnInit() {
    let self = this;
  	this.sunService.setShowMenu(true);
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(8);

    if (this.booksImgURL = this.sunService.getBooksImageURL()) {
      this.booksImgFlag = false;
      console.log(this.booksImgURL[3]);
    } else {
      console.log("local image");
      this.booksImgFlag = true;
    }
    let circleUpDown = 0;
    $(".books-dream-container").bind("wheel", function (event) {         
          if(event.originalEvent.deltaY < 0) {
            circleUpDown--;
            
            if(circleUpDown < 0) {
              circleUpDown = 0;
              $(".next_circle1 span").css({visibility: "hidden"});
            } else if(circleUpDown == 0) {
              $(".quarter-circle-top-right1").css({visibility: "hidden"}, 100);
              $(".next_circle1 span").css({visibility: "hidden"});
            } else if(circleUpDown == 1) {
              $(".quarter-circle-bottom-right1").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 2) {
              $(".quarter-circle-bottom-left1").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 3) {
              $(".quarter-circle-top-left1").css({visibility: "hidden"}, 100);
            }
          }
          if(event.originalEvent.deltaY > 0) {
            circleUpDown++;
            console.log("scroll up");
            if(circleUpDown > 4) {
              circleUpDown = 5;
              $(".next_circle1>div").css({visibility:"hidden"});
              self.router.navigate(['/books']);
              
            } else if(circleUpDown == 1) {
              $(".next_circle1 span").css({visibility: "visible"});
              $(".quarter-circle-top-right1").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 2) {
              $(".quarter-circle-bottom-right1").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 3) {
              $(".quarter-circle-bottom-left1").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 4) {
              $(".quarter-circle-top-left1").css({visibility: "visible"}, 100);
            }
          }
    });
  }

  getBooksImagePath3() {
    return this.booksImgURL[3];
  }

  getBooksImagePath4() {
    return this.booksImgURL[4];
  }

}
