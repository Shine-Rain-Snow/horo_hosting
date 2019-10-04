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
    
    if (this.booksImgURL = this.sunService.getBooksImageURL()) {
      this.booksImgFlag = false;
    } else {
      console.log("local image");
      this.booksImgFlag = true;
    }
  }

  getBooksImagePath1() {
    return this.booksImgURL[1];
  }

  getBooksImagePath2() {
    return this.booksImgURL[2];
  }

}
