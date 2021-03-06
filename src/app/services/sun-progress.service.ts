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

  mIntroVideoURL;
  mIntroVideoURL1;
  mIntroImageURL;
  mAstVideoURL;
  mContactVideoURL;
  mAboutVideoURL;
  mAboutImageURL;
  mHistoryImageURL;
  mPressImageURL;
  mBooksImageURL
  mShowMenu;
  mCelticTenCardNum;
  mCounselingImageURL;
  mTarotImageURL;
  mRiderImageURL;
  mHermeticImageURL;
  mLenormandImageURL;

  setCelticTenCardNum(value) {
    this.mCelticTenCardNum = value;
  }

  getCelticTenCardNum() {
    return this.mCelticTenCardNum;
  }
  
  getShowMenu() {
    return this.mShowMenu;
  }

  setShowMenu(value) {
    this.mShowMenu = value;
  }

  setRiderImageURL(value) {
    this.mRiderImageURL = value;
  }

  getRiderImageURL() {
    return this.mRiderImageURL;
  }

  setHermeticImageURL(value) {
    this.mHermeticImageURL = value;
  }

  getHermeticImageURL() {
    return this.mHermeticImageURL;
  }

  setLenormandImageURL(value) {
    this.mLenormandImageURL = value;
  }

  getLenormandImageURL() {
    return this.mLenormandImageURL;
  }

  setTarotImageURL(value) {
    this.mTarotImageURL = value;
  }

  getTarotImageURL() {
    return this.mTarotImageURL;
  }

  setCounselingImageURL(value) {
    this.mCounselingImageURL = value;
  }

  getCounselingImageURL() {
    return this.mCounselingImageURL;
  }

  setIntroVideoURL(value) {
    this.mIntroVideoURL = value;
  }

  getIntroVideoURL() {
    return this.mIntroVideoURL;
  }

  setIntroImageURL(value) {
    this.mIntroImageURL = value;
  }

  getIntroImageURL() {
    return this.mIntroImageURL;
  }

  setIntroVideoURL1(value) {
    this.mIntroVideoURL1 = value;
  }

  getIntroVideoURL1() {
    return this.mIntroVideoURL1;
  }

  setAstVideoURL(value) {
    this.mAstVideoURL = value;
  }

  getAstVideoURL() {
    return this.mAstVideoURL;
  }

  setAboutVideoURL(value) {
    this.mAboutVideoURL = value;
  }

  getAboutVideoURL() {
    return this.mAboutVideoURL;
  }

  setAboutImageURL(value) {
    this.mAboutImageURL = value;
  }

  getAboutImageURL() {
    return this.mAboutImageURL;
  }
  
  getHistoryImageURL() {
    return this.mHistoryImageURL;
  }

  setHistoryImageURL(value) {
    this.mHistoryImageURL = value;
  }  

  setContactVideoURL(value) {
    this.mContactVideoURL = value;
  }

  getContactVideoURL() {
    return this.mContactVideoURL;
  }

  setPressImageURL(value) {
    this.mPressImageURL = value;
  }

  getPressImageURL() {
    return this.mPressImageURL;
  }

  setBooksImageURL(value) {
    this.mBooksImageURL = value;
  }

  getBooksImageURL() {
    return this.mBooksImageURL;
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
