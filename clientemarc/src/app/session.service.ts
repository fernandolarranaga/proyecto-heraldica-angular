import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


const BASEURL = "http://localhost:3000";

@Injectable()
export class SessionService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${BASEURL}/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${BASEURL}/login`, user,{withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${BASEURL}/logout`, {withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`,{withCredentials:true})
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${BASEURL}/private`,{withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveService (formApp) {
    return this.http.post(`${BASEURL}/books`,formApp, {withCredentials:true})
      .map(res => res.json())
      .catch(this.handleError);
  }
}
