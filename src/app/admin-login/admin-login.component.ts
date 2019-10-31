import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { BackendService } from '../services/backend.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 
import {NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService,
    private authService: AuthService,
    private backendService: BackendService) { }
    adminName;
    adminPass;
  ngOnInit() {
  	
  }

  onAdminLogin(f: NgForm) {
  	let adminName = f.value.adminName;
    let adminPass = f.value.adminPass;
    let adminData = {
      adminName: adminName,
      adminPass: adminPass
    }
    this.backendService.loginAdmin(adminData).subscribe((data: any[]) => {
        
      if(data['success'] == true) {
        this.authService.login();
        setTimeout(() => {
          this.router.navigate(['/admin']);
        },100);
      }
    });
   
  }

}
