import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';

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
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  onIntro() {
    
    this.router.navigate(['/intro']);
    this.sidenavClose.emit();
  }

}
