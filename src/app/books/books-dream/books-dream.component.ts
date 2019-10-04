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
  }

  getBooksImagePath3() {
    return this.booksImgURL[3];
  }

  getBooksImagePath4() {
    return this.booksImgURL[4];
  }

}
