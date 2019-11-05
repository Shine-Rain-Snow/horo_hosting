import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { BackendService } from '../../services/backend.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery'; 
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-sign-articles',
  templateUrl: './sign-articles.component.html',
  styleUrls: ['./sign-articles.component.scss']
})
export class SignArticlesComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService,
    private backendService: BackendService) { }

  careerStr;
  loveStr;
  mSunSignID = 0;
  selectedStatusId;
  ngOnInit() {

  }

  onSaveText() {
  	  
	let saveData = {
  		"sunSignID": this.mSunSignID,
  		"career": this.careerStr,
  		"love": this.loveStr
  	};
  	
  	this.backendService.saveSunSignText(saveData).subscribe((data: any[]) => {
      alert("saved seccessfully");
    });  
  }

  setShowText(data) {
  	this.careerStr = data['results'][0].career;
	  this.loveStr = data['results'][0].love;
  }

  setSelectedStatus(sunSignID) {
  	
  	this.mSunSignID = sunSignID;
  	switch (sunSignID) {
  		case "1":
  			this.backendService.getSunSignText(1).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "2":
  			this.backendService.getSunSignText(2).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "3":
  			this.backendService.getSunSignText(3).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "4":
  			this.backendService.getSunSignText(4).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "5":
  			this.backendService.getSunSignText(5).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "6":
  			this.backendService.getSunSignText(6).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "7":
  			this.backendService.getSunSignText(7).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "8":
  			this.backendService.getSunSignText(8).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "9":
  			this.backendService.getSunSignText(9).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "10":
  			this.backendService.getSunSignText(10).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "11":
  			this.backendService.getSunSignText(11).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		case "12":
  			this.backendService.getSunSignText(12).subscribe((data: any[]) => { this.setShowText(data); });  
  			break;
  		default:
  			// code...
  			break;
  	}
  }

  config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '20vh',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        // {class: 'Oswald', name: 'Oswald'},
        // {class: 'Oswald light', name: 'Oswald light'},
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
  };
}
