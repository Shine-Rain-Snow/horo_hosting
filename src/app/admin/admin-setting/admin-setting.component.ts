import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { BackendService } from '../../services/backend.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery'; 
@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})
export class AdminSettingComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService,
    private backendService: BackendService) { }
	old_pass;
	new_pass;
	confirm_new_pass;
  admin_pass;
  ngOnInit() {
    this.backendService.getAdminSetting().subscribe((data: any[]) => {
        this.admin_pass = data['results'][0].admin_password;
    });  
  }

  saveNewPass() {
		if(this.new_pass == this.confirm_new_pass) {
      let saveData = {
        old_pass: this.old_pass,
        new_pass: this.new_pass
      };  
      
  		this.backendService.setAdminSetting(saveData).subscribe((data: any[]) => {
        
        if(data['success'] == true) {
          alert("saved seccessfully");
          this.router.navigate(['/admin-login']);
        }
      });
		}
  }

}
