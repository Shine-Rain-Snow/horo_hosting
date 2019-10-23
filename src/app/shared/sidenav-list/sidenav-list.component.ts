import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals) { }

  ngOnInit() {
    
    let i = 0;
    let j = 0;
    let k = 0;
    const htmlText = '<div style="width:80%; border-bottom: 1px solid white;"></div>';
   
    $(".nav-list .item_container").hover(function() {
      i = $(".item_container").index(this); 
      
      j = i + 1;
      $(".item_container:nth-child("+j+") .num").empty()
      .html(htmlText);
      
    }, function() {
      k = i + 1;
      $(".item_container:nth-child("+j+") .num").empty().text("0"+k+".");
    });
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  onIntro() {
    this.sunService.setAllZero();
    this.router.navigate(['/intro']);
    this.sidenavClose.emit();
  }

  onAst() {
    this.sunService.setAllZero();
    this.router.navigate(['/astrology']);
    this.sidenavClose.emit();
  }

  onAbout() {
    this.sunService.setAllZero();
    this.router.navigate(['/about']);
    this.sidenavClose.emit();
  }

  onContact() {
    this.sunService.setAllZero();
    this.router.navigate(['/contact']);
    this.sidenavClose.emit();
  }

  onCounseling() {
    this.sunService.setAllZero();
    this.router.navigate(['/booksession']);
    this.sidenavClose.emit();
  }

  onTarot() {
    this.sunService.setAllZero();
    this.router.navigate(['/tarot']);
    this.sidenavClose.emit();
  }

  onPress() {
    this.sunService.setAllZero();
    this.router.navigate(['/press-release']);
    this.sidenavClose.emit();
  }

  onBooks() {
    this.sunService.setAllZero();
    this.router.navigate(['/books']);
    this.sidenavClose.emit();
  }

}
