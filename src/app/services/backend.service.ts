import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }
  
  public getAllBookLists(){
    return this.httpClient.get("/api/books/");
  }

  public insertBookOrder(bookOrder) {
  	return this.httpClient.post("/api/books/", bookOrder);
  }

  public getSunSignText(order) {
  	let params = new HttpParams().set('order', order);
  	return this.httpClient.get("/api/articles/", { params: params });
  }

  public getSunSignALLText() {
  	return this.httpClient.get("/api/articles/all");
  }

  public saveSunSignText(saveData) {
  	const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  	return this.httpClient.post("/api/articles/", saveData);
  }

  public getDateSearch(dateSearch) {
    //let params = new HttpParams().set('params', dateSearch);
    return this.httpClient.get("/api/books/dateSearch", { params: dateSearch });
  }

  public getAdminSetting() {
    return this.httpClient.get("/api/admin/");
  }

  public setAdminSetting(saveData) {
    return this.httpClient.post("/api/admin/", saveData);
  }

  public loginAdmin(adminData) {
    return this.httpClient.get("/api/admin/login", { params: adminData });
  }
}
