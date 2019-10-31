import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { BackendService } from '../../services/backend.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-session-portal',
  templateUrl: './session-portal.component.html',
  styleUrls: ['./session-portal.component.scss']
})
export class SessionPortalComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService,
    private backendService: BackendService) { }
  tableData;
  dataSource;
  pageSize = 20;
  selectedMonthId;
  selectedYear;
  displayedColumns: string[] = ['ID', 'first_name', 'last_name', 'email', 'phone', 'city', 'country', 'reg_date', 'amount', 'status'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
  	this.backendService.getAllBookLists().subscribe((data: any[]) => {
      this.tableData = (data['results']) ;
      
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.tableData);
      this.dataSource.paginator = this.paginator
    });  
  }

  getYearMonth() {
    if(typeof(this.selectedYear) === 'undefined' || !this.selectedYear) {
      
        this.backendService.getAllBookLists().subscribe((data: any[]) => {
        this.tableData = (data['results']) ;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.tableData);
        this.dataSource.paginator = this.paginator
      });  
    }

    if(this.selectedYear > 1970) {

      if(this.selectedMonthId > 0 && this.selectedMonthId < 13 ) {
        console.log("this year"+this.selectedYear);
      } else {
        this.selectedMonthId = 0;
      }
      let dateParams = {
        'year': this.selectedYear,
        'month': this.selectedMonthId
      };
      this.backendService.getDateSearch(dateParams).subscribe((data: any[]) => {
       this.tableData = (data['results']) ;
       this.dataSource = new MatTableDataSource<PeriodicElement>(this.tableData);
       this.dataSource.paginator = this.paginator
      }); 

    }
  }
}

export interface PeriodicElement {
  ID: Number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  reg_date: string;
  amount: string;
  status: string;
}

