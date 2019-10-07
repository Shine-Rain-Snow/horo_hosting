import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }
  booksImgFlag = true;
  booksImgURL;
  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(8);
    let self = this;
    if (this.booksImgURL = this.sunService.getBooksImageURL()) {
      console.log("remote="+this.booksImgURL);
      this.booksImgFlag = false;
    } else {
      console.log("local image");
      this.booksImgFlag = true;
    }
    let circleUpDown = 0;
    $(".books-container").bind("wheel", function (event) {
      
         
          if(event.originalEvent.deltaY < 0) {
            circleUpDown--;
           
            if(circleUpDown < 0) {
              circleUpDown = 0;
              $(".next_circle span").css({visibility: "hidden"});
            } else if(circleUpDown == 0) {
              $(".quarter-circle-top-right").css({visibility: "hidden"}, 100);
              $(".next_circle span").css({visibility: "hidden"});
            } else if(circleUpDown == 1) {
              $(".quarter-circle-bottom-right").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 2) {
              $(".quarter-circle-bottom-left").css({visibility: "hidden"}, 100);
            } else if(circleUpDown == 3) {
              $(".quarter-circle-top-left").css({visibility: "hidden"}, 100);
            }
          }
          if(event.originalEvent.deltaY > 0) {
            circleUpDown++;
            
            if(circleUpDown > 4) {
              circleUpDown = 5;
              $(".next_circle>div").css({visibility:"hidden"});
              self.router.navigate(['/books/books-dream']);
              
            } else if(circleUpDown == 1) {
              $(".next_circle span").css({visibility: "visible"});
              $(".quarter-circle-top-right").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 2) {
              $(".quarter-circle-bottom-right").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 3) {
              $(".quarter-circle-bottom-left").css({visibility: "visible"}, 100);
            } else if(circleUpDown == 4) {
              $(".quarter-circle-top-left").css({visibility: "visible"}, 100);
            }
          }
    });
  }

  getBooksImagePath1() {
   
    return this.booksImgURL[1];
  }

  getBooksImagePath2() {
    return this.booksImgURL[2];
  }

}
