import { Injectable } from '@angular/core';
import { Globals } from '../shared/globals';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SunProgressService {

  constructor(public globals: Globals) { }

  mIntro;
  mAst;
  mAbout;

  mProgressShow: boolean = false;
  mIntroTitleShow: boolean = true;
  mCurrentPage: number = 0;

  mIntroRefresh: boolean = false;

  mAstVideoURL;

  setAstVideoURL(value) {
    this.mAstVideoURL = value;
  }

  getAstVideoURL() {
    return this.mAstVideoURL;
  }

  setProgressShow(value) {
    this.mProgressShow = value;
  }

  getProgressShow() {
    return this.mProgressShow;
  }


  setIntroTitleShow(value) {
    this.mIntroTitleShow = value;
  }

  getIntroTitleShow() {
    return this.mIntroTitleShow;
  }

  setIntroRefrsh(value) {
    this.mIntroRefresh = value;
  }

  getIntroRefresh() {
    return this.mIntroRefresh;
  }

  setCurrentPage(value) {
    this.mCurrentPage = value;
  }

  getCurrentPage() {
    return this.mCurrentPage;
  }

  setAllZero() {
    this.mIntro = 0;
    this.mAst = 0;
    this.mAbout = 0;
  }

  setIntroVal(value) {
    this.globals.gIntro =  value;
    this.mIntro = value;
  }

  getIntroVal() {
    return this.mIntro;
  }

  setAstVal(value) {
    this.globals.gAst =  value;
    this.mAst = value;
  }

  getAstVal() {
    return this.mAst;
  }

  setAboutVal(value) {
    this.globals.gAbout =  value;
    this.mAbout = value;
  }

  getAboutVal() {
    return this.mAbout;
  }
  
  // public getIntroVal(): any {
  //   const introObservable = new Observable(observer => {
  //          setTimeout(() => {
  //             observer.next(this.globals);
  //          }, 100);
  //   });
  //   return introObservable;
  // }

}
