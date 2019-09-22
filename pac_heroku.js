//this is heroku setting

{
    "name": "horoscope",
    "version": "0.0.0",
    "scripts": {
      "ng": "ng",
      "start": "node server.js",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e",
      "heroku-postbuild": "ng build --prod"
      
    },
    "private": true,
    "dependencies": {
      "@angular/animations": "^8.2.6",
      "@angular/cdk": "^8.2.0",
      "@angular/common": "~8.2.4",
      "@angular/compiler": "~8.2.4",
      "@angular/core": "~8.2.4",
      "@angular/flex-layout": "^8.0.0-beta.27",
      "@angular/forms": "~8.2.4",
      "@angular/material": "^8.2.0",
      "@angular/platform-browser": "~8.2.4",
      "@angular/platform-browser-dynamic": "~8.2.4",
      "@angular/router": "~8.2.4",
      "bootstrap": "^4.3.1",
      "express": "^4.17.1",
      "hammerjs": "^2.0.8",
      "jquery": "^3.4.1",
      "jquery-mousewheel": "^3.1.13",
      "path": "^0.12.7",
      "rxjs": "~6.4.0",
      "tslib": "^1.10.0",
      "zone.js": "~0.9.1"
    },
    "devDependencies": {
      "@angular-devkit/build-angular": "~0.803.3",
      "@angular/cli": "^8.3.4",
      "@angular/compiler-cli": "^8.2.6",
      "@angular/language-service": "~8.2.4",
      "@types/jasmine": "~3.3.8",
      "@types/jasminewd2": "~2.0.3",
      "@types/node": "~8.9.4",
      "codelyzer": "^5.0.0",
      "enhanced-resolve": "^3.3.0",
      "jasmine-core": "~3.4.0",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~4.1.0",
      "karma-chrome-launcher": "~2.2.0",
      "karma-coverage-istanbul-reporter": "~2.0.1",
      "karma-jasmine": "~2.0.1",
      "karma-jasmine-html-reporter": "^1.4.0",
      "protractor": "~5.4.0",
      "ts-node": "~7.0.0",
      "tslint": "~5.15.0",
      "typescript": "~3.5.3"
    },
    "engines": {
      "node": "10.16.2",
      "npm": "6.9.0"
    },
    "typescript": "~3.5.3"
  }
  


  // this is local dev env

  
  {
    "name": "horoscope",
    "version": "0.0.0",
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
      "@angular/animations": "^8.2.6",
      "@angular/cdk": "^8.2.0",
      "@angular/common": "~8.2.4",
      "@angular/compiler": "~8.2.4",
      "@angular/core": "~8.2.4",
      "@angular/flex-layout": "^8.0.0-beta.27",
      "@angular/forms": "~8.2.4",
      "@angular/material": "^8.2.0",
      "@angular/platform-browser": "~8.2.4",
      "@angular/platform-browser-dynamic": "~8.2.4",
      "@angular/router": "~8.2.4",
      "bootstrap": "^4.3.1",
      "hammerjs": "^2.0.8",
      "jquery": "^3.4.1",
      "jquery-mousewheel": "^3.1.13",
      "rxjs": "~6.4.0",
      "tslib": "^1.10.0",
      "zone.js": "~0.9.1"
    },
    "devDependencies": {
      "@angular-devkit/build-angular": "~0.803.3",
      "@angular/cli": "~8.3.3",
      "@angular/compiler-cli": "~8.2.4",
      "@angular/language-service": "~8.2.4",
      "@types/node": "~8.9.4",
      "@types/jasmine": "~3.3.8",
      "@types/jasminewd2": "~2.0.3",
      "codelyzer": "^5.0.0",
      "jasmine-core": "~3.4.0",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~4.1.0",
      "karma-chrome-launcher": "~2.2.0",
      "karma-coverage-istanbul-reporter": "~2.0.1",
      "karma-jasmine": "~2.0.1",
      "karma-jasmine-html-reporter": "^1.4.0",
      "protractor": "~5.4.0",
      "ts-node": "~7.0.0",
      "tslint": "~5.15.0",
      "typescript": "~3.5.3"
    }
  }