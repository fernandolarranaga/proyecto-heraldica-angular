import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment } from '../environments/environment';


const BASEURL:string = environment.baseurl;

@Injectable()
export class SessionService {
  options = {withCredentials:true};
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${BASEURL}/signup`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${BASEURL}/login`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${BASEURL}/logout`,{},this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`,this.options)
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${BASEURL}/private`,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveService (formApp) {
    return this.http.post(`${BASEURL}/books`,formApp, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findBooks () {
    return this.http.get(`${BASEURL}/books/`,this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  getBookDetail(bookId) {
    return this.http.get(`${BASEURL}/books/${bookId}`,this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  remove(bookId) {
    return this.http.delete(`${BASEURL}/books/${bookId}`)
      .map((res) => res.json())
      .catch(this.handleError);

  }

}
